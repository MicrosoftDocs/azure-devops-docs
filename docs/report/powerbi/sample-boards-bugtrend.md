---
title: Bug trends sample queries and Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a bug trend Power BI report. 
ms.subservice: azure-devops-analytics
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: "<=azure-devops"
ms.date: 04/07/2026
ai-usage: ai-assisted
---

# Bug trends sample report 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Bug trend reports help you see how well a team is closing active bugs. This article shows you how to display the number of bugs in a given state over a period of time. The following image shows an example of a bug trends report.  

:::image type="content" source="media/reports-boards/bug-trends-report.png" alt-text="Screenshot of Bug trends line chart report.":::
 

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Sample queries

The following queries return data from the `WorkItemSnapshot` entity set to support generating trend reports. 

[!INCLUDE [temp](includes/query-filters-work-items.md)]   

### Bug trend filtered by Area Path

The following queries filter bugs by area path and a start date.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"WorkItemType eq 'Bug' "
            &"and State ne 'Closed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and DateValue ge {startdate}  "
            &") "
        &"/groupby( "
            &"(DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK), "
            &"aggregate($count as Count) "
            &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? 
        $apply=filter(
            WorkItemType eq 'Bug'
            and State ne 'Closed'
            and startswith(Area/AreaPath,'{areapath}')
            and DateValue ge {startdate} 
            )
        /groupby(
            (DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK),
            aggregate($count as Count)
            )
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name 
- `{project}` - Your team project name, or omit "/{project}" entirely, for a cross-project query 
- `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`
- `{startdate}` - Start your report for items completed on or after a given date with the format: `YYYY-MM-DDZ`. For example: `2022-04-01Z` represents 2022-April-01. Don't enclose in quotes.

<!--- How specify the end date? --> 

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
:::row:::
   :::column span="1":::
   `$apply=filter(`
   :::column-end:::
   :::column span="1":::
   Start of filter statement clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `WorkItemType eq 'Bug'`
   :::column-end:::
   :::column span="1":::
   Return Bugs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and State ne 'Closed'`
   :::column-end:::
   :::column span="1":::
   Omit bugs in a Closed state.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="1":::
   Return work items under a specific **Area Path** that you specify in `'{areapath}'`. To filter by team name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname}')`.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Start trend on or after the specified date. Example: **2021-04-01Z** represents 2021-April-01.
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
   `(DateValue, State, WorkItemType, Priority, Severity, Area/AreaPath, Iteration/IterationPath, AreaSK), `
   :::column-end:::
   :::column span="1":::
   Group by `DateValue`,  used for trending, and any other fields you want to report on.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate($count as Count)`
   :::column-end:::
   :::column span="1":::
   Aggregate by counting bugs that match the criteria on each date.
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
 

### Bug trend filtered by teams 

You can query for bug trends by team name rather than area path.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"WorkItemType eq 'Bug' "
            &"and State ne 'Closed' "
            &"and (Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}')) "
            &"and DateValue ge {startdate}  "
            &") "
        &"/groupby( "
            &"(DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK), "
            &"aggregate($count as Count) "
            &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? 
        $apply=filter(
            WorkItemType eq 'Bug'
            and State ne 'Closed'
            and (Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}'))
            and DateValue ge {startdate} 
            )
        /groupby(
            (DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK),
            aggregate($count as Count)
            )
```

***

### Bug trend with a snapshot every Friday

Using a weekly snapshot reduces the amount of data pulled into Power BI and increases query performance. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"WorkItemType eq 'Bug' "
            &"and State ne 'Closed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and DateValue ge {startdate} "
            &"and Date/DayName eq 'Friday'  "
        &") "
        &"/groupby( "
            &"(DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK), "
            &"aggregate($count as Count) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? 
        $apply=filter(
            WorkItemType eq 'Bug'
            and State ne 'Closed'
            and startswith(Area/AreaPath,'{areapath}')
            and DateValue ge {startdate}
            and Date/DayName eq 'Friday' 
        )
        /groupby(
            (DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK),
            aggregate($count as Count)
        )
```

***

<a id="weekly-snapshots"></a>

### Bug trend with a snapshot on the first of every month

Using a monthly snapshot reduces the amount of data pulled into Power BI and increases query performance. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"WorkItemType eq 'Bug' "
            &"and State ne 'Closed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and DateValue ge {startdate} "
            &"and Date/DayOfMonth eq 1  "
        &") "
        &"/groupby( "
            &"(DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK), "
            &"aggregate($count as Count) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? 
        $apply=filter(
            WorkItemType eq 'Bug'
            and State ne 'Closed'
            and startswith(Area/AreaPath,'{areapath}')
            and DateValue ge {startdate}
            and Date/DayOfMonth eq 1 
        )
        /groupby(
            (DateValue,State,WorkItemType,Priority,Severity,Area/AreaPath,Iteration/IterationPath,AreaSK),
            aggregate($count as Count)
        )
```

***

[!INCLUDE [temp](includes/rename-query.md)]

## Expand columns in Power BI

Expand the `Area/AreaPath` and `Iteration/IterationPath` columns. Expanding the columns flattens the record into specific fields. To learn how, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md). 

[!INCLUDE [temp](includes/sample-rename-column-fields.md)]

[!INCLUDE [temp](includes/close-apply.md)]

## Create the line chart report 

1. In Power BI, under **Visualizations**, select the **Line chart** report. 

	:::image type="content" source="media/reports-boards/bug-trends-selections.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for Bug trends report. ":::

1. Add `DateValue` to the **X-axis**. Right-click `DateValue` and select `DateValue` rather than `Date Hierarchy`.  

1. Add `Count` to the **Y-axis**. Right-click `Count` and ensure **Sum** is selected.

1. Add `State` to the **Legend**.

The example report displays.  

:::image type="content" source="media/reports-boards/bug-trends-report.png" alt-text="Screenshot of Sample Bug trends line chart report.":::

### Modify report format visuals 

- To modify format elements of the report, select the **Format your visual** (paintbrush) icon and change one or more available settings. For example, you can change the line colors used in the trend chart.

	:::image type="content" source="media/reports-boards/bug-trends-change-color.png" alt-text="Screenshot of Power BI Format visual selections for Bug trends report. "::: 

For more information, see [Get started with the formatting pane](/power-bi/visuals/service-getting-started-with-color-formatting-and-axis-properties). 

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
