---
title: View the OData query behind an Analytics report or widget  
titleSuffix: Azure DevOps 
description: Learn how to view the OData query of a built-in Analytics report or widget when working from Azure DevOps. 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: how-to
monikerRange: '>= azure-devops-2019'
ms.date: 06/15/2022
---

# View the OData query behind an Analytics report or widget 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]


Several built-in Analytics reports and widgets are supported. You can view the OData query used to generate these reports by following the steps outlined in this article. You can then adapt that OData query as needed to generate other reports using Power BI. 

[!INCLUDE [temp](../includes/analytics-preview.md)]
 
For a list of built-in Analytics reports and widgets, see [About dashboards, charts, reports, & widgets](../dashboards/overview.md) and [Widgets based on Analytics data](../dashboards/analytics-widgets.md).


## Open the Analytics report  

Open the report of interest. For details, choose one of the links provided below. If you are working to get the OData query behind a widget, we recommend that you create a dashboard with just the widget displayed.  

|**Boards**| **Pipelines & Test** |
|---------------|-----------------------|
|<ul><li>[Cumulative Flow Diagram (CFD)](../dashboards/cumulative-flow.md#configure-built-in-cfd)</li><li>[Sprint burndown](../dashboards/configure-sprint-burndown.md)</li><li>[Velocity chart](../dashboards/team-velocity.md)</li></ul>|
<ul><li>[Build test results](../../pipelines/test/review-continuous-test-results-after-build.md) </li><li>[Code coverage](../../pipelines/test/review-code-coverage-results.md) </li><li>[Release test results](../../pipelines/test/review-continuous-test-results-after-build.md)</li><li>[Trace test requirements](../../pipelines/test/requirements-traceability.md)</li><li>[Test analytics](../../pipelines/test/test-analytics.md)</li><li>[Test failures](../../pipelines/test/test-analytics.md) </li><li>[Test impact analysis](../../pipelines/test/test-impact-analysis.md)</li></ul> |
 


## Open Developer Tools for your browser 

Enter <kbd>F12</kbd> to open the Developer Tools for your browser. Open the **Network** tab and scroll down to find the entry with the OData query. The following table lists the  beginning text of entries for select reports. Double-click the entry to open the OData query. 

 

| Report | Entry begins with |
|--------|-------------------|
| Cycle Time widget | `WorkItems?%24apply=filter` |
| Cumulative Flow Diagram | `BoardLocations?%24apply=filter` |
| Sprint Burndown | `BoardLocations?%24apply=filter` |
| Velocity | `Iterations?%24filter=Teams` | 



<!--- QUESTIONS

Sometimes there are two or more entries that appear the same. 
Use Fetch to see the filter, others to see the returned data. 
I don't see how the ODATA query for the Sprint burndown or Velocity chart is filtering on the team. 
SOmetimes, it appears that the OData query is the full set of data, for example for the CFD chart, Cycle Time widget 


https://analytics.dev.azure.com/mseng/677da0fb-b067-4f77-b89b-f32c12bb8617/_odata/v4.0-preview/WorkItems?%24apply=filter(CompletedDateSK+ge+20220510+and+Teams%2Fany(t%3A(t%2FTeamSK+eq+cdf5e823-1179-4503-9fb1-a45e2c1bc6d4+and+(WorkItemType+eq+%27Bug%27+or+WorkItemType+eq+%27DTS+Task%27+or+WorkItemType+eq+%27User+Story%27))))%2Fgroupby((CompletedDateSK%2C+WorkItemType)%2Caggregate(%24count+as+CompletedCount%2CCycleTimeDays+with+sum+as+Sum%2CCycleTimeDays+mul+CycleTimeDays+with+sum+as+SumOfSquares))
 
-->

## Sample OData query, Velocity chart 

The following syntax represents the OData query for a velocity chart set to show six iterations. 

> [!div class="tabbedCodeSnippets"]
```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/677da0fb-b067-4f77-b89b-f32c12bb8617/_odata/v4.0-preview/$metadata#Iterations(IterationSK,IterationName,StartDate,EndDate,IsEnded,IterationPath)",
  "value": [
    {
      "IterationSK": "5b25cc74-aeb3-4f13-8084-1e899d7383b5",
      "IterationName": "06_2022",
      "IterationPath": "FabrikamProject\\CY2022\\06_2022",
      "StartDate": "2022-06-01T00:00:00-07:00",
      "EndDate": "2022-06-30T23:59:59.999-07:00",
      "IsEnded": false
    },
    {
      "IterationSK": "a9219cb0-21c0-48f4-8c88-83d0ae3187db",
      "IterationName": "05_2022",
      "IterationPath": "FabrikamProject\\CY2022\\05_2022",
      "StartDate": "2022-05-01T00:00:00-07:00",
      "EndDate": "2022-05-31T23:59:59.999-07:00",
      "IsEnded": true
    },
    {
      "IterationSK": "8668264f-465d-4d69-b2b5-f5de742447d4",
      "IterationName": "04_2022",
      "IterationPath": "FabrikamProject\\CY2022\\04_2022",
      "StartDate": "2022-04-01T00:00:00-07:00",
      "EndDate": "2022-04-30T23:59:59.999-07:00",
      "IsEnded": true
    },
    {
      "IterationSK": "4933928f-3e08-4cf9-901a-13cc32201944",
      "IterationName": "03_2022",
      "IterationPath": "FabrikamProject\\CY2022\\03_2022",
      "StartDate": "2022-03-01T00:00:00-08:00",
      "EndDate": "2022-03-31T23:59:59.999-07:00",
      "IsEnded": true
    },
    {
      "IterationSK": "a690f087-bd77-42dc-b5aa-f34f64ed67b3",
      "IterationName": "02_2022",
      "IterationPath": "FabrikamProject\\CY2022\\02_2022",
      "StartDate": "2022-02-01T00:00:00-08:00",
      "EndDate": "2022-02-28T23:59:59.999-08:00",
      "IsEnded": true
    },
    {
      "IterationSK": "edae3d3e-4357-4bae-9e25-f01719f48bb7",
      "IterationName": "01_2022",
      "IterationPath": "FabrikamProject\\CY2022\\01_2022",
      "StartDate": "2022-01-01T00:00:00-08:00",
      "EndDate": "2022-01-31T23:59:59.999-08:00",
      "IsEnded": true
    }
  ]
}
```
 

## Related articles

- [Construct aggregate data queries](aggregated-data-analytics.md) to count and analyze groups of related data.
