---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Points | REST API Reference for Team Foundation Server
description: Work with test points programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 70C0FE8E-1A6B-4C0A-BC8A-46DAF75A9418
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test points
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

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points_json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points.json)]

### With fields

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points_witFields-_fields__json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points_witFields-_fields_.json)]

### By configuration

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points_configuration-_configuration__json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points_configuration-_configuration_.json)]

### By test case

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points_testcaseid-_testcaseId__json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points_testcaseid-_testcaseId_.json)]

### Specific points

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points_testPointIds-_testpointIds__json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points_testPointIds-_testpointIds_.json)]

### With details

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points_includePointDetails-true_json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points_includePointDetails-true.json)]

### A page at a time

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points__skip-_skip___top-_top__json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points__skip-_skip___top-_top_.json)]

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

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points__pointId__json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points__pointId_.json)]

### With fields

[!code-REST [GET__test__projectName__plans__planId__suites__suiteId__points__pointId__witFields-_fields__json](./_data/points/GET__test__projectName__plans__planId__suites__suiteId__points__pointId__witFields-_fields_.json)]

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

[!code-REST [PATCH__test__projectName__plans__planId__suites__suiteId__points__pointId__json](./_data/points/PATCH__test__projectName__plans__planId__suites__suiteId__points__pointId_.json)]

### Set the outcome

[!code-REST [PATCH__test__projectName__plans__planId__suites__suiteId__points__pointId_2_json](./_data/points/PATCH__test__projectName__plans__planId__suites__suiteId__points__pointId_2.json)]

### Change the tester

[!code-REST [PATCH__test__projectName__plans__planId__suites__suiteId__points__pointId_23_json](./_data/points/PATCH__test__projectName__plans__planId__suites__suiteId__points__pointId_23.json)]

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

[!code-REST [POST__test__projectName__points__json](./_data/points/POST__test__projectName__points_.json)]

### With Configuration filter

[!code-REST [POST__test__projectName__points__configuration_json](./_data/points/POST__test__projectName__points__configuration_.json)]

### With tester filter

[!code-REST [POST__test__projectName__points__tester_json](./_data/points/POST__test__projectName__points__tester_.json)]

### fetch a page using skip , top

[!code-REST [POST__test__projectName__points__page_json](./_data/points/POST__test__projectName__points__page_.json)]