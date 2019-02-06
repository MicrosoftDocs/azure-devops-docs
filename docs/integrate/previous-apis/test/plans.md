---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Plans | REST API Reference for Team Foundation Server
description: Work with test plans programmatically using the REST APIs for Team Foundation Server.
ms.assetid: B07716A0-0420-49F8-95B9-880105FADDA3
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test plans

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test plans

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans?api-version={version}[&owner={string}&includePlanDetails={bool}&filterActivePlans={bool}&$skip={int}&$top={int}]
```

| Parameter          | Type    | Default | Notes
|:-------------------|:--------|:--------|:---------------------
| URL
| instance           | string  |         | TFS server name ({server:port}).
| project            | string  |         | Name or ID of the project.
| Query
| api-version        | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| owner              | string  |         | Filter for test plan by owner ID or name.
| includePlanDetails | bool    | false   | Get all properties of the test plan.
| filterActivePlans  | bool    | false   | Get just the active plans.
| $skip				 | int     |         | Number of test plans to skip.
| $top               | int     |         | Number of test plans to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "sprint1",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "1"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=1"
    },
    {
      "id": 2,
      "name": "sprint2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/2",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "2"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=2"
    },
    {
      "id": 3,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/3",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Inactive",
      "rootSuite": {
        "id": "3"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=3"
    },
    {
      "id": 4,
      "name": "sprint3",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/4",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "21"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=4"
    },
    {
      "id": 5,
      "name": "sprint4",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "22"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=5"
    },
    {
      "id": 6,
      "name": "sprint5",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/6",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "23"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=6"
    },
    {
      "id": 7,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/7",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "24"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=7"
    },
    {
      "id": 8,
      "name": "newCreatedPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/8",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "25"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=8"
    },
    {
      "id": 9,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/9",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Inactive",
      "rootSuite": {
        "id": "26"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=9"
    },
    {
      "id": 10,
      "name": "newCreatedPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/10",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "27"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=10"
    },
    {
      "id": 11,
      "name": "ANewPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/11",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "411",
        "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1",
      "state": "Active",
      "rootSuite": {
        "id": "28"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=11"
    },
    {
      "id": 12,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/12",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Inactive",
      "rootSuite": {
        "id": "29"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=12"
    },
    {
      "id": 13,
      "name": "newCreatedPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/13",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "30"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=13"
    },
    {
      "id": 14,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/14",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Inactive",
      "rootSuite": {
        "id": "31"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=14"
    },
    {
      "id": 15,
      "name": "newCreatedPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/15",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "32"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=15"
    },
    {
      "id": 16,
      "name": "ANewPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/16",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "411",
        "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1",
      "state": "Active",
      "rootSuite": {
        "id": "33"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=16"
    },
    {
      "id": 17,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "411",
        "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1",
      "state": "Inactive",
      "rootSuite": {
        "id": "34"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=17"
    }
  ],
  "count": 17
}
```


