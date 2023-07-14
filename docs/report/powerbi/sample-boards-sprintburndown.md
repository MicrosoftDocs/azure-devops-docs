---
title: Sprint Burndown sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a sprint burndown Power BI report.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample, engagement-fy23, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 12/08/2022
---

# Sprint burndown sample reports

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Sprint burndown charts are useful to monitor how well a team is executing on their sprint plan. Several built-in charts and dashboard widgets support monitoring sprint burndown. See [Configure and monitor sprint burndown](../dashboards/configure-sprint-burndown.md). 

However, you can customize a sprint burndown chart using Analytics and Power BI with the queries provided in this article. The following example shows a burndown of User Stories and their States.  

:::image type="content" source="media/reports-boards/sprint-burndown-clustered-column-chart.png" alt-text="Screenshot of Power BI Sprint burndown clustered column chart report.":::
 
[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

To learn more about burndown and burnup, and [Burndown and burnup guidance](../dashboards/burndown-guidance.md).
 

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]
 

## Sample queries

Burndown charts require querying the `WorkItemSnapshot` entity set to get historical data.  

[!INCLUDE [temp](includes/query-filters-work-items.md)]

### Burndown User Stories for an area path and the current iteration

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"WorkItemType eq 'User Story' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and StateCategory ne 'Completed' "
            &"and DateValue ge Iteration/StartDate "
            &"and DateValue le Iteration/EndDate "
            &"and Iteration/StartDate le now()  "
            &"and Iteration/EndDate ge now() "
        &") "
        &"/groupby( "
            &"(DateValue,State,WorkItemType,Priority,Area/AreaPath,Iteration/IterationPath), "
            &"aggregate($count as Count, StoryPoints with sum as TotalStoryPoints) "
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
            WorkItemType eq 'User Story'
            and startswith(Area/AreaPath,'{areapath}')
            and StateCategory ne 'Completed'
            and DateValue ge Iteration/StartDate
            and DateValue le Iteration/EndDate
            and Iteration/StartDate le now() 
            and Iteration/EndDate ge now()
        )
        /groupby(
            (DateValue,State,WorkItemType,Priority,Area/AreaPath,Iteration/IterationPath),
            aggregate($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
* `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`. 


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
   Start filter()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `WorkItemType eq 'User Story'`
   :::column-end:::
   :::column span="1":::
   Burndown on User Stories
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="1":::
   Work items under a specific Area Path. Replacing with `Area/AreaPath eq '{areapath}'` returns items at a specific Area Path.
   
   To filter by Team Name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and StateCategory ne 'Completed'`
   :::column-end:::
   :::column span="1":::
   Filters out items that are completed. For more information on State Categories, see [How workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md) are used in Backlogs and Boards.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue ge Iteration/StartDate`
   :::column-end:::
   :::column span="1":::
   Begin trend at Iteration start.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue le Iteration/EndDate`
   :::column-end:::
   :::column span="1":::
   End trend at Iteration end.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Iteration/StartDate le now()`
   :::column-end:::
   :::column span="1":::
   Select current Iteration.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Iteration/EndDate ge now()`
   :::column-end:::
   :::column span="1":::
   Select current Iteration
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close filter()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby(`
   :::column-end:::
   :::column span="1":::
   Start groupby()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(DateValue, State, WorkItemType, Priority, Area/AreaPath, Iteration/IterationPath), `
   :::column-end:::
   :::column span="1":::
   Group by DateValue (used for trending), and any fields you want to report on
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate($count as Count,  StoryPoints with sum as TotalStoryPoints)`
   :::column-end:::
   :::column span="1":::
   Aggregate by count of user stories, and sum of Story Points
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close groupby()
   :::column-end:::
:::row-end:::




### Burndown User Stories for a team and the current iteration

This query is the same as the one used above, except it filters by Team Name rather than Area Path. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"WorkItemType eq 'User Story' "
            &"and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) "
            &"and StateCategory ne 'Completed' "
            &"and DateValue ge Iteration/StartDate "
            &"and DateValue le Iteration/EndDate "
            &"and Iteration/StartDate le now()  "
            &"and Iteration/EndDate ge now() "
        &") "
        &"/groupby( "
            &"(DateValue,State,WorkItemType,Priority,Area/AreaPath,Iteration/IterationPath), "
            &"aggregate($count as Count, StoryPoints with sum as TotalStoryPoints) "
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
            WorkItemType eq 'User Story'
            and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname})
            and StateCategory ne 'Completed'
            and DateValue ge Iteration/StartDate
            and DateValue le Iteration/EndDate
            and Iteration/StartDate le now() 
            and Iteration/EndDate ge now()
        )
        /groupby(
            (DateValue,State,WorkItemType,Priority,Area/AreaPath,Iteration/IterationPath),
            aggregate($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

* * *

### Burndown User Stories for all sprints since the start of a year   

You may want to view a burndown of all the sprints in a single report. These queries pull in sprint burndowns, and their by story points, for all  sprints since the beginning of year 2022.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"WorkItemType eq 'User Story' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and StateCategory ne 'Completed' "
            &"and DateValue ge Iteration/StartDate "
            &"and DateValue le Iteration/EndDate "
            &"and Iteration/StartDate ge 2022-01-01Z "
        &") "
        &"/groupby( "
            &"(DateValue,Iteration/EndDate,Area/AreaPath,Iteration/IterationPath,State,WorkItemType,Priority,AreaSK), "
            &"aggregate($count as Count, StoryPoints with sum as TotalStoryPoints) "
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
            WorkItemType eq 'User Story'
            and startswith(Area/AreaPath,'{areapath}')
            and StateCategory ne 'Completed'
            and DateValue ge Iteration/StartDate
            and DateValue le Iteration/EndDate
            and Iteration/StartDate ge 2022-01-01Z
        )
        /groupby(
            (DateValue,Iteration/EndDate,Area/AreaPath,Iteration/IterationPath,State,WorkItemType,Priority,AreaSK),
            aggregate($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

* * *

<a id="remaining-work" />

### Burndown Tasks and Remaining Work

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
Doc-ready Power BI Query (anonomized)
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot? "
        &"$apply=filter( "
            &"startswith(Area/AreaPath,'{project}') "
            &"and StateCategory ne 'Completed' "
            &"and DateValue ge Iteration/StartDate "
            &"and DateValue le Iteration/EndDate "
            &"and Iteration/StartDate le now()  "
            &"and Iteration/EndDate ge now() "
            &"and WorkItemType eq 'Task' "
        &") "
            &"/groupby( "
            &"(DateValue,State,WorkItemType,Activity,Priority,Area/AreaPath,Iteration/IterationPath,AreaSK), "
            &"aggregate($count as Count, RemainingWork with sum as TotalRemainingWork) "
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
            startswith(Area/AreaPath,'{project}')
            and StateCategory ne 'Completed'
            and DateValue ge Iteration/StartDate
            and DateValue le Iteration/EndDate
            and Iteration/StartDate le now() 
            and Iteration/EndDate ge now()
            and WorkItemType eq 'Task'
        )
            /groupby(
            (DateValue,State,WorkItemType,Activity,Priority,Area/AreaPath,Iteration/IterationPath,AreaSK),
            aggregate($count as Count, RemainingWork with sum as TotalRemainingWork)
        )
```

***



[!INCLUDE [temp](includes/rename-query.md)]


## Expand columns in Power Query Editor

Prior to creating the report, you'll need to expand columns that return records containing several fields. In this instance, you'll want to expand the following records: 
- `Area`
- `Iteration`
- `AssignedTo` 

To learn how to expand work items, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns). 
 
[!INCLUDE [temp](includes/close-apply.md)]

## Create the stacked column chart report

1. In Power BI, choose the **Stacked column chart** report under **Visualizations**. 

	:::image type="content" source="media/reports-boards/sprint-burndown-visualizations.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for Sprint Burndown report. ":::

1. Add `DateValue` to **X-Axis**, right-click and select `DateValue`, rather than `Date Hierarchy`   

1. Add `Count` to **Y-Axis**. 

1. Add `State` to **Y-Axis**. 

The example report, which displays burndown on both Story Points and Count of Stories.


:::image type="content" source="media/reports-boards/sprint-burndown-clustered-column-chart.png" alt-text="Screenshot of Sample Power BI Sprint burndown clustered column chart report.":::

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
