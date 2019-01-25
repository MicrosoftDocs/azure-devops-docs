---
title: TFS/TestManagement/Contracts TestCaseResultUpdateModel API | Extensions for Azure DevOps Services
ms.assetid: 50a7117f-f09c-73fc-1992-4ea9b42affd8
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TestCaseResultUpdateModel

Module path: `TFS/TestManagement/Contracts`


### Members

* `associatedWorkItems`: number[]. 

* `automatedTestTypeId`: string. 

* `comment`: string. 

* `completedDate`: string. 

* `computerName`: string. 

* `customFields`: [CustomTestField](../../../TFS/TestManagement/Contracts/CustomTestField.md)[]. 

* `durationInMs`: string. 

* `errorMessage`: string. 

* `failureType`: string. 

* `outcome`: string. 

* `owner`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `resolutionState`: string. 

* `runBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `stackTrace`: string. 

* `startedDate`: string. 

* `state`: string. 

* `testCasePriority`: string. 

* `testResult`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

