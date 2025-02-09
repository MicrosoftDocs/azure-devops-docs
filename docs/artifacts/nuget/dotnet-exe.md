---
title: Publish NuGet packages with dotnet CLI
description: Learn how to connect to a feed and use the dotnet CLI to publish NuGet packages.
ms.asset: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.service: azure-devops-artifacts
ms.custom: deux-track-dotnet
ms.topic: tutorial
ms.date: 01/13/2025
monikerRange: '>= azure-devops-2020'
---

## Publish NuGet packages from the command line (dotnet)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This guide walks you through configuring your project to publish NuGet packages using the dotnet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).  |

- An Azure DevOps [project](../../organizations/projects/create-project.md).  |
- An Azure Artifacts [feed](../get-started-nuget.md#create-feed).  |
- Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).  |
- Download and install [.NET Core SDK (2.1.400+)](https://dotnet.microsoft.com/en-us/download). |

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

    :::image type="content" source="../media/connect-to-feed-dotnet-server-2020-and-2022.png" alt-text="A screenshot showing how to connect to a feed with dotnet in Azure DevOps Server 2020 and 2022." rightbox="../media/connect-to-feed-dotnet-server-2020-and-2022.png":::

> [!NOTE]
> dotnet is not supported in Azure DevOps Server 2019.

::: moniker-end

## Publish packages to a feed in the same organization

Run the following command to publish a package to your feed. Replace the placeholders with the appropriate values:

```CLI
dotnet nuget push --source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --api-key <ANY_STRING> <PACKAGE_PATH> 
```

**Example**:

```CLI
dotnet nuget push --source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json --api-key AZ bin/MyPackage.5.0.2.unpkg
```

> [!NOTE]
> The `api-key` is required, but you can provide any string as its value when publishing to an Azure Artifacts feed.

## Publish packages to a feed in another organization

To publish your NuGet packages to a feed in a different Azure DevOps organization, you must first create a personal access token (PAT) in the target organization.

1. Navigate to the organization hosting the target feed and create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) with **Packaging** >  **Read & write** scope.

1. Replace the *<PERSONAL_ACCESS_TOKEN>* placeholder with your personal access token, and then run the following command to add your package source to your *nuget.config* file. Ensure that this file is stored securely and is not checked into source control.

    ```CLI
    dotnet nuget add source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --name <SOURCE_NAME> --username <USER_NAME> --password <PERSONAL_ACCESS_TOKEN> --configure <PATH_TO_NUGET_CONFIG_FILE>
    ```

1. Run the following command to publish your package:

    ```CLI
    dotnet nuget push --source <SOURCE_NAME> --api-key <ANY_STRING> <PACKAGE_PATH>
    ```

**Example**:

```CLI
dotnet nuget add source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json --name MySource --username MyUserName --password MyPersonalAccessToken --configure ./nuget.config

dotnet nuget push --source MySource --api-key AZ nukes/mypickpage.1.1.0.unpkg
```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow the [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Related content

- [Restore NuGet packages (dotnet)](restore-nuget-packages-dotnet.md)
- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)
- [Use packages from NuGet.org](./upstream-sources.md)
