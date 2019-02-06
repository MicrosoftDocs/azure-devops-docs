---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Builds | REST API Reference for Team Foundation Server
description: Get builds programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Builds

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of builds
<a name="getalistofbuilds" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds?api-version={version}[&definitions={string}][&queues={string}][&buildNumber={string}][&type={string}][&minFinishTime={DateTime}][&maxFinishTime={DateTime}][&requestedFor={string}][&reasonFilter={string}][&statusFilter={string}][&tagFilters={string}][&propertyFilters={string}][&$top={int}][&continuationToken={string}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| definitions   | string   | A comma-delimited list of definition IDs.
| queues        | string   | A comma-delimited list of queue IDs.
| buildNumber   | string   | Filters to builds with build numbers that start with this value.
| type          | enum { build, xaml } | The type of builds to retrieve.
| minFinishTime | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) | Builds that finished after this time.
| maxFinishTime | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) | Builds that finished before this time.
| requestedFor  | string   | Builds requested by this user<br/>Alias of the user. `fabrikamfiber4@hotmail.com`, for example.
| reasonFilter  | enum { manual, individualCI, batchedCI, schedule, userCreated, validateShelveset, checkInShelveset, triggered, all } | The reason the build was created.
| resultFilter  | enum { succeeded, partiallySucceeded, failed, canceled } | The build result
| statusFilter  | enum { inProgress, completed, cancelling, postponed, notStarted, all } | The build status.
| tagFilters    | string   | A comma-delimited list of tags. Only builds with these tags will be returned.
| properties    | string   | A comma-delimited list of extended properties to retrieve.
| maxBuildsPerDefinition    | int   | The maximum number of builds to retrieve for each definition. This is only valid when definitions is also specified.
| $top          | int      | Maximum number of builds to return.
| continuationToken | string | A continuation token for paging through builds

### For a build definition
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?definitions=25&statusFilter=completed&$top=1&api-version=2.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=391"
        },
        "timeline": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/Timeline"
        }
      },
      "id": 391,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391",
      "definition": {
        "type": "build",
        "revision": 10,
        "id": 25,
        "name": "VsoBuildApi",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/25",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "description": "Git projects",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed",
          "revision": 3432824
        }
      },
      "buildNumber": "20150716.2",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/391",
      "sourceBranch": "refs/heads/master",
      "sourceVersion": "b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
      "status": "completed",
      "queue": {
        "pool": null,
        "id": 2,
        "name": "Hosted"
      },
      "queueTime": "2015-07-16T19:52:38.65Z",
      "priority": "normal",
      "startTime": "2015-07-16T19:52:42.7771198Z",
      "finishTime": "2015-07-16T19:54:41.7842973Z",
      "reason": "manual",
      "result": "succeeded",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2015-07-16T20:00:04.04Z",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "parameters": "{\"BuildConfiguration\":\"debug\",\"BuildPlatform\":\"any cpu\"}",
      "orchestrationPlan": {
        "planId": "eee49d06-c7e6-4682-9e81-96cd11f5780d"
      },
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "tfsgit",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": true
    }
  ]
}
```


### With a continuation token
When requesting completed builds, the server will return a x-ms-continuationtoken value in the response header if there are more builds available. Repeat the request with this on the query string to get the next page of builds.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?definitions=25&statusFilter=completed&continuationToken={continuationToken}&api-version=2.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=391"
        },
        "timeline": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/Timeline"
        }
      },
      "id": 391,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391",
      "definition": {
        "type": "build",
        "revision": 10,
        "id": 25,
        "name": "VsoBuildApi",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/25",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "description": "Git projects",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed",
          "revision": 3432824
        }
      },
      "buildNumber": "20150716.2",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/391",
      "sourceBranch": "refs/heads/master",
      "sourceVersion": "b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
      "status": "completed",
      "queue": {
        "pool": null,
        "id": 2,
        "name": "Hosted"
      },
      "queueTime": "2015-07-16T19:52:38.65Z",
      "priority": "normal",
      "startTime": "2015-07-16T19:52:42.7771198Z",
      "finishTime": "2015-07-16T19:54:41.7842973Z",
      "reason": "manual",
      "result": "succeeded",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2015-07-16T20:00:04.04Z",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "parameters": "{\"BuildConfiguration\":\"debug\",\"BuildPlatform\":\"any cpu\"}",
      "orchestrationPlan": {
        "planId": "eee49d06-c7e6-4682-9e81-96cd11f5780d"
      },
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "tfsgit",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": true
    }
  ]
}
```


