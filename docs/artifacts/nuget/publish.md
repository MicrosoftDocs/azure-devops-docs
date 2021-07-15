---
title: Connect to a feed and publish NuGet packages using the command line
description: How to connect to your feed and publish NuGet packages using the command line
ms.assetid: C7D75946-1F00-4BD7-87C8-225BBAE9982B
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 07/15/2021
monikerRange: '>= tfs-2017'
---

# Publish a NuGet package using the command line

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

With Azure Artifacts, you can publish your NuGet packages to public or private feeds, and then share them with others depending on your feed's visibility settings. 

## Connect to a NuGet feed

[!INCLUDE [](nuget-publish-endpoint.md)]

## Work with upstream sources

Upstream sources enable you to use a single feed to store and consume packages from both public (NuGet.org, npmjs.com, Maven Central, and PyPI) and authenticated feeds (Azure Artifacts feeds).

See [Understanding upstream sources](../concepts/upstream-sources.md) to get familiar with the concepts. You can also check out the following articles to learn how to:

- [Set up upstream sources for Azure DevOps](../how-to/set-up-upstream-sources.md). 
- [Protect your open-source software packages with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md).

