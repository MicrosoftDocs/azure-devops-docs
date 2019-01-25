---
title: VSS/References/SDK.Interfaces ConfigurationContext API | Extensions for Azure DevOps Services
description: Web Access configuration data. This information is used to process requests on the server.  This data is also placed in a json island on each page in order for JavaScript to know key configuration data required to things like construct proper urls
ms.assetid: ab7f95da-825c-bc81-b488-d41a0c5d6e00
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# ConfigurationContext

Defined in vss.d.ts


Web Access configuration data. This information is used to process requests on the server.  This data is also placed in a json island on each page in order for JavaScript to know key configuration data required to things like construct proper urls 

### Members

* `api`: [ConfigurationContextApis](../../../VSS/References/SDK_Interfaces/ConfigurationContextApis.md). MVC api configuration

* `clientHost`: string. Optional name of the client (e.g. TEE) hosting the page

* `isHosted`: boolean. 

* `mailSettings`: [TfsMailSettings](../../../VSS/References/SDK_Interfaces/TfsMailSettings.md). Current mail settings for TFS

* `paths`: [ConfigurationContextPaths](../../../VSS/References/SDK_Interfaces/ConfigurationContextPaths.md). Server resource paths

