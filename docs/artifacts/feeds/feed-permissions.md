---
title: Manage permissions
description: Learn how to configure permissions for Azure Artifacts, Azure Artifacts feeds, feed views, and pipelines access.
ms.service: azure-artifacts
ms.topic: overview
ms.date: 09/08/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Manage permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use Azure Artifacts permissions to control access to feeds, packages, views, and pipelines. This article explains the available permission levels for Azure Artifacts settings, feeds, views, and pipeline identities.

## Azure Artifacts settings

Use Azure Artifacts settings to control who can create feeds and who can administer feeds across Azure Artifacts.

> [!IMPORTANT]
> You must be a **Feed Owner** or a [Project Collection Administrator](../../organizations/security/look-up-project-collection-administrators.md) to configure Azure Artifacts settings.

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the **Azure Artifacts settings** icon on the right.

1. Choose **Who can create feeds** and **Who can administer feeds**, and then select **Save**.

    :::image type="content" source="media/artifact-feed-settings.png" alt-text="Screenshot showing how to set up Azure Artifacts settings.":::

## Feed settings

Use feed settings to manage feed-level access, package sharing, retention policies, view permissions, and upstream sources. To add users or groups to a feed:

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu. 

1. Select the gear icon to open **Feed settings**.

1. Select **Permissions**, then select **Add users/groups**.

    :::image type="content" source="media/feed-permissions.png" alt-text="Screenshot showing how to access feed permissions.":::

1. Add the user or group, and then assign the appropriate role:

    - **Feed Owner**: Can manage feed settings, manage upstream sources, allow external package versions, and delete packages or the feed itself, in addition to all **Contributor** permissions.
    - **Feed Publisher (Contributor)**: Can publish, promote, deprecate, and unlist packages, in addition to all **Collaborator** permissions.
    - **Feed and Upstream Reader (Collaborator)**: Can save packages from upstream sources, in addition to all **Reader** permissions.
   - **Feed Reader**: Can list, view, and download packages from the feed.

1. Select **Save** when you're ready.

::: moniker range="azure-devops"

> [!NOTE]
> By default, the *Project Collection Build Service* (organization-scoped) and the project-level *Build Service* (project-scoped) are assigned the **Feed and Upstream Reader (Collaborator)** role.

::: moniker-end

:::moniker range="=azure-devops-2022"

> [!NOTE]
> By default, the *Project Collection Build Service* is automatically assigned the **Feed and Upstream Reader (Collaborator)** role for newly created collection-scoped feeds.

::: moniker-end

## Feed roles and permissions

Each feed role grants a specific set of capabilities. Use the following table to decide which role to assign:

| Permission                           | Feed Reader | Feed and Upstream Reader (Collaborator) | Feed Publisher (Contributor) | Feed Owner |
| ------------------------------------ | ----------- | --------------------------------------- | ---------------------------- | ---------- |
| List packages in the feed            | &#x2713;    | &#x2713;                                | &#x2713;                     | &#x2713;   |
| Download/install/restore packages    | &#x2713;    | &#x2713;                                | &#x2713;                     | &#x2713;   |
| Save packages from upstream sources  |             | &#x2713;                                | &#x2713;                     | &#x2713;   |
| Publish packages                     |             |                                         | &#x2713;                     | &#x2713;   |
| Promote packages to a view           |             |                                         | &#x2713;                     | &#x2713;   |
| Deprecate/unlist/yank packages       |             |                                         | &#x2713;                     | &#x2713;   |
| Delete/unpublish packages            |             |                                         |                              | &#x2713;   |
| Add/remove upstream sources          |             |                                         |                              | &#x2713;   |
| Allow external package versions      |             |                                         |                              | &#x2713;   |
| Edit feed settings                   |             |                                         |                              | &#x2713;   |
| Delete a feed                        |             |                                         |                              | &#x2713;   |

> [!NOTE]
> **Project Collection Administrators** and **Azure Artifacts Administrators** are automatically granted the **Feed Owner** role for all feeds in the project.

