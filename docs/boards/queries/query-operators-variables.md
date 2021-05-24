---
title: Query fields, operators, and macros/variables 
titleSuffix: Azure Boards
description: Field data types, operators, and macros/variables used by the Query Editor in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: boards-queries
ms.technology: devops-agile
ms.assetid: 814c2dca-cf8f-44bf-bba1-a5d8e293fc05
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 05/24/2021
---


# Query fields, operators, and macros

[!INCLUDE [temp](../includes/version-all.md)] 

Here you'll find detailed descriptions of each field data type, query operators, and query macros. Some data types, operators, and macros are only valid for the indicated Azure DevOps Server or Team Foundation Server (TFS) version. 

For a quick reference of query tasks and operators and macros supported for each data type, see [Query quick reference](query-index-quick-ref.md). See also [Guidance to create high-performing queries](high-performing-queries.md) for tips on constructing high-performing queries.

<a id="field-values" /> 

## Query field data types and values

The value you specify for a field must conform to the data type for that field. The following table lists the supported data types:

> [!NOTE]  
> For Azure Boards cloud service, the data type corresponds to that listed for the field on the [Process>Fields page](../../organizations/settings/work/customize-process-field.md#review-fields). For on-premises deployments, the data type corresponds to the `type` attribute assigned to a [`FIELD` definition](../../reference/xml/field-definition-element-reference.md). For more information, see [Work item fields and field attributes](../work-items/work-item-fields.md). 

<table valign="top">
<thead>
<tr>
<th width="20%"><p>Data type</p></th>
<th width="80%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
    <td><p><strong>Boolean</strong><sup>1</sup> </p></td>
    <td><p>Specifies a field that takes on a True/False value. </p>
</td></tr>
<tr>
    <td><p><strong>DateTime</strong> or<br/><strong>Date/Time</strong></p></td>
    <td><p>A date field in which you can specify a variable, such as <strong><xref href="Today" data-throw-if-not-resolved="False" data-raw-source="@Today"></xref></strong> or <strong><xref href="Today-1" data-throw-if-not-resolved="False" data-raw-source="@Today-1"></xref></strong>, or a value, such as 1/1/2012. Enter dates in the Date Pattern you set for your personal profile. (See <a href="../../organizations/settings/set-your-preferences.md" data-raw-source="[Set personal preferences](../../organizations/settings/set-your-preferences.md)">Set personal preferences</a> for details.) For query examples, see <a href="query-by-date-or-current-iteration.md" data-raw-source="[Query by date or@CurrentIteration](query-by-date-or-current-iteration.md)">Query by date or@CurrentIteration</a>. </p> <p>For WIQL queries, you can also specify the date in the Coordinated Universal Time (UTC) pattern. For details, see <a href="wiql-syntax.md" data-raw-source="[Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)">Syntax for the Work Item Query Language (WIQL)</a>. </td></tr>
<tr>
    <td><p><strong>Double</strong> or <strong>Decimal</strong></p></td>
    <td><p>A real number, such as 0.2 or 3.5. For query examples, see <a href="query-numeric.md" data-raw-source="[Query by numeric fields](query-numeric.md)">Query by numeric fields</a>. </p></td></tr>
<tr>
    <td><p><strong>GUID</strong> </p></td>
    <td><p>A character string that represents a unique ID.</p></td></tr>
<tr>
    <td><p><strong>History</strong> </p></td>
    <td><p>Custom formatted field used to track historical information. This data type is only used to support the <strong>History</strong> field. This field is automatically indexed for full-text search when full-text search is available. See <a href="#full-text" data-raw-source="[Full-Text and partial word searches](#full-text)">Full-Text and partial word searches</a> described later in this article.  For query examples, see <a href="history-and-auditing.md" data-raw-source="[History and auditing](history-and-auditing.md)">History and auditing</a>. </p></td></tr>
<tr>
    <td><p> <strong>HTML</strong> </p></td>
    <td><p>Text strings that support formatted descriptions, such as the <strong>Description</strong> or <strong>Repro Steps</strong> fields. These fields are automatically indexed for full-text search when full-text search is available. See <a href="#full-text" data-raw-source="[Full-Text and partial word searches](#full-text)">Full-Text and partial word searches</a> described later in this article. To query rich-text fields, see <a href="titles-ids-descriptions.md" data-raw-source="[Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md)">Query by titles, IDs, and rich-text fields</a>. </p>
</td>
</tr>
<tr>
    <td><p> <strong>Identity</strong> </p></td>
    <td><p>Short text string that identifies a user identity. </p></td></tr>
<tr>
    <td><p> <strong>Integer</strong> </p></td>
    <td><p>A 32-bit integer that is signed, such as 0, 1, 2, 34.</p></td></tr>
<tr>
    <td><p> <strong>PlainText</strong> or<br/><strong>Text field (multi-line)</strong></p></td>
    <td><p>Text strings that support long descriptions, such as the <strong>Application Start Information</strong> field. These fields are automatically indexed for full-text search, when full-text search is available. See <a href="#full-text" data-raw-source="[Full-Text and partial word searches](#full-text)">Full-Text and partial word searches</a> described later in this article. To query plain-text fields, see <a href="titles-ids-descriptions.md" data-raw-source="[Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md)">Query by titles, IDs, and rich-text fields</a>.</p></td></tr>
<tr>
    <td><p> <strong>picklistDouble</strong><sup>2</sup></p></td>
    <td><p>Custom field defined to contain a pick list of Decimal values.</p></td></tr>
<tr>
    <td><p> <strong>picklistInteger</strong><sup>2</sup></p></td>
    <td><p>Custom field defined to contain a pick list of Integer values.</p></td></tr>
<tr>
    <td><p> <strong>picklistString</strong><sup>2</sup></p></td>
    <td><p>Custom field defined to contain a pick list of short text string (255 characters or less) values.</p></td></tr>
<tr>
    <td><p> <strong>String</strong> or<br/><strong>Text field (single line)</strong></p></td>
    <td><p>Short text string that can contain up to 255 Unicode characters. String text fields are often used to support picklists or drop-down menus.  </p></td></tr>
<tr>
    <td><p> <strong>TreePath</strong> </p></td>
    <td><p>A branching tree structure, such as an Area Path or Iteration path. You can choose an item from a list of valid values. You can find work items that equal, not equal, under or not under a tree structure, or use the In or Not In operators to specify several values.  You define the tree structure for a project&mdash;<a href="../../organizations/settings/set-area-paths.md" data-raw-source="[area paths](../../organizations/settings/set-area-paths.md)">area paths</a> and <a href="../../organizations/settings/set-iteration-paths-sprints.md" data-raw-source="[iteration paths](../../organizations/settings/set-iteration-paths-sprints.md)">iteration paths</a>&mdash;and then select the ones you want to associate with a team.</p> 
    <p>For more information on constructing queries, see <a href="query-by-area-iteration-path.md" data-raw-source="[Query by area or iteration path](query-by-area-iteration-path.md)">Query by area or iteration path</a> or <a href="query-by-area-iteration-path.md" data-raw-source="[Query by date or current iteration](query-by-area-iteration-path.md)">Query by date or current iteration</a>.</p></td>
</tr>

</tbody>
</table>

#### Notes:
1. The **Boolean** data type field is supported for TFS 2017 and later versions. 
2. The **picklist...** data types are only assigned to custom fields defined for an inherited process. The Inherited process model is only supported for Azure DevOps Services and Azure DevOps Server 2019. 

[!INCLUDE [date-time-pattern](../includes/date-time-pattern.md)]

<a id="operators" /> 

## Query operators

You can use query operators in the following table to specify how each value in a clause must relate to the corresponding value in a work item. For information about the data type that is assigned to work item fields, see [Work item field reference](../work-items/guidance/work-item-field.md). 

To learn about adding clauses and use of the And/Or operators, see [Define a query, And/Or logical expression](using-queries.md#andor-logical-expression).

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
    <td><p><strong>Number</strong>&mdash;which includes <strong>Double</strong>, <strong>GUID</strong>, <strong>Integer</strong>&mdash;and <strong>String</strong>, <strong>DateTime</strong>, and <strong>TreePath</strong></p><p></p></td></tr>
<tr>
    <td><p><strong>&lt;&gt;</strong></p></td>
    <td><p>Does not match the value in the clause.</p></td>
    <td><p><strong>Number</strong>, <strong>String</strong>, <strong>DateTime</strong>, and <strong>TreePath</strong></p></td></tr>
<tr>
    <td><p><strong>&gt;</strong></p></td>
    <td><p>Is larger than the value in the clause.</p></td>
    <td><p><strong>Number</strong>, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
<tr>
    <td><p><strong>&lt;</strong></p></td>
    <td><p>Is less than the value in the clause.</p></td>
    <td><p><strong>Number</strong>, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
<tr>
    <td><p><strong>&gt;=</strong></p></td>
    <td><p>Is larger than or equal to the value in the clause.</p></td>
    <td><p><strong>Number</strong>, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
<tr>
    <td><p><strong>&lt;=</strong></p></td>
    <td><p>Is less than or equal to the value in the clause.</p></td>
    <td><p><strong>Number</strong>, <strong>String</strong>, and <strong>DateTime</strong></p></td></tr>
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
    <td><p>Contains the exact text string or words within the field you selected for filtering. You can also enter partial words or phrases that contain the wildcard character, <strong>*</strong>. Text string is limited to 100 characters. For restrictions, see <a href="#full-text" data-raw-source="[Full-text searches](#full-text)">Full-text searches</a> for server and collation requirements.</p></td>
    <td><p>Long-text fields that are indexed for full-text search, which correspond to all <strong>PlainText</strong> and <strong>HTML</strong> fields, and the <strong>History</strong> and <strong>Title</strong> fields.</p></td></tr>
<tr>
    <td><p><strong>Does Not Contain Words</strong></p></td>
    <td><p>Does not contain the exact text string or words within the field you selected for filtering. Text string is limited to 100 characters. </p>
    <p>Use this operator in combination with a clause with the <strong>Contains Words</strong> operator to include and exclude specific keywords.</p></td>
    <td><p>Text fields that are indexed for full text search.</p></td></tr>
<tr>
    <td><p><strong>In</strong></p></td>
    <td><p>Matches any value in a delimited set. For example, you can find work items whose IDs are 100, 101, and 102 if you specify those values for the ID field. Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).</p>
</td>
    <td><p><strong>Number</strong>, <strong>String</strong>, <strong>DateTime</strong>, <strong>TreePath</strong></p></td></tr>

<tr>
    <td><p><strong>Is Empty</strong></p></td>
    <td><p>Lists work items that contain an empty HTML field. You don&#39;t specify a value with this operator. This operator is supported for Azure Boards (cloud service), Azure DevOps Server 2019, and later versions.</p>
</td>
    <td><strong>HTML</strong> </td></tr>
<tr>
    <td><p><strong>Is Not Empty</strong></p></td>
    <td><p>Lists work items that contain some content in the HTML field. You don&#39;t specify a value with this operator. This operator is supported for Azure Boards (cloud service), Azure DevOps Server 2019, and later versions.</p>
</td>
    <td><strong>HTML</strong> </td></tr>
<tr>
    <td><p><strong>Not In</strong></p></td>
    <td><p>Does not match any value in a delimited set. For example, you can exclude work items whose States are not Resolved, Completed, or Closed from query results if you specify those values for the State field. Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).</p>
