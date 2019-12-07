---
title: Manual test Configuration by Outcome history report sample Power BI report 
titleSuffix: Azure DevOps
description: Sample Power BI queries to generate a Configuration by Outcome matrix report
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: ravishan
ms.manager: mijacobs
ms.author: shdalv
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '> azure-devops-2019'
ms.date: 12/09/2019
---

# Sample - Configuration by Outcome matrix

[!INCLUDE [temp](../_shared/version-azure-devops-cloud.md)]

When you have multiple configurations in your product to release, you can take a decision about releasing different configurations independently based on the progress of tests made for each configuration. 
 
> [!div class="mx-imgBorder"] 
> ![Sample - Configuration by Outcome matrix - Report](_img/odatapowerbi-configurationbyoutcome.png)

[!INCLUDE [temp](_shared/sample-required-reading.md)]


## Sample queries

#### [Power BI Query](#tab/powerbi/)

[!INCLUDE [temp](_shared/sample-powerbi-query.md)]

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

#### [OData Query](#tab/odata/)

[!INCLUDE [temp](_shared/sample-odata-query.md)]

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

[!INCLUDE [temp](_shared/sample-query-substitutions.md)]
- {testPlanTitle} - Title of your test plan. Example: Fabrikam test plan.


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

### Expand Test configuration, Rename fields and query, change column types, then Close & Apply

When finished, you may choose to rename columns. 

1. Expand <code>TestConfiguration</code>
    - Choose the expand button.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI Expand Test configuration](/azure/devops/report/powerbi/_img/powerbi-expand-testconfiguration.png)

    - Select the fields to flatten.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI select fields to flatten](/azure/devops/report/powerbi/_img/powerbi-testconfiguration-flatten.png)

    - The table now contains entity field of <code>TestConfiguration.Name</code>.

        > [!div class="mx-imgBorder"] 
	    > ![Power BI expanded test configuration](/azure/devops/report/powerbi/_img/powerbi-expanded-testconfiguration.png)

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](/azure/devops/report/powerbi/_img/powerbi-rename-columns.png)

1. Change the type of count columns to **Whole Number** and percentage fields to **Decimal Number**.

	> [!div class="mx-imgBorder"]
	> ![Power BI Change Column Type](/azure/devops/report/powerbi/_img/powerbi-change-column-type.png)

1. You also may want to rename the query from the default **Query1**, to something more meaningful. 

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Query](/azure/devops/report/powerbi/_img/powerbi-rename-query.png)

1. Once done, choose **Close & Apply** to save the query and return to Power BI.

	> [!div class="mx-imgBorder"] 
	> ![Power BI Close & Apply](/azure/devops/report/powerbi/_img/powerbi-close-apply.png)


## Create the report

Power BI shows you the fields you can report on. 

> [!NOTE]   
> The example below assumes that no one renamed any columns. 

To create the report, perform the following steps:

1. Create a PowerBI visualization **Matrix**.
1. Add the field **TestConfiguration.Name** to **Rows**.
1. Add the field **LastResultOutcome** to **Columns**.
1. Add the field **Count** to **Values**.
1. Select **Sum** as aggregation for **Count**.
	> [!div class="mx-imgBorder"] 
	> ![Power BI select Sum as aggregation](/azure/devops/report/powerbi/_img/powerbi-sum-aggregation.png)

Your report should look like this -

> [!div class="mx-imgBorder"] 
> ![Sample - Configuration by Outcome matrix - Report](_img/odatapowerbi-configurationbyoutcome.png)

## Full list of sample reports for Test Plans

[!INCLUDE [temp](_shared/sample-fulllist-testplans.md)]

## Related articles

- [Overview of sample reports using OData queries](/azure/devops/report/powerbi/sample-odata-overview)
- [Connect using Power BI and OData queries](/azure/devops/report/powerbi/odataquery-connect)
- [Analytics OData query quick reference](/azure/devops/report/powerbi/extend-analytics/quick-ref)
