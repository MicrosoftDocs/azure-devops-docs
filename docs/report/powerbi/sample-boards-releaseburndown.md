---
title: Release Burndown sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a release burndown Power BI report.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample
ms.author: kaelli
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 10/05/2021
---

# Release burndown sample report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article shows you how to display the burndown of User Stories for a release based on work items tagged with a release tag. The following image shows a burndown both by Story Points and User Stories count.
 
> [!div class="mx-imgBorder"] 
> ![Sample - Release Burndown - Report](media/odatapowerbi-releaseburndown-report.png)

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi.md)]

## Sample queries

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

### Substitution strings

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
- `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`.
- `{tag}` - A tag that represents your release. All work items tagged with `{tagname}` are included in the report.
- `{startdate}` - The date to start the burndown report.
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
   Work items under a specific Area Path. Replacing with `Area/AreaPath eq '{areapath}'` returns items at a specific Area Path.
   
   To filter by Team Name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Tags/any(x:x/TagName eq '{tagname}')`.
   :::column-end:::
   :::column span="1":::
   Specifies the Tag that represents the Release to burndown, and to include all work items tagged with {tagname} in the report.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Start burndown on or after the specified date. Example: **2019-04-01Z** represents 2019-April-01.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and DateValue le {enddate}`
   :::column-end:::
   :::column span="1":::
   Start burndown on or before the specified date. Same format as {startdate}.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close  filter().
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby (`
   :::column-end:::
   :::column span="1":::
   Start groupby().
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(DateValue, State, Area/AreaPath), `
   :::column-end:::
   :::column span="1":::
   Group by DateValue (used for trending), and any fields you want to report on.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate ($count as Count, StoryPoints with sum as TotalStoryPoints)`
   :::column-end:::
   :::column span="1":::
   Aggregate by count of user stories, and sum of Story Points.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close groupby().
   :::column-end:::
:::row-end:::


[!INCLUDE [temp](includes/query-filters-work-items.md)]

## Power BI transforms

[!INCLUDE [temp](includes/sample-expandcolumns.md)]

[!INCLUDE [temp](includes/sample-finish-query.md)]


## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 


> [!div class="mx-imgBorder"] 
> ![Sample -Release Burndown - Fields](media/odatapowerbi-releaseburndown-fields.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Clustered column chart**. 
1. Add the field "DateValue" to **Axis**
    - Right-click "DateValue" and select "DateValue", rather than Date Hierarchy
1. Add the field "TotalStoryPoints" to **Values**
1. Add the field "Count" to **Values**

The example report displays burndown on both Story Points and Count of Stories.

> [!div class="mx-imgBorder"] 
> ![The example report displays burndown on Story Points and Count of Stories.](media/odatapowerbi-releaseburndown-report.png)

To pivot burndown by Area Path, do the following steps:

1. Select Power BI Visualization **Stacked bar chart**. 
1. Add the field "DateValue" to **Axis**.
    - Right-click "DateValue" and select "DateValue", rather than Date Hierarchy.
1. Add the field "TotalStoryPoints" or "Count" to **Values**. You can't have two fields in Values.
1. Add the field "Area.AreaPath" to **Legend**.

The example report displays burndown pivoted by Area Path.

> [!div class="mx-imgBorder"] 
> ![The example report displays burndown pivoted by Area Path.](media/odatapowerbi-releaseburndown-report2.png)

To pivot the burndown by State, add the field "State" to **Values**, replacing "Area.AreaPath".

> [!div class="mx-imgBorder"] 
> ![To pivot the burndown by State, add the field "State".](media/odatapowerbi-releaseburndown-report3.png)

[!INCLUDE [temp](includes/sample-multipleteams.md)]

## Additional queries

You can use the following additional queries to create different but similar reports using the same steps defined previously in this article.

### Filter by Teams, rather than Area Path

This query is the same as the one used above, except it filters by Team Name rather than Area Path. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItemSnapshot?"
        &"$apply=filter(WorkItemType eq 'User Story' "
            &"and StateCategory ne 'Completed' "
            &"and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) "
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
            and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname})
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

### Burndown with a snapshot every Friday

Using a weekly snapshot reduces the amount of data pulled into Power BI, and increases query performance. 

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


### Burndown based off an Iteration Path

Some organizations use Iteration Paths to mark Stories for a Release. For example, they may have an Iteration Path of MyProject\Release1. The following query shows how to select Stories by Iteration Path.

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

### Burndown based off a custom field

Some organizations use a custom field to mark Stories for a Release. For example, they may have a field called "Milestone". This query shows you how to select Stories by a custom field.
You'll need to replace both `{customfield}` and `{releasevalue}` in the query.
To determine the name of your custom field, [explore the Analytics metadata](../extend-analytics/analytics-metadata.md). You'll use the Property Name as `{customfield}`.

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

## Full list of sample reports

[!INCLUDE [temp](includes/sample-fulllist.md)]

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
