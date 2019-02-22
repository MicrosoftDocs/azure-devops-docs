---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Suite Entries| REST API Reference for Team Foundation Server
description: Work with test suite entries programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 357368C6-6A97-4685-A154-ED665713B201
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test suite entries

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test suite entries

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/suiteEntry/{suiteId}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-----------
| URL
| instance    | string | TFS server name ({server:port}). 
| project     | string | Name or ID of the project.
| suiteId     | int    | ID of the parent suite of the suite entries to get.
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/suiteentry/339?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "suiteId": 339,
      "sequenceNumber": 0,
      "testCaseId": 341,
      "childSuiteId": 0
    },
    {
      "suiteId": 339,
      "sequenceNumber": 1,
      "testCaseId": 401,
      "childSuiteId": 0
    }
  ]
}
```



## Reorder suite entries in a test suite

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/suiteEntry/{suiteId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "testCaseId": { int },
  "childSuiteId": { int },
  "suiteId": { int },
  "sequenceNumber": { int }
}
```

| Parameter       | Type   |Default Value | Notes
|:----------------|:-------|:------------ |:------------------------------
| URL
| instance        | string |               |TFS server name ({server:port}). 
| project         | string |               |Name or ID of the project.
| suiteId         | int    |               |ID of the parent suite of the suite entries to reorder.
| api-version     | string |               |[Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| testCaseId      | int    | 0             |ID of the test case.
| childSuiteId    | int    | 0             |ID of child suite.
| sequenceNumber  | int    |               |New sequence number of the suite entry in suite.
| suiteId         | int    |               |ID of the parent suite of the suite entry.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/suiteentry/339?api-version=3.0-preview.1
```
```json
[
  {
    "sequenceNumber": 2,
    "testCaseId": 401,
    "childSuiteId": 0
  },
  {
    "sequenceNumber": 0,
    "testCaseId": 402,
    "childSuiteId": 0
  },
  {
    "sequenceNumber": 1,
    "testCaseId": 341,
    "childSuiteId": 0
  }
]
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "suiteId": 339,
      "sequenceNumber": 0,
      "testCaseId": 402,
      "childSuiteId": 0
    },
    {
      "suiteId": 339,
      "sequenceNumber": 1,
      "testCaseId": 341,
      "childSuiteId": 0
    },
    {
      "suiteId": 339,
      "sequenceNumber": 2,
      "testCaseId": 401,
      "childSuiteId": 0
    }
  ]
}
```
