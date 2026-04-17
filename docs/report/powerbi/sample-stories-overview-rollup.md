---
title: Requirements tracking, Stories overview rollup report 
titleSuffix: Azure DevOps
description: Learn how to use sample Power BI and OData queries to generate a one level roll-up report of aggregated metrics for work progress and status of tests and bugs.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: "<=azure-devops"
ms.date: 04/07/2026
ai-usage: ai-assisted
---

# Requirements tracking rollup sample report

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The Requirements tracking rollup report builds on the [Requirements tracking report](sample-stories-overview.md) and shows how to aggregate metrics for a one-level rollup. For example, if you're tracking requirements with user stories, you can aggregate data for features by using the queries provided in this article.

An example is shown in the following image. 

:::image type="content" source="media/odatapowerbi-storiesoverview-rollup.png" alt-text="Screenshot of Power BI Stories Overview Rollup Report.":::

This report displays the following information for each requirement that it lists:

- **Percent work completed**:  Progress bar that shows the percentage of completed work based on the rollup of completed hours for all tasks that are linked to the requirement.
- **Passed tests**: The number of test cases that pass based on the most recent test run.  
- **Failed tests**: The number of test cases that fail based on the most recent test run. 
- **Run tests**:  The number of test runs that are executed.  
- **Active bugs**: The number of linked bugs in an Active state. 
- **Closed bugs**: The number of linked bugs in a  Closed, Done, or Completed state. 

> [!NOTE] 
> Requirement tracking supports only test cases linked through a [**Requirement-based test suite**](../../test/create-a-test-plan.md). The association between a requirement work item&mdash;user story ([Agile](../../boards/work-items/guidance/agile-process.md)), product backlog item ([Scrum](../../boards/work-items/guidance/scrum-process.md)), requirement ([CMMI](../../boards/work-items/guidance/cmmi-process.md)), or issue ([Basic](../../boards/get-started/plan-track-work.md))&mdash;and manual test execution is only formed when you link the test case via a **Requirement-based test suite**. 

[!INCLUDE [stories-overview-info](includes/sample-stories-overview-info.md)] 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [stories-overview-prereqs](includes/sample-stories-overview-prereqs.md)]  

## Sample queries

To generate the report, add three Power BI queries to Power BI Desktop and then link them. Each query executes either the `WorkItems` or `TestPoints` entity set.
 
> [!NOTE]   
> The Power BI query snippets provided in the following sections include the requisite data transforms to expand columns and change data type.

### Query area and iteration paths