### With a tag
<a name="getbuildswithatag" />
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?tagFilters=myTag&api-version=2.0
```

#### Sample response

```json
{
  "count": 21,
  "value": [
    {
      "tags": [
        "myTag",
        "tag1",
        "tag2",
        "tag3"
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=391"
        },
        "timeline": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/Timeline"
        }
      },
      "id": 391,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391",
      "definition": {
        "type": "build",
        "revision": 10,
        "id": 25,
        "name": "VsoBuildApi",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/25",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "description": "Git projects",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed",
          "revision": 3432824
        }
      },
      "buildNumber": "20150716.2",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/391",
      "sourceBranch": "refs/heads/master",
      "sourceVersion": "b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
      "status": "completed",
      "queue": {
        "pool": null,
        "id": 2,
        "name": "Hosted"
      },
      "queueTime": "2015-07-16T19:52:38.65Z",
      "priority": "normal",
      "startTime": "2015-07-16T19:52:42.7771198Z",
      "finishTime": "2015-07-16T19:54:41.7842973Z",
      "reason": "manual",
      "result": "succeeded",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2015-07-16T20:00:04.04Z",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "parameters": "{\"BuildConfiguration\":\"debug\",\"BuildPlatform\":\"any cpu\"}",
      "orchestrationPlan": {
        "planId": "eee49d06-c7e6-4682-9e81-96cd11f5780d"
      },
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "tfsgit",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": true
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/367"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=367"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/367/Details?api-version=1.0"
        }
      },
      "id": 367,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/367",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20150623.1",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/367",
      "sourceVersion": "LG:refs/heads/master:b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2015-06-23T18:25:15.047Z",
      "priority": "normal",
      "startTime": "2015-06-23T18:27:59.41Z",
      "finishTime": "2015-06-23T18:28:50.427Z",
      "reason": "individualCI",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/Generic/d81542e4-cdfa-4333-b082-1ae2d6c3ad16\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775",
        "isContainer": true
      },
      "lastChangedDate": "2015-06-23T18:28:50.427Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/367/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/366"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=366"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/366/Details?api-version=1.0"
        }
      },
      "id": 366,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/366",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20150623.1",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/366",
      "sourceVersion": "LG:refs/heads/master:b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2015-06-23T18:25:15.043Z",
      "priority": "normal",
      "startTime": "2015-06-23T18:26:05.93Z",
      "finishTime": "2015-06-23T18:26:59.9Z",
      "reason": "individualCI",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/Generic/d81542e4-cdfa-4333-b082-1ae2d6c3ad16\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775",
        "isContainer": true
      },
      "lastChangedDate": "2015-06-23T18:26:59.9Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/366/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/361"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=361"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/361/Details?api-version=1.0"
        }
      },
      "id": 361,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/361",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20150529.1",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/361",
      "sourceVersion": "LG:refs/heads/master:e2245a1e16afbb80d7b6624e64f4efeddedd1ebb",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2015-05-29T19:28:38.213Z",
      "priority": "normal",
      "startTime": "2015-05-29T19:33:58.763Z",
      "finishTime": "2015-05-29T19:35:01.653Z",
      "reason": "individualCI",
      "result": "failed",
      "requestedFor": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "requestedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/Generic/d81542e4-cdfa-4333-b082-1ae2d6c3ad16\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775",
        "isContainer": true
      },
      "lastChangedDate": "2015-05-29T19:35:01.653Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/361/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/360"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=360"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/360/Details?api-version=1.0"
        }
      },
      "id": 360,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/360",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20150529.1",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/360",
      "sourceVersion": "LG:refs/heads/master:e2245a1e16afbb80d7b6624e64f4efeddedd1ebb",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2015-05-29T19:28:38.21Z",
      "priority": "normal",
      "startTime": "2015-05-29T19:30:14.717Z",
      "finishTime": "2015-05-29T19:32:31.333Z",
      "reason": "individualCI",
      "result": "failed",
      "requestedFor": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "requestedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/Generic/d81542e4-cdfa-4333-b082-1ae2d6c3ad16\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775",
        "isContainer": true
      },
      "lastChangedDate": "2015-05-29T19:32:31.333Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/360/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/356"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=356"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/356/Details?api-version=1.0"
        }
      },
      "id": 356,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/356",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141105.1",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/356",
      "sourceVersion": "LG:refs/heads/master:9b03b366e298b9c554ee3cbcca1b5293bd6ce68f",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-05T21:01:30.19Z",
      "priority": "normal",
      "startTime": "2014-11-05T21:03:56.613Z",
      "finishTime": "2014-11-05T21:04:34.657Z",
      "reason": "individualCI",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/Generic/d81542e4-cdfa-4333-b082-1ae2d6c3ad16\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775",
        "isContainer": true
      },
      "lastChangedDate": "2014-11-05T21:04:34.657Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/356/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/355"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=355"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/355/Details?api-version=1.0"
        }
      },
      "id": 355,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/355",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141105.1",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/355",
      "sourceVersion": "LG:refs/heads/master:9b03b366e298b9c554ee3cbcca1b5293bd6ce68f",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-05T21:01:30.187Z",
      "priority": "normal",
      "startTime": "2014-11-05T21:02:24.793Z",
      "finishTime": "2014-11-05T21:03:05.153Z",
      "reason": "individualCI",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/Generic/d81542e4-cdfa-4333-b082-1ae2d6c3ad16\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775",
        "isContainer": true
      },
      "lastChangedDate": "2014-11-05T21:03:05.153Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/355/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/354"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=354"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/354/Details?api-version=1.0"
        }
      },
      "id": 354,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/354",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141101.6",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/354",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-01T12:21:28.757Z",
      "priority": "normal",
      "startTime": "2014-11-01T12:27:09.66Z",
      "finishTime": "2014-11-01T12:28:00.823Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2014-11-01T12:28:00.823Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/354/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/353"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=353"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/353/Details?api-version=1.0"
        }
      },
      "id": 353,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/353",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141101.5",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/353",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-01T12:21:27.313Z",
      "priority": "normal",
      "startTime": "2014-11-01T12:25:15.3Z",
      "finishTime": "2014-11-01T12:25:58.237Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2014-11-01T12:25:58.237Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/353/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/352"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=352"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/352/Details?api-version=1.0"
        }
      },
      "id": 352,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/352",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141101.4",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/352",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-01T12:21:25.52Z",
      "priority": "normal",
      "startTime": "2014-11-01T12:23:39.22Z",
      "finishTime": "2014-11-01T12:24:18.057Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2014-11-01T12:24:18.057Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/352/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/351"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=351"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/351/Details?api-version=1.0"
        }
      },
      "id": 351,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/351",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141101.3",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/351",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-01T12:21:24.433Z",
      "priority": "normal",
      "startTime": "2014-11-01T12:22:02.503Z",
      "finishTime": "2014-11-01T12:22:48.743Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2014-11-01T12:22:48.743Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/351/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/350"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=350"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/350/Details?api-version=1.0"
        }
      },
      "id": 350,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/350",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141101.2",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/350",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-01T12:17:26.943Z",
      "priority": "normal",
      "startTime": "2014-11-01T12:19:58.453Z",
      "finishTime": "2014-11-01T12:20:56.003Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2014-11-01T12:20:56.003Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/350/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/349"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=349"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/349/Details?api-version=1.0"
        }
      },
      "id": 349,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/349",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141101.1",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/349",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-11-01T12:17:24.837Z",
      "priority": "normal",
      "startTime": "2014-11-01T12:18:07.58Z",
      "finishTime": "2014-11-01T12:18:48.53Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "requestedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "lastChangedDate": "2014-11-01T12:18:48.53Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/349/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=348"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348/Details?api-version=1.0"
        }
      },
      "id": 348,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/348",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141007.3",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/348",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-07T22:17:23.183Z",
      "priority": "normal",
      "startTime": "2014-10-07T22:24:08.54Z",
      "finishTime": "2014-10-07T22:24:51.78Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-10-07T22:24:51.78Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/348/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=347"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347/Details?api-version=1.0"
        }
      },
      "id": 347,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/347",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141007.2",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/347",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-07T22:17:21.877Z",
      "priority": "normal",
      "startTime": "2014-10-07T22:20:29.823Z",
      "finishTime": "2014-10-07T22:21:24.24Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-11-01T11:56:54.787Z",
      "lastChangedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/347/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false,
      "quality": "Rejected"
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/344"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=344"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/344/Details?api-version=1.0"
        }
      },
      "id": 344,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/344",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141002.9",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/344",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-02T17:32:29.33Z",
      "priority": "normal",
      "startTime": "2014-10-02T17:42:24.91Z",
      "finishTime": "2014-10-02T17:43:28.523Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-10-07T22:17:11.12Z",
      "lastChangedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/344/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false,
      "quality": "Rejected"
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/341"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=341"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/341/Details?api-version=1.0"
        }
      },
      "id": 341,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/341",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141002.6",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/341",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-02T16:37:23.743Z",
      "priority": "normal",
      "startTime": "2014-10-02T16:47:14.08Z",
      "finishTime": "2014-10-02T16:48:03.007Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-10-02T17:32:19.833Z",
      "lastChangedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/341/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false,
      "quality": "Rejected"
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/339"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=339"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/339/Details?api-version=1.0"
        }
      },
      "id": 339,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/339",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141002.4",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/339",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-02T16:37:22.407Z",
      "priority": "normal",
      "startTime": "2014-10-02T16:43:34.567Z",
      "finishTime": "2014-10-02T16:44:37.08Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-10-02T16:44:37.08Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/339/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/338"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=338"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/338/Details?api-version=1.0"
        }
      },
      "id": 338,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/338",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141002.3",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/338",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-02T16:34:01.617Z",
      "priority": "normal",
      "startTime": "2014-10-02T16:41:27.643Z",
      "finishTime": "2014-10-02T16:42:21.08Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-10-02T16:42:21.08Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/338/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/337"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=337"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/337/Details?api-version=1.0"
        }
      },
      "id": 337,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/337",
      "definition": {
        "type": "xaml",
        "id": 2,
        "name": "MyWebSite CI",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2"
      },
      "buildNumber": "MyWebSite CI_20141002.2",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/337",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-02T16:34:00.92Z",
      "priority": "normal",
      "startTime": "2014-10-02T16:39:45.807Z",
      "finishTime": "2014-10-02T16:40:28.493Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-10-02T16:40:28.493Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/337/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    },
    {
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/333"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=333"
        },
        "details": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/333/Details?api-version=1.0"
        }
      },
      "id": 333,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/333",
      "definition": {
        "type": "xaml",
        "id": 3,
        "name": "CustomerAddressModule",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3"
      },
      "buildNumber": "CustomerAddressModule_20141002.10",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      },
      "uri": "vstfs:///Build/Build/333",
      "sourceVersion": "LG:refs/heads/master:23d0bc5b128a10056dc68afece360d8a0fabb014",
      "status": "completed",
      "controller": {
        "uri": "vstfs:///Build/Controller/274",
        "status": "offline",
        "enabled": true,
        "createdDate": "2014-01-24T06:21:00.71Z",
        "updatedDate": "2015-06-23T18:28:51.917Z",
        "id": 274,
        "name": "Hosted Build Controller",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Controllers/274"
      },
      "queueTime": "2014-10-02T16:24:32.53Z",
      "priority": "normal",
      "startTime": "2014-10-02T16:31:59.633Z",
      "finishTime": "2014-10-02T16:32:46.057Z",
      "reason": "manual",
      "result": "failed",
      "requestedFor": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "requestedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "lastChangedDate": "2014-10-02T16:32:46.057Z",
      "lastChangedBy": {
        "id": "e43c66ab-e1f6-4686-980e-adca43527f9a",
        "displayName": "Elastic Build (Fabrikam-Fiber-Inc)",
        "uniqueName": "LOCAL AUTHORITY\\Elastic Build (Fabrikam-Fiber-Inc)",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e43c66ab-e1f6-4686-980e-adca43527f9a",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e43c66ab-e1f6-4686-980e-adca43527f9a"
      },
      "parameters": "",
      "logs": {
        "id": 0,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/333/logs"
      },
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "type": "TfsGit",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
        "defaultBranch": "refs/heads/master",
        "clean": null,
        "checkoutSubmodules": false
      },
      "keepForever": false
    }
  ]
}
```



## Queue a build
<a name="queueabuild" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/builds?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance      | string | TFS server name ({server:port}).
| project       | string | [Project](../tfs/projects.md) ID or name.
| Query
| version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| definition.id | int    | The ID of the definition. This is required.
| queue.id      | int    | The ID of the queue. This is optional. If not specified, the default queue for the definition will be used.
| sourceBranch  | string | The branch to build. This is optional. If not specified, the default branch for the definition will be used.
| parameters    | stringified dictionary | Parameters to pass to the build. This is optional. If not specified, the default variables for the definition will be used.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds?api-version=2.0
```
```json
{
  "definition": {
    "id": 25
  },
  "sourceBranch": "refs/heads/master",
  "parameters": "{\"system.debug\":\"true\",\"BuildConfiguration\":\"debug\",\"BuildPlatform\":\"x64\"}"
}
```

