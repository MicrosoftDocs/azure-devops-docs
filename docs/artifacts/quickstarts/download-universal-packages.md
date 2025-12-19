---
title: Download Universal Packages in Azure Artifacts
description: Learn how to download Universal Packages from an Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 01/16/2025
monikerRange: 'azure-devops'
---

# Download Universal Packages from Azure Artifacts feeds

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article guides you through downloading Universal Packages from your Azure Artifacts feed using the command line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Install [Azure CLI](/cli/azure/install-azure-cli).<br> - Install the [Azure DevOps extension](#install-azure-devops-extension) version 0.14.0 or higher. |

## Install Azure DevOps extension

Ensure that you have Azure CLI (version 2.10.1 or higher) installed. Then, follow the steps below to install or update the Azure DevOps extension to manage your Azure DevOps resources from the command line.

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

## Download Universal Packages

Make sure you have set up authentication, and then run the following command to download a specific Universal Package from your feed using the Azure CLI:

- **Project-scoped feed**:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH>
    ```

- **Organization-scoped feed**:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH>
    ```

> [!NOTE]
> Azure Artifacts does not support a direct API endpoint to download Universal Packages. You must use the Azure CLI to download the package.

## Download specific files

To download only specific files, use the `--file-filter` parameter to fetch only the specified subset of files. See [File matching patterns reference](../../pipelines/tasks/file-matching-patterns.md) for more details.
 
- **Project-scoped feed**:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH> --file-filter <MATCH_PATTERN>
    ```

- **Organization-scoped feed**:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH> --file-filter <MATCH_PATTERN>
    ```

**Example:** Using `--file-filter logs/.log` would match all files in the `logs` directory with the `.log` extension.

## Download the latest version

Use wildcards `*` to download the latest version of your Universal Packages.

**Examples**:

- `--version '*'`: Download the latest version.

- `--version '1.*'`: Download the latest version with major version 1.

- `--version '1.2.*'`: Download the latest patch release with major version 1 and minor version 2.
  
> [!NOTE]
> Wildcard patterns are not supported with prerelease versions (packages with a dash in their version number).

## Related content

- [Publish Universal Packages](universal-packages.md)

- [Publish and download Universal Packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/universal-packages.md)

- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)