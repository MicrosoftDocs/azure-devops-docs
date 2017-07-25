---
title: Set permissions and access for tracking  | VSTS & TFS
description: How to guide for setting permissions and access levels to support work tracking tasks (Visual Studio Team Services and Team Foundation Server)
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 07/13/2017
---


# Permissions and access for work tracking   

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 

You can use the majority of work tracking functions and features that Team Services or TFS provides if you are added as a team member, which adds you to the Contributors group. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions for tracking work as listed below.

In addition to permissions, access to premium features are controlled by one of three access levels: Basic, Stakeholder, Advanced or VS Enterprise. Contributors and administrators should be added to Basic access. Stakeholder access is available to support free access to a limited set of features by an unlimited set of stakeholders. For more details on Stakeholder access, jump to [Stakeholder access](#stakeholder-access). 

The team administrator role supports configuration of team settings. To be added as a team administrator, see [Add team administrators](scale/add-team-administrator.md).  

<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th>Team Admins</th>
<th width="16%">Account Owner/<br/>Project Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">View work items, including bugs, requirements, and tasks</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">Create and edit work items, follow a work item</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Change work item type </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Move or delete work items </td>
<td> </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Search and query work items, save work item queries
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>Can't save queries</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">View backlogs, boards, and plans
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Provide feedback
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Request feedback
</td>
<td> </td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Agile tools (Kanban boards, backlogs, sprint planning, portfolio management)
</td>
<td> limited interactions </td>
<td> view only</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Configure Agile tools, set team defaults 
</td>
<td> </td>
<td> </td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Create new work item tags</td>
<td>Can assign existing tags</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>

</tr>


<tr>
<td align="left">View, add, and configure Delivery Plans</td>
<td> </td>
<td>view only</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>

</tr>



<tr>
<td align="left">Customize project information (area paths, iteration paths, and work tracking processes) 
</td>
<td>  </td>
<td> </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

</tbody>
</table>


## Team administrator role and permissions  

The following table summarizes a subset of the default permissions assigned to the team project Readers, Contributors and Project Administrators groups and the Team Administrator role. Team admin permissions extend only to the team for which they're an administrator. Project administrator permissions extend across all teams defined for the team project.


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

<td align="left">[Add a team administrator](add-team-administrator.md) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">
[Add team members](scale/multiple-teams.md) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">[View shared work item queries](../track/using-queries.md)</p>
</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">
[Manage shared query and query folder permissions](../track/set-query-permissions.md)<br/>(Contribute, Delete, Manage Permissions)
</p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>



</tbody>
</table>


### Access shared team project resources

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
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">Area node: [Edit work items under the node](../customize/set-area-paths.md) 
</td>
<td align="left"><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">[Area nodes and Iteration nodes: Create, delete, edit child nodes](../customize/set-iteration-paths-sprints.md)  
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">View project-level information 
</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">Edit project-level information <br/>(This permission grants users access to all team administration tasks across all teams defined for the team project.)  
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>


</tbody>
</table>


<a id="stakeholder-access"></a>  
## Stakeholder access

Stakeholder access supports business owners and analysts and other team members who don't contribute to code, build, and test activities. They contribute by adding ideas to the backlog, adding context and information to work items, and reviewing status and progress. All members of an organization who don't use Visual Studio but want to contribute to work item tracking and monitor progress can be assigned as a stakeholder. 

Stakeholder access provides free access to Team Services and to on-premises TFS team projects. Stakeholders don't have to have a client access license (CAL). This view restricts functionality so that your organization complies with the end-user license agreement for Team Foundation Server. For more information, see [Visual Studio licensing white paper](http://go.microsoft.com/fwlink/?LinkId=255102).  

Only account owners or members of the [Team Foundation Server Administration group](../setup-admin/add-administrator-tfs.md) can add accounts to get Stakeholder access. For information on adding stakeholder accounts:  

   **Team Services:**&#160;&#160;[Add users in Visual Studio Team Services](../setup-admin/team-services/add-account-users-assign-access-levels-team-services.md)  
   **On-premises TFS:**&#160;&#160;[Change access levels](connect/change-access-levels.md)  

With stakeholder access, anyone on your team can check project status and provide feedback. Stakeholders can track project priorities and provide direction, feature ideas, and business alignment to a team. They can contribute to project plans by adding and modifying work items.  

Stakeholders contribute to team projects through the web portal using any supported browser. Within a team project, stakeholders can perform the following primary tasks by navigating to a hub/page or their account profile. For a comparison chart of stakeholder versus basic access, see the [Feature Matrix](https://www.visualstudio.com/team-services/compare-features/).

To learn more about stakeholder access, see [Work as a stakeholder](../quickstart/get-started-stakeholder.md).  


<a id="grant-add-permissions"></a>  

## Grant team members additional permissions  

For teams to work autonomously, you may want to provide them with permissions that they don't have by default. Suggested tasks include providing team administrators or team leads permissions to:  

- [Create and edit child nodes under their default area path](how-to/set-permissions-access-work-tracking.md)  
- [Create and edit child nodes under an existing iteration node](how-to/set-permissions-access-work-tracking.md)  
- [Create shared queries and folders under the Shared Queries folder](track/set-query-permissions.md).  
 
By default, team members inherit the permissions afforded to members of the team project Contributors group. Members of this group can add and modify source code, create and delete test runs, and create and modify work items. They can collaborate with other team members and [check in work to the team's code base (TFVC)](../tfvc/check-your-work-team-codebase.md) or [collaborate on a Git team project](../git/get-started.md).  

![Default permissions assigned to team contributors](scale/_img/default-permissions-assigned-to-team-contributors.png)  

If your on-premises TFS deployment includes reporting or SharePoint Products, add users to those resources. See [Add users to a team project](../setup-admin/add-users.md). 


## Related notes 

For a simplified view of permissions assigned to built-in groups, see [Permissions and access](../../setup-admin/permissions-access.md). For a comprehensive list of all permissions and default groups, see the [Permissions reference for TFS](../../setup-admin/permissions.md). 

*	[Set permissions and access for work tracking](how-to/set-permissions-access-work-tracking.md) 
*	[Get started as a Stakeholder](../quickstart/get-started-stakeholder.md)  
*	[Add another team](scale/multiple-teams.md)  
*	[Configure team settings](scale/manage-team-assets.md)   

For a complete reference of all built-in groups and permissions, see [Permissions and groups](../setup-admin/permissions.md). 

For information about assigning access levels and supporting stakeholder access, see: 
- **Team Services**: [Add users and assign licenses in Visual Studio Team Services](../setup-admin/team-services/add-account-users-assign-access-levels-team-services.md)
- **TFS**: [Change access levels](./connect/change-access-levels.md)  



### Test management permissions  

Area permissions for web-based test case management and test execution control access to the following actions. 

The **Manage test suites** permission enables users to:  
<ul style="padding-left:10px">
<li style="margin-bottom:2px">Create and modify test suites</li>
<li style="margin-bottom:2px">Add or remove test cases to/from test suites</li>
<li style="margin-bottom:2px">Change test configurations associated with test suites</li>
<li style="margin-bottom:2px">Modify the suite hierarchy by moving a test suite</li>
</ul>

The **Manage test plans** permission enables users to:  
<ul style="padding-left:30px">
<li style="margin-bottom:2px">Create and modify test plans </li>
<li style="margin-bottom:2px">Add or remove test suites to or from test plans</li>
<li style="margin-bottom:2px">Change test plan properties such as build and test settings</li>
</ul>


Additional test management permissions are assigned at the team project level and include the ability to create, delete, and view test runs, and manage test configurations and environments. See [Project, object, and test-level permissions](../setup-admin/permissions.md#project_test).  
 

<!---


### Configure and work with team assets  

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



-->

<a id="team-room-event-permissions">  </a>
### Permissions to open team room events
               
Permissions on team room events are managed by their associated operational area. It is possible for a team member to have permissions to collaborate within a team room, yet not be allowed to view work items, build definitions, or source code that have alerts enabled in the team room. 