#### Sample response

```json
{
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/393"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=393"
    },
    "timeline": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/393/Timeline"
    }
  },
  "id": 393,
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/393",
  "definition": {
    "type": "build",
    "revision": 10,
    "id": 25,
    "name": "VsoBuildApi",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/25",
    "project": {
      "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "name": "Fabrikam-Fiber-Git",
      "description": "Git projects",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "state": "wellFormed",
      "revision": 3432824
    }
  },
  "buildNumber": "20150716.4",
  "parameters": "{\"system.debug\":\"true\",\"BuildConfiguration\":\"debug\",\"BuildPlatform\":\"x64\"}",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "description": "Git projects",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 3432824
  },
  "uri": "vstfs:///Build/Build/393",
  "sourceBranch": "refs/heads/master",
  "status": "notStarted",
  "queue": {
    "pool": null,
    "id": 2,
    "name": "Hosted"
  },
  "queueTime": "2015-07-16T20:01:18.513Z",
  "priority": "normal",
  "reason": "manual",
  "requestedFor": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "requestedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "lastChangedDate": "2015-07-16T20:01:18.513Z",
  "lastChangedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "orchestrationPlan": {
    "planId": "a4bcc2d3-3125-4fc1-be82-216e60c56111"
  },
  "logs": {
    "id": 0,
    "type": "Container",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/393/logs"
  },
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "clean": null,
    "checkoutSubmodules": false
  },
  "keepForever": false
}
```


