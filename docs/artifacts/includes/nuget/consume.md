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

1. In Visual Studio, select **Tools**, and then **Options**.
1. Expand the **NuGet Package Manager** section, and then select **Package Sources**.
1. Enter the feed's **Name** and the **Source** URL, and then select the green (+) sign to add a source.
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

1. In Visual Studio, right-click on your project in the Solution Explorer, and then select **Manage NuGet Packages**.
1. Select **Browse**, and then select your feed from the **Package source** drop-down list
    :::image type="content" source="../../media/select-pkg-src.png" alt-text="Select feed source":::
1. Use the search bar to look for packages from your feed.

> [!NOTE]
> If you're using [upstream sources](../../nuget/upstream-sources.md), any packages from upstream sources that haven't been saved to your feed yet (by using them at least once) won't appear in the Package Manager search result. To install those packages:

#### Consume package from NuGet.org

1. Copy the **Install-Package** command from the public registry (NuGet.org).
1. Select **Tools** then **NuGet Package Manager** to open the NuGet package manager.
1. Paste the command into the Package Manager Console and select **run**.
