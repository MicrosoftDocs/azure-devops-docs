---
title: Get started with NuGet packages
description: Use Azure Artifacts to publish and consume NuGet packages
ms.technology: devops-artifacts
ms.custom: contperf-fy21q3
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 02/18/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with NuGet packages

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Developers can use Azure Artifacts to publish and consume NuGet packages both to and from feeds and public registries. A feed is an organizational construct that hosts packages. You can create public and private feeds, and you can control who can access your packages by modifying feed permissions.

## Prerequisites

- [Install NuGet client tools](/nuget/install-nuget-client-tools)
- [Feed permissions](feeds/feed-permissions.md).

::: moniker range=" tfs-2018"

This quickstart assumes you've already set up Azure Artifacts. You can check out how to license the extension in the [License Azure Artifacts guide](start-using-azure-artifacts.md).

::: moniker-end

::: moniker range="< azure-devops"

> [!NOTE]
> Azure Artifacts is an extension that comes pre-installed on TFS 2017 or newer, if it was removed from your organization, you can install it from the [Azure Artifacts Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed).

::: moniker-end

## Create a feed

With Azure Artifacts, you can create two types of feeds: project-scoped and organization-scoped feeds. All public feeds are project-scoped and they inherit the hosting project's visibility settings. By default, any feed that's created by using the web UI is a project-scoped feed.

[!INCLUDE [](includes/create-feed.md)]

## Connect to feed

[!INCLUDE [](includes/nuget/publish.md)]

## Consume packages in Visual Studio

[!INCLUDE [](includes/nuget/consume.md)]

## Related articles

- [Publish NuGet packages with Azure Pipelines](../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./nuget/publish-to-nuget-org.md)
- [NuGet.org upstream source](./nuget/upstream-sources.md)