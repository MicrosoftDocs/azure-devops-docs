---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Team Field Values | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with team field values programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: eb99bcf1-7f2b-4db5-bfdf-f2b923ff9d5a
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Team field values
[!INCLUDE [API_version](../_data/version2-preview1.md)]

The team field is used to identify which work items belong to your team. By default, Area Path is the team field, but it can be any field. Use this API to get and set the the team field values.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a team field values
<a id="GetTeamFieldValues"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/Work/TeamSettings/TeamFieldValues?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| Query
| api-version| string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__work_teamsettings_teamfieldvalues_json](./_data/teamFieldValues/GET__work_teamsettings_teamfieldvalues.json)]

## Update team field values
<a id="UpdateTeamFieldValues"></a>

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/{team}/_apis/Work/TeamSettings/TeamFieldValues?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| Query
| api-version| string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [PATCH__work_teamsettings_teamfieldvalues_json](./_data/teamFieldValues/PATCH__work_teamsettings_teamfieldvalues.json)]