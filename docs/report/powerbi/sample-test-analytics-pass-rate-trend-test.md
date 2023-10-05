---
title: Pipeline pass rate trend of a test sample Power BI report
titleSuffix: Azure DevOps
description: Learn how to generate a pass rate trend Power BI report for a given test of a pipeline in the project.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.manager: mijacobs
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'  
ms.date: 01/25/2023
---

# Pass rate trend of a test sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

Pass rate trend reports provide insight into average time it takes for a particular test to execute during a pipeline run.  

An example is shown in the following image.

:::image type="content" source="media/pipeline-test-reports/test-pass-rate-trend-stack-column-line-chart-report.png" alt-text="Screenshot of Pass Rate Trend report."::: 


[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]


## Sample queries

[!INCLUDE [temp](includes/sample-required-reading.md)]

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"And Date/Date ge {startdate} "
        &"And Test/TestName eq '{testName}' "
        &"And Workflow eq 'Build') "
            &"/groupby((Date/Date), "
                &"aggregate( "
                &"ResultCount with sum as TotalCount, "
            &"ResultPassCount with sum as ResultPassCount, "
                &"ResultFailCount with sum as ResultFailCount, "
            &"ResultAbortedCount with sum as ResultAbortedCount, "
        &"ResultErrorCount with sum as ResultErrorCount, "
    &"ResultInconclusiveCount with sum as ResultInconclusiveCount, "
    &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
    &"ResultNotImpactedCount with sum as ResultNotImpactedCount)) "
    &"/filter(ResultFailCount gt 0) "
    &"/compute( "
    &"iif(TotalCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(TotalCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	And Date/Date ge {startdate}
	And Test/TestName eq '{testName}'
	And Workflow eq 'Build')
/groupby((Date/Date), 
	aggregate(
	ResultCount with sum as TotalCount,
	ResultPassCount with sum as ResultPassCount,
	ResultFailCount with sum as ResultFailCount,
	ResultAbortedCount with sum as ResultAbortedCount,
	ResultErrorCount with sum as ResultErrorCount,
	ResultInconclusiveCount with sum as ResultInconclusiveCount,
	ResultNotExecutedCount with sum as ResultNotExecutedCount,
	ResultNotImpactedCount with sum as ResultNotImpactedCount))
/filter(ResultFailCount gt 0)
/compute(
	iif(TotalCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(TotalCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate)
```

***

## Substitution strings and query breakdown


[!INCLUDE [temp](includes/sample-query-substitutions.md)]
 
- `{organization}` - Your organization name
- `{project}` - Your team project name
- `{pipelinename}` - Your pipeline name. Example: `Fabrikam hourly build pipeline`
- `{testName}` - Your test name
- `{startdate}` - The date to start your report. Format: YYYY-MM-DDZ. Example: `2021-09-01Z` represents September 1, 2021. Don't enclose in quotes or brackets and use two digits for both, month and date.

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
   `$apply=filter(`
   :::column-end:::
   :::column span="1":::
   Start `filter()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Pipeline/PipelineName eq '{pipelineName}'`
   :::column-end:::
   :::column span="1":::
   Return test runs for the specified pipeline
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `And Date/Date ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return test runs on or after the specified date.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `And Test/TestName eq '{testName}'`
   :::column-end:::
   :::column span="1":::
   Return test runs only for the specified test name.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Workflow eq 'Build'`
   :::column-end:::
   :::column span="1":::
   Return test runs for `Build` workflow.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close `filter()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby(`
   :::column-end:::
   :::column span="1":::
   Start `groupby()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(Date/Date),`
   :::column-end:::
   :::column span="1":::
   Group by the completion date of test run.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate(`
   :::column-end:::
   :::column span="1":::
   Start `aggregate` clause to sum different test run outcomes matching the filter criteria.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultCount with sum as TotalCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of test runs as `TotalCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultPassCount with sum as ResultPassCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of passed test runs as `ResultPassCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultFailCount with sum as ResultFailCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of failed test runs as `ResultFailCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultAbortedCount with sum as ResultAbortedCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of aborted test runs as `ResultAbortedCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultErrorCount with sum as ResultErrorCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of test runs marked as having an error as `ResultErrorCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultNotExecutedCount with sum as ResultNotExecutedCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of not executed test runs as `ResultNotExecutedCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultNotImpactedCount with sum as ResultNotImpactedCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of not affected test runs as `ResultNotImpactedCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `))`
   :::column-end:::
   :::column span="1":::
   Close `aggregate()` and `groupby()` clauses.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/compute(`
   :::column-end:::
   :::column span="1":::
   Start `compute()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `iif(TotalCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(TotalCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate)`
   :::column-end:::
   :::column span="1":::
   For all the days, calculate the `PassRate` .
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close `compute()` clause.
   :::column-end:::
:::row-end:::


 
[!INCLUDE [temp](includes/rename-query.md)]

## Expand the Date column in Power BI

Expand the `Date` column to show the expanded entity `CompletedOn.Date`.  Expanding a column flattens the record into specific fields. To learn how, see [Transform Analytics data to generate Power BI reports, Expand columns](transform-analytics-data-report-generation.md#expand-columns). 
 

## Change column data type

1. From the Power Query Editor, select the `TotalCount` column; select **Data Type** from the **Transform** menu; and then choose **Whole Number**.

1. Select the `PassRate`column; select **Data Type** from the **Transform** menu; and then choose **Decimal Number**.

To learn more about changing the data type, see  [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

[!INCLUDE [temp](includes/close-apply.md)]


## Create the line and stack column chart report
 
1. In Power BI, under **Visualizations**, choose the **Line and stack column chart** and drag and drop the fields onto the chart areas. 

	:::image type="content" source="media/pipeline-test-reports/visualizations-test-pass-rate-trend-stacked-column-line-chart.png" alt-text="Screenshot of visualization fields selections for Pass rate trend duration table report. ":::

1. Add `Date.Date` to the **X-axis**, right-click the field and select **Date.Date** rather than **Date Hierarchy**.  

1. Add `ResultPassCount` and `ResultFailCount` to the **Column y-axis**.
 
1. Add `PassRate` to the **Line y-axis**. 
 

Your report should look similar to the following image. 

:::image type="content" source="media/pipeline-test-reports/test-pass-rate-trend-stack-column-line-chart-report.png" alt-text="Screenshot of Sample Pass Rate Trend report."::: 
  

[!INCLUDE [temp](includes/pipeline-test-task-resources.md)]

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]

 
  
 