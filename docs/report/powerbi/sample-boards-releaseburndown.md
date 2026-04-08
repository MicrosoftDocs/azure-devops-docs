---
title: Release Burndown sample queries and Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a release burndown Power BI report.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: sample
monikerRange: "<=azure-devops"
ms.date: 04/07/2026
---

# Release burndown sample queries and reports

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Burndown and burnup reports show how much work gets completed over time. The following image shows burndown both by count of user stories and sum of story points.

:::image type="content" source="media/reports-boards/release-burndown-clustered-column-chart-report.png" alt-text="Screenshot of Power BI Release burndown clustered column chart report.":::

Burndown charts only make sense if you plan your work for the time period of the chart. Otherwise, if you plan on a sprint-by-sprint basis, you don't see a standard burndown. In these instances, a burnup chart makes more sense to see how progress is made over time. 

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

For more information about burndown and burnup, see [Configure a burndown or burnup widget](../dashboards/configure-burndown-burnup-widgets.md) and [Burndown and burnup guidance](../dashboards/burndown-guidance.md).

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Sample queries

The queries in this section show how to generate burndown charts of work items based on historical data. All of these queries specify the `WorkItemSnapshot` entity set.  

[!INCLUDE [temp](includes/query-filters-work-items.md)]

### Burndown of user stories in an area path from start and end date

The following query shows how to return historical data of user stories for a release based on work items tagged with a release tag. 

