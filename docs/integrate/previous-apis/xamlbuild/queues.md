---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Build Queues (XAML Build) | REST API Reference for Team Foundation Server
description: Get build queues using the REST APIs for Team Foundation Server.
ms.assetid: 3F7AB00B-8BC2-437B-8088-ED9F66180941
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

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
| instance  | string | TFS server name ({server:port}).
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_queues_json](./_data/queues/GET__build_queues.json)]

## Get a queue

```no-highlight
GET https://{instance}/DefaultCollection/_apis/build/queues/{queueId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| queueId   | int    | ID of the queue
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_queues__queueId__json](./_data/queues/GET__build_queues__queueId_.json)]
