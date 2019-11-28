---
title: Stories Overview Report 
titleSuffix: Azure DevOps
description: Sample Power BI queries to generate Stories Overview Report
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: ravishan
ms.manager: pkuma
ms.author: shdalv
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019' --TODO
ms.date: 11/28/2019
---

# Sample - Stories Overview Report

[!INCLUDE [temp](../_shared/version-azure-devops-cloud.md)]

This report covers given an area and iteration path, how to track the quality of requirement work items in terms of following aspects -
- Percentage of hours completed of children work items.
- Execution status of test cases lying under requirement-based test suites corresponding to the requirements.
- Status of bugs linked to those requirements.

This assumes that you have a setup like follows -
- You have requirement work items present in correct area and iteration paths.
- To get the percentage of hours completion, you need to fill in the 'Effort (hours)' fields in work items.
- To get the execution status of test cases, you should have created requirement-based test suites in Test Plans corresponding to those requirements.
- To get the status of bugs, you should have linked the bugs to requirements with 'Child' work item link.

You will get a report like this -
 
> [!div class="mx-imgBorder"] 
> ![Sample - Stories Overview Report](_img/odatapowerbi-storiesoverview.png)

[!INCLUDE [temp](_shared/sample-required-reading.md)]


## Sample queries

### Querying Area and Iteration paths
In order to scope your report to a particular Area and Iteration path, you can query them as suggested [here](../extend-analytics/wit-analytics.md#query-a-single-entity-set) and use AreaSK and IterationSK values of interest to supply to queries below.

### Query for percentage of hours completion for requirements

#### [Power BI Query](#tab/powerbi/)

[!INCLUDE [temp](_shared/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems? 
    $filter=(
        IterationSK eq {iterationSK}
        and AreaSK eq {areaSK}
        and Processes/any(p:p/BacklogType eq 'RequirementBacklog') 
        and Processes/all(p:p/IsBugType eq false)
    )
    &$expand=Descendants(
        $apply=filter(
            CompletedWork ne null 
            or RemainingWork ne null
        )
        /aggregate(
            iif(CompletedWork ne null, CompletedWork, 0) with sum as SumCompletedWork, 
            iif(RemainingWork ne null, RemainingWork, 0) with sum as SumRemainingWork
        )/compute(
            (SumCompletedWork add SumRemainingWork) as TotalWork, 
            SumCompletedWork as SumCompleted
        )/compute(
            iif(TotalWork gt 0,(SumCompleted div cast(TotalWork, Edm.Double) mul 100), 0) as PercCompletedWork
        )
)&$select=WorkItemId, Title", null, [Implementation="2.0"]),
    #"Expanded Descendants" = Table.ExpandTableColumn(Source, "Descendants", {"SumCompletedWork", "SumRemainingWork", "TotalWork", "SumCompleted", "PercCompletedWork"}, {"Descendants.SumCompletedWork", "Descendants.SumRemainingWork", "Descendants.TotalWork", "Descendants.SumCompleted", "Descendants.PercCompletedWork"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Expanded Descendants",{{"Descendants.SumCompletedWork", type number}, {"Descendants.SumRemainingWork", type number}, {"Descendants.TotalWork", type number}, {"Descendants.SumCompleted", type number}, {"Descendants.PercCompletedWork", type number}})
in
    #"Changed Type"
```

#### [OData Query](#tab/odata/)

[!INCLUDE [temp](_shared/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems? 
$filter=(
    IterationSK eq {iterationSK}
    and AreaSK eq {areaSK}
    and Processes/any(p:p/BacklogType eq 'RequirementBacklog') 
    and Processes/all(p:p/IsBugType eq false)
)
&$expand=Descendants(
    $apply=filter(
        CompletedWork ne null 
        or RemainingWork ne null
    )
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
)&$select=WorkItemId, Title
```

***

### Query for test execution status of requirements

#### [Power BI Query](#tab/powerbi/)

[!INCLUDE [temp](_shared/sample-powerbi-query.md)]

```
let 
    Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints? 
    $apply=filter(
        (TestSuite/RequirementWorkItem/IterationSK eq {iterationSK} 
        and TestSuite/RequirementWorkItem/AreaSK eq {areaSK}
        and TestSuite/RequirementWorkItem/Processes/any(p:p/BacklogType eq 'RequirementBacklog') 
        and TestSuite/RequirementWorkItem/Processes/all(p:p/IsBugType eq false)
        )
    )
    /compute(TestSuite/RequirementWorkItem/WorkItemId as WorkItemId, TestSuite/RequirementWorkItem/Title as WorkItemTitle)
    /groupby(
        (WorkItemId, WorkItemTitle),
        aggregate(
            $count as TotalCount, 
            cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as PassedCount, 
            cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as FailedCount, 
            cast(LastResultOutcome eq 'Blocked', Edm.Int32) with sum as BlockedCount,
            cast(LastResultOutcome eq 'NotApplicable', Edm.Int32) with sum as NotApplicableCount,
            cast(LastResultOutcome eq 'None', Edm.Int32) with sum as NotRunCount, 
            cast(LastResultOutcome ne 'None', Edm.Int32) with sum as RunCount)
)", null, [Implementation="2.0"]),
    #"Changed Type" = Table.TransformColumnTypes(Source,{{"TotalCount", type number}, {"PassedCount", type number}, {"FailedCount", type number}, {"BlockedCount",type number}, {"NotApplicableCount", type number}, {"NotRunCount", type number}, {"RunCount", type number}})
in
    #"Changed Type"
```

#### [OData Query](#tab/odata/)

[!INCLUDE [temp](_shared/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints? 
$apply=filter(
    (TestSuite/RequirementWorkItem/IterationSK eq {iterationSK} 
    and TestSuite/RequirementWorkItem/AreaSK eq {areaSK}
    and TestSuite/RequirementWorkItem/Processes/any(p:p/BacklogType eq 'RequirementBacklog') 
    and TestSuite/RequirementWorkItem/Processes/all(p:p/IsBugType eq false)
    )
)
/compute(TestSuite/RequirementWorkItem/WorkItemId as WorkItemId, TestSuite/RequirementWorkItem/Title as WorkItemTitle)
/groupby(
    (WorkItemId, WorkItemTitle),
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

### Query for status of bugs linked to the requirements

#### [Power BI Query](#tab/powerbi/)

[!INCLUDE [temp](_shared/sample-powerbi-query.md)]

```
let
    Source = OData.Feed("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=(
        IterationSK eq {iterationSK} 
        and AreaSK eq {areaSK}
        and Processes/any(p:p/BacklogType eq 'RequirementBacklog') 
        and Processes/all(p:p/IsBugType eq false)
    )
    &$expand=Links(
        $apply=filter(
            (LinkTypeName eq 'Child' or LinkTypeName eq 'Related')
            and TargetWorkItem/WorkItemType eq 'Bug'
        )
        /groupby(
            (TargetWorkItem/State),
            aggregate($count as Count)
        )
    )&$select=WorkItemId,Title", null, [Implementation="2.0"]),
    #"Expanded Links" = Table.ExpandTableColumn(Source, "Links", {"TargetWorkItem", "Count"}, {"Links.TargetWorkItem", "Links.Count"}),
    #"Expanded Links.TargetWorkItem" = Table.ExpandRecordColumn(#"Expanded Links", "Links.TargetWorkItem", {"State"}, {"Links.TargetWorkItem.State"}),
    #"Filtered Rows" = Table.SelectRows(#"Expanded Links.TargetWorkItem", each [Links.Count] <> null and [Links.Count] <> ""),
    #"Pivoted Column" = Table.Pivot(#"Filtered Rows", List.Distinct(#"Filtered Rows"[Links.TargetWorkItem.State]), "Links.TargetWorkItem.State", "Links.Count", List.Sum),
    #"Changed Type" = Table.TransformColumnTypes(#"Pivoted Column",{{"Active", type number}, {"Closed", type number}})
in
    #"Changed Type"
```

#### [OData Query](#tab/odata/)

[!INCLUDE [temp](_shared/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
    $filter=(
        IterationSK eq {iterationSK}  
        and AreaSK eq {areaSK} 
        and Processes/any(p:p/BacklogType eq 'RequirementBacklog') 
        and Processes/all(p:p/IsBugType eq false)
    )
&$expand=Links(
    $apply=filter(
        (LinkTypeName eq 'Child' or LinkTypeName eq 'Related')
        and TargetWorkItem/WorkItemType eq 'Bug'
    )
    /groupby(
        (TargetWorkItem/State),
        aggregate($count as Count)
    )
)&$select=WorkItemId,Title
```

***

### Substitution strings

[!INCLUDE [temp](_shared/sample-query-substitutions.md)]
- {iterationSK} - Iteration SK of the iteration path you are interested in.
- {areaSK} - Area SK of the area path you are interested in.


### Query breakdown

The following table describes each part of the query.

<table width="90%">
<tbody valign="top">
<tr><td width="25%"><b>Query part</b></td><td><b>Description</b></td><tr>
<tr><td><code>Processes/any(p:p/BacklogType eq 'RequirementBacklog')</code></td><td>Filter the work items in such a way that they should fall in 'requirements' category for at least one process associated with them.</td><tr>
<tr><td><code>Processes/all(p:p/IsBugType eq false)</code></td><td>Omit the bug type work items while getting requirements.</td><tr>
</tbody>
</table>


## Power BI transforms

The transforms applied to Power BI queries are already added in query snippets.


## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 

To create the report, perform the following steps:

1. In the 'Model' view, go to 'Manage Relationships' and link the three query results by WorkItemId column.
1. Create a PowerBI visualization **Table**.
1. Add the columns you are interested in from the three Power BI queries.
1. Select **Sum** as aggregation for additive columns like **Passed tests** etc.
    > [!div class="mx-imgBorder"] 
    > ![Power BI select Sum as aggregation](/azure/devops/report/powerbi/_img/powerbi-sum-aggregation.png)

Your report should look like this -

> [!div class="mx-imgBorder"] 
> ![Sample - Stories Overview Report](_img/odatapowerbi-storiesoverview.png)


## Related articles

[!INCLUDE [temp](_shared/sample-relatedarticles.md)]