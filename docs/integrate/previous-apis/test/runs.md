---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Runs | REST API Reference for Team Foundation Server
description: Work with test runs programmatically using the REST APIs for Team Foundation Server.
ms.assetid: D2ABEFCD-11BE-4155-BA82-3B39A9593505
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test runs

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test runs
<a name="getalistoftestruns" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs?api-version={version}[&buildUri={string}&owner={string}&planId={int}&automated={bool}&includerundetails={bool}&$skip={int}&$top={int}
```

| Parameter         | Type   | Default | Notes
|:------------------|:-------|:--------|:------------------------
| URL
| instance          | string |         | TFS server name ({server:port}).
| project           | string |         | Name or ID of the project.
| Query
| api-version       | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| buildUri          | string |         | URI of the build that the runs used.
| owner             | string |         | Team foundation ID of the owner of the runs.
| planId            | int    |         | ID of the test plan that the runs are a part of.
| automated         | bool   |         | If true, only returns automated runs.
| includeRunDetails | bool   | false   | If true, include all the properties of the runs.
| $skip             | int    |         | Number of test runs to skip.
| $top              | int    |         | Number of test runs to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "NewTestRun2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T12:50:33.17Z",
      "completedDate": "2014-05-04T12:50:31.953Z",
      "state": "Completed",
      "plan": {
        "id": "1"
      },
      "revision": 4
    },
    {
      "id": 2,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/2",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T12:58:36.907Z",
      "completedDate": "2014-05-04T12:58:36.47Z",
      "state": "Completed",
      "plan": {
        "id": "1"
      },
      "revision": 3
    },
    {
      "id": 4,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T13:00:37.447Z",
      "completedDate": "2014-05-04T13:01:02.943Z",
      "state": "NeedsInvestigation",
      "plan": {
        "id": "1"
      },
      "revision": 3
    },
    {
      "id": 6,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/6",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T14:00:56.807Z",
      "completedDate": "2014-05-04T14:00:57.15Z",
      "state": "Completed",
      "plan": {
        "id": "1"
      },
      "revision": 3
    }
  ],
  "count": 4
}
```


### With details

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?includeRunDetails=true&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "NewTestRun2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2014-05-04T12:50:33.17Z",
      "completedDate": "2014-05-04T12:50:31.953Z",
      "state": "Completed",
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "postProcessState": "Complete",
      "totalTests": 1,
      "passedTests": 1,
      "createdDate": "2014-05-04T12:50:31.38Z",
      "lastUpdatedDate": "2014-05-04T13:03:16.38Z",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 4,
      "comment": "This test run is doomed"
    },
    {
      "id": 2,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/2",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2014-05-04T12:58:36.907Z",
      "completedDate": "2014-05-04T12:58:36.47Z",
      "state": "Completed",
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "postProcessState": "Complete",
      "totalTests": 1,
      "passedTests": 1,
      "createdDate": "2014-05-04T12:58:36.413Z",
      "lastUpdatedDate": "2014-05-04T12:58:36.47Z",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 3
    },
    {
      "id": 4,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2014-05-04T13:00:37.447Z",
      "completedDate": "2014-05-04T13:01:02.943Z",
      "state": "NeedsInvestigation",
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "postProcessState": "Complete",
      "totalTests": 2,
      "passedTests": 1,
      "unanalyzedTests": 1,
      "createdDate": "2014-05-04T13:00:37.173Z",
      "lastUpdatedDate": "2014-05-04T13:01:02.943Z",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 3
    },
    {
      "id": 6,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/6",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2014-05-04T14:00:56.807Z",
      "completedDate": "2014-05-04T14:00:57.15Z",
      "state": "Completed",
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "postProcessState": "Complete",
      "totalTests": 1,
      "passedTests": 1,
      "createdDate": "2014-05-04T14:00:56.863Z",
      "lastUpdatedDate": "2014-05-04T14:00:57.15Z",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 3
    }
  ],
  "count": 4
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?top=3&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "NewTestRun2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T12:50:33.17Z",
      "completedDate": "2014-05-04T12:50:31.953Z",
      "state": "Completed",
      "plan": {
        "id": "1"
      },
      "revision": 4
    },
    {
      "id": 2,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/2",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T12:58:36.907Z",
      "completedDate": "2014-05-04T12:58:36.47Z",
      "state": "Completed",
      "plan": {
        "id": "1"
      },
      "revision": 3
    },
    {
      "id": 4,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T13:00:37.447Z",
      "completedDate": "2014-05-04T13:01:02.943Z",
      "state": "NeedsInvestigation",
      "plan": {
        "id": "1"
      },
      "revision": 3
    },
    {
      "id": 6,
      "name": "sprint1 (Manual)",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/6",
      "isAutomated": false,
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "startedDate": "2014-05-04T14:00:56.807Z",
      "completedDate": "2014-05-04T14:00:57.15Z",
      "state": "Completed",
      "plan": {
        "id": "1"
      },
      "revision": 3
    }
  ],
  "count": 4
}
```


## Get test runs by query (deprecated)
> This API is deprecated as of [!INCLUDE [API_version](../_data/version3-preview.md)].

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs/query?api-version={version}[&includeRunDetails={bool}&$skip={int}&$top={int}]
```

