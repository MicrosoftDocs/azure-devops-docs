---
title: Manage permissions
description: How to configure permissions for Azure Artifacts, Azure Artifacts feeds, feed views, and pipelines access.
ms.assetid: 70313C3C-2E52-4FFC-94C2-41F1E37C9D26
ms.service: azure-devops-artifacts
ms.topic: overview
ms.date: 08/19/2025
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Manage permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to efficiently manage dependencies by hosting various types of packages in a single feed. With flexible permission settings, you can fine-tune access to your packages, control who can create or administer feeds, and manage how packages are accessed from Azure Pipelines.

## Azure Artifacts settings

With Azure Artifacts settings, you can control who can create and administrer feeds.

> [!NOTE]
> you must be a feed owner or a [project collection administrator](../../organizations/security/look-up-project-collection-administrators.md) to configure Azure Artifacts settings.

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the **Azure Artifacts settings** icon on the right.

1. Select **Who can create feeds** and **Who can administer feeds**, then select **Save** when you're done. 

    :::image type="content" source="media/artifact-feed-settings.png" alt-text="Screenshot showing how to set up Azure Artifacts settings.":::

## Feed settings

From the Azure Artifacts feed settings, you can manage various aspects of your feed, such as enabling package sharing, configuring retention policies, adding new users or groups, managing view permissions, and setting up or modifying upstream sources. Here's how to add a new user or group to your feed:

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu. 

1. Select the gear icon on the right to navigate to your **Feed Settings**.

1. Select **Permissions**, then select **Add users/groups**.

    :::image type="content" source="media/feed-permissions.png" alt-text="A screenshot displaying how to access feed permissions.":::

1. Add the new user(s) or group(s), and assign the appropriate **Role**:
    1. **Feed Owner**: Can delete packages, allow external package versions, edit feed settings, and manage upstream sources, in addition to contributor permissions.
    1. **Feed Publisher (Contributor)**: Can publish, promote, or deprecate packages along with collaborator permissions.
    1. **Feed and Upstream Reader (Collaborator)**: Can save packages from upstream source in addition to reader permissions.
    1. **Feed Reader**: Can view and download packages from the feed.

1. Select **Save** when you're done.

::: moniker range="azure-devops"

> [!NOTE]
> By default, the *Project Collection Build Service* (organization-scoped) and the project-level *Build Service* (project-scoped) are assigned the **Feed and Upstream Reader (Collaborator)** role.

::: moniker-end

:::moniker range="=azure-devops-2022"

> [!NOTE]
> By default, the *Project Collection Build Service* is automatically assigned the **Feed and Upstream Reader (Collaborator)** role for newly created collection-scoped feeds.

::: moniker-end

## Feed roles and permissions

Azure Artifacts provides a flexible permission model to manage access within feeds. Each role comes with specific privileges that determine what actions a user or group can perform. The table below outlines the key permissions associated with each role:

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

Feed views in Azure Artifacts enable users to share specific packages while keeping others private. A common use case is sharing a package version that has been tested and validated, while keeping packages still under development restricted.

By default, each feed includes three views: *@Local*, *@Prerelease*, and *@Release*. The latter two are suggested views that can be renamed or deleted as needed. The @Local view is the default and includes all packages published directly to the feed, as well as packages saved from upstream sources.

> [!IMPORTANT]
> Users who have access to a specific view are able to access and download packages from the feed through that view even if they don't have direct access to that feed.
If you want to completely hide your packages, you must restrict access to both the feed and its views.

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the gear icon to navigate to your **Feed Settings**.

1. Select **Views**, select the ellipsis button next to your view, then select **Edit** to modify its permission. 

1. To restrict access to your view, change the visibility setting to **specific people**.

    > [!IMPORTANT]
    > Views inherit permissions from the parent feed. If you set a view's visibility to *Specific people* without specifying any users or groups, the view's permissions will default back to the permissions of the parent feed.

1. Select **Save** when you're done. The access permissions column will update to reflect your changes.

    :::image type="content" source="media/edit-views.png" alt-text="A screenshot showing the permissions settings for the @Prerelease view in Azure Artifacts.":::

> [!NOTE]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant**. This can be done by navigating to **Feed Settings** > **Views**, selecting the ellipsis next to the specified view, selecting **Edit**, and adjusting the permissions.

## Pipelines permissions

To access your feed from your pipeline, the [corresponding build identity](../../pipelines/process/access-tokens.md#scoped-build-identities) must have the necessary permissions.
The project-level build identity is named `[Project name] Build Service ([Organization name])`, for example `FabrikamFiber Build Service (codesharing-demo)` while the organization-level build identity is named `Project Collection Build Service ([Organization name])`, for example `Project Collection Build Service (codesharing-demo)`. Here's how to add the build identity to your feed's permissions:

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu. 

1. Select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed settings**.

1. Select **Permissions**, then select **Add users/groups**. Add your build identity and assign it the **Feed and Upstream Reader (Collaborator)** role. If your pipeline needs to publish packages to the feed, make sure that both the *Project Collection Build Service* and your *project's Build Service* identities have the **Feed Publisher (Contributor)** role.

    :::image type="content" source="media/feed-pipelines-permissions.png" alt-text="A screenshot displaying how to add a build identity to the feed permissions.":::

#### Examples

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

- [Monitor Artifacts storage consumption](../artifact-storage.md)

- [Promote packages and manage feed views](./views.md)

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
