---
title: VSS/References/SDK.Interfaces WebContext API | Extensions for Azure DevOps Services
description: Context information for all web access requests
ms.assetid: 6092465a-6730-ae0b-adc8-dda13b52522d
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

# WebContext

Defined in vss.d.ts


Context information for all web access requests 

### Members

* `account`: [HostContext](../../../VSS/References/SDK_Interfaces/HostContext.md). 

* `collection`: [HostContext](../../../VSS/References/SDK_Interfaces/HostContext.md). Information about the Collection used in the current request (may be null)

* `host`: [ExtendedHostContext](../../../VSS/References/SDK_Interfaces/ExtendedHostContext.md). Information about the current request context&#x27;s host

* `project`: [ContextIdentifier](../../../VSS/References/SDK_Interfaces/ContextIdentifier.md). Information about the project used in the current request (may be null)

* `team`: [TeamContext](../../../VSS/References/SDK_Interfaces/TeamContext.md). Information about the team used in the current request (may be null)

* `user`: [UserContext](../../../VSS/References/SDK_Interfaces/UserContext.md). Information about the current user

