---
title: List linked work items sample queries and reports  
titleSuffix: Azure DevOps
description: Learn how to generate Power BI reports based on Work Items with Direct Links.
ms.subservice: azure-devops-analytics
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 10/08/2021
---

# List linked work items sample queries and reports

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article shows you how to create a report that lists work items linked to other work items. For example, the following report shows a list of Features that are linked to User Stories with the parent-child link type.  

:::image type="content" source="media/reports-boards/parent-child-links-table-report.png" alt-text="Screenshot of Parent-child links of Features and User Stories table report.":::

To learn more about link types and linking work items, see [Link user stories, issues, bugs, and other work items](../../boards/backlogs/add-link.md).


Other sample queries include listing bugs with a Duplicate link to another bug, and listing bugs that don't contain a Duplicate link to another bug.

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Sample queries

Several queries are provided which show how to filter linked work items. All of these queries specify the `WorkItems` entity set as they return current data.  

[!INCLUDE [temp](includes/query-filters-work-items.md)]


### Return Features and their child User Stories 

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

#### [Power BI query](#tab/powerbi/)

```

let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'Feature' "
            &"and State ne 'Closed' and State ne 'Removed' "
            &"and startswith(Area/AreaPath,'{areapath}') " 
        &"&$select=WorkItemId,Title,WorkItemType,State,AreaSK "
        &"&$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath), "
                &"Links( "
                    &"$filter=LinkTypeName eq 'Child' "
                        &"and TargetWorkItem/WorkItemType eq 'User Story'; "
                    &"$select=LinkTypeName; "
                    &"$expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State) "
                &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```


#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
        $filter=WorkItemType eq 'Feature'
            and State ne 'Closed' and State ne 'Removed'
            and startswith(Area/AreaPath,'{areapath}')
        &$select=WorkItemId,Title,WorkItemType,State,AreaSK
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
                Links(
                    $filter=LinkTypeName eq 'Child'
                        and TargetWorkItem/WorkItemType eq 'User Story';
                    $select=LinkTypeName;
                    $expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State)
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
   Return User Stories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and State ne 'Closed' and State ne 'Removed'`
   :::column-end:::
   :::column span="1":::
   Omit Features whose **State** is set to *Closed* or *Removed*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="1":::
   Include only Features under a specific **Area Path** replacing `'{areapath}'`.<br>To filter by a team name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$select=WorkItemId,Title,WorkItemType,State,AreaSK`
   :::column-end:::
   :::column span="1":::
   Select fields to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$expand=AssignedTo($select=UserName), Iteration($select=IterationPath), Area($select=AreaPath), `
   :::column-end:::
   :::column span="1":::
   Specify fields to use to expand `AssignedTo`, `Iteration`, and `Area` entities.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Links(`
   :::column-end:::
   :::column span="1":::
   Expand the `Links` entity.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$filter=LinkTypeName eq 'Child'`
   :::column-end:::
   :::column span="1":::
   Filter linked work items to only those with *Child* link type. Other examples are *Parent*, *Child*, *Duplicate*, *Duplicate Of*, *Affects*, *Affected By*. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and TargetWorkItem/WorkItemType eq 'User Story';`
   :::column-end:::
   :::column span="1":::
   Only include linked User Stories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$select=LinkTypeName;`
   :::column-end:::
   :::column span="1":::
   Select the `LinkTypeName` property to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$expand=TargetWorkItem($select=WorkItemType, WorkItemId, Title, State)`
   :::column-end:::
   :::column span="1":::
   Select the properties of the linked work item to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close the `Links()` clause.
   :::column-end:::
:::row-end:::
 
### Return User Stories linked with the Related link type 

[!INCLUDE [temp](includes/sample-powerbi-query.md)]


#### [Power BI query](#tab/powerbi/)

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'User Story' "
            &"and State ne 'Closed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
        &"&$select=WorkItemId,Title,WorkItemType,State,AreaSK "
        &"&$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath), "
                &"Links( "
                    &"$filter=LinkTypeName eq 'Related' "
                        &"and TargetWorkItem/WorkItemType eq 'User Story'; "
                    &"$select=LinkTypeName; "
                    &"$expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State) "
                &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
        $filter=WorkItemType eq 'User Story'
            and State ne 'Closed'
            and startswith(Area/AreaPath,'{areapath}')
        &$select=WorkItemId,Title,WorkItemType,State,AreaSK
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
                Links(
                    $filter=LinkTypeName eq 'Related'
                        and TargetWorkItem/WorkItemType eq 'User Story';
                    $select=LinkTypeName;
                    $expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State)
                )
