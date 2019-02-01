---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Pull Request Iterations | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: EF349F15-C2BD-4338-9DB8-3FF7DECC5801
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull request iterations

[!INCLUDE [azure-devops](../../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

Iterations contain the history of the pull request.  Every time commits are pushed to the source branch and when the pull
request is created, an iteration is created.  Each iteration can contain more than one commit.

## Get a list of iterations

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!INCLUDE [ID_vs_Name](../_data/id_or_name.md)]

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations?api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "description": "Added new_feature.cpp",
      "author": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2016-11-01T16:30:32.1228821Z",
      "updatedDate": "2016-11-01T16:30:32.124882Z",
      "sourceRefCommit": {
        "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3"
      },
      "targetRefCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "commonRefCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "hasMoreCommits": false
    },
    {
      "id": 2,
      "description": "Updated new_feature.cpp",
      "author": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2016-11-01T16:30:40.7955627Z",
      "updatedDate": "2016-11-01T16:30:40.7965635Z",
      "sourceRefCommit": {
        "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357"
      },
      "targetRefCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "commonRefCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "hasMoreCommits": false,
      "push": {
        "pushId": 188
      }
    }
  ],
  "count": 2
}
```


## Get a specific iteration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations/{iterationId}?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| iterationId | integer | ID of the iteration.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations/2?api-version=3.0
```

#### Sample response

```json
{
  "id": 2,
  "description": "Updated new_feature.cpp",
  "author": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2016-11-01T16:30:40.7955627Z",
  "updatedDate": "2016-11-01T16:30:40.7965635Z",
  "sourceRefCommit": {
    "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357"
  },
  "targetRefCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "commonRefCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "hasMoreCommits": false,
  "push": {
    "pushId": 188
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations/2"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    }
  }
}
```


## Get the commits for an iteration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations/{iterationId}/commits?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| iterationId | integer | ID of the iteration.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations/2/commits?api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:37Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:37Z"
      },
      "comment": "Updated new_feature.cpp",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
    },
    {
      "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:28Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:28Z"
      },
      "comment": "Added new_feature.cpp",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
    },
    {
      "commitId": "050acf036bcef766bcbe61abeb0aa67a56ca8586",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:25Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:25Z"
      },
      "comment": "Added new_feature.h",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/050acf036bcef766bcbe61abeb0aa67a56ca8586"
    }
  ],
  "count": 3
}
```


## Get the changes in the pull request at an iteration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations/{iterationId}/changes?$top={top};$skip={skip};$compareTo={compareTo};api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| iterationId | integer | ID of the iteration.
| Query
| top         | integer | the number of changes to retrieve
| skip        | integer | the number of changes to ignore
| compareTo   | integer | ID of an iteration to compare against.  If not specified, the iteration is compared against the common commit with the target branch of the pull request.
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations/2/changes?api-version=3.0
```

#### Sample response

```json
{
  "changeEntries": [
    {
      "changeTrackingId": 1,
      "changeId": 1,
      "item": {
        "objectId": "e21e56d119ae81fb4ffebc4fefc6351f5b5ef888",
        "path": "/new_feature.cpp"
      },
      "changeType": "add"
    },
    {
      "changeTrackingId": 2,
      "changeId": 2,
      "item": {
        "objectId": "5ec0f71ffb8b47bd4c0117f624647963e021f3d2",
        "path": "/new_feature.h"
      },
      "changeType": "add"
    }
  ]
}
```


### Get the changes in an iteration compared to another iteration

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations/2/changes?$compareTo=1&api-version=3.0
```

#### Sample response

```json
{
  "changeEntries": [
    {
      "changeTrackingId": 1,
      "changeId": 1,
      "item": {
        "objectId": "e21e56d119ae81fb4ffebc4fefc6351f5b5ef888",
        "originalObjectId": "ff93e64a68f5538ad87cd06dcd50ebd107967933",
        "path": "/new_feature.cpp"
      },
      "changeType": "edit"
    }
  ]
}
```

