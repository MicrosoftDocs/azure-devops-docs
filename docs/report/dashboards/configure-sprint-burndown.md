---
title: View and configure sprint burndown
titleSuffix: Azure DevOps   
description: Learn how to configure the sprint burndown in-context chart or widget to track team progress in Azure DevOps.
ms.custom: dashboards
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '>= azure-devops-2019' 
ms.date: 12/12/2024
#customer intent: As a team member or leader, I want to monitor sprint burndown information to see whether my team is on track to complete our sprint plan.
---

# Configure and monitor sprint burndown

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

::: moniker range=">= azure-devops-2020"

Throughout your sprint, you can monitor the sprint burndown report to determine if your team is on track to complete its [sprint plan](../../boards/sprints/assign-work-sprint.md). There are two sprint accessible burndown charts: the in-context Burndown Trend report viewable from a team sprint backlog and the Sprint Burndown widget that you can add to a dashboard.

Both the report and the widget derive data from [Analytics](../powerbi/what-is-analytics.md). They support monitoring burndown based on a count of work items or a sum of Story Points/Size/Effort, Remaining Work, or other numeric field.

You can add either the report or widget to a dashboard. Also, you can monitor progress using the [Analytics-based burndown or burnup widgets](configure-burndown-burnup-widgets.md). They provide more configuration options.

::: moniker-end

::: moniker range="azure-devops-2019"

Throughout your sprint, you can monitor the sprint burndown report to determine if your team is on track to complete its [sprint plan](../../boards/sprints/assign-work-sprint.md). The in-context sprint burndown report supports tracking burndown based on Remaining Work assigned to sprint tasks. If you don't track tasks or Remaining Work, then you can use the [Analytics-based burndown and burnup widgets](configure-burndown-burnup-widgets.md). They provide more configuration options.

::: moniker-end

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

Use this article to learn about: 

::: moniker range=">= azure-devops-2020"
> [!div class="checklist"]  
> - Metrics tracked in the sprint burndown report and widget
> - Team activities required to track tasks and Remaining Work
> - How to set interactive controls to personalize your view of the sprint burndown report
> - How to add the in-context Burndown Trend report to a dashboard  
> - How to configure the Sprint Burndown widgets  
> - How to view current and past sprint burndowns

For an overview of all burndown and burnup charts available to you, see [Burndown and burnup guidance](burndown-guidance.md).

::: moniker-end

::: moniker range="azure-devops-2019"

> [!div class="checklist"]  
> - Metrics tracked in the sprint burndown report and widget
> - Team activities required to track tasks and Remaining Work
> - How to configure the Sprint Burndown widget
> - How to view current and past sprint burndowns

::: moniker-end

> [!NOTE]
> Sprint burndown reports are derived from data tracked by a team during a sprint or iteration. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

## The in-context Burndown Trend report

::: moniker range=">= azure-devops-2020"

