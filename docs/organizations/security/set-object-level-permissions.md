---
title: Set object-level permissions
titleSuffix: Azure DevOps
description: How to grant permission and access at the object-level - repos, pipelines, work items, area paths, queries, wikis, dashboards, and more.
ms.subservice: azure-devops-security
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
--- 

# Set object-level permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As you manage security for your organization, you can set permissions at the organization/collection-level, project-level, and object-level. This article helps you go to the security dialogs for setting permissions at the object-level, as the user interface varies somewhat across Azure Devops. For more information, see [Get started with permissions, access, and security groups](about-permissions.md#permissions).

The following items are considered objects:

- General: Dashboards, Analytic views, Wikis, and notifications
- Boards: Area Paths, Iteration Paths, Shared queries and query folders, and more
- Pipelines: Build and release pipelines, deployment groups, task groups, and more
- Repos: Git repositories and branches, TFVC folders or branches
- Artifacts: Artifacts and feeds

Work items, work item tags, Git repository tags, test plans, test suites, test cases, and other test artifacts aren't objects, but are subject to the security settings or permissions, typically set at the project level or for an area path.

To set most object-level permissions, you must be a member of the Project Administrators group, or granted explicit permission through the individual object security dialog. Any permissions granted to Project Administrators are also granted to members of the Project Collection Administrators group.

> [!NOTE]
> TFVC only supports a single repository per project. You can set permissions for the repository or repo folders/branches, which inherit from the repo.

For more information, see [Security concepts](quick-reference-index-security.md#concepts) and [Security tasks](quick-reference-index-security.md#tasks).

## Open the permissions dialog for an object section

There are various ways to get to the Permissions dialog for an object. The simplest way is to start from the object, and then select **More** ... > **Security**. 

:::image type="content" source="media/permissions-dialog.png" alt-text="Screenshot showing how to get to permission settings for an object.":::

> [!NOTE]
> Some objects, such as repositories and Analytics views, require Basic access or higher levels. For more information, see [Access levels](access-levels.md).

## Set permissions for Dashboards, Wikis, and Analytic views

You can set permissions at the project-level and organization/collection-level for some general items, such as creating, deleting, and renaming projects. The following table provides information about setting permissions at the object-level for Dashboards, Wiki, and Analytic views.

:::row:::
   :::column span="1":::
   **Object**
   :::column-end:::
   :::column span="1":::
   **Default group membership**
   :::column-end:::
   :::column span="1":::
   **How to access security**
   :::column-end:::
   :::column span="1":::
   **Inherited?**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Dashboards](../../report/dashboards/dashboard-permissions.md)
   :::column-end:::
   :::column span="1":::
   Contributor
   :::column-end:::
   :::column span="1":::
   Open **Dashboards**, select the area path, and then  **More** ... > **Security**.
   :::column-end:::
   :::column span="1":::
   ✔️ (project settings for team dashboard)
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
   [Wiki](../../project/wiki/manage-readme-wiki-permissions.md)
   :::column-end:::
   :::column span="1":::
   Contributor
   :::column-end:::
   :::column span="1":::
   Open the wiki, choose **More** ... > **Wiki security**. For more information, see [Manage Wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md).
   :::column-end:::
   :::column span="1":::
   no
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Analytic views](../../report/powerbi/analytics-security.md)
   :::column-end:::
   :::column span="1":::
   Contributor and Basic
   :::column-end:::
   :::column span="1":::
   Open the analytic view, choose **More** ... > **Security**.
   :::column-end:::
   :::column span="1":::
   no
   :::column-end:::
:::row-end:::
::: moniker-end

## Set permissions for Boards objects

The following table provides information about setting permissions at the object-level for area and iteration paths, work items, and more.

