---
title: Add a Team slicer to a Power BI report
titleSuffix: Azure DevOps
description: Learn how to add a team slicer to a Power BI report.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 12/16/2022
---


# Add a team slicer to a Power BI report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Often Power BI reports include data from multiple teams for aggregation and comparison. This article shows you how to add a Team slicer to an existing Power BI report. The Team slicer allows you to filter the report data by Teams, rather than Area Path.

> [!IMPORTANT]
> The Team filter requires that the **"AreaSK"** field is included in the query used by the report you want to filter. 
> All of the queries provided in the sample reports already include **"AreaSK"**. 
> If you've created your own query, make sure it returns "AreaSK" in either the $select or groupby() clauses.

[!INCLUDE [temp](includes/sample-required-reading.md)]


[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Sample queries

To use a team slicer in a Power BI report, you'll need to add another query to your Power BI report. The following query returns the mapping between teams and Area Paths.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v1.0/Areas?"
        &"$filter=startswith(AreaPath,'{areapath}') "
            &"&$select=AreaSK,AreaPath "
            &"&$expand=Teams($select=TeamName) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v1.0/Areas?
        $filter=startswith(AreaPath,'{areapath}')
            &$select=AreaSK,AreaPath
            &$expand=Teams($select=TeamName)
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
---
:::row:::
   :::column span="1":::
   `$filter=startswith(AreaPath, '{areapath}')`
   :::column-end:::
   :::column span="1":::
   Return all teams mapped to an **Area Path** at or under the specified `{areapath}`. To include all teams in a project, omit this statement.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$select=AreaSK, AreaPath`
   :::column-end:::
   :::column span="1":::
   Return **Area Path** fields, to use for mapping.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$expand=Teams($select=TeamName)`
   :::column-end:::
   :::column span="1":::
   Return the team associated with the **Area Path**.
   :::column-end:::
:::row-end:::

[!INCLUDE [temp](includes/rename-query.md)]
 
##  Expand the Teams column

1. Choose the expand button.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot showing choose the expand button.](media/odatapowerbi-expandteam.png)

1. Select the fields to flatten.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot that shows how ot select the fields to flatten.](media/odatapowerbi-expandteam2.png)

1. Table will now contain entity field(s).

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of table that now contains entity fields.](media/odatapowerbi-expandteam3.png)
 

## Create a Relationship using "AreaSK"

After selecting Close & Apply, and returning to Power BI, follow these steps:

1. From the **Modeling** menus, select **Manage Relationships**.
1. Create a relationship between your Report query and the Teams query. It's likely that Power BI will autodetect and create the relationship for you. Here's an example of a relationship between the query in the [Open Bugs](sample-boards-openbugs.md) report and the Teams query:

    > [!div class="mx-imgBorder"] 
    > ![Screenshot that shows example of relationship between queries.](media/odatapowerbi-timeslicer-relationships.png)
    
## Add the Team Filter to an existing report

1. On the page you want to add the team filter to, make sure no charts are selected, and then choose **Slicer** from the **Visualizations** pane. 

	:::image type="content" source="media/reports-boards/team-slicer-visualizations.png" alt-text="Screenshot of Power BI Visualizations and Fields selections for team slicer. ":::

1. Add `Team.TeamName` to **Field**.

To learn more about working with slicers, see [Slicers in Power BI](/power-bi/visuals/power-bi-visualization-slicers).


## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
