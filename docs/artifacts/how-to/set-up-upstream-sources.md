---
title: Set up upstream sources for your feed
description: How to set up external feeds and public registries as upstream sources for your feed
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 03/21/2024
monikerRange: '>= azure-devops-2019'
---

# Set up upstream sources

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

With Azure Artifacts upstream sources, you can streamline your package management by using a single feed to store both the packages you publish and those you consume from external feeds and public registries such as npmjs.com, NuGet.org. When an upstream source is enabled on your feed, Azure Artifacts will automatically save a copy of any package installed by a collaborator or higher from upstream.

## Enable upstream sources in a new feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed and select its **Visibility** and **Scope** settings. Make sure to check the **Include packages from common public sources** checkbox to enable upstream sources. 
    
1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a new feed.":::

> [!IMPORTANT]
> Maven snapshots are not supported in upstream sources.

## Enable upstream sources in an existing feed

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to your feed settings.

1. Select **Upstream sources**, and then select **Add upstream source**.

1. Select **Public source**, and then select a **Public source** from the dropdown menu.

1. Select **Add** when you're done, and then select **Save** once more in the top right corner to preserve your changes.

> [!NOTE]
> Custom public upstream sources are only supported with npm registries.

## Add a feed in the same organization as an upstream source

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select the gear icon button![gear icon](../../media/icons/gear-icon.png) to access your feed's settings.

1. Select **Upstream sources**, and then select **Add Upstream**.

1. Select **Azure Artifacts feed in this organization**.

1. Select the desired **Feed** from the dropdown menu to add it as an upstream source. Then, select the **View** and choose the **Package type(s)** you wish to use. Optionally, you can also modify the name of your upstream source.

1. Select **Add** when you're done.

    :::image type="content" source="../media/add-upstream-same-org.png" alt-text="A screenshot showing how to add a feed in your organization as an upstream source.":::

## Add a feed in a different organization as an upstream source

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select the gear icon button![gear icon](../../media/icons/gear-icon.png) to access your feed's settings.

1. Select **Upstream sources**, and then select **Add Upstream**.

1. Select **Azure Artifacts feed in another organization**.

1. Enter your **Azure Artifacts feed locator** in the following format:

    - **Organization scoped feed**: 
        
        ```
        azure-feed://ORGANIZATION_NAME/FEED_NAME@VIEW
        ```
    
    - **Project scoped feed**: 
        
        ```
        azure-feed://ORGANIZATION_NAME/PROJECT_NAME/FEED_NAME@VIEW
        ```

1. Select the **Package type(s)** you wish to use and provide a name for your upstream source.

1. Select **Add** when you're done.

    :::image type="content" source="../media/add-upstream-diff-org.png" alt-text="A screenshot showing how to add a feed in a different organization as an upstream source.":::

## Examples

# [NuGet](#tab/nuget)

- [Use packages from NuGet.org](../nuget/upstream-sources.md)

# [Npm](#tab/npm)

- [Use packages from npmjs.com](../npm/upstream-sources.md)

# [Python](#tab/python)

- [Use packages from Python package index (PyPI)](../python/use-packages-from-pypi.md)

# [Maven](#tab/maven)

- [Use packages from Maven Central](../maven/upstream-sources.md)

- [Use packages from Google Maven Repository](../maven/google-maven.md)

# [Cargo](#tab/cargo)

- [Use packages from Crates.io](../cargo/cargo-upstream-source.md)

# [Universal Packages](#tab/universalpackages)

- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)

# [PowerShell Gallery](#tab/powershellgallery)

- [Use packages from PowerShell Gallery](../tutorials/powershell-upstream-source.md)

---

> [!NOTE]
> You must be a **Feed and Upstream Reader (Collaborator)**, a **Feed Publisher (Contributor)**, or a **Feed Owner** to install new packages from upstream. A copy of each upstream package is saved to the feed on first use. Packages already saved from upstream sources can be used by **Feed Readers**.

## Related articles

- [Search for packages in upstream sources](./search-upstream.md)
- [Configure permissions](../feeds/feed-permissions.md)
- [Use feed views to share packages](../feeds/views.md)
