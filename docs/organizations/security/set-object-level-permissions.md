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
ms.date: 07/15/2024
--- 

# Set object-level permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As you manage security for your organization, you can set permissions at the organization/collection-level, project-level, and object-level. This article helps you go to the security dialogs for setting permissions at the object-level, as the user interface varies somewhat across Azure Devops. For more information, see [Get started with permissions, access, and security groups](about-permissions.md#permissions).

The following items are considered objects:

- General: Dashboards, Analytic views, Wikis, and notifications
- Azure Boards: Area Paths, Iteration Paths, Shared queries and query folders, and more
- Azure Pipelines: Build and release pipelines, deployment groups, task groups, and more
- Azure Repos: Git repositories and branches, TFVC folders or branches
- Azure Artifacts: Artifacts and feeds

Work items, tags, test plans, and other test artifacts are subject to the security settings typically set at the project level or for an area path.

To set object-level permissions, you must be a member of the **Project Administrators** group or have explicit permissions through the individual object security dialog.

> [!NOTE]
> TFVC only supports a single repository per project. You can set permissions for the repository or repo folders/branches, which inherit from the repo.

## Open the permissions dialog for an object section

To access the Permissions dialog for an object, follow these steps:
1. Go to the specific object.
2. Select **More** `...`.
3. Select **Security** from the dropdown menu. 

:::image type="content" source="media/permissions-dialog.png" alt-text="Screenshot showing how to get to permission settings for an object.":::

> [!NOTE]
> Some objects, such as repositories and Analytics views, require Basic access or higher levels. For more information, see [Access levels](access-levels.md).

## Set permissions for Dashboards, Wikis, and Analytic views

You can set permissions at the project-level and organization/collection-level for some general items, such as creating, deleting, and renaming projects. The following table provides information about setting permissions at the object-level for Dashboards, Wiki, and Analytic views.

|Object  |Default group membership  |How to access security|Inherited?  |
|---------|---------|---------|---------|
|[Dashboards](../../report/dashboards/dashboard-permissions.md)| Contributor  | Open **Dashboards**, select the area path, and then  **More** ... > **Security**. | ✔️ (project settings for team dashboard)|
|[Wiki](../../project/wiki/manage-readme-wiki-permissions.md) |Contributor |Open the wiki, choose **More** ... > **Wiki security**. For more information, see [Manage Wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md). | no        |
|[Analytic views](../../report/powerbi/analytics-security.md) | Contributor & Basic|Open the analytic view, choose **More** ... > **Security**.  | no |


## Set permissions for Boards objects

The following table provides information about setting permissions at the object-level for area and iteration paths, work items, and more.


