---
title: Query fields, operators, and macros/variables 
titleSuffix: Azure Boards and TFS
description: Field data types, operators, and macros/variables used by the Query Editor in Azure Boards & Team Foundation Server 
ms.custom: boards-queries
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 814c2dca-cf8f-44bf-bba1-a5d8e293fc05
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 03/20/2018  
---


# Query fields, operators, and macros

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)] 

You find and create lists of work items by creating work item queries. By defining one or more clauses, you filter from all work items within a project or project collection to return the set of work items that interest you. For each clause, you specify a field, an operator, and a value or variable.  

For example, you can search for all work items assigned to you by specifying the **Assigned To** field, the equals (=) operator, and the as **@Me** variable which represents your user account.

**Sample query clause**

<table>
<tr>
	<th>And/Or</th>
	<th>Field</th>
	<th>Operator</th>
	<th>Value</th></tr>
<tr>
	<td><p><strong>And</strong></p></td>
	<td><p><strong>Assigned To</strong></p></td>
	<td><p><strong>=</strong></p></td>
	<td><p><strong>&#64;Me</strong></p></td>
</tr>
</table>


For more general information about queries, see [Use the query editor to list and manage queries](using-queries.md). 

**Checklist for how to define a query clause:**  

1.  In the first empty row, under the **Field** column heading, choose the down arrow to display the list of available fields, and choose an item in the list.

    For more information, see [Query Fields and Values](#fields-values).

2.  In the same row, under the **Operator** column heading, choose the down arrow to display the list of available operators, and choose an item in the list.

    For more information, see [Operators](#operators).

3.  In the same row, under the **Value** column heading, either type a value, or choose the down arrow, and choose an item in the list.

    For more information about how to use variables to specify the current project, user, or date, see [Variables](#variables).

5.  To add a clause, choose **Click here to add a new clause** or **Add a new clause**.

    You can add a clause to the end of the query, insert a clause after an existing clause (![insert clause icon](_img/query-fields-operators-values-variables/IC588311.png)), and remove (![remove clause icon](_img/query-fields-operators-values-variables/IC588312.png)), group (![group clause icon](_img/query-fields-operators-values-variables/IC588313.png)), and ungroup (![ungroup clause icon](_img/query-fields-operators-values-variables/IC588314.png)) clauses as needed.

<a id="and-or" /> 
## And/Or

You specify **And** or **Or** to create logical expressions of your query clauses. Specify **And** to find work items that meet the criteria in both the current clause and the previous clause. Specify **Or** to find work items that meet the criterion in either the current clause or the previous clause.

You can add one new clause for each work item field in order to refine your search criteria, so that it returns only the set of work items that you want. If you do not receive the results that you expect from your query, you can add, remove, group, or ungroup query clauses to refine your query results.

Query clauses can be grouped to operate as a single unit separate from the rest of the query, similar to putting parentheses around an expression in a mathematical equation or logic statement. When you group clauses, the **AND** or **OR** for the first clause in the group applies to the whole group.

As the following example shows, the grouped clauses are translated to the corresponding logical expression. The first expression returns work items that are priority 1, as well as all active bugs of any priority. The second expression returns all active priority 1 work items, plus all priority 1 bugs whether they are active or not.

|Grouped clauses|Logical expression|
|---|---|
|![ ](_img/query-fields-operators-values-variables/IC425364.png)|Priority=1 OR (Work Item Type=Bug AND State=Active)|
|![ ](_img/query-fields-operators-values-variables/IC425365.png)|Priority=1 AND (Work Item Type=Bug OR State=Active)|

For more information, see [Use the query editor to list and manage queries](using-queries.md).

<a id="fields-values" /> 
## Query field data types and values

The value you specify for a field must conform to the data type for that field. The following table lists the supported data types:

<table valign="top">
<thead>
<tr>
<th width="12%"><p>Data type</p></th>
<th width="88%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
	<td><p><strong>Boolean</strong> </p></td>
	<td><p>Specifies a field that takes on a True/False value. </p>
<blockquote style="font-size: 13px">The Boolean data type field is only supported for Azure Boards and TFS 2017 and later versions.    
</blockquote>
</td></tr>

<tr>
	<td><p><strong>DateTime</strong> </p></td>
	<td><p>A Coordinated Universal Time (UTC) moment in time. You can specify a variable, such as <strong>@Today</strong> or <strong>@Today-1</strong>, or a value, such as 1/1/2012. For query examples, see [Query by date or@CurrentIteration](query-by-date-or-current-iteration.md). </p></td></tr>
<tr>
	<td><p><strong>Double</strong> </p></td>
	<td><p>A real number, such as 0.2 or 3.5. For query examples, see [Query by numeric fields](query-numeric.md). </p></td></tr>
<tr>
	<td><p><strong>GUID</strong> </p></td>
	<td><p>A character string that represents a unique ID.</p></td></tr>
<tr>
	<td><p><strong>History</strong> </p></td>
	<td><p>Custom formatted field used to track historical information. This data type is only used to support the <strong>History</strong> field. This field is automatically indexed for full-text search when full-text search is available. See [Full-Text and partial word searches](#full-text) described later in this topic.  For query examples, see [History and auditing](history-and-auditing.md). </p></td></tr>
<tr>
	<td><p> <strong>HTML</strong> </p></td>
	<td><p>Text strings that support formatted descriptions, such as the <strong>Description</strong> or <strong>Repro Steps</strong> fields. These fields are automatically indexed for full-text search when full-text search is available. See [Full-Text and partial word searches](#full-text) described later in this topic. To query rich-text fields, see [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md). </p>
</td>
</tr>
<tr>
	<td><p> <strong>Integer</strong> </p></td>
	<td><p>A 32-bit integer that is signed, such as 0, 1, 2, 34.</p></td></tr>
<tr>
	<td><p> <strong>PlainText</strong> </p></td>
	<td><p>Text strings that support long descriptions, such as the <strong>Application Start Information</strong> field. These fields are automatically indexed for full-text search, when full-text search is available. See [Full-Text and partial word searches](#full-text) described later in this topic. To query plain-text fields, see [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md).</p></td></tr>
<tr>
	<td><p> <strong>String</strong> </p></td>
	<td><p>Short text string that can contain up to 255 Unicode characters. String text fields are often used to support pick lists or drop-down menus.  </p></td></tr>
<tr>
	<td><p> <strong>TreePath</strong> </p></td>
	<td><p>A branching tree structure, such as an Area Path or Iteration path. You can choose an item from a list of valid values. You can find work items that equal, not equal, under or not under a tree structure, or use the In or Not In operators to specify several values.  You define the tree structure for a project&mdash;[area paths](../../organizations/settings/set-area-paths.md) and [teration paths](../../organizations/settings/set-iteration-paths-sprints.md)&mdash;and then select the ones you want to [associate with a team](../../organizations/settings/set-team-defaults.md).</p> 
	<p>For more information on constructing queries, see [Query by area or iteration path](query-by-area-iteration-path.md) or [Query by date or current iteration](query-by-area-iteration-path.md).</p></td>
</tr>

</tbody>
</table>

<a id="operators" /> 
## Query operators

You can use query operators in the following table to specify how each value in a clause must relate to the corresponding value in a work item. For information about the data type that is assigned to work item fields, see [Work item field reference](../work-items/guidance/work-item-field.md).

<table width="100%">
<thead valign="bottom">
<tr>
<th width="22%">Query operator</th>
<th width="44%">Returns work items if the value in the work item matches the criteria listed</th>
<th width="36%">Applicable data types</th>
</tr>
</thead>
<tbody valign="top">
<tr>
	<td><p><strong>=</strong></p></td>
	<td><p>Matches the value in the clause.</p></td>
	<td><p>Number, which includes <strong>Double</strong>, <strong>GUID</strong>, <strong>Integer</strong>, and <strong>String</strong>, <strong>DateTime</strong>, and <strong>TreePath</strong></p><p></p></td></tr>
<tr>
	<td><p><strong>&lt;&gt;</strong></p></td>
	<td><p>Does not match the value in the clause.</p></td>
	<td><p>Number, <strong>String</strong>, <strong>DateTime</strong>, and <strong>TreePath</strong></p></td></tr>
<tr>
	<td><p><strong>&gt;</strong></p></td>
	<td><p>Is larger than the value in the clause.</p></td>
	<td><p>Number, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
<tr>
	<td><p><strong>&lt;</strong></p></td>
	<td><p>Is less than the value in the clause.</p></td>
	<td><p>Number, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
<tr>
	<td><p><strong>&gt;=</strong></p></td>
	<td><p>Is larger than or equal to the value in the clause.</p></td>
	<td><p>Number, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
<tr>
	<td><p><strong>&lt;=</strong></p></td>
	<td><p>Is less than or equal to the value in the clause.</p></td>
	<td><p>Number, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
<tr>
	<td><p><strong>=[Field]</strong></p></td>
	<td><p>Matches the value that is contained in the specified field.</p></td>
	<td><p>Name of a field that is of the same data type as the specified field</p></td></tr>
<tr>
	<td><p><strong>&lt;&gt;[Field]</strong></p></td>
	<td><p>Does not match the value that is contained in the specified field.</p></td>
	<td><p>Name of a field that is of the same data type as the specified field</p></td></tr>
<tr>
	<td><p><strong>&gt;[Field]</strong></p></td>
	<td><p>Is larger than the value that is contained in the specified field.</p></td>
	<td><p>Name of a field that is of the same data type as the specified field</p></td></tr>
<tr>
	<td><p><strong>&lt;[Field]</strong></p></td>
	<td><p>Is less than the value that is contained in the specified field.</p></td>
	<td><p>Name of a field that is of the same data type as the specified field</p></td></tr>
<tr>
	<td><p><strong>&gt;=[Field]</strong></p></td>
	<td><p>Is larger than or equal to the value that is contained in the specified field.</p></td>
	<td><p>Name of a field that is of the same data type as the specified field</p></td></tr>
<tr>
	<td><p><strong>&lt;=[Field]</strong></p></td>
	<td><p>Is less than or equal to the value that is contained in the specified field.</p></td>
	<td><p>Name of a field that is of the same data type as the specified field</p></td></tr>
<tr>
	<td><p><strong>Contains</strong></p></td>
	<td><p>Contains an exact or partial match of the text string within the field you selected for filtering.</p></td>
	<td><p> <strong>String</strong> </p></td></tr>
<tr>
	<td><p><strong>Does Not Contain</strong></p></td>
	<td><p>Does not contain an exact or partial match of the text string within the field you selected for filtering.</p></td>
	<td><p> <strong>String</strong> </p></td></tr>
<tr>
	<td><p><strong>Contains Words</strong></p></td>
	<td><p>Contains the exact text string or words within the field you selected for filtering. You can also enter partial words or phrases that contain the wildcard character, <strong></strong>*. For restrictions, see [Full-text searches] (#full-text) for server and collation requirements.</p></td>
	<td><p>Long-text fields that are indexed for full-text search, which correspond to all <strong>PlainText</strong> and <strong>HTML</strong> fields and <strong>Title</strong>.</p></td></tr>
<tr>
	<td><p><strong>Does Not Contain Words</strong></p></td>
	<td><p>Does not contain the exact text string or words within the field you selected for filtering.</p></td>
	<td><p>Text fields that are indexed for full text search.</p></td></tr>
<tr>
	<td><p><strong>In</strong></p></td>
	<td><p>Matches any value in a delimited set. For example, you can find work items whose IDs are 100, 101, and 102 if you specify those values for the ID field.</p>
<blockquote><strong>Important:</strong> Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).
</blockquote>
</td>
	<td><p>Number, <strong>String</strong>, <strong>DateTime</strong>, <strong>TreePath</strong></p></td></tr>
<tr>
	<td><p><strong>Not In</strong></p></td>
	<td><p>Does not match any value in a delimited set. For example, you can exclude work items whose States are not Resolved, Completed, or Closed from query results if you specify those values for the State field.</p>
<blockquote><strong>Important:</strong> Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).
</blockquote>
<blockquote>The <strong>Not In</strong> operator is available from Azure Boards and TFS 2018.2 and later versions.</blockquote>
</td>
	<td><p>Number, <strong>String</strong>, <strong>DateTime</strong>, <strong>TreePath</strong></p></td></tr>
<tr>
	<td><p><strong>In Group</strong></p></td>
	<td><p>Matches a value that is a member of the group in the clause. Groups correspond to the name of a team, security group, or work tracking category. For example, you can create a query to find all work items that are assigned to members of the Contributors group or to a team. Team groups are created when you create a team. The name of team groups follows the pattern [<em>Team Project Name</em>]&#92;<em>Team Name</em>.</p><p>For example queries, see [Query by assignment or workflow changes](query-by-workflow-changes.md).</p></td>
	<td><p> <strong>String</strong> that matches the name of a team, security group, or category defined in the system.</p>
<blockquote><strong>Note:</strong>  You can use the <strong>In Group</strong> operator only with fields that use the <strong>String</strong> data type or the <strong>Work Item Type</strong> field. The operator cannot be used to query Azure Active Directory groups.
</blockquote>
<p>For information about category groups, see [Use categories to group work item types](../../reference/xml/use-categories-to-group-work-item-types.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json).</p></td></tr>
<tr>
	<td><p><strong>Not in Group</strong></p></td>
	<td><p>Does not match a value that is a member of the group in the clause.</p></td>
	<td><p> <strong>String</strong>  that matches the name of a user group in Team Foundation Server or a category group defined for a project.</p>
<blockquote><strong>Note:</strong> You can use the <strong>Not In Group</strong> operator only with fields that use the <strong>String</strong> data type or the <strong>Work Item Type</strong> field.
</blockquote>
</td>
</tr>
<tr>
	<td><p><strong>Was Ever</strong></p></td>
	<td><p>Matches the value in the clause at any previous point.</p></td>
	<td><p> <strong>String</strong> , <strong>DateTime</strong></p></td></tr>
<tr>
	<td><p><strong>Under</strong></p></td>
	<td><p>Matches the value in the clause or is contained under the node in the clause.</p></td>
	<td><p> <strong>TreePath</strong> </p></td></tr>
<tr>
	<td><p><strong>Not Under</strong></p></td>
	<td><p>Does not match the value in the clause and is not contained under the node in the clause.</p></td>
	<td><p> <strong>TreePath</strong> </p></td></tr></tbody>
</table>

<a id="variables" /> 
<a id="macros" /> 
## Query macros or variables

You can use the macros described in the following table to filter your queries based on specific fields. 


<table>
<thead valign="bottom">
<tr>
<th width="25%"><p>Macro</p></th>
<th width="75%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
	<td><b>[Any]</b></td>
	<td>Use in conjunction with the **Work Item Type** field to search across all work item types. For example, `Work Item Type=[Any]` won't place any filters based on the work item type.
</td>
</tr>


<tr>
	<td>**@CurrentIteration** <sup>1</sup></td>
	<td>Use in conjunction with the **Iteration Path** field to automatically filter for work items assigned to the current sprint based on the [current team focus or context](../../project/navigation/go-to-project-repo.md). For specific examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
	<p>This macro only works when run from the web portal. You can't use the macro when [copying or cloning test suites and test cases](../../test/mtm/copying-and-cloning-test-suites-and-test-cases.md), [defining alerts](../../notifications/index.md), or with [REST APIs](../../integrate/get-started/rest/basics.md).</p>
</td>
</tr>

<tr>
	<td><b>@CurrentIteration +/- <i>n</i></b> <sup>2</sup></td>
	<td>Use in conjunction with the **Iteration Path** field to filter the set of work items assigned to the current sprint +/- n sprints based on the [current team focus or context](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/plans/toc.json&bc=/azure/devops/boards/plans/breadcrumb/toc.json). For specific examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
</td>
</tr>

<tr>
	<td>**@Follows** <sup>3</sup></td>
	<td>Use in conjunction with the **ID** field and **In** operator to list all work items that you are following in the project. To learn more about the Follow feature, see [Follow a work item or pull request](../work-items/follow-work-items.md). You can view this same list from the [Work Items page, **Following** pivot view](../work-items/view-add-work-items.md). 
</td>
</tr>

<tr>
	<td>**@Me**</td>
	<td>Use in conjunction with an identity or user account field to automatically search for items associated with your user or account name. For example, you can find work items that you opened with the clause `Created By=@Me`. For additional examples, see [Query by assignment, workflow or Kanban board changes](query-by-workflow-changes.md).
</td>
</tr>

<tr>
	<td><b>@MyRecentActivity</b> <sup>4</sup></td>
	<td>Use in conjunction with the **ID** field and **In** operator to list work items that you have viewed or updated in the project within the last 30 days. You can view this same list from the [Work Items page, **My activity** pivot view](../work-items/view-add-work-items.md).
</td>
</tr>


<tr>
	<td>**@Project** <sup>5</sup></td>
	<td>Use in conjunction with the **Team Project** field to filter for work items in the current project. For example, you can find all the work items in the current project with the clause `Team Project=@Project`. 
</td>
</tr>

<tr>
	<td><b>@RecentMentions</b> <sup>4</sup></td>
	<td>Use in conjunction with the **ID** field and **In** operator to list work items where you have been mentioned in the Discussion section. You can view this same list from the [Work Items page, **Mentioned** pivot view](../work-items/view-add-work-items.md). 
</td>
</tr>

<tr>
	<td><b>@RecentProjectActivity</b> <sup>6</sup></td>
	<td>Use in conjunction with the **ID** field and **In** operator to list work items that have been updated in the project within the last 30 days. You can view similar lists from the [Work Items page, **Recently created**, **Recently updated** and **Recently completed** pivot views](../work-items/view-add-work-items.md). 
</td>
</tr>

<tr>
	<td>**@TeamAreas** <sup>7</sup> </td>
	<td>Only use with the Area Path field to filter for work items whose area path corresponds to one assigned to a specific team. Requires you use the **=** operator. For example, you can find all items assigned to the area paths assigned to the Web team with the clause `Area Path=@TeamAreas [Fabrikam Fiber]\Web`. For additional examples, see [Query by area or iteration path](query-by-area-iteration-path.md).</td>
</tr>

<tr>
	<td>**@Today**</td>
	<td>Use with a `DateTime` field to filter for work items that relate to the current date or to an earlier date. You can also modify the **@Today** macro by subtracting days. For example, you can find all items created in the last week with the clause `Created Date=@Today-7`. For additional examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).</td>
</tr>

</tbody> 
</table>
 
####Notes:
0. The **@CurrentIteration** macro is supported for Azure Boards and TFS 2015 and later versions. 
0. The **@CurrentIteration +/- n** macro is supported for Azure Boards and only when run from the web portal. 
0. The **@Follow** macro is supported for Azure Boards and TFS 2017 and later versions.
0. The **@MyRecentActivity**, **@RecentMentions**, **@RecentProjectActivity** macros are supported for Azure Boards and TFS 2018.2 and later versions.
0. The **@Project** macro is supported for Azure Boards and TFS 2015.1 and later versions.  The system automatically defaults to filtering based on the current project. To learn more, see [Query across projects](using-queries.md#across-projects). 
0. The **@RecentProjectActivity** macro is supported for Azure Boards only at this time.
0. The **@TeamAreas** macro is supported for Azure Boards only at this time.
 

<a id="full-text" /> 
## Full-text and partial word searches

Specify **Contains** or **Does Not Contain** to search against exact or partial matches of a word or phrase. Specify **Contains Words** or **Does Not Contain Words** to search against an exact phrase or to use the wildcard character, **&#42;**. These operators use the full-text search index. You can only use the wildcard character at the end of a partial word or phrase.

For examples, see [Example work item queries](example-queries.md) and [Query for work items using the History field](history-and-auditing.md).

<!---
> [!NOTE]    
> Not all deployments support full-text searches. For example, SQL Express and SQL Azure, which support the cloud service, do not support full-text search. In these instances, you will only see the **Contains** and **Does not Contain** operators.
> -->

**Contains Words** and **Does Not Contain Words** filter items based on the full-text search index created for long-text fields. 

::: moniker range=">= tfs-2013 <= tfs-2018"
Team Foundation automatically indexes all long-text fields with a data type of **PlainText** and **HTML** and the **Title** field for full-text search. The index and operators are only available when the SQL Server that supports Team Foundation Server supports full-text search.

Full-text searches require a SQL collation that corresponds to a language which has a word breaker registered with SQL Server. If the collation settings for the project collection database used for your Team Foundation Server instance do not correspond to a supported language, your search results may not match your expectations. In these cases, you might try using the **Contains** or **Does Not Contain** operators.

For more information, see [Full-Text Search Queries and Collation Settings](/tfs/server/install/sql-server/collation-requirements).

::: moniker-end



## Related articles 

- [About managed queries](example-queries.md)
- [Work item field index](../work-items/guidance/work-item-field.md)

[!INCLUDE [temp](../_shared/rest-apis-queries.md)] 


<!---
## Query indexed fields

In addition to the full-text search index, a query index is created. It is based on those fields that have indexing enabled. The query index improves the response time when you run queries that include indexed fields.

By default, the following fields are indexed: **Assigned To**, **Created Date**, **Changed By**, **State**, **Reason**, **Area ID**, **Iteration ID**, and **Work Item Type**. If there are other fields that your team frequently uses in their queries, you can add them to the query index.

You use the **witadmin indexfield** command to enable or disable indexing for a field. See [Manage work item fields](../../reference/witadmin/manage-work-item-fields.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json).

--> 