---
title: Pipeline test summary trend sample Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a test summary trend Power BI report for a given pipeline in the project.
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: ravishan
ms.manager: mijacobs
ms.author: kaghai
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops'  
ms.date: 10/13/2021
---

# Test summary trend sample report 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 

This article shows you how to create a report that shows day wise trend of number of total failed tests and test pass rate for a pipeline.

An example is shown in the following image.

> [!div class="mx-imgBorder"] 
> ![Sample - Test Summary - Report](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-reports1.png)


[!INCLUDE [temp](includes/preview-note.md)]


Specifically, you'll find sample queries for the following reports: 


- Test summary trend for build workflow
- Test summary trend for release workflow
- Test summary trend for a particular branch
- Test summary trend for a particular test file
- Test summary trend for a particular test owner 

[!INCLUDE [temp](./includes/prerequisites-power-bi-cloud-only.md)]

## Sample queries

[!INCLUDE [temp](includes/sample-required-reading.md)]

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

### Substitution strings

Each query contains the following strings that you must replace with your values. Don't include brackets {} with your substitution. For example if your organization name is "Fabrikam", replace `{organization}` with **Fabrikam**, not `{Fabrikam}`.
 
- `{organization}` - Your organization name
- `{project}` - Your team project name
- `{pipelinename}` - Your pipeline name. Example: `Fabrikam hourly build pipeline`.
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
   `/groupby(`
   :::column-end:::
   :::column span="1":::
   Start groupby()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(CompletedOn/Date),`
   :::column-end:::
   :::column span="1":::
   Group by the date of completion of test run
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
   `ResultFailCount with sum as ResultFailCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of failed test runs as ResultFailCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `))`
   :::column-end:::
   :::column span="1":::
   Close aggregate() and groupby()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/compute(`
   :::column-end:::
   :::column span="1":::
   Start compute()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `iif(ResultCount gt ResultNotExecutedCount, ((ResultPassCount add ResultNotImpactedCount) div cast(ResultCount sub ResultNotExecutedCount, Edm.Decimal)) mul 100, 0) as PassRate`
   :::column-end:::
   :::column span="1":::
   For all the days, calculate Pass rate.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close compute()
   :::column-end:::
:::row-end:::

[!INCLUDE [temp](includes/query-filters-test.md)]

## Power BI transforms

The query returns some columns that you need to expand and flatten into its fields before you can use them in Power BI. In this example, such an entity is CompletedOn.

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on **CompletedOn**.

### Expand the CompletedOn column

1. Choose the expand button

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Choose expand button](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-expand1.png)
    
1. Select the checkbox "(Select All Columns)" to expand

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Select all columns](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-expand2.png)

1. The table now contains the expanded entity **CompletedOn.Date**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Expanded entity](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-expand3.png)
    

### Change column type

1. Change the type of column **PassRate** to **Decimal Number**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - change column type](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-changetype1.png)


### Rename fields and query, then Close & Apply

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-rename1.png)

1. You also may want to rename the query from the default **Query1**, to something more meaningful. 

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Query](media/odatapowerbi-pipelines/renamequery.png)

1. Once done, choose **Close & Apply** to save the query and return to Power BI.

	> [!div class="mx-imgBorder"] 
	> ![Power BI Close & Apply](media/odatapowerbi-pipelines/closeandapply.png)
  
  
## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 

> [!div class="mx-imgBorder"] 
> ![Sample - Test Summary - Fields](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-field.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Line and stacked column chart**. 
1. Add the field "CompletedOn.Date" to **Axis**.
    - Right-click "CompletedOn.Date" and select "CompletedOn.Date", rather than Date Hierarchy.
1. Add the field "PassRate" to **Line values**.
    - Right-click "PassRate" field and ensure **Sum** is selected.
1. Add the field "ResultFailCount" to **Column values**.
    - Right-click "PassRate" field and ensure **Sum** is selected.
    
Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Sample - Test Summary - Report](media/odata-powerbi-test-analytics/overall-test-pass-rate-trend-reports1.png)


You can use the following other queries to create different but similar reports using the same steps defined previously in this article.

## Test summary trend for Release workflow

You may want to view the test summary trend of a pipeline for **Release** workflow, instead of Build workflow.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter("
	  &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedOn/Date ge {startdate}) "
        &"/groupby((Workflow, CompletedOn/Date), "
        &"aggregate( "
            &"ResultPassCount with sum as ResultPassCount, "
                &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
                &"ResultCount with sum as ResultCount, "
            &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
                &"ResultFailCount with sum as ResultFailCount)) "
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

## Filter by branch

You may want to view the test summary trend of a pipeline for a particular branch only. To create the report, carry out the following extra steps along with what is defined previously in this article.

- Expand Branch into Branch.BranchName
- Select Power BI Visualization Slicer and add the field Branch.BranchName to the slicer's Field
- Select the pipeline from the slicer for which you need to see the outcome summary

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestRuns?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedOn/Date ge {startdate} "
        &"and Workflow eq 'Build') "
        &"/groupby((Branch/BranchName, CompletedOn/Date), "
            &"aggregate( "
                &"ResultPassCount with sum as ResultPassCount, "
                &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultCount with sum as ResultCount, "
                &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount)) "
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

## Filter by test file

You may want to view the test summary trend of a pipeline for a particular test file only. To create the report, carry out the following extra steps along with what is defined previously in this article.

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
                &"and CompletedOn/Date ge {startdate} "
        &"And Workflow eq 'Build') "
        &"/groupby((Test/ContainerName, Date/Date), "
            &"aggregate( "
                &"ResultPassCount with sum as ResultPassCount, "
                &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultCount with sum as ResultCount, "
                &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount)) "
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

## Filter by test owner

You may want to view the test summary trend of a pipeline for tests owned by a particular test owner only. To create the report, carry out the following extra steps along with what is defined previously in this article.

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
                &"and CompletedOn/Date ge {startdate} "
        &"And Workflow eq 'Build') "
        &"/groupby((Test/TestOwner, Date/Date), "
            &"aggregate( "
                &"ResultPassCount with sum as ResultPassCount, "
                &"ResultNotExecutedCount with sum as ResultNotExecutedCount, "
            &"ResultCount with sum as ResultCount, "
                &"ResultNotImpactedCount with sum as ResultNotImpactedCount, "
            &"ResultFailCount with sum as ResultFailCount)) "
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

## Full list of Pipelines sample reports 

[!INCLUDE [temp](includes/sample-full-list-pipelines.md)]

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
