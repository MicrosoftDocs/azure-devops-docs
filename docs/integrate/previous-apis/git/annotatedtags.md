---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Tags - Annotated | REST API Reference for VAzure DevOps Services and Team Foundation Server
description: Work with annotated tags in Git using the REST APIs for Team Foundation Server.
ms.assetid: 5F749008-5513-444E-8E46-AF575132796E
ms.manager: jprakash
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 09/05/2017
---

# Git Annotated Tags

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version4-0-preview2.md)]

Git annotated tags are tags with additional metadata including the person who created the tag and a comment.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get annotated tag

```httprequest
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/annotatedTags/{objectId}?api-version={version}
```

| Parameter  | Type   | Notes
|:-----------|:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string | TFS server name ({server:port}).
| project    | string | [Project](../tfs/projects.md) ID or name.
| repository | string | ID or name of the [repository](./repositories.md).
| objectId   | string | objectId of Tag to be fetched, returned only if it is annotated tag
| Query
| api-version| string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/c34d5807-1734-4541-ad1c-d16e9ac1faca/_apis/git/repositories/ca93c3a5-87bb-4b5b-a62f-1f971d677c79/annotatedTags/69080710948ac8ba63e44eca2daf0b30f38c428d
```

#### Sample response

```json
{
  "name": "refs/tags/v0.1-beta2",
  "objectId": "69080710948ac8ba63e44eca2daf0b30f38c428d",
  "taggedObject": {
    "objectId": "c60be62ebf0e86b5aa01dbb98657b4b7e5905234",
    "objectType": "commit"
  },
  "taggedBy": {
    "name": "Norman Paulk",
    "email": "Fabrikamfiber16@hotmail.com",
    "date": "2017-06-22T04:28:23"
  },
  "message": "First beta release",
  "url": "https://mytfsserver/DefaultCollection/c34d5807-1734-4541-ad1c-d16e9ac1faca/_apis/git/repositories/ca93c3a5-87bb-4b5b-a62f-1f971d677c79/annotatedTags/69080710948ac8ba63e44eca2daf0b30f38c428d"
}
```


## Create annotated tag

```httprequest
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/annotatedTags?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
    "name": {string},
    "taggedObject": {
        objectId: {string}
    },
    "message": {string}
}
```

| Parameter  | Type   | Notes
|:-----------|:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance              | string | TFS server name ({server:port}).
| project               | string | [Project](../tfs/projects.md) ID or name.
| repository            | string | ID or name of the [repository](./repositories.md).
| Query                 |
| name                  | string | name of the tag to be created
| taggedObject.objectId | string | ID of the object the tag is pointing to
| message               | string | tag description field 
| api-version           | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/c34d5807-1734-4541-ad1c-d16e9ac1faca/_apis/git/repositories/ca93c3a5-87bb-4b5b-a62f-1f971d677c79/annotatedTags
```
```json
{
  "name": "v0.1-beta",
  "taggedObject": {
    "objectId": "c60be62ebf0e86b5aa01dbb98657b4b7e5905234"
  },
  "message": "First beta release"
}
```

#### Sample response

```json
{
  "name": "refs/tags/v0.1-beta",
  "objectId": "bc57849b33949a15fa3cb889bb82d9ce21d5b6ee",
  "taggedObject": {
    "objectId": "c60be62ebf0e86b5aa01dbb98657b4b7e5905234",
    "objectType": "commit"
  },
  "taggedBy": {
    "name": "Norman Paulk",
    "email": "Fabrikamfiber16@hotmail.com",
    "date": "2017-06-22T05:09:23"
  },
  "message": "First beta release",
  "url": "https://mytfsserver/DefaultCollection/c34d5807-1734-4541-ad1c-d16e9ac1faca/_apis/git/repositories/ca93c3a5-87bb-4b5b-a62f-1f971d677c79/annotatedTags/bc57849b33949a15fa3cb889bb82d9ce21d5b6ee"
}
```


