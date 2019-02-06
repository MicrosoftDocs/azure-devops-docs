---
title: TFS/VersionControl/Contracts HistoryEntry API | Extensions for Azure DevOps Services
ms.assetid: 38b9e7ba-734a-75a6-be0b-2ff829f5e635
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# HistoryEntry&lt;T&gt;

Module path: `TFS/VersionControl/Contracts`


### Members

* `changeList`: [ChangeList](../../../TFS/VersionControl/Contracts/ChangeList.md)&lt;T&gt;. The Change list (changeset/commit/shelveset) for this point in history

* `itemChangeType`: [VersionControlChangeType](../../../TFS/VersionControl/Contracts/VersionControlChangeType.md). The change made to the item from this change list (only relevant for File history, not folders)

* `serverItem`: string. The path of the item at this point in history (only relevant for File history, not folders)

