---
title: Use packages from Maven Central
description: How to use packages from Maven upstream
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 01/28/2022
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Use packages from Maven Central

[!INCLUDE [version-gt-eq-2017](../../includes/version-gt-eq-2017.md)]

With upstream sources, you can use both private packages you've created and public packages from Maven Central. When you enable upstream sources in your feed, Azure Artifacts will save a copy of any packages you install from Maven central. Azure Artifacts also support other Maven upstream sources such as Google Maven Repository, Gradle Plugins, and JitPack.

> [!NOTE]
> Maven snapshots are not supported in upstream sources.

## Enable Maven Central as an upstream

To use Maven Central as an upstream source, either create a new feed and enable upstream sources, or edit an existing feed to add the upstream sources feature.

### On a new feed

Follow the instructions below to create a new feed and enable upstream sources. Make sure you check the **Include packages from common public sources** checkbox.

[!INCLUDE [](../includes/create-feed.md)]

### On an existing feed

1. Select the ![gear icon](../../media/icons/gear-icon.png)  in the top right of the page to access your feed's settings.

1. Select **Upstream sources**.

1. Select **Add upstream source**.

1. Select **Public source**, and then select **Maven Central (https://repo.maven.apache.org/maven2/)** from the dropdown menu.

    :::image type="content" source="../media/maven-upstream-source.png" alt-text="Screenshot showing how to add Maven central upstream source.":::

1. Select **Add** when you are done.

## Filter to saved packages

You can see the packages you have saved in your feed by selecting the **Maven Central** Source filter.

:::image type="content" source="media/view-cached-packages.png" alt-text="Screenshot showing how to filter upstream sources.":::

## Related articles

- [Install Maven Artifacts](./install.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)