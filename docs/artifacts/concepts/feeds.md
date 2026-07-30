---
title: What are Azure Artifacts feeds?
description: Learn what Azure Artifacts feeds are, explore the different feed types and how to manage them in Azure Artifacts.  
ms.custom: peer-review-program
ms.service: azure-artifacts
ms.topic: overview
ms.date: 07/22/2026
monikerRange: "<=azure-devops"
---

# What are Azure Artifacts feeds?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [public-projects-retirement](../../organizations/projects/includes/public-projects-retirement.md)]

Azure Artifacts feeds are organizational constructs that allow you to store, manage, and share your packages while controlling access. A single feed can host multiple package types, including npm, NuGet, Maven, Python, Cargo, and Universal Packages packages.
Azure Artifacts feeds also support saving packages from public registries like *nuget.org* through upstream sources, ensuring continued access to your packages even if the public source becomes temporarily unavailable.

## Feed types

You can scope Azure Artifacts feeds to an organization or a project. A feed can also be public if it's scoped to an existing public project:

**Project-scoped feeds**: Feeds scoped to a project. They're only viewable within the hosting project. Only project-scoped feeds hosted in an existing public project can function as [public feeds](#public-feeds).

**Organization-scoped feeds**: Feeds scoped to an organization. They’re viewable from any project within the organization. Organization-scoped feeds **cannot** be converted into project-scoped feeds.

**Private feeds**: Can be either project-scoped (private project) or organization-scoped. Packages in a private feed are available only to authenticated users with at least **Feed Reader** permission.

**Public feeds**: Feeds scoped to an existing **public** project. Both authenticated and anonymous users can access packages in a public feed while the hosting project remains public. Starting in 2027, existing public projects will automatically convert to private, and public feeds will no longer be publicly accessible.

See [Feed scoped](../feeds/project-scoped-feeds.md) to learn more about the differences between project-scoped feeds and organization scoped feeds.

## Create a new feed

Follow these steps and choose the appropriate scope to create a project-scoped or organization-scoped feed:

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Provide a **Name** for your feed, define its **Visibility** (who can view packages in your feed), and specify the **Scope** of your feed (project-scoped or organization-scoped). To enable upstream sources and include packages from public sources, check the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-devops-services.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="=azure-devops-2022"

1. Sign in to your Azure DevOps collection, then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, define its **Visibility** (who can view packages in your feed), and specify the **Scope** of your feed (project-scoped or organization-scoped). To enable upstream sources and include packages from public sources, check the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2022.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Server 2022 and Server 2020.":::

::: moniker-end

::: moniker range="azure-devops"

## Public feeds

Public feeds allow you to share your packages publicly with anyone on the internet. Users do not need to be members of your organization, or sign in to the Azure DevOps portal to access packages in a public feed.

Public feeds are **project-scoped** and inherit the visibility settings of the hosting project. Here are some important key points:

- You can only create public feeds within existing public projects.

- Starting in 2027, Azure DevOps will automatically convert existing public projects to private. When that change happens, associated public feeds will no longer be publicly accessible.

- Public feeds are not intended to replace existing public registries such as NuGet.org, npmjs.com, etc..

- Public users cannot download universal Packages, but all other package types are supported for public access.

> [!NOTE]
> Everyone on the internet can access all feed views in a public feed while the hosting project remains public. Starting in 2027, Azure DevOps will automatically convert existing public projects to private, and public feeds will no longer be publicly accessible.

## Create a public feed

[!INCLUDE [allow-public-project-policy](../../organizations/projects/includes/allow-public-project-policy.md)]

Public feeds are project-scoped feeds in an existing public project. Follow these steps to create a new public feed:

1. Sign in to your Azure DevOps organization and go to your existing public project.

1. Select **Artifacts** > **Create Feed**.

1. Provide a **Name** for your feed, then select **Project** for the feed's scope. 

1. Select **Create** when you're done.

    :::image type="content" source="../media/new-public-feed.png" alt-text="A screenshot displaying how to create a new public feed in Azure DevOps Services.":::

::: moniker-end

## Delete a feed

> [!NOTE]
> You must be a **Feed Owner** to delete a feed.

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed Settings**.

1. Select **Delete feed**, then select **Delete** again to confirm.

    :::image type="content" source="media/delete-warning.png" alt-text="A screenshot displaying the warning message that appears before deleting a feed.":::

## Restore deleted feeds

If you accidentally delete a feed, Azure Artifacts offers a 30-days window to restore it to its original state. After this period, the feed is permanently deleted. During the recovery window:

- The feed name remains reserved.

- Packages are unavailable for download.

- Write access is suspended.

To restore a feed pending permanent deletion:

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, open the feed picker dropdown menu, and select the **Deleted Feeds** tab.

    :::image type="content" source="media/deleted-feeds.png" alt-text="A screenshot that shows how to access feeds pending permanent deletion.":::

1. Select the feed you want to restore, then select **Feed Settings**, then select **Restore Feed** when you're ready to restore your feed.

    :::image type="content" source="media/feed-settings-button.png" alt-text="A screenshot displaying the feed settings button for a feed pending permanent deletion.":::

## Permanently delete a feed

A feed pending deletion continues to use storage space. You must be a **Feed Owner** to permentantly delete a feed. To delete your feed before the 30-day period ends, follow these steps:

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, open the feed picker dropdown menu, and select the **Deleted Feeds** tab.

1. Select the feed you want to delete, then select **Feed Settings**.

1. Select **Permanently Delete Feed**, and then select **Delete** to confirm.

> [!NOTE]
> Once a feed is permanently deleted, users will no longer have access to view or restore its packages. The feed name will become available for reuse approximately 15 minutes after deletion.

## Related content

- [What are feed views?](views.md)

- [Monitor Artifacts storage consumption](../artifact-storage.md)

- [Promote packages and manage feed views](../feeds/views.md)
