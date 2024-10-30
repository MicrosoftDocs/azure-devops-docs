---
title: Consume Cargo packages from Crates.io
description: How to consume Crates from Crates.io with Azure Artifacts
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.topic: quickstart
ms.date: 12/13/2023
monikerRange: '>= azure-devops-2022'
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

1. If this is the first time using Cargo with Azure Artifacts, make sure you have installed [rustup](https://rustup.rs/).

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

## Configure a credential provider

To use Cargo with Azure Artifacts, you need to set up a credential provider. The provided settings will configure a default credential helper for the current user:

#### [Windows](#tab/Windows/)

Paste the following snippet in your %USERPROFILE%\.cargo\config.toml:

```
[registry]
global-credential-providers = ["cargo:token", "cargo:wincred"]
```

#### [Linux](#tab/Linux/)

Paste the following snippet in your ~/.cargo/config.toml:

```
[registry]
global-credential-providers = ["cargo:token", "cargo:libsecret"]
```

#### [macOS](#tab/macOS/)

Paste the following snippet in your ~/.cargo/config.toml:

```
[registry]
global-credential-providers = ["cargo:token", "cargo:macos-keychain"]
```

* * *

## Log in to your registry

1. Create a [Personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes to authenticate with your feed.

1. Run the following command to log in to your registry. Replace the placeholder with your feed's name, and paste the personal access token you created in the previous step when prompted:

    #### [PowerShell ](#tab/PowerShell/)
    
    ```
    "Basic " + [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("PAT:" + (Read-Host -MaskInput "Enter PAT"))) | cargo login --registry <FEED_NAME>
    ```
    
    #### [Bash ](#tab/Bash/)
    
    ```
    read -p "Enter PAT: " PAT; echo Basic $(echo -n PAT:$PAT | base64) | cargo login --registry <FEED_NAME>
    ```
    
    #### [Azure CLI](#tab/AzureCLI/)

    ```
    az login
    az account get-access-token --query "join(' ', ['Bearer', accessToken])" --output tsv | cargo login --registry <FEED_NAME>
    ```
    
    * * *

## Save packages from Crates.io

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

Now that we have set up our project, configured a credential provider, and logged into our feed, we can begin consuming packages from upstream. Azure Artifacts saves a copy of any package you install from upstream to your feed.

In this example, we consume the `serde` crate, a serialization/deserialization framework:

1. Run the following command in your project directory to add the crate to your *cargo.toml*:

    ```
    cargo add serde
    ``` 

1. Run the following command to build your project and consume your crate:

    ```
    cargo build
    ```

Once your package is installed, a copy will be saved to your feed. Navigate to your feed to verify its presence. Your package should be available in your feed, as shown below:

:::image type="content" source="media/crate-from-upstream.png" alt-text="A screenshot showing the *serde* crate consumed from upstream.":::

## Related articles

- [Publish Cargo packages with Azure Pipelines](../../pipelines/artifacts/cargo-pipelines.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
- [Configure permissions](../feeds/feed-permissions.md)
