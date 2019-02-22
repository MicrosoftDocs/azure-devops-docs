---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Trees | REST API Reference for Team Foundation Server
description: Work with Git trees programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 5F749008-5513-444E-8E46-AF575132796E
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git trees

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Trees are folders in a Git repository.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Download a tree

Use the request header `Accept: application/zip` to download a folder and its contents in the zip format.

```http
Accept: application/zip
```
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/trees/{objectId}?api-version={version}&fileName={fileName}
```

| Parameter  | Type   | Default   | Notes
|:-----------|:-------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string |           | TFS server name ({server:port}).
| project    | string |           | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string |           | ID of the [repository](./repositories.md).
| objectId   | string |           | SHA1 hash of the folder. You can get the objectId of a folder by [getting its metadata](./items.md#afolder).
| Query
| api-version| string |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $format    | enum   |           | Use ```zip```. If not set, defaults to the MIME type set in the Accept header.
| fileName   | string | object ID | Provide a name to use if a .zip file is returned. If omitted, the zip file is named after the object ID.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

## Get tree metadata

Get the metadata for a tree and its contents.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/git[/{projectId}/repositories/{repository}/trees/{objectId}?api-version={version}&$format=json[&recursive={bool}]
```

| Parameter  | Type   | Default   | Notes
|:-----------|:-------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string |           | TFS server name ({server:port}).
| project    | string |           | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string |           | ID of the [repository](./repositories.md).
| objectId   | string |           | SHA1 hash of the folder. You can get the objectId of a folder by [getting its metadata](./items.md#afolder).
| Query
| api-version| string |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $format    | enum   |           | Use ```json```. If not set, defaults to the MIME type set in the Accept header.
| recursive  | bool   | false     | Recursively fetch items from each child tree.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/d1d5c2d49045d52bba6419652d6ecb2cd560dc29?api-version=1.0
```

#### Sample response

```json
{
  "objectId": "d1d5c2d49045d52bba6419652d6ecb2cd560dc29",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/d1d5c2d49045d52bba6419652d6ecb2cd560dc29",
  "treeEntries": [
    {
      "objectId": "ea6765e1976b9e8a6d4981fd8febebd574a91571",
      "relativePath": "Home",
      "mode": "40000",
      "gitObjectType": "tree",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/ea6765e1976b9e8a6d4981fd8febebd574a91571",
      "size": 259
    },
    {
      "objectId": "d1c521e3b401b314d4f9ff17f6cad4652c6a4d14",
      "relativePath": "Shared",
      "mode": "40000",
      "gitObjectType": "tree",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/d1c521e3b401b314d4f9ff17f6cad4652c6a4d14",
      "size": 82
    },
    {
      "objectId": "f5dd7df5872eae8c39c9491f67d856dafd609683",
      "relativePath": "Web.config",
      "mode": "100644",
      "gitObjectType": "blob",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/f5dd7df5872eae8c39c9491f67d856dafd609683",
      "size": 1670
    },
    {
      "objectId": "2de62418c07c3ffa833543f484445dbfd0fe68d8",
      "relativePath": "_ViewStart.cshtml",
      "mode": "100644",
      "gitObjectType": "blob",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/2de62418c07c3ffa833543f484445dbfd0fe68d8",
      "size": 54
    }
  ],
  "size": 147,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/d1d5c2d49045d52bba6419652d6ecb2cd560dc29"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249"
    },
    "treeEntries": [
      {
        "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/ea6765e1976b9e8a6d4981fd8febebd574a91571"
      },
      {
        "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/d1c521e3b401b314d4f9ff17f6cad4652c6a4d14"
      },
      {
        "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/f5dd7df5872eae8c39c9491f67d856dafd609683"
      },
      {
        "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/blobs/2de62418c07c3ffa833543f484445dbfd0fe68d8"
      }
    ]
  }
}
```



