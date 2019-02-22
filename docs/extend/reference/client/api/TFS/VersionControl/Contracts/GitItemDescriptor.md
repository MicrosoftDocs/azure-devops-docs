---
title: TFS/VersionControl/Contracts GitItemDescriptor API | Extensions for Azure DevOps Services
ms.assetid: 79043358-fe16-6ea6-3dbe-35d8600f9db2
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitItemDescriptor

Module path: `TFS/VersionControl/Contracts`


### Members

* `path`: string. Path to item

* `recursionLevel`: [VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Specifies whether to include children (OneLevel), all descendants (Full), or None

* `version`: string. Version string (interpretation based on VersionType defined in subclass

* `versionOptions`: [GitVersionOptions](../../../TFS/VersionControl/Contracts/GitVersionOptions.md). Version modifiers (e.g. previous)

* `versionType`: [GitVersionType](../../../TFS/VersionControl/Contracts/GitVersionType.md). How to interpret version (branch,tag,commit)

