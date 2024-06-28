---
title: Publish and restore npm packages CLI
description: Learn how to publish and restore npm packages from the command line.
ms.assetid: 85773969-1491-4242-A060-BD5D193961A0
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 05/24/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and restore npm packages from the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Using Azure Artifacts, you can easily manage the publication and retrieval of your npm packages from various sources, including feeds and public registries like npmjs.com. This article walks you through setting up your project, publishing, and restoring your npm packages from your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../get-started-npm.md#create-a-feed).

- [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Connect to Feed

::: moniker range="azure-devops"  

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **npm** from the left navigation area.

1. Follow the instructions in the **Project setup** section to configure your *.npmrc* file and connect to your feed.

    :::image type="content" source="../npm/media/project-setup-npm.png" alt-text="Screenshot that shows how to connect to a feed in Azure DevOps services." lightbox="../npm/media/project-setup-npm.png":::

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Artifacts**, and then select your feed from the dropdown menu.

3. Select **Connect to Feed**, and then select **npm** from the left navigation area.

::: moniker-end

::: moniker range="azure-devops-2022"

4. Follow the instructions in the **Project setup** section to connect to your feed.

    :::image type="content" source="../media/npm-project-setup-server-2022-1.png" alt-text="A screenshot that shows how to connect to your feed in Azure DevOps Server 2022.":::

::: moniker-end

::: moniker range="azure-devops-2020"

4. Follow the instructions in the **Project setup** section to connect to your feed.
    
    :::image type="content" source="../media/npm-project-setup-server-2020-1.png" alt-text="A screenshot that shows how to connect to your feed in Azure DevOps Server 2020.":::

::: moniker-end

::: moniker range="azure-devops-2019"

4. Follow the provided instructions to set up your project and connect to your feed.
    
    :::image type="content" source="../media/npm-project-setup-server-2019-1.png" alt-text="A screenshot that shows how to connect to your feed in Azure DevOps Server 2019.":::

::: moniker-end

## Publish packages

1. Run the following command in your project directory to publish the npm packages listed in your *package.json*:

    ```Cli
    npm publish
    ```

## Restore packages

1. Run the following command in your project directory to restore all your npm packages:
   
    ```Cli
    npm install
    ```

1. If you want to restore a specific package, run the following command in your project directory:

    ```Cli
    npm install --save <PACKAGE_NAME>
    ```

## Related articles

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](../npm/upstream-sources.md)
- [Use npm audit](../npm/npm-audit.md)