---
title: TFS/VersionControl/Contracts GitHistoryQueryResults API | Extensions for Azure DevOps Services
ms.assetid: 411868b0-8cd6-d446-ffca-2cb9886b6a03
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitHistoryQueryResults

Module path: `TFS/VersionControl/Contracts`

Extends: [HistoryQueryResults](../../../TFS/VersionControl/Contracts/HistoryQueryResults.md)&lt;[GitItem](../../../TFS/VersionControl/Contracts/GitItem.md)&gt;

### Members

* `startingCommitId`: string. Seed commit used for querying history.  Used for skip feature.

* `unpopulatedCount`: number. 

* `unprocessedCount`: number. 

