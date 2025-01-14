---
title: Restore NuGet packages with the NuGet CLI
description: Learn how to connect to your feed and restore NuGet packages using the NuGet CLI.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 01/14/2025
monikerRange: '<= azure-devops'
---

# Restore NuGet packages from the command line (NuGet.exe)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article guides you through setting up your project and restoring your NuGet packages using the NuGet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - The latest [NuGet version](https://www.nuget.org/downloads). |

## Connect to a feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left navigation pane.

1. Add a *nuget.config* file to your project, in the same folder as your *.csproj* or *.sln* file. Paste the provided XML snippet into your file. The snippet should look like the following:

    - **Organization-scoped feed**:
    
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<SOURCE_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```
    
    - **Project-scoped feed**:
    
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<SOURCE_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left navigation pane.

1. Follow the instructions in the **Project setup** section to connect to your feed.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to Feed**, and then select **NuGet** from the left navigation pane.

1. Follow the provided instructions to add your package source URL to your *nuget.config* file.

::: moniker-end

## Restore packages

Run the following command in your project directory to restore your packages:

```CLI
nuget.exe restore
```

## Related content

- [Publish NuGet packages (NuGet.exe)](publish.md)

- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)

- [Use packages from NuGet.org](./upstream-sources.md)


