---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Commits | REST API Reference for Team Foundation Server
description: Work with Git commits programmatically using the REST APIs for Team Foundation Server.
ms.assetid: DD768682-3DC8-4E00-85E8-699633A93EB2
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Git commits
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of commits

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits?api-version={version}[&branch={string}&commit={string}&itemPath={string}&committer={string}&author={string}&fromDate={dateTime}&toDate={dateTime}[&$top={integer}&$skip={integer}]
```

| Parameter  | Type     | Default | Notes
|:-----------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   |         | TFS server name ({server:port}).
| project    | string   |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string   |         | ID of the [repository](./repositories.md).
| Query
| api-version| string   |         | Version of the API to use.
| branch     | string   |         | The name of a branch in the repository. (Cannot combine with commit parameter.)
| commit     | string   |         | The id of a commit in the repository. (Cannot combine with branch parameter.)
| itemPath   | string   | /       | Path of an item in the repository.
| committer  | string   |         | Name of the person who committed the change.
| author     | string   |         | Name of the author.
| fromDate   | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |         | Start date to search from.
| toDate     | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |         | End date to search to.
| $skip      | integer  | 0       | Number of commits to skip.
| $top       | integer  | 100     | Number of commits to return.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### By repository ID

If you do not specify any optional parameters, then we return all commits in the repository, regardless of reachability from branches.

[!code-REST [GET__git_repositories__repositoryId__commits_json](./_data/commits/GET__git_repositories__repositoryId__commits.json)]

### In the history of a commit

To return the commits in the history of a specific commit, use the `commit` parameter.

[!code-REST [GET__git_repositories__repositoryId__commits_commit_json](./_data/commits/GET__git_repositories__repositoryId__commits_commit.json)]

### In the history of a branch

To return the commits in the history of a branch, use the `branch` parameter.

[!code-REST [GET__git_repositories__repositoryId__commits_branch_json](./_data/commits/GET__git_repositories__repositoryId__commits_branch.json)]

You can also send a POST request and send the [items version](./items.md#getaspecificversion) in the request body.

[!code-REST [POST__git_repositories__repositoryId__commitsBatch_json](./_data/commits/POST__git_repositories__repositoryId__commitsBatch.json)]

### For an item

Get all the commits that included changes to an item. *Note:* When specifying `itemPath`, if you do not also specify a branch or commit, then the search will begin at the default branch (or any branch, if no default branch exists).

[!code-REST [GET__git_repositories__repositoryId__commits_branch_itemPath-_itemPath__json](./_data/commits/GET__git_repositories__repositoryId__commits_branch_itemPath-_itemPath_.json)]

[!code-REST [GET__git_repositories__repositoryId__commits_commit_itemPath-_itemPath__json](./_data/commits/GET__git_repositories__repositoryId__commits_commit_itemPath-_itemPath_.json)]

### By the committer

Get the commits based on the person who committed them to the repository.

[!code-REST [GET__git_repositories__repositoryId__commits_committer-_committer__json](./_data/commits/GET__git_repositories__repositoryId__commits_committer-_committer_.json)]

### By the author

Get the commits based on who authored the files that were committed to the repository.

[!code-REST [GET__git_repositories__repositoryId__commits_author-_author__json](./_data/commits/GET__git_repositories__repositoryId__commits_author-_author_.json)]

### In a date range
<a name="inadaterange" />

[!code-REST [GET__git_repositories__repositoryId__commits_fromDate-_fromDate__toDate-_toDate__json](./_data/commits/GET__git_repositories__repositoryId__commits_fromDate-_fromDate__toDate-_toDate_.json)]

### A page at a time
<a name="apageatatime" />

[!code-REST [GET__git_repositories__repositoryId__commits__skip-_skip___top-_top__json](./_data/commits/GET__git_repositories__repositoryId__commits__skip-_skip___top-_top_.json)]

### From a push

Get the commits that were introduced to the repo by a push. This does not include commits which already existed in the repo, for instance on another branch. 

[!code-REST [GET__git_repositories__repositoryId__pushes__pushId__commits_json](./_data/commits/GET__git_repositories__repositoryId__pushes__pushId__commits.json)]

## Get a batch of commits

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commitsBatch?api-version={version}
```

| Parameter  | Type     | Default | Notes
|:-----------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   |         | TFS server name ({server:port}).
| project    | string   |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string   |         | ID of the [repository](./repositories.md).
| Query
| api-version| string   |         | Version of the API to use.

### By a list of commit IDs

Send a POST request with a list of IDs you want.

[!code-REST [POST__git_repositories__repositoryId__commitsBatch__ids_json](./_data/commits/POST__git_repositories__repositoryId__commitsBatch__ids.json)]

### Between two versions

To return the set of commits in the history of one version that are _not_ in the history of another, send a POST request and send the [items versions](./items.md#getaspecificversion) in the request body.

[!code-REST [POST__git_repositories__repositoryId__commitsBatch2_json](./_data/commits/POST__git_repositories__repositoryId__commitsBatch2.json)]

## Get a single commit

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits/{commitId}?api-version={version}[&changeCount={integer}]
```
| Parameter   | Type    | Default | Notes
|:------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string  |         | TFS server name ({server:port}).
| project     | string  |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  |         | ID of the [repository](./repositories.md).
| commitId    | string  |         | ID of the commit.
| Query
| api-version | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| changeCount | integer | 0       | The number of changes in the commit to include in the response.

### Just the commit

[!code-REST [GET__git_repositories__repositoryId__commits__commitId__json](./_data/commits/GET__git_repositories__repositoryId__commits__commitId_.json)]

### With changed items
<a name="withchangeditems" />

[!code-REST [GET__git_repositories__repositoryId__commits__commitId__changeCount-10_json](./_data/commits/GET__git_repositories__repositoryId__commits__commitId__changeCount-10.json)]

## Commit status
<a name="commit_status" />

Commit status allows you to mark commits with status information from other systems.
For instance, it's used in VSTS to surface build status in the web UI.

### Add status

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits/{commit}/statuses?api-version={version}
```
```
{
  "state": {string},
  "description": {string},
  "targetURL": {string},
  "context": {
      "name": {string},
      "genre": {string}
   }
}
```

| Parameter     | Type     | Notes
|:--------------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string                                     | TFS server name ({server:port}).
| project       | string                                     | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*| repository    | string                                     | ID of the [repository](./repositories.md).
| Query
| api-version   | string                                     | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| state         | enum { Pending, Succeeded, Failed, Error } | The state of the commit.
| description   | string                                     | Description of the status. Example: "The build is successful".
| targetUrl     | string                                     | Url of the target.
| context.name  | string                                     | Name of the status. Example: Build123.
| context.genre | string                                     | Type of the status. Example: continuous-integration.

[!code-REST [POST__git_repositories__repositoryId__commits__commitId__statuses_json](./_data/commits/POST__git_repositories__repositoryId__commits__commitId__statuses.json)]

### Get statuses

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits/{commit}/statuses?api-version={version}
```

| Parameter     | Type                                   | Notes
|:--------------|:---------------------------------------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string                                 | TFS server name ({server:port}).
| project       | string                                 | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*| repository    | string                                 | ID of the [repository](./repositories.md).
| Query
| api-version   | string                                 | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__git_repositories__repositoryId__commits__commitId__statuses_json](./_data/commits/GET__git_repositories__repositoryId__commits__commitId__statuses.json)]

