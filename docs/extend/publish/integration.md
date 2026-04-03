---
ms.subservice: azure-devops-ecosystem
title: Package and publish an integration
titleSuffix: Azure DevOps
description: Package and publish your integration to the Visual Studio Marketplace so users can discover your tool, service, or product.
ms.assetid: 61550050-c6d7-40e1-9ea7-030b48b04e3b
ms.topic: how-to
ms.custom: UpdateFrequency3
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Package and publish an integration

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Publish your tool, service, or product that integrates with Azure DevOps on the [Visual Studio Marketplace](https://marketplace.visualstudio.com). The Marketplace is the central hub for users to discover integrations and extensions.

> [!NOTE]
> This article covers *integrations* (external tools and services). For *extensions* (add-ons that run inside Azure DevOps), see [Package and publish extensions](overview.md).

## Prerequisites

[!INCLUDE [](includes/before-publishing.md)]

You also need the following assets:

- At least one screenshot of your integration
- A call-to-action or get-started URL for users

## Create a publisher

[!INCLUDE [](./includes/create-publisher.md)]

## Set up project structure

Create the following directory layout:

```
home/
├── images/
│   ├── integration-logo.png    (128×128 px minimum)
│   └── screenshot.png          (1366×768 px)
├── overview.md
└── vss-integration.json
```

| File | Purpose |
|------|---------|
| `overview.md` | [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/) description of your integration. |
| `vss-integration.json` | Marketplace manifest. See [Extension manifest reference](../develop/manifest.md). |

## Create the manifest

Create `vss-integration.json` with the following content, then update the values for your integration:

[!code-javascript[JSON](../_data/integration.json)]

Update fields using the following references:

[!INCLUDE [](../includes/manifest-core.md)]
[!INCLUDE [](../includes/manifest-discovery.md)]

> [!WARNING]
> Set `public` to `false` or omit it until you're ready for public visibility.

## Package the integration

1. Install the packaging tool if you haven't already:

   ```bash
   npm install -g tfx-cli
   ```

2. Package your integration into a .vsix file:

   ```no-highlight
   tfx extension create --manifest-globs vss-integration.json
   ```

   > [!TIP]
   > Use `--rev-version` to automatically increment the patch version number.

## Publish to the Marketplace

[!INCLUDE [Publish_extension](../includes/procedures/publish.md)]

## Share the integration

Before you can install an integration in an Azure DevOps organization, you must share it with that organization.

1. Select your integration from the list of displayed items.
2. Select **Share**.
3. Enter the organization name (for example, `fabrikam-fiber-inc` for `dev.azure.com/fabrikam-fiber-inc`).

## Update the integration

[!INCLUDE [Update_extension](../includes/procedures/update.md)]

## Make the integration public

To make your integration visible to all Marketplace users, set the [`public` flag](../develop/manifest.md#public-flag) to `true` in your manifest and republish.

For more information about the qualifications required for public listings, see [Make your extension public](overview.md#make-your-extension-public).

## Related content

- [Extension manifest reference](../develop/manifest.md)
- [Package and publish extensions](overview.md)
- [Visual Studio Marketplace](https://marketplace.visualstudio.com)