To scope your report to a particular area and iteration path, filter the query by using `AreaSK` and `IterationSK`. For details, see [Define basic queries using OData Analytics](../extend-analytics/analytics-recipes.md#area).

[!INCLUDE [temp](includes/query-filters-work-items.md)] 

### Query for percentage of hours completion for requirements

> [!NOTE]   
> Change the `WorkItemType` based on the process you're using. The Scrum template supports **Feature** and the Basic template supports **Epic** as the rollup work item type, respectively.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems? 
$filter=( 
    IterationSK eq {iterationSK}
    and AreaSK eq {areaSK}
    and WorkItemType eq 'Feature'
)
&$expand=Descendants( 
    $apply=filter( CompletedWork ne null or RemainingWork ne null ) 
    /aggregate( 
        iif(CompletedWork ne null, CompletedWork, 0) with sum as SumCompletedWork, 
        iif(RemainingWork ne null, RemainingWork, 0) with sum as SumRemainingWork 
    ) 
    /compute( 
        (SumCompletedWork add SumRemainingWork) as TotalWork, 
        SumCompletedWork as SumCompleted 
    ) 
    /compute( 
        iif(TotalWork gt 0,(SumCompleted div cast(TotalWork, Edm.Double) mul 100), 0) as PercCompletedWork 
    ) 
)
&$select=WorkItemId, Title", null, [Implementation="2.0"]),
    #"Expanded Descendants" = Table.ExpandTableColumn(Source, "Descendants", {"SumCompletedWork", "SumRemainingWork", "TotalWork", "SumCompleted", "PercCompletedWork"}, {"Descendants.SumCompletedWork", "Descendants.SumRemainingWork", "Descendants.TotalWork", "Descendants.SumCompleted", "Descendants.PercCompletedWork"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Expanded Descendants",{{"Descendants.SumCompletedWork", type number}, {"Descendants.SumRemainingWork", type number}, {"Descendants.TotalWork", type number}, {"Descendants.SumCompleted", type number}, {"Descendants.PercCompletedWork", type number}})
in
    #"Changed Type"
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems? 
$filter=( 
    IterationSK eq {iterationSK}
    and AreaSK eq {areaSK}
    and WorkItemType eq 'Feature'
)
&$expand=Descendants( 
    $apply=filter( CompletedWork ne null or RemainingWork ne null ) 
    /aggregate( 
        iif(CompletedWork ne null, CompletedWork, 0) with sum as SumCompletedWork, 
        iif(RemainingWork ne null, RemainingWork, 0) with sum as SumRemainingWork 
    ) 
    /compute( 
        (SumCompletedWork add SumRemainingWork) as TotalWork, 
        SumCompletedWork as SumCompleted 
    ) 
    /compute( 
        iif(TotalWork gt 0,(SumCompleted div cast(TotalWork, Edm.Double) mul 100), 0) as PercCompletedWork 
    ) 
)
&$select=WorkItemId, Title
```

***

### Query for test execution status of requirements

[!INCLUDE [temp](includes/query-filters-test.md)] 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints? 
	$apply=filter(
	    (TestSuite/RequirementWorkItem/IterationSK eq {iterationSK}
    and TestSuite/RequirementWorkItem/AreaSK eq {areaSK}
    and TestSuite/RequirementWorkItem/Processes/any(p:p/BacklogType eq 'RequirementBacklog')
    and TestSuite/RequirementWorkItem/Processes/all(p:p/IsBugType eq false)
	))
	/compute(iif(TestSuite/RequirementWorkItem/Parent ne null, TestSuite/RequirementWorkItem/Parent/WorkItemId, 0) as ParentWorkItemId, 
	iif(TestSuite/RequirementWorkItem/Parent ne null, TestSuite/RequirementWorkItem/Parent/Title, 'Unparented') as ParentWorkItemTitle
	)/groupby(
	    (ParentWorkItemId, ParentWorkItemTitle), 
	    aggregate(
	        $count as TotalCount, 
	        cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as PassedCount, 
	        cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as FailedCount, 
            cast(LastResultOutcome eq 'Blocked', Edm.Int32) with sum as BlockedCount,
            cast(LastResultOutcome eq 'NotApplicable', Edm.Int32) with sum as NotApplicableCount,
	        cast(LastResultOutcome eq 'None', Edm.Int32) with sum as NotRunCount, 
	        cast(LastResultOutcome ne 'None', Edm.Int32) with sum as RunCount)
)", null, [Implementation="2.0"]),
    #"Changed Type" = Table.TransformColumnTypes(Source,{{"TotalCount", type number}, {"PassedCount", type number}, {"FailedCount", type number}, {"BlockedCount", type number}, {"NotApplicableCount", type number}, {"NotRunCount", type number}, {"RunCount", type number}})
in
    #"Changed Type"
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints? 
$apply=filter(
    (TestSuite/RequirementWorkItem/IterationSK eq {iterationSK}
and TestSuite/RequirementWorkItem/AreaSK eq {areaSK}
and TestSuite/RequirementWorkItem/Processes/any(p:p/BacklogType eq 'RequirementBacklog')
and TestSuite/RequirementWorkItem/Processes/all(p:p/IsBugType eq false)
))
/compute(iif(TestSuite/RequirementWorkItem/Parent ne null, TestSuite/RequirementWorkItem/Parent/WorkItemId, 0) as ParentWorkItemId, 
iif(TestSuite/RequirementWorkItem/Parent ne null, TestSuite/RequirementWorkItem/Parent/Title, 'Unparented') as ParentWorkItemTitle
)/groupby(
    (ParentWorkItemId, ParentWorkItemTitle), 
    aggregate(
        $count as TotalCount, 
        cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as PassedCount, 
        cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as FailedCount, 
        cast(LastResultOutcome eq 'Blocked', Edm.Int32) with sum as BlockedCount,
        cast(LastResultOutcome eq 'NotApplicable', Edm.Int32) with sum as NotApplicableCount,
        cast(LastResultOutcome eq 'None', Edm.Int32) with sum as NotRunCount, 
        cast(LastResultOutcome ne 'None', Edm.Int32) with sum as RunCount
    )
)
```

***
 

[!INCLUDE [temp](includes/note-test-suites-requirements.md)]  
 

### Query for status of bugs linked to the requirements

> [!NOTE]   
> Change the `WorkItemType` based on the process you're using. The Scrum template supports **Feature** and the Basic template supports **Epic** as the rollup work item type, respectively.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=(
        IterationSK eq {iterationSK}
        and AreaSK eq {areaSK}
        and WorkItemType eq 'Feature'
    )
&$expand=Descendants(
    $apply=filter(
        WorkItemType eq 'Bug'
    )
    /groupby(
        (State),
        aggregate($count as Count)
    )
)
&$select=WorkItemId,Title", null, [Implementation="2.0"]),
    #"Expanded Descendants" = Table.ExpandTableColumn(Source, "Descendants", {"State", "Count"}, {"Descendants.State", "Descendants.Count"}),
    #"Filtered Rows" = Table.SelectRows(#"Expanded Descendants", each [Descendants.Count] <> null and [Descendants.Count] <> ""),
    #"Pivoted Column" = Table.Pivot(#"Filtered Rows", List.Distinct(#"Filtered Rows"[Descendants.State]), "Descendants.State", "Descendants.Count", List.Sum),
    #"Changed Type" = Table.TransformColumnTypes(#"Pivoted Column",{{"Active", type number}, {"Closed", type number}})
