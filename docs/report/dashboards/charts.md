---
title: Status and trend work item, query-based charts
titleSuffix: Azure DevOps
description: Learn how to add status, progress, and trend charts to dashboards from flat-list queries in Azure DevOps.
ms.custom: dashboards, copilot-scenario-highlight
ms.subservice: azure-devops-analytics
ms.assetid: EFAD32DB-8B19-4ACC-8F72-87CC5A513798
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 03/23/2026
ai-usage: ai-assisted
ms.custom: awp-ai
#customer intent: As an Azure Boards user, I want to create charts to track the status of work in progress.
---

# Track progress with status and trend query-based charts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Chart the results of a [flat-list query](../../boards/queries/using-queries.md#define-a-flat-list-query) to quickly view the status of work in progress. You can create pie, column, bar, pivot, trend, or burndown charts that show a count of work items or a sum of numeric fields like Story Points, Effort, or Remaining Work — grouped by State, Assigned To, or any other system or custom field.

:::image type="content" source="media/overview/active-bug-charts-on-dashboards-2019.png" alt-text="Screenshot of Active bug charts added to dashboards.":::

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

| Category | Requirements |
|-------------|-------------|
| **Access** | [Project member](../../organizations/accounts/add-organization-users.md) with at least **Basic** access. [Stakeholder](../../organizations/security/stakeholder-access.md) users can view charts on dashboards but can't create or view them from the **Queries** page. |
| **Permissions** | - **Team dashboard chart**: Member of the team or **Project Administrators** group.<br>- **Project dashboard chart**: Dashboard creator, **Edit** dashboard permission, or **Project Administrators** group.<br>- **View chart on dashboard**: **Read** permission on the underlying query. Without it, the widget shows *Widget failed to load*.<br>For more information, see [Permissions and prerequisites to access Analytics](../analytics/analytics-permissions-prerequisites.md). |
| **Queries** | - Only [flat-list queries](#create-a-flat-list-query) support charts.<br>- To add a chart to a dashboard, save the query to a **Shared Queries** folder. See [Set query permissions](../../boards/queries/set-query-permissions.md). |

::: moniker range="azure-devops"
> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to query chart features just like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

::: moniker-end

## Create a flat-list query  

Select the **Flat list of work items** query type. Other query types aren't supported for charting. For more information, see [Define a flat-list query](../../boards/queries/using-queries.md#flat-list).

Add any field you want to chart to a query clause or to column options:

| Grouping | Field to include |
|----------|-----------------|
| Status | **State** |
| Assignments | **Assigned To** |
| Sprint / iteration | **Iteration Path** |
| Team | **Node Name** (leaf node of Area Path) |
| Custom field | The custom field itself |

To sum a numeric column, include the field in your query clause or column options. For more examples, see [Query by numeric fields](../../boards/queries/query-numeric.md).

To add a chart to a dashboard, [save the query to a **Shared Queries** folder](../../boards/queries/organize-queries.md). Charts from **My Queries** are only visible to you. You can share any chart page URL with project members.

::: moniker range=">= azure-devops-2022"

> [!IMPORTANT]
> You can't group charts by ID, date-time, plain-text, rich-text, or tag fields. To group by tags, use a [Chart for Work Items widget](configure-chart-work-items-widget.md) on a dashboard instead.

::: moniker-end

### Chart behavior

| Behavior | Details |
|----------|---------|
| **Area / iteration grouping** | Only the leaf node of **Area Path** or **Iteration Path** appears. If your query mixes levels, group by **Node Name** instead. |
| **Sorting** | Sort by **Value** (numeric count or sum) or **Label** (grouping field name), in ascending or descending order. |
| **Series limit** | Charts show up to eight series (12 on resized dashboard widgets). Extra values roll up into *(other)*. |

## Create a query-based chart  

1. From **Queries**, open a flat-list query and select the **Charts** tab > **New chart**.

   :::image type="content" source="media/charts/new-chart-new-qe.png" alt-text="Screenshot of the Charts tab with the New chart button."::: 

2. Select the chart type and field for grouping values. For pie, bar, and column charts, select a single field to view a count of work items.  

   :::image type="content" source="media/charts/config-pie-chart-priority-qe.png" alt-text="Screenshot of pie chart configure dialog.":::   

   If the field you want doesn't appear in the **Group by** list, [add it as a column to the query](../../boards/backlogs/set-column-options.md) and save. The **Aggregation** options depend on the fields in the query or **Column Options**.

3. (Optional) Select a color from the **Series** color pickers to customize the chart appearance.

   :::image type="content" source="media/charts/color-series-picker.png" alt-text="Screenshot of Charts dialog, color series picker.":::    

Charts automatically update when you edit or refresh the query.

> [!NOTE]
> You must have **Basic** access or higher to create charts. **Stakeholder** users don't see the **Charts** tab. For more information, see [Change access levels](../../organizations/security/change-access-levels.md).  

<a id="pie-chart"></a> 

## Add a pie chart

Pie charts work best with six or fewer categories. For example, use a pie chart for bugs grouped by **State** or user stories grouped by progress status (Completed, In Progress, Cut).

The following example filters user stories by state and charts them as a pie:

:::image type="content" source="media/charts/pie-chart-query.png" alt-text="Screenshot of Query Editor, filter User Stories by State.":::

:::image type="content" source="media/charts/pie-chart-configured.png" alt-text="Screenshot of Configure chart dialog, Pie chart.":::

:::image type="content" source="media/charts/pie-chart-user-stories-progress.png" alt-text="Screenshot of Charts, pie chart example.":::  

## Add a stacked bar chart

Use a stacked bar chart to compare progress across two dimensions. For example, use a stacked bar chart for work item count by **Node Name** (team) and **State**. Each bar segment represents a grouping value.

:::image type="content" source="media/charts/config-stacked-bar-chart-team-qe.png" alt-text="Screenshot of Configure chart dialog, Stacked bar chart.":::

## Add a pivot table  

A pivot table shows counts or sums in a row-by-column grid. It's useful for comparing work across areas. For example, use a pivot table for rows by work item type and columns by state.

:::image type="content" source="media/charts/configure-pivot-item-state.png" alt-text="Screenshot of Configure Chart dialog, Pivot table.":::

## Add a trend chart

Trend charts track work item counts or field sums over a rolling period (last week to last year). Trend data reflects the latest state of the work tracking data store.

:::image type="content" source="media/charts/config-2-week-trend-chart-bugs.png" alt-text="Screenshot of Configure chart dialog, two week trend chart.":::

## Add a burndown chart

Burndown charts show how quickly work is progressing based on a count of work items or a sum of a numeric field (Story Points, Effort, or Remaining Work). To create one, include the numeric field in your query and set the **Aggregation** to **Sum**.

:::image type="content" source="media/charts/config-remaining-work-trend-chart.png" alt-text="Screenshot of Configure chart dialog, Remaining work for past four weeks.":::

For more advanced burndown and burnup tracking, see [Configure a burndown or burnup widget](configure-burndown-burnup-widgets.md).

## Add a chart to a dashboard

1. From your query's **Charts** tab, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the chart you want to add, and select **Add to dashboard**.

   :::image type="content" source="media/charts/add-chart-to-dashboard-qe.png" alt-text="Screenshot shows the Chart context menu, Add to dashboard option.":::

   Only queries saved to a **Shared Queries** folder have the **Add to dashboard** option.

2. Select the target dashboard in the dialog.

   :::image type="content" source="media/charts/select-dashboard-dialog.png" alt-text="Screenshot shows the Select a dashboard dialog.":::

> [!TIP]
> You can also add a [Chart for Work Items widget](configure-chart-work-items-widget.md) directly to a dashboard, which lets you resize charts beyond the default query-chart size.

To add other chart types like test results or build summaries, see [Add widgets and chart to a dashboard](add-widget-to-dashboard.md).

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to build query-based charts

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can use AI assistants to help create queries and charts for tracking work.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Build a query for charting | `Write a flat-list query that returns all active bugs grouped by priority in the <project-name> project` |
| Choose a chart type | `Should I use a pie chart, stacked bar, or pivot table to show bug distribution by area path?` |
| Track trends | `Help me create a trend chart that shows how bug counts change over the last 30 days in the <project-name> project` |
| Sum numeric fields | `How do I create a chart that shows total Story Points by team member in the <project-name> project?` |
| Group by custom field | `Help me create a stacked bar chart that groups work items by a custom "Release" field in the <project-name> project` |
| Compare sprints | `Create a pivot table that compares bug counts by state across the last three iteration paths in the <project-name> project` |
| Spot workload imbalance | `Build a stacked bar chart showing active work items per team member, grouped by work item type, so I can see who's overloaded` |
| Track debt | `Write a query and trend chart that tracks unresolved bugs older than 30 days in the <project-name> project` |
| Add chart to dashboard | `What's the best way to share a query-based chart with my team on a dashboard?` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for iterating on a flat-list query and then walking through the exact chart and dashboard steps for your project.
> - To avoid using stale or cached data from previous queries, add to your prompt, `Do not use previously fetched data`.

::: moniker-end

## Related articles

- [Example query charts](../../boards/queries/example-query-charts.md)
- [Chart for Work Items widget](configure-chart-work-items-widget.md)
- [Add widgets to a dashboard](add-widget-to-dashboard.md)
- [Widget catalog](widget-catalog.md)
- [Dashboards, charts, and reports FAQs](faqs.yml)
