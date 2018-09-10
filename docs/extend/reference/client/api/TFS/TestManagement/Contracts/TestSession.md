---
title: TFS/TestManagement/Contracts TestSession API | Extensions for Azure DevOps Services
ms.contentid: f3237c96-537c-44cb-9d91-f58316534d20
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
---

# TestSession

Module path: `TFS/TestManagement/Contracts`


### Members

* `id`: number. ID of the test session

* `title`: string. Title of the test session

* `Url`: string. Url of the test session resource

* `project`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Project to which the test session belongs

* `lastUpdatedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). Last Updated By  Reference

* `lastUpdatedDate`: Date. Last updated date

* `startDate`: Date. Start date

* `endDate`: Date. Duration of the session

* `area`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Area path of the test session

* `revision`: number. Revision

* `source`: [Contracts.TestSessionSource](../../../TFS/TestManagement/Contracts/TestSessionSource.md). Source of the test session

* `state`: [Contracts.TestSessionState](../../../TFS/TestManagement/Contracts/TestSessionState.md). State of the test session

* `comment`: string. Comments in the test session

* `owner`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). Owner of the test session

* `propertyBag`: [Contracts.PropertyBag](../../../TFS/TestManagement/Contracts/PropertyBag.md). Generic store for test session data



