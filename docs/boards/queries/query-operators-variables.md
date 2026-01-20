---
title: Query fields, operators, macros, and variables
titleSuffix: Azure Boards
description: Learn about field data types, operators, and macros/variables used by the Query Editor in Azure Boards and Azure DevOps.
ms.custom: boards-queries, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 814c2dca-cf8f-44bf-bba1-a5d8e293fc05
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---


# Query fields, operators, and macros

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

This article describes field data types, query operators, and query macros you use in the Query Editor. Some types, operators, and macros apply only to specific Azure DevOps versions.

For quick examples and editor tasks, see [Query quick reference](query-index-quick-ref.md) and [Manage and organize queries](organize-queries.md).

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

<a id="field-values"></a> 

## Query field data types and values

You must specify a value that matches the data type for a field. The table below lists supported data types:

> [!NOTE]   
> For Azure Boards (cloud), the data type matches the field shown on the [Process > Fields page](../work-items/work-item-fields.md#review-fields). For on-premises deployments, the data type corresponds to the `type` attribute on a [`FIELD` definition](/previous-versions/azure/devops/reference/xml/field-definition-element-reference). See [Work item fields and field attributes](../work-items/work-item-fields.md) for details. 

:::row:::
   :::column span="1":::
   **Data type**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Boolean** 
   :::column-end:::
   :::column span="3":::
   Stores a True/False value. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **DateTime** or  **Date/Time**
   :::column-end:::
   :::column span="3":::
   Use a date variable (for example, **<xref href="Today" data-throw-if-not-resolved="False" data-raw-source="@Today"></xref>** or **<xref href="Today-1" data-throw-if-not-resolved="False" data-raw-source="@Today-1"></xref>**) or an explicit date like `01/01/2025`. Enter dates in the pattern set in your profile. For query examples, see [Query by date or @CurrentIteration](query-by-date-or-current-iteration.md).  
   For WIQL queries, you can also specify dates in UTC. See [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Double** or **Decimal**
   :::column-end:::
   :::column span="3":::
   Stores a real number, such as 0.2 or 3.5. See [Query by numeric fields](query-numeric.md) for examples.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **GUID** 
   :::column-end:::
   :::column span="3":::
   Stores a unique identifier string.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **History** 
   :::column-end:::
   :::column span="3":::
   Custom formatted field used for historical information (the **History** field). When full-text search is available, this field is indexed for full-text queries. See [History and auditing](history-and-auditing.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **HTML** 
   :::column-end:::
   :::column span="3":::
   Stores formatted text (for example, **Description** or **Repro Steps**). When full-text search is available, these fields are indexed. To query rich-text fields, see [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **Identity** 
   :::column-end:::
   :::column span="3":::
   Stores a short text string that identifies a user identity.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **Integer** 
   :::column-end:::
   :::column span="3":::
   Stores a signed 32-bit integer (for example, 0, 1, 2, 34).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **PlainText** or  **Text field (multi-line)**
   :::column-end:::
   :::column span="3":::
   Stores long text values (for example, **Application Start Information**). These fields index for full-text search when supported. See [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **picklistDouble**
   :::column-end:::
   :::column span="3":::
   Custom field that holds a pick list of Decimal values.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **picklistInteger**
   :::column-end:::
   :::column span="3":::
   Custom field that holds a pick list of Integer values.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **picklistString**
   :::column-end:::
   :::column span="3":::
   Custom field that holds a pick list of short text values (255 characters or less).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **String** or  **Text field (single line)**
   :::column-end:::
   :::column span="3":::
   Stores short text up to 255 Unicode characters. Teams often use these fields for picklists or drop-down menus.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **TreePath** 
   :::column-end:::
   :::column span="3":::
   Represents a branching tree (for example, Area Path or Iteration Path). Choose a valid node value. You can filter for equality, inequality, "Under" / "Not Under," or use the `In` / `Not In` operators to specify multiple values. Define tree structures for a project—[area paths](../../organizations/settings/set-area-paths.md) and [iteration paths](../../organizations/settings/set-iteration-paths-sprints.md)—and select the nodes to associate with teams.
   For query examples, see [Query by area or iteration path](query-by-area-iteration-path.md) and [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::

> [!NOTE]
> The `picklist...` types only apply to custom fields defined for an inherited process.

[!INCLUDE [date-time-pattern](../includes/date-time-pattern.md)]

<a id="operators"></a> 

## Query operators

Use operators to define how a clause value must relate to a work item's field value. For field data types, see [Work item field reference](../work-items/guidance/work-item-field.md). For help building queries, see [Define a query](using-queries.md).

:::row:::
   :::column span="1":::
   **Query operator**
   :::column-end:::
   :::column span="3":::
   **When the operator returns matching work items**
   :::column-end:::
   :::column span="3":::
   **Applicable data types**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **=**
   :::column-end:::
   :::column span="3":::
   Matches the clause value.
   :::column-end:::
   :::column span="3":::
   Number (Double/Decimal/GUID/Integer), String, DateTime, TreePath
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<>**
   :::column-end:::
   :::column span="3":::
   Doesn't match the clause value.
   :::column-end:::
   :::column span="3":::
   Number, String, DateTime, TreePath
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>**
   :::column-end:::
   :::column span="3":::
   Is greater than the clause value.
   :::column-end:::
   :::column span="3":::
   Number, String, DateTime
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<**
   :::column-end:::
   :::column span="3":::
   Is less than the clause value.
   :::column-end:::
   :::column span="3":::
   Number, String, DateTime
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>=**
   :::column-end:::
   :::column span="3":::
   Is greater than or equal to the clause value.
   :::column-end:::
   :::column span="3":::
   Number, String, DateTime
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<=**
   :::column-end:::
   :::column span="3":::
   Is less than or equal to the clause value.
   :::column-end:::
   :::column span="3":::
   Number, String, DateTime
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **=[Field]**
   :::column-end:::
   :::column span="3":::
   Matches the value in another specified field (must be the same data type).
   :::column-end:::
   :::column span="3":::
   Name of a field of the same data type (Boolean fields compare equality to other fields).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<>[Field]**
   :::column-end:::
   :::column span="3":::
   Doesn't match the value in another specified field.
   :::column-end:::
   :::column span="3":::
   Name of a field of the same data type.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>[Field]**
   :::column-end:::
   :::column span="3":::
   Is greater than the value in another specified field.
   :::column-end:::
   :::column span="3":::
   Name of a field of the same data type.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<[Field]**
   :::column-end:::
   :::column span="3":::
   Is less than the value in another specified field.
   :::column-end:::
   :::column span="3":::
   Name of a field of the same data type.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **>=[Field]**
   :::column-end:::
   :::column span="3":::
   Is greater than or equal to the value in another specified field.
   :::column-end:::
   :::column span="3":::
   Name of a field of the same data type.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **<=[Field]**
   :::column-end:::
   :::column span="3":::
   Is less than or equal to the value in another specified field.
   :::column-end:::
   :::column span="3":::
   Name of a field of the same data type.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Contains**
   :::column-end:::
   :::column span="3":::
   Contains an exact or partial text match.
   :::column-end:::
   :::column span="3":::
   String
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Does Not Contain**
   :::column-end:::
   :::column span="3":::
   Doesn't contain an exact or partial text match.
   :::column-end:::
   :::column span="3":::
   String
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Contains Words**
   :::column-end:::
   :::column span="3":::
   Matches an exact phrase or words (supports trailing wildcard `*`). Limit: 100 characters. This operator uses full-text indexing; see the Full-text section in this article for server and collation requirements.
   :::column-end:::
   :::column span="3":::
   Long-text fields indexed for full-text search (PlainText, HTML, History, and Title).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Does Not Contain Words**
   :::column-end:::
   :::column span="3":::
   Excludes items that contain the specified phrase or words. Limit: 100 characters. Use with `Contains Words` in companion clauses to include or exclude keywords.
   :::column-end:::
   :::column span="3":::
   Text fields indexed for full-text search.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **In**
   :::column-end:::
   :::column span="3":::
   Matches any value in a delimited set (use your OS regional list separator, typically a comma).
   :::column-end:::
   :::column span="3":::
   Number, String, DateTime, TreePath
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Is Empty**
   :::column-end:::
   :::column span="3":::
   Matches items where an HTML field contains no content (no value specified). Supported for Azure Boards and Azure DevOps Server.
   :::column-end:::
   :::column span="3":::
   HTML
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Is Not Empty**
   :::column-end:::
   :::column span="3":::
   Matches items where an HTML field contains content. Supported for Azure Boards and Azure DevOps Server.
   :::column-end:::
   :::column span="3":::
   HTML
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Not In**
   :::column-end:::
   :::column span="3":::
   Excludes values in a delimited set (use the regional list separator). Supported for Azure Boards and Azure DevOps Server.
   :::column-end:::
   :::column span="3":::
   Number, String, DateTime, TreePath
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **In Group**
   :::column-end:::
   :::column span="3":::
   Matches values that are members of a named group (team, security group, or category). For example, use the Contributors group or a team group named in the pattern `[Project Name]\Team Name`. See [Query by assignment or workflow changes](query-by-workflow-changes.md) for examples.
   :::column-end:::
   :::column span="3":::
   String (matches group or team name) or Work Item Type
   :::column-end:::
   > [!NOTE]
   > Use **In Group** only with String-type fields or Work Item Type. You can use Microsoft Entra ID groups when your account uses Microsoft Entra ID, or Active Directory groups for on-premises.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Not in Group**
   :::column-end:::
   :::column span="3":::
   Excludes members of a named group.
   :::column-end:::
   :::column span="3":::
   String that matches a user group or project category.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Not Under**
   :::column-end:::
   :::column span="3":::
   Excludes items equal to or contained under the specified tree node.
   :::column-end:::
   :::column span="3":::
   TreePath
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Under**
   :::column-end:::
   :::column span="3":::
   Matches items equal to or contained under the specified tree node.
   :::column-end:::
   :::column span="3":::
   TreePath
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Was Ever**
   :::column-end:::
   :::column span="3":::
   Matches a value that a field held at any previous time.
   :::column-end:::
   :::column span="3":::
   String, DateTime
   :::column-end:::
   > [!NOTE]
   > The Query Editor doesn't currently support `Was Ever` on date fields; use direct WIQL for those cases.
   :::column-end:::
:::row-end:::

> [!TIP] 
> You can construct WIQL queries that use operators (for example, `Was Ever`) against other data types such as Iteration Path. See [List work items moved out of a sprint](query-by-date-or-current-iteration.md#list-work-items-moved-out-sprint) for an example.

<a id="variables"></a> 
<a id="macros"></a> 

## Query macros and variables

Use the following macros to filter queries dynamically.

[!INCLUDE [temp](../includes/note-macro-web-portal.md)]

--- 
:::row:::
   :::column span="1":::
      **Macro** 
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **[Any]** 
   :::column-end:::
   :::column span="3":::
      Use with **Work Item Type** or **State** to search across all types or states. For example, `Work Item Type=[Any]` removes type-based filtering.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@CurrentIteration**  
   :::column-end:::
   :::column span="3":::
      Use with **Iteration Path** to filter for work items in the current sprint based on the current team context. See [Query by date or current iteration](query-by-date-or-current-iteration.md) for examples. **@CurrentIteration** works only when run from the web portal (not in REST APIs or some copy/clone operations).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@CurrentIteration +/- n**   
   :::column-end:::
   :::column span="3":::
      Use with **Iteration Path** to include sprints relative to the current iteration (for example, `@CurrentIteration-1` or `@CurrentIteration+2`). Supported in the web portal for Azure Boards and Azure DevOps Server.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@Follows**  
   :::column-end:::
   :::column span="3":::
      Use with **ID** and the `In` operator to list work items you follow in the project. See [Follow a work item or pull request](../work-items/follow-work-items.md). This macro works only from the web portal.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@Me** 
   :::column-end:::
   :::column span="3":::
      Use with identity fields to filter for items linked to your account (for example, `Created By=@Me`). See [Query by assignment, workflow, or board changes](query-by-workflow-changes.md).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@MyRecentActivity**
   :::column-end:::
   :::column span="3":::
      Use with **ID** and `In` to list work items you viewed or updated in the last ~30 days. See the Work Items page **My activity** pivot for the same list.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@Project** 
   :::column-end:::
   :::column span="3":::
      Use with **Team Project** to filter for work items in the current project (for example, `Team Project=@Project`). See [Query across projects](using-queries.md#query-across-or-within-projects).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@RecentMentions**
   :::column-end:::
   :::column span="3":::
      Use with **ID** and `In` to list work items where you're mentioned in Discussions. See the Work Items page **Mentioned** pivot.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@RecentProjectActivity**
   :::column-end:::
   :::column span="3":::
      Use with **ID** and `In` to list recently updated work items across the project. The macro returns up to 5,000 items; the actual window depends on project activity.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@StartOfDay**
   :::column-end:::
   :::column span="3":::
      Use with DateTime fields to filter relative to today (for example, `Closed Date&gt;=@StartOfDay-7`).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@StartOfMonth**
   :::column-end:::
   :::column span="3":::
      Use with DateTime fields to filter relative to the start of the month (for example, `Created Date&gt;=@StartOfMonth-3`).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@StartOfWeek**
   :::column-end:::
   :::column span="3":::
      Use with DateTime fields to filter relative to the start of the week (for example, `Changed Date&gt;=@StartOfWeek-2`).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@StartOfYear**
   :::column-end:::
   :::column span="3":::
      Use with DateTime fields to filter relative to the year's start (for example, `Target Date&gt;=@StartOfYear`).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@TeamAreas**  
   :::column-end:::
   :::column span="3":::
      Use only with **Area Path** and the `=` operator to find items assigned to a team's area paths (for example, `Area Path=@TeamAreas [Fabrikam Fiber]\Web`). Supported in the web portal for Azure DevOps Server.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **@Today**
   :::column-end:::
   :::column span="3":::
      Use with DateTime fields to filter relative to today (for example, `Created Date&gt;=@Today-7`). See [Query by date or current iteration](query-by-date-or-current-iteration.md).
   :::column-end:::
:::row-end:::
--- 

<a id="full-text"></a> 

## Full-text and partial-word searches

Use **Contains** or **Does Not Contain** to search exact or partial matches against long-text fields (these operators use the query index). Use **Contains Words** or **Does Not Contain Words** to search exact phrases or use a trailing wildcard (`*`); these operators require the full-text index.

You can use the wildcard only at the end of a partial word or phrase. For examples, see [Example work item queries](query-index-quick-ref.md) and [Query for work items using the History field](history-and-auditing.md).

> [!NOTE]    
> Not all deployments support full-text search. For example, SQL Express and some cloud SQL configurations don't support full-text search. In those deployments, only the **Contains** and **Does Not Contain** operators are visible.

::: moniker range="< azure-devops"
Azure DevOps Server indexes long-text fields (PlainText and HTML) and the Title field for full-text search when the underlying SQL Server supports full-text indexing.

Full-text search also requires a SQL collation with a registered word breaker for the language you use. If the collection database collation doesn't match a supported language, results might not match expectations; in those cases use **Contains** or **Does Not Contain** instead.

For more information, see [Full-Text Search Queries and Collation Settings](/azure/devops/server/install/sql-server/collation-requirements).
::: moniker-end

## Related content 

- [Use the query quick reference](query-index-quick-ref.md)
- [Learn about managed queries](about-managed-queries.md)
- [Access the work item field index](../work-items/guidance/work-item-field.md)
- [Understand WIQL syntax](wiql-syntax.md)

[!INCLUDE [temp](../includes/rest-apis-queries.md)]


<!---
## Query indexed fields

In addition to the full-text search index, a query index is created. It is based on those fields that have indexing enabled. The query index improves the response time when you run queries that include indexed fields.

By default, the following fields are indexed: **Assigned To**, **Created Date**, **Changed By**, **State**, **Reason**, **Area ID**, **Iteration ID**, and **Work Item Type**. If there are other fields that your team frequently uses in their queries, you can add them to the query index.

You use the **witadmin indexfield** command to enable or disable indexing for a field. See [Manage work item fields](../../reference/witadmin/manage-work-item-fields.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json).

-->
