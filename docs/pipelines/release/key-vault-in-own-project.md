---
title: Use Azure Key Vault in your project
description: How to set up Azure Key vaults in your project and use it in your Azure Pipelines
ms.topic: tutorial
ms.date: 06/30/2021
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Use Azure Key Vault with your project

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019**

With Azure Key Vault you can securely store and manage your sensitive information such as passwords, API keys, certificates, etc. using Azure Key Vault, you can easily create and manage encryption keys to encrypt your data. Azure Key Vault can also be used to manage certificates for all your resources.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md#create-an-organization) if you don't already have one.
- Your own project. [Create a project](../../organizations/projects/create-project.md#create-a-project) if you don't already have one.
- Your own repository. [Create a new Git repo](../../repos/git/create-new-repo.md) if you don't already have one.
- An Azure subscription. [Create a free Azure account](https://azure.microsoft.com/free) if you don't already have one.

## Create an Azure Key Vault

1. Navigate to [Azure Portal](https://portal.azure.com/).

1. Select **Create a resource** in the left navigation pane.

    :::image type="content" source="media/create-resource-pane.png" alt-text="Create a new resource from the left nav pane":::

1. Search for **Key Vault** and then click Enter.
    
    :::image type="content" source="media/search-resources.png" alt-text="Search for Azure Key Vault":::

1. Select **Create** to create a new Azure Key Vault.

    :::image type="content" source="media/create-key-vault.png" alt-text="Create a new Azure Key Vault":::

1. Select your **Subscription** and then add a new **Resource group**. Enter a **Key vault name** and select a **Region** and a **Pricing tier**. Select **Review + create** when you are done.

    :::image type="content" source="media/create-key-vault-window.png" alt-text="Create a new key vault window":::

1. Select **Go to resource** when the deployment of your new resource is completed.

    :::image type="content" source="media/go-to-resources.png" alt-text="Go to resource":::
