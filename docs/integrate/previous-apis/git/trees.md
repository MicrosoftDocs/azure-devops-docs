---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Trees | REST API Reference for Team Foundation Server
description: Work with Git trees programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 5F749008-5513-444E-8E46-AF575132796E
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git trees
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

[!code-REST [GET__git_repositories__repositoryId__trees__objectId__json](./_data/trees/GET__git_repositories__repositoryId__trees__objectId_.json)]


