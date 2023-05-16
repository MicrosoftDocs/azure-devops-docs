---
title: Get started with NuGet packages and Azure Artifacts
description: Use Azure Artifacts to publish and download NuGet packages to and from Artifacts feeds
ms.service: azure-devops-artifacts
ms.custom: contperf-fy21q3
ms.topic: quickstart
ms.assetid: C5112218-DA7E-4016-986D-2D0F70DAFA44
ms.date: 02/18/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with NuGet packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish, and download NuGet packages from different sources such as feeds and public registries. Artifact feeds can be private to share your packages with your team and specific users, or public to share them [publicly](tutorials/share-packages-publicly.md) with anyone on the internet.

In this article, you'll learn:

> [!div class="checklist"]    
> * How to create a new feed  
> * How to set up your project and connect to your feed  
> * How to publish NuGet packages to your feed
> * How to download NuGet packages from your feed  

## Prerequisites

- An Azure DevOps organization. [Create an organization](../organizations/accounts/create-organization.md), if you don't have one already.
- [Install NuGet client tools](/nuget/install-nuget-client-tools)

## Create a feed

You can create [two types of feeds](./feeds/project-scoped-feeds.md#project-scoped-vs-organization-scoped-feeds): project-scoped and organization-scoped feeds. All public feeds are scoped to their hosting project and they inherit its visibility settings.

[!INCLUDE [](includes/create-feed.md)]

## Connect to feed

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization `https://dev.azure.com/<Your_Organization>` and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="./media/connect-to-feed-azure-devops-newnav.png" alt-text="Connect to your feed":::

1. Select **NuGet.exe**.

    :::image type="content" source="./media/nuget-connect-feed.png" alt-text="NuGet.exe feed connection":::

1. If this is the first time using Azure Artifacts with Nuget.exe, select **Get the tools** and follow the instructions to:

    1. Install the [latest NuGet version](https://www.nuget.org/downloads).
    1. Install [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

1. Follow the instructions in the **Project setup** to add a nuget.config file.

    :::image type="content" source="./media/project-setup.png" alt-text="Project setup":::

::: moniker-end

::: moniker range="tfs-2018"

1. Navigate to your project in Azure DevOps Server `https://<YourServerName>/<YourCollectionName>/<YourProjectName>`.

1. Select **Build and Release** > **Packages**.

1. Select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="./media/connect-to-feed.png" alt-text="Connect to feed - TFS":::

1. Select **NuGet** and follow the instruction to connect to your feed.

    :::image type="content" source="./media/connect-to-nuget-feed-tfs.png" alt-text="Connect to NuGet feed - TFS":::

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