---
title: Get started with NuGet packages and Azure Artifacts
description: Use Azure Artifacts to publish and download NuGet packages from your feeds
ms.service: azure-devops-artifacts
ms.custom: contperf-fy21q3
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 06/08/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with NuGet packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish and download NuGet packages from different sources such as feeds and public registries. With Azure Artifacts, you can create feeds that can be either private, allowing you to share packages with your team and specific users, or public, enabling you to share them openly with anyone on the internet.

In this article, you'll learn how to:

> [!div class="checklist"]    
> * Create a new feed  
> * Set up your project and connect to your feed  
> * Publish NuGet packages
> * Download packages from your feed  

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../organizations/accounts/create-organization.md) or a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Install the [latest NuGet version](https://www.nuget.org/downloads).

- Install [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

## Create a feed

Azure Artifacts offers two types of feeds: project-scoped feeds and organization-scoped feeds. if you want to create a public feed, begin by creating a project-scoped feed, and then adjust the visibility settings of the project hosting your feed to public. This will effectively make your project-scoped feed accessible to the public.

[!INCLUDE [](includes/create-feed.md)]

## Connect to feed

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="./media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot showing the connect to feed button.":::

1. Select **NuGet.exe**. If this is the first time using Azure Artifacts with Nuget.exe, ensure that you have installed all the prerequisites.

1. Follow the instructions provided in the **Project setup** section to configure your nuget.config file.

    :::image type="content" source="./media/project-setup.png" alt-text="A screenshot showing how to set up your project.":::

::: moniker-end

::: moniker range="tfs-2018"

1. Navigate to your project `http://ServerName:8080/tfs/DefaultCollection/<ProjectName>`.

1. Select **Build and Release** > **Packages**.

1. Select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="./media/connect-to-feed.png" alt-text="A screenshot showing the connect to feed button in TFS.":::

1. Select **NuGet**, and then follow the instruction to connect to your feed.

    :::image type="content" source="./media/connect-to-nuget-feed-tfs.png" alt-text="A screenshot showing how to connect to your feed in TFS.":::

::: moniker-end

## Publish NuGet packages  

Run the following command in an elevated command prompt window to set up your nuget.config file and publish your NuGet package to your feed. See [nuget sources](/nuget/reference/cli-reference/cli-ref-sources), and [nuget push](/nuget/reference/cli-reference/cli-ref-push) for more details:

```Command
nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
nuget push -Source <SourceName> -ApiKey key <PackagePath>
```

If you don't have a NuGet package but want to try publishing packages to your feed, you can install the _HelloWorld_ sample package as follows:
   
```Command
nuget install HelloWorld -ExcludeVersion
```

## Download NuGet packages

[!INCLUDE [](includes/nuget/consume.md)]

> [!NOTE]
> Searching for packages in upstreams with NuGet Package Explorer is not supported.

## Related articles

- [Publish NuGet packages with Azure Pipelines](../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./nuget/publish-to-nuget-org.md)
- [NuGet.org upstream source](./nuget/upstream-sources.md)