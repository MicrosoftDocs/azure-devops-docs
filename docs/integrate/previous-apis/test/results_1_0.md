---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Results (Version 1.0) | REST API Reference for Team Foundation Server
description: Work with test results programmatically using the REST APIs for Team Foundation Server. This is for Version 1.0 of this API.
ms.assetid: FCBFFCFB-E57E-492F-9984-BD9C77EA4153
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/25/2016
---

# Test results  (Version 1.0)

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

While there is complete support to add/get automated test results, there is limited support for manual test results. You can get all manual test results, test iterations and test steps (action results), but cannot create manual test iterations or test steps (action results). 

## Get a list of test results

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results?api-version={version}[&includeIterationDetails={bool}]
```

| Parameter               | Type     | Default | Notes
|:------------------------|:---------|:--------|:-----------------------
| URL
| instance                | string   |         | TFS server name ({server:port}).
| project                 | string   |         | Name or ID of the project.
| run                     | int      |         | ID of the test run that contains the results.
| Query
| version                 | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeIterationDetails | bool     | false   | For iterative tests, get the details for each iteration in the result.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    {
      "id": 100000,
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2014-05-04T13:00:38.3Z",
      "completedDate": "2014-05-04T13:00:38.3Z",
      "outcome": "Passed",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 5,
      "runBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "state": "Completed",
      "testCase": {
        "id": "39",
        "name": "Shopping cart"
      },
      "testRun": {
        "id": "4",
        "name": "sprint1 (Manual)",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4"
      },
      "lastUpdatedDate": "2014-05-04T13:01:02.943Z",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "priority": 2,
      "computerName": "",
      "createdDate": "2014-05-04T13:00:37.22Z",
      "associatedBugs": [],
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000"
    },
    {
      "id": 100001,
      "configuration": {
        "id": "2",
        "name": "Windows 8"
      },
      "project": {
        "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
        "name": "Fabrikam-Fiber-TFVC",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
      },
      "startedDate": "2014-05-04T13:00:38.3Z",
      "completedDate": "2014-05-04T13:00:38.3Z",
      "outcome": "Failed",
      "owner": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "revision": 3,
      "runBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "state": "Completed",
      "testCase": {
        "id": "40",
        "name": "Price check"
      },
      "testRun": {
        "id": "4",
        "name": "sprint1 (Manual)",
        "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4"
      },
      "lastUpdatedDate": "2014-05-04T13:01:02.943Z",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "priority": 2,
      "computerName": "",
      "createdDate": "2014-05-04T13:00:37.22Z",
      "associatedBugs": [],
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100001"
    }
  ],
  "count": 2
}
```


