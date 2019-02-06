---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Overview | REST API Reference for Team Foundation Server
description: Work with VSTS builds programmatically using the REST APIs.
ms.assetid: 6C2E7900-891E-4C9E-9FD1-4798E37019FB
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2.md)]

* [Builds](./builds.md)
* [Definitions](./definitions.md)
* [Definition Templates](./definition-templates.md)

## Common tasks

### Run a build

1. Get the ID of the build [definition](./definitions.md) that you want to use.
2. Create a [build](./builds.md#queueabuild).
3. Get the ID of the build from the response so you can use it later.
4. Get the [build](./builds.md#getabuild) using the ID.

### Get a build

1. Get a list of [builds](./builds.md) and find the ID of the build you're interested in.
2. Get the [details](./builds.md#getbuilddetails) about the build.

### Tag a build

1. Add the [tag](./builds.md#addatagtoabuild) to the build.
2. View the [tags](./builds.md#gettagsforabuild) associated with the build.
3. You can search [builds](./builds.md#getbuildswithatag) by tags
4. You can also see all [tags](./tags.md) across all builds.