> [!NOTE]  
> For reports that filter by tag, assign the tag to the work item at the start of the release or burndown/burnup start date. Otherwise, the returned data doesn't include the work item.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?"
        &"$apply=filter(WorkItemType eq 'User Story' "
            &"and StateCategory ne 'Completed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and Tags/any(x:x/TagName eq '{tagname}') "
            &"and DateValue ge {startdate} "
            &"and DateValue le {enddate} "
        &") "
        &"/groupby ( "
            &"(DateValue,State,Area/AreaPath), "
            &"aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?
        $apply=filter(WorkItemType eq 'User Story'
            and StateCategory ne 'Completed'
            and startswith(Area/AreaPath,'{areapath}')
            and Tags/any(x:x/TagName eq '{tagname}')
            and DateValue ge {startdate}
            and DateValue le {enddate}
        )
        /groupby (
            (DateValue,State,Area/AreaPath),
            aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name. 
- `{project}` - Your team project name. Omit "/{project}" entirely for a cross-project query.
- `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`.
- `{tagname}` - A tag that represents your release. The report includes all work items tagged with `{tagname}`.
- `{startdate}` - The date to start the burndown report with the format: `YYYY-MM-DDZ`. For example, `2022-04-01Z` represents 2022-April-01. Don't enclose in quotes.
- `{enddate}` - The date to end the burndown report.

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
   `$apply=filter(WorkItemType eq 'User Story'`
   :::column-end:::
   :::column span="1":::
   Include User Stories in burndown.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and StateCategory ne 'Completed'`
   :::column-end:::
   :::column span="1":::
   Filters out items that are completed. For more information on State Categories, see [How workflow states and state categories are used in Backlogs and Boards.](../../boards/work-items/workflow-and-state-categories.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="1":::
   Include only User Stories under a specific **Area Path** replacing `'{areapath}'`.<br>To filter by a team name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Tags/any(x:x/TagName eq '{tagname}')`.
   :::column-end:::
   :::column span="1":::
   Specifies the tag label that represents the release to burndown on, and to include all work items tagged with {tagname} in the report. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Start burndown on or after the specified date. Example: **2022-04-01Z** represents 2022-April-01.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue le {enddate}`
   :::column-end:::
   :::column span="1":::
   End burndown on or before the specified date. Same format as `{startdate}`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close  `filter()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby (`
   :::column-end:::
   :::column span="1":::
   Start `groupby()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(DateValue, State, Area/AreaPath), `
   :::column-end:::
   :::column span="1":::
   Group by `DateValue` (used for trending), and any fields you want to report on.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints)`
   :::column-end:::
   :::column span="1":::
   Aggregate by count of user stories and sum of **Story Points**.
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

### Burndown of user stories for a team  

The following query returns burndown data filtered by team name rather than **Area Path**. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?"
        &"$apply=filter(WorkItemType eq 'User Story' "
            &"and StateCategory ne 'Completed' "
            &"and (Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}')) "
            &"and Tags/any(x:x/TagName eq '{tagname}') "
            &"and DateValue ge {startdate} "
            &"and DateValue le {enddate} "
        &") "
        &"/groupby ( "
            &"(DateValue,State,Area/AreaPath), "
            &"aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?
        $apply=filter(WorkItemType eq 'User Story'
            and StateCategory ne 'Completed'
            and (Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}'))
            and Tags/any(x:x/TagName eq '{tagname}')
            and DateValue ge {startdate}
            and DateValue le {enddate}
        )
        /groupby (
            (DateValue,State,Area/AreaPath),
            aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

* * *

### Burndown user stories with a snapshot every Friday

Using a weekly snapshot reduces the amount of data pulled into Power BI and increases query performance. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?"
        &"$apply=filter(WorkItemType eq 'User Story' "
            &"and StateCategory ne 'Completed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and Tags/any(x:x/TagName eq '{tagname}') "
            &"and DateValue ge {startdate} "
            &"and DateValue le {enddate} "
            &"and Date/DayName eq 'Friday' "
        &") "
        &"/groupby ( "
            &"(DateValue,State,Area/AreaPath,AreaSK), "
            &"aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?
        $apply=filter(WorkItemType eq 'User Story'
            and StateCategory ne 'Completed'
            and startswith(Area/AreaPath,'{areapath}')
            and Tags/any(x:x/TagName eq '{tagname}')
            and DateValue ge {startdate}
            and DateValue le {enddate}
            and Date/DayName eq 'Friday'
        )
        /groupby (
            (DateValue,State,Area/AreaPath,AreaSK),
            aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

***

### Burndown user stories based on an area and iteration path  

Some organizations use **Iteration Paths** to mark stories for a release. For example, they might use an **Iteration Path** of *MyProject\Release1*. The following query shows how to select user stories by iteration path.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?"
        &"$apply=filter(WorkItemType eq 'User Story' "
            &"and StateCategory ne 'Completed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and startswith(Iteration/IterationPath,'{iterationpath}') "
            &"and DateValue ge {startdate} "
            &"and DateValue le {enddate} "
            &") "
        &"/groupby ( "
            &"(DateValue,StateCategory,State,Area/AreaPath,AreaSK), "
            &"aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?
        $apply=filter(WorkItemType eq 'User Story'
            and StateCategory ne 'Completed'
            and startswith(Area/AreaPath,'{areapath}')
            and startswith(Iteration/IterationPath,'{iterationpath}')
            and DateValue ge {startdate}
            and DateValue le {enddate}
            )
        /groupby (
            (DateValue,StateCategory,State,Area/AreaPath,AreaSK),
            aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

***

### Burndown user stories with a custom field value  

Some organizations use a custom field to mark user stories for a release. For example, they might use a field called **Milestone**. This query shows how to select user stories by a custom field.  

Replace both `{customfieldname}` and `{releasevalue}` in the query. To determine the name of your custom field, see [Metadata reference for Azure Boards, Custom properties](../analytics/entity-reference-boards.md#custom-properties). Replace `{customfieldname}` with the custom property name, such as `Custom_Milestone`.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?"
        &"$apply=filter(WorkItemType eq 'User Story' "
            &"and StateCategory ne 'Completed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and {customfieldname} eq '{releasevalue}' "
            &"and DateValue ge {startdate} "
            &"and DateValue le {enddate} "
            &") "
        &"/groupby ( "
            &"(DateValue,StateCategory,State,Area/AreaPath,AreaSK), "
            &"aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints) "
        &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?
        $apply=filter(WorkItemType eq 'User Story'
            and StateCategory ne 'Completed'
            and startswith(Area/AreaPath,'{areapath}')
            and {customfieldname} eq '{releasevalue}'
            and DateValue ge {startdate}
            and DateValue le {enddate}
            )
        /groupby (
            (DateValue,StateCategory,State,Area/AreaPath,AreaSK),
            aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints)
        )
```

* * *

[!INCLUDE [temp](includes/rename-query.md)]

## Expand columns in Power Query Editor

Before you create the report, expand columns that return records containing several fields. In this case, expand the following records: 
- `Area`
- `Iteration`
- `AssignedTo`

For more information about expanding work items, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the clustered column chart  

1. In Power BI, select **Clustered column chart** under **Visualizations**. 

	:::image type="content" source="media/reports-boards/release-burndown-visualizations.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for Release burndown clustered column chart report. ":::

1. Add `DateValue` to **X-Axis**, right-click and select `DateValue`, rather than `Date Hierarchy`   

1. Add `Count` to **Y-Axis**. 

1. Add `TotalStoryPoints` to **Y-Axis**. 
  

The example report displays burndown on both the count of Stories and sum of **Story Points**.

:::image type="content" source="media/reports-boards/release-burndown-clustered-column-chart-report.png" alt-text="Screenshot of Power BI Sample Release burndown clustered column chart report.":::

 
## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]

<!-- 
To pivot burndown by Area Path, complete the following steps:

1. Select Power BI Visualization **Stacked bar chart**. 
1. Add the field `DateValue` to **Axis**.
    - Right-click `DateValue` and select `DateValue`, rather than Date Hierarchy.
1. Add the field `TotalStoryPoints` or `Count` to **Values**. You can't have two fields in **Values**.
1. Add the field `Area.AreaPath` to **Legend**.

The example report displays burndown pivoted by Area Path.

> [!div class="mx-imgBorder"] 
> ![The example report displays burndown pivoted by Area Path.](media/odatapowerbi-releaseburndown-report2.png)

To pivot the burndown by State, add the field `State` to **Values**, replacing `Area.AreaPath`.

> [!div class="mx-imgBorder"] 
> ![To pivot the burndown by State, add the field "State".](media/odatapowerbi-releaseburndown-report3.png) 

-->