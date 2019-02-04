---
title: Default permissions and access for Azure Boards
titleSuffix: Azure Boards & TFS 
description: Default permissions and access levels to support work-tracking tasks in Azure DevOps Services and Team Foundation Server
ms.custom: boards-get-started
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 01/11/2019
---

# Default permissions and access for Azure Boards 


[!INCLUDE [temp](../_shared/version-vsts-only.md)]

As a member of an Azure Boards project, you can use the majority of features to track work. Limitations to select features are based on the *access level* and *security group* to which a user is assigned. The **Basic** access level supports full access to all Azure Boards features. **Stakeholder** access level provides partial support to select features, allowing users to view and modify work items, but not use all features. The built-in security groups&mdash;**Readers**, **Contributors**, and **Project Administrators**&mdash; and team administrator role grant permissions to specific features. 

In the tables provided in this article, a ![ ](/azure/devops/_img/icons/checkmark.png) checkmark indicates that the corresponding access level or security group has access to a feature by default. 

> [!NOTE]   
> Team administrators can configure settings for their team's tools. Organization owners and members of the Project Administrators group can configure settings for all teams. 

For a comparison chart of Stakeholder versus Basic access, see the [Feature matrix](https://azure.microsoft.com/services/devops/compare-features/). To assign or change an access level, see [Add users and assign licenses](../../organizations/accounts/add-organization-users.md). If you need to [grant specific users select permissions](../../organizations/security/change-individual-permissions.md), you can do so.

## General work item feature access

You can use work items to track anything you need to track. To learn more, see [Understand how work items are used to track issues, tasks, and epics](../work-items/about-work-items.md).

<table>
<tr valign="bottom">
<th width="41%">Task</th>
<th width="15%">Stakeholders</th>
<th width="12%">Readers</th>
<th width="15%">Contributors</th>
<th width="17%">Team admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">View/open work items</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">Add work items, add tags to work items<br/>*(Stakeholders can assign existing tags to work items, but can't add new tags)*</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">Change work item type</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Move work item to another project</td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Email work items</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">Apply a work item template</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">Delete work items (able to restore from the Recycle bin)</td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">Permanently delete work items</td>
<td> </td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Provide feedback](../../project/feedback/give-feedback.md) (through the Microsoft Feedback client)
</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Request feedback](../../project/feedback/get-feedback.md) 
</td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

</tbody>
</table>

## Boards feature access

[**Boards**](../boards/kanban-quickstart.md) present work items as cards and support quick status updates through drag-and-drop. 

<table>
<tr valign="bottom">
<th width="41%">Task</th>
<th width="15%">Stakeholders</th>
<th width="12%">Readers</th>
<th width="15%">Contributors</th>
<th width="17%">Team admins</th>
</tr>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">View boards and open work items</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">Add work items to a board; update status, reorder, or reparent child tasks through drag-and-drop; update a field on a card</td>
<td></td>
<td></td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Add child tasks to a checklist</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>  </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Assign to a sprint (from card menu)
</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Customize a board, configure team settings<br/>*(Stakeholders assigned as a team administrator or Project Administrator can configure team settings)*</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

</tbody>
</table>

## Backlogs features access
[**Backlogs**](../backlogs/create-your-backlog.md) display work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy.  

<table>
<tr valign="bottom">
<th width="41%">Task</th>
<th width="15%">Stakeholders</th>
<th width="12%">Readers</th>
<th width="15%">Contributors</th>
<th width="17%">Team admins</th>
</tr>
<tbody valign="top" align="center">

<tr>
<td align="left">View backlogs and open work items</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">Add work items to a backlog, Stakeholders can only add items to the bottom of the backlog</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td></td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Use bulk edit features
</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

<tr>
<td align="left">Add child items to a backlog item; prioritize or reorder a backlog; parent items using the Mapping pane; Assign items to a sprint using the Planning pane </td>
<td> </td>
<td></td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

<tr>
<td align="left">Customize a backlog, configure team settings<br/>*(Stakeholders assigned as a team administrator or Project Administrator can configure team settings)*</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

</tbody>
</table>


## Sprints feature access