The Burndown Trend report is based on either a count of tasks or remaining work estimates, or other numeric fields that you define and update throughout the sprint cycle. For details, see [Sprint planning](../../boards/sprints/assign-work-sprint.md). To open this report, see [Open a Sprint backlog](#open-chart).

A healthy sprint burndown report looks something like the image shown here. The blue area indicates the number of work items active or in progress each day of the sprint. As shown in this example, one work item is still active at the end of the sprint. 

:::image type="content" source="media/burndown/analytics-burndown-stories-count-past-s159.png" alt-text="Screenshot shows the burndown trend for specified start and end dates." lightbox="media/burndown/analytics-burndown-stories-count-past-s159.png":::

| Element | Description |
|:--------|:------------|
| **Date range** | The  start and end date of the sprint. |
| **Stories Remaining** | The number of stories remaining in the sprint. If you choose a different work item type the remaining number of those work items is shown. |
| **Completed** | The percentage of work completed based on original scope. Select **Completed** to see the full list of completed work items. |
| **Average burndown** | Average work completed. |
| **Total Scope Increase** | Shows the change in how much work from the original scope since the burndown started. The example shows that six work items were removed. |
| **Remaining** | The number of work items active or in progress. The example shows one active item is remaining in the sprint. |
| **Total Scope** | The total number of work items in the sprint including closed work items. If the team's default iteration is the **\@CurrentIteration**, then new work items are added to the current iteration. The scope decreases as the Iteration Path is modified to another sprint, or work items are completed.|
| **Ideal Trend** | The ideal burndown rate for the sprint calculated from the number of work items, days in the sprint, and number of working days. |

Because individual team members might only update their work items once a week or every few days, there's usually a stair-case burndown pattern.

>
::: moniker-end

::: moniker range="< azure-devops-2020"

The in-context sprint burndown report is based on the tasks and Remaining Work estimates that you define and update throughout the sprint cycle. For details, see [Sprint planning](../../boards/sprints/assign-work-sprint.md) and [taskboard](../../boards/sprints/task-board.md). To open the sprint burndown chart, see [Open sprint burndown chart](#open-chart).

:::row:::
   :::column span="1":::

   A healthy sprint burndown chart looks something like this. The *Ideal Trend* line connects the two points:

   - **(1)** Team's total capacity at the start of the sprint.  
   - **(2)** 0 Remaining Work at the end of the sprint.

   The slope represents the rate at which the team needs to burn down work to finish the sprint on time.

   The actual graph, the blue area, represents the total amount of planned sprint work and how it changes throughout the course of the sprint. The blue area corresponds to the sum of all Remaining Work set for all sprint tasks, and possibly bugs, that have the current sprint as their iteration path.  

   :::column-end:::
   :::column span="2":::

   :::image type="content" source="media/burndown/ALM_SB_IntroHealthyChart.png" alt-text="Screenshot of a healthy sprint burndown chart.":::
   :::column-end:::
:::row-end:::

::: moniker-end

## The Sprint Burndown widget

::: moniker range=">= azure-devops-2020"

In the widget catalog, you find two versions of the Sprint Burndown widget: the Analytics-based **Sprint Burndown** and **Sprint Burndown (Legacy)**, which is built from the work tracking data store.  

### Sprint Burndown widget

The Analytics-based Sprint Burndown widget provides an easy way to monitor progress for a team by showing work remaining for a given sprint. Work remaining is the vertical axis and time is the horizontal axis. You can define remaining work based on Stories or Tasks, and by counting the work items or summing a field.

:::image type="content" source="media/sprint-burndown/sprint-burndown-widget.png" alt-text="Screenshot shows the Sprint Burndown widget, which displays a graph of the burndown.":::

| Element | Description |
|:--------|:------------|
| **Date range** | The  start and end date of the sprint. |
| **Tasks Remaining** | The number of tasks remaining in the sprint. If you choose a different work item type the remaining number of those work items is shown. |
| **Completed** | The percentage of work completed based on original scope. Select **Completed** to see the full list of completed work items. |
| **Average burndown** | Average work completed. |
| **Total Scope Increase** | Shows the change in how much work from the original scope since the burndown started. The example shows that four work items were added to the sprint. |
| **Remaining** | The number of work items active or in progress. The example shows 15 active items are remaining in the sprint. |
| **Total Scope** | The total number of work items in the sprint including closed work items. If the team's default iteration is the **\@CurrentIteration**, then new work items are added to the current iteration. The scope decreases as the Iteration Path is modified to another sprint, or work items are completed.|
| **Ideal Trend** | The ideal burndown rate for the sprint calculated from the number of work items, days in the sprint, and number of working days. |


The charts provide useful metrics to help you answer the question: *Are we on track to complete this set of work by the end a sprint?*

- Percentage work complete
- Number of work items not estimated, if using a field other than Remaining Work
- Average burndown
- Total scope increase

### Sprint Burndown (Legacy) widget

The **Sprint Burndown (Legacy)** widget adds a chart based on Remaining Work defined for tasks in a team's current sprint. Select this version when you don't have access to Analytics. Configuration options include team selection, and widget size.

:::image type="content" source="media/burndown/sprint-burndown-legacy-devops.png" alt-text="Screenshot shows the Sprint Burndown Legacy widget, which shows a burndown chart.":::

If your dashboard already has a legacy version available, you can easily upgrade the widget by editing the widget's configuration, and checking **Try the new version now**. You can always go back to the legacy version by unchecking the box.

::: moniker-end

::: moniker range="< azure-devops-2020"

The **Sprint Burndown** widget adds a chart based on Remaining Work defined for tasks in the team's current sprint. There are no configuration options for this widget.

:::image type="content" source="media/burndown/sprint-burndown-widget-no-config.png" alt-text="Screenshot shows the Sprint Burndown Legacy widget configuration dialog.":::  

::: moniker-end

## Prerequisites

[!INCLUDE [prerequisites](../includes/analytics-widgets-prerequisites.md)]

## Team activities to track tasks and Remaining Work

::: moniker range=">= azure-devops-2020"

To monitor sprint burndown, your team must [schedule sprints](../../boards/sprints/define-sprints.md) and [assign work to those sprints](../../boards/sprints/assign-work-sprint.md).

If you want to monitor sprint burndown based on tasks and Remaining Work, your team must carry out these extra actions.  
::: moniker-end

::: moniker range=" azure-devops-2019"
To monitor sprint burndown, your team must [schedule sprints](../../boards/sprints/define-sprints.md) and [assign work to those sprints](../../boards/sprints/assign-work-sprint.md). For sprint burndown charts to show meaningful data, your team must carry out these extra actions.  
::: moniker-end

### Required activities

- Define and estimate tasks for each product backlog item that you're working on in the sprint. If you work from your team's backlog and taskboard, the items you create are automatically assigned to the current sprint (Iteration) and to your team's default Area Path. For more information, see [Add tasks to backlog items to support sprint planning](../../boards/sprints/add-tasks.md).
- Update Remaining Work for each sprint task as work progresses. For more information, see [Update tasks during the sprint cycle](../../boards/sprints/task-board.md#update-tasks).

### Recommended activities

- Define tasks that take a day or less to complete to decrease the effect of poor estimates.  
- Don't divide tasks into subtasks. If you divide a task into subtasks, specify hours only for the subtasks. These hours are rolled up as summary values for the parent task.
- Update Remaining Work daily or several times within a week to support monitoring and achieve a smoother burndown chart.  
- At the end of the sprint, update the task status of completed tasks and determine how to handle incomplete tasks.  

<a id="empty-chart">  </a>

### Empty sprint burndown chart

If your sprint burndown chart appears empty, check these points:

- Have you assigned tasks to the sprint associated with the chart?
- Have you assigned Remaining Work to the tasks assigned to the sprint?
- Are the parent work items of the tasks assigned to the same sprint? If not, the tasks might appear in another sprint associated with the parent item.

<a id="open-chart">  </a>

## Open a Sprint backlog

You view the in-context sprint burndown report from a team's Sprint backlog.

::: moniker range=">= azure-devops-2020"

1. From your web portal, open your team's sprint backlog.

   1. Check that you selected the right project.
   1. Select **Boards>Sprints** and select the correct team from the team selector menu.
   1. Select **Backlog**.

    :::image type="content" source="../../boards/sprints/media/add-tasks/open-sprint-backlog-s155-co.png" alt-text="Screenshot shows where you can select Backlog in Azure Boards." lightbox="../../boards/sprints/media/add-tasks/open-sprint-backlog-s155-co.png":::

    To select another team, open the selector and select a different team or select the **View Sprint directory** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

    :::image type="content" source="../../boards/sprints/media/add-tasks/team-selector-sprints-agile.png" alt-text="Screenshot shows the option to select another team in Azure Boards.":::

1. To select a different sprint than the one shown, open the sprint selector and select the sprint you want.

    :::image type="content" source="../../boards/sprints/media/add-tasks/select-specific-sprint-agile.png" alt-text="Screenshot shows the option to select another sprint in Azure Boards.":::

    The system lists only those sprints that have been selected for the current team focus. If you don't see the sprints you want listed, select **New Sprint** from the menu, and then select **Select existing iteration**. For details, see [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md).

::: moniker-end

::: moniker range="azure-devops-2019"

1. From your web browser, open your team's sprint backlog.

   1. Check that you selected the right project.
   1. Select **Boards>Sprints** and select the correct team from the team selector menu.
   1. Select **Backlog**.

    :::image type="content" source="../../boards/sprints/media/add-tasks/open-sprints-backlog-agile.png" alt-text="Screenshot shows where you can select Backlog in Azure Boards.":::

    To select another team, open the selector and select a different team or select the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all sprints** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

    :::image type="content" source="../../boards/sprints/media/add-tasks/team-selector-sprints-agile.png" alt-text="SScreenshot shows the option to select another team in Azure Boards 2019.":::

1. To select a different sprint than the one shown, open the sprint selector and select the sprint you want.

    :::image type="content" source="../../boards/sprints/media/add-tasks/select-specific-sprint-agile.png" alt-text="Screenshot shows the option to select another sprint in Azure Boards 2019.":::

    The system lists only those sprints that have been selected for the current team focus. If you don't see the sprints you want listed, then select **New Sprint** from the menu, and then select **Select existing iteration**. For details, see [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md).

::: moniker-end

<a id="view-context-report"></a>

## View the in-context Burndown Trend report

::: moniker range=">= azure-devops-2020"

1. To open the Sprint burndown report, select **Analytics**.

   :::image type="content" source="media/burndown/open-analytics.png" alt-text="Screenshot shows the Azure DevOps Analytics tab for sprints.":::

1. Use the interactive controls to select from the following options:  

   1. The **Start Date** and **End Date** of the sprint. These dates default to the team's current iteration sprint dates.
   1. The **Backlogs/Work Items** to burn down on, either the product backlog (Stories, Issues, Product Backlog Items, or Requirements) or Tasks backlog to use. Your selection impacts the options available for the **Burndown on** menu.  
   1. The **Burndown on** field to use to calculate burndown, either a Count of Work Items or a sum of a field, such as Story Points, Effort, or Size.  
   1. Check or uncheck **Show non-working days**. Nonworking days appear as gray bars in the background when enabled. Default nonworking days are set for a team and for a team's sprint through the capacity page. For more information, see [Set sprint capacity](../../boards/sprints/set-capacity.md).  

   Select **Reset** to reset the controls to the default options. By default, the dates are set to the selected sprint. Changes to the start and end dates don't change any sprint date definitions.

1. If you don't track Remaining Work in tasks, you can view burndown based on a count of work items or tasks. To show a summary of the data for a specific day, hover over any point on the chart.

### [Sum of Remaining Work](#tab/remaining-work)

When you choose to view the **Tasks backlog** and **Sum of Remaining Work**, the blue area shows the sum of Remaining Work per day for those tasks that are still active or in progress. As the Remaining Work is updated, the chart indicates the rate of burndown. The **Scope** trend line indicates the addition of Remaining Work after the start of the sprint. The **Ideal** trend line indicates the ideal burndown rate for the sprint. **Capacity** lines are only shown when the team configured capacity.  

:::image type="content" source="media/burndown/analytics-burndown-remaining-work-s159.png" alt-text="Screenshot shows Burndown trend based on Remaining Work." lightbox="media/burndown/analytics-burndown-remaining-work-s159.png":::

### [Count of Work Items](#tab/work-items)

When you choose to view the **Count of Work Items**, the blue area shows the count of work items which are still active or in progress. Work items could be stories, backlog items, requirements, or tasks depending on the backlog selected. The **Scope** trend line indicates when new work items are added after the start of the sprint. The **Ideal** trend line indicates the ideal burndown rate for the sprint.

:::image type="content" source="media/burndown/analytics-burndown-count-of-work-items-s159.png" alt-text="Screenshot shows Burndown trend based on Count of Work Items." lightbox="media/burndown/analytics-burndown-count-of-work-items-s159.png":::

### [Sum of Story Points](#tab/story-points)

When you choose to view the **Stories backlog** and **Sum of Story Points**, the blue area shows the sum of Story Points for all User Stories that are still active or in progress. The **Scope** trend line indicates when Story Points are added after the start of the sprint. The **Ideal** trend line indicates the ideal burndown rate for the sprint.

:::image type="content" source="media/burndown/analytics-burndown-story-points.png" alt-text="Screenshot shows Burndown trend based on Story Points." lightbox="media/burndown/analytics-burndown-story-points.png":::

* * *

> [!NOTE]  
> The options for the sum fields depend on the numeric fields defined for task and requirement category work item types. The most common fields used to show the burndown trend are:
>
> - Count of work items  
> - Sum of [Story Points, Effort, or Size](../../boards/queries/query-numeric.md#fields)
> - Sum of [Remaining Work](../../boards/queries/query-numeric.md#fields)

The selections you make are only set for you, and persist across sessions until you change them.

::: moniker-end

::: moniker range="azure-devops-2019"

:::image type="content" source="media/burndown/open-burndown-chart-agile.png" alt-text="Screenshot shows how to open sprint burndown chart for Azure DevOps 2019.":::

::: moniker-end

::: moniker range=">= azure-devops-2020"

## Add the report to a dashboard

1. To add the report to a dashboard, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Copy to Dashboard**.

   :::image type="content" source="media/add-charts/add-analytics-chart-abbreviated.png" alt-text="Screenshot shows the Analytics in-context report, Copy to dashboard option.":::

1. Select the dashboard and select **OK**.  

::: moniker-end

## Add the Sprint Burndown widget to a dashboard

::: moniker range=">= azure-devops-2020"

You can add the Sprint Burndown widget to a dashboard and select the team whose progress you want to monitor. You configure these widgets for one or more teams.

1. If you need to [add the Sprint Burndown widget to your dashboard](add-widget-to-dashboard.md), do that now.

   You can filter the **Add Widget** dialog with *sprint burndown* to quickly locate the two widgets available to you.

   :::image type="content" source="media/burndown/add-sprint-burndown-widget-devops.png" alt-text="Screenshot shows the Add Widget dialog, filter by sprint burndown.":::

1. To configure the widget, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and then select **Configure**.

   :::image type="content" source="media/add-widgets/configure-widget.png" alt-text="Screenshot shows the Configure menu item.":::
::: moniker-end

::: moniker range="azure-devops-2019"

1. Select :::image type="icon" source="media/icons/edit-icon.png" border="false"::: **Edit** to add the Sprint burndown widget to your team dashboard.

   The widget catalog automatically opens. Drag the Sprint Burndown widget onto the dashboard.

1. When you finish your additions, select  **Done Editing**.

   The sprint burndown chart for the team's current sprint is added to the dashboard. There's no configuration option associated with this widget.

   :::image type="content" source="media/burndown/sprint-burndown-widget-no-config.png" alt-text="Screenshot shows the Sprint Burndown Legacy widget.":::

::: moniker-end

::: moniker range=">= azure-devops-2020"

## Configure the Analytics-based Sprint Burndown widget

1. To configure the widget, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select the **Configure** option.

   :::image type="content" source="media/sprint-burndown/sprint-burndown-config.png" alt-text="Screenshot shows the Sprint Burndown widget Configuration dialog.":::  

1. Modify the **Title** of the widget and select your preferred **Size**. The Sprint Burndown widget can scale up to 10x10.

1. Make the following selections:

   - **Team**: Select the **Team** you want to track.
   - **Backlogs and work items**: Select the work items to include in your burndown. You can select to any backlog or a specific work item type.
   - **Burndown on**: Choose how you want to burndown. You might burndown by count of work items or a sum based on a selected field.  
   - **Select iteration**: You can select **\@CurrentIteration**, or a specific iteration.  
   - **Time period**: If you selected **\@CurrentIteration**, these dates aren't editable. They're automatically the start and end date of the current iteration. If you selected a specific iteration, you can customize the start/end date for the burndown chart.

1. **Advanced features**:  Select the following options that you want to add to your chart.

   - **Show total scope**: Displays both the historical and projected scope increase.  
   - **Show non working days**: Displays nonworking days on the burndown. When displayed, nonworking days are shaded.  
   - **Plot remaining using work item type color**: Displays remaining work based on the work item type color, rather than the default blue color. If multiple work items are included, then it stacks colors by work item type.  

::: moniker-end

::: moniker range=">= azure-devops-2020"

## Configure the Sprint Burndown (Legacy) widget

To configure the widget, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select the **Configure** option.

:::image type="content" source="media/sprint-burndown/sprint-burndown-legacy-config.png" alt-text="Screenshot shows the Sprint Burndown Legacy widget configuration dialog.":::  

If your dashboard already has a legacy version available, you can easily upgrade the widget by editing the widget's configuration. Select **Try the new version now**. You can always go back to the legacy version by unselecting the option.

::: moniker-end

<a id="past-sprints">  </a>

## Current and past sprint burndown charts

As you complete each sprint, the system maintains a history of your activity.

To view a past sprint and its burndown chart, select the sprint from the Sprint selector.

:::image type="content" source="media/burndown/select-past-sprint.png" alt-text="Screenshot shows here you can select a past sprint from the sprint selector.":::

You can review sprint burndown in-context reports to show the team patterns in execution. The burndown charts maintain a record of the team's ability to plan and estimate.  

::: moniker range=">= azure-devops-2020"

#### [May](#tab/may)

:::image type="content" source="media/burndown/may.png" alt-text="Screenshot shows the May burndown chart." lightbox="media/burndown/may.png":::

#### [June](#tab/june)

:::image type="content" source="media/burndown/june.png" alt-text="Screenshot shows the June burndown chart." lightbox="media/burndown/june.png":::

#### [July](#tab/july)

:::image type="content" source="media/burndown/july.png" alt-text="Screenshot shows the July burndown chart." lightbox="media/burndown/july.png":::

::: moniker-end

::: moniker range="< azure-devops-2020"

| Sprint 1   |  Sprint 2  | Sprint 3 |  
|------------|------------|----------|  
|:::image type="content" source="media/burndown/ALM_SB_Chart_S1_225.png" alt-text="Screenshot shows the chart for Sprint 1."::: |:::image type="content" source="media/burndown/ALM_SB_Chart_S2_225.png" alt-text="Screenshot shows the chart for Sprint 2."::: |:::image type="content" source="media/burndown/ALM_SB_Chart_S3_225.png" alt-text="Screenshot shows the chart for Sprint 3."::: |

::: moniker-end

Teams can find it useful to review these reports periodically during their sprint retrospectives. It can spark useful discussions and lead to setting one or more sprint goals, such as:

- How does your projected velocity match up to your actual velocity?
- How can you more accurately determine how much your team can accomplish in a sprint?
- How can you complete work at a more regular pace throughout the sprint?

## Related articles

> [!div class="nextstepaction"]
> [Burndown and burnup guidance](burndown-guidance.md)

- [Define iteration paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 
- [Assign backlog items to a sprint in Azure Boards](../../boards/sprints/assign-work-sprint.md)
- [Add tasks to backlog items](../../boards/sprints/add-tasks.md)
- [Update and monitor your Taskboard](../../boards/sprints/task-board.md)
- [Understand scrum and best practices](../../boards/sprints/best-practices-scrum.md)
- [Understand the Scrum Burndown Chart](https://www.methodsandtools.com/archive/scrumburndown.php)
