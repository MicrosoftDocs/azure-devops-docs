---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Agent Queues | REST API Reference for Team Foundation Server
description: Get Agent queues using the REST APIs for Team Foundation Server.
ms.assetid: 61C7F854-3CF5-405E-A74C-1DF9101E38E9
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---
# Agent queues
[!INCLUDE [API_version](../_data/version3-preview1.md)]
An Agent queue provides visibility to an agent pool from within a project.
[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of queues
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/distributedtask/queues?api-version={version}[&queueName={string}][&actionFilter={string}]
```
| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| queueName   | string | Filters queues whose names start with this prefix.
| actionFilter | enum { None, Manage, Use } | Filter Queues based on the permission mentioned.
[!code-REST [GET__distributedtask_queues_json](./_data/GET__distributedtask_queues.json)]

## Get a queue
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/distributedtask/queues/{queueId}?api-version={version}
```
| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| queueId   | int    | The queue id.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| actionFilter | enum { None, Manage, Use } | Filter Queues based on the permission mentioned.
[!code-REST [GET__distributedtask_queues__queueId__json](./_data/GET__distributedtask_queues__queueId_.json)]

## Create a queue
```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/distributedTask/queues?api-version={version}
```
| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
[!code-REST [POST__distributedtask_queues_json](./_data/POST__distributedtask_queues.json)]

## Delete a queue
```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/distributedtask/queues/{queueId}?api-version={version}
```
| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| queueId   | int    | The queue id.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
[!code-REST [DELETE__distributedtask_queues__queueId__json](./_data/DELETE__distributedtask_queues__queueId_.json)]