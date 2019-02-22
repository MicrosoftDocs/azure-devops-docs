---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Capacity | REST API Reference for Team Foundation Server
description: Work with capacity programmatically using the REST APIs for Team Foundation Server.
ms.assetid: bfcad439-f8a2-4a73-9276-485fdf01aaaf
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Capacity

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "values": [
    {
      "teamMember": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "activities": [
        {
          "capacityPerDay": 0,
          "name": null
        }
      ],
      "daysOff": [],
      "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "teamMember": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
  },
  "activities": [
    {
      "capacityPerDay": 0,
      "name": null
    }
  ],
  "daysOff": [],
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
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
    },
    "capacity": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities"
    }
  }
}
```


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
| activity name	| Deployment, Design, Development, Documentation, Localization, Program Management, Testing (localized)

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d?api-version=2.0-preview.1
```
```json
{
  "activities": [
    {
      "name": "newActivity",
      "capacityPerDay": 6
    }
  ]
}
```

#### Sample response

```json
{
  "teamMember": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
  },
  "activities": [
    {
      "name": "newActivity",
      "capacityPerDay": 6
    }
  ],
  "daysOff": [],
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
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
    },
    "capacity": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/iterations/2ec76bfe-ba74-4060-970d-4567a3e997ee/capacities"
    }
  }
}
```
