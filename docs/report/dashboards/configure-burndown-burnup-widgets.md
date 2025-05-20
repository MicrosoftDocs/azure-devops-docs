---
title: Configure a Burndown or Burnup Widget
titleSuffix: Azure DevOps
description: See how to configure a burndown or burnup widget to create charts that you add to a dashboard to track progress across one or more teams in Azure DevOps.
ms.custom: dashboards
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 04/29/2025
#customer intent: As a team member, I want to add burndown and burnup charts to a dashboard so that I can track team progress.
---

# Configure a burndown or burnup widget

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

In Azure DevOps dashboards, burndown and burnup widgets give you flexibility to create charts for any type of scope or number of teams in specified time periods. *Burndown charts* focus on remaining work. *Burnup charts* focus on completed work. Both chart types help your team determine whether you're on track to complete your work by the end date. For an overview of all burndown and burnup charts available to you, see [Burndown and burnup guidance](burndown-guidance.md).

The following screenshot shows a burndown widget configured to display a release burndown.

:::image type="content" source="media/burndown-widget/burndownup-release-burndown.png" alt-text="Screenshot of a burndown widget. Bars show remaining work decreasing over sprints. Lines show burndown decreasing and scope increasing.":::

## Prerequisites

[!INCLUDE [analytics-widgets-prerequisites](../includes/analytics-widgets-prerequisites.md)]

## Add the widget to your dashboard

Use the following procedure to add a burndown or burnup widget to your dashboard.

1. Go to `https://dev.azure.com/{your-organization}` to sign in to your organization.

1. Go to your project. Select **Dashboards**, and then select :::image type="icon" source="../../boards/backlogs/office/media/icons/edit.png" border="false"::: **Edit**.

   :::image type="content" source="media/burndown-widget/select-dashboards-edit.png" alt-text="Screenshot of Azure DevOps that shows an empty dashboard. Dashboards and Edit are highlighted." lightbox="media/burndown-widget/select-dashboards-edit.png":::

1. Select a widget, and then select **Add**.

   :::image type="content" source="media/burndown-widget/add-widget.png" alt-text="Screenshot of the Add Widget dialog. The Burndown widget and the Add button are highlighted.":::

## Configure burndown or burnup widget

