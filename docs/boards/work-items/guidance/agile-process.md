---
title: Agile process template artifacts
titleSuffix: Azure Boards  
description: Agile process objects used to plan and track work, monitor progress, and trends when connecting to Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: work-items
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 28e9cb42-f049-45eb-a2d8-f7a3b93471b8
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 04/11/2019
---


# Agile process 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

The Agile process supports the following work item types (WITs) to plan and track work, tests, feedback, and code review. With different WITs you can track different types of work&mdash;such as features, user stories, and tasks. These artifacts are created when you create a project using the Agile  process. They are based on Agile principles and values.  
 
<img src="_img/agile-process-work-tracking-wits.png" alt="Agile process work item types" style="border: 2px solid #C3C3C3;" />

In addition to the WITs, teams have access to a set of work item queries to track information, analyze progress, and make decisions.  

[!INCLUDE [temp](../../_shared/process-customize.md)] 

<a id="start-using" />

## Plan and track work with Agile
 
You build your project plan by creating a backlog of user stories that represent the work you want to develop and ship. You track bugs, tasks, and blocking issues using the bug, task, and issue WITs. To support portfolio management, teams create features and epics to view a roll up of user stories within or across teams. For details about using Agile WITs, see [Agile process work item types and workflow](agile-process-workflow.md).  

The essential flow for getting started is as shown. To get started using Scrum or Kanban tools, see [Get started with Agile tools to plan and track work](../../get-started/what-is-azure-boards.md).  

*Click one of the following images to go to the linked article.*

[![Define stories](../../backlogs/_img/overview/gs-planning-define-stories.png)](../../backlogs/create-your-backlog.md)[![Organize backlog](../../backlogs/_img/overview/gs-planning-organize-backlog.png)](../../backlogs/organize-backlog.md)[![Manage bugs](../../backlogs/_img/overview/gs-planning-manage-bugs.png)](../../backlogs/manage-bugs.md)[![Manage issues](../../backlogs/_img/overview/gs-planning-manage-issues.png)](../../backlogs/manage-issues-impediments.md)

> [!NOTE]  
> A work item is a database record that contains the definition, assignment, priority, and state of work. Work item types define the template of fields, workflow, and form for each type. Work items can be linked to each other to support tracking dependencies, roll up of work, and reports.  


<a id="shared-queries"></a> 

## List work items using queries

You can manage your workload more effectively by frequently reviewing the status of user stories and tasks. You can use the shared work item queries to list work items for a current sprint or the product backlog.  

[!INCLUDE [temp](../../_shared/shared-queries.md)] 

::: moniker range="<= tfs-2018"

![Agile work item queries](_img/IC667910.png)  

