---
title: Quick reference index to tasks & concepts for using OData & Analytics
titleSuffix: Azure DevOps  
description: Supported tasks and concepts to generate results using OData backed Analytics for Azure DevOps 
ms.prod: devops
ms.technology: devops-analytics
ms.manager: jillfra
ms.reviewer: pantal
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= azure-devops-2019'
ms.date: 10/03/2019 
---

# Extend Analytics with OData (Preview) quick reference

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Using OData, you can directly query Analytics for Azure DevOps from a supported browser and then use the returned JSON data as you desire. Enterprise organizations can generate queries that span multiple projects or the entire organization in Azure DevOps.   

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Use this quick reference to access information and sample queries using OData and Analytics. You can also find additional OData query examples in the articles available from [Overview of sample reports using OData queries](../powerbi/sample-odata-overview.md).


## Supported tasks 

<table valign="top">
<tbody valign="top">
<tr>
<td width="50%"> 
<ul>
<li><a href="aggregated-data-analytics.md#apply-extension" data-raw-source="[Aggregate data, apply extension](aggregated-data-analytics.md#apply-extension)">Aggregate data, apply extension</a> </li>
<li><a href="aggregated-data-analytics.md#aggregation-extension" data-raw-source="[Aggregate data, OData aggregation extension](aggregated-data-analytics.md#aggregation-extension)">Aggregate data, OData aggregation extension</a> </li>
<li><a href="aggregated-data-analytics.md#simple-count" data-raw-source="[Aggregate data, simple count](aggregated-data-analytics.md#simple-count)">Aggregate data, simple count</a> </li>
<li><a href="account-scoped-queries.md#org-scope" data-raw-source="[Collection-scoped queries](account-scoped-queries.md#org-scope)">Collection-scoped queries</a></li>
<li><a href="wit-analytics.md#basic-query" data-raw-source="[Construct a basic query](wit-analytics.md#basic-query)">Construct a basic query</a></li>
<li><a href="example-analytics-widget.md" data-raw-source="[Create an Analytics widget](example-analytics-widget.md)">Create an Analytics widget</a></li>
<br/>
<li><a href="wit-analytics.md#server-force-paging" data-raw-source="[Enforce server-side paging](wit-analytics.md#server-force-paging)">Enforce server-side paging</a> 
<li><a href="aggregated-data-analytics.md#filter-aggregate" data-raw-source="[Filter aggregated results](aggregated-data-analytics.md#filter-aggregate)">Filter aggregated results</a></li>
<li><a href="wit-analytics.md#filter-related-entities" data-raw-source="[Filter by Area Path](wit-analytics.md#filter-related-entities)">Filter by Area Path</a></li>
<li><a href="wit-analytics.md#filter-related-entities" data-raw-source="[Filter by Iteration Path](wit-analytics.md#filter-related-entities)">Filter by Iteration Path</a></li>
<li><a href="wit-analytics.md#filter-data" data-raw-source="[Filter data with query filter clause](wit-analytics.md#filter-data)">Filter data with query filter clause</a></li>
<br/>
<li><a href="aggregated-data-analytics.md#multiple-aggregate" data-raw-source="[Generate multiple aggregations](aggregated-data-analytics.md#multiple-aggregate)">Generate multiple aggregations</a> </li>
<li><a href="aggregated-data-analytics.md#calculated-properties" data-raw-source="[Generate calculated properties](aggregated-data-analytics.md#calculated-properties)">Generate calculated properties</a> </li>
<li><a href="aggregated-data-analytics.md#cfd" data-raw-source="[Generate a Cumulative Flow Diagram](aggregated-data-analytics.md#cfd)">Generate a Cumulative Flow Diagram</a> </li>
<li><a href="aggregated-data-analytics.md#groupby" data-raw-source="[Group results using `groupby`](aggregated-data-analytics.md#groupby)">Group results using <code>groupby</code></a> </li>
</ul>
</td>
<td width="50%">
<ul>
<li><a href="wit-analytics.md#single-entity" data-raw-source="[Query a single entity set](wit-analytics.md#single-entity)">Query a single entity set</a></li>
<li><a href="analytics-recipes.md#iteration" data-raw-source="[Query based on Iteration Path](analytics-recipes.md#iteration)">Query based on Iteration Path</a></li>
<li><a href="analytics-recipes.md#area" data-raw-source="[Query based on Area Path](analytics-recipes.md#area)">Query based on Area Path</a></li>
<li><a href="analytics-recipes.md#tag" data-raw-source="[Query based on Tags](analytics-recipes.md#tag)">Query based on Tags</a></li>
<li><a href="analytics-recipes.md#team" data-raw-source="[Query based on Team](analytics-recipes.md#team)">Query based on Team</a></li>
<li><a href="analytics-recipes.md#was-ever" data-raw-source="[Query based on Was Ever](analytics-recipes.md#was-ever)">Query based on Was Ever</a></li>
<br/>
<li><a href="analytics-recipes.md#project-count" data-raw-source="[Query work item count](analytics-recipes.md#project-count)">Query work item count</a></li>
<li><a href="work-item-links.md" data-raw-source="[Query for linked work items](work-item-links.md)">Query for linked work items</a> </li>
<li><a href="work-item-links.md" data-raw-source="[Query for non-hierarchical links](work-item-links.md)">Query for non-hierarchical links</a></li>
<li><a href="analytics-metadata.md#query-metadata" data-raw-source="[Query metadata](analytics-metadata.md#query-metadata)">Query metadata</a></li>
<li><a href="querying-for-trend-data.md#trend-data" data-raw-source="[Query trend data](querying-for-trend-data.md#trend-data)">Query trend data</a> </li>
<li><a href="analytics-recipes.md#history" data-raw-source="[Query work item history](analytics-recipes.md#history)">Query work item history</a></li>
<br/>
<li><a href="account-scoped-queries.md#org-scope" data-raw-source="[Organization-scoped queries](account-scoped-queries.md#org-scope)">Organization-scoped queries</a></li>
<li><a href="account-scoped-queries.md#project-scope" data-raw-source="[Project-scoped queries](account-scoped-queries.md#project-scope)">Project-scoped queries</a></li>
<li><a href="wit-analytics.md#return-related" data-raw-source="[Return data from related entities](wit-analytics.md#return-related)">Return data from related entities</a></li>
<li><a href="account-scoped-queries.md#parent-work-items" data-raw-source="[Return parent of work items](account-scoped-queries.md#parent-work-items)">Return parent of work items</a></li>
<li><a href="wit-analytics.md#select-columns" data-raw-source="[Return specific columns or fields](wit-analytics.md#select-columns)">Return specific columns or fields</a></li>
<li><a href="../powerbi/analytics-security.md" data-raw-source="[Set permissions](../powerbi/analytics-security.md)">Set permissions</a></li>
<li><a href="wit-analytics.md#sort-results" data-raw-source="[Sort results](wit-analytics.md#sort-results)">Sort results</a></li>
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
<li><a href="aggregated-data-analytics.md#aggregation-extension" data-raw-source="[Aggregation extensions support](aggregated-data-analytics.md#aggregation-extension)">Aggregation extensions support</a> </li>
<li><a href="analytics-metadata.md" data-raw-source="[Analytics OData metadata](analytics-metadata.md)">Analytics OData metadata</a></li>
<li><a href="../powerbi/what-is-analytics.md" data-raw-source="[Analytics](../powerbi/what-is-analytics.md)">Analytics</a></li>
<li><a href="odata-api-version.md" data-raw-source="[API versioning](odata-api-version.md)">API versioning</a></li>
<li><a href="odata-query-guidelines.md#restrict-do-use-batch-endpoint" data-raw-source="[Batch endpoint for long queries](odata-query-guidelines.md#restrict-do-use-batch-endpoint)">Batch endpoint for long queries</a></li>
<br/>
<li><a href="odata-query-guidelines.md#perf-case-sensitive" data-raw-source="[Case insensitivity](odata-query-guidelines.md#perf-case-sensitive)">Case insensitivity</a></li>
<li><a href="odata-query-guidelines.md#odata_query_result_width_invalid" data-raw-source="[Column limit](odata-query-guidelines.md#odata_query_result_width_invalid)">Column limit</a></li>
<li><a href="odata-query-guidelines.md#perf-no-top-skip" data-raw-source="[Client-driven paging](odata-query-guidelines.md#perf-no-top-skip)">Client-driven paging</a></li>
<li><a href="odata-query-guidelines.md#odata_query_too_wide" data-raw-source="[Columnstore Index technology](odata-query-guidelines.md#odata_query_too_wide)">Columnstore Index technology</a></li>
<li><a href="data-model-analytics-service.md" data-raw-source="[Composite entities](data-model-analytics-service.md)">Composite entities</a></li>
<li><a href="analytics-metadata.md" data-raw-source="[Containers](analytics-metadata.md)">Containers</a></li>
<br/>
<li><a href="../powerbi/data-available-in-analytics.md" data-raw-source="[Data availability](../powerbi/data-available-in-analytics.md)">Data availability</a></li>
<li><a href="../powerbi/performance-latency.md" data-raw-source="[Data latency](../powerbi/performance-latency.md)">Data latency</a></li>
<li><a href="data-model-analytics-service.md" data-raw-source="[Data model](data-model-analytics-service.md)">Data model</a></li>
</ul>
</td>
<td width="32%">
<ul>
<li><a href="analytics-metadata.md" data-raw-source="[EntityTypes](analytics-metadata.md)">EntityTypes</a></li>
<li><a href="analytics-metadata.md" data-raw-source="[Entity keys](analytics-metadata.md)">Entity keys</a></li>
<li><a href="data-model-analytics-service.md" data-raw-source="[Entity properties](data-model-analytics-service.md)">Entity properties</a></li>
<li><a href="odata-query-guidelines.md#perf-filter-date" data-raw-source="[Filter by dates](odata-query-guidelines.md#perf-filter-date)">Filter by dates</a></li>
<li><a href="odata-query-guidelines.md#perf-filter-surrogate" data-raw-source="[Filter by surrogate keys](odata-query-guidelines.md#perf-filter-surrogate)">Filter by surrogate keys</a></li>
<li><a href="odata-query-guidelines.md#question-41401" data-raw-source="[Filter by tags](odata-query-guidelines.md#question-41401)">Filter by tags</a></li>
<br/>
<li><a href="odata-query-guidelines.md#perf-tags" data-raw-source="[Long queries guidance](odata-query-guidelines.md#perf-tags)">Long queries guidance</a></li>
<li><a href="odata-query-guidelines.md#perf-max-size" data-raw-source="[Maximum size of returned data](odata-query-guidelines.md#perf-max-size)">Maximum size of returned data</a></li>
<li><a href="odata-query-guidelines.md#style-metadata" data-raw-source="[Metadata annotations](odata-query-guidelines.md#style-metadata)">Metadata annotations</a></li>
<li><a href="analytics-metadata.md#metadata-response" data-raw-source="[Metadata response](analytics-metadata.md#metadata-response)">Metadata response</a></li>
<li><a href="analytics-metadata.md" data-raw-source="[Navigational properties](analytics-metadata.md)">Navigational properties</a></li>
<br/>
<li><a href="odata-query-guidelines.md#style-match-order" data-raw-source="[OData evaluation order](odata-query-guidelines.md#style-match-order)">OData evaluation order</a></li>
<li><a href="odata-supported-features.md#clauses" data-raw-source="[OData supported clauses](odata-supported-features.md#clauses)">OData supported clauses</a></li>
<li><a href="odata-supported-features.md#supported-functions" data-raw-source="[OData supported functions](odata-supported-features.md#supported-functions)">OData supported functions</a></li>
<li><a href="odata-supported-features.md#unsupported" data-raw-source="[OData unsupported functions](odata-supported-features.md#unsupported)">OData unsupported functions</a></li>
</ul>
</td>
<td width="32%">
<ul>
<li><a href="account-scoped-queries.md#project-level-security" data-raw-source="[Project-level security restrictions](account-scoped-queries.md#project-level-security)">Project-level security restrictions</a></li>
<li><a href="work-item-links.md" data-raw-source="[Parent/Child hierarchy](work-item-links.md)">Parent/Child hierarchy</a></li>
<br/>
<li><a href="odata-query-guidelines.md" data-raw-source="[Query guidelines](odata-query-guidelines.md)">Query guidelines</a></li>
<li><a href="odata-query-guidelines.md#question-41065" data-raw-source="[Query fails and timeouts](odata-query-guidelines.md#question-41065)">Query fails and timeouts</a></li>
<li><a href="odata-query-guidelines.md#restrictions" data-raw-source="[Query restrictions](odata-query-guidelines.md#restrictions)">Query restrictions</a></li>
<li><a href="../powerbi/performance-latency.md" data-raw-source="[Query performance](../powerbi/performance-latency.md)">Query performance</a></li>
<li><a href="odata-query-guidelines.md#performance-guidance" data-raw-source="[Query performance guidelines](odata-query-guidelines.md#performance-guidance)">Query performance guidelines</a></li>
<li><a href="odata-query-guidelines.md#style" data-raw-source="[Query style guidelines](odata-query-guidelines.md#style)">Query style guidelines</a></li>
<br/>
<li><a href="data-model-analytics-service.md" data-raw-source="[Relationships](data-model-analytics-service.md)">Relationships</a></li>
<li><a href="odata-query-guidelines.md#perf-paging" data-raw-source="[Server-driven paging](odata-query-guidelines.md#perf-paging)">Server-driven paging</a></li>
<li><a href="odata-query-guidelines.md#odata_snapshot_without_aggregation" data-raw-source="[Snapshot entities](odata-query-guidelines.md#odata_snapshot_without_aggregation)">Snapshot entities</a></li>
<li><a href="odata-query-guidelines.md#perf-tagnames" data-raw-source="[Tag names](odata-query-guidelines.md#perf-tagnames)">Tag names</a></li>
<li><a href="odata-query-guidelines.md#restrict-time-zone" data-raw-source="[Time zone filter](odata-query-guidelines.md#restrict-time-zone)">Time zone filter</a></li>
<li><a href="odata-query-guidelines.md#perf-snapshots" data-raw-source="[Weekly or monthly snapshots for trend queries](odata-query-guidelines.md#perf-snapshots)">Weekly or monthly snapshots for trend queries</a></li>
</ul>
</td>
</tr>
</tbody>
</table>



