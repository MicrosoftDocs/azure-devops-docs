---
title: What are Azure Artifacts feeds?
description: Understand the differences between project-scoped and organization-scoped Azure Artifacts feeds. Learn the steps to create, delete, and restore feeds. 
ms.assetid: 21673f53-68a3-4d44-866e-ad29435a3fde
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 06/03/2024
monikerRange: '<= azure-devops'
---

# What are Azure Artifacts feeds?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts feeds are organizational constructs that allow you to store, manage, and share your packages while controlling access. Feeds are not limited to specific package types; you can store various types, such as npm, NuGet, Maven, and Python packages, in a single feed.

## Project-scoped vs Organization-scoped feeds

Organization-scoped feeds are accessible and viewable from any project within the organization. Project-scoped feeds on the other hand, are restricted to being viewed solely within the hosting project.

It's important to note that organization-scoped feeds cannot be converted into project-scoped feeds. Furthermore, only project-scoped feeds have the capability to be designated as [public feeds](#public-feeds). For a detailed comparison between project-scoped and organization-scoped feeds, refer to [Feeds scope](../feeds/project-scoped-feeds.md).

> [!NOTE]
> To access a feed in a different organization, a user must be granted access to the project hosting that feed.

## Create a new feed

::: moniker range="azure-devops"

Follow the instructions below and choose the appropriate scope to create a new project-scoped or organization-scoped feed:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a descriptive **Name** for your feed and define its **Visibility** (who can use your feed). Specify the **Scope** of your feed, and if you wish to include packages from public sources, mark the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-azure-devops.png" alt-text="A screenshot that shows how to create a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022 || azure-devops-2020"

Follow the instructions below and choose the appropriate scope to create a new project-scoped or organization-scoped feed:

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a descriptive **Name** for your feed and define its **Visibility** (who can use your feed). Specify the **Scope** of your feed, and if you wish to include packages from public sources, mark the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2022.png" alt-text="A screenshot that shows how to create a new feed in Azure DevOps Server 2022 and Server 2020.":::

::: moniker-end

> [!NOTE]
> Public feeds are only available in Azure DevOps Services.

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