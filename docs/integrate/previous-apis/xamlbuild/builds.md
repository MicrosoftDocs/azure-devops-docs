---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: XAML Builds | REST API Reference for Team Foundation Server
description: Get builds programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 0B7A8B2D-8901-46FB-8F15-CF6101B24218
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Builds

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of builds

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds?api-version={version}[&definitionId={string}&requestedFor={string}&minFinishTime={DateTime}&status={string}&quality={quality}&$skip={int}&$top={int}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| definition    | string   | Builds that have this definition.
| requestedFor  | string   | Builds requested by this user<br/>Alias of the user. `fabrikamfiber4@hotmail.com`, for example.
| minFinishTime | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) | Builds that finished after this time.
| quality       | string   | Builds that have this [quality](./qualities.md).
| status        | enum {<br/>&nbsp;&nbsp;All<br/>&nbsp;&nbsp;Failed<br/>&nbsp;&nbsp;InProgress<br/>&nbsp;&nbsp;None<br/>&nbsp;&nbsp;NotStarted<br/>&nbsp;&nbsp;PartiallySucceeded<br/>&nbsp;&nbsp;Stopped<br/>&nbsp;&nbsp;Succeeded<br/>} | Builds that have this status. Combine flags with a comma, e.g. `InProgress,NotStarted` to list builds that haven't finished yet.
| $skip         | int      | Number of builds to skip.
| $top          | int      | Number of builds to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Build/348",
      "id": 348,
      "buildNumber": "MyWebSite CI_20141007.3",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
      "startTime": "2014-10-07T22:24:08.54Z",
      "finishTime": "2014-10-07T22:24:51.78Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111708/drop",
      "drop": {
        "location": "#/111708/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 429,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/429",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/347",
      "id": 347,
      "buildNumber": "MyWebSite CI_20141007.2",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111707/drop",
      "drop": {
        "location": "#/111707/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 428,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/345",
      "id": 345,
      "buildNumber": "MyWebSite CI_20141002.10",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/345",
      "startTime": "2014-10-02T17:46:03.617Z",
      "finishTime": "2014-10-02T17:48:23.31Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111704/drop",
      "drop": {
        "location": "#/111704/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 425,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/425",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    }
  ],
  "count": 3
}
```


### For a build definition
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?definition=MyWebSite CI&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Build/348",
      "id": 348,
      "buildNumber": "MyWebSite CI_20141007.3",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
      "startTime": "2014-10-07T22:24:08.54Z",
      "finishTime": "2014-10-07T22:24:51.78Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111708/drop",
      "drop": {
        "location": "#/111708/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 429,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/429",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/347",
      "id": 347,
      "buildNumber": "MyWebSite CI_20141007.2",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111707/drop",
      "drop": {
        "location": "#/111707/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 428,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/345",
      "id": 345,
      "buildNumber": "MyWebSite CI_20141002.10",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/345",
      "startTime": "2014-10-02T17:46:03.617Z",
      "finishTime": "2014-10-02T17:48:23.31Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111704/drop",
      "drop": {
        "location": "#/111704/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 425,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/425",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    }
  ],
  "count": 3
}
```


