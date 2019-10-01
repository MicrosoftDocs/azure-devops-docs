---
title: Dashboards, reports, & widgets
titleSuffix: Azure DevOps
description: Learn about working with dashboards to monitor status and trends in Azure DevOps & Team Foundation Server   
ms.custom: dashboards
ms.assetid: CF7FBF52-AC95-4B0B-9FEC-D2EDD5583F9E
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: ">= tfs-2013"
ms.date: 04/05/2019
---

# Dashboards, Reports, & Widgets
 
[!INCLUDE [temp](../_shared/version-azure-devops-all.md)]

Gain visibility into your team's progress by adding one or more widgets or charts to your dashboard. Each team can tailor their dashboards to share information and monitor their progress.  

If you're just starting out, read [Add, rename, and delete dashboards](dashboards.md). If you're looking for instructions on a specific task, in context chart, widget, or report&mdash;review [Dashboards and widgets quick reference](quick-ref.md). To learn about our reporting solutions, read [Reporting Roadmap](../powerbi/reporting-roadmap.md).

[!INCLUDE [temp](../../_shared/version-selector-minimize.md)]

::: moniker range=">= tfs-2015"

## Widgets 

You add widgets to dashboards to quickly add charts and information to a dashboard. Here are the widgets that support the indicated service. 

::: moniker-end 


::: moniker range=">= azure-devops-2019"

<table valign="top">
<tbody valign="top">
<tr>
<td width="33%"> 
<strong>Boards</strong>
<ul>
<li><a href="widget-catalog.md#assigned-to-me-widget" data-raw-source="[Assigned to me](widget-catalog.md#assigned-to-me-widget)">Assigned to me</a></li>
<li><a href="configure-burndown-burnup-widgets.md" data-raw-source="[Burndown chart](configure-burndown-burnup-widgets.md)">Burndown chart</a></li>
<li><a href="configure-burndown-burnup-widgets.md" data-raw-source="[Burnup chart](configure-burndown-burnup-widgets.md)">Burnup chart</a> </li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li><a href="widget-catalog.md#cfd-widget" data-raw-source="[Cumulative flow diagram](widget-catalog.md#cfd-widget)">Cumulative flow diagram</a> </li>
<li><a href="cycle-time-and-lead-time.md" data-raw-source="[Cycle time](cycle-time-and-lead-time.md)">Cycle time</a></li>
<li><a href="cycle-time-and-lead-time.md" data-raw-source="[Lead time](cycle-time-and-lead-time.md)">Lead time</a> </li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a></li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="widget-catalog.md#sprint-burndown-widget" data-raw-source="[Sprint burndown](widget-catalog.md#sprint-burndown-widget)">Sprint burndown</a> </li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a></li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a> </li>
<li><a href="team-velocity.md" data-raw-source="[Velocity](team-velocity.md)">Velocity</a> </li>
<li><a href="widget-catalog.md#work-links-widget" data-raw-source="[Work links](widget-catalog.md#work-links-widget)">Work links</a></li>
</ul>
</td>
<td width="33%">
<strong>Repos</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> </li>
</ul>
<strong>Pipelines</strong>
<ul>
<li><a href="widget-catalog.md#build-history-widget" data-raw-source="[Chart for build history](widget-catalog.md#build-history-widget)">Chart for build history</a></li>
<li><a href="widget-catalog.md#deployment-status-widget" data-raw-source="[Deployment status](widget-catalog.md#deployment-status-widget)">Deployment status</a></li>
<li><a href="widget-catalog.md#release-definition-widget" data-raw-source="[Release pipeline overview](widget-catalog.md#release-definition-widget)">Release pipeline overview</a></li>
<li><a href="widget-catalog.md#requirements-quality-widget" data-raw-source="[Requirements quality](widget-catalog.md#requirements-quality-widget)">Requirements quality</a></li>
</ul>
<strong>Test Plans</strong>
<li><a href="widget-catalog.md#chart-test-plan-widget" data-raw-source="[Chart for test plans](widget-catalog.md#chart-test-plan-widget)">Chart for test plans</a></li>
<li><a href="widget-catalog.md#test-results-widget" data-raw-source="[Test results trend](widget-catalog.md#test-results-widget)">Test results trend</a></li>
<li><a href="widget-catalog.md#test-trend-results-advanced" data-raw-source="[Test results trend (Advanced)](widget-catalog.md#test-trend-results-advanced)">Test results trend (Advanced)</a></li>
</ul>
</td>
<td width="34%">
<strong>Informational</strong>
<ul>
<li><a href="widget-catalog.md#embedded-webpage-widget" data-raw-source="[Embedded web page](widget-catalog.md#embedded-webpage-widget)">Embedded web page</a></li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a> </li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a> </li>
<li><a href="widget-catalog.md#visual-studio-widget" data-raw-source="[Visual Studio Shortcuts](widget-catalog.md#visual-studio-widget)">Visual Studio Shortcuts</a></li>
<li><a href="widget-catalog.md#how-to-widget" data-raw-source="[Welcome](widget-catalog.md#how-to-widget)">Welcome</a></li>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end


