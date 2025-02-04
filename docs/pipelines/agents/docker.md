---
title: Run a self-hosted agent in Docker
ms.topic: conceptual
ms.custom: linux-related-content
description: Instructions for running your Azure Pipelines agent in Docker
ms.assetid: e34461fc-8e77-4c94-8f49-cf604a925a19
ms.date: 04/05/2024
monikerRange: '>= azure-devops-2019'
---

# Run a self-hosted agent in Docker

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article provides instructions for running your Azure Pipelines agent in Docker. You can set up a self-hosted agent in Azure Pipelines to run inside a Windows Server Core (for Windows hosts), or Ubuntu container (for Linux hosts) with Docker. This is useful when you want to run agents with outer orchestration, such as [Azure Container Instances](/azure/container-instances/). In this article, you'll walk through a complete container example, including handling agent self-update.

Both [Windows](#windows) and [Linux](#linux) are supported as container hosts. Windows containers should run on a Windows `vmImage`.
To run your agent in Docker, you'll pass a few [environment variables](#environment-variables) to `docker run`, which configures the agent to connect to Azure Pipelines or Azure DevOps Server. Finally, you [customize the container](#add-tools-and-customize-the-container) to suit your needs. Tasks and scripts might depend on specific tools being available on the container's `PATH`, and it's your responsibility to ensure that these tools are available.

::: moniker range="azure-devops-2019"

This feature requires agent version 2.149 or later.
Azure DevOps 2019 didn't ship with a compatible agent version.
However, you can [upload the correct agent package to your application tier](agents.md#can-i-update-my-agents-that-are-part-of-an-azure-devops-server-pool) if you want to run Docker agents.

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

    ```powershell
    mkdir "C:\azp-agent-in-docker\"
    ```

3. Go to this new directory:

    ```powershell
    cd "C:\azp-agent-in-docker\"
    ```

4. Save the following content to a file called `C:\azp-agent-in-docker\azp-agent-windows.dockerfile`:

    ```dockerfile
    FROM mcr.microsoft.com/windows/servercore:ltsc2022

    WORKDIR /azp/

    COPY ./start.ps1 ./

    CMD powershell .\start.ps1
    ```

5. Save the following content to `C:\azp-agent-in-docker\start.ps1`:

    ```powershell
    function Print-Header ($header) {
      Write-Host "`n${header}`n" -ForegroundColor Cyan
    }

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

    Print-Header "1. Determining matching Azure Pipelines agent..."

    $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$(Get-Content ${Env:AZP_TOKEN_FILE})"))
    $package = Invoke-RestMethod -Headers @{Authorization=("Basic $base64AuthInfo")} "$(${Env:AZP_URL})/_apis/distributedtask/packages/agent?platform=win-x64&`$top=1"
    $packageUrl = $package[0].Value.downloadUrl

    Write-Host $packageUrl

    Print-Header "2. Downloading and installing Azure Pipelines agent..."

    $wc = New-Object System.Net.WebClient
    $wc.DownloadFile($packageUrl, "$(Get-Location)\agent.zip")

    Expand-Archive -Path "agent.zip" -DestinationPath "\azp\agent"

    try {
      Print-Header "3. Configuring Azure Pipelines agent..."

      .\config.cmd --unattended `
        --agent "$(if (Test-Path Env:AZP_AGENT_NAME) { ${Env:AZP_AGENT_NAME} } else { hostname })" `
        --url "$(${Env:AZP_URL})" `
        --auth PAT `
        --token "$(Get-Content ${Env:AZP_TOKEN_FILE})" `
        --pool "$(if (Test-Path Env:AZP_POOL) { ${Env:AZP_POOL} } else { 'Default' })" `
        --work "$(if (Test-Path Env:AZP_WORK) { ${Env:AZP_WORK} } else { '_work' })" `
        --replace

      Print-Header "4. Running Azure Pipelines agent..."

      .\run.cmd
    } finally {
      Print-Header "Cleanup. Removing Azure Pipelines agent..."

      .\config.cmd remove --unattended `
        --auth PAT `
        --token "$(Get-Content ${Env:AZP_TOKEN_FILE})"
    }
    ```

6. Run the following command within that directory:

    ```powershell
    docker build --tag "azp-agent:windows" --file "./azp-agent-windows.dockerfile" .
    ```

    The final image is tagged `azp-agent:windows`.

### Start the image

Now that you have created an image, you can run a container. This installs the latest version of the agent, configures it, and runs the agent. It targets the specified agent pool (the `Default` agent pool by default) of a specified Azure DevOps or Azure DevOps Server instance of your choice:

```powershell
docker run -e AZP_URL="<Azure DevOps instance>" -e AZP_TOKEN="<Personal Access Token>" -e AZP_POOL="<Agent Pool Name>" -e AZP_AGENT_NAME="Docker Agent - Windows" --name "azp-agent-windows" azp-agent:windows
```

You might need to specify the `--network` parameter if you run into network issues.

```powershell
docker run --network "Default Switch" < . . . >
```

You might need to specify `--interactive` and `--tty` flags (or simply `-it`) if you want to be able to stop the container and remove the agent with `Ctrl` + `C`.

```powershell
docker run --interactive --tty < . . . >
```

If you want a fresh agent container for every pipeline job, pass [the `--once` flag](windows-agent.md#run-once) to the `run` command.

```powershell
docker run < . . . > --once
```

With the `--once` flag, you might want to use a container orchestration system, like Kubernetes or [Azure Container Instances](https://azure.microsoft.com/services/container-instances/), to start a new copy of the container when the job completes.

You can control the agent name, the agent pool, and the agent work directory by using optional [environment variables](#environment-variables).

## Linux

### Install Docker

Depending on your Linux Distribution, you can either install [Docker Community Edition](https://docs.docker.com/install/) or [Docker Enterprise Edition](https://docs.docker.com/ee/supported-platforms/).

### Create and build the Dockerfile

Next, create the Dockerfile.

1. Open a terminal.

2. Create a new directory (recommended):

    ```bash
    mkdir ~/azp-agent-in-docker/
    ```

3. Go to this new directory:

    ```bash
    cd ~/azp-agent-in-docker/
    ```

4. Save the following content to `~/azp-agent-in-docker/azp-agent-linux.dockerfile`:

    * For Alpine, using the technique described in [this issue](https://github.com/Azure/azure-cli/issues/19591):
      ```dockerfile
      FROM python:3-alpine
      ENV TARGETARCH="linux-musl-x64"

      # Another option:
      # FROM arm64v8/alpine
      # ENV TARGETARCH="linux-musl-arm64"

      RUN apk update && \
        apk upgrade && \
        apk add bash curl gcc git icu-libs jq musl-dev python3-dev libffi-dev openssl-dev cargo make

      # Install Azure CLI
      RUN pip install --upgrade pip
      RUN pip install azure-cli

      WORKDIR /azp/

      COPY ./start.sh ./
      RUN chmod +x ./start.sh

      RUN adduser -D agent
      RUN chown agent ./
      USER agent
      # Another option is to run the agent as root.
      # ENV AGENT_ALLOW_RUNASROOT="true"

      ENTRYPOINT [ "./start.sh" ]
      ```

    * For Ubuntu 22.04:
      ```dockerfile
      FROM ubuntu:22.04
      ENV TARGETARCH="linux-x64"
      # Also can be "linux-arm", "linux-arm64".

      RUN apt update && \
        apt upgrade -y && \
        apt install -y curl git jq libicu70

      # Install Azure CLI
      RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

      WORKDIR /azp/

      COPY ./start.sh ./
      RUN chmod +x ./start.sh

      # Create agent user and set up home directory
      RUN useradd -m -d /home/agent agent
      RUN chown -R agent:agent /azp /home/agent

      USER agent
      # Another option is to run the agent as root.
      # ENV AGENT_ALLOW_RUNASROOT="true"

      ENTRYPOINT [ "./start.sh" ]
      ```

    Uncomment the `ENV AGENT_ALLOW_RUNASROOT="true"` line and remove adding the `agent` user before this line if you want to run the agent as root.

    > [!NOTE]
    > Tasks might depend on executables that your container is expected to provide.
    > For instance, you must add the `zip` and `unzip` packages
    > to the `RUN apt install -y` command in order to run the `ArchiveFiles` and `ExtractFiles` tasks.
    > Also, as this is a Linux Ubuntu image for the agent to use, you can customize the image as you need.
    > E.g.: if you need to build .NET applications you can follow the document
    > [Install the .NET SDK or the .NET Runtime on Ubuntu](/dotnet/core/install/linux-ubuntu)
    > and add that to your image.

5. Save the following content to `~/azp-agent-in-docker/start.sh`, making sure to use Unix-style (LF) line endings:

    ```bash
    #!/bin/bash
    set -e

    if [ -z "${AZP_URL}" ]; then
      echo 1>&2 "error: missing AZP_URL environment variable"
      exit 1
    fi

    if [ -n "$AZP_CLIENTID" ]; then
      echo "Using service principal credentials to get token"
      az login --allow-no-subscriptions --service-principal --username "$AZP_CLIENTID" --password "$AZP_CLIENTSECRET" --tenant "$AZP_TENANTID"
      # adapted from https://learn.microsoft.com/en-us/azure/databricks/dev-tools/user-aad-token
      AZP_TOKEN=$(az account get-access-token --query accessToken --output tsv)
      echo "Token retrieved"
    fi

    if [ -z "${AZP_TOKEN_FILE}" ]; then
      if [ -z "${AZP_TOKEN}" ]; then
        echo 1>&2 "error: missing AZP_TOKEN environment variable"
        exit 1
      fi

      AZP_TOKEN_FILE="/azp/.token"
      echo -n "${AZP_TOKEN}" > "${AZP_TOKEN_FILE}"
    fi

    unset AZP_CLIENTSECRET
    unset AZP_TOKEN

    if [ -n "${AZP_WORK}" ]; then
      mkdir -p "${AZP_WORK}"
    fi

    cleanup() {
      trap "" EXIT

      if [ -e ./config.sh ]; then
        print_header "Cleanup. Removing Azure Pipelines agent..."

        # If the agent has some running jobs, the configuration removal process will fail.
        # So, give it some time to finish the job.
        while true; do
          ./config.sh remove --unattended --auth "PAT" --token $(cat "${AZP_TOKEN_FILE}") && break

          echo "Retrying in 30 seconds..."
          sleep 30
        done
      fi
    }

    print_header() {
      lightcyan="\033[1;36m"
      nocolor="\033[0m"
      echo -e "\n${lightcyan}$1${nocolor}\n"
    }

    # Let the agent ignore the token env variables
    export VSO_AGENT_IGNORE="AZP_TOKEN,AZP_TOKEN_FILE"

    print_header "1. Determining matching Azure Pipelines agent..."

    AZP_AGENT_PACKAGES=$(curl -LsS \
        -u user:$(cat "${AZP_TOKEN_FILE}") \
        -H "Accept:application/json" \
        "${AZP_URL}/_apis/distributedtask/packages/agent?platform=${TARGETARCH}&top=1")

    AZP_AGENT_PACKAGE_LATEST_URL=$(echo "${AZP_AGENT_PACKAGES}" | jq -r ".value[0].downloadUrl")

    if [ -z "${AZP_AGENT_PACKAGE_LATEST_URL}" -o "${AZP_AGENT_PACKAGE_LATEST_URL}" == "null" ]; then
      echo 1>&2 "error: could not determine a matching Azure Pipelines agent"
      echo 1>&2 "check that account "${AZP_URL}" is correct and the token is valid for that account"
      exit 1
    fi

    print_header "2. Downloading and extracting Azure Pipelines agent..."

    curl -LsS "${AZP_AGENT_PACKAGE_LATEST_URL}" | tar -xz & wait $!

    source ./env.sh

    trap "cleanup; exit 0" EXIT
    trap "cleanup; exit 130" INT
    trap "cleanup; exit 143" TERM

    print_header "3. Configuring Azure Pipelines agent..."

    # Despite it saying "PAT", it can be the token through the service principal
    ./config.sh --unattended \
      --agent "${AZP_AGENT_NAME:-$(hostname)}" \
      --url "${AZP_URL}" \
      --auth "PAT" \
      --token $(cat "${AZP_TOKEN_FILE}") \
      --pool "${AZP_POOL:-Default}" \
      --work "${AZP_WORK:-_work}" \
      --replace \
      --acceptTeeEula & wait $!

    print_header "4. Running Azure Pipelines agent..."

    chmod +x ./run.sh

    # To be aware of TERM and INT signals call ./run.sh
    # Running it with the --once flag at the end will shut down the agent after the build is executed
    ./run.sh "$@" & wait $!
    ```

    > [!NOTE]
    > You must also use a container orchestration system, like Kubernetes or [Azure Container Instances](https://azure.microsoft.com/services/container-instances/), to start new copies of the container when the work completes.

6. Run the following command within that directory:

    ```bash
    docker build --tag "azp-agent:linux" --file "./azp-agent-linux.dockerfile" .
    ```

    The final image is tagged `azp-agent:linux`.

### Start the image

Now that you have created an image, you can run a container. This installs the latest version of the agent, configures it, and runs the agent. It targets the specified agent pool (the `Default` agent pool by default) of a specified Azure DevOps or Azure DevOps Server instance of your choice:

```bash
docker run -e AZP_URL="<Azure DevOps instance>" -e AZP_TOKEN="<Personal Access Token>" -e AZP_POOL="<Agent Pool Name>" -e AZP_AGENT_NAME="Docker Agent - Linux" --name "azp-agent-linux" azp-agent:linux
```

You might need to specify `--interactive` and `--tty` flags (or simply `-it`) if you want to be able to stop the container and remove the agent with `Ctrl` + `C`.

```bash
docker run --interactive --tty < . . . >
```

If you want a fresh agent container for every pipeline job, pass [the `--once` flag](linux-agent.md#run-once) to the `run` command.

```bash
docker run < . . . > --once
```

With the `--once` flag, you might want to use a container orchestration system, like Kubernetes or [Azure Container Instances](https://azure.microsoft.com/services/container-instances/), to start a new copy of the container when the job completes.

You can control the agent name, the agent pool, and the agent work directory by using optional [environment variables](#environment-variables).

## Environment variables

| Environment variable | Description                                                  |
|----------------------|--------------------------------------------------------------|
| AZP_URL              | The URL of the Azure DevOps or Azure DevOps Server instance. |
| AZP_TOKEN            | [Personal Access Token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) |
| AZP_CLIENTID         | [Service principal](../../pipelines/agents/service-principal-agent-registration.md) client ID |
| AZP_CLIENTSECRET     | Service principal client secret                              |
| AZP_TENANTID         | Service principal tenant ID                                  |
| AZP_AGENT_NAME       | Agent name (default value: the container hostname).          |
| AZP_POOL             | Agent pool name (default value: `Default`).                  |
| AZP_WORK             | Work directory (default value: `_work`).                     |

### Authentication

One of the following is required:

- If using a PAT: `AZP_TOKEN`
- If using a service principal: `AZP_CLIENTID`, `AZP_CLIENTSECRET`, and `AZP_TENANTID`

### Authorization

The token or service principal must have the **Agent Pools (read, manage)** scope at the Organization level of `AZP_URL`. If using a PAT, the token must be created by a user who has permission to [configure agents](pools-queues.md#create-agent-pools).

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

> [!CAUTION]
> Please, consider that any docker based tasks will not work on AKS 1.19 or later due to docker in docker restriction.
> [Docker was replaced with containerd](/azure/aks/cluster-configuration#container-runtime-configuration) in Kubernetes 1.19, and Docker-in-Docker became unavailable.

### Deploy and configure Azure Kubernetes Service

Follow the steps in [Quickstart: Deploy an Azure Kubernetes Service (AKS) cluster by using the Azure portal](/azure/aks/kubernetes-walkthrough-portal). After this, your PowerShell or Shell console can use the `kubectl` command line.

### Deploy and configure Azure Container Registry

Follow the steps in [Quickstart: Create an Azure container registry by using the Azure portal](/azure/container-registry/container-registry-get-started-portal). After this, you can push and pull containers from Azure Container Registry.

### Configure secrets and deploy a replica set

1. Create the secrets on the AKS cluster.

    ```bash
    kubectl create secret generic azdevops \
      --from-literal=AZP_URL=https://dev.azure.com/yourOrg \
      --from-literal=AZP_TOKEN=YourPAT \
      --from-literal=AZP_POOL=NameOfYourPool
    ```

2. Run this command to push your container to Container Registry:

    ```bash
    docker push "<acr-server>/azp-agent:<tag>"
    ```

3. Configure Container Registry integration for existing AKS clusters.

    > [!NOTE]
    > If you have multiple subscriptions on the Azure portal, please, use this command first to select a subscription
    >```azurecli
    >az account set --subscription "<subscription id or subscription name>"
    >```

    ```azurecli
    az aks update -n "<myAKSCluster>" -g "<myResourceGroup>" --attach-acr "<acr-name>"
    ```

4. Save the following content to `~/AKS/ReplicationController.yml`:

    ```yml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: azdevops-deployment
      labels:
        app: azdevops-agent
    spec:
      replicas: 1 # here is the configuration for the actual agent always running
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
            image: <acr-server>/azp-agent:<tag>
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

    ```bash
    kubectl apply -f ReplicationController.yml
    ```

Now your agents will run the AKS cluster.

### Set custom MTU parameter

Allow specifying MTU value for networks used by container jobs (useful for docker-in-docker scenarios in k8s cluster).

You need to set the environment variable AGENT_DOCKER_MTU_VALUE to set the MTU value, and then restart the self-hosted agent. You can find more about agent restart [here](./windows-agent.md?#how-do-i-restart-the-agent) and about setting different environment variables for each individual agent [here](./windows-agent.md?#how-do-i-set-different-environment-variables-for-each-individual-agent).

This allows you to set up a network parameter for the job container, the use of this command is similar to the use of the next command while container network configuration:

```bash
-o com.docker.network.driver.mtu=AGENT_DOCKER_MTU_VALUE
```

## Mounting volumes using Docker within a Docker container

If a Docker container runs inside another Docker container, they both use host's daemon, so all mount paths reference the host, not the container.

For example, if we want to mount path from host into outer Docker container, we can use this command:

```bash
docker run ... -v "<path-on-host>:<path-on-outer-container>" ...
```

And if we want to mount path from host into inner Docker container, we can use this command:

```bash
docker run ... -v "<path-on-host>:<path-on-inner-container>" ...
```

But we can't mount paths from outer container into the inner one; to work around that, we have to declare an ENV variable:

```bash
docker run ... --env DIND_USER_HOME=$HOME ...
```

After this, we can start the inner container from the outer one using this command:

```bash
docker run ... -v "${DIND_USER_HOME}:<path-on-inner-container>" ...
```

## Common errors

If you're using Windows, and you get the following error:

```
standard_init_linux.go:178: exec user process caused "no such file or directory"
```

Install Git Bash by downloading and installing [git-scm](https://git-scm.com/download/win).

Run this command:

```bash
dos2unix ~/azp-agent-in-docker/Dockerfile
dos2unix ~/azp-agent-in-docker/start.sh
git add .
git commit -m "Fixed CR"
git push
```

Try again. You no longer get the error.

## Related articles

- [Self-hosted Windows agents](windows-agent.md)
- [Self-hosted Linux agents](linux-agent.md)
- [Self-hosted macOS agents](osx-agent.md)
- [Microsoft-hosted agents](hosted.md)
