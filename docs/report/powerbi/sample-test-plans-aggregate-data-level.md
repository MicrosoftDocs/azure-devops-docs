---
title: Aggregated view for test suites sample Power BI report 
titleSuffix: Azure DevOps
description: Learn about sample Power BI queries that generate aggregated view for test suites.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: shdalv
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'
ms.date: 01/19/2023
---

# Manual test suites aggregated view sample report

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

You can report on the execution state of one or more Test Suites. The report you create using the information in this article is similar to the following image.  

:::image type="content" source="media/odatapowerbi-aggregatedatlevel.png" alt-text="Screenshot of Power BI Test Suites Aggregated View - Report.":::

As shown in the following image, test suites can be arranged within a hierarchical organization. As shown, there are three test suites with the same names under two test suites labeled *Australia* and *Asia*. This article outlines how to aggregate data for a specific test suite level. 

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI Test Plan structure for aggregated view.](media/odatapowerbi-aggregatedatlevel-plan.png)

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

For the report to generate useful data, the team must carry out the following activities to manage test plans:

- Define test plans, test suites, and test cases. Specify their state. For a Test Suite to run, it must be in the In Progress state. For a Test Case to run, it must be in the Ready state. For details, see [Create test plans and test suites](../../test/create-a-test-plan.md) and [Create manual test cases](../../test/create-test-cases.md). 
- Run manual tests and verify the results. Mark the results of each validation step in the test case as passed or failed. For details, see [Run manual tests](../../test/run-manual-tests.md).

	> [!NOTE]  
	> Testers must mark a test step with a status if it is a validation test step. The overall result for a test reflects the status of all the test steps that were marked. Therefore, the test will have a status of failed if any test step is marked as failed or not marked.   
 
## Sample queries

You can use the following queries of the `TestPoints` entity set to create aggregated test suite reports.

[!INCLUDE [temp](includes/query-filters-test.md)] 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let 
    Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints?" 
        &"$apply=filter((TestSuite/TestPlanTitle eq '{testPlanTitle}' and TestSuite/IdLevel3 ne null))" 
            &"/groupby(" 
                &"(TestSuite/TitleLevel3)," 
                &"aggregate(" 
                    &"$count as TotalCount," 
                    &"cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as PassedCount," 
                    &"cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as FailedCount," 
                    &"cast(LastResultOutcome eq 'None', Edm.Int32) with sum as  NotRunCount," 
                    &"cast(LastResultOutcome ne 'None', Edm.Int32) with sum as RunCount" 
            &")" 
        &")" 
        &"/compute(" 
            &"RunCount mul 100 div TotalCount as RunPercentage," 
            &"NotRunCount mul 100 div TotalCount as NotRunPercentage," 
            &"iif(TotalCount gt NotRunCount, PassedCount mul 100 div RunCount,0) as PassedPercentage," 
            &"iif(TotalCount gt NotRunCount, FailedCount mul 100 div RunCount,0) as FailedPercentage" 
        &")" 
        &"&$orderby=RunPercentage desc", null, [Implementation="2.0"]) 
in 
    Source 
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints?  
$apply=filter((TestSuite/TestPlanTitle eq '{testPlanTitle}' and TestSuite/IdLevel3 ne null)) 
/groupby( 
    (TestSuite/TitleLevel3), 
    aggregate( 
        $count as TotalCount,  
        cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as PassedCount, 
        cast(LastResultOutcome eq 'Failed', Edm.Int32) with sum as FailedCount, 
        cast(LastResultOutcome eq 'None', Edm.Int32) with sum as  NotRunCount, 
        cast(LastResultOutcome ne 'None', Edm.Int32) with sum as RunCount 
    )
)
/compute( 
    RunCount mul 100 div TotalCount as RunPercentage, 
    NotRunCount mul 100 div TotalCount as NotRunPercentage, 
    iif(TotalCount gt NotRunCount, PassedCount mul 100 div RunCount,0) as PassedPercentage, 
    iif(TotalCount gt NotRunCount, FailedCount mul 100 div RunCount,0) as FailedPercentage 
) 
&$orderby=RunPercentage desc
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
:::row:::
   :::column span="1":::
   `filter((TestSuite/TestPlanTitle eq '{testPlanTitle}' and TestSuite/IdLevel3 ne null))`
   :::column-end:::
   :::column span="1":::
   Return data for only selected test plan. Also return the data for level 3 test suites onwards. You can add multiple plans with a clause like `filter((TestSuite/TestPlanTitle eq '{testPlanTitle1}' or TestSuite/TestPlanTitle eq '{testPlanTitle2}' and TestSuite/IdLevel3 ne null))`. You can also apply any other filters related to test suites, test configurations here.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby((TestSuite/TitleLevel3),`
   :::column-end:::
   :::column span="1":::
   The test suites to group by. If you're interested in getting report for all distinct test suites lying at level 3 of test suite hierarchy, you can specify this query part. You can change the level number from 1-14. If you wish to separate test suites with same name, you can use  `/groupby((TestSuite/TitleLevel3, TestSuite/IdLevel3),` to sure that even if you've two test suites with same name, they'll be shown as two different entries as they would have two different IDs.
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
   `cast(LastResultOutcome eq 'Passed', Edm.Int32) with sum as Passed,`
   :::column-end:::
   :::column span="1":::
   While aggregating, type-cast test points having latest execution outcome 'Passed' to 1 and sum them up as '`Passed`' metric.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/compute(Executed mul 100 div TotalCount as ExecPct`
   :::column-end:::
   :::column span="1":::
   Provide a computed metric ExecPct that is equal to (Executed test points / Total count * 100).
   :::column-end:::
:::row-end:::


[!INCLUDE [temp](includes/rename-query.md)]

## Expand columns in Power Query Editor

Prior to creating the report, you need to expand the `TestSuite` column to flatten the records into specific fields. To learn how, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns).

In Power BI, do the following steps.  

When finished, you may choose to rename columns. 

1. Expand `TestSuite`
    - Choose the expand button.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI Expand Test Suite](media/powerbi-expand-testsuite.png)

    - Select the fields to flatten.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI select fields to flatten](media/powerbi-test-suite-flatten.png)

    - The table now contains entity field of `TestSuite.IdLevel3` and `TestSuite.TitleLevel3`.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI expanded test suite](media/powerbi-expanded-testsuite.png)

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI transform data, Rename Columns.](media/transform-data/powerbi-rename-columns.png)


## Change column data type 

From the Power Query Editor, select all columns containing numbers, such as *TotalCount*, *RunCount*, and *Passed*;  select **Data Type** from the **Transform** menu, and choose **Whole Number**. To learn more about changing the data type, see  [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the column `NotApplicable` to `Not Applicable`, or `TotalCount` to `Total Count`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]


## Create the Table report
 
1. Under **Visualizations**, choose **Table**.
1. Drag and drop `TestSuite.TitleLevel3`, `NotRunCount`, `RunCount`, `PassedCount`, `TotalCount` under **Columns**.
1. Select **Sum** as aggregation for **Count**.
	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI select Sum as aggregation.](media/powerbi-sum-aggregation.png)

Your report should look similar to the following image.

:::image type="content" source="media/odatapowerbi-aggregatedatlevel.png" alt-text="Screenshot of Power BI Sample Test Suites Aggregated View - Report.":::

## Related articles

- [Overview of sample reports using OData queries](./sample-odata-overview.md)
- [Connect using Power BI and OData queries](./odataquery-connect.md)
- [Sample reports and quick reference index](../extend-analytics/quick-ref.md)
