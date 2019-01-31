---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Points | REST API Reference for Team Foundation Server
description: Work with test points programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 70C0FE8E-1A6B-4C0A-BC8A-46DAF75A9418
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test points

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test points

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}/points?api-version={version}[&witFields={string}&configurationId={string}&testCaseId={string}&testPointIds={string}&includePointDetails={bool}&$skip={int}&$top={int}]
```

| Parameter           | Type   | Default | Notes
|:--------------------|:------|:--------|:---------------------------------
| URL
| instance            | string |         | TFS server name ({server:port}).
| project             | string |         | Name or ID of the project.
| plan                | int    |         | ID of the test plan.
| suite               | int    |         | ID of the suite that contains the points.
| Query
| api-version         | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| witFields           | string |         | Comma-separated list of work item field names.
| configurationId     | string |         | Get test points for specific configuration.
| testCaseId          | string |         | Get test points for a specific test case, valid when configurationId is not set.
| testPointIds        | string |         | Get test points for comma-separated list of test point IDs, valid only when configurationId and testCaseId are not set.
| includePointDetails | bool   | false   | Include all properties for the test point.
| $skip               | int    |         | Number of test points to skip.
| $top                | int    |         | Number of test points to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "28"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Passed",
      "state": "Completed",
      "testCase": {
        "id": "39",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/2",
      "assignedTo": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "4"
      },
      "lastResult": {
        "id": "100001"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "testCase": {
        "id": "40",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "count": 2
}
```


### With fields

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points?witFields=System.Title,System.Reason&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "28"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Passed",
      "state": "Completed",
      "testCase": {
        "id": "39",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "System.Title",
            "value": "Shopping cart"
          }
        },
        {
          "workItem": {
            "key": "System.Reason",
            "value": "New"
          }
        },
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/2",
      "assignedTo": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "4"
      },
      "lastResult": {
        "id": "100001"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "testCase": {
        "id": "40",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "System.Title",
            "value": "Price check"
          }
        },
        {
          "workItem": {
            "key": "System.Reason",
            "value": "New"
          }
        },
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "count": 2
}
```


### By configuration

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points?configuration=Windows 8&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "28"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Passed",
      "state": "Completed",
      "testCase": {
        "id": "39",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/2",
      "assignedTo": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "4"
      },
      "lastResult": {
        "id": "100001"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "testCase": {
        "id": "40",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "count": 2
}
```


### By test case

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points?testcaseid=39&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "28"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Passed",
      "state": "Completed",
      "testCase": {
        "id": "39",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "count": 1
}
```


### Specific points

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points?testPointIds=1,2&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "28"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Passed",
      "state": "Completed",
      "testCase": {
        "id": "39",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/2",
      "assignedTo": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "4"
      },
      "lastResult": {
        "id": "100001"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "testCase": {
        "id": "40",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "count": 2
}
```


