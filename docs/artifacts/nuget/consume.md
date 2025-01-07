---
title: Install NuGet packages using Visual Studio
description: How to use Visual Studio to consume NuGet packages from Azure Artifacts feeds and NuGet.org
ms.assetid: BF919E28-65C2-40E3-8A49-5BF0DA3DE598
ms.service: azure-devops-artifacts
ms.custom: engagement-fy23
ms.topic: conceptual
ms.date: 01/26/2023
monikerRange: '<= azure-devops'
---

# Install NuGet packages with Visual Studio

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using Azure Artifacts and Visual Studio, you can set up your development machine to access and install packages from your feeds and public registries such as NuGet.org. 

## Get source URL

To set up Visual Studio to access your feed as a package source, we must first get the *Source URL*:

[!INCLUDE [](../includes/nuget/nuget-consume-endpoint.md)]

## Set up Visual Studio

#### [Windows](#tab/windows/)

1. Open Visual Studio, and then select **Tools** > **Options**.

1. Select **NuGet Package Manager**, and then select **Package Sources**.

1. Enter your feed's **Name** and the **Source** URL you copied in the previous step, and then select the green (+) sign to add a new package source.

1. If you enabled [upstream sources](upstream-sources.md) in your feed, clear the **nuget.org** checkbox.

1. Select **OK** when you're done.

    :::image type="content" source="../media/vs-addsource.png" alt-text="Screenshot showing how to add a new package source in Visual Studio - Windows":::

#### [Mac](#tab/macOS/)

1. Create a new [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

1. Open Visual Studio for Mac, and then navigate to **Visual Studio** > **Preferences**.

1. Select **NuGet** > **Sources**, and then select **Add** to set up a new source.

1. Provide a **Name** for your new source and enter the source URL in the **Location** field. For **UserName**, you can enter any string, and for **Password**, paste the personal access token you created earlier. Select **OK** when you're done.

1. If you have upstream sources enabled in your feed, clear the **nuget.org** checkbox.

1. Select **Add Source** when you're done.

    :::image type="content" source="media/add-new-source-mac.png" alt-text="A screenshot showing how to add a new package source in Visual Studio for Mac.":::

---

## Install packages from your feed

Now that you set up Visual Studio and added a new package source pointing to your feed, you can now search and install packages right from Visual Studio package manager.

#### [Windows](#tab/windows/)

1. Open Visual Studio, and then right-click on your project in the Solution Explorer, then select **Manage NuGet Packages...**.

1. Select **Browse**, and then select your feed from the **Package source** dropdown menu.
    
    :::image type="content" source="../media/select-pkg-src.png" alt-text="A screenshot showing the package source dropdown menu in Visual Studio.":::

1. Use the search bar to find packages in your feed.

#### [Mac](#tab/macOS/)

1. Open Visual Studio for Mac, right-click on the **Dependencies** folder in your solution, and then select **Manage NuGet Packages...**.

1. Select the **Browse** tab, and then select your feed from the **Package source** dropdown at the bottom.

1. Use the search bar to find packages in your feed.

    :::image type="content" source="media/search-package-sources-mac.png" alt-text="A screenshot showing how to search for packages in Visual Studio for Mac.":::

---

> [!NOTE]
> If you enabled [upstream sources](../nuget/upstream-sources.md), any packages that haven't been saved to your feed (by using them at least once) won't appear in the search result.

## Install packages from NuGet.org

1. Navigate to *NuGet.org* and search for the package you want to install.

1. Select **Package Manager**, and then copy the *Install-Package* command.

1. Open Visual Studio, and then select **Tools** > **NuGet Package Manager** > **Package Manager Console** to open the package manager console.

1. Paste the install command into the Package Manager Console and then press Enter.

## Related articles

- [Publish NuGet packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)
- [Publish and restore NuGet packages from the command line (NuGet.exe)](./publish.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
- [Configure upstream sources](../how-to/set-up-upstream-sources.md)
