---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: CloneOperation | REST API Reference for Team Foundation Server
description: Work with cloning test plans and test suites programmatically using the REST APIs for Team Foundation Server.
ms.assetid: FF42473B-F1B6-45F2-89C8-A0F8169ACAC5
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

# Clone operation

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Clone test suite

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/plans/{planId}/suites/{suiteId}/cloneOperation?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "destinationSuiteId" : "int",
  "destinationSuiteProjectName" : "string",
  "options" : "CloneOptions"
}
```

| Parameter   | Type            | Default                     | Notes
|:------------|:---------       |:----------------------------|:---------------------
| URL
| instance    | string          |                             | TFS server name ({server:port}).
| project     | string          |                             | Name or ID of the project.
| planId      | int             |                             | ID of the test plan in which suite to be cloned is present
| suiteId      | int             |                             | ID of the test suite to be cloned
| api-version | string          |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| destinationSuiteId            | int  |                      | Contains ID of the suite to be cloned.
| cloneOptions| CloneOptions    |                             | Options for cloning can be passed. Clone options include : relatedLinkComment, copyAllSuites, copyAncestorHierarchy, destinationWorkItemType, cloneRequirements, overrideParameters. 
| destinationSuiteProjectName   | string  |                   | Destination project name

<br>

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/2/cloneOperation?api-version=3.0-preview.1
```
```json
{
  "destinationSuiteId": 13,
  "destinationSuiteProjectName": "fabrikam-fiber-tfvc2",
  "cloneOptions": {
    "copyAncestorHierarchy": true,
    "overrideParameters": {
      "System.AreaPath": "fabrikam-fiber-tfvc2",
      "System.IterationPath": "fabrikam-fiber-tfvc2"
    }
  }
}
```

#### Sample response

```json
{
  "opId": 3,
  "creationDate": "0001-01-01T00:00:00",
  "completionDate": "0001-01-01T00:00:00",
  "state": "queued",
  "message": null,
  "cloneStatistics": null,
  "resultObjectType": "testSuite",
  "destinationObject": {
    "id": "14",
    "name": "simpleCloned",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc2/_apis/test/Plans/13/Suites/14"
  },
  "sourceObject": {
    "id": "1",
    "name": "TestSuite1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/Suites/2"
  },
  "destinationPlan": {
    "id": "18",
    "name": "DestinationPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc2/_apis/test/Plans/18"
  },
  "sourcePlan": {
    "id": "1",
    "name": "TestPlan1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "destinationProject": {
    "name": "fabrikam-fiber-tfvc2",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc2"
  },
  "sourceProject": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/cloneOperation/3"
}
```



## Clone test plan

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/plans/{planId}/cloneOperation?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "destinationTestPlan" : "Destination Test Plan",
  "options" : "Clone Options",
  "suiteIds" : "Suite IDs List"
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| planId      | int      |                             | ID of the test plan to be cloned
| api-version | string   |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| destinationTestPlan        | TestPlan |                  | Contains details of the destination plan. Name of the test plan must be provided. Project, area , iteration of the test plan are optional.
| options| CloneOptions |                         | Options for cloning can be passed. Clone options include : relatedLinkComment, copyAllSuites, copyAncestorHierarchy, destinationWorkItemType, cloneRequirements, overrideParameters. 
| suiteIds    | int[]    |                             | List of all the suite IDs to be cloned inside the plan 

<br>

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1/cloneOperation?api-version=3.0-preview.1
```
```json
{
  "destinationTestPlan": {
    "name": "DestinationSuite",
    "Project": {
      "Name": "fabrikam-fiber-tfvc2"
    }
  },
  "options": {
    "copyAncestorHierarchy": true,
    "copyAllSuites": true,
    "overrideParameters": {
      "System.AreaPath": "fabrikam-fiber-tfvc2",
      "System.IterationPath": "fabrikam-fiber-tfvc2"
    }
  },
  "suiteIds": [
    2
  ]
}
```

#### Sample response

```json
{
  "opId": 2,
  "creationDate": "0001-01-01T00:00:00",
  "completionDate": "0001-01-01T00:00:00",
  "state": "queued",
  "message": null,
  "cloneStatistics": null,
  "resultObjectType": "testPlan",
  "destinationObject": {
    "id": "18",
    "name": "DestinationPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc2/_apis/test/Plans/18"
  },
  "sourceObject": {
    "id": "1",
    "name": "TestPlan1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "destinationPlan": {
    "id": "18",
    "name": "DestinationPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc2/_apis/test/Plans/18"
  },
  "sourcePlan": {
    "id": "1",
    "name": "TestPlan1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "destinationProject": {
    "name": "fabrikam-fiber-tfvc2",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc2"
  },
  "sourceProject": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/cloneOperation/2"
}
```


## Get clone information

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/cloneOperation/{operationId}?api-version={version}&$includeDetails={includeDetails}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| operationID        | int     | Operation ID returned when we queue a clone operation
| Query
| api-version        | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeDetails     | boolean | If false returns only status of the clone operation information, if true returns complete clone information

<br>

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/cloneOperation/2?$includeDetails=true&api-version=3.0-preview.1
```

#### Sample response

```json
{
  "opId": 2,
  "creationDate": "2015-12-22T08:41:39.403Z",
  "completionDate": "2015-12-22T08:41:40.49Z",
  "state": "succeeded",
  "message": null,
  "cloneStatistics": {
    "totalTestCasesCount": 7,
    "clonedTestCasesCount": 7,
    "clonedSharedStepsCount": 0,
    "totalRequirementsCount": 0,
    "clonedRequirementsCount": 0
  },
  "resultObjectType": "testPlan",
  "destinationObject": {
    "id": "18",
    "name": "DestinationPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc2/_apis/test/Plans/18"
  },
  "sourceObject": {
    "id": "1",
    "name": "TestPlan1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "destinationPlan": {
    "id": "18",
    "name": "DestinationPlan",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc2/_apis/test/Plans/18"
  },
  "sourcePlan": {
    "id": "1",
    "name": "TestPlan1",
    "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Plans/1"
  },
  "destinationProject": {
    "name": "fabrikam-fiber-tfvc2",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc2"
  },
  "sourceProject": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/cloneOperation/2"
}
```


