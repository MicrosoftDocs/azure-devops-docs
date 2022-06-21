---
title: Pipeline flaky test sample Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a list of flaky tests Power BI report for a given pipeline in the project.
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

# Flaky tests sample report

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 

This article shows you how to create a report that shows the list of flaky tests for a pipeline. An example is shown in the following image.

> [!div class="mx-imgBorder"] 
> ![Sample - Test Summary - Report](media/odata-powerbi-test-analytics/flaky-tests-report1.png)

[!INCLUDE [temp](includes/preview-note.md)]

Specifically, you'll find sample queries for the following reports: 

- Flaky tests for build workflow
- Flaky tests for release workflow
- Flaky tests for a particular branch
- Flaky tests for a particular test file
- Flaky tests for a particular test owner 

[!INCLUDE [temp](./includes/prerequisites-power-bi-cloud-only.md)]

## Sample queries

[!INCLUDE [temp](includes/sample-required-reading.md)]

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter("
                &"Pipeline/PipelineId eq 7813 "
                &"And Date/Date ge 2020-02-04Z "
        &"And Workflow eq 'Build') "
        &"/groupby((TestSK, Test/TestName), "
            &"aggregate( "
                &"ResultCount with sum as TotalCount, "
                &"ResultPassCount with sum as PassedCount, "
            &"ResultFailCount with sum as FailedCount, "
                &"ResultNotExecutedCount with sum as NotExecutedCount, "
            &"ResultNotImpactedCount with sum as NotImpactedCount, "
        &"ResultFlakyCount with sum as FlakyCount)) "
    &"/filter(FlakyCount gt 0) "
    &"/compute( "
    &"(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlaykRate) "
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
	(TestSK, Test/TestName), 
	aggregate(
	ResultCount with sum as TotalCount,
	ResultPassCount with sum as PassedCount,
	ResultFailCount with sum as FailedCount,
	ResultNotExecutedCount with sum as NotExecutedCount,
	ResultNotImpactedCount with sum as NotImpactedCount,
	ResultFlakyCount with sum as FlakyCount))
/filter(FlakyCount gt 0)
/compute(
	(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate
)
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
   `(TestSK, Test/TestName),`
   :::column-end:::
   :::column span="1":::
   Group by the test Name
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
   `ResultCount with sum as TotalCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of test runs as TotalCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultPassCount with sum as PassedCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of passed test runs as PassedCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultFailCount with sum as FailedCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of failed test runs as FailedCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultNotExecutedCount with sum as NotExecutedCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of not executed test runs as NotExecutedCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultNotImpactedCount with sum as NotImpactedCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of not affected test runs as NotImpactedCount.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultFlakyCount with sum as FlakyCount`
   :::column-end:::
   :::column span="1":::
   Count the total number of flaky test runs as FlakyCount.
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
   `/filter(FlakyCount gt 0)`
   :::column-end:::
   :::column span="1":::
   Filter out only those tests that were flaky at least once
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
   `(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate`
   :::column-end:::
   :::column span="1":::
   For all the flaky tests, calculate Flaky rate.
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

## Power BI transforms

The query returns some columns that you need to expand and flatten into its fields before you can use them in Power BI. In this example, such an entity is Test.

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on **Test**.

### Expand the Test column

1. Choose the expand button

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Choose expand button](media/odata-powerbi-test-analytics/failed-tests-expand1.png)
    
1. Select the checkbox "(Select All Columns)" to expand

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Select all columns](media/odata-powerbi-test-analytics/failed-tests-expand2.png)

1. The table now contains the expanded entity **Test.TestName**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Expanded entity](media/odata-powerbi-test-analytics/failed-tests-expand3.png)
    

### Change column type

The query doesn't return all the columns in the format in which you can directly consume them in Power BI reports. You can change the column type as shown.

1. Change the type of column **TotalCount**, **PassedCount**, **FailedCount**, **NotExecutedCount**, **NotImpactedCount**, and **FlakyCount** to **Whole Number**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - change column type](media/odata-powerbi-test-analytics/failed-tests-changetype1.png)
    
1. Change the type of column **FlakyRate** to **Decimal Number**.

    > [!div class="mx-imgBorder"] 
    > ![Change the type of column FlakyRate to Decimal Number.](media/odata-powerbi-test-analytics/flaky-tests-changetype1.png)


### Rename fields and query, then Close & Apply

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](media/odata-powerbi-test-analytics/failed-tests-rename1.png)

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
> ![Sample - Test Summary - Fields](media/odata-powerbi-test-analytics/flaky-tests-field1.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Table**.
1. Add the field "Test.TestName" to **Values**.
1. Add the field "TotalCount" to **Values**.
1. Add the field "PassedCount" to **Values**.
1. Add the field "FailedCount" to **Values**.
1. Add the field "FlakyCount" to **Values**.
1. Add the field "FlakyRate" to **Values**
    
Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Sample - Test Summary - Report](media/odata-powerbi-test-analytics/flaky-tests-report1.png)


You can use the following other queries to create different but similar reports using the same steps defined previously in this article.

## Flaky tests for Release workflow

