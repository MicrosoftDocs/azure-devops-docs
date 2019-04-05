---
title: Permissions and role lookup guide 
titleSuffix: Azure DevOps
description: Index to permissions defined for Azure DevOps
ms.technology: devops-security
ms.prod: devops
ms.assetid:  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---

# Permissions lookup guide for Azure DevOps

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Use this index to locate the topic on how to manage a specific permission. Most permissions are managed for an object, project, or collection. Other permissions are managed by adding users and groups to a role.   To learn more, see [About permissions and groups](about-permissions.md) and [About security roles](about-security-roles.md). 

Values in parenthesis indicate what level the permission is managed:

::: moniker range="azure-devops"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.   
- **Team**: Permissions are managed via the team administrator role.

<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li>[Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Alerts (Collection)](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)</li>
<li>[Alerts (Team)](../../notifications/howto-manage-team-notifications.md)</li>
<li>[Analytics Service (Project)](../../report/powerbi/analytics-security.md)</li>
<li>[Analytics views (Object)](../../report/powerbi/analytics-security.md)</li>
<li>[Area path (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Azure Artifacts](../../artifacts/feeds/feed-permissions.md)</li>
</ul>
<h3>B</h3>
<ul>
<li>[Branches, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Branches, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Build pipelines (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build resources (Collection)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Builds, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Bypass branch policies (Object)](../../repos/git/branch-permissions.md)</li>
</ul>
<h3>C</h3>
<ul>
<li>[Change work item type (Project)](set-project-collection-level-permissions.md)</li>
<li>[Check ins, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Collection-level information](set-project-collection-level-permissions.md)</li>
<li>[Configure Azure Boards (Team)](../settings/manage-teams.md)</li>
<li>[Customize process](set-project-collection-level-permissions.md#collection-level)</li>
</ul>
<h3>D</h3>
<ul>
<li>[Dashboards, manage (Team)](../../report/dashboards/dashboards.md)</li>
<li>[Delete field from account](../settings/work/customize-process-field.md)</li>
<li>[Delete test artifacts](set-permissions-access-work-tracking.md#delete-test-permissions)</li>
<li>[Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)</li>
<li>[Delivery plans (Object)](../../organizations/security/set-permissions-access-work-tracking.md)</li>
<li>[Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md#deployment-group)</li>
<li>[Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
</ul>
</td>
<td width="33%">
<h3>E</h3>
<ul>
<li>[Edit collection-level information (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Edit process](set-project-collection-level-permissions.md#collection-level)</li>
<li>[Edit project-level information (Project)](set-project-collection-level-permissions.md)</li>
<li>[Events (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)</li>
</ul>
<h3>F-L</h3>
<ul>
<li>[Feeds](../../artifacts/feeds/feed-permissions.md)</li>
<li>[Field, delete (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Git branch (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)</li>
<li>[Iteration paths (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)</li>
<li>[Labels, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Library (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)</li>
<li>[Locks, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
</ul>
<h3>M-N</h3>
<ul>
<li>[Manage project properties (Project)](set-project-collection-level-permissions.md)</li>
<li>[Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)</li>
<li>[Merge, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Move work items (Project)](set-project-collection-level-permissions.md)</li>
<li>[Notes, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Notifications (Collection)](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)</li>
</ul>
<h3>P</h3>
<ul>
<li>[Policies, Git branch (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Policies, Git repository (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Power BI (Analytics Service)](../../report/powerbi/analytics-security.md)</li>
<li>[Process (Collection)](set-permissions-access-work-tracking.md#process-permissions)</li>
<li>[Project properties (Project)](set-project-collection-level-permissions.md)</li>
<li>[Project-level information](set-project-collection-level-permissions.md)</li>
</ul>
</ul>
</td>
<td width="33%">
<h3>Q-R</h3>
<ul>
<li>[Query (Object)](../../boards/queries/set-query-permissions.md)</li>
<li>[Query folder (Object)](../../boards/queries/set-query-permissions.md)</li>
<li>[Release pipelines (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Repository, Git (Object)](set-git-tfvc-repository-permissions.md)</li>
</ul>
<h3>S</h3>
<ul>
<li>[Secure files (Object, Role)](../../pipelines/policies/set-permissions.md#library)</li>
<li>[Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Service hooks](../../service-hooks/overview.md#subscription-permissions)</li>
<li>[Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Sprint, define (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)</li>
<li>[Suppress notifications work items(Project)](set-project-collection-level-permissions.md)</li>
</ul>
<h3>T</h3>
<ul>
<li>[Tags, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Tags, work items (Project)](set-permissions-access-work-tracking.md)</li>
<li>[Task groups (Object)](../../pipelines/policies/set-permissions.md#task-group)</li>
<li>[Team projects (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Test artifacts, delete](set-permissions-access-work-tracking.md#delete-test-permissions)</li>
<li>[Test configurations (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test controllers (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test environments (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test runs  (Project)](set-project-collection-level-permissions.md)</li>
<li>[TFVC repositories (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Trace settings (Collection)](set-project-collection-level-permissions.md)</li>
</ul>
<h3>V-W</h3>
<ul>
<li>[Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)</li>
<li>[Work items (Project)](set-permissions-access-work-tracking.md)</li>
<li>[Workspaces (Collection)](set-project-collection-level-permissions.md)</li> 
</ul>
</td>
</tr>
</tbody>
</table>

<hr/>

::: moniker-end


::: moniker range="azure-devops-2019"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.  
- **Server**: Permissions are managed at the instance level for a server   
- **Team**: Permissions are managed via the team administrator role.
 

<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li>[Administer warehouse (Server)](permissions.md#server-permissions)</li>
<li>[Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Alerts (Collection)](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)</li>
<li>[Alerts (Team)](../../notifications/howto-manage-team-notifications.md)</li>
<li>[Analytics Service (Project)](../../report/powerbi/analytics-security.md)</li>
<li>[Analytics views (Object)](../../report/powerbi/analytics-security.md)</li>
<li>[Area path (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Azure Artifacts](../../artifacts/feeds/feed-permissions.md)</li>
</ul>
<h3>B</h3>
<ul>
<li>[Branches, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Branches, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Build pipelines (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build resources (Collection)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Builds, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Bypass branch policies (Object)](../../repos/git/branch-permissions.md)</li>
</ul>
<h3>C</h3>
<ul>
<li>[Change work item type (Project)](set-project-collection-level-permissions.md)</li>
<li>[Check ins, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Collection-level information](set-project-collection-level-permissions.md)</li>
<li>[Configure Azure Boards (Team)](../settings/manage-teams.md)</li>
<li>[Create project collection (Server)](permissions.md#server-permissions)</li>
<li>[Customize process](set-project-collection-level-permissions.md#collection-level)</li>
</li>
</ul>
<h3>D</h3>
<ul>
<li>[Dashboards, manage (Team)](../../report/dashboards/dashboards.md)</li>
<li>[Delete field from account](../settings/work/customize-process-field.md)</li>
<li>[Delete project collection (Server)](permissions.md#server-permissions)</li>
<li>[Delete test artifacts](set-permissions-access-work-tracking.md#delete-test-permissions)</li>
<li>[Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)</li>
<li>[Delivery plans (Object)](../../organizations/security/set-permissions-access-work-tracking.md)</li>
<li>[Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md#deployment-group)</li>
<li>[Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
</ul>
</td>
<td width="33%">
<h3>E</h3>
<ul>
<li>[Edit collection-level information (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Edit instance level information (Server)](permissions.md#server-permissions)</li>
<li>[Edit process](set-project-collection-level-permissions.md#collection-level)</li>
<li>[Edit project-level information (Project)](set-project-collection-level-permissions.md)</li>
<li>[Events (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)</li>
</ul>
<h3>F-L</h3>
<ul>
<li>[Feeds](../../artifacts/feeds/feed-permissions.md)</li>
<li>[Field, delete (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Git branch (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)</li>
<li>[Iteration paths (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)</li>
<li>[Labels, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Library (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)</li>
<li>[Locks, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
</ul>
<h3>M-N</h3>
<ul>
<li>[Manage project properties (Project)](set-project-collection-level-permissions.md)</li>
<li>[Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)</li>
<li>[Merge, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Move work items (Project)](set-project-collection-level-permissions.md)</li>
<li>[Notes, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Notifications (Collection)](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)</li>
</ul>
<h3>P</h3>
<ul>
<li>[Policies, Git branch (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Policies, Git repository (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Power BI (Analytics Service)](../../report/powerbi/analytics-security.md)</li>
<li>[Process (Collection)](set-permissions-access-work-tracking.md#process-permissions)</li>
<li>[Project collection (Server)](permissions.md#server-permissions)</li>
<li>[Project properties (Project)](set-project-collection-level-permissions.md)</li>
<li>[Project-level information](set-project-collection-level-permissions.md)</li>
</ul>
</ul>
</td>
<td width="33%">
<h3>Q-R</h3>
<ul>
<li>[Query (Object)](../../boards/queries/set-query-permissions.md)</li>
<li>[Query folder (Object)](../../boards/queries/set-query-permissions.md)</li>
<li>[Release pipelines (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Repository, Git (Object)](set-git-tfvc-repository-permissions.md)</li>
</ul>
<h3>S</h3>
<ul>
<li>[Secure files (Object, Role)](../../pipelines/policies/set-permissions.md#library)</li>
<li>[Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Service hooks](../../service-hooks/overview.md#subscription-permissions)</li>
<li>[Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Sprint, define (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)</li>
<li>[Suppress notifications work items (Project)](set-project-collection-level-permissions.md)</li>
<li>[Synchronization information (Collection)](set-project-collection-level-permissions.md)</li>
</ul>
<h3>T</h3>
<ul>
<li>[Tags, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Tags, work items (Project)](set-permissions-access-work-tracking.md)</li>
<li>[Task groups (Object)](../../pipelines/policies/set-permissions.md#task-group)</li>
<li>[Team projects (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Test artifacts, delete](set-permissions-access-work-tracking.md#delete-test-permissions)</li>
<li>[Test configurations (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test controllers (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test environments (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test runs (Project)](set-project-collection-level-permissions.md)</li>
<li>[TFVC repositories (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Trace settings (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Trigger events (Server)](permissions.md#server-permissions)</li>
</ul>
<h3>U-V-W</h3>
<ul>
<li>[Use full Web Access features (Server)](permissions.md#server-permissions)</li>
<li>[Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)</li>
<li>[Work items (Project)](set-permissions-access-work-tracking.md)</li>
<li>[Workspaces (Collection)](set-project-collection-level-permissions.md)</li> 
</ul>
</td>
</tr>
</tbody>
</table>

<hr/>
::: moniker-end

::: moniker range="<= tfs-2018"

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Role**: Permissions are managed through a security role.  
- **Server**: Permissions are managed at the instance level for a server   
- **Team**: Permissions are managed via the team administrator role.
 

<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li>[Administer warehouse (Server)](permissions.md#server-permissions)</li>
<li>[Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Alerts (Collection)](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)</li>
<li>[Alerts (Team)](../../notifications/howto-manage-team-notifications.md)</li>
<li>[Area path (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Azure Artifacts](../../artifacts/feeds/feed-permissions.md)</li>
</ul>
<h3>B</h3>
<ul>
<li>[Branches, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Branches, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Build pipelines (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build resources (Collection)](../../pipelines/policies/set-permissions.md)</li>
<li>[Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Builds, manage (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Bypass branch policies (Object)](../../repos/git/branch-permissions.md)</li>
</ul>
<h3>C</h3>
<ul>
<li>[Check ins, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Collection-level information](set-project-collection-level-permissions.md)</li>
<li>[Configure Agile tools (Team)](../settings/manage-teams.md)</li>
<li>[Create project collection (Server)](permissions.md#server-permissions)</li>
</li>
</ul>
<h3>D</h3>
<ul>
<li>[Dashboards, manage (Team)](../../report/dashboards/dashboards.md)</li>
<li>[Delete field from account](../settings/work/customize-process-field.md)</li>
<li>[Delete project collection (Server)](permissions.md#server-permissions)</li>
<li>[Delete test artifacts](set-permissions-access-work-tracking.md#delete-test-permissions)</li>
<li>[Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)</li>
<li>[Delivery plans (Object)](../../organizations/security/set-permissions-access-work-tracking.md)</li>
<li>[Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md#deployment-group)</li>
<li>[Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
</ul>
</td>
<td width="33%">
<h3>E</h3>
<ul>
<li>[Edit collection-level information (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Edit project-level information (Project)](set-project-collection-level-permissions.md)</li>
<li>[Events (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)</li>
</ul>
<h3>F-L</h3>
<ul>
<li>[Feeds](../../artifacts/feeds/feed-permissions.md)</li>
<li>[Field, delete (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Git branch (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Inherited process (Object)](set-permissions-access-work-tracking.md#process-permissions)</li>
<li>[Iteration paths (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)</li>
<li>[Labels, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Library (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)</li>
<li>[Locks, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
</ul>
<h3>M-N</h3>
<ul>
<li>[Manage project properties (Project)](set-project-collection-level-permissions.md)</li>
<li>[Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)</li>
<li>[Merge, TFVC (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Notes, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Notifications (Collection)](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions)</li>
</ul>
<h3>P</h3>
<ul>
<li>[Policies, Git branch (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Policies, Git repository (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Project collection (Server)](permissions.md#server-permissions)</li>
<li>[Project properties (Project)](set-project-collection-level-permissions.md)</li>
<li>[Project-level information](set-project-collection-level-permissions.md)</li>
</ul>
</ul>
</td>
<td width="33%">
<h3>Q-R</h3>
<ul>
<li>[Query (Object)](../../boards/queries/set-query-permissions.md)</li>
<li>[Query folder (Object)](../../boards/queries/set-query-permissions.md)</li>
<li>[Release pipelines (Object)](../../pipelines/policies/set-permissions.md)</li>
<li>[Repository, Git (Object)](set-git-tfvc-repository-permissions.md)</li>
</ul>
<h3>S</h3>
<ul>
<li>[Secure files (Object, Role)](../../pipelines/policies/set-permissions.md#library)</li>
<li>[Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)</li>
<li>[Service hook](../../service-hooks/overview.md#subscription-permissions)</li>
<li>[Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Sprint, define (Object)](set-permissions-access-work-tracking.md)</li>
<li>[Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)</li>
<li>[Suppress notifications work items (Project)](set-project-collection-level-permissions.md)</li>
<li>[Synchronization information (Collection)](set-project-collection-level-permissions.md)</li>
</ul>
<h3>T</h3>
<ul>
<li>[Tags, Git (Object)](../../repos/git/branch-permissions.md)</li>
<li>[Tags, work items (Project)](set-permissions-access-work-tracking.md)</li>
<li>[Task groups (Object)](../../pipelines/policies/set-permissions.md#task-group)</li>
<li>[Team projects (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Test configurations (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test controllers (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test environments (Project)](set-project-collection-level-permissions.md)</li>
<li>[Test runs  (Project)](set-project-collection-level-permissions.md)</li>
<li>[TFVC repositories (Object)](set-git-tfvc-repository-permissions.md)</li>
<li>[Trace settings (Collection)](set-project-collection-level-permissions.md)</li>
<li>[Trigger events (Server)](permissions.md#server-permissions)</li>
</ul>
<h3>U-V-W</h3>
<ul>
<li>[Use full Web Access features (Server)](permissions.md#server-permissions)</li>
<li>[Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md#variable-group)</li>
<li>[Work items (Project)](set-permissions-access-work-tracking.md)</li>
<li>[Workspaces (Collection)](set-project-collection-level-permissions.md)</li> 
</ul>
</td>
</tr>
</tbody>
</table>

<hr/>
::: moniker-end


## Edit project-level information

The **Edit project-level information** permission is set through the [Security admin page for a project](set-project-collection-level-permissions.md). It includes the ability to perform the following tasks 
for all team projects defined in the account or collection:
				
- Create and modify areas and iterations
- Edit check-in policies
- Edit shared work item queries
- Edit project level permission ACL</li>
- Manage process templates
- Customize a project
- Create and modify global lists
- Edit event subscriptions or alerts for teams or project events.


## Edit instance-level or collection-level information

The **Edit instance-level information** (formerly **Edit collection level information**) permission is set through the [Security admin page for an account or collection](set-project-collection-level-permissions.md). It includes the ability to perform the following tasks 
for all team projects defined in the account or collection:
				
- Add and administer teams and all team-related features
- Create and modify areas and iterations
- Edit check-in policies
- Edit shared work item queries
- Edit project level and collection level permission ACLs
- Manage process templates
- Customize a project or process
- Create and modify global lists
- Edit event subscriptions or alerts for teams, team projects, or collection level events.


## Related notes

- [Grant or restrict permissions to select tasks](restrict-access.md)
- [About permissions and groups](about-permissions.md)
- [About security roles](about-security-roles.md). 
- [Permissions and groups reference](permissions.md) 
- [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
