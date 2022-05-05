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

# Get started with NuGet packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish, and download NuGet packages from different sources such as feeds and public registries. Artifact feeds can be private to share your packages with your team and specific users, or public to share them publicly with anyone on the internet.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../organizations/accounts/create-organization.md), if you don't have one already.
- [Install NuGet client tools](/nuget/install-nuget-client-tools)

## Create a feed

You can create two types of feeds: project-scoped and organization-scoped feeds. All public feeds are scoped to their hosting project and they inherit its visibility settings.

[!INCLUDE [](includes/create-feed.md)]

## Connect to feed

[!INCLUDE [](includes/nuget/publish.md)]

## Consume packages in Visual Studio

[!INCLUDE [](includes/nuget/consume.md)]

## Related articles

- [Publish NuGet packages with Azure Pipelines](../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./nuget/publish-to-nuget-org.md)
- [NuGet.org upstream source](./nuget/upstream-sources.md)