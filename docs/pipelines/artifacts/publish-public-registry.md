---
title: Get started with NuGet packages and Azure Artifacts
description: Use Azure Artifacts to publish and download NuGet packages to and from Artifacts feeds
ms.topic: conceptual
ms.date: 05/14/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish NuGet packages to NuGet.org with Azure Pipelines

Using Azure Pipelines, developers can streamline the process of publishing their NuGet packages to feeds and public registries. In this tutorial, we'll explore how to leverage YAML and classic pipelines to publish NuGet packages to NuGet.org. In this article, you'll learn how to:

> [!div class="checklist"]  
> * Authenticate with NuGet.org.
> * Create service connections.
> * Publish packages to NuGet.Org.

## Prerequisites

- An Azure DevOps organization and a project. [Create one for free](../get-started/pipelines-sign-up.md), if you don't have one already. 

- A [nuget.org](/nuget/nuget-org/individual-accounts#add-a-new-individual-account) account.