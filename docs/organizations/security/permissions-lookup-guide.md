---
title: Permissions and role lookup guide 
titleSuffix: VSTS & TFS  
description: Index to permissions defined for Visual Studio Team Services (VSTS) and Team Foundation Server   
ms.technology: devops-security
ms.prod: devops
ms.assetid:  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 02/12/2018
monikerRange: '>= tfs-2013'
---

# Permissions lookup guide for VSTS & TFS

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Use this index to locate the topic on how to manage a specific permission. Most permissions are managed for an object, project, or collection. Other permissions are managed by adding users and groups to a role.   To learn more, see [About permissions and groups](about-permissions.md) and [About security roles](about-security-roles.md). 

Values in parenthesis indicate what level the permission is managed:

::: moniker range="vsts"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the team project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.   
- **Team**: Permissions are managed via the team administrator role.
 

> [!div class="mx-tdBreakAll"]  
> |  A through D | E through P| Q through W | 
> |-------------|----------|---------|---------|    
> |**A**<br/>- [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)<br/>- [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)<br/>- [Alerts (Collection)](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)<br/>- [Alerts (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Analytics Service (Project)](../../report/analytics/analytics-security.md)<br/>- [Analytics views (Object)](../../report/analytics/analytics-security.md)<br/>- [Area path (Object)](set-permissions-access-work-tracking.md)<br/>- [Area paths (Team)](../../work/scale/team-administrator-permissions.md)<br/><br/>**B**<br/>- [Branches, Git  (Object)](../../repos/git/branch-permissions.md)<br/>- [Branches, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Build pipelines (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Build resources (Collection)](../../pipelines/policies/set-permissions.md)<br/>- [Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Builds, manage (Object)](../../pipelines/policies/set-permissions.md)<br/><br/>**C**<br/>- [Change work item type (Project)](set-project-collection-level-permissions.md)<br/>- [Check ins, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Collection-level information](set-project-collection-level-permissions.md)<br/>- [Configure Agile tools (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Customize process](set-project-collection-level-permissions.md#collection-level)<br/><br/>**D**<br/>- [Dashboards, manage (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Delete field from account](../settings/work/customize-process-field.md)<br/>- [Delete test artifacts](set-permissions-access-work-tracking.md#delete-test-permissions)<br/>- [Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)<br/>- [Delivery plans (Object)](set-permissions-access-work-tracking.md#plan-permissions)<br/>- [Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md#deployment-group)<br/>- [Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)|**E**<br/>- [Edit collection-level information (Collection)](set-project-collection-level-permissions.md)<br/>- [Edit process](set-project-collection-level-permissions.md#collection-level)<br/>- [Edit team project-level information (Project)](set-project-collection-level-permissions.md)<br/>- [Events (Collection)](set-project-collection-level-permissions.md)<br/>- [Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)<br/><br/>**F thru L**<br/>- [Feeds](../../package/feeds/feed-permissions.md)<br/>- [Field, delete (Collection)](set-project-collection-level-permissions.md)<br/>- [Git branch (Object)](../../repos/git/branch-permissions.md)<br/>- [Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)<br/>- [Iteration paths (Object)](set-permissions-access-work-tracking.md)<br/>- [Iteration paths (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Kanban board, customize (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Labels, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Library (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)<br/>- [Locks, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/><br/>**M thru P**<br/>- [Manage project properties (Project)](set-project-collection-level-permissions.md)<br/>- [Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)<br/>- [Merge, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Move or delete work items (Project)](set-project-collection-level-permissions.md)<br/>- [Notes, Git (Object)](../../repos/git/branch-permissions.md)<br/>-  [Notifications (Collection)](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)<br/>- [Package Management](../../package/feeds/feed-permissions.md)<br/>- [Policies, Git branch (Object)](../../repos/git/branch-permissions.md)<br/>- [Policies, Git repository (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Power BI (Analytics Service)](../../report/analytics/analytics-security.md)<br/>- [Process (Collection)](set-permissions-access-work-tracking.md#process-permissions)<br/>-  [Project properties (Project)](set-project-collection-level-permissions.md)<br/>- [Project-level information](set-project-collection-level-permissions.md)|**Q thru R**<br/>- [Query (Object)](../../work/track/set-query-permissions.md)<br/>- [Query folder (Object)](../../work/track/set-query-permissions.md)<br/>- [Release pipelines (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Repository, Git (Object)](set-git-tfvc-repository-permissions.md)<br/><br/>**S**<br/>- [Secure files (Object, Role)](../../pipelines/policies/set-permissions.md#library)<br/>- [Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)<br/>- [Service hook](../../service-hooks/overview.md#subscription-permissions)<br/>- [Set team defaults (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)<br/>- [Sprint, define (Object)](set-permissions-access-work-tracking.md)<br/>- [Sprints, select (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Synchronization information (Collection)](set-project-collection-level-permissions.md)<br/><br/>**T**<br/>- [Tags, Git (Oject)](../../repos/git/branch-permissions.md)<br/>- [Tags, work items (Project)](set-permissions-access-work-tracking.md)<br/>- [Task groups (Object)](../../pipelines/policies/set-permissions.md#task-group)<br/>-  [Team projects (Collection)](set-project-collection-level-permissions.md)<br/>- [Team rooms (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Test configurations (Project)](set-project-collection-level-permissions.md)<br/>- [Test controllers (Project)](set-project-collection-level-permissions.md)<br/>- [Test environments (Project)](set-project-collection-level-permissions.md)<br/>- [Test runs  (Project)](set-project-collection-level-permissions.md)<br/>- [TFVC repositories (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Trace settings (Collection)](set-project-collection-level-permissions.md)<br/><br/>**V-W**<br/>- [Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)<br/>- [Work items (Project)](set-permissions-access-work-tracking.md)<br/>- [Workspaces (Collection)](set-project-collection-level-permissions.md) | 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the team project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.  
- **Server**: Permissions are managed at the instance level for a TFS server   
- **Team**: Permissions are managed via the team administrator role.
 

> [!div class="mx-tdBreakAll"]  
> |  A through D | E through P| Q through W | 
> |-------------|----------|---------|---------|    
> |**A**<br/>- [Administer warehouse (Server)](permissions.md#server-permissions)<br/>- [Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)<br/>- [Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)<br/>- [Alerts (Collection)](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)<br/>- [Alerts (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Area path (Object)](set-permissions-access-work-tracking.md)<br/>- [Area paths (Team)](../../work/scale/team-administrator-permissions.md)<br/><br/>**B**<br/>- [Branches, Git  (Object)](../../repos/git/branch-permissions.md)<br/>- [Branches, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Build pipelines (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Build resources (Collection)](../../pipelines/policies/set-permissions.md)<br/>- [Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Builds, manage (Object)](../../pipelines/policies/set-permissions.md)<br/><br/>**C**<br/>- [Change work item type (Project)](set-project-collection-level-permissions.md)<br/>- [Check ins, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Collection-level information](set-project-collection-level-permissions.md)<br/>- [Configure Agile tools (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Create team project collection (Server)](permissions.md#server-permissions)<br/>- [Customize process](set-project-collection-level-permissions.md#collection-level)<br/><br/>**D**<br/>- [Dashboards, manage (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Delete team project collection (Server)](permissions.md#server-permissions)<br/>- [Delete test artifacts](set-permissions-access-work-tracking.md#delete-test-permissions)<br/>- [Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)<br/>- [Delivery plans (Object)](set-permissions-access-work-tracking.md#plan-permissions)<br/>- [Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md#deployment-group)<br/>- [Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)|**E**<br/>- [Edit collection-level information (Collection)](set-project-collection-level-permissions.md)<br/>- [Edit instance level information (Server)](permissions.md#server-permissions)<br/>- [Edit process](set-project-collection-level-permissions.md#collection-level)<br/>- [Edit team project-level information (Project)](set-project-collection-level-permissions.md)<br/>- [Events (Collection)](set-project-collection-level-permissions.md)<br/>- [Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)<br/><br/>**F thru L**<br/>- [Feeds](../../package/feeds/feed-permissions.md)<br/>- [Field, delete (Collection)](set-project-collection-level-permissions.md)<br/>- [Git branch (Object)](../../repos/git/branch-permissions.md)<br/>- [Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)<br/>- [Iteration paths (Object)](set-permissions-access-work-tracking.md)<br/>- [Iteration paths (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Kanban board, customize (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Labels, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Library (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)<br/>- [Locks, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/><br/>**M thru P**<br/>- [Manage project properties (Project)](set-project-collection-level-permissions.md)<br/>- [Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)<br/>- [Merge, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Move or delete work items (Project)](set-project-collection-level-permissions.md)<br/>- [Notes, Git (Object)](../../repos/git/branch-permissions.md)<br/>-  [Notifications (Collection)](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)<br/>- [Package Management](../../package/feeds/feed-permissions.md)<br/>- [Policies, Git branch (Object)](../../repos/git/branch-permissions.md)<br/>- [Policies, Git repository (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Power BI (Analytics Service)](../../report/analytics/analytics-security.md)<br/>- [Process (Collection)](set-permissions-access-work-tracking.md#process-permissions)<br/>-  [Project properties (Project)](set-project-collection-level-permissions.md)<br/>- [Project-level information](set-project-collection-level-permissions.md)|**Q thru R**<br/>- [Query (Object)](../../work/track/set-query-permissions.md)<br/>- [Query folder (Object)](../../work/track/set-query-permissions.md)<br/>- [Release pipelines (Object)](../../pipelines/policies/set-permissions.md)<br/>- [Repository, Git (Object)](set-git-tfvc-repository-permissions.md)<br/><br/>**S**<br/>- [Secure files (Object, Role)](../../pipelines/policies/set-permissions.md#library)<br/>- [Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)<br/>- [Service hook](../../service-hooks/overview.md#subscription-permissions)<br/>- [Set team defaults (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)<br/>- [Sprint, define (Object)](set-permissions-access-work-tracking.md)<br/>- [Sprints, select (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Synchronization information (Collection)](set-project-collection-level-permissions.md)<br/><br/>**T**<br/>- [Tags, Git (Oject)](../../repos/git/branch-permissions.md)<br/>- [Tags, work items (Project)](set-permissions-access-work-tracking.md)<br/>- [Task groups (Object)](../../pipelines/policies/set-permissions.md#task-group)<br/>- [Team projects (Collection)](set-project-collection-level-permissions.md)<br/>- [Team rooms (Team)](../../work/scale/team-administrator-permissions.md)<br/>- [Test configurations (Project)](set-project-collection-level-permissions.md)<br/>- [Test controllers (Project)](set-project-collection-level-permissions.md)<br/>- [Test environments (Project)](set-project-collection-level-permissions.md)<br/>- [Test runs  (Project)](set-project-collection-level-permissions.md)<br/>- [TFVC repositories (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Trace settings (Collection)](set-project-collection-level-permissions.md)<br/>- [Trigger events (Server)](permissions.md#server-permissions)<br/><br/>**U-V-W**<br/>- [Use full Web Access features (Server)](permissions.md#server-permissions)<br/>- [Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)<br/>- [Work items (Project)](set-permissions-access-work-tracking.md)<br/>- [Workspaces  (Collection)](set-project-collection-level-permissions.md) | 

::: moniker-end


## Edit project-level information

The **Edit project-level information** permission is set through the [Security admin page for a team project](set-project-collection-level-permissions.md). It includes the ability to perform the following tasks 
for all team projects defined in the account or collection:
				
- Create and modify areas and iterations
- Edit check-in policies
- Edit shared work item queries
- Edit team project level permission ACL</li>
- Manage process templates
- Customize a team project
- Create and modify global lists
- Edit event subscriptions or alerts for teams or team project events.


## Edit instance-level or collection-level information

The **Edit instance-level information** (formerly **Edit collection level information**) permission is set through the [Security admin page for an account or collection](set-project-collection-level-permissions.md). It includes the ability to perform the following tasks 
for all team projects defined in the account or collection:
				
- Add and administer teams and all team-related features
- Create and modify areas and iterations
- Edit check-in policies
- Edit shared work item queries
- Edit team project level and collection level permission ACLs
- Manage process templates
- Customize a team project or process
- Create and modify global lists
- Edit event subscriptions or alerts for teams, team projects, or collection level events.


## Related notes

- [Grant or restrict permissions to select tasks](restrict-access.md)
- [About permissions and groups](about-permissions.md)
- [About security roles](about-security-roles.md). 
- [Permissions and groups reference](permissions.md) 
- [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
