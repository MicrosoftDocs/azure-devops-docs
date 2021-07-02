---
title: Build and push Docker images to Azure Container Registry
description: Build and push Docker images with Azure Pipelines
ms.topic: tutorial
ms.assetid: 2ae9bd01-22ff-4147-a5bb-24d884812635
ms.author: atulmal
author: azooinmyluggage
ms.date: 05/20/2021
monikerRange: 'azure-devops'
---

# Build and push Docker images to Azure Container Registry

In this step-by-step tutorial, you'll learn how to set up a continuous integration pipeline to build a containerized application. New pull requests trigger the pipeline to build and publish Docker images to Azure Container Registry.

## Prerequisites

* A GitHub account. [Create a free GitHub account](https://github.com), if you don't already have one.

* An Azure DevOps organization and a project. [Create a new organization](../../../organizations/accounts/create-organization.md) and/or a [new project](../../..//organizations/projects/create-project.md), if you don't already have one.

* An Azure account. Sign up for a [free Azure account](https://azure.microsoft.com/free/), if you don't already have one.

## Get the code

Fork or clone the *pipeline-javascript-docker* sample application:

```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```

## Create a container registry

1. Sign in to [Azure](https://portal.azure.com/), and then select the **Azure Cloud Shell** button in the upper-right corner.

    :::image type="content" source="../media/azure-cloud-shell.png" alt-text="Azure Cloud Shell button":::

1. Run the following commands to create a resource group and an Azure Container Registry using the Azure CLI

    ```azurecli-interactive
    # Create a resource group
    az group create --name myapp-rg --location eastus
    
    # Create a container registry
    az acr create --resource-group myapp-rg --name myContainerRegistry --sku Basic
    ```

You can also use the Azure portal web UI to create your Azure Container Registry. See the [Create a container registry](/azure/container-registry/container-registry-get-started-portal#create-a-container-registry) for details.

> [!IMPORTANT]
> You must enable the admin user account in order for you to deploy a Docker image from an Azure Container Registry. See [Container registry authentication](/azure/container-registry/container-registry-authentication#admin-account) for more details.

## Create the pipeline

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Pipelines**, and then select **New Pipeline** to create a new pipeline.

    :::image type="content" source="../media/new-pipeline.png" alt-text="Create a new pipeline":::

1. Select **GitHub YAML**, and then select **Authorize Azure Pipelines** to provide the appropriate permissions to access your repository.

1. You might be asked to sign in to GitHub. If so, enter your GitHub credentials, and then select your repository from the list of repositories.

1. From the **Configure** tab, select the **Docker - Build and push an image to Azure Container Registry** task.

    :::image type="content" source="../media/docker-task.png" alt-text="Build and push Docker images to Azure Container Registry":::

1. Select your **Azure Subscription**, and then select your **Container registry** from the dropdown menu. 

1. Provide an **Image Name** to your container image, and then select **Validate and configure**.

   As Azure Pipelines creates your pipeline, it:

   * Creates a _Docker registry service connection_ to enable your pipeline to push images to your container registry.

   * Generates an *azure-pipelines.yml* file, which defines your pipeline.
  
1. Review your pipeline YAML and select **Save and run** when you are ready.

    :::image type="content" source="../media/review-your-pipeline.png" alt-text="Review your pipeline, save & run":::

1. Add a **Commit message**, and then select **Save and run** to commit your changes and run your pipeline.

1. As your pipeline runs, select the build job to watch your pipeline in action.

    :::image type="content" source="../media/jobs-build.png" alt-text="Monitor builds":::

<a name="how"></a>

## How we build your pipeline

The pipeline that we just created in the previous section was generated from the _Docker container template_ YAML. The build stage uses the Docker task `Docker@2` to build and push your Docker image to the container registry.

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

## Clean up resources

If you are not going to continue to use this application, you can delete the resources you created in this tutorial to avoid incurring ongoing charges. Run the following to delete your resource group. 

```azurecli-interactive
az group delete --name myapp-rg
```

## Related articles

- [Deploy containerized ASP.NET Core apps](../../apps/cd/azure/aspnet-core-to-acr.md)
- [Deploy to Azure Web App for Containers (Classic)](../../apps/cd/deploy-docker-webapp.md)
- [Docker Content Trust](/azure/devops/pipelines/ecosystems/containers/content-trust)
