---
title: Sample reports and quick reference index for the Analytics service
titleSuffix: Azure DevOps  
description: An index of articles that explain how to generate results using OData backed Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.reviewer: pantal
ms.author: kaelli
author: KathrynEE
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

 
## Sample widgets and reports 

Analytics supports several widgets and built-in reports. In addition, we've created several sample reports to showcase how to query the data and build the reports of interest using Power BI. 


[!INCLUDE [temp](../../includes/version-selector-minimize.md)]


<!--- include built-in reports and widgets --> 

::: moniker range=">= azure-devops-2020"
---
:::row:::
   :::column span="2":::
      **Azure Boards**
   :::column-end:::
   :::column span="2":::
      **Azure Test Plans**  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      - [Bug trend](../powerbi/sample-boards-bugtrend.md) (Power BI)   
      - [Burndown/Burnup](../dashboards/configure-burndown-burnup-widgets.md) (widget)
      - [Cumulative Flow Diagram (CFD)](../dashboards/cumulative-flow.md) (Built-in report, widget)
      - [Cumulative Flow Diagram (CFD)](../powerbi/sample-boards-cfd.md) (Power BI)
      - [Feature progress](../powerbi/sample-boards-featureprogress.md) (Power BI)     
      - [Lead/Cycle Time](../dashboards/cycle-time-and-lead-time.md) (widget)
      - [Lead/Cycle Time](../powerbi/sample-boards-leadcycletime.md) (Power BI)  
      - [Open bugs](../powerbi/sample-boards-openbugs.md) (Power BI)   
      - [Rollup](../powerbi/sample-boards-rollup.md) (Power BI)     
      - [Work items and direct links](../powerbi/sample-boards-directlinks.md) (Power BI)   
      - [Release burndown](../powerbi/sample-boards-releaseburndown.md) (Power BI)
      - [Sprint burndown](../dashboards/configure-sprint-burndown.md) (Built-in report, widget)       
      - [Sprint burndown](../powerbi/sample-boards-sprintburndown.md) (Power BI)    
      - [Velocity](../dashboards/team-velocity.md) (Built-in report, widget) 
   :::column-end:::
   :::column span="2":::
      - [Chart for Test Plans](../../test/track-test-status.md) (widget)
      - [Configuration by outcome matrix](../powerbi/sample-test-plans-configuration-by-outcome.md) (Power BI)     
      - [Execution Trend](../powerbi/sample-test-plans-execution-trend.md) (Power BI)      
      - [Progress status](../powerbi/sample-test-plans-progress-status.md) (Power BI)     
      - [Requirements traceability](../../pipelines/test/requirements-traceability.md) (Built-in report)    
      - [Requirements tracking](../powerbi/sample-stories-overview.md) (Power BI)     
      - [Requirements tracking - Rollup](../powerbi/sample-stories-overview-rollup.md) (Power BI)  
      - [Test Progress](../../test/progress-report.md) (Built-in report)  
      - [Test Results Trend](../dashboards/configure-test-results-trend.md) (widget)   
      - [Test suites aggregated view](../powerbi/sample-test-plans-aggregate-data-level.md) (Power BI)      
      - [Tester by outcome matrix](../powerbi/sample-test-plans-tester-by-outcome.md) (Power BI)  
   :::column-end:::
:::row-end:::
---


:::row:::
   :::column span="2":::
      **Pipeline**
   :::column-end:::
   :::column span="2":::
      **Pipeline and test** 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      - [Outcome summary](../powerbi/sample-pipelines-outcome-summary.md) (Power BI)  
      - [Outcome summary for all pipelines](../powerbi/sample-pipelines-allpipelines.md) (Power BI)  
      - [Pass rate trend](../powerbi/sample-pipelines-pass-rate-trend.md) (Power BI)   
      - [Stage wise failures](../powerbi/sample-pipelines-stagewise-failures.md) (Power BI)    
      - [Duration](../powerbi/sample-pipelines-duration.md) (Power BI)    
      - [Duration trend](../powerbi/sample-pipelines-duration-trend.md) (Power BI)   
      - [Task duration](../powerbi/sample-pipelines-task-duration.md) (Power BI)   
      - [Task duration trend](../powerbi/sample-pipelines-task-duration-trend.md)  (Power BI)   
   :::column-end:::
   :::column span="2":::
      - [Test failures report](../../pipelines/reports/pipelinereport.md) (Built-in report)
      - [Test summary](../powerbi/sample-test-analytics-test-summary.md)  (Power BI)  
      - [Test summary trend](../powerbi/sample-test-summary-trend.md) (Power BI)   
      - [Failed tests](../powerbi/sample-test-analytics-failed-tests.md) (Power BI)   
      - [Flaky tests](../powerbi/sample-test-analytics-flaky-tests.md) (Power BI)   
      - [Test duration](../powerbi/sample-test-analytics-test-duration.md) (Power BI)   
      - [Test duration trend](../powerbi/sample-test-analyics-test-duration-trend.md) (Power BI)   
      - [Pass rate trend of a test](../powerbi/sample-test-analytics-pass-rate-trend-test.md) (Power BI)   
   :::column-end:::
:::row-end:::
---

::: moniker-end

::: moniker range="azure-devops-2019"

