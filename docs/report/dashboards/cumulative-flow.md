---
title: View and Configure the Cumulative Flow Diagram (CFD) Reports
titleSuffix: Azure DevOps 
description: Find out how to configure and view cumulative flow diagrams (CFDs) so you can improve your Kanban processes by monitoring the flow of work through your system.
ms.custom: dashboards 
ms.subservice: azure-devops-analytics
ms.assetid: 9A16EDA7-6249-49E1-84A3-FE7550028E9F  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops' 
ms.date: 05/08/2025
# customer intent: As a team member, I want to find out how to use cumulative flow diagrams (CFDs) so that I can monitor the lead time, work in progress, and workflow of my system.
---

# Tutorial: View and configure a cumulative flow diagram

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Cumulative flow diagrams (CFDs) provide a way for you to monitor the flow of work through a system. CFDs track the count of work items as they progressively move through various workflow states. These diagrams can show the flow of epics, features, user stories, issues, product backlog items, or requirements, depending on the process that you select for your project:

- [Agile](../../boards/work-items/guidance/agile-process.md)
- [Basic](../../boards/get-started/plan-track-work.md)
- [Scrum](../../boards/work-items/guidance/scrum-process.md)
- [Capability Maturity Model Integration (CMMI)](../../boards/work-items/guidance/cmmi-process.md)

Two types of CFDs are available: the in-context report you can view from a team backlog or board and the CFD widget you can add to a dashboard. 

In this tutorial, you: 

> [!div class="checklist"]
> * View and configure the CFD in-context report (Analytics)
> * Configure the Cumulative Flow Diagram widget (Analytics)

## Prerequisites

[!INCLUDE [Analytics widgets prerequisites](../includes/analytics-widgets-prerequisites.md)]

## CFD usage

The CFD shows the count of items in each board column for a selected time period. From this chart, you can gain an idea of the amount of work in progress and your lead time. Work in progress tracks unfinished requirements. Lead time indicates the amount of time it takes to complete a requirement after work starts.

:::image type="content" source="media/cfd/analytics-cfd-intro.png" alt-text="Screenshot of an in-context CFD that covers 30 days. Stacked bands show item counts for various states, such as completed and in progress.":::

