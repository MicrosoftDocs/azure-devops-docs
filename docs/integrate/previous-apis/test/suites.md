---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Suites | REST API Reference for Team Foundation Server
description: Work with test suites programmatically using the REST APIs for Team Foundation Server.
ms.assetid: AC2CE3FA-0BBF-4919-A850-383FEE4364B3
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test suites

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test suites

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites?api-version={version}[&$skip={int}&$top={int}&$asTreeView={bool}]
```

| Parameter | Type   | Notes
|:----------|:-------|:-----------
| URL
| instance  | string | TFS server name ({server:port}). 
| instance  | string | TFS server name ({server:port}). 
| project   | string | Name or ID of the project.
| plan      | int    | ID of the test plan that contains the suites.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $skip     | int    | Number of test suites to skip.
| $top      | int    | Number of test suites to return.
| $asTreeView | bool    | If the suites returned should be in a tree structure.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "sprint1",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "revision": 12,
      "testCaseCount": 2,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/testcases",
      "inheritDefaultConfigurations": false,
      "defaultConfigurations": [
        {
          "id": "2",
          "name": "Windows 8"
        }
      ],
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-04T11:54:29.827Z"
    },
    {
      "id": 8,
      "name": "NewTestSuite",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/8",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "revision": 1,
      "testCaseCount": 0,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/8/testcases",
      "inheritDefaultConfigurations": true,
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-04T11:33:25.857Z"
    },
    {
      "id": 9,
      "name": "AllTestCases",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/9",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "queryString": "SELECT [System.Id],[System.WorkItemType],[System.Title],[Microsoft.VSTS.Common.Priority],[System.AssignedTo],[System.AreaPath] FROM WorkItems WHERE [System.WorkItemType] IN GROUP 'Microsoft.TestCaseCategory'",
      "revision": 1,
      "testCaseCount": 2,
      "suiteType": "DynamicTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/9/testcases",
      "inheritDefaultConfigurations": true,
      "lastPopulatedDate": "2014-05-04T11:33:28.497Z",
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-04T11:33:28.497Z"
    },
    {
      "id": 10,
      "name": "41 : Webapp",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/10",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "requirementId": 41,
      "revision": 1,
      "testCaseCount": 0,
      "suiteType": "RequirementTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/10/testcases",
      "inheritDefaultConfigurations": true,
      "lastPopulatedDate": "2014-05-04T11:54:29.827Z",
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-04T11:54:29.827Z"
    }
  ],
  "count": 4
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites?$top=3&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "sprint1",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "revision": 40,
      "testCaseCount": 2,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/testcases",
      "inheritDefaultConfigurations": false,
      "defaultConfigurations": [
        {
          "id": "2",
          "name": "Windows 8"
        }
      ],
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-06T14:53:56.483Z"
    },
    {
      "id": 20,
      "name": "NewTestSuite",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/20",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "revision": 9,
      "testCaseCount": 0,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/20/testcases",
      "inheritDefaultConfigurations": false,
      "defaultConfigurations": [
        {
          "id": "7",
          "name": "Windows7"
        },
        {
          "id": "8",
          "name": "Windows 8.1"
        },
        {
          "id": "9",
          "name": "Windows 2012"
        }
      ],
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-06T14:56:23.44Z"
    },
    {
      "id": 36,
      "name": "Dynamic",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/36",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "20",
        "name": "NewTestSuite",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/20"
      },
      "revision": 3,
      "testCaseCount": 0,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/36/testcases",
      "inheritDefaultConfigurations": true,
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-06T14:22:12.007Z"
    }
  ],
  "count": 3
}
```


