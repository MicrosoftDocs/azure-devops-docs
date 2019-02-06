---
title: TFS/VersionControl/Contracts VersionControlRecursionType API | Extensions for Azure DevOps Services
ms.assetid: d82962b4-8e79-a65e-4357-d35a1de0acce
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# VersionControlRecursionType

Module path: `TFS/VersionControl/Contracts`

### Values

* `None` Only return the specified item.
* `OneLevel` Return the specified item and its direct children.
* `OneLevelPlusNestedEmptyFolders` Return the specified item and its direct children, as well as recursive chains of nested child folders that only contain a single folder.
* `Full` Return specified item and all descendants