> [!NOTE]  
> The in-context report always uses the blue-green color theme. However, the [Analytics-based Cumulative Flow Diagram widget](#add-the-cumulative-flow-diagram-widget-to-your-dashboard) supports various color themes. 

For the CFD to provide useful information, you need to update the status of work items to reflect progress as it occurs. You can quickly make these updates through the [board you use to track and manage work](../../boards/boards/kanban-quickstart.md). 

For more information about CFD usage, see [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md).

## Open your backlog from the web portal

1. Go to your organization, select your project (1), and then select **Boards** > **Backlogs** (2). In the team selector, select your team (3).

   :::image type="content" source="/azure/devops/boards/sprints/media/assign-items-sprint/open-backlogs-backlog-s155-co.png" alt-text="Screenshot of a backlog. Three items are highlighted: the project, labeled 1; Backlogs, labeled 2; and the team, labeled 3.":::

   To select a different backlog, open the selector, and then take one of the following steps:

   - Select a different team.
   - Select **View backlogs directory**.
   - Enter a keyword in the search box to filter the list of team backlogs for the project.

   :::image type="content" source="/azure/devops/boards/sprints/media/assign-items-sprint/backlog-team-selector-s155.png" alt-text="Screenshot of the team selector. A few teams are listed, and an option for viewing the backlogs directory is also available.":::

1. To view the in-context reports for the product backlog, select a backlog level that's appropriate for your process:
   - For Agile, select **Stories**.
   - For Basic, select **Issues**.
   - For Scrum, select **Backlog items**.
   - For CMMI, select **Requirements**.

   :::image type="content" source="/azure/devops/boards/sprints/media/assign-items-sprint/select-product-backlog-agile-s155.png" alt-text="Screenshot of a backlog. The selector for the product backlog level is highlighted, and Stories is selected." lightbox="/azure/devops/boards/sprints/media/assign-items-sprint/select-product-backlog-agile-s155.png":::

<a id="configure-built-in-cfd"></a>

## View the CFD in-context report   

CFD reports are available for product and portfolio backlogs. Each report offers interactive controls to provide each user with the view of interest to them.

1. To open the CFD for your product or portfolio backlog, select **Analytics**.

   :::image type="content" source="media/cfd/analytics-summary-cfd-velocity.png" alt-text="Screenshot of the Analytics tab of a backlog, with Analytics, Boards, and Backlogs highlighted and an average work in progress value of 187.":::

   The average work in progress value excludes completed work items.

1. To select a portfolio backlog, select it from the backlog selector.

   :::image type="content" source="media/cfd/analytics-change-backlog-level.png" alt-text="Screenshot of the Analytics tab of a backlog. In the backlog selector, Features is highlighted."::: 

1. To view the CFD, select **View full report**.  

1. Use the interactive controls to select the time frame, swimlanes, and workflow states, or board columns. You can select a rolling period of anywhere between 14 and 180 days.

   Hover over a point in time to show how many work items are in a particular state. For example, on July 3, 101 items were in a Research state.

   By default, the average work in progress value is calculated by taking the average of the daily work in progress counts in the specified rolling period.

   :::image type="content" source="media/cfd/analytics-cfd-azure-devops.png" alt-text="Screenshot of an in-context CFD that covers 60 days. Stacked bands show item counts for various states, such as completed and in progress.":::

   The selections you make are only set for you. They persist across sessions until you change them. 

1. To add the report to a dashboard, select the :::image type="icon" source="media/icons/actions-icon.png" border="false"::: **More actions** icon, and then select **Copy to Dashboard**.

   :::image type="content" source="media/add-charts/add-analytics-chart-abbreviated.png" alt-text="Screenshot of the corner of an in-context CFD. In the More actions menu, Copy to Dashboard is highlighted.":::
	
   Select the dashboard, and then select **OK**.  

1. To return to the Analytics summary, select the :::image type="icon" source="../../media/icons/back-arrow.png" border="false"::: back arrow.

## Add the Cumulative Flow Diagram widget to your dashboard   

1. Ensure your team's board is configured with defined [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md) that support your workflow processes.

1. If you want fixed-scope CFDs, make sure [sprint iterations are defined](../../boards/sprints/define-sprints.md) for sprints of interest.

1. To add a CFD to your team dashboard, follow the steps in [Add widgets to a dashboard](add-widget-to-dashboard.md), and use the Cumulative Flow Diagram widget.

   :::image type="content" source="media/cfd-choose-widget.png" alt-text="Screenshot of the Cumulative Flow Diagram widget in the widget catalog, with a small, abstract image of a CFD and a widget description.":::

<a id="configure-widget"></a>

## Configure the CFD widget  

1. On the Cumulative Flow Diagram widget, select the :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More actions** icon, and then select **Configure**.

1. In the **Configuration** dialog, modify the title, and then select the values you want to monitor for the following fields:
   - **Team**
   - **Backlog**
   - **Swimlane**
   - **Column**

   :::image type="content" source="media/cfd-configure.png" alt-text="Screenshot of the Configuration dialog, with fields for the title, team, backlog, swimlane, time period, and color, among other settings.":::

1. Configure the time period settings:
   - For a continuous-flow CFD, select **Rolling period (days)**, and then specify the number of days you want to view on the chart.
   - For a fixed-scope CFD, select **Start date**, and then specify a start date. Select this view if your team employs a Scrumban process or follows a standard sprint process.  

   The main difference between these two types of CFDs is that the fixed-scope CFD provides information (in most cases) of scope change.   

1. Select a color. You can distinguish CFDs for different teams by using a different color for each team.

1. Select **Save**. The following CFD shows 30 days of data.
   
   :::image type="content" source="media/cfd-example-rolling-30-days.png" alt-text="Screenshot of a CFD widget that covers 30 days. Stacked bands show item counts for various states, such as completed and in progress.":::

## Related content

- [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md)
- [Widget catalog](widget-catalog.md)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=AzureDevOps&category=All%20categories&sortBy=Relevance)