```http
Content-Type: application/json
```

```json
{
  "query": { string }
}
```

| Parameter         | Type   | Default | Notes
|:------------------|:-------|:--------|:------------------------
| URL
| instance          | string |         | TFS server name ({server:port}).
| project           | string |         | Name or ID of the project.
| Query
| api-version       | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeRunDetails | bool   | false   | If true, include all the properties of the runs.
| $skip             | int    |         | Number of test runs to skip.
| $top              | int    |         | Number of test runs to return.
| Body
| query             | string |         | Query string


#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/query?$top=2&api-version=2.0-preview
```
```json
{
  "query": "Select * From TestRun"
}
```

#### Sample response

```json
{
  "value": [
    {
      "id": 40,
      "name": "MSDN BVT Run 1",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/40",
      "isAutomated": false,
      "iteration": "Fabrikam",
      "owner": {
        "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
        "displayName": "fabrikam fiber"
      },
      "project": {
        "id": "8e5a3cfb-fed3-46f3-8657-e3b175cd0305",
        "name": "Fabrikam",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam"
      },
      "startedDate": "2015-06-08T12:28:51.153Z",
      "state": "InProgress",
      "revision": 2,
      "runStatistics": [],
      "webAccessUrl": "https://mytfsserver/DefaultCollection/Fabrikam/_TestManagement/Runs#runId=40&_a=runCharts"
    },
    {
      "id": 41,
      "name": "NewTestRun with message logs",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/41",
      "isAutomated": true,
      "iteration": "Fabrikam",
      "owner": {
        "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
        "displayName": "fabrikam fiber"
      },
      "project": {
        "id": "8e5a3cfb-fed3-46f3-8657-e3b175cd0305",
        "name": "Fabrikam",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam"
      },
      "startedDate": "2015-06-09T01:24:23.687Z",
      "completedDate": "2015-06-09T01:24:24.253Z",
      "state": "Completed",
      "revision": 4,
      "runStatistics": [],
      "webAccessUrl": "https://mytfsserver/DefaultCollection/Fabrikam/_TestManagement/Runs#runId=41&_a=runCharts"
    }
  ],
  "count": 2
}
```


## Get a test run

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}?api-version={version}
```

| Parameter         | Type   | Notes
|:------------------|:-------|:------------------------
| URL
| instance          | string | TFS server name ({server:port}).
| project           | string | Name or ID of the project.
| run               | int    | ID of the run to get.
| Query
| api-version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/1?api-version=1.0
```

#### Sample response

```json
{
  "id": 1,
  "name": "sprint1 (Manual)",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-04T12:50:33.17Z",
  "completedDate": "2014-05-04T12:50:31.953Z",
  "state": "Completed",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "totalTests": 1,
  "passedTests": 1,
  "createdDate": "2014-05-04T12:50:31.38Z",
  "lastUpdatedDate": "2014-05-04T12:50:31.953Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 3
}
```


## Get test run statistics
<a name="gettestrunstatistic" />
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/statistics?api-version={version}
```

| Parameter         | Type   | Notes
|:------------------|:-------|:------------------------
| URL
| instance          | string | TFS server name ({server:port}).
| project           | string | Name or ID of the project.
| run               | int    | ID of the run to get.
| Query
| api-version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/1/statistics?api-version=1.0
```

#### Sample response

```json
{
  "run": {
    "id": "1",
    "name": "sprint1 (Manual)",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1"
  },
  "runStatistics": [
    {
      "state": "Completed",
      "outcome": "Passed",
      "count": 1
    }
  ]
}
```


## Get test run message logs

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/messageLogs?api-version={version}
```

