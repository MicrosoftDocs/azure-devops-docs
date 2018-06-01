---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Build Qualities (XAML Build) | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Configure a team project's build qualities programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 0C352988-B949-4515-A89F-5562F86E937F
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build qualities
[!INCLUDE [API_version](../_data/version.md)]

Each team project has a set of qualities that can be assigned to builds.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of qualities

Gets the build qualities that are used in a team project.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/qualities?api-version={version}&projectId={string}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | [VS Team Services account](/integrate/get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md) ({server:port}).
| project   | string | [Team project](../tfs/projects.md) ID or name.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_qualities_json](./_data/qualities/GET__build_qualities.json)]

## Add a quality
<a name="addaquality" />

Adds a build quality value to the list of qualities that can be used for builds in the team project.

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/qualities/{quality}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | [VS Team Services account](/integrate/get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md) ({server:port}).
| project   | string | [Team project](../tfs/projects.md) ID or name.
| quality   | string | Quality value to add.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [PUT__build_qualities__quality__json](./_data/qualities/PUT__build_qualities__quality_.json)]

## Remove a quality

Removes a build quality value from the list of qualities that can be used in the team project.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/qualities/{quality}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | [VS Team Services account](/integrate/get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md) ({server:port}).
| project   | string | [Team project](../tfs/projects.md) ID or name.
| quality   | string | Quality value to add.
| Query
| projectId | string | Add the build quality to the team project with this name.
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__build_qualities__quality__json](./_data/qualities/DELETE__build_qualities__quality_.json)]