::: moniker range="tfs-2018"

<table valign="top">
<tbody valign="top">
<tr>
<td width="33%"> 
<strong>Boards</strong>
<ul>
<li><a href="widget-catalog.md#assigned-to-me-widget" data-raw-source="[Assigned to me](widget-catalog.md#assigned-to-me-widget)">Assigned to me</a></li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li><a href="widget-catalog.md#cfd-widget" data-raw-source="[Cumulative flow diagram](widget-catalog.md#cfd-widget)">Cumulative flow diagram</a></li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a> </li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="widget-catalog.md#sprint-burndown-widget" data-raw-source="[Sprint burndown](widget-catalog.md#sprint-burndown-widget)">Sprint burndown</a> </li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a> </li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a></li>
<li><a href="widget-catalog.md#work-links-widget" data-raw-source="[Work links](widget-catalog.md#work-links-widget)">Work links</a></li>
</ul>
</td>
<td width="33%">
<strong>Repos</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> </li>
</ul>
<strong>Pipelines</strong>
<ul>
<li><a href="widget-catalog.md#build-history-widget" data-raw-source="[Chart for build history](widget-catalog.md#build-history-widget)">Chart for build history</a></li>
<li><a href="widget-catalog.md#deployment-status-widget" data-raw-source="[Deployment status](widget-catalog.md#deployment-status-widget)">Deployment status</a></li>
<li><a href="widget-catalog.md#release-definition-widget" data-raw-source="[Release pipeline overview](widget-catalog.md#release-definition-widget)">Release pipeline overview</a></li>
<li><a href="widget-catalog.md#requirements-quality-widget" data-raw-source="[Requirements quality](widget-catalog.md#requirements-quality-widget)">Requirements quality</a></li>
</ul>
<strong>Test Plans</strong>
<li><a href="widget-catalog.md#chart-test-plan-widget" data-raw-source="[Chart for test plans](widget-catalog.md#chart-test-plan-widget)">Chart for test plans</a></li>
<li><a href="widget-catalog.md#test-results-widget" data-raw-source="[Test results trend](widget-catalog.md#test-results-widget)">Test results trend</a></li>
<li><a href="widget-catalog.md#test-trend-results-advanced" data-raw-source="[Test results trend (Advanced)](widget-catalog.md#test-trend-results-advanced)">Test results trend (Advanced)</a></li>
</ul>
</td>
<td width="34%">
<strong>Informational</strong>
<ul>
<li><a href="widget-catalog.md#embedded-webpage-widget" data-raw-source="[Embedded web page](widget-catalog.md#embedded-webpage-widget)">Embedded web page</a></li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a> </li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a> </li>
<li><a href="widget-catalog.md#team-room-widget" data-raw-source="[Team room](widget-catalog.md#team-room-widget)">Team room</a></li>
<li><a href="widget-catalog.md#visual-studio-widget" data-raw-source="[Visual Studio Shortcuts](widget-catalog.md#visual-studio-widget)">Visual Studio Shortcuts</a></li>
<li><a href="widget-catalog.md#how-to-widget" data-raw-source="[Welcome](widget-catalog.md#how-to-widget)">Welcome</a></li>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end