### With details

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points?includePointDetails=true&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "failureType": "None",
      "lastTestRun": {
        "id": "28",
        "name": "sprint1 (Manual)",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/28"
      },
      "lastResult": {
        "id": "100000",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/28/Results/100000"
      },
      "lastUpdatedDate": "2014-05-28T16:14:41.393Z",
      "lastUpdatedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "outcome": "Passed",
      "revision": 22,
      "state": "Completed",
      "suite": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "testCase": {
        "id": "39",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
        "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
      },
      "testPlan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/2",
      "assignedTo": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "failureType": "None",
      "lastTestRun": {
        "id": "4",
        "name": "sprint1 (Manual)",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4"
      },
      "lastResult": {
        "id": "100001",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100001"
      },
      "lastUpdatedDate": "2014-05-04T13:18:11.043Z",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "outcome": "Failed",
      "revision": 1,
      "state": "NotReady",
      "suite": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "testCase": {
        "id": "40",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/40",
        "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=40"
      },
      "testPlan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "count": 2
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points?$skip=1&$top=1&api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/2",
      "assignedTo": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "lastTestRun": {
        "id": "4"
      },
      "lastResult": {
        "id": "100001"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "testCase": {
        "id": "40",
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "count": 1
}
```


## Get a test point

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}/points/{point}?api-version={version}[&witFields={string}]
```

| Parameter           | Type   | Notes
|:--------------------|:------|:---------------------------------
| URL
| instance            | string | TFS server name ({server:port}).
| project             | string | Name or ID of the project.
| plan                | int    | ID of the test plan.
| suite               | int    | ID of the suite that contains the point.
| point               | int    | ID of the test point to get.
| Query
| api-version         | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| witFields           | string | Comma-separated list of work item field names.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points/1?api-version=1.0
```

#### Sample response

```json
{
  "id": 1,
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
  "assignedTo": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber4@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
  },
  "configuration": {
    "id": "2",
    "name": "Windows 8"
  },
  "failureType": "None",
  "lastTestRun": {
    "id": "28",
    "name": "sprint1 (Manual)",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/28"
  },
  "lastResult": {
    "id": "100000",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/28/Results/100000"
  },
  "lastUpdatedDate": "2014-05-28T16:14:41.393Z",
  "lastUpdatedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber4@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
  },
  "outcome": "Passed",
  "revision": 22,
  "state": "Completed",
  "suite": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
  },
  "testCase": {
    "id": "39",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
    "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
  },
  "testPlan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "workItemProperties": [
    {
      "workItem": {
        "key": "Microsoft.VSTS.TCM.AutomationStatus",
        "value": "Not Automated"
      }
    }
  ]
}
```


### With fields

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points/1?witFields=System.Title,System.Reason&api-version=1.0
```

#### Sample response

```json
{
  "id": 1,
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
  "assignedTo": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber4@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
  },
  "configuration": {
    "id": "2",
    "name": "Windows 8"
  },
  "failureType": "None",
  "lastTestRun": {
    "id": "28",
    "name": "sprint1 (Manual)",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/28"
  },
  "lastResult": {
    "id": "100000",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/28/Results/100000"
  },
  "lastUpdatedDate": "2014-05-28T16:14:41.393Z",
  "lastUpdatedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber4@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
  },
  "outcome": "Passed",
  "revision": 22,
  "state": "Completed",
  "suite": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
  },
  "testCase": {
    "id": "39",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
    "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
  },
  "testPlan": {
    "id": "1",
    "name": "sprint1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "workItemProperties": [
    {
      "workItem": {
        "key": "System.Title",
        "value": "Shopping cart"
      }
    },
    {
      "workItem": {
        "key": "System.Reason",
        "value": "New"
      }
    },
    {
      "workItem": {
        "key": "Microsoft.VSTS.TCM.AutomationStatus",
        "value": "Not Automated"
      }
    }
  ]
}
```


## Update test points

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}/suites/{suite}/points/{point}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "resetToActive": { bool },
  "outcome": {
	enum ( None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked , NotExecuted, Warning, Error, NotApplicable, Paused }
	},
  "tester": {
	"displayName": { string } | "ID": { GUID }
	}
}
```

| Parameter           | Type   | Notes
|:--------------------|:------|:---------------------------------
| URL
| instance            | string     | TFS server name ({server:port}).
| project             | string     | Name or ID of the project.
| plan                | int        | ID of the test plan.
| suite               | int        | ID of the suite that contains the point.
| point               | int,int... | ID of the test point to get.<br/>Use a comma-separated list of IDs to update multiple test points.
| Query
| api-version         | string     | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| resetToActive       | bool       | Reset test points to active.
| outcome             | enum ( None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked , NotExecuted, Warning, Error, NotApplicable, Paused }  | Outcome value for a test point.<br/>Not valid if resetToActive is true.
| tester              | string     | The tester's Team Foundation ID or display name.


### Re-activate

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points/1?api-version=1.0
```
```json
{
  "resetToActive": "true"
}
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "failureType": "None",
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "lastUpdatedDate": "2014-05-28T16:38:53.563Z",
      "lastUpdatedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "outcome": "Unspecified",
      "revision": 23,
      "state": "Ready",
      "suite": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "testCase": {
        "id": "39",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
        "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
      },
      "testPlan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ]
}
```


