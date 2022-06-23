---
title: Connect to a feed and publish NuGet packages CLI
description: How to connect to your feed and publish NuGet packages using the command line
ms.assetid: C7D75946-1F00-4BD7-87C8-225BBAE9982B
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 06/23/2022
monikerRange: '<= azure-devops'
---

# Publish NuGet packages (CLI)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish your NuGet packages to public or private feeds and share them with others based on your feed's visibility settings. This article will guide you through connecting to Azure Artifacts and publishing your NuGet packages.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.

- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).

- The latest [NuGet version](https://www.nuget.org/downloads).

## Connect to feed

[!INCLUDE [](../includes/nuget/nuget-publish-endpoint.md)]

## Related articles

- [Publish packages to NuGet.org](./publish-to-nuget-org)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md).
- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md).
