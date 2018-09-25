---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Runs | REST API Reference for Team Foundation Server
description: Work with test runs programmatically using the REST APIs for Team Foundation Server.
ms.assetid: D2ABEFCD-11BE-4155-BA82-3B39A9593505
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test runs
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test runs
<a name="getalistoftestruns" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs?api-version={version}[&buildUri={string}&owner={string}&planId={int}&automated={bool}&includerundetails={bool}&$skip={int}&$top={int}
```

| Parameter         | Type   | Default | Notes
|:------------------|:-------|:--------|:------------------------
| URL
| instance          | string |         | TFS server name ({server:port}).
| project           | string |         | Name or ID of the project.
| Query
| api-version       | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| buildUri          | string |         | URI of the build that the runs used.
| owner             | string |         | Team foundation ID of the owner of the runs.
| planId            | int    |         | ID of the test plan that the runs are a part of.
| automated         | bool   |         | If true, only returns automated runs.
| includeRunDetails | bool   | false   | If true, include all the properties of the runs.
| $skip             | int    |         | Number of test runs to skip.
| $top              | int    |         | Number of test runs to return.

[!code-REST [GET__test__projectName__runs_json](./_data/runs/GET__test__projectName__runs.json)]

### With details

[!code-REST [GET_test_runs_all_json](./_data/runs/GET_test_runs_all.json)]

### A page at a time

[!code-REST [GET__test__projectName__runs_top-3_json](./_data/runs/GET__test__projectName__runs_top-3.json)]

## Get test runs by query (deprecated)
> This API is deprecated as of [!INCLUDE [API_version](../_data/version3-preview.md)].

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs/query?api-version={version}[&includeRunDetails={bool}&$skip={int}&$top={int}]
```

```http
Content-Type: application/json
```

```json
{
  "query": { string }
}
```

| Parameter         | Type   | Default | Notes
|:------------------|:-------|:--------|:------------------------
| URL
| instance          | string |         | TFS server name ({server:port}).
| project           | string |         | Name or ID of the project.
| Query
| api-version       | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeRunDetails | bool   | false   | If true, include all the properties of the runs.
| $skip             | int    |         | Number of test runs to skip.
| $top              | int    |         | Number of test runs to return.
| Body
| query             | string |         | Query string


[!code-REST [POST__test_runs_query__top-2_json](./_data/runs/POST__test_runs_query__top-2.json)]

## Get a test run

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}?api-version={version}
```

| Parameter         | Type   | Notes
|:------------------|:-------|:------------------------
| URL
| instance          | string | TFS server name ({server:port}).
| project           | string | Name or ID of the project.
| run               | int    | ID of the run to get.
| Query
| api-version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET_test_run_id_json](./_data/runs/GET_test_run_id.json)]

## Get test run statistics
<a name="gettestrunstatistic" />
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/statistics?api-version={version}
```

| Parameter         | Type   | Notes
|:------------------|:-------|:------------------------
| URL
| instance          | string | TFS server name ({server:port}).
| project           | string | Name or ID of the project.
| run               | int    | ID of the run to get.
| Query
| api-version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET_run_statistics_json](./_data/runs/GET_run_statistics.json)]

## Get test run message logs

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/messageLogs?api-version={version}
```

| Parameter         | Type   | Notes
|:------------------|:-------|:------------------------
| URL
| instance          | string | TFS server name ({server:port}).
| project           | string | Name or ID of the project.
| run               | int    | ID of the run to get.
| Query
| api-version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__test_runs__newRunId__messageLogs_json](./_data/runs/GET__test_runs__newRunId__messageLogs.json)]

## Create new test run

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": { string },
  "plan": {
    "id": { int }
  },
  "iteration": { string } ,
  "build": {
	"id": { int }
  },
  "state": {
	enum { NotStarted, InProgress, Waiting }
  },
  "dueDate": { DateTime },
  "pointIds": [
    { int }
  ],
  "isAutomated": { bool },
  "controller": { string},
  "errorMessage": { string },
  "comment": { string },
  "testSettings": {
     "id": { int }
  },
  "testEnvironmentId": { Guid },
  "startedDate": { DateTime },
  "completedDate": { DateTime },
  "owner": {
     "displayName": { string }
  },  
  "buildDropLocation": { string },
  "buildPlatform": { string },
  "buildFlavor": { string },
  "configIds": [
     { int }
  ],
  "releaseUri": { string },
  "releaseEnvironmentUri": { string }
}
```

