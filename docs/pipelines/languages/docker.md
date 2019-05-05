---
title: Build, test, and push Docker container apps
description: Automatically build and deploy Docker images with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: E5BEDC1D-0209-40F3-A2AB-591CB7AE97E8
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.custom: seodec18
ms.date: 03/27/2019
monikerRange: '>= tfs-2017'
---

# Build, test, and push Docker container apps

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

This guidance explains how to automatically build Docker images and push them to registries such as Docker Hub or Azure Container Registry.

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

> [!NOTE]
> 
> This article helps you start using Azure Pipelines by using Docker commands. As an alternative, Azure Pipelines has a built-in [Docker task](../tasks/build/docker.md) that you can use to 
> build and push the container images to a container registry. [Learn more about how the task helps with Docker best practices and standards](../tasks/build/docker.md).

::: moniker-end

<a name="example"></a>
## Example

The code in the following repository is a project with a Dockerfile that you can use to follow along. Import this repo into Azure Repos or fork it into GitHub.

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core-docker
```

::: moniker range="azure-devops"

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a pipeline for the sample app.
When you're done, you'll have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for your to customize.

> [!TIP]
> To make changes to the YAML file as described in this topic, select the pipeline in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

::: moniker-end

::: moniker range="< azure-devops"

1. After you have the sample code in your own repository, create a pipeline by using the instructions in [Create your first pipeline](../create-first-pipeline.md) and select the **Empty** template. (Do **not** select the **Docker** template.)

1. Add a **Bash** task at the end of the pipeline and configure it as follows to build and publish an image by using the **Dockerfile** in the repository:
   * **Type:** `Inline`
   * **Script:**

   To push to Docker Hub, use the following script:

   ```Bash
   docker build -t $(dockerId)/$(imageName) .
   docker login -u $(dockerId) -p $(dockerPassword)
   docker push $(dockerId)/$(imageName)
   ```

   To push to Azure Container Registry, use the following script:

   ```Bash
   docker build -t $(dockerId).azurecr.io/$(imageName) .
   docker login -u $(dockerId) -p $(dockerPassword) $(dockerId).azurecr.io
   docker push $(dockerId).azurecr.io/$(imageName)
   ```

1. In the **Variables** tab of the build pipeline, define two variables:
   * **imageName:** `$(Build.DefinitionName).$(Build.BuildId)`
   * **dockerId:** Your Docker ID.
   * **dockerPassword:** Your Docker password. Mark this variable as a secret variable.

   If you use Azure Container Registry, make sure that you have [pre-created the registry in the Azure portal](/azure/container-registry/container-registry-get-started-portal). You can get the user ID and password from the **Access keys** section of the registry in the Azure portal.

1. Save the pipeline and queue a build to see it in action.

::: moniker-end

Now that you've run a Docker build pipeline, you're ready to learn some of the common changes that people make to customize their Docker build.

## Build environment

::: moniker range="azure-devops"

You can use Azure Pipelines to build and push your Docker images without needing to set up any infrastructure of your own. You can build either Windows or Linux container images. The Microsoft-hosted agents in Azure Pipelines have Docker pre-installed on them. We frequently update the version of Docker on these agent machines. To know which version of Docker is installed, see [Microsoft-hosted agents](../agents/hosted.md).

Update the following snippet in your `azure-pipelines.yml` file to select the appropriate image.

```yaml
pool:
  vmImage: 'ubuntu-16.04' # other options: 'macOS-10.13', 'vs2017-win2016'
