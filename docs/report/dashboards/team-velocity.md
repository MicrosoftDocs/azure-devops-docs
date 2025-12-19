---
title: View and configure team velocity
titleSuffix: Azure DevOps 
description: Learn how to calculate and track team velocity across sprints using the in-context Analytics report or Velocity widget chart in Azure DevOps.
ms.custom: dashboards   
ms.subservice: azure-devops-analytics
ms.assetid: 31CBF001-CFF2-49CF-97A1-FDFFEFDDF3AB
ms.topic: tutorial
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 12/01/2025
---

# View and configure team velocity

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Velocity metrics provide valuable insights that help teams plan and [forecast](../../boards/sprints/forecast.md) sprints, and evaluate how accurately they estimate and meet planned commitments. These metrics indicate how much work a team can complete during a sprint, based on either **the count of work items completed** or **the sum of estimates** for effort (product backlog items), story points (user stories), or size (requirements). Use velocity to aid in determining team capacity, but don't confuse it with key performance indicators.

## Prerequisites  

[!INCLUDE [temp](../includes/analytics-widgets-prerequisites.md)]

> [!TIP]
> The images in this article might differ from what you see in your web portal. These differences can be due to updates to your web app, options enabled by you or your admin, and the process chosen when creating your project (Agile, Basic, Scrum, or CMMI).

## Understand velocity numbers

**Velocity** represents the amount of work your team completed in past sprints, which helps predict future capacity:

- **When tracking by count**: Velocity shows the number of work items (user stories, bugs, tasks) completed per sprint
- **When tracking by sum**: Velocity shows the total story points, effort hours, or size estimates completed per sprint

For example, if your team completed user stories worth 25 story points in Sprint 1, 30 story points in Sprint 2, and 28 story points in Sprint 3, your average velocity is approximately 28 story points per sprint. This average helps you plan how much work to commit to in future sprints.

## How Azure DevOps handles velocity calculation

Azure DevOps follows agile best practices for velocity calculation:

> [!IMPORTANT]
> **Velocity is always counted in the sprint when work is completed**, regardless of which sprint the work item was originally planned for or its current iteration path assignment. This approach aligns with standard agile practices that emphasize measuring actual delivery over planned commitments.

### Work item movement scenarios

- **Moving incomplete work between sprints**: When you move an incomplete work item from one sprint to another (by changing its iteration path), the work item continues to appear as **Incomplete** in its new sprint until completed.
- **Completing work in a different sprint**: If you complete a work item in Sprint 3 even though it was originally planned for Sprint 1, the velocity credit goes to Sprint 3, when the work was completed.
- **Iteration path vs. completion date**: The completion date determines which sprint gets velocity credit, not the current iteration path assignment.

### Impact of changing iteration paths

When you change the iteration path of a work-in-progress (WIP) work item:

**Velocity metrics:**
- Moving a WIP item doesn't affect velocity until completed
- Velocity credit goes to the sprint where the item is completed
- The item remains counted as "Planned" for its original sprint

**Completed Late metrics:**
- Late calculation compares completion date to the **current** iteration's end date
- Moving an item to a later sprint can change its late classification

**Example:** Work item planned for Sprint 1 (ends March 15), moved to Sprint 2 (ends March 30), completed March 25:
- **Planned**: Sprint 1 (original)
- **Velocity**: Sprint 2 (where completed)  
- **Late status**: Not late (completed before Sprint 2 end date)

> [!TIP]
> Establish team practices for moving work items between sprints to minimize confusion in velocity tracking.

This calculation method ensures that:
- Teams get accurate velocity measurements based on actual delivery capacity
- Sprint velocity reflects work genuinely completed during that time period
- Future sprint planning uses realistic capacity data rather than planned commitments

## Velocity chart types

You can choose between two Velocity charts: the in-context Velocity chart from the Backlogs page and the Velocity widget for dashboards. Both charts help you quickly understand the workflow state categories described in the following table.

Items in the *Proposed* or *Resolved* states are excluded from the **Completed**, **Completed Late**, and **Incomplete** calculations. For more information, see [How workflow category states are used in Azure Boards](../../boards/work-items/workflow-and-state-categories.md). Your selections are personal and persist across sessions until changed.

> [!IMPORTANT]
> Only **Planned** data uses historical snapshots. All other states (**Incomplete**, **Completed**, **Completed Late**) reflect current work item data.

<a id="state-descriptions-table"></a>

