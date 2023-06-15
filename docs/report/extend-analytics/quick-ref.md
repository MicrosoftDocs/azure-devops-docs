---
title: Sample reports and quick reference index for the Analytics service
titleSuffix: Azure DevOps  
description: An index of articles that explain how to generate results using OData backed Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.reviewer: desalg
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Sample reports and quick reference index 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Use this quick reference to access information and sample queries using OData and Analytics.  
Using OData, you can directly query Analytics for Azure DevOps from a supported browser. Use the returned JSON data as you like. Enterprise organizations can generate queries that span multiple projects or an entire organization or project collection.   

## Get started 

If you're new to Analytics, we recommend that you review the following articles.  

- [Data available and versioning](../powerbi/data-available-in-analytics.md)
- [Query Analytics data or metadata](../analytics/analytics-query-parts.md)
- [Supported tools to use with Analytics](../analytics/analytics-query-tools.md)
- [Summary of best practices to use when querying Analytics](../analytics/analytics-best-practices.md)  
- [Permissions and prerequisites for working with Analytics](../analytics/analytics-permissions-prerequisites.md) 


[!INCLUDE [temp](../../includes/version-selector-minimize.md)]

Analytics supports several widgets and built-in reports. In addition, we've created several sample reports to showcase how to query the data and build the reports of interest using Power BI. 

## Azure Boards sample widgets and reports 
:::row:::
   :::column span="1":::
      **Widgets and built-in reports** 
      - [Cumulative Flow Diagram (CFD)](../dashboards/cumulative-flow.md)  
      - [Lead/Cycle Time](../dashboards/cycle-time-and-lead-time.md)  
      - [Sprint burndown](../dashboards/configure-sprint-burndown.md)  
      - [Velocity](../dashboards/team-velocity.md)
   :::column-end:::
   :::column span="1":::
      **Sample reports**
      - [Bug trend](../powerbi/sample-boards-bugtrend.md)   
      - [Cumulative Flow Diagram (CFD)](../powerbi/sample-boards-cfd.md) 
      - [Feature progress](../powerbi/sample-boards-featureprogress.md) 
      - [Lead/Cycle Time](../powerbi/sample-boards-leadcycletime.md)
      - [Open bugs](../powerbi/sample-boards-openbugs.md)
      - [Rollup](../powerbi/sample-boards-rollup.md) 
      - [Work items and direct links](../powerbi/sample-boards-directlinks.md)
      - [Release burndown](../powerbi/sample-boards-releaseburndown.md)  
      - [Sprint burndown](../powerbi/sample-boards-sprintburndown.md)
   :::column-end:::
:::row-end:::

::: moniker range=">= azure-devops-2020"

## Azure Pipelines sample widgets and reports 

- **Built-in reports**   
      - [Test failures report](../../pipelines/reports/pipelinereport.md)  

- **Sample reports**  
      - [Outcome summary](../powerbi/sample-pipelines-outcome-summary.md)  
      - [Outcome summary for all pipelines](../powerbi/sample-pipelines-allpipelines.md)  
      - [Pass rate trend](../powerbi/sample-pipelines-pass-rate-trend.md) 
      - [Stage wise failures](../powerbi/sample-pipelines-stagewise-failures.md)    
      - [Duration](../powerbi/sample-pipelines-duration.md)   
      - [Duration trend](../powerbi/sample-pipelines-duration-trend.md)  
      - [Task duration](../powerbi/sample-pipelines-task-duration.md)  
      - [Task duration trend](../powerbi/sample-pipelines-task-duration-trend.md)  
      - [Test summary](../powerbi/sample-test-analytics-test-summary.md)  
      - [Test summary trend](../powerbi/sample-test-summary-trend.md)  
      - [Failed tests](../powerbi/sample-test-analytics-failed-tests.md)    
      - [Flaky tests](../powerbi/sample-test-analytics-flaky-tests.md)  
      - [Test duration](../powerbi/sample-test-analytics-test-duration.md)  
      - [Test duration trend](../powerbi/sample-test-analyics-test-duration-trend.md)  
      - [Pass rate trend of a test](../powerbi/sample-test-analytics-pass-rate-trend-test.md)  


## Azure Test Plans sample widgets and reports 

- **Widgets and built-in reports**   
      - [Chart for Test Plans](../../test/track-test-status.md)
      - [Requirements traceability](../../pipelines/test/requirements-traceability.md) 
      - [Test Progress](../../test/progress-report.md)
      - [Test Results Trend](../dashboards/configure-test-results-trend.md) 

