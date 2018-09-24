---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Capacity | REST API Reference for Team Foundation Server
description: Work with capacity programmatically using the REST APIs for Team Foundation Server.
ms.assetid: bfcad439-f8a2-4a73-9276-485fdf01aaaf
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Capacity
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a team's capacity
<a id="GetTeamMembersCapacity"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationid}/Capacities?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| iterationid| string   | ID of the iteration.
| Query
| api-version| string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__work_teamsettings_iterations__iterationId__capacities_json](./_data/capacities/GET__work_teamsettings_iterations__iterationId__capacities.json)]

## Get a team member's capacity
<a id="GetTeamMemberCapacity"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationid}/capacities/{member}?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| iterationid| string   | ID of the iteration.
| member     | string   | ID of the team member.
| Query
| api-version| string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__work_teamsettings_iterations__iterationId__capacities__teammemberId__json](./_data/capacities/GET__work_teamsettings_iterations__iterationId__capacities__teammemberId_.json)]

## Update a team member's capacity
<a id="UpdateTeamMemberCapacity"></a>

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/{team}/_apis/Work/TeamSettings/Iterations/{iterationid}/capacities/{member}?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| iterationid| string   | ID of the iteration.
| member     | string   | ID of the team member.
| Query
| api-version| string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

| Parameter  	| Allowed Values     
|:-----------	|:---------
| activity name	| Deployment, Design, Development, Documentation, Localization, Program Managment, Testing (localized)

[!code-REST [PATCH__work_teamsettings_iterations__iterationId__capacities__teammemberId__json](./_data/capacities/PATCH__work_teamsettings_iterations__iterationId__capacities__teammemberId_.json)]