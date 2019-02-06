---
title: TFS/Build/Contracts InformationNode API | Extensions for Azure DevOps Services
description: Data representation of an information node associated with a build
ms.assetid: d0822b03-5b46-0b84-1277-034da053c55e
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# InformationNode

Module path: `TFS/Build/Contracts`


### Members

* `fields`: {[key: string]: string}. Fields of the information node

* `lastModifiedBy`: string. Process or person that last modified this node

* `lastModifiedDate`: Date. Date this node was last modified

* `nodeId`: number. Node ID of this information node

* `parentId`: number. ID of parent node (xml tree)

* `type`: string. The type of the information node

