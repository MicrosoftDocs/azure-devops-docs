---
title: Pipeline test summary sample Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a test summary Power BI report for a given pipeline in the project.
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

# Test summary sample report 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

For pipelines that include test tasks, you can create a report that shows the number of test runs by outcome: **Passed**, **Failed**, **Not executed**, and **Not impacted**.

The following image shows an example of a test summary report.

:::image type="content" source="media/pipeline-test-reports/test-summary-donut-report.png" alt-text="Screenshot of Test Summary Donut report.":::

Use the queries in this article to generate the following reports:

- Test summary for build workflow
- Test summary for release workflow
- Test summary for a particular branch
- Test summary for a particular test file
- Test summary for a particular test owner
[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

## Sample queries

To create different but similar pipeline test summary reports, use the following queries of the `TestResultsDaily` entity set. This entity set provides a daily snapshot aggregate of `TestResult` executions, grouped by test.

[!INCLUDE [temp](includes/query-filters-test-pipelines.md)]

### Test summary for Build workflow  

To view the test summary of a pipeline for a **Build** workflow, use the following queries.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed (
      "https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?"
      &"$apply=filter("
      &"Pipeline/PipelineName eq '{pipelineName}' "
      &"and DateSK ge {startdate} "
      &"and Workflow eq 'Build' "
      &")/aggregate("
      &"ResultCount with sum as ResultCount, "
      &"ResultPassCount with sum as ResultPassCount, "
      &"ResultFailCount with sum as ResultFailCount, "
      &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
      &"ResultNotImpactedCount with sum as ResultNotImpactedCount"
      &")",
      null, [Implementation="2.0", OmitValues = ODataOmitValues.Nulls, ODataVersion = 4]
   )
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
    Pipeline/PipelineName eq '{pipelineName}' 
    and DateSK ge {startdate} 
    and Workflow eq 'Build'
)/aggregate(
    ResultCount with sum as ResultCount,
    ResultPassCount with sum as ResultPassCount,
    ResultFailCount with sum as ResultFailCount,
    ResultNotExecutedCount with sum as ResultNotExecutedCount,
    ResultNotImpactedCount with sum as ResultNotImpactedCount
)
```

***

### Test summary for Release workflow  

To view the test summary of a pipeline for a **Release** workflow, use the following queries.

[!INCLUDE [temp](includes/query-filters-test.md)]

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed (
      "https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?"
      &"$apply=filter("
      &"Pipeline/PipelineName eq '{pipelineName}' "
      &"and DateSK ge {startdate} "
      &"and Workflow eq 'Release'"
      &")/aggregate("
      &"ResultCount with sum as ResultCount, "
      &"ResultPassCount with sum as ResultPassCount, "
      &"ResultFailCount with sum as ResultFailCount, "
      &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
      &"ResultNotImpactedCount with sum as ResultNotImpactedCount"
      &")",
      null, [Implementation="2.0", OmitValues = ODataOmitValues.Nulls, ODataVersion = 4]
   )
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
    Pipeline/PipelineName eq '{pipelineName}' 
    and DateSK ge {startdate} 
    and Workflow eq 'Release'
)/aggregate(
    ResultCount with sum as ResultCount,
    ResultPassCount with sum as ResultPassCount,
    ResultFailCount with sum as ResultFailCount,
    ResultNotExecutedCount with sum as ResultNotExecutedCount,
    ResultNotImpactedCount with sum as ResultNotImpactedCount
)
```

***

### Test summary filtered by branch

To view the test summary of a pipeline for a particular branch, use the following queries. To create the report, carry out the following extra steps along with what is specified later in this article.

- Expand `Branch` into `Branch.BranchName`.
- Select Power BI Visualization Slicer and add the field `Branch.BranchName` to the slicer's **Field**.
- Select the branch name from the slicer for which you need to see the outcome summary.

