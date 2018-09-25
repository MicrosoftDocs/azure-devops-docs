---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Builds | REST API Reference for Team Foundation Server
description: Get builds programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Builds
[!INCLUDE [API_version](../_data/version2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of builds
<a name="getalistofbuilds" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds?api-version={version}[&definitions={string}][&queues={string}][&buildNumber={string}][&type={string}][&minFinishTime={DateTime}][&maxFinishTime={DateTime}][&requestedFor={string}][&reasonFilter={string}][&statusFilter={string}][&tagFilters={string}][&propertyFilters={string}][&$top={int}][&continuationToken={string}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| definitions   | string   | A comma-delimited list of definition IDs.
| queues        | string   | A comma-delimited list of queue IDs.
| buildNumber   | string   | Filters to builds with build numbers that start with this value.
| type          | enum { build, xaml } | The type of builds to retrieve.
| minFinishTime | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Builds that finished after this time.
| maxFinishTime | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Builds that finished before this time.
| requestedFor  | string   | Builds requested by this user<br/>Alias of the user. `fabrikamfiber4@hotmail.com`, for example.
| reasonFilter  | enum { manual, individualCI, batchedCI, schedule, userCreated, validateShelveset, checkInShelveset, triggered, all } | The reason the build was created.
| resultFilter  | enum { succeeded, partiallySucceeded, failed, canceled } | The build result
| statusFilter  | enum { inProgress, completed, cancelling, postponed, notStarted, all } | The build status.
| tagFilters    | string   | A comma-delimited list of tags. Only builds with these tags will be returned.
| properties    | string   | A comma-delimited list of extended properties to retrieve.
| maxBuildsPerDefinition    | int   | The maximum number of builds to retrieve for each definition. This is only valid when definitions is also specified.
| $top          | int      | Maximum number of builds to return.
| continuationToken | string | A continuation token for paging through builds

### For a build definition
[!code-REST [GET__build_builds_definitions-_definitionId__statusFilter-completed__top-1_json](./_data/builds/GET__build_builds_definitions-_definitionId__statusFilter-completed__top-1.json)]

### With a continuation token
When requesting completed builds, the server will return a x-ms-continuationtoken value in the response header if there are more builds available. Repeat the request with this on the query string to get the next page of builds.

[!code-REST [GET__build_builds_definitions-_definitionId__statusFilter-completed_continuationToken-_continuationToken_json](./_data/builds/GET__build_builds_definitions-_definitionId__statusFilter-completed_continuationToken-_continuationToken_.json)]

### With a tag
<a name="getbuildswithatag" />
[!code-REST [GET__build_builds_tagFilters-myTag_json](./_data/builds/GET__build_builds_tagFilters-myTag.json)]


## Queue a build
<a name="queueabuild" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/builds?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance      | string | TFS server name ({server:port}).
| project       | string | [Project](../tfs/projects.md) ID or name.
| Query
| version       | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| definition.id | int    | The ID of the definition. This is required.
| queue.id      | int    | The ID of the queue. This is optional. If not specified, the default queue for the definition will be used.
| sourceBranch  | string | The branch to build. This is optional. If not specified, the default branch for the definition will be used.
| parameters    | stringified dictionary | Parameters to pass to the build. This is optional. If not specified, the default variables for the definition will be used.

[!code-REST [POST__build_builds_json](./_data/builds/POST__build_builds.json)]

## Get a build
<a name="getabuild" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_builds__knownBuildId__json](./_data/builds/GET__build_builds__knownBuildId_.json)]

## Get build details
<a name="getbuilddetails" />

### Timeline

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/timeline?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_builds__knownBuildId__timeline_json](./_data/builds/GET__build_builds__knownBuildId__timeline.json)]

### Changes

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/changes?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance    | string | TFS server name ({server:port}).
| project     | string | [Project](../tfs/projects.md) ID or name.
| buildId     | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top        | int    | Maximum number of changes to return.

[!code-REST [GET__build_builds__knownBuildId__changes_json](./_data/builds/GET__build_builds__knownBuildId__changes.json)]

### Work items

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/workitems?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance    | string | TFS server name ({server:port}).
| project     | string | [Project](../tfs/projects.md) ID or name.
| buildId     | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top        | int    | Maximum number of work items to return.

[!code-REST [POST__build_builds__knownBuildId__workitems_json](./_data/builds/POST__build_builds__knownBuildId__workitems.json)]

### Logs

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/logs
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_builds__knownBuildId__logs_json](./_data/builds/GET__build_builds__knownBuildId__logs.json)]

## Get build artifacts

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/artifacts
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_builds__knownBuildId__artifacts_json](./_data/builds/GET__build_builds__knownBuildId__artifacts.json)]

## Add a tag to a build
<a name="addatagtoabuild" />

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/tags/{tag}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| tag       | string | The tag to add to the build.

[!code-REST [PUT__build_builds__knownBuildId__tags_myTag_json](./_data/builds/PUT__build_builds__knownBuildId__tags_myTag.json)]

## Get tags for a build
<a name="gettagsforabuild" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/tags?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_builds__knownBuildId__tags_json](./_data/builds/GET__build_builds__knownBuildId__tags.json)]

## Remove a tag from a build

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/tags/{tag}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| tag       | string | The tag to remove from the build.

[!code-REST [DELETE__build_builds__knownBuildId__tags_myTag_json](./_data/builds/DELETE__build_builds__knownBuildId__tags_myTag.json)]

## Update a build

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| keepForever | boolean | Whether to exclude the build from retention policies.
| buildNumber | string  | The build number.
| startTime   | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | The start time. This can only be set once.
| finishTime  | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | The finish time. This can only be set once.
| status      | enum { inProgress, completed, cancelling, postponed, notStarted, all } | The build status. Once this is "completed", it can no longer be changed.
| sourceVersion | string | The source version.
| result      | enum { succeeded, partiallySucceeded, failed, canceled } | The build result.

[!code-REST [PATCH__build_builds__buildId__json](./_data/builds/PATCH__build_builds__buildId_.json)]


## Delete a build

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__build_builds__buildId__json](./_data/builds/DELETE__build_builds__buildId_.json)]
