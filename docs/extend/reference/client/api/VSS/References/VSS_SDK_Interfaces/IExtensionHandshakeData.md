---
title: VSS/References/VSS.SDK.Interfaces IExtensionHandshakeData API | Extensions for Azure DevOps Services
description: Data passed to the host from an extension frame via the initial handshake
ms.assetid: 2eaf803e-d682-7903-eaf2-456f59913a4d
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

# IExtensionHandshakeData

Defined in vss.d.ts


Data passed to the host from an extension frame via the initial handshake 

### Members

* `notifyLoadSucceeded`: boolean. If true, consider the extension loaded upon completion of the initial handshake.

* `extensionReusedCallback`: (contribution: [Contribution](../../../VSS/References/SDK_Interfaces/Contribution.md)): void. Optional. Optional callback method that gets invoked when this extension frame is reused by another contribution
which shares the same URI of the contribution that originally caused this extension frame to be loaded.

