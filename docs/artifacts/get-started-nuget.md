---
title: Publish and download NuGet packages with Azure Artifacts
description: Learn how to use Azure Artifacts to publish and download NuGet packages.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 06/20/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Publish and download NuGet packages with Azure Artifacts

[!INCLUDE [version-gt-eq-2020](../includes/version-gt-eq-2020.md)]

Azure Artifacts enables developers to publish and download NuGet packages from feeds or public registries. Feeds can be either private, allowing you to share packages with specific users, or public, making your packages accessible to anyone on the internet.

This article guides you through creating a feed, configuring your project, and publishing and downloading NuGet packages.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - Install the [latest NuGet version](https://www.nuget.org/downloads). |

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

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps server, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left navigation pane.

1. Follow the provided instructions under the **Project setup** section to set up your *nuget.config* file and connect to your Azure Artifacts feed.

    :::image type="content" source="./media/connect-to-feed-nuget-server-2020.png" alt-text="A screenshot displaying how to set up your project and connect to your feed in Azure DevOps Server 2020 and 2022.":::

::: moniker-end

## Publish packages to your feed

To publish a package to your feed, run the following command. The `ApiKey` parameter is required, but you can use any arbitrary string as its value.

```CLI
nuget.exe push -Source <SOURCE_NAME> -ApiKey key <PACKAGE_PATH>
```

#### Examples:**

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
