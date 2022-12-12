---
title: Pipeline test summary sample Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a test summary Power BI report for a given pipeline in the project.
ms.subservice: azure-devops-analytics
ms.reviewer: ravishan
ms.manager: mijacobs
ms.author: kaghai
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops'  
ms.date: 09/21/2021
---

# Test summary sample report 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 

This article shows you how to get the number of test runs for different test outcomes: **Passed**, **Failed**, **Not executed**, **Not impacted**.

An example is shown in the following image.

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI test summary report.](media/odata-powerbi-test-analytics/test-summary-reports1.png)

Specifically, you'll find sample queries for the following reports: 

- Test summary for build workflow
- Test summary for release workflow
- Test summary for a particular branch
- Test summary for a particular test file
- Test summary for a particular test owner 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi-cloud-only.md)]

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
        &"And Workflow eq 'Build' "
        &") "
            &"/aggregate( "
                &"ResultCount with sum as ResultCount, "
                &"ResultPassCount with sum as ResultPassCount, "
            &"ResultFailCount with sum as ResultFailCount, "
                &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount "
        &") "
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
	And Workflow eq 'Build'
	)
	/aggregate(
		ResultCount with sum as ResultCount,
		ResultPassCount with sum as ResultPassCount,
		ResultFailCount with sum as ResultFailCount,
		ResultNotExecutedCount with sum as ResultNotExecutedCount,
		ResultNotImpactedCount with sum as ResultNotImpactedCount
	)

```

***

### Substitution strings

[!INCLUDE [temp](includes/sample-query-substitutions.md)]
 
- `{organization}` - Your organization name
- `{project}` - Your team project name
- `{pipelinename}` - Your pipeline name. Example: `Fabrikam hourly build pipeline` 
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
:::row:::
   :::column span="1":::
   `$apply=filter(`
   :::column-end:::
   :::column span="1":::
   Start filter()
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
   `and CompletedOn/Date ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return test runs on or after the specified date
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and Workflow eq 'Build'`
   :::column-end:::
   :::column span="1":::
   Return test runs for 'Build' workflow
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close filter()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate(`
   :::column-end:::
   :::column span="1":::
   Start aggregate. For all the test runs matching the above filter criteria:
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultCount with sum as ResultCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of test runs as ResultCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultPassCount with sum as ResultPassCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of passed test runs as ResultPassCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultFailCount with sum as ResultFailCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of failed test runs as ResultFailCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultNotExecutedCount with sum as ResultNotExecutedCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of not executed test runs as ResultNotExecutedCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultNotImpactedCount with sum as ResultNotImpactedCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of not affected test runs as ResultNotImpactedCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close aggregate()
   :::column-end:::
:::row-end:::

[!INCLUDE [temp](includes/query-filters-test.md)]


## Power BI transforms

### Rename fields and query, then Close & Apply

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI transform data, Rename Columns.](media/odata-powerbi-test-analytics/test-summary-rename1.png)

1. You also may want to rename the query from the default **Query1**, to something more meaningful. 

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI transform data, Rename Query.](media/odatapowerbi-pipelines/renamequery.png)

1. Once done, choose **Close & Apply** to save the query and return to Power BI.

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI Power Query Editor, Close & Apply.](media/odatapowerbi-pipelines/closeandapply.png)
  
  
## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI Visualizations Test Summary fields.](media/odata-powerbi-test-analytics/test-summary-fields1.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Donut Chart**. 
1. Add the field "ResultPassCount" to **Values**.
    - Right-click "ResultPassCount" field and ensure **Sum** is selected.
1. Add the field "ResultFailCount" to **Values**.
	  - Right-click "ResultFailCount" field and ensure **Sum** is selected.
1. Add the field "ResultNotExecutedCount" to **Values**.
	  - Right-click "ResultNotExecutedCount" field and ensure **Sum** is selected.
1. Add the field "ResultNotImpactedCount " to **Values**.
    - Right-click "ResultNotImpactedCount " field and ensure **Sum** is selected.

    
Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI sample test summary report.](media/odata-powerbi-test-analytics/test-summary-reports1.png)


You can use the following other queries to create different but similar reports using the same steps defined previously in this article.

## Test summary for Release workflow 

