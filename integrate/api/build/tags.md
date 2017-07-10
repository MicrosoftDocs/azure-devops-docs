---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Build Tags | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Get build tags using the REST APIs for Visual Studio Team Services.
ms.assetid: f5a3bb49-f843-4f51-a29a-6ca1c226fbe2
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Tags
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
| instance  | string | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| Query
| api-version | string | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__build_tags_json](./_data/builds/GET__build_tags.json)]
