---
title: TFS/Build/Contracts ContinuousIntegrationTrigger API | Extensions for Azure DevOps Services
ms.assetid: 89b6ae91-8256-6d42-d859-c72fbe21690a
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ContinuousIntegrationTrigger

Module path: `TFS/Build/Contracts`

Extends: [BuildTrigger](./BuildTrigger.md)

### Members

* `batchChanges`: boolean. 

* `branchFilters`: string[]. 

* `maxConcurrentBuildsPerBranch`: number. 

* `pollingInterval`: number. The polling interval in seconds.

* `pollingJobId`: string. This is the ID of the polling job that polls the external repository.  Once the build definition is saved/updated, this value is set.

