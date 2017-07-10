---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Result Retention Settings | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with test result retention settings programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 8A82A554-48F3-4A0B-A119-8C76A7E966DD
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Result retention settings
[!INCLUDE [API_version](../_data/version2-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)] Look [here](https://www.visualstudio.com/en-us/docs/test/manual-exploratory-testing/getting-started/how-long-to-keep-test-results) to know more about result retention settings.

Below APIs fetch or update result retention settings for a team project. To get list of team projects, look [here](../tfs/projects.md).

## Get result retention settings

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/resultretentionsettings?api-version={version}
```

| Parameter               | Type     | Notes
|:------------------------|:---------|:-----------------------
| URL
| instance                | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project                 | string   | Name or ID of the team project.
| Query
| version	              | string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__test_resultretentionsettings](./_data/resultretentionsettings/GET__test_resultretentionsettings.json)]


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
| instance                | string | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project                 | string | Name or ID of the team project.
| Query
| version                 | string | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| Body
| automatedResultsRetentionDuration | int | Number of days to retain automated test results. Set -1 to retain indefinitely.
| manualResultsRetentionDuration | int | Number of days to retain manual test results. Set -1 to retain indefinitely.

[!code-REST [PATCH__test_resultretentionsettings](./_data/resultretentionsettings/PATCH__test_resultretentionsettings.json)]
