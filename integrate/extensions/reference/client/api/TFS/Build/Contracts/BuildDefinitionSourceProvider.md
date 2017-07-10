---
title: TFS/Build/Contracts BuildDefinitionSourceProvider API | Extensions for Visual Studio Team Services
ms.assetid: b27a8546-1b49-bad2-0f2d-6f241cdfe87c
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
generated: true
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# BuildDefinitionSourceProvider

Module path: `TFS/Build/Contracts`


### Members

* `definitionUri`: string. Uri of the associated definition

* `fields`: {[key: string]: string}. fields associated with this build definition

* `id`: number. ID of this source provider

* `lastModified`: Date. The lst time this source provider was modified

* `name`: string. Name of the source provider

* `supportedTriggerTypes`: [DefinitionTriggerType](./DefinitionTriggerType.md). Which trigger types are supported by this definition source provider

