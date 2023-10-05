---
title: Set up upstream sources for your feed
description: How to configure upstream sources for your Azure Artifacts feeds
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 02/16/2022
monikerRange: '<= azure-devops'
---

# Configure upstream sources

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With upstream sources, you can use a single feed to store the packages you generate and the packages you consume from public registries such as npmjs.com, NuGet.org, Maven Central, and PyPI.org. Once you've enabled an upstream source, every time you install a package from the public registry, Azure Artifacts will save a copy of that package in your feed.

## Create a new feed and enable upstream sources

1. From within your project, select **Artifacts**.

    :::image type="content" source="../media/goto-feed-hub-azure-devops-newnav.png" alt-text="Screenshot of Artifacts button.":::

1. Select **Create Feed**.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="Screenshot of the create feed button.":::

1. Give your feed a **Name** and choose its **visibility**, and **scope** settings. Make sure you check the  **Include packages from common public sources** checkbox to enable upstream sources.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="Screenshot showing the create new feed window panel.":::

1. Select **Create** when you are done.

> [!IMPORTANT]
> Maven snapshots are not supported in upstream sources.

## Enable upstream sources in an existing feed

> [!NOTE]
> Custom public upstream sources are only supported with npm registries.

1. Select the ![gear icon](../../media/icons/gear-icon.png) button to access your feed's settings.

1. Select **Upstream sources**.

1. Select **Add upstream source**.

1. Select **Public source**, and then select the **Public source**. (Example *Maven Central (https://repo.maven.apache.org/maven2/)* for Maven central)

1. Select **Add** when you are done.

> [!NOTE]
> Azure Artifacts support Maven Central, Google Maven Repository, Gradle Plugins, and JitPack as upstream sources for Maven.

## Add a feed in your organization as an upstream source

1. Select the ![gear icon](../../media/icons/gear-icon.png) button to access your feed's settings.

1. Select **Upstream sources**.

1. Select **Add Upstream**.

1. Select **Azure Artifacts feed in this organization**.

1. Select the feed you would like to add from the dropdown menu.

1. Select the package types you want to use, select the **View** and name your upstream source.

1. Select **Save** when you are done.

    :::image type="content" source="../media/add-upstream-same-org.png" alt-text="A screenshot showing how to add a feed in your organization as an upstream source.":::

## Add a feed in a different organization as an upstream source

> [!NOTE]
> Universal Packages are only supported in upstream sources within the same organization.

1. Select the ![gear icon](../../media/icons/gear-icon.png) button to access your feed's settings.

1. Select **Upstream sources**.

1. Select **Add Upstream**.

1. Select **Azure Artifacts feed in another organization**.

1. Enter your **Azure DevOps Services feed locator**. Example: *azure-feed://myOrg/myProject/myFeed@local*.

1. Select the **Package type(s)** you want to use and enter an **Upstream source name**.

1. Select **Save** when you are done.

    :::image type="content" source="../media/add-upstream-diff-org.png" alt-text="A screenshot showing how to add a feed in a different organization as an upstream source.":::

## Example: install NuGet packages from upstream sources with Visual Studio

Using Visual Studio, we can now install packages from the upstream sources we configured:

1. Navigate to NuGet.org, find the package you want to install, and then copy the `Install-Package` command.
1. In Visual Studio, select **Tools** > **NuGet Package Manager** > **Package Manager Console**.
1. Paste the install command into the Package Manager Console and press ENTER to run it.

## Example: install npm packages from upstream sources using the CLI

Run the following command in an elevated command prompt window to install your npm package from upstream.

```Command
npm install --save <package>
```

> [!NOTE]
> You must be a **Collaborator**, a **Contributor**, or an **Owner** to install new packages from upstream. A copy of each upstream package is saved to the feed on first use. Packages already saved from upstream sources can be used by feed **Readers**.

## Related articles

- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)
- [Use feed views to share packages](../feeds/views.md)
- [Configure permissions](../feeds/feed-permissions.md)
