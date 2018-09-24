---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Stats | REST API Reference for Team Foundation Server
description: Work with Git branch statistics programmatically using the REST APIs for Team Foundation Server.
ms.assetid: E735BC54-D5AE-448F-8447-14CEB3261628
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git branch statistics
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

Branch statistics indicate how far behind and ahead a branch is from the default branch.
Branch A is "ahead" of branch B if branch A contains commits not in branch B's history.
In the picture below, `feature1` is 2 commits ahead of and 3 commits behind `master`.

![Two branches illustrating ahead/behind](./_img/ahead-behind.png)

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/repos/git/BranchStatsSample.cs) available for this endpoint.


## Get branch statistics

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/stats/branches[/{name}]?api-version={version}
```

| Parameter         | Type                         | Default | Notes
|:------------------|:-----------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string                       |         | TFS server name ({server:port}).
| project           | string                       |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository        | string                       |         | ID of the [repository](./repositories.md).
| name              | string                       |         | Name of the branch.
| Query
| api-version       | string                       |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| baseVersionType   | enum { Branch, Tag, Commit } | Branch  | [Item versions](./items.md#getaspecificversion).
| baseVersion       | string                       | master  | [Item versions](./items.md#getaspecificversion).

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### For all branches 

[!code-REST [GET__git_repositories__repositoryId__stats_branches_json](./_data/stats/GET__git_repositories__repositoryId__stats_branches.json)]

### For a single branch

[!code-REST [GET__git_repositories__repositoryId__stats_branches__name__json](./_data/stats/GET__git_repositories__repositoryId__stats_branches__name_.json)]

### For a tag or commit

You can leave out the branch name and instead specify `baseVersion` and `baseVersionType` to get stats for a commit.

[!code-REST [GET__git_repositories__repositoryId__stats_branches__name__baseVersionType-_baseVersionType__baseVersion-_baseVersion__json](./_data/stats/GET__git_repositories__repositoryId__stats_branches__name__baseVersionType-_baseVersionType__baseVersion-_baseVersion_.json)]




