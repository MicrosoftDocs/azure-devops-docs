---
title: TFS/VersionControl/Contracts TfvcMergeSource API | Extensions for Azure DevOps Services
ms.assetid: 8e6d55eb-e2c1-8a15-642e-ddee351c217d
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TfvcMergeSource

Module path: `TFS/VersionControl/Contracts`


### Members

* `isRename`: boolean. Indicates if this a rename source. If false, it is a merge source.

* `serverItem`: string. The server item of the merge source

* `versionFrom`: number. Start of the version range

* `versionTo`: number. End of the version range

