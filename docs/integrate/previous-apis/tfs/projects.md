---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Projects | REST API Reference for Team Foundation Server
description: Work with projects programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 537E1A1F-DAE8-4110-AF0F-63D5D52F2AB6
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/16/2016
---

# Projects
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
| stateFilter        | enum {<br/>&nbsp;&nbsp;WellFormed,<br/>&nbsp;&nbsp;CreatePending,<br/>&nbsp;&nbsp;Deleting,<br/>&nbsp;&nbsp;New,<br/>&nbsp;&nbsp;All<br/>}   | WellFormed | Return projects in a specific [project state](#Bystate). 
| $top               | integer                                                  | 100        | Number of projects to return.
| $skip              | integer                                                  | 0          | Number of projects to skip. 

[!code-REST [GET__projects_json](./_data/projects/GET__projects.json)]

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

[!code-REST [GET__projects__stateFilter-_state__json](./_data/projects/GET__projects__stateFilter-_state_.json)]

#### Sample code

* [C# (ListProjectsByState method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L359)

### A page at a time
<a name="projectpageatatime"></a>

[!code-REST [GET__projects__top-_top___skip-_skip__json](./_data/projects/GET__projects__top-_top___skip-_skip_.json)]

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
| includeCapabilites | boolean | `false` | Use `true` to [include capabilities](#withcapabilities) (such as source control) in the project result.
| includeHistory     | boolean | `false` | Use `true` to search within renamed projects that had such name in the past. 

### With capabilities
<a name="withcapabilities" />
Get metadata on a project, including its capabilities.

[!code-REST [GET__projects__projectName__includeCapabilities-true_json](./_data/projects/GET__projects__projectName__includeCapabilities-true.json)]

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

[!code-REST [POST__projects_json](./_data/projects/POST__projects.json)]

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

[!code-REST [PATCH__projects__projectId__json](./_data/projects/PATCH__projects__projectId_name_.json)]   

#### Sample code

* [C# (RenameProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L280)

### Change a project description
<a id="UpdateDescription"></a>

[!code-REST [PATCH__projects__projectId__json](./_data/projects/PATCH__projects__projectId_description_.json)]    

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

[!code-REST [GET__operations__operationId__json](./_data/projects/GET__operations__operationId_.json)]

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
[!code-REST [GET__projects__project__properties.json](../_data/Core/properties/GET__projects__project__properties.json)]

### Get specific project properties
[!code-REST [GET__projects__project__properties_keys-_propertyName_,_wildcard_.json](../_data/Core/properties/GET__projects__project__properties_keys-_propertyName_,_wildcard_.json)]

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
[!code-REST [PATCH__projects__project__properties.json](../_data/Core/properties/PATCH__projects__project__properties.json)]

### Delete a project property
[!code-REST [PATCH__projects__project__properties2.json](../_data/Core/properties/PATCH__projects__project__properties2.json)]