### Set the outcome

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points/1?api-version=1.0
```
```json
{
  "outcome": "Passed"
}
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "failureType": "None",
      "lastTestRun": {
        "id": "30",
        "name": "sprint1 (Manual)",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/30"
      },
      "lastResult": {
        "id": "100000",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/30/Results/100000"
      },
      "lastUpdatedDate": "2014-05-28T16:38:54.383Z",
      "lastUpdatedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "outcome": "Passed",
      "revision": 23,
      "state": "Completed",
      "suite": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "testCase": {
        "id": "39",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
        "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
      },
      "testPlan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ]
}
```


### Change the tester

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/plans/1/suites/1/points/1?api-version=1.0
```
```json
{
  "tester": {
    "displayName": "Jamal Hartnett"
  }
}
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1/Points/1",
      "assignedTo": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "failureType": "None",
      "lastTestRun": {
        "id": "30",
        "name": "sprint1 (Manual)",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/30"
      },
      "lastResult": {
        "id": "100000",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/30/Results/100000"
      },
      "lastUpdatedDate": "2014-05-28T16:38:54.993Z",
      "lastUpdatedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "outcome": "Passed",
      "revision": 24,
      "state": "Completed",
      "suite": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/1"
      },
      "testCase": {
        "id": "39",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/39",
        "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=39"
      },
      "testPlan": {
        "id": "1",
        "name": "sprint1",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ]
}
```


