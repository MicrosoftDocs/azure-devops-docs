---
title: Search for packages in upstream sources
description: How to search for packages in upstream sources
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 09/29/2022
monikerRange: '<= azure-devops'
---

# Search for packages in upstream sources

Using upstream sources enable developers to consume packages from different feeds and public registries. This tutorial will walk you through how to enable upstream sources in your feed and search for packages in upstreams.

## Enable upstream sources

1. Navigate to your project, and then select **Artifacts**.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed Settings**.

1. Select **Upstream Sources**.

1. Select **Add Upstream**.

1. Select **Public source**, and then select the **Public source**. (Example *NuGet gallery (https://api.nuget.org/v3/index.json)*)

1. Select **Save** when you're done.

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

## Save packages

> [!NOTE]
> Saving packages to your feed is only supported for NuGet, Npm, and Universal Packages.

1. To save a package, select the ellipsis button and then select  **Save to feed**.

    :::image type="content" source="../media/save-from-upstream.png" alt-text="A screenshot showing how to save a package from upstream source.":::

1. Select **Save** to save the package to your feed.

    :::image type="content" source="../media/save-confirmation.png" alt-text="A screenshot showing the save confirmation message.":::

1. The saved versions will have the `In this feed` tag.

    :::image type="content" source="../media/downloaded-versions-from-upstream.png" alt-text="A screenshot showing the downloaded versions.":::

## Related articles

- [Set up upstream sources](./set-up-upstream-sources.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)
- [Configure feed permissions](../feeds/feed-permissions.md)