## Get a test result 

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}?api-version={version}[&includeIterationDetails={bool}]
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
| includeIterationDetails | bool     | false   | For iterative tests, get the details for each iteration in the result.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000?api-version=1.0
```

#### Sample response

```json
{
  "id": 100000,
  "configuration": {
    "id": "2",
    "name": "Windows 8"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-04T13:00:38.3Z",
  "completedDate": "2014-05-04T13:00:38.3Z",
  "outcome": "Passed",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 5,
  "runBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "state": "Completed",
  "testCase": {
    "id": "39",
    "name": "Shopping cart"
  },
  "testRun": {
    "id": "4",
    "name": "sprint1 (Manual)",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4"
  },
  "lastUpdatedDate": "2014-05-04T13:01:02.943Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "priority": 2,
  "computerName": "",
  "createdDate": "2014-05-04T13:00:37.22Z",
  "associatedBugs": [],
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000"
}
```


### With iteration details

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000?includeIterationDetails=true&api-version=1.0
```

#### Sample response

```json
{
  "id": 100000,
  "configuration": {
    "id": "2",
    "name": "Windows 8"
  },
  "project": {
    "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
    "name": "Fabrikam-Fiber-TFVC",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC"
  },
  "startedDate": "2014-05-04T13:00:38.3Z",
  "completedDate": "2014-05-04T13:00:38.3Z",
  "outcome": "Passed",
  "owner": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "revision": 5,
  "runBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "state": "Completed",
  "testCase": {
    "id": "39",
    "name": "Shopping cart"
  },
  "testRun": {
    "id": "4",
    "name": "sprint1 (Manual)",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4"
  },
  "lastUpdatedDate": "2014-05-04T13:01:02.943Z",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "priority": 2,
  "computerName": "",
  "createdDate": "2014-05-04T13:00:37.22Z",
  "iterationDetails": [
    {
      "id": 1,
      "outcome": "Passed",
      "errorMessage": "",
      "startedDate": "2014-05-04T13:00:38.697Z",
      "completedDate": "2014-05-04T13:00:44.567Z",
      "durationInMs": 5871,
      "actionResults": [
        {
          "actionPath": "00000002",
          "iterationId": 1,
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000002",
          "outcome": "Passed",
          "startedDate": "2014-05-04T13:00:38Z",
          "completedDate": "2014-05-04T13:00:38Z"
        },
        {
          "actionPath": "00000003",
          "iterationId": 1,
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000003",
          "outcome": "Passed",
          "startedDate": "2014-05-04T13:00:38Z",
          "completedDate": "2014-05-04T13:00:38Z"
        },
        {
          "actionPath": "00000004",
          "iterationId": 1,
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000004",
          "outcome": "Passed",
          "startedDate": "2014-05-04T13:00:38Z",
          "completedDate": "2014-05-04T13:00:38Z"
        }
      ],
      "parameters": [
        {
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ParameterResults?paramName=username",
          "iterationId": 1,
          "actionPath": "00000002",
          "parameterName": "username",
          "value": "abc"
        },
        {
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ParameterResults?paramName=password",
          "iterationId": 1,
          "actionPath": "00000003",
          "parameterName": "password",
          "value": "new"
        }
      ],
      "attachments": [],
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000?iterationId=1"
    },
    {
      "id": 2,
      "outcome": "Passed",
      "errorMessage": "",
      "startedDate": "2014-05-04T13:00:38.7Z",
      "completedDate": "2014-05-04T13:00:56.637Z",
      "durationInMs": 17938,
      "actionResults": [
        {
          "actionPath": "00000002",
          "iterationId": 2,
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/2/ActionResults?actionPath=00000002",
          "outcome": "Passed",
          "startedDate": "2014-05-04T13:00:38Z",
          "completedDate": "2014-05-04T13:00:38Z"
        },
        {
          "actionPath": "00000003",
          "iterationId": 2,
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/2/ActionResults?actionPath=00000003",
          "outcome": "Passed",
          "startedDate": "2014-05-04T13:00:38Z",
          "completedDate": "2014-05-04T13:00:38Z"
        },
        {
          "actionPath": "00000004",
          "iterationId": 2,
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/2/ActionResults?actionPath=00000004",
          "outcome": "Passed",
          "startedDate": "2014-05-04T13:00:38Z",
          "completedDate": "2014-05-04T13:00:38Z"
        }
      ],
      "parameters": [
        {
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/2/ParameterResults?paramName=username",
          "iterationId": 2,
          "actionPath": "00000002",
          "parameterName": "username",
          "value": "aaa"
        },
        {
          "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/2/ParameterResults?paramName=password",
          "iterationId": 2,
          "actionPath": "00000003",
          "parameterName": "password",
          "value": "old"
        }
      ],
      "attachments": [],
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000?iterationId=2"
    }
  ],
  "associatedBugs": [],
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000"
}
```


## Get iterations for a result

```
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}/iterations?api-version={version}[&id={int}&includeActionResults={bool}]
```

| Parameter               | Type     | Default | Notes
|:------------------------|:---------|:--------|:-----------------------
| URL
| instance                | string   |         | TFS server name ({server:port}).
| project                 | string   |         | Name or ID of the project.
| run                     | int      |         | ID of the test run that contains the result.
| result                  | int      |         | ID of the test result that contains the iterations.
| Query
| version                 | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| id                      | int      |         | ID of a specific iteration, used to get just that iteration. If not specified, all iterations in the result are returned.
| includeActionResults    | bool     | false   | Include result details for each action performed in the test iteration. ActionResults refer to outcome (pass/fail) of test steps that are executed as part of a running a manual test. Including the ActionResults flag gets the outcome of test steps in the actionResults section and test parameters in the parameters section for each test iteration.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000/iterations?api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 1,
      "outcome": "Passed",
      "errorMessage": "",
      "startedDate": "2014-05-04T13:00:38.697Z",
      "completedDate": "2014-05-04T13:00:44.567Z",
      "durationInMs": 5871,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000?iterationId=1"
    },
    {
      "id": 2,
      "outcome": "Passed",
      "errorMessage": "",
      "startedDate": "2014-05-04T13:00:38.7Z",
      "completedDate": "2014-05-04T13:00:56.637Z",
      "durationInMs": 17938,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000?iterationId=2"
    }
  ]
}
```


### For a specific iteration

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000/iterations/1?api-version=1.0
```

