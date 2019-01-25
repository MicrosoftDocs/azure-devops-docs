---
title: TFS/WorkItemTracking/RestClient WorkItemTrackingHttpClient2_1 API | Extensions for Azure DevOps Services
ms.assetid: b4b5ae58-a9ba-1616-a7a9-6c31c450b07a
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

# WorkItemTrackingHttpClient2_1

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/WorkItemTracking/RestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/WorkItemTracking/RestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [createAttachment()](#method_createAttachment)
* [createOrUpdateClassificationNode()](#method_createOrUpdateClassificationNode)
* [createQuery()](#method_createQuery)
* [createWorkItem()](#method_createWorkItem)
* [deleteClassificationNode()](#method_deleteClassificationNode)
* [deleteQuery()](#method_deleteQuery)
* [deleteWorkItem()](#method_deleteWorkItem)
* [destroyWorkItem()](#method_destroyWorkItem)
* [evaluateRulesOnField()](#method_evaluateRulesOnField)
* [exportWorkItemTypeDefinition()](#method_exportWorkItemTypeDefinition)
* [getAttachmentContent()](#method_getAttachmentContent)
* [getAttachmentZip()](#method_getAttachmentZip)
* [getClassificationNode()](#method_getClassificationNode)
* [getDeletedWorkItem()](#method_getDeletedWorkItem)
* [getDeletedWorkItems()](#method_getDeletedWorkItems)
* [getDependentFields()](#method_getDependentFields)
* [getField()](#method_getField)
* [getFields()](#method_getFields)
* [getHistory()](#method_getHistory)
* [getHistoryById()](#method_getHistoryById)
* [getQueries()](#method_getQueries)
* [getQuery()](#method_getQuery)
* [getRelationType()](#method_getRelationType)
* [getRelationTypes()](#method_getRelationTypes)
* [getReportingLinks()](#method_getReportingLinks)
* [getRevision()](#method_getRevision)
* [getRevisions()](#method_getRevisions)
* [getRootNodes()](#method_getRootNodes)
* [getUpdate()](#method_getUpdate)
* [getUpdates()](#method_getUpdates)
* [getWorkItem()](#method_getWorkItem)
* [getWorkItems()](#method_getWorkItems)
* [getWorkItemTemplate()](#method_getWorkItemTemplate)
* [getWorkItemType()](#method_getWorkItemType)
* [getWorkItemTypeCategories()](#method_getWorkItemTypeCategories)
* [getWorkItemTypeCategory()](#method_getWorkItemTypeCategory)
* [getWorkItemTypes()](#method_getWorkItemTypes)
* [queryById()](#method_queryById)
* [queryByWiql()](#method_queryByWiql)
* [readReportingRevisionsGet()](#method_readReportingRevisionsGet)
* [readReportingRevisionsPost()](#method_readReportingRevisionsPost)
* [restoreWorkItem()](#method_restoreWorkItem)
* [updateClassificationNode()](#method_updateClassificationNode)
* [updateQuery()](#method_updateQuery)
* [updateWorkItem()](#method_updateWorkItem)
* [updateWorkItemTemplate()](#method_updateWorkItemTemplate)
* [updateWorkItemTypeDefinition()](#method_updateWorkItemTypeDefinition)

<a name="method_createAttachment"></a>
<h2 class='method'>createAttachment()</h2>

Creates an attachment.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.AttachmentReference&gt; <b>createAttachment</b>(content, fileName, uploadType)
</pre>

### Parameters

* `content`: string. Content to upload
* `fileName`: string. Optional. 
* `uploadType`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.AttachmentReference](../../../TFS/WorkItemTracking/Contracts/AttachmentReference.md)&gt;

<a name="method_createOrUpdateClassificationNode"></a>
<h2 class='method'>createOrUpdateClassificationNode()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemClassificationNode&gt; <b>createOrUpdateClassificationNode</b>(postedNode, project, structureGroup, path)
</pre>

### Parameters

* `postedNode`: [Contracts.WorkItemClassificationNode](../../../TFS/WorkItemTracking/Contracts/WorkItemClassificationNode.md). 
* `project`: string. 
* `structureGroup`: [Contracts.TreeStructureGroup](../../../TFS/WorkItemTracking/Contracts/TreeStructureGroup.md). 
* `path`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemClassificationNode](../../../TFS/WorkItemTracking/Contracts/WorkItemClassificationNode.md)&gt;

<a name="method_createQuery"></a>
<h2 class='method'>createQuery()</h2>

Creates a query, or moves a query.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.QueryHierarchyItem&gt; <b>createQuery</b>(postedQuery, project, query)
</pre>

### Parameters

* `postedQuery`: [Contracts.QueryHierarchyItem](../../../TFS/WorkItemTracking/Contracts/QueryHierarchyItem.md). The query to create.
* `project`: string. Project ID or project name
* `query`: string. The parent path for the query to create.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.QueryHierarchyItem](../../../TFS/WorkItemTracking/Contracts/QueryHierarchyItem.md)&gt;

<a name="method_createWorkItem"></a>
<h2 class='method'>createWorkItem()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem&gt; <b>createWorkItem</b>(document, project, type, validateOnly, bypassRules)
</pre>

### Parameters

* `document`: [VSS_Common_Contracts.JsonPatchDocument](../../../VSS/WebApi/Contracts/JsonPatchDocument.md). 
* `project`: string. 
* `type`: string. 
* `validateOnly`: boolean. Optional. 
* `bypassRules`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)&gt;

<a name="method_deleteClassificationNode"></a>
<h2 class='method'>deleteClassificationNode()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteClassificationNode</b>(project, structureGroup, path, reclassifyId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `structureGroup`: [Contracts.TreeStructureGroup](../../../TFS/WorkItemTracking/Contracts/TreeStructureGroup.md). 
* `path`: string. Optional. 
* `reclassifyId`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteQuery"></a>
<h2 class='method'>deleteQuery()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteQuery</b>(project, query)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `query`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteWorkItem"></a>
<h2 class='method'>deleteWorkItem()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemDelete&gt; <b>deleteWorkItem</b>(id, destroy)
</pre>

### Parameters

* `id`: number. 
* `destroy`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemDelete](../../../TFS/WorkItemTracking/Contracts/WorkItemDelete.md)&gt;

<a name="method_destroyWorkItem"></a>
<h2 class='method'>destroyWorkItem()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>destroyWorkItem</b>(id, project)
</pre>

### Parameters

* `id`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_evaluateRulesOnField"></a>
<h2 class='method'>evaluateRulesOnField()</h2>

Validates the fields values.

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>evaluateRulesOnField</b>(ruleEngineInput)
</pre>

### Parameters

* `ruleEngineInput`: [Contracts.FieldsToEvaluate](../../../TFS/WorkItemTracking/Contracts/FieldsToEvaluate.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_exportWorkItemTypeDefinition"></a>
<h2 class='method'>exportWorkItemTypeDefinition()</h2>

Export work item type

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemTypeTemplate&gt; <b>exportWorkItemTypeDefinition</b>(project, type, exportGlobalLists)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `type`: string. Optional. 
* `exportGlobalLists`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemTypeTemplate](../../../TFS/WorkItemTracking/Contracts/WorkItemTypeTemplate.md)&gt;

<a name="method_getAttachmentContent"></a>
<h2 class='method'>getAttachmentContent()</h2>

Returns an attachment

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getAttachmentContent</b>(id, fileName)
</pre>

### Parameters

* `id`: string. 
* `fileName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getAttachmentZip"></a>
<h2 class='method'>getAttachmentZip()</h2>

Returns an attachment

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getAttachmentZip</b>(id, fileName)
</pre>

### Parameters

* `id`: string. 
* `fileName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getClassificationNode"></a>
<h2 class='method'>getClassificationNode()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemClassificationNode&gt; <b>getClassificationNode</b>(project, structureGroup, path, depth)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `structureGroup`: [Contracts.TreeStructureGroup](../../../TFS/WorkItemTracking/Contracts/TreeStructureGroup.md). 
* `path`: string. Optional. 
* `depth`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemClassificationNode](../../../TFS/WorkItemTracking/Contracts/WorkItemClassificationNode.md)&gt;

<a name="method_getDeletedWorkItem"></a>
<h2 class='method'>getDeletedWorkItem()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemDelete&gt; <b>getDeletedWorkItem</b>(id, project)
</pre>

### Parameters

* `id`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemDelete](../../../TFS/WorkItemTracking/Contracts/WorkItemDelete.md)&gt;

<a name="method_getDeletedWorkItems"></a>
<h2 class='method'>getDeletedWorkItems()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemDeleteReference[]&gt; <b>getDeletedWorkItems</b>(project, ids)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `ids`: number[]. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemDeleteReference](../../../TFS/WorkItemTracking/Contracts/WorkItemDeleteReference.md)[]&gt;

<a name="method_getDependentFields"></a>
<h2 class='method'>getDependentFields()</h2>

Returns the dependent fields for the corresponding workitem type and fieldname

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.FieldDependentRule&gt; <b>getDependentFields</b>(project, type, field)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `type`: string. 
* `field`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.FieldDependentRule](../../../TFS/WorkItemTracking/Contracts/FieldDependentRule.md)&gt;

<a name="method_getField"></a>
<h2 class='method'>getField()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemField&gt; <b>getField</b>(field)
</pre>

### Parameters

* `field`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemField](../../../TFS/WorkItemTracking/Contracts/WorkItemField.md)&gt;

<a name="method_getFields"></a>
<h2 class='method'>getFields()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemField[]&gt; <b>getFields</b>()
</pre>

### Parameters


### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemField](../../../TFS/WorkItemTracking/Contracts/WorkItemField.md)[]&gt;

<a name="method_getHistory"></a>
<h2 class='method'>getHistory()</h2>

Returns history of all revision for a given work item ID

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemHistory[]&gt; <b>getHistory</b>(id, top, skip)
</pre>

### Parameters

* `id`: number. 
* `top`: number. Optional. 
* `skip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemHistory](../../../TFS/WorkItemTracking/Contracts/WorkItemHistory.md)[]&gt;

<a name="method_getHistoryById"></a>
<h2 class='method'>getHistoryById()</h2>

Returns the history value of particular revision

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemHistory&gt; <b>getHistoryById</b>(id, revisionNumber)
</pre>

### Parameters

* `id`: number. 
* `revisionNumber`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemHistory](../../../TFS/WorkItemTracking/Contracts/WorkItemHistory.md)&gt;

<a name="method_getQueries"></a>
<h2 class='method'>getQueries()</h2>

Retrieves all queries the user has access to in the current project

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.QueryHierarchyItem[]&gt; <b>getQueries</b>(project, expand, depth, includeDeleted)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `expand`: [Contracts.QueryExpand](../../../TFS/WorkItemTracking/Contracts/QueryExpand.md). Optional. 
* `depth`: number. Optional. 
* `includeDeleted`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.QueryHierarchyItem](../../../TFS/WorkItemTracking/Contracts/QueryHierarchyItem.md)[]&gt;

<a name="method_getQuery"></a>
<h2 class='method'>getQuery()</h2>

Retrieves a single query by project and either ID or path

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.QueryHierarchyItem&gt; <b>getQuery</b>(project, query, expand, depth, includeDeleted)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `query`: string. 
* `expand`: [Contracts.QueryExpand](../../../TFS/WorkItemTracking/Contracts/QueryExpand.md). Optional. 
* `depth`: number. Optional. 
* `includeDeleted`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.QueryHierarchyItem](../../../TFS/WorkItemTracking/Contracts/QueryHierarchyItem.md)&gt;

<a name="method_getRelationType"></a>
<h2 class='method'>getRelationType()</h2>

Gets the work item relation types.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemRelationType&gt; <b>getRelationType</b>(relation)
</pre>

### Parameters

* `relation`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemRelationType](../../../TFS/WorkItemTracking/Contracts/WorkItemRelationType.md)&gt;

<a name="method_getRelationTypes"></a>
<h2 class='method'>getRelationTypes()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemRelationType[]&gt; <b>getRelationTypes</b>()
</pre>

### Parameters


### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemRelationType](../../../TFS/WorkItemTracking/Contracts/WorkItemRelationType.md)[]&gt;

<a name="method_getReportingLinks"></a>
<h2 class='method'>getReportingLinks()</h2>

Get a batch of work item links

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ReportingWorkItemLinksBatch&gt; <b>getReportingLinks</b>(project, types, watermark, startDateTime)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `types`: string[]. Optional. A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
* `watermark`: number. Optional. Specifies the watermark to start the batch from. Omit this parameter to get the first batch of links.
* `startDateTime`: Date. Optional. Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with &#x27;watermark&#x27; parameter.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ReportingWorkItemLinksBatch](../../../TFS/WorkItemTracking/Contracts/ReportingWorkItemLinksBatch.md)&gt;

<a name="method_getRevision"></a>
<h2 class='method'>getRevision()</h2>

Returns a fully hydrated work item for the requested revision

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem&gt; <b>getRevision</b>(id, revisionNumber, expand)
</pre>

### Parameters

* `id`: number. 
* `revisionNumber`: number. 
* `expand`: [Contracts.WorkItemExpand](../../../TFS/WorkItemTracking/Contracts/WorkItemExpand.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)&gt;

<a name="method_getRevisions"></a>
<h2 class='method'>getRevisions()</h2>

Returns the list of fully hydrated work item revisions, paged.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem[]&gt; <b>getRevisions</b>(id, top, skip, expand)
</pre>

### Parameters

* `id`: number. 
* `top`: number. Optional. 
* `skip`: number. Optional. 
* `expand`: [Contracts.WorkItemExpand](../../../TFS/WorkItemTracking/Contracts/WorkItemExpand.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)[]&gt;

<a name="method_getRootNodes"></a>
<h2 class='method'>getRootNodes()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemClassificationNode[]&gt; <b>getRootNodes</b>(project, depth)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `depth`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemClassificationNode](../../../TFS/WorkItemTracking/Contracts/WorkItemClassificationNode.md)[]&gt;

<a name="method_getUpdate"></a>
<h2 class='method'>getUpdate()</h2>

Returns a single update for a work item

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemUpdate&gt; <b>getUpdate</b>(id, updateNumber)
</pre>

### Parameters

* `id`: number. 
* `updateNumber`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemUpdate](../../../TFS/WorkItemTracking/Contracts/WorkItemUpdate.md)&gt;

<a name="method_getUpdates"></a>
<h2 class='method'>getUpdates()</h2>

Returns a the deltas between work item revisions

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemUpdate[]&gt; <b>getUpdates</b>(id, top, skip)
</pre>

### Parameters

* `id`: number. 
* `top`: number. Optional. 
* `skip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemUpdate](../../../TFS/WorkItemTracking/Contracts/WorkItemUpdate.md)[]&gt;

<a name="method_getWorkItem"></a>
<h2 class='method'>getWorkItem()</h2>

Returns a single work item

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem&gt; <b>getWorkItem</b>(id, fields, asOf, expand)
</pre>

### Parameters

* `id`: number. 
* `fields`: string[]. Optional. 
* `asOf`: Date. Optional. 
* `expand`: [Contracts.WorkItemExpand](../../../TFS/WorkItemTracking/Contracts/WorkItemExpand.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)&gt;

<a name="method_getWorkItems"></a>
<h2 class='method'>getWorkItems()</h2>

Returns a list of work items

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem[]&gt; <b>getWorkItems</b>(ids, fields, asOf, expand)
</pre>

### Parameters

* `ids`: number[]. 
* `fields`: string[]. Optional. 
* `asOf`: Date. Optional. 
* `expand`: [Contracts.WorkItemExpand](../../../TFS/WorkItemTracking/Contracts/WorkItemExpand.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)[]&gt;

<a name="method_getWorkItemTemplate"></a>
<h2 class='method'>getWorkItemTemplate()</h2>

Returns a single work item from a template

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem&gt; <b>getWorkItemTemplate</b>(project, type, fields, asOf, expand)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `type`: string. 
* `fields`: string. Optional. 
* `asOf`: Date. Optional. 
* `expand`: [Contracts.WorkItemExpand](../../../TFS/WorkItemTracking/Contracts/WorkItemExpand.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)&gt;

<a name="method_getWorkItemType"></a>
<h2 class='method'>getWorkItemType()</h2>

Returns a the deltas between work item revisions

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemType&gt; <b>getWorkItemType</b>(project, type)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `type`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemType](../../../TFS/WorkItemTracking/Contracts/WorkItemType.md)&gt;

<a name="method_getWorkItemTypeCategories"></a>
<h2 class='method'>getWorkItemTypeCategories()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemTypeCategory[]&gt; <b>getWorkItemTypeCategories</b>(project)
</pre>

### Parameters

* `project`: string. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemTypeCategory](../../../TFS/WorkItemTracking/Contracts/WorkItemTypeCategory.md)[]&gt;

<a name="method_getWorkItemTypeCategory"></a>
<h2 class='method'>getWorkItemTypeCategory()</h2>

Returns a the deltas between work item revisions

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemTypeCategory&gt; <b>getWorkItemTypeCategory</b>(project, category)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `category`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemTypeCategory](../../../TFS/WorkItemTracking/Contracts/WorkItemTypeCategory.md)&gt;

<a name="method_getWorkItemTypes"></a>
<h2 class='method'>getWorkItemTypes()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemType[]&gt; <b>getWorkItemTypes</b>(project)
</pre>

### Parameters

* `project`: string. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemType](../../../TFS/WorkItemTracking/Contracts/WorkItemType.md)[]&gt;

<a name="method_queryById"></a>
<h2 class='method'>queryById()</h2>

Gets the results of the query by id.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemQueryResult&gt; <b>queryById</b>(id, project, team)
</pre>

### Parameters

* `id`: string. The query id.
* `project`: string. Optional. Project ID or project name
* `team`: string. Optional. Team ID or team name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemQueryResult](../../../TFS/WorkItemTracking/Contracts/WorkItemQueryResult.md)&gt;

<a name="method_queryByWiql"></a>
<h2 class='method'>queryByWiql()</h2>

Gets the results of the query.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemQueryResult&gt; <b>queryByWiql</b>(wiql, project, team)
</pre>

### Parameters

* `wiql`: [Contracts.Wiql](../../../TFS/WorkItemTracking/Contracts/Wiql.md). The query containing the wiql.
* `project`: string. Optional. Project ID or project name
* `team`: string. Optional. Team ID or team name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemQueryResult](../../../TFS/WorkItemTracking/Contracts/WorkItemQueryResult.md)&gt;

<a name="method_readReportingRevisionsGet"></a>
<h2 class='method'>readReportingRevisionsGet()</h2>

Get a batch of work item revisions

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ReportingWorkItemRevisionsBatch&gt; <b>readReportingRevisionsGet</b>(project, fields, types, watermark, startDateTime, includeIdentityRef, includeDeleted)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `fields`: string[]. Optional. A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
* `types`: string[]. Optional. A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
* `watermark`: number. Optional. Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
* `startDateTime`: Date. Optional. Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with &#x27;watermark&#x27; parameter.
* `includeIdentityRef`: boolean. Optional. Return an identity reference instead of a string value for identity fields.
* `includeDeleted`: boolean. Optional. Specify if the deleted item should be returned.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ReportingWorkItemRevisionsBatch](../../../TFS/WorkItemTracking/Contracts/ReportingWorkItemRevisionsBatch.md)&gt;

<a name="method_readReportingRevisionsPost"></a>
<h2 class='method'>readReportingRevisionsPost()</h2>

Get a batch of work item revisions

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ReportingWorkItemRevisionsBatch&gt; <b>readReportingRevisionsPost</b>(filter, project, watermark, startDateTime)
</pre>

### Parameters

* `filter`: [Contracts.ReportingWorkItemRevisionsFilter](../../../TFS/WorkItemTracking/Contracts/ReportingWorkItemRevisionsFilter.md). An object that contains request settings: field filter, type filter, identity format
* `project`: string. Optional. Project ID or project name
* `watermark`: number. Optional. Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
* `startDateTime`: Date. Optional. Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with &#x27;watermark&#x27; parameter.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ReportingWorkItemRevisionsBatch](../../../TFS/WorkItemTracking/Contracts/ReportingWorkItemRevisionsBatch.md)&gt;

<a name="method_restoreWorkItem"></a>
<h2 class='method'>restoreWorkItem()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemDelete&gt; <b>restoreWorkItem</b>(payload, id, project)
</pre>

### Parameters

* `payload`: [Contracts.WorkItemDeleteUpdate](../../../TFS/WorkItemTracking/Contracts/WorkItemDeleteUpdate.md). 
* `id`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemDelete](../../../TFS/WorkItemTracking/Contracts/WorkItemDelete.md)&gt;

<a name="method_updateClassificationNode"></a>
<h2 class='method'>updateClassificationNode()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemClassificationNode&gt; <b>updateClassificationNode</b>(postedNode, project, structureGroup, path)
</pre>

### Parameters

* `postedNode`: [Contracts.WorkItemClassificationNode](../../../TFS/WorkItemTracking/Contracts/WorkItemClassificationNode.md). 
* `project`: string. 
* `structureGroup`: [Contracts.TreeStructureGroup](../../../TFS/WorkItemTracking/Contracts/TreeStructureGroup.md). 
* `path`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemClassificationNode](../../../TFS/WorkItemTracking/Contracts/WorkItemClassificationNode.md)&gt;

<a name="method_updateQuery"></a>
<h2 class='method'>updateQuery()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.QueryHierarchyItem&gt; <b>updateQuery</b>(queryUpdate, project, query, undeleteDescendants)
</pre>

### Parameters

* `queryUpdate`: [Contracts.QueryHierarchyItem](../../../TFS/WorkItemTracking/Contracts/QueryHierarchyItem.md). 
* `project`: string. 
* `query`: string. 
* `undeleteDescendants`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.QueryHierarchyItem](../../../TFS/WorkItemTracking/Contracts/QueryHierarchyItem.md)&gt;

<a name="method_updateWorkItem"></a>
<h2 class='method'>updateWorkItem()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem&gt; <b>updateWorkItem</b>(document, id, validateOnly, bypassRules)
</pre>

### Parameters

* `document`: [VSS_Common_Contracts.JsonPatchDocument](../../../VSS/WebApi/Contracts/JsonPatchDocument.md). 
* `id`: number. 
* `validateOnly`: boolean. Optional. 
* `bypassRules`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)&gt;

<a name="method_updateWorkItemTemplate"></a>
<h2 class='method'>updateWorkItemTemplate()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItem&gt; <b>updateWorkItemTemplate</b>(document, project, type, validateOnly, bypassRules)
</pre>

### Parameters

* `document`: [VSS_Common_Contracts.JsonPatchDocument](../../../VSS/WebApi/Contracts/JsonPatchDocument.md). 
* `project`: string. 
* `type`: string. 
* `validateOnly`: boolean. Optional. 
* `bypassRules`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItem](../../../TFS/WorkItemTracking/Contracts/WorkItem.md)&gt;

<a name="method_updateWorkItemTypeDefinition"></a>
<h2 class='method'>updateWorkItemTypeDefinition()</h2>

Add/updates a work item type

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ProvisioningResult&gt; <b>updateWorkItemTypeDefinition</b>(updateModel, project)
</pre>

### Parameters

* `updateModel`: [Contracts.WorkItemTypeTemplateUpdateModel](../../../TFS/WorkItemTracking/Contracts/WorkItemTypeTemplateUpdateModel.md). 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ProvisioningResult](../../../TFS/WorkItemTracking/Contracts/ProvisioningResult.md)&gt;

