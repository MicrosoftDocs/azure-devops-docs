---
title: Configure a burndown or burnup widget
titleSuffix: Azure DevOps
description: Learn how to configure a burndown or burnup widget to create charts that you add to a dashboard to track progress across one or more teams in Azure DevOps.
ms.custom: dashboards, copilot-scenario-highlight
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: "<= azure-devops"
ms.date: 03/18/2026
ai-usage: ai-assisted
#customer intent: As a team member, I want to add burndown and burnup charts to a dashboard so that I can track team progress.
---

# Configure a burndown or burnup widget

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In Azure DevOps dashboards, burndown and burnup widgets give you flexibility to create charts for any type of scope or number of teams in specified time periods. *Burndown charts* focus on remaining work. *Burnup charts* focus on completed work. Both chart types help your team determine whether you're on track to complete your work by the end date. For an overview of all burndown and burnup charts available to you, see [Burndown and burnup guidance](burndown-guidance.md).

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

The following screenshot shows a burndown widget configured to display a release burndown.

:::image type="content" source="media/burndown-widget/burndownup-release-burndown.png" alt-text="Screenshot of a burndown widget. Bars show remaining work decreasing over sprints. Lines show burndown decreasing and scope increasing.":::

## Prerequisites

[!INCLUDE [analytics-widgets-prerequisites](../includes/analytics-widgets-prerequisites.md)]

## Add the widget to your dashboard

1. Go to your project and select **Dashboards**, and then select :::image type="icon" source="../../boards/backlogs/office/media/icons/edit.png" border="false"::: **Edit**.

   :::image type="content" source="media/burndown-widget/select-dashboards-edit.png" alt-text="Screenshot of Azure DevOps that shows an empty dashboard. Dashboards and Edit are highlighted." lightbox="media/burndown-widget/select-dashboards-edit.png":::

1. Search for **Burndown** or **Burnup**, select the widget, and then select **Add**.

   :::image type="content" source="media/burndown-widget/add-widget.png" alt-text="Screenshot of the Add Widget dialog. The Burndown widget and the Add button are highlighted.":::

## Configure burndown or burnup widget

To configure either widget type, take the following steps. The only difference between the burndown and burnup widgets is that the burnup widget plots *work completed* and the burndown widget plots *work remaining*.

1. On the widget, select :::image type="icon" source="../../boards/media/icons/gear_icon.png" border="false"::: **Configure**.

1. Configure the settings described in the following sections, and then select **Save**.

::: moniker range=">= azure-devops-2022"

### Teams

To track progress across teams, add more teams. You can select teams from other projects, but the lists of selectable backlogs, work item types, and fields are based on your current project. You can track progress across multiple projects only if the [process](../../boards/work-items/guidance/choose-process.md) for those projects is the same, or at least similar.

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

### Work items

Select the type of backlog or work item to burn down. The **Backlog** category includes all work item types configured for that backlog.

> [!NOTE]
> If you use a [hosted XML process](../../organizations/settings/work/hosted-xml-process-model.md) with a customized bug category name, the burndown and burnup charts can't query for work items in that category. Your custom bug work item type must belong to the default **Bug category** (reference name `Microsoft.BugCategory`).

### Field criteria

Select field criteria to limit the work items that appear in the chart. Filtering is based on the values assigned to fields at the time of each revision within the tracking period — values aren't applied retroactively. You can filter on null values, with results consistent with queries using the same criteria.

For more information, see [Filters that apply to historical data](../powerbi/analytics-historical-filtering.md).

> [!IMPORTANT]
> Assign fields or tags before the start of the monitoring period. The widget uses daily snapshots and only recognizes assignments from the date they're applied.

### Burndown on

Select how to calculate burndown:

- **Count**: Uses a count of work items.
- **Sum**: Totals a numeric field such as **Story Points**, **Effort**, or **Remaining Work**. You can select any standard or custom field with an integer or decimal data type.

Burndown works best when you aggregate size fields like **Story Points**. If you burn down on fields that change during the sprint (like **Remaining Work for Tasks**), the **Items not Estimated** value grows as items get closed.

### Time period

- **Start date**: Determines the original scope baseline. The chart burns down from the original scope.
- **End date**: Specifies the target completion date. Your goal is to burn down the original scope by this date.

### Plot interval

Select the interval to plot in your chart's date range. To plot by iteration instead of by date, set the **Plot burndown by** value to **Iteration**.

