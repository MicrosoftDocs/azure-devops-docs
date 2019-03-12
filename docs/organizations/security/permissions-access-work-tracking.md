---
title: Default work tracking permissions & access 
titleSuffix: Azure Boards & TFS 
description: Default permissions and access levels for tracking work tracking in Azure Boards & Team Foundation Server
ms.technology: devops-security
ms.prod: devops
ms.topic: conceptual
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 01/07/2018
---

# Permissions and access for work tracking

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

::: moniker range=">= azure-devops-2019"

As a member of an Azure DevOps project, you can use the majority of features to track work. Limitations to select features are based on the *access level* and *security group* to which a user is assigned. The **Basic** access level supports full access to all Azure Boards features. **Stakeholder** access level provides partial support to select features, allowing users to view and modify work items, but not use all features. The built-in security groups&mdash;**Readers**, **Contributors**, and **Project Administrators**&mdash; and team administrator role grant permissions to specific features. 

::: moniker-end  

::: moniker range="<= tfs-2018"

As a member of an Azure DevOps project, you can use the majority of features to track work. Limitations to select features are based on the *access level* and *security group* to which a user is assigned. The **Basic** access level supports full access to all features under the **Work** hub. **Stakeholder** access level provides partial support to select features, allowing users to view and modify work items, but not use all features. The built-in security groups&mdash;**Readers**, **Contributors**, and **Project Administrators**&mdash; and team administrator role grant permissions to specific features. 

::: moniker-end


In the tables provided in this article, a ![ ](/azure/devops/_img/icons/checkmark.png) checkmark indicates that the corresponding access level or security group has access to a feature by default. 

> [!NOTE]   
> Team administrators can configure settings for their team's tools. Organization owners and members of the Project Administrators group can configure settings for all teams. To be added as an administrator, see [Add team administrators](../settings/add-team-administrator.md) or [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md). 

For a comparison chart of Stakeholder versus Basic access, see the [Feature matrix](https://azure.microsoft.com/services/devops/compare-features/). To assign or change an access level, see [Add users and assign licenses](../accounts/add-organization-users.md). If you need to [grant specific users select permissions](change-individual-permissions.md), you can do so.


## General work item feature access

You can use work items to track anything you need to track. To learn more, see [Understand how work items are used to track issues, tasks, and epics](../../boards/work-items/about-work-items.md).

[!INCLUDE [temp](_shared/boards-work-items.md)]

## Boards feature access

You use [**Boards**](../../boards/boards/kanban-quickstart.md) to implement Kanban methods. Boards present work items as cards and support quick status updates through drag-and-drop. 

[!INCLUDE [temp](_shared/boards-boards.md)]

## Backlogs features access

[**Backlogs**](../../boards/backlogs/create-your-backlog.md) display work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy.  

[!INCLUDE [temp](_shared/boards-backlogs.md)]


## Sprints feature access

You use sprint tools to implement Scrum methods. The [**Sprints**](../../boards/sprints/assign-work-sprint.md) set of tools provide filtered views of work items that a team has assigned to specific iteration paths or sprints. 

[!INCLUDE [temp](_shared/boards-sprints.md)]

## Queries and semantic search 

[**Queries**](../../boards/queries/view-run-query.md) are filtered lists of work items based on criteria that you define by using a query editor. [Adhoc searches](../../boards/queries/search-box-queries.md) are powered by a semantic search engine.

[!INCLUDE [temp](_shared/boards-queries.md)]


::: moniker range=">= tfs-2017"  

## Delivery plans feature access

[Delivery plans](../../boards/plans/review-team-plans.md) display work items as cards against a calendar view. This format can be an effective communication tool with managers, partners, and stakeholders for a team. Users granted **Stakeholder** access for  private projects have no access to delivery plans, while users granted **Stakeholder** access for public projects has the same access as regular Contributors granted **Basic** access. 

[!INCLUDE [temp](_shared/boards-plans.md)]

::: moniker-end


## Test management feature access   

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

You set project-level information permissions from **Project Settings**>**Security**. You set permissions for area and iteration paths under **Project Settings**>**Boards**. These resources are defined for a project which all valid users of the project can view. 

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

For a comparison chart of stakeholder versus basic access, see the [Feature Matrix](https://azure.microsoft.com/services/devops/compare-features/).

For information about each access levels, see [About access levels](access-levels.md). To assign access levels, see: 
- **Azure DevOps Services**: [Add users and assign licenses in Azure DevOps](../accounts/add-organization-users.md)
- **Azure DevOps Server, TFS**: [Change access levels](change-access-levels.md)  


<a id="grant-add-permissions"></a>  

## Grant team members additional permissions  

For teams to work autonomously, you may want to provide them with permissions that they don't have by default. Suggested tasks include providing team administrators or team leads permissions to:  

- [Create and edit child nodes under their default area path](set-permissions-access-work-tracking.md)  
- [Create and edit child nodes under an existing iteration node](set-permissions-access-work-tracking.md)  
- [Create shared queries and folders under the Shared Queries folder](../../boards/queries/set-query-permissions.md).  
 
By default, team members inherit the permissions afforded to members of the project Contributors group. Members of this group can add and modify source code, create and delete test runs, and create and modify work items. They can [collaborate on a Git project](../../repos/git/gitquickstart.md) or collaborate with other team members and [check in work to the team's code base (TFVC)](../../repos/tfvc/check-your-work-team-codebase.md).  

![Default permissions assigned to team contributors](../settings/_img/add-team/default-permissions-assigned-to-team-contributors.png)  

::: moniker range="tfs-2018 < azure-devops"

If your on-premises deployment includes reporting, add users to those resources. See [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md).

::: moniker-end  

::: moniker range="<= tfs-2017"  

If your on-premises TFS deployment includes reporting or SharePoint Products, add users to those resources. See [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md) and [Set SharePoint site permissions](../../organizations/security/set-sharepoint-permissions.md).

::: moniker-end  

## Related notes 

- [Set permissions and access for work tracking](set-permissions-access-work-tracking.md) 
- [Get started as a Stakeholder](get-started-stakeholder.md)  
- [Add another team](../../organizations/settings/add-teams.md)  
- [Manage teams and configure team tools](../settings/manage-teams.md)   