### Requested by
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?requestedFor=fabrikamfiber3@hotmail.com&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Build/348",
      "id": 348,
      "buildNumber": "MyWebSite CI_20141007.3",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
      "startTime": "2014-10-07T22:24:08.54Z",
      "finishTime": "2014-10-07T22:24:51.78Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111708/drop",
      "drop": {
        "location": "#/111708/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 429,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/429",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/347",
      "id": 347,
      "buildNumber": "MyWebSite CI_20141007.2",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111707/drop",
      "drop": {
        "location": "#/111707/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 428,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/345",
      "id": 345,
      "buildNumber": "MyWebSite CI_20141002.10",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/345",
      "startTime": "2014-10-02T17:46:03.617Z",
      "finishTime": "2014-10-02T17:48:23.31Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111704/drop",
      "drop": {
        "location": "#/111704/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 425,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/425",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    }
  ],
  "count": 3
}
```


### After this time
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?minFinishTime=02-01-2014&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Build/348",
      "id": 348,
      "buildNumber": "MyWebSite CI_20141007.3",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
      "startTime": "2014-10-07T22:24:08.54Z",
      "finishTime": "2014-10-07T22:24:51.78Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111708/drop",
      "drop": {
        "location": "#/111708/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 429,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/429",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/347",
      "id": 347,
      "buildNumber": "MyWebSite CI_20141007.2",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111707/drop",
      "drop": {
        "location": "#/111707/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 428,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/345",
      "id": 345,
      "buildNumber": "MyWebSite CI_20141002.10",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/345",
      "startTime": "2014-10-02T17:46:03.617Z",
      "finishTime": "2014-10-02T17:48:23.31Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111704/drop",
      "drop": {
        "location": "#/111704/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 425,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/425",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    }
  ],
  "count": 3
}
```


### By quality
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?quality=Rejected&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Build/347",
      "id": 347,
      "buildNumber": "MyWebSite CI_20141007.2",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111707/drop",
      "drop": {
        "location": "#/111707/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 428,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/344",
      "id": 344,
      "buildNumber": "MyWebSite CI_20141002.9",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/344",
      "startTime": "2014-10-02T17:42:24.91Z",
      "finishTime": "2014-10-02T17:43:28.523Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111703/drop",
      "drop": {
        "location": "#/111703/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111703/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111703/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.9_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111703/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111703/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.9_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 424,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/424",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/341",
      "id": 341,
      "buildNumber": "MyWebSite CI_20141002.6",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/341",
      "startTime": "2014-10-02T16:47:14.08Z",
      "finishTime": "2014-10-02T16:48:03.007Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111700/drop",
      "drop": {
        "location": "#/111700/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111700/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111700/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.6_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111700/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111700/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.6_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 420,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/420",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    }
  ],
  "count": 3
}
```


### By status
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?status=Failed&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Build/348",
      "id": 348,
      "buildNumber": "MyWebSite CI_20141007.3",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
      "startTime": "2014-10-07T22:24:08.54Z",
      "finishTime": "2014-10-07T22:24:51.78Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111708/drop",
      "drop": {
        "location": "#/111708/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 429,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/429",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/347",
      "id": 347,
      "buildNumber": "MyWebSite CI_20141007.2",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111707/drop",
      "drop": {
        "location": "#/111707/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 428,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    },
    {
      "uri": "vstfs:///Build/Build/345",
      "id": 345,
      "buildNumber": "MyWebSite CI_20141002.10",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/345",
      "startTime": "2014-10-02T17:46:03.617Z",
      "finishTime": "2014-10-02T17:48:23.31Z",
      "reason": "manual",
      "status": "failed",
      "dropLocation": "#/111704/drop",
      "drop": {
        "location": "#/111704/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 425,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/425",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    }
  ],
  "count": 3
}
```


### A page at a time
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?$skip=1&$top=1&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Build/347",
      "id": 347,
      "buildNumber": "MyWebSite CI_20141007.2",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "status": "failed",
      "quality": "Rejected",
      "dropLocation": "#/111707/drop",
      "drop": {
        "location": "#/111707/drop",
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
      },
      "log": {
        "type": "container",
        "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
        "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
      },
      "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "retainIndefinitely": false,
      "hasDiagnostics": true,
      "definition": {
        "definitionType": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "requests": [
        {
          "id": 428,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
          "requestedFor": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          }
        }
      ]
    }
  ],
  "count": 1
}
```


## Get a build

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/348?api-version=1.0
```

#### Sample response

