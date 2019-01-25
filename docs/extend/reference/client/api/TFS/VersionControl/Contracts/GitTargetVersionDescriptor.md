---
title: TFS/VersionControl/Contracts GitTargetVersionDescriptor API | Extensions for Azure DevOps Services
ms.assetid: ccfe4cad-41b5-2df6-b688-ee58ea3ca730
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitTargetVersionDescriptor

Module path: `TFS/VersionControl/Contracts`

Extends: [GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md)

### Members

* `targetVersion`: string. Version string identifier (name of tag/branch, SHA1 of commit)

* `targetVersionOptions`: [GitVersionOptions](../../../TFS/VersionControl/Contracts/GitVersionOptions.md). Version options - Specify additional modifiers to version (e.g Previous)

* `targetVersionType`: [GitVersionType](../../../TFS/VersionControl/Contracts/GitVersionType.md). Version type (branch, tag, or commit). Determines how ID is interpreted

