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