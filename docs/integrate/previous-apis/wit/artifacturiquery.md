---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work item tracking artifact uri query | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/27/2017
---

# Work item tracking artifact uri query
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

[!code-REST [POST__wit_queryartifacturis_json](./_data/artifacturiquery/POST__wit_artifacturiquery.json)]