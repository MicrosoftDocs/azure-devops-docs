---
title: Pipeline duration trend sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline duration trend Power BI report.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'   
ms.date: 12/14/2022
---

# Pipeline duration trend sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

This article shows you how to create a report that shows how long your pipeline typically takes to complete successfully. The daily trend of pipeline duration report is similar to the **Pipeline rate trend** chart of the [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-duration-report). 


The following image shows an example of a duration trend report.

:::image type="content" source="media/pipeline-reports/duration-trend-report.png" alt-text="Screenshot of Power BI Pipelines Duration trend report.":::
 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]


## Sample queries

You can use the following queries of the `PipelineRuns` entity set to create different but similar pipeline duration trend reports. 

[!INCLUDE [temp](includes/query-filters-pipelines.md)]
 

### Get 80th percentile duration trend for a specified pipeline 

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and CompletedDate ge {startdate} "
                &"and (SucceededCount eq 1 or PartiallySucceededCount eq 1) "
        &") "
        &"/compute( "
            &"percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds) "
                &"/groupby( "
                &"(Duration80thPercentileInSeconds, CompletedOn/Date)) "
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
    Pipeline/PipelineName eq '{pipelinename}'
    and CompletedDate ge {startdate}
    and (SucceededCount eq 1 or PartiallySucceededCount eq 1)
    )
/compute(
    percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds)
/groupby(
    (Duration80thPercentileInSeconds, CompletedOn/Date))
&$orderby=CompletedOn/Date asc
```

***

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

[!INCLUDE [temp](includes/sample-query-substitutions-pipelines.md)]

#### Query breakdown

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
   `and (SucceededCount eq 1 or PartiallySucceededCount eq 1)`
   :::column-end:::
   :::column span="1":::
   Return only the successful or partially successful runs.
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
   `/compute(`
   :::column-end:::
   :::column span="1":::
   Start `compute()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds)`
   :::column-end:::
   :::column span="1":::
   Compute 80th percentile of pipeline durations of all pipeline runs that match the filter criteria.
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
   `(Duration80thPercentileInSeconds, CompletedOn/Date))`
   :::column-end:::
   :::column span="1":::
   Group by date of completion of pipeline run and calculated day wise 80th percentile pipeline duration.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$orderby=CompletedOn/Date asc`
   :::column-end:::
   :::column span="1":::
   Order the response by completed date. 
   :::column-end:::
:::row-end:::
 
 


### Filter by pipeline ID, rather than Pipeline Name

Pipelines can be renamed. To ensure that the Power BI reports don't break when the pipeline name is changed, use pipeline ID rather than pipeline name. You can obtain the pipeline ID  from the URL of the pipeline runs page.

```
https://dev.azure.com/{organization}/{project}/_build?definitionId= `{pipelineid}`
```


#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"PipelineId eq {pipelineId} "
                &"and CompletedDate ge {startdate} "
                &"and (SucceededCount eq 1 or PartiallySucceededCount eq 1) "
        &") "
        &"/compute( "
            &"percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds) "
                &"/groupby( "
                &"(Duration80thPercentileInSeconds, CompletedOn/Date)) "
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
    and (SucceededCount eq 1 or PartiallySucceededCount eq 1)
    )
/compute(
    percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds)
/groupby(
    (Duration80thPercentileInSeconds, CompletedOn/Date))
&$orderby=CompletedOn/Date asc
```

***

### Get 50th and 90th percentile, along with 80th percentile duration trend

You may want to view the duration trend calculated using other percentile value. The following queries provide  50th and 90th percentile pipeline duration along with 80th percentile.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and CompletedDate ge {startdate} "
                &"and (SucceededCount eq 1 or PartiallySucceededCount eq 1) "
        &") "
        &"/compute( "
            &"percentile_cont(TotalDurationSeconds, 0.5,CompletedDateSK) as Duration50thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.90,CompletedDateSK) as Duration90thPercentileInSeconds) "
            &"/groupby( "
                &"(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds, Duration90thPercentileInSeconds, CompletedOn/Date)) "
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
    Pipeline/PipelineName eq '{pipelinename}'
    and CompletedDate ge {startdate}
    and (SucceededCount eq 1 or PartiallySucceededCount eq 1)
    )
/compute(
    percentile_cont(TotalDurationSeconds, 0.5,CompletedDateSK) as Duration50thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.90,CompletedDateSK) as Duration90thPercentileInSeconds)
/groupby(
    (Duration50thPercentileInSeconds, Duration80thPercentileInSeconds, Duration90thPercentileInSeconds, CompletedOn/Date))
&$orderby=CompletedOn/Date asc
```

