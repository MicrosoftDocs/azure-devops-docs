---
title: Pipeline task duration trend sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline task duration trend Power BI report.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2020'     
ms.date: 12/15/2022
---

# Pipeline task duration trend sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

To visualize the time it takes tasks to complete for a specific pipeline, you can create a trend report. For example, the following image shows the 80th percentile in seconds for all tasks completed for a specific pipeline from September 1 to December 15, 2022.  

:::image type="content" source="media/pipeline-reports/task-duration-line-chart-report.png" alt-text="Screenshot of Power BI Pipelines task duration trend report."::: 


[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]


## Sample queries

You can use the following queries of the `PipelineRunActivityResults?` entity set to create different but similar task duration trend reports. 

[!INCLUDE [temp](includes/query-filters-pipelines.md)]

### Task duration trend for specified pipeline name


### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and TaskDisplayName eq '{taskname}' "
                &"and PipelineRunCompletedOn/Date ge {startdate} "
        &"and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded') "
        &"and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1) "
            &"    ) "
                &"/compute( "
                &"percentile_cont(ActivityDurationSeconds, 0.8, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds) "
            &"/groupby( "
                &"(TaskDuration80thPercentileInSeconds, PipelineRunCompletedOn/Date)) "
            &"&$orderby=PipelineRunCompletedOn/Date asc "
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
    and TaskDisplayName eq '{taskname}'
    and PipelineRunCompletedOn/Date ge {startdate}
    and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded')
    and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1)
    )
/compute(
    percentile_cont(ActivityDurationSeconds, 0.8, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds)
/groupby(
    (TaskDuration80thPercentileInSeconds, PipelineRunCompletedOn/Date))
&$orderby=PipelineRunCompletedOn/Date asc
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
   `and TaskDisplayName eq '{taskname}'`
   :::column-end:::
   :::column span="1":::
   Return task results for a specific task.
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
   `percentile_cont(ActivityDurationSeconds, 0.8, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds)`
   :::column-end:::
   :::column span="1":::
   For each day, compute the 80th percentile of task durations of all tasks that match the filter criteria. 
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
   `(TaskDuration80thPercentileInSeconds, PipelineRunCompletedOn/Date))`
   :::column-end:::
   :::column span="1":::
   Group by date of completion of pipeline run and calculated day wise 80th percentile task duration.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$orderby=PipelineRunCompletedOn/Date asc`
   :::column-end:::
   :::column span="1":::
   Order the response by completed date.
   :::column-end:::
:::row-end::: 


### Task duration trend for a pipeline, specify pipeline ID  


Pipelines can be renamed. To ensure that the Power BI reports don't break when the pipeline name is changed, use pipeline ID rather than pipeline name. You can obtain the pipeline ID from the URL of the pipelines runs page.

```
https://dev.azure.com/{organization}/{project}/_build?definitionId={pipelineid}
```


#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &"Pipeline/PipelineId eq {pipelineid} "
                &"and TaskDisplayName eq '{taskname}' "
                &"and PipelineRunCompletedOn/Date ge {startdate} "
        &"and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded') "
        &"and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1) "
            &") "
                &"/compute( "
                &"percentile_cont(ActivityDurationSeconds, 0.8, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds) "
            &"/groupby( "
                &"(TaskDuration80thPercentileInSeconds, PipelineRunCompletedOn/Date)) "
            &"&$orderby=PipelineRunCompletedOn/Date asc "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```
#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
	https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?
$apply=filter(
    Pipeline/PipelineId eq {pipelineid}
    and TaskDisplayName eq '{taskname}'
    and PipelineRunCompletedOn/Date ge {startdate}
    and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded')
    and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1)
    )
