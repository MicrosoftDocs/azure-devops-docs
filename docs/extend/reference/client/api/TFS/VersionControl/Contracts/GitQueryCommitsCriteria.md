---
title: TFS/VersionControl/Contracts GitQueryCommitsCriteria API | Extensions for Azure DevOps Services
ms.assetid: b8294551-ee0a-0b1d-835c-4cf54075f4ca
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# GitQueryCommitsCriteria

Module path: `TFS/VersionControl/Contracts`


### Members

* `$skip`: number. Number of entries to skip

* `$top`: number. Maximum number of entries to retrieve

* `author`: string. Alias or display name of the author

* `compareVersion`: [GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). If provided, the earliest commit in the graph to search

* `excludeDeletes`: boolean. If true, don&#x27;t include delete history entries

* `fromCommitId`: string. If provided, a lower bound for filtering commits alphabetically

* `fromDate`: string. If provided, only include history entries created after this date (string)

* `ids`: string[]. If provided, specifies the exact commit IDs of the commits to fetch. May not be combined with other parameters.

* `includeLinks`: boolean. Whether to include the _links field on the shallow references

* `itemPath`: string. Path of item to search under

* `itemVersion`: [GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). If provided, identifies the commit or branch to search

* `toCommitId`: string. If provided, an upper bound for filtering commits alphabetically

* `toDate`: string. If provided, only include history entries created before this date (string)

* `user`: string. Alias or display name of the committer

