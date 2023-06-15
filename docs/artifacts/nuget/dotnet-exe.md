---
title: Publish and restore packages with dotnet CLI
description: How to connect to a feed and use the dotnet CLI to publish and restore NuGet packages
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.service: azure-devops-artifacts
ms.custom: devx-track-dotnet
ms.topic: conceptual
ms.date: 06/28/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish and restore NuGet packages from the command line (dotnet)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish and restore your NuGet packages to/from your feed and share them with others based on your feed's visibility settings. This article will guide you through setting up your project to publish and restore your packages using the dotnet command-line interface.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).

- Download and install [.NET SDK](https://dotnet.microsoft.com/en-us/download).

## Connect to feed

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed.":::

1. Select **dotnet** from the *NuGet* section.

1. Create a *nuget.config* file in the same folder as your .csproj or .sln file. Copy the following XML snippet and paste it into your new file:

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

::: moniker range="tfs-2018"

1. Select **Build and Release** > **Packages**.

1. Select your feed from the dropdown menu or [create one](../get-started-nuget.md#create-a-feed) if you haven't.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed in TFS.":::

1. Select **NuGet** and follow the instruction to connect to your feed.

::: moniker-end

## Publish packages

To publish a package to your feed, run the following command in an elevated command prompt. Replace the placeholders with the appropriate information:

```Command
dotnet nuget push <PACKAGE_PATH> --source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --api-key <ANY_STRING>
```

> [!NOTE]
> The `api-key` is only used as a placeholder.

- **Example**:

    ```Command
    dotnet nuget push MyPackage.5.0.2.nupkg --source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json --api-key AZ
    ```

## Publish packages from external sources

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) with **packaging read and write** scope.

1. Add your package source to your nuget.config file. This will add your PAT to your nuget.config file. Make sure to store this file in a safe place, and do not check this file into source control.

    ```Command
    dotnet nuget add source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --name <SOURCE_NAME> --username <USER_NAME> --password <PERSONAL_ACCESS_TOKEN> --configfile <PATH_TO_NUGET_CONFIG_FILE>
    ```

1. Publish your package:

    ```Command
    dotnet nuget push <PACKAGE_PATH> --source <SOURCE_NAME> --api-key <ANY_STRING>
    ```

- **Example**:

    ```Command
    dotnet nuget add source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json --name MySource --username MyUserName --password MyPersonalAccessToken --configfile ./nuget.config
    dotnet nuget push nupkgs/mypackage.1.1.0.nupkg --source MySource --api-key AZ
    ```

## Restore packages

To restore your packages, run the following command in an elevated command prompt. The `--interactive` flag is used to prompt the user for credentials.

```Command
dotnet restore --interactive
```

## Related articles

- [Connect to Azure Artifacts feeds (NuGet.exe)](./nuget-exe.md)
- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
