---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

To consume NuGet packages from your feed, you need to add the feed's NuGet endpoint as a package source in Visual Studio, as follows.

<a name="get-nuget-pkg-url"></a>

### 1. Get the feed's source URL

[!INCLUDE [get a NuGet URL](nuget-consume-endpoint.md)]

### 2. Set up Visual Studio

#### [Windows](#tab/windows/)

### Set up package source

1. Select **Tools** then **Options** in Visual Studio.
1. Expand the **NuGet Package Manager** and select **Package Sources**.
1. Select the green (+) sign to add a source.
1. Enter the feed's name and the source URL (step 1).
1. Select **Update**.
1. If you enabled upstream sources in your feed, clear the **nuget.org** check box.
1. Select **OK**.

    :::image type="content" source="../../media/vs-addsource.png" alt-text="Set up visual studio: Windows":::

<a name="mac-os"></a>

#### [macOS](#tab/macOS/)

### Set up package source

1. Create a [personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) PAT.
1. In visual studio, select **Preferences** from the menu bar.
1. Select **NuGet** then **Sources**.
1. Select **Add** and enter your feed's name, the source URL, a userName (any string), and your personal access token.
1. Select **OK**.
1. If you enabled upstream sources in your feed, clear the **nuget.org** check box.
1. Select **OK**.

    :::image type="content" source="../../media/vs-mac-settings.png" alt-text="Set up visual studio: macOS":::

<a name="consume-packages"></a>

---

### 3. Consume packages

You can now find and consume packages from your feed by using Visual Studio.

1. In Visual Studio, find your project in the Solution Explorer.
1. Right-click on your project, select **References** then **Manage NuGet Packages**
1. Select your feed from the **Package source** drop-down list.
1. Use the search bar to look for packages.

    :::image type="content" source="../../media/select-pkg-src.png" alt-text="Select feed source":::

If you're using [upstream sources](../../nuget/upstream-sources.md), any packages from upstream sources that haven't been saved to your feed yet (by using them at least once) won't appear in the Package Manager search result. To install those packages:

1. Copy the **Install-Package** command from the public registry (NuGet.org), .
1. Select **Tools** then **NuGet Package Manager** to open the NuGet package manager.
1. Paste the command into the Package Manager Console and select **run**.
