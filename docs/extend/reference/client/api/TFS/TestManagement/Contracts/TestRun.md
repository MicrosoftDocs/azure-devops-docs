---
title: TFS/TestManagement/Contracts TestRun API | Extensions for Azure DevOps Services
ms.assetid: 104b2f37-2962-e94c-8555-5941fdce65f0
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TestRun

Module path: `TFS/TestManagement/Contracts`


### Members

* `build`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `buildConfiguration`: [BuildConfiguration](../../../TFS/TestManagement/Contracts/BuildConfiguration.md). 

* `comment`: string. 

* `completedDate`: Date. 

* `controller`: string. 

* `createdDate`: Date. 

* `customFields`: [CustomTestField](../../../TFS/TestManagement/Contracts/CustomTestField.md)[]. 

* `dropLocation`: string. 

* `dtlAutEnvironment`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `dtlEnvironment`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `dtlEnvironmentCreationDetails`: [DtlEnvironmentDetails](../../../TFS/TestManagement/Contracts/DtlEnvironmentDetails.md). 

* `dueDate`: Date. 

* `errorMessage`: string. 

* `filter`: [RunFilter](../../../TFS/TestManagement/Contracts/RunFilter.md). 

* `id`: number. 

* `incompleteTests`: number. 

* `isAutomated`: boolean. 

* `iteration`: string. 

* `lastUpdatedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `lastUpdatedDate`: Date. 

* `name`: string. 

* `notApplicableTests`: number. 

* `owner`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `passedTests`: number. 

* `phase`: string. 

* `plan`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `postProcessState`: string. 

* `project`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `releaseEnvironmentUri`: string. 

* `releaseUri`: string. 

* `revision`: number. 

* `runStatistics`: [RunStatistic](../../../TFS/TestManagement/Contracts/RunStatistic.md)[]. 

* `startedDate`: Date. 

* `state`: string. 

* `substate`: [TestRunSubstate](../../../TFS/TestManagement/Contracts/TestRunSubstate.md). 

* `testEnvironment`: [TestEnvironment](../../../TFS/TestManagement/Contracts/TestEnvironment.md). 

* `testMessageLogId`: number. 

* `testSettings`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `totalTests`: number. 

* `unanalyzedTests`: number. 

* `url`: string. 

* `webAccessUrl`: string. 

