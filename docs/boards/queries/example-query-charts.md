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
ms.date: 11/26/2024
---


# Example query charts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Query charts are excellent for visualizing status and trends. Adding multiple charts to a dashboard allows quick monitoring of essential data for your team or project. Consider discussing the following questions with your team:

- *Which query charts are most useful for us to create and monitor?*
- *Which charts help maintain backlog hygiene?*
- *What time frame should we use for trend charts?*

While teams might have varied goals and tracking needs, Agile teams typically perform these tasks. Select status and trend charts that support the following activities:

- [Triage incoming work](../sprints/best-practices-scrum.md#tips-for-successful-triage-meetings) to ensure new work is well defined
- Plan sprints and set sprint goals as described in [Scrum and best practices](../sprints/best-practices-scrum.md)
- Conduct [daily stand-ups](../sprints/best-practices-scrum.md#daily-scrum-meetings)

## Prerequisites

- **Access levels**: To create a query chart or view query charts from the Queries page, have at least **Basic** access.  
- **Permissions**:
  - To create or edit a shared query, have your **Contribute** permission set to **Allow** for the shared query folder.
  - To view a query chart added to a dashboard, have **Read** permissions to the underlying query. If this permission is denied, then the widget displays a *Widget failed to load* message.
- **Tasks**: To add a query chart to a dashboard, save the query under the **Shared Queries** folder.

::: moniker range="azure-devops"
> [!NOTE]  
> Users with [**Stakeholder** access](../../organizations/security/stakeholder-access.md) for a public project have full access to query chart features just like users with **Basic** access. Users with **Stakeholder** access for a private project can't view or create charts from the **Queries** page, however, they can view charts added to a team dashboard.

::: moniker-end

## Guidelines for creating query charts 

For detailed instructions on creating query charts, see [Track progress with status and trend query-based charts](../../report/dashboards/charts.md). Ensure your queries adhere to the following guidelines:

- **Query type:** Use **Flat list of work items** as only flat-list queries support query charts.
- **Save changes:** Save your query after modifying clauses or column options before navigating to the **Charts** page.
- **Operators:** Utilize **In** and **Not In** operators to include multiple work item types, workflow states, or other groupings.
- **Trend charts:** Limit queries for trend charts to a maximum of 1,000 work items to avoid widget errors.
- **Grouping fields:** Add relevant fields to your query clauses or column options. You can group charts by:
  - **State:** Include the **State** field.
  - **Assigned To:** Include the **Assigned To** field.
  - **Iteration Path:** Include the **Iteration Path** field.
  - **Node Name:** Include the **Node Name** field for team grouping.
  - **Custom Fields:** Include any custom fields as needed.
- **Summing numeric columns:** To sum a numeric column, include the corresponding field in your query clause or column options. For examples, see [Query by a numeric field](query-numeric.md).

### Limitations

You can't group charts by the following field data types:
- **ID** or **Parent** fields
- **Date-time** fields (for example, **Created Date**, **Changed Date**)
- **Plain Text** fields (for example, **Title**)
- **Rich-text** fields (for example, **Description**, **Acceptance Criteria**, **Repro Steps**)
- **Tags:** You can filter queries using tags, but can't use them to configure query charts.

> [!NOTE]
> While you can't group a query-based chart by tags, you can group a **Chart for Work Items** widget by tags added to a dashboard as described in [Configure a chart for work items widget](../../report/dashboards/configure-chart-work-items-widget.md).

### Adding query charts to dashboards

- **Create dashboard first:** To add a query chart to a dashboard, first create the dashboard. Then add the chart from the **Queries** > **Charts** page.
- **Refresh required:** After you add a query, refresh your browser to register the new query on the dashboard.
- **Optimize performance:** For complex queries, see [Best integration practices, Optimize queries](../../integrate/concepts/integration-bestpractices.md#optimize-queries).

## Maintain backlog hygiene 

The following queries help your team maintain a healthy backlog by ensuring that work is properly assigned. The following table provides example queries to review periodically, typically at the beginning or end of a sprint. Customize these queries to fit your team and organizational goals by replacing *Fabrikam Team* with your team name and adding other filters as needed.

> [!NOTE]  
> Work item types and workflow states applicable to your project might differ from those shown in the following examples depending on the process used by your project.  

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
      **Ill-defined work**: For example, ones with no **Description**, **Acceptance Criteria**, **Story Points**, or **Effort** defined.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-ill-defined-work.png " alt-text="Screenshot of Query Editor, Work with empty required fields.":::
   :::column-end:::
:::row-end:::

In the following image, all five query charts appear on a team dashboard. To add query charts to a dashboard, see [Add charts to a dashboard](../../report/dashboards/add-charts-to-dashboard.md#add-a-work-item-query-or-chart) 

:::image type="content" source="media/example-queries/dashboard-backlog-hygiene-query-charts.png" alt-text="Screenshot of Dashboard with five query charts added.":::  

Alternatively, you can add query tiles that reference the same query and show the total count of work items as shown in the following image. 

> [!NOTE]  
> The query tile widget is a 1x1 tile, whereas the smallest query chart dashboard widget is 2x2. To add query tiles to a dashboard, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 

:::image type="content" source="media/example-queries/dashboard-backlog-hygiene-query-tiles.png" alt-text="Screenshot of Dashboard with five query tiles added.":::  
 
## Example status charts 

The following table provides some examples of status charts you can create and the queries behind them. 

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
      **Planned work**: How much work is represented in the backlog. A query that looks at work in the *New* or *Proposed* category state provides a snapshot of work in the backlog.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-backlog-work.png " alt-text="Screenshot of Query Editor, Backlog work, not closed or removed.":::
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      **Active bugs**: Agile teams monitor their bug or technical debt and set goals to maintain the total number under a specific number.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-bugs.png " alt-text="Screenshot of Query Editor, Active bugs.":::  
	  From this one query, you can create a chart based on assignment or state.  
      :::image type="content" source="media/example-queries/chart-active-bugs-by-state.png " alt-text="Screenshot of query chart, Active bugs by state.":::
      :::image type="content" source="media/example-queries/chart-active-bugs-by-assignment.png " alt-text="Screenshot of query chart, Active bugs by assignment.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      **Tagged work items**: Monitor tagged work to ensure the team is meeting specific goals, milestones, or categories of work.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-work-tagged-across-project.png " alt-text="Screenshot of Query Editor, Active work across projects tagged with Web.":::
   :::column-end:::
:::row-end:::   
:::row:::
   :::column span="1":::
      **Blocked work**: How much work is currently blocked? You can query blocked work using a tag or custom field.
   :::column-end:::
   :::column span="3":::
      :::image type="content" source="media/example-queries/query-active-work-tagged-as-blocked.png " alt-text="Screenshot of Query Editor, Active work tagged as blocked.":::
   :::column-end:::
:::row-end:::   



## Example trend charts 


The following table provides some examples of trend charts you can create. 

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


## Useful work tracking widgets and charts

In addition to the query charts provided earlier in this article, the following built-in widgets provide a wealth of information for teams working to monitor progress and continuous improvement goals. Each of these charts can be added to a team dashboard. 

- [Velocity](../../report/dashboards/team-velocity.md) 
- [Cumulative flow](../../report/dashboards/cumulative-flow.md) 
- [Sprint burndown](../../report/dashboards/configure-sprint-burndown.md) 
- [Lead time and Cycle time](../../report/dashboards/cycle-time-and-lead-time.md) 

## Related articles

- [Query editor](using-queries.md)
- [Query fields, operators, and macros](query-operators-variables.md)   
- [FAQs about queries](query-faqs.yml)
- [Query by date or current iteration](query-by-date-or-current-iteration.md)
 
 