#### Sample response

```json
{
  "id": 1,
  "outcome": "Passed",
  "errorMessage": "",
  "startedDate": "2014-05-04T13:00:38.697Z",
  "completedDate": "2014-05-04T13:00:44.567Z",
  "durationInMs": 5871,
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000?iterationId=1"
}
```


### With action results

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000/iterations/1?includeActionResults=true&api-version=1.0
```

#### Sample response

```json
{
  "id": 1,
  "outcome": "Passed",
  "errorMessage": "",
  "startedDate": "2014-05-04T13:00:38.697Z",
  "completedDate": "2014-05-04T13:00:44.567Z",
  "durationInMs": 5871,
  "actionResults": [
    {
      "actionPath": "00000002",
      "iterationId": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000002",
      "outcome": "Passed",
      "startedDate": "2014-05-04T13:00:38Z",
      "completedDate": "2014-05-04T13:00:38Z"
    },
    {
      "actionPath": "00000003",
      "iterationId": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000003",
      "outcome": "Passed",
      "startedDate": "2014-05-04T13:00:38Z",
      "completedDate": "2014-05-04T13:00:38Z"
    },
    {
      "actionPath": "00000004",
      "iterationId": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000004",
      "outcome": "Passed",
      "startedDate": "2014-05-04T13:00:38Z",
      "completedDate": "2014-05-04T13:00:38Z"
    }
  ],
  "parameters": [
    {
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ParameterResults?paramName=username",
      "iterationId": 1,
      "actionPath": "00000002",
      "parameterName": "username",
      "value": "abc"
    },
    {
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ParameterResults?paramName=password",
      "iterationId": 1,
      "actionPath": "00000003",
      "parameterName": "password",
      "value": "new"
    }
  ],
  "attachments": [],
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000?iterationId=1"
}
```


##Get a list of action results

Gets the action results for an iteration in a test result.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}/iterations/{iteration}/actionResults?api-version={version}[&actionPath={int}]
```

| Parameter               | Type     | Default | Notes
|:------------------------|:---------|:--------|:-----------------------
| URL
| instance                | string   |         | TFS server name ({server:port}).
| project                 | string   |         | Name or ID of the project.
| run                     | int      |         | ID of the test run that contains the result.
| result                  | int      |         | ID of the test result that contains the iterations.
| iteration               | int      |         | ID of the iteration that contains the actions.
| Query
| version                 | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| actionPath              | string   |         | Path of a specific action, used to get just that action.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000/iterations/1/actionresults?api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "actionPath": "00000002",
      "iterationId": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000002",
      "outcome": "Passed",
      "startedDate": "2014-05-04T13:00:38Z",
      "completedDate": "2014-05-04T13:00:38Z"
    },
    {
      "actionPath": "00000003",
      "iterationId": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000003",
      "outcome": "Passed",
      "startedDate": "2014-05-04T13:00:38Z",
      "completedDate": "2014-05-04T13:00:38Z"
    },
    {
      "actionPath": "00000004",
      "iterationId": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000004",
      "outcome": "Passed",
      "startedDate": "2014-05-04T13:00:38Z",
      "completedDate": "2014-05-04T13:00:38Z"
    }
  ]
}
```


### For a specific action result

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000/iterations/1/actionresults?actionPath=00000002&api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "actionPath": "00000002",
      "iterationId": 1,
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ActionResults?actionPath=00000002",
      "outcome": "Passed",
      "startedDate": "2014-05-04T13:00:38Z",
      "completedDate": "2014-05-04T13:00:38Z"
    }
  ]
}
```


