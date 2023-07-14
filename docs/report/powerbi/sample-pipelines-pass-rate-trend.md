---
title: Pipeline pass rate sample Power BI report 
titleSuffix: Azure DevOps
description: How-to generate a pipeline pass rate Power BI report  
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020' 
ms.date: 12/15/2022
---

# Pipeline pass rate trend sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

This article shows you how to create a report that shows a pipeline's daily pass rate trend. Pass rate of a pipeline is defined as the percentage of successful pipeline runs to the total pipeline runs. It's similar to the 'Pass rate trend' chart of the [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-pass-rate-report).
The following image shows an example of such a trend.

:::image type="content" source="media/pipeline-reports/pass-rate-trend-pipeline-runs-report.png" alt-text="Screenshot of Power BI Pipelines Runs Pass Rate Trend report.":::
 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]


## Sample queries

You can use the following queries of the `PipelineRuns` entity set  to create different but similar pass rate trend reports. 

[!INCLUDE [temp](includes/query-filters-pipelines.md)]

### Pass rate trend for a named pipeline 

The following queries return the pipeline runs for a specific pipeline from a specified start date.  
 

### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedDate ge {startdate} "
                &"and CanceledCount ne 1 "
        &") "
        &"/groupby( "
            &"(CompletedOn/Date), "
                &"aggregate "
                &"($count as TotalCount, "
            &"SucceededCount with sum as SucceededCount , "
                &"FailedCount with sum as FailedCount, "
            &"PartiallySucceededCount with sum as PartiallySucceededCount)) "
        &"/compute( "
    &"SucceededCount mul 100.0 div TotalCount as PassRate, "
    &"FailedCount mul 100.0 div TotalCount as FailRate, "
    &"PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate) "
    &"&$orderby=CompletedOn/Date asc "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?
$apply=filter(
	Pipeline/PipelineName eq '{pipelineName}'
	and CompletedDate ge {startdate}
	and CanceledCount ne 1
	)
/groupby(
	(CompletedOn/Date),
	aggregate
	($count as TotalCount,
	SucceededCount with sum as SucceededCount ,
	FailedCount with sum as FailedCount,
	PartiallySucceededCount with sum as PartiallySucceededCount))
/compute(
SucceededCount mul 100.0 div TotalCount as PassRate,
FailedCount mul 100.0 div TotalCount as FailRate,
PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate)
&$orderby=CompletedOn/Date asc
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
   `and CanceledCount ne 1`
   :::column-end:::
   :::column span="1":::
   Omit canceled pipeline runs. 
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
   `(CompletedOn/Date),`
   :::column-end:::
   :::column span="1":::
   Group by date of completion of pipeline run. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate`
   :::column-end:::
   :::column span="1":::
   Start `aggregate` clause for all the pipeline runs matching the filter criteria. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `($count as TotalCount,`
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
   `PartiallySucceededCount with sum as PartiallySucceededCount))`
   :::column-end:::
   :::column span="1":::
   Count the number of partially successful runs as `PartiallySucceededCount`. Close `aggregate()` and `groupby()` clauses.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/compute(`
   :::column-end:::
   :::column span="1":::
   Start of `compute()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `SucceededCount mul 100.0 div TotalCount as PassRate,`
   :::column-end:::
   :::column span="1":::
   Calculate `PassRate` for each day by dividing number of successful runs by number of total runs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `FailedCount mul 100.0 div TotalCount as FailRate,`
   :::column-end:::
   :::column span="1":::
   Calculate `FailRate` for each day by dividing number of failed runs by number of total runs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate)`
   :::column-end:::
   :::column span="1":::
   Calculate `PartiallySuccessfulRate` for each day by dividing number of partially successful runs by number of total runs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$orderby=CompletedOn/Date asc`
   :::column-end:::
   :::column span="1":::
   Order the result in ascending order based on date of pipeline run. 
   :::column-end:::
:::row-end:::
  

### Pass rate trend for a pipeline ID 

Pipelines can be renamed. To ensure that the Power BI reports don't break when the pipeline name is changed, use pipeline ID rather than pipeline name. You can obtain the pipeline ID from the URL of the pipelines runs page.

```
https://dev.azure.com/{organization}/{project}/_build?definitionId={pipelineid}
```


The following queries return the pipeline runs for a specific pipeline ID from a specified start date.  

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"PipelineId eq {pipelineId} "
                &"and CompletedDate ge {startdate} "
                &"and CanceledCount ne 1 "
        &") "
        &"/groupby( "
            &"(CompletedOn/Date), "
                &"aggregate "
                &"($count as TotalCount, "
            &"SucceededCount with sum as SucceededCount , "
                &"FailedCount with sum as FailedCount, "
            &"PartiallySucceededCount with sum as PartiallySucceededCount)) "
        &"/compute( "
    &"SucceededCount mul 100.0 div TotalCount as PassRate, "
    &"FailedCount mul 100.0 div TotalCount as FailRate, "
    &"PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate) "
    &"&$orderby=CompletedOn/Date asc "
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
	and CanceledCount ne 1
	)
/groupby(
	(CompletedOn/Date),
	aggregate
	($count as TotalCount,
	SucceededCount with sum as SucceededCount ,
	FailedCount with sum as FailedCount,
	PartiallySucceededCount with sum as PartiallySucceededCount))
/compute(
SucceededCount mul 100.0 div TotalCount as PassRate,
FailedCount mul 100.0 div TotalCount as FailRate,
PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate)
&$orderby=CompletedOn/Date asc
```

