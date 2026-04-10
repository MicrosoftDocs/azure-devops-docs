---
title: Pipeline duration sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline duration Power BI report.
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

# Pipeline duration sample report 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows you how to get pipeline duration, or the time taken to run a pipeline. This report is similar to the duration summary metric in the **Pipeline duration** chart of the [Pipeline duration report](../../pipelines/reports/pipelinereport.md#pipeline-duration-report). 

The following image shows an example of a duration report for a specific pipeline.

:::image type="content" source="media/pipeline-reports/duration-clustered-column-report.png" alt-text="Screenshot of Power BI Pipelines Duration clustered column report."::: 

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

## Sample queries

To create different but similar pipeline duration reports, use the following queries of the `PipelineRuns` entity set. 

[!INCLUDE [temp](includes/query-filters-pipelines.md)]
 

### Return percentile durations for a specified pipeline  

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
            &"percentile_cont(TotalDurationSeconds, 0.5) as Duration50thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.8) as Duration80thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.95) as Duration95thPercentileInSeconds) "
            &"/groupby( "
                &"(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds)) "
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
    percentile_cont(TotalDurationSeconds, 0.5) as Duration50thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.8) as Duration80thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.95) as Duration95thPercentileInSeconds)
/groupby(
(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds))
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
   `percentile_cont(TotalDurationSeconds, 0.5) as Duration50thPercentileInSeconds,`
   :::column-end:::
   :::column span="1":::
   Computes the 50th percentile of pipeline durations for all pipeline runs that match the filter criteria. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `percentile_cont(TotalDurationSeconds, 0.8) as Duration80thPercentileInSeconds,`
   :::column-end:::
   :::column span="1":::
   Computes the 80th percentile of pipeline durations for all pipeline runs that match the filter criteria.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `percentile_cont(TotalDurationSeconds, 0.95) as Duration95thPercentileInSeconds)`
   :::column-end:::
   :::column span="1":::
   Computes the 95th percentile of pipeline durations for all pipeline runs that match the filter criteria.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby(`
   :::column-end:::
   :::column span="1":::
   Starts the `groupby()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds))`
   :::column-end:::
   :::column span="1":::
   Groups the response by `Duration50thPercentileInSeconds`, `Duration80thPercentileInSeconds`, and `Duration95thPercentileInSeconds` and ends the `groupby` clause.
   :::column-end:::
:::row-end:::
 

### Return percentile durations for a specified pipeline ID 

You can rename pipelines. To ensure that the Power BI reports don't break when you change the pipeline name, use the pipeline ID instead of the pipeline name. You can get the pipeline ID from the URL of the pipeline runs page.

```
https://dev.azure.com/{organization}/{project}/_build?definitionId= {pipelineid}
```

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"PipelineId  eq {pipelineid} "
                &"and CompletedDate ge {startdate} "
                &"and (SucceededCount eq 1 or PartiallySucceededCount eq 1) "
        &") "
        &"/compute( "
            &"percentile_cont(TotalDurationSeconds, 0.5) as Duration50thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.8) as Duration80thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.95) as Duration95thPercentileInSeconds) "
            &"/groupby( "
                &"(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?
$apply=filter(
    PipelineId  eq {pipelineid}
    and CompletedDate ge {startdate}
    and (SucceededCount eq 1 or PartiallySucceededCount eq 1)
    )
/compute(
    percentile_cont(TotalDurationSeconds, 0.5) as Duration50thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.8) as Duration80thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.95) as Duration95thPercentileInSeconds)
/groupby(
(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds))
```

***

### Return percentile durations for a specified pipeline, filter by branch  

To view the duration of a pipeline for a particular **branch** only, use the following queries. To create the report, follow these extra steps along with the steps outlined in the [Change column data type](#change-column-data-type) and [Create the Clustered column chart report](#create-the-clustered-column-chart-report) sections. 

- Expand `Branch` into `Branch.BranchName`.
- Add the field **Branch.BranchName** to the **X-Axis**.  

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
            &"percentile_cont(TotalDurationSeconds, 0.5, BranchSK) as Duration50thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.8, BranchSK) as Duration80thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.95, BranchSK) as Duration95thPercentileInSeconds) "
            &"/groupby( "
                &"(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds, Branch/BranchName)) "
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
    percentile_cont(TotalDurationSeconds, 0.5, BranchSK) as Duration50thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.8, BranchSK) as Duration80thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.95, BranchSK) as Duration95thPercentileInSeconds)
/groupby(
(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds, Branch/BranchName))
```

***

### Return percentile durations for all project pipelines  

To view the duration for all the pipelines of the project in a single report, use the following queries. To create the report, follow these extra steps along with the steps outlined in the [Change column data type](#change-column-data-type) and [Create the Clustered column chart report](#create-the-clustered-column-chart-report) sections. 

- Expand `Pipeline` into  `Pipeline.PipelineName`.
- Add the field **Pipeline.PipelineName** to **X-Axis**.

For a sample report with similar detailed steps, see [Outcome summary for all pipelines](sample-pipelines-allpipelines.md).

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRuns?"
        &"$apply=filter( "
                &"CompletedDate ge {startdate} "
                &"and (SucceededCount eq 1 or PartiallySucceededCount eq 1) "
                &"    ) "
        &"/compute( "
        &"percentile_cont(TotalDurationSeconds, 0.5, PipelineId) as Duration50thPercentileInSeconds, "
            &"percentile_cont(TotalDurationSeconds, 0.8, PipelineId) as Duration80thPercentileInSeconds, "
                &"percentile_cont(TotalDurationSeconds, 0.95, PipelineId) as Duration95thPercentileInSeconds) "
                &"/groupby( "
            &"(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds, Pipeline/PipelineName)) "
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
    percentile_cont(TotalDurationSeconds, 0.5, PipelineId) as Duration50thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.8, PipelineId) as Duration80thPercentileInSeconds,
    percentile_cont(TotalDurationSeconds, 0.95, PipelineId) as Duration95thPercentileInSeconds)
/groupby(
(Duration50thPercentileInSeconds, Duration80thPercentileInSeconds,Duration95thPercentileInSeconds, Pipeline/PipelineName))
```

*** 

## Change column data type

From the **Transform** menu, change the data type for the following columns to **Decimal Number**. To learn how, see [Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type).

- `Duration50thPercentileInSeconds`
- `Duration80thPercentileInSeconds`
- `Duration95thPercentileInSeconds`    

[!INCLUDE [temp](includes/sample-rename-column-fields.md)]

[!INCLUDE [temp](includes/close-apply.md)]
 
## Create the Clustered column chart report

1. In Power BI, under **Visualizations**, select the **Clustered column chart** report. The example assumes that you didn't rename any columns.

	:::image type="content" source="media/pipeline-reports/duration-clustered-column-visualizations.png" alt-text="Screenshot of Power BI Pipelines clustered column Visualizations and field selections.":::

1. Add the following fields to the **Y-Axis**, right-click each field, and make sure **Sum** is selected.
	- `Duration50thPercentileInSeconds` 
	- `Duration80thPercentileInSeconds` 
	- `Duration95thPercentileInSeconds` 

1. To change the report title, legend, or other report visuals, select the **Format your visual** paint-brush icon from the **Visualizations** pane and adjust one or more settings.  

Your report should look similar to the following image.  
 
:::image type="content" source="media/pipeline-reports/duration-clustered-column-report.png" alt-text="Screenshot of Power BI Sample Pipelines Duration clustered column report.":::

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
