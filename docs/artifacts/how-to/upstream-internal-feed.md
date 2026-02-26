---
title: Set up an internal feed as an upstream source
description: Learn how to set up an internal feed as an upstream source in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 02/26/2026
monikerRange: "<=azure-devops"
---

# Set up an internal feed as an upstream source

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts upstream sources simplify package management by enabling developers to store packages from multiple sources in a single feed.
When a package is installed for the first time from an upstream source, Azure Artifacts automatically saves a copy to your feed to ensure continued access, even if the upstream source becomes temporarily unavailable. This tutorial walks you through how to set up an internal feed from the same organization as an upstream source in Azure Artifacts.

## Prerequisites

|     **Product**    |     **Requirements**      |
|--------------------|---------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md). |

## Create a feed  

If you don’t already have a feed, follow these steps to create one and add common public registries as upstream sources:

1. Sign in to Azure DevOps and go to your project.

1. Select **Artifacts**, then select **Create feed**.

1. Enter a **Name** for the feed and choose the appropriate **Visibility** and **Scope** settings.  
   
1. Select **Include packages from common public sources** to add common public registries as upstream sources.

1. Select **Create** when you're done.

## Connect to your feed

Use the following steps to configure your project and authenticate with your feed. This example uses a Rust project. For other technologies, see the project setup links in the table below.

1. Sign in to Azure DevOps, and go to your project.

1. Select **Artifacts**, choose your feed from the dropdown menu, and then select **Connect to feed**.

1. From the left navigation pane, selec **Cargo**.

1. In the **Project setup** section, copy the first snippet and add it to the *cargo/config.toml* file in your source repository.  
   Your *config.toml* file should resemble the following:

    ```
    [registries]
    FEED_NAME = { index = "sparse+https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/Cargo/index/" }
    ```

1. Copy the second snippet from the Project setup section and add it to cargo/config.toml to replace the crates.io source with your feed.
Your file should resemble the following:
    
    ```
    [source.crates-io]
    replace-with = "FEED_NAME"
    ```

1. [Configure a credential provider](../cargo/project-setup-cargo.md#configure-a-credential-provider)

1. [Log in to the registry](../cargo/project-setup-cargo.md#log-in-to-the-registry)