| Parameter         | Type   | Notes
|:------------------|:-------|:------------------------
| URL
| instance          | string | TFS server name ({server:port}).
| project           | string | Name or ID of the project.
| run               | int    | ID of the run to get.
| Query
| api-version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/41/messageLogs?api-version=2.0-preview
```

#### Sample response

```json
{
  "value": [
    {
      "entryId": 1,
      "dateCreated": "2015-05-17T05:00:00Z",
      "message": "Test run started"
    },
    {
      "entryId": 2,
      "dateCreated": "2015-05-17T05:01:00Z",
      "message": "Test run completed"
    }
  ],
  "count": 2
}
```


## Create new test run

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": { string },
  "plan": {
    "id": { int }
  },
  "iteration": { string } ,
  "build": {
	"id": { int }
  },
  "state": {
	enum { NotStarted, InProgress, Waiting }
  },
  "dueDate": { DateTime },
  "pointIds": [
    { int }
  ],
  "isAutomated": { bool },
  "controller": { string},
  "errorMessage": { string },
  "comment": { string },
  "testSettings": {
     "id": { int }
  },
  "testEnvironmentId": { Guid },
  "startedDate": { DateTime },
  "completedDate": { DateTime },
  "owner": {
     "displayName": { string }
  },  
  "buildDropLocation": { string },
  "buildPlatform": { string },
  "buildFlavor": { string },
  "configIds": [
     { int }
  ],
  "releaseUri": { string },
  "releaseEnvironmentUri": { string }
}
```

| Parameter                           | Type     | Default                            | Notes
|:------------------------------------|:---------|:-----------------------------------|:------------------------
| URL
| instance                            | string   |                                    | TFS server name ({server:port}).
| project                             | string   |                                    | Name or ID of the project.
| Query
| api-version                         | string   |                                    | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name                                | string   |		                              | Name of the test run.
| plan.id                             | int      |                                    | ID of the test plan to contain the run.
| iteration                           | string   | Root iteration of the project | The iteration in which to create the run.
| build.id                            | int      |                                    | ID the build to use.
| state                               | enum { NotStarted, InProgress, Waiting } | NotStarted | The state to place the run in when it's created.
| dueDate                             | DateTime |                                    | Due date and time for test run.
| comment                             | string   |                                    | Comments entered by those analyzing the run.
| pointIds                            | int[]    |                                    | IDs of the test points to use in the run.
| isAutomated                         | bool     | false                              | true if test run is automated, false otherwise.
| controller                          | string   |                                    | Name of the test controller used for automated run.
| errorMessage                        | string   |                                    | Error message associated with the run.
| testSettings.Id                     | int      |                                    | ID of the test settings associated with the run.
| testEnvironmentId                   | Guid     |                                    | ID of the test environment associated with the run.
| startedDate                         | DateTime |                                    | Start date time of the run.
| completedDate                       | DateTime |                                    | Completed date time of the run.
| owner.displayName                   | string   |                                    | Display name of the owner of the run.
| buildDropLocation                   | string   |                                    | Drop location of the build used for test run.
| buildPlatform                       | string   |                                    | Platform of the build used for test run. (E.g.: x86, amd64)
| buildFlavor                         | string   |                                    | Flavor of the build used for test run. (E.g: Release, Debug)
| configIds                           | int[]    |                                    | IDs of the test configurations associated with the run.
| releaseUri                          | string   |                                    | URI of release associated with the run.
| releaseEnvironmentUri               | string   |                                    | URI of release environment associated with the run.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?api-version=1.0
```
```json
{
  "name": "NewTestRun",
  "plan": {
    "id": "1"
  },
  "pointIds": [
    1
  ]
}
```

#### Sample response

```json
{
  "id": 5,
  "name": "NewTestRun",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/5",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-04T13:03:12.8Z",
  "state": "InProgress",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "totalTests": 2,
  "incompleteTests": 2,
  "createdDate": "2014-05-04T13:03:12.67Z",
  "lastUpdatedDate": "2014-05-04T13:03:12.8Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 2
}
```


### In an iteration

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?api-version=1.0
```
```json
{
  "name": "NewTestRun",
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "plan": {
    "id": "1"
  },
  "pointIds": [
    1
  ]
}
```

#### Sample response

```json
{
  "id": 11,
  "name": "NewTestRun",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/11",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-06T15:54:40.2Z",
  "state": "InProgress",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "totalTests": 10,
  "incompleteTests": 10,
  "createdDate": "2014-05-06T15:54:40.047Z",
  "lastUpdatedDate": "2014-05-06T15:54:40.2Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 2
}
```


