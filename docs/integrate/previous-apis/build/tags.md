---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Tags | REST API Reference for  Azure DevOps Services and Team Foundation Server
description: Get build tags using the REST APIs for VSTS.
ms.assetid: f5a3bb49-f843-4f51-a29a-6ca1c226fbe2
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Tags

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2.md)]

Builds can be [tagged](./builds.md#addatagtoabuild) for easy searching.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of all tags across all builds

```no-highlight
GET https://{instance}/DefaultCollection/_apis/build/queues?api-version={version}[&name={string}][&type={string}]
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/tags?api-version=2.0
```

#### Sample response

```json
{
  "count": 6,
  "value": [
    "myTag",
    "existing tag",
    "important",
    "tag1",
    "tag2",
    "tag3"
  ]
}
```

