---
title: Pipeline duration trend sample Power BI report 
titleSuffix: Azure DevOps
description: Learn how to generate a pipeline duration trend Power BI report.
ms.subservice: azure-devops-analytics
ms.reviewer: ravishan
ms.author: kaghai
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2020'     
ms.date: 10/12/2021
---

# Pipeline duration trend sample report 

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

This article shows you how to create a report that shows how long your pipeline typically takes to complete successfully. The daily trend of pipeline duration report is similar to the 'Pipeline duration trend' chart of the [Pipeline duration report](../../pipelines/reports/pipelinereport.md#pipeline-duration-report). 

[!INCLUDE [temp](includes/preview-note.md)]

The following image shows an example of such a chart.

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI Pipelines duration trend report.](media/odatapowerbi-pipelines/durationtrend-report.png)

[!INCLUDE [temp](includes/sample-required-reading.md)]

[!INCLUDE [temp](./includes/prerequisites-power-bi-2020.md)]

## Sample queries

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

### Substitution strings
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
   Start filter()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Pipeline/PipelineName eq '{pipelinename}'`
   :::column-end:::
   :::column span="1":::
   Return pipeline runs for the specified pipeline
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and CompletedDate ge {startdate}`
   :::column-end:::
   :::column span="1":::
   Return pipeline runs on or after the specified date
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `and (SucceededCount eq 1 or PartiallySucceededCount eq 1)`
   :::column-end:::
   :::column span="1":::
   Return only the successful or partially successful runs
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `)`
   :::column-end:::
   :::column span="1":::
   Close filter()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/compute(`
   :::column-end:::
   :::column span="1":::
   Start compute()
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `percentile_cont(TotalDurationSeconds, 0.8,CompletedDateSK) as Duration80thPercentileInSeconds)`
   :::column-end:::
   :::column span="1":::
   Compute 80th percentile of Pipeline durations of all pipeline runs that match the filter criteria
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
   Group by date of completion of pipeline run and calculated day wise 80th percentile pipeline Duration
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `&$orderby=CompletedOn/Date asc`
   :::column-end:::
   :::column span="1":::
   Order the response by completed date
   :::column-end:::
:::row-end:::



[!INCLUDE [temp](includes/query-filters-pipelines.md)]


## Power BI transforms

The query returns some columns that you need to expand and flatten into its fields before you can use them in Power BI. In this example, such an entity is `CompletedOn`.

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on `CompletedOn`.


### Expand the CompletedOn column 

1. Choose the expand button.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI transform data, Choose expand button.](media/odatapowerbi-pipelines/passratetrend-expand1.png)
    
1. Select the checkbox "(Select All Columns)" to expand.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI transform data, Select all columns.](media/odatapowerbi-pipelines/passratetrend-expand2.png)

1. The table now contains the expanded entity **CompletedOn.Date**.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI transform data, Expanded entity.](media/odatapowerbi-pipelines/passratetrend-expand3.png)


### Change the column type

The query doesn't return all the columns in the format in which you can directly consume them in Power BI reports. You can change the column type as shown. 

- Change the type of column **Duration80thPercentileInSeconds** to **Decimal Number**.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI transform data, change column type.](media/odatapowerbi-pipelines/duration-changecolumntype1.png)


### Rename fields and query

When finished, you may choose to rename columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI transform data, Rename Columns.](media/odatapowerbi-pipelines/duration-renamerightclick.png)
  
1. You also may want to rename the query from the default **Query1**, to something more meaningful. 

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI transform data, Rename Query.](media/odatapowerbi-pipelines/renamequery.png)
  
1. Once done, choose **Close & Apply** to save the query and return to Power BI.

	> [!div class="mx-imgBorder"] 
	> ![Screenshot of Power BI Power Query Editor, Close & Apply.](media/odatapowerbi-pipelines/closeandapply.png)
  
  
## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 
> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI Visualization Pipelines Duration Fields.](media/odatapowerbi-pipelines/durationtrend-fields.png)

For a simple report, do the following steps:

1. Select Power BI Visualization **Line Chart**.

1. Add the field **CompletedOn.Date** to **Axis**.
	
	- Right-click **CompletedOn.Date** and select **CompletedOn.Date**, rather than Date Hierarchy.
	
1. Add the field **Duration80thPercentileInSeconds** to **Values**.

	- Right-click **Duration80thPercentileInSeconds** field and ensure **Sum** is selected.


Your report should look like this. 

> [!div class="mx-imgBorder"] 
> ![Screenshot of Power BI sample Pipelines Duration trend report.](media/odatapowerbi-pipelines/durationtrend-report.png)


## More queries

You can use the following other queries to create different but similar reports using the same steps defined previously in this article.


### Use Pipeline ID, rather than Pipeline Name

You can change your Pipeline name. To ensure that the Power BI reports don't break when the pipeline name is changed, use pipeline ID rather than pipeline name. You can obtain the pipeline ID  from the URL of the pipeline runs page.
https:\//dev.azure.com/{organization}/{project}/_build?definitionId= `{pipelineid}`

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

You may want to view the duration trend calculated using other percentile value. Below query gives 50th and 90th percentile pipeline duration along with 80th percentile.

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

You may want to view the duration trend of a pipeline for a particular **branch** only. To create the report, follow the extra steps below along with what is defined previously in this article.

- Expand Branch into Branch.BranchName
- Select Power BI Visualization **Slicer** and add the field Branch.BranchName to the slicer's **Field**
- Select the pipeline from the slicer for which you need to see the pipeline duration trend

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

You may want to view the duration trend for all the pipelines of the project in a single report. To create the report, follow the extra steps below along with what is defined previously in this article.

- Expand Pipeline into Pipeline.PipelineName
- Select Power BI Visualization **Slicer** and add the field Pipeline.PipelineName to the slicer's **Field**
- Select the Build pipeline from the slicer for which you need to see the trend of pipeline pass rate 

Refer [Outcome summary for all pipelines](sample-pipelines-allpipelines.md) sample report that has detailed similar steps as required here.

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
 

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-pipelines.md)]
