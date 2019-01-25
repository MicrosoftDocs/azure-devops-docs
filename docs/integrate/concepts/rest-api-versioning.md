---
title: REST API versioning for Azure DevOps Services (and TFS)
description: Learn how versioning works for REST APIs for Azure DevOps Services and TFS
ms.assetid: 5fc6efd4-9947-40f2-b4f6-9695a24de87c
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# REST API Versioning

Azure DevOps Services and Team Foundation Server REST APIs are versioned to ensure applications and services continue to work as APIs evolve.

### Guidelines

* API version **must** be specified with every request.
* API versions are in the format {major}.{minor}[-{stage}[.{resource-version}]] - For example, ```1.0```, ```1.1```, ```1.2-preview```, ```2.0```.
* While an API is in preview, you can specify a precise version of a particular revision of the API when needed (for example, ```1.0-preview.1```, ```1.0-preview.2```)
* Once an API is released (1.0, for example), its preview version (1.0-preview) is deprecated and can be deactivated after 12 weeks.
* During this time you should upgrade to the released version of the API. Once a preview API is deactivated, requests that specify a ```-preview``` version will be rejected.

### Usage

API version can be specified either in the header of the HTTP request or as a URL query parameter:

HTTP request header:
```http
Accept: application/json;api-version=1.0
```

Query parameter:
```no-highlight
GET https://dev.azure.com/{organization}/_apis/{area}/{resource}?api-version=1.0
```

### Supported versions

| Product                     | 1.0    | 2.0    | 3.0    | 4.0    |
|:----------------------------|:------:|:------:|:------:|:------:|
| Azure DevOps Services | X      | X      | X      | X      |
| Team Foundation Server 2018 | X      | X      | X      | X      |
| Team Foundation Server 2017 | X      | X      | X      | -      |
| Team Foundation Server 2015 | X      | X      | -      | -      |


Major API version releases align with Team Foundation Server RTM releases. For example, the `3.0` API set was introduced with Team Foundation Server 2017.

A small number of undocumented version 1.0 APIs existed in Team Foundation Server 2013, but are not supported.
