---
title: TFS/VersionControl/TfvcRestClient TfvcHttpClient2_1 API | Extensions for Azure DevOps Services
ms.assetid: 77aa8667-9f64-465d-a0ae-378c0cd91cb6
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

# TfvcHttpClient2_1

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/VersionControl/TfvcRestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/VersionControl/TfvcRestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [createChangeset()](#method_createChangeset)
* [getBatchedChangesets()](#method_getBatchedChangesets)
* [getBranch()](#method_getBranch)
* [getBranches()](#method_getBranches)
* [getBranchRefs()](#method_getBranchRefs)
* [getChangeset()](#method_getChangeset)
* [getChangesetChanges()](#method_getChangesetChanges)
* [getChangesets()](#method_getChangesets)
* [getChangesetWorkItems()](#method_getChangesetWorkItems)
* [getItem()](#method_getItem)
* [getItemContent()](#method_getItemContent)
* [getItems()](#method_getItems)
* [getItemsBatch()](#method_getItemsBatch)
* [getItemsBatchZip()](#method_getItemsBatchZip)
* [getItemText()](#method_getItemText)
* [getItemZip()](#method_getItemZip)
* [getLabel()](#method_getLabel)
* [getLabelItems()](#method_getLabelItems)
* [getLabels()](#method_getLabels)
* [getProjectInfo()](#method_getProjectInfo)
* [getProjectInfos()](#method_getProjectInfos)
* [getShelveset()](#method_getShelveset)
* [getShelvesetChanges()](#method_getShelvesetChanges)
* [getShelvesets()](#method_getShelvesets)
* [getShelvesetWorkItems()](#method_getShelvesetWorkItems)

<a name="method_createChangeset"></a>
<h2 class='method'>createChangeset()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcChangesetRef&gt; <b>createChangeset</b>(changeset, project)
</pre>

### Parameters

* `changeset`: [TFS_VersionControl_Contracts.TfvcChangeset](../../../TFS/VersionControl/Contracts/TfvcChangeset.md). 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcChangesetRef](../../../TFS/VersionControl/Contracts/TfvcChangesetRef.md)&gt;

<a name="method_getBatchedChangesets"></a>
<h2 class='method'>getBatchedChangesets()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcChangesetRef[]&gt; <b>getBatchedChangesets</b>(changesetsRequestData)
</pre>

### Parameters

* `changesetsRequestData`: [TFS_VersionControl_Contracts.TfvcChangesetsRequestData](../../../TFS/VersionControl/Contracts/TfvcChangesetsRequestData.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcChangesetRef](../../../TFS/VersionControl/Contracts/TfvcChangesetRef.md)[]&gt;

<a name="method_getBranch"></a>
<h2 class='method'>getBranch()</h2>

Get a single branch hierarchy at the given path with parents or children (if specified)

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcBranch&gt; <b>getBranch</b>(path, project, includeParent, includeChildren)
</pre>

### Parameters

* `path`: string. 
* `project`: string. Optional. 
* `includeParent`: boolean. Optional. 
* `includeChildren`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcBranch](../../../TFS/VersionControl/Contracts/TfvcBranch.md)&gt;

<a name="method_getBranches"></a>
<h2 class='method'>getBranches()</h2>

Get a collection of branch roots -- first-level children, branches with no parents

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcBranch[]&gt; <b>getBranches</b>(project, includeParent, includeChildren, includeDeleted, includeLinks)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `includeParent`: boolean. Optional. 
* `includeChildren`: boolean. Optional. 
* `includeDeleted`: boolean. Optional. 
* `includeLinks`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcBranch](../../../TFS/VersionControl/Contracts/TfvcBranch.md)[]&gt;

<a name="method_getBranchRefs"></a>
<h2 class='method'>getBranchRefs()</h2>

Get branch hierarchies below the specified scopePath

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcBranchRef[]&gt; <b>getBranchRefs</b>(scopePath, project, includeDeleted, includeLinks)
</pre>

### Parameters

* `scopePath`: string. 
* `project`: string. Optional. 
* `includeDeleted`: boolean. Optional. 
* `includeLinks`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcBranchRef](../../../TFS/VersionControl/Contracts/TfvcBranchRef.md)[]&gt;

<a name="method_getChangeset"></a>
<h2 class='method'>getChangeset()</h2>

Retrieve a Tfvc Changeset

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcChangeset&gt; <b>getChangeset</b>(id, project, maxChangeCount, includeDetails, includeWorkItems, maxCommentLength, includeSourceRename, skip, top, orderby, searchCriteria)
</pre>

### Parameters

* `id`: number. 
* `project`: string. Optional. 
* `maxChangeCount`: number. Optional. 
* `includeDetails`: boolean. Optional. 
* `includeWorkItems`: boolean. Optional. 
* `maxCommentLength`: number. Optional. 
* `includeSourceRename`: boolean. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 
* `orderby`: string. Optional. 
* `searchCriteria`: [TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria](../../../TFS/VersionControl/Contracts/TfvcChangesetSearchCriteria.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcChangeset](../../../TFS/VersionControl/Contracts/TfvcChangeset.md)&gt;

<a name="method_getChangesetChanges"></a>
<h2 class='method'>getChangesetChanges()</h2>

Retrieve Tfvc changes for a given changeset

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcChange[]&gt; <b>getChangesetChanges</b>(id, skip, top)
</pre>

### Parameters

* `id`: number. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcChange](../../../TFS/VersionControl/Contracts/TfvcChange.md)[]&gt;

<a name="method_getChangesets"></a>
<h2 class='method'>getChangesets()</h2>

Retrieve Tfvc changesets

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcChangesetRef[]&gt; <b>getChangesets</b>(project, maxChangeCount, includeDetails, includeWorkItems, maxCommentLength, includeSourceRename, skip, top, orderby, searchCriteria)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `maxChangeCount`: number. Optional. 
* `includeDetails`: boolean. Optional. 
* `includeWorkItems`: boolean. Optional. 
* `maxCommentLength`: number. Optional. 
* `includeSourceRename`: boolean. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 
* `orderby`: string. Optional. 
* `searchCriteria`: [TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria](../../../TFS/VersionControl/Contracts/TfvcChangesetSearchCriteria.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcChangesetRef](../../../TFS/VersionControl/Contracts/TfvcChangesetRef.md)[]&gt;

<a name="method_getChangesetWorkItems"></a>
<h2 class='method'>getChangesetWorkItems()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.AssociatedWorkItem[]&gt; <b>getChangesetWorkItems</b>(id)
</pre>

### Parameters

* `id`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.AssociatedWorkItem](../../../TFS/VersionControl/Contracts/AssociatedWorkItem.md)[]&gt;

<a name="method_getItem"></a>
<h2 class='method'>getItem()</h2>

Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcItem&gt; <b>getItem</b>(path, project, fileName, download, scopePath, recursionLevel, versionDescriptor)
</pre>

### Parameters

* `path`: string. 
* `project`: string. Optional. 
* `fileName`: string. Optional. 
* `download`: boolean. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [TFS_VersionControl_Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `versionDescriptor`: [TFS_VersionControl_Contracts.TfvcVersionDescriptor](../../../TFS/VersionControl/Contracts/TfvcVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcItem](../../../TFS/VersionControl/Contracts/TfvcItem.md)&gt;

<a name="method_getItemContent"></a>
<h2 class='method'>getItemContent()</h2>

Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getItemContent</b>(path, project, fileName, download, scopePath, recursionLevel, versionDescriptor)
</pre>

### Parameters

* `path`: string. 
* `project`: string. Optional. 
* `fileName`: string. Optional. 
* `download`: boolean. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [TFS_VersionControl_Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `versionDescriptor`: [TFS_VersionControl_Contracts.TfvcVersionDescriptor](../../../TFS/VersionControl/Contracts/TfvcVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getItems"></a>
<h2 class='method'>getItems()</h2>

Get a list of Tfvc items

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcItem[]&gt; <b>getItems</b>(project, scopePath, recursionLevel, includeLinks, versionDescriptor)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `scopePath`: string. Optional. 
* `recursionLevel`: [TFS_VersionControl_Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `includeLinks`: boolean. Optional. 
* `versionDescriptor`: [TFS_VersionControl_Contracts.TfvcVersionDescriptor](../../../TFS/VersionControl/Contracts/TfvcVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcItem](../../../TFS/VersionControl/Contracts/TfvcItem.md)[]&gt;

<a name="method_getItemsBatch"></a>
<h2 class='method'>getItemsBatch()</h2>

Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcItem[][]&gt; <b>getItemsBatch</b>(itemRequestData, project)
</pre>

### Parameters

* `itemRequestData`: [TFS_VersionControl_Contracts.TfvcItemRequestData](../../../TFS/VersionControl/Contracts/TfvcItemRequestData.md). 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcItem](../../../TFS/VersionControl/Contracts/TfvcItem.md)[][]&gt;

<a name="method_getItemsBatchZip"></a>
<h2 class='method'>getItemsBatchZip()</h2>

Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getItemsBatchZip</b>(itemRequestData, project)
</pre>

### Parameters

* `itemRequestData`: [TFS_VersionControl_Contracts.TfvcItemRequestData](../../../TFS/VersionControl/Contracts/TfvcItemRequestData.md). 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getItemText"></a>
<h2 class='method'>getItemText()</h2>

Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;string&gt; <b>getItemText</b>(path, project, fileName, download, scopePath, recursionLevel, versionDescriptor)
</pre>

### Parameters

* `path`: string. 
* `project`: string. Optional. 
* `fileName`: string. Optional. 
* `download`: boolean. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [TFS_VersionControl_Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `versionDescriptor`: [TFS_VersionControl_Contracts.TfvcVersionDescriptor](../../../TFS/VersionControl/Contracts/TfvcVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string&gt;

<a name="method_getItemZip"></a>
<h2 class='method'>getItemZip()</h2>

Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getItemZip</b>(path, project, fileName, download, scopePath, recursionLevel, versionDescriptor)
</pre>

### Parameters

* `path`: string. 
* `project`: string. Optional. 
* `fileName`: string. Optional. 
* `download`: boolean. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [TFS_VersionControl_Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `versionDescriptor`: [TFS_VersionControl_Contracts.TfvcVersionDescriptor](../../../TFS/VersionControl/Contracts/TfvcVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getLabel"></a>
<h2 class='method'>getLabel()</h2>

Get a single deep label.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcLabel&gt; <b>getLabel</b>(labelId, requestData, project)
</pre>

### Parameters

* `labelId`: string. Unique identifier of label
* `requestData`: [TFS_VersionControl_Contracts.TfvcLabelRequestData](../../../TFS/VersionControl/Contracts/TfvcLabelRequestData.md). maxItemCount
* `project`: string. Optional. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcLabel](../../../TFS/VersionControl/Contracts/TfvcLabel.md)&gt;

<a name="method_getLabelItems"></a>
<h2 class='method'>getLabelItems()</h2>

Get items under a label.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcItem[]&gt; <b>getLabelItems</b>(labelId, top, skip)
</pre>

### Parameters

* `labelId`: string. Unique identifier of label
* `top`: number. Optional. Max number of items to return
* `skip`: number. Optional. Number of items to skip

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcItem](../../../TFS/VersionControl/Contracts/TfvcItem.md)[]&gt;

<a name="method_getLabels"></a>
<h2 class='method'>getLabels()</h2>

Get a collection of shallow label references.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcLabelRef[]&gt; <b>getLabels</b>(requestData, project, top, skip)
</pre>

### Parameters

* `requestData`: [TFS_VersionControl_Contracts.TfvcLabelRequestData](../../../TFS/VersionControl/Contracts/TfvcLabelRequestData.md). labelScope, name, owner, and itemLabelFilter
* `project`: string. Optional. Project ID or project name
* `top`: number. Optional. Max number of labels to return
* `skip`: number. Optional. Number of labels to skip

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcLabelRef](../../../TFS/VersionControl/Contracts/TfvcLabelRef.md)[]&gt;

<a name="method_getProjectInfo"></a>
<h2 class='method'>getProjectInfo()</h2>

[Obsolete - Use the Projects API instead] Retrieve the version control information for a given Project

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.VersionControlProjectInfo&gt; <b>getProjectInfo</b>(projectId, project)
</pre>

### Parameters

* `projectId`: string. The ID (or name) of the project
* `project`: string. Optional. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.VersionControlProjectInfo](../../../TFS/VersionControl/Contracts/VersionControlProjectInfo.md)&gt;

<a name="method_getProjectInfos"></a>
<h2 class='method'>getProjectInfos()</h2>

[Obsolete - Use the Projects API instead]

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.VersionControlProjectInfo[]&gt; <b>getProjectInfos</b>(project)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.VersionControlProjectInfo](../../../TFS/VersionControl/Contracts/VersionControlProjectInfo.md)[]&gt;

<a name="method_getShelveset"></a>
<h2 class='method'>getShelveset()</h2>

Get a single deep shelveset.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcShelveset&gt; <b>getShelveset</b>(shelvesetId, requestData)
</pre>

### Parameters

* `shelvesetId`: string. Shelveset&#x27;s unique ID
* `requestData`: [TFS_VersionControl_Contracts.TfvcShelvesetRequestData](../../../TFS/VersionControl/Contracts/TfvcShelvesetRequestData.md). includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcShelveset](../../../TFS/VersionControl/Contracts/TfvcShelveset.md)&gt;

<a name="method_getShelvesetChanges"></a>
<h2 class='method'>getShelvesetChanges()</h2>

Get changes included in a shelveset.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcChange[]&gt; <b>getShelvesetChanges</b>(shelvesetId, top, skip)
</pre>

### Parameters

* `shelvesetId`: string. Shelveset&#x27;s unique ID
* `top`: number. Optional. Max number of changes to return
* `skip`: number. Optional. Number of changes to skip

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcChange](../../../TFS/VersionControl/Contracts/TfvcChange.md)[]&gt;

<a name="method_getShelvesets"></a>
<h2 class='method'>getShelvesets()</h2>

Return a collection of shallow shelveset references.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.TfvcShelvesetRef[]&gt; <b>getShelvesets</b>(requestData, top, skip)
</pre>

### Parameters

* `requestData`: [TFS_VersionControl_Contracts.TfvcShelvesetRequestData](../../../TFS/VersionControl/Contracts/TfvcShelvesetRequestData.md). name, owner, and maxCommentLength
* `top`: number. Optional. Max number of shelvesets to return
* `skip`: number. Optional. Number of shelvesets to skip

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.TfvcShelvesetRef](../../../TFS/VersionControl/Contracts/TfvcShelvesetRef.md)[]&gt;

<a name="method_getShelvesetWorkItems"></a>
<h2 class='method'>getShelvesetWorkItems()</h2>

Get work items associated with a shelveset.

### Syntax
<pre class='syntax'>
 IPromise&lt;TFS_VersionControl_Contracts.AssociatedWorkItem[]&gt; <b>getShelvesetWorkItems</b>(shelvesetId)
</pre>

### Parameters

* `shelvesetId`: string. Shelveset&#x27;s unique ID

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[TFS_VersionControl_Contracts.AssociatedWorkItem](../../../TFS/VersionControl/Contracts/AssociatedWorkItem.md)[]&gt;

