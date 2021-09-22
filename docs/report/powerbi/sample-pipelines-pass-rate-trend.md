---
title: Pipeline pass rate sample Power BI report 
titleSuffix: Azure DevOps
description: How-to generate a pipeline pass rate Power BI report  
ms.technology: devops-analytics
ms.reviewer: ravishan
ms.author: kaghai
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2020'      
ms.date: 09/21/2021
---

# Pipeline pass rate trend sample report 

[!INCLUDE [temp](../includes/version-azure-devops-cloud.md)]

This article shows you how to create a report that shows a pipeline's daily pass rate trend. Pass rate of a pipeline is defined as the percentage of successful pipeline runs to the total pipeline runs. This is similar to the 'Pass rate trend' chart of the [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-pass-rate-report).

[!INCLUDE [temp](includes/preview-note.md)]

The following image shows an example of such a trend.

> [!div class="mx-imgBorder"] 
> ![Sample - Pipelines Pass rate trend - Report](media/odatapowerbi-pipelines/passratetrend-report.png)

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi-2020.md)]

## Sample queries

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

### Substitution strings

[!INCLUDE [temp](includes/pipelines-sample-query-substitutions.md)]


### Query breakdown

The following table describes each part of the query.

<table width="90%">
<tbody valign="top">
<tr><td width="25%"><b>Query part</b></td><td><b>Description</b></td><tr>
<tr><td><code>$apply=filter(</code></td>
<td>Start filter()</td>
<tr>
<tr>
<td><code>Pipeline/PipelineName eq '{pipelinename}'</code></td>
<td>Return pipeline runs for the specified pipeline</td>
<tr>
<tr>
<td><code>and CompletedDate ge {startdate}</code></td>
<td>Return pipeline runs on or after the specified date</td>
<tr>
<tr>
<td><code>and CanceledCount ne 1</code></td>
<td>Omit the canceled pipeline runs</td>
<tr>
<tr><td><code>)</code></td>
<td>Close filter()</td>
<tr>
<tr><td><code>/groupby(</code></td>
<td>Start groupby()</td>
<tr>
<tr><td><code>(CompletedOn/Date),</code></td>
<td>Group by date of completion of pipeline run</td>
<tr>
<tr><td><code>aggregate</code></td>
<td>Start aggregate. For all the pipeline runs matching the above filter criteria:</td>
<tr>
<tr><td><code>($count as TotalCount,</code></td>
<td>Count the total number of runs as TotalCount</td>
<tr>
<tr><td><code>SucceededCount with sum as SucceededCount ,</code></td>
<td>Count the number of successful runs as SucceededCount</td>
<tr>
<tr><td><code>FailedCount with sum as FailedCount,</code></td>
<td>Count the number of failed runs as FailedCount</td>
<tr>
<tr><td><code>PartiallySucceededCount with sum as PartiallySucceededCount))</code></td>
<td>Count the number of partially successful runs as PartiallySucceededCount. Close aggregate() and groupby()</td>
<tr>
<tr><td><code>/compute(</code></td>
<td>Start of compute()</td>
<tr>
<tr><td><code>SucceededCount mul 100.0 div TotalCount as PassRate,</code></td>
<td>Calculate PassRate for each day by dividing number of successful runs by number of total runs</td>
<tr>
<tr><td><code>FailedCount mul 100.0 div TotalCount as FailRate,</code></td>
<td>Calculate FailRate for each day by dividing number of failed runs by number of total runs</td>
<tr>
<tr><td><code>PartiallySucceededCount mul 100.0 div TotalCount as PartiallySuccessfulRate)</code></td>
<td>Calculate PartiallySuccessfulRate for each day by dividing number of partially successful runs by number of total runs</td>
<tr>
<tr><td><code>&$orderby=CompletedOn/Date asc</code></td>
<td>Order the result in ascending order based on date of pipeline run</td>
<tr>
</tbody>
</table>

