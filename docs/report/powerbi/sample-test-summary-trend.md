---
title: Pipeline test summary trend sample Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a test summary trend Power BI report for a given pipeline in the project.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.manager: mijacobs
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'  
ms.date: 01/24/2023
---

# Test summary trend sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 
 
Pipelines that include test tasks can be queried to build a test summary trend report. For example, the following report displays the number of failed test runs in each column over a period of 24 days, along with the line chart showing the trend of test pass rate. For information on adding tests to a pipeline, see the [Test task resources](#test-task-resources) section later in this article. 

 
:::image type="content" source="media/pipeline-test-reports/test-summary-trend-stack-column-line-chart-report.png" alt-text="Screenshot of  Test Summary Trend Stacked Column Line chart report.":::

Specifically, this article provides sample queries for generating the following reports: 

- Test summary trend for build workflow
- Test summary trend for release workflow
- Test summary trend for a particular branch
- Test summary trend for a particular test file
- Test summary trend for a particular test owner. 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]


## Sample queries

You can use the following queries of the `TestRuns` entity set to create different but similar pipeline test summary trend reports. The `TestRuns` entity set for the following queries are available only when you include test tasks within a pipeline definition.  

[!INCLUDE [temp](includes/query-filters-test-pipelines.md)]


### Test summary trend for Build workflow  

Use the following queries to view the test summary trend of a pipeline for a **Build** workflow.
 
#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedOn/Date ge {startdate} "
                &"and Workflow eq 'Build' "
            &") "
        &"/groupby( "
          &"(CompletedOn/Date), "
          &"aggregate( "
            &"ResultCount with sum as ResultCount, "
            &"ResultPassCount with sum as ResultPassCount, "
            &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount "
         &")) "
       &"/compute( "
       &"iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	and CompletedOn/Date ge {startdate}
	and Workflow eq 'Build'
	)
/groupby(
	(CompletedOn/Date), 
	aggregate(
	ResultCount with sum as ResultCount,
	ResultPassCount with sum as ResultPassCount,
	ResultNotExecutedCount with sum as ResultNotExecutedCount,
	ResultNotImpactedCount with sum as ResultNotImpactedCount,
	ResultFailCount with sum as ResultFailCount
	))
/compute(
iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate)
```

***


### Test summary trend for Release workflow

Use the following queries to view the test summary trend of a pipeline defined for a **Release** workflow.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedOn/Date ge {startdate} "
                &"and Workflow eq 'Release' "
            &") "
        &"/groupby( "
          &"(CompletedOn/Date), "
          &"aggregate( "
            &"ResultCount with sum as ResultCount, "
            &"ResultPassCount with sum as ResultPassCount, "
            &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount "
         &")) "
       &"/compute( "
       &"iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	and CompletedOn/Date ge {startdate})
/groupby((Workflow, CompletedOn/Date), 
	aggregate(
	ResultPassCount with sum as ResultPassCount,
	ResultNotExecutedCount with sum as ResultNotExecutedCount,
	ResultCount with sum as ResultCount,
	ResultNotImpactedCount with sum as ResultNotImpactedCount,
	ResultFailCount with sum as ResultFailCount))
/compute(
iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate)
```

***

### Test summary trend filtered by branch
 
To view the test summary trend of a pipeline for a particular branch, use the following queries. To create the report, carry out the following extra steps along with what is specified later in this article.

- Expand `Branch` into `Branch.BranchName`
- Select Power BI Visualization Slicer and add the field `Branch.BranchName` to the slicer's **Field**
- Select the branch name from the slicer for which you need to see the outcome summary.

To learn more about using slicers, see [Slicers in Power BI](/power-bi/visuals/power-bi-visualization-slicers).

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedOn/Date ge {startdate} "
                &"and Workflow eq 'Build' "
            &") "
        &"/groupby((Branch/BranchName, CompletedOn/Date), "
          &"aggregate( "
            &"ResultCount with sum as ResultCount, "
            &"ResultPassCount with sum as ResultPassCount, "
            &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount "
         &")) "
       &"/compute( "
       &"iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	and CompletedOn/Date ge {startdate}
	and Workflow eq 'Build')
/groupby((Branch/BranchName, CompletedOn/Date), 
	aggregate(
	ResultPassCount with sum as ResultPassCount,
	ResultNotExecutedCount with sum as ResultNotExecutedCount,
	ResultCount with sum as ResultCount,
	ResultNotImpactedCount with sum as ResultNotImpactedCount,
	ResultFailCount with sum as ResultFailCount))
