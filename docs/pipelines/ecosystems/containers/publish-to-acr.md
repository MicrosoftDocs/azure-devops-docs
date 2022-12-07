---
title: Create a service connection and build and publish Docker images to Azure Container Registry
description: How to create service connections and build and publish Docker images with Azure Pipelines
ms.topic: tutorial
ms.author: rabououn
ms.date: 12/01/2022
monikerRange: 'azure-devops'
---

# Build and publish Docker images to Azure Container Registry

Using Azure Pipelines, you can set up a pipeline workflow to build and publish your Docker images to Azure Container Registry. In this article, you will learn how to:

> [!div class="checklist"]
>
> - Create a service connection to authenticate with Azure DevOps
> - Create an Azure Container Registry  
> - Build and publish your Docker container

## Prerequisites

- A GitHub account. [sign up for free](https://github.com), if you don't have one already.

- [An Azure DevOps organization](../../../organizations/accounts/create-organization.md).

- [An Azure DevOps project](../../..//organizations/projects/create-project.md).

- An Azure account with an active subscription. [Sign up for free](https://azure.microsoft.com/free/) if you don't have one already.

## Get the code

Fork or clone the sample app to follow along with this tutorial.

### [JavaScript](#tab/javascript)

```
https://github.com/MicrosoftDocs/pipelines-javascript-docker
```

### [.NET Core](#tab/dotnet-core)

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core-docker
```

* * *

## Create an Azure Container Registry

### [Portal](#tab/portal)

1. Navigate to [Azure portal](https://portal.azure.com/).

1. Select **Create a resource** from the left navigation panel, and then select **Containers** then **Container Registry**.

1. Select your **Subscription** and then select your **Resource group** or create a new one.

1. Enter a **Registry name** for your container registry. The registry name must be unique within Azure and must contain at least 5 characters.

1. Select your preferred **Location** and **SKU** and then select **Review + create**.

1. Review your settings and then select **Create** when you are done.

### [CLI](#tab/cli)

1. Navigate to [Azure portal](https://portal.azure.com/), and open the Azure CLI by selecting the **Azure Cloud Shell** button from the toolbar.

1. Create a new resource group.

    ```azurecli-interactive
    az group create --name myapp-rg --location eastus
    ```
1. Create a new container registry.

    ```azurecli-interactive
    az acr create --resource-group myapp-rg --name mycontainerregistry --sku Basic
    ```

* * *

## Create a Docker registry service connection - Managed Service Identity

1. From your project, select the gear icon ![gear icon](../../../media/icons/gear-icon.png) to navigate to your **Project settings**.

1. Select **Service connections** from the left pane.

1. Select **New service connection**, and then select **Docker Registry** then **Next**.

1. Select **Azure Container Registry**, and then select *Managed Service Identity* as your **Authentication Type**.

1. Enter your [Subscription ID](/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription) **Subscription name**, [Tenant ID](/azure/azure-portal/get-subscription-tenant-id#find-your-azure-ad-tenant), and your [Azure container registry login server](/azure/container-registry/container-registry-get-started-portal?tabs=azure-cli#create-a-container-registry).

1. Enter a name for your service connection, and then check the **Grant access permission to all pipelines** checkbox.

1. Select **Save** when you are done.

    :::image type="content" source="../media/acr-service-connection-msi.png" alt-text="A screenshot showing how to set up a docker registry service connection MSI.":::

## Create a Docker registry service connection - Service Principal

1. From your project, select the gear icon ![gear icon](../../../media/icons/gear-icon.png) to navigate to your **Project settings**.

1. Select **Service connections** from the left pane.

1. Select **New service connection**, and then select **Docker Registry** then **Next**.

1. Select **Azure Container Registry**, and then select *Service Principal* as your **Authentication Type**.

1. Select your **Subscription** from the dropdown menu.

1. Select your **Azure container registry** from the list.

1. Enter a name for your service connection.

1. Select **Save** when you are done.

    :::image type="content" source="../media/acr-service-connection.png" alt-text="A screenshot showing how to set up a docker registry service connection.":::

## Build and publish to Azure Container Registry

1. From your project, select **Pipelines** and then select **Create Pipeline**.

1. Select the service hosting your source code (Azure Repos, GitHub etc.).

1. Select your repository, and then select **Starter pipeline**.

1. Delete the default yaml pipeline and use the following snippet:

    ```yml
    trigger:
    - main
    
    resources:
    - repo: self
    
    variables:
      dockerRegistryServiceConnection: '<SERVICE_CONNECTION_NAME>'
      imageRepository: '<IMAGE_NAME>'
      dockerfilePath: '$(Build.SourcesDirectory)/app/Dockerfile'
      tag: '$(Build.BuildId)'
    
    stages:
    - stage: Build
      displayName: Build and publish stage
      jobs:
      - job: Build
        displayName: Build job
        pool:
          vmImage: 'ubuntu-latest'
        steps:
        - task: Docker@2
          displayName: Build and publish image to Azure Container Registry
          inputs:
            command: buildAndPush
            containerRegistry: $(dockerRegistryServiceConnection)
            repository: $(imageRepository)
            dockerfile: $(dockerfilePath)
            tags: |
              $(tag)
    ```

1. Once the pipeline run is complete, you can verify your image in Azure. Navigate to your container registry in Azure portal, and then select **Repositories**.

    :::image type="content" source="../media/acr-image.png" alt-text="A screenshot showing the image in Azure Portal.":::

## Clean up resources

If you don't plan to continue using this application, delete the resource group to avoid incurring ongoing charges.

```azurecli-interactive
az group delete --name myapp-rg
```

## Related articles

- [Deploy your ASP.NET Core app as a container](../../apps/cd/azure/aspnet-core-to-acr.md)
- [Build and push images to Azure Container Registry with Docker templates](./acr-template.md)
- [Build and deploy to Azure Kubernetes Service](/azure/aks/devops-pipeline)
