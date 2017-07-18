---
title: Configure team settings | Team Services  & TFS 
description: Manage team-specific tools such as sprint settings, backlogs, Kanban boards, and more as well as add team administrators 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 6BF2B72D-9160-4140-B8DE-B2C7C42AC338  
ms.manager: douge
ms.author: kaelli
ms.date: 07/12/2017
---

# Configure team settings and add team administrators 

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 

Within a team project, you [add teams](multiple-teams.md) to support the needs of several feature teams, or an enterprise organized to deliver different products. Each team is then able to configure the Agile tools the way that works for their team, supporting each team to collaborate most effectively in planning and managing their work.  

As a team administrator, you can configure, customize, and manage all team-related activities for your team. These include being able to add team members, add team admins, and configure Agile tools and team assets. 

Team admin permissions are role-based, unlike project admin permissions which are set through the user interface. Also, because team administrators are members of the Contributor role they have permissions assigned to that role.  


##Team administrator role and permissions  

The following table summarizes a subset of the default permissions assigned to the team project Readers, Contributors and Project Administrators groups and the Team Administrator role. Team admin permissions extend only to the team for which they're an administrator. Project administrator permissions extend across all teams defined for the team project.


###Manage team members and permissions


<table>

<tr valign="bottom">
<th width="38%">Permission</th>
<th width="10%">Readers</th>
<th width="16%">Contributors</th>
<th width="18%">Team Administrators</th>
<th width="18%">Project Administrators</th>
</tr>
<tbody valign="top" align="center">
<tr>

<td align="left">[Add a team administrator](#add-team-admin) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">
[Add team members](multiple-teams.md) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">[View shared work item queries](../track/using-queries.md)</p>
</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">
[Manage shared query and query folder permissions](../track/set-query-permissions.md)<br/>(Contribute, Delete, Manage Permissions)
</p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>



</tbody>
</table>


###Configure and work with team assets  

Depending on the security group you are added to, you'll be able to access or use the following features.   

Contributors have access to all features available to Readers. Team admins have access to all features available to Contributors. And, Project administrators have access to all features available to Team admins for all teams. 

<div style="float:left;width:170px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Readers</p>
<ul style="padding-left:10px">
<li style="margin-bottom:0px">View team [Velocity](../../report/guidance/team-velocity.md) )</li>
<li style="margin-bottom:0px">[View backlogs and boards](../backlogs-boards-plans.md)</li>
<li style="margin-bottom:0px">[View dashboards](../../report/dashboards.md) </li>
<li style="margin-bottom:0px">[Set personal alerts](../track/alerts-and-notifications.md)</li>
</ul>
</div>