### With a specific state

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?api-version=1.0
```
```json
{
  "name": "NewRun",
  "state": "Waiting",
  "plan": {
    "id": "1"
  },
  "pointIds": [
    1
  ]
}
```

#### Sample response

```json
{
  "id": 9,
  "name": "NewRun",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/9",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-06T15:54:32.83Z",
  "state": "Waiting",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "totalTests": 6,
  "incompleteTests": 6,
  "createdDate": "2014-05-06T15:54:32.697Z",
  "lastUpdatedDate": "2014-05-06T15:54:32.83Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 2
}
```


### With a due date

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?api-version=1.0
```
```json
{
  "name": "NewRun",
  "dueDate": "2014-05-07",
  "plan": {
    "id": "1"
  },
  "pointIds": [
    1
  ]
}
```

#### Sample response

```json
{
  "id": 10,
  "name": "NewRun",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/10",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-06T15:54:36.067Z",
  "state": "InProgress",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "dueDate": "2014-05-07T00:00:00Z",
  "totalTests": 8,
  "incompleteTests": 8,
  "createdDate": "2014-05-06T15:54:35.83Z",
  "lastUpdatedDate": "2014-05-06T15:54:36.067Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 2
}
```


### With a comment

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs?api-version=1.0
```
```json
{
  "name": "NewRun",
  "comment": "This should be a good run",
  "plan": {
    "id": "1"
  },
  "pointIds": [
    1
  ]
}
```

#### Sample response

```json
{
  "id": 8,
  "name": "NewRun",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/8",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-06T15:54:30.027Z",
  "state": "InProgress",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "totalTests": 4,
  "incompleteTests": 4,
  "createdDate": "2014-05-06T15:54:29.887Z",
  "lastUpdatedDate": "2014-05-06T15:54:30.027Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 2,
  "comment": "This should be a good run"
}
```


## Update test run

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": { string },  
  "iteration": { string } ,
  "build": {
	"id": { int }
  },
  "state": {
	enum { NotStarted, InProgress, Completed, Aborted, Waiting }
  },
  "dueDate": { DateTime },
  "controller": { string},
  "errorMessage": { string },
  "comment": { string },
  "testSettings": {
     "id": { int }
  },
  "testEnvironmentId": { Guid },
  "startedDate": { DateTime },
  "completedDate": { DateTime },   
  "deleteUnexecutedResults": { bool },  
  "logEntries": [
      { "entryId": { int },   "dateCreated":  { DateTime }, "message": { string } }
  ]
}
```

| Parameter                           | Type     | Notes
|:------------------------------------|:---------|:------------------------
| URL
| instance                            | string   | TFS server name ({server:port}).
| project                             | string   | Name or ID of the project.
| run                                 | int      | ID of the run to update.
| Query
| api-version                         | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name                                | string   | Name of the test run.
| iteration                           | string   | The iteration in which to create the run.
| build.id                            | int      | ID the build to use.
| state                               | enum { NotStarted, InProgress, Completed, Aborted, Waiting } | The state to place the run in when it's updated.
| dueDate                             | DateTime | Due date and time for test run.
| controller                          | string   | Name of the test controller used for automated run.
| errorMessage                        | string   | Error message associated with the run.
| comment                             | string   | Comments entered by those analyzing the run.
| testSettings.Id                     | int      | ID of the test settings associated with the run.
| testEnvironmentId                   | Guid     | ID of the test environment associated with the run.
| startedDate                         | DateTime | Start date time of the run.
| completedDate                       | DateTime | Completed date time of the run.
| deleteUnexecutedResults             | bool     | Delete the results for test cases that were not executed.
| logEntries                          | { logEntry }, { logEntry }, ... | Log entries associated with the run.<br/>Use a comma-separated list of multiple log entry objects.


### Rename

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/1?api-version=1.0
```
```json
{
  "name": "NewTestRun2",
  "comment": "This test run is doomed"
}
```

#### Sample response

```json
{
  "id": 1,
  "name": "NewTestRun2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-04T12:50:33.17Z",
  "completedDate": "2014-05-04T12:50:31.953Z",
  "state": "Completed",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "totalTests": 1,
  "passedTests": 1,
  "createdDate": "2014-05-04T12:50:31.38Z",
  "lastUpdatedDate": "2014-05-04T13:03:16.38Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 4,
  "comment": "This test run is doomed"
}
```


### Due date

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/1?api-version=1.0
```
```json
{
  "dueDate": "2014-05-07"
}
```

#### Sample response

