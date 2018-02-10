---
title: Permissions lookup guide for VSTS & TFS  
description: Index to permissions defined for Visual Studio Team Services (VSTS) and Team Foundation Server   
ms.technology: vs-devops-admin
ms.prod: vs-devops-alm
ms.assetid:  
ms.manager: douge
ms.author: kaelli
ms.date: 10/20/2017
---

# Permissions lookup guide for VSTS & TFS

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Use this index to locate the topic on how to manage a specific permission. 
  
Values in parenthesis indicate what level the permission is managed:

- **Object**: Permissions are managed at the object-level    
- **Project**: Permissions are managed at the team project level
- **Collection**: Permissions are managed at the account or project collection level  
- **Server**: Permissions are managed at the instance level for a TFS server   
- **Team**: Permissions are managed via the team administrator role.   


> [!div class="mx-tdBreakAll"]  
> |  A through E | F through R| S through W | 
> |-------------|----------|---------|---------|    
> |**A**<br/>- [Administer warehouse (Server)](permissions.md#server-permissions)<br/>- [Alerts (Collection)](../tfs-server/command-line/tfssecurity-cmd.md#collection-level-permissions)<br/>- [Alerts (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Analytics Service (Project)](../report/analytics/analytics-security.md)<br/>- [Area path (Object)](../security/set-permissions-access-work-tracking.md)<br/>- [Area paths (Team)](../work/scale/team-administrator-permissions.md)<br/><br/>**B**<br/>- [Branches, Git  (Object)](../git/branch-permissions.md)<br/>- [Branches, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Build definitions (Object)](set-build-release-permissions.md)<br/>- [Build quality, manage (Object)](set-build-release-permissions.md)<br/>- [Build queue, manage (Object)](set-build-release-permissions.md)<br/>- [Build resources (Collection)](set-build-release-permissions.md)<br/>- [Build permissions, manage (Object)](set-build-release-permissions.md)<br/>- [Builds, manage (Object)](set-build-release-permissions.md)<br/><br/>**C**<br/>- [Change work item type (Project)](set-project-collection-level-permissions.md)<br/>- [Check ins, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Collection-level information](set-project-collection-level-permissions.md)<br/>- [Configure Agile tools (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Customize process](set-project-collection-level-permissions.md#collection-level)<br/><br/>**D**<br/>- [Dashboards, manage (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Delete test artifacts](set-permissions-access-work-tracking.md#delete-test-permissions)<br/>- [Delete work items](set-permissions-access-work-tracking.md#move-delete-permissions)<br/>- [Delivery plans (Object)](set-permissions-access-work-tracking.md#plan-permissions)<br/><br/>**E**<br/>- [Edit collection-level information (Collection)](set-project-collection-level-permissions.md)<br/>- [Edit process](set-project-collection-level-permissions.md#collection-level)<br/>- [Edit team project-level information (Project)](set-project-collection-level-permissions.md)<br/>- [Events (Collection)](set-project-collection-level-permissions.md)<br/>- [Extensions](../marketplace/how-to/grant-permissions.md) |**F thru L**<br/>- [Field, delete (Collection)](set-project-collection-level-permissions.md)<br/>- [Git branch (Object)](../git/branch-permissions.md)<br/>- [Iteration paths (Object)](../security/set-permissions-access-work-tracking.md)<br/>- [Iteration paths (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Kanban board, customize (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Labels, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Locks, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/><br/>**M thru P**<br/>- [Manage project properties (Project)](set-project-collection-level-permissions.md)<br/>- [Merge, TFVC (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Move or delete work items (Project)](set-project-collection-level-permissions.md)<br/>- [Notes, Git (Object)](../git/branch-permissions.md)<br/>-  [Notifications (Collection)](../tfs-server/command-line/tfssecurity-cmd.md#collection-level-permissions)<br/>- [Policies, Git branch (Object)](../git/branch-permissions.md)<br/>- [Policies, Git repository (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Power BI (Analytics Service)](../report/analytics/analytics-security.md)<br/>- [Process (Collection)](set-project-collection-level-permissions.md#collection-level)<br/>-  [Project properties (Project)](set-project-collection-level-permissions.md)<br/>- [Project-level information](set-project-collection-level-permissions.md)<br/><br/>**Q thru R**<br/>- [Query (Object)](../work/track/set-query-permissions.md)<br/>- [Query folder (Object)](../work/track/set-query-permissions.md)<br/>- [Release definitions (Object)](set-build-release-permissions.md)<br/>- [Repository, Git (Object)](set-git-tfvc-repository-permissions.md) |**S**<br/>- [Set team defaults (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Shelvesets, TFVC (Collection)](set-project-collection-level-permissions.md)<br/>- [Sprint, define (Object)](../security/set-permissions-access-work-tracking.md)<br/>- [Sprints, select (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Synchronization information (Collection)](set-project-collection-level-permissions.md)<br/><br/>**T**<br/>- [Tags, Git (Oject)](../git/branch-permissions.md)<br/>- [Tags, work items (Project)](../security/set-permissions-access-work-tracking.md)<br/>-  [Team projects (Collection)](set-project-collection-level-permissions.md)<br/>- [Team rooms (Team)](../work/scale/team-administrator-permissions.md)<br/>- [Test configurations (Project)](set-project-collection-level-permissions.md)<br/>- [Test controllers (Project)](set-project-collection-level-permissions.md)<br/>- [Test environments (Project)](set-project-collection-level-permissions.md)<br/>- [Test runs  (Project)](set-project-collection-level-permissions.md)<br/>- [TFVC repositories (Object)](set-git-tfvc-repository-permissions.md)<br/>- [Trace settings (Collection)](set-project-collection-level-permissions.md)<br/><br/>**W**<br/>- [Work items (Project)](set-permissions-access-work-tracking.md)<br/>- [Workspaces  (Collection)](set-project-collection-level-permissions.md) | 



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
- [About permissions and groups](about-permissions.md)
- [Permissions and groups reference](permissions.md) 
- [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)