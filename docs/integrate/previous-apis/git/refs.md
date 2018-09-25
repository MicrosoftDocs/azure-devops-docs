---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Refs | REST API Reference for Team Foundation Server
description: Work with Git references programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 7E4F1631-12C0-4B17-A460-6A6BE002C838
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git refs
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

Refs are named references to Git objects.
The most common type of ref is a branch.
A branch is a ref that points to a commit.

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/repos/git/RefsSample.cs) available for this endpoint.

## Get a list of references

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/refs[/{filter}]?api-version={version}[&includeStatuses={bool}]
```

| Parameter      | Type   | Notes
|:-----------    |:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance       | string | TFS server name ({server:port}).
| project        | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository     | string | ID or name of the [repository](./repositories.md).
| filter         | string | Git ref name filter. If you specify this parameter, only refs that start with that string are returned.
| Query
| api-version    | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
|includeStatuses | bool   | If `true`, gets the status of each ref. If `false`, doesn't get the status of any ref.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

[!code-REST [GET__git_repositories__repositoryId__refs_json](./_data/refs/GET__git_repositories__repositoryId__refs.json)]

### Just branches

[!code-REST [GET__git_repositories__repositoryId__refs_heads_json](./_data/refs/GET__git_repositories__repositoryId__refs_heads.json)]

### Just tags

[!code-REST [GET__git_repositories__repositoryId__refs_tags_json](./_data/refs/GET__git_repositories__repositoryId__refs_tags.json)]

### Include commit status

See also: [commit status](./commits.md#commit_status)

[!code-REST [GET__git_repositories__repositoryId__refs_heads_statuses_json](./_data/refs/GET__git_repositories__repositoryId__refs_heads_statuses.json)]

## Modify one or more refs

Creating, updating, and deleting refs (branches) are all done by the same endpoint.

* Updating a ref means making it point at a different commit than it used to.
You must specify both the old and new commit to avoid race conditions.
* Creating a ref is the represented by updating the ref from the nil commit (represented by 40 `0`s) to a different commit.
* Deleting a ref is represented by updating the ref from its current commit to the nil commit.

```
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/refs?api-version={version}
```
```http
Content-Type: application/json
```
```json
[
  {
    "name": {string},
    "oldObjectId": {string},
    "newObjectId": {string}
  }
]
```

| Parameter      | Type   | Notes
|:-----------    |:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance       | string | TFS server name ({server:port}).
| project        | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository     | string | ID or name of the [repository](./repositories.md).
| Query
| api-version    | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name           | string | Name of the new ref or the ref to update.
| oldObjectId    | string | The current commit id the ref is at. `0000000000000000000000000000000000000000` when creating a new ref.
| newObjectId    | string | The new commit id for the ref. `0000000000000000000000000000000000000000` when deleting a ref.

[!code-REST [POST__git_repositories__repositoryId__refs_json](./_data/refs/POST__git_repositories__repositoryId__refs.json)]

## Lock a branch

```
PATCH https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/{ref}?api-version={version}
```

| Parameter      | Type   | Notes
|:-----------    |:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance       | string | TFS server name ({server:port}).
| project        | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository     | string | ID or name of the [repository](./repositories.md).
| ref            | string | Git ref name.
| Query
| api-version    | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [PATCH__git_repositories__repositoryId__refs_json](./_data/refs/PATCH__git_repositories__repositoryId__refs.json)]
