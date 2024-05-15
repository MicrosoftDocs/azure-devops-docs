---
title: Get started with NuGet packages and Azure Artifacts
description: How to use Azure Artifacts to publish and download NuGet packages from your feed.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 05/14/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with NuGet packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish and download NuGet packages from different sources such as feeds and public registries. With Azure Artifacts, you can create feeds that can be either private, allowing you to share packages with your team and specific users, or public, enabling you to share them openly with anyone on the internet.

In this article, you'll learn how to:

> [!div class="checklist"]    
> * Create a new feed.
> * Set up your project and connect to your feed.
> * Publish NuGet packages.
> * Download packages from your feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Install the [latest NuGet version](https://www.nuget.org/downloads).

- Install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

## Create Feed

[!INCLUDE [](includes/create-feed.md)]

## Connect to Feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left navigation pane. If this is the first time using Azure Artifacts with Nuget.exe, ensure that you have installed all the prerequisites.

    :::image type="content" source="./media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot showing the connect to feed button.":::

1. Follow the instructions provided in the **Project setup** section to configure your *nuget.config* file and authenticate with Azure Artifacts.

    :::image type="content" source="./media/project-setup.png" alt-text="A screenshot showing how to set up your project.":::

::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left.

1. Follow the instructions in the **Project setup** section to connect to your feed.

    :::image type="content" source="./media/connect-to-feed-nuget-server-2020.png" alt-text="A screenshot showing how to set up your NuGet project in Server 2020 and Server 2022.":::

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **NuGet** from the left.

1. Follow the instructions to add your package source URL to your *nuget.config*.

    :::image type="content" source="./media/connect-to-feed-nuget-server-2019.png" alt-text="A screenshot showing how to set up your NuGet project in Server 2019.":::

::: moniker-end

## Download packages

[!INCLUDE [](includes/nuget/consume.md)]

::: moniker range="azure-devops"

> [!NOTE]
> Using NuGet Package Explorer to search for packages in upstream sources is not supported.

::: moniker-end

## Publish packages  

Run the following command to publish your package to your feed. You can enter any string for the *ApiKey* argument.

```Command
nuget.exe push -Source <SOURCE_NAME> -ApiKey key <PACKAGE_PATH>
```

## Related articles

- [Publish NuGet packages with Azure Pipelines (YAML/Classic)](../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./nuget/publish-to-nuget-org.md)
- [Use packages from NuGet Gallery](./nuget/upstream-sources.md)