[!INCLUDE [temp](includes/query-filters-pipelines.md)]


## Power BI transforms

### Expand CompletedOn column

The query returns some columns that you need to expand and flatten into its fields before you can use them in Power BI. Here in this example, such an entity is CompletedOn.

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on **CompletedOn**.

1. Choose the expand button

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Choose expand button](media/odatapowerbi-pipelines/passratetrend-expand1.png)
    
1. Select the checkbox "(Select All Columns)" to expand

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Select all columns](media/odatapowerbi-pipelines/passratetrend-expand2.png)

1. The table now contains the expanded entity **CompletedOn.Date**

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - Expanded entity](media/odatapowerbi-pipelines/passratetrend-expand3.png)


### Change column type

The query doesn't return all the columns in the format in which you can directly consume them in Power BI reports. This section lists the columns whose type needs to be changed for creating reports.

1. Change the type of columns **PassRate, FailRate** and **PartiallySuccessfulRate** to **Decimal Number**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - change column type](media/odatapowerbi-pipelines/passratetrend-changecolumntype1.png)

1. Change the type of column **TotalCount** to **Whole Number**.

    > [!div class="mx-imgBorder"] 
    > ![Change the type of column TotalCount to Whole Number.](media/odatapowerbi-pipelines/passratetrend-changecolumntype2.png)


### Rename fields and query, then Close & Apply

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](media/odatapowerbi-pipelines/passratetrend-renamerightclick.png)
  
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
> ![Sample - Pipelines pass rate trend - Fields](media/odatapowerbi-pipelines/passratetrend-fields.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Line Chart**. 
1. Add the field "CompletedOn.Date" to **Axis**.
    - Right-click "CompletedOn.Date" and select "CompletedOn.Date", rather than Date Hierarchy.
1. Add the field "PassRate" to **Values**.
	  - Right-click "PassRate" field and ensure **Sum** is selected.
  

Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Sample - Pipelines Pass rate trend - Report](media/odatapowerbi-pipelines/passratetrend-report.png)


## Additional queries

You can use the following additional queries to create different but similar reports using the same steps defined previously in this article.


### Use Pipeline Id, rather than Pipeline Name

You can change your Pipeline name. To ensure that the Power BI reports don't break when the pipeline name is changed, use pipeline ID rather than pipeline name. You can obtain the pipeline Id from the URL of the pipelines runs page.

`https://dev.azure.com/{organization}/{project}/_build?definitionId=**{pipelineid}**`

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

### Filter by branch

You may want to view the pass rate trend of a pipeline for a particular **branch** only. To create the report, follow the below additional steps along with what is defined previously in this article.
- Expand Branch into Branch.BranchName
- Select Power BI Visualization **Slicer** and add the field Branch.BranchName to the slicer's **Field**
- Select the pipeline from the slicer for which you need to see the outcome summary

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

### Filter by Build Reason

You may want to view the pass rate trend of a pipeline for a particular **Build Reason** (Manual / BatchedCI, Pull Request etc.) only. To create the report, follow these additional steps along with what is defined previously in this article.
- Select Power BI Visualization **Slicer** and add the field RunReason to the slicer's **Field**
- Select the pipeline from the slicer for which you need to see the outcome summary.

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

You may want to view the pass rate trend for all the pipelines of the project in a single report. To create the report, follow the below additional steps along with what is defined previously in this article.  
- Expand Pipeline into  Pipeline.PipelineName  
- Select Power BI Visualization **Slicer** and add the field Pipeline.PipelineName to the slicer's **Field**  
- Select the Build pipeline from the slicer for which you need to see the outcome summary

Refer [Outcome summary for all pipelines](sample-pipelines-allpipelines.md) sample report which has detailed similar steps as required here.

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

## Full list of sample reports for Pipelines

[!INCLUDE [temp](includes/sample-full-list-pipelines.md)]

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
