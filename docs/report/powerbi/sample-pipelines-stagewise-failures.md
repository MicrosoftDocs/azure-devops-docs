---
title: Pipeline stage wise failures sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline stage wise failure Power BI report.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'
ms.date: 12/15/2022
---

# Pipeline stage wise failures sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

This article shows you how to create a report of a pipeline's daily stage failures. This report is similar to the 'Failure trend' chart of the [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-pass-rate-report). 

The following image shows an example of stagewise failures report for a specific pipeline from October 2022 to December 15 2022. 

:::image type="content" source="media/pipeline-reports/stagewise-stacked-bar-report.png" alt-text="Screenshot of Power BI Pipelines stagewise failures stacked column report."::: 
 


[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

## Sample queries

Stage, task, or job failure trend reports can be created by querying the `PipelineRunActivityResults` entity set.


[!INCLUDE [temp](includes/query-filters-pipelines.md)]



### Stagewise failure trend 

To view stagewise failure trend for a specific pipeline from a specified date, use the following queries.

### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and PipelineRunCompletedOn/Date ge {startdate} "
                &"and PipelineRunOutcome eq 'Failed' "
        &"and TaskOutcome eq 'Failed' "
        &") "
            &"/groupby( "
                &"(PipelineRunCompletedOn/Date, PipelineRunId, PipelineJob/StageName ), "
                &"aggregate (FailedCount with sum as FailedCount)) "
            &"/groupby( "
                &"(PipelineRunCompletedOn/Date, PipelineJob/StageName ), "
            &"aggregate "
        &"(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source

```

### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?
$apply=filter(
    Pipeline/PipelineName eq '{pipelinename}'
    and PipelineRunCompletedOn/Date ge {startdate}
    and PipelineRunOutcome eq 'Failed'
    and TaskOutcome eq 'Failed'
    )
/groupby(
    (PipelineRunCompletedOn/Date, PipelineRunId, PipelineJob/StageName ),
    aggregate (FailedCount with sum as FailedCount))
/groupby(
    (PipelineRunCompletedOn/Date, PipelineJob/StageName ),
    aggregate
(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount))
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
   Return task results for a specific pipeline.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and PipelineRunCompletedOn/Date ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return task results for pipeline runs on or after the specified date.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and PipelineRunOutcome eq 'Failed'`
   :::column-end:::
   :::column span="1":::
   Return task results where build outcome is failed.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and TaskOutcome eq 'Failed'`
   :::column-end:::
   :::column span="1":::
   Return task results where task outcome is failed.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close `filter` clause.
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
   `(PipelineRunCompletedOn/Date, PipelineRunId, PipelineJob/StageName ),`
   :::column-end:::
   :::column span="1":::
   Group by date of completion of pipeline run, Build ID and stage name.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate (FailedCount with sum as FailedCount))`
   :::column-end:::
   :::column span="1":::
   For each day, build ID, and stage; count the total number of failures. It will be the total number of task failures and not stage failures. 
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
   `(PipelineRunCompletedOn/Date, PipelineJob/StageName ),`
   :::column-end:::
   :::column span="1":::
   Group by day and stage name.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `aggregate`
   :::column-end:::
   :::column span="1":::
   Start `aggregate` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount))`
   :::column-end:::
   :::column span="1":::
   For each day, sum the number of times a stage failed and then close the `aggregate` clause.
   :::column-end:::
:::row-end:::


### Task wise failure trend 

To view the task wise failure trend, use the following queries.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]
```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and PipelineRunCompletedOn/Date ge {startdate} "
                &"and PipelineRunOutcome eq 'Failed' "
        &"and TaskOutcome eq 'Failed' "
        &") "
            &"/groupby( "
                &"(PipelineRunCompletedOn/Date, TaskDisplayName), "
                &"aggregate "
            &"(FailedCount with sum as FailedCount)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```
#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]
```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?
$apply=filter(
    Pipeline/PipelineName eq '{pipelinename}'
    and PipelineRunCompletedOn/Date ge {startdate}
    and PipelineRunOutcome eq 'Failed'
    and TaskOutcome eq 'Failed'
    )
/groupby(
    (PipelineRunCompletedOn/Date, TaskDisplayName),
    aggregate
(FailedCount with sum as FailedCount))
```

***

### Job wise failure trend 

To view the job wise failure trend, use the following queries.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and PipelineRunCompletedOn/Date ge {startdate} "
                &"and PipelineRunOutcome eq 'Failed' "
        &"and TaskOutcome eq 'Failed' "
        &") "
            &"/groupby( "
                &"(PipelineRunCompletedOn/Date, PipelineRunId, PipelineJob/JobName ), "
                &"aggregate (FailedCount with sum as FailedCount)) "
            &"/groupby( "
                &"(PipelineRunCompletedOn/Date, PipelineJob/JobName ), "
            &"aggregate "
        &"(cast(FailedCount gt 0, Edm.Int32) with sum as FailedJobCount)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```
#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?
$apply=filter(
    Pipeline/PipelineName eq '{pipelinename}'
    and PipelineRunCompletedOn/Date ge {startdate}
    and PipelineRunOutcome eq 'Failed'
    and TaskOutcome eq 'Failed'
    )
/groupby(
    (PipelineRunCompletedOn/Date, PipelineRunId, PipelineJob/JobName ),
    aggregate (FailedCount with sum as FailedCount))
/groupby(
    (PipelineRunCompletedOn/Date, PipelineJob/JobName ),
    aggregate
(cast(FailedCount gt 0, Edm.Int32) with sum as FailedJobCount))
```

***


[!INCLUDE [temp](includes/rename-query.md)]

 
## Expand columns in Power Query Editor

Prior to creating the report, you'll need to expand the following two columns. To learn how to expand work items, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns). 
- Expand `PipelineJob` to `PipelineJob.StageName` 
- Expand `PipelineRunCompletedOn` to `PipelineRunCompletedOn.Date` 

  
## Change column data type

From the **Transform** menu, change the data type for the `FailedStageCount` column to **Whole Number**. To learn how, see [Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type). 

## (Optional) Rename column fields

You can rename column fields to ones that are more user friendly. For example, you can rename the column `Pipeline.PipelineName` to `Pipeline Name`, or `TotalCount` to `Total Count`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Stacked column chart report 

1. In Power BI, under **Visualizations**, choose the **Stacked column chart** report. The following example assumes that no one renamed any columns. 

	:::image type="content" source="media/pipeline-reports/stagewise-failure-stacked-bar-chart-visualizations.png" alt-text="Screenshot of Visualization fields selections for stagewise failures Stacked column chart report. "::: 

1. Add `PipelineRunCompletedOn.Date` to **X-Axis**, right-click it, and select **PipelineRunCompletedOn.Date**, rather than **Date Hierarchy**.
	
1. Add `FailedStagedCount` to **Y-Axis** right-click it, and ensure **Sum** is selected.

1. Add `PipelineJob.StageName` to **Legend**. 

1. To change the report title, legend, or other report visuals, select the **Format your visual** paint-brush icon from the **Visualizations** pane and adjust one or more settings.  

Your report should look similar to the following image.  

:::image type="content" source="media/pipeline-reports/stagewise-stacked-bar-report.png" alt-text="Screenshot of Power BI Pipelines sample stagewise failures stacked column report."::: 

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
