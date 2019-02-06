---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Qualities (XAML Build) | REST API Reference for Team Foundation Server
description: Configure a project's build qualities programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 0C352988-B949-4515-A89F-5562F86E937F
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build qualities

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Each project has a set of qualities that can be assigned to builds.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of qualities

Gets the build qualities that are used in a project.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/qualities?api-version={version}&projectId={string}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/qualities?api-version=1.0
```

#### Sample response

```json
{
  "value": [
    "Initial Test Passed",
    "Lab Test Passed",
    "Ready for Deployment",
    "Ready for Initial Test",
    "Rejected",
    "Released",
    "UAT Passed",
    "Under Investigation"
  ],
  "count": 8
}
```


## Add a quality
<a name="addaquality" />

Adds a build quality value to the list of qualities that can be used for builds in the project.

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/qualities/{quality}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| quality   | string | Quality value to add.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/qualities/To%20be%20evaluated?api-version=1.0
```
```json
{}
```


## Remove a quality

Removes a build quality value from the list of qualities that can be used in the project.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/qualities/{quality}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| instance  | string | TFS server name ({server:port}).
| project   | string | [Project](../tfs/projects.md) ID or name.
| quality   | string | Quality value to add.
| Query
| projectId | string | Add the build quality to the project with this name.
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/qualities/To%20be%20evaluated?api-version=1.0
```

