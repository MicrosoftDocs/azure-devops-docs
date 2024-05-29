---
title: Publish and download npm packages
description: Learn how to set up your project to manage your npm packages in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 5BFBA0C3-85ED-40C9-AC5F-F686923160D6
ms.date: 05/28/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with npm packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Using Azure Artifacts, you can publish and download your npm packages from feeds and public registries such as npmjs.com. This quickstart will guide you through creating your feed, configuring your project, and managing npm packages with your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Connect to a feed

> [!NOTE]
> `vsts-npm-auth` is not supported in Azure DevOps Server.

Azure Artifacts recommends using two .npmrc files. The first one should be placed in the *$home* directory (Linux/macOS) or *$env.HOME* (Windows) to securely store your credentials. This allows the npm client to locate the file and retrieve your credentials for authentication, enabling you to share your config file without exposing your credentials. In this section, we will set up the second *.npmrc* file, which should be placed in the same directory as your *package.json* file.

::: moniker range="azure-devops"   

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **npm** from the left navigation area. If this is your first time using Azure Artifacts with npm, make sure you've installed the prerequisites.

1. Follow the instructions in the **Project setup** section to set up your config file and connect to your feed.

    :::image type="content" source="media/npm-project-setup-azure-devops.png" alt-text="A screenshot that shows how to set up an npm project and connect to an Azure Artifacts feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to Feed**.

1. Select **npm** from the left, and then follow the instructions in the **Project setup** section to connect to your feed.

   :::image type="content" source="media/npm-project-setup-server-2022-1.png" alt-text="A screenshot that shows how to set up an npm project and connect to an Azure Artifacts feed in Azure DevOps Server 2022.":::

::: moniker-end

::: moniker range="azure-devops-2020"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **npm** from the left, and then follow the instructions in **Project setup** to set up your config file and connect to your feed.

   :::image type="content" source="media/npm-project-setup-server-2020-1.png" alt-text="A screenshot that shows how to set up an npm project and connect to an Azure Artifacts feed in Azure DevOps Server 2020.":::

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. A new window will appear. From the left navigation pane, select **npm** and follow the instructions to set up your **project** and **user** *.npmrc* files.

   :::image type="content" source="media/npm-project-setup-server-2019w-1.png" alt-text="A screenshot that shows how to set up an npm project and connect to an Azure Artifacts feed in Azure DevOps Server 2019.":::

::: moniker-end

> [!IMPORTANT]
> npm supports a single `registry` in your .npmrc file. Multiple registries are possible with [scopes](npm/scopes.md) and [upstream sources](npm/upstream-sources.md).

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