| Parameter                           | Type     | Default                            | Notes
|:------------------------------------|:---------|:-----------------------------------|:------------------------
| URL
| instance                            | string   |                                    | TFS server name ({server:port}).
| project                             | string   |                                    | Name or ID of the project.
| Query
| api-version                         | string   |                                    | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name                                | string   |		                              | Name of the test run.
| plan.id                             | int      |                                    | ID of the test plan to contain the run.
| iteration                           | string   | Root iteration of the project | The iteration in which to create the run.
| build.id                            | int      |                                    | ID the build to use.
| state                               | enum { NotStarted, InProgress, Waiting } | NotStarted | The state to place the run in when it's created.
| dueDate                             | DateTime |                                    | Due date and time for test run.
| comment                             | string   |                                    | Comments entered by those analyzing the run.
| pointIds                            | int[]    |                                    | IDs of the test points to use in the run.
| isAutomated                         | bool     | false                              | true if test run is automated, false otherwise.
| controller                          | string   |                                    | Name of the test controller used for automated run.
| errorMessage                        | string   |                                    | Error message associated with the run.
| testSettings.Id                     | int      |                                    | ID of the test settings associated with the run.
| testEnvironmentId                   | Guid     |                                    | ID of the test environment associated with the run.
| startedDate                         | DateTime |                                    | Start date time of the run.
| completedDate                       | DateTime |                                    | Completed date time of the run.
| owner.displayName                   | string   |                                    | Display name of the owner of the run.
| buildDropLocation                   | string   |                                    | Drop location of the build used for test run.
| buildPlatform                       | string   |                                    | Platform of the build used for test run. (E.g.: x86, amd64)
| buildFlavor                         | string   |                                    | Flavor of the build used for test run. (E.g: Release, Debug)
| configIds                           | int[]    |                                    | IDs of the test configurations associated with the run.
| releaseUri                          | string   |                                    | URI of release associated with the run.
| releaseEnvironmentUri               | string   |                                    | URI of release environment associated with the run.

[!code-REST [POST_test_arvind_run](./_data/runs/POST_test_arvind_run.json)]

### In an iteration

[!code-REST [POST__test__projectName__runs_iteration_json](./_data/runs/POST__test__projectName__runs_iteration.json)]

### With a specific state

[!code-REST [POST__test__projectName__runs_state_json](./_data/runs/POST__test__projectName__runs_state.json)]

### With a due date

[!code-REST [POST__test__projectName__runs_duedate_json](./_data/runs/POST__test__projectName__runs_duedate.json)]

### With a comment

[!code-REST [POST__test__projectName__runs_comment_json](./_data/runs/POST__test__projectName__runs_comment.json)]

## Update test run

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": { string },  
  "iteration": { string } ,
  "build": {
	"id": { int }
  },
  "state": {
	enum { NotStarted, InProgress, Completed, Aborted, Waiting }
  },
  "dueDate": { DateTime },
  "controller": { string},
  "errorMessage": { string },
  "comment": { string },
  "testSettings": {
     "id": { int }
  },
  "testEnvironmentId": { Guid },
  "startedDate": { DateTime },
  "completedDate": { DateTime },   
  "deleteUnexecutedResults": { bool },  
  "logEntries": [
      { "entryId": { int },   "dateCreated":  { DateTime }, "message": { string } }
  ]
}
```

| Parameter                           | Type     | Notes
|:------------------------------------|:---------|:------------------------
| URL
| instance                            | string   | TFS server name ({server:port}).
| project                             | string   | Name or ID of the project.
| run                                 | int      | ID of the run to update.
| Query
| api-version                         | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name                                | string   | Name of the test run.
| iteration                           | string   | The iteration in which to create the run.
| build.id                            | int      | ID the build to use.
| state                               | enum { NotStarted, InProgress, Completed, Aborted, Waiting } | The state to place the run in when it's updated.
| dueDate                             | DateTime | Due date and time for test run.
| controller                          | string   | Name of the test controller used for automated run.
| errorMessage                        | string   | Error message associated with the run.
| comment                             | string   | Comments entered by those analyzing the run.
| testSettings.Id                     | int      | ID of the test settings associated with the run.
| testEnvironmentId                   | Guid     | ID of the test environment associated with the run.
| startedDate                         | DateTime | Start date time of the run.
| completedDate                       | DateTime | Completed date time of the run.
| deleteUnexecutedResults             | bool     | Delete the results for test cases that were not executed.
| logEntries                          | { logEntry }, { logEntry }, ... | Log entries associated with the run.<br/>Use a comma-separated list of multiple log entry objects.


### Rename

[!code-REST [PATCH_test_arvind_runs_json](./_data/runs/PATCH_test_arvind_runs.json)]

### Due date

[!code-REST [PATCH__test__projectName__runs__duedate_json](./_data/runs/PATCH__test__projectName__runs__duedate.json)]

### Start time

[!code-REST [PATCH__test__projectName__runs__startedDate_json](./_data/runs/PATCH__test__projectName__runs__startedDate.json)]

### Completed time

[!code-REST [PATCH__test__projectName__runs__completedDate_json](./_data/runs/PATCH__test__projectName__runs__completedDate.json)]

### Comment

[!code-REST [PATCH__test__projectName__runs__comment_json](./_data/runs/PATCH__test__projectName__runs__comment.json)]

### Log entries

[!code-REST [PATCH__test_runs__newRunId_messageLogs_json](./_data/runs/PATCH__test_runs__newRunId_messageLogs.json)]

## Delete a test run

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}?api-version={version}
```

| Parameter               | Type     | Notes
|:------------------------|:---------|:------------------------
| URL
| instance                | string   | TFS server name ({server:port}).
| project                 | string   | Name or ID of the project.
| run                     | int      | ID of the run to update
| Query
| api-version             | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE_test_runs_id_json](./_data/runs/DELETE_test_runs_id.json)]

