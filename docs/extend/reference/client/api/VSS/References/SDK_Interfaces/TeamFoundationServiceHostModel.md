---
title: VSS/References/SDK.Interfaces TeamFoundationServiceHostModel API | Extensions for Visual Studio Team Services
description: Data contract to represent a given team foundation service host (account, collection, deployment)
ms.assetid: 2e1b7e89-40dd-b658-351f-4bfe8f27984d
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# TeamFoundationServiceHostModel

Defined in vss.d.ts


Data contract to represent a given team foundation service host (account, collection, deployment) 

### Members

* `hostType`: any. Type of host (deployment, account, collection)

* `instanceId`: string. Unique ID of the host (collection id, account id, etc.)

* `name`: string. Name of the host (collection name, account name, etc.)

* `relVDir`: string. Path of the service host, relative to the root virtual directory (e.g. DefaultCollection)

* `vDir`: string. Path of the service host relative to the web application root (e.g. /tfs/DefaultCollection)

