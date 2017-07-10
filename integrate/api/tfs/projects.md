---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Projects | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with team projects programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 537E1A1F-DAE8-4110-AF0F-63D5D52F2AB6
ms.manager: douge
ms.author: elbatk
ms.date: 08/16/2016
---

# Team projects
[!INCLUDE [API_version](../_data/version.md)]

Team projects contain source code, work items, and other resources.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of team projects
<a id="GetProjects"></a>

Get all team projects in the project collection that the authenticated user has access to.

```no-highlight
GET https://{instance}/DefaultCollection/_apis/projects?api-version={version}[&stateFilter{string}&$top={integer}&skip={integer}]
```

| Parameter          | Type                                                     | Default    | Notes                                                                                                                       
|:-------------------|:---------------------------------------------------------|:-----------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string                                                   |            | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| Query                                                                                                                                                         
| api-version        | string                                                   |            | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| stateFilter        | enum {<br/>&nbsp;&nbsp;WellFormed,<br/>&nbsp;&nbsp;CreatePending,<br/>&nbsp;&nbsp;Deleting,<br/>&nbsp;&nbsp;New,<br/>&nbsp;&nbsp;All<br/>}   | WellFormed | Return team projects in a specific [team project state](#Bystate). 
| $top               | integer                                                  | 100        | Number of team projects to return.
| $skip              | integer                                                  | 0          | Number of team projects to skip. 

[!code-REST [GET__projects_json](./_data/projects/GET__projects.json)]

#### Sample code

* [C# (ListAllProjectsAndTeams method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L22)

### By state
<a id="projectStates"></a> 

| State Name    | Explanation
|:--------------|:-----------------
| All           | All team projects regardless of state. 
| CreatePending | Team project has been queued for creation, but the process has not yet started. 
| Deleting      | Team project is in the process of being deleted. 
| New           | Team project is in the process of being created.  
| WellFormed    | <b>Default: </b>Team project is completely created and ready to use. 

[!code-REST [GET__projects__stateFilter-_state__json](./_data/projects/GET__projects__stateFilter-_state_.json)]

#### Sample code

* [C# (ListProjectsByState method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L359)

### A page at a time
<a name="projectpageatatime"></a>

[!code-REST [GET__projects__top-_top___skip-_skip__json](./_data/projects/GET__projects__top-_top___skip-_skip_.json)]

## Get a team project
<a id="GetProject"></a>
<a name="getateamproject" />

```no-highlight
GET https://{instance}/DefaultCollection/_apis/projects/{project}?api-version={version}[&includeCapabilities={boolean}&includeHistory={boolean}]
```

| Parameter          | Type    | Default | Notes                                                                                                                       
|:-------------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string  |         | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project            | string  |         | Name or ID of the team project.   
| Query                                                                                                                                                         
| api-version        | string  |         | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| includeCapabilites | boolean | `false` | Use `true` to [include capabilities](#withcapabilities) (such as source control) in the team project result.
| includeHistory     | boolean | `false` | Use `true` to search within renamed projects that had such name in the past. 

### With capabilities
<a name="withcapabilities" />
Get metadata on a team project, including its capabilities.

[!code-REST [GET__projects__projectName__includeCapabilities-true_json](./_data/projects/GET__projects__projectName__includeCapabilities-true.json)]

#### Sample code

* [C# (GetProjectDetails method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L98)

## Create a team project
<a name="createateamproject" />
Create a team project in a Visual Studio Team Services account. Use the [GetOperation](#GetOperation) to periodically check for create project status.

```no-highlight
POST https://{instance}/defaultcollection/_apis/projects?api-version={version}
```

| Parameter   | Type  | Notes
|:------------|:--------:|:---------------------------------------------------
| URL
| instance    | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| Query
| api-version | string  | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| Request Body
| name        | string | Name for the project.
| description | string | Description for the project.
| capabilities.versioncontrol.sourceControlType | enum { Git, Tfvc } | Version control type for the project.
| capabilities.processTemplate.templateTypeId | string | Software development schema for the project. See the [processes](processes.md#getalistofprocesses) REST API for how to retrieve the list of available processes and their corresponding IDs. 

[!code-REST [POST__projects_json](./_data/projects/POST__projects.json)]

#### Sample code

* [C# (CreateProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L121)

## Update a team project
<a name="updateateamproject" />

Update a team project's description or name. Use the [GetOperation](#GetOperation) to periodically check for update project status.

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
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| projectID  | string | ID for the project.
| Query
| api-version | string  | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| Request Body
| name        | string | Name of the team project. 
| description | string | Description for the team project.

### Rename a team project
<a id="UpdateName"></a>

[!code-REST [PATCH__projects__projectId__json](./_data/projects/PATCH__projects__projectId_name_.json)]   

#### Sample code

* [C# (RenameProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L280)

### Change a team project description
<a id="UpdateDescription"></a>

[!code-REST [PATCH__projects__projectId__json](./_data/projects/PATCH__projects__projectId_description_.json)]    

#### Sample code

* [C# (ChangeProjectDescription method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L235)  

## Get an operation
<a id="GetOperation"></a>

Monitor the progress of an asynchronous REST API call.

```no-highlight
GET https://{instance}/defaultcollection/_apis/operations/{operationid}?api-version={version}
```

| Parameter          | Type                                                     | Default    | Notes                                                                                                                       
|:-------------------|:---------------------------------------------------------|:-----------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string                                                   |            | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| operationId        | string                                                   |            | ID of the operation. 
| Query                                                                                                                                                         
| api-version        | string  |         | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__operations__operationId__json](./_data/projects/GET__operations__operationId_.json)]

#### Sample code

* [C# (WaitForLongRunningOperation method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L204)

## Delete a team project
<a id="DeleteProject"></a>

Delete a team project. Use the [GetOperation](#GetOperation) to periodically check for delete project status.

```no-highlight
DELETE https://{instance}/defaultcollection/_apis/projects/{id}?api-version={version}
```

| Parameter  | Type  | Notes
|:-----------|:--------:|:---------------------------------------------------
| URL
| instance   | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| id         | string | ID for the team project.
| Query
| api-version | string  | [Version](../../get-started/rest/basics.md#versions) of the API to use.

#### Sample request
```no-highlight
DELETE https://fabrikam.visualstudio.com/DefaultCollection/_apis/projects/98dd5ded-8110-459b-8241-3d12b2eeaf18?api-version=1.0
```

#### Sample response
*Status Code:* 204

#### Sample code

* [C# (DeleteProject method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectsSample.cs#L323)