/compute(
iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate)
```

***

### Test summary trend filtered by test file

To view the test summary trend of a pipeline for a particular test file, use the following queries. To create the report, carry out the following extra steps along with what is defined later in this article.

- Expand `Test` into `Test.ContainerName`
- Select Power BI Visualization Slicer and add the field `Test.ContainerName` to the slicer's **Field**
- Select the container name from the slicer for which you need to see the outcome summary.
 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedOn/Date ge {startdate} "
                &"and Workflow eq 'Build' "
            &") "
        &"/groupby((Test/ContainerName, Date/Date), "
          &"aggregate( "
            &"ResultCount with sum as ResultCount, "
            &"ResultPassCount with sum as ResultPassCount, "
            &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount "
         &")) "
       &"/compute( "
       &"iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate) "
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
	and CompletedOn/Date ge {startdate}
	And Workflow eq 'Build')
/groupby((Test/ContainerName, Date/Date), 
	aggregate(
	ResultPassCount with sum as ResultPassCount,
	ResultNotExecutedCount with sum as ResultNotExecutedCount,
	ResultCount with sum as ResultCount,
	ResultNotImpactedCount with sum as ResultNotImpactedCount,
	ResultFailCount with sum as ResultFailCount))
/compute(
iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate)
```

***

### Test summary trend filtered by test owner

To view the test summary trend of a pipeline for tests owned by a particular test owner, use the following queries. To create the report, carry out the following extra steps along with what is defined later in this article.

- Expand `Test` into `Test.TestOwner`
- Select Power BI Visualization Slicer and add the field `Test.TestOwner` to the slicer's **Field**
- Select the test owner from the slicer for which you need to see the outcome summary.
 
#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedOn/Date ge {startdate} "
                &"and Workflow eq 'Build' "
            &") "
        &"/groupby((Test/TestOwner, Date/Date), "
          &"aggregate( "
            &"ResultCount with sum as ResultCount, "
            &"ResultPassCount with sum as ResultPassCount, "
            &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount "
         &")) "
       &"/compute( "
       &"iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate) "
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
	and CompletedOn/Date ge {startdate}
	And Workflow eq 'Build')
/groupby((Test/TestOwner, Date/Date), 
	aggregate(
	ResultPassCount with sum as ResultPassCount,
	ResultNotExecutedCount with sum as ResultNotExecutedCount,
	ResultCount with sum as ResultCount,
	ResultNotImpactedCount with sum as ResultNotImpactedCount,
	ResultFailCount with sum as ResultFailCount))
/compute(
iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate)
```

***
 

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name
- `{project}` - Your team project name
- `{pipelinename}` - Your pipeline name. Example: Fabrikam hourly build pipeline
- `{startdate}` The date to start your report. Format: YYYY-MM-DDZ. Example: 2023-01-01Z represents January 1, 2023 at 12:50:54. Don't enclose in quotes or brackets.
 
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
   Return test runs for the specified pipeline.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and CompletedOn/Date ge {startdate}`
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
   Return test runs for the pipeline with a `Build` workflow
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close `filter()` clause
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
   `(CompletedOn/Date),`
   :::column-end:::
   :::column span="1":::
   Group by the date of completion of test run.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate(`
   :::column-end:::
   :::column span="1":::
   Start `aggregate` clause. For all the test runs matching the filter criteria, sum the series of counts.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultCount with sum as ResultCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of test runs as `ResultCount`.
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
   `ResultFailCount with sum as ResultFailCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of failed test runs as `ResultFailCount`.
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
   `iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate`
   :::column-end:::
   :::column span="1":::
   For all the days, calculate `PassRate`.
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

## Expand the CompletedOn column in Power BI

Expand the `CompletedOn` column. Expanding the column flattens the record into specific fields. To learn how, see [Transform Analytics data to generate Power BI reports, Expand columns](transform-analytics-data-report-generation.md#expand-columns). 

## Change column data type

From the Power Query Editor, select the `PassRate` column; select **Data Type** from the **Transform** menu; and then choose **Decimal Number**.

To learn more about changing the data type, see  [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the line and stack column chart report
 
1. In Power BI, under **Visualizations**, choose the **Line and stack column chart** and drag and drop the fields onto the chart areas. 

	:::image type="content" source="media/pipeline-test-reports/visualizations-test-summary-trend.png" alt-text="Screenshot of visualization fields selections for Test Summary Trend stacked column line chart report. ":::

1. Add `CompletedOn.Date` to the **X-axis**, right-click the field and select **Date.Date** rather than **Date Hierarchy**.  

1. Add `ResultFailCount` to **Column y-axis**.

1. Add `PassRate` to **Line y-axis**.

Your report should look similar to the following image. 

:::image type="content" source="media/pipeline-test-reports/test-summary-trend-stack-column-line-chart-report.png" alt-text="Screenshot of Sample Test Summary Trend Stacked Column Line chart report.":::

 

[!INCLUDE [temp](includes/pipeline-test-task-resources.md)]


## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]

  