```

See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of images.

### Microsoft-hosted Linux agents

When you use the Microsoft-hosted Linux agents, you get a fresh Linux virtual machine with each build. This virtual machine runs the [agent](../agents/agents.md) and acts as a Docker host.

### Microsoft-hosted VS2017 (Windows) agents

Use the Windows agents (**win1803**) to build Windows container images. When you use this pool, you get a fresh Windows Server 2016 virtual machine with each build. The virtual machine runs the [agent](../agents/agents.md) and acts as a Docker host. Some of the common images, such as `microsoft/dotnet-framework`, `microsoft/aspnet`, `microsoft/aspnetcore-build`, and `microsoft/windowsservercore`, are pre-cached on this Docker host. Building new images from these images will therefore be faster. For a complete list of pre-cached images, see [Azure Pipelines Windows Container 1803 image](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/WindowsContainer1803-Readme.md).

### Microsoft-hosted MacOS agents

You cannot use macOS agents to build container images because Docker is not installed on these agents.

### Self-hosted agents

As an alternative to using Microsoft-hosted agents, you can set up [self-hosted agents](../agents/agents.md#install) with Docker installed. This is useful if you want to cache additional images on the Docker host and further improve the performance of your builds.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../agents/agents.md#install). Make sure that you have Docker installed on the agent.

::: moniker-end

<a name="buildimage"></a>

## Build an image

You can build a Docker image by running the `docker build` command in a script or by using the [Docker task](../tasks/build/docker.md).

::: moniker range="azure-devops"

To run the command in a script, add the following snippet to your `azure-pipelines.yml` file.

```yaml
steps:
- script: docker build -t $(dockerId)/$(imageName) .  # add options to this command to meet your needs
```

You can run any docker commands as part of the script block in your YAML file. If your Dockerfile depends on another image from a protected registry, you have to first run a `docker login` command in your script.
If you want to avoid managing the username and password as a secret, you can use the [Docker task](../tasks/build/docker.md), which uses the service connection for `docker login`. After you have used the [Docker task](../tasks/build/docker.md) to log in, the session is maintained for the duration of the job. You can then use follow-up tasks to execute any scripts.

```yaml
steps:
- script: docker login -u $(dockerId) -p $(pswd) <docker-registry-url>
```

Make sure that you define the Docker password as a [secret variable](../process/variables.md) in the build pipeline and not in the YAML file.

You don't need to specify `docker-registry-url` in the `login` command, if you are connecting to Docker Hub.

::: moniker-end

::: moniker range="< azure-devops"

1. Select **Tasks** in your build pipeline, and then add the [Docker task](../tasks/build/docker.md) to the job.
   > [!NOTE]
   > The [Docker task](../tasks/build/docker.md) supports:
   > * Docker best practices: By writing minimal YAML, you can build and push an image that's tagged and labeled with rich metadata (for example, build or commit).
   > * Docker standards: Work with a private registry like Azure Container Registry easily by tagging and naming an image with the registry host name and port. The task helps you to follow Docker naming conventions, for example, converting uppercase characters to lowercase and removing spaces in the image name.
   > * Secret management: The task makes it easy to use a service connection for connecting to any private container registry. For example, in the case of Azure Container Registry, this helps you avoid enabling the admin user and subsequently managing the username and password as a secret. 
   > After you have used the [Docker task](../tasks/build/docker.md) to log in, the session is maintained for the duration of the job. You can then use follow-up tasks to run any scripts that use the login done by the Docker task. 


1. Select the task, and then for **Action**, select **Build an image**.

1. Specify the connection to the registry that you plan to push the image to by selecting the **Container registry type** - `Container Registry` or `Azure Container Registry`. Then enter the properties for that connection type. If you plan to push the image to an Azure container registry, make sure that you [pre-create the registry in the Azure portal](/azure/container-registry/container-registry-get-started-portal).

::: moniker-end

## Integrate build and test tasks

Often you'll want to build and test your app before creating the Docker image. You can orchestrate this process either in your build pipeline or in your Dockerfile.

### Build and test in your build pipeline

In this approach, you use the build pipeline to orchestrate building your code, running your tests, and creating an image. This approach is useful if you want to:

* Use tasks (either built-in tasks or those you get from the Azure DevOps Marketplace) to define the pipeline used to build and test your app.
* Run tasks that require authentication via service connections (for example: authenticated NuGet or npm feeds).
* Publish test results. The test results published in the example can be viewed under the [Tests tab](../test/review-continuous-test-results-after-build.md) in the build.

To create an image, you run a `docker build` command at the end of your build pipeline. Your Dockerfile contains the instructions to copy the results of your build into the container.

### Build and test in your Dockerfile

In this approach, you use your Dockerfile to build your code and run tests. The build pipeline has a single step to run `docker build`. The rest of the steps are orchestrated by the Docker build process. It's common to use a [multi-stage Docker build](https://docs.docker.com/develop/develop-images/multistage-build/) in this approach. The advantage of this approach is that your build process is entirely configured in your Dockerfile. This means your build process is portable from the development machine to any build system. One disadvantage is that you can't use Azure Pipelines and TFS features such as tasks, jobs, or test reporting.

The instructions in the [earlier example](#example) demonstrate this approach.

## Push an image

After you've built a Docker image, you can push it to a Docker registry or to Azure Container Registry. You can do this by using either the `docker push` command or by using the `Docker` task. The [Docker task](../tasks/build/docker.md) makes the process easier for you because it sets up an authenticated connection to your registry or Azure Container Registry.

If you use Azure Container Registry, make sure that you have [pre-created the registry in the Azure portal](/azure/container-registry/container-registry-get-started-portal). You can get the admin user name and password from the **Access keys** section of the registry in the Azure portal.

Define a variable in your pipeline in the web UI:
* **dockerPassword:** Your password for Docker Hub or the admin password for Azure Container Registry.

::: moniker range="azure-devops"

To push the image to Docker Hub, update your `azure-pipelines.yml` as follows:

```yaml
variables:
  dockerId: my-docker-id  # Replace with your Docker ID for Docker Hub or the admin user name for the Azure Container Registry
  imageName: my-image-name  # Replace with the name of the image you want to publish