***

### Pass rate trend, filter by branch  

You may want to view the pass rate trend of a pipeline for a particular **branch** only. To create the report, do the following extra steps along with what is outlined in the [Change column data type](#change-column-data-type) and [Create the Line chart report](#create-the-line-chart-report) sections.

- Expand `Branch` into `Branch.BranchName`.
- Select Power BI Visualization **Slicer** and add `Branch.BranchName` to the slicer's **Field**.
- Select the branch from the slicer for which you need to see the pass rate trend.


#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedDate ge {startdate} "
                &"and CanceledCount ne 1 "
        &") "
        &"/groupby( "
            &"(Branch/BranchName, CompletedOn/Date), "
                &"aggregate "
                &"($count as TotalCount, "
            &"SucceededCount with sum as SucceededCount , "
                &"FailedCount with sum as FailedCount, "
            &"PartiallySucceededCount with sum as PartiallySucceededCount)) "
        &"/compute( "
    &"SucceededCount mul 100.0 div TotalCount as PassRate, "
    &"FailedCount mul 100.0 div TotalCount as FailRate, "
    &"PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate) "
    &"&$orderby=CompletedOn/Date asc "
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
    and CanceledCount ne 1
    )
/groupby(
    (Branch/BranchName, CompletedOn/Date),
    aggregate
    ($count as TotalCount,
    SucceededCount with sum as SucceededCount ,
    FailedCount with sum as FailedCount,
    PartiallySucceededCount with sum as PartiallySucceededCount))
/compute(
SucceededCount mul 100.0 div TotalCount as PassRate,
FailedCount mul 100.0 div TotalCount as FailRate,
PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate)
&$orderby=CompletedOn/Date asc
```

***

### Pass rate trend, filter by build reason

You may want to view the pass rate trend  of a pipeline for only specific **Build Reasons** (Manual / BatchedCI, Pull Request, and so on). To create the report, do the following extra steps along with what is outlined in the [Change column data type](#change-column-data-type) and [Create the Line chart report](#create-the-line-chart-report) sections.

- Select **Slicer** from the **Visualizations** pane and add the `RunReason` to the slicer's **Field**.
- Select the pipeline from the slicer for which you need to see the pass rate trend.
 
#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelineName}' "
                &"and CompletedDate ge {startdate} "
                &"and CanceledCount ne 1 "
        &") "
        &"/groupby( "
            &"(RunReason, CompletedOn/Date), "
                &"aggregate "
                &"($count as TotalCount, "
            &"SucceededCount with sum as SucceededCount , "
                &"FailedCount with sum as FailedCount, "
            &"PartiallySucceededCount with sum as PartiallySucceededCount)) "
        &"/compute( "
    &"SucceededCount mul 100.0 div TotalCount as PassRate, "
    &"FailedCount mul 100.0 div TotalCount as FailRate, "
    &"PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate) "
    &"&$orderby=CompletedOn/Date asc "
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
    and CanceledCount ne 1
    )
/groupby(
    (RunReason, CompletedOn/Date),
    aggregate
    ($count as TotalCount,
    SucceededCount with sum as SucceededCount ,
    FailedCount with sum as FailedCount,
    PartiallySucceededCount with sum as PartiallySucceededCount))
/compute(
SucceededCount mul 100.0 div TotalCount as PassRate,
FailedCount mul 100.0 div TotalCount as FailRate,
PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate)
&$orderby=CompletedOn/Date asc
```

