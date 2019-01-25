---
title: TFS/Core/RestClient CoreHttpClient2_1 API | Extensions for Azure DevOps Services
ms.assetid: 5307889f-f465-c35c-ce00-447872e8f4ff
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

[!INCLUDE [styleoverrides](../../../_data/style-overrides.md)]

# CoreHttpClient2_1

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/Core/RestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/Core/RestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [createTeam()](#method_createTeam)
* [deleteTeam()](#method_deleteTeam)
* [getProcessById()](#method_getProcessById)
* [getProcesses()](#method_getProcesses)
* [getProject()](#method_getProject)
* [getProjectCollection()](#method_getProjectCollection)
* [getProjectCollections()](#method_getProjectCollections)
* [getProjects()](#method_getProjects)
* [getTeam()](#method_getTeam)
* [getTeamMembers()](#method_getTeamMembers)
* [getTeams()](#method_getTeams)
* [queueCreateProject()](#method_queueCreateProject)
* [queueDeleteProject()](#method_queueDeleteProject)
* [updateProject()](#method_updateProject)
* [updateTeam()](#method_updateTeam)

<a name="method_createTeam"></a>
<h2 class='method'>createTeam()</h2>

Creates a team

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WebApiTeam&gt; <b>createTeam</b>(team, projectId)
</pre>

### Parameters

* `team`: [Contracts.WebApiTeam](../../../TFS/Core/Contracts/WebApiTeam.md). The team data used to create the team.
* `projectId`: string. The name or ID (GUID) of the project in which to create the team.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WebApiTeam](../../../TFS/Core/Contracts/WebApiTeam.md)&gt;

<a name="method_deleteTeam"></a>
<h2 class='method'>deleteTeam()</h2>

Deletes a team

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTeam</b>(projectId, teamId)
</pre>

### Parameters

* `projectId`: string. The name or ID (GUID) of the project containing the team to delete.
* `teamId`: string. The name of ID of the team to delete.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_getProcessById"></a>
<h2 class='method'>getProcessById()</h2>

Retrieve process by id

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Process&gt; <b>getProcessById</b>(processId)
</pre>

### Parameters

* `processId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Process](../../../TFS/Core/Contracts/Process.md)&gt;

<a name="method_getProcesses"></a>
<h2 class='method'>getProcesses()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Process[]&gt; <b>getProcesses</b>()
</pre>

### Parameters


### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Process](../../../TFS/Core/Contracts/Process.md)[]&gt;

<a name="method_getProject"></a>
<h2 class='method'>getProject()</h2>

Get project with the specified ID or name, optionally including capabilities.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamProject&gt; <b>getProject</b>(projectId, includeCapabilities, includeHistory)
</pre>

### Parameters

* `projectId`: string. 
* `includeCapabilities`: boolean. Optional. 
* `includeHistory`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamProject](../../../TFS/Core/Contracts/TeamProject.md)&gt;

<a name="method_getProjectCollection"></a>
<h2 class='method'>getProjectCollection()</h2>

Get project collection with the specified ID or name.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamProjectCollection&gt; <b>getProjectCollection</b>(collectionId)
</pre>

### Parameters

* `collectionId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamProjectCollection](../../../TFS/Core/Contracts/TeamProjectCollection.md)&gt;

<a name="method_getProjectCollections"></a>
<h2 class='method'>getProjectCollections()</h2>

Get project collection references for this application.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamProjectCollectionReference[]&gt; <b>getProjectCollections</b>(top, skip)
</pre>

### Parameters

* `top`: number. Optional. 
* `skip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamProjectCollectionReference](../../../TFS/Core/Contracts/TeamProjectCollectionReference.md)[]&gt;

<a name="method_getProjects"></a>
<h2 class='method'>getProjects()</h2>

Get project references with the specified state

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamProjectReference[]&gt; <b>getProjects</b>(stateFilter, top, skip)
</pre>

### Parameters

* `stateFilter`: any. Optional. Filter on projects in a specific project state (default: WellFormed).
* `top`: number. Optional. 
* `skip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamProjectReference](../../../TFS/Core/Contracts/TeamProjectReference.md)[]&gt;

<a name="method_getTeam"></a>
<h2 class='method'>getTeam()</h2>

Gets a team

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WebApiTeam&gt; <b>getTeam</b>(projectId, teamId)
</pre>

### Parameters

* `projectId`: string. 
* `teamId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WebApiTeam](../../../TFS/Core/Contracts/WebApiTeam.md)&gt;

<a name="method_getTeamMembers"></a>
<h2 class='method'>getTeamMembers()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Common_Contracts.IdentityRef[]&gt; <b>getTeamMembers</b>(projectId, teamId, top, skip)
</pre>

### Parameters

* `projectId`: string. 
* `teamId`: string. 
* `top`: number. Optional. 
* `skip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md)[]&gt;

<a name="method_getTeams"></a>
<h2 class='method'>getTeams()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WebApiTeam[]&gt; <b>getTeams</b>(projectId, top, skip)
</pre>

### Parameters

* `projectId`: string. 
* `top`: number. Optional. 
* `skip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WebApiTeam](../../../TFS/Core/Contracts/WebApiTeam.md)[]&gt;

<a name="method_queueCreateProject"></a>
<h2 class='method'>queueCreateProject()</h2>

Queue a project creation.

### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Operations_Contracts.OperationReference&gt; <b>queueCreateProject</b>(projectToCreate)
</pre>

### Parameters

* `projectToCreate`: [Contracts.TeamProject](../../../TFS/Core/Contracts/TeamProject.md). The project to create.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Operations_Contracts.OperationReference](../../../VSS/Operations/Contracts/OperationReference.md)&gt;

<a name="method_queueDeleteProject"></a>
<h2 class='method'>queueDeleteProject()</h2>

Queue a project deletion.

### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Operations_Contracts.OperationReference&gt; <b>queueDeleteProject</b>(projectId)
</pre>

### Parameters

* `projectId`: string. The project ID of the project to delete.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Operations_Contracts.OperationReference](../../../VSS/Operations/Contracts/OperationReference.md)&gt;

<a name="method_updateProject"></a>
<h2 class='method'>updateProject()</h2>

Update an existing project&#x27;s name, abbreviation, or description.

### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Operations_Contracts.OperationReference&gt; <b>updateProject</b>(projectUpdate, projectId)
</pre>

### Parameters

* `projectUpdate`: [Contracts.TeamProject](../../../TFS/Core/Contracts/TeamProject.md). The updates for the project.
* `projectId`: string. The project ID of the project to update.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Operations_Contracts.OperationReference](../../../VSS/Operations/Contracts/OperationReference.md)&gt;

<a name="method_updateTeam"></a>
<h2 class='method'>updateTeam()</h2>

Updates a team&#x27;s name and/or description

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WebApiTeam&gt; <b>updateTeam</b>(teamData, projectId, teamId)
</pre>

### Parameters

* `teamData`: [Contracts.WebApiTeam](../../../TFS/Core/Contracts/WebApiTeam.md). 
* `projectId`: string. 
* `teamId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WebApiTeam](../../../TFS/Core/Contracts/WebApiTeam.md)&gt;

