---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Results | REST API Reference for Team Foundation Server
description: Work with test results programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 70243742-BBC4-4586-AD22-A7756675A767
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/05/2016
---

# Test results
[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

While there is complete support to add/get automated test results, there is limited support for manual test results. You can get all manual test results, test iterations and test steps (action results), but cannot create manual test iterations or test steps (action results). 

## Get a list of test results 
<a name="getalistofresults" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results?api-version={version}[&detailsToInclude={string}&$skip={int}&$top={int}]
```

| Parameter               | Type     | Default | Notes
|:------------------------|:---------|:--------|:-----------------------
| URL
| instance                | string   |         | TFS server name ({server:port}).
| project                 | string   |         | Name or ID of the project.
| run                     | int      |         | ID of the test run that contains the results.
| Query
| version                 | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| detailsToInclude        | enum { None, Iterations, WorkItems}     | None   | None - Return results with core fields values only. Core fields includes State, Outcome, Priority, AutomatedTestName, AutomatedTestStorage, Comments, ErrorMessage etc.<br /> Iterations - Return results with core field values and test iteration details. <br /> WorkItems - Return results with core field values and associated workitems information.
| $skip					  | int      |    0    | Number of results to skip from beginning.
| $top					  | int      |    1000 | Number of results to return. Max is 1000 when detailsToInclude is None and 100 otherwise.

[!code-REST [GET__test_runs__runId__results_3_0](./_data/results/GET__test_runs__runId__results_3_0.json)]

### With workitem details

[!code-REST [GET__test_runs__runId__results_detailsToInclude-WorkItems__top-100_3_0](./_data/results/GET__test_runs__runId__results_detailsToInclude-WorkItems__top-100_3_0.json)]

### With test iterations and workitem details

[!code-REST [GET__test_runs_31_results__top-100_detailsToInclude-WorkItems,Iterations](./_data/results/GET__test_runs_31_results__top-100_detailsToInclude-WorkItems,Iterations.json)]


## Get a test result 

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}?api-version={version}[&detailsToInclude={string}]
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
| detailsToInclude        | enum { None, Iterations, WorkItems}     | None   | None - Return results with core fields values only. Core fields includes State, Outcome, Priority, AutomatedTestName, AutomatedTestStorage, Comments, ErrorMessage etc.<br /> Iterations - Return results with core field values and test iteration details. <br /> WorkItems - Return results with core field values and associated workitems information.

[!code-REST [GET__test_runs__runId__results_100000_3_0](./_data/results/GET__test_runs__runId__results_100000_3_0.json)]

## Add test results to a test run 

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
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
  "priority": { int },
  "failureType": { string },
  "automatedTestName": { string },
  "automatedTestStorage": { string },
  "automatedTestType": { string },
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
  "associatedBugs": [ 
    {
	 { "id" : {int} }
	} 
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
| testCaseTitle        | string   |	        | Title of the test case.
| testCase.id          | int      |         | ID of the test case to use.
| configuration.id     | int      |         | ID of the test configuration to use.
| configuration.name   | string   |         | Name of the test configuration to use.
| testPoint.Id         | int      |         | ID of the test point to use.
| state                | enum { Pending, Queued, InProgress, Paused, Completed } | Pending | State of the test result
| computerName         | string   |         | Name of the computer used for test execution.
| resolutionState      | string   |         | Resolution state of the test result.
| priority             | int      |    0    | Priority of the test case. If no priority to be set specify 255.
| failureType          | string   | None    | Failure type of the test result.
| automatedTestName    | string   |         | Title of automated test case.
| automatedTestStorage | string   |         | Automated test storage.
| automatedTestType    | string   |         | Automated test type.
| automatedTestId      | string   |         | Automated test Id.
| area.name            | string   |         | Area Path of the test result.
| owner.displayName    | string   |         | Name of the result owner
| runBy.displayName    | string   |         | Name of the person who executed the test case.
| outcome              | enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress } | None | Outcome of the test result.
| errorMessage         | string   |         | Error message
| comment              | string   |         | Comments entered by person who analyzed the result.
| startedDate          | DateTime |         | Start date of test result
| completedDate        | DateTime |         | Completed date of test result
| durationInMs         | long     |         | Execution time of the test case in milliseconds. This will be ignored when startDate and completedDate specified.                                                              
| associatedBugs       | int[]    |         | IDs of the bugs associated with test result.

[!code-REST [POST__test_runs__newRunId__results_3_0](./_data/results/POST__test_runs__newRunId__results_3_0.json)]

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
    "id": { int },
    "state": {
	enum { Pending, Queued, InProgress, Paused, Completed }
    },
    "computerName": { string },    
    "resolutionState": { string },
    "priority": { int },
    "failureType": { string }, 
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
    "associatedBugs": [ 
		{
		 { "id" : {int} }
		} 
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
| id                  | int      |         | ID of the test result which has to be updated.
| state               | enum { Pending, Queued, InProgress, Paused, Completed } |    | State of the test result
| computerName        | string   |         | Name of the computer used for test execution.
| resolutionState     | string   |         | Resolution state of the test result.
| priority            | int      |    0    | Priority of the test case. If no priority to be set specify 255.
| failureType         | string   |         | Failure type of the test result.
| owner.displayName   | string   |         | Name of the result owner
| runBy.displayName   | string   |         | Name of the person who executed the test case.
| outcome             | enum { None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress } |    | Outcome of the test result.
| errorMessage        | string   |         | Error message
| comment             | string   |         | Comments entered by person who analyzed the result.
| startedDate         | DateTime |         | Started date for test result
| completedDate       | DateTime |         | Completed date for test result
| durationInMs        | long     |         | Execution time of the test case in milliseconds. This will be ignored when startDate and completedDate specified.                                                              
| associatedBugs      | int[]    |         | IDs of the bugs associated with test result.

[!code-REST [PATCH__test_runs__newRunId__results_3_0](./_data/results/PATCH__test_runs__newRunId__results_3_0.json)]

