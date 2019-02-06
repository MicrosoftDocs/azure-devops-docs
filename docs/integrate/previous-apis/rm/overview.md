---
title: Release Management Overview | Visual Studio Online REST API Reference
description: Work with Visual Studio Online builds programmatically using the REST APIs.
ms.assetid: a5af63ab-36dd-4370-b962-ffbd6c1c4f58
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 06-01-2017
---

# Release Management

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview1.md)]

**Using on-premises:** An earlier, and slightly different, version of this Release Management API is available in Team Foundation Server 2015 Update 2. To use, you must specify an API version of **2.2-preview.1**.

New [release](./releases.md) references a [release definition](./definitions.md) to deploy an application comprising of one/more artifacts.
A release process goes through a set of [approval requests](./approvals.md).

* [Definitions](./definitions.md)
* [Releases](./releases.md)
* [Approvals](./approvals.md)

## Common tasks

###Create a release [definition](./definitions.md)

1. Add one or more environments to release [definition](./definitions.md).
2. Add tasks to each environment.
3. Add [approvals](./approvals.md) or make them automated, for each environment.
4. Save release [definition](./definitions.md)

###Start a release

1. Get the ID of the release [definition](./definitions.md) that you want to use.
3. Create a [release](./releases.md).
3. Get the ID of the release from the response so you can use it later.
4. If required, abandon a [release](./releases.md).

###Get a release details

1. Get a list of [releases](./releases.md) and find the ID of the release you're interested in.
2. Get the [details](./releases.md#getreleasedetails) about the release.
4. Get the [approvals](./approvals.md) required for the release.

###Accept/Reject approvals

For each environment where the application is being deployed, you can have pre-deployment or post-deployment [approvals](./approvals.md). If you are one of the approvers, you will get an approval request which you can accept or reject based on some criteria.