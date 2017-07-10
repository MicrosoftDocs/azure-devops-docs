---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Build Queues (XAML Build) | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Get build queues using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 3F7AB00B-8BC2-437B-8088-ED9F66180941
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

[!INCLUDE [latest](./_data/see-latest.md)]

# Build queues
[!INCLUDE [API_version](../_data/version.md)]

A build queue performs lightweight tasks and distributes the processor-intensive work of your build process to its pool of build agents.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of queues

```no-highlight
GET https://{instance}/DefaultCollection/_apis/build/queues?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| Query
| api-version | string | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__build_queues_json](./_data/queues/GET__build_queues.json)]

## Get a queue

```no-highlight
GET https://{instance}/DefaultCollection/_apis/build/queues/{queueId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| queueId   | int    | ID of the queue
| Query
| api-version | string | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__build_queues__queueId__json](./_data/queues/GET__build_queues__queueId_.json)]
