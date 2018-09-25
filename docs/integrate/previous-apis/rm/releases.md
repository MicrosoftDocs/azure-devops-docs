---
title: Releases | VSTS REST API Reference
description: Get Releases programmatically using the REST APIs for VSTS.
ms.assetid: 3eb13243-f504-4cfd-a97e-638d8a0690d2
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Releases
[!INCLUDE [API_version](../_data/version3-preview2.md)]

**On-premises use** : An earlier, and slightly different version of the Release Management API is available in Team Foundation Server 2015 Update 2. To use this earlier version, you must specify an API version of **2.2-preview.1**.   

## Get a list of releases

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases?api-version={version}[&definitionId={int}&createdBy={string}&maxCreatedTime={datetime}&minCreatedTime={datetime}&statusFilter={string}&$expand={enum}&$top={string}&queryOrder={string}&continuationToken={string}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| account       | string   | Your VSTS organization.
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| definitionId  | int   | Releases for this definition.
| createdBy     | string   | Releases created by this user.<br/>Alias of the user. `chuckreinhart@outlook.com`, for example.
| minCreatedTime | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Releases that were created after this time.
| maxCreatedTime | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Releases that were created before this time.
| statusFilter        | enum {<br/>&nbsp;&nbsp;Draft,<br/>&nbsp;&nbsp;Active,<br/>&nbsp;&nbsp;Abandoned<br/>} | Releases that have this status.
| $expand		| enum {<br/>&nbsp;&nbsp;environments,<br/>&nbsp;&nbsp;artifacts,<br/>&nbsp;&nbsp;approvals,<br/>&nbsp;&nbsp;none<br/>} | The property that should be expanded in the list of releases.
| $top		| int | Number of releases to get
| queryOrder		| enum {<br/>&nbsp;&nbsp;ascending,<br/>&nbsp;&nbsp;descending<br/>} | Gets the results in the defined order of created date for releases
| continuationToken		| string | Gets the releases after the continuation token provided .

[!code-REST [GET__release_releases_json](./_data/releases/GET__release_releases.json)]

### For a release definition
[!code-REST [GET__release_releases_definitionId-_definitionId__json](./_data/releases/GET__release_releases_definitionId-_definitionId_.json)]

## Get a release
<a name="getreleasedetails" />

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| releaseId   | int    | ID of the release.
| Query
| version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__release_releases__releaseId__json](./_data/releases/GET__release_releases__releaseId_.json)]

## Create a release

```no-highlight
POST https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	definitionId: {int},
	description: {string}
	artifacts: [
		{
			   alias: {string},
				 instanceReference: {
						name: {string},
						id: {string},
						sourceBranch: {string}
				 }
		}		
	]
}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| definitionId    | int  | ID of the Release definition for which release will be created.
| description    | string  | Description of the given release
| alias		 | string | Alias of the artifact associated with the release definition
| name  | string | (optional) Name of the artifact instance
| id 		 | string		| ID of the artifact
| sourceBranch | string | (optional) Source branch off which the artifact got created. Eg. For Build it mentions the branch that got built


[!code-REST [POST__release_releases_json](./_data/Releases/POST__release_releases.json)]

## Modify the status of a release

```no-highlight
PATCH https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	"status": {string}
}
```

| Parameter   | Type    | Notes
|:------------|:--------|:------------
| URL
| account     | string  | Your VSTS organization.
| project     | string  | [Project](../tfs/projects.md) ID or name.
| releaseId     | int     | ID of the release.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status      | enum {<br/>&nbsp;&nbsp;Active,<br/>&nbsp;&nbsp;Abandoned<br/>}  | The new status.


### Abandoning an active release
[!code-REST [PATCH__release_releases__releaseId__json](./_data/Releases/PATCH__release_releases__releaseId_.json)]


## Change the status of a release environment

```no-highlight
PATCH https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}/environments/{environmentId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	"status": {string}
}
```


| Parameter   | Type    | Notes
|:------------|:--------|:------------
| URL
| account     | string  | Your VSTS organization.
| project     | string  | [Project](../tfs/projects.md) ID or name.
| releaseId     | int     | ID of the release.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status      | enum {<br/>&nbsp;&nbsp;InProgress,<br/>&nbsp;&nbsp;Canceled,<br/>} | The new status.

### Start deployment on an environment
[!code-REST [PATCH__release_releases__releaseId__environments__environmentId__json](./_data/Releases/PATCH__release_releases__releaseId__environments__environmentId_.json)]

## Get logs for a release

Get a zip file of all the tasks' logs for a release

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}/logs?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| releaseId | int    | Logs for this release.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.


## Get log for a task of a release

This gets the task log of a release as a plain text file.

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}/environments/{environment}/tasks/{taskId}/logs?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| releaseId | int |	Release ID for which this approval belongs to.
| environmentId | string |	Environment ID for which this approval belongs to.
| taskId	| int |	Task iD for the log.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
