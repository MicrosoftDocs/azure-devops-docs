---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Iterations | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with team iterations programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 8a5b43ab-7d3c-4342-b738-65c310a556cc
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Iterations
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a team's iterations
<a id="GetTeamIteraions"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations?[$timeframe=current&]api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| Query
| api-version| string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| $timeframe | enum { current } | A filter for which iterations are returned based on relative time.  


[!code-REST [GET__work_teamsettings_iterations__json](./_data/iterations/GET__work_teamsettings_iterations.json)]

### By timeframe

[!code-REST [GET__work_teamsettings_iterations__timeframe-_timeframe__json](./_data/iterations/GET__work_teamsettings_iterations__timeframe-_timeframe_.json)]

## Get team settings for an iteration
<a id="GetTeamIteration"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationId}?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| iterationId  | string   | ID of the iteration.
| Query
| api-version| string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__work_teamsettings_iterations__iterationId__json](./_data/iterations/GET__work_teamsettings_iterations__iterationId_.json)]

## Add an iteration to the team
<a id="AddTeamIteration"></a>

```no-highlight
POST https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| Query
| api-version| string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [POST__work_teamsettings_iterations_json](./_data/iterations/POST__work_teamsettings_iterations.json)]

## Remove an iteration from the team
<a id="RemoveTeamIteration"></a>

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationId}?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| iterationId  | string   | ID of the iteration.
| Query
| api-version| string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [DELETE__work_teamsettings_iterations__iterationId__json](./_data/iterations/DELETE__work_teamsettings_iterations__iterationId_.json)]

## Update an iteration

To update an iteration for your team, check out the [classification nodes API](../wit/classification-nodes.md#updateIteration).