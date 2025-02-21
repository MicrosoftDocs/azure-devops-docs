---
title: Publish npm packages from the command line
description: Learn how to connect to your feed and publish npm packages from the command line.
ms.assetid: 85773969-1491-4242-A060-BD5D193961A0
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: tutorial
ms.date: 02/21/2025
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish npm packages from the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

This article guides you through authenticating with your Azure Artifacts feed and publishing npm packages from the command line.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). |

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

## Related content

- [Restore npm packages (CLI)](restore-npm-packages.md)

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)

- [Use packages from npmjs.com](../npm/upstream-sources.md)
