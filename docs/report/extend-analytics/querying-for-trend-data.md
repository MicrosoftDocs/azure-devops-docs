---
title: Query Trend Data With OData Aggregation in Azure DevOps
titleSuffix: Azure DevOps
description: Learn how to query trend data in Azure DevOps using OData aggregation. Filter, group, and analyze snapshot entity sets for actionable insights.
ms.subservice: azure-devops-analytics
ms.custom: copilot-scenario-highlight, awp-ai
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<= azure-devops"
ms.date: 03/24/2026
ai-usage: ai-assisted
---

# Query trend data with OData aggregation

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Analytics stores daily snapshots of every work item in two entity sets: `WorkItemSnapshot` (tracks field values like state and effort) and `WorkItemBoardSnapshot` (tracks board column positions). Because each entity contains one row per work item per day, these tables grow quickly. Use [OData aggregation extensions](aggregated-data-analytics.md) to filter by date and group results before returning data to a client tool.

This article shows how to build trend queries by date range and by iteration, using `$apply` with `filter`, `groupby`, and `aggregate`.

[!INCLUDE [temp](../includes/analytics-preview.md)]

::: moniker range="< azure-devops"

> [!NOTE]
> The examples shown in this article are based on an Azure DevOps Services URL. Substitute your Azure DevOps Server URL as needed.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/
> ```

::: moniker-end

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

<a id="trend-data"></a>

## Query trend data by date range

When you query snapshot tables, follow two requirements:

1. **Filter by date** — each table contains one row per work item per day, so an unfiltered query returns a very large result set.
1. **Group by date** — if you omit the date grouping, the response includes a warning.

The following query returns a daily bug count by state for March 2016:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItemSnapshot?
>   $apply=
>     filter(DateValue ge 2016-03-01Z and DateValue le 2016-03-31Z and WorkItemType eq 'Bug')/
>     groupby((DateValue, State), aggregate($count as Count))
>   &$orderby=DateValue
> ```

Returns:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "value": [
>     { "DateValue": "2016-03-01T00:00:00-08:00", "State": "Active", "Count": 2666 },
>     { "DateValue": "2016-03-01T00:00:00-08:00", "State": "Closed", "Count": 51408 }
>   ]
> }
> ```

This query returns at most 31 days multiplied by the number of bug states (Active, Resolved, Closed) - 93 rows maximum, regardless of how many work items exist.

## Query trend data by iteration

Instead of hard-coding dates, filter by iteration and reference its start and end dates so the date range adjusts automatically. The `Iteration/EndDate eq null` check handles iterations that don't have an end date yet.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItemSnapshot?
>   $apply=
>     filter(WorkItemType eq 'Bug')/
>     filter(Iteration/IterationName eq 'Sprint 99')/
>     filter(DateValue ge Iteration/StartDate and (Iteration/EndDate eq null or DateValue le Iteration/EndDate))/
>     groupby((DateValue, State), aggregate($count as Count))
>   &$orderby=DateValue
> ```

Returns:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "value": [
>     { "DateValue": "2016-04-04T00:00:00-07:00", "State": "Active", "Count": 320 },
>     { "DateValue": "2016-04-04T00:00:00-07:00", "State": "Closed", "Count": 38 }
>   ]
> }
> ```

> [!NOTE]
> If your query on snapshot tables doesn't include `$apply` or `$select`, the response returns a warning. Always use aggregation with snapshot entity sets. 

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to build trend queries

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help construct and troubleshoot trend queries against snapshot entity sets.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Bug trend by date range | `Write an OData trend query that shows the daily bug count by state over the last 30 days in <ProjectName>.` |
| Sprint snapshot | `Create an OData query against WorkItemSnapshot that shows work item counts grouped by date for the current sprint in <ProjectName>.` |
| Filter by iteration | `Generate an OData trend query that uses the iteration start and end dates from <IterationName> to show story point burndown in <ProjectName>.` |
| Board column trend | `Write an OData query against WorkItemBoardSnapshot to track work items by board column over the past two weeks in <ProjectName> in the <OrganizationName> organization.` |
| Optimize performance | `My WorkItemSnapshot trend query for <ProjectName> is timing out. Suggest specific date filters and aggregation to reduce the row count without losing the key metrics.` |
| Compare sprints | `Create an OData trend query that compares bug counts between <SprintName> and the previous sprint in <ProjectName> in the <OrganizationName> organization.` |
| Remaining work trend | `Write an OData trend query that shows the daily sum of remaining work grouped by Area Path for the current iteration in <ProjectName>.` |
| Detect state changes | `Create an OData snapshot query that tracks how many work items moved from Active to Resolved each day over the past <NumberOfDays> days in <ProjectName>.` |
| Scope change analysis | `Generate an OData trend query that shows the daily count of user stories added or removed from <SprintName> by comparing WorkItemSnapshot data in <ProjectName>.` |

> [!TIP]
> If you're using Visual Studio Code, agent mode is especially helpful for iterating on trend queries—refining date ranges, troubleshooting `$apply` syntax, and validating snapshot results.

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [OData Analytics query guidelines](odata-query-guidelines.md)

## Related content

- [Aggregate work tracking data using Analytics](aggregated-data-analytics.md)
- [Define basic queries using OData Analytics](wit-analytics.md)
- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)
- [OData Analytics query guidelines](odata-query-guidelines.md)
- [OData Extension for Data Aggregation Version 4.0](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)
