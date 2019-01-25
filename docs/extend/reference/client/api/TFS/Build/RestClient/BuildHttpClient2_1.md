---
title: TFS/Build/RestClient BuildHttpClient2_1 API | Extensions for Azure DevOps Services
ms.assetid: b90c7972-d5ca-2966-3542-878d86467051
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

# BuildHttpClient2_1

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/Build/RestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/Build/RestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [addBuildTag()](#method_addBuildTag)
* [addBuildTags()](#method_addBuildTags)
* [createArtifact()](#method_createArtifact)
* [createDefinition()](#method_createDefinition)
* [createQueue()](#method_createQueue)
* [deleteBuild()](#method_deleteBuild)
* [deleteBuildTag()](#method_deleteBuildTag)
* [deleteDefinition()](#method_deleteDefinition)
* [deleteQueue()](#method_deleteQueue)
* [deleteTemplate()](#method_deleteTemplate)
* [getAgentPoolQueue()](#method_getAgentPoolQueue)
* [getArtifact()](#method_getArtifact)
* [getArtifactContentZip()](#method_getArtifactContentZip)
* [getArtifacts()](#method_getArtifacts)
* [getBadge()](#method_getBadge)
* [getBuild()](#method_getBuild)
* [getBuildBadge()](#method_getBuildBadge)
* [getBuildBadgeData()](#method_getBuildBadgeData)
* [getBuildChanges()](#method_getBuildChanges)
* [getBuildController()](#method_getBuildController)
* [getBuildControllers()](#method_getBuildControllers)
* [getBuildDeployments()](#method_getBuildDeployments)
* [getBuildLog()](#method_getBuildLog)
* [getBuildLogs()](#method_getBuildLogs)
* [getBuildLogsZip()](#method_getBuildLogsZip)
* [getBuildOptionDefinitions()](#method_getBuildOptionDefinitions)
* [getBuilds()](#method_getBuilds)
* [getBuildSettings()](#method_getBuildSettings)
* [getBuildTags()](#method_getBuildTags)
* [getBuildTimeline()](#method_getBuildTimeline)
* [getBuildWorkItemsRefs()](#method_getBuildWorkItemsRefs)
* [getBuildWorkItemsRefsFromCommits()](#method_getBuildWorkItemsRefsFromCommits)
* [getChangesBetweenBuilds()](#method_getChangesBetweenBuilds)
* [getDefinition()](#method_getDefinition)
* [getDefinitionRevisions()](#method_getDefinitionRevisions)
* [getDefinitions()](#method_getDefinitions)
* [getQueues()](#method_getQueues)
* [getResourceUsage()](#method_getResourceUsage)
* [getTags()](#method_getTags)
* [getTemplate()](#method_getTemplate)
* [getTemplates()](#method_getTemplates)
* [getWorkItemsBetweenBuilds()](#method_getWorkItemsBetweenBuilds)
* [queueBuild()](#method_queueBuild)
* [saveTemplate()](#method_saveTemplate)
* [updateBuild()](#method_updateBuild)
* [updateBuildSettings()](#method_updateBuildSettings)
* [updateDefinition()](#method_updateDefinition)

<a name="method_addBuildTag"></a>
<h2 class='method'>addBuildTag()</h2>

Adds a tag to a build

### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>addBuildTag</b>(project, buildId, tag)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `tag`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_addBuildTags"></a>
<h2 class='method'>addBuildTags()</h2>

Adds tag to a build

### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>addBuildTags</b>(tags, project, buildId)
</pre>

### Parameters

* `tags`: string[]. 
* `project`: string. 
* `buildId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_createArtifact"></a>
<h2 class='method'>createArtifact()</h2>

Associates an artifact with a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildArtifact&gt; <b>createArtifact</b>(artifact, buildId, project)
</pre>

### Parameters

* `artifact`: [Contracts.BuildArtifact](../../../TFS/Build/Contracts/BuildArtifact.md). 
* `buildId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildArtifact](../../../TFS/Build/Contracts/BuildArtifact.md)&gt;

<a name="method_createDefinition"></a>
<h2 class='method'>createDefinition()</h2>

Creates a new definition

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildDefinition&gt; <b>createDefinition</b>(definition, project, definitionToCloneId, definitionToCloneRevision)
</pre>

### Parameters

* `definition`: [Contracts.BuildDefinition](../../../TFS/Build/Contracts/BuildDefinition.md). 
* `project`: string. Optional. 
* `definitionToCloneId`: number. Optional. 
* `definitionToCloneRevision`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildDefinition](../../../TFS/Build/Contracts/BuildDefinition.md)&gt;

<a name="method_createQueue"></a>
<h2 class='method'>createQueue()</h2>

Creates a build queue

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.AgentPoolQueue&gt; <b>createQueue</b>(queue)
</pre>

### Parameters

* `queue`: [Contracts.AgentPoolQueue](../../../TFS/Build/Contracts/AgentPoolQueue.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.AgentPoolQueue](../../../TFS/Build/Contracts/AgentPoolQueue.md)&gt;

<a name="method_deleteBuild"></a>
<h2 class='method'>deleteBuild()</h2>

Deletes a build

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteBuild</b>(buildId, project)
</pre>

### Parameters

* `buildId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteBuildTag"></a>
<h2 class='method'>deleteBuildTag()</h2>

Deletes a tag from a build

### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>deleteBuildTag</b>(project, buildId, tag)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `tag`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_deleteDefinition"></a>
<h2 class='method'>deleteDefinition()</h2>

Deletes a definition and all associated builds

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteDefinition</b>(definitionId, project)
</pre>

### Parameters

* `definitionId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteQueue"></a>
<h2 class='method'>deleteQueue()</h2>

Deletes a build queue

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteQueue</b>(id)
</pre>

### Parameters

* `id`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteTemplate"></a>
<h2 class='method'>deleteTemplate()</h2>

Deletes a definition template

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTemplate</b>(project, templateId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `templateId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_getAgentPoolQueue"></a>
<h2 class='method'>getAgentPoolQueue()</h2>

Gets a queue

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.AgentPoolQueue&gt; <b>getAgentPoolQueue</b>(controllerId)
</pre>

### Parameters

* `controllerId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.AgentPoolQueue](../../../TFS/Build/Contracts/AgentPoolQueue.md)&gt;

<a name="method_getArtifact"></a>
<h2 class='method'>getArtifact()</h2>

Gets a specific artifact for a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildArtifact&gt; <b>getArtifact</b>(buildId, artifactName, project)
</pre>

### Parameters

* `buildId`: number. 
* `artifactName`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildArtifact](../../../TFS/Build/Contracts/BuildArtifact.md)&gt;

<a name="method_getArtifactContentZip"></a>
<h2 class='method'>getArtifactContentZip()</h2>

Gets a specific artifact for a build

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getArtifactContentZip</b>(buildId, artifactName, project)
</pre>

### Parameters

* `buildId`: number. 
* `artifactName`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getArtifacts"></a>
<h2 class='method'>getArtifacts()</h2>

Gets all artifacts for a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildArtifact[]&gt; <b>getArtifacts</b>(buildId, project)
</pre>

### Parameters

* `buildId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildArtifact](../../../TFS/Build/Contracts/BuildArtifact.md)[]&gt;

<a name="method_getBadge"></a>
<h2 class='method'>getBadge()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;string&gt; <b>getBadge</b>(project, definitionId, branchName)
</pre>

### Parameters

* `project`: string. 
* `definitionId`: number. 
* `branchName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string&gt;

<a name="method_getBuild"></a>
<h2 class='method'>getBuild()</h2>

Gets a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Build&gt; <b>getBuild</b>(buildId, project, propertyFilters)
</pre>

### Parameters

* `buildId`: number. 
* `project`: string. Optional. 
* `propertyFilters`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Build](../../../TFS/Build/Contracts/Build.md)&gt;

<a name="method_getBuildBadge"></a>
<h2 class='method'>getBuildBadge()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildBadge&gt; <b>getBuildBadge</b>(project, repoType, repoId, branchName)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `repoType`: string. 
* `repoId`: string. Optional. 
* `branchName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildBadge](../../../TFS/Build/Contracts/BuildBadge.md)&gt;

<a name="method_getBuildBadgeData"></a>
<h2 class='method'>getBuildBadgeData()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;string&gt; <b>getBuildBadgeData</b>(project, repoType, repoId, branchName)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `repoType`: string. 
* `repoId`: string. Optional. 
* `branchName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string&gt;

<a name="method_getBuildChanges"></a>
<h2 class='method'>getBuildChanges()</h2>

Gets the changes associated with a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Change[]&gt; <b>getBuildChanges</b>(project, buildId, continuationToken, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `continuationToken`: string. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Change](../../../TFS/Build/Contracts/Change.md)[]&gt;

<a name="method_getBuildController"></a>
<h2 class='method'>getBuildController()</h2>

Gets a controller

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildController&gt; <b>getBuildController</b>(controllerId)
</pre>

### Parameters

* `controllerId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildController](../../../TFS/Build/Contracts/BuildController.md)&gt;

<a name="method_getBuildControllers"></a>
<h2 class='method'>getBuildControllers()</h2>

Gets controller, optionally filtered by name

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildController[]&gt; <b>getBuildControllers</b>(name)
</pre>

### Parameters

* `name`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildController](../../../TFS/Build/Contracts/BuildController.md)[]&gt;

<a name="method_getBuildDeployments"></a>
<h2 class='method'>getBuildDeployments()</h2>

Gets the deployment information associated with a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Deployment[]&gt; <b>getBuildDeployments</b>(project, buildId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Deployment](../../../TFS/Build/Contracts/Deployment.md)[]&gt;

<a name="method_getBuildLog"></a>
<h2 class='method'>getBuildLog()</h2>

Gets a log

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getBuildLog</b>(project, buildId, logId, startLine, endLine)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `logId`: number. 
* `startLine`: number. Optional. 
* `endLine`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getBuildLogs"></a>
<h2 class='method'>getBuildLogs()</h2>

Gets logs for a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildLog[]&gt; <b>getBuildLogs</b>(project, buildId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildLog](../../../TFS/Build/Contracts/BuildLog.md)[]&gt;

<a name="method_getBuildLogsZip"></a>
<h2 class='method'>getBuildLogsZip()</h2>

Gets logs for a build

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getBuildLogsZip</b>(project, buildId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getBuildOptionDefinitions"></a>
<h2 class='method'>getBuildOptionDefinitions()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildOptionDefinition[]&gt; <b>getBuildOptionDefinitions</b>(project)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildOptionDefinition](../../../TFS/Build/Contracts/BuildOptionDefinition.md)[]&gt;

<a name="method_getBuilds"></a>
<h2 class='method'>getBuilds()</h2>

Gets builds

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Build[]&gt; <b>getBuilds</b>(project, definitions, queues, buildNumber, minFinishTime, maxFinishTime, requestedFor, reasonFilter, statusFilter, resultFilter, tagFilters, properties, type, top, continuationToken, maxBuildsPerDefinition, deletedFilter, queryOrder, branchName)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `definitions`: number[]. Optional. A comma-delimited list of definition ids
* `queues`: number[]. Optional. A comma-delimited list of queue ids
* `buildNumber`: string. Optional. 
* `minFinishTime`: Date. Optional. 
* `maxFinishTime`: Date. Optional. 
* `requestedFor`: string. Optional. 
* `reasonFilter`: [Contracts.BuildReason](../../../TFS/Build/Contracts/BuildReason.md). Optional. 
* `statusFilter`: [Contracts.BuildStatus](../../../TFS/Build/Contracts/BuildStatus.md). Optional. 
* `resultFilter`: [Contracts.BuildResult](../../../TFS/Build/Contracts/BuildResult.md). Optional. 
* `tagFilters`: string[]. Optional. 
* `properties`: string[]. Optional. 
* `type`: [Contracts.DefinitionType](../../../TFS/Build/Contracts/DefinitionType.md). Optional. 
* `top`: number. Optional. 
* `continuationToken`: string. Optional. 
* `maxBuildsPerDefinition`: number. Optional. 
* `deletedFilter`: [Contracts.QueryDeletedOption](../../../TFS/Build/Contracts/QueryDeletedOption.md). Optional. 
* `queryOrder`: [Contracts.BuildQueryOrder](../../../TFS/Build/Contracts/BuildQueryOrder.md). Optional. 
* `branchName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Build](../../../TFS/Build/Contracts/Build.md)[]&gt;

<a name="method_getBuildSettings"></a>
<h2 class='method'>getBuildSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildSettings&gt; <b>getBuildSettings</b>()
</pre>

### Parameters


### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildSettings](../../../TFS/Build/Contracts/BuildSettings.md)&gt;

<a name="method_getBuildTags"></a>
<h2 class='method'>getBuildTags()</h2>

Gets the tags for a build

### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>getBuildTags</b>(project, buildId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_getBuildTimeline"></a>
<h2 class='method'>getBuildTimeline()</h2>

Gets details for a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Timeline&gt; <b>getBuildTimeline</b>(project, buildId, timelineId, changeId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `timelineId`: string. Optional. 
* `changeId`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Timeline](../../../TFS/Build/Contracts/Timeline.md)&gt;

<a name="method_getBuildWorkItemsRefs"></a>
<h2 class='method'>getBuildWorkItemsRefs()</h2>

Gets the work item IDs associated with a build

### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Common_Contracts.ResourceRef[]&gt; <b>getBuildWorkItemsRefs</b>(project, buildId, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Common_Contracts.ResourceRef](../../../VSS/WebApi/Contracts/ResourceRef.md)[]&gt;

<a name="method_getBuildWorkItemsRefsFromCommits"></a>
<h2 class='method'>getBuildWorkItemsRefsFromCommits()</h2>

Gets the work item IDs associated with build commits

### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Common_Contracts.ResourceRef[]&gt; <b>getBuildWorkItemsRefsFromCommits</b>(commitIds, project, buildId, top)
</pre>

### Parameters

* `commitIds`: string[]. 
* `project`: string. 
* `buildId`: number. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Common_Contracts.ResourceRef](../../../VSS/WebApi/Contracts/ResourceRef.md)[]&gt;

<a name="method_getChangesBetweenBuilds"></a>
<h2 class='method'>getChangesBetweenBuilds()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Change[]&gt; <b>getChangesBetweenBuilds</b>(project, fromBuildId, toBuildId, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `fromBuildId`: number. Optional. 
* `toBuildId`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Change](../../../TFS/Build/Contracts/Change.md)[]&gt;

<a name="method_getDefinition"></a>
<h2 class='method'>getDefinition()</h2>

Gets a definition, optionally at a specific revision

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.DefinitionReference&gt; <b>getDefinition</b>(definitionId, project, revision, propertyFilters)
</pre>

### Parameters

* `definitionId`: number. 
* `project`: string. Optional. 
* `revision`: number. Optional. 
* `propertyFilters`: string[]. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.DefinitionReference](../../../TFS/Build/Contracts/DefinitionReference.md)&gt;

<a name="method_getDefinitionRevisions"></a>
<h2 class='method'>getDefinitionRevisions()</h2>

Gets revisions of a definition

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildDefinitionRevision[]&gt; <b>getDefinitionRevisions</b>(project, definitionId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `definitionId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildDefinitionRevision](../../../TFS/Build/Contracts/BuildDefinitionRevision.md)[]&gt;

<a name="method_getDefinitions"></a>
<h2 class='method'>getDefinitions()</h2>

Gets definitions, optionally filtered by name

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.DefinitionReference[]&gt; <b>getDefinitions</b>(project, name, type, repositoryId, repositoryType, queryOrder, top)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `name`: string. Optional. 
* `type`: [Contracts.DefinitionType](../../../TFS/Build/Contracts/DefinitionType.md). Optional. 
* `repositoryId`: string. Optional. 
* `repositoryType`: string. Optional. 
* `queryOrder`: [Contracts.DefinitionQueryOrder](../../../TFS/Build/Contracts/DefinitionQueryOrder.md). Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.DefinitionReference](../../../TFS/Build/Contracts/DefinitionReference.md)[]&gt;

<a name="method_getQueues"></a>
<h2 class='method'>getQueues()</h2>

Gets queues, optionally filtered by name

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.AgentPoolQueue[]&gt; <b>getQueues</b>(name)
</pre>

### Parameters

* `name`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.AgentPoolQueue](../../../TFS/Build/Contracts/AgentPoolQueue.md)[]&gt;

<a name="method_getResourceUsage"></a>
<h2 class='method'>getResourceUsage()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildResourceUsage&gt; <b>getResourceUsage</b>()
</pre>

### Parameters


### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildResourceUsage](../../../TFS/Build/Contracts/BuildResourceUsage.md)&gt;

<a name="method_getTags"></a>
<h2 class='method'>getTags()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>getTags</b>(project)
</pre>

### Parameters

* `project`: string. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_getTemplate"></a>
<h2 class='method'>getTemplate()</h2>

Gets definition template filtered by id

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildDefinitionTemplate&gt; <b>getTemplate</b>(project, templateId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `templateId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildDefinitionTemplate](../../../TFS/Build/Contracts/BuildDefinitionTemplate.md)&gt;

<a name="method_getTemplates"></a>
<h2 class='method'>getTemplates()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildDefinitionTemplate[]&gt; <b>getTemplates</b>(project)
</pre>

### Parameters

* `project`: string. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildDefinitionTemplate](../../../TFS/Build/Contracts/BuildDefinitionTemplate.md)[]&gt;

<a name="method_getWorkItemsBetweenBuilds"></a>
<h2 class='method'>getWorkItemsBetweenBuilds()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Common_Contracts.ResourceRef[]&gt; <b>getWorkItemsBetweenBuilds</b>(project, fromBuildId, toBuildId, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `fromBuildId`: number. 
* `toBuildId`: number. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Common_Contracts.ResourceRef](../../../VSS/WebApi/Contracts/ResourceRef.md)[]&gt;

<a name="method_queueBuild"></a>
<h2 class='method'>queueBuild()</h2>

Queues a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Build&gt; <b>queueBuild</b>(build, project, ignoreWarnings)
</pre>

### Parameters

* `build`: [Contracts.Build](../../../TFS/Build/Contracts/Build.md). 
* `project`: string. Optional. 
* `ignoreWarnings`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Build](../../../TFS/Build/Contracts/Build.md)&gt;

<a name="method_saveTemplate"></a>
<h2 class='method'>saveTemplate()</h2>

Saves a definition template

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildDefinitionTemplate&gt; <b>saveTemplate</b>(template, project, templateId)
</pre>

### Parameters

* `template`: [Contracts.BuildDefinitionTemplate](../../../TFS/Build/Contracts/BuildDefinitionTemplate.md). 
* `project`: string. 
* `templateId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildDefinitionTemplate](../../../TFS/Build/Contracts/BuildDefinitionTemplate.md)&gt;

<a name="method_updateBuild"></a>
<h2 class='method'>updateBuild()</h2>

Updates a build

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Build&gt; <b>updateBuild</b>(build, buildId, project)
</pre>

### Parameters

* `build`: [Contracts.Build](../../../TFS/Build/Contracts/Build.md). 
* `buildId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Build](../../../TFS/Build/Contracts/Build.md)&gt;

<a name="method_updateBuildSettings"></a>
<h2 class='method'>updateBuildSettings()</h2>

Updates the build settings

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildSettings&gt; <b>updateBuildSettings</b>(settings)
</pre>

### Parameters

* `settings`: [Contracts.BuildSettings](../../../TFS/Build/Contracts/BuildSettings.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildSettings](../../../TFS/Build/Contracts/BuildSettings.md)&gt;

<a name="method_updateDefinition"></a>
<h2 class='method'>updateDefinition()</h2>

Updates an existing definition

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildDefinition&gt; <b>updateDefinition</b>(definition, definitionId, project, secretsSourceDefinitionId, secretsSourceDefinitionRevision)
</pre>

### Parameters

* `definition`: [Contracts.BuildDefinition](../../../TFS/Build/Contracts/BuildDefinition.md). 
* `definitionId`: number. 
* `project`: string. Optional. 
* `secretsSourceDefinitionId`: number. Optional. 
* `secretsSourceDefinitionRevision`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildDefinition](../../../TFS/Build/Contracts/BuildDefinition.md)&gt;

