---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Projects | REST API Reference for Team Foundation Server
description: Work with projects programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 537E1A1F-DAE8-4110-AF0F-63D5D52F2AB6
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/16/2016
---

# Projects

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Projects contain source code, work items, and other resources.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of projects
<a id="GetProjects"></a>

Get all projects in the project collection that the authenticated user has access to.

```no-highlight
GET https://{instance}/DefaultCollection/_apis/projects?api-version={version}[&stateFilter{string}&$top={integer}&skip={integer}]
```

| Parameter          | Type                                                     | Default    | Notes                                                                                                                       
|:-------------------|:---------------------------------------------------------|:-----------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string                                                   |            | TFS server name ({server:port}).
| Query                                                                                                                                                         
| api-version        | string                                                   |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| stateFilter        | enum {<br/>&nbsp;&nbsp;WellFormed,<br/>&nbsp;&nbsp;CreatePending,<br/>&nbsp;&nbsp;Deleting,<br/>&nbsp;&nbsp;New,<br/>&nbsp;&nbsp;All<br/>}   | WellFormed | Return projects in a specific [project state](#by-state). 
| $top               | integer                                                  | 100        | Number of projects to return.
| $skip              | integer                                                  | 0          | Number of projects to skip. 

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects?api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
      "name": "Fabrikam-Fiber-TFVC",
      "description": "Team Foundation Version Control projects.",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
      "state": "wellFormed"
    },
    {
      "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "name": "Fabrikam-Fiber-Git",
      "description": "Git projects",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "state": "wellFormed"
    },
    {
      "id": "281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
      "name": "TestGit",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
      "state": "wellFormed"
    }
  ]
}
```


#### Sample code

* [C# (ListAllProjectsAndTeams method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L22)

### By state
<a id="projectStates"></a> 

| State Name    | Explanation
|:--------------|:-----------------
| All           | All projects regardless of state. 
| CreatePending | Project has been queued for creation, but the process has not yet started. 
| Deleting      | Project is in the process of being deleted. 
| New           | Project is in the process of being created.  
| WellFormed    | <b>Default: </b>Project is completely created and ready to use. 

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects?stateFilter=All&api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
      "name": "Fabrikam-Fiber-TFVC",
      "description": "Team Foundation Version Control projects.",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
      "state": "wellFormed"
    },
    {
      "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "name": "Fabrikam-Fiber-Git",
      "description": "Git projects",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
      "state": "wellFormed"
    },
    {
      "id": "281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
      "name": "TestGit",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/281f9a5b-af0d-49b4-a1df-fe6f5e5f84d0",
      "state": "wellFormed"
    }
  ]
}
```


#### Sample code

* [C# (ListProjectsByState method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L359)

### A page at a time
<a name="projectpageatatime"></a>

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects?$top=1&$skip=1&api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
      "name": "Fabrikam-Fiber-TFVC",
      "description": "Team Foundation Version Control projects.",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
      "state": "wellFormed"
    }
  ]
}
```


## Get a project
<a id="GetProject"></a>
<a name="getateamproject" />

```no-highlight
GET https://{instance}/DefaultCollection/_apis/projects/{project}?api-version={version}[&includeCapabilities={boolean}&includeHistory={boolean}]
```

| Parameter          | Type    | Default | Notes                                                                                                                       
|:-------------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string  |         | TFS server name ({server:port}).
| project            | string  |         | Name or ID of the project.   
| Query                                                                                                                                                         
| api-version        | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeCapabilities | boolean | `false` | Use `true` to [include capabilities](#withcapabilities) (such as source control) in the project result.
| includeHistory     | boolean | `false` | Use `true` to search within renamed projects that had such name in the past. 

### With capabilities
<a name="withcapabilities" />
Get metadata on a project, including its capabilities.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/Fabrikam-Fiber-TFVC?includeCapabilities=true&api-version=1.0
```

#### Sample response

```json
{
  "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
  "name": "Fabrikam-Fiber-TFVC",
  "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
  "description": "Team Foundation Version Control projects.",
  "state": "wellFormed",
  "capabilities": {
    "versioncontrol": {
      "sourceControlType": "Tfvc"
    },
    "processTemplate": {
      "templateName": "Microsoft Visual Studio Scrum 2013"
    }
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1"
    },
    "collection": {
      "href": "https://mytfsserver/DefaultCollection/_apis/projectCollections/d81542e4-cdfa-4333-b082-1ae2d6c3ad16"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC"
    }
  },
  "defaultTeam": {
    "id": "66df9be7-3586-467b-9c5f-425b29afedfd",
    "name": "Fabrikam-Fiber-TFVC Team",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/66df9be7-3586-467b-9c5f-425b29afedfd"
  }
}
```