To configure either widget type, take the following steps. The only difference between the burndown and burnup widgets is that the burnup widget plots *work completed* and the burndown widget plots *work remaining*. For more information, see [Interpret a burndown or burnup chart](#interpret-a-burndown-or-burnup-chart), later in this article.

1. On the widget, select :::image type="icon" source="../../boards/media/icons/gear_icon.png" border="false"::: **Configure**.

1. Enter the configuration information, described in the following table, and then select **Save**.

::: moniker range=">= azure-devops-2022"

| Configuration category | Guidance |
|:-----------|:-----------|
| **Teams** | To track progress across teams, add more teams. You can select teams from other projects, but the lists of selectable backlogs, work item types, and fields are based on your current project. You can track progress across multiple projects only if the [process](../../boards/work-items/guidance/choose-process.md) for those projects is the same, or at least similar. |
| **Work items** | Select the type of backlog or work item to burn down on. The **Backlog** category includes all the work item types configured for that backlog. If you use a [hosted XML process](../../organizations/settings/work/hosted-xml-process-model.md) to customize your project and you have a customized category name for bug work items, the burndown and burnup charts can't query for work items in that category. If you want to query for bugs, your customized bug work item type must belong to the default category for bugs, **Bug category**. That category has a reference name of `Microsoft.BugCategory`. |
| **Field criteria** | Select field criteria to limit the work items that appear in the chart. Filtering is based on the values assigned to the fields of each work item. But filtering uses the values assigned at the time of each revision within the tracking period. Values aren't assigned retroactively from the start of a work item's history. For more information, see [Filters that apply to historical data](../powerbi/analytics-historical-filtering.md).<br/>Analytics-based charts are built based on the `WorkItemsSnapshot` entity set. Snapshot entity types are modeled as daily snapshots. Data aggregation starts on the date an assignment is made, because the widget doesn't recognize assignments until you apply them. So if you want to filter a burndown or burnup widget based on field or tag assignments, assign the fields or tags before the start of the period that you want to monitor.<br/>When you configure field criteria, you can filter on a null value. The result is consistent with the result of a query that uses the same field criteria. |
| **Burndown on** | Select the way you want to calculate burndown. Options include **Count** to use a count of work items, and **Sum** to take the sum of a selected field. You can select from standard or custom fields that have an integer or decimal data type, such as **Story Points**, **Effort**, or **Remaining Work**. Burndown works best when you aggregate size fields like **Story Points**. If you choose to burn down on fields that change during the sprint, like **Remaining Work for Tasks**, the **Items not Estimated** value grows as items get closed. |
| **Time period** |Configure the time period for the chart.<br/>- **Start date**: Determines the original scope baseline. The chart burns down from the original scope.<br/>- **End date**: Specifies the target date of completion. Your goal is to burn down the original scope of work by the end date. |
| **Plot interval** | Select the intervals to plot in the date range of your chart. To plot the burndown by iteration instead of by date, select a start date, and then set the **Plot burndown by** value to **Iteration**.<br/>The average burndown is based on the selected interval. The calculations for the average burndown assume that every interval is the same length. For example, the interval between the start date and the end of the first month is assumed to be a full month, even if that first month is a partial month. For best results, enter a **Start date** value that's the same as the first month's start date. The same logic applies when you plot by weekly intervals. |
| **Advanced features** |Select advanced features to include in your chart:<br/>- **Show burndown**: Displays both the historical burndown and the projected future burndown.<br/>- **Show total scope**: Displays both the historical and projected scope increase.<br/>- **Show completed work**: Displays remaining work and completed work as stacked bars.<br/>- **Plot remaining work using work item type color**: Displays remaining work based on the work item type color, rather than the default blue color. If multiple work items are included, colors are stacked by work item type.<br/>- **Show Resolved work items as Completed**: Considers work items that have a `State` or `StateCategory` value of `Resolved` as completed work items.|

::: moniker-end

::: moniker range="< azure-devops-2022"

| Configuration category | Guidance |
|:----------------------|:-------|
| **Teams** | To track progress across teams, add more teams. You can select teams from other projects, but the lists of selectable backlogs, work item types, and fields are based on your current project. You can track progress across multiple projects only if the [process](../../boards/work-items/guidance/choose-process.md) for those projects is the same. |
| **Work items** | Select the type of backlog or work item to burn down on. The **Backlog** category includes all the work item types configured for that backlog. If you select the **Stories** backlog, you have another option: **Include bugs on the Stories backlog**. Select this option if you want to include bugs along with user stories in your burndown. For Scrum projects, this option is available for the product backlog item (PBI) backlog. For Capability Maturity Model Integration (CMMI) projects, this option is available for the requirements backlog. If you use a [hosted XML process](../../organizations/settings/work/hosted-xml-process-model.md) to customize your project and you have a customized category name for bug work items, the burndown and burnup widgets can't query for work items in that category. If you want to query for bugs, your customized bug work item type must belong to the default category for bugs, **Bug category**. That category has a reference name of `Microsoft.BugCategory`. |
| **Field criteria** | Select field criteria to limit the work items that appear in the chart. Filtering is based on the values assigned to the fields of each work item. But filtering uses the values assigned at the time of each revision within the tracking period. Values aren't assigned retroactively from the start of a work item's history. For more information, see [Filters that apply to historical data](../powerbi/analytics-historical-filtering.md).<br/>Analytics-based charts are built based on the `WorkItemsSnapshot` entity set. Snapshot entity types are modeled as daily snapshots. Data aggregation starts on the date an assignment is made, because the widget doesn't recognize assignments until you apply them. So if you want to filter a burndown or burnup widget based on field or tag assignments, assign the fields or tags before the start of the period that you want to monitor.<br/>When you configure field criteria, you can filter on a null value. The result is consistent with the result of a query that uses the same field criteria. |
| **Burndown on** | Select the way you want to calculate burndown. Options include **Count** to use a count of work items, and **Sum** to take the sum of a selected field. You can select from standard or custom fields that have an integer or decimal data type, such as **Story Points**, **Effort**, or  **Remaining Work**. Burndown works best when you aggregate size fields like **Story Points**. If you choose to burn down on fields that change during the sprint, like **Remaining Work for Tasks**, the **Items not Estimated** value grows as items get closed. |
| **Time period** | Configure the time period for the chart.<br/>- **Start date**: Determines the original scope baseline. The chart burns down from the original scope.<br/>- **End date**: Specifies the target date of completion. Your goal is to burn down the original scope of work by the end date. |
| **Plot interval** | Select the intervals to plot in the date range of your chart. The average burndown is based on the selected interval. Intervals can be time periods, such as a day, a week, or a month, or intervals can be based on an iteration schedule. The calculations for the average burndown assume that every interval is the same length. For example, the interval between the start date and the end of the first month is assumed to be a full month, even if that first month is a partial month. For best results, enter a **Start date** value that's the same as the first month's start date. The same logic applies when you plot by weekly intervals. |
| **Advanced features** |Select advanced features to include in your chart:<br/>- **Show burndown**: Displays both the historical burndown and the projected future burndown.<br/>- **Show total scope**: Displays both the historical and projected scope increase.<br/>- **Show completed work**: Displays remaining work and completed work as stacked bars.<br/>- **Plot remaining work using work item type color**: Displays remaining work based on the work item type color, rather than the default blue color. If multiple work items are included, colors are stacked by work item type. |

::: moniker-end

## Interpret a burndown or burnup chart

Your team can use a burndown or burnup chart to get immediate insight about their progress and to learn about their rhythm and behavior. Most burndown lines aren't straight lines, because teams generally don't move at a fixed velocity. Scope increases can occur over time and affect velocity. For example, if your projected completion date moves, you might ask one of the following questions:

- *Are we adding too much scope?*
- *Is the average burn rate changing, and if so, why?*

Burndown charts also help teams understand risks to their release. If the projected end date exceeds the release target date, teams might need to reduce scope or lengthen the project. Burndown can also indicate that progress is greater than expected, providing the uncommon, but advantageous option of adding scope.

As the following diagram shows, charts based on the burndown or burnup widgets provide many calculated elements.

:::image type="content" source="media/burndown-widget/burndownup-release-burndown-with-markup.png" alt-text="Screenshot of a burndown widget. Labels show that the bars represent remaining work and the lines represent burndown and scope.":::

| Element | Description |
|:--------|:------------|
| **Date range** | The start and end date of the burndown. When burndown gets plotted by iterations, the end date is the end of the last iteration. |
| **Main metric** | The current remaining work based on the selected burndown method. |
| **Percentage completed** | The percentage of work completed based on the original scope. To see the full list of completed work items, select **Completed**. |
| **Average burndown** | The average work completed per interval or iteration. |
| **Items not estimated** | A metric that's displayed only when you burn down on the sum of a field. It represents the current number of items that don't have a value in the selected **Burndown on** field. To see a full list of work items without estimates, select the **Items not estimated** value. |
| **Total Scope Increase** | The amount of work added to the original scope since the start of the burndown.|
| **Projected completion** | The projected completion date based on the remaining work, historical burndown, and scope increase rates. If the projected completion date is before the specified end date, it appears as a vertical line on the interval when the work should be complete. If the projected completion date is after the specified end date, it appears as text that indicates the number of other intervals or iterations needed to complete the work. |
| **Original scope** | All the remaining work since the specified start date. The chart burns down from the original scope. The completed percentage and the **Total Scope Increase** value are calculated based on your original scope. |
| **Total scope** | The total scope of the burndown. The plotted points include both completed and remaining work. The total scope line indicates the scope change of your project. For past data points, the plotted total scope represents actual total scope as of the end of each interval or iteration. For future data points, the plotted total scope represents a projected scope change, based on past scope changes. |
| **Burndown** | The burndown value, which tells you how quickly you're burning down the work. For past data points, the plotted burndown represents actual burndown as of the end of each interval or iteration. For future data points, the plotted burndown represents a projected burndown, based on past burndown. |

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

## Related content

- [Configure and monitor sprint burndown](configure-sprint-burndown.md)
- [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Add and manage fields (Inheritance process)](../../organizations/settings/work/customize-process-field.md)