### With details

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?includePlanDetails=true&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 60,
      "name": "sprint1",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/60",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "description": "",
      "startDate": "2014-05-04T16:21:36.253Z",
      "endDate": "2014-05-11T16:21:36.253Z",
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "updatedDate": "2014-05-04T10:51:37.127Z",
      "updatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 5,
      "state": "Active",
      "rootSuite": {
        "id": "61",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/60/Suites/61"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=60"
    },
    {
      "id": 68,
      "name": "sprint2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/68",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "description": "",
      "startDate": "2014-05-04T16:21:47.337Z",
      "endDate": "2014-05-11T16:21:47.337Z",
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "updatedDate": "2014-05-04T10:51:47.887Z",
      "updatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 6,
      "state": "Active",
      "rootSuite": {
        "id": "69",
        "name": "sprint2",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/68/Suites/69"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=68"
    },
    {
      "id": 72,
      "name": "sprint3",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/72",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "description": "",
      "startDate": "2014-05-06T18:41:46.133Z",
      "endDate": "2014-05-13T18:41:46.133Z",
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "updatedDate": "2014-05-06T13:11:46.723Z",
      "updatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 8,
      "state": "Active",
      "rootSuite": {
        "id": "73",
        "name": "sprint3",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/72/Suites/73"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=72"
    },
    {
      "id": 74,
      "name": "sprint4",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/74",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "description": "",
      "startDate": "2014-05-06T18:41:55.927Z",
      "endDate": "2014-05-13T18:41:55.927Z",
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "updatedDate": "2014-05-06T13:11:56.327Z",
      "updatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 9,
      "state": "Active",
      "rootSuite": {
        "id": "75",
        "name": "sprint4",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/74/Suites/75"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=74"
    },
    {
      "id": 76,
      "name": "sprint5",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/76",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "description": "",
      "startDate": "2014-05-06T18:42:04.77Z",
      "endDate": "2014-05-13T18:42:04.77Z",
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "updatedDate": "2014-05-06T13:12:05.027Z",
      "updatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 10,
      "state": "Active",
      "rootSuite": {
        "id": "77",
        "name": "sprint5",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/76/Suites/77"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=76"
    }
  ],
  "count": 5
}
```


### Just active plans

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?filterActivePlans=true&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "sprint1",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "1"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=1"
    },
    {
      "id": 2,
      "name": "sprint2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/2",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "2"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=2"
    },
    {
      "id": 4,
      "name": "sprint3",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/4",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "21"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=4"
    },
    {
      "id": 5,
      "name": "sprint4",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "22"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=5"
    },
    {
      "id": 6,
      "name": "sprint5",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/6",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "23"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=6"
    },
    {
      "id": 7,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/7",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "24"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=7"
    },
    {
      "id": 8,
      "name": "newCreatedPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/8",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "25"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=8"
    },
    {
      "id": 10,
      "name": "newCreatedPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/10",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "27"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=10"
    },
    {
      "id": 11,
      "name": "ANewPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/11",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "411",
        "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1",
      "state": "Active",
      "rootSuite": {
        "id": "28"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=11"
    },
    {
      "id": 13,
      "name": "newCreatedPlan",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/13",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Active",
      "rootSuite": {
        "id": "30"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=13"
    }
  ],
  "count": 10
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?$top=3&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "sprint1",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "1"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=1"
    },
    {
      "id": 2,
      "name": "sprint2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/2",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
      "state": "Active",
      "rootSuite": {
        "id": "2"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=2"
    },
    {
      "id": 3,
      "name": "newCreatedPlan2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/3",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "area": {
        "id": "343",
        "name": "Fabrikam-Fiber-TFVC"
      },
      "iteration": "Fabrikam-Fiber-TFVC",
      "state": "Inactive",
      "rootSuite": {
        "id": "3"
      },
      "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=3"
    }
  ],
  "count": 3
}
```


## Get a test plan

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| plan               | int     | ID of the test plan to get.
| Query
| api-version        | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1?api-version=1.0
```

#### Sample response

```json
{
  "id": 1,
  "name": "sprint1",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "343",
    "name": "Fabrikam-Fiber-TFVC"
  },
  "description": "",
  "startDate": "2014-05-04T16:21:36.253Z",
  "endDate": "2014-05-11T16:21:36.253Z",
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1\\Sprint 1",
  "updatedDate": "2014-05-04T10:51:37.127Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 1,
  "state": "Active",
  "rootSuite": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=1"
}
```


## Create a testplan
<a name="createatestplan" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/plans?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "area": {"name" : string},
  "iteration": {string},
  "startDate": {DateTime},
  "endDate": {DateTime}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| Query
| api-version | string   |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string   |                             | Name of the new test plan.
| description | string   |                             | Description of the new test plan.
| area.name   | string   | Project root area      | Name of the area in which to create the test plan.
| iteration   | string   | Project root iteration | Name of the iteration in which to create the test plan.
| startDate   | DateTime | Current date                | Start date for test plan.
| endDate     | DateTime | Start date + 7 days         | End date for test plan.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?api-version=1.0
```
```json
{
  "name": "newCreatedPlan"
}
```

#### Sample response

```json
{
  "id": 3,
  "name": "newCreatedPlan",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/3",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "343",
    "name": "Fabrikam-Fiber-TFVC"
  },
  "startDate": "2014-05-04T10:55:31.981081Z",
  "endDate": "2014-05-11T10:55:31.981081Z",
  "iteration": "Fabrikam-Fiber-TFVC",
  "updatedDate": "2014-05-04T10:55:30.33Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 1,
  "state": "Active",
  "rootSuite": {
    "id": "3",
    "name": "newCreatedPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/3/Suites/3"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=3"
}
```


### With a description

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?api-version=1.0
```
```json
{
  "name": "newCreatedPlan",
  "description": "This is a new test plan"
}
```

#### Sample response

```json
{
  "id": 15,
  "name": "newCreatedPlan",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/15",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "343",
    "name": "Fabrikam-Fiber-TFVC"
  },
  "description": "This is a new test plan",
  "startDate": "2014-05-06T13:42:59.3008007Z",
  "endDate": "2014-05-13T13:42:59.3008007Z",
  "iteration": "Fabrikam-Fiber-TFVC",
  "updatedDate": "2014-05-06T13:42:58.71Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 1,
  "state": "Active",
  "rootSuite": {
    "id": "32",
    "name": "newCreatedPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/15/Suites/32"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=15"
}
```


### In an area and iteration
#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?api-version=1.0
```
```json
{
  "name": "ANewPlan",
  "area": {
    "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
  },
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1"
}
```

#### Sample response

```json
{
  "id": 16,
  "name": "ANewPlan",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/16",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "411",
    "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
  },
  "startDate": "2014-05-06T13:43:02.803578Z",
  "endDate": "2014-05-13T13:43:02.803578Z",
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1",
  "updatedDate": "2014-05-06T13:43:02.187Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 1,
  "state": "Active",
  "rootSuite": {
    "id": "33",
    "name": "ANewPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/16/Suites/33"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=16"
}
```


### To start on a date and finish on a date
#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans?api-version=1.0
```
```json
{
  "name": "ANewPlan",
  "startDate": "2014-05-01",
  "endDate": "2014-05-10"
}
```

#### Sample response

```json
{
  "id": 17,
  "name": "ANewPlan",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "343",
    "name": "Fabrikam-Fiber-TFVC"
  },
  "startDate": "2014-05-01T00:00:00Z",
  "endDate": "2014-05-10T00:00:00Z",
  "iteration": "Fabrikam-Fiber-TFVC",
  "updatedDate": "2014-05-06T13:43:04.743Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 1,
  "state": "Active",
  "rootSuite": {
    "id": "34",
    "name": "ANewPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17/Suites/34"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=17"
}
```


## Update a testplan

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "area": {"name" : string},
  "iteration": {string},
  "startDate": {DateTime},
  "endDate": {DateTime},
  "build": {int},
  "state": {
	enum { Active, Inactive }
	}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| Query
| api-version | string   |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string   |                             | Name of the new test plan.
| description | string   |                             | Description of the new test plan.
| area.name   | string   | Project root area      | Name of the area in which to create the test plan.
| iteration   | string   | Project root iteration | Name of the iteration in which to create the test plan.
| startDate   | DateTime | Current date                | Start date for test plan.
| endDate     | DateTime | Start date + 7 days         | End date for test plan.
| build       | int      |                             | ID of the build to test.
| state       | enum { Active, Inactive } |            | State of the test plan.

### Name

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/3?api-version=1.0
```
```json
{
  "name": "newCreatedPlan2"
}
```

#### Sample response

```json
{
  "id": 3,
  "name": "newCreatedPlan2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/3",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "343",
    "name": "Fabrikam-Fiber-TFVC"
  },
  "description": "",
  "startDate": "2014-05-04T10:55:31.98Z",
  "endDate": "2014-05-11T10:55:31.98Z",
  "iteration": "Fabrikam-Fiber-TFVC",
  "updatedDate": "2014-05-04T10:55:33.653Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 2,
  "state": "Active",
  "rootSuite": {
    "id": "3",
    "name": "newCreatedPlan2",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/3/Suites/3"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=3"
}
```


### Description

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/17?api-version=1.0
```
```json
{
  "name": "newCreatedPlan2",
  "description": "Our new plan"
}
```

#### Sample response

```json
{
  "id": 17,
  "name": "newCreatedPlan2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "343",
    "name": "Fabrikam-Fiber-TFVC"
  },
  "description": "Our new plan",
  "startDate": "2014-05-01T00:00:00Z",
  "endDate": "2014-05-10T00:00:00Z",
  "iteration": "Fabrikam-Fiber-TFVC",
  "updatedDate": "2014-05-06T13:43:07.247Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 2,
  "state": "Active",
  "rootSuite": {
    "id": "34",
    "name": "newCreatedPlan2",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17/Suites/34"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=17"
}
```


### Area and iteration
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/17?api-version=1.0
```
```json
{
  "area": {
    "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
  },
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1"
}
```

#### Sample response

```json
{
  "id": 17,
  "name": "newCreatedPlan2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "411",
    "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
  },
  "description": "Our new plan",
  "startDate": "2014-05-01T00:00:00Z",
  "endDate": "2014-05-10T00:00:00Z",
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1",
  "updatedDate": "2014-05-06T13:43:09.787Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 3,
  "state": "Active",
  "rootSuite": {
    "id": "34",
    "name": "newCreatedPlan2",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17/Suites/34"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=17"
}
```


### State

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/17?api-version=1.0
```
```json
{
  "state": "Inactive"
}
```

#### Sample response

```json
{
  "id": 17,
  "name": "newCreatedPlan2",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "area": {
    "id": "411",
    "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
  },
  "description": "Our new plan",
  "startDate": "2014-05-01T00:00:00Z",
  "endDate": "2014-05-10T00:00:00Z",
  "iteration": "Fabrikam-Fiber-TFVC\\Release 1",
  "updatedDate": "2014-05-06T13:43:13.17Z",
  "updatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 4,
  "state": "Inactive",
  "rootSuite": {
    "id": "34",
    "name": "newCreatedPlan2",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/17/Suites/34"
  },
  "clientUrl": "mtms://mytfsserver/defaultcollection/p:Fabrikam-Fiber-TFVC/Testing/testplan/connect?id=17"
}
```


## Delete a testplan

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/plans/{planId}?api-version={version}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| planId      | int      |                             | ID of the test plan to delete.
| Query
| api-version | string   |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/4?api-version=1.0
```
