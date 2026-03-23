---
title: Configure and monitor sprint burndown
titleSuffix: Azure DevOps
description: Learn how to configure and monitor sprint burndown charts in Azure DevOps to track team progress and ensure your sprint plan stays on track.
ms.custom: dashboards, copilot-scenario-highlight
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<= azure-devops"
ms.date: 03/18/2026
ai-usage: ai-assisted
#customer intent: As a team member or leader, I want to monitor sprint burndown information to see whether my team is on track to complete our sprint plan.
---

# Configure and monitor sprint burndown

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Throughout your sprint, monitor the sprint burndown report to determine if your team is on track to complete its [sprint plan](../../boards/sprints/assign-work-sprint.md). Two burndown charts are available:

- **In-context Burndown Trend report**: Viewable from a team's sprint backlog **Analytics** tab.
- **Sprint Burndown widget**: Add to any dashboard from the widget catalog.

Both charts derive data from [Analytics](../powerbi/what-is-analytics.md) and support burndown based on a count of work items or a sum of Story Points, Effort, Remaining Work, or other numeric fields. For more configuration options, see [Configure a burndown or burnup widget](configure-burndown-burnup-widgets.md). For an overview of all burndown chart types, see [Burndown and burnup guidance](burndown-guidance.md).

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites](../includes/analytics-widgets-prerequisites.md)]

To monitor sprint burndown, your team must [schedule sprints](../../boards/sprints/define-sprints.md) and [assign work to those sprints](../../boards/sprints/assign-work-sprint.md). If you want to burn down on Remaining Work, you must also:

- [Define and estimate tasks](../../boards/sprints/add-tasks.md) for each backlog item in the sprint.
- [Update Remaining Work](../../boards/sprints/task-board.md#update-tasks) for each task as work progresses.

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

## Understand sprint burndown chart elements

The in-context report and the Sprint Burndown widget display the same chart elements. The header metric label (for example, **Stories Remaining** or **Tasks Remaining**) changes based on the work item type you select.

:::image type="content" source="media/burndown/analytics-burndown-stories-count-past-s159.png" alt-text="Screenshot shows the burndown trend for specified start and end dates." lightbox="media/burndown/analytics-burndown-stories-count-past-s159.png":::

| Element | Description |
|:--------|:------------|
| **Date range** | The start and end date of the sprint. |
| **Items Remaining** | The number of work items remaining in the sprint. The label changes based on your work item type selection. |
| **Completed** | The percentage of work completed based on original scope. Select **Completed** to see the full list of completed work items. |
| **Average burndown** | Average work completed per day or interval. |
| **Total Scope Increase** | The change in work from the original scope since the burndown started. |
| **Remaining** | The number of work items still active or in progress. |
| **Total Scope** | The total number of work items in the sprint including closed items. Scope decreases when an item's Iteration Path changes to another sprint, or when items are completed. |
| **Ideal Trend** | The ideal burndown rate calculated from the number of work items, days in the sprint, and working days. |

Because individual team members might only update their work items once a week or every few days, there's usually a staircase burndown pattern.

<a id="open-chart">  </a>

## Open the in-context Burndown Trend report

<a id="view-context-report"></a>

1. Go to **Boards** > **Sprints**, select your team, and then select **Backlog**.

    :::image type="content" source="../../boards/sprints/media/add-tasks/open-sprint-backlog-s155-co.png" alt-text="Screenshot shows where you can select Backlog in Azure Boards." lightbox="../../boards/sprints/media/add-tasks/open-sprint-backlog-s155-co.png":::

1. To view a different sprint, open the sprint selector and select the sprint you want.

    :::image type="content" source="../../boards/sprints/media/add-tasks/select-specific-sprint-agile.png" alt-text="Screenshot shows the option to select another sprint in Azure Boards.":::

    If you don't see the sprint you want, select **New Sprint** > **Select existing iteration**. For more information, see [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md).

1. Select the **Analytics** tab.

   :::image type="content" source="media/burndown/open-analytics.png" alt-text="Screenshot shows the Azure DevOps Analytics tab for sprints.":::

1. Use the interactive controls to configure the report:

   - **Start Date** and **End Date**: Default to the current sprint dates.
   - **Backlogs/Work Items**: Select a product backlog (Stories, Issues, Product Backlog Items, or Requirements) or the Tasks backlog. Your selection determines the available **Burndown on** options.
   - **Burndown on**: Select **Count of Work Items** or a sum of a field such as Story Points, Effort, or Size.
   - **Show non-working days**: Displays nonworking days as gray bars. For more information, see [Set sprint capacity](../../boards/sprints/set-capacity.md).

   Select **Reset** to return to the default options. Changes to date controls don't change sprint date definitions.

1. Hover over any point on the chart to see a summary for that day.

The chart shows different data depending on your **Burndown on** selection:

### [Sum of Remaining Work](#tab/remaining-work)

The blue area shows the sum of Remaining Work per day for active or in-progress tasks. The **Scope** line shows Remaining Work added after the sprint started. The **Ideal** line shows the ideal burndown rate. **Capacity** lines appear only when the team configured capacity.

:::image type="content" source="media/burndown/analytics-burndown-remaining-work-s159.png" alt-text="Screenshot shows Burndown trend based on Remaining Work." lightbox="media/burndown/analytics-burndown-remaining-work-s159.png":::

### [Count of Work Items](#tab/work-items)

The blue area shows the count of active or in-progress work items. The **Scope** line shows items added after the sprint started. The **Ideal** line shows the ideal burndown rate.

:::image type="content" source="media/burndown/analytics-burndown-count-of-work-items-s159.png" alt-text="Screenshot shows Burndown trend based on Count of Work Items." lightbox="media/burndown/analytics-burndown-count-of-work-items-s159.png":::

### [Sum of Story Points](#tab/story-points)

The blue area shows the sum of Story Points for active or in-progress User Stories. The **Scope** line shows Story Points added after the sprint started. The **Ideal** line shows the ideal burndown rate.

:::image type="content" source="media/burndown/analytics-burndown-story-points.png" alt-text="Screenshot shows Burndown trend based on Story Points." lightbox="media/burndown/analytics-burndown-story-points.png":::

* * *

> [!NOTE]
> Available sum fields depend on the numeric fields defined for task and requirement work item types. The most common fields are [Story Points, Effort, or Size](../../boards/queries/query-numeric.md#fields) and [Remaining Work](../../boards/queries/query-numeric.md#fields).

Your selections persist across sessions until you change them.

## Add the report to a dashboard

To add the in-context report to a dashboard, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Copy to Dashboard**. Then, select the target dashboard.

:::image type="content" source="media/add-charts/add-analytics-chart-abbreviated.png" alt-text="Screenshot shows the Analytics in-context report, Copy to dashboard option.":::

## Add and configure the Sprint Burndown widget

1. [Add the Sprint Burndown widget to your dashboard](add-widget-to-dashboard.md). Filter the **Add Widget** dialog by *sprint burndown* to locate the widget.

   :::image type="content" source="media/burndown/add-sprint-burndown-widget-devops.png" alt-text="Screenshot shows the Add Widget dialog, filter by sprint burndown.":::

1. Select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon on the widget and select **Configure**.

   :::image type="content" source="media/sprint-burndown/sprint-burndown-config.png" alt-text="Screenshot shows the Sprint Burndown widget Configuration dialog.":::  

1. Configure the following settings:

   | Setting | Description |
   |---------|-------------|
   | **Title** | Modify the widget title. |
   | **Size** | Select your preferred size (up to 10x10). |
   | **Team** | Select the team to track. |
   | **Backlogs and work items** | Select any backlog level or a specific work item type. |
   | **Burndown on** | Choose **Count of work items** or a sum based on a selected field. |
   | **Select iteration** | Choose **\@CurrentIteration** or a specific iteration. |
   | **Time period** | For **\@CurrentIteration**, dates are set automatically. For a specific iteration, customize the start and end dates. |

1. Select advanced features to add to your chart:

   | Option | Description |
   |--------|-------------|
   | **Show total scope** | Displays historical and projected scope increase. |
   | **Show non working days** | Shades nonworking days on the burndown. |
   | **Plot remaining using work item type color** | Colors remaining work by work item type instead of default blue. Stacks colors for multiple work item types. |

1. Select **Save**.

## Sprint Burndown (Legacy) widget

The **Sprint Burndown (Legacy)** widget charts remaining work based on Remaining Work for tasks in a team's current sprint. Use this version when you don't have access to Analytics.

:::image type="content" source="media/burndown/sprint-burndown-legacy-devops.png" alt-text="Screenshot shows the Sprint Burndown Legacy widget, which shows a burndown chart.":::

To configure, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Configure**. Configuration options include team selection and widget size.

:::image type="content" source="media/sprint-burndown/sprint-burndown-legacy-config.png" alt-text="Screenshot shows the Sprint Burndown Legacy widget configuration dialog.":::

> [!TIP]
> To upgrade an existing legacy widget, select **Try the new version now** in the configuration dialog. You can switch back at any time.

<a id="past-sprints">  </a>

## Review past sprint burndown charts

As you complete each sprint, the system maintains a history of your activity. To view a past sprint's burndown chart, select it from the sprint selector.

:::image type="content" source="media/burndown/select-past-sprint.png" alt-text="Screenshot shows where you can select a past sprint from the sprint selector.":::

Reviewing past burndown charts during retrospectives can reveal patterns in your team's execution. Consider these questions:

- How does your projected velocity match up to your actual velocity?
- How can you more accurately determine how much your team can accomplish in a sprint?
- How can you complete work at a more regular pace throughout the sprint?

#### [May](#tab/may)

:::image type="content" source="media/burndown/may.png" alt-text="Screenshot shows the May burndown chart." lightbox="media/burndown/may.png":::

#### [June](#tab/june)

:::image type="content" source="media/burndown/june.png" alt-text="Screenshot shows the June burndown chart." lightbox="media/burndown/june.png":::

#### [July](#tab/july)

:::image type="content" source="media/burndown/july.png" alt-text="Screenshot shows the July burndown chart." lightbox="media/burndown/july.png":::

* * *

## Best practices for sprint burndown

- Define tasks that take a day or less to complete to reduce the impact of poor estimates.
- Don't divide tasks into subtasks. If you do, specify hours only for the subtasks – hours roll up as summary values for the parent task.
- Update Remaining Work daily or several times a week to achieve a smoother burndown chart.
- At the end of each sprint, update the status of completed tasks and determine how to handle incomplete tasks.

<a id="empty-chart">  </a>

## Troubleshoot an empty burndown chart

If your sprint burndown chart appears empty, check these points:

- Are tasks assigned to the sprint associated with the chart?
- Is Remaining Work assigned to the tasks?
- Are the parent work items assigned to the same sprint? If not, tasks might appear in another sprint associated with the parent item.

::: moniker range="azure-devops"

## Use AI to monitor sprint burndown

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help configure and interpret sprint burndown charts.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Configure the report | `Help me set up a sprint burndown widget that tracks Remaining Work for my team's current sprint in <Contoso> project` |
| Interpret the chart | `My sprint burndown shows a flat line for the first 3 days — what does that indicate and what should my team do?` |
| Compare approaches | `What's the difference between the in-context sprint burndown report and the Sprint Burndown widget? Which should I use?` |
| Track by story points | `Help me configure sprint burndown by Story Points instead of work item count in <Contoso> project` |
| Retrospective insights | `Based on sprint burndown patterns, what process improvements should my team discuss in our retrospective?` |
| Scope changes | `How can I tell from the sprint burndown chart whether scope was added mid-sprint?` |
| Predict risk early | `Our sprint burndown is flat after day 3 of a 10-day sprint — what's the likelihood we'll finish on time and what should we adjust?` |
| Compare sprints | `Compare our last three sprint burndown patterns and identify whether our estimation accuracy is improving` |
| Optimize sprint length | `Based on our burndown history, would our team benefit from shorter two-week sprints instead of three-week sprints?` |

::: moniker-end

## Related articles

- [Burndown and burnup guidance](burndown-guidance.md)
- [Configure a burndown or burnup widget](configure-burndown-burnup-widgets.md)
- [Define iteration paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 
- [Assign backlog items to a sprint](../../boards/sprints/assign-work-sprint.md)
- [Add tasks to backlog items](../../boards/sprints/add-tasks.md)
- [Update and monitor your Taskboard](../../boards/sprints/task-board.md)