## Feed views settings

Feed views let you share selected package versions without exposing everything in the feed. A common pattern is to share validated packages through one view while keeping in-progress packages private.

By default, each feed includes three views: *@Local*, *@Prerelease*, and *@Release*. You can rename or delete the *@Prerelease* and *@Release* views. The *@Local* view contains all packages published directly to the feed, as well as packages saved from upstream sources.

> [!IMPORTANT]
> Users who can access a view can download packages through that view even if they don't have direct access to that feed.
> If you need to fully restrict package access, you must restrict access to both the feed and its views.

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the gear icon to open **Feed settings**.

1. Select **Views**, select the ellipsis next to the view, and then select **Edit**.

1. To restrict access to the view, change **Visibility** to **Specific people**.

    > [!IMPORTANT]
    > Views inherit permissions from the parent feed. If you set a view's visibility to *Specific people* without specifying any users or groups, the view's permissions will default back to the permissions of the parent feed.

1. Select **Save** when you're done. The **Access permissions** column updates to reflect your changes.

    :::image type="content" source="media/edit-views.png" alt-text="Screenshot showing the permissions settings for the @Prerelease view in Azure Artifacts.":::

> [!NOTE]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant**. This can be done by navigating to **Feed Settings** > **Views**, selecting the ellipsis next to the specified view, selecting **Edit**, and adjusting the permissions.

## Pipelines permissions

To access a feed from a pipeline, the [corresponding build identity](../../pipelines/process/access-tokens.md#scoped-build-identities) must have the necessary permissions.
The project-level build identity is named `[Project name] Build Service ([Organization name])`, for example `FabrikamFiber Build Service (codesharing-demo)`. The organization-level build identity is named `Project Collection Build Service ([Organization name])`, for example `Project Collection Build Service (codesharing-demo)`.

To add a build identity to a feed:

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu. 

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to open **Feed settings**.

1. Select **Permissions**, and then select **Add users/groups**.

1. Add the build identity and assign it the **Feed and Upstream Reader (Collaborator)** role.

1. If the pipeline needs to publish packages, assign the **Feed Publisher (Contributor)** role to both the *Project Collection Build Service* identity and the project-level *Build Service* identity.

    :::image type="content" source="media/feed-pipelines-permissions.png" alt-text="Screenshot showing how to add a build identity to the feed permissions.":::

### Examples

See the examples below to learn how to authenticate and publish packages to your feed with Azure Pipelines.

::: moniker range="azure-devops"

| Package Type       | Article                          |
|--------------------|----------------------------------|
| NuGet              | [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md) |
| Npm                | [Publish npm packages with Azure Pipelines](../../pipelines/artifacts/npm.md) |
| Maven              | [Publish Maven artifacts with Azure Pipelines](../../pipelines/artifacts/publish-maven-artifacts.md) |
| Python             | [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md) |
| Cargo              | [Publish Cargo packages with Azure Pipelines](../../pipelines/artifacts/cargo-pipelines.md) |
| Universal Packages | [Publish Universal Packages with Azure Pipelines](../../pipelines/artifacts/universal-packages.md) |

::: moniker-end

::: moniker range="azure-devops-2022"

| Package Type       | Article                          |
|--------------------|----------------------------------|
| NuGet              | [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md) |
| Npm                | [Publish npm packages with Azure Pipelines](../../pipelines/artifacts/npm.md) |
| Maven              | [Publish Maven artifacts with Azure Pipelines](../../pipelines/artifacts/publish-maven-artifacts.md) |
| Python             | [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md) |
| Cargo              | [Publish Cargo packages with Azure Pipelines](../../pipelines/artifacts/cargo-pipelines.md) |

::: moniker-end

> [!NOTE]
> If your pipeline uses the project-level build identity and needs to access a feed in a different project, you must configure that other project to grant the build identity at least the **Edit project-level information** permission.

## Related content

- [Best practices](../concepts/best-practices.md)

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)

- [Monitor Artifacts storage consumption](../artifact-storage.md)