|Object  |Default group membership  |How to access security  |Inherited?  |
|---------|---------|---------|---------|
|[Area path](set-permissions-access-work-tracking.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups) |Open **Project settings** > **Project configuration** > **Areas** > next to an area, **More** ... > **Security**.         | ✔️ (child node from parent node) |
|[Iteration path](set-permissions-access-work-tracking.md)    | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)        | Open **Project settings** > **Project configuration** > **Iterations** > next to an iteration, **More** ... > **Security**.        | ✔️ (child node from parent node)    |
|[Work item](set-permissions-access-work-tracking.md)    | Contributor        | Open **Project settings** > **Project configuration** > **Areas** > **Area path** > the work item.        | no        |
|[Work item query and query folder](../../boards/queries/set-query-permissions.md)  | Creator of the query or folder or [Project Administrator](../../organizations/security/permissions.md#project-level-groups)        |Open the work item query or query folder > **More** ... > **Security**.         | no        |
|[Delivery Plans](set-permissions-access-work-tracking.md)    | [Project Administrator](../../organizations/security/permissions.md#project-level-groups) or creator of the Delivery Plan  |Open **Boards** > **Delivery Plans** > next to a delivery plan, **More** ... > **Security**.         | no        |
|[Process](../../boards/get-started/permissions-access-boards.md)  | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)        | Select **More** ... > **Security**.        | ✔️ (from Organization/Collection settings)        |

> [!NOTE]
> Work item tags - permissions get set at the project level, **Create tag definition**. Work item tags don't qualify as an object, they're defined through work items.

### Tips

Let's break down the following roles related to reviewers:

- **Changed reviewers:**
  - This role applies to any reviewer who was added or removed, due to policies defined for a set of files. 
  - For example, consider a pull request (PR) where changes are made to `File1.cs`. 
  - If a policy specifies that Person A needs to review changes to `File1.cs`, they fall into the "Changed reviewers" role for that iteration of the PR.
- **Reset reviewers:** 
  - This role is related to the "reset votes" policy. 
  - Suppose the repository has the policy “Reset votes on new pushes” configured. 
  - If Person B, who was required to review the PR, already approved it, their vote gets reset due to the policy. 
  - As a result, they're in the "Reset reviewers" role for that iteration.

## Set permissions for Repos objects

The following table provides information about setting permissions at the object-level for repos, Git repos, Git branches, and TFVC repos.

| Object | Default group membership | How to access security | Inherited? |
|--|--|--|--|
| [Repos](../../repos/git/set-git-repository-permissions.md#open-security-for-a-repository) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups) | Open **Project settings**, **Repositories** > highlight your repo > **Security**. | ✔️  |
| [Git repository](../../repos/git/set-git-repository-permissions.md) |[Project Administrator](../security/change-project-level-permissions.md)  | Open **Project settings** > **Repositories** and the Git repository. | ✔️ (from project settings for Git repository) |
| [Git branch](../../repos/git/branch-permissions.md) |[Project Administrator](../security/change-project-level-permissions.md) | Open **Repos** > **Branches** > your branch > **More** ... > **Branch security**. | ✔️ |
| [TFVC repository](../../repos/tfvc/set-tfvc-repository-permissions.md) |[Project Administrator](../security/change-project-level-permissions.md) | Open **Project settings** > **Repositories** and the TFVC repository. | ✔️ |

### Tips

- **Branch permissions:**
  - Branches inherit a subset of permissions from assignments made at the repository level. 
  - For more information, see [Set branch permissions](../../repos/git/branch-permissions.md) and [Improve code quality with branch policies](../../repos/git/branch-policies.md)
- **Shared query folders:**
  - Create a shared query folder for each team.
  - Provide permissions to create and edit queries under that folder to all team members.
- **Contributors group:**
  - Adding a user to the Contributors group allows them to add and modify work items. 
  - You can restrict user and group permissions based on the area path. For more information, see [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path).
::: moniker range="azure-devops"
- **Permissions report:**
  - Project Collection Administrators can [download the permissions report for a repository](download-permissions-report.md). 
  - The user interface button for this feature doesn't appear for users who aren't members of the Project Collection Administrators group.
::: moniker-end

## Set permissions for Pipelines objects

The following table provides information about setting permissions at the object-level for build pipelines, release pipelines, deployment groups, and more.

| Object | Default group membership | How to access security | Inherited? |
|--|--|--|--|
| [**Pipelines**](../../pipelines/policies/permissions.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open **Pipelines** > **Pipelines** > **All** > your pipeline > **More** ... >  **Manage security**. | ✔️ |
| [Build pipelines](../../pipelines/policies/permissions.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open your build pipeline > **More** ... > **Manage security.** | ✔️ |
|[Build pipeline runs](../../pipelines/policies/permissions.md#pipeline-permissions) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open your build pipeline run > **More** ... > **Manage security.** | ✔️ |
| [Release pipelines](../../pipelines/policies/permissions.md#release-pipeline-permissions) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open your release pipeline > **More** ... > **Manage security.** | ✔️ |
| [Task groups (Classic)](../../pipelines/policies/permissions.md#task-group-permissions) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your task group > **More** ... > **Manage security.**  | ✔️ |
| [Deployment groups](../../pipelines/policies/permissions.md#deployment-group-permissions) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your deployment group > **More** ... > **Manage security.**   | ✔️   |
| [Deployment pools](../../pipelines/policies/permissions.md#deployment-group-permissions) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)  |Open your deployment pool > **More** ... > **Manage security.**   | ✔️  |
| [Environments](../../pipelines/policies/permissions.md#environment-permissions) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your environment > **More** ... > **Manage security.**   | ✔️ (from Environments permission settings) |
| [Variable groups](../../pipelines/policies/permissions.md#library-permissions)  |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your variable group > **More** ... > **Manage security.**  |✔️ (from Library permission settings)  |
| [Secure files](../../pipelines/policies/permissions.md#library-permissions) |[Project Administrator](../../organizations/security/permissions.md#project-level-groups)|Open your secure file > **More** ... > **Manage security.**  |✔️ (from Library permission settings)   |

## Set permissions for Artifacts objects

The following table provides information about setting permissions at the object-level for artifacts and feeds.

| Object | Default group membership | How to access security | Inherited? |
|--|--|--|--|
| [Artifacts](../../artifacts/feeds/feed-permissions.md) | [Project Administrator](../../organizations/security/permissions.md#project-level-groups)| Open **Artifacts** > Azure Artifacts settings icon. You don't see the icon if you don't have the right permissions. | no |
| [Feeds](../../artifacts/feeds/feed-permissions.md) | Project Administrator or Feed Administrator | Open your feed > **gear icon** > **Permissions** > **+ Add users/groups**. | no |

## Set permissions for Test plans objects

- Test plans, test suites, test cases, and other test objects are managed similarly to work items because they represent test-specific work item types, as discussed in [Test objects and terms](/azure/devops/organizations/security/set-permissions-access-test).
- You can manage test-level permissions through project-level settings or through Area Path object-level settings. For more information, see [Set permissions and access for testing](/azure/devops/organizations/security/set-permissions-access-test).

::: moniker range="azure-devops" 

## Set object permissions through the command line

You can use the [az devops security command line tool](manage-tokens-namespaces.md), which allows you to view and manage permissions for various objects and features.

Here are some examples of more granular permissions that can be managed through the command line:

- **Notifications:** Use the `EventSubscription` and `EventSubscriber` namespaces.
- **Dashboards:** Read or create dashboards using the `DashboardPrivileges` namespace.
- **Service endpoints:** Use, manage, or view service endpoints through the `ServiceEndpoints` namespace.
- **Delivery plans:** View delivery plans through the `Plans` namespace.

For more information about namespaces, see [Security namespace and permission reference](namespace-reference.md).

::: moniker-end

## Set permissions for object notifications

While there isn't a user interface for setting notification permissions, some permissions can be set through command line tools and the `EventSubscription` namespace. For more information, see [Security namespace and permission reference](namespace-reference.md).

Here are some more tips for managing notifications:

- **Notification levels:**
  - Notifications can be set at different levels: User, team, project, and organization/collection.
  - Unfortunately, there isn’t a user interface specifically for setting notification permissions.
  - However, some permissions can be configured through command-line tools and the EventSubscription namespace.
- **Skip initiator option:**
  - If you don’t want to receive notifications for events that you initiated, enable the Skip initiator option.
  - This prevents notifications for actions you started.
  - For more information, see [Exclude yourself from notification emails for events that you start](../../organizations/notifications/exclude-self-from-email.md).
- **Organization-wide notifications:**
  - Azure DevOps doesn’t directly support organization-wide notifications.
  - As an alternative, consider providing an email distribution list that reaches your entire organization.
  - In Azure DevOps Services you can create a banner using the `az devops banner` command that all users see when they sign in.

## Related articles

- [Manage permissions for specific tasks](restrict-access.md)
- [Manage permissions with command line tool](manage-tokens-namespaces.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Download permissions report for a repository](download-permissions-report.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
