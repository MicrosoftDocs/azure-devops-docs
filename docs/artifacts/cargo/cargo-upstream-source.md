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

## Create a feed

Azure Artifacts recommends having a dedicated feed for consuming crates from crates.io and a separate feed exclusively for publishing internal crates. 
 
1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed, define its **Visibility**, and then select your **Scope**. Make sure to check the **Upstream sources** checkbox to include packages from public registries. 

1. Select **Create** when you're done.

    :::image type="content" source="media/create-cargo-upstream-feed.png" alt-text="A screenshot showing how to create a feed for cargo upstream.":::

## Connect to your feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the left navigation pane.

1. If this is the first time using Cargo with Azure Artifacts, make sure you have installed [rustup](https://rustup.rs/) and the **nightly toolchain**: `rustup toolchain install nightly`.

1. Add the provided snippet in the **Project setup** section to your *.cargo/config.toml* file in your source repository:

    - Project-scoped feed:
    
    ```
    [registries]
    <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
    
    [source.crates-io]
    replace-with = "<FEED_NAME>"
    ```

    - Organization-scoped feed:
    
    ```
    [registries]
    <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
    
    [source.crates-io]
    replace-with = "<FEED_NAME>"
    ```
