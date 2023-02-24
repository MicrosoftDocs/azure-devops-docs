---
title: Rollup child work item values to sample report
titleSuffix: Azure DevOps
description:  Learn how to generate a rollup of child work item values to the parent Power BI report.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 12/16/2022
---

# Rollup child work item values to parent sample report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Rollup provides support to show a count of work items or sum of Story Points, Remaining Work, or other custom field of child items. This article provides several examples of how to generate a tabular rollup  report for Epics, Features, or User Stories that contain child work items. The following image shows an example of Story Points rolled up for their parent Features.  
 
:::image type="content" source="media/reports-boards/feature-rollup-report.png" alt-text="Screenshot of Feature rollup matrix report.":::

To learn more about rollup and options to show rollup, see [Display rollup progress or totals in Azure Boards](../../boards/backlogs/display-rollup.md).


[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Sample queries

The following queries return data from the `WorkItems` entity set to support generating rollup matrix reports. 

[!INCLUDE [temp](includes/query-filters-work-items.md)] 

### Rollup Story Points to Features of child User Stories based on Area Path

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
            &"$filter=WorkItemType eq 'Feature'"
            &" and State ne 'Cut'"
            &" and startswith(Area/AreaPath,'{areapath}')"
            &" and Descendants/any()"    
        &"& $select=WorkItemId,Title,WorkItemType,State,AreaSK"
        &"& $expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),"        
            &"Descendants("
                &"$apply=filter(WorkItemType eq 'User Story')"
                &"/aggregate($count as CountOfUserStories, StoryPoints with sum as TotalStoryPoints)"
            &")", 
        null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4])  
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=WorkItemType eq 'Feature'
        and State ne 'Cut'
        and startswith(Area/AreaPath,'{areapath}')
        and Descendants/any()
    &$select=WorkItemId,Title,WorkItemType,State,AreaSK
    &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
        Descendants(
        $apply=filter(WorkItemType eq 'User Story')
        /aggregate($count as CountOfUserStories, StoryPoints with sum as TotalStoryPoints)
        )
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
- `{organization}` - Your organization name 
- `{project}` - Your team project name, or omit "/{project}" entirely, for a cross-project query
- `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`.


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
   `$filter=WorkItemType eq 'Feature'`
   :::column-end:::
   :::column span="1":::
   Return Features.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and State ne 'Cut'`
   :::column-end:::
   :::column span="1":::
   Omit Closed bugs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="1":::
   Return work items under a specific Area Path, replacing `Area/AreaPath eq '{areapath}'` returns items at a specific Area Path. 
   To filter by Team Name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Descendants/any()`
   :::column-end:::
   :::column span="1":::
   Include all Features, even the ones with no User Stories. Replace with "any(d:d/WorkItemType eq 'User Story')" to omit Features that don't have child User Stories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$select=WorkItemId, Title, WorkItemType, State`
   :::column-end:::
   :::column span="1":::
   Select fields to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$expand=AssignedTo($select=UserName), Iteration($select=IterationPath), Area($select=AreaPath),`
   :::column-end:::
   :::column span="1":::
   Select expandable property fields `AssignedTo`, `Iteration`, `Area`.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Descendants(`
   :::column-end:::
   :::column span="1":::
   Expand the `Descendants` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$apply=filter(WorkItemType eq 'User Story')` 
   :::column-end:::
   :::column span="1":::
   Filter the descendants to only include User Stories (omits tasks and bugs).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/aggregate($count as CountOfUserStories, StoryPoints with sum as TotalStoryPoints)`
   :::column-end:::
   :::column span="1":::
   For all descendants matching the filter clause, count them, and sum the `StoryPoints` property.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close `Descendants()`.
   :::column-end:::
:::row-end:::

### Rollup Story Points to Features of child User Stories based on Teams

The following queries show how to generate rollup reports filtering by team name rather than Area Path.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
            &"$filter=WorkItemType eq 'Feature'"
            &" and State ne 'Cut'"
            &" and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname})"
            &" and Descendants/any()"    
        &"& $select=WorkItemId,Title,WorkItemType,State,AreaSK"
        &"& $expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),"        
            &"Descendants("
                &"$apply=filter(WorkItemType eq 'User Story')"
                &"/aggregate($count as CountOfUserStories, StoryPoints with sum as TotalStoryPoints)"
            &")", 
        null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4])  
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=WorkItemType eq 'Feature'
        and State ne 'Cut'
        and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname})
        and Descendants/any()
    &$select=WorkItemId,Title,WorkItemType,State,AreaSK
    &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
        Descendants(
        $apply=filter(WorkItemType eq 'User Story')
        /aggregate($count as CountOfUserStories, StoryPoints with sum as TotalStoryPoints)
        )
