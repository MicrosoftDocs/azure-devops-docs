---
title: TFS/Build/Contracts BuildSummary API | Extensions for Azure DevOps Services
description: Data representation of a build summary.
ms.assetid: 59316f9f-7d1d-921c-437e-ad7beb6c584a
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: mijacobs
author: chcomley
ms.topic: article
ms.author: chcomley
ms.date: 08/04/2016
---

# BuildSummary

Module path: `TFS/Build/Contracts`


### Members

* `build`: [ShallowReference](./ShallowReference.md). 

* `finishTime`: Date. 

* `keepForever`: boolean. 

* `quality`: string. 

* `reason`: [BuildReason](./BuildReason.md). 

* `requestedFor`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). 

* `startTime`: Date. 

* `status`: [BuildStatus](./BuildStatus.md). 

