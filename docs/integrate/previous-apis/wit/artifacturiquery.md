---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work item tracking artifact uri query | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/27/2017
---

# Work item tracking artifact uri query

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-2-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

<a name="ArtifactUriQuery"></a>

## Get work items referenced by artifactUri
Gets the work items linked to the artifact uri. For available artifacts, see the section [Artifact link types](artifactlinktypes.md)


```no-highlight
POST https://{instance}/_apis/wit/artifacturiquery?api-version={version}
```


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| | Body | ArtifactUriQuery | Required.  List of artifact uris.

#### Response

| Type       | Notes
|:-----------|:---------
| ArtifactUriQueryResult | work item reference linked to the artifact uri.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/artifacturiquery?api-version=3.2-preview
```
```json
{
  "artifactUris": [
    "vstfs:///Git/Commit/3065bb47-8344-4370-982a-5183abf197fa%2F649107bd-ab35-4192-8584-601f64172f80%2F4800cfa0be564b1e606d6811e99e0380f765a9c4"
  ]
}
```

#### Sample response

```json
{
  "artifactUrisQueryResult": {
    "vstfs:///Git/Commit/3065bb47-8344-4370-982a-5183abf197fa%2F649107bd-ab35-4192-8584-601f64172f80%2F4800cfa0be564b1e606d6811e99e0380f765a9c4": [
      {
        "id": 1,
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1"
      },
      {
        "id": 2,
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/2"
      }
    ]
  }
}
```
