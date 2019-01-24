---
title: TFS/VersionControl/Contracts GitTreeRef API | Extensions for Azure DevOps Services
ms.assetid: 3fb29e03-c5e5-aad3-7620-d1c12210928c
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitTreeRef

Module path: `TFS/VersionControl/Contracts`


### Members

* `_links`: any. 

* `objectId`: string. SHA1 hash of git object

* `size`: number. Sum of sizes of all children

* `treeEntries`: [GitTreeEntryRef](../../../TFS/VersionControl/Contracts/GitTreeEntryRef.md)[]. Blobs and trees under this tree

* `url`: string. Url to tree

