---
title: Feature Progress rollup sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate feature progress rollup by Story Points Power BI report.
ms.subservice: azure-devops-analytics
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 12/08/2022
---

# Feature progress rollup sample report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
This article shows you how to create a stacked bar report to display progress of Features based on completed child User Stories. The report displays the percentage complete by rollup of Story Points for a given set of active Features. An example is shown in the following image. 

:::image type="content" source="media/reports-boards/feature-progress-stacked-bar-chart.png" alt-text="Screenshot of Feature Progress stacked bar chart report.":::

You can view similar progress bar charts from your backlog by adding a rollup column. To learn how, see [Display rollup progress or totals](../../boards/backlogs/display-rollup.md).

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]


## Sample queries

Feature progress queries the `WorkItems` entity to get the current state of progress. 

[!INCLUDE [temp](includes/query-filters-work-items.md)]
  
### Review feature progress based on an area path

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'Feature' "
            &"and State ne 'Removed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
            &"and Descendants/any()"
            &"&$select=WorkItemId,Title,Area,Iteration,AssignedTo,WorkItemType,State,AreaSK"
            &"&$expand=Descendants( "
            &"$apply=filter(WorkItemType eq 'User Story') " 
                &"/groupby((StateCategory), "
                &"aggregate(StoryPoints with sum as TotalStoryPoints)) "
            &")  "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
        $filter=WorkItemType eq 'Feature'
            and State ne 'Removed'
            and startswith(Area/AreaPath,'{areapath}')
            and Descendants/any()
        &$select=WorkItemId,Title,Area,Iteration,AssignedTo,WorkItemType,State,AreaSK
        &$expand=Descendants(
            $apply=filter(WorkItemType eq 'User Story')
                /groupby((StateCategory),
                aggregate(StoryPoints with sum as TotalStoryPoints))
            ) 
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
- `{organization}` - Your organization name 
- `{project}` - Your team project name, or omit `/{project}` entirely, for a cross-project query
- `{areapath}` - Your Area Path. Example format: `Project/Level1/Level2`.


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
      Omit Features marked as Cut. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `and startswith(Area/AreaPath,'{areapath}')`  
   :::column-end:::
   :::column span="1":::
      Return work items under a specific Area Path. Replacing with `Area/AreaPath eq '{areapath}'` returns items at a specific Area Path.  
      To filter by Team Name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `and Descendants/any()`
   :::column-end:::
   :::column span="1":::
      Filter out any work items that have at least one or "any" descendant. Includes all Features with at least one Child work item. To get all work items with their descendants, even if they don't have any, run a query without the `Descendants/any()` filter. To omit Features that don't have child User Stories, replace with `any(d:d/WorkItemType eq 'User Story')`.   

      For all work items **with and without descendants**:  
      ```
      $filter=endswith(Area/AreaPath,'suffix')
      &$select=WorkItemId,Title,WorkItemType,State,Area, Descendants
      &$expand=Descendants($select=WorkItemId)
      ```  
         
      For all work items with **at least one descendant**:
      ```
      $filter=endswith(Area/AreaPath, 'suffix')and Descendants/any()
      &$select=WorkItemId,Title,WorkItemType,State,Area, Descendants
      &$expand=Descendants($select=WorkItemId)
      ```
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `&$select=WorkItemId, Title, WorkItemType, State`  
   :::column-end:::
   :::column span="1":::
      Select properties to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `&$expand=Descendants(`  
   :::column-end:::
   :::column span="1":::
      Start of expand `Descendants` clause
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `$apply=filter(WorkItemType eq 'User Story')`  
   :::column-end:::
   :::column span="1":::
      Filter the descendants. Only include User Stories (omit Tasks and Bugs).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `/groupby((StateCategory),`  
   :::column-end:::
   :::column span="1":::
      Group the rollup by StateCategory. For more information on State Categories, see [How workflow states and state categories are used in Backlogs and Boards](../../boards/work-items/workflow-and-state-categories.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `aggregate(StoryPoints with sum as TotalStoryPoints))`  
   :::column-end:::
   :::column span="1":::
      Aggregate sum of Story Points.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `)`  
   :::column-end:::
   :::column span="1":::
      Close `Descendants()` clause.
   :::column-end:::
:::row-end:::
 

### Review feature progress for a team  

The following query is the same as the one used above, except it filters by **Team Name** rather than **Area Path**. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'Feature' "
            &"and State ne 'Cut' "
            &"and (Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) "
            &"and Descendants/any() "
        &"&$select=WorkItemId,Title,WorkItemType,State,AreaSK "
        &"&$expand=Descendants( "
            &"$apply=filter(WorkItemType eq 'User Story') "
                &"/groupby((StateCategory), "
                &"aggregate(StoryPoints with sum as TotalStoryPoints)) "
            &")  "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
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
        &$expand=Descendants(
            $apply=filter(WorkItemType eq 'User Story')
                /groupby((StateCategory),
                aggregate(StoryPoints with sum as TotalStoryPoints))
            ) 
```

***

## Transform the data in Power Query Editor

The query returns several columns that you need to expand before you can use them to create a report. Any entity pulled in using an OData **$expand** statement returns a record with potentially several fields. Expand the record to flatten the entity into its fields.  

For the Feature Progress report, you'll need to carry out the following transforms: 

- Expand the `Descendants` column into two columns: `Descendants.StateCategory` and `Descendants.TotalStoryPoints`
- Apply **Pivot Column** transform on `Descendants.StateCategory` column to separate out individual **State** categories  
- Replace null values in all pivoted columns.  
- Add a custom column to represent percentage complete. The custom column will display errors if there are any null columns in the pivoted **State** columns.
 
To learn how, see the following sections in [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md):
- [Expand Descendants column](transform-analytics-data-report-generation.md#expand-descendants). 
- [Pivot Descendants.StateCategory column](transform-analytics-data-report-generation.md#pivot-statecategory).
- [Replace null values](transform-analytics-data-report-generation.md#replace-null-values). 
- [Create a percentage complete computed column](transform-analytics-data-report-generation.md#create-percent-complete)
 
> [!NOTE]   
> In this example, the **State** values for **User Story** include **Proposed**, **In Progress**, and **Completed**. 


[!INCLUDE [temp](includes/close-apply.md)]

## Create the stacked bar chart report 

1. In Power BI, choose **Stacked bar chart** report under **Visualizations**. 

	:::image type="content" source="media/reports-boards/feature-progress-visualizations.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for Feature Progress stacked bar chart report. ":::

1. Add `Title` to **Y-Axis**.

1. Add `PercentComplete` to **X-Axis**, right-click and select **Sum**.

The example report displays.

:::image type="content" source="media/reports-boards/feature-progress-stacked-bar-chart.png" alt-text="Screenshot of Sample Feature Progress stacked bar chart report.":::
 
## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