|Workflow state|Description|
|---------|---------|
|**Planned**|Work items assigned to a sprint by end of day 1, regardless of their current state or final completion location. Once counted as planned, items remain in this category for the original sprint even if moved later. A work item can be counted as planned in multiple sprints if it meets the day 1 assignment rule for each sprint.|
|**Incomplete**|Work items currently assigned to the sprint with **In Progress** state. Excludes items in Proposed, Resolved, or Completed states.|
|**Resolved**|Work items in **Resolved** state. Not plotted unless configured to treat Resolved items as Completed.|
|**Completed**|Work items in **Completed** state with a completion date on or before the sprint end date. Velocity credit goes to the sprint when the item was completed, regardless of its original planned sprint or current iteration path.|
|**Completed Late**|Work items in **Completed** state with a completion date after the sprint end date. These items contribute velocity to the sprint when they were completed.|

> [!NOTE]
> When configured to treat Resolved items as Completed, moving a Resolved item to Completed state after the sprint end date changes its classification from Completed to Completed Late.

Later in this article, learn how to [open the Velocity in-context report](#velocity-chart) or [configure the Velocity widget](#configure-the-velocity-widget).

#### [In-context Velocity chart](#tab/in-context)

:::image type="content" source="media/velocity/analytics-velocity-azure-devops.png" alt-text="Screenshot of the web portal, in-context Velocity chart showing six sprints of in progress and completed work.":::

#### [Velocity widget](#tab/widget)

:::image type="content" source="media/commerce-team-velocity-eight-iterations.png" alt-text="Screenshot of an example Velocity widget with eight iterations.":::

***

You can configure each chart in the following ways: 
- Sum of [Effort, Story Points, size fields](../../boards/queries/query-numeric.md), or other supported numeric fields assigned to backlog items.
- Count of work items on the backlog.
- Number of iterations.  

The widget offers more configuration options. For more information, see [Configure and view Velocity charts](team-velocity.md).

<a id="velocity-chart"></a>

## View the Velocity in-context report   

Velocity reports are available for both product and portfolio backlogs. Each report includes interactive controls, allowing users to customize the view to their specific interests.

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).
2. Select **Boards** > **Backlogs** > **Analytics** to open the Velocity report for your product or portfolio backlog. 

   :::image type="content" source="media/cfd/analytics-summary-cfd-velocity.png" alt-text="Screenshot showing Backlogs, open Analytics.":::

3. To change to a different backlog, choose from the backlog selector, and then select **View full report** for Velocity.  

