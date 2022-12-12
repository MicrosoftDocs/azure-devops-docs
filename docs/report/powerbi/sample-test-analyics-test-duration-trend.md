---
title: Pipeline test duration trend sample Power BI reports 
titleSuffix: Azure DevOps
description: Learn how to generate a test duration trend Power BI report for a given pipeline in the project.
ms.subservice: azure-devops-analytics
ms.reviewer: ravishan
ms.manager: mijacobs
ms.author: kaghai
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops'  
ms.date: 10/13/2021
---

# Test duration trend sample report

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 

This article shows you how to create a report that shows the day wise trend of the average time taken to execute a test for a selected time range.

[!INCLUDE [temp](includes/preview-note.md)]

An example is shown in the following image.

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI test duration trend report.](media/odata-powerbi-test-analytics/test-duration-trend-report1.png)


[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi-cloud-only.md)]

## Sample queries

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
                &"(TestSK, Test/TestName, Date/Date), "
                &"aggregate( "
            &"ResultCount with sum as TotalCount, "
                &"ResultDurationSeconds with sum as TotalDuration "
            &")) "
        &"/compute( "
    &"TotalDuration div TotalCount as AvgDuration "
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

***

### Substitution strings

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

[!INCLUDE [temp](includes/sample-query-substitutions-pipelines.md)]


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
   `And Date/Date ge {startdate}`
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
   `(TestSK, Test/TestName, Date/Date),`
   :::column-end:::
   :::column span="1":::
   Group by the test Name and date of execution of test
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
   Count the total number of test runs as TotalCount
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `ResultDurationSeconds with sum as TotalDuration`
   :::column-end:::
   :::column span="1":::
   Sum the total duration of all the runs as TotalDuration.
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
   `TotalDuration div TotalCount as AvgDuration`
   :::column-end:::
   :::column span="1":::
   For all the tests, we already have total number of runs and total duration. Calculate average duration by diving total duration by total number of runs.
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

The query returns some columns that you need to expand and flatten into its fields before you can use them in Power BI. In this example, such entities are Test and Date.

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on **Test** and **Date**.

### Expand the Test and Date column

1. Choose the expand button

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI transform data, Choose expand button.](media/odata-powerbi-test-analytics/test-duration-trend-expand1.png)
    
1. Select the checkbox "(Select All Columns)" to expand

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI transform data, Select all columns.](media/odata-powerbi-test-analytics/test-duration-trend-expand2.png)

1. The table now contains the expanded entity **Test.TestName**.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI transform data, Expanded entity.](media/odata-powerbi-test-analytics/test-duration-trend-expand3.png)
    

### Change column type

The query doesn't return all the columns in the format in which you can directly consume them in Power BI reports. You can change the column type as shown.

1. Change the type of column **TotalCount** to **Whole Number**.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI, change Total Count column type.](media/odata-powerbi-test-analytics/test-duration-changetype1.png)
    
1. Change the type of column **TotalDuration** and **AvgDuration** to **Decimal Number**.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI, change Total Duration column type.](media/odata-powerbi-test-analytics/test-duration-changetype2.png)


### Rename fields and query, then Close & Apply

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI transform data, Rename Columns.](media/odata-powerbi-test-analytics/test-duration-trend-rename1.png)

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
> ![Screenshot of Power BI Visualizations test duration trend report fields.](media/odata-powerbi-test-analytics/test-duration-trend-filed.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Line Chart**.
1. Add the field "Date.Date" to **Axis**.
    - Right-click "Date.Date" and select "Date.Date", rather than Date Hierarchy.
1. Add the field "AvgDuration" to **Values**.
1. Add Power Visualization **Slicer**.
1. Add the field "Test.TestName" to **Field** of Slicer.
    
Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI sample test duration trend report.](media/odata-powerbi-test-analytics/test-duration-trend-report1.png)

 

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
