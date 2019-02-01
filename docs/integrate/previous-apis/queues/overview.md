---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Agent Queues | REST API Reference for Team Foundation Server
description: Get Agent queues using the REST APIs for Team Foundation Server.
ms.assetid: 61C7F854-3CF5-405E-A74C-1DF9101E38E9
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---
# Agent queues

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/distributedtask/queues?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 1,
      "projectId": "7b626022-ff88-4bba-9e1c-b444a5305d23",
      "name": "Default",
      "groupScopeId": "12692c9b-aa22-45df-8622-21d6c7126de4",
      "pool": {
        "id": 1,
        "scope": "175d1091-ab63-44a7-a6b5-122709ade15d",
        "name": "Default"
      }
    },
    {
      "id": 4,
      "projectId": "7b626022-ff88-4bba-9e1c-b444a5305d23",
      "name": "myNewQueue",
      "groupScopeId": "07079879-f7ee-49d5-8c03-17a75c2ea000",
      "pool": {
        "id": 1,
        "scope": "175d1091-ab63-44a7-a6b5-122709ade15d",
        "name": "Default"
      }
    }
  ]
}
```


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
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/distributedtask/queues/4?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "id": 4,
  "projectId": "7b626022-ff88-4bba-9e1c-b444a5305d23",
  "name": "myNewQueue",
  "groupScopeId": "07079879-f7ee-49d5-8c03-17a75c2ea000",
  "pool": {
    "id": 1,
    "scope": "175d1091-ab63-44a7-a6b5-122709ade15d",
    "name": "Default"
  }
}
```


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
#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/distributedtask/queues?api-version=3.0-preview.1
```
```json
{
  "name": "myNewQueue",
  "pool": {
    "id": 1
  }
}
```

#### Sample response

```json
{
  "id": 4,
  "projectId": "7b626022-ff88-4bba-9e1c-b444a5305d23",
  "name": "myNewQueue",
  "groupScopeId": "07079879-f7ee-49d5-8c03-17a75c2ea000",
  "pool": {
    "id": 1
  }
}
```


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
#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/distributedtask/queues/4?api-version=3.0-preview.1
```
```json
4
```