```json
{
  "uri": "vstfs:///Build/Build/348",
  "id": 348,
  "buildNumber": "MyWebSite CI_20141007.3",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
  "startTime": "2014-10-07T22:24:08.54Z",
  "finishTime": "2014-10-07T22:24:51.78Z",
  "reason": "manual",
  "status": "failed",
  "dropLocation": "#/111708/drop",
  "drop": {
    "location": "#/111708/drop",
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_drop"
  },
  "log": {
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_logs"
  },
  "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
  "lastChangedBy": {
    "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
    "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
    "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
  },
  "retainIndefinitely": false,
  "hasDiagnostics": true,
  "definition": {
    "definitionType": "xaml",
    "id": 2,
    "name": "MyWebSite CI",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
  },
  "queue": {
    "queueType": "buildController",
    "id": 274,
    "name": "Hosted Build Controller",
    "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
  },
  "requests": [
    {
      "id": 429,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/429",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ]
}
```


## Get build details
<a name="getbuilddetails" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/details?api-version={version}[&types={string}&types={string}]
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| types     | enum {<br/>&nbsp;&nbsp;ActivityProperties,<br/>&nbsp;&nbsp;ActivityTracking,<br/>&nbsp;&nbsp;AgentScopeActivityTracking,<br/>&nbsp;&nbsp;AssociatedChangeset,<br/>&nbsp;&nbsp;AssociatedCommit,<br/>&nbsp;&nbsp;AssociatedWorkItem,<br/>&nbsp;&nbsp;BuildError,<br/>&nbsp;&nbsp;BuildMessage,<br/>&nbsp;&nbsp;BuildProject,<br/>&nbsp;&nbsp;BuildStep,<br/>&nbsp;&nbsp;BuildWarning,<br/>&nbsp;&nbsp;CheckInOutcome,<br/>&nbsp;&nbsp;CompilationSummary,<br/>&nbsp;&nbsp;ConfigurationSummary,<br/>&nbsp;&nbsp;CustomSummaryInformation,<br/>&nbsp;&nbsp;DeploymentInformation,<br/>&nbsp;&nbsp;ExternalLink,<br/>&nbsp;&nbsp;GetStatus,<br/>&nbsp;&nbsp;OpenedWorkItem<br/>} | Types of details to include.<br/>Specify this parameter multiple times to include multiple types.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/348/details?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "nodeId": 9,
      "parentId": 8,
      "type": "BuildError",
      "lastModifiedDate": "2014-10-07T22:24:50.127Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "Code": "",
        "EndLineNumber": "-1",
        "ErrorType": "",
        "File": "",
        "LineNumber": "-1",
        "Message": "Exception Message: The project file 'C:\\a\\src\\MyWebSite' was not found. (type FileNotFoundException)\r\nException Stack Trace:    at System.Activities.Statements.Throw.Execute(CodeActivityContext context)\r\n   at System.Activities.CodeActivity.InternalExecute(ActivityInstance instance, ActivityExecutor executor, BookmarkManager bookmarkManager)\r\n   at System.Activities.Runtime.ActivityExecutor.ExecuteActivityWorkItem.ExecuteBody(ActivityExecutor executor, BookmarkManager bookmarkManager, Location resultLocation)",
        "ServerPath": "",
        "Timestamp": "2014-10-07T22:24:47.2073862Z"
      }
    },
    {
      "nodeId": 1,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:51.517Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "1",
        "ActivityType": "System.Activities.DynamicActivity",
        "DisplayText": "Overall Build Process",
        "FinishTime": "2014-10-07T22:24:50.7799306Z",
        "StartTime": "2014-10-07T22:24:08.9412959Z",
        "State": "Canceled"
      }
    },
    {
      "nodeId": 2,
      "parentId": 1,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:51.517Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "2",
        "ActivityType": "System.Activities.Statements.Sequence",
        "DisplayText": "Overall build process",
        "FinishTime": "2014-10-07T22:24:50.7799306Z",
        "StartTime": "2014-10-07T22:24:09.2322960Z",
        "State": "Canceled"
      }
    },
    {
      "nodeId": 3,
      "parentId": 2,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:12.17Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "3",
        "ActivityType": "Microsoft.TeamFoundation.Build.Activities.Core.SetBuildNumber",
        "DisplayText": "Update build number",
        "FinishTime": "2014-10-07T22:24:09.9065135Z",
        "StartTime": "2014-10-07T22:24:09.2342965Z",
        "State": "Closed"
      }
    },
    {
      "nodeId": 5,
      "parentId": 4,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:34.157Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "3",
        "ActivityType": "Microsoft.TeamFoundation.Build.Activities.Core.InitializeEnvironment",
        "DisplayText": "Initialize environment",
        "FinishTime": "2014-10-07T22:24:19.2821946Z",
        "StartTime": "2014-10-07T22:24:19.2585509Z",
        "State": "Closed"
      }
    },
    {
      "nodeId": 6,
      "parentId": 4,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:34.157Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "4",
        "ActivityType": "Microsoft.TeamFoundation.Build.Activities.Git.GitPull",
        "DisplayText": "Pull sources from Git repo",
        "FinishTime": "2014-10-07T22:24:28.9399529Z",
        "StartTime": "2014-10-07T22:24:19.3385508Z",
        "State": "Closed"
      }
    },
    {
      "nodeId": 7,
      "parentId": 4,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:50.127Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "38",
        "ActivityType": "System.Activities.Statements.Sequence",
        "DisplayText": "Compile and Test",
        "FinishTime": "2014-10-07T22:24:47.4373205Z",
        "StartTime": "2014-10-07T22:24:28.9409532Z",
        "State": "Canceled"
      }
    },
    {
      "nodeId": 8,
      "parentId": 7,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:50.127Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "41",
        "ActivityType": "Microsoft.TeamFoundation.Build.Activities.RunMSBuild",
        "DisplayText": "Run MSBuild for solution",
        "FinishTime": "2014-10-07T22:24:47.4373205Z",
        "StartTime": "2014-10-07T22:24:28.9539527Z",
        "State": "Canceled"
      }
    },
    {
      "nodeId": 10,
      "parentId": 4,
      "type": "ActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:50.127Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "116",
        "ActivityType": "Microsoft.TeamFoundation.Build.Activities.Core.DropBinaries",
        "DisplayText": "Copy binaries to drop",
        "FinishTime": "2014-10-07T22:24:47.4643886Z",
        "StartTime": "2014-10-07T22:24:47.4373205Z",
        "State": "Closed"
      }
    },
    {
      "nodeId": 4,
      "parentId": 2,
      "type": "AgentScopeActivityTracking",
      "lastModifiedDate": "2014-10-07T22:24:51.517Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "ActivityInstanceId": "13",
        "ActivityType": "Microsoft.TeamFoundation.Build.Workflow.Activities.AgentScope",
        "DisplayText": "Run on agent",
        "FinishTime": "2014-10-07T22:24:50.7799306Z",
        "PossibleAgents": "vstfs:///Build/Agent/274=Hosted Build Agent",
        "ReservationStatus": "AgentReleased",
        "ReservedAgentName": "Hosted Build Agent",
        "ReservedAgentUri": "vstfs:///Build/Agent/274",
        "StartTime": "2014-10-07T22:24:09.9351976Z",
        "State": "Canceled"
      }
    },
    {
      "nodeId": 11,
      "parentId": 10,
      "type": "BuildWarning",
      "lastModifiedDate": "2014-10-07T22:24:50.127Z",
      "lastModifiedBy": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
      "fields": {
        "Importance": "Low",
        "Message": "TF270003: Failed to copy. Ensure the source directory C:\\a\\bin exists and that you have the appropriate permissions.",
        "Timestamp": "2014-10-07T22:24:47.4583212Z"
      }
    }
  ],
  "count": 11
}
```


## Modify a build

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={versions}
```
```http
Content-Type: application/json
```
```json
{
	status: {string},
	quality: {string},
	retainIndefinitely: {boolean}
}
```

