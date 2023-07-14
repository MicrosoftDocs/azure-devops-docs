---
title: Pipeline outcome summary sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline outcome summary Power BI report.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020' 
ms.date: 12/14/2022
---

# Pipeline outcome summary sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

A pipeline run represents a single execution of a pipeline. During a run, the pipeline is processed, and agents process one or more jobs. Outcomes include *Succeeded*, *Failed*, *Canceled*, and *Partially Succeeded*. To create reports that show the outcomes of pipeline runs, you query the [``PipelineRuns` entity set`](../analytics/entity-reference-pipelines.md#pipelineruns). 

This article provides several queries and instructions on how to create a report to get the number of runs for different pipeline outcomes. 

The following image shows an example of an outcome summary report.

:::image type="content" source="media/pipeline-reports/single-pipeline-run-split-by-outcome-report.png" alt-text="Screenshot of Power BI Pipelines Outcome Summary report.":::

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]



## Sample queries


You can use the following queries of the `PipelineRuns` entity set to create different but similar pipeline outcome summary reports. 

[!INCLUDE [temp](includes/query-filters-pipelines.md)] 

### Pipeline duration for a named pipeline 

The following queries return the pipeline runs for a specific pipeline from a specified start date.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedDate ge {startdate} "
                &") "
        &"/aggregate( "
        &"$count as TotalCount, "
            &"SucceededCount with sum as SucceededCount , "
                &"FailedCount with sum as FailedCount, "
                &"PartiallySucceededCount with sum as PartiallySucceededCount , "
            &"CanceledCount with sum as CanceledCount "
                &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	and CompletedDate ge {startdate}
	)
/aggregate(
	$count as TotalCount,
	SucceededCount with sum as SucceededCount ,
	FailedCount with sum as FailedCount,
	PartiallySucceededCount with sum as PartiallySucceededCount ,
	CanceledCount with sum as CanceledCount
	)

```

***

## Substitution strings and query breakdown

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
   Start `filter()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Pipeline/PipelineName eq '{pipelinename}'`
   :::column-end:::
   :::column span="1":::
   Return pipeline runs for the specified pipeline.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and CompletedDate ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return pipeline runs on or after the specified date.
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
   `/aggregate(`
   :::column-end:::
   :::column span="1":::
   Start `aggregate` clause for all the pipeline runs matching the filter criteria.
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
   `SucceededCount with sum as SucceededCount ,`
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
   `PartiallySucceededCount with sum as PartiallySucceededCount ,`
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
   `)`
   :::column-end:::
   :::column span="1":::
   Close `aggregate()` clause.
   :::column-end:::
:::row-end:::
 
 
### Pipeline run outcome summary for a specific pipeline ID

Pipelines can be renamed. To ensure that the Power BI reports don't break when a pipeline name is changed, use the pipeline ID rather than its name. You can obtain the pipeline ID from the URL of the pipeline runs page. 
 
```
https://dev.azure.com/{organization}/{project}/_build?definitionId={pipelineid}
```

The following queries return the pipeline runs for a specific pipeline ID and from a specified start date.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"PipelineId eq {pipelineId} "
                &"and CompletedDate ge {startdate} "
                &") "
        &"/aggregate( "
        &"$count as TotalCount, "
            &"SucceededCount with sum as SucceededCount , "
                &"FailedCount with sum as FailedCount, "
                &"PartiallySucceededCount with sum as PartiallySucceededCount , "
            &"CanceledCount with sum as CanceledCount "
                &") "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?
$apply=filter(
    PipelineId eq {pipelineId}
    and CompletedDate ge {startdate}
    )
/aggregate(
    $count as TotalCount,
    SucceededCount with sum as SucceededCount ,
    FailedCount with sum as FailedCount,
    PartiallySucceededCount with sum as PartiallySucceededCount ,
    CanceledCount with sum as CanceledCount
)
```

***

### Pipeline run outcome summary filtered by branch  

