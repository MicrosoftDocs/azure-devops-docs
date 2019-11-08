---
title: Set permissions and access for manual testing
titleSuffix: Azure DevOps
description: How to grant or restrict access to manual test tasks for Azure DevOps & TFS
ms.technology: devops-security
ms.prod: devops
ms.assetid: 
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/07/2019
---

# Set permissions and access for manual testing

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You grant or restrict access to various manual test features by granting users or groups specific permissions for an object, project, or collection. Or, when you assign a user as a team administrator, they have permissions to manage all assets for the specific team. Add users to the Contributors group to provide access to most features as listed in [Permissions and access for work tracking](permissions-access-work-tracking.md).
> [!NOTE]
> For public projects, Stakeholder access gives users greater access to work tracking features and full access to Azure Pipelines. To learn more, see [About access levels, Stakeholder access](access-levels.md#stakeholder-access).

Test permissions can be set at these levels/and should address these tasks: 

- collection-level -test controllers
- Project-level 
- Area path level similar to setting permissions for work items you set them for test work item types
- Delete test artifacts 
- Access levels required for specific test features/scenarios 

<table width="80%">
<tbody valign="top">
<tr>
<th width="35%">Permission level</th>
<th width="65%">Functional areas set</th>
</tr>
<tr>
<td><strong>Object-level permissions</strong> </td>
<td>
<ul>
<li><a href="set-permissions-access-work-tracking.md#set-permissions-area-path">Modify test plans under an area path</a></li>
</ul>
</td>
</tr>
<tr>
<td><strong>Project-level permissions</strong> </td>
<td>
<ul>
<li><a href="set-permissions-access-work-tracking.md#project-level-test-permissions">Create, delete, view test runs</a></li>
<li><a href="set-permissions-access-work-tracking.md#project-level-test-permissions">Manage test configurations and environments</a></li>
</ul>
</td>
</tr>
<tr>
<td><strong>Project collection-level permissions</strong> </td>
<td>
<ul>
<li>Manage test controllers</li> 
</ul>
</td>
</tr>
</tbody>
</table>


<a id="license"></a>

## Grant access to manual testing features 

To have full access to the Test feature set, your [access level must be set to Basic + Test Plans](change-access-levels.md). Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases.  


<a id="manage-test-artifacts"></a>

## Manage test plans and test suites under an area path 

Area path permissions let you grant or restrict access to edit or modify test plans or test suites assigned to those areas. You can restrict access to users or groups.  

In addition to the project-level permissions set in the previous section, team members need permissions to manage test artifacts which are set for an area path. 

[Open the **Security** page for area paths](set-permissions-access-work-tracking.md#set-permissions-area-path) and choose the user or group you want to grant permissions. 

![Open Area path permissions for the project](../../boards/backlogs/_img/delete-test-artifacts-open-area-permissions.png)  

Set the permissions for **Manage test plans** and **Manage test suites** to **Allow**.  

![Set Area path permissions for the project](../../boards/backlogs/_img/delete-test-artifacts-area-path-permissions.png)  

<a id="delete-test-artifacts"></a>

::: moniker range=">= azure-devops-2019"  

## Delete test artifacts 

By default, only Project Administrators can permanently delete test runs and linked test artifacts. Project admins can grant permissions to other team members as needed. 

For example, as a project admin you can grant a user, team group, or other group you've created to have these permissions. Open the Security page for the project and choose the user or group you want to grant permissions. (To learn how to access project-level **Security**, see [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).)

In this example, we grant members assigned to the Test Admin group permissions to delete test runs.   

<!--- UPDATE IMAGE --> 

> [!div class="mx-imgBorder"]  
> ![Set project-level permissions for a custom group, Team Admin](_img/set-permissions-project-level-dialog.png)  

::: moniker-end    

 
## Related articles 

- [Grant or restrict access](restrict-access.md)   
- [Permissions and access for work tracking](permissions-access-work-tracking.md) 
- [Permissions and groups reference](permissions.md) 