- **Sample reports**  
      - [Configuration by outcome matrix](../powerbi/sample-test-plans-configuration-by-outcome.md)   
      - [Execution Trend](../powerbi/sample-test-plans-execution-trend.md)    
      - [Progress status](../powerbi/sample-test-plans-progress-status.md)     
      - [Requirements tracking](../powerbi/sample-stories-overview.md)
      - [Requirements tracking - Rollup](../powerbi/sample-stories-overview-rollup.md) 
      - [Test suites aggregated view](../powerbi/sample-test-plans-aggregate-data-level.md)  
      - [Tester by outcome matrix](../powerbi/sample-test-plans-tester-by-outcome.md) 

::: moniker-end
  
## Key concepts 

:::row:::
   :::column span="":::
      - [Aggregation extensions support](aggregated-data-analytics.md#aggregation-extension)  
      - [Analytics OData metadata](analytics-metadata.md)  
      - [Analytics](../powerbi/what-is-analytics.md)  
      - [API versioning](odata-api-version.md)  
      - [Batch endpoint for long queries](odata-query-guidelines.md#restrict-do-use-batch-endpoint)  
      <br/>
      - [Case insensitivity](odata-query-guidelines.md#perf-case-sensitive)  
      - [Column limit](odata-query-guidelines.md#odata_query_result_width_invalid)  
      - [Client-driven paging](odata-query-guidelines.md#perf-no-top-skip)  
      - [Columnstore Index technology](odata-query-guidelines.md#odata_query_too_wide)  
      - [Composite entities](data-model-analytics-service.md)  
      - [Containers](analytics-metadata.md)  
      <br/>
      - [Data availability](../powerbi/data-available-in-analytics.md)  
      - [Data latency](../powerbi/performance-latency.md)  
      - [Data model](data-model-analytics-service.md)  
   :::column-end:::
   :::column span="":::
      - [EntityTypes](analytics-metadata.md)  
      - [Entity keys](analytics-metadata.md)  
      - [Entity properties](data-model-analytics-service.md)  
      - [Filter by dates](odata-query-guidelines.md#perf-filter-date)  
      - [Filter by surrogate keys](odata-query-guidelines.md#perf-filter-surrogate)  
      - [Filter by tags](odata-query-guidelines.md#question-41401)  
      <br/>
      - [Long queries guidance](odata-query-guidelines.md#perf-tags)  
      - [Maximum size of returned data](odata-query-guidelines.md#perf-max-size)  
      - [Metadata annotations](odata-query-guidelines.md#style-metadata)  
      - [Metadata response](../analytics/analytics-query-parts.md#metadata-response)  
      - [Navigational properties](analytics-metadata.md)  
      <br/>
      - [OData evaluation order](odata-query-guidelines.md#style-match-order)   
      - [OData supported clauses](odata-supported-features.md#clauses)  
      - [OData supported functions](odata-supported-features.md#supported-functions)  
      - [OData unsupported functions](odata-supported-features.md#unsupported)  
   :::column-end:::
   :::column span="":::
      - [Project-level security restrictions](account-scoped-queries.md#project-level-security)  
      - [Parent/Child hierarchy](work-item-links.md)  
      <br/>
      - [Query guidelines](odata-query-guidelines.md)  
      - [Query fails and timeouts](odata-query-guidelines.md#question-41065)  
      - [Query restrictions](odata-query-guidelines.md#restrictions)  
      - [Query performance](../powerbi/performance-latency.md)  
      - [Query performance guidelines](odata-query-guidelines.md#performance-guidance)   
      - [Query style guidelines](odata-query-guidelines.md#style)  
      <br/>
      - [Relationships](data-model-analytics-service.md)  
      - [Server-driven paging](odata-query-guidelines.md#perf-paging)  
      - [Snapshot entities](odata-query-guidelines.md#odata_snapshot_without_aggregation)  
      - [Tag names](odata-query-guidelines.md#perf-tagnames)  
      - [Time zone filter](odata-query-guidelines.md#restrict-time-zone)  
      - [Weekly or monthly snapshots for trend queries](odata-query-guidelines.md#perf-snapshots)  
   :::column-end:::
:::row-end:::


## Tasks

:::row:::
   :::column span="1":::
      - [Aggregate data, apply extension](aggregated-data-analytics.md#apply-extension)  
      - [Aggregate data, OData aggregation extension](aggregated-data-analytics.md#aggregation-extension)  
      - [Aggregate data, simple count](wit-analytics.md#return-count-items)  
      - [Collection-scoped queries](account-scoped-queries.md#org-scope)  
      - [Construct a basic query](../analytics/analytics-query-parts.md#construct-basic-query)  
      - [Create an Analytics widget](example-analytics-widget.md)  
      <br/>
      - [Enforce server-side paging](../analytics/analytics-query-parts.md#server-force-paging)  
      - [Filter aggregated results](aggregated-data-analytics.md#filter-aggregate)  
      - [Filter by Area Path](wit-analytics.md#filter-navigation-field)  
      - [Filter by Changed Date](wit-analytics.md#date-range-queries)  
      - [Filter by Identity field](wit-analytics.md#filter-navigation-field)  
      - [Filter by Iteration Path](wit-analytics.md#filter-navigation-field)  
      - [Filter data with query filter clause](wit-analytics.md#filter-data)  
      <br/>
      - [Generate multiple aggregations](aggregated-data-analytics.md#multiple-aggregate)  
      - [Generate calculated properties](aggregated-data-analytics.md#calculated-properties)  
      - [Generate a Cumulative Flow Diagram](aggregated-data-analytics.md#cfd)  
      - [Group results using `groupby`](aggregated-data-analytics.md#groupby)   
      <br/>
   :::column-end:::
   :::column span="1":::
      - [Query an entity set](../analytics/analytics-query-parts.md#query-entity-set)  
      - [Query based on Iteration Path](analytics-recipes.md#iteration)  
      - [Query based on Area Path](analytics-recipes.md#area)  
      - [Query based on Changed Date](analytics-recipes.md#changed-date)  
      - [Query based on Tags](analytics-recipes.md#tag)  
      - [Query based on Team](analytics-recipes.md#team)  
      - [Query based on Was Ever](analytics-recipes.md#was-ever)  
      <br/>
      - [Query work item count](wit-analytics.md#return-count-items) 
      - [Query for linked work items](work-item-links.md)  
      - [Query for non-hierarchical links](work-item-links.md)  
      - [Query metadata](../analytics/analytics-query-parts.md#query-metadata)  
      - [Query trend data](querying-for-trend-data.md#trend-data)  
      - [Query work item history](analytics-recipes.md#history)  
      <br/>
      - [Organization-scoped queries](account-scoped-queries.md#org-scope)  
      - [Project-scoped queries](account-scoped-queries.md#project-scope)   
      - [Return a count of work items](wit-analytics.md#return-count-items)  
      - [Return data from related entities](wit-analytics.md#return-related)  
      - [Return parent of work items](account-scoped-queries.md#parent-work-items)  
      - [Return specific properties or fields](wit-analytics.md#select-columns)  
      - [Set permissions](../powerbi/analytics-security.md)  
      - [Sort results](wit-analytics.md#sort-results)  
      - [View OData query behind a report or widget](view-odata-query-analytics-report.md)
   :::column-end:::
:::row-end:::


## Metadata reference

::: moniker range=">= azure-devops-2020"

- [Calendar date, Project, and User](../analytics/entity-reference-general.md) 
- [Azure Boards](../analytics/entity-reference-boards.md) 
- [Azure Pipelines](../analytics/entity-reference-pipelines.md) 
- [Test Plans](../analytics/entity-reference-test-plans.md) 
::: moniker-end


::: moniker range="azure-devops-2019"

- [Calendar date, Project, and User](../analytics/entity-reference-general.md) 
- [Azure Boards](../analytics/entity-reference-boards.md) 

::: moniker-end

## Data model reference and troubleshooting
- [Analytics views dataset design](../powerbi/data-connector-dataset.md)  
- [Supported OData functions and clauses](odata-supported-features.md)  
- [OData API versioning](odata-api-version.md) 
- [Performance & latency](../powerbi/performance-latency.md)
- [OData Analytics query guidelines for Azure DevOps](odata-query-guidelines.md) 
- [Resolve errors associated with an Analytics view](../powerbi/troubleshooting-views.md)

## Marketplace extensions

- [WIQL to OData](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata)
- [OData for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata)  


## Related articles

- [Power BI](../powerbi/overview.md)  
- [Dashboards, charts, reports, & widgets](../dashboards/overview.md)  
- [OData Extension for Data Aggregation Version 4.0](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)


