---
title: Publish and download Universal Packages in Azure Artifacts
description: How to set up your project and connect to your Azure Artifacts feed to publish and download Universal Packages.
ms.assetid: f47b858c-138d-426d-894c-a5fe1d5aa08e
ms.service: azure-devops-artifacts
ms.custom: devx-track-azurecli
ms.topic: conceptual
ms.date: 04/05/2024
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Publish and download Universal Packages in Azure Artifacts

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Universal Packages enable developers to store a wide range of package types beyond the traditional ones like NuGet, npm, Python packages, etc. 
Using Azure CLI, you can publish and download Universal Packages directly from the command line. While the size of published packages can vary, reaching up to 4 TB, they must always maintain the essential requirement of including a name and version number. This article will walk you through the steps to publish and download Universal Packages from your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../..//organizations/projects/create-project.md) if you haven't already.

- [Install Azure CLI](/cli/azure/install-azure-cli).

- [Install the Azure DevOps extension](#install-azure-devops-extension) version 0.14.0 or higher. 

## Create a feed

If you already have a feed, you can move on to the next section. Otherwise, follow the steps below to create a new Azure Artifacts feed:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a descriptive **Name** for your feed and set its **Visibility** (who can view packages in your feed). Define the **Scope** of your feed, and then select the **Upstream sources** checkbox if you want to include packages from public registries.

1. Select **Create** when you're done.

    :::image type="content" source="/media/universal-packages-create-feed.png" alt-text="A screenshot showing how to create a new feed.":::

> [!NOTE]
> Newly created feeds designate the project's *Build Service* role as **Feed and Upstream Reader (Collaborator)** by default.

## Install Azure DevOps extension

Using the CLI helps streamline your tasks. Before you continue, make sure you have installed Azure CLI (version 2.10.1 or higher). Additionally, we'll need to install the Azure DevOps extension to manage Azure DevOps services from the command line.

1. Run the following command to install the Azure DevOps extension:

   ```azurecli
   az extension add --name azure-devops
   ```

1. If you already have the Azure DevOps extension installed and want to update it to the latest, run the following command:

   ```azurecli
   az extension update --name azure-devops
   ```

## Connect to feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Universal Packages** from the left navigation pane.

1. Follow the instructions in the **Project setup** section to connect to your feed.

#### [Windows](#tab/Windows/)

1. Run the following command to log into the Azure CLI:

    ```azurecli
    az login
    ```

1. Run the following command to set your project and organization as the CLI's default configuration:

    ```azurecli
    az devops configure --defaults project=<YOUR_PROJECT_NAME> organization=https://dev.azure.com/<YOUR_ORGANIZATION_NAME> 
    ```

#### [Other](#tab/Other/)

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging Read & write** scope, and then copy it to your clipboard.

1. Run the following command to log in. When prompted, paste the personal access token you created in the previous step, and then press *Enter*.
 
    ```azurecli
    az devops login --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> 
    ```

* * *

## Publish Universal Packages

To publish a Universal Package to your feed, you need to provide a package name and version number.

The package name should be in lowercase, start and end with letters or numbers, and only contain letters, numbers, and nonconsecutive dashes, underscores, and periods. The package version should also be in lowercase and should not include build metadata (+ suffix). See [semantic versioning](https://semver.org/spec/v2.0.0.html) for more details.

1. Run the following command to publish your Universal Package to your feed:

    - Organization-scoped feed:
    
        ```azurecli
        az artifacts universal publish --organization https://dev.azure.com/<YOUR_ORGANIZATION> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <PACKAGE_DIRECTORY> --description <PACKAGE_DESCRIPTION>
        ```
    
    - Project-scoped feed:
    
        ```azurecli
        az artifacts universal publish --organization https://dev.azure.com/<YOUR_ORGANIZATION> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <PACKAGE_DIRECTORY> --description <PACKAGE_DESCRIPTION>
        ```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts). 

## View published packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then pick your feed from the dropdown menu. Once the publishing process is successfully completed, your package should be available in your feed.

    :::image type="content" source="media/universal-package-published.png" alt-text="A screenshot showing the newly published Universal Package." lightbox="media/universal-package-published.png":::

## Download Universal Packages

Run the following command to download a particular Universal Package from your feed using Azure CLI:

- Organization-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH>
    ```

- Project-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH>
    ```

#### Download specific files


If you wish to download only specific files, use the `--file-filter` parameter to fetch a subset of files. See [File matching patterns reference](../../pipelines/tasks/file-matching-patterns.md) for more details.
 
- Organization-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH> --file-filter <MATCH_PATTERN>
    ```
- Project-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH> --file-filter <MATCH_PATTERN>
    ```

**Example:** For instance, using *--file-filter logs/.log* would match any file with a filename containing "logs" and ending with the extension ".log" (e.g., build_logs.log).

#### Download the latest version

You can use wildcards `*` to download the latest version of your Universal Packages.

**Examples**:

- `--version '*'`: download the latest version.

- `--version '1.*'`: download the latest version with major 1.

- `--version '1.2.*'`: download the latest patch release with major 1 and minor 2.
  
> [!NOTE]
> Wildcard patterns are not supported with pre-release versions (packages with a dash in their version number).

## Related articles

- [Publish and download Universal Packages with Azure Pipelines](../../pipelines/artifacts/universal-packages.md)
- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)
- [Manage permissions](../feeds/feed-permissions.md)
