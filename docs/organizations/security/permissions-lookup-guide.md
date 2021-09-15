---
title: Permissions and role lookup guide 
titleSuffix: Azure DevOps
description: Index to permissions defined for Azure DevOps
ms.technology: devops-security
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '<= azure-devops'
ms.date: 06/04/2020
---

# Permissions lookup guide for Azure DevOps

[!INCLUDE [version-all](../../includes/version-all.md)]

Use this index to locate the topic on how to manage a specific permission. Most permissions are managed for an object, project, or collection. Other permissions are managed by adding users and groups to a role.   To learn more, see [Get started with permissions, access, and security groups](about-permissions.md)and [About security roles](about-security-roles.md), and [Troubleshoot permissions](troubleshoot-permissions.md).  

Values in parenthesis indicate what level the permission is managed:

::: moniker range="azure-devops"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the organization or project collection level  
- **Role**: Permissions are managed through a security role.   
- **Team**: Permissions are managed via the team administrator role.

:::row:::
   :::column span="1":::
   ### A
   
   - [Administer build permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer build resource permissions (Collection)](set-project-collection-level-permissions.md#collection-level)

   - [Administer release permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer process permissions (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Administer shelved changes (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Administer task group permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer shelved changes (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)
   - [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   - [Alerts (Team)](/azure/devops/notifications/manage-team-group-notifications)
   - [Analytics Service (Project)](../../report/powerbi/analytics-security.md)
   - [Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [Area path (Object)](set-permissions-access-work-tracking.md)
   - [Azure Artifacts](../../artifacts/feeds/feed-permissions.md)
   - [Audit log](permissions.md#manage-audit-streams-permission)
   - [Audit streams](permissions.md#view-audit-log-permission)


   
   ### B
   
   - [Branches, Git (Object)](../../repos/git/branch-permissions.md)
   - [Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Build pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build resources (Collection)](../../pipelines/policies/set-permissions.md)
   - [Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Builds, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Bypass branch policies (Object)](../../repos/git/branch-permissions.md)
   - [Bypass rules on work item updates (Project)](set-project-collection-level-permissions.md#project-level)
   
   ### C
   
   - [Change process of team project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Change work item type (Project)](set-project-collection-level-permissions.md)
   - [Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Collection-level information](set-project-collection-level-permissions.md)
   - [Configure Azure Boards (Team)](../settings/manage-teams.md)
   - [Create a workspace (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Create child nodes (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Create child nodes (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Create new projects (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Create process (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Create releases (Object)](../../pipelines/policies/permissions.md)
   - [Create tag definition (Project)](set-project-collection-level-permissions.md#project-level)
   - [Create test runs (Project)](set-project-collection-level-permissions.md#project-level)
   - [Contribute (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Customize process](set-project-collection-level-permissions.md#collection-level)
   
   ### D
   
   - [Dashboards, manage (Team)](../../report/dashboards/dashboard-permissions.md)
   - [Delete audit streams (Collection)](permissions.md#delete-audit-streams-permission)
   - [Delete (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Delete and restore work items (Project)](set-project-collection-level-permissions.md#project-level)
   - [Delete build pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Delete builds (Object)](../../pipelines/policies/permissions.md)
   - [Delete field from organization (Collection)](../settings/work/customize-process-field.md)
   - [Delete team project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Delete test runs (Project)](set-project-collection-level-permissions.md#project-level)

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
   

   :::column-end:::
   :::column span="1":::
   
   ### E
   
   - [Edit build definition (Object)](../../pipelines/policies/permissions.md)
   - [Edit build quality (Object)](../../pipelines/policies/permissions.md)
   - [Edit collection-level information (Collection)](set-project-collection-level-permissions.md)
   - [Edit build pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit instance-level information (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Edit process (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Edit project-level information (Project)](set-project-collection-level-permissions.md#project-level)
   - [Edit release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit release state (Object)](../../pipelines/policies/permissions.md)
   - [Edit shared Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [Edit shared Analytics views (Project)](set-project-collection-level-permissions.md#project-level)
   - [Edit task group (Object)](../../pipelines/policies/permissions.md)
   - [Edit this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Edit this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Edit work items in this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Enumerate tag definition (Project)](permissions.md#work-item-tags) 
   - [Events (Collection)](set-project-collection-level-permissions.md)
   - [Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)
   
   ### F-L
   
   - [Feeds](../../artifacts/feeds/feed-permissions.md)
   - [Field, delete (Collection)](set-project-collection-level-permissions.md)
   - [Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)
   - [Iteration paths (Object)](set-permissions-access-work-tracking.md)
   - [Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)
   - [Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - Library (Object, Role)
   - [Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   
   ### M-N
   
   - [Make requests on behalf of others (Collection)](permissions.md#make-requests-on-behalf-of-others)
   - [Manage audit streams (Collection)](permissions.md#manage-audit-streams-permission)
   - [Manage build resources (Collection)](set-project-collection-level-permissions.md#collection-level)

   - [Manage build qualities (Object)](../../pipelines/policies/permissions.md)
   - [Manage deployments (Object)](../../pipelines/policies/permissions.md)
   - [Manage enterprise policies (Collection)](permissions.md#manage-enterprise-policies-permission)
   - [Manage permissions (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Manage project properties (Project)](set-project-collection-level-permissions.md)

   - [Manage release approvers (Object)](../../pipelines/policies/permissions.md)
   - [Manage releases (Object)](../../pipelines/policies/permissions.md)
   - [Manage test plans (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test suites (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test configurations (Project)](set-project-collection-level-permissions.md#project-level)
   - [Manage test environments (Project)](set-project-collection-level-permissions.md#project-level)
   - [Manage test controllers (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)
   - [Merge, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Move work items out of this project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Notes, Git (Object)](../../repos/git/branch-permissions.md)
   - [Notifications (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   
   ### O-P
   
   - [Override check-in validation by build (Object)](../../pipelines/policies/permissions.md)
   - [Permanently delete work items (Project)](set-project-collection-level-permissions.md#project-level)
   - [Policies, Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Policies, Git repository (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Power BI (Analytics Service)](../../report/powerbi/analytics-security.md)
   - [Process (Collection)](set-permissions-access-work-tracking.md#process-permissions)
   - [Project properties (Project)](set-project-collection-level-permissions.md)
   - [Project-level information](set-project-collection-level-permissions.md)
   
   

   :::column-end:::
   :::column span="1":::
   
   ### Q-R
   
   - [Queue builds (Object)](../../pipelines/policies/permissions.md)
   - [Query (Object)](../../boards/queries/set-query-permissions.md)
   - [Query folder (Object)](../../boards/queries/set-query-permissions.md)
   - [Read (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Rename team project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Release pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Repository, Git (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Retain (build) indefinitely (Object)](../../pipelines/policies/permissions.md)
   
   ### S
   
   - [Secure files (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Service hooks](../../service-hooks/overview.md#subscription-permissions)
   - [Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)
   - [Sprint, define (Object)](set-permissions-access-work-tracking.md)
   - [Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)
   - [Stop builds (Object)](../../pipelines/policies/permissions.md)
   - [Suppress notifications for work item updates (Project)](set-project-collection-level-permissions.md#project-level)
   
   ### T
   
   - [Tags, Git (Object)](../../repos/git/branch-permissions.md)
   - [Tags, work items (Project)](set-permissions-access-work-tracking.md)
   - [Task groups (Object)](../../pipelines/policies/set-permissions.md)
   - [Team projects (Collection)](set-project-collection-level-permissions.md)
   - [Test artifacts, delete](set-permissions-access-work-tracking.md#delete-test-permissions)
   - [Test configurations (Project)](set-project-collection-level-permissions.md)
   - [Test controllers (Project)](set-project-collection-level-permissions.md)
   - [Test environments (Project)](set-project-collection-level-permissions.md)
   - [Test runs  (Project)](set-project-collection-level-permissions.md)
   - [TFVC repositories (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Trace settings (Collection)](set-project-collection-level-permissions.md)
   - [Trigger events (Collection)](set-project-collection-level-permissions.md#collection-level)
   
   ### U-V-W
   
   - [Update build information (Object)](../../pipelines/policies/permissions.md)
   - [Update build queue (Object)](../../pipelines/policies/permissions.md)
   - [Update project visibility (Project)](set-project-collection-level-permissions.md#project-level)
   - [Update tag definition (Project)](permissions.md#work-item-tags) 
   - [Use build resources (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [View analytics (Project)](permissions.md#view-analytics-permission)
   - [View audit log (Collection)](permissions.md#view-audit-log-permission)
   - [View build resources (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [View builds (Object)](../../pipelines/policies/permissions.md)
   - [View release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [View releases (Object)](../../pipelines/policies/permissions.md)
   - [View instance-level information (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [View project-level information (Project)](set-project-collection-level-permissions.md#project-level)
   - [View shared Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [View system synchronization information (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [View test runs (Project)](set-project-collection-level-permissions.md#project-level)
   - [View work items in this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [View permissions for this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [View permissions for this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Work items (Project)](set-permissions-access-work-tracking.md)
   - [Workspaces (Collection)](set-project-collection-level-permissions.md) 
   

   :::column-end:::
:::row-end:::


<hr/>

::: moniker-end


::: moniker range="azure-devops-2019 || azure-devops-2020"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.  
- **Server**: Permissions are managed at the instance level for a server   
- **Team**: Permissions are managed via the team administrator role.
 


:::row:::
   :::column span="1":::
   ### A
   
   - [Administer build permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer build resource permissions (Collection)](set-project-collection-level-permissions.md#collection-level)

   - [Administer release permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer process permissions (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Administer shelved changes (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Administer task group permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer shelved changes (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Administer warehouse (Server)](permissions.md#server-permissions)
   - [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)
   - [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   - [Alerts (Team)](/azure/devops/notifications/manage-team-group-notifications)
   - [Analytics Service (Project)](../../report/powerbi/analytics-security.md)
   - [Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [Area path (Object)](set-permissions-access-work-tracking.md)
   - [Azure Artifacts](../../artifacts/feeds/feed-permissions.md)



   
   ### B
   
   - [Branches, Git (Object)](../../repos/git/branch-permissions.md)
   - [Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Build pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build resources (Collection)](../../pipelines/policies/set-permissions.md)
   - [Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Builds, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Bypass branch policies (Object)](../../repos/git/branch-permissions.md)
   - [Bypass rules on work item updates (Project)](set-project-collection-level-permissions.md#project-level)
   
   ### C
   
   - [Change process of team project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Change work item type (Project)](set-project-collection-level-permissions.md)
   - [Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Collection-level information](set-project-collection-level-permissions.md)
   - [Configure Azure Boards (Team)](../settings/manage-teams.md)
   - [Create a workspace (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Create child nodes (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Create child nodes (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Create new projects (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Create process (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Create project collection (Server)](permissions.md#server-permissions)
   - [Create releases (Object)](../../pipelines/policies/permissions.md)
   - [Create tag definition (Project)](set-project-collection-level-permissions.md#project-level)
   - [Create test runs (Project)](set-project-collection-level-permissions.md#project-level)
   - [Contribute (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Customize process](set-project-collection-level-permissions.md#collection-level)
   
   ### D
   
   - [Dashboards, manage (Team)](../../report/dashboards/dashboard-permissions.md)
   - [Delete (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Delete and restore work items (Project)](set-project-collection-level-permissions.md#project-level)
   - [Delete build pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Delete builds (Object)](../../pipelines/policies/permissions.md)
   - [Delete field from organization (Collection)](../settings/work/customize-process-field.md)
   - [Delete project collection (Server)](permissions.md#server-permissions)
   - [Delete release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Delete release stage (Object)](../../pipelines/policies/permissions.md)
   - [Delete releases (Object)](../../pipelines/policies/permissions.md)
   - [Delete tag definition (Project)](permissions.md#work-item-tags) 
   - [Delete task group(Object)](../../pipelines/policies/permissions.md)
   - [Delete team project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Delete test runs (Project)](set-project-collection-level-permissions.md#project-level)
   - [Delete this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Delete this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)
   - [Delivery plans (Object)](../../organizations/security/set-permissions-access-work-tracking.md)
   - [Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Destroy builds (Object)](../../pipelines/policies/permissions.md)
   

   :::column-end:::
   :::column span="1":::
   
   ### E
   
   - [Edit build definition (Object)](../../pipelines/policies/permissions.md)
   - [Edit build quality (Object)](../../pipelines/policies/permissions.md)
   - [Edit collection-level information (Collection)](set-project-collection-level-permissions.md)
   - [Edit build pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit instance-level information (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Edit instance level information (Server)](permissions.md#server-permissions)
   - [Edit process (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Edit project-level information (Project)](set-project-collection-level-permissions.md#project-level)
   - [Edit release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit release state (Object)](../../pipelines/policies/permissions.md)
   - [Edit shared Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [Edit shared Analytics views (Project)](set-project-collection-level-permissions.md#project-level)
   - [Edit task group (Object)](../../pipelines/policies/permissions.md)
   - [Edit this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Edit this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Edit work items in this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Enumerate tag definition (Project)](permissions.md#work-item-tags) 
   - [Events (Collection)](set-project-collection-level-permissions.md)
   - [Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)
   
   ### F-L
   
   - [Feeds](../../artifacts/feeds/feed-permissions.md)
   - [Field, delete (Collection)](set-project-collection-level-permissions.md)
   - [Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)
   - [Iteration paths (Object)](set-permissions-access-work-tracking.md)
   - [Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)
   - [Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - Library (Object, Role)
   - [Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   
   ### M-N
   
   - [Make requests on behalf of others (Collection)](permissions.md#make-requests-on-behalf-of-others)
   - [Make requests on behalf of others (Server)](permissions.md#server-permissions)
   - [Manage build resources (Collection)](set-project-collection-level-permissions.md#collection-level)

   - [Manage build qualities (Object)](../../pipelines/policies/permissions.md)
   - [Manage deployments (Object)](../../pipelines/policies/permissions.md)
   - [Manage enterprise policies (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Manage permissions (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Manage project properties (Project)](set-project-collection-level-permissions.md)

   - [Manage release approvers (Object)](../../pipelines/policies/permissions.md)
   - [Manage releases (Object)](../../pipelines/policies/permissions.md)
   - [Manage test plans (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test suites (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [Manage test configurations (Project)](set-project-collection-level-permissions.md#project-level)
   - [Manage test environments (Project)](set-project-collection-level-permissions.md#project-level)
   - [Manage test controllers (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)
   - [Merge, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Move work items out of this project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Notes, Git (Object)](../../repos/git/branch-permissions.md)
   - [Notifications (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   
   ### O-P
   
   - [Override check-in validation by build (Object)](../../pipelines/policies/permissions.md)
   - [Permanently delete work items (Project)](set-project-collection-level-permissions.md#project-level)
   - [Policies, Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Policies, Git repository (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Power BI (Analytics Service)](../../report/powerbi/analytics-security.md)
   - [Process (Collection)](set-permissions-access-work-tracking.md#process-permissions)
   - [Project properties (Project)](set-project-collection-level-permissions.md)
   - [Project-level information](set-project-collection-level-permissions.md)
   
   

   :::column-end:::
   :::column span="1":::
   
   ### Q-R
   
   - [Queue builds (Object)](../../pipelines/policies/permissions.md)
   - [Query (Object)](../../boards/queries/set-query-permissions.md)
   - [Query folder (Object)](../../boards/queries/set-query-permissions.md)
   - [Read (Query, Object)](set-permissions-access-work-tracking.md#work-item-queries)
   - [Rename team project (Project)](set-project-collection-level-permissions.md#project-level)
   - [Release pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Repository, Git (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Retain (build) indefinitely (Object)](../../pipelines/policies/permissions.md)
   
   ### S
   
   - [Secure files (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Service hooks](../../service-hooks/overview.md#subscription-permissions)
   - [Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)
   - [Sprint, define (Object)](set-permissions-access-work-tracking.md)
   - [Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)
   - [Stop builds (Object)](../../pipelines/policies/permissions.md)
   - [Suppress notifications for work item updates (Project)](set-project-collection-level-permissions.md#project-level)
   
   ### T
   
   - [Tags, Git (Object)](../../repos/git/branch-permissions.md)
   - [Tags, work items (Project)](set-permissions-access-work-tracking.md)
   - [Task groups (Object)](../../pipelines/policies/set-permissions.md)
   - [Team projects (Collection)](set-project-collection-level-permissions.md)
   - [Test artifacts, delete](set-permissions-access-work-tracking.md#delete-test-permissions)
   - [Test configurations (Project)](set-project-collection-level-permissions.md)
   - [Test controllers (Project)](set-project-collection-level-permissions.md)
   - [Test environments (Project)](set-project-collection-level-permissions.md)
   - [Test runs  (Project)](set-project-collection-level-permissions.md)
   - [TFVC repositories (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Trace settings (Collection)](set-project-collection-level-permissions.md)
   - [Trigger events (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Trigger events (Server)](permissions.md#server-permissions)
   
   ### U-V-W
   
   - [Update build information (Object)](../../pipelines/policies/permissions.md)
   - [Update build queue (Object)](../../pipelines/policies/permissions.md)
   - [Update project visibility (Project)](set-project-collection-level-permissions.md#project-level)
   - [Update tag definition (Project)](permissions.md#work-item-tags) 
   - [Use build resources (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [View analytics(Project)](set-project-collection-level-permissions.md#project-level)
   - [View audit log (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [View build resources (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [View builds (Object)](../../pipelines/policies/permissions.md)
   - [View release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [View releases (Object)](../../pipelines/policies/permissions.md)
   - [View instance-level information (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [View instance level information (Server)](permissions.md#server-permissions)
   - [View project-level information (Project)](set-project-collection-level-permissions.md#project-level)
   - [View shared Analytics views (Object)](../../report/powerbi/analytics-security.md)
   - [View system synchronization information (Collection)](set-project-collection-level-permissions.md#collection-level)
   - [View test runs (Project)](set-project-collection-level-permissions.md#project-level)
   - [View work items in this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [View permissions for this node (Area Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)
   - [View permissions for this node (Iteration Path, Object)](set-permissions-access-work-tracking.md#set-permissions-area-path)

   - [Work items (Project)](set-permissions-access-work-tracking.md)
   - [Workspaces (Collection)](set-project-collection-level-permissions.md) 
   

   :::column-end:::
:::row-end:::


<hr/>
::: moniker-end

::: moniker range="<= tfs-2018"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.  
- **Server**: Permissions are managed at the instance level for a server   
- **Team**: Permissions are managed via the team administrator role.
 

:::row:::
   :::column span="1":::
   ### A
   

   - [Administer build permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer release permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer task group permissions (Object)](../../pipelines/policies/permissions.md)
   - [Administer warehouse (Server)](permissions.md#server-permissions)
   - [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)
   - [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   - [Alerts (Team)](/azure/devops/notifications/manage-team-group-notifications)
   - [Area path (Object)](set-permissions-access-work-tracking.md)
   - [Azure Artifacts](../../artifacts/feeds/feed-permissions.md)
   
   ### B
   
   - [Branches, Git (Object)](../../repos/git/branch-permissions.md)
   - [Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Build pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Build resources (Collection)](../../pipelines/policies/set-permissions.md)
   - [Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Builds, manage (Object)](../../pipelines/policies/set-permissions.md)
   - [Bypass branch policies (Object)](../../repos/git/branch-permissions.md)
   
   ### C
   
   - [Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Collection-level information](set-project-collection-level-permissions.md)
   - [Configure Agile tools (Team)](../settings/manage-teams.md)
   - [Create project collection (Server)](permissions.md#server-permissions)
   - [Create releases (Object)](../../pipelines/policies/permissions.md)
   
   
   ### D
   
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
   

   :::column-end:::
   :::column span="1":::
   
   ### E
   
   - [Edit build definition (Object)](../../pipelines/policies/permissions.md)
   - [Edit build quality (Object)](../../pipelines/policies/permissions.md)
   - [Edit collection-level information (Collection)](set-project-collection-level-permissions.md)
   - [Edit project-level information (Project)](set-project-collection-level-permissions.md)
   - [Edit release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [Edit release state (Object)](../../pipelines/policies/permissions.md)
   - [Edit task group (Object)](../../pipelines/policies/permissions.md)
   - [Events (Collection)](set-project-collection-level-permissions.md)
   - [Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)
   
   ### F-L
   
   - [Feeds](../../artifacts/feeds/feed-permissions.md)
   - [Field, delete (Collection)](set-project-collection-level-permissions.md)
   - [Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Inherited process (Object)](set-permissions-access-work-tracking.md)
   - [Iteration paths (Object)](set-permissions-access-work-tracking.md)
   - [Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)
   - [Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Library (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   
   ### M-N
   
   - [Manage build qualities (Object)](../../pipelines/policies/permissions.md)
   - [Manage deployments (Object)](../../pipelines/policies/permissions.md)
   - [Manage project properties (Project)](set-project-collection-level-permissions.md)
   - [Manage release approvers (Object)](../../pipelines/policies/permissions.md)
   - [Manage releases (Object)](../../pipelines/policies/permissions.md)
   - [Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)
   - [Merge, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Notes, Git (Object)](../../repos/git/branch-permissions.md)
   - [Notifications (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)
   
   ### O-P
   
   - [Override check-in validation by build (Object)](../../pipelines/policies/permissions.md)
   - [Policies, Git branch (Object)](../../repos/git/branch-permissions.md)
   - [Policies, Git repository (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Project collection (Server)](permissions.md#server-permissions)
   - [Project properties (Project)](set-project-collection-level-permissions.md)
   - [Project-level information](set-project-collection-level-permissions.md)
   
   

   :::column-end:::
   :::column span="1":::
   
   ### Q-R
   
   - [Queue builds (Object)](../../pipelines/policies/permissions.md)
   - [Query (Object)](../../boards/queries/set-query-permissions.md)
   - [Query folder (Object)](../../boards/queries/set-query-permissions.md)
   - [Release pipelines (Object)](../../pipelines/policies/set-permissions.md)
   - [Repository, Git (Object)](../../repos/git/set-git-repository-permissions.md)
   - [Retain (build) indefinitely (Object)](../../pipelines/policies/permissions.md)
   
   ### S
   
   - [Secure files (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)
   - [Service hook](../../service-hooks/overview.md#subscription-permissions)
   - [Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)
   - [Sprint, define (Object)](set-permissions-access-work-tracking.md)
   - [Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)
   - [Stop builds (Object)](../../pipelines/policies/permissions.md)
   - [Suppress notifications work items (Project)](set-project-collection-level-permissions.md)
   - [Synchronization information (Collection)](set-project-collection-level-permissions.md)
   
   ### T
   
   - [Tags, Git (Object)](../../repos/git/branch-permissions.md)
   - [Tags, work items (Project)](set-permissions-access-work-tracking.md)
   - [Task groups (Object)](../../pipelines/policies/set-permissions.md)
   - [Team projects (Collection)](set-project-collection-level-permissions.md)
   - [Test configurations (Project)](set-project-collection-level-permissions.md)
   - [Test controllers (Project)](set-project-collection-level-permissions.md)
   - [Test environments (Project)](set-project-collection-level-permissions.md)
   - [Test runs  (Project)](set-project-collection-level-permissions.md)
   - [TFVC repositories (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Trace settings (Collection)](set-project-collection-level-permissions.md)
   - [Trigger events (Server)](permissions.md#server-permissions)
   
   ### U-V-W
   
   - [Update build information (Object)](../../pipelines/policies/permissions.md)
   - [Update build queue (Object)](../../pipelines/policies/permissions.md)
   - [Use full Web Access features (Server)](permissions.md#server-permissions)
   - [Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md)
   - [View builds (Object)](../../pipelines/policies/permissions.md)
   - [View release pipeline (Object)](../../pipelines/policies/permissions.md)
   - [View releases (Object)](../../pipelines/policies/permissions.md)
   - [Work items (Project)](set-permissions-access-work-tracking.md)
   - [Workspaces (Collection)](set-project-collection-level-permissions.md) 
   

   :::column-end:::
:::row-end:::


<hr/>
::: moniker-end


## Edit project-level information

The **Edit project-level information** permission is set through the [Security admin page for a project](set-project-collection-level-permissions.md). It includes the ability to perform the following tasks 
for all projects defined in the organization or collection:

- Edit the project description
- [Modify project services visibility](../settings/set-services.md)
 
> [!NOTE]
> The permission to add or remove project-level security groups and add and manage project-level group membership is assigned to all members of the Project Administrators group. It isn't controlled by a permissions surfaced within the user interface. 


## Edit instance-level or collection-level information

The **Edit instance-level information** (formerly **Edit collection level information**) permission is set through the [Security admin page for an organization or collection](set-project-collection-level-permissions.md). It includes the ability to perform the following tasks 
for all team projects defined in the account or collection:
                
- Add and administer teams and all team-related features
- Edit collection-level permissions for users and groups in the collection
- Add or remove collection-level security groups from the collection
- Implicitly allows the user to modify version control permissions 
- Edit project level and collection level permission ACLs
- Edit event subscriptions or alerts for teams, projects, or collection level events.


## Related notes

- [Grant or restrict permissions to select tasks](restrict-access.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [About security roles](about-security-roles.md). 
- [Permissions and groups reference](permissions.md) 
- [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
- [Troubleshoot permissions](troubleshoot-permissions.md)
