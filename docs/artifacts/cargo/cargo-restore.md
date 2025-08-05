---
title: Restore Cargo packages (CLI)
description: Learn how to connect to your feed and restore Cargo packages using the command line.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 08/01/2025
monikerRange: '>= azure-devops-2022'
---

# Restore Cargo packages (CLI)

Azure Artifacts enables developers to host various package types in a feed, whether published directly or saved from upstream sources. This guide helps you set up your project, authenticate with your Azure Artifacts feed, and use the command line to restore Cargo packages directly from your feed.

## Prerequisites

|     **Product**    |  **Requirements**  |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [rustup](https://rustup.rs/). You'll need Cargo version 1.74.0 or later. |

## Create a feed

To consume and publish Rust crates with Azure Artifacts, it's recommended to use two separate feeds: One dedicated feed for consuming crates from https://crates.io, and another separate feed for publishing your internal crates. If you don’t already have a feed set up, here’s how to create one:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, and set its **Visibility**. Make sure the **Include packages from common public sources** option is checked if you want to include packages from upstream sources. finally select the **Scope** for your feed. Scoping the feed to a specific project is recommended over organization-wide scope.

1. Select **Create** when you're done.

    :::image type="content" source="media/create-a-new-feed.png" alt-text="A screenshot showing how to create a new feed in Azure Artifacts.":::

## Restore packages

To restore your dependencies, make sure you have your dependecies listed in your `Cargo.toml` under `[dependencies]`. 

1. If you haven't authenticated with your feed yet, follow the steps in the [Project setup](project-setup-cargo.md) to configure your config files, set up a credential provider, and log in to the registry.

1. Run the following command in your project directory to restore your dependencies from the feed:

    ```
    cargo fetch
    ```

The downloaded crates are cached locally in your `~/.cargo/registry/cache/<registry-hash>/` where the registry hash is a unique identifier based on your feed URL.

## Related content

- [Publish Cargo packages (CLI)](cargo-publish.md)

- [Publish Cargo packages with Azure Pipelines](../../pipelines/artifacts/cargo-pipelines.md)

- [Manage permissions](../feeds/feed-permissions.md)