::: moniker range="tfs-2017"

<table valign="top">
<tbody valign="top">
<tr>
<td width="33%"> 
<strong>Work</strong>
<ul>
<li><a href="widget-catalog.md#assigned-to-me-widget" data-raw-source="[Assigned to me](widget-catalog.md#assigned-to-me-widget)">Assigned to me</a> </li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a> </li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="widget-catalog.md#sprint-burndown-widget" data-raw-source="[Sprint burndown](widget-catalog.md#sprint-burndown-widget)">Sprint burndown</a> </li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a> </li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a></li>
<li><a href="widget-catalog.md#work-links-widget" data-raw-source="[Work links](widget-catalog.md#work-links-widget)">Work links</a></li>
</ul>

</td>
<td width="33%">
<strong>Code</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> </li>
</ul>
<strong>Build &amp; Release</strong>
<ul>
<li><a href="widget-catalog.md#build-history-widget" data-raw-source="[Chart for build history](widget-catalog.md#build-history-widget)">Chart for build history</a></li>
<li><a href="widget-catalog.md#deployment-status-widget" data-raw-source="[Deployment status](widget-catalog.md#deployment-status-widget)">Deployment status</a></li>
<li><a href="widget-catalog.md#requirements-quality-widget" data-raw-source="[Requirements quality](widget-catalog.md#requirements-quality-widget)">Requirements quality</a></li>
</ul>
<strong>Test</strong>
<ul>
<li><a href="widget-catalog.md#chart-test-plan-widget" data-raw-source="[Chart for test plans](widget-catalog.md#chart-test-plan-widget)">Chart for test plans</a></li>
<li><a href="widget-catalog.md#test-results-widget" data-raw-source="[Test results trend](widget-catalog.md#test-results-widget)">Test results trend</a></li>
</ul>
</td>
<td width="34%">
<strong>Informational</strong>
<ul>
<li><a href="widget-catalog.md#embedded-webpage-widget" data-raw-source="[Embedded web page](widget-catalog.md#embedded-webpage-widget)">Embedded web page</a></li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a> </li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a></li>
<li><a href="widget-catalog.md#team-room-widget" data-raw-source="[Team room](widget-catalog.md#team-room-widget)">Team room</a></li>
<li><a href="widget-catalog.md#visual-studio-widget" data-raw-source="[Visual Studio Shortcuts](widget-catalog.md#visual-studio-widget)">Visual Studio Shortcuts</a></li>
<li><a href="widget-catalog.md#how-to-widget" data-raw-source="[Welcome](widget-catalog.md#how-to-widget)">Welcome</a></li>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end


::: moniker range="tfs-2015"

<table valign="top">
<tbody valign="top">
<tr>
<td width="33%"> 
<strong>Work</strong>
<ul>
<li><a href="widget-catalog.md#assigned-to-me-widget" data-raw-source="[Assigned to me](widget-catalog.md#assigned-to-me-widget)">Assigned to me</a></li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a> </li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="widget-catalog.md#sprint-burndown-widget" data-raw-source="[Sprint burndown](widget-catalog.md#sprint-burndown-widget)">Sprint burndown</a> </li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a> </li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a> </li>
<li><a href="widget-catalog.md#work-links-widget" data-raw-source="[Work links](widget-catalog.md#work-links-widget)">Work links</a></li>
</ul>
</td>
<td width="33%">
<strong>Code</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> </li>
</ul>
<strong>Build</strong>
<ul>
<li><a href="widget-catalog.md#build-history-widget" data-raw-source="[Chart for build history](widget-catalog.md#build-history-widget)">Chart for build history</a></li>
</ul>
<br/>
</td>
<td width="34%">
<strong>Other</strong>
<ul>
<li><a href="widget-catalog.md#embedded-webpage-widget" data-raw-source="[Embedded web page](widget-catalog.md#embedded-webpage-widget)">Embedded web page</a></li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a></li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a> </li>
<li><a href="widget-catalog.md#team-room-widget" data-raw-source="[Team room](widget-catalog.md#team-room-widget)">Team room</a> </li>
<li><a href="widget-catalog.md#visual-studio-widget" data-raw-source="[Visual Studio Shortcuts](widget-catalog.md#visual-studio-widget)">Visual Studio Shortcuts</a></li>
<li><a href="widget-catalog.md#how-to-widget" data-raw-source="[Welcome](widget-catalog.md#how-to-widget)">Welcome</a></li>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end