To view the outcome summary of a pipeline for a particular branch, use the following queries. To create the report, do the following steps:  
- Expand `Branch` into `Branch.BranchName`
- [Change column data type](#change-column-data-type)
- [Create the Donut chart report](#create-the-donut-chart-report)
- Select **Slicer** from the **Visualizations** pane and add the `Branch.BranchName` to the slicer's **Field** 
- Select the branch from the slicer for which you need to see the outcome summary.  
 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and CompletedDate ge {startdate} "
                &") "
        &"/groupby( "
        &"(Branch/BranchName), "
            &"aggregate( "
                &"$count as TotalCount, "
                &"SucceededCount with sum as SucceededCount , "
            &"FailedCount with sum as FailedCount, "
                &"PartiallySucceededCount with sum as PartiallySucceededCount , "
            &"CanceledCount with sum as CanceledCount "
        &")) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?
$apply=filter(
    Pipeline/PipelineName eq '{pipelinename}'
    and CompletedDate ge {startdate}
    )
/groupby(
(Branch/BranchName),
aggregate(
    $count as TotalCount,
    SucceededCount with sum as SucceededCount ,
    FailedCount with sum as FailedCount,
    PartiallySucceededCount with sum as PartiallySucceededCount ,
    CanceledCount with sum as CanceledCount
    ))
```

***

### Pipeline run outcome summary filtered by build reason

You may want to view the outcome summary of a pipeline for only specific **Build Reasons** (Manual / BatchedCI, Pull Request, and so on). To create the report, do the following steps:   
- [Change column data type](#change-column-data-type) 
- [Create the Donut chart report](#create-the-donut-chart-report)
- Select **Slicer** from the **Visualizations** pane and add the `Pipeline.PipelineName` to the slicer's **Field**
- Select the pipeline from the slicer for which you need to see the outcome summary.  


#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and CompletedDate ge {startdate} "
                &") "
        &"/groupby( "
        &"(RunReason), "
            &"aggregate( "
                &"$count as TotalCount, "
                &"SucceededCount with sum as SucceededCount , "
            &"FailedCount with sum as FailedCount, "
                &"PartiallySucceededCount with sum as PartiallySucceededCount , "
            &"CanceledCount with sum as CanceledCount "
        &")) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?
$apply=filter(
    Pipeline/PipelineName eq '{pipelinename}'
    and CompletedDate ge {startdate}
    )
/groupby(
(RunReason),
aggregate(
    $count as TotalCount,
    SucceededCount with sum as SucceededCount ,
    FailedCount with sum as FailedCount,
    PartiallySucceededCount with sum as PartiallySucceededCount ,
    CanceledCount with sum as CanceledCount
))
```

***

### Outcome summary for all project pipelines 

You may want to view the pipeline outcome summary for all project pipelines in a single report. To create the report, do the following steps:  
- Expand `Pipeline` into `Pipeline.PipelineName`  
- [Change column data type](#change-column-data-type)
- [Create the Donut chart report](#create-the-donut-chart-report)
- Select **Slicer** from the **Visualizations** pane and add the `Pipeline.PipelineName` to the slicer's **Field** 
- Select the pipeline from the slicer for which you need to see the outcome summary.  

See also [Outcome summary for all pipelines](sample-pipelines-allpipelines.md) sample report for detailed steps.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"CompletedDate ge {startdate} "
                &") "
                &"/groupby( "
        &"(Pipeline/PipelineName), "
        &"aggregate( "
            &"$count as TotalCount, "
                &"SucceededCount with sum as SucceededCount , "
                &"FailedCount with sum as FailedCount, "
            &"PartiallySucceededCount with sum as PartiallySucceededCount , "
                &"CanceledCount with sum as CanceledCount "
            &")) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?
$apply=filter(
    CompletedDate ge {startdate}
    )
/groupby(
(Pipeline/PipelineName),
aggregate(
    $count as TotalCount,
    SucceededCount with sum as SucceededCount ,
    FailedCount with sum as FailedCount,
    PartiallySucceededCount with sum as PartiallySucceededCount ,
    CanceledCount with sum as CanceledCount
    ))
```

*** 


[!INCLUDE [temp](includes/rename-query.md)]

## Change column data type 

From the Power Query Editor, select the `TotalCount` column, and then select **Data Type** from the **Transform** menu, and choose **Whole Number**. To learn more about changing the data type, see  [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the column `Pipeline.PipelineName` to `Pipeline Name`, or `TotalCount` to `Total Count`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Donut chart report

1. In Power BI, under **Visualizations**, choose the **Donut** report. 

	:::image type="content" source="media/pipeline-reports/single-pipelines-outcome-visualizations.png" alt-text="Screenshot of visualization fields selections for all pipeline runs report. ":::

1. Add the following fields to **Values**, in the order indicated. Right-click each field and ensure **Sum** is selected.   
	- `CanceledCount`  
	- `PartiallySucceededCount`.  
	- `SucceededCount` 
	- `FailedCount` 

1. To change the report title, select the **Format your visual** paint-brush icon from the **Visualizations** pane, select **General**, expand **Title**, and replace the existing text. 

	:::image type="content" source="media/pipeline-reports/pipeline-runs-split-by-outcome-report-title-change.png" alt-text="Screenshot of Visualizations pane, Report format options, change title. ":::

	The following image shows the resulting report.  

	:::image type="content" source="media/pipeline-reports/single-pipeline-run-split-by-outcome-report.png" alt-text="Screenshot of Power BI sample Pipelines Outcome Summary report.":::


## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
