---
title: Build an image
description: Build container images
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 4fd7bae1-7484-4bb2-9bb9-a95ef17cb8fb
ms.manager: jillfra
ms.author: shasb
author: shashankbarsin
ms.date: 08/30/2019
monikerRange: 'azure-devops'
---

# Build an image

[!INCLUDE [include](../../_shared/version-team-services.md)]

Azure Pipelines can be used to build images for any repository containing a Dockerfile. Building of both Linux and Windows containers is possible based on the agent platform used for the build.


## Get the code

Based on the desired runtime, [import](../../../repos/git/import-git-repository.md) (into Azure DevOps) or fork (into GitHub) the following repository

#### [Java](#tab/java)

[!INCLUDE [include](../_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-guides/gs-spring-boot-docker.git
```
#### [JavaScript](#tab/java-script)

[!INCLUDE [include](../_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```
#### [Python](#tab/python)

[!INCLUDE [include](../_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/Microsoft/python-sample-vscode-flask-tutorial/
```
#### [.NET Core](#tab/dotnet-core)

[!INCLUDE [include](../_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core-docker
```

* * *

## Create pipeline with build step

1. Sign in to your Azure DevOps organization and navigate to your project.
2. Go to **Pipelines**, and then select **New Pipeline**.
3. Select **GitHub** as the location of your source code and select your repository.

   > [!NOTE]
   > You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.
   > You might be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve and install**.

4. Select **Starter pipeline**. In the Review tab, replace the contents of azure-pipelines.yml with the following snippet - 

   ```YAML
   trigger:
   - master
   
   pool:
     vmImage: 'Ubuntu-16.04'
   
   variables:
     imageName: 'pipelines-javascript-docker'
   imageNmae:
   steps:
   - task: Docker@2
     displayName: Build an image
     inputs:
       repository: $(imageName)
       command: build
       Dockerfile: '**/Dockerfile'
   ```
Note: If you are using .net core then replace the  imageName: 'pipelines-javascript-docker 'with  imageName: 'pipelines-.net-core-docker'
5. Select **Save and run**, after which you're prompted for a commit message as Azure Pipelines adds the azure-pipelines.yml file to your repository. After editing the message, select **Save and run** again to see the pipeline in action.

   > [!TIP]
   > Learn more about how to push the image to [Azure Container Registry](acr-template.md) or [push it other container registries](./push-image.md) such as Google Container Registry or Docker Hub
   > Learn more about the [Docker task](../../tasks/build/docker.md) used in the above sample
   > Instead of using the recommended Docker task, it is also possible to invoke docker commands directly using a [command line task](../../tasks/utility/command-line.md)(script)

# Windows container images

Windows container images can be built using either Microsoft hosted Windows agents or Windows platform based self-hosted agents (all Microsoft hosted Windows platform based agents are shipped with Moby engine and client needed for Docker builds). Learn more about the Windows agent options available with [Microsoft hosted agents](../../agents/hosted.md).

> [!NOTE]
> Linux container images can be built using Microsoft hosted Ubuntu-16.04 agents or Linux platform based self-hosted agents. Currently the Microsoft hosted MacOS agents can't be used to build container images as Moby engine needed for building the images is not pre-installed on these agents.

# BuildKit

[BuildKit](https://github.com/moby/buildkit) introduces build improvements in the areas of performance, storage management,  feature functionality, and security. To enable BuildKit based docker builds, set the DOCKER_BUILDKIT variable as shown in the following snippet:

```YAML
variables:
  imageName: 'pipelines-javascript-docker'
  DOCKER_BUILDKIT: 1
    
steps:
- task: Docker@2
  displayName: Build an image
  inputs:
    repository: $(imageName)
    command: build
    Dockerfile: app/Dockerfile
```

# Pre-cached images on hosted agents

Some commonly used images are pre-cached on the Microsoft-hosted agents to avoiding long time intervals spent in pulling these images from container registry for every job. Images such as `microsoft/dotnet-framework`, `microsoft/aspnet`, `microsoft/windowsservercore`, `microsoft/nanoserver`, and `microsoft/aspnetcore-build` are pre-cached on Windows agents while `jekyll/builder` and `mcr.microsoft.com/azure-pipelines/node8-typescript` are pre-cached on Linux agents. The list of pre-cached images is available in the [release notes of azure-pipelines-image-generation](https://github.com/microsoft/azure-pipelines-image-generation/releases) repository.

# Frequently asked questions

## Is reutilizing layer caching during builds possible on Azure Pipelines?

In the current design of Microsoft-hosted agents, every job is dispatched to a newly provisioned virtual machine (based on the image generated from [azure-pipelines-image-generation](https://github.com/microsoft/azure-pipelines-image-generation) repository templates). These virtual machines are cleaned up after the job reaches completion, not persisted and thus not reusable for subsequent jobs. The ephemeral nature of virtual machines prevents the reuse of cached Docker layers.

However, Docker layer caching is possible using self-hosted agents as the ephemeral lifespan problem is not applicable for these agents.

## How to build Linux container images for architectures other than x64?

When you use Microsoft-hosted Linux agents, you create Linux container images for the x64 architecture. To create images for other architectures (for example, x86, ARM, and so on), you can use a machine emulator such as [QEMU](https://www.qemu.org/). The following steps illustrate how to create an ARM container image:
1. Author your Dockerfile so that an Intel binary of QEMU exists in the base image. For example, the raspbian image from resin already has this.
    ```
    FROM resin/rpi-raspbian
    ```
1. Run the following script in your job before building the image:
    ```
    # register QEMU binary - this can be done by running the following image
    docker run --rm --privileged multiarch/qemu-user-static:register --reset
    # build your image
    ```

## How to run tests and publish test results for containerized applications?

For different options on testing containerized applications and publishing the resulting test results, check out [Publish Test Results task](../../tasks/test/publish-test-results.md#docker)

