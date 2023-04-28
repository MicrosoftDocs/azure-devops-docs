---
title: Permissions and role lookup guide 
titleSuffix: Azure DevOps
description: Index to permissions defined for Azure DevOps
ms.subservice: azure-devops-security
ms.assetid:  
ms.author: chcomley
author: chcomley
ms.topic: reference
monikerRange: '<= azure-devops'
ms.date: 04/04/2022  
---

# Permissions lookup guide for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use this index to locate the article on how to manage a specific permission. Most permissions are managed through the user interface for an object, project, or collection. Other permissions are managed by adding users and groups to a role. 

> [!NOTE]
> You can manage permissions through a command line tool or REST API. Some permissions are only managed through these tools. To learn more, see [Security and permission management tools](security-tools-reference.md) and [Security namespace and permission reference](namespace-reference.md).  

If you're new to Azure DevOps, review [Get started with permissions, access, and security groups](about-permissions.md) and [About security roles](about-security-roles.md). 

Values in parenthesis indicate what level the permission is managed:

::: moniker range="azure-devops"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the organization level  
- **Role**: Permissions are managed through a security role.   
- **Team**: Permissions are managed via the team administrator role.
::: moniker-end

::: moniker range="< azure-devops"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.  
- **Server**: Permissions are managed at the instance level for a server   
- **Team**: Permissions are managed via the team administrator role.
::: moniker-end