:::row:::
   :::column span="1":::
   **Object**
   :::column-end:::
   :::column span="1":::
   **Default group membership**
   :::column-end:::
   :::column span="1":::
   **How to access security**
   :::column-end:::
   :::column span="1":::
   **Inherited?**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Area path](set-permissions-access-work-tracking.md)
   :::column-end:::
   :::column span="1":::
   [Project Administrator](../../organizations/security/permissions.md#project-level-groups)
   :::column-end:::
   :::column span="1":::
   Open **Project settings** > **Project configuration** > **Areas** > next to an area, **More** ... > **Security**.
   :::column-end:::
   :::column span="1":::
    ✔️ (child node from parent node)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Iteration path](set-permissions-access-work-tracking.md)
   :::column-end:::
   :::column span="1":::
   [Project Administrator](../../organizations/security/permissions.md#project-level-groups)
   :::column-end:::
   :::column span="1":::
   Open **Project settings** > **Project configuration** > **Iterations** > next to an iteration, **More** ... > **Security**.
   :::column-end:::
   :::column span="1":::
    ✔️ (child node from parent node)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    [Work item](set-permissions-access-work-tracking.md)
   :::column-end:::
   :::column span="1":::
   Contributor
   :::column-end:::
   :::column span="1":::
   Open **Project settings** > **Project configuration** > **Areas** > **Area path** > the work item.
   :::column-end:::
   :::column span="1":::
   no
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Work item query and query folder](../../boards/queries/set-query-permissions.md)
   :::column-end:::
   :::column span="1":::
   Creator of the query or folder or [Project Administrator](../../organizations/security/permissions.md#project-level-groups)
   :::column-end:::
   :::column span="1":::
   Open the work item query or query folder > **More** ... > **Security**.
   :::column-end:::
   :::column span="1":::
   no
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Delivery Plans](set-permissions-access-work-tracking.md#edit-or-manage-permissions-for-delivery-plans)
   :::column-end:::
   :::column span="1":::
   [Project Administrator](../../organizations/security/permissions.md#project-level-groups) or creator of the Delivery Plan.
   :::column-end:::
   :::column span="1":::
   Open **Boards** > **Delivery Plans** > next to a delivery plan, **More** ... > **Security**.
   :::column-end:::
   :::column span="1":::
   no
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Process](../../boards/get-started/permissions-access-boards.md)
   :::column-end:::
   :::column span="1":::
   [Project Administrator](../../organizations/security/permissions.md#project-level-groups)
   :::column-end:::
   :::column span="1":::
   Select **More** ... > **Security**.
   :::column-end:::
   :::column span="1":::
    ✔️ (from Organization/Collection settings)
   :::column-end:::
:::row-end:::

> [!NOTE]
> Work item tags - permissions get set at the project level, **Create tag definition**. Work item tags don't qualify as an object, they're defined through work items.

### Tips

For [**Team members by role**](../../organizations/notifications/manage-team-group-global-organization-notifications.md), the following two roles are explained.
   - **Changed reviewers** applies to any reviewer that's added or deleted, because of policies defined for the set of files. For example, a push to a pull request (PR) can introduce a change to File1.cs. If a policy says Person A needs to review changes to File1.cs, they're in the Changed reviewers role for that iteration of the PR.
   - The **Reset reviewers** role is related to the “reset votes” policy. For example, the repo has configured the policy, “Reset votes on new pushes”. Person B, who was required on the PR, has already approved this PR. Because of the "reset votes policy", their vote gets reset. So, they're in the Reset reviewers role for that iteration.

## Set permissions for Repos objects

The following table provides information about setting permissions at the object-level for repos, Git repos, Git branches, and TFVC repos.

| Object | Default group membership | How to access security | Inherited? |
|--|--|--|--|
| [Repos](../../repos/git/set-git-repository-permissions.md#open-security-for-a-repository) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups) | Open **Project settings**, **Repositories** > highlight your repo > **Security**. | ✔️  |
| [Git repository](../../repos/git/set-git-repository-permissions.md) |[Project Administrator](../security/change-project-level-permissions.md)  | Open **Project settings** > **Repositories** and the Git repository.  | ✔️ (from project settings for Git repository) |
| [Git branch](../../repos/git/branch-permissions.md) |[Project Administrator](../security/change-project-level-permissions.md) | Open **Repos** > **Branches** > your branch > **More** ... > **Branch security**. | ✔️ |
| [TFVC repository](../../repos/tfvc/set-tfvc-repository-permissions.md) |[Project Administrator](../security/change-project-level-permissions.md) | Open **Project settings** > **Repositories** and the TFVC repository.  | ✔️ |

### Tips

- Branches inherit a subset of permissions from assignments made at the repository level. For more information about branch permissions and policies, see [Set branch permissions](../../repos/git/branch-permissions.md) and [Improve code quality with branch policies](../../repos/git/branch-policies.md)
- Create a shared query folder for each team and provide permissions to create and edit queries under that folder to all members of the team.
- If you add a user to the Contributors group, they can add and modify work items. You can restrict user and group permissions based on the area path. For more information, see [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path).
::: moniker range="azure-devops"
- Project Collection Administrators can [download the permissions report for a repository](download-permissions-report.md). The user interface button won't appear for users who aren't members of this group.
::: moniker-end

## Set permissions for Pipelines objects

The following table provides information about setting permissions at the object-level for build pipelines, release pipelines, deployment groups, and more.

| Object | Default group membership | How to access security | Inherited? |
|--|--|--|--|
| [**Pipelines**](../../pipelines/policies/set-permissions.md#verify-permissions-for-contributors) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open **Pipelines** > **Pipelines** > **All** > your pipeline > **More** ... >  **Manage security**. | ✔️ |
| [Build pipelines](../../pipelines/policies/permissions.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open your build pipeline > **More** ... > **Manage security.** | ✔️ |
|[Build pipeline runs](../../pipelines/policies/set-permissions.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open your build pipeline run > **More** ... > **Manage security.** | ✔️ |
| [Release pipelines](../../pipelines/policies/permissions.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open your release pipeline > **More** ... > **Manage security.** | ✔️ |
| [Task groups (Classic)](../../pipelines/policies/permissions.md) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your task group > **More** ... > **Manage security.**  | ✔️ |
| [Deployment groups](../../pipelines/policies/permissions.md) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your deployment group > **More** ... > **Manage security.**   | ✔️   |
| [Deployment pools](../../pipelines/policies/permissions.md) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)  |Open your deployment pool > **More** ... > **Manage security.**   | ✔️  |
| [Environments](../../pipelines/policies/permissions.md) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your environment > **More** ... > **Manage security.**   | ✔️ (from Environments permission settings) |
| [Variable groups](../../pipelines/library/index.md)  |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your variable group > **More** ... > **Manage security.**  |✔️ (from Library permission settings)  |
| [Secure files](../../pipelines/policies/permissions.md) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your secure file > **More** ... > **Manage security.**  |✔️ (from Library permission settings)   |

## Set permissions for Artifacts objects

The following table provides information about setting permissions at the object-level for artifacts and feeds.

| Object | Default group membership | How to access security | Inherited? |
|--|--|--|--|
| [Artifacts](../../artifacts/feeds/feed-permissions.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open **Artifacts** > Azure Artifacts settings icon. You don't see the icon if you don't have the right permissions. | no |
| [Feeds](../../artifacts/feeds/feed-permissions.md) | Project Administrator or Feed Administrator | Open your feed > **gear icon** > **Permissions** > **+ Add users/groups**. | no |

## Set permissions for Test plans objects

- Test plans, test suites, test cases, and other test objects are managed similarly to work items. This is because they represent test-specific work item types, as discussed in [Test objects and terms](/azure/devops/organizations/security/set-permissions-access-test).
- You can manage test-level permissions through project-level settings or through Area Path object-level settings. For more information, see [Set permissions and access for testing](/azure/devops/organizations/security/set-permissions-access-test).

::: moniker range="azure-devops" 

## Set object permissions through the command line

You can use the [az devops security command line tool](manage-tokens-namespaces.md) to view and manage permissions.

Some more granular permissions and permissions for select objects and features can only be managed through the command line. For example:

- Notifications using the `EventSubscription` and `EventSubscriber` namespaces
- Read or create dashboards using the `DashboardPriveliges` namespace
- Use, manage, or view service endpoints through the `ServiceEndpoints` namespace
- View delivery plans through the `Plans` namespace

For more information about namespaces, see [Security namespace and permission reference](namespace-reference.md).

::: moniker-end

## Set permissions for object notifications

Notifications can be set at the user, team, project, and organization/collection level. While there isn't a user interface for setting notification permissions, some permissions can be set through command line tools and the `EventSubscription` namespace. For more information, see [Security namespace and permission reference](namespace-reference.md).

Here are some additional tips for managing notifications.

- If you don't want to receive a notification for an event that you started, you can turn on the option, **Skip initiator**. For more information, see [Exclude yourself from notification emails for events that you start](../../organizations/notifications/exclude-self-from-email.md).
- We don't support organization-wide notifications. As an alternative, you can provide an email distribution list that goes to your entire organization. Also, you can generate a banner with the `az devops banner` command that all users see when they sign in.

## Related articles

- [Change project-level permissions](change-project-level-permissions.md)
- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
- [Download permissions report for a repository](download-permissions-report.md)
- [Manage permissions with command line tool](manage-tokens-namespaces.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions lookup reference](permissions-lookup-guide.md)
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)
- [Security and permission management tools](security-tools-reference.md)
