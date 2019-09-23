---
title: Add a Team slicer to a Power BI report
titleSuffix: Azure DevOps
description: Sample Power BI queries to add a Team slicer to a Power BI report
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe
ms.manager: jillfra
ms.author: kaelli
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 08/07/2019
---


# Add a Team slicer to a Power BI report

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Often Power BI reports include data from multiple teams for aggregation and comparison. This article shows you how to add a Team slicer to an existing Power BI report. The Team slicer allows you to filter the report data by Teams, rather than Area Path.

> [!IMPORTANT]
> The Team filter requires that the **"AreaSK"** field is included in the query used by the report you want to filter. 
> All of the queries provided in the sample reports already include **"AreaSK"**. 
> If you have created your own query, make sure it returns "AreaSK" in either the $select or groupby() clauses.

[!INCLUDE [temp](_shared/sample-required-reading.md)]




## Sample queries

You will need to add an additional query to your Power BI report. The query below returns the mapping between Teams and Area Paths.

#### [Power BI Query](#tab/powerbi/)

[!INCLUDE [temp](_shared/sample-powerbi-query.md)]

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

#### [OData Query](#tab/odata/)

[!INCLUDE [temp](_shared/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v1.0/Areas?
        $filter=startswith(AreaPath,'{areapath}')
            &$select=AreaSK,AreaPath
            &$expand=Teams($select=TeamName)
```

***

### Substitution strings

[!INCLUDE [temp](_shared/sample-query-substitutions.md)]
* {areapath} - Your Area Path. Example format: Project\Level1\Level2



### Query breakdown


The following table describes each part of the query.

<table width="90%">
<tbody valign="top">
<tr><td width="25%"><b>Query part</b></td><td><b>Description</b></td><tr>
<tr><td><code>$filter=startswith(AreaPath, '{areapath}')</code></td><td>Return all teams mapped to an Area Path at or under the specified {areapath}. To include all teams in a project, omit this statement.</td><tr>
<tr><td><code>&$select=AreaSK, AreaPath</code></td><td>Returning Area Path fields, to use for mapping</td><tr>
<tr><td><code>&$expand=Teams($select=TeamName)</code></td><td>Returning the Team associated with the Area Path</td><tr>
</tbody>
</table>


## Power BI transforms

### Expand the Teams column

1. Choose the expand button.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding team column](_img/odatapowerbi-expandteam.png)

1. Select the fields to flatten.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding team column](_img/odatapowerbi-expandteam2.png)

1. Table will now contain entity field(s).

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding team column](_img/odatapowerbi-expandteam3.png)

[!INCLUDE [temp](_shared/sample-finish-query.md)]

## Create a Relationship using "AreaSK"

After selecting Close & Apply, and returning to Power BI, follow these steps:

1. Select **Modeling** menu
1. Select **Manage Relationships**
1. Create a relationship between your Report query and the Teams query. It is likely that Power BI will auto-detect and create the relationship for you. Here is an example of a relationship between the query in the [Open Bugs](sample-boards-openbugs.md) report and the Teams query:

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding an entity column](_img/odatapowerbi-timeslicer-relationships.png)
    
## Add the Team Filter to an existing report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 

> [!div class="mx-imgBorder"] 
> ![Power BI + OData - expanding an entity column](_img/odatapowerbi-timeslicer-fields.png)

To add a team filter to the Power BI report, follow these steps:

1. Select Visualization **Slicer**
1. Add the "Team.TeamName" field to **Field**

The example below shows the [Open Bugs](sample-boards-openbugs.md) report with a Team filter added. Selecting a team in the slicer filters the results of the Open Bugs report. This will work for any report, as long as its query returns AreaSK.

> [!div class="mx-imgBorder"] 
> ![Team Slicer report](_img/odatapowerbi-timeslicer-report.png)

## Additional queries

### Filter by Teams, rather than Area Path

This query is the same as the one used above, except it filters by Team Name rather than Area Path. 

#### [Power BI Query](#tab/powerbi/)

[!INCLUDE [temp](_shared/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v1.0/Areas?"
        &"$filter=(Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) "
            &"&$select=AreaSK,AreaPath "
            &"&$expand=Teams($select=TeamName) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData Query](#tab/odata/)

[!INCLUDE [temp](_shared/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v1.0/Areas?
        $filter=(Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname}) or Teams/any(x:x/TeamName eq '{teamname})
            &$select=AreaSK,AreaPath
            &$expand=Teams($select=TeamName)
```

***

## Full list of sample reports

[!INCLUDE [temp](_shared/sample-fulllist.md)]

## Related articles

[!INCLUDE [temp](_shared/sample-relatedarticles.md)]