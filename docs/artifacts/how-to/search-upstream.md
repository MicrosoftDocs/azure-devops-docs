---
title: Search for packages in upstream sources
description: Learn how to search for packages in upstream sources
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 04/02/2026
monikerRange: '>= azure-devops-2022'
---

# Search for packages in upstream sources

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)] 

Upstream sources let you use packages from public registries and other feeds without leaving Azure Artifacts. Instead of manually switching between multiple package sources, you can configure your feed to reference upstream sources and then search for packages directly from the feed experience.

In this article, you'll learn how to add an upstream source to your feed, search for packages by type and exact package name, review available versions, and save selected versions to your feed for faster and more reliable consumption in future restores. This workflow helps centralize package discovery and improves consistency across your teams.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md). |

## Create a new feed

If you don't already have a feed, follow these steps to create a new feed and enable upstream sources:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed, and then choose the appropriate **Visibility** and **Scope** settings.

1. Select **Include packages from common public sources** to enable upstream sources.
    
1. Select **Create** when you're done.

## Enable upstream sources

1. Navigate to your project, and then select **Artifacts**.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed Settings**.

1. Select **Upstream Sources**.

1. Select **Add Upstream**.

1. Select **Public source**, and then select the **Public source**. (Example *NuGet gallery (https://api.nuget.org/v3/index.json)*)

1. Select **Add** when you're done.

    :::image type="content" source="../media/enable-upstream.png" alt-text="A screenshot showing how to add the NuGet upstream.":::

## Search upstream sources

1. Navigate to your project, and then select **Artifacts**.

1. Select your feed from the dropdown menu.

1. Select **Search Upstream Sources** at the top right of your screen.

    :::image type="content" source="../media/search-upstream-sources.png" alt-text="A screenshot showing the search upstream sources button.":::

1. Select the **Package type** and type your **Package Name**. (The package name is case sensitive and must be an exact match).

1. Select **Search** when you're done.

    :::image type="content" source="../media/search-upstreams.png" alt-text="A screenshot showing how to search for a package in upstream sources.":::

1. A list of package versions will be displayed as follows:

    :::image type="content" source="../media/upstream-packages.png" alt-text="A screenshot showing package versions from upstream.":::

> [!NOTE]
> Searching for packages in upstream sources from your feed is only supported in Azure DevOps services.

## Save packages

1. To save a package, select the ellipsis button and then select  **Save to feed**.

    :::image type="content" source="../media/save-from-upstream.png" alt-text="A screenshot showing how to save a package from upstream source.":::

1. Select **Save** to save the package to your feed.

    :::image type="content" source="../media/save-confirmation.png" alt-text="A screenshot showing the save confirmation message.":::

1. The saved versions will have the `In this feed` tag.

    :::image type="content" source="../media/downloaded-versions-from-upstream.png" alt-text="A screenshot showing the downloaded versions.":::

> [!NOTE]
> Saving package versions to your feed from the search upstreams result list is only supported for NuGet, Npm, and Universal Packages.

## Related articles

- [Set up upstream sources](./set-up-upstream-sources.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)
- [Configure feed permissions](../feeds/feed-permissions.md)
