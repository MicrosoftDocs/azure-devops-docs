---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Team Settings | REST API Reference for Team Foundation Server
description: Work with team settings programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 7e545cbe-a332-448e-95e6-6a56e9c48249
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team settings
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a team's settings
<a id="GetTeamSettings"></a>

```
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/Work/TeamSettings?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__work_teamsettings__JSON](./_data/teamsettings/GET__work_teamsettings.json)]

#### Sample code

* [C# (GetTeamSettings method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/Work/TeamSettingsSample.cs#L15)

## Update a team's settings
<a id="SetTeamSettings"></a>

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/{team}/_apis/Work/TeamSettings?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

| Parameter  	| Allowed Values
|:-----------	|:---------
| bugBehavior	| AsRequirements, AsTasks, Off
| workingDays   | monday, tuesday, wednesday, thursday, friday, saturday, sunday
| backlogVisibilities | A dictionary of keys (Microsoft.EpicCategory, Microsoft.FeatureCategor, Microsoft.RequirementCategory) and boolean values.

[!code-REST [PATCH__work_teamsettings__JSON](./_data/teamsettings/PATCH__work_teamsettings.json)]

#### Sample code

* [C# (UpdateTeamSettings method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/Work/TeamSettingsSample.cs#L34)