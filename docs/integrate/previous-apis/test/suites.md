---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Suites | REST API Reference for Team Foundation Server
description: Work with test suites programmatically using the REST APIs for Team Foundation Server.
ms.assetid: AC2CE3FA-0BBF-4919-A850-383FEE4364B3
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Test suites
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

[!code-REST [GET_testmanagement_testsuite_json](./_data/suites/GET_testmanagement_testsuite.json)]

### A page at a time

[!code-REST [GET__test__projectName__plans__planId__suites__top-3_json](./_data/suites/GET__test__projectName__plans__planId__suites__top-3.json)]

### In tree structure

[!code-REST [GET__test_plans__planId__suites__asTreeView-true_json](./_data/suites/GET__test_plans__planId__suites__asTreeView-true.json)]

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

[!code-REST [GET__test_suites_testCaseId-_testcaseId__json](./_data/suites/GET__test_suites_testCaseId-_testcaseId_.json)]

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

[!code-REST [GET_testmanagement_testsuite_id_json](./_data/suites/GET_testmanagement_testsuite_id.json)]

### With children

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__includeChildSuites-true_json](./_data/suites/GET__test__projectName__plans__planId__suites__suiteId__includeChildSuites-true.json)]

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

[!code-REST [POST_testmanagement_static_testsuite_json](./_data/suites/POST_testmanagement_static_testsuite.json)]

### Based on a query
[!code-REST [POST_testmanagement_query_testsuite_json](./_data/suites/POST_testmanagement_query_testsuite.json)]

### Based on requirements
[!code-REST [POST_testmanagement_requirement_testsuite_json](./_data/suites/POST_testmanagement_requirement_testsuite.json)]

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

[!code-REST [POST_testmanagement_testsuite_testcase_ids_json](./_data/suites/POST_testmanagement_testsuite_testcase_ids.json)]

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

[!code-REST [DELETE_testmanagement_testsuite_testcase_ids_json](./_data/suites/DELETE_testmanagement_testsuite_testcase_ids.json)]

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
[!code-REST [PATCH_testmanagement_testsuite_rename_id_json](./_data/suites/PATCH_testmanagement_testsuite_rename_id.json)]

### Parent suite
[!code-REST [PATCH_testmanagement_testsuite_move_id_json](./_data/suites/PATCH_testmanagement_testsuite_move_id.json)]

### Query string

[!code-REST [PATCH__test__suites_querystring__json](./_data/suites/PATCH__test__suites_querystring_.json)]

### Configurations

[!code-REST [PATCH__test__suites_configurations_json](./_data/suites/PATCH__test__suites_configurations.json)]

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

[!code-REST [DELETE_testmanagement_testsuite_id_json](./_data/suites/DELETE_testmanagement_testsuite_id.json)]


