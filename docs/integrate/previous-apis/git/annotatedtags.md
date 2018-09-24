---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
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

[!code-REST [GET__git_repositories_annotated_tags_json](./_data/annotatedTags/GET__git_repositories__annotated__tags.json)]

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

[!code-REST [POST__git_repositories_annotated_tags_json](./_data/annotatedTags/POST__git_repositories__annotated__tags.json)]

