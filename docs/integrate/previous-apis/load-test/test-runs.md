---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test Runs | REST API Reference for VSTS 
description: Work with Cloud Load Test programmatically using the REST APIs for VSTS .
ms.assetid: d013dd8a-b392-4669-98dd-1af1205c03b1
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Load test runs
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test runs

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/TestRuns
```

| Parameter                    | Type                    | Default | Notes                                                    |
|:-----------------------------|:------------------------|:--------|:---------------------------------------------------------|
|URL
| account                      | string                  |         | VSTS organization.
| Query
| name                         | string                  |         | Name for the test run. Names are not unique. Test runs with same name are assigned sequential rolling numbers. |
| requestedBy                  | string                  | "@Me"   | Filter by the user who requested the test run. Here requestedBy should be the display name of the user. |
| status                       | string                  |         | Filter by the test run status. |
| fromDate                     | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | DateTime.UtcNow | Filter by the test runs that have been modified after the fromDate timestamp. |
| toDate                       | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |  DateTime.UtcNow.AddDays(-7.0)  | Filter by the test runs that have been modified before the toDate timestamp. |
| detailed                     | boolean                 | False   | Include the detailed test run attributes. |
| top                          | int                     | 1000    | The maximum number of test runs to return. |

[!code-REST [GET__TestRuns_json](./_data/testruns/GET__TestRuns.json)]

### By name

[!code-REST [GET__TestRuns__filter__name__json](./_data/testruns/GET__TestRuns__filter__name_.json)]

### By user

[!code-REST [GET__TestRuns__filter__user__json](./_data/testruns/GET__TestRuns__filter__user_.json)]

### By status

[!code-REST [GET__TestRuns__filter__status__json](./_data/testruns/GET__TestRuns__filter__status_.json)]

### By date

[!code-REST [GET__TestRuns__filter__date__json](./_data/testruns/GET__TestRuns__filter__date_.json)]

### With detailed attributes

[!code-REST [GET__TestRuns__filter__detailed__json](./_data/testruns/GET__TestRuns__filter__detailed_.json)]

## Get a test run

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/TestRuns/{testrunid}
```

| Parameter                    | Type                    | Default | Notes |
|:-----------------------------|:------------------------|:---------|:------------|
|URL
| account                      | string                  |         | VSTS organization.
| testRunId                    | string                  |         | Unique ID of the test run |

[!code-REST [GET__TestRuns__testRunId__json](./_data/testruns/GET__TestRuns__testRunId_.json)]

## Get test run results

Gets the test results for the test run. Refer to [Test Results](./types.md#testresult) for the detailed description of the test result resource.
The results object contains the url to the archived test results file if available and top-level counter groups configured for this run.
In addition diagnostics object contains the url to the Storage in Azure where any of your custom log or trace files have been placed. And the LastModifiedTime will indicate how recent the file is and will not be present if there are no files in Storage.
Each counter group contains a set of counter instances (See [Counter Instances](./types.md#counterinstance).)

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/testruns/{testRunId}/results
```

| Parameter      | Type | Notes |
|:--------|:-----|:-----|:------------|
| URL
| account         | string  | VSTS organization.
| testrunid       | string  | ID of the test run.

[!code-REST [GET__TestResults__json](./_data/testresults/GET__TestResults_.json)]

### Errors

Get a list of errors encountered during a test run execution to help diagnose the test authoring and coding issues. 
This returns a tree structured view of all test errors encountered during execution based on their types and subtypes.

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/TestRuns/{testRunId}/errors
```

| Parameter                    | Type                    | Default | Notes |
|:-----------------------------|:------------------------|:---------|:------------|
|URL
| account                      | string                  |          |Your VSTS organization.
| testRunId                    | string                  |          |ID of the test run.
|Query
| detailed                     | boolean                 | false    | To include the details of test errors such as messagetext, request, stacktrace, testcasename, scenarioname, and lasterrordate.
| type                         | string                  |          | Filter for the particular type of errors.
| subtype                      | string                  |          | Filter for a particular subtype of errors. You should not provide error subtype without error type.

[!code-REST[GetTestRunErrorsDetailedFalse.json](./_data/errors/GetTestRunErrorsDetailedFalse.json)]

#### With Detailed=true

[!code-REST [GetTestRunErrorsDetailedTrue.json](./_data/errors/GetTestRunErrorsDetailedTrue.json)]

#### With Error Type specified

[!code-REST [errortype.json](./_data/errors/errortype.json)]


#### With Error Type and Subtype specified

[!code-REST [errortypesubtype.json](./_data/errors/errortypesubtype.json)]

#### With Error Type and Subtype specified and detailed=true

[!code-REST [errortypesubtypedetailed.json](./_data/errors/errortypesubtypedetailed.json)]

### Messages

Get a list of messages accrued during the execution of the test run. This includes various informational, instructional, warning and critical messages associated with the run.
Refer to [Test Run Message](./types.md#testrunmessage) for the detailed description of the test run message resource.

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/TestRuns/{testRunId}/messages
```

| Parameter      | Type | Notes |
|:--------|:-----|:-----|:------------|
| URL
| account   | string | VSTS organization.
| testRunId | string | ID of the test run.


[!code-REST [GET__messages__json](./_data/messages/GET__messages_.json)]

## Create a test run

```no-highlight
POST https://{account}.vsclt.visualstudio.com/_apis/clt/TestRuns
```

| Parameter1 Name | Type | Required | Notes |
|:--------|:-----|:-----|:------------|
| name | string | Yes | Name for the test run. Names are not unique. Test runs with same name are assigned next rolling number. |
| description | string | No | Description for the test run. |
| testDropRef.Id | string | Yes | Unique ID of the test drop. |
| testSettings.cleanupcommand | string | No | Location of the cleanup script file |
| testSettings.hostprocessplatform | enum| No | Allowed values {x86, x64, MSIL}. Default is x86. |
| testSettings.setupcommand | string | No | Location of the setup script file |

[!code-REST [POST__TestRuns_json](./_data/testruns/POST__TestRuns.json)]

## Start a test run

```no-highlight
PATCH https://{account}.vsclt.visualstudio.com/_apis/clt/TestRuns/{testrunid}
```

| Parameter                    | Type                    | Required  | Notes |
|:-----------------------------|:------------------------|:----------|:------------|
|URL
| account                      | string                  | Yes       | VSTS organization.
| testRunId                    | string                  | Yes       | ID of the test run. |
|Payload
| state                        | enum                    | Yes       | ```queued```

[!code-REST [PATCH__TestRuns__testRunId__json](./_data/testruns/PATCH__TestRuns__testRunId_Queued.json)]

## Stop a test run

```no-highlight
PATCH https://{account}.vsclt.visualstudio.com/_apis/clt/TestRuns/{testrunid}
```

| Parameter                    | Type                    | Required  | Notes |
|:-----------------------------|:------------------------|:----------|:------------|
|URL
| account                      | string                  | Yes       | VSTS organization.
| testRunId                    | string                  | Yes       | ID of the test run. |
|Payload
| state                        | enum                    | Yes       | ```aborted```

[!code-REST [PATCH__TestRuns__testRunId__json](./_data/testruns/PATCH__TestRuns__testRunId_Aborted.json)]


