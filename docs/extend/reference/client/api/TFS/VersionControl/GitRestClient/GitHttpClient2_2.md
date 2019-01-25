---
title: TFS/VersionControl/GitRestClient GitHttpClient2_2 API | Extensions for Azure DevOps Services
ms.assetid: 42d598dd-495f-509e-7253-6ced20ad7aec
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

# GitHttpClient2_2

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/VersionControl/GitRestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/VersionControl/GitRestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [createCommitStatus()](#method_createCommitStatus)
* [createPullRequest()](#method_createPullRequest)
* [createPullRequestReviewer()](#method_createPullRequestReviewer)
* [createPullRequestReviewers()](#method_createPullRequestReviewers)
* [createPush()](#method_createPush)
* [createRepository()](#method_createRepository)
* [deletePullRequestReviewer()](#method_deletePullRequestReviewer)
* [deleteRepository()](#method_deleteRepository)
* [getBlob()](#method_getBlob)
* [getBlobContent()](#method_getBlobContent)
* [getBlobsZip()](#method_getBlobsZip)
* [getBlobZip()](#method_getBlobZip)
* [getBranch()](#method_getBranch)
* [getBranches()](#method_getBranches)
* [getChanges()](#method_getChanges)
* [getCommit()](#method_getCommit)
* [getCommits()](#method_getCommits)
* [getCommitsBatch()](#method_getCommitsBatch)
* [getItem()](#method_getItem)
* [getItemContent()](#method_getItemContent)
* [getItems()](#method_getItems)
* [getItemsBatch()](#method_getItemsBatch)
* [getItemText()](#method_getItemText)
* [getItemZip()](#method_getItemZip)
* [getPullRequest()](#method_getPullRequest)
* [getPullRequestCommits()](#method_getPullRequestCommits)
* [getPullRequestReviewer()](#method_getPullRequestReviewer)
* [getPullRequestReviewers()](#method_getPullRequestReviewers)
* [getPullRequests()](#method_getPullRequests)
* [getPullRequestsByProject()](#method_getPullRequestsByProject)
* [getPullRequestWorkItems()](#method_getPullRequestWorkItems)
* [getPush()](#method_getPush)
* [getPushCommits()](#method_getPushCommits)
* [getPushes()](#method_getPushes)
* [getRefs()](#method_getRefs)
* [getRepositories()](#method_getRepositories)
* [getRepository()](#method_getRepository)
* [getStatuses()](#method_getStatuses)
* [getSuggestions()](#method_getSuggestions)
* [getTree()](#method_getTree)
* [getTreeZip()](#method_getTreeZip)
* [updatePullRequest()](#method_updatePullRequest)
* [updateRefs()](#method_updateRefs)
* [updateRepository()](#method_updateRepository)

<a name="method_createCommitStatus"></a>
<h2 class='method'>createCommitStatus()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitStatus&gt; <b>createCommitStatus</b>(gitCommitStatusToCreate, commitId, repositoryId, project)
</pre>

### Parameters

* `gitCommitStatusToCreate`: [Contracts.GitStatus](../../../TFS/VersionControl/Contracts/GitStatus.md). 
* `commitId`: string. 
* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitStatus](../../../TFS/VersionControl/Contracts/GitStatus.md)&gt;

<a name="method_createPullRequest"></a>
<h2 class='method'>createPullRequest()</h2>

 Create a git pull request

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPullRequest&gt; <b>createPullRequest</b>(gitPullRequestToCreate, repositoryId, project)
</pre>

### Parameters

* `gitPullRequestToCreate`: [Contracts.GitPullRequest](../../../TFS/VersionControl/Contracts/GitPullRequest.md). 
* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPullRequest](../../../TFS/VersionControl/Contracts/GitPullRequest.md)&gt;

<a name="method_createPullRequestReviewer"></a>
<h2 class='method'>createPullRequestReviewer()</h2>

 Adds a reviewer to a git pull request

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.IdentityRefWithVote&gt; <b>createPullRequestReviewer</b>(reviewer, repositoryId, pullRequestId, reviewerId, project)
</pre>

### Parameters

* `reviewer`: [Contracts.IdentityRefWithVote](../../../TFS/VersionControl/Contracts/IdentityRefWithVote.md). 
* `repositoryId`: string. 
* `pullRequestId`: number. 
* `reviewerId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.IdentityRefWithVote](../../../TFS/VersionControl/Contracts/IdentityRefWithVote.md)&gt;

<a name="method_createPullRequestReviewers"></a>
<h2 class='method'>createPullRequestReviewers()</h2>

 Adds reviewers to a git pull request

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.IdentityRefWithVote[]&gt; <b>createPullRequestReviewers</b>(reviewers, repositoryId, pullRequestId, project)
</pre>

### Parameters

* `reviewers`: [VSS_Common_Contracts.IdentityRef](../../../VSS/WebApi/Contracts/IdentityRef.md)[]. 
* `repositoryId`: string. 
* `pullRequestId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.IdentityRefWithVote](../../../TFS/VersionControl/Contracts/IdentityRefWithVote.md)[]&gt;

<a name="method_createPush"></a>
<h2 class='method'>createPush()</h2>

 Push changes to the repository.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPush&gt; <b>createPush</b>(push, repositoryId, project)
</pre>

### Parameters

* `push`: [Contracts.GitPush](../../../TFS/VersionControl/Contracts/GitPush.md). 
* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPush](../../../TFS/VersionControl/Contracts/GitPush.md)&gt;

<a name="method_createRepository"></a>
<h2 class='method'>createRepository()</h2>

 Create a git repository

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitRepository&gt; <b>createRepository</b>(gitRepositoryToCreate, project)
</pre>

### Parameters

* `gitRepositoryToCreate`: [Contracts.GitRepository](../../../TFS/VersionControl/Contracts/GitRepository.md). 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitRepository](../../../TFS/VersionControl/Contracts/GitRepository.md)&gt;

<a name="method_deletePullRequestReviewer"></a>
<h2 class='method'>deletePullRequestReviewer()</h2>

 Adds reviewers to a git pull request

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deletePullRequestReviewer</b>(repositoryId, pullRequestId, reviewerId, project)
</pre>

### Parameters

* `repositoryId`: string. 
* `pullRequestId`: number. 
* `reviewerId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteRepository"></a>
<h2 class='method'>deleteRepository()</h2>

 Delete a git repository

### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteRepository</b>(repositoryId, project)
</pre>

### Parameters

* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_getBlob"></a>
<h2 class='method'>getBlob()</h2>

 Gets a single blob.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitBlobRef&gt; <b>getBlob</b>(repositoryId, sha1, project, download, fileName)
</pre>

### Parameters

* `repositoryId`: string. 
* `sha1`: string. 
* `project`: string. Optional. 
* `download`: boolean. Optional. 
* `fileName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitBlobRef](../../../TFS/VersionControl/Contracts/GitBlobRef.md)&gt;

<a name="method_getBlobContent"></a>
<h2 class='method'>getBlobContent()</h2>

 Gets a single blob.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getBlobContent</b>(repositoryId, sha1, project, download, fileName)
</pre>

### Parameters

* `repositoryId`: string. 
* `sha1`: string. 
* `project`: string. Optional. 
* `download`: boolean. Optional. 
* `fileName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getBlobsZip"></a>
<h2 class='method'>getBlobsZip()</h2>

 Gets one or more blobs in a zip file download.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getBlobsZip</b>(blobIds, repositoryId, project, filename)
</pre>

### Parameters

* `blobIds`: string[]. 
* `repositoryId`: string. 
* `project`: string. Optional. 
* `filename`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getBlobZip"></a>
<h2 class='method'>getBlobZip()</h2>

 Gets a single blob.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getBlobZip</b>(repositoryId, sha1, project, download, fileName)
</pre>

### Parameters

* `repositoryId`: string. 
* `sha1`: string. 
* `project`: string. Optional. 
* `download`: boolean. Optional. 
* `fileName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getBranch"></a>
<h2 class='method'>getBranch()</h2>

 Retrieve statistics about a single branch.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitBranchStats&gt; <b>getBranch</b>(repositoryId, name, project, baseVersionDescriptor)
</pre>

### Parameters

* `repositoryId`: string. Friendly name or guid of repository
* `name`: string. Name of the branch
* `project`: string. Optional. Project ID or project name
* `baseVersionDescriptor`: [Contracts.GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitBranchStats](../../../TFS/VersionControl/Contracts/GitBranchStats.md)&gt;

<a name="method_getBranches"></a>
<h2 class='method'>getBranches()</h2>

 Retrieve statistics about all branches within a repository.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitBranchStats[]&gt; <b>getBranches</b>(repositoryId, project, baseVersionDescriptor)
</pre>

### Parameters

* `repositoryId`: string. Friendly name or guid of repository
* `project`: string. Optional. Project ID or project name
* `baseVersionDescriptor`: [Contracts.GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitBranchStats](../../../TFS/VersionControl/Contracts/GitBranchStats.md)[]&gt;

<a name="method_getChanges"></a>
<h2 class='method'>getChanges()</h2>

 Retrieve changes for a particular commit.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitCommitChanges&gt; <b>getChanges</b>(commitId, repositoryId, project, top, skip)
</pre>

### Parameters

* `commitId`: string. The ID of the commit.
* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `project`: string. Optional. Project ID or project name
* `top`: number. Optional. The maximum number of changes to return.
* `skip`: number. Optional. The number of changes to skip.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitCommitChanges](../../../TFS/VersionControl/Contracts/GitCommitChanges.md)&gt;

<a name="method_getCommit"></a>
<h2 class='method'>getCommit()</h2>

 Retrieve a particular commit.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitCommit&gt; <b>getCommit</b>(commitId, repositoryId, project, changeCount)
</pre>

### Parameters

* `commitId`: string. The ID of the commit.
* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `project`: string. Optional. Project ID or project name
* `changeCount`: number. Optional. The number of changes to include in the result.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitCommit](../../../TFS/VersionControl/Contracts/GitCommit.md)&gt;

<a name="method_getCommits"></a>
<h2 class='method'>getCommits()</h2>

 Retrieve git commits for a project

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitCommitRef[]&gt; <b>getCommits</b>(repositoryId, searchCriteria, project, skip, top)
</pre>

### Parameters

* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `searchCriteria`: [Contracts.GitQueryCommitsCriteria](../../../TFS/VersionControl/Contracts/GitQueryCommitsCriteria.md). 
* `project`: string. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md)[]&gt;

<a name="method_getCommitsBatch"></a>
<h2 class='method'>getCommitsBatch()</h2>

 Retrieve git commits for a project

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitCommitRef[]&gt; <b>getCommitsBatch</b>(searchCriteria, repositoryId, project, skip, top)
</pre>

### Parameters

* `searchCriteria`: [Contracts.GitQueryCommitsCriteria](../../../TFS/VersionControl/Contracts/GitQueryCommitsCriteria.md). Search options
* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `project`: string. Optional. Project ID or project name
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md)[]&gt;

<a name="method_getItem"></a>
<h2 class='method'>getItem()</h2>

 Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitItem&gt; <b>getItem</b>(repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor)
</pre>

### Parameters

* `repositoryId`: string. 
* `path`: string. 
* `project`: string. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `includeContentMetadata`: boolean. Optional. 
* `latestProcessedChange`: boolean. Optional. 
* `download`: boolean. Optional. 
* `versionDescriptor`: [Contracts.GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitItem](../../../TFS/VersionControl/Contracts/GitItem.md)&gt;

<a name="method_getItemContent"></a>
<h2 class='method'>getItemContent()</h2>

 Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getItemContent</b>(repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor)
</pre>

### Parameters

* `repositoryId`: string. 
* `path`: string. 
* `project`: string. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `includeContentMetadata`: boolean. Optional. 
* `latestProcessedChange`: boolean. Optional. 
* `download`: boolean. Optional. 
* `versionDescriptor`: [Contracts.GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getItems"></a>
<h2 class='method'>getItems()</h2>

 Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitItem[]&gt; <b>getItems</b>(repositoryId, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, includeLinks, versionDescriptor)
</pre>

### Parameters

* `repositoryId`: string. 
* `project`: string. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `includeContentMetadata`: boolean. Optional. 
* `latestProcessedChange`: boolean. Optional. 
* `download`: boolean. Optional. 
* `includeLinks`: boolean. Optional. 
* `versionDescriptor`: [Contracts.GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitItem](../../../TFS/VersionControl/Contracts/GitItem.md)[]&gt;

<a name="method_getItemsBatch"></a>
<h2 class='method'>getItemsBatch()</h2>

 Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitItem[][]&gt; <b>getItemsBatch</b>(requestData, repositoryId, project)
</pre>

### Parameters

* `requestData`: [Contracts.GitItemRequestData](../../../TFS/VersionControl/Contracts/GitItemRequestData.md). 
* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitItem](../../../TFS/VersionControl/Contracts/GitItem.md)[][]&gt;

<a name="method_getItemText"></a>
<h2 class='method'>getItemText()</h2>

 Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;string&gt; <b>getItemText</b>(repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor)
</pre>

### Parameters

* `repositoryId`: string. 
* `path`: string. 
* `project`: string. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `includeContentMetadata`: boolean. Optional. 
* `latestProcessedChange`: boolean. Optional. 
* `download`: boolean. Optional. 
* `versionDescriptor`: [Contracts.GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;string&gt;

<a name="method_getItemZip"></a>
<h2 class='method'>getItemZip()</h2>

 Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn&#x27;t apply to zipped content which is always returned as a download.

### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getItemZip</b>(repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor)
</pre>

### Parameters

* `repositoryId`: string. 
* `path`: string. 
* `project`: string. Optional. 
* `scopePath`: string. Optional. 
* `recursionLevel`: [Contracts.VersionControlRecursionType](../../../TFS/VersionControl/Contracts/VersionControlRecursionType.md). Optional. 
* `includeContentMetadata`: boolean. Optional. 
* `latestProcessedChange`: boolean. Optional. 
* `download`: boolean. Optional. 
* `versionDescriptor`: [Contracts.GitVersionDescriptor](../../../TFS/VersionControl/Contracts/GitVersionDescriptor.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getPullRequest"></a>
<h2 class='method'>getPullRequest()</h2>

 Retrieve a pull request

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPullRequest&gt; <b>getPullRequest</b>(repositoryId, pullRequestId, project, maxCommentLength, skip, top, includeCommits, includeWorkItemRefs)
</pre>

### Parameters

* `repositoryId`: string. 
* `pullRequestId`: number. 
* `project`: string. Optional. 
* `maxCommentLength`: number. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 
* `includeCommits`: boolean. Optional. 
* `includeWorkItemRefs`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPullRequest](../../../TFS/VersionControl/Contracts/GitPullRequest.md)&gt;

<a name="method_getPullRequestCommits"></a>
<h2 class='method'>getPullRequestCommits()</h2>

 Retrieve pull request&#x27;s commits

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitCommitRef[]&gt; <b>getPullRequestCommits</b>(repositoryId, pullRequestId, project)
</pre>

### Parameters

* `repositoryId`: string. 
* `pullRequestId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md)[]&gt;

<a name="method_getPullRequestReviewer"></a>
<h2 class='method'>getPullRequestReviewer()</h2>

 Retrieve a reviewer from a pull request

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.IdentityRefWithVote&gt; <b>getPullRequestReviewer</b>(repositoryId, pullRequestId, reviewerId, project)
</pre>

### Parameters

* `repositoryId`: string. 
* `pullRequestId`: number. 
* `reviewerId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.IdentityRefWithVote](../../../TFS/VersionControl/Contracts/IdentityRefWithVote.md)&gt;

<a name="method_getPullRequestReviewers"></a>
<h2 class='method'>getPullRequestReviewers()</h2>

 Retrieve a pull request reviewers

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.IdentityRefWithVote[]&gt; <b>getPullRequestReviewers</b>(repositoryId, pullRequestId, project)
</pre>

### Parameters

* `repositoryId`: string. 
* `pullRequestId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.IdentityRefWithVote](../../../TFS/VersionControl/Contracts/IdentityRefWithVote.md)[]&gt;

<a name="method_getPullRequests"></a>
<h2 class='method'>getPullRequests()</h2>

 Query for pull requests

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPullRequest[]&gt; <b>getPullRequests</b>(repositoryId, searchCriteria, project, maxCommentLength, skip, top)
</pre>

### Parameters

* `repositoryId`: string. 
* `searchCriteria`: [Contracts.GitPullRequestSearchCriteria](../../../TFS/VersionControl/Contracts/GitPullRequestSearchCriteria.md). 
* `project`: string. Optional. 
* `maxCommentLength`: number. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPullRequest](../../../TFS/VersionControl/Contracts/GitPullRequest.md)[]&gt;

<a name="method_getPullRequestsByProject"></a>
<h2 class='method'>getPullRequestsByProject()</h2>

 Query pull requests by project

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPullRequest[]&gt; <b>getPullRequestsByProject</b>(project, searchCriteria, maxCommentLength, skip, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `searchCriteria`: [Contracts.GitPullRequestSearchCriteria](../../../TFS/VersionControl/Contracts/GitPullRequestSearchCriteria.md). 
* `maxCommentLength`: number. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPullRequest](../../../TFS/VersionControl/Contracts/GitPullRequest.md)[]&gt;

<a name="method_getPullRequestWorkItems"></a>
<h2 class='method'>getPullRequestWorkItems()</h2>

 Retrieve a pull request work items

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.AssociatedWorkItem[]&gt; <b>getPullRequestWorkItems</b>(repositoryId, pullRequestId, project, commitsTop, commitsSkip)
</pre>

### Parameters

* `repositoryId`: string. 
* `pullRequestId`: number. 
* `project`: string. Optional. 
* `commitsTop`: number. Optional. 
* `commitsSkip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.AssociatedWorkItem](../../../TFS/VersionControl/Contracts/AssociatedWorkItem.md)[]&gt;

<a name="method_getPush"></a>
<h2 class='method'>getPush()</h2>

 Retrieve a particular push.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPush&gt; <b>getPush</b>(repositoryId, pushId, project, includeCommits, includeRefUpdates)
</pre>

### Parameters

* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `pushId`: number. The ID of the push.
* `project`: string. Optional. Project ID or project name
* `includeCommits`: number. Optional. The number of commits to include in the result.
* `includeRefUpdates`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPush](../../../TFS/VersionControl/Contracts/GitPush.md)&gt;

<a name="method_getPushCommits"></a>
<h2 class='method'>getPushCommits()</h2>

 Retrieve a list of commits associated with a particular push.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitCommitRef[]&gt; <b>getPushCommits</b>(repositoryId, pushId, project, top, skip, includeLinks)
</pre>

### Parameters

* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `pushId`: number. The ID of the push.
* `project`: string. Optional. Project ID or project name
* `top`: number. Optional. The maximum number of commits to return (&quot;get the top x commits&quot;).
* `skip`: number. Optional. The number of commits to skip.
* `includeLinks`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitCommitRef](../../../TFS/VersionControl/Contracts/GitCommitRef.md)[]&gt;

<a name="method_getPushes"></a>
<h2 class='method'>getPushes()</h2>

 Retrieves pushes associated with the specified repository.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPush[]&gt; <b>getPushes</b>(repositoryId, project, skip, top, searchCriteria)
</pre>

### Parameters

* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `project`: string. Optional. Project ID or project name
* `skip`: number. Optional. 
* `top`: number. Optional. 
* `searchCriteria`: [Contracts.GitPushSearchCriteria](../../../TFS/VersionControl/Contracts/GitPushSearchCriteria.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPush](../../../TFS/VersionControl/Contracts/GitPush.md)[]&gt;

<a name="method_getRefs"></a>
<h2 class='method'>getRefs()</h2>

 Queries the provided repository for its refs and returns them.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitRef[]&gt; <b>getRefs</b>(repositoryId, project, filter, includeLinks, includeStatuses)
</pre>

### Parameters

* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `project`: string. Optional. Project ID or project name
* `filter`: string. Optional. [optional] A filter to apply to the refs.
* `includeLinks`: boolean. Optional. [optional] Specifies if referenceLinks should be included in the result. default is false.
* `includeStatuses`: boolean. Optional. [optional] Includes the first 1000 statuses of the commits the refs are pointing at as well. default is false.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitRef](../../../TFS/VersionControl/Contracts/GitRef.md)[]&gt;

<a name="method_getRepositories"></a>
<h2 class='method'>getRepositories()</h2>

 Retrieve git repositories.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitRepository[]&gt; <b>getRepositories</b>(project, includeLinks)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name
* `includeLinks`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitRepository](../../../TFS/VersionControl/Contracts/GitRepository.md)[]&gt;

<a name="method_getRepository"></a>
<h2 class='method'>getRepository()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitRepository&gt; <b>getRepository</b>(repositoryId, project)
</pre>

### Parameters

* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitRepository](../../../TFS/VersionControl/Contracts/GitRepository.md)&gt;

<a name="method_getStatuses"></a>
<h2 class='method'>getStatuses()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitStatus[]&gt; <b>getStatuses</b>(commitId, repositoryId, project, top, skip)
</pre>

### Parameters

* `commitId`: string. 
* `repositoryId`: string. 
* `project`: string. Optional. 
* `top`: number. Optional. 
* `skip`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitStatus](../../../TFS/VersionControl/Contracts/GitStatus.md)[]&gt;

<a name="method_getSuggestions"></a>
<h2 class='method'>getSuggestions()</h2>

 Retrieve a set of suggestions (including a pull request suggestion).

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitSuggestion[]&gt; <b>getSuggestions</b>(repositoryId, project)
</pre>

### Parameters

* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitSuggestion](../../../TFS/VersionControl/Contracts/GitSuggestion.md)[]&gt;

<a name="method_getTree"></a>
<h2 class='method'>getTree()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitTreeRef&gt; <b>getTree</b>(repositoryId, sha1, project, projectId, recursive, fileName)
</pre>

### Parameters

* `repositoryId`: string. 
* `sha1`: string. 
* `project`: string. Optional. 
* `projectId`: string. Optional. 
* `recursive`: boolean. Optional. 
* `fileName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitTreeRef](../../../TFS/VersionControl/Contracts/GitTreeRef.md)&gt;

<a name="method_getTreeZip"></a>
<h2 class='method'>getTreeZip()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getTreeZip</b>(repositoryId, sha1, project, projectId, recursive, fileName)
</pre>

### Parameters

* `repositoryId`: string. 
* `sha1`: string. 
* `project`: string. Optional. 
* `projectId`: string. Optional. 
* `recursive`: boolean. Optional. 
* `fileName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_updatePullRequest"></a>
<h2 class='method'>updatePullRequest()</h2>

 Updates a pull request

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitPullRequest&gt; <b>updatePullRequest</b>(gitPullRequestToUpdate, repositoryId, pullRequestId, project)
</pre>

### Parameters

* `gitPullRequestToUpdate`: [Contracts.GitPullRequest](../../../TFS/VersionControl/Contracts/GitPullRequest.md). 
* `repositoryId`: string. 
* `pullRequestId`: number. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitPullRequest](../../../TFS/VersionControl/Contracts/GitPullRequest.md)&gt;

<a name="method_updateRefs"></a>
<h2 class='method'>updateRefs()</h2>

 Creates or updates refs with the given information

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitRefUpdateResult[]&gt; <b>updateRefs</b>(refUpdates, repositoryId, project, projectId)
</pre>

### Parameters

* `refUpdates`: [Contracts.GitRefUpdate](../../../TFS/VersionControl/Contracts/GitRefUpdate.md)[]. List of ref updates to attempt to perform
* `repositoryId`: string. The ID or friendly name of the repository. To use the friendly name, projectId must also be specified.
* `project`: string. Optional. Project ID or project name
* `projectId`: string. Optional. The ID of the project.

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitRefUpdateResult](../../../TFS/VersionControl/Contracts/GitRefUpdateResult.md)[]&gt;

<a name="method_updateRepository"></a>
<h2 class='method'>updateRepository()</h2>

 Updates the Git repository with the single populated change in the specified repository information.

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.GitRepository&gt; <b>updateRepository</b>(newRepositoryInfo, repositoryId, project)
</pre>

### Parameters

* `newRepositoryInfo`: [Contracts.GitRepository](../../../TFS/VersionControl/Contracts/GitRepository.md). 
* `repositoryId`: string. 
* `project`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.GitRepository](../../../TFS/VersionControl/Contracts/GitRepository.md)&gt;

