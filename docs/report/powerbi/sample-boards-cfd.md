---
title: Cumulative Flow Diagram (CFD) sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a Cumulative Flow Diagram (CFD) Power BI report.
ms.subservice: azure-devops-analytics
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 12/08/2022
---

# Cumulative Flow Diagram (CFD) sample report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article shows you how to display the Stories CFD for a specified team. This data is also available through the built-in chart and dashboard widget. To learn more about these options, see [View and configure a Cumulative Flow Diagram](../dashboards/cumulative-flow.md). 

An example is shown in the following image that shows a count of user stories over time in the *Researching*, *Committed*, *In Progress*, and *In Review* states. Hovering over a date provides information on data for that date.

:::image type="content" source="media/reports-boards/cfd-stacked-area-chart-sorted.png" alt-text="Screenshot of Power BI Cumulative Flow stacked area chart report, columns sorted in Kanban board column order."::: 

To learn more about cumulative flow, see [Cumulative flow, lead time, and cycle time guidance](../dashboards/cumulative-flow-cycle-lead-time-guidance.md) and [Cumulative flow, lead time, and cycle time guidance](../dashboards/cumulative-flow-cycle-lead-time-guidance.md).

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Sample queries

Queries in this section support returning cumulative flow data for User Stories. These queries specify the `WorkItemBoardSnapshot` entity set as they return data calculated for the Kanban board over time.  


[!INCLUDE [temp](includes/query-filters-work-items.md)]


#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/V3.0-preview/WorkItemBoardSnapshot?"
        &"$apply=filter( "
            &"Team/TeamName eq '{teamname}' "
            &"and BoardName eq 'Stories'  "
            &"and DateValue ge {startdate} "
        &") "
        &"/groupby( "
            &"(DateValue,ColumnName,LaneName,State,WorkItemType,AssignedTo/UserName,Area/AreaPath),  "
            &"aggregate($count as Count) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/V3.0-preview/WorkItemBoardSnapshot?
        $apply=filter(
            Team/TeamName eq '{teamname}'
            and BoardName eq 'Stories' 
            and DateValue ge {startdate}
        )
        /groupby(
            (DateValue,ColumnName,LaneName,State,WorkItemType,AssignedTo/UserName,Area/AreaPath), 
            aggregate($count as Count)
        )
