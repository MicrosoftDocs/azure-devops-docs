---
title: TFS/DistributedTask/Contracts TaskAgent API | Extensions for Azure DevOps Services
description: Data representation of a task agent.
ms.assetid: 218462f5-7b2d-42a4-de7c-c39047987f1f
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: mijacobs
author: chcomley
ms.topic: article
ms.author: chcomley
ms.date: 08/04/2016
---

# TaskAgent

Module path: `TFS/DistributedTask/Contracts`

Extends: [TaskAgentReference](../../../TFS/DistributedTask/Contracts/TaskAgentReference.md)

### Members

* `assignedRequest`: [TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md). Gets the request which is currently assigned to this agent.

* `createdOn`: Date. Gets the date on which this agent was created.

* `maxParallelism`: number. Gets or sets the maximum job parallelism allowed on this host.

* `properties`: any. 

* `statusChangedOn`: Date. Gets the date on which the last connectivity status change occurred.

* `systemCapabilities`: {[key: string]: string}. 

* `userCapabilities`: {[key: string]: string}. 