##Get a list of parameterized results

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}/iterations/{iteration}/parameterresults?api-version={version}[&paramName={string}]
```
In a parameterized test, gets results for each parameter value.

| Parameter               | Type     | Default | Notes
|:------------------------|:---------|:--------|:-----------------------
| URL
| instance                | string   |         | TFS server name ({server:port}).
| project                 | string   |         | Name or ID of the project.
| run                     | int      |         | ID of the test run that contains the result.
| result                  | int      |         | ID of the test result that contains the iterations.
| iteration               | int      |         | ID of the iteration that contains the parameterized results.
| Query
| version                 | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| paramName               | string   |         | Name of the parameter.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000/iterations/1/parameterresults?api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ParameterResults?paramName=username",
      "iterationId": 1,
      "actionPath": "00000002",
      "parameterName": "username",
      "value": "abc"
    },
    {
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ParameterResults?paramName=password",
      "iterationId": 1,
      "actionPath": "00000003",
      "parameterName": "password",
      "value": "new"
    }
  ]
}
```


### For a specific parameter

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/runs/4/results/100000/iterations/1/parameterresults?paramName=username&api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Runs/4/Results/100000/Iterations/1/ParameterResults?paramName=username",
      "iterationId": 1,
      "actionPath": "00000002",
      "parameterName": "username",
      "value": "abc"
    }
  ]
}
```


## Get test results by query (deprecated)
> This API is deprecated as of [!INCLUDE [API_version](../_data/version3-preview.md)].

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/results/query?api-version={version}[&includeResultDetails={bool}&includeIterationDetails={bool}&$skip={int}&$top={int}]
```

```http
Content-Type: application/json
```

```json
{
  "query": { string }
}
```

| Parameter               | Type   | Default | Notes
|:------------------------|:-------|:--------|:------------------------
| URL
| instance                | string |         | TFS server name ({server:port}).
| project                 | string |         | Name or ID of the project.
| Query
| version                 | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeResultDetails    | bool   | false   | If true, include all the properties of the test result.
| includeIterationDetails | bool   | false   | For iterative tests, get the details for each iteration in the result.
| $skip                   | int    |         | Number of test results to skip.
| $top                    | int    |         | Number of test results to return.
| Body
| query                   | string |         | Query string


