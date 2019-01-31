---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Results | REST API Reference for Team Foundation Server
description: Work with test results programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 70243742-BBC4-4586-AD22-A7756675A767
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/05/2016
---

# Test results

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

While there is complete support to add/get automated test results, there is limited support for manual test results. You can get all manual test results, test iterations and test steps (action results), but cannot create manual test iterations or test steps (action results). 

## Get a list of test results 
<a name="getalistofresults" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results?api-version={version}[&detailsToInclude={string}&$skip={int}&$top={int}]
```

| Parameter               | Type     | Default | Notes
|:------------------------|:---------|:--------|:-----------------------
| URL
| instance                | string   |         | TFS server name ({server:port}).
| project                 | string   |         | Name or ID of the project.
| run                     | int      |         | ID of the test run that contains the results.
| Query
| version                 | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| detailsToInclude        | enum { None, Iterations, WorkItems}     | None   | None - Return results with core fields values only. Core fields includes State, Outcome, Priority, AutomatedTestName, AutomatedTestStorage, Comments, ErrorMessage etc.<br /> Iterations - Return results with core field values and test iteration details. <br /> WorkItems - Return results with core field values and associated workitems information.
| $skip					  | int      |    0    | Number of results to skip from beginning.
| $top					  | int      |    1000 | Number of results to return. Max is 1000 when detailsToInclude is None and 100 otherwise.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/16/results?api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": 100000,
      "project": {
        "id": "5c3d39df-a0cb-49da-be01-42e53792c0e1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2016-07-13T11:12:48.487Z",
      "completedDate": "2016-07-13T11:12:48.493Z",
      "durationInMs": 4,
      "outcome": "Passed",
      "revision": 1,
      "runBy": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "state": "Completed",
      "testCase": {
        "name": "Pass1"
      },
      "testRun": {
        "id": "16",
        "name": "VSTest Test Run release any cpu",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16"
      },
      "lastUpdatedDate": "2016-07-13T11:12:49.123Z",
      "lastUpdatedBy": {
        "id": "375baa5b-5148-4e89-a549-ec202b722d89",
        "displayName": "Project Collection Build Service (fabrikam-fiber-inc)",
        "uniqueName": "Build\\78b5727d-4a24-4ec8-9caf-704685572174",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/375baa5b-5148-4e89-a549-ec202b722d89",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=375baa5b-5148-4e89-a549-ec202b722d89"
      },
      "priority": 0,
      "computerName": "TASKAGENT5-0055",
      "build": {
        "id": "5",
        "name": "20160713.2",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Builds/5"
      },
      "createdDate": "2016-07-13T11:12:49.123Z",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16/Results/100000",
      "failureType": "None",
      "automatedTestStorage": "unittestproject1.dll",
      "automatedTestType": "UnitTest",
      "automatedTestTypeId": "13cdc9d9-ddb5-4fa4-a97d-d965ccfc6d4b",
      "automatedTestId": "aefba017-ab06-be36-6b92-de4e29836f72",
      "area": {
        "id": "37528",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "vstfs:///Classification/Node/ebe8ac79-8d9f-4a5b-8d0a-c3095c81e70e"
      },
      "testCaseTitle": "Pass1",
      "customFields": [],
      "automatedTestName": "UnitTestProject1.UnitTest1.Pass1"
    },
    {
      "id": 100001,
      "project": {
        "id": "5c3d39df-a0cb-49da-be01-42e53792c0e1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2016-07-13T11:12:48.547Z",
      "completedDate": "2016-07-13T11:12:48.62Z",
      "durationInMs": 74,
      "outcome": "Failed",
      "revision": 1,
      "runBy": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam-Fiber-TFVC",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "state": "Completed",
      "testCase": {
        "name": "Fail1"
      },
      "testRun": {
        "id": "16",
        "name": "VSTest Test Run release any cpu",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16"
      },
      "lastUpdatedDate": "2016-07-13T11:12:49.123Z",
      "lastUpdatedBy": {
        "id": "375baa5b-5148-4e89-a549-ec202b722d89",
        "displayName": "Project Collection Build Service (fabrikam-fiber-inc)",
        "uniqueName": "Build\\78b5727d-4a24-4ec8-9caf-704685572174",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/375baa5b-5148-4e89-a549-ec202b722d89",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=375baa5b-5148-4e89-a549-ec202b722d89"
      },
      "priority": 10,
      "computerName": "TASKAGENT5-0055",
      "build": {
        "id": "5",
        "name": "20160713.2",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Builds/5"
      },
      "errorMessage": "Assert.Fail failed. ",
      "createdDate": "2016-07-13T11:12:49.123Z",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16/Results/100001",
      "failureType": "None",
      "automatedTestStorage": "unittestproject1.dll",
      "automatedTestType": "UnitTest",
      "automatedTestTypeId": "13cdc9d9-ddb5-4fa4-a97d-d965ccfc6d4b",
      "automatedTestId": "7c66fbda-2d0e-a714-e18d-83c0464019a5",
      "area": {
        "id": "37528",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "vstfs:///Classification/Node/ebe8ac79-8d9f-4a5b-8d0a-c3095c81e70e"
      },
      "testCaseTitle": "Fail1",
      "stackTrace": "   at UnitTestProject1.UnitTest1.Fail1() in C:\\a\\1\\s\\UnitTestProject1\\UnitTestProject1\\UnitTest1.cs:line 20\r\n",
      "customFields": [],
      "failingSince": {
        "date": "2016-07-13T11:11:17.587Z",
        "build": {
          "id": 4,
          "definitionId": 0,
          "number": "20160713.1",
          "buildSystem": "VSTS"
        }
      },
      "automatedTestName": "UnitTestProject1.UnitTest1.Fail1"
    },
    {
      "id": 100002,
      "project": {
        "id": "5c3d39df-a0cb-49da-be01-42e53792c0e1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2016-07-13T11:12:48.623Z",
      "completedDate": "2016-07-13T11:12:48.623Z",
      "outcome": "NotExecuted",
      "revision": 1,
      "runBy": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam-Fiber-TFVC",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "state": "Completed",
      "testCase": {
        "name": "Ignore1"
      },
      "testRun": {
        "id": "16",
        "name": "VSTest Test Run release any cpu",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16"
      },
      "lastUpdatedDate": "2016-07-13T11:12:49.123Z",
      "lastUpdatedBy": {
        "id": "375baa5b-5148-4e89-a549-ec202b722d89",
        "displayName": "Project Collection Build Service (fabrikam-fiber-inc)",
        "uniqueName": "Build\\78b5727d-4a24-4ec8-9caf-704685572174",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/375baa5b-5148-4e89-a549-ec202b722d89",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=375baa5b-5148-4e89-a549-ec202b722d89"
      },
      "priority": 20,
      "computerName": "TASKAGENT5-0055",
      "build": {
        "id": "5",
        "name": "20160713.2",
        "url": "https://mytfsserver/DefaultCollection/_apis/build/Builds/5"
      },
      "createdDate": "2016-07-13T11:12:49.123Z",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16/Results/100002",
      "failureType": "None",
      "automatedTestStorage": "unittestproject1.dll",
      "automatedTestType": "UnitTest",
      "automatedTestTypeId": "13cdc9d9-ddb5-4fa4-a97d-d965ccfc6d4b",
      "automatedTestId": "ef9123e0-a097-7e9b-9a02-f526c7a640c0",
      "area": {
        "id": "37528",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "vstfs:///Classification/Node/ebe8ac79-8d9f-4a5b-8d0a-c3095c81e70e"
      },
      "testCaseTitle": "Ignore1",
      "customFields": [],
      "automatedTestName": "UnitTestProject1.UnitTest1.Ignore1"
    }
  ]
}
```