For more information about using slicers, see [Slicers in Power BI](/power-bi/visuals/power-bi-visualization-slicers).

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed (
      "https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?"
      &"$apply=filter("
      &"Pipeline/PipelineName eq '{pipelineName}' "
      &"and DateSK ge {startdate} "
      &"and Workflow eq 'Build'"
      &")/groupby("
      &"(Branch/BranchName),"
      &"aggregate("
      &"ResultCount with sum as ResultCount, "
      &"ResultPassCount with sum as ResultPassCount, "
      &"ResultFailCount with sum as ResultFailCount, "
      &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
      &"ResultNotImpactedCount with sum as ResultNotImpactedCount"
      &")",
      null, [Implementation="2.0", OmitValues = ODataOmitValues.Nulls, ODataVersion = 4]
   )
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
    Pipeline/PipelineName eq '{pipelineName}' 
    and DateSK ge {startdate} 
    and Workflow eq 'Build'
)/groupby(
    (Branch/BranchName),
    aggregate(
        ResultCount with sum as ResultCount,
        ResultPassCount with sum as ResultPassCount,
        ResultFailCount with sum as ResultFailCount,
        ResultNotExecutedCount with sum as ResultNotExecutedCount,
        ResultNotImpactedCount with sum as ResultNotImpactedCount
    )
)
```

***

### Test summary filtered by test file

To view the test summary of a pipeline for a particular test file, use the following queries. To create the report, carry out the following extra steps along with what is defined later in this article.

- Expand `Test` into `Test.ContainerName`.
- Select Power BI Visualization Slicer and add the field `Test.ContainerName` to the slicer's **Field**.
- Select the container name from the slicer for which you need to see the outcome summary.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed (
      "https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?"
      &"$apply=filter("
      &"Pipeline/PipelineName eq '{pipelineName}' "
      &"and DateSK ge {startdate} "
      &"and Workflow eq 'Build'"
      &")/groupby("
      &"(Test/ContainerName),"
      &"aggregate("
      &"ResultCount with sum as ResultCount, "
      &"ResultPassCount with sum as ResultPassCount, "
      &"ResultFailCount with sum as ResultFailCount, "
      &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
      &"ResultNotImpactedCount with sum as ResultNotImpactedCount"
      &")",
      null, [Implementation="2.0", OmitValues = ODataOmitValues.Nulls, ODataVersion = 4]
   )
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
    Pipeline/PipelineName eq '{pipelineName}' 
    and DateSK ge {startdate} 
    and Workflow eq 'Build'
)/groupby(
    (Test/ContainerName),
    aggregate(
        ResultCount with sum as ResultCount,
        ResultPassCount with sum as ResultPassCount,
        ResultFailCount with sum as ResultFailCount,
        ResultNotExecutedCount with sum as ResultNotExecutedCount,
        ResultNotImpactedCount with sum as ResultNotImpactedCount
    )
)
```

***

### Test summary filtered by test owner

To view the test summary of a pipeline for tests owned by a particular test owner, use the following queries. To create the report, carry out the following extra steps along with what is defined later in this article.

- Expand `Test` into `Test.TestOwner`.
- Select Power BI Visualization Slicer and add the field `Test.TestOwner` to the slicer's **Field**.
- Select the test owner from the slicer for which you need to see the outcome summary.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed (
      "https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?"
      &"$apply=filter("
      &"Pipeline/PipelineName eq '{pipelineName}' "
      &"and DateSK ge {startdate} "
      &"and Workflow eq 'Build'"
      &")/groupby("
      &"(Test/TestOwner),"
      &"aggregate("
      &"ResultCount with sum as ResultCount, "
      &"ResultPassCount with sum as ResultPassCount, "
      &"ResultFailCount with sum as ResultFailCount, "
      &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
      &"ResultNotImpactedCount with sum as ResultNotImpactedCount"
      &")",
      null, [Implementation="2.0", OmitValues = ODataOmitValues.Nulls, ODataVersion = 4]
   )
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter(
    Pipeline/PipelineName eq '{pipelineName}' 
    and DateSK ge {startdate} 
    and Workflow eq 'Build'
)/groupby(
    (Test/TestOwner),
    aggregate(
        ResultCount with sum as ResultCount,
        ResultPassCount with sum as ResultPassCount,
        ResultFailCount with sum as ResultFailCount,
        ResultNotExecutedCount with sum as ResultNotExecutedCount,
        ResultNotImpactedCount with sum as ResultNotImpactedCount
    )
)
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name.
- `{project}` - Your team project name.
- `{pipelineName}` - Your pipeline name. Example: `Fabrikam hourly build pipeline`.
- `{startdate}` - The date to start your report. Format: YYYYMMDD. Example: `20220815` for August 15, 2022.

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
   `and DateSK ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return test runs on or after the specified date.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Workflow eq 'Build'` or `and Workflow eq 'Release'`
   :::column-end:::
   :::column span="1":::
   Return test runs only for pipelines designated with the `Build` or `Release` workflow.
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
   `aggregate(`
   :::column-end:::
   :::column span="1":::
   Start the `aggregate` clause for all the test runs matching the filter criteria.
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
   `ResultFailCount with sum as ResultFailCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of failed test runs as `ResultFailCount`.
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
   `)`
   :::column-end:::
   :::column span="1":::
   Close the `aggregate()` clause.
   :::column-end:::
:::row-end:::

[!INCLUDE [temp](includes/rename-query.md)]
  
[!INCLUDE [temp](includes/sample-rename-column-fields.md)]

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Donut chart report

1. In Power BI, under **Visualizations**, select the **Donut** report.

	:::image type="content" source="media/pipeline-test-reports/visualizations-test-summary.png" alt-text="Screenshot of visualization fields selections for Test Summary report.":::

1. Add the following fields to **Values**, in the order shown. Right-click each field and make sure **Sum** is selected.
	- `ResultPassCount`
	- `ResultFailCount`
	- `ResultNotExecutedCount`
	- `ResultNotImpactedCount`
Your report should look similar to the following image. 

:::image type="content" source="media/pipeline-test-reports/test-summary-donut-report.png" alt-text="Screenshot of Sample Test Summary Donut report.":::

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
