---
title: VSS/References/VSS.SDK.Interfaces IHostHandshakeData API | Extensions for Azure DevOps Services
description: Data passed from the host to an extension frame via the initial handshake
ms.assetid: a91732d8-ba66-b488-9dfa-fc178d794f89
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

# IHostHandshakeData

Defined in vss.d.ts


Data passed from the host to an extension frame via the initial handshake 

### Members

* `pageContext`: [PageContext](../../../VSS/References/SDK_Interfaces/PageContext.md). Static context information about the current page

* `initialConfig`: any. Optional. Initial configuration for the extension frame

* `extensionContext`: [IExtensionContext](../../../VSS/References/VSS_SDK_Interfaces/IExtensionContext.md). Context information about the extension

* `contribution`: [Contribution](../../../VSS/References/SDK_Interfaces/Contribution.md). The contribution that caused the extension frame to be loaded.

