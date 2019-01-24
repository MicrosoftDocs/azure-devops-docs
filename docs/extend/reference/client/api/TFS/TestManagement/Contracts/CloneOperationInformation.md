---
title: TFS/TestManagement/Contracts CloneOperationInformation API | Extensions for Azure DevOps Services
ms.assetid: fa068d85-c81b-76b0-007b-6cb3d4f5c223
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# CloneOperationInformation

Module path: `TFS/TestManagement/Contracts`


### Members

* `cloneStatistics`: [CloneStatistics](../../../TFS/TestManagement/Contracts/CloneStatistics.md). 

* `completionDate`: Date. If the operation is complete, the DateTime of completion. If operation is not complete, this is DateTime.MaxValue

* `creationDate`: Date. DateTime when the operation was started

* `destinationObject`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Shallow reference of the destination

* `destinationPlan`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Shallow reference of the destination

* `destinationProject`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Shallow reference of the destination

* `message`: string. If the operation has Failed, Message contains the reason for failure. Null otherwise.

* `opId`: number. The ID of the operation

* `resultObjectType`: [ResultObjectType](../../../TFS/TestManagement/Contracts/ResultObjectType.md). The type of the object generated as a result of the Clone operation

* `sourceObject`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Shallow reference of the source

* `sourcePlan`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Shallow reference of the source

* `sourceProject`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Shallow reference of the source

* `state`: [CloneOperationState](../../../TFS/TestManagement/Contracts/CloneOperationState.md). Current state of the operation. When State reaches Succeeded or Failed, the operation is complete

* `url`: string. Url for getting the clone information

