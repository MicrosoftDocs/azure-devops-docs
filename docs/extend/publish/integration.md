---
ms.prod: devops
ms.technology: devops-ecosystem
title: Package and Publish an Integration | Extensions for Azure DevOps Services
description: How to package and publish your integration to the Visual Studio Marketplace
ms.assetid: 61550050-c6d7-40e1-9ea7-030b48b04e3b
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/29/2016
---

# Package and Publish an integration to the Marketplace

Do you have a tool, service, or product that integrates with Azure DevOps Services or Team Foundation Server?
If so, help users find it by publishing it on the Visual Studio Marketplace.
The Visual Studio Marketplace is a one-stop-shop for individuals and teams to find tools that extend and enhance the experience. 

[Browse the marketplace](https://marketplace.visualstudio.com) to see examples of other integrations and extensions.

> [!NOTE]
> If you're looking for packaging and publishing information for extensions, check out [Package & Publish Extensions](overview.md).

## Publishing Requirements

[!INCLUDE [](_shared/before-publishing.md)]

## What you will need

1. 128x128 pixel logo (PNG or JPEG format) representing your integration, yourself, or your company/organization
2. Minimum of 1 screen shot showing your integration
3. Call to action / get started URL (where users should go to get started with your integration)

## Steps

Publishing to the Marketplace is an iterative process that starts with creating a manifest file that defines your integration and key discovery characteristics (like screen shots, logos, and overview content). This information is used to present your integration to users on the Marketplace, for example:

![example](./_img/integration-example.png)

[Jenkins for Azure DevOps Services](https://marketplace.visualstudio.com/items?itemName=ms-vsts.services-jenkins)

Note: you will see the term `extension` used in documentations referenced below. Extensions are another type of Marketplace item and share many similarities from a discovery standpoint as integrations.

<div class="alert alert-info">
    Need help getting your integration on the Marketplace? [Contact us](http://go.microsoft.com/fwlink/?LinkId=615292). And, yes, this e-mail address is monitored by real people. 
</div>

### Create a publisher

[!INCLUDE [](./_shared/create-publisher.md)]

### Create a folder to contain your item manifest and other assets

Before you package your integration as an extension, you'll need to create a `home` folder to contain some required assets, within this folder:

1. Create a folder called `images` to contain:
    * Logo for your integration (128x128 pixels)
    * Screen shots (1366x768 pixels)
2. Create a file called `overview.md`
    * This is where you'll describe your integration.
    * To learn more about markdown, see [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
3. Create a file called `vss-integration.json`
    * This is your Marketplace listing's manifest file, it contains many properties to describe your extension in your Marketplace listing. You can browse the [extension manifest reference here](../develop/manifest.md)

#### Extension Manifest

1. Fill your `vss-integration.json` file with the following JSON:

  [!code-javascript[JSON](../_data/integration.json)]

2. Update the JSON using the following reference:

[!INCLUDE [](../_shared/manifest-core.md)]
[!INCLUDE [](../_shared/manifest-discovery.md)]

#### Details page

* 1 - description
* 2 - icon
* 3 - categories
* 4 - screenshots
* 5 - content (details)
* 6 - links
* 7 - branding

![card](../develop/_img/extension-details-page.png)

<div class="alert alert-danger">
  Make sure the "public" attribute is set to "false" (or not set at all) to avoid your extension or integration from becoming prematurely visible to all users on the Marketplace. 
</div>

<a name="package"></a>

### Package your manifest and assets

#### Get the package tool (tfx-cli)
You can install or update the TFS Cross Platform Command Line Interface (tfx-cli) using `npm`, a component of [Node.js](http://nodejs.org), from your command line.

```no-highlight
npm i -g tfx-cli
```

#### Package your integration in a .vsix file

```no-highlight
tfx extension create --manifest-globs vss-extension.json
```

> [!NOTE]
> An extension/integration's version must be incremented on every update. <br>
> If you haven't incremented your extension/integration in the manifest, you should pass the `--rev-version` command line switch. This will increment the *patch* version number of your extension and save the new version to your manifest.

### Publish your integration to the Marketplace

[!INCLUDE [Publish_extension](../_shared/procedures/publish.md)]

### Share your integration
Before an integration can be installed into an organization in Azure DevOps Services, it must be shared with that organization. Sharing is a requirement during development and testing of an integration, as it is the only way to run an integration.

To share an integration so it can be installed:

1. Click an integration from the list of displayed items 
2. Click the **Share** button
3. Specify the name of the organization to make this integration visible to.
  - For example, to make an integration visible to the **dev.azure.com/fabrikam-fiber-inc** organization, specify `fabrikam-fiber-inc`.

#### Update an item

[!INCLUDE [Update_extension](../_shared/procedures/update.md)]

## Make your integration public (visible to everyone) 

For information on making your integration public, visit [Make your listing public](./publicize.md).


