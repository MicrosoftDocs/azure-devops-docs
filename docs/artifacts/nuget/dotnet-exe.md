---
title: Publish and restore packages with dotnet CLI
description: How to connect to a feed and use the dotnet CLI to publish and restore NuGet packages
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 06/28/2022
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and restore NuGet packages (dotnet)

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

With Azure Artifacts, you can publish and restore your NuGet packages to/from your feed and share them with others based on your feed's visibility settings. This article will guide you through setting up your project to publish and restore your packages using the dotnet command-line interface.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).

- The latest [NuGet version](https://www.nuget.org/downloads).

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

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Connect to feed - TFS":::

1. Select **NuGet** and follow the instruction to connect to your feed.

::: moniker-end

## Publish NuGet packages

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

## Restore NuGet packages

To restore your packages, run the following command in an elevated command prompt. The `--interactive` flag is used to prompt the user for credentials.

```Command
dotnet restore --interactive
```

> [!TIP]
> If you want to authenticate with Azure Artifacts from your pipeline, use the [NuGet Authenticate task](../../pipelines/tasks/package/nuget-authenticate.md) to connect  to Azure Artifacts and other NuGet repositories. 
>
> Another way to authenticate programmatically is to use the [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider) and pass in your credentials using the `VSS_NUGET_EXTERNAL_FEED_ENDPOINTS` [environment variable](https://github.com/Microsoft/artifacts-credprovider/blob/master/README.md#environment-variables).

## Related articles

- [Connect to Azure Artifacts feeds (NuGet.exe)](./nuget-exe.md)
- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
