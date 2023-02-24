---
title: Manual test progress status sample Power BI report 
titleSuffix: Azure DevOps
description: Learn about sample Power BI queries that generate an overall execution state or progress status of manual tests.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: shdalv
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'
ms.date: 01/19/2023
---

# Progress status sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

You can report on the execution state of one or more Test Plans in Power BI. The report you create using the information in this article is similar to the following image and the summary chart of the [Track test status - Progress report](../../test/track-test-status.md).


:::image type="content" source="media/reports-test-plans/test-plan-progress-donut-reports.png" alt-text="Screenshot of Power BI Test Plan Progress Donut reports.":::

This report displays two donut charts that summarize Test Plans executed and not executed, and the status of executed Test Plans.  

- **Executed vs Not executed** 
	- **Executed**: The sum and percentage of test cases that ran.  
	- **NotExecuted**: The sum and percentage of test cases that didn't run.    
- **Split by outcome** 
	- **Passed**: The sum and percentage of test cases that passed.  
	- **Blocked**:  The sum and percentage of test cases that are currently blocked from running.  
	- **Failed**: The sum and percentage of test cases that failed when run.  
	- **NotApplicable**: The sum and percentage of test cases that didn't run.  
 

## Questions the report answers

The overall execution state report helps you track the team's progress with respect to planned testing of your product or service by answering the following questions:

- *How much testing is complete?*
- *What is the current status of tests passing, failing, or being blocked?*

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

For the report to generate useful data, the team must carry out the following activities to manage test plans:

- Define test plans, test suites, and test cases. Specify their state. For a Test Suite to run, it must be in the In Progress state. For a Test Case to run, it must be in the Ready state. For details, see [Create manual test cases](../../test/create-test-cases.md). 
- Run manual tests and verify the results. Mark the results of each validation step in the test case as passed or failed. For details, see [Run manual tests](../../test/run-manual-tests.md).

	> [!NOTE]  
	> Testers must mark a test step with a status if it is a validation test step. The overall result for a test reflects the status of all the test steps that were marked. Therefore, the test will have a status of failed if any test step is marked as failed or not marked.   

## Sample queries

You can use the following queries of the `TestPoints` entity set to create different but similar test plan progress reports.

[!INCLUDE [temp](includes/query-filters-test.md)] 


#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let 
    Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints?" 
        &"$apply=filter(TestSuite/TestPlanTitle eq '{testPlanTitle}')" 
        &"/aggregate(" 
            &"$count as TotalCount," 
            &"cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as Passed," 
            &"cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as Failed," 
            &"cast(LastResultOutcome eq 'Blocked', Edm.Int32) with sum as Blocked," 
            &"cast(LastResultOutcome eq 'NotApplicable', Edm.Int32) with sum as NotApplicable," 
            &"cast(LastResultOutcome eq 'None', Edm.Int32) with sum as NotExecuted," 
            &"cast(LastResultOutcome ne 'None', Edm.Int32) with sum as Executed" 
        &")/compute(" 
            &"Executed mul 100 div TotalCount as ExecPct," 
            &"iif(TotalCount gt NotExecuted, Passed mul 100 div Executed,0) as PassedPct" 
        &")", null, [Implementation="2.0"]) 
in 
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints? 
$apply=filter(TestSuite/TestPlanTitle eq '{testPlanTitle}')
/aggregate( 
    $count as TotalCount,  
    cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as Passed,  
    cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as Failed, 
    cast(LastResultOutcome eq 'Blocked', Edm.Int32) with sum as Blocked, 
    cast(LastResultOutcome eq 'NotApplicable', Edm.Int32) with sum as NotApplicable, 
    cast(LastResultOutcome eq 'None', Edm.Int32) with sum as NotExecuted, 
    cast(LastResultOutcome ne 'None', Edm.Int32) with sum as Executed 
)
/compute( 
    Executed mul 100 div TotalCount as ExecPct, 
    iif(TotalCount gt NotExecuted, Passed mul 100 div Executed,0) as PassedPct 
)
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name 
- `{project}` - Your team project name, or omit "/{project}" entirely, for a cross-project query
- `{testPlanTitle}` - Title of the test plan whose data you want to return.


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
   `filter((TestSuite/TestPlanTitle eq '{testPlanTitle}')) `
   :::column-end:::
   :::column span="1":::
   Return data for only selected test plan. You can add multiple plans with a clause like `filter((TestSuite/TestPlanTitle eq '{testPlanTitle1}' or TestSuite/TestPlanTitle eq '{testPlanTitle2}'))`. You can also apply any other filters related to test suites, test configurations here.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/aggregate($count as TotalCount,`
   :::column-end:::
   :::column span="1":::
   Aggregate data across the filtered test points with having count as `TotalCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as Passed`
   :::column-end:::
   :::column span="1":::
   While aggregating, type-cast test points having latest execution outcome 'Passed' to 1 and sum them up as '`Passed`' metric.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/compute(Executed mul 100 div TotalCount as ExecPct`.
   :::column-end:::
   :::column span="1":::
   Provide a computed metric `ExecPct` that is equal to (Executed test points / Total count * 100).
   :::column-end:::
:::row-end:::


[!INCLUDE [temp](includes/rename-query.md)]


## Change column data type 

From the Power Query Editor, select the `TotalCount` column and all other columns, and then select **Data Type** from the **Transform** menu, and choose **Whole Number**. To learn more about changing the data type, see  [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the column `NotApplicable` to `Not Applicable`, or `TotalCount` to `Total Count`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Donut chart report

1. In Power BI, under **Visualizations**, choose the **Donut** report. 

	:::image type="content" source="media/reports-test-plans/test-plan-progress-donut-report-visualizations.png" alt-text="Screenshot of visualization fields selections for test progress run report. ":::

1. To create a donut chart of **Executed v/s Not executed**, add the following fields to **Values**, in the order indicated.  
	- `Executed`  
	- `NotExecuted`.   

1. To create donut chart split by outcome, add the following fields to **Values**, in the order indicated.  
	- `Passed`  
	- `Failed`   
	- `Blocked`  
	- `NotApplicable`  
	- and so on.   

The following image shows the resulting report.  

:::image type="content" source="media/reports-test-plans/test-plan-progress-donut-reports.png" alt-text="Screenshot of Power BI sample Test Plan Progress  report.":::
 
## Related articles

- [Overview of sample reports using OData queries](./sample-odata-overview.md)
- [Connect using Power BI and OData queries](./odataquery-connect.md)
- [Sample reports and quick reference index](../extend-analytics/quick-ref.md)