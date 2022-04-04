---
title: Use agile process template artifacts
titleSuffix: Azure Boards  
description: Learn how you can use agile process artifacts to plan and track work, monitor progress, and trends when connecting to Azure Boards and Azure DevOps.
ms.custom: work-items
ms.technology: devops-agile
ms.assetid: 28e9cb42-f049-45eb-a2d8-f7a3b93471b8
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Agile process work item types 

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Agile process supports the following work item types (WITs) to plan and track work, tests, feedback, and code review. With different WITs you can track different types of work&mdash;such as features, user stories, and tasks. These artifacts are created when you create a project using the Agile  process. They're based on Agile principles and values.  
 
![Agile process work item types](media/agile-process-work-tracking-wits.png)

Along with the WITs, teams have access to a set of work item queries to track information, analyze progress, and make decisions.  

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using" />

## Plan and track work with Agile
 
You build your project plan by creating a backlog of user stories that represent the work you want to develop and ship. You track bugs, tasks, and blocking issues using the bug, task, and issue WITs. To support portfolio management, teams create features and epics to view a roll up of user stories within or across teams. For details about using Agile WITs, see [Agile process work item types and workflow](agile-process-workflow.md).  

The essential flow for getting started is as shown. To get started using Scrum or Kanban tools, see [Get started with Agile tools to plan and track work](../../get-started/what-is-azure-boards.md).  

*Click one of the following images to go to the linked article.*

[![Define stories](../../backlogs/media/overview/gs-planning-define-stories.png)](../../backlogs/create-your-backlog.md)[![Organize backlog](../../backlogs/media/overview/gs-planning-organize-backlog.png)](../../backlogs/organize-backlog.md)[![Manage bugs](../../backlogs/media/overview/gs-planning-manage-bugs.png)](../../backlogs/manage-bugs.md)[![Manage issues](../../backlogs/media/overview/gs-planning-manage-issues.png)](../../backlogs/manage-issues-impediments.md)

> [!NOTE]  
> A work item is a database record that contains the definition, assignment, priority, and state of work. Work item types define the template of fields, workflow, and form for each type. Work items can be linked to each other to support tracking dependencies, roll up of work, and reports.  


<a id="shared-queries"></a> 

## List work items by using queries

You can manage your workload more effectively by frequently reviewing the status of user stories and tasks. You can use the shared work item queries to list work items for a current sprint or the product backlog.  

[!INCLUDE [temp](../../includes/shared-queries.md)] 

::: moniker range="tfs-2018"

![Agile work item queries](media/IC667910.png)  

