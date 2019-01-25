---
title: VSS/References/SDK.Interfaces ExtensionRequest API | Extensions for Azure DevOps Services
description: A request for an extension (to be installed or have a license assigned)
ms.assetid: 56f8f33a-5739-1f6a-657c-e0bef649cf52
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

# ExtensionRequest

Defined in vss.d.ts


A request for an extension (to be installed or have a license assigned) 

### Members

* `rejectMessage`: string. Required message supplied if the request is rejected

* `requestDate`: Date. Date at which the request was made

* `requestedBy`: any. Represents the user who made the request

* `requestMessage`: string. Optional message supplied by the requester justifying the request

* `requestState`: [ExtensionRequestState](../../../VSS/References/SDK_Interfaces/ExtensionRequestState.md). Represents the state of the request

* `resolveDate`: Date. Date at which the request was resolved

* `resolvedBy`: any. Represents the user who resolved the request