## Get a build
<a name="getabuild" />

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
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391?api-version=2.0
```

#### Sample response

```json
{
  "tags": [
    "tag1",
    "tag2",
    "tag3"
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=391"
    },
    "timeline": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/Timeline"
    },
    "sourceVersionDisplayUri": {
      "href": ""
    }
  },
  "id": 391,
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/391",
  "definition": {
    "type": "build",
    "revision": 10,
    "id": 25,
    "name": "VsoBuildApi",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/25",
    "project": {
      "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "name": "Fabrikam-Fiber-Git",
      "description": "Git projects",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "state": "wellFormed",
      "revision": 3432824
    }
  },
  "buildNumber": "20150716.2",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "description": "Git projects",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 3432824
  },
  "uri": "vstfs:///Build/Build/391",
  "sourceBranch": "refs/heads/master",
  "sourceVersion": "b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
  "status": "completed",
  "queue": {
    "pool": null,
    "id": 2,
    "name": "Hosted"
  },
  "queueTime": "2015-07-16T19:52:38.65Z",
  "priority": "normal",
  "startTime": "2015-07-16T19:52:42.7771198Z",
  "finishTime": "2015-07-16T19:54:41.7842973Z",
  "reason": "manual",
  "result": "succeeded",
  "requestedFor": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "requestedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "lastChangedDate": "2015-07-16T20:00:04.04Z",
  "lastChangedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "parameters": "{\"BuildConfiguration\":\"debug\",\"BuildPlatform\":\"any cpu\"}",
  "orchestrationPlan": {
    "planId": "eee49d06-c7e6-4682-9e81-96cd11f5780d"
  },
  "logs": {
    "id": 0,
    "type": "Container",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs"
  },
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "clean": null,
    "checkoutSubmodules": false
  },
  "keepForever": true
}
```


## Get build details
<a name="getbuilddetails" />

### Timeline

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/timeline?api-version={version}
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
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/timeline?api-version=2.0
```