### With workitem details

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/26/results?detailsToInclude=WorkItems&$top=100&api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 100000,
      "comment": "Website theme is looking good",
      "project": {
        "id": "5c3d39df-a0cb-49da-be01-42e53792c0e1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2016-07-14T09:38:29.127Z",
      "completedDate": "2016-07-14T09:38:29.127Z",
      "outcome": "Passed",
      "revision": 2,
      "state": "Completed",
      "testCase": {
        "name": "VerifyWebsiteTheme"
      },
      "testRun": {
        "id": "26",
        "name": "Fabrikam Fiber test run ",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/26"
      },
      "lastUpdatedDate": "2016-07-14T09:38:28.94Z",
      "lastUpdatedBy": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "priority": 0,
      "createdDate": "2016-07-14T09:38:28.34Z",
      "associatedBugs": [
        {
          "id": "30",
          "name": "Bug for test VerifyWebsiteLinks",
          "url": ""
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/26/Results/100000",
      "failureType": "None",
      "area": {
        "id": "37528",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "vstfs:///Classification/Node/ebe8ac79-8d9f-4a5b-8d0a-c3095c81e70e"
      },
      "testCaseTitle": "VerifyWebsiteTheme",
      "customFields": [],
      "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteTheme"
    },
    {
      "id": 100001,
      "comment": "Website links are failing because of incorrect container id",
      "project": {
        "id": "5c3d39df-a0cb-49da-be01-42e53792c0e1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2016-07-14T09:38:29.127Z",
      "completedDate": "2016-07-14T09:38:29.127Z",
      "outcome": "Failed",
      "revision": 2,
      "state": "Completed",
      "testCase": {
        "name": "VerifyWebsiteLinks"
      },
      "testRun": {
        "id": "26",
        "name": "Fabrikam Fiber test run ",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/26"
      },
      "lastUpdatedDate": "2016-07-14T09:38:28.94Z",
      "lastUpdatedBy": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "priority": 0,
      "createdDate": "2016-07-14T09:38:28.34Z",
      "associatedBugs": [
        {
          "id": "30",
          "name": "Bug for test VerifyWebsiteLinks",
          "url": ""
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/26/Results/100001",
      "failureType": "Known Issue",
      "area": {
        "id": "37528",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "vstfs:///Classification/Node/ebe8ac79-8d9f-4a5b-8d0a-c3095c81e70e"
      },
      "testCaseTitle": "VerifyWebsiteLinks",
      "customFields": [],
      "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteLinks"
    }
  ]
}
```


### With test iterations and workitem details

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/31/results?$top=100&detailsToInclude=WorkItems,Iterations&api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 100000,
      "configuration": {
        "id": "4",
        "name": "Windows 8"
      },
      "project": {
        "id": "5c3d39df-a0cb-49da-be01-42e53792c0e1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2016-07-26T04:22:53.273Z",
      "completedDate": "2016-07-26T04:22:56.953Z",
      "durationInMs": 2439,
      "outcome": "Failed",
      "owner": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "revision": 4,
      "runBy": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "state": "Completed",
      "testCase": {
        "id": "33",
        "name": "TestCase1"
      },
      "testRun": {
        "id": "31",
        "name": "Plan1 (Manual)",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/31"
      },
      "lastUpdatedDate": "2016-07-26T04:23:11.553Z",
      "lastUpdatedBy": {
        "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
        "displayName": "Fabrikam",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
      },
      "priority": 2,
      "createdDate": "2016-07-26T04:22:51.8Z",
      "iterationDetails": [
        {
          "id": 1,
          "outcome": "Failed",
          "errorMessage": "",
          "startedDate": "2016-07-26T04:22:54.517Z",
          "completedDate": "2016-07-26T04:22:56.953Z",
          "durationInMs": 2439,
          "actionResults": [
            {
              "actionPath": "00000002",
              "iterationId": 1,
              "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/31/Results/100000/Iterations/1/ActionResults/00000002",
              "outcome": "Failed",
              "startedDate": "2016-07-26T04:22:54Z",
              "completedDate": "2016-07-26T04:22:54Z"
            }
          ],
          "parameters": [],
          "attachments": [],
          "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/31/Results/100000/Iterations/1"
        }
      ],
      "associatedBugs": [
        {
          "id": "34",
          "name": "This step should pass.",
          "url": ""
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/31/Results/100000",
      "failureType": "None",
      "area": {
        "id": "37528",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "vstfs:///Classification/Node/ebe8ac79-8d9f-4a5b-8d0a-c3095c81e70e"
      },
      "testCaseTitle": "TestCase1",
      "customFields": []
    }
  ]
}
```



## Get a test result 

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}?api-version={version}[&detailsToInclude={string}]
```

| Parameter               | Type     | Default | Notes
|:------------------------|:---------|:--------|:-----------------------
| URL
| instance                | string   |         | TFS server name ({server:port}).
| project                 | string   |         | Name or ID of the project.
| run                     | int      |         | ID of the test run that contains the result.
| result                  | int      |         | ID of the test result to get.
| Query
| version                 | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| detailsToInclude        | enum { None, Iterations, WorkItems}     | None   | None - Return results with core fields values only. Core fields includes State, Outcome, Priority, AutomatedTestName, AutomatedTestStorage, Comments, ErrorMessage etc.<br /> Iterations - Return results with core field values and test iteration details. <br /> WorkItems - Return results with core field values and associated workitems information.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/16/results/100000?api-version=3.0-preview
```

#### Sample response

```json
{
  "id": 100000,
  "project": {
    "id": "5c3d39df-a0cb-49da-be01-42e53792c0e1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2016-07-13T11:12:48.487Z",
  "completedDate": "2016-07-13T11:12:48.493Z",
  "durationInMs": 4,
  "outcome": "Passed",
  "revision": 1,
  "runBy": {
    "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
    "displayName": "Fabrikam",
    "uniqueName": "fabrikamfiber.vsin@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
  },
  "state": "Completed",
  "testCase": {
    "name": "Pass1"
  },
  "testRun": {
    "id": "16",
    "name": "VSTest Test Run release any cpu",
    "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16"
  },
  "lastUpdatedDate": "2016-07-13T11:12:49.123Z",
  "lastUpdatedBy": {
    "id": "375baa5b-5148-4e89-a549-ec202b722d89",
    "displayName": "Project Collection Build Service (fabrikam-fiber-inc)",
    "uniqueName": "Build\\78b5727d-4a24-4ec8-9caf-704685572174",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/375baa5b-5148-4e89-a549-ec202b722d89",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=375baa5b-5148-4e89-a549-ec202b722d89"
  },
  "priority": 0,
  "computerName": "TASKAGENT5-0055",
  "build": {
    "id": "5",
    "name": "20160713.2",
    "url": "https://mytfsserver/DefaultCollection/_apis/build/Builds/5"
  },
  "createdDate": "2016-07-13T11:12:49.123Z",
  "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/16/Results/100000",
  "failureType": "None",
  "automatedTestStorage": "unittestproject1.dll",
  "automatedTestType": "UnitTest",
  "automatedTestTypeId": "13cdc9d9-ddb5-4fa4-a97d-d965ccfc6d4b",
  "automatedTestId": "aefba017-ab06-be36-6b92-de4e29836f72",
  "area": {
    "id": "37528",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "vstfs:///Classification/Node/ebe8ac79-8d9f-4a5b-8d0a-c3095c81e70e"
  },
  "testCaseTitle": "Pass1",
  "customFields": [],
  "automatedTestName": "UnitTestProject1.UnitTest1.Pass1"
}
```


## Add test results to a test run 

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "testCaseTitle": { string },
  "testCase": {
    "id": { int }
  },
  "configuration": {
    "id": { int },
    "name": {string }
  },
  "testPoint": {
    "id": { int }
  },
  "state": {
	enum { Pending, Queued, InProgress, Paused, Completed }
  },
  "computerName": { string },
  "resolutionState": { string },
  "priority": { int },
  "failureType": { string },
  "automatedTestName": { string },
  "automatedTestStorage": { string },
  "automatedTestType": { string },
  "automatedTestId": { string },
  "area": {
    "name": {string}
  },
  "owner": {
   "DisplayName": {string}
  },
  "runBy": {
   "DisplayName": {string}
  },
  "outcome": {
        enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress}
  },
  "errorMessage": { string },
  "comment": { string },
  "startedDate": { DateTime },
  "completedDate": { DateTime },
  "durationInMs": { long },
  "associatedBugs": [ 
    {
	 { "id" : {int} }
	} 
  ]
}
```

| Parameter            | Type     | Default | Notes
|:---------------------|:---------|:--------|:------------------------
| URL
| instance             | string   |         | TFS server name ({server:port}).
| project              | string   |         | Name or ID of the project.
| Query
| version              | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| testCaseTitle        | string   |	        | Title of the test case.
| testCase.id          | int      |         | ID of the test case to use.
| configuration.id     | int      |         | ID of the test configuration to use.
| configuration.name   | string   |         | Name of the test configuration to use.
| testPoint.Id         | int      |         | ID of the test point to use.
| state                | enum { Pending, Queued, InProgress, Paused, Completed } | Pending | State of the test result
| computerName         | string   |         | Name of the computer used for test execution.
| resolutionState      | string   |         | Resolution state of the test result.
| priority             | int      |    0    | Priority of the test case. If no priority to be set specify 255.
| failureType          | string   | None    | Failure type of the test result.
| automatedTestName    | string   |         | Title of automated test case.
| automatedTestStorage | string   |         | Automated test storage.
| automatedTestType    | string   |         | Automated test type.
| automatedTestId      | string   |         | Automated test Id.
| area.name            | string   |         | Area Path of the test result.
| owner.displayName    | string   |         | Name of the result owner
| runBy.displayName    | string   |         | Name of the person who executed the test case.
| outcome              | enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress } | None | Outcome of the test result.
| errorMessage         | string   |         | Error message
| comment              | string   |         | Comments entered by person who analyzed the result.
| startedDate          | DateTime |         | Start date of test result
| completedDate        | DateTime |         | Completed date of test result
| durationInMs         | long     |         | Execution time of the test case in milliseconds. This will be ignored when startDate and completedDate specified.                                                              
| associatedBugs       | int[]    |         | IDs of the bugs associated with test result.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/24/results?api-version=3.0-preview
```
```json
[
  {
    "testCaseTitle": "VerifyWebsiteTheme",
    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteTheme",
    "priority": 1,
    "outcome": "Passed"
  },
  {
    "testCaseTitle": "VerifyWebsiteLinks",
    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteLinks",
    "priority": 2,
    "outcome": "Failed",
    "associatedBugs": [
      {
        "id": 30
      }
    ]
  }
]
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 100000,
      "project": {},
      "testRun": {},
      "lastUpdatedBy": {
        "id": null
      },
      "url": ""
    },
    {
      "id": 100001,
      "project": {},
      "testRun": {},
      "lastUpdatedBy": {
        "id": null
      },
      "url": ""
    }
  ]
}
```


