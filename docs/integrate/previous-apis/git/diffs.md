---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Diffs | REST API Reference for Team Foundation Server
description: Work with Git differences programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 920FAC3A-471D-412C-BC6B-CA767CFC3645
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Git diffs
[!INCLUDE [API_version](../_data/version.md)]

Diffs compare a target version with a base version and return a list of items that are only in the target version.
If either the target or base version isn't specified, the default branch is used.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of differences

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/diffs/commits?api-version={version}
```

| Parameter         | Type                         | Default | Notes
|:------------------|:-----------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string                       |         | TFS server name ({server:port}).
| project           | string                       |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository        | string                       |         | ID of the [repository](./repositories.md).
| Query
| api-version       | string                       |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| baseVersionType   | enum { Branch, Tag, Commit } | Branch  | [Item versions](./items.md#getaspecificversion).
| baseVersion       | string                       | master  | [Item versions](./items.md#getaspecificversion).
| targetVersionType | enum { Branch, Tag, Commit } | Branch  | [Item versions](./items.md#getaspecificversion).
| targetVersion     | string                       | master  | [Item versions](./items.md#getaspecificversion).
| $skip             | integer                      | 0       | Number of commits to skip.
| $top              | integer                      | 100     | Number of commits to return.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### By repository ID

[!code-REST [GET__git_repositories__repositoryId__diffs_commits_targetVersion-_targetVersion__baseVersion-_baseVersion__json](./_data/diffs/GET__git_repositories__repositoryId__diffs_commits_targetVersion-_targetVersion__baseVersion-_baseVersion_.json)]

### A page at a time

[!code-REST [GET__git_repositories__repositoryId__diffs_commits_targetVersion-_targetVersion__baseVersion-_baseVersion___top-_top___skip-_skip__json](./_data/diffs/GET__git_repositories__repositoryId__diffs_commits_targetVersion-_targetVersion__baseVersion-_baseVersion___top-_top___skip-_skip_.json)]

### Between commit IDs

[!code-REST [GET__git_repositories__repositoryId__diffs_commits_baseVersionType-_baseVersionType__baseVersion-_baseVersion__targetVersionType-_targetVersionType__targetVersion-_targetVersion__json](./_data/diffs/GET__git_repositories__repositoryId__diffs_commits_baseVersionType-_baseVersionType_.json)]