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

<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Administer build permissions (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer build resource permissions (Collection)</a></li>

<li><a href="../../pipelines/policies/permissions.md">Administer release permissions (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer process permissions (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer shelved changes (Collection)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Administer task group permissions (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer shelved changes (Collection)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)">Agent queues (Project, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)">Agent pools (Collection, Role)</a></li>
<li><a href="/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions" data-raw-source="[Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)">Alerts (Collection)</a></li>
<li><a href="/azure/devops/notifications/manage-team-group-notifications" data-raw-source="[Alerts (Team)](../../notifications/manage-team-group-global-organization-notifications.md)">Alerts (Team)</a></li>
<li><a href="../../report/powerbi/analytics-security.md" data-raw-source="[Analytics Service (Project)](../../report/powerbi/analytics-security.md)">Analytics Service (Project)</a></li>
<li><a href="../../report/powerbi/analytics-security.md" data-raw-source="[Analytics views (Object)](../../report/powerbi/analytics-security.md)">Analytics views (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Area path (Object)](set-permissions-access-work-tracking.md)">Area path (Object)</a></li>
<li><a href="../../artifacts/feeds/feed-permissions.md" data-raw-source="[Azure Artifacts](../../artifacts/feeds/feed-permissions.md)">Azure Artifacts</a></li>
<li><a href="permissions.md#manage-audit-streams-permission">Audit log</a></li>
<li><a href="permissions.md#view-audit-log-permission">Audit streams</a></li>


</ul>
<h3>B</h3>
<ul>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Branches, Git (Object)](../../repos/git/branch-permissions.md)">Branches, Git (Object)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Branches, TFVC (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build pipelines (Object)](../../pipelines/policies/set-permissions.md)">Build pipelines (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)">Build quality, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)">Build queue, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build resources (Collection)](../../pipelines/policies/set-permissions.md)">Build resources (Collection)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)">Build permissions, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Builds, manage (Object)](../../pipelines/policies/set-permissions.md)">Builds, manage (Object)</a></li>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Bypass branch policies (Object)](../../repos/git/branch-permissions.md)">Bypass branch policies (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Bypass rules on work item updates (Project)</a></li>
</ul>
<h3>C</h3>
<ul>
<li><a href="set-project-collection-level-permissions.md#project-level">Change process of team project (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Change work item type (Project)](set-project-collection-level-permissions.md)">Change work item type (Project)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Check ins, TFVC (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Collection-level information](set-project-collection-level-permissions.md)">Collection-level information</a></li>
<li><a href="../settings/manage-teams.md" data-raw-source="[Configure Azure Boards (Team)](../settings/manage-teams.md)">Configure Azure Boards (Team)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Create a workspace (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Create child nodes (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Create child nodes (Iteration Path, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Create new projects (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Create process (Collection)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Create releases (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Create tag definition (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Create test runs (Project)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Contribute (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level" data-raw-source="[Customize process](set-project-collection-level-permissions.md#collection-level)">Customize process</a></li>
</ul>
<h3>D</h3>
<ul>
<li><a href="../../report/dashboards/dashboard-permissions.md">Dashboards, manage (Team)</a></li>
<li><a href="permissions.md#delete-audit-streams-permission">Delete audit streams (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Delete (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Delete and restore work items (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete build pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete builds (Object)</a></li>
<li><a href="../settings/work/customize-process-field.md" data-raw-source="[Delete field from account](../settings/work/customize-process-field.md)">Delete field from organization (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Delete team project (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Delete test runs (Project)</a></li>

<li><a href="../../pipelines/policies/permissions.md">Delete release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete release stage (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete releases (Object)</a></li>
<li><a href="permissions.md#work-item-tags">Delete tag definition (Project)</a></li> 
<li><a href="../../pipelines/policies/permissions.md">Delete task group(Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Delete this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Delete this node (Iteration Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#move-delete-permissions">Delete work items</a></li>
<li><a href="../../organizations/security/set-permissions-access-work-tracking.md">Delivery plans (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md)">Deployment groups (Object, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)">Deployment pools (Collection, Role)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Destroy builds (Object)</a></li>
</ul>
</td>
<td width="33%">
<h3>E</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Edit build definition (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit build quality (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md">Edit collection-level information (Collection)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit build pipeline (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Edit instance-level information (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Edit process (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Edit project-level information (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit release state (Object)</a></li>
<li><a href="../../report/powerbi/analytics-security.md">Edit shared Analytics views (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Edit shared Analytics views (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit task group (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Edit this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Edit this node (Iteration Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Edit work items in this node (Area Path, Object)</a></li>
<li><a href="permissions.md#work-item-tags">Enumerate tag definition (Project)</a></li> 
<li><a href="set-project-collection-level-permissions.md">Events (Collection)</a></li>
<li><a href="../../marketplace/how-to/grant-permissions.md">Extensions (Collection, Role)</a></li>
</ul>
<h3>F-L</h3>
<ul>
<li><a href="../../artifacts/feeds/feed-permissions.md">Feeds</a></li>
<li><a href="set-project-collection-level-permissions.md">Field, delete (Collection)</a></li>
<li><a href="../../repos/git/branch-permissions.md">Git branch (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#process-permissions">Inherited process (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Iteration paths (Object)](set-permissions-access-work-tracking.md)">Iteration paths (Object)</a></li>
<li><a href="../../organizations/settings/manage-teams.md" data-raw-source="[Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)">Kanban board, customize (Team)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Labels, TFVC (Object)</a></li>
<li>Library (Object, Role)</li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Locks, TFVC (Object)</a></li>
</ul>
<h3>M-N</h3>
<ul>
<li><a href="permissions.md#make-requests-on-behalf-of-others">Make requests on behalf of others (Collection)</a></li>
<li><a href="permissions.md#manage-audit-streams-permission">Manage audit streams (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Manage build resources (Collection)</a></li>

<li><a href="../../pipelines/policies/permissions.md">Manage build qualities (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Manage deployments (Object)</a></li>
<li><a href="permissions.md#manage-enterprise-policies-permission">Manage enterprise policies (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Manage permissions (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md">Manage project properties (Project)</a></li>

<li><a href="../../pipelines/policies/permissions.md">Manage release approvers (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Manage releases (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Manage test plans (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Manage test suites (Area Path, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Manage test configurations (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Manage test environments (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Manage test controllers (Collection)</a></li>
<li><a href="../../marketplace/how-to/grant-permissions.md">Marketplace extensions (Collection, Role)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md">Merge, TFVC (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Move work items out of this project (Project)</a></li>
<li><a href="../../repos/git/branch-permissions.md">Notes, Git (Object)</a></li>
<li><a href="/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions" >Notifications (Collection)</a></li>
</ul>
<h3>O-P</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Override check-in validation by build (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Permanently delete work items (Project)</a></li>
<li><a href="../../repos/git/branch-permissions.md">Policies, Git branch (Object)</a></li>
<li><a href="../../repos/git/set-git-repository-permissions.md">Policies, Git repository (Object)</a></li>
<li><a href="../../report/powerbi/analytics-security.md">Power BI (Analytics Service)</a></li>
<li><a href="set-permissions-access-work-tracking.md#process-permissions">Process (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md">Project properties (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Project-level information</a></li>
</ul>
</ul>
</td>
<td width="33%">
<h3>Q-R</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Queue builds (Object)</a></li>
<li><a href="../../boards/queries/set-query-permissions.md">Query (Object)</a></li>
<li><a href="../../boards/queries/set-query-permissions.md">Query folder (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Read (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Rename team project (Project)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Release pipelines (Object)</a></li>
<li><a href="../../repos/git/set-git-repository-permissions.md">Repository, Git (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Retain (build) indefinitely (Object)</a></li>
</ul>
<h3>S</h3>
<ul>
<li><a href="../../pipelines/policies/set-permissions.md">Secure files (Object, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Service endpoints (Collection, Role)</a></li>
<li><a href="../../service-hooks/overview.md#subscription-permissions">Service hooks</a></li>
<li><a href="set-project-collection-level-permissions.md">Shelvesets, TFVC (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md">Sprint, define (Object)</a></li>
<li><a href="../settings/set-iteration-paths-sprints.md">Sprints, select (Team)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Stop builds (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Suppress notifications for work item updates (Project)</a></li>
</ul>
<h3>T</h3>
<ul>
<li><a href="../../repos/git/branch-permissions.md" >Tags, Git (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md">Tags, work items (Project)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Task groups (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" >Team projects (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md#delete-test-permissions">Test artifacts, delete</a></li>
<li><a href="set-project-collection-level-permissions.md">Test configurations (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Test controllers (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Test environments (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Test runs  (Project)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md">TFVC repositories (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md">Trace settings (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Trigger events (Collection)</a></li>
</ul>
<h3>U-V-W</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Update build information (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Update build queue (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Update project visibility (Project)</a></li>
<li><a href="permissions.md#work-item-tags">Update tag definition (Project)</a></li> 
<li><a href="set-project-collection-level-permissions.md#collection-level">Use build resources (Collection)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Variable groups (Object, Role)</a></li>
<li><a href="permissions.md#view-analytics-permission">View analytics (Project)</a></li>
<li><a href="permissions.md#view-audit-log-permission">View audit log (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">View build resources (Collection)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View builds (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View releases (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">View instance-level information (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">View project-level information (Project)</a></li>
<li><a href="../../report/powerbi/analytics-security.md">View shared Analytics views (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">View system synchronization information (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">View test runs (Project)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">View work items in this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">View permissions for this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">View permissions for this node (Iteration Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md">Work items (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Workspaces (Collection)</a></li> 
</ul>
</td>
</tr>
</tbody>
</table>

<hr/>

::: moniker-end


::: moniker range="azure-devops-2019 || azure-devops-2020"

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
<li><a href="../../pipelines/policies/permissions.md">Administer build permissions (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer build resource permissions (Collection)</a></li>

<li><a href="../../pipelines/policies/permissions.md">Administer release permissions (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer process permissions (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer shelved changes (Collection)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Administer task group permissions (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Administer shelved changes (Collection)</a></li>
<li><a href="permissions.md#server-permissions">Administer warehouse (Server)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)">Agent queues (Project, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)">Agent pools (Collection, Role)</a></li>
<li><a href="/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions" data-raw-source="[Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)">Alerts (Collection)</a></li>
<li><a href="/azure/devops/notifications/manage-team-group-notifications" data-raw-source="[Alerts (Team)](../../notifications/manage-team-group-global-organization-notifications.md)">Alerts (Team)</a></li>
<li><a href="../../report/powerbi/analytics-security.md" data-raw-source="[Analytics Service (Project)](../../report/powerbi/analytics-security.md)">Analytics Service (Project)</a></li>
<li><a href="../../report/powerbi/analytics-security.md" data-raw-source="[Analytics views (Object)](../../report/powerbi/analytics-security.md)">Analytics views (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Area path (Object)](set-permissions-access-work-tracking.md)">Area path (Object)</a></li>
<li><a href="../../artifacts/feeds/feed-permissions.md" data-raw-source="[Azure Artifacts](../../artifacts/feeds/feed-permissions.md)">Azure Artifacts</a></li>



</ul>
<h3>B</h3>
<ul>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Branches, Git (Object)](../../repos/git/branch-permissions.md)">Branches, Git (Object)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Branches, TFVC (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build pipelines (Object)](../../pipelines/policies/set-permissions.md)">Build pipelines (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)">Build quality, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)">Build queue, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build resources (Collection)](../../pipelines/policies/set-permissions.md)">Build resources (Collection)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)">Build permissions, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Builds, manage (Object)](../../pipelines/policies/set-permissions.md)">Builds, manage (Object)</a></li>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Bypass branch policies (Object)](../../repos/git/branch-permissions.md)">Bypass branch policies (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Bypass rules on work item updates (Project)</a></li>
</ul>
<h3>C</h3>
<ul>
<li><a href="set-project-collection-level-permissions.md#project-level">Change process of team project (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Change work item type (Project)](set-project-collection-level-permissions.md)">Change work item type (Project)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Check ins, TFVC (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Collection-level information](set-project-collection-level-permissions.md)">Collection-level information</a></li>
<li><a href="../settings/manage-teams.md" data-raw-source="[Configure Azure Boards (Team)](../settings/manage-teams.md)">Configure Azure Boards (Team)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Create a workspace (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Create child nodes (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Create child nodes (Iteration Path, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Create new projects (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Create process (Collection)</a></li>
<li><a href="permissions.md#server-permissions">Create project collection (Server)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Create releases (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Create tag definition (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Create test runs (Project)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Contribute (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level" data-raw-source="[Customize process](set-project-collection-level-permissions.md#collection-level)">Customize process</a></li>
</ul>
<h3>D</h3>
<ul>
<li><a href="../../report/dashboards/dashboard-permissions.md">Dashboards, manage (Team)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Delete (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Delete and restore work items (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete build pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete builds (Object)</a></li>
<li><a href="../settings/work/customize-process-field.md" data-raw-source="[Delete field from account](../settings/work/customize-process-field.md)">Delete field from organization (Collection)</a></li>
<li><a href="permissions.md#server-permissions">Delete project collection (Server)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete release stage (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete releases (Object)</a></li>
<li><a href="permissions.md#work-item-tags">Delete tag definition (Project)</a></li> 
<li><a href="../../pipelines/policies/permissions.md">Delete task group(Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Delete team project (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Delete test runs (Project)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Delete this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Delete this node (Iteration Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#move-delete-permissions">Delete work items</a></li>
<li><a href="../../organizations/security/set-permissions-access-work-tracking.md">Delivery plans (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md)">Deployment groups (Object, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)">Deployment pools (Collection, Role)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Destroy builds (Object)</a></li>
</ul>
</td>
<td width="33%">
<h3>E</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Edit build definition (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit build quality (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md">Edit collection-level information (Collection)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit build pipeline (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Edit instance-level information (Collection)</a></li>
<li><a href="permissions.md#server-permissions">Edit instance level information (Server)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Edit process (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Edit project-level information (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit release state (Object)</a></li>
<li><a href="../../report/powerbi/analytics-security.md">Edit shared Analytics views (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Edit shared Analytics views (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit task group (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Edit this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Edit this node (Iteration Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Edit work items in this node (Area Path, Object)</a></li>
<li><a href="permissions.md#work-item-tags">Enumerate tag definition (Project)</a></li> 
<li><a href="set-project-collection-level-permissions.md">Events (Collection)</a></li>
<li><a href="../../marketplace/how-to/grant-permissions.md">Extensions (Collection, Role)</a></li>
</ul>
<h3>F-L</h3>
<ul>
<li><a href="../../artifacts/feeds/feed-permissions.md">Feeds</a></li>
<li><a href="set-project-collection-level-permissions.md">Field, delete (Collection)</a></li>
<li><a href="../../repos/git/branch-permissions.md">Git branch (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#process-permissions">Inherited process (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Iteration paths (Object)](set-permissions-access-work-tracking.md)">Iteration paths (Object)</a></li>
<li><a href="../../organizations/settings/manage-teams.md" data-raw-source="[Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)">Kanban board, customize (Team)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Labels, TFVC (Object)</a></li>
<li>Library (Object, Role)</li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Locks, TFVC (Object)</a></li>
</ul>
<h3>M-N</h3>
<ul>
<li><a href="permissions.md#make-requests-on-behalf-of-others">Make requests on behalf of others (Collection)</a></li>
<li><a href="permissions.md#server-permissions">Make requests on behalf of others (Server)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Manage build resources (Collection)</a></li>

<li><a href="../../pipelines/policies/permissions.md">Manage build qualities (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Manage deployments (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Manage enterprise policies (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Manage permissions (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md">Manage project properties (Project)</a></li>

<li><a href="../../pipelines/policies/permissions.md">Manage release approvers (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Manage releases (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Manage test plans (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Manage test suites (Area Path, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Manage test configurations (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Manage test environments (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Manage test controllers (Collection)</a></li>
<li><a href="../../marketplace/how-to/grant-permissions.md">Marketplace extensions (Collection, Role)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md">Merge, TFVC (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Move work items out of this project (Project)</a></li>
<li><a href="../../repos/git/branch-permissions.md">Notes, Git (Object)</a></li>
<li><a href="/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions" >Notifications (Collection)</a></li>
</ul>
<h3>O-P</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Override check-in validation by build (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Permanently delete work items (Project)</a></li>
<li><a href="../../repos/git/branch-permissions.md">Policies, Git branch (Object)</a></li>
<li><a href="../../repos/git/set-git-repository-permissions.md">Policies, Git repository (Object)</a></li>
<li><a href="../../report/powerbi/analytics-security.md">Power BI (Analytics Service)</a></li>
<li><a href="set-permissions-access-work-tracking.md#process-permissions">Process (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md">Project properties (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Project-level information</a></li>
</ul>
</ul>
</td>
<td width="33%">
<h3>Q-R</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Queue builds (Object)</a></li>
<li><a href="../../boards/queries/set-query-permissions.md">Query (Object)</a></li>
<li><a href="../../boards/queries/set-query-permissions.md">Query folder (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#work-item-queries">Read (Query, Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Rename team project (Project)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Release pipelines (Object)</a></li>
<li><a href="../../repos/git/set-git-repository-permissions.md">Repository, Git (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Retain (build) indefinitely (Object)</a></li>
</ul>
<h3>S</h3>
<ul>
<li><a href="../../pipelines/policies/set-permissions.md">Secure files (Object, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Service endpoints (Collection, Role)</a></li>
<li><a href="../../service-hooks/overview.md#subscription-permissions">Service hooks</a></li>
<li><a href="set-project-collection-level-permissions.md">Shelvesets, TFVC (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md">Sprint, define (Object)</a></li>
<li><a href="../settings/set-iteration-paths-sprints.md">Sprints, select (Team)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Stop builds (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Suppress notifications for work item updates (Project)</a></li>
</ul>
<h3>T</h3>
<ul>
<li><a href="../../repos/git/branch-permissions.md" >Tags, Git (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md">Tags, work items (Project)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Task groups (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" >Team projects (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md#delete-test-permissions">Test artifacts, delete</a></li>
<li><a href="set-project-collection-level-permissions.md">Test configurations (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Test controllers (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Test environments (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Test runs  (Project)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md">TFVC repositories (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md">Trace settings (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">Trigger events (Collection)</a></li>
<li><a href="permissions.md#server-permissions">Trigger events (Server)</a></li>
</ul>
<h3>U-V-W</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Update build information (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Update build queue (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">Update project visibility (Project)</a></li>
<li><a href="permissions.md#work-item-tags">Update tag definition (Project)</a></li> 
<li><a href="set-project-collection-level-permissions.md#collection-level">Use build resources (Collection)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md">Variable groups (Object, Role)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">View analytics(Project)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">View audit log (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">View build resources (Collection)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View builds (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View releases (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">View instance-level information (Collection)</a></li>
<li><a href="permissions.md#server-permissions">View instance level information (Server)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">View project-level information (Project)</a></li>
<li><a href="../../report/powerbi/analytics-security.md">View shared Analytics views (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md#collection-level">View system synchronization information (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md#project-level">View test runs (Project)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">View work items in this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">View permissions for this node (Area Path, Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">View permissions for this node (Iteration Path, Object)</a></li>

<li><a href="set-permissions-access-work-tracking.md">Work items (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md">Workspaces (Collection)</a></li> 
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

<li><a href="../../pipelines/policies/permissions.md">Administer build permissions (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Administer release permissions (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Administer task group permissions (Object)</a></li>
<li><a href="permissions.md#server-permissions" data-raw-source="[Administer warehouse (Server)](permissions.md#server-permissions)">Administer warehouse (Server)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Agent queues (Project, Role)](../../pipelines/policies/set-permissions.md)">Agent queues (Project, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Agent pools (Collection, Role)](../../pipelines/policies/set-permissions.md)">Agent pools (Collection, Role)</a></li>
<li><a href="/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions" data-raw-source="[Alerts (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)">Alerts (Collection)</a></li>
<li><a href="/azure/devops/notifications/manage-team-group-notifications" data-raw-source="[Alerts (Team)](../../notifications/manage-team-group-global-organization-notifications.md)">Alerts (Team)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Area path (Object)](set-permissions-access-work-tracking.md)">Area path (Object)</a></li>
<li><a href="../../artifacts/feeds/feed-permissions.md" data-raw-source="[Azure Artifacts](../../artifacts/feeds/feed-permissions.md)">Azure Artifacts</a></li>
</ul>
<h3>B</h3>
<ul>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Branches, Git (Object)](../../repos/git/branch-permissions.md)">Branches, Git (Object)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Branches, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Branches, TFVC (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build pipelines (Object)](../../pipelines/policies/set-permissions.md)">Build pipelines (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build quality, manage (Object)](../../pipelines/policies/set-permissions.md)">Build quality, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build queue, manage (Object)](../../pipelines/policies/set-permissions.md)">Build queue, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build resources (Collection)](../../pipelines/policies/set-permissions.md)">Build resources (Collection)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Build permissions, manage (Object)](../../pipelines/policies/set-permissions.md)">Build permissions, manage (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Builds, manage (Object)](../../pipelines/policies/set-permissions.md)">Builds, manage (Object)</a></li>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Bypass branch policies (Object)](../../repos/git/branch-permissions.md)">Bypass branch policies (Object)</a></li>
</ul>
<h3>C</h3>
<ul>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Check ins, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Check ins, TFVC (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Collection-level information](set-project-collection-level-permissions.md)">Collection-level information</a></li>
<li><a href="../settings/manage-teams.md" data-raw-source="[Configure Agile tools (Team)](../settings/manage-teams.md)">Configure Agile tools (Team)</a></li>
<li><a href="permissions.md#server-permissions" data-raw-source="[Create project collection (Server)](permissions.md#server-permissions)">Create project collection (Server)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Create releases (Object)</a></li>
</li>
</ul>
<h3>D</h3>
<ul>
<li><a href="../../report/dashboards/dashboard-permissions.md">Dashboards, manage (Team)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete build pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete builds (Object)</a></li>
<li><a href="../settings/work/customize-process-field.md" data-raw-source="[Delete field from account](../settings/work/customize-process-field.md)">Delete field from account</a></li>
<li><a href="permissions.md#server-permissions" data-raw-source="[Delete project collection (Server)](permissions.md#server-permissions)">Delete project collection (Server)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete release stage (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete releases (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Delete task group(Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Delete test artifacts](set-permissions-access-work-tracking.md)">Delete test artifacts</a></li>
<li><a href="set-permissions-access-work-tracking.md#move-delete-permissions" data-raw-source="[Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)">Delete work items</a></li>
<li><a href="../../organizations/security/set-permissions-access-work-tracking.md" data-raw-source="[Delivery plans (Object)](../../organizations/security/set-permissions-access-work-tracking.md)">Delivery plans (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Deployment groups (Object, Role)](../../pipelines/policies/set-permissions.md)">Deployment groups (Object, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Deployment pools (Collection, Role)](../../pipelines/policies/set-permissions.md)">Deployment pools (Collection, Role)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Destroy builds (Object)</a></li>
</ul>
</td>
<td width="33%">
<h3>E</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Edit build definition (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit build quality (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Edit collection-level information (Collection)](set-project-collection-level-permissions.md)">Edit collection-level information (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Edit project-level information (Project)](set-project-collection-level-permissions.md)">Edit project-level information (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit release state (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Edit task group (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Events (Collection)](set-project-collection-level-permissions.md)">Events (Collection)</a></li>
<li><a href="../../marketplace/how-to/grant-permissions.md" data-raw-source="[Extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)">Extensions (Collection, Role)</a></li>
</ul>
<h3>F-L</h3>
<ul>
<li><a href="../../artifacts/feeds/feed-permissions.md" data-raw-source="[Feeds](../../artifacts/feeds/feed-permissions.md)">Feeds</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Field, delete (Collection)](set-project-collection-level-permissions.md)">Field, delete (Collection)</a></li>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Git branch (Object)](../../repos/git/branch-permissions.md)">Git branch (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Inherited process (Object)](set-permissions-access-work-tracking.md)">Inherited process (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Iteration paths (Object)](set-permissions-access-work-tracking.md)">Iteration paths (Object)</a></li>
<li><a href="../../organizations/settings/manage-teams.md" data-raw-source="[Kanban board, customize (Team)](../../organizations/settings/manage-teams.md)">Kanban board, customize (Team)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Labels, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Labels, TFVC (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Library (Object, Role)](../../pipelines/policies/set-permissions.md)">Library (Object, Role)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Locks, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Locks, TFVC (Object)</a></li>
</ul>
<h3>M-N</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Manage build qualities (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Manage deployments (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Manage project properties (Project)](set-project-collection-level-permissions.md)">Manage project properties (Project)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Manage release approvers (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Manage releases (Object)</a></li>
<li><a href="../../marketplace/how-to/grant-permissions.md" data-raw-source="[Marketplace extensions (Collection, Role)](../../marketplace/how-to/grant-permissions.md)">Marketplace extensions (Collection, Role)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[Merge, TFVC (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">Merge, TFVC (Object)</a></li>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Notes, Git (Object)](../../repos/git/branch-permissions.md)">Notes, Git (Object)</a></li>
<li><a href="/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions" data-raw-source="[Notifications (Collection)](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions)">Notifications (Collection)</a></li>
</ul>
<h3>O-P</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Override check-in validation by build (Object)</a></li>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Policies, Git branch (Object)](../../repos/git/branch-permissions.md)">Policies, Git branch (Object)</a></li>
<li><a href="../../repos/git/set-git-repository-permissions.md" data-raw-source="[Policies, Git repository (Object)](../../repos/git/set-git-repository-permissions.md)">Policies, Git repository (Object)</a></li>
<li><a href="permissions.md#server-permissions" data-raw-source="[Project collection (Server)](permissions.md#server-permissions)">Project collection (Server)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Project properties (Project)](set-project-collection-level-permissions.md)">Project properties (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Project-level information](set-project-collection-level-permissions.md)">Project-level information</a></li>
</ul>
</ul>
</td>
<td width="33%">
<h3>Q-R</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Queue builds (Object)</a></li>
<li><a href="../../boards/queries/set-query-permissions.md" data-raw-source="[Query (Object)](../../boards/queries/set-query-permissions.md)">Query (Object)</a></li>
<li><a href="../../boards/queries/set-query-permissions.md" data-raw-source="[Query folder (Object)](../../boards/queries/set-query-permissions.md)">Query folder (Object)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Release pipelines (Object)](../../pipelines/policies/set-permissions.md)">Release pipelines (Object)</a></li>
<li><a href="../../repos/git/set-git-repository-permissions.md" data-raw-source="[Repository, Git (Object)](../../repos/git/set-git-repository-permissions.md)">Repository, Git (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Retain (build) indefinitely (Object)</a></li>
</ul>
<h3>S</h3>
<ul>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Secure files (Object, Role)](../../pipelines/policies/set-permissions.md)">Secure files (Object, Role)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Service endpoints (Collection, Role)](../../pipelines/policies/set-permissions.md)">Service endpoints (Collection, Role)</a></li>
<li><a href="../../service-hooks/overview.md#subscription-permissions" data-raw-source="[Service hook](../../service-hooks/overview.md#subscription-permissions)">Service hook</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)">Shelvesets, TFVC (Collection)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Sprint, define (Object)](set-permissions-access-work-tracking.md)">Sprint, define (Object)</a></li>
<li><a href="../settings/set-iteration-paths-sprints.md" data-raw-source="[Sprints, select (Team)](../settings/set-iteration-paths-sprints.md)">Sprints, select (Team)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Stop builds (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Suppress notifications work items (Project)](set-project-collection-level-permissions.md)">Suppress notifications work items (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Synchronization information (Collection)](set-project-collection-level-permissions.md)">Synchronization information (Collection)</a></li>
</ul>
<h3>T</h3>
<ul>
<li><a href="../../repos/git/branch-permissions.md" data-raw-source="[Tags, Git (Object)](../../repos/git/branch-permissions.md)">Tags, Git (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Tags, work items (Project)](set-permissions-access-work-tracking.md)">Tags, work items (Project)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Task groups (Object)](../../pipelines/policies/set-permissions.md)">Task groups (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Team projects (Collection)](set-project-collection-level-permissions.md)">Team projects (Collection)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Test configurations (Project)](set-project-collection-level-permissions.md)">Test configurations (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Test controllers (Project)](set-project-collection-level-permissions.md)">Test controllers (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Test environments (Project)](set-project-collection-level-permissions.md)">Test environments (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Test runs  (Project)](set-project-collection-level-permissions.md)">Test runs  (Project)</a></li>
<li><a href="../../repos/tfvc/set-tfvc-repository-permissions.md" data-raw-source="[TFVC repositories (Object)](../../repos/tfvc/set-tfvc-repository-permissions.md)">TFVC repositories (Object)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Trace settings (Collection)](set-project-collection-level-permissions.md)">Trace settings (Collection)</a></li>
<li><a href="permissions.md#server-permissions" data-raw-source="[Trigger events (Server)](permissions.md#server-permissions)">Trigger events (Server)</a></li>
</ul>
<h3>U-V-W</h3>
<ul>
<li><a href="../../pipelines/policies/permissions.md">Update build information (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">Update build queue (Object)</a></li>
<li><a href="permissions.md#server-permissions" data-raw-source="[Use full Web Access features (Server)](permissions.md#server-permissions)">Use full Web Access features (Server)</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Variable groups (Object, Role)](../../pipelines/policies/set-permissions.md)">Variable groups (Object, Role)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View builds (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View release pipeline (Object)</a></li>
<li><a href="../../pipelines/policies/permissions.md">View releases (Object)</a></li>
<li><a href="set-permissions-access-work-tracking.md" data-raw-source="[Work items (Project)](set-permissions-access-work-tracking.md)">Work items (Project)</a></li>
<li><a href="set-project-collection-level-permissions.md" data-raw-source="[Workspaces (Collection)](set-project-collection-level-permissions.md)">Workspaces (Collection)</a></li> 
</ul>
</td>
</tr>
</tbody>
</table>

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
