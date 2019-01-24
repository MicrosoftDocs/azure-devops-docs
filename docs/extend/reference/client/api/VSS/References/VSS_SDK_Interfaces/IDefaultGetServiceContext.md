---
title: VSS/References/VSS.SDK.Interfaces IDefaultGetServiceContext API | Extensions for Azure DevOps Services
description: Context passed to GetServiceInstance
ms.assetid: 8b2653a7-2a13-4d86-9581-827e8d6df5af
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

# IDefaultGetServiceContext

Defined in vss.d.ts


Context passed to GetServiceInstance 

### Members

* `webContext`: [WebContext](../../../VSS/References/SDK_Interfaces/WebContext.md). The web context to be used in the get service call

* `extensionContext`: [IExtensionContext](../../../VSS/References/VSS_SDK_Interfaces/IExtensionContext.md). The extension context, i.e. publisher id, extension id, etc.

* `hostManagementServiceOptions`: [IHostManagementServiceOptions](../../../VSS/References/VSS_SDK_Interfaces/IHostManagementServiceOptions.md). Options that were passed to the host management service, 
contains the registered VSS auth application ID

