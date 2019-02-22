---
title: TFS/DistributedTask/TaskRestClient TaskHttpClient2_2 API | Extensions for Azure DevOps Services
ms.assetid: 48166a93-3acc-f903-3f87-c895652b7a38
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

# TaskHttpClient2_2

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/DistributedTask/TaskRestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/DistributedTask/TaskRestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [appendLogContent()](#method_appendLogContent)
* [appendTimelineRecordFeed()](#method_appendTimelineRecordFeed)
* [createAttachment()](#method_createAttachment)
* [createLog()](#method_createLog)
* [createTimeline()](#method_createTimeline)
* [deleteTimeline()](#method_deleteTimeline)
* [getAttachment()](#method_getAttachment)
* [getAttachmentContent()](#method_getAttachmentContent)
* [getAttachments()](#method_getAttachments)
* [getLog()](#method_getLog)
* [getLogs()](#method_getLogs)
* [getPlan()](#method_getPlan)
* [getPlanAttachments()](#method_getPlanAttachments)
* [getRecords()](#method_getRecords)
* [getTimeline()](#method_getTimeline)
* [getTimelines()](#method_getTimelines)
* [updateRecords()](#method_updateRecords)

<a name="method_appendLogContent"></a>
<h2 class='method'>appendLogContent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskLog&gt; <b>appendLogContent</b>(content, scopeIdentifier, hubName, planId, logId)
</pre>

### Parameters

* `content`: string. Content to upload
* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `logId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskLog](../../../TFS/DistributedTask/Contracts/TaskLog.md)&gt;

<a name="method_appendTimelineRecordFeed"></a>
<h2 class='method'>appendTimelineRecordFeed()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>appendTimelineRecordFeed</b>(lines, scopeIdentifier, hubName, planId, timelineId, recordId)
</pre>

### Parameters

* `lines`: [VSS_Common_Contracts.VssJsonCollectionWrapperV](../../../VSS/WebApi/Contracts/VssJsonCollectionWrapperV.md)&lt;string[]&gt;. 
* `scopeIdentifier`: string. 
* `hubName`: string. 
* `planId`: string. 
* `timelineId`: string. 
* `recordId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_createAttachment"></a>
<h2 class='method'>createAttachment()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskAttachment&gt; <b>createAttachment</b>(content, scopeIdentifier, hubName, planId, timelineId, recordId, type, name)
</pre>

### Parameters

* `content`: string. Content to upload
* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `timelineId`: string. 
* `recordId`: string. 
* `type`: string. 
* `name`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskAttachment](../../../TFS/DistributedTask/Contracts/TaskAttachment.md)&gt;

<a name="method_createLog"></a>
<h2 class='method'>createLog()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskLog&gt; <b>createLog</b>(log, scopeIdentifier, hubName, planId)
</pre>

### Parameters

* `log`: [TFS_DistributedTask_Contracts.TaskLog](../../../TFS/DistributedTask/Contracts/TaskLog.md). 
* `scopeIdentifier`: string. 
* `hubName`: string. 
* `planId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskLog](../../../TFS/DistributedTask/Contracts/TaskLog.md)&gt;

<a name="method_createTimeline"></a>
<h2 class='method'>createTimeline()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.Timeline&gt; <b>createTimeline</b>(timeline, scopeIdentifier, hubName, planId)
</pre>

### Parameters

* `timeline`: [TFS_DistributedTask_Contracts.Timeline](../../../TFS/DistributedTask/Contracts/Timeline.md). 
* `scopeIdentifier`: string. 
* `hubName`: string. 
* `planId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.Timeline](../../../TFS/DistributedTask/Contracts/Timeline.md)&gt;

<a name="method_deleteTimeline"></a>
<h2 class='method'>deleteTimeline()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTimeline</b>(scopeIdentifier, hubName, planId, timelineId)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `timelineId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_getAttachment"></a>
<h2 class='method'>getAttachment()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskAttachment&gt; <b>getAttachment</b>(scopeIdentifier, hubName, planId, timelineId, recordId, type, name)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `timelineId`: string. 
* `recordId`: string. 
* `type`: string. 
* `name`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskAttachment](../../../TFS/DistributedTask/Contracts/TaskAttachment.md)&gt;

<a name="method_getAttachmentContent"></a>
<h2 class='method'>getAttachmentContent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getAttachmentContent</b>(scopeIdentifier, hubName, planId, timelineId, recordId, type, name)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `timelineId`: string. 
* `recordId`: string. 
* `type`: string. 
* `name`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getAttachments"></a>
<h2 class='method'>getAttachments()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskAttachment[]&gt; <b>getAttachments</b>(scopeIdentifier, hubName, planId, timelineId, recordId, type)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `timelineId`: string. 
* `recordId`: string. 
* `type`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskAttachment](../../../TFS/DistributedTask/Contracts/TaskAttachment.md)[]&gt;

<a name="method_getLog"></a>
<h2 class='method'>getLog()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;string[]&gt; <b>getLog</b>(scopeIdentifier, hubName, planId, logId, startLine, endLine)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `logId`: number. 
* `startLine`: number. Optional. 
* `endLine`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string[]&gt;

<a name="method_getLogs"></a>
<h2 class='method'>getLogs()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskLog[]&gt; <b>getLogs</b>(scopeIdentifier, hubName, planId)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskLog](../../../TFS/DistributedTask/Contracts/TaskLog.md)[]&gt;

<a name="method_getPlan"></a>
<h2 class='method'>getPlan()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskOrchestrationPlan&gt; <b>getPlan</b>(scopeIdentifier, hubName, planId)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskOrchestrationPlan](../../../TFS/DistributedTask/Contracts/TaskOrchestrationPlan.md)&gt;

<a name="method_getPlanAttachments"></a>
<h2 class='method'>getPlanAttachments()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TaskAttachment[]&gt; <b>getPlanAttachments</b>(scopeIdentifier, hubName, planId, type)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `type`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TaskAttachment](../../../TFS/DistributedTask/Contracts/TaskAttachment.md)[]&gt;

<a name="method_getRecords"></a>
<h2 class='method'>getRecords()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TimelineRecord[]&gt; <b>getRecords</b>(scopeIdentifier, hubName, planId, timelineId, changeId)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `timelineId`: string. 
* `changeId`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TimelineRecord](../../../TFS/DistributedTask/Contracts/TimelineRecord.md)[]&gt;

<a name="method_getTimeline"></a>
<h2 class='method'>getTimeline()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.Timeline&gt; <b>getTimeline</b>(scopeIdentifier, hubName, planId, timelineId, changeId, includeRecords)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 
* `timelineId`: string. 
* `changeId`: number. Optional. 
* `includeRecords`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.Timeline](../../../TFS/DistributedTask/Contracts/Timeline.md)&gt;

<a name="method_getTimelines"></a>
<h2 class='method'>getTimelines()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.Timeline[]&gt; <b>getTimelines</b>(scopeIdentifier, hubName, planId)
</pre>

### Parameters

* `scopeIdentifier`: string. The project GUID to scope the request
* `hubName`: string. The name of the server hub: &quot;build&quot; for the Build server or &quot;rm&quot; for the Release Management server
* `planId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.Timeline](../../../TFS/DistributedTask/Contracts/Timeline.md)[]&gt;

<a name="method_updateRecords"></a>
<h2 class='method'>updateRecords()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_DistributedTask_Contracts.TimelineRecord[]&gt; <b>updateRecords</b>(records, scopeIdentifier, hubName, planId, timelineId)
</pre>

### Parameters

* `records`: [VSS_Common_Contracts.VssJsonCollectionWrapperV](../../../VSS/WebApi/Contracts/VssJsonCollectionWrapperV.md)&lt;[TFS_DistributedTask_Contracts.TimelineRecord](../../../TFS/DistributedTask/Contracts/TimelineRecord.md)[]&gt;. 
* `scopeIdentifier`: string. 
* `hubName`: string. 
* `planId`: string. 
* `timelineId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_DistributedTask_Contracts.TimelineRecord](../../../TFS/DistributedTask/Contracts/TimelineRecord.md)[]&gt;