```

***

### Return linked User Stories filtered by Teams 

The following query is the same as the one used previously in this article, except it filters by Team Name rather than Area Path. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'User Story' "
            &"and State ne 'Closed' "
            &"and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) "
        &"&$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK "
        &"&$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath), "
                &"Links( "
                    &"$filter=LinkTypeName eq 'Related' "
                        &"and TargetWorkItem/WorkItemType eq 'User Story'; "
                    &"$select=LinkTypeName; "
                    &"$expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State) "
                &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
        $filter=WorkItemType eq 'User Story'
            and State ne 'Closed'
            and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname})
        &$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
                Links(
                    $filter=LinkTypeName eq 'Related'
                        and TargetWorkItem/WorkItemType eq 'User Story';
                    $select=LinkTypeName;
                    $expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State)
                )
```

***

### Return bugs with a Duplicate link to another bug

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'Bug' "
            &"and State ne 'Closed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and Links/any(x:x/LinkTypeName eq 'Duplicate' and x/TargetWorkItem/WorkItemType eq 'Bug') "
        &"&$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames "
        &"&$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath), "
            &"Links( "
                &"$filter=LinkTypeName eq 'Duplicate' "
                &"and TargetWorkItem/WorkItemType eq 'Bug'; "
                    &"$select=LinkTypeName; "
                &"$expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State) "
            &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
        $filter=WorkItemType eq 'Bug'
            and State ne 'Closed'
            and startswith(Area/AreaPath,'{areapath}')
            and Links/any(x:x/LinkTypeName eq 'Duplicate' and x/TargetWorkItem/WorkItemType eq 'Bug')
        &$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath),
            Links(
                $filter=LinkTypeName eq 'Duplicate'
                and TargetWorkItem/WorkItemType eq 'Bug';
                    $select=LinkTypeName;
                $expand=TargetWorkItem($select=WorkItemType,WorkItemId,Title,State)
            )
```

***

### Return bugs that don't have a Duplicate link to another bug

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'Bug' "
                &"and State ne 'Closed' "
                &"and startswith(Area/AreaPath,'{areapath}') "
                &"and not (Links/any(x:x/LinkTypeName eq 'Duplicate' and x/TargetWorkItem/WorkItemType eq 'Bug')) "
        &"&$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames "
        &"&$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
        $filter=WorkItemType eq 'Bug'
                and State ne 'Closed'
                and startswith(Area/AreaPath,'{areapath}')
                and not (Links/any(x:x/LinkTypeName eq 'Duplicate' and x/TargetWorkItem/WorkItemType eq 'Bug'))
        &$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)
```

***



[!INCLUDE [temp](includes/rename-query.md)]


## Transform data in Power Query Editor

Prior to creating the report, you'll need to expand columns that return records containing several fields. In this instance, you'll want to expand the following records: 
- `Links` 
- `Links.TargetWorkItem`
- `Area`
- `Iteration`
- `AssignedTo` 

To learn how to expand work items, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns). 
 
### (Optional) Rename fields

Once you've expanded the columns, you may want to rename one or more fields. For example, you can rename the column `AreaPath` to `Area Path`. You can rename them in the data table view, or later when you create the report. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

In this example, the following fields have been renamed: 

| Original field name | Rename |
|---------------------|--------|
| Links.TargetWorkItem.ID | Target ID |
| LinksLinkTypeName       | Link Type |
| Links.TargetWorkItem.State | Target State |
| Links.TargetWorkItem.Title | Target Title | 


[!INCLUDE [temp](includes/close-apply.md)]

## Create a table report to list linked work items 

1. In Power BI, choose **Table** report under **Visualizations**. 

	:::image type="content" source="media/reports-boards/parent-child-links-list-table-visualizations.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for Parent-Child Links list table report. ":::

1. Add the following fields in the order indicated to **Columns**:
	- **ID**, right-click and select **Don't summarize**  
	- **State**
	- **Title**
	- **Target ID**, right-click and select **Don't summarize**
	- **Link Type**
	- **Target State**
	- **Target Title**  
 
The example report displays. 

:::image type="content" source="media/reports-boards/parent-child-links-table-report.png" alt-text="Screenshot of Sample Parent-child links of Features and User Stories table report.":::

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
 

 <!---
1. In **Filters**, for the column "Link.TargetWorkItem.WorkItemID", select **Show items when value** and select the option **is not blank**. Then select **Apply Filter**.
    - This action filters out any work items that don't have a link.
 
--> 
