---
title: Work Items with Direct Links sample report
titleSuffix: Azure DevOps
description: Learn how to generate Power BI reports based on Work Items with Direct Links.
ms.technology: devops-analytics
ms.author: kaelli
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 10/05/2021
---

# Work items with direct links sample reports

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article shows you how to list a given set of User Stories and their linked User Stories. An example is shown in the following image. 

> [!div class="mx-imgBorder"] 
> ![Sample - Direct Links - Report](media/odatapowerbi-directlinks-report.png)

Other sample queries include listing bugs with a Duplicate link to another bug, and listing bugs that don't contain a Duplicate link to another bug.

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi.md)]

## Sample queries

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?"
        &"$filter=WorkItemType eq 'User Story' "
            &"and State ne 'Closed' "
            &"and startswith(Area/AreaPath,'{areapath}') "
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
            and startswith(Area/AreaPath,'{areapath}')
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

### Substitution strings

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
* `{areapath}` - Your Area Path. Example format: `Project\Level1\Level2`


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
   `$filter=WorkItemType eq 'User Story'`
   :::column-end:::
   :::column span="1":::
   Return User Stories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and State ne 'Closed'`
   :::column-end:::
   :::column span="1":::
   Omit Closed items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and startswith(Area/AreaPath,'{areapath}')`
   :::column-end:::
   :::column span="1":::
   Work items under a specific Area Path. Replacing with `Area/AreaPath eq '{areapath}'` returns items at a specific Area Path.<br>To filter by Team Name, use the filter statement `Teams/any(x:x/TeamName eq '{teamname})'`.
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
   `&$expand=AssignedTo($select=UserName), Iteration($select=IterationPath), Area($select=AreaPath), `
   :::column-end:::
   :::column span="1":::
   Expand Assigned To, Iteration, Area entities and select entity fields.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Links(`
   :::column-end:::
   :::column span="1":::
   Expand the Links entity
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$filter=LinkTypeName eq 'Related'`
   :::column-end:::
   :::column span="1":::
   Filter to only links of type 'Related'. <br>Other examples are Parent, Child, Duplicate, Duplicate Of, Affects, Affected By.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and TargetWorkItem/WorkItemType eq 'User Story';`
   :::column-end:::
   :::column span="1":::
   Only include links to User Stories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$select=LinkTypeName;`
   :::column-end:::
   :::column span="1":::
   Select the LinkTypeName field to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$expand=TargetWorkItem($select=WorkItemType, WorkItemId, Title, State)`
   :::column-end:::
   :::column span="1":::
   Select the fields of the linked work item to return.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close Links().
   :::column-end:::
:::row-end:::



[!INCLUDE [temp](includes/query-filters-work-items.md)]

## Power BI transforms

[!INCLUDE [temp](includes/sample-expandcolumns.md)]

### Expand the Links column

1. Select the expand button on the Links column.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding a Links column](media/odatapowerbi-expandlinks.png)

1. Select all the fields to flatten.

    > [!div class="mx-imgBorder"] 
    > ![Select all the fields to flatten.](media/odatapowerbi-expandlinks2.png)

1. Select the expand button on the Links.TargetWorkItem column.

    > [!div class="mx-imgBorder"] 
    > ![Select the expand button on the Links.TargetWorkItem column.](media/odatapowerbi-expandlinks3.png)

1. Select the fields of the Target Work Item to flatten.

    > [!div class="mx-imgBorder"] 
    > ![Select the fields of the Target Work Item to flatten.](media/odatapowerbi-expandlinks4.png)

	The Table now contains flattened Link and Target Work Item field(s).

    > [!div class="mx-imgBorder"] 
    > ![The Table now contains flattened Link and Target Work Item field(s).](media/odatapowerbi-expandlinks5.png)

> [!NOTE]
> If the link represents a one-to-many or many-to-many relationship, then multiple links will
> expand to multiple rows, one for each link. 
> 
> For example, if Work Item #1 is linked to Work Item's #2 and #3, then when you expand the Links record, 
> you will have 2 rows for Work Item #1. One that represents its link to Work Item #2, and another that
> represents its link to Work Item #3.


[!INCLUDE [temp](includes/sample-finish-query.md)]


## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 

> [!div class="mx-imgBorder"] 
> ![Sample - Direct Links - Fields](media/odatapowerbi-directlinks-fields.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Table**.
1. Add columns "WorkItemID" to **Values**.
    - Right-click  "WorkItemID" and select **Don't summarize**.
1. Add column "Title" to **Values**.
1. Add column "Link.TargetWorkItem.WorkItemID" to **Values**.
    - Right-click "Link.TargetWorkItem.WorkItemID" and select **Don't summarize**.
1. Add column "Link.TargetWorkItem.Title" to **Values**.
1. In **Filters**, for the column "Link.TargetWorkItem.WorkItemID", select **Show items when value** and select the option **is not blank**. Then select **Apply Filter**.
    - This action filters out any work items that don't have a link.

The resulting example report is shown in the following image.

> [!NOTE]
> Note how work item 233464 is represented by two rows, one for each linked work item.

> [!div class="mx-imgBorder"] 
> ![Sample - Direct Links - Report](media/odatapowerbi-directlinks-report.png)

[!INCLUDE [temp](includes/sample-multipleteams.md)]

## Additional queries

You can use the following additional queries to create different but similar reports using the same steps defined previously in this article.

### Filter by Teams, rather than Area Path

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

## Full list of sample reports

[!INCLUDE [temp](includes/sample-fulllist.md)]

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