## Query test points

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/points/?api-version={version}&$skip={int}&$top={int}
```
```http
Content-Type: application/json
```
```json
{
	"pointsFilter": {
		"testcaseIds": [{ int }],
		"ConfigurationNames": [{string}],
		"Testers": [
         {
               "DisplayName": {string}
         }
      }
}
```

| Parameter         | Type   | Default | Notes
|:------------------|:-------|:--------|:------------------------
| URL
| instance          | string |         | TFS server name ({server:port}).
| project           | string |         | Name or ID of the project.
| Query
| api-version       | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $skip             | int    |         | Number of test points to skip.
| $top              | int    |         | Number of test points to return.
| Body
| testcaseIds                          | int   |		                              | Testcase ids list (Mandatory input).
| ConfigurationNames                   | string      |       No filter                         | List of Configurations for filtering.
| Testers.DisplayName                  | string   | No filter | DisplayName of testers for filtering.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/points?api-version=3.1-preview.2
```
```json
{
  "PointsFilter": {
    "TestcaseIds": [
      7,
      8,
      9
    ]
  }
}
```

#### Sample response

```json
{
  "points": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/1",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "2",
        "name": "Windows 10"
      },
      "lastTestRun": {
        "id": "4"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Passed",
      "state": "Completed",
      "lastResultState": "Completed",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/2",
      "assignedTo": {
        "id": "edfab9de-17c2-49ef-99cb-abfc159a1224",
        "displayName": "Fabrikam Fiber2"
      },
      "automated": false,
      "configuration": {
        "id": "3",
        "name": "c1"
      },
      "lastTestRun": {
        "id": "2"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "lastResultState": "Completed",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 3,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/3",
      "assignedTo": {
        "id": "a25844d1-53bd-4d98-9896-67f671cc1b7a",
        "displayName": "Fabrikam Fiber3"
      },
      "automated": false,
      "configuration": {
        "id": "4",
        "name": "c2"
      },
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "outcome": "Unspecified",
      "state": "Ready",
      "lastResultState": "Unspecified",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 4,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/4",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "5",
        "name": "c3"
      },
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "outcome": "Unspecified",
      "state": "Ready",
      "lastResultState": "Unspecified",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 5,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/5",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "6",
        "name": "c4"
      },
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "outcome": "Unspecified",
      "state": "Ready",
      "lastResultState": "Unspecified",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 6,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/6",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "2",
        "name": "Windows 10"
      },
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "outcome": "Unspecified",
      "state": "Ready",
      "lastResultState": "Unspecified",
      "testCase": {
        "id": "8",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 7,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/7",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "2",
        "name": "Windows 10"
      },
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "outcome": "Unspecified",
      "state": "Ready",
      "lastResultState": "Unspecified",
      "testCase": {
        "id": "9",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "pointsFilter": {
    "testcaseIds": [
      7,
      8,
      9
    ]
  }
}
```


### With Configuration filter

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/points?api-version=3.1-preview.2
```
```json
{
  "PointsFilter": {
    "TestcaseIds": [
      7,
      8,
      9
    ],
    "ConfigurationNames": [
      "Windows 10"
    ]
  }
}
```

#### Sample response

```json
{
  "points": [
    {
      "id": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/1",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "2",
        "name": "Windows 10"
      },
      "lastTestRun": {
        "id": "4"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Passed",
      "state": "Completed",
      "lastResultState": "Completed",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 6,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/6",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "2",
        "name": "Windows 10"
      },
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "outcome": "Unspecified",
      "state": "Ready",
      "lastResultState": "Unspecified",
      "testCase": {
        "id": "8",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    },
    {
      "id": 7,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/7",
      "assignedTo": {
        "id": "7d7832db-0b41-4abc-8243-2eeca1d71861",
        "displayName": "Fabrikam Fiber"
      },
      "automated": false,
      "configuration": {
        "id": "2",
        "name": "Windows 10"
      },
      "lastTestRun": {
        "id": "0"
      },
      "lastResult": {
        "id": "0"
      },
      "outcome": "Unspecified",
      "state": "Ready",
      "lastResultState": "Unspecified",
      "testCase": {
        "id": "9",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "pointsFilter": {
    "testcaseIds": [
      7,
      8,
      9
    ],
    "configurationNames": [
      "Windows 10"
    ]
  }
}
```


### With tester filter

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/points?api-version=3.1-preview.2
```
```json
{
  "PointsFilter": {
    "TestcaseIds": [
      7,
      8,
      9
    ],
    "Testers": [
      {
        "DisplayName": "Fabrikam Fiber1"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "points": [
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/2",
      "assignedTo": {
        "id": "edfab9de-17c2-49ef-99cb-abfc159a1224",
        "displayName": "Fabrikam Fiber1"
      },
      "automated": false,
      "configuration": {
        "id": "3",
        "name": "c1"
      },
      "lastTestRun": {
        "id": "2"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "lastResultState": "Completed",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "pointsFilter": {
    "testcaseIds": [
      7,
      8,
      9
    ],
    "testers": [
      {
        "id": null,
        "displayName": "Fabrikam Fiber1"
      }
    ]
  }
}
```


### fetch a page using skip , top

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/points?$skip=1&$top=1&api-version=3.1-preview.2
```
```json
{
  "PointsFilter": {
    "TestcaseIds": [
      7,
      8,
      9
    ]
  }
}
```

#### Sample response

```json
{
  "points": [
    {
      "id": 2,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/5/Suites/6/Points/2",
      "assignedTo": {
        "id": "edfab9de-17c2-49ef-99cb-abfc159a1224",
        "displayName": "Fabrikam Fiber2"
      },
      "automated": false,
      "configuration": {
        "id": "3",
        "name": "c1"
      },
      "lastTestRun": {
        "id": "2"
      },
      "lastResult": {
        "id": "100000"
      },
      "outcome": "Failed",
      "state": "NotReady",
      "lastResultState": "Completed",
      "testCase": {
        "id": "7",
        "name": null,
        "type": null,
        "url": null,
        "webUrl": null
      },
      "workItemProperties": [
        {
          "workItem": {
            "key": "Microsoft.VSTS.TCM.AutomationStatus",
            "value": "Not Automated"
          }
        }
      ]
    }
  ],
  "pointsFilter": {
    "testcaseIds": [
      7,
      8,
      9
    ]
  }
}
```
