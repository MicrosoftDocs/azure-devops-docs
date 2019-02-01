---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Iterations | REST API Reference for Team Foundation Server
description: Work with team iterations programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 8a5b43ab-7d3c-4342-b738-65c310a556cc
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Iterations

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| Query
| api-version| string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $timeframe | enum { current } | A filter for which iterations are returned based on relative time.  


#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations?api-version=v2.0-preview
```

#### Sample response

```json
{
  "values": [
    {
      "id": "a589a806-bf11-4d4f-a031-c19813331553",
      "name": "Sprint 2",
      "attributes": {
        "startDate": null,
        "finishDate": null
      },
      "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553"
    },
    {
      "id": "2ec76bfe-ba74-4060-970d-4567a3e997ee",
      "name": "Sprint 3",
      "attributes": {
        "startDate": null,
        "finishDate": null
      },
      "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee"
    },
    {
      "id": "7757b6b8-e04d-4e7e-ad65-e2978ac3a6a4",
      "name": "Sprint 4",
      "attributes": {
        "startDate": null,
        "finishDate": null
      },
      "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/7757b6b8-e04d-4e7e-ad65-e2978ac3a6a4"
    },
    {
      "id": "4ea8cb72-5177-48b7-ad84-85ad4bebe645",
      "name": "Sprint 5",
      "attributes": {
        "startDate": null,
        "finishDate": null
      },
      "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/4ea8cb72-5177-48b7-ad84-85ad4bebe645"
    },
    {
      "id": "2de1694b-2b5b-4ce3-b35d-4888fc5a52fd",
      "name": "Sprint 6",
      "attributes": {
        "startDate": null,
        "finishDate": null
      },
      "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2de1694b-2b5b-4ce3-b35d-4888fc5a52fd"
    }
  ]
}
```


### By timeframe

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations?$timeframe=current&api-version=v2.0-preview
```

#### Sample response

```json
{
  "values": [
    {
      "id": "a589a806-bf11-4d4f-a031-c19813331553",
      "name": "Sprint 2",
      "attributes": {
        "startDate": null,
        "finishDate": null
      },
      "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553"
    }
  ]
}
```


## Get team settings for an iteration
<a id="GetTeamIteration"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationId}?api-version={version}
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
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553?api-version=v2.0-preview
```

#### Sample response

```json
{
  "id": "a589a806-bf11-4d4f-a031-c19813331553",
  "name": "Sprint 2",
  "path": "Fabrikam-Fiber\\Release 1\\Sprint 2",
  "attributes": {
    "startDate": null,
    "finishDate": null
  },
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553"
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
    "capacity": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553/capacities"
    },
    "classificationNode": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%202"
    },
    "teamDaysOff": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553/teamdaysoff"
    }
  }
}
```


## Add an iteration to the team
<a id="AddTeamIteration"></a>

```no-highlight
POST https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:-----------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| Query
| api-version| string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations?api-version=v2.0-preview
```
```json
"{\"id\":\"a589a806-bf11-4d4f-a031-c19813331553\"}"
```

#### Sample response

```json
{
  "id": "a589a806-bf11-4d4f-a031-c19813331553",
  "name": "Sprint 2",
  "path": "Fabrikam-Fiber\\Release 1\\Sprint 2",
  "attributes": {
    "startDate": null,
    "finishDate": null
  },
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553"
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
    "capacity": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553/capacities"
    },
    "classificationNode": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%202"
    },
    "teamDaysOff": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553/teamdaysoff"
    }
  }
}
```


## Remove an iteration from the team
<a id="RemoveTeamIteration"></a>

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/{team}/_apis/work/TeamSettings/Iterations/{iterationId}?api-version={version}
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
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations/a589a806-bf11-4d4f-a031-c19813331553?api-version=v2.0-preview
```


## Update an iteration

To update an iteration for your team, check out the [classification nodes API](../wit/classification-nodes.md#updateIteration).