---
title: Restore NuGet packages with dotnet CLI
description: Learn how to connect to a feed and use the dotnet CLI to restore NuGet packages.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 01/13/2025
monikerRange: '>= azure-devops-2020'
---

# Restore NuGet packages from the command line (dotnet)

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This guide walks you through configuring your project and restoring your NuGet packages using the dotnet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - Download and install [.NET Core SDK (2.1.400+)](https://dotnet.microsoft.com/en-us/download). |

## Connect to a feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **dotnet** from the *NuGet* section on the left.

1. Create a *nuget.config* file in the same folder as your *csproj* or *sln* file. Copy the following XML snippet and paste it into your new file, replacing the placeholders with the relevant information:

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

::: moniker-end

## Restore packages

Run the following command to restore your packages. The `--interactive` flag is used to prompt the user for credentials:

```CLI
dotnet restore --interactive
```

## Related content

- [Publish NuGet packages (dotnet)](dotnet-exe.md)
- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)
- [Use packages from NuGet.org](./upstream-sources.md)
