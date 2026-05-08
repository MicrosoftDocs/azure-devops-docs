---
title: Publish and download NuGet packages with Azure Artifacts
description: Learn how to use Azure Artifacts to publish and download NuGet packages.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 06/20/2025
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Publish and download NuGet packages with Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish and download NuGet packages from feeds or public registries. Feeds can be either private, allowing you to share packages with specific users, or public, making your packages accessible to anyone on the internet.

This article guides you through creating a feed, configuring your project, and publishing and downloading NuGet packages.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - Download and install [nuget.exe](https://www.nuget.org/downloads) version `4.8.0.5385` or later. We recommend NuGet *5.5.x* or later, which includes important bug fixes for cancellations and timeouts. |

## Set up the Azure Artifacts Credential Provider

The Azure Artifacts Credential Provider enables secure authentication to your Azure Artifacts feeds. To use it with nuget.exe, you must configure the NuGet Authentication Plugin, which acts as an intermediary between NuGet and your credential provider.

First, refer to the [NuGet authentication plugin](https://github.com/NuGet/Home/wiki/NuGet-cross-plat-authentication-plugin#plugin-installation-and-discovery) wiki and add the credential provider to NuGet's plugin search path. Then, follow the installation steps for your operating system below:

#### [Windows](#tab/windows/)

Use one of the following methods to install the Azure Artifacts Credential Provider:

### Manual installation

1. Download the latest [Microsoft.NetFx48.NuGet.CredentialProvider.zip](https://github.com/Microsoft/artifacts-credprovider/releases) release.

1. Extract the zip file.

1. Copy both the `netcore` and `netfx` folders from the extracted archive to `%UserProfile%/.nuget/plugins/`. The `netfx` folder is required for nuget.exe compatibility, while `netcore` supports modern .NET implementations.

### Install using the helper script

Alternatively, you can use the automated helper script for a streamlined installation. Ensure you have [PowerShell 5.1 or later](/powershell/scripting/install/installing-powershell), then follow these steps:

1. Download the [Install Credential Provider](https://github.com/microsoft/artifacts-credprovider/blob/master/helpers/installcredprovider.ps1) helper script.

1. Navigate to the script path and run:

    ```powershell
    iex "& { $(irm https://aka.ms/install-artifacts-credprovider.ps1) } -AddNetfx"
    ```

1. For .NET Framework 4.8.1 support, run the `-AddNetFx48` flag instead:

    ```powershell
    iex "& { $(irm https://aka.ms/install-artifacts-credprovider.ps1) } -AddNetFx48"
    ```

See the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#azure-artifacts-credential-provider) repository for more details.

#### [Linux/Mac](#tab/linuxMac/)

Make sure you've setup the [Prerequisites](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#for-linux-self-contained-installs), then use one of the following methods to install the Azure Artifacts Credential Provider:

### Manual installation

1. Download the latest [Microsoft.NetFx48.NuGet.CredentialProvider.tar.gz](https://github.com/Microsoft/artifacts-credprovider/releases) release.

1. Extract the tar file.

1. Copy both the `netcore` and `netfx` folders from the extracted archive to `$HOME/.nuget/plugins`. The `netfx` folder supports MSBuild scenarios, while `netcore` enables authentication for .NET Core and modern .NET implementations.

### Install using the helper script

The helper script provides an automated installation of the netcore version. If you need both netcore and netfx binaries for scenarios like mono MSBuild, use the manual installation method above instead.

1. Download the [Install Credential Provider](https://github.com/microsoft/artifacts-credprovider/blob/master/helpers/installcredprovider.sh) helper script.

1. Run one of the following commands based on your preferred package manager:
    - Using wget:
    
        ```bash
        wget -qO- https://aka.ms/install-artifacts-credprovider.sh | bash
        ```
    
    - Using curl:
    
        ```bash
        sh -c "$(curl -fsSL https://aka.ms/install-artifacts-credprovider.sh)"
        ```

See the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider?tab=readme-ov-file#azure-artifacts-credential-provider) repository for more details.

***

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Connect to a feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left navigation pane. If this is your first time using Azure Artifacts with *Nuget.exe*, make sure you've installed the prerequisites.

1. Follow the provided instructions under the **Project setup** section to set up your *nuget.config* file and connect to your Azure Artifacts feed.

    :::image type="content" source="./media/project-setup.png" alt-text="A screenshot displaying how to set up your project and connect to your feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="=azure-devops-2022"

1. Sign in to your Azure DevOps server, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left navigation pane.

1. Follow the provided instructions under the **Project setup** section to set up your *nuget.config* file and connect to your Azure Artifacts feed.

    :::image type="content" source="./media/connect-to-feed-nuget-server-2020.png" alt-text="A screenshot displaying how to set up your project and connect to your feed in Azure DevOps Server 2020 and 2022.":::

::: moniker-end

## Publish packages to your feed

> [!NOTE]
> To publish packages to a feed, you must be a **Feed Publisher (Contributor)** or higher. See [Manage permissions](feeds/feed-permissions.md) for more details.

To publish a package to your feed, run the following command. The `ApiKey` parameter is required, but you can use any arbitrary string as its value.

```CLI
nuget.exe push -Source <SOURCE_NAME> -ApiKey key <PACKAGE_PATH>
```

#### Examples

- **Project-scoped feed**:

    ```CLI
    nuget.exe push -Source https://pkgs.dev.azure.com/myOrganization/MyProject/_packaging/MyFeed/nuget/v3/index.json -ApiKey AZ release/myDemoPackage.1.0.0.nupkg
    ```

- **Organization-scoped feed**:

    ```CLI
    nuget.exe push -Source https://pkgs.dev.azure.com/myOrganization/_packaging/myFeed/nuget/v3/index.json -ApiKey AZ release/myDemoPackage.1.0.0.nupkg
    ```

> [!NOTE]
> The `ApiKey` is required, but you can use any arbitrary value when publishing to Azure Artifacts feeds.

## Download packages from your feed

To restore packages from your feed, run the following command in your project directory:

```CLI
nuget.exe restore
```

::: moniker range="azure-devops"

> [!NOTE]
> Searching for packages in upstream sources using the NuGet Package Explorer is not supported.

::: moniker-end

## Related content

- [Publish NuGet packages with Azure Pipelines (YAML/classic)](../pipelines/artifacts/nuget.md)

- [Publish packages to NuGet.org](nuget/publish-to-nuget-org.md)

- [Use packages from NuGet Gallery](nuget/upstream-sources.md)
