---
title: Publish and restore Cargo packages
description: Learn how to publish and restore Cargo packages to and from Azure Artifacts feeds.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 06/19/2026
monikerRange: '>= azure-devops-2022'
"recommendations": "true"
---

# Publish and restore Cargo packages

[!INCLUDE [version-gt-eq-2022](../includes/version-gt-eq-2022.md)]

By using Azure Artifacts, you can publish and restore Cargo packages from your own feeds and public registries such as crates.io. Use Azure Artifacts to host internal crates, connect to upstream registries, and manage package access from a single feed. This quickstart guides you through creating a feed, configuring your Cargo project, and publishing and consuming Cargo packages by using Azure Artifacts.

## Prerequisites

| **Product**        | **Requirements**                      |
|--------------------|---------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - Download and install [rustup](https://rustup.rs/). You need Cargo 1.74.0 or later. |

## Create a feed

If you already have an Azure Artifacts feed, go to the next section. Otherwise, follow these steps to create a feed. Azure Artifacts recommends using one feed for consuming crates from public registries such as *crates.io* and a separate feed for publishing internal crates.

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed, choose its **Visibility**, and then select a **Scope**. Make sure that you select the **Upstream sources** checkbox to include packages from public registries.

1. Select **Create** when you're done.

## Connect to a feed

Before you can publish or restore packages from your feed, you must first configure your project to authenticate and connect to the feed.

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the left navigation pane.

1. Follow the steps in the **Project setup** section, to configure your `config.toml` file.

1. On the same page, follow the instructions in the **Configure a credential provider** and **Log in to the registry** sections to set up the credential provider and connect to your feed. For detailed steps, see [Cargo - project setup](cargo/project-setup-cargo.md).

::: moniker range="azure-devops"

> [!IMPORTANT]
> Cargo support in Azure Artifacts requires [Rust 1.74](https://rustup.rs/) or later, which includes support for the `registry-auth` feature.
> To update your Rust version, run `rustup update`

::: moniker-end

::: moniker range="azure-devops-2022"

> [!IMPORTANT]
> Cargo is currently in preview and might require the [nightly toolchain](https://rust-lang.github.io/rustup/concepts/toolchains.html) with the `registry-auth` [unstable feature](https://doc.rust-lang.org/cargo/reference/unstable.html) enabled. To enable `registry-auth`, add the following setting to [.cargo/config.toml](https://doc.rust-lang.org/cargo/reference/config.html).
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

Before you publish a Cargo package, make sure that you completed the steps in [Connect to a feed](#connect-to-a-feed) so that you can authenticate with your Azure Artifacts feed.

From the directory that contains your *Cargo.toml* file, run the following command to publish your package:

```
cargo publish
```

If you encounter `GLib-GObject-CRITICAL - libsecret-CRITICAL` error, make sure you follow these steps:

1. Verify that *libsecret* is installed:

    ```
    sudo apt update && sudo apt install libsecret-1-0
    ```
    
1. Make sure that *gnome-keyring* is running:

    ```
    gnome-keyring-daemon --start --components=secrets
    ```

1. Update Rust to the latest stable version and set stable as the default toolchain:

    ```
    rustup update  
    rustup default stable  
    ```

1. If the issue continues, rerun `cargo publish` with verbose logging to collect more details:
 
    ```
    RUST_LOG=debug cargo publish --registry <REGISTRY_NAME>
    ```

## Restore packages

Before restoring dependencies, make sure you completed the steps in [Connect to a feed](#connect-to-a-feed) so that you can authenticate with your Azure Artifacts feed.

1. Make sure that your dependencies are listed in the `[dependencies]` section of your `Cargo.toml` file.

1. If you're consuming crates directly from your private Azure Artifacts feed, explicitly specify the registry as follows:

    ```
    [dependencies]
    CRATE_NAME = { version = "VERSION_NUMBER", registry = "FEED_NAME" }
    ```

1. If you're referencing crates from *crates.io* through your upstream feed by using the `replace-with` configuration, specify them as follows:

    ```
    [dependencies]
    CRATE_NAME = "VERSION_NUMBER"
    ```

1. Run the following command in your project directory to build your project and restore your dependencies from the feed:

    ```
    cargo build
    ```

The downloaded crates are cached locally in `~/.cargo/registry/cache/<registry-hash>/`, where `registry-hash` is a unique identifier that's based on your feed URL.

## Related content

- [Delete/Yank Cargo packages](how-to/delete-and-recover-packages.md?tabs=cargo)

- [Upstream from internal feeds](how-to/upstream-internal-feed.md)

- [Feed permissions](feeds/feed-permissions.md)
