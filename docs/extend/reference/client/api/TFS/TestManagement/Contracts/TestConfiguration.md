---
title: TFS/TestManagement/Contracts TestConfiguration API | Extensions for Azure DevOps Services
ms.assetid: 9f166ac5-4400-e1c5-419a-d04d5a77822b
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TestConfiguration

Module path: `TFS/TestManagement/Contracts`


### Members

* `area`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Area of the configuration

* `description`: string. Description of the configuration

* `id`: number. ID of the configuration

* `isDefault`: boolean. Is the configuration a default for the test plans

* `lastUpdatedBy`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md). Last Updated By  Reference

* `lastUpdatedDate`: Date. Last Updated Data

* `name`: string. Name of the configuration

* `project`: [ShallowReference](../../../TFS/TestManagement/Contracts/ShallowReference.md). Project to which the configuration belongs

* `revision`: number. Revision of the configuration

* `state`: [TestConfigurationState](../../../TFS/TestManagement/Contracts/TestConfigurationState.md). State of the configuration

* `url`: string. Url of Configuration Resource

* `values`: {[key: string]: string}. Dictionary of Test Variable, Selected Value