---

## 5-Minute Quickstarts  

::: moniker range=">= tfs-2015"  
- [Add, rename, and delete dashboards](dashboards.md)  
- [Add charts and widgets to a dashboard](add-widget-to-dashboard.md)  
- [Add Markdown to a dashboard](add-markdown-to-dashboard.md)   
::: moniker-end


::: moniker range="tfs-2013"  
- [Pin items to a team dashboard](team-dashboard.md)  
- [Add charts to a dashboard](add-charts-to-dashboard.md)   
::: moniker-end


## Step-by-Step Tutorials

::: moniker range=">= azure-devops-2019"

- [Configure a Cumulative Flow chart](cumulative-flow.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)
- [Configure a Lead Time or Cycle Time widget](cycle-time-and-lead-time.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)
- [Configure the Velocity widget](team-velocity.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)
- [View the built-in velocity chart](team-velocity.md)
- [Work with sprint burndown](../../boards/sprints/sprint-burndown.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)

::: moniker-end

::: moniker range="<= tfs-2018" 

- [Configure a Cumulative Flow chart](cumulative-flow.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [View the built-in velocity chart](team-velocity.md)
- [Work with sprint burndown](../../boards/sprints/sprint-burndown.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)

::: moniker-end


## Concepts

- [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)
- [Velocity metrics and usage guidance](velocity-guidance.md)
- [Burndown guidance](burndown-guidance.md?toc=/azure/devops/report/dashboards/toc.json&bc=/azure/devops/report/dashboards/breadcrumb/toc.json)


## How-to Guides

::: moniker range=">= tfs-2013 <= tfs-2018 || azure-devops"
- [Configure work item query-based charts](charts.md)
- [Configure test status, progress, and result charts](../../test/track-test-status.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)  

::: moniker-end


::: moniker range="azure-devops-2019"
- [Configure work item query-based charts](charts.md)
- [Configure test status, progress, and result charts](../../test/track-test-status.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)  
- [Enable or install Analytics](analytics-extension.md)  

::: moniker-end



::: moniker range=">= tfs-2017"

## Samples

- [Add a dashboard widget](../../extend/develop/add-dashboard-widget.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)  
- [Add a chart widget](../../extend/develop/add-chart.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)

::: moniker-end

::: moniker range=">= tfs-2015"  

## Reference 

- [Widget catalog](widget-catalog.md)  
- [Markdown guidance](../../project/wiki/markdown-guidance.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)
- [Default permissions & access (Security)](charts-dashboard-permissions-access.md)

::: moniker-end

## Resources 

::: moniker range=">= azure-devops-2019"  
- [Power BI Integration](../powerbi/index.md)
- [Extend Analytics with OData](../extend-analytics/index.md)
- [Azure Pipelines](../../pipelines/index.yml)
- [Azure Boards](/azure/devops/boards/index)
- [Azure Test Plans](/azure/devops/test/index-tp)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)  

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"  

- [Agile](/azure/devops/boards/index)
- [Testing](/azure/devops/test/index-tp)
- [Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)  

::: moniker-end

::: moniker range="tfs-2013"  

- [Agile](/azure/devops/boards/index)
- [Testing](/azure/devops/test/index-tp)

::: moniker-end






