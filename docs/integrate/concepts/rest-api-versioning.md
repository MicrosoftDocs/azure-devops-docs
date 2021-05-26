---
title: REST API versioning for Azure DevOps
description: Learn how versioning works for REST APIs for Azure DevOps.
ms.assetid: 5fc6efd4-9947-40f2-b4f6-9695a24de87c
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 09/29/2020
---

# REST API Versioning

[!INCLUDE [version-all](../../includes/version-all.md)]

Azure DevOps REST APIs are versioned to ensure applications and services continue to work as APIs evolve.

### Guidelines

* API version **must** be specified with every request.
* API versions are in the format {major}.{minor}[-{stage}[.{resource-version}]] - For example, ```1.0```, ```1.1```, ```1.2-preview```, ```2.0```.
* While an API is in preview, you can specify a precise version of a particular revision of the API when needed (for example, ```1.0-preview.1```, ```1.0-preview.2```)
* Once an API is released (1.0, for example), its preview version (1.0-preview) is deprecated and can be deactivated after 12 weeks.
* During this time you should upgrade to the released version of the API. Once a preview API is deactivated, requests that specify a ```-preview``` version get rejected.

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


| Product                     | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 | 6.0 |
|-----------------------------|-----|-----|-----|-----|-----|-----|
| Azure DevOps Services       | X   | X   | X   | X   | X   | X  |
| Azure DevOps Server 2020    | X   | X   | X   | X   | X   | X  |
| Azure DevOps Server 2019    | X   | X   | X   | X   | X   | -   |
| Team Foundation Server 2018 | X   | X   | X   | X   | -   | -   |
| Team Foundation Server 2017 | X   | X   | X   | -   | -   | -   |
| Team Foundation Server 2015 | X   | X   | -   | -   | -   | -   |


Major API version releases align with Team Foundation Server RTM releases. For example, the `3.0` API set was introduced with Team Foundation Server 2017.

A small number of undocumented version 1.0 APIs existed in Team Foundation Server 2013, but are not supported.
