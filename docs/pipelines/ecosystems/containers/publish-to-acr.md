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