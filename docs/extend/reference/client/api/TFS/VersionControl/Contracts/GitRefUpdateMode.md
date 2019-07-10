---
title: TFS/VersionControl/Contracts GitRefUpdateMode API | Extensions for Azure DevOps Services
ms.assetid: c2780b38-fe71-c2f1-fb42-b85ca4ea9611
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: chcomley
ms.topic: article
ms.author: chcomley
ms.date: 08/04/2016
---

# GitRefUpdateMode

Module path: `TFS/VersionControl/Contracts`

### Values

* `BestEffort` Indicates the Git protocol model where any refs that can be updated are updated, but any failures don't prevent other updates from succeeding.
* `AllOrNone` Indicates that all ref updates must succeed or none succeed. All ref updates are atomically written. If any failure is encountered, previously successful updates are rolled back and the entire operation fails.
