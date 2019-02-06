---
title: TFS/VersionControl/Contracts HistoryQueryResults API | Extensions for Azure DevOps Services
ms.assetid: f8c7b496-4c33-36ad-c7cc-578aa8ffda07
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# HistoryQueryResults&lt;T&gt;

Module path: `TFS/VersionControl/Contracts`


### Members

* `moreResultsAvailable`: boolean. True if there are more results available to fetch (we&#x27;re returning the max # of items requested) A more RESTy solution would be to include a Link header

* `results`: [HistoryEntry](../../../TFS/VersionControl/Contracts/HistoryEntry.md)&lt;T&gt;[]. The history entries (results) from this query

