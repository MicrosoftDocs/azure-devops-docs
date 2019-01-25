---
title: TFS/Build/Contracts BuildDefinitionReference API | Extensions for Azure DevOps Services
ms.assetid: 4641d34c-3762-650c-acfd-d309a5a479fb
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# BuildDefinitionReference

Module path: `TFS/Build/Contracts`

Extends: [DefinitionReference](./DefinitionReference.md)

### Members

* `authoredBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). The author of the definition.

* `draftOf`: [DefinitionReference](./DefinitionReference.md). If this is a draft definition, it might have a parent

* `quality`: [DefinitionQuality](./DefinitionQuality.md). The quality of the definition document (draft, etc.)

* `queue`: [AgentPoolQueue](./AgentPoolQueue.md). The default queue which should be used for requests.

