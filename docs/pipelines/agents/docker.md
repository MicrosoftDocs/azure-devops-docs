---
title: Run a self-hosted agent in Docker
ms.topic: conceptual
description: Instructions for running your Azure Pipelines agent in Docker
ms.assetid: e34461fc-8e77-4c94-8f49-cf604a925a19
ms.date: 02/12/2021
monikerRange: '>= azure-devops-2019'
---

# Run a self-hosted agent in Docker

This article provides instructions for running your Azure Pipelines agent in Docker. You can set up a self-hosted agent in Azure Pipelines to run inside a Windows Server Core (for Windows hosts), or Ubuntu container (for Linux hosts) with Docker. This is useful when you want to run agents with outer orchestration, such as [Azure Container Instances](/azure/container-instances/). In this article, you'll walk through a complete container example, including handling agent self-update.

Both [Windows](#windows) and [Linux](#linux) are supported as container hosts. Windows containers should run on a Windows `vmImage`. 
To run your agent in Docker, you'll pass a few [environment variables](#environment-variables) to `docker run`, which configures the agent to connect to Azure Pipelines or Azure DevOps Server. Finally, you [customize the container](#add-tools-and-customize-the-container) to suit your needs. Tasks and scripts might depend on specific tools being available on the container's `PATH`, and it's your responsibility to ensure that these tools are available.

::: moniker range="azure-devops-2019"

This feature requires agent version 2.149 or later.
Azure DevOps 2019 didn't ship with a compatible agent version.
However, you can [upload the correct agent package to your application tier](agents.md#can-i-update-my-v2-agents-that-are-part-of-an-azure-devops-server-pool) if you want to run Docker agents.

::: moniker-end

## Windows

### Enable Hyper-V

Hyper-V isn't enabled by default on Windows.
If you want to provide isolation between containers, you must enable Hyper-V.
Otherwise, Docker for Windows won't start.

* [Enable Hyper-V on Windows 10](/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
* [Enable Hyper-V on Windows Server 2016](/windows-server/virtualization/hyper-v/get-started/install-the-hyper-v-role-on-windows-server)

> [!NOTE]
> You must enable virtualization on your machine.
> It's typically enabled by default.
> However, if Hyper-V installation fails, refer to your system documentation for how to enable virtualization.

### Install Docker for Windows

If you're using Windows 10, you can install the [Docker Community Edition](https://docs.docker.com/docker-for-windows/install).
For Windows Server 2016, install the [Docker Enterprise Edition](https://docs.docker.com/install/windows/docker-ee).

### Switch Docker to use Windows containers

By default, Docker for Windows is configured to use Linux containers. To allow running the Windows container, confirm that Docker for Windows [is running the Windows daemon](https://docs.docker.com/docker-for-windows/#switch-between-windows-and-linux-containers).

### Create and build the Dockerfile

Next, create the Dockerfile.

1. Open a command prompt.
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
    
    if ((Test-Path Env:AZP_WORK) -and -not (Test-Path $Env:AZP_WORK)) {
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
    You can easily run it in a container as `dockeragent`, because the `latest` tag is the default if no tag is specified.

### Start the image

Now that you have created an image, you can run a container.

1. Open a command prompt.
2. Run the container. This installs the latest version of the agent, configures it, and runs the agent. It targets the `Default` pool of a specified Azure DevOps or Azure DevOps Server instance of your choice:

    ```shell
    docker run -e AZP_URL=<Azure DevOps instance> -e AZP_TOKEN=<PAT token> -e AZP_AGENT_NAME=mydockeragent dockeragent:latest
    ```

Optionally, you can control the pool and agent work directory by using additional [environment variables](#environment-variables).

If you want a fresh agent container for every pipeline run, pass the [`--once` flag](v2-windows.md#run-once) to the `run` command.
You must also use a container orchestration system, like Kubernetes or [Azure Container Instances](https://azure.microsoft.com/services/container-instances/), to start new copies of the container when the work completes.

## Linux

### Install Docker

Depending on your Linux Distribution, you can either install [Docker Community Edition](https://docs.docker.com/install/) or [Docker Enterprise Edition](https://docs.docker.com/ee/supported-platforms/).

### Create and build the Dockerfile

Next, create the Dockerfile.

1. Open a terminal.
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
    FROM ubuntu:18.04

    # To make it easier for build and release pipelines to run apt-get,
    # configure apt to not require confirmation (assume the -y argument by default)
    ENV DEBIAN_FRONTEND=noninteractive
    RUN echo "APT::Get::Assume-Yes \"true\";" > /etc/apt/apt.conf.d/90assumeyes

    RUN apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        jq \
        git \
        iputils-ping \
        libcurl4 \
        libicu60 \
        libunwind8 \
        netcat \
        libssl1.0 \
      && rm -rf /var/lib/apt/lists/*

    RUN curl -LsS https://aka.ms/InstallAzureCLIDeb | bash \
      && rm -rf /var/lib/apt/lists/*

    ARG TARGETARCH=amd64
    ARG AGENT_VERSION=2.185.1

    WORKDIR /azp
    RUN if [ "$TARGETARCH" = "amd64" ]; then \
          AZP_AGENTPACKAGE_URL=https://vstsagentpackage.azureedge.net/agent/${AGENT_VERSION}/vsts-agent-linux-x64-${AGENT_VERSION}.tar.gz; \
        else \
          AZP_AGENTPACKAGE_URL=https://vstsagentpackage.azureedge.net/agent/${AGENT_VERSION}/vsts-agent-linux-${TARGETARCH}-${AGENT_VERSION}.tar.gz; \
        fi; \
        curl -LsS "$AZP_AGENTPACKAGE_URL" | tar -xz

    COPY ./start.sh .
    RUN chmod +x start.sh

    ENTRYPOINT [ "./start.sh" ]
    ```

   > [!NOTE]
   > Tasks might depend on executables that your container is expected to provide.
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

    export AGENT_ALLOW_RUNASROOT="1"

    cleanup() {
      if [ -e config.sh ]; then
        print_header "Cleanup. Removing Azure Pipelines agent..."
        
        # If the agent has some running jobs, the configuration removal process will fail.
        # So, give it some time to finish the job.
        while true; do
          ./config.sh remove --unattended --auth PAT --token $(cat "$AZP_TOKEN_FILE") && break

          echo "Retrying in 30 seconds..."
          sleep 30
        done
      fi
    }

    print_header() {
      lightcyan='\033[1;36m'
      nocolor='\033[0m'
      echo -e "${lightcyan}$1${nocolor}"
    }

    # Let the agent ignore the token env variables
    export VSO_AGENT_IGNORE=AZP_TOKEN,AZP_TOKEN_FILE

    source ./env.sh

    print_header "1. Configuring Azure Pipelines agent..."

    ./config.sh --unattended \
      --agent "${AZP_AGENT_NAME:-$(hostname)}" \
      --url "$AZP_URL" \
      --auth PAT \
      --token $(cat "$AZP_TOKEN_FILE") \
      --pool "${AZP_POOL:-Default}" \
      --work "${AZP_WORK:-_work}" \
      --replace \
      --acceptTeeEula & wait $!

    print_header "2. Running Azure Pipelines agent..."

    trap 'cleanup; exit 0' EXIT
    trap 'cleanup; exit 130' INT
    trap 'cleanup; exit 143' TERM

    # To be aware of TERM and INT signals call run.sh
    # Running it with the --once flag at the end will shut down the agent after the build is executed
    ./run.sh "$@"
    ```
    > [!NOTE]
    >You must also use a container orchestration system, like Kubernetes or [Azure Container Instances](https://azure.microsoft.com/services/container-instances/), to start new copies of the container when the work completes.
6. Run the following command within that directory:

    ```shell
    docker build -t dockeragent:latest .
    ```

    This command builds the Dockerfile in the current directory.

    The final image is tagged `dockeragent:latest`.
    You can easily run it in a container as `dockeragent`, because the `latest` tag is the default if no tag is specified.

### Start the image

Now that you have created an image, you can run a container.

1. Open a terminal.
2. Run the container. This installs the latest version of the agent, configures it, and runs the agent. It targets the `Default` pool of a specified Azure DevOps or Azure DevOps Server instance of your choice:

    ```shell
    docker run -e AZP_URL=<Azure DevOps instance> -e AZP_TOKEN=<PAT token> -e AZP_AGENT_NAME=mydockeragent dockeragent:latest
    ```

   If you want a fresh agent container for every pipeline job, pass the [`--once` flag](v2-linux.md#run-once) to the `run` command.

    ```shell
    docker run -e AZP_URL=<Azure DevOps instance> -e AZP_TOKEN=<PAT token> -e AZP_AGENT_NAME=mydockeragent dockeragent:latest --once
    ```
    
Optionally, you can control the pool and agent work directory by using additional [environment variables](#environment-variables).


## Environment variables

| Environment variable | Description                                                 |
|----------------------|-------------------------------------------------------------|
| AZP_URL              | The URL of the Azure DevOps or Azure DevOps Server instance. |
| AZP_TOKEN            | [Personal Access Token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Agent Pools (read, manage)** scope, created by a user who has permission to [configure agents](pools-queues.md#creating-agent-pools), at `AZP_URL`.    |
| AZP_AGENT_NAME       | Agent name (default value: the container hostname).          |
| AZP_POOL             | Agent pool name (default value: `Default`).                  |
| AZP_WORK             | Work directory (default value: `_work`).                     |


## Add tools and customize the container

You have created a basic build agent.
You can extend the Dockerfile to include additional tools and their dependencies, or build your own container by using this one as a base layer. Just make sure that the following are left untouched:

- The `start.sh` script is called by the Dockerfile.
- The `start.sh` script is the last command in the Dockerfile.
- Ensure that derivative containers don't remove any of the dependencies stated by the Dockerfile.

## Use Docker within a Docker container

In order to use Docker from within a Docker container, you bind-mount the Docker socket.

> [!CAUTION]
> Doing this has serious security implications. The code inside the container can now run as root on your Docker host.

If you're sure you want to do this, see the [bind mount](https://docs.docker.com/storage/bind-mounts/) documentation on Docker.com.

## Use Azure Kubernetes Service cluster

> [!NOTE]
> Running Azure Pipelines agent is not supported in AKS 1.19 and later.

### Deploy and configure Azure Kubernetes Service 

Follow the steps in [Quickstart: Deploy an Azure Kubernetes Service (AKS) cluster by using the Azure portal](/azure/aks/kubernetes-walkthrough-portal). After this, your PowerShell or Shell console can use the `kubectl` command line.

### Deploy and configure Azure Container Registry

Follow the steps in [Quickstart: Create an Azure container registry by using the Azure portal](/azure/container-registry/container-registry-get-started-portal). After this, you can push and pull containers from Azure Container Registry.

### Configure secrets and deploy a replica set

1. Create the secrets on the AKS cluster.

   ```shell
   kubectl create secret generic azdevops \
     --from-literal=AZP_URL=https://dev.azure.com/yourOrg \
     --from-literal=AZP_TOKEN=YourPAT \
     --from-literal=AZP_POOL=NameOfYourPool
   ```

2. Run this command to push your container to Container Registry:

   ```shell
   docker push <acr-server>/dockeragent:latest
   ```

3. Configure Container Registry integration for existing AKS clusters.

   ```shell
   az aks update -n myAKSCluster -g myResourceGroup --attach-acr <acr-name>
   ```

4. Save the following content to `~/AKS/ReplicationController.yaml`:

   ```shell
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: azdevops-deployment
     labels:
       app: azdevops-agent
   spec:
     replicas: 1 #here is the configuration for the actual agent always running
     selector:
       matchLabels:
         app: azdevops-agent
     template:
       metadata:
         labels:
           app: azdevops-agent
       spec:
         containers:
         - name: kubepodcreation
           image: AKRTestcase.azurecr.io/kubepodcreation:5306
           env:
             - name: AZP_URL
               valueFrom:
                 secretKeyRef:
                   name: azdevops
                   key: AZP_URL
             - name: AZP_TOKEN
               valueFrom:
                 secretKeyRef:
                   name: azdevops
                   key: AZP_TOKEN
             - name: AZP_POOL
               valueFrom:
                 secretKeyRef:
                   name: azdevops
                   key: AZP_POOL
           volumeMounts:
           - mountPath: /var/run/docker.sock
             name: docker-volume
         volumes:
         - name: docker-volume
           hostPath:
             path: /var/run/docker.sock
   ```

   This Kubernetes YAML creates a replica set and a deployment, where `replicas: 1` indicates the number or the agents that are running on the cluster.

5. Run this command:

   ```shell
   kubectl apply -f ReplicationController.yaml
   ```

Now your agents will run the AKS cluster.

## Mounting volumes using Docker within a Docker container

If a Docker container runs inside another Docker container, they both use host's daemon, so all mount paths reference the host, not the container.

For example, if we want to mount path from host into outer Docker container, we can use this command:

   ```
   docker run ... -v <path-on-host>:<path-on-outer-container> ...
   ```

And if we want to mount path from host into inner Docker container, we can use this command:

   ```
   docker run ... -v <path-on-host>:<path-on-inner-container> ...
   ```

But we can't mount paths from outer container into the inner one; to work around that, we have to declare an ENV variable:

   ```
   docker run ... --env DIND_USER_HOME=$HOME ...
   ```

After this, we can start the inner container from the outer one using this command:

   ```
   docker run ... -v $DIND_USER_HOME:<path-on-inner-container> ...
   ```

## Common errors

If you're using Windows, and you get the following error: 

   ```shell
   ‘standard_init_linux.go:178: exec user process caused "no such file or directory"
   ```

Install Git Bash by downloading and installing [git-scm](https://git-scm.com/download/win).

Run this command:

   ```shell
   dos2unix ~/dockeragent/Dockerfile
   dos2unix ~/dockeragent/start.sh
   git add .
   git commit -m 'Fixed CR'
   git push
   ```
Try again. You no longer get the error.