<blockquote>The <strong>Not In</strong> operator is available from Azure Boards and TFS 2018.2 and later versions.</blockquote>

</td>
    <td><p><strong>Number</strong>, <strong>String</strong>, <strong>DateTime</strong>, <strong>TreePath</strong></p></td></tr>
<tr>
    <td><p><strong>In Group</strong></p></td>
    <td><p>Matches a value that is a member of the group in the clause. Groups correspond to the name of a team, security group, or work tracking category. For example, you can create a query to find all work items that are assigned to members of the Contributors group or to a team. Team groups are created when you create a team. The name of team groups follows the pattern [<em>Team Project Name</em>]&#92;<em>Team Name</em>.</p><p>For example queries, see <a href="query-by-workflow-changes.md" data-raw-source="[Query by assignment or workflow changes](query-by-workflow-changes.md)">Query by assignment or workflow changes</a>.</p></td>
    <td><p> <strong>String</strong> that matches the name of a team, security group, or category defined in the system.</p>

<blockquote><strong>Note:</strong>  You can use the <strong>In Group</strong> operator only with fields that use the <strong>String</strong> data type or the <strong>Work Item Type</strong> field. You can also use groups defined in Azure Active Directory (AAD) when your Azure Boards account is backed by AAD, or Active Directory (AD) when your on-premises server instance is backed by Active Directory.<br/></blockquote>
<p>For information about category groups, see <a href="../../reference/xml/use-categories-to-group-work-item-types.md?toc=/azure/devops/reference/toc.json&amp;bc=/azure/devops/reference/breadcrumb/toc.json" data-raw-source="[Use categories to group work item types](../../reference/xml/use-categories-to-group-work-item-types.md?toc=/azure/devops/reference/toc.json&amp;bc=/azure/devops/reference/breadcrumb/toc.json)">Use categories to group work item types</a>.</p></td></tr>
<tr>
    <td><p><strong>Not in Group</strong></p></td>
    <td><p>Does not match a value that is a member of the group in the clause.</p></td>
    <td><p> <strong>String</strong>  that matches the name of a user group in Team Foundation Server or a category group defined for a project.</p>
