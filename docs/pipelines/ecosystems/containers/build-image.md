---
title: Build an image
description: Build container images
ms.topic: quickstart
ms.assetid: 4fd7bae1-7484-4bb2-9bb9-a95ef17cb8fb
ms.author: atulmal
author: azooinmyluggage
ms.date: 01/19/2021
monikerRange: 'azure-devops'
---

# Quickstart: Build an image

[!INCLUDE [include](../../includes/version-team-services.md)]

Get started with container images by using Azure Pipelines to build an image. All you need to build an image is a Dockerfile in your repository. 

You can build both Linux and Windows containers depending on what agent you use in your pipeline.
Once you build an image, you can then push it to Azure Container Registry, Docker Hub, and Google Container registry. See [push an image](push-image.md) to learn more about pushing images to container registries. 


## Prerequisites
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- A GitHub account. If you don't have one, sign up for [free](https://github.com/join). 
- A GitHub repository with a Dockerfile. If you do not have a repository to use, fork this repository that contains a sample application and a Dockerfile:
    ```
    https://github.com/MicrosoftDocs/pipelines-javascript-docker
    ```
## Build a Linux or Windows image

1. Sign in to your Azure DevOps organization and navigate to your project.
2. Go to **Pipelines**, and then select **New Pipeline**.
3. Select **GitHub** as the location of your source code and select your repository.

   > [!NOTE]
   > You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.
   > You might be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve and install**.

4. Select **Starter pipeline**. Replace the contents of azure-pipelines.yml with this code. If you are building a Linux app, use `ubuntu-1604` for your `vmImage`.  You can use `windows-latest` for your `vmImage` for Windows. 
 
   ```yaml
           trigger:
           - main
           
           pool:
             vmImage: 'ubuntu-latest' # set to windows-latest or another Windows vmImage for Windows builds
           
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

    Windows container images can be built using either Microsoft hosted Windows agents or Windows platform based self-hosted agents (all Microsoft hosted Windows platform-based agents are shipped with Moby engine and client needed for Docker builds). Linux container images can be built using Microsoft hosted Ubuntu agents or Linux platform based self-hosted agents. Learn more about the Windows and Linux agent options available with [Microsoft hosted agents](../../agents/hosted.md).
    
    > [!NOTE]
    > Currently the Microsoft hosted MacOS agents can't be used to build container images as the Moby engine needed for building the images is not pre-installed on these agents.
        
5. Select **Save and run**. You'll see a prompt to add a commit message when adding `azure-pipelines.yml`  to your repository. Edit the message and then select **Save and run** again to see the pipeline in action.

   > [!TIP]
   > Learn more about how to push the image to [Azure Container Registry](acr-template.md) or [push it other container registries](./push-image.md) such as Google Container Registry or Docker Hub.
   > Learn more about the [Docker task](../../tasks/build/docker.md) used in the above sample.
   > Instead of using the recommended Docker task, it is also possible to invoke docker commands directly using a [command line task](../../tasks/utility/command-line.md)(script)

## Clean up resources

If you're not going to continue to use this application, delete your pipeline and code repository.
## FAQ

### What pre-cached images are available on hosted agents?

Some commonly used images are pre-cached on Microsoft-hosted agents to avoid long time intervals spent in pulling these images from the container registry for every job. The list of pre-cached images is available in the [release notes of azure-pipelines-image-generation](https://github.com/actions/virtual-environments/releases) repository.

### How do I set the BuildKit variable for my docker builds?

[BuildKit](https://github.com/moby/buildkit) introduces build improvements in the areas of performance, storage management, feature functionality, and security. To enable BuildKit based docker builds, set the DOCKER_BUILDKIT variable.

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

> [!NOTE]
> BuildKit is not currently supported on Windows hosts.

### How can I use a self-hosted agent?

You need to have Docker installed on your self-hosted machine before creating a container image. Add the [Docker installer task](../../tasks/tool/docker-installer.md) in your pipeline before to the [Docker task](../../tasks/build/docker.md) that builds your image. 


### How can I create a script-based Docker build instead of using the docker task?

You can use the command `build` (or any other Docker command). 

```
docker build -f Dockerfile -t foobar.azurecr.io/hello:world .
```

This command creates an equivalent image to one built with the Docker task. 
The Docker task itself internally calls the Docker binary on a script, and also stitches together a few more commands to provide a few more benefits. Learn more in the [Docker task documentation](../../tasks/build/docker.md).

### Is reutilizing layer caching during builds possible on Azure Pipelines?

In the current design of Microsoft-hosted agents, every job is dispatched to a newly provisioned virtual machine (based on the image generated from [azure-pipelines-image-generation](https://github.com/microsoft/azure-pipelines-image-generation) repository templates). These virtual machines are cleaned up after the job reaches completion, not persisted and thus not reusable for subsequent jobs. The ephemeral nature of virtual machines prevents the reuse of cached Docker layers.

However, you can cache Docker layers with self-hosted agents because the ephemeral lifespan problem is not applicable for these agents.

### How to build Linux container images for architectures other than x64?

When you use Microsoft-hosted Linux agents, you create Linux container images for the x64 architecture. To create images for other architectures (for example, x86 or ARM), you can use a machine emulator like [QEMU](https://www.qemu.org/). The following steps illustrate how to create an ARM container image by using QEMU:

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

### How to run tests and publish test results for containerized applications?

For different options on testing containerized applications and publishing the resulting test results, check out [Publish Test Results task](../../tasks/test/publish-test-results.md#docker).
## Next steps

Advance to the next article to learn how to push an image to a container registry. 
> [!div class="nextstepaction"]
> [Push an image](push-image.md)
