---
title: Aggregate work tracking data using Analytics
titleSuffix: Azure DevOps
description: Learn how to aggregate and filter data with Analytics and the OData aggregation extension in Azure DevOps.
ms.subservice: azure-devops-analytics
ms.custom: copilot-scenario-highlight
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<= azure-devops"
ms.date: 03/18/2026
ai-usage: ai-assisted
---

# Aggregate work tracking data by using Analytics

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can aggregate work tracking data by using Analytics with OData in two ways: use `$count` for simple totals, or use the OData `$apply` aggregation extension to return grouped, filtered, and computed results as JSON.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

This article builds on [Construct OData queries for Analytics](../analytics/analytics-query-parts.md) and [Define basic queries using OData Analytics](wit-analytics.md). The examples focus on work item data, but the same principles apply to other entity sets. For simple count queries, see [Return a count of items](wit-analytics.md#return-a-count-of-items-no-other-data).

[!INCLUDE [temp](../includes/analytics-preview.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## About the $apply aggregation extension

OData provides an aggregation extension that introduces the `$apply` keyword for grouping, filtering, and computing aggregate values over your work tracking data. The following sections show how to use `$apply` with `aggregate`, `groupby`, `filter`, and `compute`. For the full specification, see [OData Extension for Data Aggregation](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html).

<a id="aggregation-extension"></a>
<a id="apply-extension"></a>

## Aggregate data by using $apply

Append the `$apply` token to your query URL to trigger aggregations. The basic syntax is:

`/{entitySetName}?$apply=aggregate({columnToAggregate} with {aggregationType} as {newColumnName})`

| Parameter | Description |
|-----------|-------------|
| `{entitySetName}` | The entity set to query, such as `WorkItems`. |
| `{columnToAggregate}` | The field to aggregate, such as `RemainingWork`. |
| `{aggregationType}` | The aggregation function: `sum`, `min`, `max`, `average`, or `countdistinct`. |
| `{newColumnName}` | The alias for the aggregated result column. |

The following examples show common `aggregate` operations.

**Return the sum of all remaining work**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $apply=aggregate(RemainingWork with sum as SumOfRemainingWork)
> ```

**Return the last work item identifier**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $apply=aggregate(WorkItemId with max as MaxWorkItemId)
> ```

<a id="groupby"></a>

## Group results using groupby

The `groupby` clause works like SQL `GROUP BY` — it breaks down aggregated results by one or more properties.

**Count work items by type**

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $apply=groupby((WorkItemType), aggregate($count as Count))
> ```

Returns a result like:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "value": [
>     { "WorkItemType": "Bug", "Count": 3 },
>     { "WorkItemType": "Product Backlog Item", "Count": 13 }
>   ]
> }
> ```

**Group by multiple properties**

Add more properties inside the `groupby` parentheses to create finer-grained breakdowns:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $apply=groupby((WorkItemType, State), aggregate($count as Count))
> ```

Returns one row for each unique combination of type and state (for example, Bug/Active, Bug/Committed, Product Backlog Item/Active).

**Group across entities**

You can group across related entities by using navigation properties. For example, to count areas per project:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/Areas?
>   $apply=groupby((Project/ProjectName), aggregate($count as Count))
> ```

<a id="filter-aggregate"></a>

## Filter aggregated results

Use `filter()` inside `$apply` to narrow data before or after aggregation. Chain multiple filters by using `/` (pipe) and place the most selective filter first for best performance.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $apply=
>     filter(Iteration/IterationName eq 'Sprint 89')/
>     filter(WorkItemType eq 'User Story')/
>     groupby((State), aggregate($count as Count))
> ```

> [!NOTE]
> The `groupby` clause is optional. Use `aggregate` alone to return a single value.

<a id="multiple-aggregate"></a>

## Aggregate multiple fields in a single call

List multiple fields inside a single `aggregate` clause, separated by commas, to avoid extra round trips.

> [!div class="tabbedCodeSnippets"]
> ```OData
> /WorkItems?$apply=aggregate(CompletedWork with sum as SumOfCompletedWork, RemainingWork with sum as SumOfRemainingWork)
> ```

Returns:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "value": [
>     { "SumOfCompletedWork": 1525841.29, "SumOfRemainingWork": 73842.39 }
>   ]
> }
> ```

<a id="calculated-properties"></a>

## Compute calculated properties

Pipe aggregated results into `compute()` to derive new values by using arithmetic expressions (`div`, `add`, `sub`, `mul`). The following example calculates the percentage of work completed:

> [!div class="tabbedCodeSnippets"]
> ```OData
> /WorkItems?$apply=aggregate(CompletedWork with sum as SumOfCompletedWork, RemainingWork with sum as SumOfRemainingWork)/compute(SumOfCompletedWork div (SumOfCompletedWork add SumOfRemainingWork) as DonePercentage)
> ```

Returns:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "value": [
>     { "DonePercentage": 0.9676, "SumOfCompletedWork": 1514698.34, "SumOfRemainingWork": 50715.95 }
>   ]
> }
> ```

<a id="cfd"></a>

## Build a cumulative flow diagram query

The following query combines `filter`, `groupby`, and `aggregate` against the `WorkItemBoardSnapshot` entity set to produce data for a [cumulative flow diagram](../dashboards/cumulative-flow-cycle-lead-time-guidance.md) in Power BI or Excel.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItemBoardSnapshot?
>   $apply=
>     filter(DateValue gt 2015-07-16Z and DateValue le 2015-08-16Z)/
>     filter(BoardName eq 'Stories' and Team/TeamName eq '{teamName}')/
>     groupby((DateValue, ColumnName), aggregate(Count with sum as Count))
>   &$orderby=DateValue
> ```

This query filters to a date range and a specific board and team, groups by date and board column, and returns a count per group. Returns:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "value": [
>     { "DateValue": "2015-07-16T00:00:00-07:00", "ColumnName": "Completed", "Count": 324 },
>     { "DateValue": "2015-07-16T00:00:00-07:00", "ColumnName": "In Progress", "Count": 5 }
>   ]
> }
> ```

> [!TIP]
> The fewer rows returned, the faster Power BI or Excel refreshes. Use tight date ranges and specific board and team filters to minimize the result set.

::: moniker range="azure-devops"

## Use AI to build aggregation queries

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help construct and troubleshoot OData aggregation queries.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Count by state | `Write an OData aggregation query that counts work items grouped by state in <Contoso> project` |
| Sum story points | `Create an OData query using $apply to sum story points by iteration path for user stories in <Contoso> project` |
| Build a CFD query | `Generate an OData aggregation query for a cumulative flow diagram that groups work items by board column and date in <Contoso> project` |
| Filter then aggregate | `Write an OData query that filters to bugs with priority 1 and then counts them grouped by area path in <Contoso> project` |
| Multiple aggregations | `Create an OData query that returns both the count and average story points per sprint for <Contoso> project` |
| Debug $apply syntax | `My OData aggregation query returns a 400 error - help me fix the $apply clause for grouping work items by state and type in <Contoso> project` |

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Query trend data](querying-for-trend-data.md)

## Related content

- [Define basic queries using OData Analytics](wit-analytics.md)
- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)
- [Query trend data](querying-for-trend-data.md)
- [OData Analytics query guidelines](odata-query-guidelines.md)
- [OData Extension for Data Aggregation Version 4.0](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)