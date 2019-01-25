---
title: TFS/Build/Contracts DefinitionTriggerType API | Extensions for Azure DevOps Services
ms.assetid: d20502f9-69e8-79bc-61c3-41d4d896bd30
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# DefinitionTriggerType

Module path: `TFS/Build/Contracts`

### Values

* `None` Manual builds only.
* `ContinuousIntegration` A build should be started for each changeset.
* `BatchedContinuousIntegration` A build should be started for multiple changesets at a time at a specified interval.
* `Schedule` A build should be started on a specified schedule whether or not changesets exist.
* `GatedCheckIn` A validation build should be started for each check-in.
* `BatchedGatedCheckIn` A validation build should be started for each batch of check-ins.
* `All` All types.
