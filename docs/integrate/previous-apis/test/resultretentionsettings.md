---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Result Retention Settings | REST API Reference for Team Foundation Server
description: Work with test result retention settings programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 8A82A554-48F3-4A0B-A119-8C76A7E966DD
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Result retention settings

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)] Look [here](https://visualstudio.microsoft.com/docs/test/manual-exploratory-testing/getting-started/how-long-to-keep-test-results) to know more about result retention settings.

Below APIs fetch or update result retention settings for a project. To get list of projects, look [here](../tfs/projects.md).

## Get result retention settings

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/resultretentionsettings?api-version={version}
```

| Parameter               | Type     | Notes
|:------------------------|:---------|:-----------------------
| URL
| instance                | string   | TFS server name ({server:port}).
| project                 | string   | Name or ID of the project.
| Query
| version	              | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/resultretentionsettings?api-version=2.0-preview
```

#### Sample response

```json
{
  "lastUpdatedBy": {
    "id": "33d33df3-88ea-4704-a787-91092e0aa295",
    "displayName": "Fabrikam",
    "uniqueName": "fabrikamfiber.vsin@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/33d33df3-88ea-4704-a787-91092e0aa295",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=33d33df3-88ea-4704-a787-91092e0aa295"
  },
  "automatedResultsRetentionDuration": 30,
  "manualResultsRetentionDuration": 365,
  "lastUpdatedDate": "2015-10-15T04:23:12.203Z"
}
```



## Update result retention settings

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/resultretentionsettings?api-version={version}
```

```json
{
  "automatedResultsRetentionDuration": { int },
  "manualResultsRetentionDuration": { int }
}
```

| Parameter               | Type   | Notes
|:------------------------|:-------|:------------------------
| URL
| instance                | string | TFS server name ({server:port}).
| project                 | string | Name or ID of the project.
| Query
| version                 | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| automatedResultsRetentionDuration | int | Number of days to retain automated test results. Set -1 to retain indefinitely.
| manualResultsRetentionDuration | int | Number of days to retain manual test results. Set -1 to retain indefinitely.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/resultretentionsettings?api-version=2.0-preview
```
```json
{
  "automatedResultsRetentionDuration": 30,
  "manualResultsRetentionDuration": 100
}
```

#### Sample response

```json
{
  "lastUpdatedBy": {
    "id": "a5cbf24d-799f-452e-82be-f049a85b5895",
    "displayName": "Fabrikam",
    "uniqueName": "fabrikamfiber.vsin@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/a5cbf24d-799f-452e-82be-f049a85b5895",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=a5cbf24d-799f-452e-82be-f049a85b5895"
  },
  "automatedResultsRetentionDuration": 30,
  "manualResultsRetentionDuration": 100,
  "lastUpdatedDate": "2016-07-13T10:15:13.367Z"
}
```