## Update test results for a test run 

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results?api-version={version}
```
```http
Content-Type: application/json
```
```json
[
  {  
    "id": { int },
    "state": {
	enum { Pending, Queued, InProgress, Paused, Completed }
    },
    "computerName": { string },    
    "resolutionState": { string },
    "priority": { int },
    "failureType": { string }, 
    "owner": {
       "DisplayName": {string}
    },
    "runBy": {
       "DisplayName": {string}
    },
    "outcome": {
          enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress}
    },
    "errorMessage": { string },
    "comment": { string },
    "startedDate": { DateTime },
    "completedDate": { DateTime },
    "durationInMs": { long },
    "associatedBugs": [ 
		{
		 { "id" : {int} }
		} 
    ]
  }
]
```

| Parameter           | Type     | Default | Notes
|:--------------------|:---------|:--------|:------------------------
| URL
| instance            | string   |         | TFS server name ({server:port}).
| project             | string   |         | Name or ID of the project.
| Query
| version             | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| id                  | int      |         | ID of the test result which has to be updated.
| state               | enum { Pending, Queued, InProgress, Paused, Completed } |    | State of the test result
| computerName        | string   |         | Name of the computer used for test execution.
| resolutionState     | string   |         | Resolution state of the test result.
| priority            | int      |    0    | Priority of the test case. If no priority to be set specify 255.
| failureType         | string   |         | Failure type of the test result.
| owner.displayName   | string   |         | Name of the result owner
| runBy.displayName   | string   |         | Name of the person who executed the test case.
| outcome             | enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress } |    | Outcome of the test result.
| errorMessage        | string   |         | Error message
| comment             | string   |         | Comments entered by person who analyzed the result.
| startedDate         | DateTime |         | Started date for test result
| completedDate       | DateTime |         | Completed date for test result
| durationInMs        | long     |         | Execution time of the test case in milliseconds. This will be ignored when startDate and completedDate specified.                                                              
| associatedBugs      | int[]    |         | IDs of the bugs associated with test result.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/26/results?api-version=3.0-preview
```
```json
[
  {
    "id": 100000,
    "state": "Completed",
    "comment": "Website theme is looking good",
    "associatedBugs": [
      {
        "id": 30
      }
    ]
  },
  {
    "id": 100001,
    "state": "Completed",
    "comment": "Website links are failing because of incorrect container id",
    "failureType": "Known Issue"
  }
]
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 100000,
      "project": {},
      "testRun": {},
      "lastUpdatedBy": {
        "id": null
      },
      "url": ""
    },
    {
      "id": 100001,
      "project": {},
      "testRun": {},
      "lastUpdatedBy": {
        "id": null
      },
      "url": ""
    }
  ]
}
```