You may want to view the flaky tests of a pipeline for **Release** workflow, instead of Build workflow.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v4.0-preview/TestResultsDaily?
$apply=filter("
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"And Date/Date ge {startdate}) "
        &"/groupby((TestSK, Test/TestName, Workflow), "
        &"aggregate( "
            &"ResultCount with sum as TotalCount, "
                &"ResultPassCount with sum as PassedCount, "
                &"ResultFailCount with sum as FailedCount, "
            &"ResultNotExecutedCount with sum as NotExecutedCount, "
                &"ResultNotImpactedCount with sum as NotImpactedCount, "
            &"ResultFlakyCount with sum as FlakyCount)) "
        &"/filter(FlakyCount gt 0) "
    &"/compute( "
    &"(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate) "
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
	And Date/Date ge {startdate})
/groupby((TestSK, Test/TestName, Workflow), 
	aggregate(
	ResultCount with sum as TotalCount,
	ResultPassCount with sum as PassedCount,
	ResultFailCount with sum as FailedCount,
	ResultNotExecutedCount with sum as NotExecutedCount,
	ResultNotImpactedCount with sum as NotImpactedCount,
	ResultFlakyCount with sum as FlakyCount))
/filter(FlakyCount gt 0)
/compute(
(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate)
```

***

## Filter by branch

You may want to view the flaky tests of a pipeline for a particular branch only. To create the report, carry out the following extra steps along with what is defined previously in this article.

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
        &"And Workflow eq 'Build') "
        &"/groupby((TestSK, Test/TestName, Branch/BranchName), "
            &"aggregate( "
                &"ResultCount with sum as TotalCount, "
                &"ResultPassCount with sum as PassedCount, "
            &"ResultFailCount with sum as FailedCount, "
                &"ResultNotExecutedCount with sum as NotExecutedCount, "
            &"ResultNotImpactedCount with sum as NotImpactedCount, "
        &"ResultFlakyCount with sum as FlakyCount)) "
    &"/filter(FlakyCount gt 0) "
    &"/compute( "
    &"(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate) "
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
/groupby((TestSK, Test/TestName, Branch/BranchName), 
	aggregate(
	ResultCount with sum as TotalCount,
	ResultPassCount with sum as PassedCount,
	ResultFailCount with sum as FailedCount,
	ResultNotExecutedCount with sum as NotExecutedCount,
	ResultNotImpactedCount with sum as NotImpactedCount,
	ResultFlakyCount with sum as FlakyCount))
/filter(FlakyCount gt 0)
/compute(
(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate)
```

***

## Filter by test file

You may want to view the flaky tests of a pipeline for a particular test file only. To create the report, carry out the following extra steps along with what is defined previously in this article.

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
                &"And Date/Date ge {startdate}) "
        &"/groupby((TestSK, Test/TestName, Test/ContainerName), "
        &"aggregate( "
            &"ResultCount with sum as TotalCount, "
                &"ResultPassCount with sum as PassedCount, "
                &"ResultFailCount with sum as FailedCount, "
            &"ResultNotExecutedCount with sum as NotExecutedCount, "
                &"ResultNotImpactedCount with sum as NotImpactedCount, "
            &"ResultFlakyCount with sum as FlakyCount)) "
        &"/filter(FlakyCount gt 0) "
    &"/compute( "
    &"(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate) "
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
	And Date/Date ge {startdate})
/groupby((TestSK, Test/TestName, Test/ContainerName), 
	aggregate(
	ResultCount with sum as TotalCount,
	ResultPassCount with sum as PassedCount,
	ResultFailCount with sum as FailedCount,
	ResultNotExecutedCount with sum as NotExecutedCount,
	ResultNotImpactedCount with sum as NotImpactedCount,
	ResultFlakyCount with sum as FlakyCount))
/filter(FlakyCount gt 0)
/compute(
(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate)
```

***

## Filter by test owner

You may want to view the flaky tests of a pipeline for tests owned by a particular test owner only. To create the report, carry out the following extra steps along with what is defined previously in this article.

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
                &"And Date/Date ge {startdate}) "
        &"/groupby((TestSK, Test/TestName, Test/TestOwner), "
        &"aggregate( "
            &"ResultCount with sum as TotalCount, "
                &"ResultPassCount with sum as PassedCount, "
                &"ResultFailCount with sum as FailedCount, "
            &"ResultNotExecutedCount with sum as NotExecutedCount, "
                &"ResultNotImpactedCount with sum as NotImpactedCount, "
            &"ResultFlakyCount with sum as FlakyCount)) "
        &"/filter(FlakyCount gt 0) "
    &"/compute( "
    &"(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate) "
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
	And Date/Date ge {startdate})
/groupby((TestSK, Test/TestName, Test/TestOwner), 
	aggregate(
	ResultCount with sum as TotalCount,
	ResultPassCount with sum as PassedCount,
	ResultFailCount with sum as FailedCount,
	ResultNotExecutedCount with sum as NotExecutedCount,
	ResultNotImpactedCount with sum as NotImpactedCount,
	ResultFlakyCount with sum as FlakyCount))
/filter(FlakyCount gt 0)
/compute(
(FlakyCount div cast(TotalCount, Edm.Decimal)) mul 100 as FlakyRate)
```

***

## Full list of Pipelines sample reports 

[!INCLUDE [temp](includes/sample-full-list-pipelines.md)]

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
