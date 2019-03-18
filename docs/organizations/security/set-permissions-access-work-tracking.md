---
title: Set permissions and access for work tracking
titleSuffix: Azure DevOps
description: How to grant or restrict access to work tracking tasks for Azure DevOps & Team Foundation Server
ms.technology: devops-security
ms.prod: devops
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 03/15/2019
---

# Set permissions and access for work tracking

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You grant or restrict access to various work tracking features by granting users or groups specific permissions for an object, project, or collection. Or, when you assign a user as a team administrator, they have permissions to manage all assets for the specific team. Add users to the Contributors group to provide access to most features as listed in [Permissions and access for work tracking](permissions-access-work-tracking.md).
> [!NOTE]
> For public projects, Stakeholder access gives users greater access to work tracking features and full access to Azure Pipelines. To learn more, see [About access levels, Stakeholder access](access-levels.md#stakeholder-access).


<table width="80%">
<tbody valign="top">
<tr>
<th width="35%">Role or permission level</th>
<th width="65%">Functional areas set</th>
</tr>
<tr>
<td>**Team administrator role** </td>
<td>
<ul>
<li>[Manage teams and configure team tools](../settings/manage-teams.md)</li>
<li>[Define and edit team dashboards](../../report/dashboards/dashboards.md)</li>
<li>[Add and manage team-level work item templates](../../boards/backlogs/work-item-template.md)</li>
<li>[Add team administrators](../settings/add-team-administrator.md)</li>
</ul>
To add a user to the team administrator role, see [Add a team administrator](../../organizations/settings/add-team-administrator.md). 
</td>
</tr>
<tr>
<td>**Object-level permissions** </td>
<td>
<ul>
<li>[Modify work items under an area path](#set-permissions-area-path)</li>
<li>[Create and edit nodes under an area path or iteration path](#set-permissions-area-path)</li>
<li>[Define and edit queries or query folders](#work-item-queries)</li>
<li>[Define and edit Delivery Plans](#plan-permissions)</li>
</ul>
</td>
</tr>
<tr>
<td>**Project-level permissions** </td>
<td>
<ul>
<li>[Create work item tags](../../boards/queries/add-tags-to-work-items.md)</li>
<li>[Delete and restore work items](../../boards/backlogs/remove-delete-work-items.md)</li>
<li>[Move work items out of a project](#move-delete-permissions)</li>
<li>[Permanently delete work items](#move-delete-permissions)</li>
<li>[Delete test artifacts](#delete-test-permissions)</li>
<li>Edit shared work item queries</li>
<li>Add teams and team administrators</li>
<li>Create and manage area and iteration paths</li>
<li>Edit project-level permissions</li>
<li>Customize a project (On-premises XML  or Hosted process models)</li> 
</ul>
</td>
</tr>
<tr>
<td>**Project collection-level permissions** </td>
<td>
<ul>
<li>Create, delete, or edit a process (Inheritance process model)</li> 
<li>Delete field from account (Inheritance process model)</li>
<li>Manage process permissions (Inheritance process model)</li> 
<li>Edit collection level permissions</li>  
</ul>
Project collection-level permissions include all permissions you can set at the project-level.
</td>
</tr>
</tbody>
</table>

## Edit project-level or collection-level/instance-level information

The **Edit project-level information** and **Edit instance-level information** (also referred to as Edit collection-level information) provide permissions to several work tracking features as summarized below. To add users or set permissions at these levels, see [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).

<table width="80%">
<tbody valign="top">
<tr>
<th width="35%">Edit project-level information</th>
<th width="65%">Edit instance-level information</th>
</tr>

<tr>
<td>
<ul>
<li>Add and administer teams and all team-related features</li>
<li>Create and modify areas and iterations</li>
<li>Edit shared work item queries</li>
<li>Edit project level permission ACLs</li>
<li>Manage process templates</li>
<li>Customize a project</li>
<li>Create and modify global lists</li>
<li>Edit event subscriptions (email or SOAP) on project level events.</li>
</ul>
</td>
<td>
<ul>
<li>Add and administer teams and all team-related features</li>
<li>Create and modify areas and iterations</li>
<li>Edit check-in policies</li>
<li>Edit shared work item queries</li>
<li>Edit project level and collection level permission ACLs</li>
<li>Manage process templates</li>
<li>Customize a project or process</li>
<li>Create and modify global lists</li>
<li>Edit event subscriptions (email or SOAP) on project or collection level events.</li>
</ul>
</td>
</tr>
</tbody>
</table>


<a name="set-permissions-area-path" /> 

## Create child nodes, modify work items under an area path   

Area path permissions let you grant or restrict access to edit or modify work items, test cases, or test plans assigned to those areas. You can restrict access to users or groups. You can also set permissions for who can add or modify areas or iterations for the project.  

::: moniker range=">= azure-devops-2019" 

You define both areas and iterations for a project from the **Project Settings>Work>Project configuration**. 

1. Choose (1) **Project Settings**, expand **Work** if needed, and choose (2) **Project configuration** and then (3) **Areas**.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Work>Project Configuration](../settings/_img/areas/open-project-work-areas-settings-vert.png)   

0. Choose the ... context menu for the node you want to manage and select **Security**.  
	
	![Open the security dialog](_img/set-permissions-area-node-open.png)

0. Select the group or team member, and then change the permission settings. If you don't see the group you want, try adding it first. 

	For example, here we've added the Disallow Access Group, and disallowed members of this group the ability to view, modify, or edit work items in the Customer Service area path.

	![Permissions for an area node](_img/set-permissions-area-node-dialog.png)  
	
	You can specify two explicit authorization states for permissions: **Deny** and **Allow**. In addition, permissions can exist in one of three additional states.  To learn more, see [About permissions and groups](about-permissions.md). 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"  

1. From the web portal for the project, choose the ![ ](../../_img/icons/gear_icon.png) gear icon.  

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Open Admin context, project level](../settings/_img/areas/modify-areas-its-open-admin-context-ts.png)

	If you're currently working from a team context, then hover over the ![gear icon](../../_img/icons/gear_icon.png) and choose **Project settings**.  

	> [!div class="mx-imgBorder"]
	> ![Open Project Settings, horz nav](../../_shared/_img/settings/open-project-settings-horz.png)  

2. Choose **Work** and then **Areas**.  

0. Choose the ... context menu for the node you want to manage and select **Security**.  
	
	![Open the security dialog](_img/set-permissions-area-node-open.png)

::: moniker-end   

::: moniker range=">= tfs-2013 <= tfs-2015"  

0. From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear icon to open project administration pages. Then choose **Areas**. 

	![Open the project administration page](../../_shared/_img/settings/open-project-settings-tfs-2015.png)

0. Choose the context menu for the node you want to manage.  
	
	![Open the security dialog](../../reference/_img/ALM_CW_OpenSecurityDialog.png)  

0. Select the group or team member, and then change the permission settings. If you don't see the group you want, try adding it first. 

	For example, here we've added the Disallow Access Group, and disallowed members of this group the ability to view, modify, or edit work items in the Customer Service area path.

	![Permissions for an area node](_img/set-permissions-area-node-dialog.png)  
	
	You can specify two explicit authorization states for permissions: **Deny** and **Allow**. In addition, permissions can exist in one of three additional states.  To learn more, see [About permissions and groups](about-permissions.md). 

::: moniker-end


<a id="work-item-queries"></a>

## Define and edit queries or query folders

You can specify who can add or edit query folders or queries at the object-level. 
To manage permissions for a query or query folder, you must be the creator of the query or folder, a member of the Project Administrators or Project Collection Administrators group, or granted explicit access through the object's Security dialog. 

**Query folder Permissions dialog**

> [!div class="mx-imgBorder"]  
> ![Permissions dialog for a query folder](../../boards/queries/_img/permissions/permissions-dialog-query-folder.png)

For details, see [Set permissions on a shared query or query folder](../../organizations/security/set-permissions-access-work-tracking.md). To learn more about queries, see [Create managed queries to list, update, or chart work items](../../boards/queries/example-queries.md).


::: moniker range=">= tfs-2017"  
<a id="configure-plan-permissions">  </a>
<a id="plan-permissions">  </a>
## Edit or manage permissions for Delivery Plans 

Delivery Plans are an object within a project. You manage plan permissions for each plan similar to the way you manage permissions for shared queries or query folders. The creator of a Delivery Plan as well as all members of the Project Collection Administrators and Project Administrators groups have permissions to edit, manage, and delete plans. 

**Delivery Plan Permissions dialog**

> [!div class="mx-imgBorder"]  
> ![Permissions dialog for a delivery plan](../../boards/plans/_img/permissions/permissions-plans-dialog.png)

To learn more, see [Edit or manage Delivery Plan permissions](../../boards/plans/edit-delivery-plan-permissions.md). To learn more about Delivery Plans, see [Review team plans](../../boards/plans/review-team-plans.md).
 
::: moniker-end


<a id="move-delete-permissions"></a>

::: moniker range=">= azure-devops-2019"  
## Move or permanently delete work items 

By default, Project Administrators and Contributors can change the work item type and delete work items by moving them to the Recycle bin. Only Project Administrators can permanently delete work items and test artifacts. Project admins can grant permissions to other team members as needed. 

For example, as a project admin you can grant a user, team group, or other group you've created to have these permissions. Open the Security page for the project and choose the user or group you want to grant permissions. (To learn how to access project-level **Security**, see [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).)

In this example, we grant members assigned to the team administrator role, who belong to the Team Admin groups, permissions to move work items to another project and to permanently delete work items.   

> [!div class="mx-imgBorder"]  
> ![Set project-level permissions for a custom group, Team Admin](_img/set-permissions-project-level-dialog.png)  

::: moniker-end    

::: moniker range=">= tfs-2017"

<a id="delete-test-permissions"></a>
<a id="manage-test-artifacts"></a>

## Manage test artifacts
  
In addition to the project-level permissions set in the previous section, team members need permissions to manage test artifacts which are set for an area path. 

[Open the **Security** page for area paths](#set-permissions-area-path) and choose the user or group you want to grant permissions. 

![Open Area path permissions for the project](../../boards/backlogs/_img/delete-test-artifacts-open-area-permissions.png)  

Set the permissions for **Manage test plans** and **Manage test suites** to **Allow**.  

![Set Area path permissions for the project](../../boards/backlogs/_img/delete-test-artifacts-area-path-permissions.png)  

To have full access to the Test feature set, your [access level must be set to Basic + Test Plans](change-access-levels.md). Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases.  
::: moniker-end  

::: moniker range=">= azure-devops-2019"  

<a id="process-permissions"></a>

## Customize an inherited process 

By default, only Project Collection Administrators can create and edit processes. However, these admins can grant permissions to other team members by explicitly setting the **Create process**, **Delete process**, or **Edit process** permissions at the collection level for a specific user. 

To customize a process, you need to grant **Edit process**  permissions to a user account for the specific process. 

1. Open the &hellip; context menu for the inherited process and choose **Security**.  To open this page, see [Customize a project using an inherited process](../settings/work/customize-process.md).   

	![Process, Open security dialog](_img/process/mprocess-open-security-dialog-inherited.png)  

2. Add the account name of the person you want to grant permissions to, set the permissions to **Allow** that you want them to have, and then choose **Save changes**. 

	Here we add Christie Church and allow her to edit the process.  
 
	![Permissions for a process dialogue](_img/process/mprocess-security-dialog-inherited.png)    

> [!NOTE]  	  
> Each process is a securable unit and has individual access control lists (ACLs) that govern creating, editing, and deleting inherited processes.  At the collection level, project collection administrators can choose which processes can be inherited from and by whom. When you create a new inherited process, the process creator as well as project collection administrators have full control of the process and can also set individual ACLs for other users and groups to edit and delete the process.

::: moniker-end

::: moniker range="<= azure-devops-2019"  
## Additional options for restricting access to work items   

> [!NOTE]   
> You can use one or more of the following options with the On-premises XML process models. To learn more about process models, see [Customize work tracking experience](../../reference/customize-work.md).  

You can restrict access to work tracking objects in one of two ways:

-   By [adding WITs to the Hidden Categories group](../../reference/xml/use-categories-to-group-work-item-types.md), you can prevent the majority of project contributors from creating them. You [can create a hyperlink to a template](../../boards/backlogs/work-item-template.md) that opens the work item form and share that link with those team members who you do want to create them. 
-   [Set a condition field rule](../../reference/xml/apply-rule-work-item-field.md), [a condition-based field rule](../../reference/xml/assign-conditional-based-values-and-rules.md) or a combination of the two that applies to a group. You can restrict changes from being made to a field by specifying a qualifying rule and making it apply for a specific group. Conditional rules can include **CANNOTLOSEVALUE**, **EMPTY**, **FROZEN**, **NOTSAMEAS**, **READONLY**, and **REQUIRED** elements. 

For more information about how to customize WITs, 
see [Modify or add a custom work item type (WIT)](../../reference/add-modify-wit.md).

::: moniker-end

## Related articles 

*	[Set permissions on queries and query folders](../../boards/queries/set-query-permissions.md)  
*	[Permissions and access for work tracking](permissions-access-work-tracking.md) 
*	[Permissions and groups reference](permissions.md) 
