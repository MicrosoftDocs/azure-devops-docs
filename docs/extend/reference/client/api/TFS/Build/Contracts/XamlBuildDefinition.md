---
title: TFS/Build/Contracts XamlBuildDefinition API | Extensions for Azure DevOps Services
ms.assetid: f6cbd2c1-a6f0-0bb3-425f-8242bb8385f4
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# XamlBuildDefinition

Module path: `TFS/Build/Contracts`

Extends: [DefinitionReference](./DefinitionReference.md)

### Members

* `_links`: any. 

* `batchSize`: number. Batch size of the definition

* `buildArgs`: string. 

* `continuousIntegrationQuietPeriod`: number. The continuous integration quiet period

* `controller`: [BuildController](./BuildController.md). The build controller

* `createdOn`: Date. The date this definition was created

* `defaultDropLocation`: string. Default drop location for builds from this definition

* `description`: string. Description of the definition

* `lastBuild`: [ShallowReference](./ShallowReference.md). The last build on this definition

* `repository`: [BuildRepository](./BuildRepository.md). The repository

* `supportedReasons`: [BuildReason](./BuildReason.md). The reasons supported by the template

* `triggerType`: [DefinitionTriggerType](./DefinitionTriggerType.md). How builds are triggered from this definition

