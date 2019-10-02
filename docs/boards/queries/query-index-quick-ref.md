---
title: Look up definitions and sample queries 
titleSuffix: Azure Boards
description: Index to query operators, macros, and sample queries used to list work items for Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: boards-queries
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.topic: reference  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 10/02/2019
---

# Query quick reference 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Use this index to quickly access information on query editor tasks, operators available based on data type, and access sample queries. 

For the mechanics of constructing and saving queries, see [Use the query editor to list and manage queries](using-queries.md). If you find that your queries take too long to return results, review the [Guidance to create high-performing queries](high-performing-queries.md).  

For specific examples, choose one of the following articles listed under [Query samples for select fields](#samples).  

## Query tasks 

<table valign="top">
<tbody valign="top">
<tr>
<td width="33%"> 
<ul>
<li><a href="using-queries.md" data-raw-source="[Add a query](using-queries.md)">Add a query</a></li>
<li><a href="../../report/dashboards/charts.md" data-raw-source="[Add a query chart](../../report/dashboards/charts.md)">Add a query chart</a></li>
<li><a href="../../report/dashboards/add-charts-to-dashboard.md#work-item-query" data-raw-source="[Add a query to a dashboard](../../report/dashboards/add-charts-to-dashboard.md#work-item-query)">Add a query to a dashboard</a></li>
<li><a href="organize-queries.md" data-raw-source="[Add a query folder](organize-queries.md)">Add a query folder</a></li>
<li><a href="../backlogs/set-column-options.md" data-raw-source="[Add columns to query results](../backlogs/set-column-options.md)">Add columns to query results</a></li>
<li><a href="../backlogs/bulk-modify-work-items.md" data-raw-source="[Bulk modify query items](../backlogs/bulk-modify-work-items.md)">Bulk modify query items</a></li>
<li><a href="using-queries.md#define-clause" data-raw-source="[Define a clause](using-queries.md#define-clause)">Define a clause</a> 
<li><a href="view-run-query.md#view-rename-delete" data-raw-source="[Delete a query](view-run-query.md#view-rename-delete)">Delete a query</a></li>
<li><a href="using-queries.md#directs-link-query" data-raw-source="[Direct-links query](using-queries.md#directs-link-query)">Direct-links query</a></li>
<li><a href="using-queries.md" data-raw-source="[Edit a query](using-queries.md)">Edit a query</a></li>
</ul>
</td>
<td width="33%">
<ul>
<li><a href="view-run-query.md#email-query" data-raw-source="[Email a query](view-run-query.md#email-query)">Email a query</a></li>
<li><a href="using-queries.md#export-query" data-raw-source="[Export a query](using-queries.md#export-query)">Export a query</a></li>
<li><a href="view-run-query.md#favorite" data-raw-source="[Favorite a query](view-run-query.md#favorite)">Favorite a query</a></li>
<li><a href="../backlogs/filter-backlogs.md" data-raw-source="[Filter a query](../backlogs/filter-backlogs.md)">Filter a query</a></li>
<li><a href="using-queries.md#flat-list-query" data-raw-source="[Flat-list query](using-queries.md#flat-list-query)">Flat-list query</a></li>
<li><a href="using-queries.md#group-clauses" data-raw-source="[Group a clause](using-queries.md#group-clauses)">Group a clause</a></li>
<li><a href="using-queries.md" data-raw-source="[Open a query](using-queries.md)">Open a query</a></li>
<li><a href="using-queries.md#across-projects" data-raw-source="[Query across projects](using-queries.md#across-projects)">Query across projects</a></li>
<li><a href="view-run-query.md#view-rename-delete" data-raw-source="[Rename a query](view-run-query.md#view-rename-delete)">Rename a query</a></li>
<li><a href="using-queries.md" data-raw-source="[Run a query](using-queries.md)">Run a query</a></li>
</ul>
</td>
<td width="34%">
<ul>
<li><a href="using-queries.md#flat-list-query" data-raw-source="[Save a query](using-queries.md#flat-list-query)">Save a query</a></li>
<li><a href="set-query-permissions.md" data-raw-source="[Set query permissions](set-query-permissions.md)">Set query permissions</a></li>
<li><a href="using-queries.md#tree-query" data-raw-source="[Tree query](using-queries.md#tree-query)">Tree query</a></li>
<li><a href="triage-work-items.md" data-raw-source="[Triage query items](triage-work-items.md)">Triage query items</a></li>
<li><a href="view-run-query.md#view-rename-delete" data-raw-source="[View a query](view-run-query.md#view-rename-delete)">View a query</a></li>
<li><a href="link-type-reference.md" data-raw-source="[Understand link types](link-type-reference.md)">Understand link types</a></li>
<li><a href="using-queries.md#ungroup-clause" data-raw-source="[Ungroup a clause](using-queries.md#ungroup-clause)">Ungroup a clause</a> </li>
<li><a href="wiql-syntax.md" data-raw-source="[Work Item Query Language (WIQL)](wiql-syntax.md)">Work Item Query Language (WIQL)</a> </li>
</ul>
</td>
</tr>
</tbody>
</table>

<a id="fields-operators-macros" />

## Operators and macros supported for each data type

The following table indicates the operators and macros available for the different field data types. Each field is associated with a data type. You can find the data type listed in the descriptions of each field, which you can look up using the <a href="../work-items/guidance/work-item-field.md" data-raw-source="[Work item field index](../work-items/guidance/work-item-field.md)">Work item field index</a>. Operators available for defining a query clause depends on the data type of the field that you select. For more detailed descriptions of data types, operators, and macros, see <a href="query-operators-variables.md" data-raw-source="[Query fields, operators, and macros](query-operators-variables.md)">Query fields, operators, and macros</a>.

<table valign="top">
<thead>
<tr>
<th width="14%"><p>Data type</p></th>
<th width="46%"><p>Description</p></th>
<th width="40%"><p>Supported operators and macros</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
	<td><p><strong>Boolean <sup>1</sup></strong> </p></td>
    <td><p>Supports a True/False value. Query samples: <a href="query-by-workflow-changes.md" data-raw-source="[Query by assignment or workflow changes](query-by-workflow-changes.md)">Query by assignment or workflow changes</a>. </p></td>
    <td>= , &lt;&gt; , =[Field] , &lt;&gt;[Field]</td>
</tr>

<tr>
	<td><p><strong>DateTime</strong> </p></td>
    <td>A date field in which you can specify a variable, such as <strong><xref href="Today" data-throw-if-not-resolved="False" data-raw-source="@Today"></xref></strong> or <strong><xref href="Today-1" data-throw-if-not-resolved="False" data-raw-source="@Today-1"></xref></strong>, or a value, such as 1/1/2012. Enter dates in the Date Pattern you set for your personal profile. (See <a href="../../organizations/settings/set-your-preferences.md" data-raw-source="[Set personal preferences](../../organizations/settings/set-your-preferences.md)">Set personal preferences</a> for details.)<p> For query examples, see <a href="query-by-date-or-current-iteration.md" data-raw-source="[Query by date or@CurrentIteration](query-by-date-or-current-iteration.md)">Query by date or@CurrentIteration</a>. </td>
    <td>= , &lt;&gt; , &gt; , &lt; , &gt;= , &lt;= , =[Field], &lt;&gt;[Field], &gt;[Field], &lt;[Field], &gt;=[Field], &lt;=[Field], In, Not In, Was Ever  <p><strong>Macros</strong>: <strong><xref href="Today" data-throw-if-not-resolved="False" data-raw-source="@Today"></xref></strong>, valid with any <strong>DateTime</strong> field</p><p><strong>Additional macros supported on Azure DevOps 2019 Update 1 and later versions:</strong>:<br/><strong><xref href="StartOfDay" data-throw-if-not-resolved="False" data-raw-source="@StartOfDay"></xref></strong>, <strong><xref href="StartOfWeek" data-throw-if-not-resolved="False" data-raw-source="@StartOfWeek"></xref></strong>, <strong><xref href="StartOfMonth" data-throw-if-not-resolved="False" data-raw-source="@StartOfMonth"></xref></strong>, and <strong><xref href="StartOfYear" data-throw-if-not-resolved="False" data-raw-source="@StartOfYear"></xref></strong>, valid with any <strong>DateTime</strong> field</p></td> 
</tr>
<tr>
    <td><strong>Double</strong> </td>
    <td>Also referred to as <strong>Decimal</strong> and includes <strong>picklistDouble</strong><sup>2</sup>. A real number, such as 0.2 or 3.5.<p>Query samples: <a href="query-numeric.md" data-raw-source="[Query by numeric fields](query-numeric.md)">Query by numeric fields</a>. </p></td>
    <td>= , &lt;&gt; , &gt; , &lt; , &gt;= , &lt;= , =[Field], &lt;&gt;[Field], &gt;[Field], &lt;[Field], &gt;=[Field], &lt;=[Field], In, Not In, Was Ever</td>
</tr>
<tr>
	<td><strong>GUID</strong> </p></td>
	<td>A character string that represents a unique ID.</td>
    <td>= , &lt;&gt; , &gt; , &lt; , &gt;= , &lt;= , =[Field], &lt;&gt;[Field], &gt;[Field], &lt;[Field], &gt;=[Field], &lt;=[Field], In, Not In, Was Ever</td></tr>
<tr>
	<td><p><strong>History</strong> </p></td>
    <td>Custom formatted field used to track historical information and only assigned to the <strong>History</strong> field.<p>Query samples: <a href="history-and-auditing.md" data-raw-source="[History and auditing](history-and-auditing.md)">History and auditing</a>. </p></td>
	<td>Contains Words, Does Not Contain Words</td>
</tr>
<tr>
	<td><p> <strong>HTML</strong> </p></td>
    <td><p>Text strings that support formatted descriptions, such as the <strong>Description</strong> or <strong>Repro Steps</strong> fields. These fields are automatically indexed for full-text search when full-text search is available. Query samples: <a href="titles-ids-descriptions.md" data-raw-source="[Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md)">Query by titles, IDs, and rich-text fields</a>. </td>
	<td>Contains Words, Does Not Contain Words, Is Empty<sup>3</sup>, Is Not Empty<sup>3</sup></td>
</tr>
<tr>
    <td><strong>Identity</strong></td>
    <td>A String field that is used to hold a user identity.<p>Query samples: <a href="query-by-workflow-changes.md" data-raw-source="[Query by assignment or workflow changes](query-by-workflow-changes.md)">Query by assignment or workflow changes</a>.</p></td>
    <td>= , &lt;&gt; , &gt; , &lt; , &gt;= , &lt;= , =[Field], &lt;&gt;[Field], &gt;[Field], &lt;[Field], &gt;=[Field], &lt;=[Field], Contains, Does Not Contain, In, Not In, In Group, Not In Group, Was Ever
    <p><strong>Macros</strong>: <strong><xref href="me" data-throw-if-not-resolved="False" data-raw-source="@me"></xref></strong> valid for all Identity fields</p></td>
</tr>
<tr>
    <td><strong>Integer</strong></td>
    <td>Also includes <strong>picklistInteger</strong><sup>2</sup>. A 32-bit integer that is signed, such as 0, 1, 2, 34.<p>Query samples: <a href="query-numeric.md" data-raw-source="[Query by numeric fields](query-numeric.md)">Query by numeric fields</a></p></td>
    <td>= , &lt;&gt; , &gt; , &lt; , &gt;= , &lt;= , =[Field], &lt;&gt;[Field], &gt;[Field], &lt;[Field], &gt;=[Field], &lt;=[Field], In, Not In, Was Ever
    <p><strong>Macros</strong>: <strong><xref href="Follows" data-throw-if-not-resolved="False" data-raw-source="@Follows"></xref></strong><sup>4</sup>, <strong><xref href="MyRecentActivity" data-throw-if-not-resolved="False" data-raw-source="@MyRecentActivity"></xref></strong><sup>5</sup>, <strong><xref href="RecentMentions" data-throw-if-not-resolved="False" data-raw-source="@RecentMentions"></xref></strong><sup>5</sup>, <strong><xref href="RecentProjectActivity" data-throw-if-not-resolved="False" data-raw-source="@RecentProjectActivity"></xref></strong><sup>6</sup>, valid when used with the <strong>ID</strong> field </p>
	</td>
</tr>
<tr>
	<td><strong>PlainText</strong> </td>
    <td>Multi-line text strings that support long descriptions and are automatically indexed for full-text search, when full-text search is available.<p>Query samples: <a href="titles-ids-descriptions.md" data-raw-source="[Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md)">Query by titles, IDs, and rich-text fields</a>.</p></td>
	<td>Contains Words, Does Not Contain Words, Is Empty<sup>3</sup>, Is Not Empty<sup>3</sup></td>
</tr>
<tr>
	<td><strong>String</strong> </td>
    <td>Also includes <strong>picklistString</strong><sup>2</sup>. Short single-line text that can contain up to 255 Unicode characters. String fields support the <strong>Title</strong> field, picklists (drop-down menus), user account ids, <strong>Tags</strong>, and other fields. <p>Query samples: <a href="titles-ids-descriptions.md" data-raw-source="[Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md)">Query by titles, IDs, and rich-text fields</a> and <a href="planning-ranking-priorities.md" data-raw-source="[Query by picklist value](planning-ranking-priorities.md)">Query by picklist value</a>.</p></td>
    <td>= , &lt;&gt; , &gt; , &lt; , &gt;= , &lt;= , =[Field], &lt;&gt;[Field], &gt;[Field], &lt;[Field], &gt;=[Field], &lt;=[Field], Contains, Does Not Contain, In, Not In, In Group, Not In Group, Was Ever
    <p><strong>Macros</strong>: <strong>[Any]</strong>, valid with the <strong>Work Item Type</strong> field<br/>
    <strong><xref href="Project" data-throw-if-not-resolved="False" data-raw-source="@Project"></xref></strong><sup>7</sup>, valid with the <strong>Team Project</strong> field </p>
	</td>
</tr>
<tr>
	<td><p> <strong>TreePath</strong> </p></td>
    <td><p>Field type that supports the <strong>Area Path</strong> and <strong>Iteration Path</strong> fields. You define the tree structure for a project&mdash;<a href="../../organizations/settings/set-area-paths.md" data-raw-source="[area paths](../../organizations/settings/set-area-paths.md)">area paths</a> and <a href="../../organizations/settings/set-iteration-paths-sprints.md" data-raw-source="[iteration paths](../../organizations/settings/set-iteration-paths-sprints.md)">iteration paths</a>.</p> 
    <p>Query samples: <a href="query-by-area-iteration-path.md" data-raw-source="[Query by area or iteration path](query-by-area-iteration-path.md)">Query by area or iteration path</a> and <a href="query-by-area-iteration-path.md" data-raw-source="[Query by date or current iteration](query-by-area-iteration-path.md)">Query by date or current iteration</a>.</p></td>
	<td>Under, Not Under
    <p><strong>Macros</strong>: <strong><xref href="TeamAreas" data-throw-if-not-resolved="False" data-raw-source="@TeamAreas"></xref></strong><sup>8</sup>, valid with <strong>Area Path</strong> field<br/>
    <strong><xref href="CurrentIteration" data-throw-if-not-resolved="False" data-raw-source="@CurrentIteration"></xref></strong><sup>9</sup> and<strong><xref href="CurrentIteration" data-throw-if-not-resolved="False" data-raw-source="@CurrentIteration"></xref> +/- n</strong><sup>10</sup> valid with the <strong>Iteration Path</strong> field</p></td>
</tr>

</tbody>
</table>

 
#### Notes:  

1. The **Boolean** data type field is supported for TFS 2017 and later versions.  
2. The **picklist...** data types are only assigned to custom fields defined for an inherited process. The Inherited process model is only supported for Azure DevOps Services and Azure DevOps Server 2019. 
3. The **Is Empty** and **Is Not Empty** operators are supported for Azure DevOps Server 2019 RC2 and later versions.
4. The <strong>@Follows</strong> macro is supported for TFS 2017 and later versions.
5. The <strong>@MyRecentActivity</strong>, <strong>@RecentMentions</strong>, <strong>@RecentProjectActivity</strong> macros are supported for Azure Boards and TFS 2018.2 and later versions.
6. The <strong>@RecentProjectActivity</strong> macro is supported for Azure Boards only at this time.
7. The <strong>@Project</strong> macro is supported for TFS 2015.1 and later versions. The system automatically defaults to filtering based on the current project. To learn more, see [Query across projects](using-queries.md#across-projects). 
8. The <strong>@TeamAreas</strong> macro is supported for Azure Boards and Azure DevOps Server 2019 and later versions.
9. The <strong>@CurrentIteration</strong> macro is supported for TFS 2015 and later versions, and only when run from the web portal. 
11. The **@CurrentIteration +/- n** macro is supported for Azure Boards and Azure DevOps Server 2019 and later versions, and only when run from the web portal. 


<a id="samples' />

## Query samples for select fields 

The following table lists common query fields and their data type for which sample queries are provided. To determine the data type of a field, see [Work item fields and attributes, List field attributes](../work-items/work-item-fields.md).  

<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Acceptance Criteria](titles-ids-descriptions.md)">Acceptance Criteria</a> (HTML)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Activated By](query-by-workflow-changes.md)">Activated By</a> (Identity)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Activated Date](query-by-workflow-changes.md)">Activated Date</a> (DateTime)</li>
<li><a href="query-numeric.md" data-raw-source="[Activity](query-numeric.md)">Activity</a> (String)</li>
<li><a href="query-by-area-iteration-path.md" data-raw-source="[Area Path](query-by-area-iteration-path.md)">Area Path</a> (TreePath)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Assigned To](query-by-workflow-changes.md)">Assigned To</a> (Identity) </li>
<li><a href="linking-attachments.md" data-raw-source="[Attached File Count](linking-attachments.md)">Attached File Count</a> (Integer)</li>
<li><a href="build-test-integration.md" data-raw-source="[Automated Test Name](build-test-integration.md)">Automated Test Name</a> (String) </li>
<li><a href="build-test-integration.md" data-raw-source="[Automated Test Type](build-test-integration.md)">Automated Test Type</a> (String) </li>
</ul>
<h3>B</h3>
<ul>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Blocked](planning-ranking-priorities.md)">Blocked</a> (String)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Board Column](query-by-workflow-changes.md)">Board Column</a> (String)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Board Column Done](query-by-workflow-changes.md)">Board Column Done</a> (Boolean)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Board Lane](query-by-workflow-changes.md)">Board Lane</a> (String)</li>
<li><a href="query-numeric.md" data-raw-source="[Business Value](query-numeric.md)">Business Value</a> (String) </li>
</ul>
<h3>C</h3>
<ul>
<li><a href="history-and-auditing.md" data-raw-source="[Changed By](history-and-auditing.md)">Changed By</a> (Identity)</li>
<li><a href="history-and-auditing.md" data-raw-source="[Changed Date](history-and-auditing.md)">Changed Date</a> (DateTime)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Closed By](query-by-workflow-changes.md)">Closed By</a> (Identity)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Closed Date](query-by-workflow-changes.md)">Closed Date</a> (DateTime)</li>
<li><a href="linking-attachments.md" data-raw-source="[Comment Count](linking-attachments.md)">Comment Count</a><sup>1</sup> (Integer)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Committed](planning-ranking-priorities.md)">Committed</a> (String)</li>
<li><a href="query-numeric.md" data-raw-source="[Completed Work](query-numeric.md)">Completed Work</a> (Decimal)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Created By](query-by-workflow-changes.md)">Created By</a>  (Identity)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Created Date](query-by-workflow-changes.md)">Created Date</a> (DateTime)</li>
</ul>
</td>
<td width="33%">
<h3>D-E-F</h3>
<ul>
<li><a href="query-numeric.md" data-raw-source="[Discipline](query-numeric.md)">Discipline</a> (String)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Description](titles-ids-descriptions.md)">Description</a> (HTML)</li>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Due Date](query-by-date-or-current-iteration.md)">Due Date</a> (DateTime)</li>
<li><a href="query-numeric.md" data-raw-source="[Effort](query-numeric.md)">Effort</a> (Decimal)</li>
<li><a href="linking-attachments.md#external-link-count" data-raw-source="[External Link Count](linking-attachments.md#external-link-count)">External Link Count</a> (Integer)</li>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Finish Date](query-by-date-or-current-iteration.md)">Finish Date</a> (DateTime)</li>
<li><a href="build-test-integration.md" data-raw-source="[Found In Build](build-test-integration.md)">Found In Build</a> (String)</li>
</ul>
<h3>H-P</h3>
<ul>
<li><a href="history-and-auditing.md" data-raw-source="[History](history-and-auditing.md)">History</a> (History)</li>
<li><a href="linking-attachments.md#hyper-link-count" data-raw-source="[Hyperlink Count](linking-attachments.md#hyper-link-count)">Hyperlink Count</a> (Integer)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[ID](titles-ids-descriptions.md)">ID</a> (Integer)</li>
<li><a href="build-test-integration.md" data-raw-source="[Integrated in Build](build-test-integration.md)">Integrated in Build</a> (String)</li>
<li><a href="query-by-area-iteration-path.md" data-raw-source="[Iteration Path](query-by-area-iteration-path.md)">Iteration Path</a> (TreePath)</li>
<li><a href="linking-attachments.md" data-raw-source="[Link Comment](linking-attachments.md)">Link Comment</a> (Integer)</li>
<li><a href="query-by-area-iteration-path.md" data-raw-source="[Node Name](query-by-area-iteration-path.md)">Node Name</a> (String)</li>
<li><a href="query-numeric.md" data-raw-source="[Original Estimate](query-numeric.md)">Original Estimate</a> (Decimal)</li>
<li><a href="build-test-integration.md" data-raw-source="[Parameters](build-test-integration.md)">Parameters</a> (HTML)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Priority](planning-ranking-priorities.md)">Priority</a> (Integer) </li>
</ul>
<h3>R</h3>
<ul>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Reason](query-by-workflow-changes.md)">Reason</a> (String)</li>
<li><a href="linking-attachments.md" data-raw-source="[Related Link Count](linking-attachments.md)">Related Link Count</a> (Integer)</li>
<li><a href="query-numeric.md" data-raw-source="[Remaining Work](query-numeric.md)">Remaining Work</a> (Decimal)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Repro Steps](titles-ids-descriptions.md)">Repro Steps</a> (HTML)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Resolved By](query-by-workflow-changes.md)">Resolved By</a> (Identity)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Resolved Date](query-by-workflow-changes.md)">Resolved Date</a> (DateTime)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[Resolved Reason](query-by-workflow-changes.md)">Resolved Reason</a> (String)</li>
<li><a href="history-and-auditing.md" data-raw-source="[Rev](history-and-auditing.md)">Rev</a> (Integer)</li>
<li><a href="history-and-auditing.md" data-raw-source="[Revised Date](history-and-auditing.md)">Revised Date</a> (DateTime)</li>
</ul>
</td>
<td width="33%">
<h3>S</h3>
<ul>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Severity](planning-ranking-priorities.md)">Severity</a> (String)</li>
<li><a href="query-numeric.md" data-raw-source="[Size](query-numeric.md)">Size</a> (Decimal)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Stack Rank](planning-ranking-priorities.md)">Stack Rank</a> (Decimal)</li>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Start Date](query-by-date-or-current-iteration.md)">Start Date</a> (DateTime)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[State](query-by-workflow-changes.md)">State</a> (String)</li>
<li><a href="query-by-workflow-changes.md" data-raw-source="[State Change Date](query-by-workflow-changes.md)">State Change Date</a> (DateTime)</li>
<li><a href="build-test-integration.md" data-raw-source="[Steps](build-test-integration.md)">Steps</a> (HTML)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Steps to Reproduce](titles-ids-descriptions.md)">Steps to Reproduce</a> (HTML)</li>
<li><a href="query-numeric.md" data-raw-source="[Story Points](query-numeric.md)">Story Points</a> (Decimal)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[System Info](titles-ids-descriptions.md)">System Info</a> (HTML)</li>
</ul>
<h3>T</h3>
<ul>
<li><a href="add-tags-to-work-items.md" data-raw-source="[Tags](add-tags-to-work-items.md)">Tags</a> (String)</li>
<li><a href="query-by-date-or-current-iteration.md" data-raw-source="[Target Date](query-by-date-or-current-iteration.md)">Target Date</a> (DateTime)</li>
<li><a href="query-numeric.md" data-raw-source="[Task Type](query-numeric.md)">Task Type</a> (String)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Team Project](titles-ids-descriptions.md)">Team Project</a> (String) </li>
<li><a href="build-test-integration.md" data-raw-source="[Test Suite Type](build-test-integration.md)">Test Suite Type</a> (String)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Title](titles-ids-descriptions.md)">Title</a> (System)</li>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Triage](planning-ranking-priorities.md)">Triage</a> (String)</li>
</ul>
<h3>V-W</h3>
<ul>
<li><a href="planning-ranking-priorities.md" data-raw-source="[Value Area](planning-ranking-priorities.md)">Value Area</a> (String)</li>
<li><a href="titles-ids-descriptions.md" data-raw-source="[Work Item Type](titles-ids-descriptions.md)">Work Item Type</a> (String) </li> 
</ul>
</td>
</tr>
</tbody>
</table>


**Notes:**

1. The <strong>Comment Count</strong> field is supported for TFS 2017 and later versions. 


## Related articles

- [Query by field value comparisons](query-field-value.md) 
- [Guidance to create high-performing queries](high-performing-queries.md)
- [Use categories to group work item types](../../reference/xml/use-categories-to-group-work-item-types.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Define a managed query](using-queries.md) 
- [Work item field index](../work-items/guidance/work-item-field.md) 
