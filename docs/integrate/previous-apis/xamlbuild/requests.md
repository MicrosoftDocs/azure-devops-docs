---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Requests (XAML Build) | REST API Reference for Team Foundation Server
description: Submit and access build requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 40A7EF31-7303-4A6E-ADB5-69BCF7830A2A
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build requests

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build requests

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/requests[?requestedFor={string}&definitionId={int}&controllerId={int}&maxCompletedAge={int}&status={string}&$top={int}&$skip={int}]
```

| Parameter       | Type   | Notes
|:----------------|:-------|:------------
| URL
| instance        | string | TFS server name ({server:port}).
| project         | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version     | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| requestedFor    | string | Person who submitted the build request.<br/>Wildcards (*) are supported.
| definitionId    | int    | Build definition used to create the build request.
| queueId         | int    | Build requests that are handled by a build queue (controller).
| maxCompletedAge | int    | Build requests that completed in the previous time span (in seconds).
| status          | enum {<br/>&nbsp;&nbsp;All,<br/>&nbsp;&nbsp;Cancelled,<br/>&nbsp;&nbsp;Completed,<br/>&nbsp;&nbsp;InProgress,<br/>&nbsp;&nbsp;None,<br/>&nbsp;&nbsp;Postponed,<br/>&nbsp;&nbsp;Queued,<br/>&nbsp;&nbsp;Retry<br/>} | Status of the build requests.
| $top            | int    | Number of requests to return.
| $skip           | int    | Number of requests to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Request/398",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 324,
          "name": "CustomerAddressModule_20141002.1",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/324"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.213Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 398,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/398",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/399",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 325,
          "name": "CustomerAddressModule_20141002.2",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/325"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.997Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 399,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/399",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/401",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 327,
          "name": "CustomerAddressModule_20141002.4",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/327"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:19:22.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 401,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/401",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/405",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 329,
          "name": "CustomerAddressModule_20141002.6",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/329"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:20:37.897Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 405,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/405",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/406",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 330,
          "name": "CustomerAddressModule_20141002.7",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/330"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:24:30.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 406,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/406",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ],
  "count": 5
}
```


### Requested by
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?requestedFor=fabrikamfiber3@hotmail.com&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Request/398",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 324,
          "name": "CustomerAddressModule_20141002.1",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/324"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.213Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 398,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/398",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/399",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 325,
          "name": "CustomerAddressModule_20141002.2",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/325"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.997Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 399,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/399",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/401",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 327,
          "name": "CustomerAddressModule_20141002.4",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/327"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:19:22.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 401,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/401",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/405",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 329,
          "name": "CustomerAddressModule_20141002.6",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/329"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:20:37.897Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 405,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/405",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/406",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 330,
          "name": "CustomerAddressModule_20141002.7",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/330"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:24:30.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 406,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/406",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ],
  "count": 5
}
```


### For a build definition
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?definitionId=3&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Request/398",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 324,
          "name": "CustomerAddressModule_20141002.1",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/324"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.213Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 398,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/398",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/399",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 325,
          "name": "CustomerAddressModule_20141002.2",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/325"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.997Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 399,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/399",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/401",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 327,
          "name": "CustomerAddressModule_20141002.4",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/327"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:19:22.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 401,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/401",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/405",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 329,
          "name": "CustomerAddressModule_20141002.6",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/329"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:20:37.897Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 405,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/405",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/406",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 330,
          "name": "CustomerAddressModule_20141002.7",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/330"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:24:30.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 406,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/406",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ],
  "count": 5
}
```


### In a queue
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?controllerId=274&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Request/398",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 324,
          "name": "CustomerAddressModule_20141002.1",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/324"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.213Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 398,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/398",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/399",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 325,
          "name": "CustomerAddressModule_20141002.2",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/325"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.997Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 399,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/399",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/401",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 327,
          "name": "CustomerAddressModule_20141002.4",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/327"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:19:22.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 401,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/401",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/405",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 329,
          "name": "CustomerAddressModule_20141002.6",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/329"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:20:37.897Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 405,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/405",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/406",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 330,
          "name": "CustomerAddressModule_20141002.7",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/330"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:24:30.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 406,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/406",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ],
  "count": 5
}
```


### Completed since
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?maxCompletedAge=3600&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Request/431",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 349,
          "name": "CustomerAddressModule_20141101.1",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/349"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-11-01T12:17:24.837Z",
      "reason": "manual",
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 431,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/431",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    },
    {
      "uri": "vstfs:///Build/Request/432",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 350,
          "name": "CustomerAddressModule_20141101.2",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/350"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-11-01T12:17:26.943Z",
      "reason": "manual",
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 432,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/432",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    },
    {
      "uri": "vstfs:///Build/Request/433",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": 1,
      "queueTime": "2014-11-01T12:17:27.923Z",
      "reason": "manual",
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "status": "queued",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 433,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/433",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    },
    {
      "uri": "vstfs:///Build/Request/434",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": 2,
      "queueTime": "2014-11-01T12:21:24.433Z",
      "reason": "manual",
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "status": "queued",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 434,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/434",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    },
    {
      "uri": "vstfs:///Build/Request/435",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": 3,
      "queueTime": "2014-11-01T12:21:25.52Z",
      "reason": "manual",
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "status": "queued",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 435,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/435",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    }
  ],
  "count": 5
}
```


