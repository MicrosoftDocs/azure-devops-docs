---
title: TFS/TestManagement/Contracts TestCaseResult API | Extensions for Azure DevOps Services
ms.assetid: 8e625aa7-d1fa-ff00-d98b-41c483ec82c2
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TestCaseResult

Module path: `TFS/TestManagement/Contracts`


### Members

* `afnStripId`: number. 

* `area`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `associatedBugs`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md)[]. 

* `automatedTestId`: string. 

* `automatedTestName`: string. 

* `automatedTestStorage`: string. 

* `automatedTestType`: string. 

* `automatedTestTypeId`: string. 

* `build`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `buildReference`: [BuildReference](../../../TFS/TestManagement/Contracts/BuildReference.md). 

* `comment`: string. 

* `completedDate`: Date. 

* `computerName`: string. 

* `configuration`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `createdDate`: Date. 

* `customFields`: [CustomTestField](../../../TFS/TestManagement/Contracts/CustomTestField.md)[]. 

* `durationInMs`: number. 

* `errorMessage`: string. 

* `failingSince`: [FailingSince](../../../TFS/TestManagement/Contracts/FailingSince.md). 

* `failureType`: string. 

* `id`: number. 

* `iterationDetails`: [TestIterationDetailsModel](../../../TFS/TestManagement/Contracts/TestIterationDetailsModel.md)[]. 

* `lastUpdatedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `lastUpdatedDate`: Date. 

* `outcome`: string. 

* `owner`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `priority`: number. 

* `project`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `resetCount`: number. 

* `resolutionState`: string. 

* `resolutionStateId`: number. 

* `revision`: number. 

* `runBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `stackTrace`: string. 

* `startedDate`: Date. 

* `state`: string. 

* `testCase`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `testCaseTitle`: string. 

* `testPoint`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `testRun`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `url`: string. 

