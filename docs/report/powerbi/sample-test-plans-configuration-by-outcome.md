---
title: Manual test Configuration by Outcome history report sample Power BI report 
titleSuffix: Azure DevOps
description: Learn about sample Power BI queries that generate a Configuration by Outcome matrix report.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
ms.custom: powerbisample, engagement-fy23
author: chcomley
ms.topic: sample
monikerRange: "<=azure-devops"
ms.date: 04/07/2026
---

# Configuration by outcome matrix sample report

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

When your product has multiple configurations to release, you can decide to release different configurations independently based on the progress of tests for each configuration. The following image shows an example of the configuration by outcome matrix report.

:::image type="content" source="media/odatapowerbi-configurationbyoutcome.png" alt-text="Screenshot of Power BI Configuration by Outcome matrix report.":::

[!INCLUDE [temp](includes/preview-note.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [temp](includes/sample-required-reading.md)]

For the report to generate useful data, the team must carry out the following activities to manage test plans:

- Define test plans, test suites, and test cases. Specify their state. To run a test suite, set its state to In Progress. To run a test case, set its state to Ready. For details, see [Create manual test cases](../../test/create-test-cases.md).
- Define test configurations and assign them to test cases. For details, see [Test different configurations](../../test/test-different-configurations.md).
- Run manual tests and verify the results. Mark the results of each validation step in the test case as passed or failed. For details, see [Run manual tests](../../test/run-manual-tests.md).

	> [!NOTE]
	> Testers must mark a test step with a status if it's a validation test step. The overall result for a test reflects the status of all the test steps that were marked. Therefore, the test has a status of failed if any test step is marked as failed or not marked.

## Sample queries

Use the following queries for the `TestPoints` entity set to create different but similar test plan progress reports.

[!INCLUDE [temp](includes/query-filters-test.md)]

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

## Substitution strings and query breakdown

[!INCLUDE [temp](includes/sample-query-substitutions.md)]

- `{organization}` - Your organization name.
- `{project}` - Your team project name. Omit `/{project}` entirely for a cross-project query.
- `{testPlanTitle}` - Title of your test plan. Example: `Fabrikam test plan`.

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
:::row:::
   :::column span="1":::
   `filter((TestSuite/TestPlanTitle eq '{testPlanTitle}'))`
   :::column-end:::
   :::column span="1":::
   Returns data for only the selected test plan. To add multiple plans, use a clause like `filter((TestSuite/TestPlanTitle eq '{testPlanTitle1}' or TestSuite/TestPlanTitle eq '{testPlanTitle2}'))`. You can also apply other filters related to test suites and test configurations.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/groupby((TestConfiguration/Name, LastResultOutcome),`
   :::column-end:::
   :::column span="1":::
   Groups the points by test configuration names and their outcome.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/aggregate($count as Count)`
   :::column-end:::
   :::column span="1":::
   Aggregates data across the filtered test points with count as `Count`.
   :::column-end:::
:::row-end:::

[!INCLUDE [temp](includes/rename-query.md)]

## Expand the TestConfiguration column

1. Expand `TestConfiguration`.
    - Select the expand button.

        :::image type="content" source="media/powerbi-expand-testconfiguration.png" alt-text="Screenshot of Power BI expand TestConfiguration column.":::

    - Select the fields to flatten.

        :::image type="content" source="media/powerbi-testconfiguration-flatten.png" alt-text="Screenshot of Power BI select fields to flatten.":::

    - The table now contains the entity field of `TestConfiguration.Name`.

        :::image type="content" source="media/powerbi-expanded-testconfiguration.png" alt-text="Screenshot of Power BI expanded TestConfiguration column.":::

1. (Optional) Right-click a column header and select **Rename**.

	:::image type="content" source="media/transform-data/powerbi-rename-columns.png" alt-text="Screenshot of Power BI transform data, Rename Columns.":::

## Change the data type of select columns

In Power Query Editor, select the columns that contain numbers, such as *Blocked*, *Failed*, and *NotApplicable*. Select **Data Type** from the **Transform** menu, and then choose **Whole Number**. For more information about changing the data type, see [Transform Analytics data to generate Power BI reports, Transform a column data type](transform-analytics-data-report-generation.md#transform-data-type).

[!INCLUDE [temp](includes/close-apply.md)]

## Create the Matrix report

1. Under **Visualizations**, select **Matrix**.
1. Add `TestConfiguration.Name` to **Rows**.
1. Add `LastResultOutcome` to **Columns**.
1. Add `Count` to **Values**.
1. Select **Sum** as the aggregation for **Count**.

	:::image type="content" source="media/powerbi-sum-aggregation.png" alt-text="Screenshot of Power BI select Sum as aggregation.":::

Your report should look similar to the following image.

:::image type="content" source="media/odatapowerbi-configurationbyoutcome.png" alt-text="Screenshot of Power BI Sample Configuration by Outcome matrix report.":::

## Related articles

[!INCLUDE [temp](includes/sample-related-articles-test.md)]