---
title: TFS/VersionControl/Contracts GitBaseVersionDescriptor API | Extensions for Azure DevOps Services
ms.assetid: 34b7e04d-66df-1209-7118-871feb47fc93
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitBaseVersionDescriptor

Module path: `TFS/VersionControl/Contracts`

Extends: [GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md)

### Members

* `baseVersion`: string. Version string identifier (name of tag/branch, SHA1 of commit)

* `baseVersionOptions`: [GitVersionOptions](../../../TFS/VersionControl/Contracts/GitVersionOptions.md). Version options - Specify additional modifiers to version (e.g Previous)

* `baseVersionType`: [GitVersionType](../../../TFS/VersionControl/Contracts/GitVersionType.md). Version type (branch, tag, or commit). Determines how ID is interpreted