```

***

### Rollup Story Points to Epics

You can rollup story points to Epics using the following queries.  

#### [Power BI](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
            &"$filter=WorkItemType eq 'Epic'"
            &" and State ne 'Cut'"
            &" and startswith(Area/AreaPath,'{areapath}')"
            &" and Descendants/any(d:d/WorkItemType eq 'User Story')"    
        &"& $select=WorkItemId,Title,WorkItemType,State,AreaSK"
        &"& $expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),"        
            &"Descendants("
                &"$apply=filter(WorkItemType eq 'User Story')"
                &"/aggregate(StoryPoints with sum as TotalStoryPoints)"
            &")", 
        null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4])  
in
    Source
```

#### [OData](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=WorkItemType eq 'Epic'
        and State ne 'Cut'
        and startswith(Area/AreaPath,'{areapath}')
        and Descendants/any()
    &$select=WorkItemId,Title,WorkItemType,State,AreaSK
    &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
        Descendants(
        $apply=filter(WorkItemType eq 'User Story')
        /aggregate(StoryPoints with sum as TotalStoryPoints)
        )
```

***

### Rollup Tasks Remaining Work and Completed Work to User Stories 

The following query shows how to rollup **Remaining Work** and **Completed Work** assigned to child Tasks to User Stories in the hierarchy. These queries assume that Tasks are assigned as children of a User Story in the specified **Area Path**.

#### [Power BI](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
            &"$filter=WorkItemType eq 'User Story'"
            &" and State ne 'Removed'"
            &" and startswith(Area/AreaPath,'{areapath}')"
            &" and Descendants/any()"    
        &"& $select=WorkItemId,Title,WorkItemType,State,AreaSK"
        &"& $expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),"        
            &"Descendants("
                &"$apply=filter(WorkItemType eq 'Task')"
                &"/aggregate(RemainingWork with sum as TotalRemainingWork, CompletedWork with sum as TotalCompletedWork)"
            &")", 
        null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4])  
in
    Source
```

#### [OData](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=WorkItemType eq 'User Story'
        and State ne 'Removed'
        and startswith(Area/AreaPath,'{areapath}')
        and Descendants/any()
    &$select=WorkItemId,Title,WorkItemType,State,AreaSK
    &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
        Descendants(
        $apply=filter(WorkItemType eq 'Task')
        /aggregate(RemainingWork with sum as TotalRemainingWork, CompletedWork with sum as TotalCompletedWork)
        )
```

***

### Rollup Bug count to Features

The following queries show how to rollup the count of Bugs assigned to Features. These queries assume that Bugs are defined as children of a Feature in the specified **Area Path**.

#### [Power BI](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
            &"$filter=WorkItemType eq 'Feature'"
            &" and State ne 'Removed'"
            &" and startswith(Area/AreaPath,'{areapath}')"
            &" and Descendants/any()"    
        &"& $select=WorkItemId,Title,WorkItemType,State,AreaSK"
        &"& $expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),"        
            &"Descendants("
                &"$apply=filter(WorkItemType eq 'Bug')"
                &"/aggregate($count as CountOfBugs)"
            &")", 
        null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4])  
in
    Source
```

#### [OData](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=WorkItemType eq 'Feature'
        and State ne 'Removed'
        and startswith(Area/AreaPath,'{areapath}')
        and Descendants/any()
    &$select=WorkItemId,Title,WorkItemType,State,AreaSK
    &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
        Descendants(
        $apply=filter(WorkItemType eq 'Bug')
        /aggregate($count as CountOfBugs)
        )
```

***



[!INCLUDE [temp](includes/rename-query.md)]


## Expand columns in Power BI

The `&$expand=AssignedTo($select=UserName), Iteration($select=IterationPath), Area($select=AreaPath)` clause returns records that contain several fields. Prior to creating the report, you need to expand the record to flatten it into specific fields. In this instance, you'll want to expand the following records: 

- `AssignedTo`
- `AreaPath`
- `IterationPath`

To learn how, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md). 

## (Optional) Rename fields

Once you've expanded the columns, you may want to rename one or more fields. For example, you can rename the column `AreaPath` to `Area Path`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

## Replace null values in rollup fields

If a work item doesn't have any children, the rollup value may be null. For example, **Descendants.CountOfUserStories** is "null" if a Feature doesn't have any child User Stories.

For easier reporting, replace all nulls with zero by following these steps.

[!INCLUDE [temp](includes/sample-replace-nulls.md)]

Repeat for all the rollup columns.

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Table report

1. In Power BI, choose the **Table** report under **Visualizations**. 

	:::image type="content" source="media/reports-boards/rollup-table-selections.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for Rollup table report. ":::

1. Add the following fields to **Columns** in the order indicated: 
    - `WorkItemI`, choose **Don't summarize** to show ID if needed
    - `WorkItemType`
    - `Title`
    - `State`
    - `Count of User Stories`
    - `Total Story Points`. 
 
The example report displays.   
 
:::image type="content" source="media/reports-boards/feature-rollup-report.png" alt-text="Screenshot of Sample Feature rollup matrix report.":::
 
## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
