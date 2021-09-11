---
title: Tasks & concepts using Data & Analytics
titleSuffix: Azure DevOps  
description: Supported tasks and concepts to generate results using OData backed Analytics for Azure DevOps 
ms.technology: devops-analytics
ms.reviewer: pantal
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= azure-devops-2019'
ms.date: 06/11/2021
---

# Extend Analytics with OData (Preview) quick reference

[!INCLUDE [temp](../includes/version-azure-devops.md)]

Using OData, you can directly query Analytics for Azure DevOps from a supported browser and then use the returned JSON data as you desire. Enterprise organizations can generate queries that span multiple projects or the entire organization in Azure DevOps.   

Use this quick reference to access information and sample queries using OData and Analytics. You can also find additional OData query examples in the articles available from [Overview of sample reports using OData queries](../powerbi/sample-odata-overview.md).


## Supported tasks 

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
   :::column-end:::
   :::column span="":::
      - [Generate multiple aggregations](aggregated-data-analytics.md#multiple-aggregate)  
      - [Generate calculated properties](aggregated-data-analytics.md#calculated-properties)  
      - [Generate a Cumulative Flow Diagram](aggregated-data-analytics.md#cfd)  
      - [Group results using `groupby`](aggregated-data-analytics.md#groupby)  
      <br/>
      - [Query a single entity set](wit-analytics.md#single-entity)  
      - [Query based on Iteration Path](analytics-recipes.md#iteration)  
      - [Query based on Area Path](analytics-recipes.md#area)  
      - [Query based on Tags](analytics-recipes.md#tag)  
      - [Query based on Team](analytics-recipes.md#team)  
      - [Query based on Was Ever](analytics-recipes.md#was-ever)  
   :::column-end:::
   :::column span="":::
      - [Query work item count](analytics-recipes.md#project-count)  
      - [Query for linked work items](work-item-links.md)  
      - [Query for non-hierarchical links](work-item-links.md)  
      - [Query metadata](analytics-metadata.md#query-metadata)  
      - [Query trend data](querying-for-trend-data.md#trend-data)  
      - [Query work item history](analytics-recipes.md#history)  
      <br/>
      - [Organization-scoped queries](account-scoped-queries.md#org-scope)  
      - [Project-scoped queries](account-scoped-queries.md#project-scope)  
      - [Return data from related entities](wit-analytics.md#return-related)  
      - [Return parent of work items](account-scoped-queries.md#parent-work-items)  
      - [Return specific columns or fields](wit-analytics.md#select-columns)  
      - [Set permissions](../powerbi/analytics-security.md)  
      - [Sort results](wit-analytics.md#sort-results)  
   :::column-end:::
:::row-end:::

 

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
      - [Metadata response](analytics-metadata.md#metadata-response)  
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

  


## Related articles
- [Power BI](../powerbi/overview.md)  
- [Dashboards, charts, reports, & widgets](../dashboards/overview.md)  
- [OData Extension for Data Aggregation Version 4.0](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)


