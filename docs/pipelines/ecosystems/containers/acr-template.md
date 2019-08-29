---
title: Build and push to Azure Container Registry
description: Build and push images to Azure Container Registry
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
ms.assetid: 2ae9bd01-22ff-4147-a5bb-24d884812635
ms.manager: jillfra
ms.author: shasb
author: shashankbarsin
ms.date: 08/28/2019
monikerRange: 'azure-devops'
---

# Build and push to Azure Container Registry

[!INCLUDE [include](../../_shared/version-team-services.md)]

In this step-by-step guide you'll learn how to create a pipeline that continuously builds a repository that contains a Dockerfile. Every time you change your code, the images are automatically pushed to Azure Container Registry.

## Prerequisites

[!INCLUDE [include](../../_shared/prerequisites.md)]

[!INCLUDE [include](../../_shared/azure-prerequisites.md)]

## Get the code

[!INCLUDE [include](../_shared/get-code-before-sample-repo-option-to-use-own-code.md)]
```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```

## Create a container registry

[!INCLUDE [include](../_shared/sign-in-azure-cli.md)]

```azurecli-interactive
# Create a resource group
az group create --name myapp-rg --location eastus

# Create a container registry
az acr create --resource-group myapp-rg --name myContainerRegistry --sku Basic
```

## Sign in to Azure Pipelines

[!INCLUDE [include](../_shared/sign-in-azure-pipelines.md)]

[!INCLUDE [include](../_shared/create-project.md)]

## Create the pipeline

### Connect and select repository

[!INCLUDE [include](../_shared/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **Docker**.

1. If you are prompted, select the subscription in which you created your registry.

2. Select the container registry that you created above.

3. Select **Validate and configure**.

   As Azure Pipelines creates your pipeline, it:

   * Creates a _Docker registry service connection_ to enable your pipeline to push images into your container registry.

   * Generates an *azure-pipelines.yml* file, which defines your pipeline.
  
4. When your new pipeline appears, take a look at the YAML to see what it does (for more information, see [How we build your pipeline](#how) below). When you're ready, select **Save and run**.

5. The commit that will create your new pipeline appears. Select **Save and run**.

6. If you want, change the **Commit message** to something like _Add pipeline to our repository_. When you're ready, select **Save and run** to commit the new pipeline into your repository, and then begin the first run of your new pipeline!

As your pipeline runs, select the build job to watch your pipeline in action.

<a name="how"></a>
## How we build your pipeline

When you finished selecting options and then proceeded to validate and configure the pipeline (see above) Azure Pipelines created a pipeline for you, using the _Docker container template_.

The build stage uses the _Docker task_ to build and push the image to the container registry.

```YAML
- stage: Build
  displayName: Build and push stage
  jobs:  
  - job: Build
    displayName: Build job
    pool:
      vmImage: $(vmImageName)
    steps:
    - task: Docker@2
      displayName: Build and push an image to container registry
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: |
          $(tag)
```

[!INCLUDE [include](../_shared/clean-up-resources.md)]

## Learn more

We invite you to learn more about:
* The services:
  - [Azure Container Registry](https://azure.microsoft.com/services/container-registry/)
* The template used to create your pipeline: [docker-container](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/docker-container.yml)
* The method your pipeline uses to connect to the service: [Docker registry service connections](../../library/service-endpoints.md#sep-docreg)
* Some of the tasks used in your pipeline, and how you can customize them:
   * [Docker task](../../tasks/build/docker.md)
   * [Kubernetes manifest task](../../tasks/deploy/kubernetes-manifest.md)
* Some of the key concepts for this kind of pipeline:
   * [Jobs](../../process/phases.md)
   * [Docker registry service connections](../../library/service-endpoints.md#sep-docreg) (the method your pipeline uses to connect to the service)
