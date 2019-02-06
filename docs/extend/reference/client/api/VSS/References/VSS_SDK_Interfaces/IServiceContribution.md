---
title: VSS/References/VSS.SDK.Interfaces IServiceContribution API | Extensions for Azure DevOps Services
description: Information about an individual contribution that contributes one or more services registered by id.
ms.assetid: 90963d2b-1eeb-adbb-6357-6e071249f21e
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

# IServiceContribution

Defined in vss.d.ts

Extends: [IExtensionContribution](../../../VSS/References/VSS_SDK_Interfaces/IExtensionContribution.md)

Information about an individual contribution that contributes one or more services registered by id. 

### Members

* `getInstance`: (objectId: string, context: any): IPromise&lt;T&gt;. Get the instance of an object registered by this contribution