#### Sample code

* [C# (GetProjectDetails method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L98)

## Create a project
<a name="createateamproject" />
Create a project in a VSTS organization. Use the [GetOperation](#GetOperation) to periodically check for create project status.

```no-highlight
POST https://{instance}/defaultcollection/_apis/projects?api-version={version}
```

| Parameter   | Type  | Notes
|:------------|:--------:|:---------------------------------------------------
| URL
| instance    | string   | TFS server name ({server:port}).
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request Body
| name        | string | Name for the project.
| description | string | Description for the project.
| capabilities.versioncontrol.sourceControlType | enum { Git, Tfvc } | Version control type for the project.
| capabilities.processTemplate.templateTypeId | string | Software development schema for the project. See the [processes](processes.md#getalistofprocesses) REST API for how to retrieve the list of available processes and their corresponding IDs. 

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/projects?api-version=2.0-preview
```
```json
{
  "name": "FabrikamTravel",
  "description": "Fabrikam travel app for Windows Phone",
  "capabilities": {
    "versioncontrol": {
      "sourceControlType": "Git"
    },
    "processTemplate": {
      "templateTypeId": "6b724908-ef14-45cf-84f8-768b5384da45"
    }
  }
}
```

#### Sample response

```json
{
  "id": "066488b8-b14e-43d1-befc-a2e655266e2b",
  "status": "queued",
  "url": "https://mytfsserver/DefaultCollection/_apis/operations/066488b8-b14e-43d1-befc-a2e655266e2b"
}
```


#### Sample code

* [C# (CreateProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L121)

## Update a project
<a name="updateateamproject" />

Update a project's description or name. Use the [GetOperation](#GetOperation) to periodically check for update project status.

```no-highlight
PATCH https://{instance}/defaultcollection/_api/projects/{projectID}?api-version={version}
```

```http
Content-Type: application/json
```

```
{
	"name": {string},
	"description": {string}   
}
```

| Parameter  | Type  | Notes
|:-----------|:--------:|:---------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| projectID  | string | ID for the project.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request Body
| name        | string | Name of the project. 
| description | string | Description for the project.

### Rename a project
<a id="UpdateName"></a>

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1?api-version=2.0-preview
```
```json
{
  "name": "Fabrikam-Fiber"
}
```

#### Sample response

```json
{
  "id": "b5f386e9-c67d-4caf-8e78-4e58230c7e90",
  "status": "queued",
  "url": "https://mytfsserver/DefaultCollection/_apis/operations/b5f386e9-c67d-4caf-8e78-4e58230c7e90"
}
```
   

#### Sample code

* [C# (RenameProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L280)

### Change a project description
<a id="UpdateDescription"></a>

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1?api-version=2.0-preview
```
```json
{
  "description": "TFVC projects."
}
```

#### Sample response

```json
{
  "id": "b5f386e9-c67d-4caf-8e78-4e58230c7e90",
  "status": "queued",
  "url": "https://mytfsserver/DefaultCollection/_apis/operations/b5f386e9-c67d-4caf-8e78-4e58230c7e90"
}
```
    

#### Sample code

* [C# (ChangeProjectDescription method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L235)  

## Get an operation
<a id="GetOperation"></a>

Monitor the progress of an asynchronous REST API call.

```no-highlight
GET https://{instance}/defaultcollection/_apis/operations/{operationid}?api-version={version}
```

| Parameter          | Type                                                     | Default    | Notes                                                                                                                       
|:-------------------|:---------------------------------------------------------|:-----------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string                                                   |            | TFS server name ({server:port}).
| operationId        | string                                                   |            | ID of the operation. 
| Query                                                                                                                                                         
| api-version        | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/operations/109787e4-3f2e-4fbb-af75-0be32e63e45d?api-version=2.0
```

#### Sample response

```json
{
  "id": "109787e4-3f2e-4fbb-af75-0be32e63e45d",
  "status": "inProgress",
  "url": "https://mytfsserver/DefaultCollection/_apis/operations/109787e4-3f2e-4fbb-af75-0be32e63e45d",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/operations/109787e4-3f2e-4fbb-af75-0be32e63e45d"
    }
  }
}
```


#### Sample code

* [C# (WaitForLongRunningOperation method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L204)

## Delete a project
<a id="DeleteProject"></a>

Delete a project. Use the [GetOperation](#GetOperation) to periodically check for delete project status.

```no-highlight
DELETE https://{instance}/defaultcollection/_apis/projects/{id}?api-version={version}
```

| Parameter  | Type  | Notes
|:-----------|:--------:|:---------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| id         | string | ID for the project.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request
```no-highlight
DELETE https://fabrikam.visualstudio.com/DefaultCollection/_apis/projects/98dd5ded-8110-459b-8241-3d12b2eeaf18?api-version=1.0
```

#### Sample response
*Status Code:* 204

#### Sample code

* [C# (DeleteProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L323)

<a name="Get project properties"></a>

## Get project properties
Get a collection of project properties.


```no-highlight
GET https://{instance}/_apis/projects/{projectId}/properties?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/Authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.profile | User profile (read) | Grants the ability to read your profile, accounts, collections, projects, teams, and other top-level organizational artifacts.
| vso.project | Project and team (read) | Grants the ability to read projects and teams.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>projectId</code> | URL | GUID | Required. The project ID.
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '4.0-preview' to use this version of the API.
| <code>keys</code> | Query | array (string) | Optional. A comma-delimited string of project property names. Wildcard characters ("?" and "*") are supported. If no key is specified, all properties will be returned.

#### Response

| Type       | Notes
|:-----------|:---------
| VssJsonCollectionWrapper&lt;array ([ProjectProperty](./contracts.md#ProjectProperty))&gt; | A collection of project properties.

### Get all project properties
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/94e82dfb-8ce4-430c-aa97-07ee10c83d5f/properties?api-version=4.0-preview
```

#### Sample response

```json
{
  "count": 8,
  "value": [
    {
      "name": "System.CurrentProcessTemplateId",
      "value": "2dc3221a-2d39-4138-a4e1-fc4d20d8912d"
    },
    {
      "name": "System.OriginalProcessTemplateId",
      "value": "2dc3221a-2d39-4138-a4e1-fc4d20d8912d"
    },
    {
      "name": "System.ProcessTemplateType",
      "value": "adcc42ab-9882-485e-a3ed-7678f01f66bc"
    },
    {
      "name": "System.Process Template",
      "value": "Agile"
    },
    {
      "name": "System.Microsoft.TeamFoundation.Team.Default",
      "value": "9b7ae5b9-826f-4353-99d6-daaa5cd94ec6"
    },
    {
      "name": "System.SourceControlCapabilityFlags",
      "value": "2"
    },
    {
      "name": "System.SourceControlGitEnabled",
      "value": "True"
    },
    {
      "name": "System.SourceControlGitPermissionsInitialized",
      "value": "True"
    }
  ]
}
```


### Get specific project properties
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/projects/94e82dfb-8ce4-430c-aa97-07ee10c83d5f/properties?keys=System.CurrentProcessTemplateId,*SourceControl*&api-version=4.0-preview
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "name": "System.CurrentProcessTemplateId",
      "value": "2dc3221a-2d39-4138-a4e1-fc4d20d8912d"
    },
    {
      "name": "System.SourceControlCapabilityFlags",
      "value": "2"
    },
    {
      "name": "System.SourceControlGitEnabled",
      "value": "True"
    },
    {
      "name": "System.SourceControlGitPermissionsInitialized",
      "value": "True"
    }
  ]
}
```


<a name="Set project properties"></a>

## Set project properties
Create, update, and delete project properties.


```no-highlight
PATCH https://{instance}/_apis/projects/{projectId}/properties?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/Authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.project_write | Project and team (read and write) | Grants the ability to read and update projects and teams.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>projectId</code> | URL | GUID | Required. The project ID.
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '4.0-preview' to use this version of the API.
| | Body | [JsonPatchDocument](./contracts.md#JsonPatchDocument) | Required.  A JSON Patch document that represents an array of property operations. See RFC 6902 for more details on JSON Patch. The accepted operation verbs are Add and Remove, where Add is used for both creating and updating properties. The path consists of a forward slash and a property name. Media Type: "application/json-patch+json"

### Create or update a project property
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/projects/94e82dfb-8ce4-430c-aa97-07ee10c83d5f/properties?api-version=4.0-preview
```
```json
[
  {
    "op": "add",
    "path": "/Alias",
    "value": "Fabrikam"
  }
]
```


### Delete a project property
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/projects/94e82dfb-8ce4-430c-aa97-07ee10c83d5f/properties?api-version=4.0-preview
```
```json
[
  {
    "op": "remove",
    "path": "/Alias"
  }
]
```
