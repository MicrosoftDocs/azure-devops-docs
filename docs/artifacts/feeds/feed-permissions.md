---
title: Configure permissions
description: How to configure permissions for Artifacts feeds, views, and pipelines access
ms.assetid: 70313C3C-2E52-4FFC-94C2-41F1E37C9D26
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 03/15/2024
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

    ::: moniker range="< azure-devops-2022"
    > [!NOTE]
    > By default, the Azure Artifacts settings icon is only visible to feed owners and [project collection administrators](../../organizations/security/look-up-project-collection-administrators.md).
    ::: moniker-end

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

::: moniker range="azure-devops"

> [!NOTE]
> By default, the *Project Collection Build Service* (org-scoped) and the project-level *Build Service* (project-scoped) are assigned the **Feed and Upstream Reader (Collaborator)** role.

::: moniker-end

:::moniker range=">= azure-devops-2022"

> [!NOTE]
> By default, the *Project Collection Build Service* is automatically assigned the **Feed and Upstream Reader (Collaborator)** role for newly created collection-scoped feeds.

::: moniker-end

## Permissions table

| Permission | Feed Reader | Feed and Upstream Reader (Collaborator) | Feed Publisher (Contributor) | Feed Owner |
| ------------------------------------ | -------- | -------- | ---------| -------- |
| List packages in the feed            | &#x2713; | &#x2713; | &#x2713; | &#x2713; |
| Download/install/restore packages    | &#x2713; | &#x2713; | &#x2713; | &#x2713; |
| Save packages from upstream sources  |          | &#x2713; | &#x2713; | &#x2713; |
| Publish packages                     |          |          | &#x2713; | &#x2713; |
| Promote packages to a view           |          |          | &#x2713; | &#x2713; |
| Deprecate/unlist/yank packages       |          |          | &#x2713; | &#x2713; |
| Delete/unpublish packages            |          |          |          | &#x2713; |
| Add/remove upstream sources          |          |          |          | &#x2713; |
| Allow external package versions      |          |          |          | &#x2713; |
| Edit feed settings                   |          |          |          | &#x2713; |
| Delete a feed                        |          |          |          | &#x2713; |

> [!NOTE]
> [Azure Artifacts Administrators](#azure-artifacts-settings), including **Project Collection Administrators**, automatically have the **Feed Owner** role on all feeds.

> [!NOTE]
> In Azure Artifacts, feeds may be scoped to a single project or to the entire organization.
> To access a project-scoped feed, a user must also have access to the project containing that feed.

## Feed views settings

Feed views enable users to share certain packages while keeping others private. A common scenario for using a feed view is sharing a package version that has already been tested and validated but keeping packages under development private.

By default, there are three views in a feed: **@Local**, **@Prerelease**, and **@Release**. The latter two are suggested views that you can rename or delete as desired. The **@Local** view is the default view and it includes all the packages published to the feed as well as all the packages downloaded from upstream sources.

> [!IMPORTANT]
> Users who have access to a specific view are able to access and download packages from the feed through that view even if they don't have direct access to that feed.
If you want to completely hide your packages, you must restrict access to both the feed and its views.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the gear icon to navigate to your feed's settings.

1. Select **Views**, and then select the ellipsis button, and then select **Edit** to modify its permission. To restrict access to your view, change its visibility to **specific people**.

    :::image type="content" source="media/edit-view-permission.png" alt-text="A screenshot showing how to change views visibility.":::

1. Select **Save** when you're done. The access permissions column should reflect your changes.

    :::image type="content" source="media/edit-views.png" alt-text="A screenshot showing the prerelease view permissions.":::

> [!NOTE]
> To add a feed from a different organization as an upstream source, the target feed owner needs to share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** by navigating to **Feed Settings** > **Views**, selecting the ellipsis next to the specified view, selecting **Edit**, and adjusting the permissions.

> [!IMPORTANT]
> Views inherit permissions from the parent feed. If you set a view's visibility to *Specific people* without specifying any users or groups, the view's permissions will default back to the permissions of its parent feed.

## Pipelines permissions

To access your feed from your pipeline, the [corresponding build identity](../../pipelines/process/access-tokens.md#scoped-build-identities) must have the necessary permissions.
If your pipeline is unable to access your feed, you might need to add the corresponding build identity to your feed's permissions.

> [!TIP]
> - The project-level build identity is named `[Project name] Build Service ([Organization name])`, for example `FabrikamFiber Build Service (codesharing-demo)`.
> - The organization-level build identity is named `Project Collection Build Service ([Organization name])`, for example `Project Collection Build Service (codesharing-demo)`.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed settings**.

1. Select **Permissions**, then select **Add users/groups**. Add your build identity and assign it the **Feed and Upstream Reader (Collaborator)** role. If your pipeline needs to publish packages to the feed, make sure that both the *Project Collection Build Service* and your *project's Build Service* identities have the **Feed Publisher (Contributor)** role. See the examples below to learn how to authenticate and publish packages to your feed with Azure Pipelines.

    :::moniker range=">= azure-devops-2022"

    :::image type="content" source="media/feed-pipelines-permissions.png" alt-text="A screenshot showing how to set up the build identities.":::

    ::: moniker-end


#### Examples

### [NuGet](#tab/nuget)

- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)

### [Npm](#tab/npm)

- [Publish npm packages with Azure Pipelines](../../pipelines/artifacts/npm.md)

### [Maven](#tab/maven)

- [Publish Maven artifacts with Azure Pipelines](../../pipelines/artifacts/publish-maven-artifacts.md)

### [Python](#tab/python)

- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)

### [Cargo](#tab/cargo)

- [Publish Cargo packages with Azure Pipelines](../../pipelines/artifacts/cargo-pipelines.md)

### [Universal Packages](#tab/universalpackages)

- [Publish Universal Packages with Azure Pipelines](../../pipelines/artifacts/universal-packages.md)

---

> [!NOTE]
> If you want to access a feed in a different project from your pipeline, and your pipeline uses the project-level build identity, you must set up the other project to grant that identity at least the "Read project-level information" permission.

## Related articles

- [Artifacts storage consumption](../artifact-storage.md).

- [Promote packages to a view](./views.md).

- [Set up upstream sources](../how-to/set-up-upstream-sources.md).

