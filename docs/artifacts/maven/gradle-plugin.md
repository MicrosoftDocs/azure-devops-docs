---
title: Gradle Plugins upstream source
description: How to add Gradle Plugins upstream source
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 03/11/2022
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Gradle Plugins upstream source

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

With Azure Artifacts feeds, you can enable upstream sources to include packages from different public registries such as Gradle Plugins. Once upstream sources are enabled on your feed, Azure Artifacts will save a copy of any package you install from upstream. Azure Artifacts also support other Maven upstream sources such as Maven Central, Google Maven Repository, and JitPack.

> [!NOTE]
> Organization-scoped feeds cannot be converted into project-scoped feeds.

## Add Gradle Plugins

1. Select the ![gear icon](../../media/icons/gear-icon.png) at the top right corner to navigate to **Feed Settings**.

1. Select **Upstream Sources**.

1. Select **Add Upstream**.

    :::image type="content" source="./media/upstream-settings-add-upstream.png" alt-text="A screenshot showing how to access upstream sources to add a new upstream.":::

1. Select **Public source**, and then select **Gradle Plugins (https://plugins.gradle.org/m2/)** from the dropdown menu.

    :::image type="content" source="./media/gradle-plugins.png" alt-text="A screenshot showing how to add Gradle Plugins.":::

1. Select **Save** when you are done.

1. Select **Save** at the top right corner to save your changes.
