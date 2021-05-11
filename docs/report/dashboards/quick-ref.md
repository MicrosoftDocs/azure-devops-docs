---
title: Quick reference to dashboards, charts, and reports
titleSuffix: Azure DevOps  
description: Index to dashboard, charts and report tasks for Azure Boards, Azure DevOps 
ms.custom: dashboards
ms.assetid: 7BAD53A1-080E-40E8-8866-24EC00395D39
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2015'
ms.date: 04/14/2021
---

# Dashboards, charts, and quick reference 

[!INCLUDE [temp](../includes/version-ts-tfs-2015-2016.md)] 

Use this index to quickly access information on tasks for configuring or accessing dashboards, charts, reports, and widgets.  
 
## Tasks

---
:::row:::
   :::column span="2":::
      **Dashboards** 
      ::: moniker range=">= azure-devops-2019"
      - [Add a dashboard](dashboards.md)  
      - [Add a chart to a dashboard](add-charts-to-dashboard.md)  
      - [Add a widget to a dashboard](add-widget-to-dashboard.md)  
      - [Add a work-tracking query chart](charts.md)  
      - [Add a test status or progress chart](../../test/track-test-status.md)  
      - [Add Markdown to a dashboard](add-markdown-to-dashboard.md)  
      - [Copy a widget to a dashboard](add-widget-to-dashboard.md#copy)  
<br/>
      - [Delete a dashboard](dashboards.md)  
      - [Delete a widget from a dashboard](add-widget-to-dashboard.md#move-delete)   
      - [Edit a dashboard](dashboards.md)  
      - [Enable auto-refresh](dashboards.md)  
      - [Favorite a dashboard](dashboards.md)  
      - [Filter a dashboard](dashboards.md)  
      - [Move widgets on a dashboard](add-widget-to-dashboard.md#move-delete)  
<br/> 
      - [Open a dashboard](dashboards.md)  
      - [Rename a dashboard](dashboards.md)  
      - [Refresh a dashboard](dashboards.md)  
      - [Set dashboard permissions](dashboard-permissions.md)  
      - [View a dashboard](dashboards.md)  
      ::: moniker-end
      ::: moniker range="< azure-devops-2019"
      - [Add a dashboard](dashboards.md)  
      - [Add a chart to a dashboard](add-charts-to-dashboard.md)  
      - [Add a widget to a dashboard](add-widget-to-dashboard.md)  
      - [Add Markdown to a dashboard](add-markdown-to-dashboard.md)  
      - [Copy a widget to a dashboard](add-widget-to-dashboard.md#copy)   
      - [Delete a dashboard](dashboards.md)  
      - [Delete a widget from a dashboard](add-widget-to-dashboard.md#move-delete) 
<br/>
      - [Edit a dashboard](dashboards.md)  
      - [Enable auto-refresh](dashboards.md)  
      - [Favorite a dashboard](dashboards.md)  
      - [Filter dashboard directory](dashboards.md)  
      - [Move widgets on a dashboard](add-widget-to-dashboard.md#move-delete)  
      - [Open a dashboard](dashboards.md)  
      - [Rename a dashboard](dashboards.md)  
<br/> 
      - [Refresh a dashboard](dashboards.md)  
      - [Set dashboard permissions](dashboard-permissions.md)  
      - [View a dashboard](dashboards.md)  
      ::: moniker-end
   :::column-end:::
   :::column span="2":::
      **Charts** 
      - [Work-tracking query chart](charts.md) 
      - [Test status or progress chart](../../test/track-test-status.md) 
      ::: moniker range=">= azure-devops-2019"
      **Analytics**  
      - [Analytics views](../powerbi/analytics-default-views.md)  
      - [Analytics widgets](analytics-widgets.md)  
      - [What is Analytics?](../powerbi/what-is-analytics.md)  
      - [Enable or install Analytics](analytics-extension.md) 
      - [Power BI reports](../powerbi/overview.md#sample-reports)  
      - [OData](../extend-analytics/quick-ref.md)  
      ::: moniker-end
      ::: moniker range="<= azure-devops-2019"
      **SQL Reports** 
      - [SQL Server reports](../../report/sql-reports/reporting-services-reports.md)  
      - [Excel work tracking reports](../../report/create-status-and-trend-excel-reports.md)  
      ::: moniker-end
      **Widgets** 
      ::: moniker range=">= azure-devops-2019"
      - [Configure a widget](add-widget-to-dashboard.md#configure)  
      - [Configure the Burndown/Burnup widget](configure-burndown-burnup-widgets.md)  
      - [Configure Sprint Burndown widget](configure-sprint-burndown.md)   
      - [Configure the Cumulative Flow widget](cumulative-flow.md) 
      - [Configure the Lead/Cycle Time widget](cycle-time-and-lead-time.md) 
      - [Configure the Velocity widget](team-velocity.md) 
      - [Configure the Test Results widget](configure-test-results-trend.md)  
      - [Resize a widget](add-widget-to-dashboard.md) 
      ::: moniker-end
      ::: moniker range="< azure-devops-2019"
      - [Configure a widget](add-widget-to-dashboard.md#configure)  
      - [Resize a widget](add-widget-to-dashboard.md) 
      ::: moniker-end
   :::column-end:::
:::row-end:::
---

## In-context reports

::: moniker range=">= azure-devops-2020"

In context reports appear on the **Analytics** tab of these specific service pages: **Boards>Boards**, **Boards>Backlogs**, **Boards>Sprints**, and **Pipelines>Builds**. 
::: moniker-end

::: moniker range="azure-devops-2019"

In-context reports appear on specific service pages, such as **Boards>Boards**, **Boards>Backlogs**, **Boards>Sprints**,and **Pipelines>Builds>Analytics**. These reports derive data from the Analytics service. 
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

In-context reports appear on specific service pages, such as **Work>Backlog**, **Work>Backlogs** and **Build and Release>Builds**. 
::: moniker-end


---
:::row:::
   :::column span="2":::
      **Boards** 
      - [Cumulative Flow Diagram (CFD)](cumulative-flow.md#configure-built-in-cfd) 
      - [Sprint burndown](configure-sprint-burndown.md)  
      - [Velocity chart](team-velocity.md) 
   :::column-end:::
   :::column span="2":::
      ::: moniker range=">= azure-devops-2019"
      **Pipelines** 
      - [Build test results](../../pipelines/test/review-continuous-test-results-after-build.md) 
      - [Code coverage](../../pipelines/test/review-code-coverage-results.md) 
      - [Release test results](../../pipelines/test/review-continuous-test-results-after-build.md) 
      - [Trace test requirements](../../pipelines/test/requirements-traceability.md) 
      - [Test analytics](../../pipelines/test/test-analytics.md) 
      - [Test failures](../../pipelines/test/test-analytics.md)  
      - [Test impact analysis](../../pipelines/test/test-impact-analysis.md) 
      ::: moniker-end
      ::: moniker range="< azure-devops-2019"
      **Build & Release** 
      - [Build test results](../../pipelines/test/review-continuous-test-results-after-build.md) 
      - [Code coverage](../../pipelines/test/review-code-coverage-results.md) 
      - [Release test results](../../pipelines/test/review-continuous-test-results-after-build.md) 
      - [Trace test requirements](../../pipelines/test/requirements-traceability.md) 
      - [Test failures](../../pipelines/test/test-analytics.md)  
      - [Test impact analysis](../../pipelines/test/test-impact-analysis.md) 
      ::: moniker-end
   :::column-end:::
:::row-end:::
---
 
 

## Marketplace extensions 

- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=AzureDevOps&category=All%20categories&sortBy=Relevance)
- [Marketplace extension reports](https://marketplace.visualstudio.com/search?term=report&target=AzureDevOps&category=All%20categories&sortBy=Relevance)
- [Reactivations Report](https://marketplace.visualstudio.com/items?itemName=EnterpriseServicesDevOpsTeam.ServicesBugReactivationReport&ssr=false#overview)

 

## Related articles

- [Widget catalog](widget-catalog.md)  