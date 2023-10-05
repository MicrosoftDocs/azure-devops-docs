---
title: Gradle Plugins upstream source
description: How to add Gradle Plugins upstream source
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 03/11/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Gradle Plugins upstream source

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts feeds, you can enable upstream sources to include packages from different public registries such as Gradle Plugins. Once upstream sources are enabled on your feed, Azure Artifacts will save a copy of any package you install from upstream. Azure Artifacts also support other Maven upstream sources such as Maven Central, Google Maven Repository, and JitPack.

> [!NOTE]
> Organization-scoped feeds cannot be converted into project-scoped feeds.

## Add Gradle Plugins

1. Select the ![gear icon](../../media/icons/gear-icon.png) at the top right corner to navigate to **Feed Settings**.

1. Select **Upstream Sources**, and then select **Add Upstream**.

    :::image type="content" source="./media/gradle-upstream-source.png" alt-text="A screenshot showing how to access upstream sources to add a new upstream.":::

1. Select **Public source**, and then select **Gradle Plugins (https://plugins.gradle.org/m2/)** from the dropdown menu.

    :::image type="content" source="./media/gradle-plugins.png" alt-text="A screenshot showing how to add Gradle Plugins.":::

1. Select **Save** when you are done.

1. Select **Save** at the top right corner to save your changes.

## View saved packages

To view the packages from Gradle Plugins, select **Gradle Plugins** from the **Source** dropdown menu.

:::image type="content" source="./media/packages-gradle-plugins.png" alt-text="A screenshot showing packages from Gradle Plugins.":::

> [!NOTE]
> Maven snapshots are not supported with Maven upstream sources.

## Related articles

- [Maven Central upstream source](./upstream-sources.md)
- [Google Maven Repository](./google-maven.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
