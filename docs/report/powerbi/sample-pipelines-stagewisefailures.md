---
title: Pipeline stage wise failures sample Power BI report 
titleSuffix: Azure DevOps
description: How-to guide to generate a pipeline stage wise failure Power BI report  
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: ravishan
ms.manager: ravishan
ms.author: kaghai
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019' -- TODO
ms.date: 12/10/2019
---

# Pipeline stage wise failures sample report 

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

This article shows you how to get the stage wise count of daily failures for the pipeline. This will be similar to the 'Failure trend' widget of the Pipeline pass rate report. The following image shows an example of such a chart.

> [!div class="mx-imgBorder"] 
> ![Sample - Pipelines Stage wise failure - Report](_img/odatapowerbi-pipelines-stagewisefailure-report.png)

[!INCLUDE [temp](_shared/sample-required-reading.md)]


## Sample queries

#### [Power BI Query](#tab/powerbi/)

[!INCLUDE [temp](_shared/sample-powerbi-query.md)]

```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/BuildTaskResults?"
        &"$apply=filter( "
                &"BuildPipeline/BuildPipelineName eq '{pipelinename}' "
                &"and BuildCompletedOn/Date ge {startdate} "
                &"and BuildOutcome eq 'Failed' "
        &"and TaskOutcome eq 'Failed' "
        &") "
            &"/groupby( "
                &"(BuildCompletedOn/Date, BuildId, PipelineJob/StageName ), "
                &"aggregate (FailedCount with sum as FailedCount)) "
            &"/groupby( "
                &"(BuildCompletedOn/Date, PipelineJob/StageName ), "
            &"aggregate "
        &"(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```

#### [OData Query](#tab/odata/)

