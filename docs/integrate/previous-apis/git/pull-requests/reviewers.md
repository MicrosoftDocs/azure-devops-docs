---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Pull Request Reviewers | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 65A2ED69-31E1-47D8-BEF9-7BE5CC2AACFB
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull request reviewers

[!INCLUDE [azure-devops](../../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

The primary action for reviewers is to vote to approve or reject the pull request.  Some reviewers are
automatically added based on the policies set on the target branch of the pull request.

<a name="get_list" />
## Get a list of reviewers

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/reviewers?api-version={version}
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
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers?api-version=3.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 0,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ]
}
```


## Get a reviewer

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/reviewers/{reviewer}?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| reviewer    | Guid    | ID of the reviewer. This can be retrieved from the [Teams API](../../tfs/teams.md) or by [getting a list of reviewers](#get_list). 
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/19d9411e-9a34-45bb-b985-d24d9d87c0c9?api-version=3.0
```

#### Sample response

```json
{
  "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/19d9411e-9a34-45bb-b985-d24d9d87c0c9",
  "vote": 0,
  "id": "19d9411e-9a34-45bb-b985-d24d9d87c0c9",
  "displayName": "Johnnie McLeod",
  "uniqueName": "fabrikamfiber2@hotmail.com",
  "url": "https://mytfsserver/DefaultCollection/_apis/Identities/19d9411e-9a34-45bb-b985-d24d9d87c0c9",
  "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=19d9411e-9a34-45bb-b985-d24d9d87c0c9"
}
```


## Add a reviewer

Adds a reviewer and optionally sets their vote.

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/reviewers/{reviewer}?api-version={version}
```
```json
{
    "vote": {integer}
}
```

| Parameter   | Type                | Default | Notes
|:------------|:--------------------|:--------|---------------------
| URL
| instance    | string              |         | TFS server name ({server:port}).
| project     | string              |         | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string              |         | ID of the [repository](../repositories.md).
| pullRequest | integer             |         | ID of the pull request.
| reviewer    | Guid                |         | ID of the reviewer.
| Query
| api-version | string              |         | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| Body
| vote        | enum {-10, -5, 0, 5, 10} | -10 means "Rejected", -5 means "Waiting for author", 0 means "No response", 5 means "Approved with suggestions", and 10 means "Approved".

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/19d9411e-9a34-45bb-b985-d24d9d87c0c9?api-version=3.0
```
```json
{
  "vote": 0
}
```

#### Sample response

```json
{
  "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/19d9411e-9a34-45bb-b985-d24d9d87c0c9",
  "vote": 0,
  "id": "19d9411e-9a34-45bb-b985-d24d9d87c0c9",
  "displayName": "Johnnie McLeod",
  "uniqueName": "fabrikamfiber2@hotmail.com",
  "url": "https://mytfsserver/DefaultCollection/_apis/Identities/19d9411e-9a34-45bb-b985-d24d9d87c0c9",
  "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=19d9411e-9a34-45bb-b985-d24d9d87c0c9"
}
```


## Remove a reviewer

Removes a reviewer and their vote from a pull request.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/reviewers/{reviewer}?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| reviewer    | Guid    | ID of the reviewer.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/19d9411e-9a34-45bb-b985-d24d9d87c0c9?api-version=3.0
```


## Update a reviewer's vote

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/reviewers/{reviewer}?api-version={version}
```
```json
{
  "vote": {integer}
}
```

| Parameter   | Type              | Notes |
|:------------|:------------------|:------------|
| URL
| instance    | string            | TFS server name ({server:port}).
| project     | string            | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string            | ID of the [repository](../repositories.md).
| pullRequest | integer           | ID of the pull request. |
| reviewer    | Guid              | ID of the reviewer. Must be an actual user (not a team or group).
| Query
| api-version | string            | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| Body
| vote        | enum {-10, -5, 0, 5, 10} | -10 means "Rejected", -5 means "Waiting for author", 0 means "No response", 5 means "Approved with suggestions", and 10 means "Approved".

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db?api-version=3.0
```
```json
{
  "vote": 10
}
```

#### Sample response

```json
{
  "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
  "vote": 10,
  "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
  "displayName": "Normal Paulk",
  "uniqueName": "fabrikamfiber16@hotmail.com",
  "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
  "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
}
```


