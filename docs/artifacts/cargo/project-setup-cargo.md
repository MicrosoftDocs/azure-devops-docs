---
title: Connect your Cargo project to an Azure Artifacts feed
description: Lean how to set up your Cargo project and connect to an Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 01/21/2025
monikerRange: '>= azure-devops-2022'
---

# Connect your Cargo project to an Azure Artifacts feed

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)]

This article guides you through setting up your Cargo project, configuring the credential provider, and connecting to an Azure Artifacts feed.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [rustup](https://rustup.rs/). You'll need Cargo version 1.74.0 or later. |


## Project setup

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Cargo** from the left navigation pane.

1. Add the provided snippet to your *cargo/config.toml* in your source repository. Your *config.toml* file should resemble the following:

    - **Project-scoped feed**: 
    
        ```
        [registries]
        FEED_NAME = { index = "sparse+https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/Cargo/index/" }
        ```
    
    - **Organization-scoped feed**: 
    
        ```
        [registries]
        FEED_NAME = { index = "sparse+https://pkgs.dev.azure.com/ORGANIZATION_NAME/_packaging/FEED_NAME/Cargo/index/" }
        ```

1. Add the following snippet to your *cargo/config.toml* to replace the *crates.io* source with your feed. Replace the placeholder with your feed name:

    ```
    [source.crates-io]
    replace-with = "FEED_NAME"
    ```

## Configure a credential provider

To use Cargo with Azure Artifacts, you must first set up a default credential helper. See [The Cargo Book](https://doc.rust-lang.org/nightly/cargo/reference/registry-authentication.html) for more details.

### [Windows](#tab/windows)

Add the following snippet to your *%USERPROFILE%\.cargo\config.toml*. This sets a default credential helper for the user:

```
[registry]
global-credential-providers = ["cargo:token", "cargo:wincred"]
```

### [Linux](#tab/linux)

Add the following snippet to your */.cargo/config.toml*. This sets a default credential helper for the user:

```
[registry]
global-credential-providers = ["cargo:token", "cargo:libsecret"]
```

### [macOS](#tab/macOS)

Add the following snippet to your */.cargo/config.toml*. This sets a default credential helper for the user:

```dotnetcli
[registry]
global-credential-providers = ["cargo:token", "cargo:macos-keychain"]
```

- - -


## Log in to the registry

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Generate a [Personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes to authenticate with your feed.

1. Run the following command to log in to your registry. Replace the placeholder with your feed's name, and provide the personal access token you created earlier when prompted:

### [PowerShell ](#tab/powershell/)

```powershell
"Basic " + [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("PAT:" + (Read-Host -MaskInput "Enter PAT"))) | cargo login --registry <FEED_NAME>
```

#### [Bash ](#tab/bash/)

```bash
read -p "Enter PAT: " PAT; echo Basic $(echo -n PAT:$PAT | base64) | cargo login --registry <FEED_NAME>
```

#### [Azure CLI](#tab/azurecli/)

```azurecli
az login
az account get-access-token --query "join(' ', ['Bearer', accessToken])" --output tsv | cargo login --registry <FEED_NAME>
```

- - -


## Next steps

> [!div class="nextstepaction"]
> [Publish Cargo packages](../get-started-cargo.md)
