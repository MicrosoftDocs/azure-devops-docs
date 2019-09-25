---
ms.prod: devops
title: Running a self-hosted agent in Docker
ms.topic: conceptual
description: Instructions for running your pipelines agent in Docker
ms.technology: devops-cicd
ms.assetid: e34461fc-8e77-4c94-8f49-cf604a925a19
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 07/09/2019
monikerRange: '>= azure-devops-2019'
---

# Running a self-hosted agent in Docker

You can set up an Azure Pipelines self-hosted agent to run inside a Windows Server Core (for Windows hosts), or Ubuntu container (for Linux hosts) with Docker.
This is useful when you want to run agents with some kind of outer orchestration, such as [Azure Container Instances](/azure/container-instances/).
We'll walk through a complete container example, including handling agent self-update.

Both [Windows](#windows) and [Linux](#linux) are supported as container hosts. 
You'll pass a few [environment variables](#environment-variables) to `docker run` which configure the agent to connect to Azure Pipelines or Azure DevOps Server.
Finally, you'll want to [customize the container](#adding-tools-and-customizing-the-container) to suit your needs.

::: moniker range="azure-devops-2019"

This feature requires agent version 2.149 or higher.
Azure DevOps 2019 did not ship with a compatible agent version.
However, you can [upload the correct agent package to your application tier](agents.md#can-i-update-my-v2-agents-that-are-part-of-an-azure-devops-server-pool) if you want to run Dockerized agents.

::: moniker-end

## Windows

### Enable Hyper-V

Hyper-V is not enabled by default on Windows.
In order to provide isolation between containers, it must be enabled.
Otherwise, Docker for Windows won't start.

* [Enable Hyper-V on Windows 10](/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
* [Enable Hyper-V on Windows Server 2016](/windows-server/virtualization/hyper-v/get-started/install-the-hyper-v-role-on-windows-server)

> [!NOTE]
> Virtualization must be enabled on your machine.
> It is typically enabled by default.
> However, if Hyper-V install fails, refer to your system documentation for how to enable virtualization.

### Install Docker for Windows

If using Windows 10, you can [install Docker Community Edition](https://docs.docker.com/docker-for-windows/install).
On Windows Server 2016, [install Docker Enterprise Edition](https://docs.docker.com/install/windows/docker-ee).

### Switch Docker to use Windows containers

By default, Docker for Windows is configured to use Linux Containers. To allow running the Windows container, please verify that Docker for Windows [is running the Windows daemon](https://docs.docker.com/docker-for-windows/#switch-between-windows-and-linux-containers).

### Create and build the Dockerfile

Next, we'll create the Dockerfile.

1. Open a command prompt
2. Create a new directory:

    ```shell
    mkdir C:\dockeragent
    ```

3. Change directories to this new directory:

    ```shell
    cd C:\dockeragent
    ```

4. Save the following content to a file called `C:\dockeragent\Dockerfile` (no file extension):

    ```docker
    FROM mcr.microsoft.com/windows/servercore:ltsc2019
    
    WORKDIR /azp
    
    COPY start.ps1 .
    
    CMD powershell .\start.ps1
    ```

5. Save the following content to `C:\dockeragent\start.ps1`:

    ```powershell
    if (-not (Test-Path Env:AZP_URL)) {
      Write-Error "error: missing AZP_URL environment variable"
      exit 1
    }
    
    if (-not (Test-Path Env:AZP_TOKEN_FILE)) {
      if (-not (Test-Path Env:AZP_TOKEN)) {
        Write-Error "error: missing AZP_TOKEN environment variable"
        exit 1
      }
    
      $Env:AZP_TOKEN_FILE = "\azp\.token"
      $Env:AZP_TOKEN | Out-File -FilePath $Env:AZP_TOKEN_FILE
    }
    
    Remove-Item Env:AZP_TOKEN
    
    if (-not (Test-Path Env:AZP_WORK)) {
      New-Item $Env:AZP_WORK -ItemType directory | Out-Null
    }
    
    New-Item "\azp\agent" -ItemType directory | Out-Null
    
    # Let the agent ignore the token env variables
    $Env:VSO_AGENT_IGNORE = "AZP_TOKEN,AZP_TOKEN_FILE"
    
    Set-Location agent
    
    Write-Host "1. Determining matching Azure Pipelines agent..." -ForegroundColor Cyan
    
    $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$(Get-Content ${Env:AZP_TOKEN_FILE})"))
    $package = Invoke-RestMethod -Headers @{Authorization=("Basic $base64AuthInfo")} "$(${Env:AZP_URL})/_apis/distributedtask/packages/agent?platform=win-x64&`$top=1"
    $packageUrl = $package[0].Value.downloadUrl
    
    Write-Host $packageUrl
    
    Write-Host "2. Downloading and installing Azure Pipelines agent..." -ForegroundColor Cyan
    
    $wc = New-Object System.Net.WebClient
    $wc.DownloadFile($packageUrl, "$(Get-Location)\agent.zip")
    
    Expand-Archive -Path "agent.zip" -DestinationPath "\azp\agent"
    
    try
    {
      Write-Host "3. Configuring Azure Pipelines agent..." -ForegroundColor Cyan
      
      .\config.cmd --unattended `
        --agent "$(if (Test-Path Env:AZP_AGENT_NAME) { ${Env:AZP_AGENT_NAME} } else { ${Env:computername} })" `
        --url "$(${Env:AZP_URL})" `
        --auth PAT `
        --token "$(Get-Content ${Env:AZP_TOKEN_FILE})" `
        --pool "$(if (Test-Path Env:AZP_POOL) { ${Env:AZP_POOL} } else { 'Default' })" `
        --work "$(if (Test-Path Env:AZP_WORK) { ${Env:AZP_WORK} } else { '_work' })" `
        --replace
      
      Write-Host "4. Running Azure Pipelines agent..." -ForegroundColor Cyan
      
      .\run.cmd
    }
    finally
    {
      Write-Host "Cleanup. Removing Azure Pipelines agent..." -ForegroundColor Cyan
      
      .\config.cmd remove --unattended `
        --auth PAT `
        --token "$(Get-Content ${Env:AZP_TOKEN_FILE})"
    }
    ```

6. Run the following command within that directory:

    ```shell
    docker build -t dockeragent:latest .
    ```

    This command builds the Dockerfile in the current directory.

    The final image is tagged `dockeragent:latest`.
    You can easily run it in a container as `dockeragent`, since the `latest` tag is the default if no tag is specified.

### Start the image

Now that you have created an image, you can spin up a container.

1. Open a command prompt
2. Run the container. This will install the latest version of the agent, configure it, and run the agent targeting the `Default` pool of a specified Azure DevOps or Azure DevOps Server instance of your choice:

    ```shell
    docker run -e AZP_URL=<Azure DevOps instance> -e AZP_TOKEN=<PAT token> -e AZP_AGENT_NAME=mydockeragent dockeragent:latest
    ```

You can optionally control the pool and agent work directory using additional [environment variables](#environment-variables).

## Linux

### Install Docker

Depending on your Linux Distribution, you can either install [Docker Community Edition](https://docs.docker.com/install/) or [Docker Enterprise Edition](https://docs.docker.com/ee/supported-platforms/).

### Create and build the Dockerfile

Next, we'll create the Dockerfile.

1. Open a terminal
2. Create a new directory (recommended):

    ```shell
    mkdir ~/dockeragent
    ```

3. Change directories to this new directory:

    ```shell
    cd ~/dockeragent
    ```

4. Save the following content to `~/dockeragent/Dockerfile`:

    ```docker
    FROM ubuntu:16.04

    # To make it easier for build and release pipelines to run apt-get,
    # configure apt to not require confirmation (assume the -y argument by default)
    ENV DEBIAN_FRONTEND=noninteractive
    RUN echo "APT::Get::Assume-Yes \"true\";" > /etc/apt/apt.conf.d/90assumeyes

    RUN apt-get update \
    && apt-get install -y --no-install-recommends \
            ca-certificates \
            curl \
            jq \
            git \
            iputils-ping \
            libcurl3 \
            libicu55 \
            libunwind8 \
            netcat

    WORKDIR /azp

    COPY ./start.sh .
    RUN chmod +x start.sh

    CMD ["./start.sh"]
    ```

> [!NOTE]
> Tasks may depend on executables that your container is expected to provide.
> For instance, you must add the `zip` and `unzip` packages
> to the `RUN apt-get` command in order to run the `ArchiveFiles` and `ExtractFiles` tasks.

5. Save the following content to `~/dockeragent/start.sh`, making sure to use Unix-style (LF) line endings:

    ```shell
    #!/bin/bash
    set -e

    if [ -z "$AZP_URL" ]; then
      echo 1>&2 "error: missing AZP_URL environment variable"
      exit 1
    fi

    if [ -z "$AZP_TOKEN_FILE" ]; then
      if [ -z "$AZP_TOKEN" ]; then
        echo 1>&2 "error: missing AZP_TOKEN environment variable"
        exit 1
      fi

      AZP_TOKEN_FILE=/azp/.token
      echo -n $AZP_TOKEN > "$AZP_TOKEN_FILE"
    fi

    unset AZP_TOKEN

    if [ -n "$AZP_WORK" ]; then
      mkdir -p "$AZP_WORK"
    fi

    rm -rf /azp/agent
    mkdir /azp/agent
    cd /azp/agent

    export AGENT_ALLOW_RUNASROOT="1"

    cleanup() {
      if [ -e config.sh ]; then
        print_header "Cleanup. Removing Azure Pipelines agent..."

        ./config.sh remove --unattended \
          --auth PAT \
          --token $(cat "$AZP_TOKEN_FILE")
      fi
    }

    print_header() {
      lightcyan='\033[1;36m'
      nocolor='\033[0m'
      echo -e "${lightcyan}$1${nocolor}"
    }

    # Let the agent ignore the token env variables
    export VSO_AGENT_IGNORE=AZP_TOKEN,AZP_TOKEN_FILE

    print_header "1. Determining matching Azure Pipelines agent..."

    AZP_AGENT_RESPONSE=$(curl -LsS \
      -u user:$(cat "$AZP_TOKEN_FILE") \
      -H 'Accept:application/json;api-version=3.0-preview' \
      "$AZP_URL/_apis/distributedtask/packages/agent?platform=linux-x64")

    if echo "$AZP_AGENT_RESPONSE" | jq . >/dev/null 2>&1; then
      AZP_AGENTPACKAGE_URL=$(echo "$AZP_AGENT_RESPONSE" \
        | jq -r '.value | map([.version.major,.version.minor,.version.patch,.downloadUrl]) | sort | .[length-1] | .[3]')
    fi

    if [ -z "$AZP_AGENTPACKAGE_URL" -o "$AZP_AGENTPACKAGE_URL" == "null" ]; then
      echo 1>&2 "error: could not determine a matching Azure Pipelines agent - check that account '$AZP_URL' is correct and the token is valid for that account"
      exit 1
    fi

    print_header "2. Downloading and installing Azure Pipelines agent..."

    curl -LsS $AZP_AGENTPACKAGE_URL | tar -xz & wait $!

    source ./env.sh

    trap 'cleanup; exit 130' INT
    trap 'cleanup; exit 143' TERM

    print_header "3. Configuring Azure Pipelines agent..."

    ./config.sh --unattended \
      --agent "${AZP_AGENT_NAME:-$(hostname)}" \
      --url "$AZP_URL" \
      --auth PAT \
      --token $(cat "$AZP_TOKEN_FILE") \
      --pool "${AZP_POOL:-Default}" \
      --work "${AZP_WORK:-_work}" \
      --replace \
      --acceptTeeEula & wait $!

    print_header "4. Running Azure Pipelines agent..."

    # `exec` the node runtime so it's aware of TERM and INT signals
    # AgentService.js understands how to handle agent self-update and restart
    exec ./externals/node/bin/node ./bin/AgentService.js interactive
    ```

6. Run the following command within that directory:

    ```shell
    docker build -t dockeragent:latest .
    ```

    This command builds the Dockerfile in the current directory.

    The final image is tagged `dockeragent:latest`.
    You can easily run it in a container as `dockeragent`, since the `latest` tag is the default if no tag is specified.

### Start the image

Now that you have created an image, you can spin up a container.

1. Open a terminal
2. Run the container. This will install the latest version of the agent, configure it, and run the agent targeting the `Default` pool of a specified Azure DevOps or Azure DevOps Server instance of your choice:

    ```shell
    docker run -e AZP_URL=<Azure DevOps instance> -e AZP_TOKEN=<PAT token> -e AZP_AGENT_NAME=mydockeragent dockeragent:latest
    ```

You can optionally control the pool and agent work directory using additional [environment variables](#environment-variables).

## Environment variables

| Environment variable | Description                                                 |
|----------------------|-------------------------------------------------------------|
| AZP_URL              | The URL of the Azure DevOps or Azure DevOps Server instance |
| AZP_TOKEN            | Personal Access Token (PAT) granting access to `AZP_URL`    |
| AZP_AGENT_NAME       | Agent name (default value: the container hostname)          |
| AZP_POOL             | Agent pool name (default value: `Default`)                  |
| AZP_WORK             | Work directory (default value: `_work`)                     |


## Adding tools and customizing the container

In this walkthrough, you created a basic build agent.
You can extend the Dockerfile to include additional tools and their dependencies, or build your own container using this one as a base layer. Just make sure that the following things are left untouched:

- The `start.sh` script is called by the Dockerfile
- The `start.sh` script is the last command that the Dockerfile
- Ensure that derivative containers do not remove any of the dependencies stated by the Dockerfile

## Using Docker within a Docker container

In order to use Docker from within a Docker container, you need to bind-mount the Docker socket.
This has very serious security implications - namely, code inside the container can now run as root on your Docker host.
If you're sure you want to do this, see the [bind mount](https://docs.docker.com/storage/bind-mounts/) documentation on Docker.com.
