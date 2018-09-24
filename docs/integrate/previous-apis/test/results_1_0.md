---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Results (Version 1.0) | REST API Reference for Team Foundation Server
description: Work with test results programmatically using the REST APIs for Team Foundation Server. This is for Version 1.0 of this API.
ms.assetid: FCBFFCFB-E57E-492F-9984-BD9C77EA4153
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/25/2016
---

# Test results  (Version 1.0)
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

[!code-REST [GET_testmanagement_testresults_json](./_data/results/GET_testmanagement_testresults.json)]

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

[!code-REST [GET_testmanagement_testresults_id_json](./_data/results/GET_testmanagement_testresults_id.json)]

### With iteration details

[!code-REST [GET__test__projectName__runs__runId__results_100000_includeIterationDetails-true_json](./_data/results/GET__test__projectName__runs__runId__results_100000_includeIterationDetails-true.json)]

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

[!code-REST [GET_testmanagement_iterationresults_json](./_data/results/GET_testmanagement_iterationresults.json)]

### For a specific iteration

[!code-REST [GET__test__projectName__runs__runId__results_100000_iterations_1_json](./_data/results/GET__test__projectName__runs__runId__results_100000_iterations_1.json)]

### With action results

[!code-REST [GET__test__projectName__runs__runId__results_100000_iterations_1_includeActionResults-true](./_data/results/GET__test__projectName__runs__runId__results_100000_iterations_1_includeActionResults-true.json)]

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

[!code-REST [GET_testmanagement_testresults_actionresults_json](./_data/results/GET_testmanagement_testresults_actionresults.json)]

### For a specific action result

[!code-REST [GET__test__results_100000_iterations_1_actionresults_actionPath-_actionPath__json](./_data/results/GET__test__results_100000_iterations_1_actionresults_actionPath-_actionPath_.json)]

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

[!code-REST [GET_testmanagement_testresults_parameterResults_json](./_data/results/GET_testmanagement_testresults_parameterResults.json)]

### For a specific parameter

[!code-REST [GET__test__projectName__runs__runId__results_100000_iterations_1_parameterresults_paramName-_parameterName__json](./_data/results/GET__test__projectName__runs__runId__results_100000_iterations_1_parameterresults_paramName-_parameterName_.json)]

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


[!code-REST [POST__test_results_query_includeResultDetails-true__top-2_json](./_data/results/POST__test_results_query_includeResultDetails-true__top-2.json)]

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

[!code-REST [POST__test_runs__newRunId__results__json](./_data/results/POST__test_runs__newRunId__results.json)]


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

[!code-REST [PATCH__test_runs__newRunId__results__json](./_data/results/PATCH__test_runs__newRunId__results.json)]


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
| resultIds            | string   |         | A comma-separated list of upto 200 IDs of test results to update.
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

[!code-REST [PATCH__test_runs__newRunId__results_resultIds-_result1_,_result2__json](./_data/results/PATCH__test_runs__newRunId__results_resultIds-_result1_,_result2_.json)]


