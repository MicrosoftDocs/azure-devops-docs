---
title: Requirements tracking, Stories overview rollup report 
titleSuffix: Azure DevOps
description: Learn how to use sample Power BI and OData queries to generate a one level roll-up report of aggregated metrics for work progress and status of tests and bugs.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: shdalv
ms.custom: powerbisample, engagement-fy23
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2020'
ms.date: 01/19/2023
---

# Requirements tracking rollup sample report

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

The Requirements tracking rollup report builds on the [Requirements tracking report](sample-stories-overview.md) and shows how to aggregate metrics for a one-level roll-up. For example, if you're tracking requirements with User Stories, you can aggregate data for Features using the queries provided in this article.

An example is shown in the following image. 

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI Stories Overview Rollup Report.](media/odatapowerbi-storiesoverview-rollup.png)

This report displays the following information for each requirement that it lists:

- **Percent work completed**:  Progress bar that shows the percentage of completed work based on the rollup of completed hours for all tasks that are linked to the requirement.
- **Passed tests**: The number of test cases run that have passed based on the most recent test run.  
- **Failed tests**: The number of test cases run that have failed based on the most recent test run. 
- **Run tests**:  The number of test runs that have executed.  
- **Active bugs**: The number of linked bugs in an Active state. 
- **Closed bugs**: The number of linked bugs in a  Closed, Done, or Completed state. 

> [!NOTE] 
> Requirement tracking is supported only for test cases linked through a [**Requirement-based test suite**](../../test/create-a-test-plan.md#backlog). The association between a requirement work item&mdash;User Story ([Agile](../../boards/work-items/guidance/agile-process.md)), Product Backlog Item ([Scrum](../../boards/work-items/guidance/scrum-process.md)), Requirement ([CMMI](../../boards/work-items/guidance/cmmi-process.md)), or Issue ([Basic](../../boards/get-started/plan-track-work.md))&mdash;and manual test execution is only formed when the test case is linked via a **Requirement-based test suite**. 


[!INCLUDE [stories-overview-info](includes/sample-stories-overview-info.md)] 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [stories-overview-prereqs](includes/sample-stories-overview-prereqs.md)]  


## Sample queries

To generate the report, you must add three Power BI queries to Power BI desktop and then link them. Each query executes either the `WorkItems` or `TestPoints` entity set.
 
> [!NOTE]   
> The Power BI query snippets provided in the following sections include the requisite data transforms to expand columns and change data type.

[!INCLUDE [temp](includes/query-filters-work-items.md)] 

### Query area and iteration paths

In order to scope your report to a particular Area and Iteration path, you can filter the query using `AreaSK` and `IterationSK`. For details, see [Define basic queries using OData Analytics](../extend-analytics/analytics-recipes.md#area).

### Query for percentage of hours completion for requirements

> [!NOTE]   
> Change the `WorkItemType` based on the process you are using. The Scrum template supports **Feature** and the Basic template supports **Epic** as the roll up work item type, respectively.

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
    #"Changed Type" = Table.TransformColumnTypes(#"Source",{{"TotalCount", type number}, {"PassedCount", type number}, {"FailedCount", type number}, {"BlockedCount", type number}, {"NotApplicableCount", type number}, {"NotRunCount", type number}, {"RunCount", type number}})
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
> Change the `WorkItemType` based on the process you are using. The Scrum template supports **Feature** and the Basic template supports **Epic** as the roll up work item type, respectively.

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


[!INCLUDE [stories-overview-substitutions-breakdown](includes/sample-stories-overview-sub-breakdown.md)]


## Create the Table report

1. From the **Modeling** tab, choose **Manage Relationships** and link the three query results by `WorkItemId` column. 
1. Under **Visualizations**, choose **Table**.
1. Add the columns you're interested in from the three Power BI queries.
1. Select **Sum** as aggregation for additive columns like **Passed tests** etc.
    > [!div class="mx-imgBorder"] 
    > ![Power BI select Sum as aggregation](/azure/devops/report/powerbi/media/powerbi-sum-aggregation.png)

Here, **Authentication scenarios** is a parent feature of two User Stories.

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI Sample Stories Overview Rollup Report.](media/odatapowerbi-storiesoverview-rollup.png)

## Related articles

[!INCLUDE [temp](includes/sample-relatedarticles.md)]
