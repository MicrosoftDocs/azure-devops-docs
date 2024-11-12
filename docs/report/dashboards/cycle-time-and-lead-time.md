---
title: Cycle Time and Lead Time control charts
titleSuffix: Azure DevOps Services
description: Learn how to configure and use the cycle time and lead time control charts/widgets to improve your team's ability to plan and improve processes.
ms.custom: dashboards 
ms.subservice: azure-devops-analytics
ms.assetid: C444622C-A2CA-4FCF-9E68-90D8D4896E6B  
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019' 
ms.date: 10/21/2024
#customer intent: As a team member, I want to create Lead Time or Cycle Time widgets to show team progress on the dashboard.
---

# Lead Time and Cycle Time widgets

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The Lead Time and Cycle Time widgets indicate how long it takes for work to flow through your development pipeline. Lead time measures the total time elapsed from the creation of work items to their completion. Cycle time measures the time it takes for your team to complete work items once they begin actively working on them.

The following diagram illustrates how lead time differs from cycle time. Lead time is calculated from *Work Item Creation* to entering a *Completed* state. Cycle time is calculated from first entering an *In Progress or Resolved* state category to entering a *Completed* state category. For more information, see [About workflow states in backlogs and boards](../../boards/work-items/workflow-and-state-categories.md).

:::image type="content" source="media/cycle-lead-time-concept-intro.png" alt-text="Conceptual image of how cycle time and lead time are measured.":::

These measures help teams plan, spot variations in efficiency, and identify potential process issues. The lower the lead and cycle times, the faster the throughput your team has. We recommend that your team check the lead time and cycle time charts before or during each retrospective. Use lead time to help estimate delivery times and track service level agreements (SLAs). Use cycle time to identify potential process issues, spot variations in trends, and help with planning.

For more information, see [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md).

## Prerequisites

[!INCLUDE [analytics-widgets-prerequisites](../includes/analytics-widgets-prerequisites.md)]

## Add the widget to your dashboard

1. Configure your team's board, if you haven't already.

   - Define the [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md) that support your workflow processes.  

