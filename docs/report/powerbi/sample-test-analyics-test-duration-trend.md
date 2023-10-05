---
title: Pipeline test duration trend sample Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a test duration trend Power BI report for a given pipeline in the project.
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

# Test duration trend sample report

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

Test duration trend reports, similar to the one shown in the following image, provide insight into the day-wise trend of the average time taken to execute a test for a selected time range. For information on adding tests to a pipeline, see the [Test task resources](#test-task-resources) section later in this article. 

:::image type="content" source="media/pipeline-test-reports/test-duration-trend-line-chart-report.png" alt-text="Screenshot of Test Duration Trend Line chart report.":::
 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]


## Sample queries

You can use the following queries of the `TestResultsDaily` entity set to create different but similar test duration reports. The `TestResultsDaily` entity set provides a daily snapshot aggregate of `TestResult` executions, grouped by test.  

[!INCLUDE [temp](includes/query-filters-test-pipelines.md)]

Use the following queries to view the test duration trend report for a pipeline with a **Build** workflow. 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	And Date/Date ge {startdate}
	And Workflow eq 'Build'
	)
/groupby(
	(TestSK, Test/TestName, Date/Date), 
	aggregate(
	  ResultCount with sum as TotalCount,
	  ResultDurationSeconds with sum as TotalDuration
	))
/compute(
	TotalDuration div TotalCount as AvgDuration
	)
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	And Date/Date ge {startdate}
	And Workflow eq 'Build'
	)
/groupby(
	(TestSK, Test/TestName), 
	aggregate(
	ResultCount with sum as TotalCount,
	ResultDurationSeconds with sum as TotalDuration
	))
/compute(
TotalDuration div TotalCount as AvgDuration)
```

***
 

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
 
- `{organization}` - Your organization name
- `{project}` - Your team project name
- `{pipelinename}` - Your pipeline name. Example: `Fabrikam hourly build pipeline`
- `{startdate}` - The date to start your report. Format: YYYY-MM-DDZ. Example: `2022-09-01Z` represents September 1, 2022. Don't enclose in quotes or brackets and use two digits for both, month and date.


> [!TIP]  
> Depending on the number of tests added to a pipeline, the data returned can be significant. We recommend that you use a `{startdate}` for a few days to gauge the amount of data returned and adjust accordingly.


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
   Return test runs for the named pipeline.
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
   `and Workflow eq 'Build'`
   :::column-end:::
   :::column span="1":::
   Return test runs for a `Build` workflow.
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
   `(TestSK, Test/TestName, Date/Date),`
   :::column-end:::
   :::column span="1":::
   Group by test, test name, and run date.
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
   `ResultDurationSeconds with sum as TotalDuration`
   :::column-end:::
   :::column span="1":::
   Sum the total duration of all the runs as `TotalDuration`.
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
   `TotalDuration div TotalCount as AvgDuration`
   :::column-end:::
   :::column span="1":::
   For all the tests, calculate the average duration by dividing the total duration by total number of runs.
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

## Expand the Test and Date columns in Power BI

Expanding a column flattens the record into specific fields. To learn how, see [Transform Analytics data to generate Power BI reports, Expand columns](transform-analytics-data-report-generation.md#expand-columns). 

1. Expand the `Test` column to show the expanded entities `TestSK` and `Test.TestName`.  
2. Expand the `Date` column to show the expanded entity `Date.Date`.  

## Change column data type

1. From the Power Query Editor, select the `TotalCount` column; select **Data Type** from the **Transform** menu; and then choose **Whole Number**.

1. Select the `TotalDuration` and `AvgDuration` columns; select **Data Type** from the **Transform** menu; and then choose **Decimal Number**.

To learn more about changing the data type, see  [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

[!INCLUDE [temp](includes/close-apply.md)]
 
  
## Create the Line chart report
 
1. In Power BI, under **Visualizations**, choose **Line chart** and drag and drop the fields onto the **Columns** area. 

	:::image type="content" source="media/pipeline-test-reports/visualizations-test-duration-trend-line-chart.png" alt-text="Screenshot of visualization fields selections for Test Duration Trend Line chart report. ":::

1. Add `Date.Date` to the **X-axis**, right-click the field and select **Date.Date**, rather than **Date.Hierarchy**.

1. Add **AvgDuration** to the **Y-axis**.

Your report should look similar to the following image. 

:::image type="content" source="media/pipeline-test-reports/test-duration-trend-line-chart-report.png" alt-text="Screenshot of Sample Test Duration Trend Line chart report.":::
  

[!INCLUDE [temp](includes/pipeline-test-task-resources.md)]

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]

 