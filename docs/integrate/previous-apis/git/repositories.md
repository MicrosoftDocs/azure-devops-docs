---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Repositories | REST API Reference for Team Foundation Server
description: Work with Git repositories programmatically using the REST APIs for Team Foundation Server.
ms.assetid: BCB55CB9-4E2B-4D8B-ABC8-A503254F2FE9
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git repositories

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/Git/RepositoriesSample.cs) available for this endpoint.


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories?api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "5febef5a-833d-4e14-b9c0-14cb638f91e6",
      "name": "AnotherRepository",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "remoteUrl": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_git/AnotherRepository"
    },
    {
      "id": "278d5cd2-584d-4b63-824a-2ba458937249",
      "name": "Fabrikam-Fiber-Git",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/master",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
    },
    {
      "id": "66efb083-777a-4cac-a350-a24b046be6be",
      "name": "TestGit",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/66efb083-777a-4cac-a350-a24b046be6be",
      "project": {
        "id": "281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
        "name": "TestGit",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/master",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/TestGit"
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6?api-version=1.0
```

#### Sample response

```json
{
  "id": "5febef5a-833d-4e14-b9c0-14cb638f91e6",
  "name": "AnotherRepository",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 293012730
  },
  "defaultBranch": "refs/heads/master",
  "remoteUrl": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_git/AnotherRepository",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6"
    },
    "project": {
      "href": "vstfs:///Classification/TeamProject/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_git/AnotherRepository"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6/commits"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6/refs"
    },
    "pullRequests": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6/pullRequests"
    },
    "items": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6/items"
    },
    "pushes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6/pushes"
    }
  }
}
```


### By remote URL
<a name="byremoteurl" />
You can also get a repository with only the clone URL of the repo:

```no-highlight
GET {gitCloneUrl}/vsts/info
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_git/FabrikamCloud/vsts/info
```

#### Sample response

```json
{
  "serverUrl": "https://mytfsserver/DefaultCollection",
  "collection": {
    "id": "e22ddea7-989e-455d-b46a-67e991b04714",
    "name": "fabrikam-fiber-inc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projectCollections/e22ddea7-989e-455d-b46a-67e991b04714"
  },
  "repository": {
    "id": "2f3d611a-f012-4b39-b157-8db63f380226",
    "name": "FabrikamCloud",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/2f3d611a-f012-4b39-b157-8db63f380226",
    "project": {
      "id": "3b3ae425-0079-421f-9101-bcf15d6df041",
      "name": "FabrikamCloud",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/3b3ae425-0079-421f-9101-bcf15d6df041",
      "state": 1,
      "revision": 411518573
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/FabrikamCloud/_git/FabrikamCloud"
  }
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories?api-version=1.0
```
```json
{
  "name": "AnotherRepository",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c"
  }
}
```

#### Sample response

```json
{
  "id": "5febef5a-833d-4e14-b9c0-14cb638f91e6",
  "name": "AnotherRepository",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed"
  },
  "remoteUrl": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_git/AnotherRepository"
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6?api-version=1.0
```
```json
{
  "name": "RenamedRepository",
  "defaultBranch": "refs/heads/live"
}
```

#### Sample response

```json
{
  "id": "5febef5a-833d-4e14-b9c0-14cb638f91e6",
  "name": "RenamedRepository",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed"
  },
  "defaultBranch": "refs/heads/live",
  "remoteUrl": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_git/RenamedRepository",
  "type": "normal"
}
```


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


