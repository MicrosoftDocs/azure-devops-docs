---
title: TFS/Build/Contracts DefinitionQueueStatus API | Extensions for Azure DevOps Services
ms.assetid: 7586dd3e-2742-6bb2-3764-d6ebab7c99e8
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# DefinitionQueueStatus

Module path: `TFS/Build/Contracts`

### Values

* `Enabled` When enabled, the definition queue allows builds to be queued by users, the system will queue scheduled, gated and continuous integration builds, and the queued builds will be started by the system.
* `Paused` When paused, the definition queue allows builds to be queued by users and the system will queue scheduled, gated and continuous integration builds. Builds in the queue will not be started by the system.
* `Disabled` When disabled, the definition queue will not allow builds to be queued by users and the system will not queue scheduled, gated or continuous integration builds. Builds already in the queue will not be started by the system.
