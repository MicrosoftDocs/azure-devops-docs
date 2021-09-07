---
title: Install NuGet packages with Visual Studio
description: How to use Visual Studio to consume NuGet packages
ms.assetid: BF919E28-65C2-40E3-8A49-5BF0DA3DE598
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 09/07/2021
monikerRange: '>= tfs-2017'
---

# Use NuGet packages in Visual Studio

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

Using Azure Artifacts and Visual Studio, you can set up your development machine to access and install packages from your feeds and public registries such as NuGet.org. 

## Get source URL

To connect Visual Studio to our feed, we must first get the *Source URL*:

[!INCLUDE [Get source URL](nuget-consume-endpoint.md)]

## Set up Visual Studio

#### [Windows](#tab/windows/)

1. In Visual Studio, select **Tools**, and then select **Options**.

1. Select **NuGet Package Manager**, and then select **Package Sources**.

1. Enter the feed's **Name** and **Source** URL, and then select the green (+) sign to add a new package source.

1. If you enabled upstream sources in your feed, clear the **nuget.org** checkbox.

1. Select **OK** when you are done.

    :::image type="content" source="../../media/vs-addsource.png" alt-text="Screenshot showing how to add a new package source in Visual Studio - Windows":::

<a name="mac-os"></a>

#### [macOS](#tab/macOS/)

1. Create a [personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) PAT.

1. In visual studio, select **Preferences** from the menu bar.

1. Select **NuGet**, and then select **Sources**.

1. Select **Add**, and then enter your feed's name, the source URL, a userName (any string), and your personal access token.

1. Select **OK**.

1. If you enabled upstream sources in your feed, clear the **nuget.org** checkbox.

1. Select **OK** when you are done.

    :::image type="content" source="../../media/vs-mac-settings.png" alt-text="Set up visual studio: macOS":::

---




[!INCLUDE [](../includes/nuget/consume.md)]