<div style="float:left;width:180px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Contributors</p>
<ul style="padding-left:20px">
<li style="margin-bottom:0px">[Add work items](../backlogs/add-work-items.md)</li> 
<li style="margin-bottom:0px">[Delete work items](../backlogs/remove-delete-work-items.md) <sup>1</sup></li> 
<li style="margin-bottom:0px">Manage the [Product backlog](../backlogs/create-your-backlog.md)</li> 
<li style="margin-bottom:0px">Work with the [Kanban board](../kanban/kanban-basics.md) </li>
<li style="margin-bottom:0px">[Manage sprint backlogs](../scrum/sprint-planning.md) </li>
<li style="margin-bottom:0px">[Manage task boards](../scrum/task-board.md)</li>
<li style="margin-bottom:0px">[Capacity planning](capacity-planning.md) </li>
<li style="margin-bottom:0px">[[Forecasting](../scrum/forecast.md)  </li>
<li style="margin-bottom:0px">[Collaborate in a team room](../../collaborate/collaborate-in-a-team-room.md) </li>

</ul>
</div>


<div style="float:left;width:220px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Team admins</sup> </b></p>
<ul style="padding-left:30px">

<li style="margin-bottom:0px">[Set team defaults](set-team-defaults.md)</li>
<li style="margin-bottom:0px">[Configure team backlogs](../customize/select-backlog-navigation-levels.md)</li>
<li style="margin-bottom:0px">[Show bugs on backlogs and boards](../customize/show-bugs-on-backlog.md) </li>
<li style="margin-bottom:0px">[Select team sprints](set-team-defaults.md) </li>
<li style="margin-bottom:0px">[Set working days off](capacity-planning.md)  </li>
<li style="margin-bottom:0px">[Manage team dashboard(s)](../../Report/dashboards.md) </li>
<li style="margin-bottom:0px">[Create and manage team alerts](../track/alerts-and-notifications.md) <sup>3</sup> </li>
<li style="margin-bottom:0px">[Create and manage team rooms](#teamroom) <sup>4</sup> </li>

</ul>
</div>

<div style="float:left;width:220px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Team admins<br/>Customize the Kanban board: <sup>2</sup>  </b></p>
<ul style="padding-left:30px">
<li style="margin-bottom:0px">[Cards: Fields](../customize/customize-cards.md#kanban-board) </li>
<li style="margin-bottom:0px">[Cards: Styles](../customize/customize-cards.md#style-rule) </li>
<li style="margin-bottom:0px">[Cards: Tag colors](../customize/customize-cards.md#color-tags) </li>
<li style="margin-bottom:0px">[Cards: Annotations](../customize/customize-cards.md#annotations) </li>
<li style="margin-bottom:0px">[Cards: Tests](../customize/customize-cards.md#tests) </li>
<li style="margin-bottom:0px">[Board: Columns](../kanban/add-columns.md) </li>
<li style="margin-bottom:0px">[Board: WIP limits](../kanban/wip-limits.md)   </li>
<li style="margin-bottom:0px">[Board: Split columns](../kanban/split-columns.md)  </li>
<li style="margin-bottom:0px">[Board: Swimlanes](../kanban/expedite-work.md)</li>
<li style="margin-bottom:0px">[Board: Card reordering](../customize/reorder-cards.md)</li> 
<li style="margin-bottom:0px">[Board: Definition of Done](../kanban/definition-of-done.md)</li>
<li style="margin-bottom:0px">[Charts: Cumulative flow](../../Report/guidance/cumulative-flow.md#configure) </li>
</ul>

</div>
<div style="clear:left;font-size:90%">
</div>

<p><b>Notes:</b></p>
<ol>
<li>Contributors can delete work items, which are placed in the Recycle bin. To permanently [delete work items](../backlogs/remove-delete-work-items.md), you must be a member of the Project Administrators group or have the *Delete work items in this project* set to Allow.</li>
<li>Team administrators can manage all their team-related assets. Project Administrators can manage all team-related assets for all teams defined for the team project.</li>
<li>Team administrators can manage team alerts. Project Administrators groups can manage all team alerts for all teams defined for the team project.</li>
<li>Team administrators can manage their team rooms. Project Administrators can create and administer team rooms that they've created.</li>
</ol>


<div style="clear:left;font-size:100%">
</div>


###Access shared team project resources
<table>
<tr valign="bottom">
<th width="38%">Permission</th>
<th width="10%">Readers</th>
<th width="16%">Contributors</th>
<th width="18%">Team Administrators</th>
<th width="18%">Project Administrators</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">
[Create and add tags](../track/add-tags-to-work-items.md)</td>
<td>&nbsp;&nbsp; </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">Area node: [Edit work items under the node](../customize/set-area-paths.md) 
</td>
<td align="left"><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">[Area nodes and Iteration nodes: Create, delete, edit child nodes](../customize/set-iteration-paths-sprints.md)  
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">View project-level information 
</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Edit project-level information <br/>(This permission grants users access to all team administration tasks across all teams defined for the team project.)  
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>


</tbody>
</table>


For a simplified view of permissions assigned to built-in groups, see [Permissions and access](../../setup-admin/permissions-access.md). For a comprehensive list of all permissions and default groups, see the [Permissions reference for TFS](../../setup-admin/permissions.md). 


<a id="add-team-admin">  </a>  

##Add a team member as a team administrator

It's always a good idea to have more than one person with administration permissions for an area. 

1. If you're not a team administrator, get added as one using this procedure. Ask an administrator for your team project or project collection to add you as an administrator.  

2. Add an administrator from the web portal team admin context.  

	![Open team administration context](_img/add-account-as-team-admin.png)  

	To access this page, choose the ![gear icon](../_img/icons/gear_icon.png) gear icon from your team home page.  

3. Add the account identity.  

	![Add account as a team administrator](_img/add-team-admin-dialog.png) 

<a id="team-settings">  </a>
        
##Configure team settings

You can configure all your team settings from the common configuration dialog. 

>[!NOTE]
><b>Feature availability: </b>The common configuration dialog is available from Team Services and the web portal for TFS 2015.1 and later versions.  

1. To open, click ![gear icon](../_img/icons/team-settings-gear-icon.png), the gear icon, from any team backlog or board to set one or more team settings.  

	For example, from the Kanban board ...  

	<img src="../customize/_img/kanban-card-customize-open-settings.png" alt="Kanban board, open common configuration settings" style="border: 1px solid #CCCCCC;" /><br/>  

2. Click a tab under Cards or Board to configure card and Kanban board settings.  

	![Common configuration dialog team settings](_img/manage-team-assets-common-configuration-dialog.png)

	For details on each configuration option, see one of these topics:  



<div style="float:left;width:130px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Cards</p>
<ul style="padding-left:40px">
<li style="margin-bottom:0px">[Fields](../customize/customize-cards.md)</li> 
<li style="margin-bottom:0px">[Styles](../customize/customize-cards.md#style-rule)</li> 
<li style="margin-bottom:0px">[Tag colors](../customize/customize-cards.md#color-tags)</li> 
<li style="margin-bottom:0px">[Annotations](../customize/customize-cards.md#annotations)</li>
<li style="margin-bottom:0px">[Tests](../customize/customize-cards.md#tests)</li> 
</ul>
</div>


<div style="float:left;width:130px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Board</p>
<ul style="padding-left:30px">
<li style="margin-bottom:0px">[Columns](../kanban/add-columns.md)</li> 
<li style="margin-bottom:0px">[Swimlanes](../kanban/expedite-work.md)</li> 
<li style="margin-bottom:0px">[Card reordering](../customize/reorder-cards.md)</li> 
</ul>
</div>


<div style="float:left;width:130px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Charts</p>
<ul style="padding-left:30px">
<li style="margin-bottom:0px">[Cumulative flow](../../Report/guidance/cumulative-flow.md#configure)</li> 
</ul>


</div>


<div style="float:left;width:130px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">General</p>
<ul style="padding-left:30px">
<li style="margin-bottom:0px">[Backlogs](../customize/select-backlog-navigation-levels.md)</li> 
<li style="margin-bottom:0px">[Working days](../kanban/expedite-work.md)</li> 
<li style="margin-bottom:0px">[Working with bugs](../customize/show-bugs-on-backlog.md)</li> 
</ul>


</div>

<div style="clear:left;font-size:100%">
</div>


<a id="teamroom">  </a>

## Create and manage a team room  
A team room is created for each team that gets created. Team administrators can create additional rooms and manage their team rooms.  

Members of the Project Administrators groups can create and administer team rooms that they have created. And, members of the Project Collection Administrators groups can create and administer all team rooms.  

<a id="team-room-permissions"> </a>
### Administer team room permissions

You can grant permissions to users to administer a team room.  

1. From the context menu, open permissions for the team room.  

	![Open team room permissions](_img/open-security-team-room.png)  

2. Add an account, set the permissions for Administer to **Allow**, and save the changes.   

	![Add menu on Permissions page for a team room](_img/add-team-admin-dialog.png) 


<a id="team-room-event-permissions">  </a>
### Permissions to open team room events
               
Permissions on team room events are managed by their associated operational area. It is possible for a team member to have permissions to collaborate within a team room, yet not be allowed to view work items, build definitions, or source code that have alerts enabled in the team room. 





## Related notes 

To create additional teams, see [Multiple teams](multiple-teams.md).  

If team members don't have access to all the features they want, check that they have [the access level needed for those features](../connect/change-access-levels.md).  

You can also [restrict access to select features and functions](../../setup-admin/restrict-access-tfs.md).


<a id="team-favorites"> </a>
### Set team favorites 
Team favorites are a quick way for members of your team to quickly access shared resources of interest. You can define team favorites for the following:

- **Code hub/Explorer**: Add repos or folders to team favories  
- **Work hub/Queries**: A  [Shared work item queries](../track/using-queries.md) to team favorites    
- **Build hub/Explorer**: Add build definitions to team favorites   


From your team context, drag shared queries, builds, and folders to Team favorites to provide quick access to those items. Or, choose the Add to team favorites option from the context menu for the item. You must be [added as a team admin](../scale/manage-team-assets.md#add-team-admin) to manage team favorites.  

![Drag items to team favorites](../../_img/alm-index-team-favorites.png)  
 


<a id="team-group"> </a>
### Team groups 
When you create a team, you automatically create a team group, which contains the accounts of all members you add to the team. You can manage permissions for team members by setting the permissions of the team group.   

You can use this group to filter queries. The name of team groups follows the pattern [Team Project Name]\Team Name. For example, the following query finds work assigned to members of the [Fabrikam Fiber]\Email team group.

![Query that uses In Group operator and team group name](../scale/_img/query-in-group-email-team-work-in-progress.png)

### Team name, description, and picture

Team settings also include the team name, description, and team profile image.  

To add a team picture. Open the team administration page and choose the picture icon under Team Profile. The maximum file size is 4 MB. 




