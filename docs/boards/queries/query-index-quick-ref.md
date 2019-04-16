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
ms.date: 02/04/2019
---

# Query quick reference 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Use this index to quickly access information on query editor tasks, operators available based on data type, and access sample queries. 

## Query tasks 

<table valign="top">
<tbody valign="top">
<tr>
<td width="33%"> 
<ul>
<li>[Add a query](using-queries.md)</li>
<li>[Add a query chart](../../report/dashboards/charts.md)</li>
<li>[Add a query to a dashboard](../../report/dashboards/add-charts-to-dashboard.md#work-item-query)</li>
<li>[Add a query folder](organize-queries.md)</li>
<li>[Add columns to query results](../backlogs/set-column-options.md)</li>
<li>[Bulk modify query items](../backlogs/bulk-modify-work-items.md)</li>
<li>[Define a clause](using-queries.md#define-clause) 
<li>[Delete a query](view-run-query.md#view-rename-delete)</li>
<li>[Direct-links query](using-queries.md#directs-link-query)</li>
<li>[Edit a query](using-queries.md)</li>

</ul>
</td>
<td width="33%">
<ul>
<li>[Email a query](view-run-query.md#email-query)</li>
<li>[Export a query](using-queries.md#export-query)</li>
<li>[Favorite a query](view-run-query.md#favorite)</li>
<li>[Filter a query](../backlogs/filter-backlogs.md)</li>
<li>[Flat-list query](using-queries.md#flat-list-query)</li>
<li>[Group a clause](using-queries.md#group-clauses)</li>
<li>[Open a query](using-queries.md)</li>
<li>[Query across projects](using-queries.md#across-projects)</li>
<li>[Rename a query](view-run-query.md#view-rename-delete)</li>
<li>[Run a query](using-queries.md)</li>
</ul>
</td>
<td width="34%">
<ul>

<li>[Save a query](using-queries.md#flat-list-query)</li>
<li>[Set query permissions](set-query-permissions.md)</li>
<li>[Tree query](using-queries.md#tree-query)</li>
<li>[Triage query items](triage-work-items.md)</li>
<li>[View a query](view-run-query.md#view-rename-delete)</li>
<li>[Understand link types](link-type-reference.md)</li>
<li>[Ungroup a clause](using-queries.md#ungroup-clause) </li>
<li>[Work Item Query Language (WIQL)](wiql-syntax.md) </li>
</ul>
</td>
</tr>

</tbody>
</table>

<a id="fields-operators-macros" />
## Operators and macros supported for each data type
The following table indicates the operators and macros available for the different field data types. Each field is associated with a data type. You can find the data type listed in the descriptions of each field, which you can look up using the [Work item field index](../work-items/guidance/work-item-field.md). Operators available for defining a query clause depends on the data type of the field that you select. For more detailed descriptions of data types, operators, and macros, see [Query fields, operators, and macros](query-operators-variables.md).

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
	<td><p>Supports a True/False value. Query samples: [Query by assignment or workflow changes](query-by-workflow-changes.md). </p></td>
	<td>= , <> , =[Field] , <>[Field]</td>
</tr>

<tr>
	<td><p><strong>DateTime</strong> </p></td>
	<td>A date field in which you can specify a variable, such as <strong>@Today</strong> or <strong>@Today-1</strong>, or a value, such as 1/1/2012. Enter dates in the Date Pattern you set for your personal profile. (See [Set personal preferences](../../organizations/settings/set-your-preferences.md) for details.)<p> For query examples, see [Query by date or@CurrentIteration](query-by-date-or-current-iteration.md). </td>
	<td>= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever	<p>**Macros**: **@Today**, valid with any **DateTime** field</p><p>**Additional macros supported on Azure DevOps Services**: <strong>@StartOfDay</strong>, <strong>@StartOfWeek</strong>, <strong>@StartOfMonth</strong>, and <strong>@StartOfYear</strong>, valid with any **DateTime** field</p></td> 
</tr>
<tr>
	<td>**Double** </td>
	<td>Also referred to as **Decimal** and includes <strong>picklistDouble</strong><sup>2</sup>. A real number, such as 0.2 or 3.5.<p>Query samples: [Query by numeric fields](query-numeric.md). </p></td>
	<td>= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever</td>
</tr>
<tr>
	<td><strong>GUID</strong> </p></td>
	<td>A character string that represents a unique ID.</td>
	<td>= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever</td></tr>
<tr>
	<td><p><strong>History</strong> </p></td>
	<td>Custom formatted field used to track historical information and only assigned to the <strong>History</strong> field.<p>Query samples: [History and auditing](history-and-auditing.md). </p></td>
	<td>Contains Words, Does Not Contain Words</td>
</tr>
<tr>
	<td><p> <strong>HTML</strong> </p></td>
	<td><p>Text strings that support formatted descriptions, such as the <strong>Description</strong> or <strong>Repro Steps</strong> fields. These fields are automatically indexed for full-text search when full-text search is available. Query samples: [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md). </td>
	<td>Contains Words, Does Not Contain Words, Is Empty<sup>3</sup>, Is Not Empty<sup>3</sup></td>
</tr>
<tr>
	<td><p><strong>History</strong> </p></td>
	<td>Custom formatted field used to track historical information associated with the <strong>History</strong> field.Query samples: [History and auditing](history-and-auditing.md). </td>
	<td>= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever</td>
</tr>
<tr>
	<td>**Identity**</td>
	<td>A String field that is used to hold a user identity.<p>Query samples: [Query by assignment or workflow changes](query-by-workflow-changes.md).</p></td>
	<td>= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], Contains, Does Not Contain, In, Not In, In Group, Not In Group, Was Ever
	<p>**Macros**: **@me** valid for all Identity fields</p></td>
</tr>
<tr>
	<td>**Integer**</td>
	<td>Also includes <strong>picklistInteger</strong><sup>2</sup>. A 32-bit integer that is signed, such as 0, 1, 2, 34.<p>Query samples: [Query by numeric fields](query-numeric.md)</p></td>
	<td>= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever
	<p>**Macros**: **@Follows**<sup>4</sup>, **@MyRecentActivity**<sup>5</sup>, **@RecentMentions**<sup>5</sup>, **@RecentProjectActivity**<sup>6</sup>, valid when used with the **ID** field </p>
	</td>
</tr>
<tr>
	<td><strong>PlainText</strong> </td>
	<td>Multi-line text strings that support long descriptions and are automatically indexed for full-text search, when full-text search is available.<p>Query samples: [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md).</p></td>
	<td>Contains Words, Does Not Contain Words, Is Empty<sup>3</sup>, Is Not Empty<sup>3</sup></td>
</tr>
<tr>
	<td><strong>String</strong> </td>
	<td>Also includes <strong>picklistString</strong><sup>2</sup>. Short single-line text that can contain up to 255 Unicode characters. String fields support the **Title** field, picklists (drop-down menus), user account ids, **Tags**, and other fields. <p>Query samples: [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md) and [Query by picklist value](planning-ranking-priorities.md).</p></td>
	<td>= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], Contains, Does Not Contain, In, Not In, In Group, Not In Group, Was Ever
	<p>**Macros**: **[Any]**, valid with the **Work Item Type** field<br/>
	**@Project**<sup>7</sup>, valid with the **Team Project** field </p>
	</td>
</tr>
<tr>
	<td><p> <strong>TreePath</strong> </p></td>
	<td><p>Field type that supports the **Area Path** and **Iteration Path** fields. You define the tree structure for a project&mdash;[area paths](../../organizations/settings/set-area-paths.md) and [iteration paths](../../organizations/settings/set-iteration-paths-sprints.md).</p> 
	<p>Query samples: [Query by area or iteration path](query-by-area-iteration-path.md) and [Query by date or current iteration](query-by-area-iteration-path.md).</p></td>
	<td>Under, Not Under
	<p>**Macros**: **@TeamAreas**<sup>8</sup>, valid with **Area Path** field<br/>
	**@CurrentIteration**<sup>9</sup> and**@CurrentIteration +/- n**<sup>10</sup> valid with the **Iteration Path** field</p></td>
</tr>

</tbody>
</table>

 
####Notes:
1. The **Boolean** data type field is supported for TFS 2017 and later versions.  
2. The **picklist...** data types are only assigned to custom fields defined for an inherited process. The Inherited process model is only supported for Azure DevOps Services and Azure DevOps Server 2019. 
3. The **Is Empty** and **Is Not Empty** operators are supported for Azure DevOps Server 2019 RC2 and later versions.
4. The **@Follows** macro is supported for TFS 2017 and later versions.
5. The **@MyRecentActivity**, **@RecentMentions**, **@RecentProjectActivity** macros are supported for Azure Boards and TFS 2018.2 and later versions.
6. The **@RecentProjectActivity** macro is supported for Azure Boards only at this time.
7. The **@Project** macro is supported for TFS 2015.1 and later versions. The system automatically defaults to filtering based on the current project. To learn more, see [Query across projects](using-queries.md#across-projects). 
8. The **@TeamAreas** macro is supported for Azure Boards and Azure DevOps Server 2019 and later versions.
9. The **@CurrentIteration** macro is supported for TFS 2015 and later versions, and only when run from the web portal. 
10. The **@CurrentIteration +/- n** macro is supported for Azure Boards and Azure DevOps Server 2019 and later versions, and only when run from the web portal. 





## Query samples for select fields 

The following table lists common query fields and their data type for which sample queries are provided. To determine the data type of a field, see [Work item fields and attributes, List field attributes](../work-items/work-item-fields.md).  

<table>
<tbody valign="top">
<tr>
<td width="33%"><h3>A</h3>
<ul>
<li>[Acceptance Criteria](titles-ids-descriptions.md) (HTML)</li>
<li>[Activated By](query-by-workflow-changes.md) (Identity)</li>
<li>[Activated Date](query-by-workflow-changes.md) (DateTime)</li>
<li>[Activity](query-numeric.md) (String)</li>
<li>[Area Path](query-by-area-iteration-path.md) (TreePath)</li>
<li>[Assigned To](query-by-workflow-changes.md) (Identity) </li>
<li>[Attached File Count](linking-attachments.md) (Integer)</li>
<li>[Automated Test Name](build-test-integration.md) (String) </li>
<li>[Automated Test Type](build-test-integration.md) (String) </li>
</ul>
<h3>B</h3>
<ul>
<li>[Blocked](planning-ranking-priorities.md) (String)</li>
<li>[Board Column](query-by-workflow-changes.md) (String)</li>
<li>[Board Column Done](query-by-workflow-changes.md) (Boolean)</li>
<li>[Board Lane](query-by-workflow-changes.md) (String)</li>
<li>[Business Value](query-numeric.md) (String) </li>
</ul>
<h3>C</h3>
<ul>
<li>[Changed By](history-and-auditing.md) (Identity)</li>
<li>[Changed Date](history-and-auditing.md) (DateTime)</li>
<li>[Closed By](query-by-workflow-changes.md) (Identity)</li>
<li>[Closed Date](query-by-workflow-changes.md) (DateTime)</li>
<li>[Comment Count](linking-attachments.md)<sup>1</sup> (Integer)</li>
<li>[Committed](planning-ranking-priorities.md) (String)</li>
<li>[Completed Work](query-numeric.md) (Decimal)</li>
<li>[Created By](query-by-workflow-changes.md)  (Identity)</li>
<li>[Created Date](query-by-workflow-changes.md) (DateTime)</li>
</ul>
</td>
<td width="33%">
<h3>D-E-F</h3>
<ul>
<li>[Discipline](query-numeric.md) (String)</li>
<li>[Description](titles-ids-descriptions.md) (HTML)</li>
<li>[Due Date](query-by-date-or-current-iteration.md) (DateTime)</li>
<li>[Effort](query-numeric.md) (Decimal)</li>
<li>[External Link Count](linking-attachments.md#external-link-count) (Integer)</li>
<li>[Finish Date](query-by-date-or-current-iteration.md) (DateTime)</li>
<li>[Found In Build](build-test-integration.md) (String)</li>
</ul>
<h3>H-P</h3>
<ul>
<li>[History](history-and-auditing.md) (History)</li>
<li>[Hyperlink Count](linking-attachments.md#hyper-link-count) (Integer)</li>
<li>[ID](titles-ids-descriptions.md) (Integer)</li>
<li>[Integrated in Build](build-test-integration.md) (String)</li>
<li>[Iteration Path](query-by-area-iteration-path.md) (TreePath)</li>
<li>[Link Comment](linking-attachments.md) (Integer)</li>
<li>[Node Name](query-by-area-iteration-path.md) (String)</li>
<li>[Original Estimate](query-numeric.md) (Decimal)</li>
<li>[Parameters](build-test-integration.md) (HTML)</li>
<li>[Priority](planning-ranking-priorities.md) (Integer) </li>
</ul>
<h3>R</h3>
<ul>
<li>[Reason](query-by-workflow-changes.md) (String)</li>
<li>[Related Link Count](linking-attachments.md) (Integer)</li>
<li>[Remaining Work](query-numeric.md) (Decimal)</li>
<li>[Repro Steps](titles-ids-descriptions.md) (HTML)</li>
<li>[Resolved By](query-by-workflow-changes.md) (Identity)</li>
<li>[Resolved Date](query-by-workflow-changes.md) (DateTime)</li>
<li>[Resolved Reason](query-by-workflow-changes.md) (String)</li>
<li>[Rev](history-and-auditing.md) (Integer)</li>
<li>[Revised Date](history-and-auditing.md) (DateTime)</li>
</ul>
</td>
<td width="33%">
<h3>S</h3>
<ul>
<li>[Severity](planning-ranking-priorities.md) (String)</li>
<li>[Size](query-numeric.md) (Decimal)</li>
<li>[Stack Rank](planning-ranking-priorities.md) (Decimal)</li>
<li>[Start Date](query-by-date-or-current-iteration.md) (DateTime)</li>
<li>[State](query-by-workflow-changes.md) (String)</li>
<li>[State Change Date](query-by-workflow-changes.md) (DateTime)</li>
<li>[Steps](build-test-integration.md) (HTML)</li>
<li>[Steps to Reproduce](titles-ids-descriptions.md) (HTML)</li>
<li>[Story Points](query-numeric.md) (Decimal)</li>
<li>[System Info](titles-ids-descriptions.md) (HTML)</li>
</ul>
<h3>T</h3>
<ul>
<li>[Tags](add-tags-to-work-items.md) (String)</li>
<li>[Target Date](query-by-date-or-current-iteration.md) (DateTime)</li>
<li>[Task Type](query-numeric.md) (String)</li>
<li>[Team Project](titles-ids-descriptions.md) (String) </li>
<li>[Test Suite Type](build-test-integration.md) (String)</li>
<li>[Title](titles-ids-descriptions.md) (System)</li>
<li>[Triage](planning-ranking-priorities.md) (String)</li>
</ul>
<h3>V-W</h3>
<ul>
<li>[Value Area](planning-ranking-priorities.md) (String)</li>
<li>[Work Item Type](titles-ids-descriptions.md) (String) </li> 
</ul>
</td>
</tr>
</tbody>
</table>
 
 
####Notes:
1. The **Comment Count** field is supported for TFS 2017 and later versions. 


## Related articles
- [Use categories to group work item types](../../reference/xml/use-categories-to-group-work-item-types.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  
- [Define a managed query](using-queries.md) 
- [Work item field index](../work-items/guidance/work-item-field.md) 
