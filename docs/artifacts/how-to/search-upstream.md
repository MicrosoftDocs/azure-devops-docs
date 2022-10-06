---
title: Search for packages in upstream sources
description: How to search for packages in upstream sources
ms.technology: devops-artifacts
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

1. Select **Save** when you are done.

:::image type="content" source="../media/enable-upstream.png" alt-text="A screenshot showing how to add the NuGet upstream.":::

## Search upstream sources

1. Navigate to your project, and then select **Artifacts**.

1. Select your feed from the dropdown menu.

1. Select **Search Upstream Sources** at the top right of your screen.

    :::image type="content" source="../media/search-upstream-sources.png" alt-text="A screenshot showing the search upstream sources button.":::

1. Select the **Package type** and type your **Package Name**. (The package name is case sensitive and must be an exact match).

1. Select **Search** when you are done.

    :::image type="content" source="../media/search-upstreams.png" alt-text="A screenshot showing how to search for a package in upstream sources.":::

1. A list of package versions will be displayed as follows:

    :::image type="content" source="../media/upstream-packages.png" alt-text="A screenshot showing package versions from upstream.":::
