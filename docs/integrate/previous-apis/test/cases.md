---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Cases | REST API Reference for Team Foundation Server
description: Work with test cases programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 17A2D523-0FEA-47EE-9C61-98D016F4F91D
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test cases

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test cases

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}/testcases?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:-----------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | Name or ID of the project.
| plan      | int    | ID of the test plan that contains the suites.
| suite     | int    | ID of the suite to get.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/testcases?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "testCase": {
        "id": "39",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
        "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
      },
      "pointAssignments": [
        {
          "configuration": {
            "id": "2",
            "name": "Windows 8"
          },
          "tester": {
            "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
            "displayName": "Fabrikam Fiber",
            "uniqueName": "fabrikamfiber1@outlook.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
          }
        }
      ]
    },
    {
      "testCase": {
        "id": "40",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/40",
        "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=40"
      },
      "pointAssignments": [
        {
          "configuration": {
            "id": "2",
            "name": "Windows 8"
          },
          "tester": {
            "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
            "displayName": "Fabrikam Fiber",
            "uniqueName": "fabrikamfiber1@outlook.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
          }
        }
      ]
    }
  ],
  "count": 2
}
```


## Get a test case

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}/testcases/{case}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:-----------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | Name or ID of the project.
| plan      | int    | ID of the test plan that contains the suites.
| suite     | int    | ID of the suite that contains the test case.
| case      | int    | ID of the test case to get.       
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/testcases/39?api-version=1.0
```

#### Sample response

```json
{
  "testCase": {
    "id": "39",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
    "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
  },
  "pointAssignments": [
    {
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "tester": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      }
    }
  ]
}
```


## Delete a test case
> This API is supported as of [!INCLUDE [API_version](../_data/version3-preview.md)].

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/testcases/{caseId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:-----------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | Name or ID of the project.
| caseId    | int    | ID of the test case to delete.       
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/testcases/5?api-version=3.0-preview
```


