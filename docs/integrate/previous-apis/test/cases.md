---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Cases | REST API Reference for Team Foundation Server
description: Work with test cases programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 17A2D523-0FEA-47EE-9C61-98D016F4F91D
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test cases
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

[!code-REST [GET_testmanagement_testsuite_testcases_json](./_data/cases/GET_testmanagement_testsuite_testcases.json)]

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

[!code-REST [GET_testmanagement_testsuite_testcase_id_json](./_data/cases/GET_testmanagement_testsuite_testcase_id.json)]

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

[!code-REST [DELETE__test_testcase_5_json](./_data/cases/DELETE__test_testcase_5.json)]

