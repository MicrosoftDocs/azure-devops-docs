---
title: Use packages from Google Maven Repository
description: How to use packages from Google Maven Repository
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 03/03/2022
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Use packages from Google Maven Repository

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

With Azure Artifacts, developers can enable upstream sources to store packages from different sources such as Google Maven Repository. Once enabled, Azure Artifacts will save a copy of all the packages installed from Google Maven Repository. Azure Artifacts also support other Maven upstream sources such as Maven Central, Gradle Plugins, and JitPack.

## Add Upstream

1. Select the ![gear icon](../../media/icons/gear-icon.png) at the top right corner to navigate to **Feed Settings**.

1. Select **Upstream sources**.

1. Select **Add Upstream**.

1. Select **Public source**, and then select **Google Maven Repository (https://dl.google.com/android/maven2/)** from the dropdown menu.

    :::image type="content" source="../media/google-maven-repository.png" alt-text="A screenshot showing how to add Google Maven Repository.":::

1. Select **Save** when you are done.