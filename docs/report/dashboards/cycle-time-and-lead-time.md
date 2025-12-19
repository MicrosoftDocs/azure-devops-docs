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
monikerRange: "<=azure-devops"
ms.date: 09/18/2025
#customer intent: As a team member, I want to create Lead Time or Cycle Time widgets to show team progress on the dashboard.
---

# Lead time and cycle time widgets

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The lead time and cycle time widgets show how long it takes for work to flow through your development pipeline. Lead time is the total time from when a work item is created to when it's finished. Cycle time is the time it takes your team to finish work items after they start working on them.

## Key definitions

- **Lead time** — The total elapsed time from when a work item is created (or first enters the backlog) until it reaches a Completed / Closed state. Lead time measures end-to-end delivery, and is useful for estimating delivery time and tracking SLAs.

- **Cycle time calculation** — The period from the first transition of a work item into an Active / In Progress (or Resolved, where applicable) state category through to the final transition into a Completed / Closed state category. For reactivated work items, cycle time starts at the first time the work item entered an Active (or Resolved) state category and ends at the final time it enters a Completed state category. Cycle time includes the entire active work periods (all time the item spends in active states), including any active time after reactivation.

- **Total cycle time** — The total elapsed time that includes both active work periods and any time spent in Closed/Completed state before a reactivation occurs. In other words, total cycle time reflects the full elapsed duration across active and closed periods when a work item is closed and later re-opened.

Example scenario (reactivation):
New → Active → Resolved → Closed → New → Active → Closed

In this scenario:
- Cycle time calculation starts at the first transition to Active and ends at the final transition to Closed (it aggregates the active spans).
- Total cycle time includes the active spans and also the Closed period between them (so it measures the full elapsed duration across both active and closed states).

The following diagram shows how lead time and cycle time are different. Lead time is the time from *Work Item Creation* to when a work item enters a *Completed* state. Cycle time is the time from when a work item first enters an *In Progress or Resolved* state category to when it enters a *Completed* state category. For more information, see [About workflow states in backlogs and boards](../../boards/work-items/workflow-and-state-categories.md).

:::image type="content" source="media/cycle-lead-time-concept-intro.png" alt-text="Diagram that shows how cycle time and lead time are measured in the development process.":::

[!INCLUDE [how-cycle-time-handles-reactivated-work-items](../includes/how-cycle-time-handles-reactivated-work-items.md)]

These measures help teams plan, find variations in efficiency, and spot possible process issues. Lower lead and cycle times mean faster team throughput. Check the lead time and cycle time charts before or during each retrospective. Use lead time to estimate delivery times and track service level agreements (SLAs). Use cycle time to find process issues, spot trends, and help with planning.

For more information, see [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md).

## Prerequisites

[!INCLUDE [analytics-widgets-prerequisites](../includes/analytics-widgets-prerequisites.md)]

