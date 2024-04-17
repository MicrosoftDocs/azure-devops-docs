---
title: Publish and restore NuGet packages with dotnet CLI
description: How to connect to a feed and use the dotnet CLI to publish and restore NuGet packages
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.service: azure-devops-artifacts
ms.custom: devx-track-dotnet
ms.topic: conceptual
ms.date: 04/17/2024
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Publish and restore NuGet packages from the command line (dotnet)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables you to publish and restore your NuGet packages to and from your feed, allowing you to share them with others according to your feed's visibility settings. This guide will walk you through configuring your project to publish and restore packages using the dotnet command-line interface.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).

- Download and install [.NET Core SDK (2.1.400+)](https://dotnet.microsoft.com/en-us/download).

## Connect to feed

::: moniker range="azure-devops"

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **dotnet** from the *NuGet* section on the left.

1. Create a *nuget.config* file in the same folder as your .csproj or .sln file. Copy the following XML snippet and paste it into your new file, replacing the placeholders with the relevant information:

- Organization-scoped feed:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <clear />
        <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
      </packageSources>
    </configuration>
    ```

- Project-scoped feed:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <clear />
        <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
      </packageSources>
    </configuration>
    ```
::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to Feed**, and then select **dotnet** from the left navigation pane.

1. Follow the instructions in the **Project setup** section to connect to your feed.

    :::image type="content" source="../media/connect-to-feed-dotnet-server-2020-and-2022.png" alt-text="A screenshot showing how to connect to a feed with dotnet in Azure DevOps Server 2020 and 2022." lightbox="../media/connect-to-feed-dotnet-server-2020-and-2022.png":::

> [!NOTE]
> dotnet is not supported in Azure DevOps Server 2019.

::: moniker-end

## Publish packages

Run the following command to publish a package to your feed. Replace the placeholders with the appropriate information:

```CLI
dotnet nuget push --source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --api-key <ANY_STRING> <PACKAGE_PATH> 
```

**Example**: *dotnet nuget push --source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json --api-key AZ bin/MyPackage.5.0.2.nupkg*

> [!NOTE]
> The `api-key` is only used as a placeholder.

## Publish packages from external sources

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) with **packaging read and write** scope.

1. Replace the *<PERSONAL_ACCESS_TOKEN>* placeholder with your personal access token, and then run the following command to add your package source to your *nuget.config* file. This will add your PAT to your *nuget.config*. Make sure to store this file securely and not check it into source control.

    ```CLI
    dotnet nuget add source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --name <SOURCE_NAME> --username <USER_NAME> --password <PERSONAL_ACCESS_TOKEN> --configfile <PATH_TO_NUGET_CONFIG_FILE>
    ```

1. Publish your package:

    ```CLI
    dotnet nuget push --source <SOURCE_NAME> --api-key <ANY_STRING> <PACKAGE_PATH>
    ```

**Example**: *dotnet nuget add source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json --name MySource --username MyUserName --password MyPersonalAccessToken --configfile ./nuget.config*
*dotnet nuget push --source MySource --api-key AZ nupkgs/mypackage.1.1.0.nupkg*

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow the [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts). 

## Restore packages

Run the following command to restore your packages. The `--interactive` flag is used to prompt the user for credentials:

```CLI
dotnet restore --interactive
```

## Related articles

- [Connect to Azure Artifacts feeds (NuGet.exe)](./nuget-exe.md)
- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)
- [Use packages from NuGet Gallery](./upstream-sources.md)
