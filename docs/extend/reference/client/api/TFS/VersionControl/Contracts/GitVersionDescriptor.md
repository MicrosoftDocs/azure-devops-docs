---
title: TFS/VersionControl/Contracts GitVersionDescriptor API | Extensions for Azure DevOps Services
ms.assetid: 939b061b-f663-d236-e528-26c44c294558
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitVersionDescriptor

Module path: `TFS/VersionControl/Contracts`


### Members

* `version`: string. Version string identifier (name of tag/branch/index, SHA1 of commit)

* `versionOptions`: [GitVersionOptions](../../../TFS/VersionControl/Contracts/GitVersionOptions.md). Version options - Specify additional modifiers to version (e.g Previous)

* `versionType`: [GitVersionType](../../../TFS/VersionControl/Contracts/GitVersionType.md). Version type (branch, tag, commit, or index). Determines how ID is interpreted