1. Make sure your team's board has defined [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md) that support your workflow processes.
2. [Add the widget to your dashboard](./add-widget-to-dashboard.md). There are two widgets: [Cycle Time](widget-catalog.md#cycle-time-widget) and [Lead Time](widget-catalog.md#lead-time-widget). Select the one you want to display and configure.

<a id="configure-widget"></a>

## Configure the Cycle Time and Lead Time widgets

The configuration dialog is the same for the Cycle Time and Lead Time widgets. Set up these widgets for a team. For more information, see [Create or add a team](../../organizations/settings/add-teams.md).

::: moniker range="<=azure-devops"

1. Select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: context menu icon, and then select **Configure** to open the configuration dialog.
1. Modify the title, and then select the values you want to monitor:

   - Team
   - Work items
   - Swimlane
   - Field criteria
   - Time period  

   :::image type="content" source="media/lead-cycle/cycle-lead-time-configure-dialog-s156.png" alt-text="Screenshot of the configuration dialog for the Lead Time widget in the latest version.":::

   To select a **Swimlane**, select **Backlog**.

      > [!NOTE]
   > You can only select work item types that are added to a backlog. To add work item types to a backlog, see [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md). For the on-premises XML process, see [Process configuration XML element reference](../../reference/xml/process-configuration-xml-element.md).

2. To further filter the work items used to calculate the lead or cycle time, specify the **Field Criteria**. For example, all the work items whose Release field is set to Milestone 1.

   :::image type="content" source="media/lead-cycle/field-criteria-release.png" alt-text="Screenshot of Configure dialog, Lead Time widget, filter criteria.":::

      > [!NOTE]
   > If you don't supply values to the filter, all work items might be selected, or the filter might be invalid depending on the type of filter criteria.

3. For a continuous flow, select **Rolling period** and specify the number of days you want to view on the chart.  

   Or, for a fixed scope view, select and specify the **Start date**. Select this view if your team employs a Scrumban process or follows a standard sprint process. The main difference between these two types of charts is that the fixed scope chart provides information of scope change in most cases.

4. Select **Save** when you're done. The following image shows an example Lead Time chart showing 60 days of data.

   :::image type="content" source="media/cycle-lead-time-lt-sample-chart.png" alt-text="Screenshot of Example CFD chart, rolling 30 days.":::

   For your lead time and cycle time charts to provide useful data, your team needs to quickly [update the status](../../boards/boards/kanban-quickstart.md#track-work-in-progress) of the work items that the widgets track.

::: moniker-end

## Interpret the scatter plot control charts

Both Lead Time and Cycle Time widgets show as scatter plot control charts. They show summary information and provide several interactive elements.

**Example Lead Time widget**  

:::image type="content" source="media/lead-time-control-chart.png" alt-text="Screenshot of the Lead Time widget displaying Compliance Tooling Lead Time.":::

The chart dots represent finished work items. Their position on the horizontal axis shows the date the team finished them, and their position on the vertical axis shows the calculated lead time or cycle time.

- Larger dots show multiple work items with the same lead time or cycle time
- Dot color matches the work item type shown in the legend
- Dark gray dots show a mix of work item types

### Summary elements

- Average days (lead time or cycle time) for the main work item types set up for the chart. This number isn't always the average cycle time or lead time of all work items. It depends on how you set up the widgets. The average is based on each day the team spends on a work item.
- The number of backlog work items used in the chart calculations. If there are more than three types of work items, you see a summary for **Other**.
- The black trend line shows the moving average.
- The band around the trend line shows the standard deviation.

### Interactive elements  

- Hover over any dot to see which work items make up the data point and the lead time or cycle time for those items.
- Select a dot to open the work item or a query that lists the work items.
- Filter the chart by selecting a work item type in the legend (:::image type="icon" source="../../media/icons/user-story-icon.png" border="false":::, :::image type="icon" source="../../media/icons/bug-icon.png" border="false":::, or another icon) to filter on that type. To go back to the original chart, refresh the dashboard.  

## Moving average and standard deviation calculations

- **Daily moving average**: The average of data points in the moving average window, based on the current day and previous *N* days. *N* is 20 percent of the number of days the chart shows, rounded down to the nearest odd number.
  - Example: If the chart shows the last 30 days, then *N* = 5 days (20 percent of 30 days is 6, rounded down to 5).

- **Moving average window**: For April 10, the window is the previous five days. The April 10 moving average is the average of all data points from April 5 to April 10.
  - If the moving average window doesn't have any data points, the chart doesn't show a moving average line. This can happen if there aren't enough days to calculate a moving average.

- **Standard deviation**: Shows as a band around the moving average and is calculated from all data points in the same moving average window.
  - If the moving average window doesn't have any data points, the chart doesn't show standard deviation.

## Use a REST API to add a widget

Add a widget programmatically by using the following API endpoint:

```http
POST https://dev.azure.com/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets?api-version=7.1-preview.2
```

For more information, see [REST API - Get widget](/rest/api/azure/devops/dashboard/widgets/get-widget).

## Related articles

- [Get guidance on cumulative flow, lead time, and cycle time](cumulative-flow-cycle-lead-time-guidance.md)
- [Learn about Kanban boards](../../boards/boards/kanban-overview.md)
- [View and configure a Cumulative Flow Diagram](cumulative-flow.md)
- [Understand workflow states in backlogs and boards](../../boards/work-items/workflow-and-state-categories.md)
- [Explore Agile, Scrum, and CMMI processes](../../boards/work-items/guidance/agile-process.md)
