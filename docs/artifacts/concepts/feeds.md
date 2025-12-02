---
title: What are Azure Artifacts feeds?
description: Learn what Azure Artifacts feeds are, explore the different feed types and how to manage them in Azure Artifacts.  
ms.assetid: 21673f53-68a3-4d44-866e-ad29435a3fde
ms.custom: peer-review-program
ms.service: azure-devops-artifacts
ms.topic: overview
ms.date: 12/02/2025
monikerRange: '>= azure-devops-2020'
---

# What are Azure Artifacts feeds?

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts feeds are organizational constructs that allow you to store, manage, and share your packages while controlling access. A single feed can host multiple package types, including npm, NuGet, Maven, Python, Cargo and Universal Packages packages.
Azure Artifacts feeds also support saving packages from public registries like *nuget.org* through upstream sources, ensuring continued access to your packages even if the public source becomes temporarily unavailable.

## Feed types

Azure Artifacts feeds can be scoped to an organization or a project. A feed can also be public if it's scoped to a public project:

**Project-scoped feeds**: Feeds scoped to a project. They’re only viewable within the hosting project, and only project-scoped feeds can be designated as[public feeds](#public-feeds) by switching the project's visibility to **Public** in Project Settings.

**Organization-scoped feeds**: Feeds scoped to an organization. They’re viewable from any project within the organization. Organization-scoped feeds **cannot** be converted into project-scoped feeds.

**Private feeds**: Can be either project-scoped (private project) or organization-scoped. Packages in a private feed are available only to authenticated users with at least **Feed Reader** permission.

**Public feeds**: Feeds scoped to a **public** project. Packages in a public feed are available to both authenticated and anonymous users.

See [Feed scoped](../feeds/project-scoped-feeds.md) to learn more about the differences between project-scoped feeds and organization scoped feeds.

## Create a new feed

Follow these steps and choose the appropriate scope to create a project-scoped or organization-scoped feed:

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Provide a **Name** for your feed, define its **Visibility** (who can view packages in your feed), and specify the **Scope** of your feed (project-scoped or organization-scoped). To enable upstream sources and include packages from public sources, check the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-azure-devops.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022 || azure-devops-2020"

1. Sign in to your Azure DevOps collection, then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, define its **Visibility** (who can view packages in your feed), and specify the **Scope** of your feed (project-scoped or organization-scoped). To enable upstream sources and include packages from public sources, check the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2022.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Server 2022 and Server 2020.":::

::: moniker-end

::: moniker range="azure-devops"

## Public feeds

Public feeds allow you to share your packages publicly with anyone on the internet. Users do not need to be members of your organization, nor do they need to log in to the Azure DevOps portal to access the packages.

Public feeds are **project-scoped** and inherit the visibility settings of the hosting project. Here are some important points to note about public feeds:

- Public feeds can only be created within public projects.
- Public feeds are not intended to replace existing package management platforms (such as NuGet.org, npmjs.com, etc.).
- Public users currently cannot download universal packages, but all other package types are supported for public access.

> [!NOTE]
> All feed views in a public feed are accessible to everyone on the internet.

## Create a public feed

[!INCLUDE [allow-public-project-policy](../../organizations/projects/includes/allow-public-project-policy.md)]

Public feeds are project-scoped feeds in a public project. Follow the instructions below to create a new public feed:

1. Navigate to your Azure DevOps project. Make sure that your project is **Public** in order to create a public feed. Once there, select **Artifacts** > **Create Feed**.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="A screenshot showing the create feed button.":::

1. Enter a **Name** for your feed, and then select **Project** for the feed's scope. Select **Create** when you're done.

    :::image type="content" source="../media/new-public-feed.png" alt-text="A screenshot that shows how to create a new public feed.":::

::: moniker-end

## Delete a feed

> [!NOTE]
> You must be a **Feed Owner** to delete a feed.

1. Navigate to your Azure DevOps project, select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to your feed's settings.

1. Select **Delete feed**, and then select **Delete** once more to confirm.

    :::image type="content" source="media/delete-warning.png" alt-text="A screenshot displaying the warning message that appears before deleting a feed.":::

## Restore deleted feeds

If you accidentally delete a feed, Azure Artifacts offers a 30-days window to restore it to its original state. After this period, the feed will be permanently deleted. During the recovery window, the feed's name remains reserved, packages are unavailable for download, and write access is suspended.

To access feeds pending permanent deletion, navigate to the feed picker dropdown menu and select the **Deleted Feeds** tab.

1. Navigate to your Azure DevOps project, and then select **Artifacts**.

1. Select the feed picker dropdown menu, and then select the **Deleted Feeds** tab.

    :::image type="content" source="media/deleted-feeds.png" alt-text="A screenshot that shows how to access feeds pending permanent deletion.":::

1. Select the feed you want to restore, and then select **Feed Settings**. Select **Restore Feed** when you're ready.

    :::image type="content" source="media/feed-settings-button.png" alt-text="A screenshot displaying the feed settings button for a feed pending permanent deletion.":::

## Permanently delete a feed

A feed pending deletion will continue to use storage space. You must be a feed owner to permentantly delete a feed. To delete your feed before the 30-day period ends, follow these steps:

1. Navigate to your Azure DevOps project, and then select **Artifacts**.

1. Select the feed picker dropdown menu, and then select the **Deleted Feeds** tab.

1. Select the feed you want to restore, and then select **Feed Settings**.

1. Select **Permanently Delete Feed**, and then select **Delete**.

> [!NOTE]
> Once a feed is permanently deleted, users will no longer have access to view or restore its packages. The feed's name will become available for reuse 15 minutes after deletion.

## Related articles

- [Monitor Artifacts storage consumption](../artifact-storage.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Use upstream sources in a public feed](../how-to/public-feeds-upstream-sources.md)
