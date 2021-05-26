---
title: Manual test Configuration by Outcome history report sample Power BI report 
titleSuffix: Azure DevOps
description: Sample Power BI queries to generate a Configuration by Outcome matrix report
ms.technology: devops-analytics
ms.reviewer: ravishan
ms.author: shdalv
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2020'
ms.date: 07/14/2020
---

# Configuration by outcome matrix sample report

[!INCLUDE [temp](../includes/version-azure-devops-cloud.md)]

When you have multiple configurations in your product to release, you can take a decision about releasing different configurations independently based on the progress of tests made for each configuration. 

[!INCLUDE [temp](includes/preview-note.md)]

An example of the configuration by outcome matrix report is shown in the following image.
 
> [!div class="mx-imgBorder"] 
> ![Sample - Configuration by Outcome matrix - Report](media/odatapowerbi-configurationbyoutcome.png)

[!INCLUDE [temp](includes/sample-required-reading.md)]


[!INCLUDE [temp](./includes/prerequisites-power-bi-2020.md)]

For the report to generate useful data, the team must perform the following activities to manage test plans:

- Define test plans, test suites, and test cases. Specify their state. For a Test Suite to run, it must be in the In Progress state. For a Test Case to run, it must be in the Ready state. For details, see [Create manual test cases](../../test/create-test-cases.md). 
- Define test configurations and assign then to  test cases. For details, see [Test different configurations](../../test/test-different-configurations.md).
- Run manual tests and verify the results. Mark the results of each validation step in the test case as passed or failed. For details, see [Run manual tests](../../test/run-manual-tests.md).

	> [!NOTE]  
	> Testers must mark a test step with a status if it is a validation test step. The overall result for a test reflects the status of all the test steps that were marked. Therefore, the test will have a status of failed if any test step is marked as failed or not marked.   


## Sample queries

#### [Power BI query](#tab/powerbi/)

[!INCLUDE [temp](includes/sample-powerbi-query.md)]

```
let 
    Source = OData.Feed ("https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints?" 
        &"$apply=filter((TestSuite/TestPlanTitle eq '{testPlanTitle}'))" 
        &"/groupby((TestConfiguration/Name, LastResultOutcome)," 
            &"aggregate($count as Count)" 
        &")", null, [Implementation="2.0"]) 
in 
    Source
```

#### [OData query](#tab/odata/)

[!INCLUDE [temp](includes/sample-odata-query.md)]

```
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/TestPoints?  
    $apply=filter((TestSuite/TestPlanTitle eq '{testPlanTitle}')) 
    /groupby( 
        (TestConfiguration/Name, LastResultOutcome),  
        aggregate($count as Count) 
    )
```

***

### Substitution strings

[!INCLUDE [temp](includes/sample-query-substitutions-3.md)]

### Query breakdown

The following table describes each part of the query.


<table width="90%">
<tbody valign="top">
<tr><td width="25%"><b>Query part</b></td><td><b>Description</b></td><tr>
<tr><td><code>filter((TestSuite/TestPlanTitle eq '{testPlanTitle}')) </code></td><td>Return data for only selected test plan. You can add multiple plans with a clause like <code>filter((TestSuite/TestPlanTitle eq '{testPlanTitle1}' or TestSuite/TestPlanTitle eq '{testPlanTitle2}'))</code>. You can also apply any other filters related to test suites, test configurations here.</td><tr>
<tr><td><code>/groupby((TestConfiguration/Name, LastResultOutcome),</code></td><td>Grouping the points by the test configuration names and their outcome.</td><tr>
<tr><td><code>/aggregate($count as Count)</code></td><td>Aggregate data across the filtered test points with having count as <code>Count</code>.</td><tr>
</tbody>
</table>


## Power BI transforms

In Power BI, do the following steps.  

When finished, you may choose to rename columns. 

1. Expand <code>TestConfiguration</code>
    - Choose the expand button.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI Expand Test configuration](media/powerbi-expand-testconfiguration.png)

    - Select the fields to flatten.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI select fields to flatten](media/powerbi-testconfiguration-flatten.png)

    - The table now contains entity field of <code>TestConfiguration.Name</code>.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI expanded test configuration](media/powerbi-expanded-testconfiguration.png)

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](media/powerbi-rename-columns.png)

1. Change the type of count columns to **Whole Number** and percentage fields to **Decimal Number**.

	> [!div class="mx-imgBorder"]
	> ![Power BI Change Column Type](media/powerbi-change-column-type.png)

1. You also may want to rename the query from the default **Query1**, to something more meaningful. 

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Query](media/powerbi-rename-query.png)

1. Once done, choose **Close & Apply** to save the query and return to Power BI.

	> [!div class="mx-imgBorder"] 
	> ![Power BI Close & Apply](media/powerbi-close-apply.png)


## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 

To create the report, do the following steps:

1. Create a Power BI visualization **Matrix**.
1. Add the field **TestConfiguration.Name** to **Rows**.
1. Add the field **LastResultOutcome** to **Columns**.
1. Add the field **Count** to **Values**.
1. Select **Sum** as aggregation for **Count**.
	> [!div class="mx-imgBorder"] 
	> ![Power BI select Sum as aggregation](media/powerbi-sum-aggregation.png)

Your report should look similar to the following image.

> [!div class="mx-imgBorder"] 
> ![Sample - Configuration by Outcome matrix - Report](media/odatapowerbi-configurationbyoutcome.png)

## Full list of sample reports for Test Plans

[!INCLUDE [temp](includes/sample-full-list-test-plans.md)]

## Related articles

- [Overview of sample reports using OData queries](./sample-odata-overview.md)
- [Connect using Power BI and OData queries](./odataquery-connect.md)
- [Analytics OData query quick reference](../extend-analytics/quick-ref.md)