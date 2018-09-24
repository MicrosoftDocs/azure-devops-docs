---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Build Requests (XAML Build) | REST API Reference for Team Foundation Server
description: Submit and acccess build requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 40A7EF31-7303-4A6E-ADB5-69BCF7830A2A
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Build requests
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build requests

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/requests[?requestedFor={string}&definitionId={int}&controllerId={int}&maxCompletedAge={int}&status={string}&$top={int}&$skip={int}]
```

| Parameter       | Type   | Notes
|:----------------|:-------|:------------
| URL
| instance        | string | TFS server name ({server:port}).
| project         | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version     | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| requestedFor    | string | Person who submitted the build request.<br/>Wildcards (*) are supported.
| definitionId    | int    | Build definition used to create the build request.
| queueId         | int    | Build requests that are handled by a build queue (controller).
| maxCompletedAge | int    | Build requests that completed in the previous time span (in seconds).
| status          | enum {<br/>&nbsp;&nbsp;All,<br/>&nbsp;&nbsp;Cancelled,<br/>&nbsp;&nbsp;Completed,<br/>&nbsp;&nbsp;InProgress,<br/>&nbsp;&nbsp;None,<br/>&nbsp;&nbsp;Postponed,<br/>&nbsp;&nbsp;Queued,<br/>&nbsp;&nbsp;Retry<br/>} | Status of the build requests.
| $top            | int    | Number of requests to return.
| $skip           | int    | Number of requests to skip.

[!code-REST [GET__build_requests_json](./_data/requests/GET__build_requests.json)]

### Requested by
[!code-REST [GET__build_requests_requestedFor-_person__json](./_data/requests/GET__build_requests_requestedFor-_person_.json)]

### For a build definition
[!code-REST [GET__build_requests_definitionId-_definition__json](./_data/requests/GET__build_requests_definitionId-_definition_.json)]

### In a queue
[!code-REST [GET__build_requests_controllerId-_queue__json](./_data/requests/GET__build_requests_controllerId-_queue_.json)]

### Completed since
[!code-REST [GET__build_requests_maxCompletedAge-_age__json](./_data/requests/GET__build_requests_maxCompletedAge-_age_.json)]

### By status
[!code-REST [GET__build_requests_status-_status__json](./_data/requests/GET__build_requests_status-_status_.json)]

### A page at a time
[!code-REST [GET__build_requests__top-_top___skip-_skip__json](./_data/requests/GET__build_requests__top-_top___skip-_skip_.json)]

## Request a build
<a name="requestabuild" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/requests?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	definition: {
		id: {buildDefinition}
	},
	reason: {reason},
	priority: {priority},
	[queue: { 
		id: {queueId}
	}]
}
```

| Parameter       | Type   | Required | Notes
|:----------------|:-------|:---------|:------------
| URL
| instance        | string | yes      | TFS server name ({server:port}).
| project         | string | yes      | [Project](../tfs/projects.md) ID or name containing the build definition.
| Request body
| buildDefinition | int    | yes      | ID of the build definition to use.
| reason          | enum {<br/>&nbsp;&nbsp;BatchedCI,<br/>&nbsp;&nbsp;CheckInShelveset,<br/>&nbsp;&nbsp;IndividualCI,<br/>&nbsp;&nbsp;Manual,<br/>&nbsp;&nbsp;None,<br/>&nbsp;&nbsp;Schedule,<br/>&nbsp;&nbsp;ScheduleForced,<br/>&nbsp;&nbsp;Triggered,<br/>&nbsp;&nbsp;UserCreated,<br/>&nbsp;&nbsp;ValidateShelveset<br/>} | yes | Reason for the request.
| priority        | enum {<br/>&nbsp;&nbsp;Normal,<br/>&nbsp;&nbsp;AboveNormal,<br/>&nbsp;&nbsp;BelowNormal,<br/>&nbsp;&nbsp;High,<br/>&nbsp;&nbsp;Low<br/>} | yes | Priority of the request.
| queueId         | int    | no       | ID of the queue in which to request the build.<br/>If not specified the build system will choose a queue.

[!code-REST [POST__build_requests_json](./_data/requests/POST__build_requests.json)]

## Update the status of a request
<a name="updatethestatusofabuildrequest" />

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/build/requests/{request}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	status: {status}
}
```
 
| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| request   | int    | ID of the build request to update.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status    | enum {<br/>&nbsp;&nbsp;Postponed,<br/>&nbsp;&nbsp;Queued,<br/>&nbsp;&nbsp;InProgress<br/>} | The new status.

[!code-REST [PATCH__build_requests__request__json](./_data/requests/PATCH__build_requests__request_.json)]

## Cancel a build request
<a name="cancelabuildrequest" />

A build request can only be deleted before the build has started.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/requests/{request}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| request   | int    | ID of the build request to delete.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__build_requests__requestToDelete__json](./_data/requests/DELETE__build_requests__requestToDelete_.json)]
