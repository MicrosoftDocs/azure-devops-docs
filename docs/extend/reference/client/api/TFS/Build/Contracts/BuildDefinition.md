---
title: TFS/Build/Contracts BuildDefinition API | Extensions for Azure DevOps Services
ms.assetid: 9889e558-78df-e571-6884-75fdfd014546
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# BuildDefinition

Module path: `TFS/Build/Contracts`

Extends: [BuildDefinitionReference](./BuildDefinitionReference.md)

### Members

* `_links`: any. 

* `badgeEnabled`: boolean. Indicates whether badges are enabled for this definition

* `build`: [BuildDefinitionStep](./BuildDefinitionStep.md)[]. 

* `buildNumberFormat`: string. The build number format

* `comment`: string. The comment entered when saving the definition

* `demands`: any[]. 

* `description`: string. The description

* `dropLocation`: string. The drop location for the definition

* `jobAuthorizationScope`: [BuildAuthorizationScope](./BuildAuthorizationScope.md). Gets or sets the job authorization scope for builds which are queued against this definition

* `jobTimeoutInMinutes`: number. Gets or sets the job execution timeout in minutes for builds which are queued against this definition

* `options`: [BuildOption](./BuildOption.md)[]. 

* `properties`: any. 

* `repository`: [BuildRepository](./BuildRepository.md). The repository

* `retentionRules`: [RetentionPolicy](./RetentionPolicy.md)[]. 

* `triggers`: [BuildTrigger](./BuildTrigger.md)[]. 

* `variables`: {[key: string]: [BuildDefinitionVariable](./BuildDefinitionVariable.md)}. 

