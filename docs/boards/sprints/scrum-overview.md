---
title: Scrum work processes overview
titleSuffix: Azure Boards 
description: Learn about Scrum work practices, work tracking, and progress and trends monitoring in Azure Boards.
ms.custom: boards-sprints, engagement-fy23
ms.service: azure-boards 
ms.author: chcomley
author: chcomley
ms.topic: overview
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 07/06/2026
#customer intent: As an Azure Boards project administrator, I want to understand Scrum practices so that I can plan, assign, and track work for my team using specific iteration paths.
---

# Scrum practices in Azure Boards 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Scrum methods use *iteration paths*, or *sprints*, to plan work for teams within specific time periods and cadences. Useful tools for implementing Scrum practices in Azure Boards include filtered backlogs and boards based on iteration paths. Use Scrum to schedule and plan sprints, update your board, and monitor sprint burndown.

For an introduction to Scrum, see [What is Scrum?](/devops/plan/what-is-scrum)

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Scrum in Azure Boards

Scrum practices in Azure Boards center around **iteration paths** (sprints) that organize work into time-boxed periods. Key Scrum components include:

- **Sprint ceremonies** — Regular meetings that structure the sprint cycle
- **Capacity planning** — Team availability and workload management
- **Sprint tracking** — Task boards and burndown charts for progress visibility
- **Velocity forecasting** — Historical metrics to predict future capacity

For step-by-step setup guidance, see [Schedule sprints](define-sprints.md) and [Set capacity for the team and team members](set-capacity.md).

## Sprint ceremonies and timeline

A typical two-week sprint includes the following ceremonies:

| Ceremony | When | Duration | Purpose |
|----------|------|----------|---------|
| **Sprint Planning** | Start of sprint | 2 hours | Commit to work items and set sprint goal |
| **Daily Standup** | Every workday | 15 minutes | Sync on progress, blockers, and plan for the day |
| **Sprint Review** | End of sprint | 1 hour | Demonstrate completed work to stakeholders |
| **Sprint Retrospective** | End of sprint | 1 hour | Reflect on process and identify improvements |

For guidance on running effective ceremonies, including retrospectives and end-of-sprint activities, see [Scrum ceremonies and best practices](best-practices-scrum.md).

## Sprint backlogs

Sprint backlogs and boards provide filtered views of work items for teams assigned to specific iteration paths or sprints. Define sprints for a project and then select them for teams.

Define sprints for your project, then select them for each team. From the team backlog, you can map work to an iteration path by using drag-and-drop, and then view the work for each sprint in a separate backlog. The sprint backlog contains a filtered subset of backlog items whose iteration path corresponds to the chosen sprint.

:::image type="content" source="../work-items/media/view-add/view-sprint-backlogs.png" alt-text="Screenshot of a sprint backlog.":::

If you work with several teams and each team wants its own backlog view, you can [create more teams](../../organizations/settings/add-teams.md). Each team then gets access to its own set of Agile tools that filter work items to the team's default area path and iteration path.

<a id="ts-sprints"></a>
### Planning view
 
Each sprint you select for your team provides access to a sprint backlog, board, and other Agile tools for planning and tracking work. The **Planning** view provides an overview of your sprint planning.

From the project backlog or any sprint backlog page, select the **View options** icon and then select **Planning**. The sprints selected for your team appear in a side pane.

To select a sprint backlog, choose one of the sprint links from the **Planning** pane, or choose it from the sprint selector on a sprint backlog page.

:::image type="content" source="media/overview/select-a-sprint-new-nav.png" alt-text="Screenshot showing how to select a sprint.":::

If the **Planning** pane or sprint dropdown list doesn't display any sprints, add sprints or select existing sprints for your team. For more information, see [Define sprints](define-sprints.md).

> [!NOTE]
> The Planning pane shows only the current sprint and the next 10 future sprints, even if the team has more sprints selected.

## Capacity tracking

After you [define iteration paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md), start using Agile capacity planning tools to plan the work your team can commit to during a sprint. The capacity planning and capacity bar tools support this task.

### Capacity planning

