---
title: TFS/VersionControl/Contracts GitTreeEntryRef API | Extensions for Azure DevOps Services
ms.assetid: ea7f41bc-4d9e-4d32-3396-3b5c103e6a0b
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitTreeEntryRef

Module path: `TFS/VersionControl/Contracts`


### Members

* `gitObjectType`: [GitObjectType](../../../TFS/VersionControl/Contracts/GitObjectType.md). Blob or tree

* `mode`: string. Mode represented as octal string

* `objectId`: string. SHA1 hash of git object

* `relativePath`: string. Path relative to parent tree object

* `size`: number. Size of content

* `url`: string. url to retrieve tree or blob

