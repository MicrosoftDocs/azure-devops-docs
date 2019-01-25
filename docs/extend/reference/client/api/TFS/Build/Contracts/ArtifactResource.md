---
title: TFS/Build/Contracts ArtifactResource API | Extensions for Azure DevOps Services
ms.assetid: 0ffa722a-ec5e-c172-2c19-da69ed149d79
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ArtifactResource

Module path: `TFS/Build/Contracts`


### Members

* `_links`: any. 

* `data`: string. The type-specific resource data. For example, &quot;#/10002/5/drop&quot;, &quot;$/drops/5&quot;, &quot;\\myshare\myfolder\mydrops\5&quot;

* `downloadUrl`: string. Link to the resource. This might include things like query parameters to download as a zip file

* `properties`: {[key: string]: string}. Properties of Artifact Resource

* `type`: string. The type of the resource: File container, version control folder, UNC path, etc.

* `url`: string. Link to the resource

