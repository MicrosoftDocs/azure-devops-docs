---
title: Use packages from nuget.org
description: Use packages from npmjs.com in Visual Studio Team Services and Team Foundation Server via upstream sources or scopes
ms.assetid: 301f954f-a35a-4fe2-b7fd-c78e534d9b16
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.manager: douge
ms.author: amullans
ms.date: 11/13/2017
---

# Use packages from nuget.org

[!INCLUDE [](../_shared/availability-nuget.md)]

> [!IMPORTANT]
> To use the nuget.org upstream source, ensure you've [installed Package Management](../install.md) and [enabled the NuGet.org upstream source preview](../install.md#nuget-org-upstream-source).

The NuGet client natively supports multiple package sources, so you can use packages from both nuget.org and private feeds (like your Package Management feed). However, there are some limitations (outlined on the [upstream sources concepts page](../concepts/feeds/upstream-sources.md)) with that configuration, and we recommend instead managing package sources server-side using a single feed and upstream sources.

The nuget.org upstream source allows you to merge the contents of nuget.org into your feed such that the nuget client can install packages from both locations without making multiple search queries. Enabling upstream sources also automatically enables saving of packages you use from the upstream source.

To learn more about the concept of upstream sources, please see the [concepts page](../concepts/feeds/upstream-sources.md).

## Enable the upstream on a new feed

To use the nuget.org upstream source, you'll need to enable the preview feature then create a new feed.

1. [Enable the NuGet.org upstream source preview](../install.md#nuget-org-upstream-source).
1. [Create a new feed](../feeds/create-feed.md). Ensure you leave the "Use packages from public sources through this feed" radio button selected.

## Enable the upstream on an existing feed

> [!NOTE]
>During public preview, you can only enable the nuget.org upstream source on feeds created after you enabled the NuGet.org upstream source preview feature.

1. Edit your feed. Select the **gear icon** in the top right of the page to open feed settings.
1. Select the **Upstream sources** pivot.
1. Select **Add upstream source** in the CommandBar.
1. Select **Select a feed URL** and select **nuget.org (https://api.nuget.org/v3/index.json)**. If you like, customize the upstream name.
1. Select **Add**.

## Update your NuGet configuration

To use your feed and upstream source, follow the instructions to [consume NuGet packages](consume.md). If you've previously set up this feed, still take a quick pass through those instructions and ensure you've disabled NuGet.org as a source. This ensures that all package requests are sent to your VSTS feed, which is required to take advantage of the [guaranteed save](../concepts/feeds/upstream-sources.md#offline-upstreams) functionality of the nuget.org upstream source.

## Filter to saved packages
You can see the packages you have saved in your feed by selecting the appropriate Source filter.

![Viewing your cached packages](_img/view-cached-packages.png)