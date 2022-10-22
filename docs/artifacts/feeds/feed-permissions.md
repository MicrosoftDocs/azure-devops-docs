---
title: Set up permissions
description: Configure Artifacts permissions for feeds, views, and pipelines
ms.assetid: 70313C3C-2E52-4FFC-94C2-41F1E37C9D26
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 02/28/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Configure permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts you can publish, consume, and store different types of packages in your feed. Setting up permissions for your feed allows you to control who can access your packages.

## Configure Azure Artifacts settings

Feed owners can specify who can create and administer Artifacts feeds. To access Azure Artifacts settings, select the **Azure Artifacts settings** icon on the right.

:::image type="content" source="media/azure-artifacts-settings.png" alt-text="A screenshot showing how to access Azure Artifacts settings":::

> [!NOTE]
> The Azure Artifacts settings icon will not be visible if you don't have the right permissions.

By default, users in an Azure DevOps organization can create new feeds in that organization. A user who creates a feed is both an owner and an administrator of that feed.

1. Users in this Azure DevOps organization can create new feeds.

2. Only feed administrators and users or groups specified here are able to create new feeds.

3. Users or groups added here become administrators of all the feeds in the organization.

:::image type="content" source="media/artifacts-settings.png" alt-text="Screenshot showing how to set up Azure Artifacts settings":::

> [!NOTE]
> It's very important to understand the difference between feeds, project, and project collection administrators.
> 
> A **Feed Administrator** can perform all operations on the feed (edit feed permissions, delete packages, promote packages, etc.).
>
> A **Project Administrator** on the other hand has permissions to manage all project/team related operations (update project visibility, delete project, manage test environments etc.).
>
> **Project Collection Administrators** are granted all collection-level permissions to manage resources for projects and project-collections (add/delete projects, trigger events, manage build resources, audit streams etc.).

<a name="edit-permissions"></a>

## Configure feed settings

[!INCLUDE [edit-feed](../includes/edit-feed.md)]

::: moniker range=">= azure-devops-2019"

2. Select **Permissions**, and then select **Add users/groups**.

    :::image type="content" source="media/feed-permissions.png" alt-text="A screenshot showing the feed's permissions.":::

3. Add new user(s)/group(s), and then select their **Role**.

    :::image type="content" source="media/add-users-groups-dialogue.png" alt-text="Screenshot showing how to add new users or groups.":::

4. Select **Save** when you are done.

::: moniker-end

::: moniker range="tfs-2018"

2. Select **Permissions**.

    :::image type="content" source="media/editfeeddialog1.png" alt-text="Screenshot showing feed permissions TFS.":::

In the edit feed dialog:

- Choose to make each person or team an Owner, Contributor, Collaborator, or Reader.
- When you're done, select **Save**.

::: moniker-end

> [!NOTE]
> The *Project Collection Build Service* (org-scoped) and the project-level *Build Service* (project-scoped) are set to **Collaborator** by default.

## Permissions table

In Azure Artifacts, feeds can be grouped into two categories: project-scoped and organization-scoped feeds. All feeds created through the web UI are project-scoped feeds. By default, every users in the same organization have the permissions to create a new feed. A user who creates a feed is both an owner and an administrator of that feed. Below are the four different access levels for a feed

|                   Permission                  |  Reader  | Collaborator | Contributor |   Owner  |  Administrator  |
| --------------------------------------------- | -------- | ------------ | ----------- | -------- | --------------- |
| List/install/restore packages                 | &#x2713; |   &#x2713;   |   &#x2713;  | &#x2713; |     &#x2713;    |
| Publish packages                              |          |              |   &#x2713;  | &#x2713; |     &#x2713;    |
| Unlist packages                               |          |              |   &#x2713;  | &#x2713; |     &#x2713;    |
| Promote packages to a view                    |          |              |   &#x2713;  | &#x2713; |     &#x2713;    |
| Delete packages                               |          |              |             | &#x2713; |     &#x2713;    |
| Add/remove upstream sources                   |          |              |             | &#x2713; |     &#x2713;    |
| Allow external package versions               |          |              |             | &#x2713; |     &#x2713;    |
| Save packages from upstream sources           |          |   &#x2713;   |   &#x2713;  | &#x2713; |     &#x2713;    |
| Edit feeds settings                           |          |              |             | &#x2713; |     &#x2713;    |

> [!NOTE]
> To access a project-scoped feed, a user must also have access to the project hosting that feed.

## Views permissions

Feed views enable users to share certain packages while keeping others private. A common scenario for using a feed view is sharing a package version that has already been tested and validated but keeping packages under development private.

By default, there are three views in a feed: **@local**, **@prerelease**, and **@release** view. The latter two are suggested views that you can rename or delete as desired.

The **@local** view is the default view and it includes all the packages published to the feed as well as all the packages downloaded from [upstream sources](../concepts/upstream-sources.md).

> [!IMPORTANT]
> Users who have access a specific view are able to access and download packages from the feed through that view even if they don't have direct access to that feed.
If you want to completely hide your packages, you must restrict access to both feed and views.

To restrict access to your feed, simply select a user or group from the permission table in your [Feed Settings](#configure-feed-settings) and select **Delete**.

You can restrict access to a view by changing its visibility to **specific people** as shown below.

:::image type="content" source="media/view-permissions.png" alt-text="Screenshot showing how to change views visibility.":::

After restricting your view's visibility to `specific people`, the access permissions column should reflect your changes.

:::image type="content" source="media/edit-views.png" alt-text="A screenshot showing the access permissions for the preRelease view.":::

> [!IMPORTANT]
> Views inherit their permissions from the parent feed. Setting a view's visibility to **Specific people** without specifying users or groups will default the view's permissions back to its parent's feed permissions.

<a name="common-identities"></a>

## Pipelines permissions

To access packages from your pipelines, the appropriate build identity must have access to your feed. By default, feeds have the **Project Collection Build Service** role set to **Collaborator**. If you have changed your pipeline to run at [project-scope](../../pipelines/process/access-tokens.md#job-authorization-scope), you will need to add the project-level build identity as a Reader or Contributor.

The project-level build identity is named as follows: `[Project name] Build Service ([Organization name])`. Example: FabrikamFiber Build Service (codesharing-demo).

1. From within your feed, select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed settings**.

1. Select the **Permissions** tab.

1. Select **Add users/groups**, and then add your build identity as a **Contributor**.

> [!NOTE]
> If you want to access a feed in a different project from your pipeline, you must set up the other project to grant read/write access to the build service.

### Share packages with all users in your organization

If you want to make certain packages in your feed available to all users in your organization, create or select a [view](views.md) that contains the packages you want to share and ensure its visibility is set to **People in my organization**.

::: moniker range="azure-devops"

### Share packages publicly

You can make your packages available publicly to anonymous users with limited access by [creating a public feed](../tutorials/share-packages-publicly.md).

::: moniker-end

## Related articles

- [Artifacts storage consumption](../artifact-storage.md).

- [Delete and recover packages](../how-to/delete-and-recover-packages.md).

- [Promote packages to a view](./views.md).

- [Set up upstream sources](../how-to/set-up-upstream-sources.md).

- [Configure retention policies](../../pipelines/policies/retention.md).
