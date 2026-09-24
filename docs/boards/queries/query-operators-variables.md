---
title: Query fields, operators, macros, and variables
titleSuffix: Azure Boards
description: Learn about field data types, operators, and macros/variables used by the Query Editor in Azure Boards and Azure DevOps.
ms.custom: boards-queries, engagement-fy23
ms.service: azure-boards
ms.author: chcomley
author: chcomley
?ms.topic: reference
monikerRange: '<= azure-devops'
ms.date: 07/06/2026
ai-usage: ai-assisted
---


# Query fields, operators, and macros

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

> [!TIP]
> **First time querying?** Start with [Define a query](using-queries.md) for procedural steps or [Query quick reference](query-index-quick-ref.md) for examples.

Use this reference guide to look up field data types, query operators, macros, and variables when building queries in the Query Editor. All operators and macros are supported in Azure Boards; some apply only to specific Azure DevOps Server versions.

For quick examples and editor tasks, see [Query quick reference](query-index-quick-ref.md) and [Manage and organize queries](organize-queries.md).

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

<a id="field-values"></a> 

## Query field data types and values

Specify a value that matches the data type for a field. The following table lists supported data types:

> [!NOTE]
> For Azure Boards (cloud), the data type matches the field shown on the [Process > Fields page](../work-items/work-item-fields.md#review-fields). For on-premises deployments, the data type corresponds to the `type` attribute on a [`FIELD` definition](/previous-versions/azure/devops/reference/xml/field-definition-element-reference). See [Work item fields and field attributes](../work-items/work-item-fields.md) for details. 

| Data type | Description |
|---|---|
| **Boolean** | Stores a True/False value. |
| **DateTime** or **Date/Time** | Use a date variable (e.g., `@Today` or `@Today-1`) or an explicit date like `01/01/2025`. Enter dates in the pattern set in your profile. For query examples, see [Query by date or @CurrentIteration](query-by-date-or-current-iteration.md). For WIQL queries, you can also specify dates in UTC. See [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md). |
| **Double** or **Decimal** | Stores a real number, such as 0.2 or 3.5. See [Query by numeric fields](query-numeric.md) for examples. |
| **GUID** | Stores a unique identifier string. |
| **History** | Custom formatted field used for historical information (the **History** field). When full-text search is available, this field is indexed for full-text queries. See [History and auditing](history-and-auditing.md). |
| **HTML** | Stores formatted text, such as **Description** or **Repro Steps**. When full-text search is available, these fields are indexed. To query rich-text fields, see [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md). |
| **Identity** | Stores a short text string that identifies a user identity. |
| **Integer** | Stores a signed 32-bit integer, such as 0, 1, 2, or 34. |
| **PlainText** or **Text field (multi-line)** | Stores long text values, such as **Application Start Information**. These fields index for full-text search when supported. See [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md). |
| **picklistDouble** | Custom field that holds a pick list of decimal values. |
| **picklistInteger** | Custom field that holds a pick list of integer values. |
| **picklistString** | Custom field that holds a pick list of short text values (255 characters or less). |
| **String** or **Text field (single line)** | Stores short text up to 255 Unicode characters. Teams often use these fields for picklists or drop-down menus. |
| **TreePath** | Represents a branching tree, such as Area Path or Iteration Path. Choose a valid node value. You can filter for equality, inequality, "Under," or "Not Under." Use the `In` and `Not In` operators to specify multiple values. Define tree structures for a project - [area paths](../../organizations/settings/set-area-paths.md) and [iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) - and select the nodes to associate with teams. For query examples, see [Query by area or iteration path](query-by-area-iteration-path.md) and [Query by date or current iteration](query-by-date-or-current-iteration.md). |

> [!NOTE]
> The `picklist...` types only apply to custom fields defined for an inherited process.

[!INCLUDE [date-time-pattern](../includes/date-time-pattern.md)]

<a id="operators"></a> 

## Query operators

Use operators to define how a clause value must relate to a work item's field value. For field data types, see [Work item field reference](../work-items/guidance/work-item-field.md). For help building queries, see [Define a query](using-queries.md).

| Query operator | When the operator returns matching work items | Applicable data types |
|---|---|---|
| **=** | Matches the clause value. | Number (Double/Decimal/GUID/Integer), String, DateTime, TreePath |
| **<>** | Doesn't match the clause value. | Number, String, DateTime, TreePath |
| **>** | Is greater than the clause value. | Number, String, DateTime |
| **<** | Is less than the clause value. | Number, String, DateTime |
| **>=** | Is greater than or equal to the clause value. | Number, String, DateTime |
| **<=** | Is less than or equal to the clause value. | Number, String, DateTime |
| **=[Field]** | Matches the value in another specified field (must be the same data type). | Name of a field of the same data type (Boolean fields compare equality to other fields). |
| **<>[Field]** | Doesn't match the value in another specified field. | Name of a field of the same data type. |
| **>[Field]** | Is greater than the value in another specified field. | Name of a field of the same data type. |
| **<[Field]** | Is less than the value in another specified field. | Name of a field of the same data type. |
| **>=[Field]** | Is greater than or equal to the value in another specified field. | Name of a field of the same data type. |
| **<=[Field]** | Is less than or equal to the value in another specified field. | Name of a field of the same data type. |
| **Contains** | Contains an exact or partial text match. | String |
| **Does Not Contain** | Doesn't contain an exact or partial text match. | String |
| **Contains Words** | Matches an exact phrase or words (supports trailing wildcard `*`). Limit: 100 characters. This operator uses full-text indexing; see the Full-text section in this article for server and collation requirements. | Long-text fields indexed for full-text search (PlainText, HTML, History, and Title). |
| **Does Not Contain Words** | Excludes items that contain the specified phrase or words. Limit: 100 characters. Use with `Contains Words` in companion clauses to include or exclude keywords. | Text fields indexed for full-text search. |
| **In** | Matches any value in a delimited set (use your OS regional list separator, typically a comma). | Number, String, DateTime, TreePath |
| **Is Empty** | Matches items where an HTML field contains no content (no value specified). Supported for Azure Boards and Azure DevOps Server. | HTML |
| **Is Not Empty** | Matches items where an HTML field contains content. Supported for Azure Boards and Azure DevOps Server. | HTML |
| **Not In** | Excludes values in a delimited set (use the regional list separator). Supported for Azure Boards and Azure DevOps Server. | Number, String, DateTime, TreePath |
| **In Group** | Matches values that are members of a named group (team, security group, or category). For example, use the Contributors group or a team group named in the pattern `[Project Name]\Team Name`. See [Query by assignment or workflow changes](query-by-workflow-changes.md) for examples. Use **In Group** only with String-type fields or Work Item Type. You can use Microsoft Entra ID groups when your account uses Microsoft Entra ID, or Active Directory groups for on-premises. | String (matches group or team name) or Work Item Type |
| **Not in Group** | Excludes members of a named group. | String that matches a user group or project category. |
| **Not Under** | Excludes items equal to or contained under the specified tree node. | TreePath |
| **Under** | Matches items equal to or contained under the specified tree node. | TreePath |
| **Was Ever** | Matches a value that a field held at any previous time. (Query Editor: String fields only. DateTime support requires direct WIQL queries.) | String, DateTime |

> [!TIP] 
> You can construct WIQL queries that use operators (for example, `Was Ever`) against other data types such as Iteration Path. See [List work items moved out of a sprint](query-by-date-or-current-iteration.md#list-work-items-moved-out-sprint) for an example.

### Common operator examples

Here are representative query examples that use various operators:

| Query | Returns |
|-------|---------|
| `State = Active` | Work items with state "Active" |
| `Priority <> Low` | All items except those with low priority |
| `Created Date >= @Today-7` | Work items created in the last 7 days |
| `Assigned To = @Me` | Items assigned to the current user |
| `Tags Contains "frontend"` | Items with a tag containing "frontend" |
| `State In (Active, In Progress)` | Items in either state |
| `Area Path Under "Project\Web"` | All items under the Web area, including subareas |
| `Assigned To In Group "[Project]\Developers"` | Items assigned to anyone in the Developers group |
| `Description Contains Words "urgent"` | Items where the description contains the word "urgent" |

<a id="full-text"></a>

## Full-text and partial-word searches

Use **Contains** or **Does Not Contain** to search exact or partial matches against long-text fields. These operators use the query index. Use **Contains Words** or **Does Not Contain Words** to search exact phrases or use a trailing wildcard (`*`). These operators require the full-text index.

You can use the wildcard only at the end of a partial word or phrase. For examples, see [Example work item queries](query-index-quick-ref.md) and [Query for work items using the History field](history-and-auditing.md).

> [!NOTE]
> Not all deployments support full-text search. For example, SQL Express and some cloud SQL configurations don't support full-text search. In those deployments, only the **Contains** and **Does Not Contain** operators are visible.

::: moniker range="< azure-devops"
Azure DevOps Server indexes long-text fields (PlainText and HTML) and the Title field for full-text search when the underlying SQL Server supports full-text indexing.

Full-text search also requires a SQL collation with a registered word breaker for the language you use. If the collection database collation doesn't match a supported language, results might not match expectations. In those cases, use **Contains** or **Does Not Contain** instead.

For more information, see [Full-Text Search Queries and Collation Settings](/azure/devops/server/install/sql-server/collation-requirements).
::: moniker-end

<a id="combining-operators"></a>

## Combining operators

Queries use **AND** logic to combine multiple clauses. Each additional clause filters results further. For example:

- `State = Active AND Priority = High` returns work items that are both active AND have high priority.
- `State = Active AND State <> Closed` returns active items excluding those marked as closed.
- `Assigned To = @Me AND State <> Done` returns items assigned to you that aren't complete.

You can use parentheses to group conditions for complex queries in direct WIQL syntax:
- `(State = Active OR State = In Progress) AND Priority = High` returns high-priority items in active or in-progress states.

For more examples and WIQL syntax details, see [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md).

<a id="troubleshooting"></a>

## Troubleshooting and common mistakes

| Problem | Likely Cause | Solution |
|---------|---------|----------|
| **Macro returns no results** | @CurrentIteration works only in web portal; REST APIs and CLI might return empty results | Use direct dates instead in scripts or APIs. For alternatives, see [Query by date or current iteration](query-by-date-or-current-iteration.md). |
| **@TeamAreas query returns unexpected results** | Macro only works with **Area Path** field; using it with other fields has no effect | Verify you're filtering on **Area Path**. Use other tree-path fields (Iteration Path) with **Under** operator instead. |
| **Contains Words operator error** | Query exceeds 100-character limit or uses invalid wildcard placement | Reduce query text to under 100 characters. Use wildcard only at end of term (for example, `feature*`), not at start. |
| **In Group query fails** | Group name format incorrect or group doesn't exist | Use exact format: `Assigned To In Group "[Project]\\Team Name"` for teams. Verify group name in project settings. |
| **Was Ever operator not working on dates** | Query Editor doesn't support `Was Ever` on DateTime fields | Use direct WIQL syntax instead of visual query editor. For more information, see [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md). |
| **Boolean field query returns no results** | Value is case-sensitive in WIQL queries | Use exact case: `CustomBoolField = True` or `CustomBoolField = False` (capital T/F in WIQL). |

<a id="variables"></a> 
<a id="macros"></a> 

## Query macros and variables

Use the following macros to filter queries dynamically.

[!INCLUDE [temp](../includes/note-macro-web-portal.md)]

| Macro | Description |
|---|---|
| **[Any]** | Use with **Work Item Type** or **State** to search across all types or states. For example, `Work Item Type=[Any]` removes type-based filtering. |
| **@CurrentIteration** | Use with **Iteration Path** to filter for work items in the current sprint based on the current team context. See [Query by date or current iteration](query-by-date-or-current-iteration.md) for examples. **@CurrentIteration** works only when run from the web portal (not in REST APIs or some copy/clone operations). |
| **@CurrentIteration +/- n** | Use with **Iteration Path** to include sprints relative to the current iteration (for example, `@CurrentIteration-1` or `@CurrentIteration+2`). Supported in the web portal for Azure Boards and Azure DevOps Server. |
| **@Follows** | Use with **ID** and the `In` operator to list work items you follow in the project. See [Follow a work item or pull request](../work-items/follow-work-items.md). This macro works only from the web portal. |
| **@Me** | Use with identity fields to filter for items linked to your account (for example, `Created By=@Me`). See [Query by assignment, workflow, or board changes](query-by-workflow-changes.md). |
| **@MyRecentActivity** | Use with **ID** and `In` to list work items you viewed or updated in the last ~30 days. See the Work Items page **My activity** pivot for the same list. |
| **@Project** | Use with **Team Project** to filter for work items in the current project (for example, `Team Project=@Project`). See [Query across projects](using-queries.md#query-across-or-within-projects). |
| **@RecentMentions** | Use with **ID** and `In` to list work items where you're mentioned in Discussions. See the Work Items page **Mentioned** pivot. |
| **@RecentProjectActivity** | Use with **ID** and `In` to list recently updated work items across the project. The macro returns up to 5,000 items; the actual window depends on project activity. |
| **@StartOfDay** | Use with DateTime fields to filter relative to today (for example, `Closed Date>=@StartOfDay-7`). |
| **@StartOfMonth** | Use with DateTime fields to filter relative to the start of the month (for example, `Created Date>=@StartOfMonth-3`). |
| **@StartOfWeek** | Use with DateTime fields to filter relative to the start of the week (for example, `Changed Date>=@StartOfWeek-2`). |
| **@StartOfYear** | Use with DateTime fields to filter relative to the year's start (for example, `Target Date>=@StartOfYear`). |
| **@TeamAreas** | Use only with **Area Path** and the `=` operator to find items assigned to a team's area paths (for example, `Area Path=@TeamAreas [Fabrikam Fiber]\Web`). Supported in the web portal for Azure Boards and Azure DevOps Server. |
| **@Today** | Use with DateTime fields to filter relative to today (for example, `Created Date>=@Today-7`). See [Query by date or current iteration](query-by-date-or-current-iteration.md). |

### Common macro examples

Here are representative query examples that use macros to make queries dynamic:

| Query | Returns (Web Portal) |
|-------|---------|
| `Iteration Path = @CurrentIteration` | Work items in the current sprint |
| `Iteration Path = @CurrentIteration-1` | Work items in the previous sprint |
| `Assigned To = @Me` | Items assigned to the current user |
| `Created Date >= @Today-30` | Items created in the last 30 days |
| `State = Active AND Area Path = @TeamAreas [Project]\MyTeam` | Active items in your team's area |
| `Work Item Type = [Any]` | All work item types (removes type filtering) |
| `Assigned To In Group @Follows` | Items assigned to people you follow |

> [!NOTE]
> Macros like `@CurrentIteration`, `@Me`, `@Follows`, and `@TeamAreas` work only in the web portal. For REST APIs, CLI, and Power BI, use direct dates and user IDs instead. For alternatives, see [Query by date or current iteration](query-by-date-or-current-iteration.md).

## Related content 

- [Use the query quick reference](query-index-quick-ref.md)
- [Learn about managed queries](about-managed-queries.md)
- [Access the work item field index](../work-items/guidance/work-item-field.md)
- [Understand WIQL syntax](wiql-syntax.md)

[!INCLUDE [temp](../includes/rest-apis-queries.md)]


<!---
## Query indexed fields

In addition to the full-text search index, a query index is created. It's based on fields that have indexing enabled. The query index improves the response time when you run queries that include indexed fields.

By default, the following fields are indexed: **Assigned To**, **Created Date**, **Changed By**, **State**, **Reason**, **Area ID**, **Iteration ID**, and **Work Item Type**. If your team frequently uses other fields in their queries, add those fields to the query index.

Use the **witadmin indexfield** command to enable or disable indexing for a field. See [Manage work item fields](../../reference/witadmin/manage-work-item-fields.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json).

-->