<blockquote><strong>Note:</strong>  You can use the <strong>Not In Group</strong> operator only with fields that use the <strong>String</strong> data type or the <strong>Work Item Type</strong> field. You can also use groups defined in AAD when your Azure Boards account is backed by AAD, or AD when your on-premises server instance is backed by AD. 
</blockquote>
</td>
</tr>
<tr>
    <td><p><strong>Not Under</strong></p></td>
    <td><p>Does not match the value in the clause and is not contained under the node in the clause.</p></td>
    <td><p><strong>TreePath</strong> </p></td></tr>
<tr>
    <td><p><strong>Under</strong></p></td>
    <td><p>Matches the value in the clause or is contained under the node in the clause.</p></td>
    <td><p> <strong>TreePath</strong> </p></td></tr>
<tr>
    <td><p><strong>Was Ever</strong></p></td>
    <td><p>Matches the value in the clause at any previous point.</p></td>
    <td><p><strong>String</strong> , <strong>DateTime</strong></p></td></tr>
</tbody>
</table>

<a id="variables" /> 
<a id="macros" /> 

## Query macros or variables

You can use the macros described in the following table to filter your queries based on specific fields. 

> [!NOTE]
> The following macros are only supported from the web portal: **@CurrentIteration**, **@CurrentIteration +/- n**, **@Follows**, **@MyRecentActivity**, **@RecentMentions**, **@RecentProjectActivity**, **@TeamAreas**. Queries that contain these macros won't work when opened in Visual Studio/Team Explorer, Microsoft Excel, or Microsoft Project. 