[!INCLUDE [temp](_shared/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/BuildTaskResults?
$apply=filter(
	BuildPipeline/BuildPipelineName eq '{pipelinename}'
	and BuildCompletedOn/Date ge {startdate}
	and BuildOutcome eq 'Failed'
	and TaskOutcome eq 'Failed'
	)
/groupby(
	(BuildCompletedOn/Date, BuildId, PipelineJob/StageName ),
	aggregate (FailedCount with sum as FailedCount))
/groupby(
	(BuildCompletedOn/Date, PipelineJob/StageName ),
	aggregate
(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount))
```

***

### Substitution strings

[!INCLUDE [temp](_shared/pipelines-sample-query-substitutions.md)]


### Query breakdown

The following table describes each part of the query.

<table width="90%">
<tbody valign="top">
<tr><td width="25%"><b>Query part</b></td><td><b>Description</b></td><tr>
<tr><td><code>$apply=filter(</code></td>
<td>Start filter()</td>
<tr>
<tr>
<td><code>BuildPipeline/BuildPipelineName eq '{pipelinename}'</code></td>
<td>Return task results for a specific pipeline</td>
<tr>
<tr>
<td><code>and BuildCompletedOn/Date ge {startdate}</code></td>
<td>Return task results for pipeline runs on or after the specified date</td>
<tr>
<tr>
<td><code>and BuildOutcome eq 'Failed'</code></td>
<td>Return task results where build outcome is failed</td>
<tr>
<tr><td><code>and TaskOutcome eq 'Failed'</code></td>
<td>Return task results where task outcome is failed</td>
<tr>
<tr><td><code>)</code></td>
<td>Close of filter statement</td>
<tr>
<tr><td><code>/groupby(</code></td>
<td>Start groupby()</td>
<tr>
<tr><td><code>(BuildCompletedOn/Date, BuildId, PipelineJob/StageName ),</code></td>
<td>Group by date of completion of pipeline run, Build Id and stage name.</td>
<tr>
<tr><td><code>aggregate (FailedCount with sum as FailedCount))</code></td>
<td>For each day, build Id and Stage, count the total number of failures. This will be the total number of task failures & not stage failures</td>
<tr>
<tr><td><code>/groupby(</code></td>
<td>Start groupby()</td>
<tr>
<tr><td><code>(BuildCompletedOn/Date, PipelineJob/StageName ),</code></td>
<td>Group by day and stage name.</td>
<tr>
<tr><td><code>aggregate</code></td>
<td>Start of aggregate</td>
<tr>
<tr><td><code>(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount))</code></td>
<td>For each day, sum the number of times a stage failed</td>
<tr>
</tbody>
</table>


## Power BI transforms

### Expand BuildCompletedOn and PipelineJob column

The query returns some columns that you need to expand and flatten into its fields before you can use them in Power BI. Here in this example, such entities are BuildCompletedOn and PipelineJob

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on both the entities.

1. Choose the expand button

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Choose expand button](/azure/devops/report/powerbi/_img/odatapowerbi-pipelines-stagewisefailure-expand1.png)
    
1. Select the checkbox "(Select All Columns)" to expand

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Select all columns](/azure/devops/report/powerbi/_img/odatapowerbi-pipelines-stagewisefailure-expand2.png)

1. The table now contains the expanded entity **CompletedOn.Date**

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Expanded entity](/azure/devops/report/powerbi/_img/odatapowerbi-pipelines-stagewisefailure-expand3.png)


### Change column type

The query doesn't return all the columns in the format in which you can directly consume them in PowerBI reports.

1. Change the type of column FailedStageCount to **Whole Number**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - change column type](/azure/devops/report/powerbi/_img/odatapowerbi-pipelines-stagewisefailure-changecolumntype1.png)
    

### Rename fields and query, then Close & Apply

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](/azure/devops/report/powerbi/_img/odatapowerbi-pipelines-stagewisefailure-renamerightclick.png)
  
1. You also may want to rename the query from the default **Query1**, to something more meaningful. 

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Query](/azure/devops/report/powerbi/_img/odatapowerbi-pipelines-renamequery.png)
  
1. Once done, choose **Close & Apply** to save the query and return to Power BI.

	> [!div class="mx-imgBorder"] 
	> ![Power BI Close & Apply](/azure/devops/report/powerbi/_img/odatapowerbi-pipelines-closeandapply.png)
  
  
## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 
> [!div class="mx-imgBorder"] 
> ![Sample - Pipelines stage wise failures - Fields](_img/odatapowerbi-pipelines-stagewisefailure-fields.png)

For a simple report, perform the following steps:

1. Select Power BI Visualization **Stacked column chart**. 

1. Add the field "BuildCompletedOn.Date" to **Axis**.
    - Right click "BuildCompletedOn.Date" and select "BuildCompletedOn.Date", rather than Date Hierarchy.
	
1. Add the field "FailedStageCount" to **Values**.
	  - Right click "FailedStageCount" field and ensure **Sum** is selected.

1. Add the field "PipelineJob.StageName" to **Legend**.
	  - Right click "PipelineJob.StageName" field and ensure **Sum** is selected.
  

Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Sample - Pipelines Stage wise failures - Report](_img/odatapowerbi-pipelines-stagewisefailure-report.png)


## Additional queries

You can use the following additional queries to create different but similar reports using the same steps defined previously in this article.


### Task wise failure trend, rather than Stage wise failure trend

You may want to view the task wise failure trend, rather than stage wise failure trend.

#### [Power BI Query](#tab/powerbi/)
[!INCLUDE [temp](_shared/sample-powerbi-query.md)]
```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/BuildTaskResults?"
        &"$apply=filter( "
                &"BuildPipeline/BuildPipelineName eq '{pipelinename}' "
                &"and BuildCompletedOn/Date ge {startdate} "
                &"and BuildOutcome eq 'Failed' "
        &"and TaskOutcome eq 'Failed' "
        &") "
            &"/groupby( "
                &"(BuildCompletedOn/Date, TaskDisplayName), "
                &"aggregate "
            &"(FailedCount with sum as FailedCount)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```
#### [OData Query](#tab/odata/)
[!INCLUDE [temp](_shared/sample-odata-query.md)]
```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/BuildTaskResults?
$apply=filter(
	BuildPipeline/BuildPipelineName eq '{pipelinename}'
	and BuildCompletedOn/Date ge {startdate}
	and BuildOutcome eq 'Failed'
	and TaskOutcome eq 'Failed'
	)
/groupby(
	(BuildCompletedOn/Date, TaskDisplayName),
	aggregate
(FailedCount with sum as FailedCount))
```

***

### Job wise failure trend, rather than Stage wise failure trend

You may want to view the job wise failure trend, rather than stage wise failure trend.

#### [Power BI Query](#tab/powerbi/)
[!INCLUDE [temp](_shared/sample-powerbi-query.md)]
```
let
   Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/BuildTaskResults?"
        &"$apply=filter( "
                &"BuildPipeline/BuildPipelineName eq '{pipelinename}' "
                &"and BuildCompletedOn/Date ge {startdate} "
                &"and BuildOutcome eq 'Failed' "
        &"and TaskOutcome eq 'Failed' "
        &") "
            &"/groupby( "
                &"(BuildCompletedOn/Date, BuildId, PipelineJob/JobName ), "
                &"aggregate (FailedCount with sum as FailedCount)) "
            &"/groupby( "
                &"(BuildCompletedOn/Date, PipelineJob/JobName ), "
            &"aggregate "
        &"(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount)) "
    ,null, [Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]) 
in
    Source
```
#### [OData Query](#tab/odata/)
[!INCLUDE [temp](_shared/sample-odata-query.md)]
```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/BuildTaskResults?
$apply=filter(
	BuildPipeline/BuildPipelineName eq '{pipelinename}'
	and BuildCompletedOn/Date ge {startdate}
	and BuildOutcome eq 'Failed'
	and TaskOutcome eq 'Failed'
	)
/groupby(
	(BuildCompletedOn/Date, BuildId, PipelineJob/JobName ),
	aggregate (FailedCount with sum as FailedCount))
/groupby(
	(BuildCompletedOn/Date, PipelineJob/JobName ),
	aggregate
(cast(FailedCount gt 0, Edm.Int32) with sum as FailedStageCount))
```

***

## Full list of sample reports
[!INCLUDE [temp](_shared/sample-fulllist.md)]
## Related articles
[!INCLUDE [temp](_shared/sample-relatedarticles.md)]
