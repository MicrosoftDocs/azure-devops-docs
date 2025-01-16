---
title: Publish Universal Packages in Azure Artifacts
description: Learn how to publish Universal Packages to an Azure Artifacts feed.
ms.assetid: f47b858c-138d-426d-894c-a5fe1d5aa08e
ms.service: azure-devops-artifacts
ms.custom: devx-track-azurecli
ms.topic: conceptual
ms.date: 01/16/2025
monikerRange: 'azure-devops'
---

# Publish Universal Packages from Azure Artifacts feeds

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Universal Packages enable developers to store a wide range of package types beyond traditional formats like NuGet, npm, Python packages, etc. 
Using Azure CLI, you can publish Universal Packages directly from the command line. These packages can be as large as 4 TiB, but they must always include a name and version number. This article guides you through publishing Universal Packages to your Azure Artifacts feed.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Install [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli).<br> - Install the [Azure DevOps extension](#install-azure-devops-extension) version 0.14.0 or higher. |

## Install Azure DevOps extension

Ensure that you have Azure CLI (version 2.10.1 or higher) installed. Then, follow the steps below to install or update the Azure DevOps extension for managing Azure DevOps services from the command line.

1. Run the following command to install the Azure DevOps extension:

   ```azurecli
   az extension add --name azure-devops
   ```

1. If the Azure DevOps extension is already installed and you want to update it to the latest version, run:

   ```azurecli
   az extension update --name azure-devops
   ```

## Create a feed

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, choose the **Visibility** option that defines who can view your packages, check **Include packages from common public sources** if you want to include packages from sources like *nuget.org* or *npmjs.com*, and for **Scope**, decide whether the feed should be scoped to your project or the entire organization.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-azure-devops.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Services.":::

## Publish Universal Packages

To publish a Universal Package to your feed, you need to provide a package name and version number. 
The package name must be in lowercase, start and end with a letter or number, and can only include letters, numbers, and non-consecutive dashes `-`, underscores `_`, or periods `.`.
Similarly, the package version must also be in lowercase and should not contain build metadata (indicated by a + suffix). See [semantic versioning](https://semver.org/spec/v2.0.0.html) for more details.

1. Run the following command to publish your Universal Package to your feed:

    - **Project-scoped feed**:
    
        ```azurecli
        az artifacts universal publish --organization https://dev.azure.com/<YOUR_ORGANIZATION> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <PACKAGE_DIRECTORY> --description <PACKAGE_DESCRIPTION>
        ```

    - **Organization-scoped feed**:
    
        ```azurecli
        az artifacts universal publish --organization https://dev.azure.com/<YOUR_ORGANIZATION> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <PACKAGE_DIRECTORY> --description <PACKAGE_DESCRIPTION>
        ```
    
> [!NOTE]
> Universal Packages containing an exceptionally large number of files (100K+) may fail to publish. In this case, we recommend bundling the files into a *ZIP* or *TAR* archive to reduce the file count.

## View published packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Once the publishing process is successfully completed, your package should be available in your feed.

    :::image type="content" source="media/view-published-package.png" alt-text="A screenshot displaying the newly published Universal Package." lightbox="media/view-published-package.png":::

## Related content

- [Download Universal Packages](download-universal-packages.md)

- [Publish and download Universal Packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/universal-packages.md)

- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)
