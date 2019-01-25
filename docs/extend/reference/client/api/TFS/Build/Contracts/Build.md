---
title: TFS/Build/Contracts Build API | Extensions for Azure DevOps Services
description: Data representation of a build
ms.assetid: c9030833-785f-f748-cbd7-2269619f1fd7
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# Build

Module path: `TFS/Build/Contracts`


### Members

* `_links`: any. 

* `buildNumber`: string. Build number/name of the build

* `buildNumberRevision`: number. Build number revision

* `controller`: [BuildController](./BuildController.md). The build controller. This should only be set if the pipeline type is XAML.

* `definition`: [DefinitionReference](./DefinitionReference.md). The pipeline associated with the build

* `deleted`: boolean. Indicates whether the build has been deleted.

* `demands`: any[]. Demands

* `finishTime`: Date. Time that the build was completed

* `id`: number. ID of the build

* `keepForever`: boolean. 

* `lastChangedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). Process or person that last changed the build

* `lastChangedDate`: Date. Date the build was last changed

* `logs`: [BuildLogReference](./BuildLogReference.md). Log location of the build

* `orchestrationPlan`: [TaskOrchestrationPlanReference](./TaskOrchestrationPlanReference.md). Orchestration plan for the build

* `parameters`: string. Parameters for the build

* `priority`: [QueuePriority](./QueuePriority.md). The build&#x27;s priority

* `project`: [TFS_Core_Contracts.TeamProjectReference](../../../TFS/Core/Contracts/TeamProjectReference.md). The project

* `properties`: any. 

* `quality`: string. Quality of the xaml build (good, bad, etc.)

* `queue`: [AgentPoolQueue](./AgentPoolQueue.md). The queue. This should only be set if the pipeline type is Build.

* `queueOptions`: [QueueOptions](./QueueOptions.md). Queue option of the build.

* `queuePosition`: number. The current position of the build in the queue

* `queueTime`: Date. Time that the build was queued

* `reason`: [BuildReason](./BuildReason.md). Reason that the build was created

* `repository`: [BuildRepository](./BuildRepository.md). The repository

* `requestedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). The identity that queued the build

* `requestedFor`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). The identity on whose behalf the build was queued

* `result`: [BuildResult](./BuildResult.md). The build result

* `sourceBranch`: string. Source branch

* `sourceVersion`: string. Source version

* `startTime`: Date. Time that the build was started

* `status`: [BuildStatus](./BuildStatus.md). Status of the build

* `tags`: string[]. 

* `uri`: string. Uri of the build

* `url`: string. REST url of the build

* `validationResults`: [BuildRequestValidationResult](./BuildRequestValidationResult.md)[]. 

