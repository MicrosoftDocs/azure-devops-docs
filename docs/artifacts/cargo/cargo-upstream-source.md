---
title: Consume Cargo packages from Crates.io
description: How to consume Crates from Crates.io with Azure Artifacts
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.topic: quickstart
ms.date: 12/13/2023
monikerRange: azure-devops
"recommendations": "true"
---

# Use packages from Crates.io

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure Artifacts upstream sources enables developers to consume packages from public registries like Crates.io and nuget.org. This article will guide you through setting up your project and using the command line to consume Crates from Crates.io. 

This article will guide you through how to:

> [!div class="checklist"]  
> * Create an Azure Artifacts feed 
> * Connect to your feed
> * Consume crates from upstream

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md) if you haven't already.

- An Azure DevOps project. [Create a project](../../organizations/projects/create-project.md#create-a-project) if you don't have one.

- Download and install [rustup](https://rustup.rs/). 

- Install the **nightly toolchain**: `rustup toolchain install nightly`.