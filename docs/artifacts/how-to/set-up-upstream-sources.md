---
title: Set up upstream sources for your feed
description: Learn how to set up external feeds and public registries as upstream sources for your Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 02/06/2026
monikerRange: "<=azure-devops"
---

# Set up upstream sources

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts upstream sources, you can simplify package management by using a single feed for both the packages you publish and those you consume from external feeds and public registries like *npmjs.com* and *NuGet.org*. When upstream sources are enabled, Azure Artifacts automatically saves a copy of any package installed to your feed. However, you must be a collaborator or higher to install packages from upstream sources.

> [!NOTE]
> Maven snapshots are not supported in upstream sources.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-a-feed). |

## Enable upstream sources for a new feed

If you don't have a feed yet, follow these steps to create a new feed and enable upstream sources:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Provide a **Name** for your feed and choose its **Visibility** and **Scope** settings. Make sure to select the **Include packages from common public sources** checkbox to enable upstream sources. 
    
1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-with-enabled-upstreams.png" alt-text="A screenshot showing how to create a new feed with upstream sources enabled in Azure Artifacts.":::

## Enable upstream sources for an existing feed

If you've created a feed without enabling upstream sources, you can enable it later to consume packages from common public sources. Follow these steps to enable upstream sources for an existing feed:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to open **Feed settings**.

1. Select **Upstream sources** > **Add Upstream**.

1. Select **Public source**, choose a **Public source** from the dropdown, then select **Add**.

1. Select **Save** in the top-right corner to apply the changes.

> [!NOTE]
> You must be a feed owner or feed administrator to add or remove upstream sources.

## Add a feed from the same organization as an upstream source

Follow these steps to add a feed from the same organization as an upstream source:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select the gear icon button![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

1. Select **Azure Artifacts feed in this organization**.

1. From the dropdown menu, select the feed you want to add as an upstream source. Select the desired **View**, then choose the **Package type(s)** to include. Optionally, you can also modify the upstream source name.

1. Select **Add** when you're done.

    :::image type="content" source="../media/add-upstream-same-org.png" alt-text="A screenshot displaying how to add a feed from your organization as an upstream source.":::

## Add a feed from a different organization as an upstream source

Follow these steps to add a feed from a different organization as an upstream source:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select the gear icon button![gear icon](../../media/icons/gear-icon.png) to access **Feed settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

1. Select **Azure Artifacts feed in another organization**.

1. Enter your **Azure Artifacts feed locator** using one of the following formats:

    - **Organization scoped feed**: 
        
        ```
        azure-feed://ORGANIZATION_NAME/FEED_NAME@VIEW
        ```
    
    - **Project scoped feed**: 
        
        ```
        azure-feed://ORGANIZATION_NAME/PROJECT_NAME/FEED_NAME@VIEW
        ```

1. Select the **Package type(s)** you want to use and provide a name for your upstream source.

1. Select **Add** when you're done.

    :::image type="content" source="../media/add-upstream-diff-org.png" alt-text="A screenshot displaying how to add a feed from a different organization as an upstream source.":::

> [!IMPORTANT]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** by navigating to **Feed Settings** > **Views** > Select the ellipsis button for the specified view > **Edit**.

## Examples

| NuGet | Npm | Python | Maven | Cargo | Universal Packages | PowerShell |
|------|-----|--------|-------|-------|--------------------|------------|
| [Use packages from NuGet.org](../nuget/upstream-sources.md) | [Use packages from npmjs.com](../npm/upstream-sources.md) | [Use packages from Python Package Index (PyPI)](../python/use-packages-from-pypi.md) | [Use packages from Maven Central](../maven/upstream-sources.md)<br>[Google Maven Repository](../maven/google-maven.md)<br>[Gradle Plugins](../maven/gradle-plugins.md)<br>[JitPack](../maven/jitpack-upstream.md) | [Use packages from Crates.io](../cargo/cargo-upstream-source.md) | [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md) | [Use packages from the PowerShell Gallery](../tutorials/powershell-upstream-source.md) |

> [!NOTE]
> To install packages from upstream sources, you must be a **Feed and Upstream Reader (Collaborator)**, **Feed Publisher (Contributor)**, or a **Feed Owner**.
> The first time a package is installed from an upstream source, a copy is automatically saved to the feed. Any packages already saved to the feed can then be used by **Feed Readers**.

## FAQs

##### Q: Why can’t I find my package even though I can see it in one of my feed's upstreams?

A: Packages from upstream sources become available in the feed soon after they're published, but they aren’t visible to readers until they’re saved to the feed.

A package is saved when a user with [Feed and Upstream Reader (Collaborator)](../feeds/feed-permissions.md#feed-roles-and-permissions) or higher permissions installs it. Azure Artifacts then automatically saves a copy of the package to the feed, making it permanently available to all readers and visible in the web UI.

##### Q: Why can’t I find the feed I want to configure as an upstream source?

A: If the feed is in a different organization, make sure that the target feed owner has shared a view with *All feeds and people in organizations associated with my Microsoft Entra tenant*. See [Add a feed in a different organization as an upstream source](../how-to/set-up-upstream-sources.md#add-a-feed-from-a-different-organization-as-an-upstream-source) for more details.

##### Q: What are feed views?

A: Feed views let you share a subset of package versions that have been tested and validated, excluding those still in development or not meeting quality criteria. See [What are feed views](../concepts/views.md) for more details.

##### Q: Can a user with the **Feed Reader** role download packages from an upstream source?

A: No. **Feed Reader** can only download packages that are already saved to the feed. Packages are saved when a **Feed and Upstream Reader (Collaborator)**, **Feed Publisher (Contributor)**, or **Feed Owner** installs them from an upstream source.

##### Q: What happens if a package saved from an upstream source is deleted or unpublished?

A: The package becomes unavailable for download, and the version number is permanently reserved. That version will no longer sync from upstream, but earlier and later versions remain unaffected.

##### Q: What happens if a package saved from an upstream source is deprecated?

A: A warning message is added to the package metadata. This warning appears whenever the package is viewed or installed from the feed.

## Related content

- [Use upstream sources in a public feed](public-feeds-upstream-sources.md)

- [Use packages from the NuGet Gallery](../nuget/upstream-sources.md)

- [Restore packages from upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)

