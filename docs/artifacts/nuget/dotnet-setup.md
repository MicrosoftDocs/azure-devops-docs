---
title: Connect to Azure Artifacts feeds with dotnet
description: How to connect to Azure Artifacts feeds with dotnet
ms.service: azure-devops-artifacts
ms.custom: devx-track-dotnet
ms.topic: conceptual
ms.date: 04/30/2024
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Connect to Azure Artifacts feeds (dotnet)

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Using Azure Artifacts, you can seamlessly publish your NuGet packages to Azure Artifacts feeds so you can share them with others privately or publicly based on your feed's visibility settings. This guide will walk you through setting up your project to authenticate with your Azure Artifacts feed using the dotnet command-line interface.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- Download and install the [Credential provider](https://github.com/microsoft/artifacts-credprovider).

- Download and install the [.NET Core SDK (2.1.400+)](https://dotnet.microsoft.com/en-us/download).

## Connect to feed

::: moniker range="azure-devops"

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **dotnet** from the **NuGet** section.

    :::image type="content" source="../media/dotnet-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed with dotnet.":::

1. Follow the instructions in the **Project setup** to set up your *nuget.config* file. The structure of your file should look similar to this:

    - **Project-scoped feed**:

        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

    - **Organization-scoped feed**:

        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **dotnet** from the left navigation pane.

1. Follow the instructions in the **Project setup** section to configure your *nuget.config* file and connect to your feed.

    :::image type="content" source="../media/connect-to-feed-dotnet-server-2020-and-2022.png" alt-text="A screenshot showing how to connect to a feed with dotnet in Azure DevOps Server 2020 and 2022.":::

::: moniker-end

## Related articles

- [Publish and restore NuGet packages (NuGet.exe)](publish.md)
- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
- [Use packages from NuGet.org](./upstream-sources.md)
