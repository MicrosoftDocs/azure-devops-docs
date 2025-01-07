---
title: View SAFe® progress, roadmaps, and metrics in Azure Boards
titleSuffix: Azure Boards
description: Review SAFe® metrics, progress, roadmaps, and KPIs supported by Azure DevOps and Azure Boards. 
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 10/20/2021
---


# View SAFe® progress, roadmaps, and metrics

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With your teams' backlogs and boards properly configured and operational, you're now ready to begin viewing and monitoring progress effectively.

Azure Boards offers various in-context charts and dashboard widgets that enable you to track and report on key SAFe® metrics. Specifically, Azure Boards provides access to the following tools to help teams derive SAFe® metrics and monitor and report progress:

- **Roll-up columns on backlogs:** Aggregate and visualize work items across multiple backlogs.
- **In-context reports:** Access detailed reports directly within your work items.
- **Managed query charts:** Utilize various chart types such as pie, bar, stacked bar, trend, and pivot to analyze data.
- **Dashboard widgets:** Customize your dashboards with widgets that display pertinent metrics and information.
- **Team and project dashboards:** Create comprehensive dashboards tailored to specific teams and projects.
- **Analytic views for Power BI reports:** Use Analytic Views to integrate Azure Boards data with Power BI for advanced reporting.
- **OData queries for Power BI reports:** Use OData queries to fetch data for Power BI, enabling rich data visualization and analysis.

For an overview of these tools, see [About dashboards, charts, reports, & widgets](../../report/dashboards/overview.md). Another essential backlog tool is **Forecast**, which teams can utilize during their iteration planning sessions.

## View progress rollup

With your teams' backlogs and boards properly configured and operational, you can now effectively view and monitor progress through rollup columns in each team's backlog. The following example illustrates progress based on the completion of child work items.

> [!div class="mx-imgBorder"]  
> ![Screenshot shows rollup progress bars.](../backlogs/media/rollup/progress-by-work-items.png) 

In addition to tracking completion of child work items, other rollup options include:

- **Progress by specific work item types:** Monitor progress based on different categories of work items.
- **Progress by story points:** Track the total story points completed versus planned.
- **Count of work items:** Keep a tally of work items completed within a specific timeframe.
- **Sum of a numeric field:** Aggregate numerical data related to work items for comprehensive analysis.

For more detailed information on configuring and displaying rollup progress or totals, refer to [Display Rollup Progress or Totals](../backlogs/display-rollup.md).


## View team velocity 

Each team has access to their velocity through the in-context velocity report. These reports show a bar chart count of planned, completed, completed late, and incomplete work items for the last six or more iterations. As shown in the following example, the chart also provides the average velocity calculated for the number of iterations shown. 

> [!div class="mx-imgBorder"]  
> ![Screenshot shows velocity story points.](media/safe/velocity-story-points.png)  

This average can be used to forecast work by plugging it into the forecast tool. 

## Use the Forecast tool 

By assigning Story Points to each User Story, a team can determine how much work they can complete using the Forecast tool. For details on its usage, see [Forecast your product backlog](../sprints/forecast.md).

> [!div class="mx-imgBorder"]  
> ![Screenshot shows Forecast tool.](../sprints/media/forecast-s125.png)

## View the Cumulative Flow Diagram (CFD) 

Each Azure Boards backlog and board provide configurable CFD views. So each team at every level of SAFe® implementation can monitor progress using these built-in charts. 

The following image shows an example CFD chart for User Stories with all columns displayed. 

> [!div class="mx-imgBorder"]  
> ![Screenshot shows CFD chart.](../../report/dashboards/media/cfd/analytics-cfd-azure-devops.png)

Teams can use their CFD to identify bottlenecks and monitor the batch size of work in their various states. 

In-context CFD charts are quickly accessible from each backlog and board view. Also, CFD charts can be added to team and project dashboards. For more information, see [View/configure a Cumulative Flow Diagram](../../report/dashboards/cumulative-flow.md).  


## View Lead Time and Cycle Time charts

Other metrics that teams use are derived from the Lead time and cycle time charts. These charts can be added to a team dashboard and monitored to learn the following information: 

- **Lead time**: Days on average to complete deliverables from date created
- **Cycle time**: Days on average to complete deliverables from date work started
- Number of outliers 
 
Both Lead Time and Cycle Time widgets display as scatter-plot control charts. They display summary information and provide several interactive elements. For more information, see [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md). 

#### Example Lead Time widget

> [!div class="mx-imgBorder"]  
> ![Example Lead Time Widget](../../report/dashboards/media/lead-time-control-chart.png) 

#### Example Cycle Time widget

> [!div class="mx-imgBorder"]  
> ![Example Cycle TIme Widget](../../report/dashboards/media/cycle-time-planning.png) 

<a id="roadmaps"></a>

## View and update roadmaps    

You can review roadmaps of SAFe® deliverables using the Delivery Plans, Feature Time, and Epic Roadmap tools. Delivery Plans are fully configurable to show the teams and work item types of interest.  

### Review feature team Delivery Plans  

Program teams can review roadmaps of the deliverables of their Agile Release Teams. As an example, the following image shows a snapshot of the Fiber Suite teams story deliverables. 

> [!div class="mx-imgBorder"]  
> ![Plans, Fiber Suite teams deliverables](media/safe-metrics/plan-fiber-suite-stories.png) 

You can expand each feature team to see details. Story deliverables are assigned to the PI 1 sprints. Delivery Plans are fully interactive, allowing you to drag and drop work items to update their sprint assignments, or open work items to update fields, add comments, and other information. 

> [!div class="mx-imgBorder"]  
> ![Screenshot shows Plans, Fiber Suite App team deliverables.](media/safe-metrics/plan-fiber-suite-stories-expand-app-team.png) 

### Review the portfolio features deliverable 

Portfolio teams can review the Features under development by their program teams. For example, Features under development by the Fiber Suite team are shown in the following delivery plan view. The Features under development show up under the Program Increment timeboxes.  
 
> [!div class="mx-imgBorder"]  
> ![Screenshot shows Plans, Portfolio feature deliverables.](media/safe-metrics/plan-portfolio-fiber-suite.png) 

### Review feature timeline roadmaps 

The feature timeline tool provides another view into progress of deliverables. Here we show the Fabrikam Team's Epics as shown in the Feature Timeline tool. Progress bars are configurable based on completed stories or effort.  

> [!div class="mx-imgBorder"]  
> ![Screenshot shows Feature Timeline, Portfolio feature deliverables.](media/safe-metrics/feature-timeline-fabrikam-team.png) 

<!---

## Feature and Epic progress reports  

Need to develop a report using Analytics view and Power BI. Want something to approximate the following: 

**Replace with an Azure DevOps report**

> [!div class="mx-imgBorder"]  
> ![SAFe® Epic Progress Report](https://www.scaledagileframework.com/wp-content/uploads/2018/04/Applied-Enterprise-Workflow_F06-WP.png)

--> 

## Next steps

> [!div class="nextstepaction"]
> [Sign up for Azure Boards for free](../get-started/sign-up-invite-teammates.md) 


## Related articles

- [Review team Delivery Plans](review-team-plans.md) 