```
***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name 
- `{project}` - Your team project name, or omit "/{project}" entirely, for a cross-project query
* `{teamname}` - The name of the team to display CFD data
- `{startdate}` - Start your report for items completed on or after a given date with the format: `YYYY-MM-DDZ`. For example: `2022-04-01Z` represents 2022-April-01. Don't enclose in quotes.


### Query breakdown

The following table describes each part of the query.

:::row:::
   :::column span="1":::
   **Query part**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   `$apply=filter(`
   :::column-end:::
   :::column span="1":::
   Start `filter()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Team/TeamName eq '{teamname}'`
   :::column-end:::
   :::column span="1":::
   Return items for a specific team.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and BoardName eq 'Stories'`
   :::column-end:::
   :::column span="1":::
   Return items on the **Stories** backlog. You can specify other backlog names, such as **Epics** or **Features**. Specify the backlog level that corresponds to the process selected for your project.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return data on or after the specified date, for example, **2022-04-01Z** represents 2022-April-01 2019-July-01.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close `filter()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby(`
   :::column-end:::
   :::column span="1":::
   Start `groupby()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(DateValue, ColumnName, LaneName, State, WorkItemType,AssignedTo/UserName,Area/AreaPath), `
   :::column-end:::
   :::column span="1":::
   Group by `DateValue` (used for trending), `ColumnName`, and any other properties you want to report on. Here we include `LaneName` to enabling filtering by swimlanes.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate($count as Count)`
   :::column-end:::
   :::column span="1":::
   Aggregate as count of work items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close `groupby()` clause. 
   :::column-end:::
:::row-end:::



[!INCLUDE [temp](includes/rename-query.md)]


## Expand columns in Power Query Editor

From the Power Query Editor, choose the query with the data you want to transform. For a CFD chart, you'll need to 
expand the `Area`, `Iteration`, and `AssignedTo` columns. To learn how, see the following sections in [Transform Analytics data to generate Power BI reports, Expand columns](transform-analytics-data-report-generation.md#expand-columns). 


## (Optional) Rename fields

Once you've expanded the columns, you may want to rename one or more fields. For example, you can rename the column `AreaPath` to `Area Path`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 


[!INCLUDE [temp](includes/close-apply.md)]



## Create the stacked area chart  

In the following example, the query was renamed to *CFD*, but no columns were renamed. 

1. In Power BI, choose the **Stacked area** chart under **Visualizations**. 

	:::image type="content" source="media/reports-boards/cfd-visualizations.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for CFD chart report. ":::
 
1. Add `DateValue` to **Axis** and then right-click `DateValue` and select `DateValue`, rather than `Date Hierarchy`.

1. Add `Count` to **Values**.

1. Add `ColumnName` to **Legend**.

1. In the **Filters** pane, expand `ColumnName`, and select only the values you want to appear on the chart. For example, you may want to unselect *New*, *Proposed*, *Done*, or *Closed*. 

	:::image type="content" source="media/reports-boards/cfd-columnname-filters.png" alt-text="Screenshot of Power BI Filters for ColumnName. ":::


The example report displays the columns in alphabetic order. However, the preferred order is to sort the data according to the Kanban column order, or progressive order. 

:::image type="content" source="media/reports-boards/cfd-stacked-area-chart.png" alt-text="Screenshot of Sample Power BI Cumulative Flow stacked area chart report, columns sorted in alphabetic order.":::

### Sort columns in progressive order

To sort the chart columns in the order specific on the Kanban board, do the following steps:

1. Create a new query in Power BI per the following queries. When done, rename the query to *ColumnOrder*. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/V3.0-preview/BoardLocations?"
        &"$apply=filter( "
            &"Team/TeamName eq '{teamname}'  "
            &"and BoardName eq 'Stories'  "
            &"and IsCurrent eq true "
        &") "
        &"/groupby ((ColumnName,ColumnOrder)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/V3.0-preview/BoardLocations?
        $apply=filter(
            Team/TeamName eq '{teamname}' 
            and BoardName eq 'Stories' 
            and IsCurrent eq true
        )
        /groupby ((ColumnName,ColumnOrder))
```
***

### Sort the report in the correct order

1. In Power BI, expand the *ColumnOrder* query and select `ColumnName`.

1. Select **Column Tools** and then **Sort by Column** and choose `ColumnOrder`.
	:::image type="content" source="media/reports-boards/cfd-sort-by-column.png" alt-text="Screenshot of Power BI Column Tools, Sort by Column selection.":::

1. Select the **Modeling** menu, and then **Manage Relationships**. Ensure there's a relationship between `CFD.ColumnName` and `ColumnOrder.ColumnName`. It's likely that the relationship was autodetected.

	:::image type="content" source="media/reports-boards/cfd-manage-relationships-dialog.png" alt-text="Dialog for Manage Relationships showing a relationship between CFD.ColumnName and ColumnOrder.ColumnName.":::

1. In the report created above, in the **Legend**, replace `CFD.ColumnName` with `ColumnOrder.ColumnName` to **Legend**.

	The report refreshes with columns sorted in the same order used by the Kanban board.  

	:::image type="content" source="media/reports-boards/cfd-stacked-area-chart-sorted.png" alt-text="Screenshot of Sample Power BI Cumulative Flow stacked area chart report, columns sorted in Kanban board column order."::: 


> [!NOTE]
> If any work items were in a column that has since been deleted, they will appear as "Blank" in the above report. 


## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
