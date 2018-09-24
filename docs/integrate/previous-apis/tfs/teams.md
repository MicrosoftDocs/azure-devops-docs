---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Teams | REST API Reference for Team Foundation Server
description: Work with teams programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 5DF98D4C-7E59-4C44-B495-D664AC2AC71B
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Teams
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of teams
<a id="GetTeams"></a>
Get all teams within the project that the authenticated user has access to.

```no-highlight
GET https://{instance}/DefaultCollection/_apis/projects/{project}/teams?api-version={version}[&$top={integer}&$skip={integer}]
```

| Parameter  | Type    | Default | Notes
|:-----------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string  |         | [VS Team Services account](/azure/devops/integrate/get-started/rest/basics) ({instance}.visualstudio.com) or [TFS server](/azure/devops/integrate/get-started/rest/basics) ({server:port}).
| project    | string  |         | Name or ID of the project.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top       | integer | 100     | Maximum number of teams to return.
| $skip      | integer | 0       | Number of teams to skip.

[!code-REST [GET__projects__projectId__teams_json](./_data/teams/GET__projects__projectId__teams.json)]

#### Sample code
* [C# (ListOrderedTeams method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L13)


<a id="GetTeamsPageAtATime"></a>
### A page at a time

[!code-REST [GET__projects__projectId__teams__top-_top___skip-_skip__json](./_data/teams/GET__projects__projectId__teams__top-_top___skip-_skip_.json)]

## Get a team
<a id="GetTeam"></a>

```no-highlight
GET https://{instance}/DefaultCollection/_apis/projects/{project}/teams/{team}?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/azure/devops/integrate/get-started/rest/basics) ({instance}.visualstudio.com) or [TFS server](/azure/devops/integrate/get-started/rest/basics) ({server:port}).
| project    | string   | Name or ID of the project.
| team       | string   | Name or ID of the team. 
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.


[!code-REST [GET__projects__projectId__teams__teamId__json](./_data/teams/GET__projects__projectId__teams__teamId_.json)]

#### Sample code

* [C# (GetTeam method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L42)

## Get a team's members
<a id="GetaTeamMembers"></a>
Append `/members` to the end of the URL to get a list of identity references for the team's members.

```no-highlight
GET https://{instance}/DefaultCollection/_apis/projects/{project}/teams/{team}/members?api-version={version}[&$top={integer}&$skip={integer}]
```
| Parameter  | Type     | Default | Notes
|:-----------|:---------|:--------|:-----------------------------------------------------
| URL
| instance   | string   |         | [VS Team Services account](/azure/devops/integrate/get-started/rest/basics) ({instance}.visualstudio.com) or [TFS server](/azure/devops/integrate/get-started/rest/basics) ({server:port}).
| project    | string   |         | Name or ID of the project.
| team       | string   |         | Name or ID of the team. 
| Query
| api-version| string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top       | integer  | `100`   | Maximum number of teams to return.
| $skip      | integer  | `0`     | Number of teams to skip.

[!code-REST [GET__projects__projectId__teams__teamId__members__json](./_data/teams/GET__projects__projectId__teams__teamId__members_.json)]

#### Sample code

* [C# (GetTeamMembers method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L63)

### A page at a time

[!code-REST [GET__projects__projectId__teams__top-_top___skip-_skip__json](./_data/teams/GET__projects__projectId__teams__top-_top___skip-_skip_.json)]
         
## Create a team
<a id="Create"></a>
Create a team in a project

```no-highlight
POST https://{instance}.VisualStudio.com/DefaultCollection/_apis/projects/{project}/teams?api-version={version}
```

```http
Content-Type: application/json
```

```json
{
    "name": {string},
    "description": {string}
}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account      | string | VS Team Services account ({account}.visualstudio.com) or TFS server ({server:port}).
| project      | string | Name or ID of the project.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name         | string | Name of the team.
| description  | string | Description of the team.

[!code-REST [POST__projects__projectId__teams__json](./_data/teams/POST__projects__projectId__teams.json)]

#### Sample code

* [C# (CreateTeam method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L90)

## Update a team
<a id="Update"></a>
Rename a team or change a team's description

```no-highlight
PATCH https://{instance}.VisualStudio.com/DefaultCollection/_apis/projects/{project}/teams/{team}?api-version={version}
```

```http
Content-Type: application/json
```

```json
{
  "name": {string},
  "description": {string}
}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account      | string | Your Visual Studio Online account.
| project      | string   | Name or ID of the project.
| team         | string   | Name or ID of the team.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name         | string | New name of the team.
| description  | string | New description of the team.

[!code-REST [PATCH__projects__projectId__teams__json](./_data/teams/PATCH__projects__projectId__teams.json)]

#### Sample code

* [C# (RenameTeam method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L121)

## Delete a team
<a id="Delete"></a>
Permanently delete a team.

```no-highlight
DELETE https://{instance}.VisualStudio.com/DefaultCollection/_apis/projects/{project}/teams/{team}?api-version={version}
```

| Parameter  | Type   | Notes
|:-----------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account    | string | VS Team Services account ({account}.visualstudio.com) or TFS server ({server:port}).
| project    | string | Name or ID of the project.
| team       | string | Name or ID of the team.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request
```no-highlight
DELETE https://fabrikam.VisualStudio.com/DefaultCollection/_apis/projects/fabrikam-fiber/teams/2ddc9d25-b0fe-45ed-97d1-d94c5a562c0b?api-version=2.2
```

[!code-REST [DELETE__projects__projectId__teams__newTeamId___json](./_data/teams/DELETE__projects__projectId__teams__newTeamId_.json)]

#### Sample code

* [C# (DeleteTeam method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L148)