---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Definitions (XAML Build) | REST API Reference for Team Foundation Server
description: Get build definitions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: d0424288-2fbd-4a65-8a60-0d272a42eca7
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build definitions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build definitions

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions?api-version={version}[&projectName={string}]
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| instance      | string | TFS server name ({server:port}).
| project       | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| projectName   | string | Name of the project that contains the build definitions.<br/>Wildcards (*) are supported.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "batchSize": 1,
      "uri": "vstfs:///Build/Definition/2",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "triggerType": "continuousIntegration",
      "defaultDropLocation": "#/",
      "buildArgs": "",
      "dateCreated": "2014-03-13T16:29:21Z",
      "supportedReasons": 63,
      "lastBuild": {
        "id": 348,
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348"
      },
      "definitionType": "xaml",
      "id": 2,
      "name": "MyWebSite CI",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
    },
    {
      "batchSize": 1,
      "uri": "vstfs:///Build/Definition/3",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "triggerType": "continuousIntegration",
      "defaultDropLocation": "#/",
      "buildArgs": "",
      "dateCreated": "2014-03-27T19:41:43.323Z",
      "supportedReasons": 63,
      "lastBuild": {
        "id": 335,
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/335"
      },
      "definitionType": "xaml",
      "id": 3,
      "name": "CustomerAddressModule",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
    }
  ],
  "count": 2
}
```


## Get a build definition

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the build definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/3?api-version=1.0
```

#### Sample response

```json
{
  "batchSize": 1,
  "uri": "vstfs:///Build/Definition/3",
  "queue": {
    "queueType": "buildController",
    "id": 274,
    "name": "Hosted Build Controller",
    "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
  },
  "triggerType": "continuousIntegration",
  "defaultDropLocation": "#/",
  "buildArgs": "",
  "dateCreated": "2014-03-27T19:41:43.323Z",
  "supportedReasons": 63,
  "lastBuild": {
    "id": 335,
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/335"
  },
  "definitionType": "xaml",
  "id": 3,
  "name": "CustomerAddressModule",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
}
```



