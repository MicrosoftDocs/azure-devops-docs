---
title: Manual test progress status sample Power BI report 
titleSuffix: Azure DevOps
description: Learn about sample Power BI queries that generate an overall execution state or progress status of manual tests.
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

# Progress status sample report 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

You can report on the execution state of one or more test plans in Power BI. The report you create by using the information in this article is similar to the following image and the summary chart of the [Track test status - Progress report](../../test/track-test-status.md).

:::image type="content" source="media/reports-test-plans/test-plan-progress-donut-reports.png" alt-text="Screenshot of Power BI Test Plan Progress Donut reports.":::

This report displays two donut charts that summarize test plans executed and not executed, and the status of executed test plans.

- **Executed vs Not executed**
	- **Executed**: The sum and percentage of test cases that ran.
	- **NotExecuted**: The sum and percentage of test cases that didn't run.
- **Split by outcome**
	- **Passed**: The sum and percentage of test cases that passed.
	- **Blocked**: The sum and percentage of test cases that are currently blocked from running.
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

- Define test plans, test suites, and test cases. Specify their state. For a test suite to run, it must be in the In Progress state. For a test case to run, it must be in the Ready state. For details, see [Create manual test cases](../../test/create-test-cases.md).
- Run manual tests and verify the results. Mark the results of each validation step in the test case as passed or failed. For details, see [Run manual tests](../../test/run-manual-tests.md).

	> [!NOTE]  
	> Testers must mark a test step with a status if it's a validation test step. The overall result for a test reflects the status of all the test steps that were marked. Therefore, the test has a status of failed if any test step is marked as failed or not marked.   

## Sample queries

Use the following queries for the `TestPoints` entity set to create different but similar test plan progress reports.

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

- `{organization}` - Your organization name.
- `{project}` - Your team project name. Omit `/{project}` entirely for a cross-project query.
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
:::row:::
   :::column span="1":::
   `filter((TestSuite/TestPlanTitle eq '{testPlanTitle}'))`
   :::column-end:::
   :::column span="1":::
   Returns data for only the selected test plan. To include multiple plans, use a clause like `filter((TestSuite/TestPlanTitle eq '{testPlanTitle1}' or TestSuite/TestPlanTitle eq '{testPlanTitle2}'))`. You can also apply other filters related to test suites and test configurations.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/aggregate($count as TotalCount,`
   :::column-end:::
   :::column span="1":::
   Aggregates data across the filtered test points with count as `TotalCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as Passed`
   :::column-end:::
   :::column span="1":::
   While aggregating, type-casts test points with the latest execution outcome 'Passed' to 1 and sums them as the `Passed` metric.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/compute(Executed mul 100 div TotalCount as ExecPct`
   :::column-end:::
   :::column span="1":::
   Provides a computed metric `ExecPct` that equals (Executed test points / Total count * 100).
   :::column-end:::
:::row-end:::

[!INCLUDE [temp](includes/rename-query.md)]

## Change column data type 

In Power Query Editor, select the `TotalCount` column and all other columns. Then, select **Data Type** from the **Transform** menu, and choose **Whole Number**. For more information about changing the data type, see [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type).

[!INCLUDE [temp](includes/sample-rename-column-fields.md)]

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Donut chart report

1. In Power BI, under **Visualizations**, choose the **Donut** report.

	:::image type="content" source="media/reports-test-plans/test-plan-progress-donut-report-visualizations.png" alt-text="Screenshot of visualization fields selections for test progress run report.":::

1. To create a donut chart of **Executed vs. Not executed**, add the following fields to **Values**, in the order indicated.
	- `Executed`
	- `NotExecuted`

1. To create a donut chart split by outcome, add the following fields to **Values**, in the order indicated.
	- `Passed`
	- `Failed`
	- `Blocked`
	- `NotApplicable`

The following image shows the resulting report.

:::image type="content" source="media/reports-test-plans/test-plan-progress-donut-reports.png" alt-text="Screenshot of Power BI sample Test Plan Progress report.":::
 
## Related articles

[!INCLUDE [temp](includes/sample-related-articles-test.md)]