#### Sample response

```json
{
  "records": [
    {
      "id": "bcddc27d-c891-4209-85d6-387e155439b0",
      "parentId": "045f4ce9-cb71-424f-84de-4ab19281dc70",
      "type": "Task",
      "name": "Build solution **\\*.sln",
      "startTime": "2015-07-16T19:53:20.853Z",
      "finishTime": "2015-07-16T19:53:28.567Z",
      "currentOperation": null,
      "percentComplete": 100,
      "state": "completed",
      "result": "succeeded",
      "resultCode": null,
      "changeId": 16,
      "lastModified": "0001-01-01T00:00:00",
      "workerName": "Hosted Agent",
      "order": 2,
      "details": {
        "id": "ef959107-e566-4c28-8d9f-354d605dd400",
        "changeId": 6,
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/Timeline/ef959107-e566-4c28-8d9f-354d605dd400"
      },
      "errorCount": 0,
      "warningCount": 1,
      "url": null,
      "log": {
        "id": 2,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/2"
      },
      "issues": [
        {
          "type": "warning",
          "category": "General",
          "message": "The MSBuild version parameter has been deprecated. Ignoring value: latest",
          "data": {
            "type": "warning"
          }
        }
      ]
    },
    {
      "id": "b5bb4de7-a8ea-4c7d-8491-3f745bba7d1b",
      "parentId": "045f4ce9-cb71-424f-84de-4ab19281dc70",
      "type": "Task",
      "name": "Get sources",
      "startTime": "2015-07-16T19:53:07.057Z",
      "finishTime": "2015-07-16T19:53:19.493Z",
      "currentOperation": null,
      "percentComplete": 100,
      "state": "completed",
      "result": "succeeded",
      "resultCode": null,
      "changeId": 13,
      "lastModified": "0001-01-01T00:00:00",
      "workerName": "Hosted Agent",
      "order": 1,
      "details": null,
      "errorCount": 0,
      "warningCount": 0,
      "url": null,
      "log": {
        "id": 1,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/1"
      }
    },
    {
      "id": "045f4ce9-cb71-424f-84de-4ab19281dc70",
      "parentId": null,
      "type": "Job",
      "name": "Build",
      "startTime": "2015-07-16T19:53:06.357Z",
      "finishTime": "2015-07-16T19:54:40.733Z",
      "currentOperation": null,
      "percentComplete": 100,
      "state": "completed",
      "result": "succeeded",
      "resultCode": null,
      "changeId": 18,
      "lastModified": "0001-01-01T00:00:00",
      "workerName": "Hosted Agent",
      "order": 1,
      "details": null,
      "errorCount": 0,
      "warningCount": 0,
      "url": null,
      "log": {
        "id": 4,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/4"
      }
    },
    {
      "id": "4611b1f0-9ebf-4810-944c-ae46c292d9d1",
      "parentId": "045f4ce9-cb71-424f-84de-4ab19281dc70",
      "type": "Task",
      "name": "Publish Artifact: drop",
      "startTime": "2015-07-16T19:53:28.617Z",
      "finishTime": "2015-07-16T19:54:40.7Z",
      "currentOperation": null,
      "percentComplete": 100,
      "state": "completed",
      "result": "succeeded",
      "resultCode": null,
      "changeId": 18,
      "lastModified": "0001-01-01T00:00:00",
      "workerName": "Hosted Agent",
      "order": 3,
      "details": null,
      "errorCount": 0,
      "warningCount": 0,
      "url": null,
      "log": {
        "id": 3,
        "type": "Container",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/3"
      }
    }
  ],
  "lastChangedBy": "bdda94c7-54e6-48b4-aee4-84da23f3a752",
  "lastChangedOn": "2015-07-16T19:54:41.6Z",
  "id": "de9c3ffa-7e27-4bca-ac68-24e512354883",
  "changeId": 18,
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/Timeline/de9c3ffa-7e27-4bca-ac68-24e512354883"
}
```


