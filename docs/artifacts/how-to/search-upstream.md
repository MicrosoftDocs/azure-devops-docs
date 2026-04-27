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

## Add public upstream sources

If you created a feed without enabling upstream sources, you can add a public upstream source later by following these steps:

1. Navigate to your project, and then select **Artifacts**.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to open **Feed Settings**.

1. Select **Upstream Sources**.

1. Select **Add Upstream**.

1. For **Type**, select **Public source**, and then choose the source you want to add (for example, *NuGet gallery (https://api.nuget.org/v3/index.json)*).

1. Select **Add** when you're done.

## Search upstream sources

After your feed is connected to one or more upstream sources, you can search from a single place in Azure Artifacts instead of browsing each source separately. This is useful when you know the package you need but want to quickly confirm whether it's available upstream and review available versions before saving it to your feed.

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your target feed from the feed dropdown menu.

1. Select **Search Upstream Sources** in the upper-right corner.

    :::image type="content" source="../media/search-upstream-from-feed.png" alt-text="A screenshot showing the Search Upstream Sources button in an Azure Artifacts feed.":::

1. In the search panel, select the **Package type**, and then enter the **Package Name**.

1. Make sure the package name uses the exact casing and spelling, because package name matching is case sensitive.

1. Select **Search** when you're ready.

    :::image type="content" source="../media/search-packages-in-upstreams.png" alt-text="A screenshot showing how to search for a package in upstream sources.":::

1. Review the search results. Azure Artifacts displays the matching package versions.

    :::image type="content" source="../media/packages-available-in-upstreams.png" alt-text="A screenshot showing the package versions available in upstream sources.":::

> [!NOTE]
> Searching upstream sources from your feed is supported only in Azure DevOps Services.

## Save packages

After you find a package version in upstream search results, you can save it to your feed so your team can consume it directly from Azure Artifacts without searching upstream again. 

1. In the search results, locate the package version you want to save.

1. Select the ellipsis button next to that version, and then select **Save to feed**.

    :::image type="content" source="../media/save-package-version-to-feed.png" alt-text="A screenshot showing how to save a specific package version from an upstream source.":::

1. In the confirmation dialog, select **Save** to confirm.

1. Verify that the saved version shows the `In this feed` tag and is now available in your feed.

    :::image type="content" source="../media/version-saved-from-upstream.png" alt-text="A screenshot showing the version saved from upstream.":::

## Related content

- [Use upstream sources with public feeds](public-feeds-upstream-sources.md)

- [Upstream from internal feeds](upstream-internal-feed.md)

- [Configure feed permissions](../feeds/feed-permissions.md)
