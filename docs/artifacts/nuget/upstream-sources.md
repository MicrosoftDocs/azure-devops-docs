---
title: Consume packages from nuget.org
description: How to consume packages from nuget.org with Azure Artifacts upstream sources
ms.assetid: 301f954f-a35a-4fe2-b7fd-c78e534d9b16
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 04/16/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Use packages from NuGet Gallery

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts upstream sources, developers are able to consume packages from public registries such as nuget.org and npmjs.com. This article will walk you through the process of setting up your project and using the command line to effectively consume NuGet packages from the NuGet Gallery. In this article, you'll learn how to:

> [!div class="checklist"]    
> * Enable upstream sources for your feed 
> * Add NuGet Gallery as an upstream source 
> * Connect to your feed
> * Install packages from nuget.org

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

- Download [NuGet](https://www.nuget.org/downloads).

- Download and install [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

## Enable upstream sources on your feed

If you haven't created a feed yet, follow the steps below to create a new one and make sure you select the upstream sources checkbox to enable them. If you already have a feed, proceed to the [next step](#add-nuget-gallery-upstream-source) to add the NuGet Gallery as an upstream source.

[!INCLUDE [](../includes/create-feed.md)]

## Add NuGet Gallery upstream source

::: moniker range="azure-devops"

If you've checked the upstream sources checkbox when making your feed, NuGet Gallery should have been added automatically. If not, add it manually by following these steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed settings**.

1. Select **Upstream Sources**, and then select **Add Upstream** to add a new upstream source.

1. Select **Public source**, and then select **NuGet Gallery** from the dropdown menu.

1. Select **Save** when you're done, and then select **Save** one more time at the top right corner to save your changes.

::: moniker-end

::: moniker range="azure-devops-2022"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed settings**.

1. Select **Upstream Sources**, and then select **Add Upstream**.

1. Select **Public source**, and then select **NuGet Gallery** from the dropdown menu.

1. Select **Save** when you're done, and then select **Save** one more time at the top right corner to save your changes.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed settings**.

1. Select **Upstream Sources**, and then select **Add upstream source**.

1. Select **Public source**, and then select **NuGet Gallery** from the dropdown menu.

1. Select **Add** when you're done.

::: moniker-end

## Connect to feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to feed**, and then select **NuGet.exe**.

1. Add a *nuget.config* file in the same folder as your *.csproj* or *.sln* file. Paste the provided XML snippet into your file. If you use the examples below, make sure you replace the placeholders with the appropriate values for your scenario.

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

## Install packages from NuGet Gallery

With our project now configured to authenticate with our feed, we can now proceed to install packages from the NuGet Gallery upstream. In this example, we will install the *Serilog* diagnostic logging library:

1. Navigate to the NuGet Gallery at `https://www.nuget.org/`.

1. Search for the *Serilog* package, and then select it to navigate to the details page.

1. Select the **Package Manager** tab, and copy the command. In our example, the command is as follows: 

    ```Command
    NuGet\Install-Package Serilog -Version 3.1.2-dev-02097
    ```

1. Open your project in Visual Studio, and then select **Tools** > **NuGet Package Manager** > **Package Manager Console** to open the console window.

1. Paste your command in the Package Manager Console window, and press Enter to install your package.

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

## View saved packages

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps server, and then navigate to your project.

::: moniker-end

2. Select **Artifacts**, and then select your feed from the dropdown menu.

3. Select the **NuGet Gallery** source from the dropdown menu to filter for packages from this upstream.

4. The *Serilog* package, installed in the previous step, is now available in our feed. Azure Artifacts automatically saved a copy to our feed when we executed the install command.

    :::image type="content" source="media/package-saved-from-upstream.png" alt-text="A screenshot showing the package that was saved from upstream.":::

## Related articles

- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
- [Manage permissions](../feeds/feed-permissions.md)