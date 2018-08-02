---
title: Docker
description: Building Docker images using VSTS and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E5BEDC1D-0209-40F3-A2AB-591CB7AE97E8
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.date: 07/05/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# Docker

This guidance explains how to build Docker images that you can upload to a range of containers such as
Docker Hub or Azure Container Registry, and then deploy to a range of targets.

::: moniker range="vsts"

> [!NOTE]
> To use YAML you must have the **Build YAML definitions** [preview feature](/vsts/project/navigation/preview-features) enabled on your account.

::: moniker-end

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

<br/>

> [!VIDEO https://www.youtube.com/embed/X4Puu0BS3GE]

<a name="example"></a>
## Example

This example shows how to build a Docker image and upload it to Docker Hub.
For information about uploading a Docker image to other types of containers, see [Build an image](#buildimage).

To build a Docker image, you need a _Dockerfile_. If you want some sample code that includes this file and works with this guidance, then import (into VSTS or TFS) or fork (into GitHub) this repo:

```
https://github.com/adventworks/dotnetcore-sample
```

# [Designer](#tab/designer)

> [!IMPORTANT]
> If you are new to creating build pipelines, then complete the [designer](../get-started-designer.md) quickstart first before following these instructions.

::: moniker range="< vsts"
> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. Also, you'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free VSTS account. Then [try this with VSTS](#example?view=vsts&tabs=designer).
::: moniker-end

::: moniker range="vsts"

1. After you have the sample code in your own repository, create a build pipeline and select the **ASP.NET Core** template. This automatically adds the tasks that you typically need to build an ASP.NET Core app.

1. Select **Process** under the **Tasks** tab of the build pipeline editor, and change its properties as follows:
  * **Agent queue:** `Hosted Linux Preview`
  * **Projects to test:** `**/*[Tt]ests/*.csproj`

1. Modify the **.NET Core Publish** task in the build pipeline as follows:
  * **Arguments:** `--configuration $(BuildConfiguration) --output out`
  * **Zip published projects:** Clear this check box
  * **Add project name to publish path:** Clear this check box

1. Remove the **Publish artifact** task.

1. Add **Docker** task after the **.NET Core Publish** task and configure it as follows to build an image using the **Dockerfile** in the repository:
   * **Action:** `Build an image`
   * **Container registry type:** `Container registry`
   * **Docker registry connection:** Select `New` and create a connection to your Docker hub registry.

1. Add another **Docker** task and configure it as follows to push the image to your Docker hub registry:
   * **Action:** `Push an image`
   * **Container registry type:** `Container registry`
   * **Docker registry connection:** Select the same connection to your Docker hub registry.
   * **Qualify Image Name:** Clear this check box
   * **Image Name:** `[your-Docker-ID]/$(Build.Repository.Name):$(Build.BuildId)`  

Save the pipeline and queue a build to see it in action.

::: moniker-end

# [YAML](#tab/yaml)

::: moniker range="vsts"

> [!IMPORTANT]
> If you are new to creating build pipelines using YAML, then complete the [YAML](../get-started-yaml.md) quickstart first before following these instructions.

The sample code above includes a `.vsts-ci.yml` file at the root of the repository. Replace the contents of this file with the following:

```yaml
queue: 'Hosted Linux Preview'
variables:
   buildConfiguration: 'Release'
    
steps:
- task: DotNetCoreCLI@2
   inputs:
      command: 'restore'
      projects: '**/*.csproj'
    
- task: DotNetCoreCLI@2
   inputs:
      command: 'build'
      projects: '**/*.csproj'
      arguments: '--configuration $(buildConfiguration)'
    
- task: DotNetCoreCLI@2
   inputs:
      command: 'test'
      projects: '**/*[Tt]ests/*.csproj'
      arguments: '--configuration $(buildConfiguration)'
    
- task: DotNetCoreCLI@2
   inputs:
      command: 'publish'
      arguments: '--configuration $(buildConfiguration) --output out'
      zipAfterPublish: false
      addProjectNameToPublishPath: false
     
- task: Docker@0
  displayName: Build an image
  inputs:
    containerregistrytype: 'Container Registry'
    dockerRegistryConnection: '<name of your Docker hub service connection>'
    action: 'Build an image'
    qualifyImageName: false
    imageName: '<your Docker ID>/$(Build.Repository.Name):$(Build.BuildId)' 

- task: Docker@0
  displayName: Push an image
  inputs:
    containerregistrytype: 'Container Registry'
    dockerRegistryConnection: '<name of your Docker hub service connection>'
    action: 'Push an image'
    qualifyImageName: false
    imageName: '<your Docker ID>/$(Build.Repository.Name):$(Build.BuildId)' 

```
    
You need to create a DockerHub service connection and use the name of that connection in the above YAML file. The DockerHub service connection tells VSTS how to connect to Docker hub. You can create a service connection under the **Service connections** tab of **Project settings** in the VSTS web UI.

Push the above change to master branch in your repository, and then run a build using this YAML file to see it in action.

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

Now that you've run a Docker build pipeline, you're ready to learn some of the more common changes people make to customize their Docker build.

## Build environment

::: moniker range="vsts"

You can use VSTS to build and push your Docker images without needing to set up any infrastructure of your own. You can build either Windows or Linux container images. The [Microsoft-hosted agents](../agents/hosted.md) in VSTS have Docker pre-installed on them. We frequently update the version of Docker on these agent machines. To know which version of Docker is installed, see [Microsoft-hosted agents](../agents/hosted.md).

# [Designer](#tab/designer)

In the build pipeline, select **Tasks**, then select the **Process** node, and finally select the **Agent queue** that you want to use.

# [YAML](#tab/yaml)

Add the following snippet to your `.vsts-ci.yml` file to select the appropriate agent queue:

```yaml
queue: 'Hosted Linux Preview' # other options - 'Hosted VS2017'
```

---

### Microsoft-hosted Linux agents

Use the **Hosted Linux Preview** agent queue to build Linux container images. When you use this queue, you get a fresh Linux virtual machine with each build. This virtual machine runs the [agent](../agents/agents.md) and acts as a Docker host. Tasks in your build do not directly run on the virtual machine at present. Instead, they run in a Microsoft-provided Docker container on the virtual machine. [Shared volumes](https://docs.docker.com/storage/volumes/) are used to facilitate communication between the virtual machine and the container. You can run Docker commands as part of your build, since the `docker.sock` socket of the host is volume mounted in the container.

### Microsoft-hosted VS2017 (Windows) agents

Use the **Hosted VS2017** agent queue to build Windows container images. When you use this queue, you get a fresh Windows Server 2016 virtual machine with each build. The virtual machine runs the [agent](../agents/agents.md) and acts as a Docker host. Some of the common images such as `microsoft/dotnet-framework`, `microsoft/aspnet`, `microsoft/aspnetcore-build`, `microsoft/windowsservercore`, and `microsoft/nanoserver` are pre-cached on this Docker host. Building new images from these images will therefore be faster.

> [!NOTE]
> * Using Hosted VS2017 agents, you can only build Docker images with Windows Server 2016 as the container OS. You cannot build Docker images with Windows Server 1803 as the container OS since the host operating system on the virtual machines is Windows Server 2016.
> * We do not yet have a pool of Microsoft-hosted agents running Windows Server 1803. Until this is available, you can build Windows Server 1803 images using self-hosted agents.

### Microsoft-hosted MacOS agents

You cannot use **Hosted Mac** to build container images as Docker is not installed on these agents.

### Self-hosted agents

As an alternative to using Microsoft-hosted agents, you can set up [self-hosted agents](../agents/agents.md#install) with Docker installed. This is particularly useful if you want to cache additional images on the Docker host, and further improve the performance of your builds.

::: moniker-end

::: moniker range="< vsts"

Your builds run on a [self-hosted agent](../agents/agents.md#install). Make sure that you have Docker installed on the agent.

::: moniker-end

<a name="buildimage"></a>

## Build an image

You can build a Docker image by running the `docker build` command in a script or by using the **Docker** task.

# [Designer](#tab/designer)

1. Select **Tasks** in your build pipeline, and then add the **Docker** task to the phase.

1. Select the task, and then for **Action**, select **Build an image**.

1. Specify the connection to the registry that you plan to push the image to by selecting the **Container registry type** - `Container Registry` or `Azure Container Registry`. Then enter the properties for that connection type. If you plan to push the image to an Azure Container Registry, make sure that you [pre-create the registry in Azure portal](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal).

# [YAML](#tab/yaml)

::: moniker range="vsts"

To run the command in a script, add the following snippet to your `.vsts-ci.yml` file.

```yaml
steps:
- script: docker build -f <Dockerfile>
```

You can also use the Docker task to build an image. The task takes care of tagging the image correctly based on the registry that you intend to push the image to. The task is also particularly helpful if your Dockerfile depends on another image from a protected registry.

To build an image that you plan to push to Docker hub, add the following snippet:

```yaml
- task: Docker@0
  displayName: Build an image
  inputs:
    containerregistrytype: 'Container Registry'
    dockerRegistryConnection: 'Adventworks DockerHub'  # replace with your Docker hub service connection
```

To build an image that you plan to push to Azure Container Registry, add the following snippet:

```yaml
- task: Docker@0
  displayName: Build an image
  inputs:
    azureSubscription: '<Azure service connection>'
    azureContainerRegistry: '{"loginServer":"adventworks.azurecr.io", "id" : "/subscriptions/<Azure subscription id>/resourceGroups/<Resource group where your container registry is hosted>/providers/Microsoft.ContainerRegistry/registries/<Name of your registry>"}' # for example, "loginServer":"adventworks.azurecr.io", "id" : "/subscriptions/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/adventworks/providers/Microsoft.ContainerRegistry/registries/adventworks"
```

Note that you need to have an Azure service connection defined to do the above. In addition, you need to know the Azure subscription id, the name of the resource group, and the name of the container registry.

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

---

## Integrate build and test tasks

Often you'll want to build and test your app before creating the Docker image. You can orchestrate this process either in your build pipeline or in your _Dockerfile_.

### Build and test in your build pipeline

In this approach, you use the build pipeline to orchestrate building your code, running your tests, and creating an image. This approach is useful if you want to:

* Leverage tasks (either built-in tasks or those you get from the Marketplace) to define the process used to build and test your app.
* Run tasks that require authentication via service connections (for example: authenticated NuGet or npm feeds).
* Publish test results.

To create an image, you run a `docker build` command at the end of your build pipeline. Your _Dockerfile_ contains the instructions to copy the results of your build into the container.

The instructions in the [above example](#example) demonstrate this approach.

### Build and test in your Dockerfile

In this approach, you use your _Dockerfile_ to build your code and run tests. The build pipeline has a single step to run `docker build`. The rest of the steps are orchestrated by the Docker build process. It's common to use a [multi-stage Docker build](https://docs.docker.com/develop/develop-images/multistage-build/) in this approach. The advantage of this approach is that your build process is entirely configured in your _Dockerfile_. This means your build process is portable from the development machine to any build system. One disadvantage is that you can't leverage VSTS and TFS features such as tasks, phases, or test analytics.

To follow this approach, create a _Dockerfile_ at the root of your repo with the following content:

```Dockerfile
# First stage of multi-stage build
FROM microsoft/aspnetcore-build:2.0 AS build-env
WORKDIR /app

# copy the contents of agent working directory on host to workdir in container
COPY . ./

# dotnet commands to build, test, and publish
RUN dotnet restore
RUN dotnet build -c Release
RUN dotnet test dotnetcore-tests/dotnetcore-tests.csproj -c Release
RUN dotnet publish -c Release -o out

# Second stage - Build runtime image
FROM microsoft/aspnetcore:2.0
WORKDIR /app
COPY --from=build-env /app/dotnetcore-sample/out .
ENTRYPOINT ["dotnet", "dotnetcore-sample.dll"]
```

Then, define your build pipeline:

# [Designer](#tab/designer)

1. Select **Tasks** in the build pipeline, and then remove all the tasks.

1. Add a **Docker** task, and then for **Action** select **Build an image**.

# [YAML](#tab/yaml)

::: moniker range="vsts"

Create a `.vsts-ci-yml` file at the root of your repo with the following content:

```yaml
queue: 'Hosted Linux Preview'
steps:
  - script: docker build -f Dockerfile -t adventworks/dotnetcore-sample .
```

::: moniker-end

::: moniker range="< vsts"

YAML builds are not yet available on TFS.

::: moniker-end

---

## Push an image

Once you've built a Docker image, you can use the **Docker** task to push it to a Docker registry or to Azure Container Registry (ACR).
The **Docker** task makes the process easier for you because it sets up an authenticated connection to your registry or ACR.

To push a Docker image:

# [Designer](#tab/designer)

1. In your build pipeline, select **Tasks**, and then add a **Docker** task to the phase that runs your build tasks.

1. Select the **Docker** task, and then for **Action** select **Push an image**.

1. Specify how to connect to your registry in the **Container registry type** and the corresponding service connection properties.

# [YAML](#tab/yaml)

::: moniker range="vsts"

To push the image to Docker hub, add the following snippet to the `.vsts-ci.yml` file at the root of your repo:

```yaml
- task: Docker@0
  displayName: Push an image
  inputs:
    containerregistrytype: 'Container Registry'
    dockerRegistryConnection: 'Adventworks DockerHub'   # replace with your Docker hub service connection
    action: 'Push an image'
```

To push the image to Azure Container Registry, you need to have an Azure service connection defined. In addition, you need to know the Azure subscription id, the name of the resource group, and the name of the container registry.

```yaml
- task: Docker@0
  displayName: Push an image
  inputs:
    azureSubscription: '<Name of your Azure service connection>'
    azureContainerRegistry: '{"loginServer":"adventworks.azurecr.io", "id" : "/subscriptions/<Azure subscription id>/resourceGroups/<Resource group where your container registry is hosted>/providers/Microsoft.ContainerRegistry/registries/<Name of your registry>"}' # for example, "loginServer":"adventworks.azurecr.io", "id" : "/subscriptions/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/adventworks/providers/Microsoft.ContainerRegistry/registries/adventworks"
    action: 'Push an image'
```

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

---

By default, the **Docker** task tags your image as `<Docker id>/<repo name>:<build id>`

## Use Docker Compose

Docker Compose enables you to bring up multiple containers and run tests.
For example, you can use a _docker-compose.yml_ file to define two containers that need to work together to test your application: a web service that contains your application and a test driver.
You can build new container images every time you push a change to your code.
You can wait for the test driver to finish running tests before bringing down the two containers.

::: moniker range="vsts"

If you use Microsoft-hosted agents, you do not have to run any additional steps to install and use docker-compose.

::: moniker-end

To extend the [above example](#example) to use docker-compose:

1. Add `docker-compose.yml` file at the root of your repo.

 ```yaml
sut:
  build: .
  dockerfile: Dockerfile.test
  links:
    - web
web:
  build: .
  dockerfile: Dockerfile
```
    
1. Add a `Dockerfile.test` file at the root of your repo.

 ```Dockerfile
FROM ubuntu:trusty
RUN apt-get update && apt-get install -yq curl && apt-get clean
WORKDIR /app
ADD test.sh /app/test.sh
CMD ["bash", "test.sh"]
```

1. Add a `test.sh` file at the root of your repository.

 ```bash
sleep 5
if curl web | grep -q 'ASP.NET Core '; then
  echo "Tests passed!"
  exit 0
else
  echo "Tests failed!"
  exit 1
fi
```

1. Add a **Bash** task.

# [Designer](#tab/designer)

In the build pipeline, add a **Bash** task with the following inline script:

```
docker-compose -f docs/docker-compose.yml --project-directory . -p docs up -d
docker wait docs_sut_1
docker-compose -f docs/docker-compose.yml --project-directory . down
```

# [YAML](#tab/yaml)

::: moniker range="vsts"
Add the following snippet to your `.vsts-ci.yml` file.

```yaml
- script: |
    docker-compose -f docs/docker-compose.yml --project-directory . -p docs up -d |
    docker wait docs_sut_1 |
    docker-compose -f docs/docker-compose.yml --project-directory . down |
```
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end
---

::: moniker range="vsts"
> [!NOTE]
> When using Hosted Linux agents, the agent runs inside a container. The network of this container is not bridged to the network of the containers that you spin up through docker compose. As a result, you cannot communicate from the agent to one of the containers in the composition, for example, to drive tests. One way to solve this problem is to explicitly create another test driver as a container within the composition, as we did in the example above. Another solution is to use `docker-compose exec` and target a specific container in the composition from your script.
:::moniker-end

::: moniker range="vsts"
## Build ARM containers

When you use Microsoft-hosted Linux agents, you create Linux container images for the x64 architecture. To create images for other architectures (for example, x86, ARM, and so on), you can use a machine emulator such as [QEMU](https://www.qemu.org/). The following steps illustrate how to create an ARM container image:

1. Author your _Dockerfile_ so that an Intel binary of QEMU exists in the base Docker image. For example, the Raspbian Docker image from [Resin](https://resin.io/) already has this.

 ```Dockerfile
FROM resin/rpi-raspbian
```

1. Run the following script in your build pipeline.

 ```Dockerfile
# register QEMU binary - this can be done by running the following Docker image
docker run --rm --privileged multiarch/qemu-user-static:register --reset
# build your image
docker build -t <your-image-tag> .
```

:::moniker-end

<a name="troubleshooting"></a>
## Troubleshooting

::: moniker range="vsts"

If you're able to build your image on your development machine, but are having trouble building it on VSTS or TFS, the following solutions might help:

* Check that you are using the correct type of agents - Microsoft-hosted Linux or Microsoft-hosted Windows - to mimic the type of container images you build on your development machine.

* If you use Microsoft-hosted agents to run your builds, the Docker images are not cached from build to build since you get a new machine for every build. This will make your builds on Microsoft-hosted agents run longer than those on your development machine.

* If you use Hosted Linux agents, then the agent itself runs in a container. This has some implications when you use docker-compose to spin up additional containers. As an example, there is no network connectivity from the agent container to the composition containers. Use `docker-compose exec` as a way of executing commands from the agent container in one of the composition containers.

::: moniker-end

::: moniker range="< vsts"

If you're able to build your image on your development machine, but are having trouble building it on VSTS or TFS, then check the version of Docker on the agent, and ensure that it matches what you have on your development machine. You can include a command line script `docker --version` in your build pipeline to print the version of Docker.

::: moniker-end
