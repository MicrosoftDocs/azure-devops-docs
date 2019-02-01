---
title: Use dotnet with Azure Artifacts feeds
description: Authenticating to feeds with NuGet in Azure Artifacts
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 10/08/2018
monikerRange: 'azure-devops'
---

# Use dotnet with Azure Artifacts feeds

## On developer machines

To use `dotnet` with Azure Artifacts NuGet feeds, use the cross-platform [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider).

## On build machines and in non-interactive scenarios

In Azure Pipelines, use the [.NET Core step's restore command](../../pipelines/tasks/build/dotnet-core.md), which automatically handles authentication to Azure Artifacts feeds. Otherwise, use the [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider) and pass in credentials using the `VSS_NUGET_EXTERNAL_FEED_ENDPOINTS` [environment variable](https://github.com/Microsoft/artifacts-credprovider/blob/master/README.md#environment-variables).