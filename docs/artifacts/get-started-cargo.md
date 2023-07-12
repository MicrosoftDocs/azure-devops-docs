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

Using Azure Artifacts, you can publish and download Cargo packages to feeds and public registries. This article will guide you through setting up your project and publishing your cargo packages to your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Download and install [rustup](https://rustup.rs/).

- Install [msrustup](https://aka.ms/msrustup-win).

## Create a feed

If you already have an existing Azure Artifacts feed that can be used for Cargo you can jump to the next section. 

> [!NOTE]
> Azure Artifacts recommends using a distinct feed for consuming crates from crates.io, and a separate feed exclusively for publishing internal crates.
 
::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Give your feed a **Name** and specify its **Visibility**. Check the **Upstream sources** checkbox if you wan to include packages from public registries and then select a **Scope** for your feed.

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

1. Select **Connect to feed**, and then select **Cargo** from the left navigation pane.

1. Make sure you have installed rustup and msrustup and then run the following command to set the default toolchain:

    ```Command
    rustup default ms-stable
    ```

1. Add your feed source to your [.cargo/config.toml](https://doc.rust-lang.org/cargo/reference/config.html) file. Replace the placeholders with the appropriate values:

    ```
    [registries]
    FEED_NAME = { index = "sparse+https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/Cargo/index/" }
    ```

1. Add the following to your *.cargo/config.toml* to replace *crates.io* source with your feed.

    ```
    [source.crates-io]
    replace-with = "FEED_NAME"
    ```

1. Generate a [personal access token](../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **packaging read and write** scopes. Copy your personal access token and store it in a secure location.

1. Run the following command to log in to your registry:

    ### [PowerShell](#tab/powershell)
    
    ```powershell
    "Basic " + [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("PAT:" + (Read-Host -MaskInput "Enter PAT"))) | cargo login --registry FEED_NAME
    ```
    
    ### [Bash](#tab/bash)
    
    ```bash
    read -p "Enter PAT: " PAT; echo Basic $(echo -n PAT:$PAT | base64) | cargo login --registry FEED_NAME
    ```
    
    ### [Azure CLI](#tab/azcli)
    
    ```azurecli
    az login
    az account get-access-token --query "join(' ', ['Bearer', accessToken])" --output tsv | cargo login --registry FEED_NAME
    ```

- - -

## Publish packages

To publish your Cargo package, run the following command in your project directory:

```
cargo publish
```

## Related articles

- [Promote a package to a view](feeds/views.md)

- [Manage permissions](feeds/feed-permissions.md)

- [Use upstream sources](concepts/upstream-sources.md)
