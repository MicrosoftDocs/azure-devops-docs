---
title: Scrum process template artifacts
titleSuffix: Azure Boards
ms.custom: work-items
description: Scrum process objects used to plan and track work, monitor progress, and trends when connecting to Azure Boards, Azure DevOps, & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: f4e77db3-e54c-472a-ba60-92ceb8331882
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 04/11/2019
---


# Scrum process   

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

The Scrum process supports the following work item types (WITs) to plan and track work, tests, feedback, and code review. With different WITs you can track different types of work&mdash;such as product backlog items, tasks, bugs, and more. These artifacts are created when you create a project using the Scrum process. They are based on [Scrum principles and values](https://www.scrum.org/). 

![Scrum process work item types, conceptual image](_img/scrum-process-work-tracking-wits.png)  

In addition to the WITs, teams have access to a set of work item queries to track information, analyze progress, and make decisions.  

[!INCLUDE [temp](../../_shared/process-customize.md)] 

<a id="start-using-scrum" />

## Plan and track work with Scrum  

You build your project plan by creating a backlog of work items that represent the features, requirements, user stories, or other work to perform. You track bugs, tasks, and blocking issues using the bug, task, and impediment WITs. To support portfolio management, teams create features and epics to view a roll up of their product backlog items within or across teams. For details about using Scrum WITs, see [Scrum process work item types and workflow](scrum-process-workflow.md).  

The essential flow for getting started is as shown. To get started using Scrum or Kanban tools, see [Get started with Agile tools to plan and track work](../../get-started/what-is-azure-boards.md).  

*Click one of the following images to go to the linked article.*

[![Define stories](../../backlogs/_img/overview/gs-planning-define-stories.png)](../../backlogs/create-your-backlog.md)[![Organize backlog](../../backlogs/_img/overview/gs-planning-organize-backlog.png)](../../backlogs/organize-backlog.md)[![Manage bugs](../../backlogs/_img/overview/gs-planning-manage-bugs.png)](../../backlogs/manage-bugs.md)[![Manage issues](../../backlogs/_img/overview/gs-planning-manage-issues.png)](../../backlogs/manage-issues-impediments.md)

> [!NOTE]  
> A work item is a database record that contains the definition, assignment, priority, and state of work. Work item types define the template of fields, workflow, and form for each type. Work items can be linked to each other to support tracking dependencies, roll up of work, and reports.  


[Scrum work item types and workflow](scrum-process-workflow.md) provides more details about using these WITs.  

<a id="shared-queries"></a> 

### List work items

Define work item queries to list work items for a current sprint or the product backlog.  

[!INCLUDE [temp](../../_shared/shared-queries.md)] 

::: moniker range="<= tfs-2018"

Or, use the shared queries that the Scrum process provides.

![Shared queries (Scrum process)](_img/IC665405.png)  

[Descriptions of predefined queries](#predefined-queries) are listed later in this article.   

> [!TIP]    
> Queries listed under the **Current Iteration** folder do not automatically update when a new iteration becomes current. The current iteration is based on the dates that you [assign to your sprint schedules](../../sprints/define-sprints.md). You must manually update the iteration path of each query to have it point to the iteration path that corresponds to the current iteration. Or, you can edit the shared query to [use the **@CurrentIteration** macro](../../queries/query-by-date-or-current-iteration.md).

::: moniker-end

[!INCLUDE [temp](../../_shared/quick-tips-shared-query.md)] 

## Monitor progress  

All processes&mdash;Agile, Scrum, and CMMI&mdash;support [building status and trend charts and dashboards](../../../report/dashboards/overview.md). In addition, several charts are automatically built based on the Agile tools you use. These charts display within the web portal. 

## Scrum process and light-weight charts  

To get started, you can open a shared query and create a chart based on your tracking interests. Chart types include status&mdash;pie, bar, column, stacked bar, and pivot&mdash;and trend&mdash;stacked area, line, and area&mdash;charts.   

[![Edit query](../../../report/dashboards/_img/gs-chart-query.png)](../../queries/using-queries.md)[![Create chart](../../../report/dashboards/_img/gs-chart-create.png)](../../../report/charts.md)[![Manage bugs](../../../report/dashboards/_img/gs-chart-add-dashboard.png)](../../../report/add-charts-to-dashboard.md)  


[!INCLUDE [temp](../../_shared/powerbi-reports-links.md)] 


<a id="reports"></a>
::: moniker range="<= azure-devops-2019"

## Scrum process and SQL Server reports

If your project collection and the project are configured with SQL Server Analysis Services and Reporting Services, you'll have access to a number of Scrum reports. For these reports to be useful, [teams must perform certain activities,](../../../report/admin/review-team-activities-for-useful-reports.md) such as define build processes, link work items, and update status or remaining work.  

If you need to add reporting services or update reports to the latest versions, see [Add reports to a project](../../../report/admin/add-reports-to-a-team-project.md).  

::: moniker-end



<a id="dashboards"></a>

::: moniker range="<= tfs-2017"

## SharePoint portal dashboards 

You can access the [Release](../../../report/sharepoint-dashboards/release-scrum.md) dashboard displayed through the SharePoint project portal. This dashboard displays project data, support investigation tasks, and help teams to perform common tasks quickly. 

To access this dashboard, your project must have a [project portal configured and the project portal must point to a SharePoint site](../../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md).

::: moniker-end

## Related articles 

[!INCLUDE [temp](../../_shared/create-team-project-links.md)]


### Scrum process versions  


As updates are made to the Scrum process template, the version number is updated. The following table provides a mapping of the versioning applied as updates are made to the Azure DevOps on-premises process templates. For Azure Boards, the latest version is always used. Starting with TFS 2012, the `version` element was added to the process template to support versioning of the templates. This element specifies a major and minor version. Prior to this change, the version was specified within the process template name. 


> [!div class="mx-tdCol2BreakAll"]
> |TFS version | Scrum process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Server 2019 | Scrum | 17 |
> | TFS 2018 | Scrum | 16 |
> | TFS 2017 | Scrum | 15 |
> | TFS 2015 | Scrum | 3 |
> | TFS 2013 | Microsoft Visual Studio Scrum | 7 |
> | TFS 2012 | Microsoft Visual Studio Scrum 2.0  | 2 | 
 

For a summary of updates made to process templates, see [Changes made to process templates](changes-to-process-templates.md).


<a id="predefined-queries" />


::: moniker range="<= tfs-2018"

### Scrum process predefined queries

Your product owner can plan and track product backlog items and bugs in the product backlog by using the **Product Backlog** query. You can find work items that are assigned to the current sprint by using the shared queries that are listed under the **Current Sprint** folder. These queries find work items that are assigned to a specified iteration or sprint. As you plan additional sprints, you can modify these queries to specify the latest sprint and save them to additional folders that you create, such as **Sprint 2** or **Sprint 3**.

The project administrator for each project [defines area paths](../../../organizations/settings/set-area-paths.md) and [iteration paths](../../../organizations/settings/set-iteration-paths-sprints.md) for that project so that the team can track progress by those designations.  

> [!div class="mx-tdCol2BreakAll"]
> |Shared queries|Description| 
> |---|---|  
> |Blocked Tasks | Lists all tasks in the current sprint that have been marked as Blocked.|
> |Open Impediments |Lists all open impediment work items in the current sprint.|
> |Sprint Backlog |Lists all product backlog items, bugs, and their linked tasks that your team has committed to complete in the current sprint.|
> |Test Cases |Lists all test cases in the current sprint and sorts them by priority.|
> |Unfinished Work |Lists all product backlog items, bugs, and their linked tasks that have not been marked as Done in the current sprint.|
> |Work in Progress |Lists all tasks in the current sprint that are marked as In Progress.| 
> |Feedback | Lists all feedback responses that are in an Active state. |
> |Product Backlog |Lists all product backlog items and bugs that are assigned to the root iteration. Product backlog items and bugs are sorted by backlog priority.|  


::: moniker-end