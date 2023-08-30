---
title: Publish and download universal packages in Azure Artifacts
description: How to publish and download universal packages to and from Artifacts feeds.
ms.assetid: f47b858c-138d-426d-894c-a5fe1d5aa08e
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 05/19/2023
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Publish and download universal packages in Azure Artifacts

Universal Packages offer developers the capability to store an extensive array of package types that extend beyond the conventional ones, such as NuGet, npm, Maven, or Python packages. Using Azure CLI, you can conveniently publish and download universal packages directly from the command line. The size of published packages can vary, reaching up to 4 TB, but must always maintain the essential requirement of including a name and version number. This article will walk you through the steps to publish and download your universal packages to your Azure Artifacts feed.

## Prerequisites

- Install [Azure CLI](/cli/azure/install-azure-cli).
- If you're using Linux, make sure you install the [.NET on Linux](/dotnet/core/linux-prerequisites) version.
- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../..//organizations/projects/create-project.md) if you haven't already.
- An Azure Artifacts feed. [Create a feed](../../artifacts/get-started-nuget.md#create-a-feed), if you don't have one already.

## Project setup

#### [Windows](#tab/Windows/)

1. Run the following command to install the Azure DevOps extension. Make sure that you've installed the [Azure CLI](/cli/azure/install-azure-cli). At the very least, your Azure CLI version should be 2.10.1. You can confirm this by using the command `az --version`. To run the Azure CLI, you can use the `az` command from the Windows Command Prompt or [PowerShell](/powershell/azure/install-azure-powershell).

   ```azurecli
   az extension add --name azure-devops
   ```

2. If you already have the Azure DevOps extension installed and wish to update it to the latest version, run the following command::

   ```azurecli
   az extension update --name azure-devops
   ```

3. Log in to Azure.

    ```azurecli
    az login
    ```

> [!TIP]
> To access tenants without subscriptions, run `az login --allow-no-subscription`.

4. Set your project and organization as the CLI's default.

    ```azurecli
    az devops configure --defaults project=<YOUR_PROJECT_NAME> organization=https://dev.azure.com/<YOUR_ORGANIZATION_NAME> 
    ```

#### [Other](#tab/Other/)

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging Read & write** scope, and then copy it to your clipboard.

1. Run the following command to log in. When prompted, enter the personal access token you created in the previous step.
 
    ```azurecli
    az devops login --organization https://dev.azure.com/<YOUR_ORGANIZATION_NAME> 
    ```
***

## Publish packages

To publish a universal package, run the following command in an elevated command prompt. Package names must be lowercase, start and end with letters or numbers, and contain only letters, numbers, and nonconsecutive dashes, underscores, and periods. Package versions must be lowercase without build metadata (+ suffix). See [SemVer](https://semver.org/spec/v2.0.0.html) to learn more about semantic versioning.

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

1. Select **Artifacts**, and then select your feed from the drop-down menu. Once publishing is completed successfully, your package should be available in your feed.

    :::image type="content" source="media/universal-package-published.png" alt-text="A screenshot showing the newly published universal package.":::

## Download packages

To download a universal package using Azure CLI, run the following command in an elevated command prompt.

- Organization-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH>
    ```

- Project-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH>
    ```

### Download specific files

If you only want to download specific files, you can use the `--file-filter` parameter to download a subset of files. See [File matching patterns reference](../../pipelines/tasks/file-matching-patterns.md) for more details.

Example: *--file-filter *logs/*.log* would match any file ending with *logs* and with the extension *.log* (Example: build123_logs.log). 

- Organization-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH> --file-filter <MATCH_PATTERN>
    ```
- Project-scoped feed:

    ```azurecli
    az artifacts universal download --organization https://dev.azure.com/<YOUR_ORGANIZATION> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <DOWNLOAD_PATH> --file-filter <MATCH_PATTERN>
    ```

### Download the latest version

You can use wildcards `*` to download the latest version of your Universal Packages.

**Examples**:

- `--version '*'`: download the latest version.

- `--version '1.*'`: download the latest version with major 1.

- `--version '1.2.*'`: download the latest patch release with major 1 and minor 2.
  
> [!NOTE]
> Wildcard patterns are not supported with pre-release versions (packages with a dash in their version number).

## Related articles

- [Publish and download universal packages with Azure Pipelines](../../pipelines/artifacts/universal-packages.md).
- [Delete and recover packages](../how-to/delete-and-recover-packages.md).
- [Configure feed permissions](../feeds/feed-permissions.md)