***

### Pass rate trend for all project pipelines

Use the following queries to view the pass rate trend for all the pipelines of the project in a single report. To create the report, do the following extra steps along with what is outlined in the [Change column data type](#change-column-data-type) and [Create the Line chart report](#create-the-line-chart-report) sections.
- Expand `Pipeline` into  `Pipeline.PipelineName`.  
- Select **Slicer** from the **Visualizations** pane, and add the field `Pipeline.PipelineName` to the slicer's **Field**.  
- Select the Build pipeline from the slicer for which you need to see the pass rate trend.

Refer [Outcome summary for all pipelines](sample-pipelines-allpipelines.md) sample report that has detailed similar steps as required here.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"CompletedDate ge {startdate} "
                &"and CanceledCount ne 1 "
                &") "
        &"/groupby( "
        &"(Pipeline/PipelineName, CompletedOn/Date), "
            &"aggregate "
                &"($count as TotalCount, "
                &"SucceededCount with sum as SucceededCount , "
            &"FailedCount with sum as FailedCount, "
                &"PartiallySucceededCount with sum as PartiallySucceededCount)) "
            &"/compute( "
        &"SucceededCount mul 100.0 div TotalCount as PassRate, "
    &"FailedCount mul 100.0 div TotalCount as FailRate, "
    &"PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate) "
    &"&$orderby=CompletedOn/Date asc "
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
    and CanceledCount ne 1
    )
/groupby(
    (Pipeline/PipelineName, CompletedOn/Date),
    aggregate
    ($count as TotalCount,
    SucceededCount with sum as SucceededCount ,
    FailedCount with sum as FailedCount,
    PartiallySucceededCount with sum as PartiallySucceededCount))
/compute(
SucceededCount mul 100.0 div TotalCount as PassRate,
FailedCount mul 100.0 div TotalCount as FailRate,
PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate)
&$orderby=CompletedOn/Date asc
```

***


[!INCLUDE [temp](includes/rename-query.md)]


## Expand columns in Power Query Editor

Prior to creating the report, you'll need to expand columns that return records containing several fields. In this instance, you'll want to expand the `CompletedOn` column to flatten it to `CompletedOn.Date`.  
To learn how to expand work items, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns). 
 
## Change column data type

From the **Transform** menu change the data type for the following columns. To learn how, see [Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type).  
- `PassRate`, `FailRate` and `PartiallySuccessfulRate` columns to **Decimal Number**.` 
- `TotalCount` to **Whole Number**.  
 

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the column `Pipeline.PipelineName` to `Pipeline Name`, or `TotalCount` to `Total Count`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Line chart report 

1. In Power BI, under **Visualizations**, choose the **Line chart** report. 

	:::image type="content" source="media/pipeline-reports/pass-rate-trend-visualizations.png" alt-text="Screenshot of visualization fields selections for pass rate trend line chart report. ":::

1. Add `CompletedOn.Date` to **X-Axis**. Right-click the field and choose **CompletedOn.Date**.   
 
1. Add `PassRate` to **Y-Axis**, and right-click it to ensure **Sum** is selected.
 
1. To change the report title, select the **Format your visual** paint-brush icon from the **Visualizations** pane, select **General**, expand **Title**, and replace the existing text. 

	The following image shows the resulting report.  

	:::image type="content" source="media/pipeline-reports/pass-rate-trend-pipeline-runs-report.png" alt-text="Screenshot of Power BI sample Pipelines Runs Pass Rate Trend report.":::
 
 

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
