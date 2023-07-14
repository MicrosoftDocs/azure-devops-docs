---
title: Pipeline task duration sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline task duration Power BI report.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'  
ms.date: 12/14/2022
---

# Pipeline task duration sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

How long does it take different tasks to complete? This article provides the queries from which you can generate a report for a specific pipeline and its tasks. For example, the following image lists the 50th, 80th, and 95th percentile in seconds for all tasks completed for a specific pipeline from September 1 to December 15, 2022.   

:::image type="content" source="media/pipeline-reports/task-duration-table-report.png" alt-text="Screenshot of Power BI Pipelines task duration table trend report."::: 


[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

## Sample queries

You query the `PipelineRunActivityResults?` entity set to return task duration information.  

[!INCLUDE [temp](includes/query-filters-pipelines.md)]

### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and PipelineRunCompletedOn/Date ge {startdate} "
                &"and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded') "
        &"and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1) "
        &") "
            &"/compute( "
                &"percentile_cont(ActivityDurationSeconds, 0.5, TaskDisplayName) as TaskDuration50thPercentileInSeconds, "
                &"percentile_cont(ActivityDurationSeconds, 0.8, TaskDisplayName) as TaskDuration80thPercentileInSeconds, "
            &"percentile_cont(ActivityDurationSeconds, 0.95, TaskDisplayName) as TaskDuration95thPercentileInSeconds) "
                &"/groupby( "
            &"(TaskDuration50thPercentileInSeconds, TaskDuration80thPercentileInSeconds,TaskDuration95thPercentileInSeconds, TaskDisplayName)) "
        &"&$orderby=TaskDuration50thPercentileInSeconds desc "
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
    and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded')
    and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1)
    )
/compute(
    percentile_cont(ActivityDurationSeconds, 0.5, TaskDisplayName) as TaskDuration50thPercentileInSeconds,
    percentile_cont(ActivityDurationSeconds, 0.8, TaskDisplayName) as TaskDuration80thPercentileInSeconds,
    percentile_cont(ActivityDurationSeconds, 0.95, TaskDisplayName) as TaskDuration95thPercentileInSeconds)
/groupby(
    (TaskDuration50thPercentileInSeconds, TaskDuration80thPercentileInSeconds,TaskDuration95thPercentileInSeconds, TaskDisplayName))
&$orderby=TaskDuration50thPercentileInSeconds desc
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
   `and PipelineRunCompletedOn/Date ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return task results for a pipeline run on or after the specified date.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded')`
   :::column-end:::
   :::column span="1":::
   Return task results for only successful or partially successful pipeline runs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1)`
   :::column-end:::
   :::column span="1":::
   Omit pipeline runs that were canceled, skipped, or abandoned. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close the `filter()` clause.
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
   `percentile_cont(ActivityDurationSeconds, 0.5, TaskDisplayName) as TaskDuration50thPercentileInSeconds,`
   :::column-end:::
   :::column span="1":::
   For each task, compute the 50th percentile of task durations for all tasks that match the filter criteria.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `percentile_cont(ActivityDurationSeconds, 0.8, TaskDisplayName) as TaskDuration80thPercentileInSeconds,`
   :::column-end:::
   :::column span="1":::
   For each task, compute the 80th percentile of task durations for all tasks that match the filter criteria.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `percentile_cont(ActivityDurationSeconds, 0.95, TaskDisplayName) as TaskDuration95thPercentileInSeconds)`
   :::column-end:::
   :::column span="1":::
   For each task, compute the 95th percentile of task durations for all tasks that match the filter criteria.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby(`
   :::column-end:::
   :::column span="1":::
   Start the `groupby()` clause.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `(TaskDuration50thPercentileInSeconds, TaskDuration80thPercentileInSeconds,TaskDuration95thPercentileInSeconds, TaskDisplayName))`
   :::column-end:::
   :::column span="1":::
   Group by task of pipeline run and calculated day wise 50th percentile task duration, 80th percentile task duration, and 95th percentile task duration. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$orderby=TaskDuration50thPercentileInSeconds desc`
   :::column-end:::
   :::column span="1":::
   Order the response by task having highest 50th percentile duration. 
   :::column-end:::
:::row-end:::


[!INCLUDE [temp](includes/rename-query.md)]


### Change column data type
 
From the **Transform** menu change the data type for the following columns to `Decimal Number**.` To learn how, see [Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type).   
	- `TaskDuration80thPercentileInSeconds`
	- `TaskDuration80thPercentileInSeconds`
	- `TaskDuration95thPercentileInSeconds`.
 
<a id="rename" />

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the following columns so that they are more display-friendly. 
To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

| Original field name |  Renamed field |
|---------------------|----------------|
| `TaskDisplayName`     | Task Name      |
| `TaskDuration50thPercentileInSeconds` | 50th Percentile  |
| `TaskDuration80thPercentileInSeconds`| 80th Percentile   |
| `TaskDuration95thPercentileInSeconds`| 95th Percentile  |


[!INCLUDE [temp](includes/close-apply.md)]

## Create the Table report 

1. In Power BI, under **Visualizations**, choose the **Table** report. Fields have been renamed as indicated in [Rename column fields](#rename) section.

	:::image type="content" source="media/pipeline-reports/task-duration-table-visualizations.png" alt-text="Screenshot of visualization fields selections for task duration table report. ":::

1. Add the following fields to the Columns in the order specified. 
	- **Task Name** 
	- **50th Percentile**  
	- **80th Percentile**   
	- **95th Percentile**   
 
1. To change the report title, select the **Format your visual** paint-brush icon from the **Visualizations** pane, select **General**, expand **Title**, and replace the existing text. 

The following image shows a portion of the resulting report.  

:::image type="content" source="media/pipeline-reports/task-duration-table-report.png" alt-text="Screenshot of Power BI Pipelines sample task duration table trend report."::: 


## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]

