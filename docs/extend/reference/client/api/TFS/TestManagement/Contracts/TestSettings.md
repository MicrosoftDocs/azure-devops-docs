---
title: TFS/TestManagement/Contracts TestSettings API | Extensions for Azure DevOps Services
description: Represents the test settings of the run. Used to create test settings and fetch test settings
ms.assetid: a2b0a8ed-ea29-47a2-53ac-7c256459d756
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TestSettings

Module path: `TFS/TestManagement/Contracts`


### Members

* `areaPath`: string. Area path required to create test settings

* `description`: string. Description of the test settings. Used in create test settings.

* `isPublic`: boolean. Indicates if the tests settings is public or private.Used in create test settings.

* `machineRoles`: string. Xml string of machine roles. Used in create test settings.

* `testSettingsContent`: string. Test settings content.

* `testSettingsId`: number. Test settings id.

* `testSettingsName`: string. Test settings name.