```json
{
  "id": 1,
  "name": "NewTestRun2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-04T12:50:33.17Z",
  "completedDate": "2014-05-04T12:50:31.953Z",
  "state": "Completed",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "dueDate": "2014-05-07T00:00:00Z",
  "totalTests": 1,
  "passedTests": 1,
  "createdDate": "2014-05-04T12:50:31.38Z",
  "lastUpdatedDate": "2014-05-06T15:54:46.697Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 6,
  "comment": "This test run is doomed"
}
```


### Start time

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/1?api-version=1.0
```
```json
{
  "startedDate": "2014-05-05"
}
```

#### Sample response

```json
{
  "id": 1,
  "name": "NewTestRun2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-05T00:00:00Z",
  "completedDate": "2014-05-04T12:50:31.953Z",
  "state": "Completed",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "dueDate": "2014-05-07T00:00:00Z",
  "totalTests": 1,
  "passedTests": 1,
  "createdDate": "2014-05-04T12:50:31.38Z",
  "lastUpdatedDate": "2014-05-06T15:54:50.353Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 7,
  "comment": "This test run is doomed"
}
```


### Completed time

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/1?api-version=1.0
```
```json
{
  "completedDate": "2014-05-10"
}
```

#### Sample response

```json
{
  "id": 1,
  "name": "NewTestRun2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-05T00:00:00Z",
  "completedDate": "2014-05-10T00:00:00Z",
  "state": "Completed",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "dueDate": "2014-05-07T00:00:00Z",
  "totalTests": 1,
  "passedTests": 1,
  "createdDate": "2014-05-04T12:50:31.38Z",
  "lastUpdatedDate": "2014-05-06T15:54:53.16Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 8,
  "comment": "This test run is doomed"
}
```


### Comment

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/1?api-version=1.0
```
```json
{
  "comment": "This test run is doomed"
}
```

#### Sample response

```json
{
  "id": 1,
  "name": "NewTestRun2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/1",
  "isAutomated": false,
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-05T00:00:00Z",
  "completedDate": "2014-05-10T00:00:00Z",
  "state": "Completed",
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "postProcessState": "Complete",
  "dueDate": "2014-05-07T00:00:00Z",
  "totalTests": 1,
  "passedTests": 1,
  "createdDate": "2014-05-04T12:50:31.38Z",
  "lastUpdatedDate": "2014-05-06T15:54:56.327Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 9,
  "comment": "This test run is doomed"
}
```


### Log entries

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/41?api-version=2.0-preview
```
```json
{
  "logEntries": [
    {
      "entryId": 1,
      "dateCreated": "2015-05-17 05:00:00",
      "message": "Test run started"
    },
    {
      "entryId": 2,
      "dateCreated": "2015-05-17 05:01:00",
      "message": "Test run completed"
    }
  ],
  "state": "Completed"
}
```

#### Sample response

```json
{
  "id": 41,
  "name": "NewTestRun with message logs",
  "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/41",
  "isAutomated": true,
  "iteration": "Fabrikam",
  "owner": {
    "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
    "displayName": "fabrikam fiber",
    "uniqueName": "fabrikamfiber.vsin@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/9a4515d2-a474-4175-8f7c-f72df24197eb",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=9a4515d2-a474-4175-8f7c-f72df24197eb"
  },
  "project": {
    "id": "8e5a3cfb-fed3-46f3-8657-e3b175cd0305",
    "name": "Fabrikam",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam"
  },
  "startedDate": "2015-06-09T01:24:23.687Z",
  "completedDate": "2015-06-09T01:24:24.253Z",
  "state": "Completed",
  "postProcessState": "Complete",
  "createdDate": "2015-06-09T01:24:23.683Z",
  "lastUpdatedDate": "2015-06-09T01:24:24.253Z",
  "lastUpdatedBy": {
    "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
    "displayName": "fabrikam fiber",
    "uniqueName": "fabrikamfiber.vsin@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/9a4515d2-a474-4175-8f7c-f72df24197eb",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=9a4515d2-a474-4175-8f7c-f72df24197eb"
  },
  "revision": 4,
  "testMessageLogId": 1,
  "runStatistics": [],
  "webAccessUrl": "https://mytfsserver/DefaultCollection/Fabrikam/_TestManagement/Runs#runId=41&_a=runCharts"
}
```


## Delete a test run

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}?api-version={version}
```

| Parameter               | Type     | Notes
|:------------------------|:---------|:------------------------
| URL
| instance                | string   | TFS server name ({server:port}).
| project                 | string   | Name or ID of the project.
| run                     | int      | ID of the run to update
| Query
| api-version             | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/5?api-version=1.0
```