[Descriptions of predefined queries](#predefined-queries) are listed later in this article.  

::: moniker-end

[!INCLUDE [temp](../../_shared/quick-tips-shared-query.md)] 


## Monitor progress  

All processes&mdash;Agile, Scrum, and CMMI&mdash;support [building status and trend charts and dashboards](../../../report/dashboards/overview.md). In addition, several charts are automatically built based on the Agile tools you use. These charts display within the web portal. 
 
## Create light-weight charts  

To get started, you can define a shared flat query and create a chart based on your tracking interests. Chart types include status&mdash;pie, bar, column, stacked bar, and pivot&mdash;and trend&mdash;stacked area, line, and area&mdash;charts.   

[![Edit query](../../../report/dashboards/_img/gs-chart-query.png)](../../queries/using-queries.md)[![Create chart](../../../report/dashboards/_img/gs-chart-create.png)](../../../report/charts.md)[![Manage bugs](../../../report/dashboards/_img/gs-chart-add-dashboard.png)](../../../report/add-charts-to-dashboard.md)  



[!INCLUDE [temp](../../_shared/powerbi-reports-links.md)] 



::: moniker range="<= azure-devops-2019"
<a id="reports"></a>

## SQL Server reports

If your project collection and the project are configured with SQL Server Analysis Services and Reporting Services, you'll have access to a number of Agile reports. For these reports to be useful, [teams must perform certain activities,](../../../report/admin/review-team-activities-for-useful-reports.md) such as define build processes, link work items, and update status or remaining work.  

If you need to add reporting services or update reports to the latest versions, see [Add reports to a project](../../../report/admin/add-reports-to-a-team-project.md).  

::: moniker-end

::: moniker range="<= tfs-2017"
<a id="dashboards"></a>

## SharePoint portal dashboards

You can access Agile process dashboards displayed through SharePoint. These dashboards display project data, support investigation tasks, and help teams to perform common tasks quickly. These dashboards support the display of web access parts for listing work items and reports that were built in the Analysis Services cube.

To use [SharePoint dashboards](../../../report/sharepoint-dashboards/project-portal-dashboards.md) your project must have a [project portal configured and the project portal must point to a SharePoint site](../../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md).

::: moniker-end

## Related articles

[!INCLUDE [temp](../../_shared/create-team-project-links.md)]  


### Agile process versions  

As updates are made to the Agile process template, the version number is updated. The following table provides a mapping of the versioning applied as updates are made to the Azure DevOps on-premises process templates. For Azure Boards, the latest version is always used. Starting with TFS 2012, the `version` element was added to the process template to support versioning of the templates. This element specifies a major and minor version. Prior to this change, the version was specified within the process template name. 

> [!div class="mx-tdCol2BreakAll"]
> |On-premises version | Agile process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Server 2019 | Agile | 17 |
> | TFS 2018 | Agile | 16 |
> | TFS 2017 | Agile | 15 |
> | TFS 2015 | Agile | 7 |
> | TFS 2013 | MSF for Agile Software Development | 7 |
> | TFS 2012 | MSF for Agile Software Development 6.0  | 6 |
> | TFS 2008 | MSF for Agile Software Development - v4.*n* |   |


For a summary of updates made to process templates, see [Changes made to process templates](changes-to-process-templates.md).

<a id="predefined-queries" />

::: moniker range="<= tfs-2018"

### Agile process predefined queries 

#### Product backlog and feedback queries

Product owners can use the shared queries that are defined in the following table to plan and track user stories that compose the product backlog.

<table>
<thead>
<tr>
<th>Shared query</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Product Backlog</td>
<td>Provides a tree list of all user stories that are in a New, Active or Resolved state and sorts them by rank.</td>
</tr>
<tr>
<td>Product Planning</td>
<td>Provides a flat list of all user stories that are not in a Removed state, and have not been closed in the last 90 days.</td>
</tr>
<tr>
<td>Feedback</td>
<td>Lists all feedback responses that are in an Active state.</td>
</tr>
</tbody>
</table>

#### Iteration planning queries

The following table describes the shared queries that are listed under the **Current Iteration** folder. These queries find work items that are assigned to a specified iteration. As you plan additional iterations, you can modify these queries to specify a different iteration and then save them to additional folders that you create, such as **Iteration 2** or **Iteration 3**.

The project administrator for each project [defines area and iteration paths](../../../organizations/settings/set-area-paths.md) for that project so that the team can track progress by those designations.

<table>
<thead>
<tr>
<th><p>Shared query</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Active Bugs</p></td>
<td><p>Lists all active bugs and sorts them by rank, priority, and severity.</p></td>
</tr>
<tr>
<td><p>Active Tasks</p></td>
<td><p>Lists all active tasks and sorts them by rank, priority, and severity.</p></td>
</tr>
<tr>
<td><p>Bug Triage</p></td>
<td><p>Lists all active bugs that are not assigned to a team member.</p>
<p>The [Triage Workbook references](https://msdn.microsoft.com/library/dd380707.aspx) this query. </p></td>
</tr>
<tr>
<td><p>Completed Tasks</p></td>
<td><p>Lists all tasks that have been closed and sorts them by rank, priority, and severity.</p></td>
</tr>
<tr>
<td><p>Iteration Backlog</p></td>
<td><p>Lists all user stories and their linked tasks and sorts the stories by rank and priority.</p></td>
</tr>
<tr>
<td><p>Open Issues</p></td>
<td><p>Lists all issues under the specified iteration path that are not closed and any tasks that are linked to the issues and then sorts the issues by rank and priority.</p>
<p>The [Issues Workbook](https://msdn.microsoft.com/library/dd380707.aspx) references this query. </p></td>
</tr>
<tr>
<td><p>Open Test Cases</p></td>
<td><p>Lists all test cases that are not closed and sorts them by priority.</p></td>
</tr>
<tr>
<td><p>Open User Stories</p></td>
<td><p>Lists all active user stories and sorts them by their stack rank.</p></td>
</tr>
<tr>
<td><p>Resolved Bugs</p></td>
<td><p>Lists all resolved bugs and sorts them by rank, priority, and severity.</p></td>
</tr>
<tr>
<td><p>User Stories</p></td>
<td><p>Lists all user stories that are not closed and sorts them by priority and then ID,</p></td>
</tr>
<tr>
<td><p>User Stories without Test Cases</p></td>
<td><p>Lists all user stories that do not have a link to a test case. Stories are sorted by ID.</p></td>
</tr>
</tbody>
</table>

  
> [!TIP]    
> Queries listed under the **Current Iteration** folder do not automatically update when a new iteration becomes current. The current iteration is based on the dates that you [assign to your sprint schedules](../../sprints/define-sprints.md). You must manually update the iteration path of each query to have it point to the iteration path that corresponds to the current iteration. Or, you can edit the shared query to [use the **@CurrentIteration** macro](../../queries/query-by-date-or-current-iteration.md).  



#### Find tasks with summary values

The **Work Items With Summary Values** shared query, which is located in the **Troubleshooting** folder, lists all tasks that have child tasks and that contain non-zero values in the Remaining Work or Completed Work fields. This query is designed to find tasks that report work effort that is already accounted for in their child tasks. For the hours to be counted only once, summary tasks should not be assigned any hours. For more information, see [Address inaccuracies published for summary values](../../../report/sql-reports/address-inaccuracies-published-for-summary-values.md).

::: moniker-end

::: moniker range="<= tfs-2017"

### Workbooks

You can use the following Excel workbooks to review open issues and to rank and assign untriaged work items. Workbooks are only available when your project has been configured with a SharePoint portal. 
Each workbook references a shared query.  

-  The [Issues workbook](../../../report/sharepoint-dashboards/workbooks.md) uses the Open Issues shared query
-  The [Triage workbook](../../../report/sharepoint-dashboards/workbooks.md) uses the Untriaged Work Items shared query  

Because these queries support workbooks, if you change these queries, it will affect those workbooks that use them.

::: moniker-end