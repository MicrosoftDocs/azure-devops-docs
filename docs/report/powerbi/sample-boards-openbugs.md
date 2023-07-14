---
title: Open bugs sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate an open bugs Power BI report.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 12/05/2022
---

# Open bugs or user stories sample reports 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

To generate a report that lists open bugs or user stories, select the Matrix report in Power BI and use a query similar to the ones provided in this article. The report you generate lists open bugs or user stories broken down by **State** and **Assigned To** fields, as shown in  the following image. 

:::image type="content" source="media/reports-boards/open-bugs-report.png" alt-text="Screenshot of Open Bugs sample matrix report.":::

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]


## Sample queries

Several queries are provided which filter bugs or user stories by area path, iteration path, or team. All of these queries specify the `WorkItems` entity set as they return current and not historical data.  

[!INCLUDE [temp](includes/query-filters-work-items.md)]

### Bugs filtered by Area Path

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'Bug' "
            &"and StateCategory ne 'Completed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
        &"&$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK "
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
            and StateCategory ne 'Completed'
            and startswith(Area/AreaPath,'{areapath}')
        &$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name 
- `{project}` - Your team project name, or omit "/{project}" entirely, for a cross-project query
- `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`


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
   `$filter=WorkItemType eq 'Bug'`
   :::column-end:::
   :::column span="1":::
   Return Bugs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and StateCategory ne 'Completed'`
   :::column-end:::
   :::column span="1":::
   Filter out items that are completed. For more information on State Categories, see [How workflow category states are used in Azure Boards backlogs and boards](../../boards/work-items/workflow-and-state-categories.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="1":::
   And filter work items under a specific Area Path. To filter by Team Name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$select=WorkItemId, Title, WorkItemType, State, Priority, Severity, TagNames`
   :::column-end:::
   :::column span="1":::
   Select fields to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$expand=AssignedTo($select=UserName), Iteration($select=IterationPath), Area($select=AreaPath)`
   :::column-end:::
   :::column span="1":::
   Select expandable property fields `AssignedTo`, `Iteration`, `Area`.
   :::column-end:::
:::row-end:::


### User stories filtered by teams 

You can query for open bugs by one or more teams rather than Area Path.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'Bug' "
            &"and StateCategory ne 'Completed'' "
            &"and (Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}') "
        &"&$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK "
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
            and StateCategory ne 'Completed'
            and (Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}') or Teams/any(x:x/TeamName eq '{teamname}')
        &$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)
```

***

### User Stories in a specific Area Path and Iteration Path

The following query supports filtering  user stories for a specific Area Path and Iteration Path.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'User Story' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and startswith(Iteration/IterationPath,'{iterationpath}') "
        &"&$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK "
        &"&$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
        $filter=WorkItemType eq 'User Story'
            and startswith(Area/AreaPath,'{areapath}')
            and startswith(Iteration/IterationPath,'{iterationpath}')
        &$select=WorkItemId,Title,WorkItemType,State,Priority,Severity,TagNames,AreaSK
        &$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)
```

***


[!INCLUDE [temp](includes/rename-query.md)]


## Expand columns in Power Query Editor

The `&$expand=AssignedTo($select=UserName), Iteration($select=IterationPath), Area($select=AreaPath)` clause returns records that contain several fields. Prior to creating the report, you need to expand the record to flatten it into specific fields. In this instance, you'll want to expand the following records: 

- `AssignedTo`
- `AreaPath`
- `IterationPath`

To learn how, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md). 

## (Optional) Rename fields

Once you've expanded the columns, you may want to rename one or more fields. For example, you can rename the column `AreaPath` to `Area Path`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]


## Create the Matrix report

1. In Power BI, choose the **Matrix** report under **Visualizations**. 

	:::image type="content" source="media/reports-boards/open-bugs-selections.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for Open Bugs report. ":::

1. Add `Assigned To` to **Rows**.
1. Add  `State` to **Columns**.
1. Add 1WorkItemId1 to **Values**, and right-click 1WorkItemId` and ensure **Count** is selected.

The example report displays. 
 
:::image type="content" source="media/reports-boards/open-bugs-report.png" alt-text="Screenshot of Sample Open Bugs matrix report.":::


## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