#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/results/query?includeResultDetails=true&$top=2&api-version=2.0-preview
```
```json
{
  "query": "Select * From TestResult Where TestRunId = 45"
}
```

#### Sample response

```json
{
  "value": [
    {
      "id": 100000,
      "comment": "All test results got completed successfully",
      "project": {
        "id": "8e5a3cfb-fed3-46f3-8657-e3b175cd0305",
        "name": "Fabrikam",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam"
      },
      "outcome": "Passed",
      "revision": 4,
      "state": "Completed",
      "testCase": {
        "name": "VerifyWebsiteTheme"
      },
      "testRun": {
        "id": "45",
        "name": "Fabrikam Fiber test run ",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/45"
      },
      "lastUpdatedDate": "2015-06-09T02:33:35.77Z",
      "lastUpdatedBy": {
        "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
        "displayName": "fabrikam fiber",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/9a4515d2-a474-4175-8f7c-f72df24197eb",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=9a4515d2-a474-4175-8f7c-f72df24197eb"
      },
      "priority": 1,
      "createdDate": "2015-06-09T02:33:34.94Z",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/45/Results/100000",
      "failureType": "None",
      "area": {
        "id": "15127",
        "name": "Fabrikam",
        "url": "vstfs:///Classification/Node/e9f689c9-f70a-42bb-8db5-97b0c05f7e70"
      },
      "testCaseTitle": "VerifyWebsiteTheme",
      "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteTheme"
    },
    {
      "id": 100001,
      "comment": "All test results got completed successfully",
      "project": {
        "id": "8e5a3cfb-fed3-46f3-8657-e3b175cd0305",
        "name": "Fabrikam",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam"
      },
      "outcome": "Failed",
      "revision": 4,
      "state": "Completed",
      "testCase": {
        "name": "VerifyWebsiteLinks"
      },
      "testRun": {
        "id": "45",
        "name": "Fabrikam Fiber test run ",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/45"
      },
      "lastUpdatedDate": "2015-06-09T02:33:35.77Z",
      "lastUpdatedBy": {
        "id": "9a4515d2-a474-4175-8f7c-f72df24197eb",
        "displayName": "fabrikam fiber",
        "uniqueName": "fabrikamfiber.vsin@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/9a4515d2-a474-4175-8f7c-f72df24197eb",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=9a4515d2-a474-4175-8f7c-f72df24197eb"
      },
      "priority": 2,
      "createdDate": "2015-06-09T02:33:34.94Z",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/45/Results/100001",
      "failureType": "None",
      "area": {
        "id": "15127",
        "name": "Fabrikam",
        "url": "vstfs:///Classification/Node/e9f689c9-f70a-42bb-8db5-97b0c05f7e70"
      },
      "testCaseTitle": "VerifyWebsiteLinks",
      "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteLinks"
    }
  ],
  "count": 2
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
  "index": {int},
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
  "testCasePriority": { string },
  "failureType": { string },
  "automatedTestName": { string },
  "automatedTestStorage": { string },
  "automatedTestType": { string },
  "automatedTestTypeId": { string },
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
  "associatedWorkItems": [ 
    { int } 
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
| index                | int      |         | Index can be used by client to identify the result being published.<br/>Index value will be returned as is along with corresponding publish result object details and can help identify the correct result ID for subsequent operations on the result.
| testCaseTitle        | string   |	    | Title of the test case.
| testCase.id          | int      |         | ID of the test case to use.
| configuration.id     | int      |         | ID of the test configuration to use.
| configuration.name   | string   |         | Name of the test configuration to use.
| testPoint.Id         | int      |         | ID of the test point to use.
| state                | enum { Pending, Queued, InProgress, Paused, Completed } | Pending | State of the test result
| computerName         | string   |         | Name of the computer used for test execution.
| resolutionState      | string   |         | Resolution state of the test result.
| testCasePriority     | int      |         | Priority of the test case.
| failureType          | string   | None    | Failure type of the test result.
| automatedTestName    | string   |         | Title of automated test case.
| automatedTestStorage | string   |         | Automated test storage.
| automatedTestType    | string   |         | Automated test type.
| automatedTestTypeId  | string   |         | Automated test type Id.
| automatedTestId      | string   |         | Automated test Id.
| area.name            | string   |         | Area Path of the test result.
| owner.displayName    | string   |         | Name of the result owner
| runBy.displayName    | string   |         | Name of the person who executed the test case.
| outcome              | enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress } | None | Outcome of the test result.
| errorMessage         | string   |         | Error message
| comment              | string   |         | Comments entered by person who analyzed the result.
| startedDate          | DateTime |         | Start date of test result
| completedDate        | DateTime |         | Completed date of test result
| durationInMs         | long     |         | Execution time of the test case in milliseconds                               
| associatedWorkItems  | int[]    |         | IDs of the bugs associated with test result.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/46/results?api-version=2.0-preview
```
```json
[
  {
    "testCaseTitle": "VerifyWebsiteTheme",
    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteTheme",
    "testCasePriority": 1,
    "outcome": "Passed"
  },
  {
    "testCaseTitle": "VerifyWebsiteLinks",
    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteLinks",
    "testCasePriority": 2,
    "outcome": "Failed"
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
    "testResult": {
       "id": { int }
    },
    "state": {
	enum { Pending, Queued, InProgress, Paused, Completed }
    },
    "computerName": { string },    
    "resolutionState": { string },
    "testCasePriority": { string },
    "failureType": { string },  
    "automatedTestTypeId": { string },  
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
    "associatedWorkItems": [ 
         { int } 
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
| testResult.Id       | int      |         | ID of the test result which has to be updated.
| state               | enum { Pending, Queued, InProgress, Paused, Completed } |    | State of the test result
| computerName        | string   |         | Name of the computer used for test execution.
| resolutionState     | string   |         | Resolution state of the test result.
| testCasePriority    | int      |         | Priority of the test case.
| failureType         | string   |         | Failure type of the test result.
| automatedTestTypeId | string   |         | Automated test type Id.
| owner.displayName   | string   |         | Name of the result owner
| runBy.displayName   | string   |         | Name of the person who executed the test case.
| outcome             | enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress } |    | Outcome of the test result.
| errorMessage        | string   |         | Error message
| comment             | string   |         | Comments entered by person who analyzed the result.
| startedDate         | DateTime |         | Started date for test result
| completedDate       | DateTime |         | Completed date for test result
| durationInMs        | long     |         | Execution time of the test case in milliseconds                               
| associatedWorkItems | int[]    |         | IDs of the bugs associated with test result.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/45/results?api-version=2.0-preview
```
```json
[
  {
    "testResult": {
      "id": 100000
    },
    "state": "Completed",
    "comment": "Website theme is looking good"
  },
  {
    "testResult": {
      "id": 100001
    },
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



## Update same set of properties for multiple test results in a test run (deprecated)
> This API is deprecated as of [!INCLUDE [API_version](../_data/version3-preview.md)].

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results?api-version={version}[&resultIds={string}]
```
```http
Content-Type: application/json
```
```json

{  
  "testResult": {
     "id": { int }
  },
  "state": {
     enum { Pending, Queued, InProgress, Paused, Completed }
  },
  "computerName": { string },    
  "resolutionState": { string },
  "testCasePriority": { string },
  "failureType": { string },  
  "automatedTestTypeId": { string },  
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
  "associatedWorkItems": [ 
       { int } 
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
| resultIds            | string   |         | A comma-separated list of up to 200 IDs of test results to update.
| Body
| testResult.Id        | int      |		    | ID of the test result which has to be updated.
| state                | enum { Pending, Queued, InProgress, Paused, Completed } |     | State of the test result
| computerName         | string   |         | Name of the computer used for test execution.
| resolutionState      | string   |         | Resolution state of the test result.
| testCasePriority     | int      |         | Priority of the test case.
| failureType          | string   |         | Failure type of the test result.
| automatedTestTypeId  | string   |         | Automated test type Id.
| owner.displayName    | string   |         | Name of the result owner
| runBy.displayName    | string   |         | Name of the person who executed the test case.
| outcome              | enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress } |     | Outcome of the test result.
| errorMessage         | string   |         | Error message
| comment              | string   |         | Comments entered by person who analyzed the result.
| startedDate          | DateTime |         | Started date for test result
| completedDate        | DateTime |         | Completed date for test result
| durationInMs         | long     |         | Execution time of the test case in milliseconds                               
| associatedWorkItems  | int[]    |         | IDs of the bugs associated with test result.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/45/results?resultIds=100000,100001&api-version=2.0-preview
```
```json
{
  "state": "Completed",
  "comment": "All test results got completed successfully"
}
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



