---
title: Pipeline outcome summary for all pipelines sample report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline outcome summary Power BI report for all pipelines in the project.  
ms.subservice: azure-devops-analytics
ms.reviewer: ravishan
ms.author: kaghai
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2020'     
ms.date: 10/12/2021
---

# Pipeline outcome summary for all pipelines sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

You may want to see pipeline metrics such as pass rate, number of failures, duration, and so on. for all the pipelines together, in a single report. This article shows you how to get pipeline outcome summary, for all the pipelines in a project. You can take a similar approach to get other metrics like pipeline duration and number of failures for all pipelines of the project in a single report.

[!INCLUDE [temp](includes/preview-note.md)]

An example is shown in the following image.

> [!div class="mx-imgBorder"] 
> ![Sample - Pipelines Outcome Summary - Report](media/odatapowerbi-pipelines/allpipelines-report1.png)

As shown in the above image, you can select any pipeline from the "Pipeline Name" drop-down at top right and the report will show the outcome summary for the selected pipeline only

> [!div class="mx-imgBorder"] 
> ![Report shows the outcome summary for the selected pipeline only.](media/odatapowerbi-pipelines/allpipelines-report2.png)

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi-2020.md)]

## Sample queries

### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
               &"$apply=filter( "
	       &"CompletedDate ge {startdate} "
	       &")"
                &"/groupby( "
        &"(Pipeline/PipelineName), "
        &"aggregate( "
            &"$count as TotalCount, "
                &"SucceededCount with sum as SucceededCount, "
                &"FailedCount with sum as FailedCount, "
            &"PartiallySucceededCount with sum as PartiallySucceededCount, "
                &"CanceledCount with sum as CanceledCount "
            &")) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?%20
$apply=filter(
	CompletedDate ge {startdate}
	)
/groupby(
(Pipeline/PipelineName), 
aggregate(
	$count as TotalCount,
	SucceededCount with sum as SucceededCount,
	FailedCount with sum as FailedCount,
	PartiallySucceededCount with sum as PartiallySucceededCount,
	CanceledCount with sum as CanceledCount
))

```

***

### Substitution strings

Each query contains the following strings that you must replace with your values. Don't include brackets {} with your substitution. For example if your organization name is "Fabrikam", replace {organization} with **Fabrikam**, not {Fabrikam}.
 
- {organization} - Your organization name
- {project} - Your team project name
- {startdate} - The date to start your report. Format: YYYY-MM-DDZ. Example: **2021-09-01Z** represents September 1, 2021. Don't enclose in quotes or brackets and use two digits for both, month and date.

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
   `CompletedDate ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return pipeline runs for date greater than specified date
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
   `(Pipeline/PipelineName),`
   :::column-end:::
   :::column span="1":::
   Group the below result by Pipeline Name
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate(`
   :::column-end:::
   :::column span="1":::
   Start aggregate. For each Pipeline:
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$count as TotalCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of runs as TotalCount
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `SucceededCount with sum as SucceededCount ,`
   :::column-end:::
   :::column span="1":::
   Count the number of successful runs as SucceededCount
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `FailedCount with sum as FailedCount,`
   :::column-end:::
   :::column span="1":::
   Count the number of failed runs as FailedCount
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `PartiallySucceededCount with sum as PartiallySucceededCount,`
   :::column-end:::
   :::column span="1":::
   Count the number of partially successful runs as PartiallySucceededCount
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `CanceledCount with sum as CanceledCount`
   :::column-end:::
   :::column span="1":::
   Count the number of canceled runs as CanceledCount
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


[!INCLUDE [temp](includes/query-filters-pipelines.md)]

## Power BI transforms

### Expand Pipeline column

The query returns some columns that you need to expand and flatten into its fields before you can use them in Power BI. Here in this example, such an entity is Pipeline.

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on **Pipeline**.

1. Choose the expand button

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Choose expand button](media/odatapowerbi-pipelines/allpipelines-expand1.png)
    
1. Select the checkbox "(Select All Columns)" to expand

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Select all columns](media/odatapowerbi-pipelines/allpipelines-expand2.png)

1. The table now contains the expanded entity **Pipeline.PipelineName**

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Expanded entity](media/odatapowerbi-pipelines/allpipelines-expand3.png)
    

### Change column type

1. Change the type of column TotalCount to **Whole Number**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - change column type](media/odatapowerbi-pipelines/outcomesummary-changecolumntype.png)

### Rename fields and query, then Close & Apply

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](media/odatapowerbi-pipelines/outcomesummary-renamerightclick.png)

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
> ![Sample - Pipelines Outcome Summary - Fields](media/odatapowerbi-pipelines/allpipelines-fields.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Stacked Column Chart**. 
1. Add the field "SucceededCount" to **Values**.
    - Right-click "SucceededCount" field and ensure **Sum** is selected.
1. Add the field "FailedCount" to **Values**.
	  - Right-click "FailedCount" field and ensure **Sum** is selected.
1. Add the field "CanceledCount" to **Values**.
	  - Right-click "CanceledCount" field and ensure **Sum** is selected.
1. Add the field "PartiallySucceededCount " to **Values**.
    - Right-click "PartiallySucceededCount " field and ensure **Sum** is selected.
1. Add the field "Pipeline.PipelineName" to **Axis**. 
1. Click somewhere outside the stacked column chart and select Power BI Visualization **Slider** to add a slicer.
1. Add the field "Pipeline.PipelineName" to **Field**.
1. Select the down-arrow of slicer to select the option Dropdown instead of List.

    
Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Finished sample - Pipelines Outcome Summary - Report.](media/odatapowerbi-pipelines/allpipelines-report1.png)


## Full list of Pipelines sample reports 

[!INCLUDE [temp](includes/sample-full-list-pipelines.md)]

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
