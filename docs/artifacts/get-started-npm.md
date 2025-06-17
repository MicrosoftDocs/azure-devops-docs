---
title: Publish and download npm packages with Azure Artifacts
description: Learn how to configure your npm project to publish and consume packages using Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 5BFBA0C3-85ED-40C9-AC5F-F686923160D6
ms.date: 06/17/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Get started with managing npm packages in Azure Artifacts

[!INCLUDE [version-gt-eq-2020](../includes/version-gt-eq-2020.md)]

With Azure Artifacts, you can publish and download npm packages from both your own feeds and public registries such as npmjs.com. This quickstart guides you through creating a feed, configuring your project, and managing npm packages using Azure Artifacts.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). |

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Connect to a feed

Azure Artifacts recommends using two separate *.npmrc* files. The first should be kept locally in the *$HOME* directory (Linux/macOS) or *$env.HOME* (Windows) to securely store your credentials. This allows the npm client to access your credentials for authentication.

In this section, you'll configure the second *.npmrc* file, which should be placed in the same directory as your *package.json* file.

This setup lets you to share your configuration file without exposing your credentials.

::: moniker range="azure-devops"   

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. In the left navigation pane, select **npm**. If this is your first time using Azure Artifacts with npm, make sure you've installed the prerequisites.

1. Under the **Project setup** section, select **Windows** or **Other** depending on your operating system, then follow the provided instructions to configure your config file and connect to your Azure Artifacts feed.

    :::image type="content" source="media/npm-project-setup-azure-devops.png" alt-text="A screenshot displaying how to set up an npm project and connect to a feed in Azure DevOps Services.":::

::: moniker-end


::: moniker range="azure-devops-2022"

> [!NOTE]
> The `vsts-npm-auth` is not supported in Azure DevOps Server.

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. In the left navigation pane, select **npm**. If this is your first time using Azure Artifacts with npm, make sure you've installed the prerequisites.

1. Under the **Project setup** section, select **Windows** or **Other** depending on your operating system, then follow the provided instructions to configure your config file and connect to your Azure Artifacts feed.

   :::image type="content" source="media/npm-project-setup-server-2022-1.png" alt-text="A screenshot displaying how to set up an npm project and connect to an Azure Artifacts feed in Azure DevOps Server 2022.":::

::: moniker-end


::: moniker range="azure-devops-2020"

> [!NOTE]
> The `vsts-npm-auth` is not supported in Azure DevOps Server.

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. In the left navigation pane, select **npm**. If this is your first time using Azure Artifacts with npm, make sure you've installed the prerequisites.

1. Under the **Project setup** section, select **Windows** or **Other** depending on your operating system, then follow the provided instructions to configure your config file and connect to your Azure Artifacts feed.

   :::image type="content" source="media/npm-project-setup-server-2020-1.png" alt-text="A screenshot that shows how to set up an npm project and connect to an Azure Artifacts feed in Azure DevOps Server 2020.":::

::: moniker-end

> [!IMPORTANT]
> npm supports only a single `registry` setting in your *.npmrc* file. To use multiple registries, you must use [upstream sources](npm/upstream-sources.md) or [scopes](npm/scopes.md).

## Publish packages

Run the following command in your project directory to publish your npm packages:

```Command
npm publish
```

> [!IMPORTANT]
> Using the `publishConfig` property to override the registry config param at publish-time is not supported. 

## Restore packages

Run the following command in your project directory to restore your npm packages:

```Command
npm install
```

To restore a specific npm package, run the following command from your project directory:

```Command
npm install --save <PACKAGE_NAME>
```

## Related articles

- [Publish npm packages (YAML/Classic)](../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](./npm/upstream-sources.md)
- [Use npm scopes](npm/scopes.md)
