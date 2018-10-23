---
title: Default work tracking permissions & access 
titleSuffix: Azure Boards & TFS 
description: Default permissions and access levels for tracking work tracking in Azure Boards & Team Foundation Server
ms.technology: devops-security
ms.prod: devops
ms.topic: conceptual
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.date: 10/23/2017
ms.topic: reference
monikerRange: '>= tfs-2013'
---

# Permissions and access for work tracking

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You can use the majority of work tracking functions and features that Azure DevOps or TFS provides if you are added as a team member, which adds you to the Contributors group. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions for tracking work as listed below.

For a simplified view of permissions assigned to built-in groups, see [Permissions and access](permissions-access.md). For a comprehensive list of all permissions and default groups, see the [Permissions and groups reference](permissions.md). 

In addition to permissions, access to premium features are controlled by either the Advanced or VS Enterprise [access level](access-levels.md). Contributors and administrators should be added to Basic access. Stakeholder access is available to support free access to a limited set of features by an unlimited set of stakeholders. For more details on Stakeholder access, jump to [Stakeholder access](#stakeholder-access). 

The team administrator role supports configuration of team settings. To be added as a team administrator, see [Add team administrators](../../organizations/settings/add-team-administrator.md). Project administrators con configure settings at the project level. See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md). 

## Default work tracking permissions and access 

[!INCLUDE [temp](_shared/work.md)]


## Test management permissions   

Test plans, test suites, test cases and other test artifacts are specific work item types that support manual and exploratory testing. You set [test permissions at the project level](set-project-collection-level-permissions.md) from the admin context Security page.  

[!INCLUDE [temp](_shared/test.md)]


Area permissions for web-based test case management and test execution control access to the following actions.  

The **Manage test suites** permission enables users to:  
- Create and modify test suites  
- Add or remove test cases to/from test suites  
- Change test configurations associated with test suites  
- Modify the suite hierarchy by moving a test suite  

The **Manage test plans** permission enables users to:  
- Create and modify test plans 
- Add or remove test suites to or from test plans 
- Change test plan properties such as build and test settings 


## Resources defined for the project

You set project-level information permissions from the admin page for a project. You set permissions for area and iteration paths under under **Project Settings**>**Work**. These resources are defined for a project which all valid users of the project can view. 

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
<td align="left">[View project-level information](set-project-collection-level-permissions.md) 
</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">Area node: [Edit work items under the node](../../organizations/settings/set-area-paths.md) 
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>
<td align="left">[Area nodes and Iteration nodes: Create, delete, edit child nodes](../../organizations/settings/set-iteration-paths-sprints.md)  
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">[Edit project-level information](set-project-collection-level-permissions.md)     
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>


</tbody>
</table>


The **Edit project-level information** permission includes the ability to perform these tasks for the project:
- Create and modify areas and iterations  
- Edit check-in policies  
- Edit shared work item queries  
- Edit project level permission ACLs  
- Create and modify global lists  
- Edit [event subscriptions](permissions.md#alerts) (email or SOAP) on project level events.




## Team administrator role and permissions  

The following table summarizes a subset of the default permissions assigned to the project Readers, Contributors and Project Administrators groups and the Team Administrator role. Team admin permissions extend only to the team for which they're an administrator. Project administrator permissions extend across all teams defined for the project.


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

<td align="left">[Add a team administrator](../../organizations/settings/add-team-administrator.md) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">
[Add team members](../../organizations/settings/add-teams.md) </p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>
<tr>

<td align="left">[View shared work item queries](../../boards/queries/using-queries.md)</p>
</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">
[Manage shared query and query folder permissions](../../boards/queries/set-query-permissions.md)<br/>(Contribute, Delete, Manage Permissions)
</p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">
[Add and edit dashboards](../../report/dashboards.md) 
</p>
</td>
<td><p>&nbsp;&nbsp;</p></td>
<td><p>&nbsp;&nbsp;</p></td>
<td>![checkmark](_img/icons/checkmark.png)</td>
<td>![checkmark](_img/icons/checkmark.png)</td>
</tr>

</tbody>
</table>




<a id="stakeholder-access"></a>

## Stakeholder access

Stakeholder access supports business owners and analysts and other team members who don't contribute to code, build, and test activities. They contribute by adding ideas to the backlog, adding context and information to work items, and reviewing status and progress. All members of an organization who don't use Visual Studio but want to contribute to work item tracking and monitor progress can be assigned as a stakeholder. To learn more about stakeholder access, see [Work as a stakeholder](get-started-stakeholder.md). 

For a comparison chart of stakeholder versus basic access, see the [Feature Matrix](https://visualstudio.microsoft.com/vsts/compare-features/).

For information about each access levels, see [About access levels](access-levels.md). To assign access levels, see: 
- **Azure DevOps**: [Add users and assign licenses in Azure DevOps](../accounts/add-organization-users.md)
- **TFS**: [Change access levels](change-access-levels.md)  


<a id="grant-add-permissions"></a>  

## Grant team members additional permissions  

For teams to work autonomously, you may want to provide them with permissions that they don't have by default. Suggested tasks include providing team administrators or team leads permissions to:  

- [Create and edit child nodes under their default area path](set-permissions-access-work-tracking.md)  
- [Create and edit child nodes under an existing iteration node](set-permissions-access-work-tracking.md)  
- [Create shared queries and folders under the Shared Queries folder](../../boards/queries/set-query-permissions.md).  
 
By default, team members inherit the permissions afforded to members of the project Contributors group. Members of this group can add and modify source code, create and delete test runs, and create and modify work items. They can [collaborate on a Git project](../../repos/git/gitquickstart.md) or collaborate with other team members and [check in work to the team's code base (TFVC)](../../repos/tfvc/check-your-work-team-codebase.md).  

![Default permissions assigned to team contributors](../settings/_img/add-team/default-permissions-assigned-to-team-contributors.png)  

If your on-premises TFS deployment includes reporting or SharePoint Products, add users to those resources. See [Set SharePoint site permissions](../../organizations/security/set-sharepoint-permissions.md) and [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md).


## Related notes 

*	[Set permissions and access for work tracking](set-permissions-access-work-tracking.md) 
*	[Get started as a Stakeholder](get-started-stakeholder.md)  
*	[Add another team](../../organizations/settings/add-teams.md)  
*	[Manage teams and configure team tools](../settings/manage-teams.md)   

