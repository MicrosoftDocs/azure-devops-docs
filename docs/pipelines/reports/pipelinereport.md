---
title: Pipeline reports
description: Get meaningful insights with pipeline reports in the pipeline
ms.assetid: 678DF283-CE38-4CAF-BA74-D331B357F510
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.custom: "continuous-test, seodec18"
ms.manager: jillfra
ms.author: admahesh
author: additi
ms.date: 08/21/2019
monikerRange: '>=azure-devops-2019'
---

# Pipeline reports

[!INCLUDE [version-header-ap](../_shared/version-server-2019-rtm.md)]

Teams track their pipeline health and efficiency to ensure continuous delivery to their customers. You can gain visibility into your team's pipeline(s) using Pipeline analytics. The source of information for pipeline analytics is the set of runs for your pipeline. These analytics are accrued over a period of time, and form the basis of the rich insights offered. Pipelines reports show you metrics, trends, and can help you identify insights to improve the efficiency of your pipeline.  

::: moniker range="azure-devops-2019"

## Prerequisites

Ensure that you have installed the [the Analytics Marketplace extension](../../report/dashboards/analytics-extension.md) for Azure DevOps Server.

## View pipeline reports

A summary of the pass rate can be viewed in the **Analytics** tab of a pipeline. To drill into the trend and insights, click on the card to view the full report.

::: moniker-end

<a name="viewinbuild"></a>

::: moniker range="azure-devops"

## View pipeline reports

A summary of the pass rate and duration can be viewed in the **Analytics** tab of a pipeline. To drill into the trend and insights, click on the card to view the full report.

> [!div class="mx-imgBorder"]
> ![View pipeline reports](_img/pipelines-reports/analyticstab.png)

::: moniker-end

::: moniker range="azure-devops-2019"

> [!div class="mx-imgBorder"]
> ![View pipeline reports](_img/pipelines-reports/analyticstab-server-2019.png)

::: moniker-end

::: moniker range="azure-devops"

## Pipeline pass rate report 

The **Pipeline pass rate** report  provides a granular view of the pipeline pass rate and its trend over time. You can also view which specific task failure contributes to a high number of pipeline run failures, and use that insight to fix the top failing tasks.

The report contain the following sections:

  - **Summary**: Provides the key  metrics of pass rate of the pipeline over the specified period. The default view shows data for 14 days, which you can modify.

  - **Failure and pass rate trend**: Shows the pass percentage trend along with a distribution of failures across runs.  

    > [!div class="mx-imgBorder"]
    > ![View pass rate](_img/pipelines-reports/pass-rate.png)

  - **Top failing tasks & their trend**: Provides a trend of failed tasks across pipeline runs during the specified period. Higher the number of failures of a task on a day larger the bubble size. Along with the trend, find the insight of the top failing tasks for the pipeline.

    > [!div class="mx-imgBorder"]
    > ![View Top Failing Task](_img/pipelines-reports/top-failing.png)
    
    > [!div class="mx-imgBorder"]
    > ![View Task Failure Details](_img/pipelines-reports/failing-tasks.png)

  - **Failed runs**: View the latest runs where a specific task failed. Analyze the failures in the build to fix your failing task and improve the pass rate of the pipeline. 

    > [!div class="mx-imgBorder"]
    > ![View Failed Runs](_img/pipelines-reports/failed-runs.png)

## Pipeline duration report

The **Pipeline duration** report shows how long your pipeline typically takes to complete successfully. You can review the duration trend and view insights into whether a specific task has contributed to an increase in duration, which you can further analyze. 

> [!div class="mx-imgBorder"]
> ![View Duration Summary](_img/pipelines-reports/duration-summary.png)

> [!div class="mx-imgBorder"]
> ![View Duration Trend](_img/pipelines-reports/duration-trend.png)

::: moniker-end

## Test failures report

The **Test failures** report provides a granular view of the top failing tests in the pipeline, along with the failure details. For more information on this report, see [Test failures](../test/test-analytics.md#test-failures).

> [!div class="mx-imgBorder"]
![Test analytics detail view](../test/_img/test-analytics/test-failures.png)

## Filters

Pipelines reports can be further filtered by date range or branch. 

- **Date range**: The default view shows data from the last 14 days. The filter helps change this range.
  
    > [!div class="mx-imgBorder"]
    > ![View days filter](_img/pipelines-reports/days-filter.png)

- **Branch filter**: View the report for a particular branch or a set of branches. 
  
    > [!div class="mx-imgBorder"]
    > ![View branch filter](_img/pipelines-reports/branch-filter.png)


[!INCLUDE [help-and-support-footer](../test/_shared/help-and-support-footer.md)] 