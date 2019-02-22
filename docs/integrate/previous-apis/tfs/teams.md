---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Teams | REST API Reference for Team Foundation Server
description: Work with teams programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 5DF98D4C-7E59-4C44-B495-D664AC2AC71B
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Teams

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams?api-version=2.2
```

#### Sample response

```json
{
  "value": [
    {
      "id": "564e8204-a90b-4432-883b-d4363c6125ca",
      "name": "Quality assurance",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/564e8204-a90b-4432-883b-d4363c6125ca",
      "description": "Testing staff",
      "identityUrl": "https://mytfsserver/DefaultCollection/_apis/Identities/564e8204-a90b-4432-883b-d4363c6125ca"
    },
    {
      "id": "66df9be7-3586-467b-9c5f-425b29afedfd",
      "name": "Fabrikam-Fiber-TFVC Team",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/66df9be7-3586-467b-9c5f-425b29afedfd",
      "description": "The default project team.",
      "identityUrl": "https://mytfsserver/DefaultCollection/_apis/Identities/66df9be7-3586-467b-9c5f-425b29afedfd"
    }
  ],
  "count": 2
}
```


#### Sample code
* [C# (ListOrderedTeams method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L13)


<a id="GetTeamsPageAtATime"></a>
### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams?$top=1&$skip=1&api-version=2.2
```

#### Sample response

```json
{
  "value": [
    {
      "id": "66df9be7-3586-467b-9c5f-425b29afedfd",
      "name": "Fabrikam-Fiber-TFVC Team",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/66df9be7-3586-467b-9c5f-425b29afedfd",
      "description": "The default project team.",
      "identityUrl": "https://mytfsserver/DefaultCollection/_apis/Identities/66df9be7-3586-467b-9c5f-425b29afedfd"
    }
  ],
  "count": 1
}
```


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


#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/564e8204-a90b-4432-883b-d4363c6125ca?api-version=2.2
```

#### Sample response

```json
{
  "id": "564e8204-a90b-4432-883b-d4363c6125ca",
  "name": "Quality assurance",
  "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/564e8204-a90b-4432-883b-d4363c6125ca",
  "description": "Testing staff",
  "identityUrl": "https://mytfsserver/DefaultCollection/_apis/Identities/564e8204-a90b-4432-883b-d4363c6125ca"
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/564e8204-a90b-4432-883b-d4363c6125ca/members/?api-version=2.2
```

#### Sample response

```json
{
  "value": [
    {
      "id": "3b5f0c34-4aec-4bf4-8708-1d36f0dbc468",
      "displayName": "Christie Church",
      "uniqueName": "fabrikamfiber1@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/3b5f0c34-4aec-4bf4-8708-1d36f0dbc468",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=3b5f0c34-4aec-4bf4-8708-1d36f0dbc468"
    },
    {
      "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "displayName": "Chuck Reinhart",
      "uniqueName": "fabrikamfiber3@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    },
    {
      "id": "19d9411e-9a34-45bb-b985-d24d9d87c0c9",
      "displayName": "Johnnie McLeod",
      "uniqueName": "fabrikamfiber2@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/19d9411e-9a34-45bb-b985-d24d9d87c0c9",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=19d9411e-9a34-45bb-b985-d24d9d87c0c9"
    }
  ],
  "count": 3
}
```


#### Sample code

* [C# (GetTeamMembers method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L63)

### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams?$top=1&$skip=1&api-version=2.2
```

#### Sample response

```json
{
  "value": [
    {
      "id": "66df9be7-3586-467b-9c5f-425b29afedfd",
      "name": "Fabrikam-Fiber-TFVC Team",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/66df9be7-3586-467b-9c5f-425b29afedfd",
      "description": "The default project team.",
      "identityUrl": "https://mytfsserver/DefaultCollection/_apis/Identities/66df9be7-3586-467b-9c5f-425b29afedfd"
    }
  ],
  "count": 1
}
```

         
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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/teams?api-version=2.2
```
```json
{
  "name": "My new team"
}
```

#### Sample response

```json
{
  "id": "8e8aa4ff-848a-474a-9033-93190137c8e4",
  "name": "My New Team",
  "url": "https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/teams/8e8aa4ff-848a-474a-9033-93190137c8e4",
  "description": "",
  "identityUrl": "https://mytfsserver/DefaultCollection/_apis/Identities/8e8aa4ff-848a-474a-9033-93190137c8e4"
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/teams?api-version=2.2
```
```json
{
  "name": "My new team",
  "description": "Description of my team"
}
```

#### Sample response

```json
{
  "id": "8e8aa4ff-848a-474a-9033-93190137c8e4",
  "name": "My New Team",
  "url": "https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/teams/8e8aa4ff-848a-474a-9033-93190137c8e4",
  "description": "Description of my team",
  "identityUrl": "https://mytfsserver/DefaultCollection/_apis/Identities/8e8aa4ff-848a-474a-9033-93190137c8e4"
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/projects/8e5a3cfb-fed3-46f3-8657-e3b175cd0305/teams/8e8aa4ff-848a-474a-9033-93190137c8e4?api-version=2.2
```


#### Sample code

* [C# (DeleteTeam method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/TeamsSample.cs#L148)