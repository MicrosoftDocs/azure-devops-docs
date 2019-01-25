---
title: TFS/VersionControl/Contracts GitItem API | Extensions for Azure DevOps Services
ms.assetid: 262cc83b-45ff-7673-da17-24bd936cda2a
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitItem

Module path: `TFS/VersionControl/Contracts`

Extends: [ItemModel](../../../TFS/VersionControl/Contracts/ItemModel.md)

### Members

* `commitId`: string. SHA1 of commit item was fetched at

* `gitObjectType`: [GitObjectType](../../../TFS/VersionControl/Contracts/GitObjectType.md). Type of object (Commit, Tree, Blob, Tag, ...)

* `latestProcessedChange`: [GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md). Shallow ref to commit that last changed this item Only populated if latestProcessedChange is requested May not be accurate if latest change is not yet cached

* `objectId`: string. Git object ID

* `originalObjectId`: string. Git object ID

