---
title: TFS/VersionControl/Contracts ItemDetailsOptions API | Extensions for Azure DevOps Services
description: Optional details to include when returning an item model
ms.assetid: 79e2e4d9-0734-6683-2ea5-8c1a58db8f0b
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ItemDetailsOptions

Module path: `TFS/VersionControl/Contracts`


### Members

* `includeContentMetadata`: boolean. If true, include metadata about the file type

* `recursionLevel`: [VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Specifies whether to include children (OneLevel), all descendants (Full) or None for folder items

