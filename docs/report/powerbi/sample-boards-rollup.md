---
title: Rollup child work item values to sample report
titleSuffix: Azure DevOps
description:  Learn how to generate a rollup of child work item values to the parent Power BI report.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample
ms.author: kaelli
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 10/05/2021
---

# Rollup child work item values to parent sample report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article shows you how to generate the rollup count of User Stories and total Story Points for a given set of Features. An example is shown in the following image. 

> [!div class="mx-imgBorder"] 
> ![Sample - Boards - Rollup - Report](media/reports-boards/feature-rollup-report.png)

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi.md)]

## Sample queries

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

### Substitution strings

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
- `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`.


### Query breakdown


The following table describes each part of the query.

:::row:::
   :::column span="1":::
   **Query part**
   :::column-end:::
   :::column span="2":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$filter=WorkItemType eq 'Feature'`
   :::column-end:::
   :::column span="2":::
   Return Features.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and State ne 'Cut'`
   :::column-end:::
   :::column span="2":::
   Omit Closed bugs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="2":::
   Work items under a specific Area Path. Replacing with `Area/AreaPath eq '{areapath}'` returns items at a specific Area Path.
   
   To filter by Team Name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Descendants/any()`
   :::column-end:::
   :::column span="2":::
   Include all Features, even the ones with no User Stories. Replace with "any(d:d/WorkItemType eq 'User Story')" to omit Features that don't have child User Stories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$select=WorkItemId, Title, WorkItemType, State`
   :::column-end:::
   :::column span="2":::
   Select fields to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$expand=AssignedTo($select=UserName), Iteration($select=IterationPath), Area($select=AreaPath),`
   :::column-end:::
   :::column span="2":::
   Expand Assigned To, Iteration, Area entities and select entity fields.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Descendants(`
   :::column-end:::
   :::column span="2":::
   Expand Descendants.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$apply=filter(WorkItemType eq 'User Story')`</code>
   :::column-end:::
   :::column span="2":::
   Filters the descendants. Only include User Stories (omits Tasks and Bugs).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/aggregate($count as CountOfUserStories, StoryPoints with sum as TotalStoryPoints)`
   :::column-end:::
   :::column span="2":::
   For all Descendants matching the filter clause above, count them, and sum the StoryPoints field.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="2":::
   Close Descendants().
   :::column-end:::
:::row-end:::



[!INCLUDE [temp](includes/query-filters-work-items.md)]

## Power BI transforms

[!INCLUDE [temp](includes/sample-expandcolumns.md)]

### Expand Descendants column

1. Choose the expand button, and select the columns to report on:

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding an entity column](media/odatapowerbi-expanddescendants.png)

2. Check all the columns and choose **OK**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding Descendants](media/odatapowerbi-expandrollup.png)

3. The Descendants entity is flattened to the selected columns:

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanded Descendants](media/odatapowerbi-expandedrollup.png)

### Replace null values in rollup fields

If a work item doesn't have any children, the rollup value may be null. For example, **Descendants.CountOfUserStories** is "null" if a Feature doesn't have any child User Stories.

For easier reporting, replace all nulls with zero by following these steps.

[!INCLUDE [temp](includes/sample-replace-nulls.md)]

Repeat for all the rollup columns.

[!INCLUDE [temp](includes/sample-finish-query.md)]


## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that columns are renamed as indicated in the corresponding images. 

> [!div class="mx-imgBorder"] 
> ![Feature rollup fields.](media/reports-boards/feature-rollup-fields.png)

For a simple report, do the following steps:

1. Choose the Power BI Visualization **Table**. 
1. Add the following fields to **Values**
    - **WorkItemId**, choose **Don't summarize** to show ID
    - **WorkItemType**
    - **Title**
    - **State**
    - **Count of User Stories**
    - **Total Story Points**

The example report displays:

> [!div class="mx-imgBorder"] 
> ![Feature rollup sample report.](media/reports-boards/feature-rollup-report.png)

[!INCLUDE [temp](includes/sample-multipleteams.md)]

## Additional queries

You can use the following additional queries to create different but similar reports using the same steps defined previously in this article.

### Filter by Teams, rather than Area Path

You can generate rollup reports filtering by Team Name rather than Area Path.  

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

You can rollup story points to Epics using the following query.  

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

### Rollup Tasks Remaining Work to Features 

#### [Power BI](#tab/powerbi/)

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
                &"$apply=filter(WorkItemType eq 'Task')"
                &"/aggregate(RemainingWork with sum as TotalRemainingWork)"
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
        and State ne 'Cut'
        and startswith(Area/AreaPath,'{areapath}')
        and Descendants/any()
    &$select=WorkItemId,Title,WorkItemType,State,AreaSK
    &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
        Descendants(
        $apply=filter(WorkItemType eq 'Task')
        /aggregate(RemainingWork with sum as TotalRemainingWork)
        )
```

***

### Rollup Bug count to Features

#### [Power BI](#tab/powerbi/)

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
        and State ne 'Cut'
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

## Full list of sample reports

[!INCLUDE [temp](includes/sample-fulllist.md)]

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
