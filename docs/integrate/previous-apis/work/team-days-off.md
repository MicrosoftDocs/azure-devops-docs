---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Team Days Off | REST API Reference for Team Foundation Server
description: Work with team days off programmatically using the REST APIs for Team Foundation Server.
ms.assetid: b1bfef41-c787-40dd-be4d-6ed981e55fdd
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team days off

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/teamdaysoff?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "daysOff": [],
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/teamdaysoff",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/teamdaysoff"
    },
    "project": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/6d823a47-2d51-4f31-acff-74927f88ee1e"
    },
    "team": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/6d823a47-2d51-4f31-acff-74927f88ee1e/teams/748b18b6-4b3c-425a-bcae-ff9b3e703012"
    },
    "teamSettings": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings"
    },
    "teamIterations": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations"
    },
    "teamIteration": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee"
    }
  }
}
```


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


#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/teamdaysoff?api-version=2.0-preview.1
```
```json
{
  "daysOff": [
    {
      "start": "2015-03-14T00:00:00Z",
      "end": "2015-03-15T00:00:00Z"
    }
  ]
}
```

#### Sample response

```json
{
  "daysOff": [
    {
      "start": "2015-03-14T00:00:00Z",
      "end": "2015-03-15T00:00:00Z"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/teamdaysoff",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/teamdaysoff"
    },
    "project": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/6d823a47-2d51-4f31-acff-74927f88ee1e"
    },
    "team": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/6d823a47-2d51-4f31-acff-74927f88ee1e/teams/748b18b6-4b3c-425a-bcae-ff9b3e703012"
    },
    "teamSettings": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings"
    },
    "teamIterations": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations"
    },
    "teamIteration": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee"
    }
  }
}
```