### In tree structure

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/60/suites?$asTreeView=true&api-version=2.0-preview
```

#### Sample response

```json
{
  "value": [
    {
      "id": 61,
      "name": "sprint1",
      "plan": {
        "id": "60",
        "name": "60"
      },
      "testCaseCount": 0,
      "inheritDefaultConfigurations": false,
      "lastUpdatedDate": "0001-01-01T00:00:00",
      "text": "sprint1",
      "children": [
        {
          "id": 67,
          "name": "New query-based suite",
          "plan": {
            "id": "60",
            "name": "60"
          },
          "parent": {
            "id": "61"
          },
          "testCaseCount": 0,
          "inheritDefaultConfigurations": false,
          "lastUpdatedDate": "0001-01-01T00:00:00",
          "text": "New query-based suite"
        },
        {
          "id": 65,
          "name": "Project",
          "plan": {
            "id": "60",
            "name": "60"
          },
          "parent": {
            "id": "61"
          },
          "testCaseCount": 0,
          "inheritDefaultConfigurations": false,
          "lastUpdatedDate": "0001-01-01T00:00:00",
          "text": "Project",
          "children": [
            {
              "id": 66,
              "name": "sample",
              "plan": {
                "id": "60",
                "name": "60"
              },
              "parent": {
                "id": "65"
              },
              "testCaseCount": 0,
              "inheritDefaultConfigurations": false,
              "lastUpdatedDate": "0001-01-01T00:00:00",
              "text": "sample"
            }
          ]
        },
        {
          "id": 62,
          "name": "NewTestSuite",
          "plan": {
            "id": "60",
            "name": "60"
          },
          "parent": {
            "id": "61"
          },
          "testCaseCount": 0,
          "inheritDefaultConfigurations": false,
          "lastUpdatedDate": "0001-01-01T00:00:00",
          "text": "NewTestSuite",
          "children": [
            {
              "id": 63,
              "name": "Dynamic",
              "plan": {
                "id": "60",
                "name": "60"
              },
              "parent": {
                "id": "62"
              },
              "testCaseCount": 0,
              "inheritDefaultConfigurations": false,
              "lastUpdatedDate": "0001-01-01T00:00:00",
              "text": "Dynamic",
              "children": [
                {
                  "id": 64,
                  "name": "Rules",
                  "plan": {
                    "id": "60",
                    "name": "60"
                  },
                  "parent": {
                    "id": "63"
                  },
                  "testCaseCount": 0,
                  "inheritDefaultConfigurations": false,
                  "lastUpdatedDate": "0001-01-01T00:00:00",
                  "text": "Rules"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "count": 1
}
```


### By test case

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/suites/?api-version={version}[&testCaseId={int}]
```

| Parameter   | Type   | Notes
|:------------|:-------|:-----------
| URL
| instance    | string | TFS server name ({server:port}).
| project     | string | Name or ID of the project.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| testCaseId  | int    | ID of the test case for which suites need to be fetched.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/test/suites?testCaseId=341&api-version=2.0-preview
```

#### Sample response

```json
{
  "value": [
    {
      "id": 339,
      "name": "Sprint 1",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/337/Suites/339",
      "project": {
        "id": "8e5a3cfb-fed3-46f3-8657-e3b175cd0305",
        "name": "Fabrikam",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam"
      },
      "plan": {
        "id": "337",
        "name": "Fabrikam master Plan",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/337"
      },
      "parent": {
        "id": "338",
        "name": "Fabrikam master Plan",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/337/Suites/338"
      },
      "revision": 3,
      "testCaseCount": 0,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/337/Suites/339/testcases",
      "inheritDefaultConfigurations": true,
      "state": "In Progress",
      "lastUpdatedBy": {
        "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
        "displayName": "fabrikam fiber",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/9a4515d2-a474-4175-8f7c-f72df24197eb",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=9a4515d2-a474-4175-8f7c-f72df24197eb"
      },
      "lastUpdatedDate": "2015-06-08T12:36:08.313Z"
    },
    {
      "id": 344,
      "name": "JPN",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/342/Suites/344",
      "project": {
        "id": "8e5a3cfb-fed3-46f3-8657-e3b175cd0305",
        "name": "Fabrikam",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam"
      },
      "plan": {
        "id": "342",
        "name": "Fabrikam Localization Plan",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/342"
      },
      "parent": {
        "id": "343",
        "name": "Fabrikam Localization Plan",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/342/Suites/343"
      },
      "revision": 3,
      "testCaseCount": 0,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Plans/342/Suites/344/testcases",
      "inheritDefaultConfigurations": true,
      "state": "In Progress",
      "lastUpdatedBy": {
        "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
        "displayName": "fabrikam fiber",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/9a4515d2-a474-4175-8f7c-f72df24197eb",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=9a4515d2-a474-4175-8f7c-f72df24197eb"
      },
      "lastUpdatedDate": "2015-06-08T12:37:09.073Z"
    }
  ],
  "count": 2
}
```


## Get a test suite

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}?api-version={version}[&includeChildSuites={bool}]
```

| Parameter          | Type   | Default | Notes
|:-------------------|:-------|:--------|:----------------
| URL
| instance           | string |         | TFS server name ({server:port}).
| project            | string |         | Name or ID of the project.
| plan               | int    |         | ID of the test plan that contains the suites.
| suite              | int    |         | ID of the suite to get.
| Query
| api-version        | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeChildSuites | bool   | false   | Return the children of the suite. 

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1?api-version=1.0
```

#### Sample response

```json
{
  "id": 1,
  "name": "sprint1",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "revision": 12,
  "testCaseCount": 2,
  "suiteType": "StaticTestSuite",
  "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/testcases",
  "inheritDefaultConfigurations": false,
  "defaultConfigurations": [
    {
      "id": "2",
      "name": "Windows 8"
    }
  ],
  "state": "InProgress",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2014-05-04T11:54:29.827Z"
}
```


### With children

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/20?includeChildSuites=true&api-version=1.0
```

#### Sample response

```json
{
  "id": 20,
  "name": "NewTestSuite",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/20",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "parent": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
  },
  "revision": 9,
  "testCaseCount": 0,
  "suiteType": "StaticTestSuite",
  "suites": [
    {
      "id": "36",
      "name": "Dynamic",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/36"
    }
  ],
  "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/20/testcases",
  "inheritDefaultConfigurations": false,
  "defaultConfigurations": [
    {
      "id": "7",
      "name": "Windows7"
    },
    {
      "id": "8",
      "name": "Windows 8.1"
    },
    {
      "id": "9",
      "name": "Windows 2012"
    }
  ],
  "state": "InProgress",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2014-05-06T14:56:23.44Z"
}
```


## Create a test suite
<a name="createatestsuite" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{parent}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "suiteType": {
	enum { StaticTestSuite, DynamicTestSuite, RequirementTestSuite }
	},
  "name": { string },
  "queryString": { string },
  "requirementIds": [
	"id": {int}
  ]
}
```

| Parameter      | Type   | Notes
|:---------------|:-------|:-----------
| URL
| instance       | string | TFS server name ({server:port}).
| project        | string | Name or ID of the project.
| plan           | int    | ID of the test plan that contains the suite.
| parent         | int    | ID of the parent suite.
| Query
| api-version    | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| suiteType      | enum { DynamicTestSuite, StaticTestSuite, RequirementTestSuite } | Type of test suite to create.
| name           | string | Name of test suite.
| queryString    | string | For dynamic test suites, the query string that defines the suite.
| requirementIds | int[]  | For requirements test suites, the IDs of the requirements to test. Supported categories of requirement type are:  Epic, Feature, Requirement, and Bug.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1?api-version=1.0
```
```json
{
  "suiteType": "StaticTestSuite",
  "name": "NewTestSuite"
}
```

#### Sample response

```json
{
  "value": [
    {
      "id": 8,
      "name": "NewTestSuite",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/8",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "revision": 1,
      "testCaseCount": 0,
      "suiteType": "StaticTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/8/testcases",
      "inheritDefaultConfigurations": true,
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-04T11:33:25.857Z"
    }
  ],
  "count": 1
}
```


### Based on a query
#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1?api-version=1.0
```
```json
{
  "suiteType": "DynamicTestSuite",
  "name": "AllTestCases",
  "queryString": "SELECT [System.Id],[System.WorkItemType],[System.Title],[Microsoft.VSTS.Common.Priority],[System.AssignedTo],[System.AreaPath] FROM WorkItems WHERE [System.WorkItemType] IN GROUP 'Microsoft.TestCaseCategory'"
}
```

#### Sample response

```json
{
  "value": [
    {
      "id": 9,
      "name": "AllTestCases",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/9",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "queryString": "SELECT [System.Id],[System.WorkItemType],[System.Title],[Microsoft.VSTS.Common.Priority],[System.AssignedTo],[System.AreaPath] FROM WorkItems WHERE [System.WorkItemType] IN GROUP 'Microsoft.TestCaseCategory'",
      "revision": 1,
      "testCaseCount": 2,
      "suiteType": "DynamicTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/9/testcases",
      "inheritDefaultConfigurations": true,
      "lastPopulatedDate": "2014-05-04T11:33:28.497Z",
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-04T11:33:28.497Z"
    }
  ],
  "count": 1
}
```


### Based on requirements
#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1?api-version=1.0
```
```json
{
  "suiteType": "RequirementTestSuite",
  "requirementIds": [
    2
  ]
}
```

#### Sample response

```json
{
  "value": [
    {
      "id": 13,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/13",
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "plan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "parent": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "name": "2 : BestFeatureEver",
      "requirementId": 2,
      "revision": 1,
      "testCaseCount": 0,
      "suiteType": "RequirementTestSuite",
      "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/13/testcases",
      "inheritDefaultConfigurations": true,
      "defaultConfigurations": [],
      "lastPopulatedDate": "2014-05-04T11:33:25.857Z",
      "state": "InProgress",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2014-05-04T11:33:25.857Z",
      "areaUri": "vstfs:///Classification/Node/13a29f1c-46be-4883-9153-b36900f1b70c"
    }
  ],
  "count": 1
}
```


## Add test cases to a suite
<a name="addtestcasestoasuite" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}/testcases/{testcases}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:----------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| plan               | int     | ID of the test plan that contains the suite.
| suite              | int     | ID of the suite to get.
| testcases			 | int,int | IDs of the test cases to add to the suite.
| Query
| api-version        | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/testcases/39,40?api-version=1.0
```
```json
{}
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


## Remove test cases from a suite

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}/testcases/{testcases}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:----------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| plan               | int     | ID of the test plan that contains the suite.
| suite              | int     | ID of the suite to get.
| testcases			 | int,int | IDs of the test cases to remove from the suite.
| Query
| api-version        | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/testcases/39?api-version=1.0
```


## Update a test suite

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": { string },
  "parent": { "id": {int} },
  "queryString": { string },
  "inheritDefaultConfigurations": { bool }
  "defaultConfigurations": [
	"id": {int}
  ]
}
```

| Parameter                    | Type   | Notes
|:-----------------------------|:-------|:-----------
| URL
| instance                     | string | TFS server name ({server:port}).
| project                      | string | Name or ID of the project.
| plan                         | int    | ID of the test plan that contains the suite.
| suite                        | int    | ID of the test suite to update.
| Query
| api-version                  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name                         | string | New name of the test suite.
| parent.id                    | int    | ID of the new parent suite.
| queryString                  | string | For dynamic suites, the new query string.
| inheritDefaultConfigurations | bool   | If true, inherit the default configurations from the parent suite.
| defaultConfigurations        | int[]  | IDs of the default configurations for the suite.

### Name
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/8?api-version=1.0
```
```json
{
  "name": "RenamedTestSuite"
}
```

#### Sample response

```json
{
  "id": 8,
  "name": "RenamedTestSuite",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/8",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "parent": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
  },
  "revision": 2,
  "testCaseCount": 0,
  "suiteType": "StaticTestSuite",
  "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/8/testcases",
  "inheritDefaultConfigurations": true,
  "state": "InProgress",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2014-05-04T12:02:41.387Z"
}
```


### Parent suite
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/9?api-version=1.0
```
```json
{
  "parent": {
    "id": "12"
  }
}
```

#### Sample response

```json
{
  "id": 9,
  "name": "AllTestCases",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/9",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "parent": {
    "id": "12",
    "name": "NewTestSuite",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/12"
  },
  "queryString": "SELECT [System.Id],[System.WorkItemType],[System.Title],[Microsoft.VSTS.Common.Priority],[System.AssignedTo],[System.AreaPath] FROM WorkItems WHERE [System.WorkItemType] IN GROUP 'Microsoft.TestCaseCategory'",
  "revision": 1,
  "testCaseCount": 2,
  "suiteType": "DynamicTestSuite",
  "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/9/testcases",
  "inheritDefaultConfigurations": true,
  "lastPopulatedDate": "2014-05-04T11:33:28.497Z",
  "state": "InProgress",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2014-05-04T11:33:28.497Z"
}
```


### Query string

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/40?api-version=1.0
```
```json
{
  "queryString": "SELECT [System.Id],[System.WorkItemType],[System.Title],[Microsoft.VSTS.Common.Priority],[System.AssignedTo],[System.AreaPath] FROM WorkItems WHERE [System.TeamProject] = @project AND [System.WorkItemType] IN GROUP 'Microsoft.TestCaseCategory' AND [System.AreaPath] UNDER 'Fabrikam-Fiber-TFVC\\Quality assurance'"
}
```

#### Sample response

```json
{
  "id": 40,
  "name": "New query-based suite",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/40",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "parent": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
  },
  "queryString": "SELECT [System.Id],[System.WorkItemType],[System.Title],[Microsoft.VSTS.Common.Priority],[System.AssignedTo],[System.AreaPath] FROM WorkItems WHERE [System.TeamProject] = @project AND [System.WorkItemType] IN GROUP 'Microsoft.TestCaseCategory' AND [System.AreaPath] UNDER 'Fabrikam-Fiber-TFVC\\Quality assurance'",
  "revision": 2,
  "testCaseCount": 0,
  "suiteType": "DynamicTestSuite",
  "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/40/testcases",
  "inheritDefaultConfigurations": true,
  "lastPopulatedDate": "2014-05-06T15:06:16.013Z",
  "state": "InProgress",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2014-05-06T15:06:16.01Z"
}
```


### Configurations

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/20?api-version=1.0
```
```json
{
  "inheritDefaultConfigurations": "false",
  "defaultConfigurations": [
    {
      "id": "7"
    },
    {
      "id": "8"
    },
    {
      "id": "9"
    }
  ]
}
```

#### Sample response

```json
{
  "id": 20,
  "name": "NewTestSuite",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/20",
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "plan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "parent": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
  },
  "revision": 9,
  "testCaseCount": 0,
  "suiteType": "StaticTestSuite",
  "testCasesUrl": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/20/testcases",
  "inheritDefaultConfigurations": false,
  "defaultConfigurations": [
    {
      "id": "7",
      "name": "Windows7"
    },
    {
      "id": "8",
      "name": "Windows 8.1"
    },
    {
      "id": "9",
      "name": "Windows 2012"
    }
  ],
  "state": "InProgress",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2014-05-06T14:56:23.44Z"
}
```


## Delete a test suite

```
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}?api-version={version}
```

| Parameter                    | Type   | Notes
|:-----------------------------|:-------|:-----------
| URL
| instance                     | string | TFS server name ({server:port}).
| project                      | string | Name or ID of the project.
| plan                         | int    | ID of the test plan that contains the suite.
| suite                        | int    | ID of the test suite to delete.
| Query
| api-version                  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/8?api-version=1.0
```