---
:::row:::
   :::column span="1":::
      **Macro** 
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---<table>
<thead valign="bottom">
<tr>
<th width="28%"><p>Macro</p></th>
<th width="72%"><p>Description</p></th>
---
:::row:::
   :::column span="1":::
      **[Any]** 
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the **Work Item Type** or **State** fields to search across all work item types or across all states. For example, <code>Work Item Type=[Any]</code> won't place any filters based on the work item type.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@CurrentIteration**  
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the **Iteration Path** field to automatically filter for work items assigned to the current sprint based on the [current team focus or context](../../project/navigation/go-to-project-repo.md). For specific examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).  
      The **@CurrentIteration** macro is supported for Azure Boards and TFS 2015 and later versions. This macro only works when run from the web portal. You can't use the macro when [copying or cloning test suites and test cases](/previous-versions/azure/devops/docs/test/mtm/copying-and-cloning-test-suites-and-test-cases), [defining alerts](../../notifications/about-notifications.md), or with [REST APIs](/rest/api/azure/devops/).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@CurrentIteration +/- n**   
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the **Iteration Path** field to filter the set of work items assigned to the current sprint +/- *n* sprints based on the [current team focus or context](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/toc.json&amp;bc=/azure/devops/boards/breadcrumb/toc.json). For specific examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).  
      The **@CurrentIteration +/- n** macro is supported for Azure Boards, Azure DevOps Server 2019 and later versions, and only when run from the web portal.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@Follows**  
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the the **ID** field and **In** operator to list all work items that you are following in the project. To learn more about the Follow feature, see [Follow a work item or pull request](../work-items/follow-work-items.md). You can view this same list from the [Work Items page, **Following** pivot view](../work-items/view-add-work-items.md).  
      The **@Follows** macro is supported for Azure Boards and TFS 2017 and later versions, and only when run from the web portal.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      @Me 
   :::column-end:::
   :::column span="3":::
      Use in conjunction with an identity or user account field to automatically search for items associated with your user or account name. For example, you can find work items that you opened with the clause <code>Created By=@Me</code>. For additional examples, see [Query by assignment, workflow or Kanban board changes](query-by-workflow-changes.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@MyRecentActivity** <sup>1</sup>  
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the the **ID** field and **In** operator to list work items that you have viewed or updated in the project within the last 30 days. You can view this same list from the [Work Items page, **My activity** pivot view](../work-items/view-add-work-items.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@Project** 
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the **Team Project** field to filter for work items in other projects. For example, you can find all the work items in the currently selected project with the clause <code>Team Project=@Project</code>.  
      The **@Project** macro is supported for Azure Boards and TFS 2015.1 and later versions. The system automatically defaults to filtering based on the current project. To learn more, see [Define a query, Query across projects](using-queries.md#across-projects). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@RecentMentions** <sup>1</sup> 
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the **ID** field and **In** operator to list work items where you have been mentioned in the Discussion section. You can view this same list from the [Work Items page, **Mentioned** pivot view](../work-items/view-add-work-items.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@RecentProjectActivity**  
   :::column-end:::
   :::column span="3":::
      Use in conjunction with the **ID** field and **In** operator to list work items that have been updated in the project within the last 30 days. You can view similar lists from the [Work Items page, **Recently created**, **Recently updated** and **Recently completed** pivot views](../work-items/view-add-work-items.md).  
      The **@RecentProjectActivity** macro is supported for Azure Boards (cloud service) only at this time.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfDay** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current date or with a plus/minus offset. For example, you can find all items closed in the last week with the clause <code>Closed Date&gt;=@StartOfDay-7</code>. For additional examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfMonth** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current month or with a plus/minus offset. For example, you can find all items created in the last 3 months with the clause <code>Created Date&gt;=@StartOfMonth-3</code>. For additional examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfWeek** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current week or with a plus/minus offset. For example, you can find all items changed in the last two weeks with the clause <code>Changed Date&gt;=@StartOfWeek-2</code>. For additional examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@StartOfYear** <sup>2</sup> 
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current year or with a plus/minus offset. For example, you can find all features that have a Target Date scheduled within the current year with the clause <code>Target Date&gt;=@StartOfYear</code>. For additional examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@TeamAreas**  
   :::column-end:::
   :::column span="3":::
      Only use with the **Area Path** field to filter for work items whose area path corresponds to one assigned to a specific team. Requires you use the **=** operator. For example, you can find all items assigned to the area paths assigned to the Web team with the clause <code>Area Path=@TeamAreas [Fabrikam Fiber]\Web</code>. For additional examples, see [Query by area or iteration path](query-by-area-iteration-path.md).  
      The **@TeamAreas** macro is supported for Azure DevOps Server 2019 and later versions, and only when run from the web portal.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **@Today**
   :::column-end:::
   :::column span="3":::
      Use with a <code>DateTime</code> field to filter for work items that relate to the current date or to an earlier date. You can also modify the **@Today** macro by subtracting days. For example, you can find all items created in the last week with the clause <code>Created Date&gt;=Today-7</code>. For additional examples, see [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
---
 

#### Notes:

1. The **@MyRecentActivity**, **@RecentMentions**, and **@RecentProjectActivity** macros are supported for Azure Boards and TFS 2018.2 and later versions.
1. The **@StartOfDay**, **@StartOfWeek**, **@StartOfMonth**, and **@StartOfYear** macros are supported for Azure DevOps Server 2019 Update 1 and later versions.


[!INCLUDE [temp](../includes/note-macro-web-portal.md)]

<a id="full-text" /> 

## Full-text and partial word searches

Specify **Contains** or **Does Not Contain** to search against exact or partial matches of a word or phrase. These operators filter items based on the full-text search index created for long-text fields. Specify **Contains Words** or **Does Not Contain Words** to search against an exact phrase or to use the wildcard character, **&#42;**. These operators use the full-text search index. You can only use the wildcard character at the end of a partial word or phrase.

For examples, see [Example work item queries](query-index-quick-ref.md) and [Query for work items using the History field](history-and-auditing.md).


> [!NOTE]    
> Not all deployments support full-text searches. For example, SQL Express and SQL Azure, which support the cloud service, do not support full-text search. In these instances, you will only see the **Contains** and **Does not Contain** operators.


::: moniker range="< azure-devops"
Azure DevOps Server and Team Foundation Server automatically index all long-text fields with a data type of **PlainText** and **HTML** and the **Title** field for full-text search. The index and operators are only available when the SQL Server that supports Team Foundation Server supports full-text search.

Full-text searches require a SQL collation that corresponds to a language which has a word breaker registered with SQL Server. If the collation settings for the project collection database used for your Team Foundation Server instance do not correspond to a supported language, your search results may not match your expectations. In these cases, you might try using the **Contains** or **Does Not Contain** operators.

For more information, see [Full-Text Search Queries and Collation Settings](/azure/devops/server/install/sql-server/collation-requirements).

::: moniker-end



## Related articles 

- [Query quick reference](query-index-quick-ref.md)
- [About managed queries](about-managed-queries.md)
- [Work item field index](../work-items/guidance/work-item-field.md)
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)

[!INCLUDE [temp](../includes/rest-apis-queries.md)] 


<!---
## Query indexed fields

In addition to the full-text search index, a query index is created. It is based on those fields that have indexing enabled. The query index improves the response time when you run queries that include indexed fields.

By default, the following fields are indexed: **Assigned To**, **Created Date**, **Changed By**, **State**, **Reason**, **Area ID**, **Iteration ID**, and **Work Item Type**. If there are other fields that your team frequently uses in their queries, you can add them to the query index.

You use the **witadmin indexfield** command to enable or disable indexing for a field. See [Manage work item fields](../../reference/witadmin/manage-work-item-fields.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json).

-->