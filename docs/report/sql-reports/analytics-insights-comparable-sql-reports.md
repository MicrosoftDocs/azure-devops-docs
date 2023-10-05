---
title: Get Analytics insights comparable to those provided by SQL Reporting Services reports 
titleSuffix: Azure DevOps 
description: Learn how to get insights using Analytics comparable to those provided by the legacy SQL Reporting Services reports.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019 <= azure-devops-2020'
ms.date: 05/26/2022
---



# Get Analytics insights comparable to those provided by SQL Reporting Services reports 


[!INCLUDE [version-gt-eq-2019-lt-azure-devops](../../includes/version-gt-eq-2019-lt-azure-devops.md)]
  

You can get similar insights into your Azure DevOps processes made available through the legacy SQL Server Reporting Services reports using the Analytics service. This article provides guidance for migrating from each [SQL Server Reporting Services reports](/previous-versions/azure/devops/report/sql-reports/reporting-services-reports) to using the Analytics service. 

 ## Prerequisites
 
To access data available from the Analytics service, you must meet the following criteria:  
 
- You must be a member of the projects from which you want to view data. If you haven't been added as a project member, [get added now](../../organizations/security/add-users-team-project.md). 
- Have the **View Analytics** permission set to **Allow**. See [Grant permissions  to access Analytics](../powerbi/analytics-security.md). Anyone with this permission, except those granted **Stakeholder** access, can view Analytics data.
- Have [enabled or installed Analytics](../dashboards/analytics-extension.md). You must be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to enable the service. 
- The service for which data is collected must be enabled. For example, **Boards** must be enabled to view work tracking data. To re-enable it, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md). 
- To use Power BI, have installed a recent version of Power BI Desktop. You can download this client application from the official [Power BI Desktop download page](/power-bi/desktop-what-is-desktop).   
 
## Work tracking and project management reports 

The following table summarizes Analytics reports, widgets, and other tools that you can use to gain comparable insights to the work tracking reports defined using the SQL Server Reporting services. 


