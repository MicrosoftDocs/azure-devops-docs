---
title: Get started with Cargo packages in Azure Artifacts
description: How to use Azure Artifacts to publish and download Cargo packages
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 07/11/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with Cargo packages in Azure Artifacts

Using Azure Artifacts, you can publish and download Cargo packages to feeds and public registries. This article will guide you through setting up your project and publishing your Cargo packages to your Azure Artifacts feed.

> [!NOTE]
> Cargo support in Azure Artifacts is currently in preview.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Download and install [rustup](https://rustup.rs/).

## Create a feed

If you already have an existing Azure Artifacts feed that can be used for Cargo you can jump to the next section. 

> [!NOTE]
> Azure Artifacts recommends using a distinct feed for consuming crates from crates.io, and a separate feed exclusively for publishing internal crates.
 
::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Give your feed a **Name** and specify its **Visibility**. Check the **Upstream sources** checkbox if you want to include packages from public registries and then select a **Scope** for your feed.

1. Select **Create** when you're done.

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build & Release**, and then select **Packages**.

1. Select **+ New feed** to create a new feed.

1. Give your feed a **Name**, a **Description**, and choose **who can read** and **who can contribute** and if you want to **Include external packages**.

1. Select **Create** when you're done.

::: moniker-end

## Connect to feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the tool selection pane.

1. Follow the **Project setup** instructions on the **Connect to feed** page.

> [!IMPORTANT]
> Cargo support in Azure Artifacts is currently in preview and may require the [nightly toolchain](https://go.microsoft.com/fwlink/?linkid=2243883) with the `registry-auth` [unstable-feature](https://go.microsoft.com/fwlink/?linkid=2243884) enabled. To enable registry-auth, add the following to [.cargo/config.toml](https://go.microsoft.com/fwlink/?linkid=2234410).
>
> ```
> [unstable]
> registry-auth = true
> ```
>
> To use the nightly toolchain, you can run the following:
>
> ```
> rustup default nightly
> ```

## Publish packages

To publish your Cargo package, run the following command in your project directory:

```
cargo publish
```

## Related articles

- [Manage permissions](feeds/feed-permissions.md)
- [Use upstream sources](concepts/upstream-sources.md)
- [Promote a package to a view](feeds/views.md)