***

### Filter by branch

To view the duration trend of a pipeline for a particular **branch** only, use the following queries. To create the report, do the following extra steps along with what is outlined in the [Change column data type](#change-column-data-type) and [Create the Line chart report](#create-the-line-chart-report) sections. 

- Expand `Branch` into `Branch.BranchName`.
- Select Power BI Visualization **Slicer** and add `Branch.BranchName` to the slicer's **Field**.
- Select the pipeline from the slicer for which you need to see the pipeline duration trend.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and CompletedDate ge {startdate} "
                &"and (SucceededCount eq 1 or PartiallySucceededCount eq 1) "
        &") "
        &"/compute( "
            &"percentile_cont(TotalDurationSeconds, 0.8,BranchSK, CompletedDateSK) as Duration80thPercentileInSeconds) "
                &"/groupby( "
                &"(Duration80thPercentileInSeconds, Branch/BranchName, CompletedOn/Date)) "
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
    Pipeline/PipelineName eq '{pipelinename}'
    and CompletedDate ge {startdate}
    and (SucceededCount eq 1 or PartiallySucceededCount eq 1)
    )
/compute(
    percentile_cont(TotalDurationSeconds, 0.8,BranchSK, CompletedDateSK) as Duration80thPercentileInSeconds)
/groupby(
    (Duration80thPercentileInSeconds, Branch/BranchName, CompletedOn/Date))
&$orderby=CompletedOn/Date asc
```

***

### Duration trend for all project pipelines 

You may want to view the duration trend for all the pipelines of the project in a single report. To create the report, do the following extra steps along with what is outlined in the [Change column data type](#change-column-data-type) and [Create the Line chart report](#create-the-line-chart-report) sections.  
- Expand `Pipeline` into `Pipeline.PipelineName`.
- Select **Slicer** from the **Visualizations** pane and add the `Pipeline.PipelineNam` to the slicer's **Field**. 
- Select the pipeline from the slicer for which you need to see the trend of pipeline pass rate.   

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"CompletedDate ge {startdate} "
                &"and (SucceededCount eq 1 or PartiallySucceededCount eq 1) "
                &") "
        &"/compute( "
        &"percentile_cont(TotalDurationSeconds, 0.8,PipelineId, CompletedDateSK) as Duration80thPercentileInSeconds) "
            &"/groupby( "
                &"(Duration80thPercentileInSeconds, Pipeline/PipelineName, CompletedOn/Date)) "
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
    and (SucceededCount eq 1 or PartiallySucceededCount eq 1)
    )
/compute(
    percentile_cont(TotalDurationSeconds, 0.8,PipelineId, CompletedDateSK) as Duration80thPercentileInSeconds)
/groupby(
    (Duration80thPercentileInSeconds, Pipeline/PipelineName, CompletedOn/Date))
&$orderby=CompletedOn/Date asc
```

***

 
## Expand columns in Power Query Editor

Prior to creating the report, you'll need to expand columns that return records containing several fields. In this instance, you'll want to expand the `CompletedOn` column to flatten it to `CompletedOn.Date`.  
To learn how to expand work items, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns). 
 
## Change column data type

From the **Transform** menu change the data type for the `Duration80thPercentileInSeconds` to **Decimal Number**.  To learn how, see [Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the column `Pipeline.PipelineName` to `Pipeline Name`, or `TotalCount` to `Total Count`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Line chart report 

1. In Power BI, under **Visualizations**, choose the **Line chart** report. 

	:::image type="content" source="media/pipeline-reports/duration-trend-visualizations.png" alt-text="Screenshot of Visualization fields selections for pipelines run duration trend report. ":::
  
1. Add `CompletedOn.Date` to **X-Axis**, right-click it, and select **CompletedOn.Date**, rather than **Date Hierarchy**.
	
1. Add `Duration80thPercentileInSeconds` to **Y-Axis** right-click it, and ensure **Sum** is selected.

The report displayed should look similar to the following image.  
 
:::image type="content" source="media/pipeline-reports/duration-trend-report.png" alt-text="Screenshot of Power BI sample Pipelines Duration trend report.":::
  

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
