---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Work item tracking artifact uri query | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: douge
ms.author: elbatk
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
| <code>instance</code> | URL | string | Required. [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| <code>api-version</code> | Query | string | Required. [Version](../../get-started/rest/basics.md#versions) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| | Body | [ArtifactUriQuery](../../extensions/reference/client/api/TFS/WorkItemTracking/Contracts/ArtifactUriQuery.md) | Required.  List of artifact uris.

#### Response

| Type       | Notes
|:-----------|:---------
| [ArtifactUriQueryResult](../../extensions/reference/client/api/TFS/WorkItemTracking/Contracts/ArtifactUriQueryResult.md) | work item reference linked to the artifact uri.

[!code-REST [POST__wit_queryartifacturis_json](./_data/artifacturiquery/POST__wit_artifacturiquery.json)]