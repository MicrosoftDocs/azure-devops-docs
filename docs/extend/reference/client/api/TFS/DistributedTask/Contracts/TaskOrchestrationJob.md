---
title: TFS/DistributedTask/Contracts TaskOrchestrationJob API | Extensions for Azure DevOps Services
ms.assetid: bc2745cb-f361-3236-4452-af1266debcee
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TaskOrchestrationJob

Module path: `TFS/DistributedTask/Contracts`

Extends: [TaskOrchestrationItem](../../../TFS/DistributedTask/Contracts/TaskOrchestrationItem.md)

### Members

* `demands`: any[]. 

* `executeAs`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `executionTimeout`: any. 

* `instanceId`: string. 

* `name`: string. 

* `tasks`: [TaskInstance](../../../TFS/DistributedTask/Contracts/TaskInstance.md)[]. 

* `variables`: {[key: string]: string}. 

