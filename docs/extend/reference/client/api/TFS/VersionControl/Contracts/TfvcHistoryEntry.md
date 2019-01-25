---
title: TFS/VersionControl/Contracts TfvcHistoryEntry API | Extensions for Azure DevOps Services
ms.assetid: 5cdb0eff-8183-6bd1-f54d-6b3c8a219b67
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TfvcHistoryEntry

Module path: `TFS/VersionControl/Contracts`

Extends: [HistoryEntry](../../../TFS/VersionControl/Contracts/HistoryEntry.md)&lt;[TfvcItem](../../../TFS/VersionControl/Contracts/TfvcItem.md)&gt;

### Members

* `encoding`: number. The encoding of the item at this point in history (only relevant for File history, not folders)

* `fileId`: number. The file ID of the item at this point in history (only relevant for File history, not folders)

