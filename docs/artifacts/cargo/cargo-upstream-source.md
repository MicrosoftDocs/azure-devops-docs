---
title: Consume Cargo packages from Crates.io
description: Learn how to consume Crates from Crates.io with Azure Artifacts.
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.topic: quickstart
ms.date: 10/01/2025
monikerRange: '>= azure-devops-2022'
"recommendations": "true"
---

# Use Cargo packages from Crates.io

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)]

Azure Artifacts upstream sources enable developers to consume packages from public registries like Crates.io and nuget.org. This article will guide you through setting up your project and using the command line to consume Crates from Crates.io. 

## Prerequisites

|     **Product**    |  **Requirements**  |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [rustup](https://rustup.rs/). You'll need Cargo version 1.74.0 or later. |

## Create a feed

Azure Artifacts recommends having a dedicated feed for consuming crates from crates.io and a separate feed exclusively for publishing internal crates. If you already have an Azure Artifacts feed, skip to the next section. Otherwise, create a new one as follows:
 
1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, select the **Visibility** to define who can view your packages, and choose the feed **Scope**. Check the **Include packages from common public sources** checkbox to enable upstream sources on your feed.

1. Select **Create** when you're done.

    :::image type="content" source="media/cargo-crates-feed.png" alt-text="A screenshot displaying how to create a feed to consume crates from Crates.io upstream.":::

## Connect to your feed

::: moniker range="azure-devops"

#### [Private feed](#tab/privatefeed/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the left navigation pane.

1. If this is the first time using Cargo with Azure Artifacts, make sure you have installed [rustup](https://rustup.rs/).

1. Add the provided snippet from the **Project setup** section to your *.cargo/config.toml* file in your source repository:

    - **Project-scoped feed**:
    
        ```
        [registries]
        <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
        
        [source.crates-io]
        replace-with = "<FEED_NAME>"
        ```

    - **Organization-scoped feed**:
    
        ```
        [registries]
        <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
        
        [source.crates-io]
        replace-with = "<FEED_NAME>"
        ```

#### [Public feed](#tab/publicfeed/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the left navigation pane.

1. If this is the first time using Cargo with Azure Artifacts, make sure you have installed [rustup](https://rustup.rs/).

1. Add the provided snippet from the **Project setup** section to your *.cargo/config.toml* file in your source repository depending on your scenario. See [Feed roles and permissions](../feeds/feed-permissions.md#feed-roles-and-permissions) to learn more about the different roles and their permissions:

    - **Feed Readers and anonymous users**:
    
        ```
        [registries]
        <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
        
        [source.crates-io]
        replace-with = "<FEED_NAME>"
        ```

    - **Feed and Upstream Readers, Feed Publishers, and Feed Owners**: Be sure to include the additional flag (*~force-auth*) for proper authentication with your feed, as shown below:
    
        ```
        [registries]
        <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>~force-auth/Cargo/index/" }
        
        [source.crates-io]
        replace-with = "<FEED_NAME>"
        ```

::: moniker-end

::: moniker range="azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the left navigation pane.

1. If this is the first time using Cargo with Azure Artifacts, make sure you have installed [rustup](https://rustup.rs/).

1. Add the provided snippet from the **Project setup** section to your *.cargo/config.toml* file in your source repository:

    - **Project-scoped feed**:
    
        ```
        [registries]
        <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
        
        [source.crates-io]
        replace-with = "<FEED_NAME>"
        ```

    - **Collection-scoped feed**:
    
        ```
        [registries]
        <FEED_NAME> = { index = "sparse+https://pkgs.dev.azure.com/<COLLECTION_NAME>/_packaging/<FEED_NAME>/Cargo/index/" }
        
        [source.crates-io]
        replace-with = "<FEED_NAME>"
        ```

::: moniker-end

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
