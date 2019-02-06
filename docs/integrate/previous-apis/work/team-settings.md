---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Team Settings | REST API Reference for Team Foundation Server
description: Work with team settings programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 7e545cbe-a332-448e-95e6-6a56e9c48249
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Team settings

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber/_apis/work/teamsettings?api-version=3.0-preview
```

#### Sample response

```json
{
  "backlogIteration": {
    "id": "323b04b6-2fb8-4093-94f4-fbe3bd36a19f",
    "name": "Iteration",
    "path": "",
    "url": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations"
  },
  "bugsBehavior": "asRequirements",
  "workingDays": [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
  ],
  "backlogVisibilities": {
    "Microsoft.EpicCategory": false,
    "Microsoft.FeatureCategory": true,
    "Microsoft.RequirementCategory": true
  },
  "defaultIteration": {
    "id": "a912d62f-3eba-44b9-ab54-aa82af94b1d7",
    "name": "Iteration 1",
    "path": "\\Iteration 1",
    "url": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations/Iteration%201"
  },
  "defaultIterationMacro": "@currentIteration",
  "url": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings"
    },
    "project": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb"
    },
    "team": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/teams/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572"
    },
    "teamIterations": {
      "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings/iterations"
    },
    "teamFieldValues": {
      "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings/teamfieldvalues"
    },
    "classificationNode": [
      {
        "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations"
      },
      {
        "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations/Iteration%201"
      }
    ]
  }
}
```


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
| backlogVisibilities | A dictionary of keys (Microsoft.EpicCategory, Microsoft.FeatureCategory, Microsoft.RequirementCategory) and boolean values.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber/_apis/work/teamsettings?api-version=3.0-preview
```
```json
{
  "bugsBehavior": "AsTasks",
  "workingDays": [
    "monday",
    "tuesday",
    "wednesday",
    "thursday"
  ],
  "defaultIteration": "8C2457E8-8936-4CDC-B3AA-17B20F56C76C"
}
```

#### Sample response

```json
{
  "backlogIteration": {
    "id": "323b04b6-2fb8-4093-94f4-fbe3bd36a19f",
    "name": "Iteration",
    "path": "",
    "url": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations"
  },
  "bugsBehavior": "asTasks",
  "workingDays": [
    "monday",
    "tuesday",
    "wednesday",
    "thursday"
  ],
  "backlogVisibilities": {
    "Microsoft.EpicCategory": false,
    "Microsoft.FeatureCategory": true,
    "Microsoft.RequirementCategory": true
  },
  "defaultIteration": {
    "id": "8c2457e8-8936-4cdc-b3aa-17b20f56c76c",
    "name": "Iteration 3",
    "path": "\\Iteration 3",
    "url": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations/Iteration%203"
  },
  "defaultIterationMacro": null,
  "url": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings"
    },
    "project": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb"
    },
    "team": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/teams/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572"
    },
    "teamIterations": {
      "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings/iterations"
    },
    "teamFieldValues": {
      "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/3e9700ae-46cb-4ee3-ad77-3a1b1ae99572/_apis/work/teamsettings/teamfieldvalues"
    },
    "classificationNode": [
      {
        "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations"
      },
      {
        "href": "https://mytfsserver/DefaultCollection/c1f04a4e-c4e5-4e0d-8096-e5f9fd214bfb/_apis/wit/classificationNodes/Iterations/Iteration%203"
      }
    ]
  }
}
```


#### Sample code

* [C# (UpdateTeamSettings method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/Work/TeamSettingsSample.cs#L34)