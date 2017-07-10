---
title: Set permissions and access for tracking  | VSTS & TFS
description: How to guide for setting permissions and access levels to support work tracking tasks (Visual Studio Team Services and Team Foundation Server)
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/23/2016
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
*	[Set permissions and access for work tracking](how-to/set-permissions-access-work-tracking.md) 
*	[Get started as a Stakeholder](../quickstart/get-started-stakeholder.md)  
*	[Add another team](scale/multiple-teams.md)  
*	[Configure team settings](scale/manage-team-assets.md)   

For a complete reference of all built-in groups and permissions, see [Permissions and groups](../setup-admin/permissions.md). 

For information about assigning access levels and supporting stakeholder access, see [Manage users and access](../setup-admin/team-services/add-account-users-assign-access-levels-team-services.md) for Team Services, and [Change access levels](connect/change-access-levels.md) for TFS. 

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
