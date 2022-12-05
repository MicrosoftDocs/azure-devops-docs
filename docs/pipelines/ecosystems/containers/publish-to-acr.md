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