You may want to view the test summary of a pipeline for **Release** workflow, instead of Build workflow.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"And Date/Date ge {startdate} "
        &"And Workflow eq 'Release' "
        &") "
            &"/aggregate( "
                &"ResultCount with sum as ResultCount, "
                &"ResultPassCount with sum as ResultPassCount, "
            &"ResultFailCount with sum as ResultFailCount, "
                &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount "
        &") "
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
	And Workflow eq 'Release'
	)
	/aggregate(
		ResultCount with sum as ResultCount,
		ResultPassCount with sum as ResultPassCount,
		ResultFailCount with sum as ResultFailCount,
		ResultNotExecutedCount with sum as ResultNotExecutedCount,
		ResultNotImpactedCount with sum as ResultNotImpactedCount
	)
```

***

## Filter by branch

You may want to view the test summary of a pipeline for a particular branch only. To create the report, carry out the following extra steps along with what is defined previously in this article.

- Expand Branch into Branch.BranchName
- Select Power BI Visualization Slicer and add the field Branch.BranchName to the slicer's Field
- Select the pipeline from the slicer for which you need to see the outcome summary

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"And Date/Date ge {startdate} "
        &"And Workflow eq 'Build' "
        &") "
            &"/groupby( "
                &"(Branch/BranchName), "
                &"aggregate( "
            &"ResultCount with sum as ResultCount, "
                &"ResultPassCount with sum as ResultPassCount, "
            &"ResultFailCount with sum as ResultFailCount, "
        &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
    &"ResultNotImpactedCount with sum as ResultNotImpactedCount "
    &")) "
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
	And Workflow eq 'Build'
	)
	/groupby(
		(Branch/BranchName),
		aggregate(
		ResultCount with sum as ResultCount,
		ResultPassCount with sum as ResultPassCount,
		ResultFailCount with sum as ResultFailCount,
		ResultNotExecutedCount with sum as ResultNotExecutedCount,
		ResultNotImpactedCount with sum as ResultNotImpactedCount
	))
```

***

## Filter by test file

You may want to view the test summary of a pipeline for a particular test file only. To create the report, carry out the following extra steps along with what is defined previously in this article.

- Expand Branch into Test.ContainerName
- Select Power BI Visualization Slicer and add the field Test.ContainerName to the slicer's Field
- Select the pipeline from the slicer for which you need to see the outcome summary

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"And Date/Date ge {startdate} "
        &"And Workflow eq 'Build') "
        &"/groupby( "
            &"(Test/ContainerName), "
                &"aggregate( "
                &"ResultCount with sum as ResultCount, "
            &"ResultPassCount with sum as ResultPassCount, "
                &"ResultFailCount with sum as ResultFailCount, "
            &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
        &"ResultNotImpactedCount with sum as ResultNotImpactedCount "
    &")) "
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
	And Workflow eq 'Build')
	/groupby(
		(Test/ContainerName),
		aggregate(
		ResultCount with sum as ResultCount,
		ResultPassCount with sum as ResultPassCount,
		ResultFailCount with sum as ResultFailCount,
		ResultNotExecutedCount with sum as ResultNotExecutedCount,
		ResultNotImpactedCount with sum as ResultNotImpactedCount
	))
```

***

## Filter by test owner

You may want to view the test summary of a pipeline for tests owned by a particular test owner only. To create the report, carry out the following extra steps along with what is defined previously in this article.

- Expand Branch into Test.TestOwner
- Select Power BI Visualization Slicer and add the field Test.TestOwner to the slicer's Field
- Select the pipeline from the slicer for which you need to see the outcome summary

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"And Date/Date ge {startdate} "
        &"And Workflow eq 'Build') "
        &"/groupby( "
            &"(Test/TestOwner), "
                &"aggregate( "
                &"ResultCount with sum as ResultCount, "
            &"ResultPassCount with sum as ResultPassCount, "
                &"ResultFailCount with sum as ResultFailCount, "
            &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
        &"ResultNotImpactedCount with sum as ResultNotImpactedCount "
    &")) "
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
	And Workflow eq 'Build')
	/groupby(
		(Test/TestOwner), 
		aggregate(
		ResultCount with sum as ResultCount,
		ResultPassCount with sum as ResultPassCount,
		ResultFailCount with sum as ResultFailCount,
		ResultNotExecutedCount with sum as ResultNotExecutedCount,
		ResultNotImpactedCount with sum as ResultNotImpactedCount
))
```

*** 

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