### Changes

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/changes?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance    | string | TFS server name ({server:port}).
| project     | string | [Project](../tfs/projects.md) ID or name.
| buildId     | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top        | int    | Maximum number of changes to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/changes?api-version=2.0
```

#### Sample response

```json
{
  "count": 8,
  "value": [
    {
      "id": "b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
      "message": "Updated Web.config again, fixing #3",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com"
      },
      "timestamp": "2015-06-23T18:25:15Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5"
    },
    {
      "id": "9b03b366e298b9c554ee3cbcca1b5293bd6ce68f",
      "message": "Fix typo in readme and build file",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Norman Paulk",
        "uniqueName": "Fabrikamfiber16@hotmail.com"
      },
      "timestamp": "2014-11-05T21:01:16Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/9b03b366e298b9c554ee3cbcca1b5293bd6ce68f"
    },
    {
      "id": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "message": "Better description for hello world",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Norman Paulk",
        "uniqueName": "Fabrikamfiber16@hotmail.com"
      },
      "timestamp": "2014-06-30T18:10:55Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/23d0bc5b128a10056dc68afece360d8a0fabb014"
    },
    {
      "id": "fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "message": "Better description for hello world",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Norman Paulk",
        "uniqueName": "Fabrikamfiber16@hotmail.com"
      },
      "timestamp": "2014-06-30T17:51:09Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f"
    },
    {
      "id": "0360c963d7d86d040e9c33bba836feab14da4ad3",
      "message": "Fix for hello world class",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Norman Paulk",
        "uniqueName": "Fabrikamfiber16@hotmail.com"
      },
      "timestamp": "2014-06-10T19:42:13Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/0360c963d7d86d040e9c33bba836feab14da4ad3"
    },
    {
      "id": "097d82b8aeabe493bf4c3553d320ae2529bba591",
      "message": "fix registration page",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com"
      },
      "timestamp": "2014-06-09T21:43:25Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/097d82b8aeabe493bf4c3553d320ae2529bba591"
    },
    {
      "id": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "message": "Add Hello World to TFS",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com"
      },
      "timestamp": "2014-02-10T21:52:47Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03b1b831e41df536d836c95e2f68a42db4f3e0db"
    },
    {
      "id": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "message": "First cut",
      "type": "TfsGit",
      "author": {
        "id": null,
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com"
      },
      "timestamp": "2014-01-29T23:32:09Z",
      "location": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### Work items

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/workitems?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance    | string | TFS server name ({server:port}).
| project     | string | [Project](../tfs/projects.md) ID or name.
| buildId     | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top        | int    | Maximum number of work items to return.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/workitems?api-version=2.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "3",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/3"
    },
    {
      "id": "33",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/33"
    }
  ]
}
```


### Logs

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/logs
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
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/logs?api-version=2.0
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "lineCount": 3,
      "createdOn": "2015-07-16T19:53:19.747Z",
      "lastChangedOn": "2015-07-16T19:53:19.92Z",
      "id": 1,
      "type": "Container",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/1"
    },
    {
      "lineCount": 113,
      "createdOn": "2015-07-16T19:53:29.387Z",
      "lastChangedOn": "2015-07-16T19:53:29.44Z",
      "id": 2,
      "type": "Container",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/2"
    },
    {
      "lineCount": 37,
      "createdOn": "2015-07-16T19:54:41.06Z",
      "lastChangedOn": "2015-07-16T19:54:41.113Z",
      "id": 3,
      "type": "Container",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/3"
    },
    {
      "lineCount": 187,
      "createdOn": "2015-07-16T19:54:41.33Z",
      "lastChangedOn": "2015-07-16T19:54:41.383Z",
      "id": 4,
      "type": "Container",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/logs/4"
    }
  ]
}
```