[Descriptions of predefined queries](#predefined-queries) are listed later in this article.  

::: moniker-end

[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 


## Monitor progress  

All processes&mdash;Agile, Scrum, and CMMI&mdash;support [building status and trend charts and dashboards](../../../report/dashboards/overview.md). Also, several charts are automatically built based on the Agile tools you use. These charts display within the web portal. 
 
## Create light-weight charts  

To get started, you can define a shared flat query and create a chart based on your tracking interests. Chart types include status&mdash;pie, bar, column, stacked bar, and pivot&mdash;and trend&mdash;stacked area, line, and area&mdash;charts.   

[![Edit query](../../../report/dashboards/media/gs-chart-query.png)](../../queries/using-queries.md)[![Create chart](../../../report/dashboards/media/gs-chart-create.png)](../../../report/dashboards/charts.md)[![Add to dashboard.](../../../report/dashboards/media/gs-chart-add-dashboard.png)](../../../report/dashboards/add-charts-to-dashboard.md)  



[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 



::: moniker range="<= azure-devops-2020"
<a id="reports"></a>

## SQL Server reports

If your project collection and the project are configured with SQL Server Analysis Services and Reporting Services, you'll have access to many Agile reports. For these reports to be useful, [teams must complete certain activities,](../../../report/admin/review-team-activities-for-useful-reports.md) such as define build processes, link work items, and update status or remaining work.  

If you need to add reporting services or update reports to the latest versions, see [Add reports to a project](../../../report/admin/add-reports-to-a-team-project.md).  

::: moniker-end


## Related articles

[!INCLUDE [temp](../../includes/create-team-project-links.md)]  

### Agile process versions  

As updates are made to the Agile process template, the version number is updated. The following table provides a mapping of the versioning applied as updates are made to the Azure DevOps on-premises process templates. For Azure Boards, the latest version is always used. Starting with TFS 2012, the `version` element was added to the process template to support versioning of the templates. This element specifies a major and minor version. Prior to this change, the version was specified within the process template name. 

> [!div class="mx-tdCol2BreakAll"]
> |On-premises version | Agile process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Server 2020<br/>Azure DevOps Server 2019 | Agile | 17 |
> | TFS 2018 | Agile | 16 |
> | TFS 2017 | Agile | 15 |
> | TFS 2015 | Agile | 7 |
> | TFS 2013 | MSF for Agile Software Development | 7 |
> | TFS 2012 | MSF for Agile Software Development 6.0  | 6 |
> | TFS 2008 | MSF for Agile Software Development - v4.*n* |   |


For a summary of updates made to process templates, see [Changes made to process templates](changes-to-process-templates.md).

<a id="predefined-queries" />

::: moniker range="tfs-2018"

### Agile process predefined queries 

#### Product backlog and feedback queries

Product owners can use the shared queries that are defined in the following table to plan and track user stories that compose the product backlog.

:::row:::
   :::column span="1":::
   Shared query
   :::column-end:::
   :::column span="3":::
   Description
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Product Backlog
   :::column-end:::
   :::column span="3":::
   Provides a tree list of all user stories that are in a New, Active or Resolved state and sorts them by rank.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Product Planning
   :::column-end:::
   :::column span="3":::
   Provides a flat list of all user stories that are not in a Removed state, and have not been closed in the last 90 days.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Feedback
   :::column-end:::
   :::column span="3":::
   Lists all feedback responses that are in an Active state.
   :::column-end:::
:::row-end:::

#### Iteration planning queries

The following table describes the shared queries that are listed under the **Current Iteration** folder. These queries find work items that are assigned to a specified iteration. As you plan more iterations, you can modify these queries to specify a different iteration and then save them to other folders that you create, such as **Iteration 2** or **Iteration 3**.

The project administrator for each project [defines area and iteration paths](../../../organizations/settings/set-area-paths.md) for that project so that the team can track progress by those designations.

:::row:::
   :::column span="1":::
   **Shared query**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Active Bugs

   :::column-end:::
   :::column span="3":::
   Lists all active bugs and sorts them by rank, priority, and severity.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Active Tasks

   :::column-end:::
   :::column span="3":::
   Lists all active tasks and sorts them by rank, priority, and severity.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Bug Triage

   :::column-end:::
   :::column span="3":::
   Lists all active bugs that aren't assigned to a team member.

   The [Triage Workbook references](/previous-versions/azure/devops/report/sharepoint-dashboards/workbooks) this query. 

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Completed Tasks

   :::column-end:::
   :::column span="3":::
   Lists all tasks that have been closed and sorts them by rank, priority, and severity.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Iteration Backlog

   :::column-end:::
   :::column span="3":::
   Lists all user stories and their linked tasks and sorts the stories by rank and priority.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Open Issues

   :::column-end:::
   :::column span="3":::
   Lists all issues under the specified iteration path that aren't closed and any tasks that are linked to the issues and then sorts the issues by rank and priority.

   The [Issues Workbook](/previous-versions/azure/devops/report/sharepoint-dashboards/workbooks) references this query. 

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Open Test Cases

   :::column-end:::
   :::column span="3":::
   Lists all test cases that aren't closed and sorts them by priority.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Open User Stories

   :::column-end:::
   :::column span="3":::
   Lists all active user stories and sorts them by their stack rank.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Resolved Bugs

   :::column-end:::
   :::column span="3":::
   Lists all resolved bugs and sorts them by rank, priority, and severity.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   User Stories

   :::column-end:::
   :::column span="3":::
   Lists all user stories that aren't closed and sorts them by priority and then ID,

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   User Stories without Test Cases

   :::column-end:::
   :::column span="3":::
   Lists all user stories that don't have a link to a test case. Stories are sorted by ID.

   :::column-end:::
:::row-end:::

  
> [!TIP]
> Queries listed under the **Current Iteration** folder do not automatically update when a new iteration becomes current. The current iteration is based on the dates that you [assign to your sprint schedules](../../sprints/define-sprints.md). You must manually update the iteration path of each query to have it point to the iteration path that corresponds to the current iteration. Or, you can edit the shared query to [use the **@CurrentIteration** macro](../../queries/query-by-date-or-current-iteration.md).  



#### Find tasks with summary values

The **Work Items With Summary Values** shared query, which is located in the **Troubleshooting** folder, lists all tasks that have child tasks and that contain non-zero values in the Remaining Work or Completed Work fields. This query is designed to find tasks that report work effort that is already accounted for in their child tasks. For the hours to be counted only once, summary tasks shouldn't be assigned any hours. For more information, see [Address inaccuracies published for summary values](../../../report/sql-reports/address-inaccuracies-published-for-summary-values.md).

::: moniker-end
 