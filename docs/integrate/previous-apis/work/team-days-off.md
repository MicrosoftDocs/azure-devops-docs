---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Team Days Off | REST API Reference for Team Foundation Server
description: Work with team days off programmatically using the REST APIs for Team Foundation Server.
ms.assetid: b1bfef41-c787-40dd-be4d-6ed981e55fdd
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team days off
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a team's days off
<a id="GetTeamDaysOff"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationId}/TeamDaysOff?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| iterationId  | string   | ID of the iteration.
| Query
| api-version| string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__work_teamsettings_iterations__iterationId__teamdaysoff_json](./_data/teamDaysOff/GET__work_teamsettings_iterations__iterationId__teamdaysoff.json)]

## Set a team's days off
<a id="SetTeamDaysOff"></a>

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationId}/TeamDaysOff?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| iterationId  | string   | ID of the iteration.
| Query
| api-version| string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.


[!code-REST [PATCH__work_teamsettings_iterations__iterationId__teamdaysoff_json](./_data/teamDaysOff/PATCH__work_teamsettings_iterations__iterationId__teamdaysoff.json)]