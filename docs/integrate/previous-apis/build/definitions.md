---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Build Definitions | REST API Reference for Team Foundation Server
description: Get build definitions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 20BE109C-0350-4338-B6BC-522A2200F5CC
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Build definitions
[!INCLUDE [API_version](../_data/version2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build definitions

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions?api-version={version}[&name={string}][&type={string}]
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| name          | string               | Filters to definitions whose names equal this value. Append a `*` to filter to definitions whose names start with this value. For example: `MS*`.
| type          | enum { build, xaml } | The type of the build definitions to retrieve. If not specified, all types will be returned.

[!code-REST [GET__build_definitions_json](./_data/definitions/GET__build_definitions.json)]

## Get a build definition

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}[&revision={int}]
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the build definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| revision     | int    | The specific revision number of the definition to retrieve.
| propertyFilters | string | A comma-delimited list of extended properties to retrieve.

[!code-REST [GET__build_definitions__definitionId__json](./_data/definitions/GET__build_definitions__definitionId_.json)]

### By revision
[!code-REST [GET__build_definitions__definitionId__json](./_data/definitions/GET__build_definitions__definitionId__revision-_revision_.json)]

<a name="createabuilddefinition" />

## Create a build definition

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/definitions?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [POST__build_definitions_json](./_data/definitions/POST__build_definitions.json)]


## Update a build definition

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| definitionId  | int                  | ID of the build definition.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| revision      | int                  | The current revision number of the definition. If this doesn't match the current version, the update will fail.

[!code-REST [PUT__build_definitions__definitionId__json](./_data/definitions/PUT__build_definitions__definitionId_.json)]


## Delete a build definition

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| definitionId  | int                  | ID of the build definition.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__build_definitions__definitionId__json](./_data/definitions/DELETE__build_definitions__definitionId_.json)]


## Get the history of a build definition

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}/revisions?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the build definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_definitions__definitionId__revisions_json](./_data/definitions/GET__build_definitions__definitionId__revisions.json)]

## Get build definition options

```no-highlight
GET https://{instance}/DefaultCollection/_apis/build/options?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_options_json](./_data/definitions/GET__build_options.json)]