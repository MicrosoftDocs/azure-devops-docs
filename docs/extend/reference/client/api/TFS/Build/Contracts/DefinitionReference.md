---
title: TFS/Build/Contracts DefinitionReference API | Extensions for Azure DevOps Services
description: A reference to a definition.
ms.assetid: d8b850a1-706e-3229-7fe2-309e61862b54
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# DefinitionReference

Module path: `TFS/Build/Contracts`

Extends: [ShallowReference](./ShallowReference.md)

### Members

* `createdDate`: Date. The date the definition was created

* `project`: [TFS_Core_Contracts.TeamProjectReference](../../../TFS/Core/Contracts/TeamProjectReference.md). The project.

* `queueStatus`: [DefinitionQueueStatus](./DefinitionQueueStatus.md). If builds can be queued from this definition

* `revision`: number. The definition revision number.

* `type`: [DefinitionType](./DefinitionType.md). The type of the definition.

* `uri`: string. The URI of the definition

