---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Attachments | REST API Reference for Team Foundation Server
description: Work with test attachments programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 17331F93-DD6A-459E-A3E6-D4A0FABAAC9B
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Test attachments

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/49/attachments?api-version=2.0-preview
```
```json
{
  "stream": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABlSURBVDhP7cxBCsAgDERR739pG/CnGJI0FopQ8O2cjNP6R85QbeNQU7wT1dkijaQ3vkZoWElaoTeJojW01cYh0jwfgiFBV/lEjOZtacijN/nLkOBHhIaVDgn+Wdycp6FXzlCl9wt0Y0cAzHo/zgAAAABJRU5ErkJggg==",
  "fileName": "imageAsFileAttachment.png",
  "comment": "Test attachment upload",
  "attachmentType": "GeneralAttachment"
}
```

#### Sample response

```json
{
  "id": 3,
  "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/49/Attachments/3"
}
```



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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/runs/49/results/100000/attachments?api-version=2.0-preview
```
```json
{
  "stream": "VXNlciB0ZXh0IGNvbnRlbnQgdG8gdXBsb2FkLg==",
  "fileName": "textAsFileAttachment.txt",
  "comment": "Test attachment upload",
  "attachmentType": "GeneralAttachment"
}
```

#### Sample response

```json
{
  "id": 4,
  "url": "https://mytfsserver/DefaultCollection/Fabrikam/_apis/test/Runs/49/Results/100000/Attachments/4"
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/23/attachments?api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "createdDate": "2016-07-13T13:09:44.89Z",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/23/Attachments/18",
      "id": 18,
      "fileName": "imageAsFileAttachment.png",
      "comment": "Test attachment upload"
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/23/results/100000/attachments?api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "createdDate": "2016-07-13T13:09:45.427Z",
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/23/Results/100000/Attachments/19",
      "id": 19,
      "fileName": "textAsFileAttachment.txt",
      "comment": "Test attachment upload"
    }
  ]
}
```

