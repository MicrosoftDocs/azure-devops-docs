---
title: Use packages from PowerShell Gallery
description: How to use the PowerShell Gallery as an upstream source
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 10/17/2023
monikerRange: 'azure-devops'
"recommendations": "true"
---

# PowerShell Gallery upstream source

Enabling upstream sources for your feed extends your developers' access to packages from public registries. In this article, you'll learn how to set up the PowerShell Gallery as an upstream source and consume PowerShell packages from the public registry.

## Prerequisites

- [NuGet.exe](https://www.nuget.org/downloads)
- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider)
- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.
- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.