:::row:::
   :::column span="1":::
   ### A

   ::: moniker range="azure-devops"   
   - [Administer build permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer build resource permissions (Collection)](change-organization-collection-level-permissions.md)
   - [Administer release permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer process permissions (Collection)](change-organization-collection-level-permissions.md)
   - [Administer shelved changes (Collection)](change-organization-collection-level-permissions.md)
   - [Administer task group permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer shelved changes (Collection)](change-organization-collection-level-permissions.md)
   - [Administer workspaces (Collection)](change-organization-collection-level-permissions.md)
   - [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)
   - [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   - [Alerts (Team)](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
   - [Analytics Service (Project)](../../report/powerbi/analytics-security.md)
   - [Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [Area path (Object)](set-permissions-access-work-tracking.md)
   - [Azure Artifacts](../../artifacts/feeds/feed-permissions.md)
   - [Audit log](permissions.md#manage-audit-streams-permission)
   - [Audit streams](permissions.md#view-audit-log-permission)
   ::: moniker-end
   ::: moniker range=">= azure-devops-2019 < azure-devops"
   - [Administer build permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer build resource permissions (Collection)](change-organization-collection-level-permissions.md)
   - [Administer release permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer process permissions (Collection)](change-organization-collection-level-permissions.md)
   - [Administer shelved changes (Collection)](change-organization-collection-level-permissions.md)
   - [Administer task group permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer shelved changes (Collection)](change-organization-collection-level-permissions.md)
   - [Administer warehouse (Server)](permissions.md#server-permissions)
   - [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)
   - [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   - [Alerts (Team)](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
   - [Analytics Service (Project)](../../report/powerbi/analytics-security.md)
   - [Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [Area path (Object)](set-permissions-access-work-tracking.md)
   - [Azure Artifacts](../../artifacts/feeds/feed-permissions.md)
   ::: moniker-end
   ::: moniker range="tfs-2018"
   - [Administer build permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer release permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer task group permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer warehouse (Server)](permissions.md#server-permissions)
   - [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)
   - [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   - [Alerts (Team)](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
   - [Area path (Object)](set-permissions-access-work-tracking.md)
   - [Azure Artifacts](../../artifacts/feeds/feed-permissions.md)
   ::: moniker-end
   
   ### B
   ::: moniker range=">= azure-devops-2019"
   - [Branches, Git (Object)](../../repos/git/branch-permissions.md)
   - [Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Build pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build resources (Collection)](../../pipelines/policies/set-permissions.md)
   - [Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Builds, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Bypass policies when completing pull requests (Object)](../../repos/git/branch-permissions.md)
   - [Bypass policies when pushing (Object)](../../repos/git/branch-permissions.md) 
   - [Bypass rules on work item updates (Project)](change-project-level-permissions.md)
   ::: moniker-end
   ::: moniker range="tfs-2018"
   - [Branches, Git (Object)](../../repos/git/branch-permissions.md)
   - [Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Build pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build resources (Collection)](../../pipelines/policies/set-permissions.md)
   - [Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Builds, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Bypass policies when completing pull requests (Object)](../../repos/git/branch-permissions.md)
   - [Bypass policies when pushing (Object)](../../repos/git/branch-permissions.md) 
   ::: moniker-end
   ### C
   ::: moniker range=">= azure-devops-2019"
   - [Change process of team project (Project)](change-project-level-permissions.md)
   - [Change work item type (Project)](change-project-level-permissions.md)
   - [Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Collection-level information](change-organization-collection-level-permissions.md)
   - [Configure Azure Boards (Team)](../settings/manage-teams.md)
   - [Create a workspace (Collection)](change-organization-collection-level-permissions.md)
   - [Create child nodes (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Create child nodes (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Create new projects (Collection)](change-organization-collection-level-permissions.md)
   - [Create process (Collection)](change-organization-collection-level-permissions.md)
   - [Create releases (Object)](../../pipelines/policies/permissions.md)
   - [Create tag definition (Project)](change-project-level-permissions.md)
   - [Create test runs (Project)](change-project-level-permissions.md)
   - [Contribute (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Contribute (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Customize process](set-permissions-access-work-tracking.md#process-permissions)
   ::: moniker-end
   ::: moniker range="tfs-2018"
   - [Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Collection-level information](change-organization-collection-level-permissions.md)
   - [Configure Agile tools (Team)](../settings/manage-teams.md)
   - [Contribute (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Contribute (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Create project collection (Server)](permissions.md#server-permissions)
   - [Create releases (Object)](../../pipelines/policies/permissions.md)
   ::: moniker-end
   ### D
   ::: moniker range=">= azure-devops-2019"
   - [Dashboards, manage (Team)](../../report/dashboards/dashboard-permissions.md)
   - [Delete audit streams (Collection)](permissions.md#delete-audit-streams-permission)
   - [Delete (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Delete and restore work items (Project)](change-project-level-permissions.md)
   - [Delete build pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Delete builds (Object)](../../pipelines/policies/permissions.md)
   - [Delete field from organization (Collection)](../settings/work/customize-process-field.md)
   - [Delete team project (Project)](change-project-level-permissions.md)
   - [Delete test runs (Project)](change-project-level-permissions.md)
   - [Delete release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Delete release stage (Object)](../../pipelines/policies/permissions.md)
   - [Delete releases (Object)](../../pipelines/policies/permissions.md)
   - [Delete tag definition (Project)](permissions.md#work-item-tags) 
   - [Delete task group(Object)](../../pipelines/policies/permissions.md)
   - [Delete this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Delete this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)
   - [Delivery plans (Object)](../../organizations/security/set-permissions-access-work-tracking.md)
   - [Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Destroy builds (Object)](../../pipelines/policies/permissions.md)
   ::: moniker-end
   ::: moniker range="tfs-2018"
   - [Dashboards, manage (Team)](../../report/dashboards/dashboard-permissions.md)
   - [Delete build pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Delete builds (Object)](../../pipelines/policies/permissions.md)
   - [Delete field from account](../settings/work/customize-process-field.md)
   - [Delete project collection (Server)](permissions.md#server-permissions)
   - [Delete release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Delete release stage (Object)](../../pipelines/policies/permissions.md)
   - [Delete releases (Object)](../../pipelines/policies/permissions.md)
   - [Delete task group(Object)](../../pipelines/policies/permissions.md)
   - [Delete test artifacts](set-permissions-access-work-tracking.md)
   - [Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)
   - [Delivery plans (Object)](../../organizations/security/set-permissions-access-work-tracking.md)
   - [Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Destroy builds (Object)](../../pipelines/policies/permissions.md)
   ::: moniker-end
   
   ### E
   ::: moniker range=">= azure-devops-2019"
   - [Edit build definition (Object)](../../pipelines/policies/permissions.md)
   - [Edit build quality (Object)](../../pipelines/policies/permissions.md)
   - [Edit collection-level information (Collection)](change-organization-collection-level-permissions.md)
   - [Edit build pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit instance-level information (Collection)](change-organization-collection-level-permissions.md)
   - [Edit policies (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Edit process (Collection)](change-organization-collection-level-permissions.md)
   - [Edit project-level information (Project)](change-project-level-permissions.md)
   - [Edit release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit release state (Object)](../../pipelines/policies/permissions.md)
   - [Edit shared Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [Edit shared Analytics views (Project)](change-project-level-permissions.md)
   - [Edit task group (Object)](../../pipelines/policies/permissions.md)
   - [Edit this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Edit this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Edit work items in this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Enumerate tag definition (Project)](permissions.md#work-item-tags) 
   - [Events (Collection)](change-organization-collection-level-permissions.md)
   - [Extensions (Collection, Role)](../../marketplace/grant-permissions.md)
   ::: moniker-end
   ::: moniker range="tfs-2018"
   - [Edit build definition (Object)](../../pipelines/policies/permissions.md)
   - [Edit build quality (Object)](../../pipelines/policies/permissions.md)
   - [Edit collection-level information (Collection)](change-organization-collection-level-permissions.md)
   - [Edit policies (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Edit project-level information (Project)](change-project-level-permissions.md)
   - [Edit release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit release state (Object)](../../pipelines/policies/permissions.md)
   - [Edit task group (Object)](../../pipelines/policies/permissions.md)
   - [Edit work items in this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Events (Collection)](change-organization-collection-level-permissions.md)
   - [Extensions (Collection, Role)](../../marketplace/grant-permissions.md)
   ::: moniker-end
   
   ### F-L
   ::: moniker range=">= azure-devops-2019"
   - [Feeds](../../artifacts/feeds/feed-permissions.md)
   - [Field, delete (Collection)](change-organization-collection-level-permissions.md)
   - [Force push (rewrite history, delete branches and tags) (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)
   - [Iteration paths (Object)](set-permissions-access-work-tracking.md)
   - [Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)
   - [Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Library (Object, Role)](about-security-roles.md#library-asset-security-roles-variable-groups-and-secure-files)
   - [Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   ::: moniker-end
   ::: moniker range="< azure-devops-2019"
   - [Feeds](../../artifacts/feeds/feed-permissions.md) 
   - [Force push (rewrite history, delete branches and tags) (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)
   - [Iteration paths (Object)](set-permissions-access-work-tracking.md)
   - [Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)
   - [Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Library (Object, Role)](about-security-roles.md#library-asset-security-roles-variable-groups-and-secure-files)
   - [Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   ::: moniker-end
   :::column-end:::
   :::column span="1":::

   ### M-N
   ::: moniker range="azure-devops"
   - [Make requests on behalf of others (Collection)](permissions.md#make-requests-on-behalf-of-others)
   - [Manage audit streams (Collection)](permissions.md#manage-audit-streams-permission)
   - [Manage build resources (Collection)](change-organization-collection-level-permissions.md)
   - [Manage build qualities (Object)](../../pipelines/policies/permissions.md)
   - [Manage deployments (Object)](../../pipelines/policies/permissions.md)
   - [Manage enterprise policies (Collection)](change-organization-collection-level-permissions.md)
   - [Manage permissions (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Manage permissions (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Manage project properties (Project)](change-project-level-permissions.md)
   - [Manage release approvers (Object)](../../pipelines/policies/permissions.md)
   - [Manage releases (Object)](../../pipelines/policies/permissions.md)
   - [Manage test plans (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test suites (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test configurations (Project)](change-project-level-permissions.md)
   - [Manage test environments (Project)](change-project-level-permissions.md)
   - [Manage test controllers (Collection)](change-organization-collection-level-permissions.md)
   - [Marketplace extensions (Collection, Role)](../../marketplace/grant-permissions.md)
   - [Merge, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Move work items out of this project (Project)](change-project-level-permissions.md)
   - [Notes, Git (Object)](../../repos/git/branch-permissions.md)
   - [Notifications (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   ::: moniker-end
   ::: moniker range="< azure-devops"
   - [Make requests on behalf of others (Collection)](permissions.md#make-requests-on-behalf-of-others)
   - [Make requests on behalf of others (Server)](permissions.md#server-permissions)
   - [Manage build resources (Collection)](change-organization-collection-level-permissions.md)
   - [Manage build qualities (Object)](../../pipelines/policies/permissions.md)
   - [Manage deployments (Object)](../../pipelines/policies/permissions.md)
   - [Manage enterprise policies (Collection)](change-organization-collection-level-permissions.md)
   - [Manage permissions (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Manage permissions (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Manage project properties (Project)](change-project-level-permissions.md)
   - [Manage release approvers (Object)](../../pipelines/policies/permissions.md)
   - [Manage releases (Object)](../../pipelines/policies/permissions.md)
   - [Manage test plans (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test suites (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test configurations (Project)](change-project-level-permissions.md)
   - [Manage test environments (Project)](change-project-level-permissions.md)
   - [Manage test controllers (Collection)](change-organization-collection-level-permissions.md)
   - [Marketplace extensions (Collection, Role)](../../marketplace/grant-permissions.md)
   - [Merge, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Move work items out of this project (Project)](change-project-level-permissions.md)
   - [Notes, Git (Object)](../../repos/git/branch-permissions.md)
   - [Notifications (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   ::: moniker-end

   ### O-P
   ::: moniker range=">= azure-devops-2019"
   - [Override check-in validation by build (Object)](../../pipelines/policies/permissions.md)
   - [Permanently delete work items (Project)](change-project-level-permissions.md)
   - [Policies, Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Policies, Git repository (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Power BI (Analytics Service)](../../report/powerbi/analytics-security.md)
   - [Process (Collection)](set-permissions-access-work-tracking.md#process-permissions)
   - [Project properties (Project)](change-project-level-permissions.md)
   - [Project-level information](change-project-level-permissions.md)
   ::: moniker-end
   ::: moniker range="< azure-devops-2019"
   - [Override check-in validation by build (Object)](../../pipelines/policies/permissions.md)
   - [Policies, Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Policies, Git repository (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Project collection (Server)](permissions.md#server-permissions)
   - [Project properties (Project)](change-project-level-permissions.md)
   - [Project-level information](change-project-level-permissions.md)
   ::: moniker-end

   ### Q-R
   
   - [Queue builds (Object)](../../pipelines/policies/permissions.md)
   - [Query (Object)](../../boards/queries/set-query-permissions.md)
   - [Query folder (Object)](../../boards/queries/set-query-permissions.md)
   - [Read (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Rename team project (Project)](change-project-level-permissions.md)
   - [Release pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Remove other's locks (Git branch, Object)](../../repos/git/branch-permissions.md)
   - [Repository, Git (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Retain (build) indefinitely (Object)](../../pipelines/policies/permissions.md)
   
   ### S
   
   - [Secure files (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Service hooks](../../service-hooks/overview.md#subscription-permissions)
   - [Shelvesets, TFVC (Collection)](change-organization-collection-level-permissions.md)
   - [Sprints, define (Object)](set-permissions-access-work-tracking.md)
   - [Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)
   - [Stop builds (Object)](../../pipelines/policies/permissions.md)
   - [Suppress notifications for work item updates (Project)](change-project-level-permissions.md)

   ### T
   
   - [Tags, Git (Object)](../../repos/git/branch-permissions.md)
   - [Tags, work items (Project)](set-permissions-access-work-tracking.md)
   - [Task groups (Object)](../../pipelines/policies/set-permissions.md)
   - [Team projects (Collection)](change-project-level-permissions.md)
   - [Test artifacts, delete](set-permissions-access-work-tracking.md#delete-test-permissions)
   - [Test configurations (Project)](change-project-level-permissions.md)
   - [Test controllers (Project)](change-project-level-permissions.md)
   - [Test environments (Project)](change-project-level-permissions.md)
   - [Test runs  (Project)](change-project-level-permissions.md)
   - [TFVC repositories (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Trace settings (Collection)](change-project-level-permissions.md)
   - [Trigger events (Collection)](change-organization-collection-level-permissions.md)
   
   ### U
   ::: moniker range=">= azure-devops-2019"
   - [Update build information (Object)](../../pipelines/policies/permissions.md)
   - [Update build queue (Object)](../../pipelines/policies/permissions.md)
   - [Update project visibility (Project)](change-project-level-permissions.md)
   - [Update tag definition (Project)](permissions.md#work-item-tags) 
   - [Use build resources (Collection)](change-organization-collection-level-permissions.md)
   ::: moniker-end
   ::: moniker range="< azure-devops-2019"
   - [Update build information (Object)](../../pipelines/policies/permissions.md)
   - [Update build queue (Object)](../../pipelines/policies/permissions.md)
   - [Update tag definition (Project)](permissions.md#work-item-tags) 
   - [Use full Web Access features (Server)](permissions.md#server-permissions)
   ::: moniker-end

   ### V
   ::: moniker range=">= azure-devops-2019"
   - [Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [View analytics (Project)](permissions.md#view-analytics-permission)
   - [View audit log (Collection)](permissions.md#view-audit-log-permission)
   - [View build resources (Collection)](change-organization-collection-level-permissions.md)
   - [View builds (Object)](../../pipelines/policies/permissions.md)
   - [View release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [View releases (Object)](../../pipelines/policies/permissions.md)
   - [View instance-level information (Collection)](change-organization-collection-level-permissions.md)
   - [View project-level information (Project)](change-project-level-permissions.md)
   - [View shared Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [View system synchronization information (Collection)](change-organization-collection-level-permissions.md)
   - [View test runs (Project)](change-project-level-permissions.md)
   - [View work items in this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [View permissions for this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [View permissions for this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [View system synchronization information (Collection)](change-organization-collection-level-permissions.md)
   ::: moniker-end
   ::: moniker range="< azure-devops-2019"
   - [Update build information (Object)](../../pipelines/policies/permissions.md)
   - [Update build queue (Object)](../../pipelines/policies/permissions.md)
   - [Use full Web Access features (Server)](permissions.md#server-permissions)
   - [Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [View builds (Object)](../../pipelines/policies/permissions.md)
   - [View release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [View releases (Object)](../../pipelines/policies/permissions.md)
   - [View system synchronization information (Collection)](change-organization-collection-level-permissions.md)
   ::: moniker-end
   ### W
   - [Work items (Project)](set-permissions-access-work-tracking.md)
   - [Workspaces (Collection)](change-project-level-permissions.md) 
   :::column-end:::
:::row-end:::


## Related articles

- [Grant or restrict permissions to select tasks](restrict-access.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [About security roles](about-security-roles.md). 
- [Permissions and groups reference](permissions.md) 
- [Change project-level permissions](change-project-level-permissions.md)
- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
- [Troubleshoot permissions](troubleshoot-permissions.md)
