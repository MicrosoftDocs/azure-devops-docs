---
title: TFS/VersionControl/Contracts TfvcChangesetSearchCriteria API | Extensions for Azure DevOps Services
description: Criteria used in a search for change lists
ms.assetid: 495ac3c4-9db7-b9ec-1265-2f1ca2bd21bf
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TfvcChangesetSearchCriteria

Module path: `TFS/VersionControl/Contracts`


### Members

* `author`: string. Alias or display name of user who made the changes

* `followRenames`: boolean. Whether or not to follow renames for the given item being queried

* `fromDate`: string. If provided, only include changesets created after this date (string) Think of a better name for this.

* `fromId`: number. If provided, only include changesets after this changesetID

* `includeLinks`: boolean. Whether to include the _links field on the shallow references

* `path`: string. Path of item to search under

* `toDate`: string. If provided, only include changesets created before this date (string) Think of a better name for this.

* `toId`: number. If provided, a version descriptor for the latest change list to include

