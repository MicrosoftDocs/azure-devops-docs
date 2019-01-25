---
title: VSS/WebApi/Contracts JsonPatchOperation API | Extensions for Azure DevOps Services
description: The JSON model for a JSON Patch operation
ms.assetid: 1f557561-697d-c417-cb20-0dcc06efed68
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# JsonPatchOperation

Module path: `VSS/WebApi/Contracts`


### Members

* `from`: string. The path to copy from for the Move/Copy operation.

* `op`: [Operation](../../../VSS/WebApi/Contracts/Operation.md). The patch operation

* `path`: string. The path for the operation

* `value`: any. The value for the operation. This is either a primitive or a JToken.

