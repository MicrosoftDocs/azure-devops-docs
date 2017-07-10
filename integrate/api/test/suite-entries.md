---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Test Suite Entries| REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with test suite entries programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 357368C6-6A97-4685-A154-ED665713B201
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

#Test suite entries
[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test suite entries

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/suiteEntry/{suiteId}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-----------
| URL
| instance    | string | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}). 
| project     | string | Name or ID of the team project.
| suiteId     | int    | ID of the parent suite of the suite entries to get.
| api-version | string | [Version](../../get-started/rest/basics.md#versions) of the API to use.


[!code-REST [GET_testmanagement_suiteEntries_json](./_data/suiteEntries/GET__test_suiteentry__suiteId_.json)]


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
| instance        | string |               |[VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}). 
| project         | string |               |Name or ID of the team project.
| suiteId         | int    |               |ID of the parent suite of the suite entries to reorder.
| api-version     | string |               |[Version](../../get-started/rest/basics.md#versions) of the API to use.
| Body
| testCaseId      | int    | 0             |ID of the test case.
| childSuiteId    | int    | 0             |ID of child suite.
| sequenceNumber  | int    |               |New sequence number of the suite entry in suite.
| suiteId         | int    |               |ID of the parent suite of the suite entry.

[!code-REST [PATCH_testmanagement_testsession_update_json](./_data/suiteEntries/PATCH__test_suiteentry__suiteId_.json)]