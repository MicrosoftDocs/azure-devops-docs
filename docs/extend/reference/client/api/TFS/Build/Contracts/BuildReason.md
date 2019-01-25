---
title: TFS/Build/Contracts BuildReason API | Extensions for Azure DevOps Services
ms.assetid: 0cd661f7-a32b-db9b-6039-81d41828635b
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# BuildReason

Module path: `TFS/Build/Contracts`

### Values

* `None` No reason. This value should not be used.
* `Manual` The build was started manually.
* `IndividualCI` The build was started for the trigger TriggerType.ContinuousIntegration.
* `BatchedCI` The build was started for the trigger TriggerType.BatchedContinuousIntegration.
* `Schedule` The build was started for the trigger TriggerType.Schedule.
* `UserCreated` The build was created by a user.
* `ValidateShelveset` The build was started manually for private validation.
* `CheckInShelveset` The build was started for the trigger ContinuousIntegrationType.Gated.
* `Triggered` The build was triggered for retention policy purposes.
* `All` All reasons.
