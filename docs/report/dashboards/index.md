---
title: Dashboards index to content
titleSuffix: Azure DevOps & TFS
description: Index to topics for working with dashboards to monitor status and trends in Azure DevOps & Team Foundation Server   
ms.custom: dashboards
ms.assetid: CF7FBF52-AC95-4B0B-9FEC-D2EDD5583F9E
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: ">= tfs-2013"
ms.date: 11/19/2018
---

# Dashboards 
[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Gain visibility into your team's progress by adding one or more widgets to your dashboard. Each team can customize and configure dashboards to share information and monitor their progress.  

To learn about our reporting solutions, read [Reporting Roadmap](../analytics/reporting-roadmap.md).

## 5-Minute Quickstarts  

::: moniker range=">= azdevserver-2019"  
- [Add, rename, and delete dashboards](dashboards.md) 
- [Add an Analytics widget to a dashboard](../analytics/enable-analytics-velocity.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json) 
- [Add charts and widgets to a dashboard](add-widget-to-dashboard.md)  
- [Add Markdown to a dashboard](add-markdown-to-dashboard.md)   
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"  
- [Add, rename, and delete dashboards](dashboards.md)  
- [Add charts and widgets to a dashboard](add-widget-to-dashboard.md)  
- [Add Markdown to a dashboard](add-markdown-to-dashboard.md)   
::: moniker-end

## Step-by-Step Tutorials
::: moniker range=">= azdevserver-2019"
- [Configure a Cumulative Flow chart](cumulative-flow.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [Configure a Lead Time or Cycle Time widget](cycle-time-and-lead-time.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [Configure the Velocity widget](team-velocity.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [View the built-in velocity chart](velocity-chart-data-store.md)
- [Work with sprint burndown](../../boards/sprints/sprint-burndown.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018" 
- [Configure a Cumulative Flow chart](cumulative-flow.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [View the built-in velocity chart](velocity-chart-data-store.md)
- [Work with sprint burndown](../../boards/sprints/sprint-burndown.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
::: moniker-end


## Concepts
- [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [Velocity metrics and usage guidance](velocity-guidance.md)
- [Burndown guidance](burndown-guidance.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)


## How-to Guides
- [Add charts to a dashboard](add-charts-to-dashboard.md)  
- [Configure work item query-based charts](charts.md)
- [Configure test status, progress, and result charts](../../test/track-test-status.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)  
- [Set dashboard permissions](dashboard-permissions.md)  

## Samples
::: moniker range=">= azdevserver-2019"

- [Add a dashboard widget](../../extend/develop/add-dashboard-widget.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)  
- [Add a chart widget](../../extend/develop/add-chart.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [Add an Analytics widget](../extend-analytics/example-analytics-widget.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018" 

- [Add a dashboard widget](../../extend/develop/add-dashboard-widget.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)  
- [Add a chart widget](../../extend/develop/add-chart.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
::: moniker-end


::: moniker range=">= tfs-2015"  
## Reference 
- [Widget catalog](widget-catalog.md)  
- [Markdown guidance](../../project/wiki/markdown-guidance.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [Default permissions & access (Security)](charts-dashboard-permissions-access.md)
- [REST API, Dashboards](/rest/api/vsts/dashboard/)
::: moniker-end


## Resources 
::: moniker range=">= azdevserver-2019"  
- [Azure Boards](/azure/devops/boards/index)
- [Azure Test Plans](/azure/devops/test/index-tp)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)  
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"  
- [Agile](/azure/devops/boards/index)
- [Testing](/azure/devops/test/index-tp)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)  
::: moniker-end