Modifies the build.

| Parameter   | Type    | Notes
|:------------|:--------|:------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | [Project](../tfs/projects.md) ID or name.
| buildId     | int     | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status      | string  | Stop the build by updating its status to `Stopped`.
| quality     | string  | Set the build quality.
| retainIndefinitely | boolean | When 'true', the build will be maintained regardless of the retention rules used by the build definition.

### Stop a build
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/348?api-version=1.0
```
```json
{
  "status": "Stopped"
}
```

#### Sample response

```json
{
  "uri": "vstfs:///Build/Build/348",
  "id": 348,
  "buildNumber": "MyWebSite CI_20141007.3",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
  "startTime": "2014-10-07T22:24:08.54Z",
  "finishTime": "2014-10-07T22:24:51.78Z",
  "reason": "manual",
  "status": "stopped",
  "dropLocation": "#/111708/drop",
  "drop": {
    "location": "#/111708/drop",
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_drop"
  },
  "log": {
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111708/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.3_logs"
  },
  "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
  "lastChangedBy": {
    "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
    "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
    "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
  },
  "retainIndefinitely": false,
  "hasDiagnostics": true,
  "definition": {
    "definitionType": "xaml",
    "id": 2,
    "name": "MyWebSite CI",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
  },
  "queue": {
    "queueType": "buildController",
    "id": 274,
    "name": "Hosted Build Controller",
    "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
  },
  "requests": [
    {
      "id": 429,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/429",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ]
}
```


### Set the build quality
<a name="setthebuildquality" />
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/347?api-version=1.0
```
```json
{
  "quality": "Rejected"
}
```

#### Sample response

```json
{
  "uri": "vstfs:///Build/Build/347",
  "id": 347,
  "buildNumber": "MyWebSite CI_20141007.2",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
  "startTime": "2014-10-07T22:20:29.823Z",
  "finishTime": "2014-10-07T22:21:24.24Z",
  "reason": "manual",
  "status": "failed",
  "quality": "Rejected",
  "dropLocation": "#/111707/drop",
  "drop": {
    "location": "#/111707/drop",
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_drop"
  },
  "log": {
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111707/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141007.2_logs"
  },
  "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
  "lastChangedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "retainIndefinitely": false,
  "hasDiagnostics": true,
  "definition": {
    "definitionType": "xaml",
    "id": 2,
    "name": "MyWebSite CI",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
  },
  "queue": {
    "queueType": "buildController",
    "id": 274,
    "name": "Hosted Build Controller",
    "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
  },
  "requests": [
    {
      "id": 428,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/428",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ]
}
```


### Retain indefinitely
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/345?api-version=1.0
```
```json
{
  "retainIndefinitely": "true"
}
```

#### Sample response

```json
{
  "uri": "vstfs:///Build/Build/345",
  "id": 345,
  "buildNumber": "MyWebSite CI_20141002.10",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/345",
  "startTime": "2014-10-02T17:46:03.617Z",
  "finishTime": "2014-10-02T17:48:23.31Z",
  "reason": "manual",
  "status": "succeeded",
  "dropLocation": "#/111704/drop",
  "drop": {
    "location": "#/111704/drop",
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/drop?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_drop"
  },
  "log": {
    "type": "container",
    "url": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs",
    "downloadUrl": "https://mytfsserver/DefaultCollection/_apis/resources/Containers/111704/logs?api-version=1.0&$format=zip&downloadFileName=MyWebSite CI_20141002.10_logs"
  },
  "sourceGetVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
  "lastChangedBy": {
    "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
    "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
    "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
  },
  "retainIndefinitely": true,
  "hasDiagnostics": true,
  "definition": {
    "definitionType": "xaml",
    "id": 2,
    "name": "MyWebSite CI",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
  },
  "queue": {
    "queueType": "buildController",
    "id": 274,
    "name": "Hosted Build Controller",
    "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
  },
  "requests": [
    {
      "id": 425,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/425",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ]
}
```


<a id="deletebuild"></a>
## Delete a build

Deletes the build and all of its output resources, including drops, test results, the version control label, symbols and content.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api_version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/345?api-version=1.0
```