1. [Add the widget to your dashboard](./add-widget-to-dashboard.md). There are two widgets: [Cycle Time](widget-catalog.md#cycle-time-widget) and [Lead Time](widget-catalog.md#lead-time-widget). Select the one you want to display and configure. For more information, see Use 

<a id="configure-widget"></a>

## Configure the Cycle Time and Lead Time widgets

The Configuration dialog is the same for the Cycle Time and Lead Time widgets. Configure these widgets for a team. For more information, see [Create or add a team](../../organizations/settings/add-teams.md).  

::: moniker range=">= azure-devops-2020"

1. Select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: context menu icon and select **Configure** to open the configuration dialog.
1. Modify the title, and then select the values you want to monitor:

   - Team
   - Work items
   - Swimlane
   - Field criteria
   - Time period  

   :::image type="content" source="media/lead-cycle/cycle-lead-time-configure-dialog-s156.png" alt-text="Screenshot of Configure dialog, Lead Time widget, latest version.":::

   To select a **Swimlane**, you must select **Backlog**.

   > [!NOTE]
   > You can only select work item types that have been added to a backlog. To add work item types to a backlog, see [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md). For On-premises XML process, see [Process configuration XML element reference](../../reference/xml/process-configuration-xml-element.md).

1. To further filter the work items used to calculate the lead or cycle time, specify the **Field Criteria**. For example, all the work items whose Release field is set to Milestone 1.

   :::image type="content" source="media/lead-cycle/field-criteria-release.png" alt-text="Screenshot of Configure dialog, Lead Time widget, filter criteria.":::

   > [!NOTE]
   > Supplying no values to the filter might lead to selection of all work items, or might be an invalid filter argument depending on type of filter criteria.

1. For a continuous flow, select **Rolling period** and specify the number of days you want to view on the chart.  

   Or, for a fixed scope view, select and specify the **Start date**. Select this view if your team employs a Scrumban process or follows a standard sprint process. The main difference between these two types of charts is that the fixed scope chart provides information of scope change in most cases.

1. Select **Save** when you're done. The following image shows an example Lead Time chart showing 60 days of data.

   :::image type="content" source="media/cycle-lead-time-lt-sample-chart.png" alt-text="Screenshot of Example CFD chart, rolling 30 days.":::

   For your lead time and cycle time charts to provide useful data, your team must quickly [update the status](../../boards/boards/kanban-quickstart.md#track-work-in-progress) of those work items that the widgets track.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: context menu icon and select **Configure** to open the configuration dialog. Modify the title and then select the values you want to monitor:

   - Team
   - Backlog level
   - Swimlane
   - Time period

   :::image type="content" source="media/cycle-lead-time-configure-dialog.png" alt-text="Screenshot of Configure dialog, Configure dialog, Lead Time widget, 2019 version.":::

   To select a **Swimlane**, you must select a **Backlog**.

1. For a continuous flow, select **Rolling period** and specify the number of days you want to view on the chart. Or, for a fixed scope view, select and specify the Start date. Select this view if your team employs a Scrumban process or follows a standard sprint process. The main difference between these two types of charts is that the fixed scope chart provides information (in most cases) of scope change.

1. Select **Save** when you're done. The following image shows an example Lead Time chart showing 60 days of data.

   :::image type="content" source="media/cycle-lead-time-lt-sample-chart.png" alt-text="Screenshot Example CFD chart, rolling 30 days, 2019 version.":::

   For your lead time and cycle time charts to provide useful data, your team must quickly [update the status](../../boards/boards/kanban-quickstart.md#track-work-in-progress) of those work items that the widgets track.

::: moniker-end

## Interpret the scatter-plot control charts

Both Lead Time and Cycle Time widgets display as scatter-plot control charts. They display summary information and provide several interactive elements.

**Example Lead Time widget**  

:::image type="content" source="media/lead-time-control-chart.png" alt-text="Screenshot of the Lead Time widget displaying Compliance Tooling Lead Time.":::

The chart dots represent completed work items, and their position on the horizontal axis represents the date the team completed them. Their position on the vertical axis represents the calculated lead time or cycle time.

- Larger dots represent multiple work items with the same lead time or cycle time
- Dot color corresponds to the work item type displayed in the legend
- Dark gray dots correspond to a mix of work item types

### Summary elements

- Days on average (average lead time or cycle time) for the main work item types configured for the chart. This number might not be equal to the average cycle time or lead time of all work items. It depends on configurations you use for the widgets. The average number is calculated based on each day the team takes time for work item.
- The number of backlog work items used in the chart calculations. If there are more than three types of work items, you see a summary for **Other**.  
- The black trend line indicates the moving average.
- The band around the trend line shows the standard deviation.

### Interactive elements  

- Hover over any dot to see which work items contributed to the data point and the lead time or cycle time for those items.  
- Select a dot to open the work item or query that lists the work items.
- Filter the chart by selecting a work item type in the legend (:::image type="icon" source="../../media/icons/user-story-icon.png" border="false":::, :::image type="icon" source="../../media/icons/bug-icon.png" border="false":::, or other icon) to filter on that type. To return to the original chart, refresh the dashboard.  

## Moving average and standard deviation calculations

- The daily moving average value corresponds to the average of data points that fall within the moving average window. The time-based moving average window is calculated based on the current day and previous *N* days. *N* corresponds to 20% of the number of days the chart displays, rounded down to the nearest odd number.

  For example, if the chart displays the last 30 days, then *N* = five days. 20% of 30 days is six days rounded down to the nearest odd number, which is five.

- The moving average window for April 10 corresponds to the previous five days. So, the April 10 moving average is the average of all data points that fall on April 5 through April 10.  

  If you don't have data points that fall within the moving average window, the chart doesn't show a moving average line. This scenario can occur if you're starting out and there aren't enough days to calculate a moving average.

- The standard deviation appears as a band that encompasses the moving average. Standard deviation is calculated based on all data points falling within the same moving average window. Like moving average, if no data points fall within the moving average window, the chart doesn't plot standard deviation.  

## Use a REST API to add a widget

To programmatically add a widget, use the following API endpoint:

```HTTP
   POST https://dev.azure.com/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets?api-version=7.1-preview.2
```

For more information, see [REST API - Get widget](/rest/api/azure/devops/dashboard/widgets/get-widget).

## Related articles

- [Get guidance on cumulative flow, lead time, and cycle time](cumulative-flow-cycle-lead-time-guidance.md)
- [Learn about Kanban boards](../../boards/boards/kanban-overview.md)
- [View and configure a Cumulative Flow Diagram](cumulative-flow.md)
- [Understand workflow states in backlogs and boards](../../boards/work-items/workflow-and-state-categories.md)
- [Explore Agile, Scrum, and CMMI processes](../../boards/work-items/guidance/agile-process.md)