For Azure DevOps Server 2019, only Azure Boards work tracking data is available from Analytics. 

- [Bug trend](../powerbi/sample-boards-bugtrend.md) (Power BI)   
- [Burndown/Burnup](../dashboards/configure-burndown-burnup-widgets.md) (widget)
- [Cumulative Flow Diagram (CFD)](../dashboards/cumulative-flow.md) (Built-in report, widget)
- [Cumulative Flow Diagram (CFD)](../powerbi/sample-boards-cfd.md) (Power BI)
- [Feature progress](../powerbi/sample-boards-featureprogress.md) (Power BI)     
- [Lead/Cycle Time](../dashboards/cycle-time-and-lead-time.md) (widget)
- [Lead/Cycle Time](../powerbi/sample-boards-leadcycletime.md) (Power BI)  
- [Open bugs](../powerbi/sample-boards-openbugs.md) (Power BI)   
- [Rollup](../powerbi/sample-boards-rollup.md) (Power BI)     
- [Work items and direct links](../powerbi/sample-boards-directlinks.md) (Power BI)   
- [Release burndown](../powerbi/sample-boards-releaseburndown.md) (Power BI)
- [Sprint burndown](../dashboards/configure-sprint-burndown.md) (Built-in report, widget)       
- [Sprint burndown](../powerbi/sample-boards-sprintburndown.md) (Power BI)    
- [Velocity](../dashboards/team-velocity.md) (Built-in report, widget) 

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
   :::column span="":::
      - [Aggregate data, apply extension](aggregated-data-analytics.md#apply-extension)  
      - [Aggregate data, OData aggregation extension](aggregated-data-analytics.md#aggregation-extension)  
      - [Aggregate data, simple count](aggregated-data-analytics.md#simple-count)  
      - [Collection-scoped queries](account-scoped-queries.md#org-scope)  
      - [Construct a basic query](wit-analytics.md#basic-query)  
      - [Create an Analytics widget](example-analytics-widget.md)  
      <br/>
      - [Enforce server-side paging](wit-analytics.md#server-force-paging)  
      - [Filter aggregated results](aggregated-data-analytics.md#filter-aggregate)  
      - [Filter by Area Path](wit-analytics.md#filter-related-entities)  
      - [Filter by Changed Date](wit-analytics.md#date-range-queries)  
      - [Filter by Iteration Path](wit-analytics.md#filter-related-entities)  
      - [Filter data with query filter clause](wit-analytics.md#filter-data)  
      <br/>
      - [Generate multiple aggregations](aggregated-data-analytics.md#multiple-aggregate)  
      - [Generate calculated properties](aggregated-data-analytics.md#calculated-properties)  
      - [Generate a Cumulative Flow Diagram](aggregated-data-analytics.md#cfd)  
      - [Group results using `groupby`](aggregated-data-analytics.md#groupby)  
   :::column-end:::
   :::column span="":::
      - [Query a single entity set](wit-analytics.md#single-entity)  
      - [Query based on Iteration Path](analytics-recipes.md#iteration)  
      - [Query based on Area Path](analytics-recipes.md#area)  
      - [Query based on Changed Date](analytics-recipes.md#changed-date)  
      - [Query based on Tags](analytics-recipes.md#tag)  
      - [Query based on Team](analytics-recipes.md#team)  
      - [Query based on Was Ever](analytics-recipes.md#was-ever)  
      <br/>
      - [Query work item count](analytics-recipes.md#project-count)  
      - [Query for linked work items](work-item-links.md)  
      - [Query for non-hierarchical links](work-item-links.md)  
      - [Query metadata](../analytics/analytics-query-parts.md#query-metadata)  
      - [Query trend data](querying-for-trend-data.md#trend-data)  
      - [Query work item history](analytics-recipes.md#retrieve-work-item-history)  
   :::column-end:::
   :::column span="":::
      - [Organization-scoped queries](account-scoped-queries.md#org-scope)  
      - [Project-scoped queries](account-scoped-queries.md#project-scope)  
      - [Return data from related entities](wit-analytics.md#return-related)  
      - [Return parent of work items](account-scoped-queries.md#parent-work-items)  
      - [Return specific columns or fields](wit-analytics.md#select-columns)  
      - [Set permissions](../powerbi/analytics-security.md)  
      - [Sort results](wit-analytics.md#sort-results)  
      - [View OData query behind a report or widget](view-odata-query-analytics-report.md)
   :::column-end:::
:::row-end:::


## Reference

- [Entities and properties reference for Azure Boards](../analytics/entity-reference-boards.md) 
- [Analytics views dataset design](../powerbi/data-connector-dataset.md)  
- [Supported OData functions and clauses](odata-supported-features.md)  
- [OData API versioning](odata-api-version.md) 
- [Performance & latency](../powerbi/performance-latency.md)


## Troubleshooting

- [OData Analytics query guidelines for Azure DevOps](odata-query-guidelines.md) 
- [Resolve errors associated with an Analytics view](../powerbi/troubleshooting-views.md)

## Marketplace extensions

- [WIQL to OData](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata)
- [OData for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata)  


## Related articles

- [Power BI](../powerbi/overview.md)  
- [Dashboards, charts, reports, & widgets](../dashboards/overview.md)  
- [OData Extension for Data Aggregation Version 4.0](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)


