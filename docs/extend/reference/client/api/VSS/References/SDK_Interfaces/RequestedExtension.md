---
title: VSS/References/SDK.Interfaces RequestedExtension API | Extensions for Azure DevOps Services
description: A request for an extension (to be installed or have a license assigned)
ms.assetid: 652df4ba-6caf-fb8b-faf8-261aebd431f3
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

# RequestedExtension

Defined in vss.d.ts


A request for an extension (to be installed or have a license assigned) 

### Members

* `extensionName`: string. THe unique name of the extensions

* `extensionRequests`: [ExtensionRequest](../../../VSS/References/SDK_Interfaces/ExtensionRequest.md)[]. A list of each request for the extension

* `publisherDisplayName`: string. DisplayName of the publisher that owns the extension being published.

* `publisherName`: string. Represents the Publisher of the requested extension

* `requestCount`: number. The total number of requests for an extension

