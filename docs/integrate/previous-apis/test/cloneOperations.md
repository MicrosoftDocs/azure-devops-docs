---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: CloneOperation | REST API Reference for Team Foundation Server
description: Work with cloning test plans and test suites programmatically using the REST APIs for Team Foundation Server.
ms.assetid: FF42473B-F1B6-45F2-89C8-A0F8169ACAC5
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

#Clone operation
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

[!code-REST [POST__test__projectName__suites__clone_json](./_data/cloneOperation/POST__test__projectName__suites__clone.json)]


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

[!code-REST [POST__test__projectName__plans__clone_json](./_data/cloneOperation/POST__test__projectName__plans__clone.json)]

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

[!code-REST [GET__test__projectName__cloneOperation_json](./_data/cloneOperation/GET__test__projectName__cloneOperation.json)]

