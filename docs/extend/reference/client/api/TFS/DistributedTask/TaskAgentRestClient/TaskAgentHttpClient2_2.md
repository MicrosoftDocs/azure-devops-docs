---
title: TFS/DistributedTask/TaskAgentRestClient TaskAgentHttpClient2_2 API | Extensions for Azure DevOps Services
ms.assetid: 34ba9371-4384-5a20-18f3-f23438a85330
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

# TaskAgentHttpClient2_2

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/DistributedTask/TaskAgentRestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/DistributedTask/TaskAgentRestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [addAgent()](#method_addAgent)
* [addAgentPool()](#method_addAgentPool)
* [addAgentQueue()](#method_addAgentQueue)
* [createAgentSession()](#method_createAgentSession)
* [createServiceEndpoint()](#method_createServiceEndpoint)
* [deleteAgent()](#method_deleteAgent)
* [deleteAgentPool()](#method_deleteAgentPool)
* [deleteAgentQueue()](#method_deleteAgentQueue)
* [deleteAgentRequest()](#method_deleteAgentRequest)
* [deleteAgentSession()](#method_deleteAgentSession)
* [deleteMessage()](#method_deleteMessage)
* [deleteServiceEndpoint()](#method_deleteServiceEndpoint)
* [deleteTaskDefinition()](#method_deleteTaskDefinition)
* [getAgent()](#method_getAgent)
* [getAgentPool()](#method_getAgentPool)
* [getAgentPoolRoles()](#method_getAgentPoolRoles)
* [getAgentPools()](#method_getAgentPools)
* [getAgentQueue()](#method_getAgentQueue)
* [getAgentQueueRoles()](#method_getAgentQueueRoles)
* [getAgentQueues()](#method_getAgentQueues)
* [getAgentRequest()](#method_getAgentRequest)
* [getAgentRequestsForAgent()](#method_getAgentRequestsForAgent)
* [getAgentRequestsForAgents()](#method_getAgentRequestsForAgents)
* [getAgentRequestsForPlan()](#method_getAgentRequestsForPlan)
* [getAgents()](#method_getAgents)
* [getMessage()](#method_getMessage)
* [getPackage()](#method_getPackage)
* [getPackages()](#method_getPackages)
* [getPackageZip()](#method_getPackageZip)
* [getServiceEndpointDetails()](#method_getServiceEndpointDetails)
* [getServiceEndpoints()](#method_getServiceEndpoints)
* [getServiceEndpointTypes()](#method_getServiceEndpointTypes)
* [getTaskContentZip()](#method_getTaskContentZip)
* [getTaskDefinition()](#method_getTaskDefinition)
* [getTaskDefinitions()](#method_getTaskDefinitions)
* [queryEndpoint()](#method_queryEndpoint)
* [queryServiceEndpoint()](#method_queryServiceEndpoint)
* [queueAgentRequest()](#method_queueAgentRequest)
* [refreshAgent()](#method_refreshAgent)
* [refreshAgents()](#method_refreshAgents)
* [replaceAgent()](#method_replaceAgent)
* [sendMessage()](#method_sendMessage)
* [updateAgent()](#method_updateAgent)
* [updateAgentPool()](#method_updateAgentPool)
* [updateAgentRequest()](#method_updateAgentRequest)
* [updateAgentUserCapabilities()](#method_updateAgentUserCapabilities)

<a name="method_addAgent"></a>
<h2 class='method'>addAgent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgent&gt; <b>addAgent</b>(agent, poolId)
</pre>

### Parameters

* `agent`: [Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md). 
* `poolId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md)&gt;

<a name="method_addAgentPool"></a>
<h2 class='method'>addAgentPool()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentPool&gt; <b>addAgentPool</b>(pool)
</pre>

### Parameters

* `pool`: [Contracts.TaskAgentPool](../../../TFS/DistributedTask/Contracts/TaskAgentPool.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentPool](../../../TFS/DistributedTask/Contracts/TaskAgentPool.md)&gt;

<a name="method_addAgentQueue"></a>
<h2 class='method'>addAgentQueue()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentQueue&gt; <b>addAgentQueue</b>(queue)
</pre>

### Parameters

* `queue`: [Contracts.TaskAgentQueue](../../../TFS/DistributedTask/Contracts/TaskAgentQueue.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentQueue](../../../TFS/DistributedTask/Contracts/TaskAgentQueue.md)&gt;

<a name="method_createAgentSession"></a>
<h2 class='method'>createAgentSession()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentSession&gt; <b>createAgentSession</b>(session, poolId)
</pre>

### Parameters

* `session`: [Contracts.TaskAgentSession](../../../TFS/DistributedTask/Contracts/TaskAgentSession.md). 
* `poolId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentSession](../../../TFS/DistributedTask/Contracts/TaskAgentSession.md)&gt;

<a name="method_createServiceEndpoint"></a>
<h2 class='method'>createServiceEndpoint()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ServiceEndpoint&gt; <b>createServiceEndpoint</b>(endpoint, scopeIdentifier, endpointId)
</pre>

### Parameters

* `endpoint`: [Contracts.ServiceEndpoint](../../../TFS/DistributedTask/Contracts/ServiceEndpoint.md). 
* `scopeIdentifier`: string. 
* `endpointId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ServiceEndpoint](../../../TFS/DistributedTask/Contracts/ServiceEndpoint.md)&gt;

<a name="method_deleteAgent"></a>
<h2 class='method'>deleteAgent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteAgent</b>(poolId, agentId)
</pre>

### Parameters

* `poolId`: number. 
* `agentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteAgentPool"></a>
<h2 class='method'>deleteAgentPool()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteAgentPool</b>(poolId)
</pre>

### Parameters

* `poolId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteAgentQueue"></a>
<h2 class='method'>deleteAgentQueue()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteAgentQueue</b>(queueId)
</pre>

### Parameters

* `queueId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteAgentRequest"></a>
<h2 class='method'>deleteAgentRequest()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteAgentRequest</b>(poolId, requestId, lockToken)
</pre>

### Parameters

* `poolId`: number. 
* `requestId`: number. 
* `lockToken`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteAgentSession"></a>
<h2 class='method'>deleteAgentSession()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteAgentSession</b>(poolId, sessionId)
</pre>

### Parameters

* `poolId`: number. 
* `sessionId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteMessage"></a>
<h2 class='method'>deleteMessage()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteMessage</b>(poolId, messageId, sessionId)
</pre>

### Parameters

* `poolId`: number. 
* `messageId`: number. 
* `sessionId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteServiceEndpoint"></a>
<h2 class='method'>deleteServiceEndpoint()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteServiceEndpoint</b>(scopeIdentifier, endpointId)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `endpointId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteTaskDefinition"></a>
<h2 class='method'>deleteTaskDefinition()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTaskDefinition</b>(taskId)
</pre>

### Parameters

* `taskId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_getAgent"></a>
<h2 class='method'>getAgent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgent&gt; <b>getAgent</b>(poolId, agentId, includeCapabilities, includeAssignedRequest, propertyFilters)
</pre>

### Parameters

* `poolId`: number. 
* `agentId`: number. 
* `includeCapabilities`: boolean. Optional. 
* `includeAssignedRequest`: boolean. Optional. 
* `propertyFilters`: string[]. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md)&gt;

<a name="method_getAgentPool"></a>
<h2 class='method'>getAgentPool()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentPool&gt; <b>getAgentPool</b>(poolId, properties)
</pre>

### Parameters

* `poolId`: number. 
* `properties`: string[]. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentPool](../../../TFS/DistributedTask/Contracts/TaskAgentPool.md)&gt;

<a name="method_getAgentPoolRoles"></a>
<h2 class='method'>getAgentPoolRoles()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Common_Contracts.IdentityRef[]&gt; <b>getAgentPoolRoles</b>(poolId)
</pre>

### Parameters

* `poolId`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md)[]&gt;

<a name="method_getAgentPools"></a>
<h2 class='method'>getAgentPools()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentPool[]&gt; <b>getAgentPools</b>(poolName, properties)
</pre>

### Parameters

* `poolName`: string. Optional. 
* `properties`: string[]. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentPool](../../../TFS/DistributedTask/Contracts/TaskAgentPool.md)[]&gt;

<a name="method_getAgentQueue"></a>
<h2 class='method'>getAgentQueue()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentQueue&gt; <b>getAgentQueue</b>(queueId, actionFilter)
</pre>

### Parameters

* `queueId`: number. 
* `actionFilter`: [Contracts.TaskAgentQueueActionFilter](../../../TFS/DistributedTask/Contracts/TaskAgentQueueActionFilter.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentQueue](../../../TFS/DistributedTask/Contracts/TaskAgentQueue.md)&gt;

<a name="method_getAgentQueueRoles"></a>
<h2 class='method'>getAgentQueueRoles()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;VSS_Common_Contracts.IdentityRef[]&gt; <b>getAgentQueueRoles</b>(queueId)
</pre>

### Parameters

* `queueId`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md)[]&gt;

<a name="method_getAgentQueues"></a>
<h2 class='method'>getAgentQueues()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentQueue[]&gt; <b>getAgentQueues</b>(queueName, actionFilter)
</pre>

### Parameters

* `queueName`: string. Optional. 
* `actionFilter`: [Contracts.TaskAgentQueueActionFilter](../../../TFS/DistributedTask/Contracts/TaskAgentQueueActionFilter.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentQueue](../../../TFS/DistributedTask/Contracts/TaskAgentQueue.md)[]&gt;

<a name="method_getAgentRequest"></a>
<h2 class='method'>getAgentRequest()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentJobRequest&gt; <b>getAgentRequest</b>(poolId, requestId)
</pre>

### Parameters

* `poolId`: number. 
* `requestId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md)&gt;

<a name="method_getAgentRequestsForAgent"></a>
<h2 class='method'>getAgentRequestsForAgent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentJobRequest[]&gt; <b>getAgentRequestsForAgent</b>(poolId, agentId, completedRequestCount)
</pre>

### Parameters

* `poolId`: number. 
* `agentId`: number. 
* `completedRequestCount`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md)[]&gt;

<a name="method_getAgentRequestsForAgents"></a>
<h2 class='method'>getAgentRequestsForAgents()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentJobRequest[]&gt; <b>getAgentRequestsForAgents</b>(poolId, agentIds, completedRequestCount)
</pre>

### Parameters

* `poolId`: number. 
* `agentIds`: number[]. 
* `completedRequestCount`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md)[]&gt;

<a name="method_getAgentRequestsForPlan"></a>
<h2 class='method'>getAgentRequestsForPlan()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentJobRequest[]&gt; <b>getAgentRequestsForPlan</b>(poolId, planId, jobId)
</pre>

### Parameters

* `poolId`: number. 
* `planId`: string. 
* `jobId`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md)[]&gt;

<a name="method_getAgents"></a>
<h2 class='method'>getAgents()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgent[]&gt; <b>getAgents</b>(poolId, agentName, includeCapabilities, includeAssignedRequest, propertyFilters, demands)
</pre>

### Parameters

* `poolId`: number. 
* `agentName`: string. Optional. 
* `includeCapabilities`: boolean. Optional. 
* `includeAssignedRequest`: boolean. Optional. 
* `propertyFilters`: string[]. Optional. 
* `demands`: string[]. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md)[]&gt;

<a name="method_getMessage"></a>
<h2 class='method'>getMessage()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentMessage&gt; <b>getMessage</b>(poolId, sessionId, lastMessageId)
</pre>

### Parameters

* `poolId`: number. 
* `sessionId`: string. 
* `lastMessageId`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentMessage](../../../TFS/DistributedTask/Contracts/TaskAgentMessage.md)&gt;

<a name="method_getPackage"></a>
<h2 class='method'>getPackage()</h2>

 This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskPackageMetadata&gt; <b>getPackage</b>(packageType)
</pre>

### Parameters

* `packageType`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskPackageMetadata](../../../TFS/DistributedTask/Contracts/TaskPackageMetadata.md)&gt;

<a name="method_getPackages"></a>
<h2 class='method'>getPackages()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskPackageMetadata[]&gt; <b>getPackages</b>()
</pre>

### Parameters


### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskPackageMetadata](../../../TFS/DistributedTask/Contracts/TaskPackageMetadata.md)[]&gt;

<a name="method_getPackageZip"></a>
<h2 class='method'>getPackageZip()</h2>

 This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getPackageZip</b>(packageType)
</pre>

### Parameters

* `packageType`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getServiceEndpointDetails"></a>
<h2 class='method'>getServiceEndpointDetails()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ServiceEndpoint&gt; <b>getServiceEndpointDetails</b>(scopeIdentifier, endpointId)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `endpointId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ServiceEndpoint](../../../TFS/DistributedTask/Contracts/ServiceEndpoint.md)&gt;

<a name="method_getServiceEndpoints"></a>
<h2 class='method'>getServiceEndpoints()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ServiceEndpoint[]&gt; <b>getServiceEndpoints</b>(scopeIdentifier, type, authSchemes, endpointIds)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `type`: string. Optional. 
* `authSchemes`: string[]. Optional. 
* `endpointIds`: string[]. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ServiceEndpoint](../../../TFS/DistributedTask/Contracts/ServiceEndpoint.md)[]&gt;

<a name="method_getServiceEndpointTypes"></a>
<h2 class='method'>getServiceEndpointTypes()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ServiceEndpointType[]&gt; <b>getServiceEndpointTypes</b>(scopeIdentifier, type, scheme)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `type`: string. Optional. 
* `scheme`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ServiceEndpointType](../../../TFS/DistributedTask/Contracts/ServiceEndpointType.md)[]&gt;

<a name="method_getTaskContentZip"></a>
<h2 class='method'>getTaskContentZip()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getTaskContentZip</b>(taskId, versionString, visibility, scopeLocal)
</pre>

### Parameters

* `taskId`: string. 
* `versionString`: string. 
* `visibility`: string[]. Optional. 
* `scopeLocal`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getTaskDefinition"></a>
<h2 class='method'>getTaskDefinition()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskDefinition&gt; <b>getTaskDefinition</b>(taskId, versionString, visibility, scopeLocal)
</pre>

### Parameters

* `taskId`: string. 
* `versionString`: string. 
* `visibility`: string[]. Optional. 
* `scopeLocal`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskDefinition](../../../TFS/DistributedTask/Contracts/TaskDefinition.md)&gt;

<a name="method_getTaskDefinitions"></a>
<h2 class='method'>getTaskDefinitions()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskDefinition[]&gt; <b>getTaskDefinitions</b>(taskId, visibility, scopeLocal)
</pre>

### Parameters

* `taskId`: string. Optional. 
* `visibility`: string[]. Optional. 
* `scopeLocal`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskDefinition](../../../TFS/DistributedTask/Contracts/TaskDefinition.md)[]&gt;

<a name="method_queryEndpoint"></a>
<h2 class='method'>queryEndpoint()</h2>

 Proxy for a GET request defined by an &#x27;endpoint&#x27;. The request is authorized using a service endpoint. The response is filtered using an XPath/Json based selector.

### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>queryEndpoint</b>(endpoint)
</pre>

### Parameters

* `endpoint`: [Contracts.TaskDefinitionEndpoint](../../../TFS/DistributedTask/Contracts/TaskDefinitionEndpoint.md). Describes the URL to fetch.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_queryServiceEndpoint"></a>
<h2 class='method'>queryServiceEndpoint()</h2>

 Proxy for a GET request defined by a service endpoint. The request is authorized using a data source in the service endpoint. The response is filtered using an XPath/Json based selector.

### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>queryServiceEndpoint</b>(binding, scopeIdentifier)
</pre>

### Parameters

* `binding`: [Contracts.DataSourceBinding](../../../TFS/DistributedTask/Contracts/DataSourceBinding.md). Describes the data source to fetch.
* `scopeIdentifier`: string. The project GUID to scope the request

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_queueAgentRequest"></a>
<h2 class='method'>queueAgentRequest()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentJobRequest&gt; <b>queueAgentRequest</b>(request, poolId)
</pre>

### Parameters

* `request`: [Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md). 
* `poolId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md)&gt;

<a name="method_refreshAgent"></a>
<h2 class='method'>refreshAgent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>refreshAgent</b>(poolId, agentId)
</pre>

### Parameters

* `poolId`: number. 
* `agentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_refreshAgents"></a>
<h2 class='method'>refreshAgents()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>refreshAgents</b>(poolId)
</pre>

### Parameters

* `poolId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_replaceAgent"></a>
<h2 class='method'>replaceAgent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgent&gt; <b>replaceAgent</b>(agent, poolId, agentId)
</pre>

### Parameters

* `agent`: [Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md). 
* `poolId`: number. 
* `agentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md)&gt;

<a name="method_sendMessage"></a>
<h2 class='method'>sendMessage()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>sendMessage</b>(message, poolId, requestId)
</pre>

### Parameters

* `message`: [Contracts.TaskAgentMessage](../../../TFS/DistributedTask/Contracts/TaskAgentMessage.md). 
* `poolId`: number. 
* `requestId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_updateAgent"></a>
<h2 class='method'>updateAgent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgent&gt; <b>updateAgent</b>(agent, poolId, agentId)
</pre>

### Parameters

* `agent`: [Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md). 
* `poolId`: number. 
* `agentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md)&gt;

<a name="method_updateAgentPool"></a>
<h2 class='method'>updateAgentPool()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentPool&gt; <b>updateAgentPool</b>(pool, poolId)
</pre>

### Parameters

* `pool`: [Contracts.TaskAgentPool](../../../TFS/DistributedTask/Contracts/TaskAgentPool.md). 
* `poolId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentPool](../../../TFS/DistributedTask/Contracts/TaskAgentPool.md)&gt;

<a name="method_updateAgentRequest"></a>
<h2 class='method'>updateAgentRequest()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgentJobRequest&gt; <b>updateAgentRequest</b>(request, poolId, requestId, lockToken)
</pre>

### Parameters

* `request`: [Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md). 
* `poolId`: number. 
* `requestId`: number. 
* `lockToken`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgentJobRequest](../../../TFS/DistributedTask/Contracts/TaskAgentJobRequest.md)&gt;

<a name="method_updateAgentUserCapabilities"></a>
<h2 class='method'>updateAgentUserCapabilities()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TaskAgent&gt; <b>updateAgentUserCapabilities</b>(userCapabilities, poolId, agentId)
</pre>

### Parameters

* `userCapabilities`: {[key: string]: string}. 
* `poolId`: number. 
* `agentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TaskAgent](../../../TFS/DistributedTask/Contracts/TaskAgent.md)&gt;

