---
title: Consume packages from the NuGet Gallery
description: Learn how to consume packages from nuget.org with Azure Artifacts upstream sources.
ms.assetid: 301f954f-a35a-4fe2-b7fd-c78e534d9b16
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 09/5/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Use packages from the NuGet Gallery

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts upstream sources make it easy for developers to pull packages from public registries like *nuget.org* and *npmjs.com*. In this article, you learn how to set up your project and use the command line to consume NuGet packages from the NuGet Gallery.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-a-feed).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - Install the latest [NuGet version](https://www.nuget.org/downloads). |

## Create a feed and enable upstream sources

If you haven't created a feed yet, follow the steps below to create a new feed and enable upstream sources. If you already have a feed, proceed to the [next step](#add-nuget-gallery-upstream-source) to add the NuGet Gallery as an upstream source.

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, select the **Visibility** option to define who can view your packages, and choose your **Scope**. Azure Artifacts recommends scoping feeds to a project rather than the entire organization. 

1. Make sure to check the **Include packages from common public sources** option, as you'll need this to consume packages from public registries such as *nuget.org*, *npmjs.com* etc..

1. Select **Create** when you're done.

    :::image type="content" source="../media/enable-upstream-nuget-gallery.png" alt-text="A screenshot displaying how to create a new feed and enable upstream sources in Azure Artifacts.":::

## Add NuGet Gallery upstream source

If you checked the Upstream sources checkbox when creating your feed (as shown in the previous section), the NuGet Gallery should have been added automatically to your feed’s upstream sources. If you're working with a different feed or forgot to check that option, you can manually add the NuGet Gallery by following these steps:

1. Sign in to Azure DevOps, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed settings**.

::: moniker range="azure-devops || azure-devops-2022"

1. Select **Upstream Sources**, and then select **Add Upstream**.

1. Select **Public source**, select **NuGet Gallery** from the dropdown menu, and then select **Add**.

1. Select **Save** at the top right corner, then select **Save** again to confirm and apply your changes.

::: moniker-end

::: moniker range="=azure-devops-2020"

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