Use the team capacity tool under the **Capacity** tab to set individual team member capacity and days off, and holidays or shared days off for the entire team. When you set team capacity, the team knows the exact total number of work hours or days they have for each sprint. For more information, see [Set capacity for the team and team members](set-capacity.md#set-capacity-for-the-team-and-team-members).

:::image type="content" source="media/team-capacity-planning-tool.png" alt-text="Screenshot of Team capacity planning tool.":::

### Capacity bars

The **Work details** pane shows capacity bars for the overall team, by **Activity**, or by **Assigned to** for each team member working during a sprint. Use capacity bars to quickly see who is over, at, or under capacity for the sprint.

To see capacity bars, select the **View options** icon and then select **Work details**. As you add individual team members and assignments in the planning tool, a capacity bar appears and updates for that individual. Team and individual capacity always reflect capacity from the current day until the end of the sprint.

Capacity bars update with each of these activities:

- Work is assigned with nonzero remaining work.
- Remaining work changes.
- Dates change within the sprint cycle.

:::image type="content" source="media/overview/capacity-bars.png" alt-text="Screenshot of capacity bars.":::

## Task board and burndown chart

During a sprint, use the task board and sprint burndown chart to track progress. The sprint burndown chart provides an at-a-glance visual to determine if your team is on track to meet its sprint plan.
 
### Task board

Your [task board](task-board.md) provides an interactive progress record for work required to complete the sprint. During the sprint, update the status of tasks and the remaining work for each task. Update tasks daily or several times a week to yield a smoother burndown chart.

:::image type="content" source="media/overview/board.png" alt-text="Screenshot of Taskboard.":::

### Burndown chart

Use the [sprint burndown chart](../../report/dashboards/configure-sprint-burndown.md) to track progress as your team completes the work they estimated during planning. The burndown chart helps you mitigate risk and check for scope creep throughout the sprint cycle.

On the burndown chart, the ideal trend line always indicates a steady burndown, while the blue area represents what's actually occurring. This area shows the buildup of work as team members add tasks and the reduction of work as team members complete their tasks.

:::image type="content" source="media/overview/chart.png" alt-text="Screenshot of Sprint burndown chart.":::

<a id="velocity-forecast">  </a>
##  Velocity and forecast tools

After several sprints, use the [Velocity chart](../../report/dashboards/team-velocity.md) and [Forecast tool](forecast.md) to help estimate work your team can complete in future sprints.

### Velocity chart

**Velocity** is the sum of story points (or size values) for work items your team completes during a sprint. For example, if your team completes 5 story points in Sprint 1 and 8 story points in Sprint 2, your average velocity is 6.5 points. Use average velocity to forecast how much work your team can accomplish in future sprints.

Select the **Velocity** chart on the **Analytics** tab of the team **Backlog** page. In the chart, light blue bars show the total amount of planned effort (based on story points or work item size) for a given sprint. The green areas indicate the total estimated effort for completed work items. The dark blue areas correspond to the estimated effort for items not yet completed.

:::image type="content" source="media/velocity-chart.png" alt-text="Screenshot of Velocity chart.":::

Velocity varies depending on team capacity over sprints, but over time the **Average Velocity** should be reliable for forecasting against the full backlog. To get more reliable velocity metrics, minimize the variability of backlog item sizes, effort, and story points.

### Forecast tool

The forecast tool helps you determine how much work your team can complete within a sprint, given a specified team velocity. On the team **Backlog** page, select the **View options** icon and then set **Forecasting** to **On**.

On the forecast chart, set the velocity to different values to get an idea of how many and which items you can complete within a sprint. By setting a velocity, you can see which items are within scope for the set of sprints the team selected. In the following example, setting a velocity of *15* indicates that it takes three sprints to complete the work shown.

:::image type="content" source="media/forecast-tool.png" alt-text="Screenshot of Forecast tool.":::

<a id="sprint-scope-change"></a>
## Sprint scope changes

The burndown chart shows **Total Scope Increase** at the upper right, providing visibility into mid-sprint scope additions. You can also query work items added to or removed from a sprint after its start. For detailed query procedures, see [Query by date or current iteration](../queries/query-by-date-or-current-iteration.md).

## Next step

> [!div class="nextstepaction"]
> [Schedule sprints](define-sprints.md) 

## Related content 

- [Sprints and Scrum key concepts in Azure Boards](scrum-key-concepts.md)
- [Use backlogs to manage projects](../backlogs/backlogs-overview.md)
- [About work items and work item types](../work-items/about-work-items.md)
- [Define sprints](define-sprints.md)
