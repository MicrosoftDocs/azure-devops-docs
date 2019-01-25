---
title: TFS/TestManagement/Contracts RunCreateModel API | Extensions for Azure DevOps Services
ms.assetid: bcff5da0-0e52-452d-b50b-b974a36ea263
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# RunCreateModel

Module path: `TFS/TestManagement/Contracts`


### Members

* `automated`: boolean. 

* `build`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `buildDropLocation`: string. 

* `buildFlavor`: string. 

* `buildPlatform`: string. 

* `comment`: string. 

* `completeDate`: string. 

* `configurationIds`: number[]. 

* `controller`: string. 

* `customTestFields`: [CustomTestField](../../../TFS/TestManagement/Contracts/CustomTestField.md)[]. 

* `dtlAutEnvironment`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `dtlTestEnvironment`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `dueDate`: string. 

* `environmentDetails`: [DtlEnvironmentDetails](../../../TFS/TestManagement/Contracts/DtlEnvironmentDetails.md). 

* `errorMessage`: string. 

* `filter`: [RunFilter](../../../TFS/TestManagement/Contracts/RunFilter.md). 

* `iteration`: string. 

* `name`: string. 

* `owner`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `plan`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `pointIds`: number[]. 

* `releaseEnvironmentUri`: string. 

* `releaseUri`: string. 

* `runTimeout`: any. 

* `sourceWorkflow`: string. 

* `startDate`: string. 

* `state`: string. 

* `testConfigurationsMapping`: string. 

* `testEnvironmentId`: string. 

* `testSettings`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). 

* `type`: string. 

