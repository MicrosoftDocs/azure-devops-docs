---
title: Get started with NuGet packages
description: Use Azure Artifacts to publish and consume NuGet packages
ms.technology: devops-artifacts
ms.custom: contperf-fy21q3
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 03/23/2021
monikerRange: '>= tfs-2017'
---

# Get started with NuGet packages

**Azure DevOps Services | TFS 2018 | TFS 2017**

Developers can use Azure Artifacts to publish and consume NuGet packages both to and from feeds and public registries. A feed is an organizational construct that hosts packages. You can create public and private feeds, and you can control who can access your packages by modifying feed permissions.

## Prerequisites

- [Install NuGet client tools](/nuget/install-nuget-client-tools)
- [Project and org permissions](../organizations/security/lookup-organization-owner-admin.md) to use Azure Artifacts.

::: moniker range=">=tfs-2017 <= tfs-2018"

This quickstart assumes you've already set up Azure Artifacts. You can check out how to license the extension in the [License Azure Artifacts guide](start-using-azure-artifacts.md).

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops"

> Azure Artifacts is an extension that comes pre-installed on TFS 2017 or newer, if it was removed from your organization, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

::: moniker-end

<a name="create-a-feed"></a>

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

<a name="publish-a-package"></a>

## Connect to feed and publish packages

[!INCLUDE [](includes/nuget/publish.md)]

<a name="consume-in-visual-studio"></a>

## Consume packages in Visual Studio

[!INCLUDE [](includes/nuget/consume.md)]