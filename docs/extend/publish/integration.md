---
ms.subservice: azure-devops-ecosystem
title: Package and Publish an Integration
description: How to package and publish your integration to the Visual Studio Marketplace
ms.assetid: 61550050-c6d7-40e1-9ea7-030b48b04e3b
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 06/06/2025
---

# Package and publish an integration to the Marketplace

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to publish your tool, service, or product that integrates with Azure DevOps on the Visual Studio Marketplace. Publishing on the Marketplace helps users discover solutions that extend and enhance their Azure DevOps experience. The Marketplace serves as the central hub for individuals and teams to find integrations and extensions.

[Browse the Marketplace](https://marketplace.visualstudio.com) to see examples of other integrations and extensions.

> [!NOTE]
> For packaging and publishing information for extensions, see [Package & Publish Extensions](overview.md).

## Prerequisites

[!INCLUDE [](includes/before-publishing.md)]

### Gather required assets

- At least one screenshot of your integration.
- Call-to-action or get started URL for users.

> [!NOTE]
> - The term `extension` is used in referenced documentation. Extensions are another type of Marketplace item and share many similarities with integrations.
> - Need help getting your integration on the Marketplace? [Contact us](https://go.microsoft.com/fwlink/?LinkId=615292).

### Create a publisher account

[!INCLUDE [](./includes/create-publisher.md)]

### Organize your manifest and assets

To organize your manifest and assets, do the following steps:

1. Create a `home` folder to store required assets.
2. Create an `images` folder for:
    * Your integration logo (128x128 pixels)
    * Screenshots (1366x768 pixels)
3. Create an `overview.md` file to describe your integration. For more information, see [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/).
4. Create a `vss-integration.json` file, which is your Marketplace listing's manifest file. For more information, see the [extension manifest reference](../develop/manifest.md).

#### Complete the extension manifest

Publishing to the Marketplace starts with creating a manifest file that defines your integration and its key discovery details (screenshots, logos, overview content). This information is used to present your integration to users on the Marketplace.

1. Fill your `vss-integration.json` file with the following JSON:

   [!code-javascript[JSON](../_data/integration.json)]

2. Update the JSON using the following references:

[!INCLUDE [](../includes/manifest-core.md)]
[!INCLUDE [](../includes/manifest-discovery.md)]

#### Understand the details page

* 1 - description
* 2 - icon
* 3 - categories
* 4 - screenshots
* 5 - content (details)
* 6 - links
* 7 - branding

![Screenshot shows details card for extension in the Visual Studio Marketplace.](../develop/media/extension-details-page.png)

> [!WARNING]
> Set the `public` attribute to `false` or omit it to prevent your integration from becoming visible to all Marketplace users before you're ready.

<a name="package"></a>

### Package your manifest and assets

#### Install the package tool (tfx-cli)

Install or update the cross-platform CLI for Azure DevOps (tfx-cli) using `npm`:

```bash
npm i -g tfx-cli
```

#### Package your integration in a .vsix file

```no-highlight
tfx extension create --manifest-globs vss-extension.json
```

> [!NOTE]
> Increment the version of your extension or integration with every update.  
> If you haven't updated the version in your manifest, use the `--rev-version` command line switch. This switch automatically increments the *patch* version number and saves the new version to your manifest.

### Publish your integration to the Marketplace

[!INCLUDE [Publish_extension](../includes/procedures/publish.md)]

### Share your integration

Before installing an integration in an Azure DevOps organization, share it with that organization. Sharing is required for development and testing, as it's the only way to run an integration during these stages.

To share an integration do the following steps:

1. Select an integration from the list of displayed items 
2. Select the **Share** button
3. Specify the name of the organization to make this integration visible to. For example, to make an integration visible to the **dev.azure.com/fabrikam-fiber-inc** organization, specify `fabrikam-fiber-inc`.

#### Update an item

[!INCLUDE [Update_extension](../includes/procedures/update.md)]

## Make your integration public

For information on making your integration visible to everyone, see [Make your listing public](./publicize.md).
