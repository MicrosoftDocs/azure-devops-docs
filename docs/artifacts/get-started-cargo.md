---
title: Get started with Cargo packages in Azure Artifacts
description: How to use Azure Artifacts to publish and download Cargo packages.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 07/11/2023
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Get started with Cargo packages in Azure Artifacts

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Using Azure Artifacts, you can publish and download Cargo packages to feeds and public registries. This article guides you through setting up your project and publishing your Cargo packages to your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Download and install [rustup](https://rustup.rs/).

## Create a feed

If you already have an existing Azure Artifacts feed that can be used for Cargo you can jump to the next section. 

> [!NOTE]
> Azure Artifacts recommends using a distinct feed for consuming crates from crates.io, and a separate feed exclusively for publishing internal crates.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Give your feed a **Name** and specify its **Visibility**. Check the **Upstream sources** checkbox if you want to include packages from public registries and then select a **Scope** for your feed.

1. Select **Create** when you're done.

## Connect to feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the tool selection pane.

1. Follow the **Project setup** instructions on the **Connect to feed** page.

> [!IMPORTANT]
> Cargo support in Azure Artifacts requires rust version [1.74](https://rustup.rs/) or newer which includes support for the 'registry-auth' feature.
> To update your rust version, run `rustup update`

## Publish packages

To publish your Cargo package, run the following command in your project directory:

```
cargo publish
```

## Related articles

- [Feed permissions](feeds/feed-permissions.md)
- [Delete/Yank Cargo packages](how-to/delete-and-recover-packages.md?tabs=cargo)
- [Promote a package to a view](feeds/views.md)
