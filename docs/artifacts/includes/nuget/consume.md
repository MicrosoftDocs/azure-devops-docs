---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

To consume NuGet packages from our feed, we need to add the feed's NuGet endpoint as a package source in Visual Studio.

<a name="get-nuget-pkg-url"></a>

### 1. Get the feed's source

[!INCLUDE [get a NuGet URL](nuget-consume-endpoint.md)]

### 2. Set up Visual Studio

#### [Windows](#tab/windows/)

### Add feed to NuGet configuration

1. Select **Tools** then **Options** in Visual Studio.
1. Expand the **NuGet Package Manager** and select **Package Sources**.
1. Select the green (+) sign to add a source.
1. Enter the feed's name and the source URL (step 1).
1. Select **Update**.
1. If you enabled upstream sources in your feed, clear the **nuget.org** check box.
1. Select **OK**.

    :::image type="content" source="../../media/vs-addsource.png" alt-text="Set up visual studio: Windows":::

<a name="mac-os"></a>

#### [MacOs](#tab/MacOs/)

### Add feed to NuGet configuration

1. Create a [personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) PAT.
1. In visual studio, select **Preferences** from the menu bar.
1. Select **NuGet** then **Sources**.
1. Select **Add** and enter your feed's name, the source URL, a userName (any string), and your personal access token.
1. Select **OK**.
1. If you enabled upstream sources in your feed, clear the **nuget.org** check box.
1. Select **OK**.

    :::image type="content" source="../../media/vs-mac-settings.png" alt-text="Set up visual studio: MacOs":::

<a name="consume-packages"></a>

## Consume packages

You can now discover and use packages in this feed. To add a package reference to a project:

1. Find your project in Solution Explorer.
2. Right-click **References**.
3. Select **Manage NuGet Packages**.
4. In the **Package source** drop-down list, select your feed.
5. Look for your package in the list.
   ![Select feed source](../../media/select-pkg-src.png)

If you're using [upstream sources](../../nuget/upstream-sources.md), package versions in the upstream source that haven't yet been saved into your feed (by using them at least once) won't appear in the NuGet Package Manager search. To install these packages:

1. On the upstream source (for example, nuget.org), copy the `Install-Package` command.
2. In Visual Studio, open the Package Manager Console from **Tools** > **NuGet Package Manager**.
3. Paste the `Install-Package` command into the Package Manager Console and run it.