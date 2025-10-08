---
title: View SAFe® progress, roadmaps, and metrics in Azure Boards
titleSuffix: Azure Boards
description: Review SAFe® metrics, progress, roadmaps, and KPIs supported by Azure DevOps and Azure Boards. 
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---


# View SAFe® progress, roadmaps, and metrics

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

After teams configure backlogs and boards, you can start viewing and monitoring progress effectively.

Azure Boards provides in-context charts and dashboard widgets you use to track key SAFe® metrics and KPIs. The platform gives you access to the following tools:

- Roll-up columns on backlogs to aggregate and visualize work items across multiple backlogs.
- In-context reports that show details directly within work items.
- Managed query charts (pie, bar, stacked bar, trend, and pivot) to analyze data.
- Dashboard widgets that display pertinent metrics and information.
- Team and project dashboards you customize for specific audiences.
- Analytic Views for Power BI when you need advanced reporting.
- OData queries for Power BI to fetch data for rich visualizations.

For an overview of these tools, see [About dashboards, charts, reports, & widgets](../../report/dashboards/overview.md). Another useful backlog feature is Forecast, which teams use during iteration planning.

## View progress rollup

Use rollup columns in each team's backlog to view and monitor progress. The following example shows progress aggregated from child work items.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows rollup progress bars.](../backlogs/media/rollup/progress-by-work-items.png) 

Other rollup options include:

- Progress by specific work item types.
- Progress by story points (completed vs. planned).
- Count of work items completed in a timeframe.
- Sum of a numeric field to aggregate numerical data.

For details on configuring and displaying rollup progress or totals, see [Display Rollup Progress or Totals](../backlogs/display-rollup.md).

## View team velocity 

Each team can view velocity through the in-context velocity report. The report presents a bar chart of planned, completed, completed late, and incomplete work items for the last six (or more) iterations. The chart shows the average velocity for the displayed iterations.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows velocity story points.](media/safe/velocity-story-points.png)  

Use the average to help forecast how much work a team can take on.

## Use the Forecast tool 

Teams assign Story Points to User Stories and then use Forecast to estimate how much they can complete. For details, see [Forecast your product backlog](../sprints/forecast.md).

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the Forecast tool.](../sprints/media/forecast-s125.png)

## View the Cumulative Flow Diagram (CFD) 

Each backlog and board offer configurable CFD views so teams at every SAFe® level can monitor flow and identify bottlenecks.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows a CFD chart.](../../report/dashboards/media/cfd/analytics-cfd-azure-devops.png)

Use CFD charts from the backlog or board view, and add them to dashboards as needed. For more, see [View/configure a Cumulative Flow Diagram](../../report/dashboards/cumulative-flow.md).  

## View Lead Time and Cycle Time charts

Add Lead time and Cycle time widgets to a team dashboard to learn:

- Lead time: average days to complete deliverables from creation date.
- Cycle time: average days to complete deliverables from the work-start date.
- Number of outliers for deeper analysis.

Both widgets display as scatter-plot control charts with interactive elements. For guidance, see [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md). 

#### Example Lead Time widget

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows an example Lead Time widget](../../report/dashboards/media/lead-time-control-chart.png) 

#### Example Cycle Time widget

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows an example Cycle Time widget](../../report/dashboards/media/cycle-time-planning.png) 

<a id="roadmaps"></a>

## View and update roadmaps    

Use Delivery Plans, Feature Timeline, and Epic Roadmap tools to review SAFe® deliverables and roadmaps. Delivery Plans show teams and work item types you specify and allow interactive planning.

### Review feature team Delivery Plans  

Program teams review story and feature roadmaps for their Agile Release Teams. The following example shows the Fiber Suite teams' story deliverables.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows Plans view of Fiber Suite teams' deliverables](media/safe-metrics/plan-fiber-suite-stories.png) 

Expand a feature team to view details. Delivery Plans let you drag and drop work items to update sprint assignments, or open work items to update fields and add comments.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows Plans view with Fiber Suite App team deliverables expanded](media/safe-metrics/plan-fiber-suite-stories-expand-app-team.png) 

### Review the portfolio features deliverable 

Portfolio teams review Features under development by program teams. The following example shows Features mapped to Program Increment timeboxes.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows Feature Timeline view of portfolio feature deliverables](media/safe-metrics/plan-portfolio-fiber-suite.png) 

### Review feature timeline roadmaps 

Feature Timeline provides another roadmap view. The following example shows Epics in the Feature Timeline tool. Configure progress bars to reflect completed stories or effort.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing the Feature Timeline view of portfolio feature deliverables](media/safe-metrics/feature-timeline-fabrikam-team.png) 

<!--- 

## Feature and Epic progress reports  

Need to develop a report using Analytics view and Power BI. Want something to approximate the following: 

**Replace with an Azure DevOps report**

> [!div class="mx-imgBorder"]  
> ![SAFe® Epic Progress Report](https://www.scaledagileframework.com/wp-content/uploads/2018/04/Applied-Enterprise-Workflow_F06-WP.png)

--> 

## Next step

> [!div class="nextstepaction"]
> [Sign up for Azure Boards for free](../get-started/sign-up-invite-teammates.md) 

## Related content

- [Review team Delivery Plans](review-team-plans.md)
