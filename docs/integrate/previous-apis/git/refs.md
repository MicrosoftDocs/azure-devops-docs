---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Refs | REST API Reference for Team Foundation Server
description: Work with Git references programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 7E4F1631-12C0-4B17-A460-6A6BE002C838
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git refs

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs?api-version=1.0
```

#### Sample response

```json
{
  "count": 6,
  "value": [
    {
      "name": "refs/heads/develop",
      "objectId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads/develop"
    },
    {
      "name": "refs/heads/master",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads/master"
    },
    {
      "name": "refs/heads/npaulk/feature",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads/npaulk/feature"
    },
    {
      "name": "refs/tags/v1.0",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/tags/v1.0"
    },
    {
      "name": "refs/tags/v1.1",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/tags/v1.1"
    },
    {
      "name": "refs/tags/v2.0",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/tags/v2.0"
    }
  ]
}
```


### Just branches

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads?api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "name": "refs/heads/develop",
      "objectId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads/develop"
    },
    {
      "name": "refs/heads/master",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads/master"
    },
    {
      "name": "refs/heads/npaulk/feature",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads/npaulk/feature"
    }
  ]
}
```


### Just tags

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/tags?api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "name": "refs/tags/v1.0",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/tags/v1.0"
    },
    {
      "name": "refs/tags/v1.1",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/tags/v1.1"
    },
    {
      "name": "refs/tags/v2.0",
      "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/tags/v2.0"
    }
  ]
}
```


### Include commit status

See also: [commit status](./commits.md#commit_status)

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/heads/master?includeStatuses=true&api-version=2.1
```

#### Sample response

```json
{
  "name": "refs/tags/v1.0",
  "objectId": "278d5cd2-584d-4b63-824a-2ba458937249",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs?filter=heads%2Fmaster",
  "statuses": {
    "state": "succeeded",
    "description": "The build is successful",
    "context": {
      "name": "Build123",
      "genre": "continuous-integration"
    },
    "creationDate": "2016-01-27T09:33:07Z",
    "createdBy": {
      "id": "278d5cd2-584d-4b63-824a-2ba458937249",
      "displayName": "Norman Paulk",
      "uniqueName": "Fabrikamfiber16",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/278d5cd2-584d-4b63-824a-2ba458937249",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=278d5cd2-584d-4b63-824a-2ba458937249"
    },
    "targetUrl": "https://ci.fabrikam.com/my-project/build/123 "
  }
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs?api-version=1.0
```
```json
[
  {
    "name": "refs/heads/live",
    "oldObjectId": "0000000000000000000000000000000000000000",
    "newObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106"
  },
  {
    "name": "refs/heads/master",
    "oldObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106",
    "newObjectId": "7b019e53c7980d7fafcbd84aa71946793d10a881"
  },
  {
    "name": "refs/heads/fabrikamfiber16",
    "oldObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106",
    "newObjectId": "0000000000000000000000000000000000000000"
  }
]
```

#### Sample response

```json
{
  "value": [
    {
      "repositoryId": "278d5cd2-584d-4b63-824a-2ba458937249",
      "name": "refs/heads/live",
      "oldObjectId": "0000000000000000000000000000000000000000",
      "newObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106",
      "isLocked": "false",
      "updateStatus": "succeeded",
      "success": true
    },
    {
      "repositoryId": "278d5cd2-584d-4b63-824a-2ba458937249",
      "name": "refs/heads/master",
      "oldObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106",
      "newObjectId": "7b019e53c7980d7fafcbd84aa71946793d10a881",
      "isLocked": "false",
      "updateStatus": "succeeded",
      "success": true
    },
    {
      "repositoryId": "7ba192ab-3f08-4fae-a233-ca1fb08c59bf",
      "name": "refs/heads/fabrikamfiber16",
      "oldObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106",
      "newObjectId": "0000000000000000000000000000000000000000",
      "isLocked": "false",
      "updateStatus": "succeeded",
      "success": true
    }
  ],
  "count": 3
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6/refs/heads/master?api-version=1.0
```
```json
{
  "isLocked": true
}
```

#### Sample response

```json
{
  "name": "refs/heads/master",
  "objectId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
  "isLockedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "isLocked": true,
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/5febef5a-833d-4e14-b9c0-14cb638f91e6/refs?filter=heads%2Fmaster"
}
```