[**Sprints**](../sprints/assign-work-sprint.md) provide a filtered view of work items that a team has assigned to specific iteration paths or sprints. 

<table>
<tr valign="bottom">
<th width="41%">Task</th>
<th width="15%">Stakeholders</th>
<th width="12%">Readers</th>
<th width="15%">Contributors</th>
<th width="17%">Team admins</th>
</tr>
<tbody valign="top" align="center">


<tr>
<td align="left">View sprint backlogs, taskboards, and open work items</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Add work items to a sprint backlog<br/>*(Stakeholders can add backlog items to the bottom of a sprint backlog)*</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td></td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Add work items to a taskboard<br/>*(Stakeholders can add backlog items but not tasks)*</td>
<td></td>
<td></td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

<tr>
<td align="left">Prioritize/reorder a sprint backlog or taskboard; add child items to a backlog item; reassign items to a sprint using the Planning pane </td>
<td> </td>
<td>  </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">View team capacity (work details) </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>


<tr>
<td align="left">Set team capacity</td>
<td></td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

<tr>
<td align="left">Use bulk edit features
</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

<tr>
<td align="left">Define sprints, set sprint dates</td>
<td></td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

<tr>
<td align="left">Customize a sprint backlog or taskboard, configure team settings<br/>*(Stakeholders assigned as a team administrator or Project Administrator can configure team settings)*</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>

</tr>

</tbody>
</table>



## Queries and semantic search

[**Queries**](../queries/view-run-query.md) are filtered lists of work items based on criteria that you define by using a query editor.   


<table>
<tr valign="bottom">
<th width="41%">Task</th>
<th width="15%">Stakeholders</th>
<th width="12%">Readers</th>
<th width="15%">Contributors</th>
<th width="17%">Team admins</th>
</tr>
<tbody valign="top" align="center">

<tr>
<td align="left">View and run managed queries 
</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">Create and save managed queries<br/>*(Stakeholders can't save shared queries)*
</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">View query charts
</td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">Create query charts
</td>
<td> </td>
<td> </td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">Powerful semantic work-tracking search.
</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
<td>![checkmark](/azure/devops/_img/icons/checkmark.png)</td>
</tr>

</tbody>
</table>

<!---
## Resources defined for the team project

You set project-level information permissions from **Project Settings**>**Security**. You set permissions for area and iteration paths under **Project Settings**>**Boards>Project Configuration**. These resources are defined for a project which all valid users of the project can view. 

<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th>Team admins</th>
<th width="16%">Organization owner/<br/>Project Admins</th>
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
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">[Area nodes and iteration nodes: Create, delete, edit child nodes](../../organizations/settings/set-iteration-paths-sprints.md)  
</td>
<td>![checkmark](../../_img/icons/checkmark.png)</td>
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

-->

<!---
## Team administrator role and permissions  

The team administrator role supports configuration of team settings. To be added as a team administrator, see [Add Team administrators](../../organizations/settings/add-team-administrator.md). Project Administrators can configure settings at the team and project level. For more information, see [Add administrators, set permissions at the project level or project collection level](../../organizations/security/set-project-collection-level-permissions.md). 

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

-->

<a id="stakeholder-access"></a>

## More on Stakeholder access

Stakeholder access supports business owners, analysts, and other team members who don't manage the work of a project, but need to be able to view and add ideas to the backlog, add context and information to work items, and review status and progress. All members of an organization who don't use Visual Studio but want to contribute to work item tracking and monitor progress can be assigned as a stakeholder. Note, even if you change the permission level for a user assigned **Stakeholder** access, the user won't be able to access the feature. 

> [!NOTE]   
> For public projects, Stakeholder access gives users full access to all work-tracking features. To learn more, see [About access levels, Stakeholder access](../../organizations/security/access-levels.md#stakeholder-access).




## Related articles 

*	[Get started as a stakeholder](../../organizations/security/get-started-stakeholder.md)  
*	[Add another team](../../organizations/settings/add-teams.md)  
*	[Add a team administrator](../../organizations/settings/add-team-administrator.md)
*	[Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  *	[Grant or restrict access to select features and functions](../../organizations/security/restrict-access.md)
*	[Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md) 


