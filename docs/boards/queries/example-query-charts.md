---
title: Example query charts in Azure Boards  
titleSuffix: Azure Boards
description: Learn about useful query charts to create and display on dashboards when working in Azure Boards.
ms.service: azure-devops-boards
ms.custom: boards-queries, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: sample
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 03/24/2026
---


# Example query charts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides ready-to-use query chart examples that you can adapt for your dashboards. Each example includes the query clauses and chart configuration so you can recreate them in your own project.

The examples are organized into three categories:

- **[Backlog hygiene](#backlog-hygiene)** — Spot unassigned, stale, or incomplete work items
- **[Status charts](#example-status-charts)** — Show current state of bugs, planned work, and blocked items
- **[Trend charts](#example-trend-charts)** — Track how bug counts and active work change over time

To create and configure query charts, see [Track progress with status and trend query-based charts](../../report/dashboards/charts.md). Keep these tips in mind when building the queries behind your charts:

- Use **Flat list of work items** — only flat-list queries support charts.
- Use **In** and **Not In** operators to group multiple work item types or states.
- Limit trend chart queries to 1,000 work items to avoid widget errors.
- Add grouping fields (**State**, **Assigned To**, **Iteration Path**, or custom fields) to your query clauses or column options.
- Save the query under **Shared Queries** before adding the chart to a dashboard.
- You can't group charts by **ID**, **Date-time**, **Plain Text**, **Rich-text**, or **Tags** fields. To group by tags, use the [Chart for Work Items widget](../../report/dashboards/configure-chart-work-items-widget.md) instead.

> [!NOTE]  
> Work item types and workflow states in these examples might differ from yours depending on the process your project uses. Replace *Fabrikam Team* with your team name and adjust filters as needed.

## Backlog hygiene

Review these queries periodically — typically at the start or end of a sprint — to keep your backlog healthy.

:::row:::
   :::column span="1":::
      **Query focus**
   :::column-end:::
   :::column span="3":::
      **Query clauses**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Unassigned work**: Work assigned to the current sprint but not assigned to a team member.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-no-assigned-to.png" alt-text="Screenshot of Query Editor, Assigned To field is blank for current iteration.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      **Active work not assigned to the current sprint** 
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-but-not-current-iteration.png" alt-text="Screenshot of Query Editor, Active but not assigned to current iteration.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      **Active work assigned to a past sprint**
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-past-iteration.png" alt-text="Screenshot of Query Editor, Active but assigned to a past iteration."::: 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Stale work**: Work items with no changes made in the last two to three months (query by **Changed Date**).
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-stale-work.png " alt-text="Screenshot of Query Editor, Active work not changed for past three months.":::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Ill-defined work**: Items missing **Description**, **Acceptance Criteria**, **Story Points**, or **Effort**.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-ill-defined-work.png " alt-text="Screenshot of Query Editor, Work with empty required fields.":::
   :::column-end:::
:::row-end:::

The following image shows all five charts on a team dashboard. To add charts, see [Add charts to a dashboard](../../report/dashboards/add-charts-to-dashboard.md#add-a-work-item-query-or-chart).

:::image type="content" source="media/example-queries/dashboard-backlog-hygiene-query-charts.png" alt-text="Screenshot of Dashboard with five query charts added.":::  

You can also use query tiles that show the total count for each query.

> [!TIP]  
> Query tiles are 1x1 widgets, while query charts are at least 2x2. To add query tiles, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 

:::image type="content" source="media/example-queries/dashboard-backlog-hygiene-query-tiles.png" alt-text="Screenshot of Dashboard with five query tiles added.":::  
 
## Example status charts 

Status charts show a point-in-time snapshot of work. The following examples show common queries and charts.

:::row:::
   :::column span="1":::
      **Query focus**
   :::column-end:::
   :::column span="3":::
      **Query clauses**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Planned work**: Work in the *New* or *Proposed* category state — a snapshot of items in the backlog.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-backlog-work.png " alt-text="Screenshot of Query Editor, Backlog work, not closed or removed.":::
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Active bugs**: Track bug counts and set goals to keep them under a target number.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-bugs.png " alt-text="Screenshot of Query Editor, Active bugs.":::  
	  From this query, you can create a chart grouped by assignment or state.  
      :::image type="content" source="media/example-queries/chart-active-bugs-by-state.png " alt-text="Screenshot of query chart, Active bugs by state.":::
      :::image type="content" source="media/example-queries/chart-active-bugs-by-assignment.png " alt-text="Screenshot of query chart, Active bugs by assignment.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      **Tagged work items**: Track work tagged for specific goals, milestones, or categories.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-work-tagged-across-project.png " alt-text="Screenshot of Query Editor, Active work across projects tagged with Web.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      **Blocked work**: Query for blocked items using a tag or custom field.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-work-tagged-as-blocked.png " alt-text="Screenshot of Query Editor, Active work tagged as blocked.":::
   :::column-end:::
:::row-end:::   



## Example trend charts 

Trend charts show how work item counts change over time. Configure them with a rolling time window (for example, 30 days).

:::row:::
   :::column span="1":::
      **Query focus**
   :::column-end:::
   :::column span="3":::
      **Query clauses and chart**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Bug trends over time by state** (last 30 days)
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-bugs.png " alt-text="Screenshot of Query Editor, Active bugs example.":::  
      :::image type="content" source="media/example-queries/chart-bug-trend.png " alt-text="Screenshot of Query chart, bug trend stacked area chart by state.":::
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Active work trends by state** (last 30 days)
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-backlog-work.png " alt-text="Screenshot of Query Editor, Backlog work, not closed or removed example.":::
      :::image type="content" source="media/example-queries/chart-active-work-trend.png " alt-text="Screenshot of Query chart, Active Backlog work, not closed or removed.":::
   :::column-end:::
:::row-end:::   


## Other useful widgets

These built-in dashboard widgets complement query charts for tracking progress:

- [Velocity](../../report/dashboards/team-velocity.md) 
- [Cumulative flow](../../report/dashboards/cumulative-flow.md) 
- [Sprint burndown](../../report/dashboards/configure-sprint-burndown.md) 
- [Lead time and Cycle time](../../report/dashboards/cycle-time-and-lead-time.md) 

## Related content

- [Create query charts](../../report/dashboards/charts.md)
- [Query editor](using-queries.md)
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Query by date or current iteration](query-by-date-or-current-iteration.md)
- [Query by a numeric field](query-numeric.md)
 
 
