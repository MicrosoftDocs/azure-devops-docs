---
title: VSS/References/VSS.SDK.Interfaces IXDMObjectRegistry API | Extensions for Azure DevOps Services
description: Registry of XDM objects that can be invoked by an XDM channel
ms.assetid: 3b16f27d-4e16-ddd2-b85d-d5553b04efb6
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

# IXDMObjectRegistry

Defined in vss.d.ts


Registry of XDM objects that can be invoked by an XDM channel 

### Members

* `register`: (instanceId: string, instance: Object or &lt;unknown_object_signature_kind&gt;): void. Register an object (instance or factory method) exposed by this frame to callers in a remote frame

* `getInstance`: (instanceId: string, contextData: Object): T. Get an instance of an object registered with the given ID

