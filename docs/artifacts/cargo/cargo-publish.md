---
title: Publish Cargo packages from the command line
description: Learn how to connect to your feed and publish your Cargo packages from the command line.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 03/25/2025
monikerRange: '>= azure-devops-2022'
---

# Publish Cargo packages from the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

This article walks you through setting up your project, authenticating with your Azure Artifacts feed, and publishing Cargo packages from the command line.

## Prerequisites

|     **Product**    |  **Requirements**  |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [rustup](https://rustup.rs/). You'll need Cargo version 1.74.0 or later. |

## Create a feed

Azure Artifacts recommends using a dedicated feed for consuming crates from *crates.io* and a separate feed for publishing your internal crates. If you already have an Azure Artifacts feed, skip to the next section. Otherwise, create a new feed as follows:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed and specify its **Visibility**. If you want to include packages from public registries, check **Upstream sources**, then select a **Scope** for your feed.

1. Select **Create** when you're done.

    :::image type="content" source="media/cargo-create-a-feed.png" alt-text="A screenshot displaying how to create a new feed in Azure Artifacts.":::

## Publish packages

1. If you haven't authenticated with your feed yet, follow the steps in the [Project setup](project-setup-cargo.md) to configure your config files, set up a credential provider, and log in to the registry.

1. Run the following command in your project directory to publish your Cargo package:

    ```
    cargo publish
    ```

## Related content

- [Manage permissions](../feeds/feed-permissions.md)

- [What are upstream sources?](../concepts/upstream-sources.md)

- [Publish Cargo packages with Azure Pipelines](../../pipelines/artifacts/cargo-pipelines.md)