:::row:::
   :::column span="1":::
      **SQL Reporting Services reports**  
   :::column-end:::
   :::column span="1":::
      **Migration guidance** 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Backlog Overview (Scrum)](/previous-versions/azure/devops/report/sql-reports/backlog-overview-scrum)<sup>1</sup>   
      [Requirements Overview (CMMI)](/previous-versions/azure/devops/report/sql-reports/requirements-overview-report-cmmi)<sup>1</sup>   
      [Stories Overview (Agile)](/previous-versions/azure/devops/report/sql-reports/stories-overview-report-agile)<sup>1</sup>  
      Display an overall progress (work breakdown) and test results for selected backlog items.  
   :::column-end:::
   :::column span="1":::
      - To view rollup progress, [add rollup columns to a backlog to view progress bars and remaining work counts](../../boards/backlogs/display-rollup.md). 
      - Use Power BI to generate a [Requirements tracking report](../powerbi/sample-stories-overview.md). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Release Burndown (Scrum)](/previous-versions/azure/devops/report/sql-reports/release-burndown)   
      Displays a column chart showing how much work remained at the start of each sprint in a release. 
   :::column-end:::
   :::column span="1":::
      - Configure a [Burndown widget](../dashboards/configure-burndown-burnup-widgets.md).  
      - Create a Power BI [Release burndown report](../powerbi/sample-boards-releaseburndown.md).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Burndown and Burn Rate (Agile and CMMI)](/previous-versions/azure/devops/report/sql-reports/burndown-and-burn-rate-report)  
      [Sprint Burndown (Scrum)](/previous-versions/azure/devops/report/sql-reports/sprint-burndown-scrum)  
      Displays an area trend chart for a team sprint showing the completed and remaining hours.  
   :::column-end:::
   :::column span="1":::
      - [Built-in sprint report](../dashboards/configure-sprint-burndown.md#the-in-context-burndown-trend-report)
      - [Power BI Sprint burndown sample report](../powerbi/sample-boards-sprintburndown.md)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Remaining Work (Agile and CMMI)](/previous-versions/azure/devops/report/sql-reports/remaining-work-report)  
      Displays an area chart showing remaining and completed hours of work for a team sprint.  
   :::column-end:::
   :::column span="1":::
      - Configure the [Sprint burndown widget](../dashboards/team-velocity.md#add-the-velocity-widget-to-your-dashboard) on a team dashboard, choosing the **Task backlog** and **Remaining Work**.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Status on All Iterations (Agile and CMMI)](/previous-versions/azure/devops/report/sql-reports/status-on-all-iterations-report)   
      Displays a rollup by sprint of stories that were closed, completed hours, and bugs active, closed, or resolved.  
   :::column-end:::
   :::column span="1":::
      - [Configure a query](../../boards/queries/using-queries.md) that spans several sprints and define a chart for the information of interest. 
   :::column-end:::
:::row-end::: 
---
:::row:::
   :::column span="1":::  
      [Requirements Progress (CMMI)](/previous-versions/azure/devops/report/sql-reports/requirements-overview-report-cmmi)<sup>1</sup>   
      [Stories Progress (Agile)](/previous-versions/azure/devops/report/sql-reports/stories-overview-report-agile)<sup>1</sup>   
      Displays overall progress bars for requirements or user stories, along with remaining hours.   
   :::column-end:::
   :::column span="1":::
      - To view rollup progress, [add rollup columns to a backlog to view progress bars and remaining work counts](../../boards/backlogs/display-rollup.md).  
      - Use Power BI to generate a [Requirements tracking report](../powerbi/sample-stories-overview.md).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Unplanned Work (Agile and CMMI)](/previous-versions/azure/devops/report/sql-reports/unplanned-work)  
      Displays an area trend chart for planned work and work added after the start of the sprint.  
   :::column-end:::
   :::column span="1":::
      - Configure the [Sprint burndown widget](../dashboards/team-velocity.md#add-the-velocity-widget-to-your-dashboard) on a team dashboard, the widget will show total scope increase. 
      - Configure a query at the start of a sprint to track work moved in or moved out of a sprint. To learn how, see [Scrum overview, List work items added after the start of the sprint](../../boards/sprints/scrum-overview.md#list-work-items-added-after-the-start-of-the-sprint) and [List work items moved out of the sprint](../../boards/sprints/scrum-overview.md#ist-work-items-moved-out-of-the-sprint). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Velocity (scrum)](/previous-versions/azure/devops/report/sql-reports/velocity)   
      Displays a column chart showing the level of Effort completed by the team for each sprint within the selected time period.  
   :::column-end:::
   :::column span="1":::
      - Configure the [Velocity widget](../dashboards/team-velocity.md#add-the-velocity-widget-to-your-dashboard) on a team dashboard.
      - View the [Built-in velocity report](../dashboards/team-velocity.md#view-the-velocity-in-context-report). 
   :::column-end:::
:::row-end:::
---

**Notes:**
1. The overview and progress reports depend on linking tasks, test cases, and bugs to backlog items. Link these items using the parent-child link for tasks and bugs and the Tested By link for test cases.

## Bug status and trends

The following table summarizes Analytics reports, widgets, and query charts that you can use to gain comparable insights to the bug reports defined using the SQL Server Reporting services. 


:::row:::
   :::column span="1":::
      **SQL Reporting Services report**  
   :::column-end:::
   :::column span="1":::
      **Migration guidance** 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Bug Status](/previous-versions/azure/devops/report/sql-reports/bug-status-report)  
      Presents a stacked area chart of bug status, pie chart for bug priority, and assignment of bugs.   
   :::column-end:::
   :::column span="1":::
      - Define a team dashboard and use three [Chart work items](../dashboards/charts.md#add-chart-widget) widgets to recreate similar information.  
      - Use Power BI to generate a [Bug trends report](../powerbi/sample-boards-bugtrend.md) and define three different charts based on the data.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Bug Trends](/previous-versions/azure/devops/report/sql-reports/bug-trends-report)    
      Displays a calculated rolling average of the number of bugs that a team has opened, resolved, and closed. 
   :::column-end:::
   :::column span="1":::
      (INVESTIGATING) The Analytics service doesn't store a calculated rolling average but it's possible to calculate one using Power BI.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Reactivations](/previous-versions/azure/devops/report/sql-reports/reactivations-report)  
      Displays a stacked area chart of resolved and reactivated bugs over time to gain insight into effectiveness of team on closing bugs.  
   :::column-end:::
   :::column span="1":::
      Create a work item query and area chart adapting the following WIQL syntax as needed.  
      > [!div class="tabbedCodeSnippets"]
      ```XML
      SELECT
          [System.Id],
          [System.CreatedDate],
          [System.State],
          [System.AssignedTo], 
          [System.Title],
          [System.IterationPath]
        FROM workitems
        WHERE
          [System.TeamProject] = @project
          AND [System.WorkItemType] = 'Bug'
          AND EVER [System.State] = 'Closed'
          AND NOT [System.State] IN ('Closed', 'Cut')
          AND [System.ChangedDate] >= @today - 60 
   :::column-end:::
:::row-end:::
---
 

## Pipelines, build, and release reports

The following table summarizes Analytics reports and widgets that you can use to gain comparable insights to the build reports defined using the SQL Server Reporting services. 

> [!NOTE]   
> Build operations have significantly changed with the release of TFS 2018 and later versions. For example, manually assigning the build quality is no longer supported. YAML defined build pipelines support additional of tasks to automate testing, code coverage, and other operations. TO learn more, see [Pipelines documentation](../../pipelines/index.yml). 

:::row:::
   :::column span="1":::
      **SQL Reporting Services report**  
   :::column-end:::
   :::column span="1":::
      **Migration guidance** 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Build Quality Indicators (Agile and CMMI)](/previous-versions/azure/devops/report/sql-reports/build-quality-indicators-report) 
      Presents code coverage, code churn and active bugs associated with select build definitions.   
   :::column-end:::
   :::column span="1":::
      - See [Build history widget](../dashboards/widget-catalog.md#azure-pipelines-widgets) to view the success/failure trend of a selected build pipeline. 
      - See [Review code coverage results](../../pipelines/test/review-code-coverage-results.md) to determine the proportion of your project's code that is actually being tested by tests such as unit tests.
      - See the built-in [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md) for key metrics of pass rate of the pipeline over a specified period, failure trends, and top failing tasks and their failed runs. 
      - Use Power BI to generate a [Pipeline stage wise failures sample report](../powerbi/sample-pipelines-stagewise-failures.md)to view a pipeline's daily stage failures. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Build Success Over Time](/previous-versions/azure/devops/report/sql-reports/build-success-over-time-report)   
      Presents code coverage, code churn and active bugs associated with select build definitions.   
   :::column-end:::
   :::column span="1":::
      - See [Build history widget](../dashboards/widget-catalog.md#azure-pipelines-widgets) to view the success/failure trend of a selected build pipeline. 
      - See the built-in [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md) for key metrics of pass rate of the pipeline over a specified period, failure trends, and top failing tasks and their failed runs. 
      - Use Power BI to generate a [Pipeline stage wise failures sample report](../powerbi/sample-pipelines-stagewise-failures.md)to view a pipeline's daily stage failures. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Build Summary](/previous-versions/azure/devops/report/sql-reports/build-summary-report)    
      Presents code coverage, code churn and active bugs associated with select build definitions.   
   :::column-end:::
   :::column span="1":::
      - See [Build history widget](../dashboards/widget-catalog.md#azure-pipelines-widgets) to view the success/failure trend of a selected build pipeline. 
      - See the built-in [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md) for key metrics of pass rate of the pipeline over a specified period, failure trends, and top failing tasks and their failed runs. 
      - Use Power BI to generate a [Pipeline stage wise failures sample report](../powerbi/sample-pipelines-stagewise-failures.md)to view a pipeline's daily stage failures. 
   :::column-end:::
:::row-end:::
---
 

## Test Plans and pipeline and test reports 

The following table summarizes Analytics reports, widgets, and other tools that you can use to gain comparable insights to the test plan and progress reports defined using the SQL Server Reporting services. 
 

:::row:::
   :::column span="1":::
      **SQL Reporting Services report** 
   :::column-end:::
   :::column span="1":::
      **Migration guidance** 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Test Case Readiness](/previous-versions/azure/devops/report/sql-reports/test-case-readiness-report)  
      Displays an area trend chart that shows the number of test cases Design and Ready state  
   :::column-end:::
   :::column span="1":::
      - See [Chart for test plans widget](../../test/track-test-status.md) to create a similar chart using the Test Plans chart tool. Optionally add to a dashboard. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Test Plan Progress](/previous-versions/azure/devops/report/sql-reports/test-plan-progress-report)  
      Displays an area trend chart that shows the number of test points run and their status.  
   :::column-end:::
   :::column span="1":::
      - To track a team's progress with respect to planned testing of a product or service, see the built-in [Progress report](../../test/progress-report.md).  
      - Use Power BI to generate Test Plans reports:   
             - [Requirements tracking sample report](../powerbi/sample-stories-overview.md)  
             - [Requirements tracking rollup sample report](../powerbi/sample-stories-overview-rollup.md)  
             - [Manual test suites aggregated view sample report](../powerbi//sample-test-plans-aggregate-data-level.md)  
             - [Tester by outcome matrix sample report](../powerbi/sample-test-plans-tester-by-outcome.md)  
             - [Configuration by outcome matrix sample report](../powerbi/sample-test-plans-configuration-by-outcome.md)  
   :::column-end:::
:::row-end::: 
---


## Next steps
> [!div class="nextstepaction"]
> [Entities and properties reference for Azure Boards](../analytics/entity-reference-boards.md)


## Related articles 

- [Overview of sample reports using OData queries](../powerbi/sample-odata-overview.md)
- [Extend Analytics with OData (Preview) quick reference](../extend-analytics/quick-ref.md)
- [Use quick measures for common calculations](/power-bi/transform-model/desktop-quick-measures)

 