Average burndown calculations assume every interval is the same length. For best results, set the **Start date** to align with the first interval boundary (for example, the start of the first month or week).

### Advanced features

| Option | Description |
|--------|-------------|
| **Show total scope** | Shows historical and projected scope increase. |
| **Show Resolved work items as Completed** | Treats work items in `Resolved` state (or any state mapped to the `Completed` category) as completed for chart metrics. This setting affects only the chart display, not your process configuration. |

**Burndown chart options:**

| Option | Description |
|--------|-------------|
| **Show burndown** | Shows historical and projected burndown (remaining work). |
| **Show completed work** | Shows completed work as stacked bars by work item type. |
| **Plot remaining work using work item type color** | Colors remaining work by work item type. |

**Burnup chart options:**

| Option | Description |
|--------|-------------|
| **Show burnup** | Shows historical and projected burnup (completed work). |
| **Show remaining work** | Shows remaining work as stacked bars by work item type. |
| **Plot completed work using work item type color** | Colors completed work by work item type. |

::: moniker-end

## Interpret a burndown or burnup chart

After you save, the widget renders your chart. Your team can use it to get immediate insight about progress and to learn about their rhythm and behavior. Most burndown lines aren't straight lines, because teams generally don't move at a fixed velocity. Scope increases can occur over time and affect velocity. For example, if your projected completion date moves, you might ask one of the following questions:

- *Are we adding too much scope?*
- *Is the average burn rate changing, and if so, why?*

Burndown charts also help teams understand risks to their release. If the projected end date exceeds the release target date, teams might need to reduce scope or lengthen the project. Burndown can also indicate that progress is greater than expected, providing the uncommon, but advantageous option of adding scope.

As the following diagram shows, charts based on the burndown or burnup widgets provide many calculated elements.

:::image type="content" source="media/burndown-widget/burndownup-release-burndown-with-markup.png" alt-text="Screenshot of a burndown widget. Labels show that the bars represent remaining work and the lines represent burndown and scope.":::

| Element | Description |
|:--------|:------------|
| **Date range** | The start and end date of the burndown. When you plot burndown by iterations, the end date is the end of the last iteration. |
| **Main metric** | The current remaining work based on the selected burndown method. |
| **Percentage completed** | The percentage of work completed based on the original scope. Select **Completed** to see the full list of completed work items. |
| **Average burndown** | The average work completed per interval or iteration. |
| **Items not estimated** | Displays only when you burn down on the sum of a field. Shows the count of items without a value in the selected **Burndown on** field. Select the value to see the full list. |
| **Total Scope Increase** | The amount of work added to the original scope since the burndown started. |
| **Projected completion** | The projected completion date based on remaining work, historical burndown, and scope increase rates. Appears as a vertical line if before the end date, or as text showing additional intervals needed if after the end date. |
| **Original scope** | All remaining work since the start date. The completed percentage and **Total Scope Increase** are calculated based on original scope. |
| **Total scope** | The total scope including both completed and remaining work. For past data points, represents actual scope at each interval end. For future data points, represents projected scope based on past changes. |
| **Burndown** | How quickly you're burning down work. For past data points, represents actual burndown at each interval end. For future data points, represents projected burndown based on past rates. |

::: moniker range="azure-devops"

## Use AI to build burndown and burnup charts

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help plan and configure burndown and burnup widgets.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Choose the right chart | `Should I use a burndown or burnup widget to track my team's release progress in <Contoso> project?` |
| Configure scope | `Help me configure a burndown widget that tracks user stories across two teams in <Contoso> project` |
| Set time period | `What time period and granularity should I use for a burndown widget that covers a 3-month release cycle?` |
| Track remaining effort | `Help me set up a burndown widget that shows remaining Story Points for the current sprint in <Contoso> project` |
| Analyze scope creep | `How can I use the burnup widget to identify scope creep during our release in <Contoso> project?` |
| Interpret the chart | `The burndown shows projected completion past the end date — what actions should my team take?` |

::: moniker-end

## Related content

- [Burndown and burnup guidance](burndown-guidance.md)
- [Configure and monitor sprint burndown](configure-sprint-burndown.md)
- [Add widgets to a dashboard](add-widget-to-dashboard.md)
- [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Add and manage fields (Inheritance process)](../../organizations/settings/work/customize-process-field.md)