steps:
- script: |
    docker build -t $(dockerId)/$(imageName) .
    docker login -u $(dockerId) -p $(pswd)
    docker push $(dockerId)/$(imageName)
  env:
    pswd: $(dockerPassword)        # Define dockerPassword in the Variables tab of this pipeline in Pipelines page of web interface
```

To build and push the image to Azure Container Registry, use the following snippet:

```yaml
variables:
  dockerId: my-docker-id  # Replace with your Docker ID for Docker Hub or the admin user name for the Azure Container Registry
  imageName: my-image-name  # Replace with the name of the image you want to publish

steps:
- script: |
    docker build -t $(dockerId).azurecr.io/$(imageName) .
    docker login -u $(dockerId) -p $(pswd) $(dockerId).azurecr.io
    docker push $(dockerId).azurecr.io/$(imageName)
  env:
    pswd: $(dockerPassword)        # Define dockerPassword in the Variables tab of this pipeline in Pipelines page of web interface
```

::: moniker-end

::: moniker range="< azure-devops"

1. In your build pipeline, select **Tasks**, and then add a [Docker task](../tasks/build/docker.md) to the job that runs your build tasks.

1. Select the **Docker** task, and then for **Action**, select **Push an image**.

1. Specify how to connect to your registry in **Container registry type** and the corresponding service connection properties.

::: moniker-end

## Use Docker Compose

Docker Compose enables you to bring up multiple containers and run tests.
For example, you can use a _docker-compose.yml_ file to define two containers that need to work together to test your application: a web service that contains your application and a test driver.
You can build new container images every time you push a change to your code.
You can wait for the test driver to finish running tests before bringing down the two containers.

::: moniker range="azure-devops"

If you use Microsoft-hosted agents, you don't have to run any additional steps to install and use docker-compose.

::: moniker-end

To extend the [earlier example](#example) to use docker-compose:

1. Your sample repo already includes a `docker-compose.yml` file in the `docs` folder.
    
1. Add a **Bash** step to your build pipeline:

::: moniker range="azure-devops"

Add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: |
    docker-compose -f docs/docker-compose.yml --project-directory . -p docs up -d
    docker wait docs_sut_1
    docker-compose -f docs/docker-compose.yml --project-directory . down
```

In the build pipeline, add a **Bash** task with the following inline script:

```bash
docker-compose -f docs/docker-compose.yml --project-directory . -p docs up -d
docker wait docs_sut_1
docker-compose -f docs/docker-compose.yml --project-directory . down
```

::: moniker-end

::: moniker range="azure-devops"

## Build ARM containers

When you use Microsoft-hosted Linux agents, you create Linux container images for the x64 architecture. To create images for other architectures (for example, x86, ARM, and so on), you can use a machine emulator such as [QEMU](https://www.qemu.org/). The following steps illustrate how to create an ARM container image:

1. Author your Dockerfile so that an Intel binary of QEMU exists in the base Docker image. For example, the Raspbian Docker image from [Resin](https://resin.io/) already has this.

   ```Dockerfile
   FROM resin/rpi-raspbian
   ```

1. Run the following script in your build pipeline.

   ```cmd
   # register QEMU binary - this can be done by running the following Docker image
   docker run --rm --privileged multiarch/qemu-user-static:register --reset
   # build your image
   docker build -t $(dockerId)/$(imageName) .
   ```

::: moniker-end

<a name="troubleshooting"></a>
## Troubleshooting

::: moniker range="azure-devops"

If you can build your image on your development machine, but you're having trouble building it on Azure Pipelines or TFS, the following solutions might help:

* Check that you are using the correct type of agents - Microsoft-hosted Linux or Microsoft-hosted Windows - to mimic the type of container images you build on your development machine.

* If you use Microsoft-hosted agents to run your builds, the Docker images are not cached from build to build because you get a new machine for every build. This will make your builds on Microsoft-hosted agents run longer than those on your development machine.

::: moniker-end

::: moniker range="< azure-devops"

If you can build your image on your development machine, but you're having trouble building it on Azure Pipelines or TFS, check the version of Docker on the agent. Ensure that it matches what you have on your development machine. You can include a command-line script `docker --version` in your build pipeline to print the version of Docker.

::: moniker-end
