---
title: Connect to an Azure Artifacts feed - Universal Packages
description: Lean how to set up your project and connect to an Azure Artifacts feed to manage your Universal Packages.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 01/22/2025
monikerRange: 'azure-devops'
---

# Connect to an Azure Artifacts feed - Universal Packages

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Universal Packages allow developers to store various types of packages beyond the traditional ones like NuGet, npm packages by bundling files into a single Universal Package. Using the Azure CLI, they can then publish their Universal Packages directly from the command line to their Azure Artifacts feed. Universal Packages can vary in size reaching up to 4 TiB, but they must always have a name and a version number.
This article guides you through setting up your project and connecting to an Azure Artifacts feed to manage your Universal Packages.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Azure CLI](/cli/azure/install-azure-cli).<br> - Install the [Azure DevOps extension](#install-azure-devops-extension) version 0.14.0 or higher. |

## Install Azure DevOps extension

Ensure that you have Azure CLI installed, then follow the steps below to install the Azure DevOps extension for managing Azure DevOps services from the command line.

1. Run the following command to install the Azure DevOps extension:

   ```azurecli
   az extension add --name azure-devops
   ```

1. Run the following command if the Azure DevOps extension is already installed and you want to update it to the latest version:

   ```azurecli
   az extension update --name azure-devops
   ```

## Connect to a feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Universal Packages** from the left navigation pane.

1. In the **Project setup** section, select **Windows** if you're using a Windows device, otherwise select **Other**.

    ### [Windows](#tab/windows/)
    
    1. Run the following command to log into the Azure CLI:
    
        ```azurecli
        az login
        ```
    
    1. Run the following command to set your project and organization as the CLI's default configuration:
    
        ```azurecli
        az devops configure --defaults project=<YOUR_PROJECT_NAME> organization=https://dev.azure.com/<YOUR_ORGANIZATION_NAME> 
        ```
    
    > [!TIP]
    > If you're having troubles logging in with your Microsoft Entra or MSA identity, switch to the **Other** tab and follow the instructions to authenticate with a Personal Access Token.
    
    ### [Other](#tab/other/)
    
    1. Generate a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scopes, and copy it to your clipboard.
    
    1. Run the following command to log in, then when prompted paste the Personal Access Token you created in the previous step, and press *Enter*.
     
        ```azurecli
        az devops login --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> 
        ```
    
- - -

## Next steps

> [!div class="nextstepaction"]
> [Publish Universal Packages](../quickstarts/universal-packages.md)