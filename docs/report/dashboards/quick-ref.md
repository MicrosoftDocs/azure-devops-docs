---
title: Quick reference to dashboards, charts, & widgets 
titleSuffix: Azure DevOps  
description: Index to dashboard, charts&, and widgets tasks for Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: dashboards
ms.assetid: 7BAD53A1-080E-40E8-8866-24EC00395D39
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2015'
ms.date: 07/14/2020
---

# Dashboards, reports, & widgets quick reference 

[!INCLUDE [temp](../includes/version-ts-tfs-2015-2016.md)] 

Use this index to quickly access information on tasks for configuring or accessing dashboards, charts, reports, and widgets.  

[!INCLUDE [temp](../../includes/version-selector-minimize.md)] 

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
<br/>
      - [Copy a widget to a dashboard](add-widget-to-dashboard.md#copy)"  
      - [Delete a dashboard](dashboards.md)  
      - [Delete a widget from a dashboard](add-widget-to-dashboard.md#move-delete)"  
      - [Edit a dashboard](dashboards.md)  
      - [Enable auto-refresh](dashboards.md)  
      - [Favorite a dashboard](dashboards.md)  
      - [Filter a dashboard](dashboards.md)  
<br/> 
      - [Move widgets on a dashboard](add-widget-to-dashboard.md#move-delete)  
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
<br/>
      - [Copy a widget to a dashboard](add-widget-to-dashboard.md#copy)"  
      - [Delete a dashboard](dashboards.md)  
      - [Delete a widget from a dashboard](add-widget-to-dashboard.md#move-delete)"  
      - [Edit a dashboard](dashboards.md)  
      - [Enable auto-refresh](dashboards.md)  
      - [Favorite a dashboard](dashboards.md)  
      - [Filter dashboard directory](dashboards.md)  
<br/> 
      - [Move widgets on a dashboard](add-widget-to-dashboard.md#move-delete)  
      - [Open a dashboard](dashboards.md)  
      - [Rename a dashboard](dashboards.md)  
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

::: moniker range=">= azure-devops-2019"

<table valign="top">
<tbody valign="top">
<tr>
<td width="50%">
<strong>Boards</strong>
<ul>
<li><a href="cumulative-flow.md#configure-built-in-cfd" data-raw-source="[Cumulative Flow Diagram (CFD)](cumulative-flow.md#configure-built-in-cfd)">Cumulative Flow Diagram (CFD)</a></li>
<li><a href="configure-sprint-burndown.md">Sprint burndown</a></li>
<li><a href="team-velocity.md" data-raw-source="[Velocity chart](team-velocity.md)">Velocity chart</a> </li>
</ul>
</td>
<td width="50%">
<strong>Pipelines</strong>
<ul>
<li><a href="../../pipelines/test/review-continuous-test-results-after-build.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json" data-raw-source="[Build test results](../../pipelines/test/review-continuous-test-results-after-build.md)">Build test results</a></li> 
<li><a href="../../pipelines/test/review-code-coverage-results.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json" data-raw-source="[Code coverage](../../pipelines/test/review-code-coverage-results.md)">Code coverage</a></li> 
<li><a href="../../pipelines/test/review-continuous-test-results-after-build.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json" data-raw-source="[Release test results](../../pipelines/test/review-continuous-test-results-after-build.md)">Release test results</a></li> 
<li><a href="../../pipelines/test/requirements-traceability.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json" data-raw-source="[Trace test requirements](../../pipelines/test/requirements-traceability.md)">Trace test requirements</a></li> 
<li><a href="../../pipelines/test/test-analytics.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json" data-raw-source="[Test analytics](../../pipelines/test/test-analytics.md)">Test analytics</a></li> 
<li><a href="../../pipelines/test/test-analytics.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json" data-raw-source="[Test failures](../../pipelines/test/test-analytics.md)">Test failures</a></li> 
<li><a href="../../pipelines/test/test-impact-analysis.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json" data-raw-source="[Test impact analysis](../../pipelines/test/test-impact-analysis.md)">Test impact analysis</a></li> 
</ul>
</td>
</tr>
</tbody>
</table>

---

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

In-context reports appear on specific service pages, such as **Work>Backlog**, **Work>Backlogs** and **Build and Release>Builds**. 

<table valign="top">
<tbody valign="top">
<tr>
<td width="50%"> 
<strong>Work</strong>
<ul>
<li><a href="cumulative-flow.md#configure-built-in-cfd" data-raw-source="[Cumulative Flow Diagram (CFD)](cumulative-flow.md#configure-built-in-cfd)">Cumulative Flow Diagram (CFD)</a></li>
<li><a href="configure-sprint-burndown.md">Sprint burndown</a></li>
<li><a href="team-velocity.md" data-raw-source="[Velocity chart)](team-velocity.md)">Velocity chart)</a> </li>
</ul>
<td width="50%">
<strong>Build &amp; Release</strong>
<ul>
<li><a href="../../pipelines/test/review-continuous-test-results-after-build.md">Build test results</a></li> 
<li><a href="../../pipelines/test/review-code-coverage-results.md">Code coverage</a></li> 
<li><a href="../../pipelines/test/review-continuous-test-results-after-build.md">Release test results</a></li> 
<li><a href="../../pipelines/test/requirements-traceability.md">Trace test requirements</a></li> 
<li><a href="../../pipelines/test/test-analytics.md">Test failures</a></li> 
<li><a href="../../pipelines/test/test-impact-analysis.md">Test impact analysis</a></li> 
</ul>
</td>
</tr>
</tbody>
</table>

---

::: moniker-end


::: moniker range=">= tfs-2015"

## Widgets 

Widgets provide a quick way to quickly add charts to dashboards. Many widgets are configurable or are scoped to a team or to the current user identity. For a description of each widget, see the [Widget catalog](widget-catalog.md). 

::: moniker-end

::: moniker range=">= azure-devops-2019"
- **Analytics**: indicates data is derived from [Analytics data](../powerbi/what-is-analytics.md)  
- **Project**: indicates you can select the project and team when configuring the widget
- **Team**: Indicates a widget that is scoped to a team  
- **User**: Indicates you widget that is scoped to a user identity 
::: moniker-end


::: moniker range=">=tfs-2015 <= tfs-2018"
- **Team**: Indicates a widget that is scoped to a team  
- **User**: Indicates you widget that is scoped to a user identity 
::: moniker-end

::: moniker range=">= azure-devops-2019"

<!--- capture which widgets can support cross project/cross-team data --> 

<table valign="top">
<tbody valign="top">
<tr>
<td width="44%"> 
<strong>Boards</strong>
<ul>
<li><a href="widget-catalog.md#assigned-to-me-widget" data-raw-source="[Assigned to me](widget-catalog.md#assigned-to-me-widget)">Assigned to me</a> (User)</li>
<li><a href="configure-burndown-burnup-widgets.md" data-raw-source="[Burndown chart](configure-burndown-burnup-widgets.md)">Burndown chart</a> (Analytics, Project, Team)</li>
<li><a href="configure-burndown-burnup-widgets.md" data-raw-source="[Burnup chart](configure-burndown-burnup-widgets.md)">Burnup chart</a> (Analytics, Project, Team)</li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li><a href="widget-catalog.md#cfd-widget" data-raw-source="[Cumulative flow diagram](widget-catalog.md#cfd-widget)">Cumulative flow diagram</a> (Analytics, Team)</li>
<li><a href="cycle-time-and-lead-time.md" data-raw-source="[Cycle time](cycle-time-and-lead-time.md)">Cycle time</a> (Analytics, Team)</li>
<li><a href="cycle-time-and-lead-time.md" data-raw-source="[Lead time](cycle-time-and-lead-time.md)">Lead time</a> (Analytics, Team)</li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a> (Team)</li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="configure-sprint-burndown.md">Sprint burndown</a> (Analytics, Team)</li>
<li><a href="configure-sprint-burndown.md">Sprint burndown (Legacy)</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a> (Team)</li>
<li><a href="team-velocity.md">Velocity</a> (Analytics, Team)</li>
<li><a href="widget-catalog.md#work-links-widget">Work links</a></li>
</ul>

</td>
<td width="28%">
<strong>Repos</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> (Team, User)</li>
</ul>
<br/>
<strong>Pipelines</strong>
<ul>

<li><a href="widget-catalog.md#build-history-widget" data-raw-source="[Chart for build history](widget-catalog.md#build-history-widget)">Chart for build history</a></li>
<li><a href="widget-catalog.md#deployment-status-widget" data-raw-source="[Deployment status](widget-catalog.md#deployment-status-widget)">Deployment status</a></li>
<li><a href="widget-catalog.md#release-definition-widget" data-raw-source="[Release pipeline overview](widget-catalog.md#release-definition-widget)">Release pipeline overview</a></li>
<li><a href="widget-catalog.md#requirements-quality-widget" data-raw-source="[Requirements quality](widget-catalog.md#requirements-quality-widget)">Requirements quality</a></li>
</ul>
<br/>
<strong>Test Plans</strong>
<ul>
<li><a href="widget-catalog.md#chart-test-plan-widget" data-raw-source="[Chart for test plans](widget-catalog.md#chart-test-plan-widget)">Chart for test plans</a></li>
<li><a href="widget-catalog.md#test-results-widget" data-raw-source="[Test results trend](widget-catalog.md#test-results-widget)">Test results trend</a></li>
<li><a href="widget-catalog.md#test-trend-results-advanced" data-raw-source="[Test results trend (Advanced)](widget-catalog.md#test-trend-results-advanced)">Test results trend (Advanced)</a> (Analytics)</li>
</ul>
</td>
<td width="28%">
<strong>Informational</strong>
<ul>
<li><a href="widget-catalog.md#embedded-webpage-widget" data-raw-source="[Embedded web page](widget-catalog.md#embedded-webpage-widget)">Embedded web page</a></li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a> (Team)</li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a> (Team)</li>
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
<td width="35%"> 
<strong>Work</strong>
<ul>
<li><a href="widget-catalog.md#assigned-to-me-widget" data-raw-source="[Assigned to me](widget-catalog.md#assigned-to-me-widget)">Assigned to me</a></li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li>Cumulative flow diagram</li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a> (Team)</li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="widget-catalog.md#sprint-burndown-widget" data-raw-source="[Sprint burndown](widget-catalog.md#sprint-burndown-widget)">Sprint burndown</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a> (Team)</li>
<li><a href="widget-catalog.md#work-links-widget" data-raw-source="[Work links](widget-catalog.md#work-links-widget)">Work links</a></li>
</ul>

</td>
<td width="33%">
<strong>Code</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> (Team)</li>
</ul>
<strong>Build and Release</strong>
<ul>
<li><a href="widget-catalog.md#build-history-widget" data-raw-source="[Chart for build history](widget-catalog.md#build-history-widget)">Chart for build history</a></li>
<li><a href="widget-catalog.md#deployment-status-widget" data-raw-source="[Deployment status](widget-catalog.md#deployment-status-widget)">Deployment status</a></li>
<li>Release pipeline overview</li>
<li><a href="widget-catalog.md#requirements-quality-widget" data-raw-source="[Requirements quality](widget-catalog.md#requirements-quality-widget)">Requirements quality</a></li>
</ul>
<strong>Test</strong>
<li><a href="widget-catalog.md#chart-test-plan-widget" data-raw-source="[Chart for test plans](widget-catalog.md#chart-test-plan-widget)">Chart for test plans</a></li>
<li><a href="widget-catalog.md#test-results-widget" data-raw-source="[Test results trend](widget-catalog.md#test-results-widget)">Test results trend</a></li>
<li>Test results trend (Advanced)</li>
</ul>
</td>
<td width="32%">
<strong>Informational</strong>
<ul>
<li><a href="widget-catalog.md#embedded-webpage-widget" data-raw-source="[Embedded web page](widget-catalog.md#embedded-webpage-widget)">Embedded web page</a></li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a> (Team)</li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a> (Team)</li>
<li>Team room (Team)</li>
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
<td width="35%"> 
<strong>Work</strong>
<ul>
<li><a href="widget-catalog.md#assigned-to-me-widget" data-raw-source="[Assigned to me](widget-catalog.md#assigned-to-me-widget)">Assigned to me</a> (User)</li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a> (Team)</li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="widget-catalog.md#sprint-burndown-widget" data-raw-source="[Sprint burndown](widget-catalog.md#sprint-burndown-widget)">Sprint burndown</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a> (Team)</li>
<li><a href="widget-catalog.md#work-links-widget" data-raw-source="[Work links](widget-catalog.md#work-links-widget)">Work links</a></li>
</ul>
</td>
<td width="33%">
<strong>Code</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> (Team, User)</li>
</ul>
<strong>Build and Release</strong>
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
<td width="32%">
<strong>Informational</strong>
<ul>
<li><a href="widget-catalog.md#embedded-webpage-widget" data-raw-source="[Embedded web page](widget-catalog.md#embedded-webpage-widget)">Embedded web page</a></li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a> (Team)</li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a> (Team)</li>
<li><a href="widget-catalog.md#team-room-widget" data-raw-source="[Team room](widget-catalog.md#team-room-widget)">Team room</a> (Team)</li>
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
<li>Assigned to me (User)</li>
<li><a href="widget-catalog.md#chart-wit-widget" data-raw-source="[Chart for work items](widget-catalog.md#chart-wit-widget)">Chart for work items</a></li>
<li><a href="widget-catalog.md#new-work-item-widget" data-raw-source="[New Work item](widget-catalog.md#new-work-item-widget)">New Work item</a> (Team)</li>
<li><a href="widget-catalog.md#query-results-widget" data-raw-source="[Query results](widget-catalog.md#query-results-widget)">Query results</a></li>
<li><a href="widget-catalog.md#query-tile-widget" data-raw-source="[Query tile](widget-catalog.md#query-tile-widget)">Query tile</a></li>
<li><a href="widget-catalog.md#sprint-burndown-widget" data-raw-source="[Sprint burndown](widget-catalog.md#sprint-burndown-widget)">Sprint burndown</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-capacity-widget" data-raw-source="[Sprint capacity](widget-catalog.md#sprint-capacity-widget)">Sprint capacity</a> (Team)</li>
<li><a href="widget-catalog.md#sprint-overview-widget" data-raw-source="[Sprint overview](widget-catalog.md#sprint-overview-widget)">Sprint overview</a> (Team)</li>
<li><a href="widget-catalog.md#work-links-widget" data-raw-source="[Work links](widget-catalog.md#work-links-widget)">Work links</a></li>
</ul>
</td>
<td width="33%">
<strong>Code</strong>
<ul>
<li><a href="widget-catalog.md#code-tile-widget" data-raw-source="[Code tile](widget-catalog.md#code-tile-widget)">Code tile</a></li>
<li><a href="widget-catalog.md#pull-request-widget" data-raw-source="[Pull request](widget-catalog.md#pull-request-widget)">Pull request</a> (Team, User)</li>
</ul>
<strong>Build</strong>
<ul>
<li><a href="widget-catalog.md#build-history-widget" data-raw-source="[Chart for build history](widget-catalog.md#build-history-widget)">Chart for build history</a></li>
</ul>
</td>
<td width="34%">
<strong>Other</strong>
<ul>
<li>Embedded web page</li>
<li><a href="widget-catalog.md#markdown-widget" data-raw-source="[Markdown](widget-catalog.md#markdown-widget)">Markdown</a></li>
<li><a href="widget-catalog.md#other-links-widget" data-raw-source="[Other links](widget-catalog.md#other-links-widget)">Other links</a> (Team)</li>
<li><a href="widget-catalog.md#team-members-widget" data-raw-source="[Team members](widget-catalog.md#team-members-widget)">Team members</a> (Team)</li>
<li><a href="widget-catalog.md#team-room-widget" data-raw-source="[Team room](widget-catalog.md#team-room-widget)">Team room</a> (Team)</li>
<li><a href="widget-catalog.md#visual-studio-widget" data-raw-source="[Visual Studio Shortcuts](widget-catalog.md#visual-studio-widget)">Visual Studio Shortcuts</a></li>
<li><a href="widget-catalog.md#how-to-widget" data-raw-source="[Welcome](widget-catalog.md#how-to-widget)">Welcome</a></li>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end

## Marketplace extensions

- [Reactivations Report](https://marketplace.visualstudio.com/items?itemName=EnterpriseServicesDevOpsTeam.ServicesBugReactivationReport&ssr=false#overview)