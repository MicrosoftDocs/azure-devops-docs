---
title: Use packages from Maven Central
description: How to use packages from Maven upstream
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 02/15/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Use packages from Maven Central

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With upstream sources, you can use both private packages you've created and public packages from Maven Central. When you enable upstream sources in your feed, Azure Artifacts will save a copy of any packages you install from Maven central. Azure Artifacts also support other Maven upstream sources such as Google Maven Repository, Gradle Plugins, and JitPack.

> [!NOTE]
> Maven snapshots are not supported with Maven upstream sources.

## Enable upstream sources

Follow the instructions below to create a new feed and enable upstream sources:

[!INCLUDE [](../includes/create-feed.md)]

### Add Maven Central upstream

1. Select the ![gear icon](../../media/icons/gear-icon.png)  in the top right of the page to access your feed's settings.

1. Select **Upstream sources**.

1. Select **Add Upstream**.

1. Select **Public source**, and then select **Maven Central (https://repo.maven.apache.org/maven2/)** from the dropdown menu.

    :::image type="content" source="../media/maven-add-upstream.png" alt-text="A screenshot showing how to add Maven central upstream source.":::

1. Select **Save** when you are done.

1. Select **Save** to save your changes.

    :::image type="content" source="../media/save-upstream-source.png" alt-text="A screenshot showing how to save changes in upstream sources":::

## View saved packages

You can view the packages you saved from upstreams by selecting the **Maven Central** source from the dropdown menu.

:::image type="content" source="media/maven-central-packages.png" alt-text="A screenshot showing how to filter for packages from Maven Central.":::

> [!TIP]
> If Maven is not downloading all your dependencies, run the following command from the project directory to regenerate your project's files:
> `mvn eclipse:eclipse -DdownloadSources=true -DdownloadJavadocs=true`

## Related articles

- [Install Maven Artifacts](./install.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)