---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Queues (XAML Build) | REST API Reference for Team Foundation Server
description: Get build queues using the REST APIs for Team Foundation Server.
ms.assetid: 3F7AB00B-8BC2-437B-8088-ED9F66180941
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build queues

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/build/queues?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Controller/274",
      "status": "offline",
      "enabled": true,
      "createdDate": "2014-01-24T06:21:00.71Z",
      "updatedDate": "2014-10-07T22:24:53.477Z",
      "queueType": "buildController",
      "id": 274,
      "name": "Hosted Build Controller",
      "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
    }
  ],
  "count": 1
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/build/queues/274?api-version=1.0
```

#### Sample response

```json
{
  "uri": "vstfs:///Build/Controller/274",
  "status": "offline",
  "enabled": true,
  "createdDate": "2014-01-24T06:21:00.71Z",
  "updatedDate": "2014-10-07T22:24:53.477Z",
  "queueType": "buildController",
  "id": 274,
  "name": "Hosted Build Controller",
  "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
}
```

