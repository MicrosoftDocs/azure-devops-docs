---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Attachments | REST API Reference for Team Foundation Server
description: Work with test attachments programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 17331F93-DD6A-459E-A3E6-D4A0FABAAC9B
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test attachments
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Attach a file to a test run

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/attachments?api-version={version}
```

```http
Content-Type: application/json
```

```json
{
  "stream": { string },
  "fileName": { string },
  "comment": { string },
  "attachmentType": { string }
}
```

| Parameter      | Type   | Default           | Notes
|:---------------|:-------|:------------------|:------------------------
| URL
| instance       | string |                   | TFS server name ({server:port}).
| project        | string |                   | Name or ID of the [project](../tfs/projects.md).
| run            | int    |                   | ID of the test run against which attachment has to be uploaded.
| Query
| api-version    | string |                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| stream         | string |                   | Base64 encoded file stream
| fileName       | string |                   | Attachment filename
| comment        | string |                   | Comment associated with attachment
| attachmentType | enum { GeneralAttachment, AfnStrip, BugFilingData, CodeCoverage, IntermediateCollectorData, RunConfig, TestImpactDetails,  TmiTestRunDeploymentFiles, TmiTestRunReverseDeploymentFiles, TmiTestResultDetail, TmiTestRunSummary } | GeneralAttachment | Attachment type

[!code-REST [POST__test_runs__newRunId__attachments_json](./_data/attachments/POST__test_runs__newRunId__attachments.json)]


## Attach a file to a test result

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}/attachments?api-version={version}
```

```http
Content-Type: application/json
```

```json
{
  "stream": { string },
  "fileName": { string },
  "comment": { string },
  "attachmentType": { string }
}
```

| Parameter      | Type   | Default           | Notes
|:---------------|:-------|-------------------|:------------------------
| URL
| instance       | string |                   | TFS server name ({server:port}).
| project        | string |                   | Name or ID of the [project](../tfs/projects.md).
| run            | int    |                   | ID of the test run that contains the result.
| result         | int    |                   | ID of the test results against which attachment has to be uploaded.
| Query
| api-version    | string |                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| stream         | string |                   | Base64 encoded file stream
| fileName       | string |                   | Attachment filename
| comment        | string |                   | Comment associated with attachment
| attachmentType | enum { GeneralAttachment, AfnStrip, BugFilingData, CodeCoverage, IntermediateCollectorData, RunConfig, TestImpactDetails,  TmiTestRunDeploymentFiles, TmiTestRunReverseDeploymentFiles, TmiTestResultDetail, TmiTestRunSummary } | GeneralAttachment | Attachment type

[!code-REST [POST__test_runs__newRunId__results__result1__attachments_json](./_data/attachments/POST__test_runs__newRunId__results__result1__attachments.json)]

## Download a test run attachment

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/attachments/{attachment}?api-version={version}
```

| Parameter      | Type   | Default           | Notes
|:---------------|:-------|:------------------|:------------------------
| URL
| instance       | string |                   | TFS server name ({server:port}).
| project        | string |                   | Name or ID of the [project](../tfs/projects.md).
| run            | int    |                   | ID of the test run whose attachment has to be downloaded.
| attachment     | int    |                   | ID of the test run attachment to be downloaded
| Query
| api-version    | string |                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

####Sample request
```no-highlight
GET https://fabrikam-fiber-inc:8080/DefaultCollection/fabrikam/_apis/test/runs/1/attachments/1?api-version=2.0-preview
```

####Response
Status code: 200
```
{ file-contents }
```

>[!NOTE]
>The response from this call will be the file itself (.jpeg, .json, etc.)

## Download a test result attachment

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}/attachments/{attachment}?api-version={version}
```

| Parameter      | Type   | Default           | Notes
|:---------------|:-------|:------------------|:------------------------
| URL
| instance       | string |                   | TFS server name ({server:port}).
| project        | string |                   | Name or ID of the [project](../tfs/projects.md).
| run            | int    |                   | ID of the test run that contains the result.
| result         | int    |                   | ID of the test result whose attachment has to be downloaded 
| attachment     | int    |                   | ID of the test result attachment to be downloaded
| Query
| api-version    | string |                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

####Sample request
```no-highlight
GET https://fabrikam-fiber-inc:8080/DefaultCollection/fabrikam/_apis/test/runs/1/results/100000/attachments/1?api-version=2.0-preview
```

####Response
Status code: 200
```
{ file-contents }
```  
>[!NOTE]
>The response from this call will be the file itself (.jpeg, .json, etc.)

## Get list of test run attachments

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/attachments?api-version={version}
```

| Parameter      | Type   | Default           | Notes
|:---------------|:-------|:------------------|:------------------------
| URL
| instance       | string |                   | TFS server name ({server:port}).
| project        | string |                   | Name or ID of the [project](../tfs/projects.md).
| run            | int    |                   | ID of the test run whose attachment has to be downloaded.
| Query
| api-version    | string |                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__test_runs__newRunId__attachments](./_data/attachments/GET__test_runs__newRunId__attachments.json)]

## Get list of test result attachments

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/results/{result}/attachments?api-version={version}
```

| Parameter      | Type   | Default           | Notes
|:---------------|:-------|:------------------|:------------------------
| URL
| instance       | string |                   | TFS server name ({server:port}).
| project        | string |                   | Name or ID of the [project](../tfs/projects.md).
| run            | int    |                   | ID of the test run that contains the result.
| result         | int    |                   | ID of the test result whose attachment has to be downloaded 
| Query
| api-version    | string |                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__test_runs__newRunId__results__result1__attachments](./_data/attachments/GET__test_runs__newRunId__results__result1__attachments.json)]