/compute(
    percentile_cont(ActivityDurationSeconds, 0.8, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds)
/groupby(
    (TaskDuration80thPercentileInSeconds, PipelineRunCompletedOn/Date))
&$orderby=PipelineRunCompletedOn/Date asc
```

***


### 50th, 80th, and 90th percentile task duration trend for a pipeline  

To view the task duration trend calculated using other percentile value, use the following query that gives 50th and 95th percentile task duration along with 80th percentile.

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &"Pipeline/PipelineName eq '{pipelinename}' "
                &"and TaskDisplayName eq '{taskname}' "
                &"and PipelineRunCompletedOn/Date ge {startdate} "
        &"and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded') "
        &"and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1) "
            &") "
                &"/compute( "
                &"percentile_cont(ActivityDurationSeconds, 0.5, PipelineRunCompletedDateSK) as TaskDuration50thPercentileInSeconds, "
            &"percentile_cont(ActivityDurationSeconds, 0.8, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds, "
                &"percentile_cont(ActivityDurationSeconds, 0.95, PipelineRunCompletedDateSK) as TaskDuration95thPercentileInSeconds) "
            &"/groupby( "
        &"(TaskDuration50thPercentileInSeconds, TaskDuration80thPercentileInSeconds, TaskDuration95thPercentileInSeconds, PipelineRunCompletedOn/Date)) "
    &"&$orderby=PipelineRunCompletedOn/Date asc "
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
and TaskDisplayName eq '{taskname}'
and PipelineRunCompletedOn/Date ge {startdate}
and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded')
and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1)
)
/compute(
percentile_cont(ActivityDurationSeconds, 0.5, PipelineRunCompletedDateSK) as TaskDuration50thPercentileInSeconds,
percentile_cont(ActivityDurationSeconds, 0.8, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds,
percentile_cont(ActivityDurationSeconds, 0.95, PipelineRunCompletedDateSK) as TaskDuration95thPercentileInSeconds)
/groupby(
(TaskDuration50thPercentileInSeconds, TaskDuration80thPercentileInSeconds, TaskDuration95thPercentileInSeconds, PipelineRunCompletedOn/Date))
&$orderby=PipelineRunCompletedOn/Date asc
```

***

### Task duration trend for a pipeline filtered by branch

To view the duration trend of a task for a particular **branch**, use the following query. To create the report, do the following steps:  
- Expand `Branch` into `Branch.BranchName` 
- [Change column data type](#change-column-data-type)
- [Create the Line chart report](#create-the-line-chart-report) 
- Select **Slicer** from the **Visualizations** pane and add the `Branch.BranchName` to the slicer's **Field** 
- Select the branch from the slicer for which you need to see the task duration trend.


#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/PipelineRunActivityResults?"
        &"$apply=filter( "
                &" Pipeline/PipelineName eq '{pipelinename}' "
                &" and TaskDisplayName eq '{taskname}' "
                &" and PipelineRunCompletedOn/Date ge {startdate} "
        &" and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded') "
        &" and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1) "
            &" ) "
                &"/compute( "
                &" percentile_cont(ActivityDurationSeconds, 0.8, BranchSK, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds) "
            &"/groupby( "
                &" (TaskDuration80thPercentileInSeconds, Branch/BranchName, PipelineRunCompletedOn/Date)) "
            &"&$orderby=PipelineRunCompletedOn/Date asc "
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
    and TaskDisplayName eq '{taskname}'
    and PipelineRunCompletedOn/Date ge {startdate}
    and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded')
    and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1)
    )
/compute(
    percentile_cont(ActivityDurationSeconds, 0.8, BranchSK, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds)
/groupby(
    (TaskDuration80thPercentileInSeconds, Branch/BranchName, PipelineRunCompletedOn/Date))
&$orderby=PipelineRunCompletedOn/Date asc
```

***

### Task duration trend for all pipeline tasks

To view the task duration trend for all the pipeline tasks in a single report, use the following query. To create the report, do the following steps:  
- [Change column data type](#change-column-data-type)
- [Create the Line chart report](#create-the-line-chart-report) 
- Select **Slicer** from the **Visualizations** pane and add the `TaskDisplayName` to the slicer's **Field** 
- Select the task from the slicer for which you need to see the task duration trend.

#### [Power BI query](#tab/powerbi/)

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
                &"percentile_cont(ActivityDurationSeconds, 0.8, TaskDisplayName, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds) "
                &"/groupby( "
            &"(TaskDuration80thPercentileInSeconds, TaskDisplayName, PipelineRunCompletedOn/Date)) "
                &"&$orderby=PipelineRunCompletedOn/Date asc "
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
    and (PipelineRunOutcome eq 'Succeed' or PipelineRunOutcome eq 'PartiallySucceeded')
    and (CanceledCount ne 1 and SkippedCount ne 1 and AbandonedCount ne 1)
    )
/compute(
    percentile_cont(ActivityDurationSeconds, 0.8, TaskDisplayName, PipelineRunCompletedDateSK) as TaskDuration80thPercentileInSeconds)
/groupby(
    (TaskDuration80thPercentileInSeconds, TaskDisplayName, PipelineRunCompletedOn/Date))
&$orderby=PipelineRunCompletedOn/Date asc
```

***



[!INCLUDE [temp](includes/rename-query.md)]


## Expand columns in Power Query Editor

Prior to creating the report, you'll need to expand columns that return records containing several fields. In this instance, you'll want to expand the `PipelineRunCompletedOn` column to flatten it to `PipelineRunCompletedOn.Date`.  
To learn how to expand work items, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md#expand-columns). 

### Change column data type

From the **Transform** menu, change the data type for the `TaskDuration80thPercentileInSeconds` column to **Decimal Number**. To learn how, see [Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type).   

## (Optional) Rename column fields

You can rename column fields. For example, you can rename the column `TaskDuration80thPercentileInSeconds` to `80th Percentile`. To learn how, see [Rename column fields](transform-analytics-data-report-generation.md#rename-column-fields). 

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Line chart report 

1. In Power BI, under **Visualizations**, choose the **Line chart** report. 

	:::image type="content" source="media/pipeline-reports/task-duration-line-chart-visualizations.png" alt-text="Screenshot of visualization fields selections for task duration trend line chart report. ":::

1. Add `PipelineRunCompletedOn.Date` to **X-Axis**. Right-click the field and choose **PipelineRunCompletedOn.Date** in place of **Date Hierarchy**.  
 
1. Add `TaskDuration80thPercentileInSeconds` to **Y-Axis**, and right-click it to ensure **Sum** is selected.
 
1. To change the report title, select the **Format your visual** paint-brush icon from the **Visualizations** pane, select **General**, expand **Title**, and replace the existing text. 

The following image shows the resulting report.  

:::image type="content" source="media/pipeline-reports/task-duration-line-chart-report.png" alt-text="Screenshot of Power BI Pipelines sample task duration trend report."::: 
 

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
