---
title: Install NuGet packages with Visual Studio
description: Learn how to use Visual Studio to install NuGet packages from Azure Artifacts feeds and NuGet.org.
ms.assetid: BF919E28-65C2-40E3-8A49-5BF0DA3DE598
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: how-to
ms.date: 03/04/2025
monikerRange: '<= azure-devops'
---

# Install NuGet packages with Visual Studio

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article guides you through setting up your Visual Studio to install NuGet packages from Azure Artifacts feeds and NuGet.org.

## Prerequisites

| **Product**        | **Requirements**    |
|--------------------|---------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed). |
| **Other**          | - Download [Visual Studio](https://visualstudio.microsoft.com/downloads/). |

## Get the source URL

Before setting up Visual Studio, you must first get your feed's source URL. You'll use this URL in the next section to add your feed as a package source in Visual Studio:

[!INCLUDE [](../includes/nuget/nuget-consume-endpoint.md)]

## Set up Visual Studio

Now that you have your feed's source URL, follow these steps to set up Visual Studio and add the new package source:

#### [Windows](#tab/windows/)

1. Open Visual Studio, then select **Tools** > **Options**.

1. Select **NuGet Package Manager**, and then select **Package Sources**.

1. Enter your feed's **Name** and paste the **Source** URL you copied earlier. Select the green (+) icon when you're done to add a new package source.

1. If you've enabled [upstream sources](upstream-sources.md) in your feed, uncheck **nuget.org**.

1. Select **OK** when you're done.

    :::image type="content" source="../media/vs-addsource.png" alt-text="A screenshot displaying how to add a new package source in Visual Studio for Windows.":::

#### [Mac](#tab/macOS/)

1. Create a new [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scopes.

1. Open Visual Studio for Mac, and navigate to **Visual Studio** > **Preferences**.

1. Select **NuGet** > **Sources**, then select **Add** to set up a new source.

1. Enter a **Name** for the new source and paste the source URL you copied earlier in the **Location** field. For **UserName**, you can enter any string, and for **Password**, paste the personal access token you created earlier. Select **OK** when you're done.

1. If you've enabled [upstream sources](upstream-sources.md) in your feed, uncheck **nuget.org**.

1. Select **Add Source** when you're done.

    :::image type="content" source="media/add-new-source-mac.png" alt-text="A screenshot displaying how to add a new package source in Visual Studio for Mac.":::

---

## Install packages from a feed

Now that you've set up Visual Studio and added your feed as a package source, you can now search and install packages directly from the NuGet Package Manager in Visual Studio.

#### [Windows](#tab/windows/)

1. Open Visual Studio, and then right-click on your project in the **Solution Explorer**, then select **Manage NuGet Packages...**.

1. Select **Browse**, and then select your feed from the **Package source** dropdown menu.
    
1. Use the search bar to find and install packages from your feed.
    
    :::image type="content" source="../media/select-pkg-src.png" alt-text="A screenshot displaying the list of package sources in Visual Studio.":::

#### [Mac](#tab/macOS/)

1. Open Visual Studio for Mac, right-click on the **Dependencies** folder in your solution, and then select **Manage NuGet Packages...**.

1. Select the **Browse** tab, and then select your feed from the **Package source** dropdown menu at the bottom.

1. Use the search bar to find and install packages from your feed.

    :::image type="content" source="media/search-package-sources-mac.png" alt-text="A screenshot displaying how to search for packages in Visual Studio for Mac.":::

---

> [!NOTE]
> If you've enabled [upstream sources](../nuget/upstream-sources.md), packages that haven't been saved to your feed from upstream won't appear in search results. A package is saved to the feed when a *Feed and Upstream Reader (Collaborator)* or higher installs it from upstream.

## Install packages from NuGet.org

You can install packages from NuGet.org in several ways, one of which is by using the *Package Manager Console* in Visual Studio:

1. Navigate to *NuGet.org* and search for the package you want to install.

1. Select the **Package Manager** tab, and then copy the *Install-Package* command.

1. Open Visual Studio, then select **Tools** > **NuGet Package Manager** > **Package Manager Console**.

1. Paste the install command into the console and press Enter.

## Related content

- [Restore NuGet packages (NuGet.exe)](restore-nuget-packages-nuget-exe.md)

- [Restore NuGet packages (dotnet)](restore-nuget-packages-dotnet.md)

- [Search for packages in upstream sources](../how-to/search-upstream.md)
