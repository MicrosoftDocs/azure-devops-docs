---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Build Definitions (XAML Build) | REST API Reference for Team Foundation Server
description: Get build definitions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: d0424288-2fbd-4a65-8a60-0d272a42eca7
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Build definitions
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build definitions

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions?api-version={version}[&projectName={string}]
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| instance      | string | TFS server name ({server:port}).
| project       | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| projectName   | string | Name of the project that contains the build definitions.<br/>Wildcards (*) are supported.

[!code-REST [GET__build_definitions_json](./_data/definitions/GET__build_definitions.json)]

## Get a build definition

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the build definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_definitions__definitionId__json](./_data/definitions/GET__build_definitions__definitionId_.json)]