4. Use the interactive controls to select the count or sum field and number of iterations. Select **Custom iterations** to specify any number of iterations between 1 and 15. 
   
   If your team doesn't complete a sprint or if you're working on items before a sprint start date, there's no data to analyze and forecast. The following message might display: *Set iteration dates to use this widget*. To resolve this situation, set an iteration date range to include present date or wait for the sprint to start. 

	Hover over a column area to show a summary of planned and completed work items. For example, for the 07_2019 sprint, 131 items are planned.

   :::image type="content" source="media/velocity/analytics-velocity-azure-devops.png" alt-text="Screenshot of Velocity Analytics report.":::

   For more information, see the [workflow state descriptions](#state-descriptions-table) mentioned earlier in this article.

5. To add the report to a dashboard, select the :::image type="icon" source="media/icons/actions-icon.png" border="false"::: actions icon and select **Copy to Dashboard**.

   :::image type="content" source="media/add-charts/add-analytics-chart-abbreviated.png" alt-text="Screenshot of Analytics in-context report, Copy to dashboard option.":::
	
6. Select the dashboard and select **OK**.  

7. To return to the Analytics summary, select the :::image type="icon" source="../../media/icons/back-arrow.png" border="false"::: back arrow.

## Configure the Velocity widget    

You can only configure your Velocity widget for a single team. If you want to view the velocity for several teams, then you must configure a portfolio management team that rolls up from several teams. For more information, see [Add teams](../../organizations/settings/add-teams.md).   

If you haven't yet, [Add the Velocity widget to your dashboard](./add-widget-to-dashboard.md).

Complete the following steps to configure the Velocity widget.

1. Select the ![Actions icon](../media/icons/actions-icon.png) actions icon and select the **Configure** option to open the configuration dialog.

   :::image type="content" source="media/velocity/configure-dashboard-sequence.png" alt-text="Screenshot showing sequence of highlighted buttons to configure Velocity dashboard."::: 

	Modify the title, select the team, and then select either the backlog level or work item type to track. Select whether you want to track a count of work items or a sum of a numeric field. The most common summed field is that of Effort, Story Points, or Size.     

   :::image type="content" source="media/team-velocity-config-dialog.png" alt-text="Screenshot showing Configure dialog, Velocity widget.":::

2. Specify the number of sprints you want to view. The default is 6 and the maximum is 15.    

3. (Optional) Select the check boxes to show additional information for work completed later than planned for each sprint. 

	- **Display planned work for iterations:** Check this box to display the amount of work planned for an iteration at the start of the iteration, which is useful for comparing your planned work to actual deliverables. By default, the count of planned work begins on the start date of the iteration.
	- **Days past start date of iteration when planned work is final**: Specify the number of days past the start date for counting planned work. For example, if the first two days of an iteration are for planning, then you can enter `3`, and planned work gets counted on the third day. For example, if the iteration starts on `01/01/2024`, and three backlog items are assigned to the iteration on `01/01/2024` end-of-day, then those three backlog items are considered as Planned. If your team doesn't complete planning until a few days into the iteration, then you can update the Days past start date of iteration when planned work is final.  
   - **Highlight work completed late:** Check this box to display work items marked complete after the iteration end date, which is considered to be completed late and show as light green. Highlighting work completed late is useful for spotting a trend where work items are marked complete after the iteration is complete.
   - **Days past end date of iteration after which work is late**: Specify the number of days past which you consider a work item late if its status is still new or is in progress. For example, entering three days gives the team 3 days after the end of an iteration to mark work items complete or done, before considered late.

4. Select **Save**. The following image shows Velocity based on Story Points and eight sprints of data. 
   
   :::image type="content" source="media/commerce-team-velocity-eight-iterations.png" alt-text="Screenshot of example Velocity widget, eight iterations.":::

For more information about **Planned**, **Completed**, **Completed Late**, and **Incomplete** states, see the [State descriptions](#state-descriptions-table) mentioned earlier in this article.

## Required and recommended tasks for using Velocity charts 
 
For your team to gain the greatest utility from the Velocity charts, follow these required and recommended tasks.  

### Required tasks

- [**Define iteration paths (sprints) and configure team iterations**](../../organizations/settings/set-iteration-paths-sprints.md). Ensure sprints are of the same duration. 
- [**Define and estimate backlog items**](../../boards/backlogs/create-your-backlog.md#estimates). Items created from the team's backlog are automatically assigned to the current sprint and the team's default Area Path.  
- **Update the status of backlog items when work starts and completes**. Only items with a State of *In Progress* or *Done* appear on the Velocity chart or widget. 

### Recommended tasks

- **[Define and size backlog items](../dashboards/team-velocity.md)** for minimized variability.
- **Decide how your team [treats bugs](../../organizations/settings/show-bugs-on-backlog.md)**. If treated like requirements, bugs appear on the backlog and are included in the Velocity chart and forecasting.
- **[Set your team's area path](../../organizations/settings/set-area-paths.md)**. The forecast tool uses these settings to include or exclude items in area paths under the team's default.
- **Avoid creating a hierarchy of backlog items and bugs**. The board, Taskboards, and sprint backlog only show the last node in a hierarchy. Instead, maintain a flat list with parent-child links one level deep. Use **[Features to group requirements or user stories](../../boards/backlogs/organize-backlog.md)**.
- **Complete backlog items within their planned sprint when possible**. While Azure DevOps correctly handles cross-sprint completion, frequently moving work between sprints can affect team focus and sprint planning accuracy.
- **Update the status of completed backlog items at the end of the sprint**. Move incomplete items back to the product backlog for future sprint planning.
- **Minimize the size variability of backlog items for improved estimation accuracy**. Reducing variability increases the reliability of velocity metrics and forecast results. Estimates are best guesses by the team regarding the effort required to complete an item relative to others on the backlog.

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

## Add other teams

If each team wants their own backlog view, Velocity chart, and forecast tool, you can [add a new team](../../organizations/settings/add-teams.md). Each team has access to its own set of Agile tools, which filter work items to include only the assigned area paths and iteration paths [specific to that team](../../organizations/settings/about-teams-and-settings.md).

## Next steps

> [!div class="nextstepaction"]
> [Plan your sprint](../../boards/sprints/assign-work-sprint.md)

## Related articles

-  [Forecast your sprints](../../boards/sprints/forecast.md) 
-  [Set dashboard permissions](dashboard-permissions.md)
-  [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
-  [Configure a burndown or burnup widget](configure-burndown-burnup-widgets.md)
