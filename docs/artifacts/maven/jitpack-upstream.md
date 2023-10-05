---
title: Jitpack upstream source
description: How to add JitPack upstream source
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 03/22/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# JitPack upstream source

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can consume packages from different public registries such as Maven Central and Google Maven Repository and JitPack. Once you enable upstream sources, Azure Artifacts will save a copy of any package you install from upstream.

## Add JitPack upstream

1. Select the ![gear icon](../../media/icons/gear-icon.png) at the top right corner to navigate to **Feed Settings**.

1. Select **Upstream Sources**, and then select **Add Upstream**.

    :::image type="content" source="./media/gradle-upstream-source.png" alt-text="A screenshot showing how to access upstream sources to add a new upstream.":::

1. Select **Public source**, and then select **JitPack (https://jitpack.io/)** from the dropdown menu.

    :::image type="content" source="./media/jitpack-upstream.png" alt-text="A screenshot showing how to add JitPack.":::

1. Select **Save** when you are done.

1. Select **Save** at the top right corner to save your changes.

## View saved packages

To view saved packages from JitPack, select **JitPack** from the **Source** dropdown menu.

:::image type="content" source="./media/packages-jitpack.png" alt-text="A screenshot showing how to filter for packages from JitPack":::

## Related articles

- [Google Maven Repository](./google-maven.md)
- [Gradle Plugins](./gradle-plugins.md)
- [Maven Central upstream source](./upstream-sources.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)