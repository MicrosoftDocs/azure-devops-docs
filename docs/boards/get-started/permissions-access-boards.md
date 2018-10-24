---
title: Default permissions and access for Azure Boards
titleSuffix: Azure Boards & TFS 
description: Default permissions and access levels to support work-tracking tasks in Azure DevOps Services and Team Foundation Server
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 09/05/2018  
---

# Permissions and access for Azure Boards 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

As a member of an Azure Boards project, you can use the majority of work-tracking functions and features. All project members are added to the Contributors group. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions for tracking work as listed in this article.

## Default permissions and access to work-tracking tools


> [!NOTE]   
> For public projects, Stakeholder access gives users greater access to work-tracking features and full access to Azure Pipelines. To learn more, see [About access levels, Stakeholder access](../../organizations/security/access-levels.md#stakeholder-access).


[!INCLUDE [temp](../../organizations/security/_shared/work.md)]


## Resources defined for the team project

You set project-level information permissions from **Project Settings** for a project. You set permissions for area and iteration paths from **Project Settings** > **Work** > **Project configuration**. 

<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th>Team admins</th>
<th width="16%">Account owner/<br/>Project Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">[View project-level information](../../organizations/security/set-project-collection-level-permissions.md) 
</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">Area node: [Edit work items under the node](../../organizations/settings/set-area-paths.md) 
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">[Area nodes and iteration nodes: Create, delete, edit child nodes](../../organizations/settings/set-iteration-paths-sprints.md)  
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">[Edit project-level information](../../organizations/security/set-project-collection-level-permissions.md)     
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>


</tbody>
</table>


The **Edit project-level information** permission includes the ability to perform these tasks for the team project:
- Create and modify areas and iterations.
- Edit check-in policies.  
- Edit shared work item queries.  
- Edit team project-level permission ACLs.  
- Create and modify global lists.  
- Edit [event subscriptions](../../organizations/security/permissions.md#alerts) (email or SOAP) on team project-level events.


## Team administrator role and permissions  

The Team administrator role supports configuration of team settings. To be added as a Team administrator, see [Add Team administrators](../../organizations/settings/add-team-administrator.md). Project Administrators can configure settings at the team and project level. For more information, see [Add administrators, set permissions at the project level or project collection level](../../organizations/security/set-project-collection-level-permissions.md). 

The following table summarizes a subset of the default permissions assigned to the team project Readers, Contributors, and Project Administrators groups and the Team administrator role. Team admin permissions extend only to the team for which they're an administrator. Project Administrator permissions extend across all teams defined for the team project.


<table>

<tr valign="bottom">
<th width="38%">Permission</th>
<th width="10%">Readers</th>
<th width="16%">Contributors</th>
<th width="18%">Team administrators</th>
<th width="18%">Project Administrators</th>
</tr>
<tbody valign="top" align="center">
<tr>

<td align="left">[Add a Team administrator](../../organizations/settings/add-team-administrator.md) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">
[Add team members](../../organizations/settings/add-teams.md) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">[View shared work item queries](../queries/using-queries.md)</p>
</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">
[Manage shared query and query folder permissions](../queries/set-query-permissions.md)<br/>(Contribute, Delete, Manage Permissions)
</p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">
[Add and edit dashboards](../../report/dashboards.md) 
</p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>

</tbody>
</table>


<a id="stakeholder-access"></a>

## Stakeholder access

Stakeholder access supports business owners, analysts, and other team members who don't contribute to code, build, and test activities. They add ideas to the backlog, add context and information to work items, and review status and progress. All members of an organization who don't use Visual Studio but want to contribute to work item tracking and monitor progress can be assigned as a stakeholder. To learn more about Stakeholder access, see [Work as a stakeholder](../../organizations/security/get-started-stakeholder.md). 

For a comparison chart of Stakeholder versus Basic access, see the [Feature matrix](https://visualstudio.microsoft.com/vsts/compare-features/).

For information about each access level, see [About access levels](../../organizations/security/access-levels.md). To assign access levels, see [Add users and assign licenses](../../organizations/accounts/add-organization-users.md). 


## Related articles 

*	[Grant or restrict access to select features and functions](../../organizations/security/restrict-access.md)
*	[Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md) 
*	[Get started as a stakeholder](../../organizations/security/get-started-stakeholder.md)  
*	[Add another team](../../organizations/settings/add-teams.md)  
*	[Add a Team administrator](../../organizations/settings/add-team-administrator.md)
*	[Manage teams and configure team tools](../../organizations/settings/manage-teams.md)   



