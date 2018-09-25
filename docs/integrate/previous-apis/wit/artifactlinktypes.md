---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work item tracking artifact link types | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/20/2017
---

# Work item tracking artifact link types
[!INCLUDE [API_version](../_data/version3-2-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

<a name="ArtifactLinkTypes"></a>

## Get work item tracking artifact links
Get the list of work item tracking outbound artifact link types. ArtifactUris are either hyperlinks or in the format vstfs:///{toolType}/{artifactType}/{artifactId} 

```no-highlight
GET https://{instance}/_apis/wit/artifactlinktypes?api-version={version}
```

#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.

[!code-REST [GET_wit_artifactlinktypes_json](./_data/artifactlinktypes/GET_wit_artifactlinktypes.json)]