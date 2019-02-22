---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Team Field Values | REST API Reference for Team Foundation Server
description: Work with team field values programmatically using the REST APIs for Team Foundation Server.
ms.assetid: eb99bcf1-7f2b-4db5-bfdf-f2b923ff9d5a
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team field values

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

The team field is used to identify which work items belong to your team. By default, Area Path is the team field, but it can be any field. Use this API to get and set the team field values.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a team field values
<a id="GetTeamFieldValues"></a>

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/Work/TeamSettings/TeamFieldValues?api-version={version}
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
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/teamfieldvalues?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "field": {
    "referenceName": "System.AreaPath",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
  },
  "defaultValue": "Fabrikam-Fiber\\Auto",
  "values": [
    {
      "value": "Fabrikam-Fiber\\Auto",
      "includeChildren": false
    },
    {
      "value": "Fabrikam-Fiber\\Fiber",
      "includeChildren": false
    },
    {
      "value": "Fabrikam-Fiber\\Optics",
      "includeChildren": false
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/teamfieldvalues",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/teamfieldvalues"
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
    "areaPathClassificationNodes": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/_apis/wit/classificationNodes/Areas"
    }
  }
}
```


## Update team field values
<a id="UpdateTeamFieldValues"></a>

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/{team}/_apis/Work/TeamSettings/TeamFieldValues?api-version={version}
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
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/teamsettings/teamfieldvalues?api-version=2.0-preview.1
```
```json
{
  "defaultValue": "Fabrikam-Fiber\\Auto",
  "values": [
    {
      "value": "Fabrikam-Fiber\\Auto",
      "includeChildren": true
    },
    {
      "value": "Fabrikam-Fiber\\Fiber",
      "includeChildren": false
    },
    {
      "value": "Fabrikam-Fiber\\Optics",
      "includeChildren": false
    }
  ]
}
```

#### Sample response

```json
{
  "field": {
    "referenceName": "System.AreaPath",
    "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
  },
  "defaultValue": "Fabrikam-Fiber\\Auto",
  "values": [
    {
      "value": "Fabrikam-Fiber\\Auto",
      "includeChildren": true
    },
    {
      "value": "Fabrikam-Fiber\\Fiber",
      "includeChildren": false
    },
    {
      "value": "Fabrikam-Fiber\\Optics",
      "includeChildren": false
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/teamfieldvalues",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/748b18b6-4b3c-425a-bcae-ff9b3e703012/_apis/work/teamsettings/teamfieldvalues"
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
    "areaPathClassificationNodes": {
      "href": "https://mytfsserver/DefaultCollection/6d823a47-2d51-4f31-acff-74927f88ee1e/_apis/wit/classificationNodes/Areas"
    }
  }
}
```
