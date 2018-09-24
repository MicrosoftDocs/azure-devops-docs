---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Repositories | REST API Reference for Team Foundation Server
description: Work with Git repositories programmatically using the REST APIs for Team Foundation Server.
ms.assetid: BCB55CB9-4E2B-4D8B-ABC8-A503254F2FE9
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git repositories
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/repos/git/RepositoriesSample.cs) available for this endpoint.


## Get a list of repositories

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories?api-version={version}
```

| Parameter         | Type   | Notes
|:------------------|:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string | TFS server name ({server:port}).
| project           | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| Query
| api-version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### In your account

Get all the repositories in your VSTS organization, rather than a specific project.

[!code-REST [GET__git_repositories_json](./_data/repositories/GET__git_repositories.json)]

## Get a repository
<a name="inateamproject" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}?api-version={version}
```

| Parameter  | Type   | Notes
|:-----------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance   | string | TFS server name ({server:port}).
| project    | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string | ID or name of the repository.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### By ID
When you get a repository by it's ID, you don't need to specify the project.

[!code-REST [GET__git_repositories__repositoryId__json](./_data/repositories/GET__git_repositories__repositoryId_.json)]

### By remote URL
<a name="byremoteurl" />
You can also get a repository with only the clone URL of the repo:

```no-highlight
GET {gitCloneUrl}/vsts/info
```

[!code-REST [GET__git_repositories__remoteurl__json](./_data/repositories/GET__git_repositories__remoteurl.json)]

## Create a repository
<a name="createarepository" />

Create a Git repository in a project.

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "project": {
    "id": {guid}
  }
}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance     | string | TFS server name ({server:port}).
| project        | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID in the body.*
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name         | string | Name of the repository.
| project      | string | Name or ID project. *Do not include if project specified in the URL.*

[!code-REST [POST__git_repositories_json](./_data/repositories/POST__git_repositories.json)]

## Modify a repository

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "defaultBranch", {string}
}
```

| Parameter      | Type   | Notes
|:---------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance       | string | TFS server name ({server:port}).
| project        | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository     | string | ID of the repository.
| Query
| api-version    | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name           | string | New name of the repository.
| defaultBranch  | string | New default branch of the repository.

[!code-REST [PATCH__git_repositories__repositoryId__json](./_data/repositories/PATCH__git_repositories__repositoryId_.json)]

## Delete a repository
<a name="deletearepository" />

Permanently delete a repository. 

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}?api-version={version}
```

| Parameter  | Type   | Notes
|:-----------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| instance   | string | TFS server name ({server:port}).
| project    | string | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string | ID of the repository.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.


