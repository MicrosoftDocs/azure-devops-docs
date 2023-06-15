---
title: Build container images to deploy apps
description: Build Linux or Windows container images for app deployment using Azure Pipelines.
ms.topic: quickstart
ms.assetid: 4fd7bae1-7484-4bb2-9bb9-a95ef17cb8fb
ms.date: 09/22/2022
monikerRange: 'azure-devops'
---

# Quickstart: Build a container image to deploy apps using Azure Pipelines

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

This quickstart shows how to build a container image for app deployment using Azure Pipelines. To build this image, all you need is a Dockerfile in your repository. You can build Linux or Windows containers, based on the agent that you use in your pipeline.

## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- A GitHub account. If you don't have one, [sign up for free](https://github.com/join). 
- A GitHub repository with a Dockerfile. If you don't have a repository to use, fork the following repository, which contains a sample application and a Dockerfile:

  ```
  https://github.com/MicrosoftDocs/pipelines-javascript-docker
  ```

## Build a Linux or Windows image

1. Sign in to your Azure DevOps organization, and go to your project.
1. Go to **Pipelines**, and select **New Pipeline**.
1. Select **GitHub** as the location for your source code.
1. Select your repository, and then select **Starter pipeline**.

   - If you're redirected to GitHub to sign in, enter your GitHub credentials.
   - If you're redirected to GitHub to install the Azure Pipelines app, select **Approve and install**.

1. Replace the contents of **azure-pipelines.yml** with the following code. Based on whether you're deploying a Linux or Windows app, make sure to respectively set `vmImage` to either `ubuntu-latest` or `windows-latest`.

   ```yaml
    trigger:
    - main
    
    pool:
      vmImage: 'ubuntu-latest' 
    
    variables:
      imageName: 'pipelines-javascript-docker'
    
    steps:
    - task: Docker@2
      displayName: Build an image
      inputs:
        repository: $(imageName)
        command: build
        Dockerfile: app/Dockerfile
    ```

1. When you're done, select **Save and run**.

   When you add the **azure-pipelines.yml** file to your repository, you're prompted to add a commit message.

For more information, see the [Docker task](/azure/devops/pipelines/tasks/reference/docker-v2) used by this sample application. You can also directly invoke Docker commands using a [command line task](/azure/devops/pipelines/tasks/reference/cmd-line-v2).

## Clean up resources

If you don't plan to continue using this application, delete your pipeline and code repository.

## FAQ

### What agents can I use to build container images?

- You can build Linux container images using Microsoft-hosted Ubuntu agents or Linux platform-based self-hosted agents.

- You can build Windows container images using Microsoft-hosted Windows agents or Windows platform based self-hosted agents. All Microsoft-hosted Windows platform-based agents are shipped with the Moby engine and client needed for Docker builds.

- You currently can't use Microsoft-hosted macOS agents to build container images because the Moby engine needed for building the images isn't pre-installed on these agents.

For more information, see the [Windows and Linux agent options available with Microsoft-hosted agents](../../agents/hosted.md).

### What pre-cached images are available on hosted agents?

To avoid spending long intervals pulling these images for every job from the container registry, some commonly used images are pre-cached on Microsoft-hosted agents. For the list of available pre-cached images, see the release notes in the [**azure-pipelines-image-generation** repository](https://github.com/actions/runner-images/releases).

### How do I set the BuildKit variable for my Docker builds?

[BuildKit](https://github.com/moby/buildkit) introduces build improvements around performance, storage management, feature functionality, and security. BuildKit currently isn't supported on Windows hosts.

To enable Docker builds using BuildKit, set the **DOCKER_BUILDKIT** variable.

```YAML
trigger:
- main
   
pool:
  vmImage: 'ubuntu-latest'
   

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

### How can I use a self-hosted agent?

1. Before you create your container image, make sure to install Docker on your self-hosted machine.

1. In your pipeline, *prior* to the [Docker task](/azure/devops/pipelines/tasks/reference/docker-v2) that builds your image, add the [Docker installer task](/azure/devops/pipelines/tasks/reference/docker-installer-v0).

### How can I create a script-based Docker build instead of using the Docker task?

You can use the `build` command or any other Docker command.

```
docker build -f Dockerfile -t foobar.azurecr.io/hello:world .
```

This command creates an image equivalent to one built with the Docker task. Internally, the Docker task calls the Docker binary on a script and stitches together a few more commands to provide a few more benefits. Learn more about [Docker task](/azure/devops/pipelines/tasks/reference/docker-v2).

### Can I reuse layer caching during builds on Azure Pipelines?

If you're using Microsoft-hosted agents, every job is dispatched to a newly provisioned virtual machine, based on the image generated from [azure-pipelines-image-generation](https://github.com/microsoft/azure-pipelines-image-generation) repository templates. These virtual machines are cleaned up after the job completes. This ephemeral lifespan prevents reusing these virtual machines for subsequent jobs and the reuse of cached Docker layers. As a workaround, you can set up a multi-stage build that produces two images and pushes them to an image registry at an early stage. You can then tell Docker to use these images as a cache source with the `--cache-from` argument. 

If you're using self-hosted agents, you can cache Docker layers without any workarounds because the ephemeral lifespan problem doesn't apply to these agents. 

### How do I build Linux container images for architectures other than x64?

When you use Microsoft-hosted Linux agents, you create Linux container images for the x64 architecture. To create images for other architectures, such as x86 or ARM processor, you can use a machine emulator such as [QEMU](https://www.qemu.org/).

The following steps show how to create an ARM processor container image by using QEMU:

1. Author your Dockerfile with a base image that matches the target architecture:

   ```
   FROM arm64v8/alpine:latest
   ```

1. Run the following script in your job before you build the image:

   ```
   # register QEMU binary - this can be done by running the following image
   docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
   # build your image
   ```

For more information, see [qemu-user-static](https://github.com/multiarch/qemu-user-static) on GitHub.

### How do I run tests and publish test results for containerized applications?

For different options on testing containerized applications and publishing the resulting test results, see [Publish Test Results task](../../tasks/test/publish-test-results.md#docker).

## Next steps

After you build your container image, push the image to Azure Container Registry, Docker Hub, or Google Container registry. To learn how to push an image to a container registry, continue to either of the following articles:

> [!div class="nextstepaction"]
> [Push an image to Azure Container Registry](acr-template.md)
>
> [Push an image to Docker Hub or Google Container Registry](push-image.md)
