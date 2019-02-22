---
title: TFS/VersionControl/Contracts GitRefUpdateMode API | Extensions for Azure DevOps Services
ms.assetid: c2780b38-fe71-c2f1-fb42-b85ca4ea9611
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitRefUpdateMode

Module path: `TFS/VersionControl/Contracts`

### Values

* `BestEffort` Indicates the Git protocol model where any refs that can be updated will be updated, but any failures will not prevent other updates from succeeding.
* `AllOrNone` Indicates that all ref updates must succeed or none will succeed. All ref updates will be atomically written. If any failure is encountered, previously successful updates will be rolled back and the entire operation will fail.
