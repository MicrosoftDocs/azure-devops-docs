---
title: Use packages from Maven Central
description: How to use packages from Maven upstream
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/15/2022
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

1. Select **Add Upstream**.

1. Select **Public source**, and then select **Maven Central (https://repo.maven.apache.org/maven2/)** from the dropdown menu.

    :::image type="content" source="../media/maven-add-upstream.png" alt-text="A screenshot showing how to add Maven central upstream source.":::

1. Select **Save** when you are done.

1. Select **Save** to save your changes.

    :::image type="content" source="../media/save-upstream-source.png" alt-text="A screenshot showing how to save changes in upstream sources":::

## Filter to saved packages

You can view the packages you saved from upstreams by selecting the **Maven Central** source from the dropdown menu.

:::image type="content" source="media/maven-central-packages.png" alt-text="A screenshot showing how to filter for packages from Maven Central.":::

## Related articles

- [Install Maven Artifacts](./install.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)