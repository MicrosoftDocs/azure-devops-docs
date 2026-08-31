---
title: Publish Universal Packages in Azure Artifacts
description: Learn how to publish Universal Packages to an Azure Artifacts feed.
ms.service: azure-artifacts
ms.custom: devx-track-azurecli
ms.topic: how-to
ms.date: 08/31/2026
monikerRange: 'azure-devops'
---

# Publish Universal Packages from Azure Artifacts feeds

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Universal Packages let you store many types of files and package contents beyond formats such as NuGet, npm, and Python packages.
You can publish them directly from the command line by using Azure CLI. A Universal Package can be up to 4 TiB and must include a name and version. This article shows how to publish a Universal Package to your Azure Artifacts feed.

## Prerequisites

| **Product**        | **Requirements** |
|--------------------|------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Install [Azure CLI](/cli/azure/install-azure-cli).<br> - Install the [Azure DevOps extension](#install-azure-devops-extension) version 0.14.0 or higher. |

## Install Azure DevOps extension

The Azure DevOps extension for Azure CLI lets you manage Azure DevOps services from the command line. Before you install it, make sure you have Azure CLI version 2.10.1 or higher installed.

1. To install the Azure DevOps extension, run:

   ```azurecli
   az extension add --name azure-devops
   ```

1. To update an existing installation to the latest version, run:

   ```azurecli
   az extension update --name azure-devops
   ```

## Create a feed

Before you can publish a Universal Package, you need a feed to publish it to. A feed is a container that stores and organizes your packages, and you can control who can access them. Use the following steps to create a feed for your project or organization.

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed.

1. Choose a **Visibility** option to control who can view your packages.

1. Select **Include packages from common public sources** if you want your feed to also pull packages from public sources like *nuget.org* or *npmjs.com*.

1. For **Scope**, choose whether the feed applies to your project only or to the entire organization.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-azure-devops.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Services.":::

## Publish Universal Packages

After you create your feed, you're ready to publish a Universal Package to it. Every package you publish needs a name and a version number, and both must follow specific naming rules:

- The package name must be lowercase, start and end with a letter or number, and can include only letters, numbers, and non-consecutive dashes (`-`), underscores (`_`), or periods (`.`).
- The package version must also be lowercase and can't contain build metadata, indicated by a `+` suffix. For more information, see [semantic versioning](https://semver.org/spec/v2.0.0.html).

1. Run one of the following commands to publish your Universal Package, depending on whether your feed is scoped to a project or to your organization:

    - **Project-scoped feed**:
    
        ```azurecli
        az artifacts universal publish --organization https://dev.azure.com/<YOUR_ORGANIZATION> --project <PROJECT_NAME> --scope project --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <PACKAGE_DIRECTORY> --description <PACKAGE_DESCRIPTION>
        ```

    - **Organization-scoped feed**:
    
        ```azurecli
        az artifacts universal publish --organization https://dev.azure.com/<YOUR_ORGANIZATION> --feed <FEED_NAME> --name <PACKAGE_NAME> --version <PACKAGE_VERSION> --path <PACKAGE_DIRECTORY> --description <PACKAGE_DESCRIPTION>
        ```
    
> [!NOTE]
> If your package contains an exceptionally large number of files (100K or more), publishing might fail. In this case, bundle the files into a *ZIP* or *TAR* archive to reduce the file count.

## View published packages

After you publish your package, you can confirm it's available in your feed.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. If the publish completed successfully, your package should be available in your feed.

    :::image type="content" source="media/view-published-package.png" alt-text="A screenshot displaying the newly published Universal Package." lightbox="media/view-published-package.png":::

## Related content

- [Download Universal Packages](download-universal-packages.md)

- [Publish and download Universal Packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/universal-packages.md)

- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)
