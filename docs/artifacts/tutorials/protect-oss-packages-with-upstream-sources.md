---
title: How to use upstream sources in you Azure Artifacts feed
description: Use upstream sources in Azure Artifacts to consume packages from public registries
ms.technology: devops-artifacts
ms.reviewer: amullans
ms.date: 08/24/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Tutorial: How to use upstream sources

Upstream sources enable you to manage your application dependencies from a single feed. Using upstream sources makes it easy to consume packages from public registries while having protection against outages or compromised packages. You can also publish your own packages to the same feed and manage all your dependencies in one location.

This tutorial will walk you though how to enable upstream sources on your feed and consume packages from public registries such as NuGet.org or npmjs.com.

In this tutorial, you will:

>[!div class="checklist"]  
> * Create a new feed and enable upstream sources.
> * Set up your configuration file.
> * Run an initial package restore to populate your feed.
> * Check your feed to view the saved copy of the packages you consumed from the public registry.

## Create a feed and enable upstream sources

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**.

    :::image type="content" source="../media/goto-feed-hub-azure-devops-newnav.png" alt-text="Screenshot showing how to navigate to Azure Artifacts.":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build & Release**, and then select **Packages**.

    :::image type="content" source="../media/goto-feed-hub.png" alt-text="Screenshot showing how to navigate to Azure Artifacts - TFS.":::

::: moniker-end

::: moniker range=">= azure-devops-2019"

1. Select **Create Feed** to create a new feed.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="Screenshot showing the create feed button.":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **New Feed** to create a new feed.

    :::image type="content" source="../media/new-feed-button.png" alt-text="Screenshot showing the create feed button - TFS.":::

::: moniker-end

::: moniker range=">= azure-devops-2019"

1. Provide a name for your feed, and then select its visibility. Make sure your check the **Include packages from common public sources** checkbox to enable upstream sources. Select **Create** when you are done

    :::image type="content" source="../media/new-feed-dialog.png" alt-text="Screenshot showing the create a new feed window.":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Provide a name for your feed, and then select its visibility. Make sure your check the **Include packages from common public sources** checkbox to enable upstream sources. Select **Create** when you are done

    :::image type="content" source="../media/new-feed-dialog.png" alt-text="Screenshot showing the create a new feed window - TFS.":::

::: moniker-end

## Setup the configuration file

Now that we created our feed, we need to update the config file to point to our feed. To do this we must:

1. Get the source's URL
1. Update the configuration file

#### [npm](#tab/npm/)

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed.":::

1. On the left side of the page, select the **npm** tab.

1. Follow the instructions in the **Project setup** section to set up your config file.

    :::image type="content" source="../media/connect-to-feed-npm-registry-azure-devops-newnav.png" alt-text="Screenshot showing how to set up your project.":::

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Select **Build & Release** > **Packages**, and then select **Connect to Feed**.

    :::image type="content" source="../media/connect-to-feed.png" alt-text="Screenshot showing how to connect to a feed - TFS":::

1. Copy the highlighted snippet to add it to your config file.

    :::image type="content" source="../media/connect-to-feed-npm-registry.png" alt-text="Screenshot highlighting the snippet to be added to the config file - TFS":::

::: moniker-end

If you don't have a *.npmrc* file already, create a new one in the root of your project (in the same folder as your *package.json*). Open your new *.npmrc* file and paste the snippet you just copied in the previous step.

#### [NuGet](#tab/nuget/)

1. Select **Artifacts**, and then select your feed. 

1. Select **Connect to feed**, and then choose **NuGet.exe**.

    :::image type="content" source="../media/nuget-connect-to-feed.png" alt-text="Screenshot showing how to connect to NuGet feeds.":::

1. Copy the XML snippet in the **Project Setup** section.

1. Create a new file named *nuget.config* in the root of your project.

1. Paste the XML snippet in your config file.
 
* * *

## Restore packages

Now that you enabled upstream sources and set up your configuration file, we can run the package restore command to query the upstream source and retrieve the upstream packages.

We recommend clearing your local cache first before running the nuget restore. Azure Artifacts will have a saved copy of any packages you installed from upstream. 

# [npm](#tab/npm)

Remove the *node_modules* folder from your project and run the following command in an elevated command prompt window:

```Command
npm install --force
```

> [!NOTE]
> The `--force` argument will force pull remotes even if a local copy exists. 

Your feed now should contain any packages you saved from the upstream source.

# [NuGet](#tab/nuget)

- **Clear your local cache**:

    ```Command
    nuget locals -clear all
    ```

- **Restore packages**:

    ```Command
    nuget.exe restore
    ```

Your feed now should contain any packages you saved from the upstream source.

* * *
