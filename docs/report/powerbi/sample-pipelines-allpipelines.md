---
title: Pipeline outcome summary for all pipelines sample report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline outcome summary Power BI report for all pipelines in the project.  
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'  
ms.date: 12/14/2022
---

# Pipeline outcome summary for all pipelines sample reports 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

You can use the information provided in this article to query pipeline metrics--such as pass rate, number of failures, duration, and so on--for all pipelines and create a single report. Additional queries are provided to get other metrics, such as pipeline duration and number of failures for all project pipelines. 

The following image illustrates the outcome summary for all pipelines defined for a project since September 2022.

:::image type="content" source="media/pipeline-reports/all-pipelines-outcome-summary-report.png" alt-text="Screenshot of All Pipelines Outcome Summary Report.":::

As shown in the following image, you can select any pipeline from the **Pipeline Name** drop-down menu, and the report changes to focus on the outcome summary for the selected pipeline.

:::image type="content" source="media/pipeline-reports/all-pipelines-outcome-summary-report-select-pipeline.png" alt-text="Screenshot of report that shows the outcome summary for the selected pipeline only.":::


[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]


## Sample queries


You can use the following queries of the `PipelineRuns` entity set to create different but similar pipeline outcome summary reports. 


[!INCLUDE [temp](includes/query-filters-pipelines.md)]

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

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)] 
 
- `{organization}` - Your organization name
- `{project}` - Your team project name
- `{startdate}` - The date to start your report. Format: YYYY-MM-DDZ. Example: **2022-09-01Z** represents September 1, 2022. Don't enclose in quotes or brackets and use two digits for both, month and date.

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
   `CompletedDate ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return pipeline runs for date greater than the specified date.
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
   Start `groupby()` clause/
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(Pipeline/PipelineName),`
   :::column-end:::
   :::column span="1":::
   Group data results by pipeline name.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate(`
   :::column-end:::
   :::column span="1":::
   Start `aggregate` clause for each pipeline.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `$count as TotalCount,`
   :::column-end:::
   :::column span="1":::
   Count the total number of runs as `TotalCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `SucceededCount with sum as SucceededCount`.
   :::column-end:::
   :::column span="1":::
   Count the number of successful runs as `SucceededCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `FailedCount with sum as FailedCount,`
   :::column-end:::
   :::column span="1":::
   Count the number of failed runs as `FailedCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `PartiallySucceededCount with sum as PartiallySucceededCount,`
   :::column-end:::
   :::column span="1":::
   Count the number of partially successful runs as `PartiallySucceededCount`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `CanceledCount with sum as CanceledCount`
   :::column-end:::
   :::column span="1":::
   Count the number of canceled runs as `CanceledCount`.
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


[!INCLUDE [temp](includes/rename-query.md)]


## Expand Pipeline column in Power Query Editor

Prior to creating the report, expand the `Pipeline` column that returns records that may contain one or more fields.  

1. Close the **Advanced Editor**. 
2. From the Power Query Editor, choose the `Pipeline` column expand button, ensure that `PipelineName` is selected, and then choose **OK**.  

	:::image type="content" source="media/pipeline-reports/expand-pipelines-column.png" alt-text="Screenshot of Pipelines column expand menu. ":::

	The table now contains the expanded entity `Pipeline.PipelineName`.

	:::image type="content" source="media/pipeline-reports/pipeline-pipeline-names.png" alt-text="Screenshot of Pipeline.PipelineName column. "::: 

## Change column data type

From the Power Query Editor, select the `TotalCount` column, and then select **Data Type** from the **Transform** menu, and choose **Whole Number**. To learn more about changing the data type, see  [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the column `Pipeline.PipelineName` to `Pipeline Name`, or `TotalCount` to `Total Count`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]

  
## Create the Stacked Column Chart report

1. In Power BI, under **Visualizations**, choose the **Stacked Column Chart** report. 

	:::image type="content" source="media/pipeline-reports/all-pipelines-outcome-visualizations.png" alt-text="Screenshot of visualization fields selections for all pipeline runs report. ":::
 
1. Add `Pipeline.PipelineName` or the renamed column `Pipeline Name` to **Axis**. 

1. Add the following fields to **Values** in the order indicated, and right-click each field and ensure **Sum** is selected.    
	- `SucceededCount` 
	- `FailedCount` 
	- `CanceledCount`  
	- `PartiallySucceededCount`.  

1. To add a slicer to the report, deselect the report and select **Slicer** from the **Visualizations** pane.  
	- Add `Pipeline.PipelineName` or the renamed column `Pipeline Name` to **Field**.  
		:::image type="content" source="media/pipeline-reports/all-pipelines-outcome-slicer.png" alt-text="Screenshot of Visualizations pane, Slicer, Pipeline Name added. ":::

	- To change the slicer from a list to a dropdown menu option, select the **Format your visual** paint-brush icon from the **Visualizations** pane, and select the **Dropdown** option instead of **List**.

		:::image type="content" source="media/pipeline-reports/all-pipelines-outcome-slicer-dropdown-option.png" alt-text="Screenshot of Visualizations pane, Slicer, settings options, Dropdown selected. ":::

The report appears as follows. 

:::image type="content" source="media/pipeline-reports/all-pipelines-outcome-summary-report.png" alt-text="Screenshot of sample All Pipelines Outcome Summary Report.":::
 

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
