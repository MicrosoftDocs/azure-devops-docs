---
title: TFS/VersionControl/Contracts TfvcChange API | Extensions for Azure DevOps Services
ms.assetid: 8be72e4a-370c-3c74-234d-cc0890dff662
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TfvcChange

Module path: `TFS/VersionControl/Contracts`

Extends: [Change](../../../TFS/VersionControl/Contracts/Change.md)&lt;[TfvcItem](../../../TFS/VersionControl/Contracts/TfvcItem.md)&gt;

### Members

* `mergeSources`: [TfvcMergeSource](../../../TFS/VersionControl/Contracts/TfvcMergeSource.md)[]. List of merge sources in case of rename or branch creation.

* `pendingVersion`: number. Version at which a (shelved) change was pended against