### By status
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?status=completed&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Request/398",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 324,
          "name": "CustomerAddressModule_20141002.1",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/324"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.213Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 398,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/398",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/399",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 325,
          "name": "CustomerAddressModule_20141002.2",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/325"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:03:13.997Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 399,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/399",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/401",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 327,
          "name": "CustomerAddressModule_20141002.4",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/327"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:19:22.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 401,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/401",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/405",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 329,
          "name": "CustomerAddressModule_20141002.6",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/329"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:20:37.897Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 405,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/405",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/406",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 330,
          "name": "CustomerAddressModule_20141002.7",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/330"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:24:30.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 406,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/406",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ],
  "count": 5
}
```


### A page at a time
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?$top=2&$skip=2&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "uri": "vstfs:///Build/Request/401",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 327,
          "name": "CustomerAddressModule_20141002.4",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/327"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:19:22.677Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 401,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/401",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    },
    {
      "uri": "vstfs:///Build/Request/405",
      "queue": {
        "queueType": "buildController",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
      },
      "definition": {
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "builds": [
        {
          "id": 329,
          "name": "CustomerAddressModule_20141002.6",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/329"
        }
      ],
      "customGetVersion": "T",
      "priority": "normal",
      "queuePosition": -1,
      "queueTime": "2014-10-02T16:20:37.897Z",
      "reason": "manual",
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "status": "completed",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "id": 405,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/405",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      }
    }
  ],
  "count": 2
}
```


## Request a build
<a name="requestabuild" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/requests?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	definition: {
		id: {buildDefinition}
	},
	reason: {reason},
	priority: {priority},
	[queue: { 
		id: {queueId}
	}]
}
```

| Parameter       | Type   | Required | Notes
|:----------------|:-------|:---------|:------------
| URL
| instance        | string | yes      | TFS server name ({server:port}).
| project         | string | yes      | [Project](../tfs/projects.md) ID or name containing the build definition.
| Request body
| buildDefinition | int    | yes      | ID of the build definition to use.
| reason          | enum {<br/>&nbsp;&nbsp;BatchedCI,<br/>&nbsp;&nbsp;CheckInShelveset,<br/>&nbsp;&nbsp;IndividualCI,<br/>&nbsp;&nbsp;Manual,<br/>&nbsp;&nbsp;None,<br/>&nbsp;&nbsp;Schedule,<br/>&nbsp;&nbsp;ScheduleForced,<br/>&nbsp;&nbsp;Triggered,<br/>&nbsp;&nbsp;UserCreated,<br/>&nbsp;&nbsp;ValidateShelveset<br/>} | yes | Reason for the request.
| priority        | enum {<br/>&nbsp;&nbsp;Normal,<br/>&nbsp;&nbsp;AboveNormal,<br/>&nbsp;&nbsp;BelowNormal,<br/>&nbsp;&nbsp;High,<br/>&nbsp;&nbsp;Low<br/>} | yes | Priority of the request.
| queueId         | int    | no       | ID of the queue in which to request the build.<br/>If not specified the build system will choose a queue.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests?api-version=1.0
```
```json
{
  "definition": {
    "id": 3
  },
  "reason": "Manual",
  "priority": "Normal"
}
```

#### Sample response

```json
{
  "uri": "vstfs:///Build/Request/434",
  "queue": {
    "queueType": "buildController",
    "id": 274,
    "url": "https://mytfsserver/DefaultCollection/_apis/build/Queues/274"
  },
  "definition": {
    "id": 3,
    "name": "CustomerAddressModule",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
  },
  "builds": [],
  "customGetVersion": "T",
  "priority": "normal",
  "queuePosition": 1,
  "queueTime": "2014-11-01T12:21:24.433Z",
  "reason": "manual",
  "requestedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "status": "queued",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed"
  },
  "id": 434,
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Requests/434",
  "requestedFor": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  }
}
```


## Update the status of a request
<a name="updatethestatusofabuildrequest" />

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/build/requests/{request}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	status: {status}
}
```
 
| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| request   | int    | ID of the build request to update.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status    | enum {<br/>&nbsp;&nbsp;Postponed,<br/>&nbsp;&nbsp;Queued,<br/>&nbsp;&nbsp;InProgress<br/>} | The new status.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests/398?api-version=1.0
```
```json
{
  "status": "Stopped"
}
```


## Cancel a build request
<a name="cancelabuildrequest" />

A build request can only be deleted before the build has started.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/requests/{request}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| request   | int    | ID of the build request to delete.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/requests/433?api-version=1.0
```

