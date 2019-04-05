---
title: Quick reference index to tasks & concepts for using OData & the Analytics service
titleSuffix: Azure DevOps  
description: Supported tasks and concepts to generate results using OData backed Analytics Service for Azure DevOps 
ms.prod: devops
ms.technology: devops-analytics
ms.manager: jillfra
ms.reviewer: pantal
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= azure-devops-2019'
ms.date: 04/05/2019
---

# Quick reference to tasks and concepts for using OData and the Analytics service

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Use this quick reference to access information and sample queries using OData and the Analytics service.

## Supported tasks 

<table valign="top">
<tbody valign="top">
<tr>
<td width="50%"> 
<ul>
<li>[Aggregate data, apply extension](aggregated-data-analytics.md#apply-extension) </li>
<li>[Aggregate data, OData aggregation extension](aggregated-data-analytics.md#aggregation-extension) </li>
<li>[Aggregate data, simple count](aggregated-data-analytics.md#simple-count) </li>
<li>[Collection-scoped queries](account-scoped-queries.md#org-scope)</li>
<li>[Construct a basic query](wit-analytics.md#basic-query)</li>
<li>[Create an Analytics widget](example-analytics-widget.md)</li>
<br/>
<li>[Enforce server-side paging](wit-analytics.md#server-force-paging) 
<li>[Filter aggregated results](aggregated-data-analytics.md#filter-aggregate)</li>
<li>[Filter by Area Path](wit-analytics.md#filter-related-entities)</li>
<li>[Filter by Iteration Path](wit-analytics.md#filter-related-entities)</li>
<li>[Filter data with query filter clause](wit-analytics.md#filter-data)</li>
<br/>
<li>[Generate multiple aggregations](aggregated-data-analytics.md#multiple-aggregate) </li>
<li>[Generate calculated properties](aggregated-data-analytics.md#calculated-properties) </li>
<li>[Generate a Cumulative Flow Diagram](aggregated-data-analytics.md#cfd) </li>
<li>[Group results using `groupby`](aggregated-data-analytics.md#groupby) </li>
</ul>
</td>
<td width="50%">
<ul>
<li>[Query a single entity set](wit-analytics.md#single-entity)</li>
<li>[Query based on Iteration Path](analytics-recipes.md#iteration)</li>
<li>[Query based on Area Path](analytics-recipes.md#area)</li>
<li>[Query based on Tags](analytics-recipes.md#tag)</li>
<li>[Query based on Team](analytics-recipes.md#team)</li>
<li>[Query based on Was Ever](analytics-recipes.md#was-ever)</li>
<br/>
<li>[Query work item count](analytics-recipes.md#project-count)</li>
<li>[Query for linked work items](work-item-links.md) </li>
<li>[Query for non-hierarchical links](work-item-links.md)</li>
<li>[Query metadata](analytics-metadata.md#query-metadata)</li>
<li>[Query trend data](querying-for-trend-data.md#trend-data) </li>
<li>[Query work item history](analytics-recipes.md#history)</li>
<br/>
<li>[Organization-scoped queries](account-scoped-queries.md#org-scope)</li>
<li>[Project-scoped queries](account-scoped-queries.md#project-scope)</li>
<li>[Return data from related entities](wit-analytics.md#return-related)</li>
<li>[Return parent of work items](account-scoped-queries.md#parent-work-items)</li>
<li>[Return specific columns or fields](wit-analytics.md#select-columns)</li>
<li>[Set permissions](../powerbi/analytics-security.md)</li>
<li>[Sort results](wit-analytics.md#sort-results)</li>
</ul>
</td>
</tr>

</tbody>
</table>


## Key concepts 

<table valign="top">
<tbody valign="top">
<tr>
<td width="36%"> 
<ul>
<li>[Aggregation extensions support](aggregated-data-analytics.md#aggregation-extension) </li>
<li>[Analytics OData metadata](analytics-metadata.md)</li>
<li>[Analytics service](../powerbi/what-is-analytics.md)</li>
<li>[API versioning](odata-api-version.md)</li>
<li>[Batch endpoint for long queries](odata-query-guidelines.md#restrict-do-use-batch-endpoint)</li>
<br/>
<li>[Case insensitivity](odata-query-guidelines.md#perf-case-sensitive)</li>
<li>[Column limit](odata-query-guidelines.md#odata_query_result_width_invalid)</li>
<li>[Client-driven paging](odata-query-guidelines.md#perf-no-top-skip)</li>
<li>[Columnstore Index technology](odata-query-guidelines.md#odata_query_too_wide)</li>
<li>[Composite entities](data-model-analytics-service.md)</li>
<li>[Containers](analytics-metadata.md)</li>
<br/>
<li>[Data availability](../powerbi/data-available-in-analytics.md)</li>
<li>[Data latency](../powerbi/performance-latency.md)</li>
<li>[Data model](data-model-analytics-service.md)</li>
</ul>
</td>
<td width="32%">
<ul>
<li>[EntityTypes](analytics-metadata.md)</li>
<li>[Entity keys](analytics-metadata.md)</li>
<li>[Entity properties](data-model-analytics-service.md)</li>
<li>[Filter by dates](odata-query-guidelines.md#perf-filter-date)</li>
<li>[Filter by surrogate keys](odata-query-guidelines.md#perf-filter-surrogate)</li>
<li>[Filter by tags](odata-query-guidelines.md#question-41401)</li>
<br/>
<li>[Long queries guidance](odata-query-guidelines.md#perf-tags)</li>
<li>[Maximum size of returned data](odata-query-guidelines.md#perf-max-size)</li>
<li>[Metadata annotations](odata-query-guidelines.md#style-metadata)</li>
<li>[Metadata response](analytics-metadata.md#metadata-response)</li>
<li>[Navigational properties](analytics-metadata.md)</li>
<br/>
<li>[OData evaluation order](odata-query-guidelines.md#style-match-order)</li>
<li>[OData supported clauses](odata-supported-features.md#clauses)</li>
<li>[OData supported functions](odata-supported-features.md#supported-functions)</li>
<li>[OData unsupported functions](odata-supported-features.md#unsupported)</li>
</ul>
</td>
<td width="32%">
<ul>
<li>[Project-level security restrictions](account-scoped-queries.md#project-level-security)</li>
<li>[Parent/Child hierarchy](work-item-links.md)</li>
<br/>
<li>[Query guidelines](odata-query-guidelines.md)</li>
<li>[Query fails and timeouts](odata-query-guidelines.md#question-41065)</li>
<li>[Query restrictions](odata-query-guidelines.md#restrictions)</li>
<li>[Query performance](../powerbi/performance-latency.md)</li>
<li>[Query performance guidelines](odata-query-guidelines.md#performance-guidance)</li>
<li>[Query style guidelines](odata-query-guidelines.md#style)</li>
<br/>
<li>[Relationships](data-model-analytics-service.md)</li>
<li>[Server-driven paging](odata-query-guidelines.md#perf-paging)</li>
<li>[Snapshot entities](odata-query-guidelines.md#odata_snapshot_without_aggregation)</li>
<li>[Tag names](odata-query-guidelines.md#perf-tagnames)</li>
<li>[Time zone filter](odata-query-guidelines.md#restrict-time-zone)</li>
<li>[Weekly or monthly snapshots for trend queries](odata-query-guidelines.md#perf-snapshots)</li>
</ul>
</td>
</tr>

</tbody>
</table>