<!--- 
## Sample queries and reports  

<table valign="top">
<tbody valign="top">
<tr>
<td width="50%"> 
<ul>
<li><a href="../powerbi/sample-boards-bugtrend.md">Bug trends</a> </li>
<li><a href="../powerbi/sample-boards-bugtrend.md">Burndown based on iteration path</a> </li>
<li><a href="../powerbi/sample-boards-bugtrend.md">Burndown based on custom field</a> </li>

<li><a href="../powerbi/sample-boards-bugtrend.md">Burndown weekly snapshots</a> </li>
<li><a href="../powerbi/sample-boards-cfd.md">Cumulative Flow Diagram (CFD)</a> </li>
<li><a href="../powerbi/sample-boards-leadcycletime.md">Cycle time</a> </li>
<br/>
<li><a href="../powerbi/sample-boards-openbugs.md#filter-by-teams-rather-than-area-path">Filter by Team name</a> </li>
<li><a href="../powerbi/sample-boards-openbugs.md">Filter by Area Path</a> </li>
<li><a href="../powerbi/sample-boards-openbugs.md#user-stories-in-a-specific-iteration">Filter by Iteration</a> </li>
<li><a href="../powerbi/sample-boards-leadcycletime.md">Lead time</a> </li>
<li><a href="../powerbi/sample-boards-directlinks.md">List work items with direct links</a> </li>
<li><a href="../powerbi/sample-boards-directlinks.md#return-bugs-with-a-duplicate-link-to-another-bug">List bugs with duplicate links</a> </li>
<li><a href="../powerbi/sample-boards-directlinks.md#return-bugs-that-dont-have-a-duplicate-link-to-another-bug">List bugs without duplicate links</a> </li>
<li><a href="../powerbi/sample-boards-bugtrend.md#bug-trend-with-a-snapshot-on-the-first-of-every-month">Monthly snapshots</a> </li>
</ul>
</td>
<td width="50%">
<ul>
<li><a href="../powerbi/sample-boards-openbugs.md">Open Bugs</a> </li>
<li><a href="../powerbi/sample-boards-releaseburndown.md">Release burndown</a> </li>
<li><a href="../powerbi/sample-boards-rollup.md">Rollup Story Points for Features</a> </li>
<li><a href="../powerbi/sample-boards-rollup.md">Rollup count of User Stories for Features</a> </li>
<li><a href="../powerbi/sample-boards-rollup.md#rollup-story-points-to-epics">Rollup story points to Epics</a> </li>
<li><a href="../powerbi/sample-boards-rollup.md#rollup-tasks-remaining-work-to-features">Rollup Tasks Remaining Work to Features</a> </li>
<li><a href="../powerbi/sample-boards-rollup.md#rollup-bug-count-to-features">Rollup Bug count to Features</a> </li>
<li><a href="../powerbi/sample-boards-featureprogress.md">Rollup Feature progress by Story Points</a> </li>
<br/>
<li><a href="../powerbi/sample-boards-sprintburndown.md">Sprint burndown</a> </li>
<li><a href="../powerbi/sample-boards-sprintburndown.md#all-sprints-since-the-beginning-of-the-year">Sprint burndowns from start of year</a> </li>
<li><a href="../powerbi/sample-boards-teamslicer.md">Team slicer</a> </li>

</ul>
</td>
</tr>
</tbody>
</table>

-->


## Related articles
- [PowerBI](../powerbi/overview.md)  
- [Dashboards, charts, reports, & widgets](../dashboards/overview.md)  
- [OData Extension for Data Aggregation Version 4.0](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)


