---
title: Set permissions and access for tracking  | VSTS & TFS
description: How to guide for setting permissions and access levels to support work tracking tasks (VSTS and Team Foundation Server)
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.manager: douge
ms.author: kaelli
ms.date: 08/02/2017
---

# Set permissions and access for work tracking   

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You can grant or restrict access to various work tracking features. You do this by granting users or groups specific permissions for the team project or at the object-level. 

**Project-level permissions**
- Restrict ability to create work item tags  
- Restrict ability to delete and restore work items  
- Restrict ability to move work items out of a team project
- Grant ability to permanently delete work items
- Customize a team project
	- Create and modify work item types, link types, categories, and process configuration
	- Add teams and team administrators 
	- Edit project level permissions 

**Object-level permissions**
- Restrict access to view or modify work items under an area path 
- Grant access to define or modify queries or query folders 
- Grant access to create and manage area paths or iteration paths 

**Role-based permissions**
- Add a user as a team administrator to allow them to configure team settings 

Add users to the Contributors group to provide access to most features as listed in [Permissions and access for work tracking](permissions-access-work-tracking.md) 

<a id="set-permissions-area-path" >  </a> 

## Set permissions to restrict access to edit or modify work items    

Permissions you set on an area path allow you to permit or restrict access to edit or modify work items, test cases, or test plans assigned to those areas. You can restrict access to users or groups. You can also set permissions for who can add or modify areas or iterations for the team project.  

1. From the web portal admin context, open the **Work>Areas** page, and then click the context menu for the node you want to manage.  
	
	<img src="_img/set-permissions-area-node-open.png" alt="Open the security dialog" style="border: 2px solid #C3C3C3;" /> 
<!---
	<img src="../work/customize/_img/ALM_CW_OpenSecurityDialog.png" alt="Open the security dialog" style="border: 2px solid #C3C3C3;" /> -->

2. Select the group or team member, and then change the permission settings. If you don't see the group you want, try adding it first. 

	For example, here we've added the Disallow Access Group, and disallowed members of this group the ability to view, modify, or edit work items in the Customer Service area path.

	<img src="_img/set-permissions-area-node-dialog.png" alt="Permissions for an area node" style="border: 2px solid #C3C3C3;" />

<!--- <img src=".../work/customize/_img/ALM_CW_PermisionsForArea.png" alt="Permissions for an area node" style="border: 2px solid #C3C3C3;" />--> 
	
You can specify two explicit authorization states for permissions: **Deny** and **Allow**. In addition, permissions can exist in one of three additional states.  

| Permission 		| Authorization |
| ----------------- | ------------- |
| Allow 			| Explicitly grants users to perform the task associated with the specific permission. For users to access a task, the associated permission must be set to **Allow** or **Inherited allow**. |
| Deny 				| Explicitly prevents users from performing the task associated with the specific permission. **Deny** takes precedence over **Allow**. <br/>For exceptions to these rules, see [Permissions reference](about-permissions.md#inheritance)|
| Inherited allow/Inherited deny 	| Allows or denies a user to perform the task associated with the permission based on the permission set for a group to which the user belongs. |
| Not set         	| Implicitly prevents users from performing the action associated with the permission. <br/>Because the permission is neither explicitly set to **Deny** nor explicitly set to **Allow**, authorization for that permission can be inherited from other groups of which the user or group is a member. <br/>By default, most permissions are not set to either **Deny** or **Allow**, the permissions are left **Not set**.  |




<a id="move-delete-permissions"></a>
## Set permissions for team administrators to move or delete work items 

By default, Project Administrators and Contributors can change the work item type and delete work items by moving them to the Recycle bin. Only Project Administrators can permanently delete work items and test artifacts. Project admins can grant permissions to other team members as needed. 

For example, as a project admin you can grant a user, team group, or other group you've created to have these permissions. Open the Security page for the team project and choose the user or group you want to grant permissions. (To learn how to access the Project level Security page, see [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).)

In this example, we grant members assigned to the team administrator role, who belong to the Team Admin groups, permissions to move work items to another team project and to permanently delete work items.     

<img src="_img/set-permissions-project-level-dialog.png" alt="Set Team Admin permissions" style="border: 2px solid #C3C3C3;" />

<a id="restrict-delete-permissions"></a>
## Restrict users from deleting work items 
You can restrict users from deleting work items by changing their permissions to Delete work items in this project. For more information about restricting permissions, see [Restrict access to resources, Work items](../accounts/restrict-access-tfs.md#work-items). 

<a id="delete-test-permissions"></a>
## Additional permissions and access level required to delete test artifacts
  
In addition to the project-level permissions set in the previous section, team members need permissions to manage test artifacts which are set for an area path. 

Open the Security page for the area path and choose the user or group you want to grant permissions.

<img src="../work/backlogs/_img/delete-test-artifacts-open-area-permissions.png" alt="Open Area path permissions for the team project" style="border: 2px solid #C3C3C3;" />

Set the permissions for **Manage test plans** and **Manage test suites** to **Allow**.  

<img src="../work/backlogs/_img/delete-test-artifacts-area-path-permissions.png" alt="Set Area path permissions for the team project" style="border: 2px solid #C3C3C3;" />

To have full access to the Test feature set, your [access level must be set to Advanced](change-access-levels.md). Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases. 

## Related notes 

*	[Set permissions on queries and query folders](../work/track/set-query-permissions.md)  
*	[Set permissions on delivery plans](../work/scale/review-team-plans.md#plan-permissions)  
*	[Permissions and access for work tracking](permissions-access-work-tracking.md) 
*	[Permissions and groups reference](permissions.md) 
