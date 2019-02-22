---
title: TFS/Build/Contracts BuildDefinitionSourceProvider API | Extensions for Azure DevOps Services
ms.assetid: b27a8546-1b49-bad2-0f2d-6f241cdfe87c
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# BuildDefinitionSourceProvider

Module path: `TFS/Build/Contracts`


### Members

* `definitionUri`: string. URI of the associated definition

* `fields`: {[key: string]: string}. fields associated with this build definition

* `id`: number. ID of this source provider

* `lastModified`: Date. The lst time this source provider was modified

* `name`: string. Name of the source provider

* `supportedTriggerTypes`: [DefinitionTriggerType](./DefinitionTriggerType.md). Which trigger types are supported by this definition source provider