## Get build artifacts

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/artifacts
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
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/artifacts?api-version=2.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 9,
      "name": "drop",
      "resource": {
        "type": "Container",
        "data": "#/303511/drop",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/artifacts/drop",
        "downloadUrl": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/391/artifacts/drop?%24format=zip"
      }
    }
  ]
}
```


## Add a tag to a build
<a name="addatagtoabuild" />

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/tags/{tag}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| tag       | string | The tag to add to the build.

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/tags/myTag?api-version=2.0
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    "myTag",
    "tag1",
    "tag2",
    "tag3"
  ]
}
```


## Get tags for a build
<a name="gettagsforabuild" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/tags?api-version={version}
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
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/tags?api-version=2.0
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    "myTag",
    "tag1",
    "tag2",
    "tag3"
  ]
}
```


## Remove a tag from a build

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/tags/{tag}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| tag       | string | The tag to remove from the build.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/391/tags/myTag?api-version=2.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    "tag1",
    "tag2",
    "tag3"
  ]
}
```


## Update a build

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| keepForever | boolean | Whether to exclude the build from retention policies.
| buildNumber | string  | The build number.
| startTime   | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) | The start time. This can only be set once.
| finishTime  | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) | The finish time. This can only be set once.
| status      | enum { inProgress, completed, cancelling, postponed, notStarted, all } | The build status. Once this is "completed", it can no longer be changed.
| sourceVersion | string | The source version.
| result      | enum { succeeded, partiallySucceeded, failed, canceled } | The build result.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/393?api-version=2.0
```
```json
{
  "keepForever": true
}
```

#### Sample response

```json
{
  "properties": {},
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/393"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&buildId=393"
    },
    "timeline": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/393/Timeline"
    }
  },
  "id": 393,
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Builds/393",
  "definition": {
    "type": "build",
    "revision": 10,
    "id": 25,
    "name": "VsoBuildApi",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/25",
    "project": {
      "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "name": "Fabrikam-Fiber-Git",
      "description": "Git projects",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "state": "wellFormed",
      "revision": 3432824
    }
  },
  "buildNumber": "20150716.4",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "description": "Git projects",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 3432824
  },
  "uri": "vstfs:///Build/Build/393",
  "sourceBranch": "refs/heads/master",
  "sourceVersion": "b13b8f7261ec6a4ebfa4d98aa63bf164f4be64c5",
  "status": "inProgress",
  "queue": {
    "pool": null,
    "id": 2,
    "name": "Hosted"
  },
  "queueTime": "2015-07-16T20:01:18.513Z",
  "priority": "normal",
  "startTime": "2015-07-16T20:01:20.1510463Z",
  "reason": "manual",
  "requestedFor": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "requestedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "lastChangedDate": "2015-07-16T20:01:24.147Z",
  "lastChangedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "orchestrationPlan": {
    "planId": "a4bcc2d3-3125-4fc1-be82-216e60c56111"
  },
  "logs": {
    "id": 0,
    "type": "Container",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/builds/393/logs"
  },
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "clean": null,
    "checkoutSubmodules": false
  },
  "keepForever": true
}
```



## Delete a build

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={version}
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
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/builds/393?api-version=2.0
```

