---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: XAML Builds | REST API Reference for Team Foundation Server
description: Get builds programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 0B7A8B2D-8901-46FB-8F15-CF6101B24218
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Builds
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of builds

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds?api-version={version}[&definitionId={string}&requestedFor={string}&minFinishTime={DateTime}&status={string}&quality={quality}&$skip={int}&$top={int}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| definition    | string   | Builds that have this definition.
| requestedFor  | string   | Builds requested by this user<br/>Alias of the user. `fabrikamfiber4@hotmail.com`, for example.
| minFinishTime | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) | Builds that finished after this time.
| quality       | string   | Builds that have this [quality](./qualities.md).
| status        | enum {<br/>&nbsp;&nbsp;All<br/>&nbsp;&nbsp;Failed<br/>&nbsp;&nbsp;InProgress<br/>&nbsp;&nbsp;None<br/>&nbsp;&nbsp;NotStarted<br/>&nbsp;&nbsp;PartiallySucceeded<br/>&nbsp;&nbsp;Stopped<br/>&nbsp;&nbsp;Succeeded<br/>} | Builds that have this status. Combine flags with a comma, e.g. `InProgress,NotStarted` to list builds that haven't finished yet.
| $skip         | int      | Number of builds to skip.
| $top          | int      | Number of builds to return.

[!code-REST [GET__build_builds_json](./_data/builds/GET__build_builds.json)]

### For a build definition
[!code-REST [GET__build_builds_definition-_definition__json](./_data/builds/GET__build_builds_definition-_definition_.json)]

### Requested by
[!code-REST [GET__build_builds_requestedFor-_person__json](./_data/builds/GET__build_builds_requestedFor-_person_.json)]

### After this time
[!code-REST [GET__build_builds_minFinishTime-_after__json](./_data/builds/GET__build_builds_minFinishTime-_after_.json)]

### By quality
[!code-REST [GET__build_builds_quality-_quality__json](./_data/builds/GET__build_builds_quality-_quality_.json)]

### By status
[!code-REST [GET__build_builds_status-_status__json](./_data/builds/GET__build_builds_status-_status_.json)]

### A page at a time
[!code-REST [GET__build_builds__skip-_skip___top-_top__json](./_data/builds/GET__build_builds__skip-_skip___top-_top_.json)]

## Get a build

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

[!code-REST [GET__build_builds__build1__json](./_data/builds/GET__build_builds__build1_.json)]

## Get build details
<a name="getbuilddetails" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}/details?api-version={version}[&types={string}&types={string}]
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| types     | enum {<br/>&nbsp;&nbsp;ActivityProperties,<br/>&nbsp;&nbsp;ActivityTracking,<br/>&nbsp;&nbsp;AgentScopeActivityTracking,<br/>&nbsp;&nbsp;AssociatedChangeset,<br/>&nbsp;&nbsp;AssociatedCommit,<br/>&nbsp;&nbsp;AssociatedWorkItem,<br/>&nbsp;&nbsp;BuildError,<br/>&nbsp;&nbsp;BuildMessage,<br/>&nbsp;&nbsp;BuildProject,<br/>&nbsp;&nbsp;BuildStep,<br/>&nbsp;&nbsp;BuildWarning,<br/>&nbsp;&nbsp;CheckInOutcome,<br/>&nbsp;&nbsp;CompilationSummary,<br/>&nbsp;&nbsp;ConfigurationSummary,<br/>&nbsp;&nbsp;CustomSummaryInformation,<br/>&nbsp;&nbsp;DeploymentInformation,<br/>&nbsp;&nbsp;ExternalLink,<br/>&nbsp;&nbsp;GetStatus,<br/>&nbsp;&nbsp;OpenedWorkItem<br/>} | Types of details to include.<br/>Specify this parameter multiple times to include multiple types.

[!code-REST [GET__build_builds__build1__details_json](./_data/builds/GET__build_builds__build1__details.json)]

## Modify a build

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api-version={versions}
```
```http
Content-Type: application/json
```
```json
{
	status: {string},
	quality: {string},
	retainIndefinitely: {boolean}
}
```

Modifies the build.

| Parameter   | Type    | Notes
|:------------|:--------|:------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | [Project](../tfs/projects.md) ID or name.
| buildId     | int     | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status      | string  | Stop the build by updating its status to `Stopped`.
| quality     | string  | Set the build quality.
| retainIndefinitely | boolean | When 'true', the build will be maintained regardless of the retention rules used by the build definition.

### Stop a build
[!code-REST [PATCH__build_builds__build1__json](./_data/builds/PATCH__build_builds__build1_.json)]

### Set the build quality
<a name="setthebuildquality" />
[!code-REST [PATCH__build_builds__build2__json](./_data/builds/PATCH__build_builds__build2_.json)]

### Retain indefinitely
[!code-REST [PATCH__build_builds__build3__json](./_data/builds/PATCH__build_builds__build3_.json)]

<a id="deletebuild"></a>
## Delete a build

Deletes the build and all of its output resources, including drops, test results, the version control label, symbols and content.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/builds/{buildId}?api_version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| buildId   | int    | ID of the build.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__build_builds__build3__json](./_data/builds/DELETE__build_builds__build3_.json)]
