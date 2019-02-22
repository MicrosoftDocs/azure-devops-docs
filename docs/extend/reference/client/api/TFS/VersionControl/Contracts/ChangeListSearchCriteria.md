---
title: TFS/VersionControl/Contracts ChangeListSearchCriteria API | Extensions for Azure DevOps Services
description: Criteria used in a search for change lists
ms.assetid: fffe97e2-8202-fb1b-c67a-503d89745753
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# ChangeListSearchCriteria

Module path: `TFS/VersionControl/Contracts`


### Members

* `compareVersion`: string. If provided, a version descriptor to compare against base

* `excludeDeletes`: boolean. If true, don&#x27;t include delete history entries

* `followRenames`: boolean. Whether or not to follow renames for the given item being queried

* `fromDate`: string. If provided, only include history entries created after this date (string)

* `fromVersion`: string. If provided, a version descriptor for the earliest change list to include

* `itemPath`: string. Path of item to search under

* `itemVersion`: string. Version of the items to search

* `skip`: number. Number of results to skip (used when clicking more...)

* `toDate`: string. If provided, only include history entries created before this date (string)

* `top`: number. If provided, the maximum number of history entries to return

* `toVersion`: string. If provided, a version descriptor for the latest change list to include

* `user`: string. Alias or display name of user who made the changes