in
    #"Changed Type"
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=(
        IterationSK eq {iterationSK}
        and AreaSK eq {areaSK}
        and WorkItemType eq 'Feature'
    )
&$expand=Descendants(
    $apply=filter(
        WorkItemType eq 'Bug'
    )
    /groupby(
        (State),
        aggregate($count as Count)
    )
)
&$select=WorkItemId,Title
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name. 
- `{project}` - The name of your project.  
- `{iterationSK}` - The GUID associated with the **Iteration Path** of interest. To look up the GUID, see [Return the IterationSK for a specific Iteration Path](../extend-analytics/wit-analytics.md#iterationsk).
- `{areaSK}` - The GUID associated with the **Area Path** of interest. To look up the GUID, see [Return the AreaSK for a specific Area Path](../extend-analytics/wit-analytics.md#areask).
 

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
       `$filter=(
        IterationSK eq {iterationSK}
        and AreaSK eq {areaSK}`
        and WorkItemType eq 'Feature'
        )`
   :::column-end:::
   :::column span="1":::
   Returns data for only Features under the specified Iteration and Area.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `filter(
        (TestSuite/RequirementWorkItem/IterationSK eq {iterationSK} 
        and TestSuite/RequirementWorkItem/AreaSK eq {areaSK}
        and TestSuite/RequirementWorkItem/Processes/any(p:p/BacklogType eq 'RequirementBacklog') 
        and TestSuite/RequirementWorkItem/Processes/all(p:p/IsBugType eq false)))`
   :::column-end:::
   :::column span="1":::
   Return data for only selected backlog requirement items under the specified Iteration and Area.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `&$expand=Descendants( 
           $apply=filter( CompletedWork ne null or RemainingWork ne null )` 
   :::column-end:::
   :::column span="1":::
   Expand the child items of Features and return *Completed Work* and *Remaining Work* data for the work items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `&$expand=Descendants(
           $apply=filter(
               WorkItemType eq 'Bug'
           )
           /groupby(
               (State),
               aggregate($count as Count) )` 
   :::column-end:::
   :::column span="1":::
   Expand the child items of Features and filter for bugs, group the return data by State, and sum the total count of child items.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/aggregate($count as TotalCount,`
   :::column-end:::
   :::column span="1":::
   Aggregate data across the filtered test points with count as `TotalCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1"::: 
       `cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as PassedCount, 
	    cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as FailedCount, 
        cast(LastResultOutcome eq 'Blocked', Edm.Int32) with sum as BlockedCount,
        cast(LastResultOutcome eq 'NotApplicable', Edm.Int32) with sum as NotApplicableCount,
	    cast(LastResultOutcome eq 'None', Edm.Int32) with sum as NotRunCount, 
	    cast(LastResultOutcome ne 'None', Edm.Int32) with sum as RunCount)`
   :::column-end:::
   :::column span="1":::
   While aggregating, sum the values of test points based on their latest execution outcome of *Passed*, *Failed*, *Blocked*, *NotApplicable*, and *None*. Also, sum the values of test points whose latest outcome isn't equal to *None* to get the total `RunCount`.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    `/aggregate(
        iif(CompletedWork ne null, CompletedWork, 0) with sum as SumCompletedWork, 
        iif(RemainingWork ne null, RemainingWork, 0) with sum as SumRemainingWork`
   :::column-end:::
   :::column span="1":::
   Aggregate *Completed Work* and *Remaining Work* data across the filtered work items.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `)/compute(
            (SumCompletedWork add SumRemainingWork) as TotalWork, 
            SumCompletedWork as SumCompleted`
   :::column-end:::
   :::column span="1":::
   Compute the total rollup of *Completed Work* and *Remaining Work*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      `)/compute(
            iif(TotalWork gt 0,(SumCompleted div cast(TotalWork, Edm.Double) mul 100), 0) as PercCompletedWork
       )`
   :::column-end:::
   :::column span="1":::
   Calculate the percent of completed work.
   :::column-end:::
:::row-end:::

## Create the Table report

1. From the **Modeling** tab, select **Manage Relationships** and link the three query results by the `WorkItemId` column. 
1. Under **Visualizations**, select **Table**.
1. Add the columns you want from the three Power BI queries.
1. Select **Sum** as the aggregation for additive columns like **Passed tests**.

    :::image type="content" source="media/powerbi-sum-aggregation.png" alt-text="Screenshot of Power BI Sum aggregation selection.":::

In this example, **Authentication scenarios** is a parent feature of two user stories.

:::image type="content" source="media/odatapowerbi-storiesoverview-rollup.png" alt-text="Screenshot of Power BI Sample Stories Overview Rollup Report.":::

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
