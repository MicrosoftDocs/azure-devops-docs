---
title: Configure permissions
description: How to configure permissions for Artifacts feeds, views, and pipelines access
ms.assetid: 70313C3C-2E52-4FFC-94C2-41F1E37C9D26
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 06/20/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Manage permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables you to publish, consume, and store various types of packages in your feed. By configuring permissions for your feed, you can manage access to your packages and control who can interact with them.

## Azure Artifacts settings

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the Azure Artifacts settings icon on the right.

    :::image type="content" source="media/configure-artifacts-settings.png" alt-text="A screenshot showing how to access Azure Artifacts settings.":::

    > [!NOTE]
    > By default, the Azure Artifacts settings icon is only visible to feed owners and [project collection administrators](../../organizations/security/look-up-project-collection-administrators.md).

1. Choose the users or groups who should have the ability to create and/or administer feeds, and then select **Save** when you're done. 

    :::image type="content" source="media/artifact-feed-settings.png" alt-text="Screenshot showing how to set up Azure Artifacts settings.":::

## Feed settings

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the gear icon to navigate to your feed's settings.

    :::image type="content" source="../media/feed-settings.png" alt-text="A screenshot showing how to navigate to the feed's settings.":::

1. Select **Permissions**, and then select **Add users/groups**.

    :::image type="content" source="media/feed-permissions.png" alt-text="A screenshot showing how to access feed permissions.":::

1. Add new user(s)/group(s) and choose the appropriate **Role** for them.

    :::image type="content" source="media/add-users-groups-dialogue.png" alt-text="Screenshot showing how to add new users or groups.":::

1. Select **Save** when you're done.

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release**.

1. Select **Packages**, and then select the gear icon to navigate to your feed's settings. 

1. Select **Permissions**, and then select **Add user/group**.

    :::image type="content" source="media/editfeeddialog1.png" alt-text="A screenshot showing feed permissions in TFS.":::

1. Add new user(s)/group(s) and choose the appropriate **Role** for them.

1. Select **Save** when you're done.

::: moniker-end

> [!NOTE]
> By default, the *Project Collection Build Service* (org-scoped) and the project-level *Build Service* (project-scoped) are assigned the **Collaborator** role.

## Permissions table

|                   Permission                  |  Reader  | Collaborator | Contributor |   Owner  |  Administrator  |
| --------------------------------------------- | -------- | ------------ | ----------- | -------- | --------------- |
| List/install/restore packages                 | &#x2713; |   &#x2713;   |   &#x2713;  | &#x2713; |     &#x2713;    |
| Publish packages                              |          |              |   &#x2713;  | &#x2713; |     &#x2713;    |
| Unlist packages (NuGet)                       |          |              |   &#x2713;  | &#x2713; |     &#x2713;    |
| Delete packages                               |          |              |             | &#x2713; |     &#x2713;    |
| Deprecate packages (Npm)                      |          |              |   &#x2713;  | &#x2713; |     &#x2713;    |
| Unpublish packages (Npm)                      |          |              |             | &#x2713; |     &#x2713;    |
| Promote packages to a view                    |          |              |   &#x2713;  | &#x2713; |     &#x2713;    |
| Add/remove upstream sources                   |          |              |             | &#x2713; |     &#x2713;    |
| Allow external package versions               |          |              |             | &#x2713; |     &#x2713;    |
| Save packages from upstream sources           |          |   &#x2713;   |   &#x2713;  | &#x2713; |     &#x2713;    |
| Edit feeds settings                           |          |              |             | &#x2713; |     &#x2713;    |

> [!NOTE]
> To access a project-scoped feed, a user must also have access to the project hosting that feed.

## Feed views settings

Feed views enable users to share certain packages while keeping others private. A common scenario for using a feed view is sharing a package version that has already been tested and validated but keeping packages under development private.

By default, there are three views in a feed: **@local**, **@prerelease**, and **@release** view. The latter two are suggested views that you can rename or delete as desired. The **@local** view is the default view and it includes all the packages published to the feed as well as all the packages downloaded from upstream sources.

> [!IMPORTANT]
> Users who have access to a specific view are able to access and download packages from the feed through that view even if they don't have direct access to that feed.
If you want to completely hide your packages, you must restrict access to both feed and views.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the gear icon to navigate to your feed's settings.

1. Select **Views**, and then select the ellipsis button, and then select **Edit** to modify its permission. To restrict access to your view, change its visibility to **specific people**.

    :::image type="content" source="media/edit-view-permission.png" alt-text="A screenshot showing how to change views visibility.":::

1. Select **Save** when you're done. The access permissions column should reflect your changes.

    :::image type="content" source="media/edit-views.png" alt-text="A screenshot showing the prerelease view permissions.":::

> [!IMPORTANT]
> Views inherit permissions from the parent feed. If you set a view's visibility to *Specific people* without specifying any users or groups, the view's permissions will default back to the permissions of its parent feed.

## Pipelines permissions

To access your feed from your pipeline, the corresponding build identity must have the necessary permissions. By default, feeds have the *Project Collection Build Service* role set to *Collaborator*. However, if you have configured your pipeline to run at [project-scope](../../pipelines/process/access-tokens.md#job-authorization-scope), you will need to add the project-level build identity as a *Reader* or *Contributor*. The project-level build identity is named as follows: `[Project name] Build Service ([Organization name])`. Example: FabrikamFiber Build Service (codesharing-demo).

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed settings**.

1. Select **Permissions**, and then select **Add users/groups**.  Add your build identity and set its role to a **Contributor**.

    :::image type="content" source="media/feed-pipelines-permissions.png" alt-text="A screenshot showing the build identity permission.":::

> [!NOTE]
> If you want to access a feed in a different project from your pipeline, you must configure the other project to provide read/write access to the build service.

## Related articles

- [Artifacts storage consumption](../artifact-storage.md).

- [Promote packages to a view](./views.md).

- [Set up upstream sources](../how-to/set-up-upstream-sources.md).

