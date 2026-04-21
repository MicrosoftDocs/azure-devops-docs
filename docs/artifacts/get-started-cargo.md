---
title: Get started with Cargo packages in Azure Artifacts
description: How to use Azure Artifacts to publish and download Cargo packages.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 07/11/2023
monikerRange: '>= azure-devops-2022'
"recommendations": "true"
---

# Get started with Cargo packages in Azure Artifacts

[!INCLUDE [version-gt-eq-2022](../includes/version-gt-eq-2022.md)]

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

## Connect to a feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the tool selection pane.

1. Follow the **Project setup** instructions on the **Connect to feed** page.

::: moniker range="azure-devops"

> [!IMPORTANT]
> Cargo support in Azure Artifacts requires rust version [1.74](https://rustup.rs/) or newer which includes support for the 'registry-auth' feature.
> To update your rust version, run `rustup update`

::: moniker-end

::: moniker range="azure-devops-2022"

> [!IMPORTANT]
> Cargo is currently in preview and may require the [nightly toolchain](https://rust-lang.github.io/rustup/concepts/toolchains.html) with the `registry-auth` [unstable-feature](https://doc.rust-lang.org/cargo/reference/unstable.html) enabled. To enable `registry-auth`, add the following to [.cargo/config.toml](https://doc.rust-lang.org/cargo/reference/config.html).
>
> ```
> [unstable]
> registry-auth = true
> ```
>
> To use the nightly toolchain, run the following command:
>
> ```
> rustup default nightly
> ```

::: moniker-end

## Publish packages

To publish your Cargo package, run the following command in your project directory:

```
cargo publish
```

If you encounter `GLib-GObject-CRITICAL - libsecret-CRITICAL` error, make sure you follow these steps:

1. Verify *libsecret* is installed: 

    ```
    sudo apt update && sudo apt install libsecret-1-0
    ```
    
1. Make sure *gnome-keyring* is running: 

    ```
    gnome-keyring-daemon --start --components=secrets
    ```

1. Update Rust to the latest stable version and set stable as the default toolchain:

    ```
    rustup update  
    rustup default stable  
    ```

1. You should also run cargo publish with verbose logging to get more details:
 
    ```
    RUST_LOG=debug cargo publish --registry <REGISTRY_NAME>
    ```

## Related articles

- [Feed permissions](feeds/feed-permissions.md)
- [Delete/Yank Cargo packages](how-to/delete-and-recover-packages.md?tabs=cargo)
- [Promote a package to a view](feeds/views.md)
