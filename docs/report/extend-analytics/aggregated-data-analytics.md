---
title: Aggregate work tracking data using Analytics
titleSuffix: Azure DevOps
description: Learn how to aggregate and filter data with Analytics and the OData aggregation extension in Azure DevOps.
ms.subservice: azure-devops-analytics
ms.custom: copilot-scenario-highlight, awp-ai
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<= azure-devops"
ms.date: 03/24/2026
ai-usage: ai-assisted
---

# Aggregate work tracking data by using Analytics

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can aggregate work tracking data by using Analytics with OData in two ways: use `$count` for simple totals, or use the OData `$apply` aggregation extension to return grouped, filtered, and computed results as JSON.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

This article builds on [Construct OData queries for Analytics](../analytics/analytics-query-parts.md) and [Define basic queries using OData Analytics](wit-analytics.md). The examples focus on work item data, but the same principles apply to other entity sets. For simple count queries, see [Get a count of items](wit-analytics.md#get-a-count-of-items).

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

<a id="use-ai-assistance"></a>

## Use AI to aggregate work tracking data

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can ask your AI assistant to retrieve real-time work item data from your Azure DevOps organization and help you draft or troubleshoot Analytics OData `$apply` aggregation queries based on that data.

| Task | Example prompt |
|------|----------------|
| Count by state | `In <OrganizationName>, draft an Analytics OData $apply query that counts work items grouped by State in <ProjectName>. Use placeholders for <ODataVersion> and any filters I need.` |
| Count by type and state | `Create an Analytics OData $apply query for <OrganizationName> that groups WorkItems by WorkItemType and State and returns a count for each group in <ProjectName>.` |
| Filter then aggregate | `Write an Analytics OData query that filters WorkItems to bugs with Priority = 1 in <ProjectName>, then groups by Area/AreaPath and State and returns counts.` |
| Sum remaining and completed work | `Generate an Analytics OData $apply query that filters to Iteration/IterationPath startswith '<IterationPath>' in <ProjectName>, then returns SumOfCompletedWork and SumOfRemainingWork.` |
| Aggregate across teams | `Help me create an Analytics OData $apply query for WorkItemBoardSnapshot that filters to BoardName '<BoardName>' and Team/TeamName '<TeamName>' in <ProjectName>, then groups by DateValue and ColumnName and returns Count.` |
| Explain each clause | `Explain what each part of this $apply query does and how to adjust it for a different iteration: <ODataQueryOrUrl>.` |
| Debug $apply errors | `This Analytics OData query returns a 400 error. Diagnose the $apply syntax and suggest a corrected query: <ODataQueryOrUrl>.` |
| Validate results | `Given this Analytics OData query for <OrganizationName>/<ProjectName>: <ODataQueryOrUrl>, tell me what columns and shape of JSON to expect back, and what common mistakes to check if results look wrong.` |

> [!TIP]
> If you're using Visual Studio Code, agent mode is especially helpful for iterating on aggregation queries—refining filters, troubleshooting `$apply` syntax, and validating results.

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