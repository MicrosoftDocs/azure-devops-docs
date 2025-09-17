---
title: Work Item Query Language (WIQL) reference syntax   
titleSuffix: Azure Boards   
description: Learn about the reference syntax for the Work Item Query Language used by Azure Boards. 
ms.custom: boards-queries  
ms.service: azure-devops-boards
ms.topic: reference
ai-usage: ai-assisted
ms.assetid: 95DAF407-9208-473D-9F02-4B6E7F64AD0A   
ms.author: chcomley  
author: chcomley  
monikerRange: '<= azure-devops'
ms.date: 09/17/2025
---

# Work Item Query Language (WIQL) syntax reference

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use WIQL syntax to [define a query as a hyperlink](using-queries.md#define-a-query-as-a-hyperlink) or when using the [Work Item Query Language (REST API)](/rest/api/azure/devops/wit/wiql).

WIQL supports all functions available through the web portal Query Editor plus a few more. You can specify the fields to return and logical grouping of query clauses. You can also use an `ASOF` clause to filter based on assignments as of a previous date.

> [!IMPORTANT]
> WIQL syntax is used to execute the [Query By Wiql REST API](/rest/api/azure/devops/wit/wiql/query%20by%20wiql). The API only returns work item IDs, regardless of which fields you include in the `SELECT` statement. To get full information, (1) get the IDs from WIQL, then (2) get the work items via [Get a list of work items by ID and for specific fields](/rest/api/azure/devops/wit/work-items/list).

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Permissions** | **View work items** or **View work items in this node** permission set to **Allow**. These permissions are typically granted to members of the **Readers** and **Contributors** groups for each team project. For more information, see [Permissions and groups](../../organizations/security/permissions.md). |

## Query language overview

WIQL has five parts, as shown in the following syntax snippet and described in the table. WIQL syntax isn't case-sensitive.

> [!div class="tabbedCodeSnippets"]
```WIQL
SELECT
    [System.Id],
    [System.AssignedTo],
    [System.State],
    [System.Title],
    [System.Tags]
FROM workitems
WHERE
    [System.TeamProject] = 'Design Agile'
    AND [System.WorkItemType] = 'User Story'
    AND [System.State] = 'Active'
ORDER BY [System.ChangedDate] DESC
ASOF '02-11-2025'
```

> [!TIP]
> By installing the [Wiql Editor Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.wiql-editor), you can construct queries using the Query Editor and view the WIQL syntax. You can then copy and modify the WIQL syntax and run the query using the **Wiql Playground** hub added to **Boards**.

| Clause      | Example/Description |
|-------------|--------------------|
| `SELECT`    | Identifies the fields to return for each work item. You can specify either the friendly name or reference name. Use square brackets (`[]`) if the name contains blanks or periods. |
| `FROM`      | Indicates whether you want the query to find work items or links between work items.<br>- Use `FROM WorkItems` to return work items.<br>- Use `FROM workItemLinks` to return links between work items. For more information, see [Queries for links between work items](#linked-work-items). |
| `WHERE`     | Specifies the filter criteria for the query. For more information, see [Filter conditions (`WHERE`)](#where-clause). |
| `ORDER BY`  | Specifies the sort order of the work items returned. You can specify Ascending (`Asc`) or Descending (`Desc`) for one or more fields. For example: `ORDER BY [State] Asc, [Changed Date] Desc` |
| `ASOF`      | Specifies a historical query by indicating a date for when the filter is to be applied. For example, this query returns all user stories that were defined as *Active* on February 11, 2025. Specify the date according to the guidance provided in [Date and time pattern](#date-and-time-pattern).<br>`ASOF '02-11-2025'` |

> [!NOTE]
> WIQL queries made against Azure Boards must not exceed 32-K characters. The system doesn't allow you to create or run queries that exceed that length.

[!INCLUDE [date-time-pattern](../includes/date-time-pattern.md)]

Quote (single or double quotes are supported) `DateTime` literals used in comparisons. They must be in the .NET `DateTime` format of the local client computer running the query. Unless a time zone is specified, `DateTime` literals are in the time zone of the local computer.

```WIQL
WHERE 
   AND [System.ChangedDate] >= '01-18-2025 GMT'
   AND ([Closed Date] < '01-09-2025 GMT'
   OR [Resolved Date] >= '01-18-2025 14:30:01')  
```

When the time is omitted in a `DateTime` literal and the `dayPrecision` parameter equals false, the time is assumed to be zero (midnight). The default setting for the `dayPrecision` parameter is false.

Or, you can specify ISO 8601 format, which is valid no matter the locale. ISO 8601 represents date and time by starting with the year, followed by the month, the day, the hour, the minutes, seconds, and milliseconds. For example, `2025-12-10 15:00:00.000` represents the 10th of December 2025 at 3 p.m. in local time. An example of using ISO 8601 format is as follows:

```WIQL
WHERE 
   AND [System.ChangedDate] >= '2025-01-18T00:00:00.0000000'
   AND ([Closed Date] < '2025-01-09T00:00:00.0000000'
   OR [Resolved Date] >= '2025-01-18T00:00:00.0000000')  
```

### Custom fields

::: moniker range="<=azure-devops"

You can add a custom field to a query clause. With WIQL, you must specify the reference name for the custom field. For projects that use an Inherited process model, custom fields are typically labeled with `Custom.` prepended to their name, and spaces removed. For example:

| Friendly name | Reference name|  
|---------------|---------------|
| `Approver` | `Custom.Approver` |
| `Request Type` | `Custom.RequestType` | 
| `Scope Estimate` | `Custom.CustomEstimate` | 

For projects that use the on-premises XML process model, the reference name gets defined by the XML work item type definitions.

For more information, see [Work item fields and attributes](../work-items/work-item-fields.md).

::: moniker-end

<a id="where-clause"></a>

## Specify filter clauses (`WHERE`)

The `WHERE` clause specifies the filter criteria. The query returns only work items that satisfy the specified criteria. For example, the following example `WHERE` clause returns user stories that are active and that are assigned to you.

> [!div class="tabbedCodeSnippets"]
```WIQL
WHERE [Work Item Type] = 'User Story'
   AND [State] = 'Active'
   AND [Assigned to] = @Me
```

You can control the order in which logical operators are evaluated by enclosing them within parentheses to group the filter criteria. For example, to return work items that are either assigned to you or that you closed, use the following example.

> [!div class="tabbedCodeSnippets"]
```WIQL
WHERE
    [System.TeamProject] = @project
    AND (
        [System.WorkItemType] = 'Product Backlog Item'
        AND (
            [System.AssignedTo] = @me
            OR [Microsoft.VSTS.Common.ClosedBy] = @me
        )
    )
```

### Filter conditions

Each filter condition is composed of three parts, each of which must conform to the following rules:

- **Field**: You can specify either the reference name or friendly name. The following examples are valid WIQL syntax:
    - Reference name: `SELECT [System.AssignedTo] ...`
    - Friendly name with spaces: `SELECT [Assigned To] ...`
    - Names without spaces don't require square brackets: `SELECT ID, Title ...`
- **Operator**: Valid values are specified in the [Operators](#operators) section later in this article.
- **Field value**: You can specify one of the following three values depending on the field specified.
    - A *literal value* must match the data type of the field value.
    - A *variable* or macro that indicates a certain value. For example, `@Me` indicates the person who is running the query. For more information, see [Macros and variables](#macros).
    - The name of another *field*. For example, you can use `[Assigned to] = [Changed by]` to find work items that are assigned to the person who changed the work item most recently.

For a description and reference names of all system-defined fields, see [Work item field index](../work-items/guidance/work-item-field.md).

<a id="operators"></a>

### Operators

Queries use logical expressions to qualify result sets. These logical expressions form by one or more conjoined operations.

Some simple query operations are as follows:

> [!div class="tabbedCodeSnippets"]
```WIQL
WHERE
    [System.TeamProject] = @project
    AND [System.WorkItemType] <> ''
    AND [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'
    AND [Microsoft.VSTS.Common.Severity] <> '1 - Critical'
```

The following table summarizes all the supported operators for different field types. For more information on each field type, see [Work item fields and attributes](../work-items/work-item-fields.md).

The `=`, `<>`, `>`, `<`, `>=`, and `<=` operators work as expected. For instance, `System.ID > 100` queries for all work items with an `ID` greater than 100. `System.ChangedDate > '01-01-25 12:00:00'` queries for all work items changed after noon of January 1, 2025.

Beyond these basic operators, there are some behaviors and operators specific to certain field types.

> [!NOTE]
> The operators available to you depend on your platform and version. For more information, see [Query quick reference](query-index-quick-ref.md).

| Field type | Supported operators |
|------------|--------------------|
| `Boolean`    | `= , <> , =[Field] , <>[Field]` |
| `DateTime`   | `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever` |
| `Double`, `GUID`, `Integer` | `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever` |
| `Identity`   | `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], Contains, Not Contains, In, Not In, In Group, Not In Group, Was Ever` |
| `PlainText`  | `Contains Words, Not Contains Words, Is Empty, Is Not Empty` |
| `String`     | `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], Contains, Not Contains, In, Not In, In Group, Not In Group, Was Ever` |
| `TreePath`   | `=, <>, In, Not In, Under, Not Under` |

### Logical groupings

You can use the terms `AND` and `OR` in the typical Boolean sense to evaluate two clauses. You can use the terms `AND EVER` and `OR EVER` when specifying a `WAS EVER` operator. You can group logical expressions and further conjoin them, as needed. The following examples demonstrate.

> [!div class="tabbedCodeSnippets"]
```WIQL
WHERE
    [System.TeamProject] = @project
    AND (
        [System.WorkItemType] <> ''
        AND [System.State] IN ('Active', 'Approved', 'Committed', 'In Progress')
        AND (
            [System.CreatedBy] = ''
            OR [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'
        )
    )
```

You can negate the `contains`, `under`, and `in` operators by using `not`. You can't negate the `ever` operator. The following example queries for all work items that aren't assigned under the subtree of `Fabrikam Fiber\Account Management`.

> [!div class="tabbedCodeSnippets"]
```WIQL
WHERE
    [System.TeamProject] = @project
    AND [System.WorkItemType] <> ''
    AND NOT [System.AreaPath] UNDER 'Fabrikam Fiber\Account Management'
```

### Example query, Was Ever Assigned To

The following Query Editor example finds all work items that were ever assigned to *Jamal Hartnett*.

> [!div class="mx-imgBorder"]
> ![Screenshot of Query Editor, flat list query, was ever assigned.](media/wiql/flat-list-was-ever-query.png)

The corresponding WIQL syntax is as follows:

> [!div class="tabbedCodeSnippets"]
```WIQL
SELECT
    [System.Id],
    [System.Title],
    [System.State],
    [System.IterationPath]
FROM workitems
WHERE
    [System.TeamProject] = @project
    AND [System.WorkItemType] <> ''
    AND EVER [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'
```

<a id="macros"></a>

## Macros or variables

The following table lists the macros or variables you can use within a WIQL query.

::: moniker range="<=azure-devops"

| Macro | Usage |
|-------|-------|
| `@Me` | Use this variable to automatically search for the current user's alias in a field that contains user aliases. For example, you can find work items that you opened if you set the `Field` column to `Activated By`, the `Operator` column to `=`, and the `Value` column to `@Me`. |
| `@CurrentIteration` | Use this variable to automatically filter for work items assigned to the current sprint for the selected team based on the selected team context. |
| `@Project` | Use this variable to search for work items in the current project. For example, you can find all the work items in the current project if you set the `Field` column to `Team Project`, the `Operator` column to `=`, and the `Value` column to `@Project`. |
| `@StartOfDay`<br/>`@StartOfWeek`<br/>`@StartOfMonth`<br/>`@StartOfYear` | Use these macros to filter `DateTime` fields based on the start of the current day, week, month, year, or an offset to one of these values. For example, you can find all items created in the last three months if you set the `Field` column to `Created Date`, the `Operator` column to `>=`, and the `Value` column to `@StartOfMonth - 3`. |
| `@Today` | Use this variable to search for work items that relate to the current date or to an earlier date. You can also modify the `@Today` variable by subtracting days. For example, you can find all items activated in the last week if you set the `Field` column to `Activated Date`, the `Operator` column to `>=`, and the `Value` column to `@Today - 7`. |
| `[Any]` | Use this variable to search for work items that relate to any value that is defined for a particular field. |

::: moniker-end

### `@me` macro

The `@me` macro replaces the Windows Integrated account name of the user who runs the query. The following example shows how to use the macro and the equivalent static statement. The macro is intended for use with identity fields such as `Assigned To`.

```WIQL
WHERE  
   [System.AssignedTo] = @Me 
```

### `@today` macro

You can use the `@today` macro with any `DateTime` field. This macro replaces midnight of the current date on the local computer that runs the query. You can also specify `@today+x` or `@today-y` using integer offsets for x days after `@today` and y days before `@today`, respectively. A query that uses the `@today` macro can return different result sets depending on the time zone in which it runs.

The following examples assume that today is 1/3/2025.

```WIQL
WHERE  
   [System.CreatedDate] = @today
```

Is the equivalent of:

```WIQL
WHERE  
   [System.CreatedDate] = '01-03-2025'
```

And

```WIQL
WHERE  
   [System.CreatedDate] > @today-2
```

Is the equivalent of:

```WIQL
WHERE  
   [System.CreatedDate] > '01-01-2025'
```

<a id="start-of"></a>

### `@StartOfDay`, `@StartOfWeek`, `@StartOfMonth`, `@StartOfYear` macros

You can use the `@StartOf...` macros with any `DateTime` field. This macro replaces midnight of the current day, start of week, start of month, or start of year on the local computer that runs the query.

These macros accept a modifier string that has a format of `(+/-)nn(y|M|w|d|h|m)`. Similar to the `@Today` macro, you can specify plus or minus integer offsets. If the time unit qualifier is omitted, it defaults to the natural period of the function. For example, `@StartOfWeek("+1")` is the same as `@StartOfWeek("+1w")`. If the plus/minus (+/-) sign is omitted, plus is assumed.

This syntax allows you to nest modifiers and offset your query twice. For example, the clause `Closed Date >= @StartOfYear - 1` filters work items closed since last year. When you modify it to `Closed Date >= @StartOfYear('+3M') - 1`, it excludes work items closed within the first three months of the last year. The following WIQL syntax demonstrates:

```WIQL
WHERE 
   [Microsoft.VSTS.Common.ClosedDate] >=@StartOfYear('+3M') - 1
```

The following examples assume that today is 4/5/2025.

```WIQL
WHERE  
   [Microsoft.VSTS.Common.CreatedDate] >= @StartOfMonth-3
```

Is the equivalent of:

```WIQL
WHERE 
   [Microsoft.VSTS.Common.CreatedDate] >= '01-01-2025'
```

And

```WIQL
WHERE 
   [Microsoft.VSTS.Scheduling.TargetDate] > @StartOfYear
```

Is the equivalent of:

```WIQL
WHERE 
   [Microsoft.VSTS.Scheduling.TargetDate]  > '01-01-2025'
```

### Custom macros

WIQL also supports arbitrary custom macros. Any string prefixed by an `@` is treated as a custom macro and gets substituted. The replacement value for the custom macro is retrieved from the context parameter of the query method in the object model. The following method is the API used for macros:

```csharp
public WorkItemCollection Query(string wiql, IDictionary context)
```

The context parameter contains key-value pairs for macros. For example, if the context contains a key-value pair of (`project`, `MyProject`), then `@project` gets replaced by `MyProject` in the WIQL. This replacement is how the work item query builder handles the `@project` macro in Visual Studio.

## Specify historical queries (`ASOF`)

You can use an `ASOF` clause in a query to filter for work items that satisfy the specified filter conditions as they were defined on a specific date and time.

> [!NOTE]
> You can’t create `ASOF` queries in the query builder in Visual Studio. If you create a query file (`.wiq`) that includes an `ASOF` clause, and then load that in Visual Studio, the `ASOF` clause is ignored.

Suppose a work item was classified under an `Iteration Path` of `Fabrikam Fiber\Release 1` and assigned to 'Jamal Hartnett' before 5/05/2025. However, the work item was recently assigned to 'Raisa Pokrovskaya' and moved to a new iteration path of Release 2. The following example query returns work items assigned to Jamal Hartnett because the query is based on the state of work items as of a past date and time.

```WIQL
SELECT
    [System.Id],
    [System.Title],
    [System.State],
    [System.IterationPath]
FROM workitems
WHERE
    [System.TeamProject] = @project
    AND [System.WorkItemType] <> ''
    AND ([System.IterationPath] UNDER 'Fabrikam Fiber\Release 1'
    AND [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>') 
    ASOF  '01-05-2025 00:00:00.0000000'
```

> [!NOTE]
> If no time is specified, WIQL uses midnight. If no time zone is specified, WIQL uses the time zone of the local client computer.

## Set the sort order (`ORDER BY`)

You can use the `ORDER BY` clause to sort the results of a query by one or more fields in ascending or descending order.

>[!NOTE]
>The sorting preferences of the SQL server on the data tier determine the default sort order. However, you can use the `asc` or `desc` parameters to choose an explicit sort order.

The following example sorts work items first by `Priority` in ascending order (default), and then by `Created Date` in descending order (`DESC`).

```WIQL
SELECT
    [System.Id],
    [System.Title],
    [System.State],
    [System.IterationPath]
FROM workitems
WHERE
    [System.TeamProject] = @project
    AND [System.WorkItemType] <> ''
    AND [System.State] =  'Active'
    AND [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'
ORDER BY [Microsoft.VSTS.Common.Priority],
    [System.CreatedDate] DESC
```

<a id="linked-work-items"></a>

## Query for links between work items

To return links between work items, specify `FROM WorkItemLinks`. Filter conditions in the `WHERE` clause might apply to the links or to any work item that is the source or the target of a link. The following example returns the links between `Product Backlog Items` and their active child items.

> [!div class="tabbedCodeSnippets"]
```WIQL
SELECT
    [System.Id],
    [System.Title],
    [System.State],
    [System.IterationPath]
FROM workitemLinks
WHERE
    (
        [Source].[System.TeamProject] = @project
        AND [Source].[System.WorkItemType] = 'Product Backlog Item'
    )
    AND (
        [System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'
    )
    AND (
        [Target].[System.TeamProject] = @project
        AND [Target].[System.WorkItemType] <> ''
        AND [Target].[System.State] <> 'Closed'
    )
MODE (Recursive)
```

The following table summarizes the differences between work item queries and queries for links between work items.

| Clause | Work items | Links between work items |
|--------|-----------|-------------------------|
| `FROM` | `FROM WorkItems` | `FROM WorkItemLinks` |
| `WHERE` | `[FieldName] = Value` | Specify one or more of the following:<br>`[Source].[FieldName] = Value`<br>`[Target].[FieldName] = Value`<br>`[System.Links.LinkType] = 'LinkName'` |
| `MODE` | not applicable | Specify one of the following:<br>- `MODE (MustContain)`: (Default) Returns only `WorkItemLinkInfo` records where the source, target, and link criteria are all satisfied.<br>- `MODE (MayContain)`: Returns `WorkItemLinkInfo` records for all work items that satisfy the source and link criteria, even if no linked work item satisfies the target criteria.<br>- `MODE (DoesNotContain)`: Returns `WorkItemLinkInfo` records for all work items that satisfy the source, only if no linked work item satisfies the link and target criteria.<br>- `MODE (Recursive)`: Use for Tree queries (`[System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'`). Link type must be Tree topology and forward direction. Returns `WorkItemLinkInfo` records for all work items that satisfy the source, recursively for target. `ORDER BY` and `ASOF` aren't compatible with tree queries. |
| `RETURNS` | [`WorkItemQueryResult`](/rest/api/azure/devops/wit/wiql/query%20by%20wiql#workitemqueryresult) | [`WorkItemLink`](/rest/api/azure/devops/wit/wiql/query%20by%20wiql#workitemlink) |

::: moniker range="azure-devops"
You can specify one of the following system link type names.
::: moniker-end

::: moniker range="< azure-devops"
You can specify one of the following system link type names or [a custom link type defined with the on-premises XML process](/previous-versions/azure/devops/reference/xml/link-type-element-reference).
::: moniker-end

- `System.LinkTypes.Hierarchy-Forward`
- `System.LinkTypes.Related`
- `System.LinkTypes.Dependency-Predecessor`
- `System.LinkTypes.Dependency-Successor`
- `Microsoft.VSTS.Common.Affects-Forward` (CMMI process)

For more information, see [Link type reference](link-type-reference.md).

### Tree type query example

> [!NOTE]
> `ORDER BY` and `ASOF` aren't compatible with tree queries. Don't include these clauses in tree queries.

The following query returns all work item types defined in the current project. The Query Editor displays the query as shown in the following image.

> [!div class="mx-imgBorder"]
> ![Screenshot of Query Editor, tree query, all work items and states.](media/wiql/tree-query-all-work-items.png)

The equivalent WIQL syntax is as follows:

```WIQL
SELECT
    [System.Id],
    [System.Title],
    [System.State],
    [System.IterationPath]
FROM workitemLinks
WHERE
    (
        [Source].[System.TeamProject] = @project
        AND [Source].[System.WorkItemType] <> ''
        AND [Source].[System.State] <> ''
    )
    AND (
        [System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'
    )
    AND (
        [Target].[System.TeamProject] = @project
        AND [Target].[System.WorkItemType] <> ''
    )
MODE (Recursive)
```

### Direct-link query example

The following example returns all work item types defined in the current project. The Query Editor displays the query as shown in the following image.

> [!div class="mx-imgBorder"]
> ![Screenshot of Query Editor, direct-link query, all work items and states.](media/wiql/direct-link-query.png)

The equivalent WIQL syntax is as follows:

> [!div class="tabbedCodeSnippets"]
```WIQL
SELECT
    [System.Id],
    [System.WorkItemType],
    [System.Title],
    [System.AssignedTo],
    [System.State]
FROM workitemLinks
WHERE
    (
        [Source].[System.TeamProject] = @project
        AND [Source].[System.WorkItemType] <> ''
        AND [Source].[System.State] <> ''
    )
    AND (
        [System.Links.LinkType] = 'System.LinkTypes.Dependency-Reverse'
        OR [System.Links.LinkType] = 'System.LinkTypes.Related-Forward'
        OR [System.Links.LinkType] = 'System.LinkTypes.Dependency-Forward'
    )
    AND (
        [Target].[System.TeamProject] = @project
        AND [Target].[System.WorkItemType] <> ''
        AND [Target].[System.ChangedDate] >= @today - 60
    )
ORDER BY [System.Id]
MODE (MustContain)
```

## More query examples

The following typical WIQL query example uses reference names for the fields. The query selects work items (no work item type specified) with a `Priority=1`. The query returns the `ID` and `Title` of the return set as columns. The results are sorted by `ID` in ascending order.

> [!div class="tabbedCodeSnippets"]
```WIQL
SELECT
    [System.Id],
    [System.Title],
    [System.State],
    [System.IterationPath]
FROM workitems
WHERE
    [System.TeamProject] = @project
    AND [Microsoft.VSTS.Common.Priority] <> ''
ORDER BY [System.Id]
```

### Date-time pattern

You specify the date-time pattern according to one of two patterns:
- The Date Pattern and Time Pattern format comes from your [user preferences, time, and locale](../../organizations/settings/set-your-preferences.md)
- The pattern specified by UTC, which follows this pattern (with Z appended to the date-time).

`AND [System.ChangedDate] >= '1/1/2025 00:00:00Z'`

### Example clauses

The following example statements show specific qualifying clauses.

| Clause | Example |
|--------|---------|
| `AND` | <br>```SELECT [System.Id], [System.Title]<br>FROM WorkItems<br>WHERE [System.TeamProject] = @project<br>AND [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'``` |
| `OR` | <br>```SELECT [System.Id], [System.Title]<br>FROM WorkItems<br>WHERE [System.TeamProject] = @project<br>AND ([System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'<br>OR [System.AssignedTo] = 'Raisa Pokrovskaya <fabrikamfiber5@hotmail.com>')``` |
| `NOT` | <br>```SELECT [System.Id], [System.Title]<br>FROM WorkItems<br>WHERE [System.TeamProject] = @project<br>AND [System.AssignedTo] EVER 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'<br>AND [System.AssignedTo] NOT CONTAINS 'Raisa Pokrovskaya <fabrikamfiber5@hotmail.com>'``` |
| `EVER` | <br>```SELECT [System.Id], [System.Title]<br>FROM WorkItems<br>WHERE [System.TeamProject] = @project<br>AND [System.AssignedTo] EVER 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'``` |
| `UNDER` | <br>```SELECT [System.Id], [System.Title]<br>FROM WorkItems<br>WHERE [System.TeamProject] = @project<br>AND [System.AssignedTo] EVER 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'<br>AND [System.AreaPath] UNDER 'Agile1\Area 0'``` |
| `ORDER BY` | <br>```SELECT [System.Id], [System.Title]<br>FROM WorkItems<br>WHERE [System.TeamProject] = @project<br>AND [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'<br>ORDER BY [System.Id] [asc | desc]``` |
| `ASOF` (Time filter) | <br>```SELECT [System.Title]<br>FROM workitems<br>WHERE [System.IterationPath] = 'MyProject\Beta'<br>AND [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'<br>ASOF '3/16/25 12:30'``` |

### String and PlainText

Quote string literals (single or double quotes are supported) in a comparison with a `String` or `PlainText` field. String literals support all Unicode characters.

```WIQL
WHERE [Custom.Blocking] = 'Not Blocking'
WHERE [Custom.Blocking] <> 'Blocked'
```

You can use the `contains` operator to search for a substring anywhere in the field value.

```WIQL
WHERE [System.Description] contains 'WIQL'
```

### Area and Iteration (`TreePath`)

You can use the `UNDER` operator for the `Area Path` and `Iteration Path` fields. The `UNDER` operator evaluates whether a value is within the subtree of a specific classification node. For instance, the following expression evaluates to true if the `Area Path` were `MyProject\Server\Administration`, `MyProject\Server\Administration\Feature 1`, `MyProject\Server\Administration\Feature 2\SubFeature 5`, or any other node within the subtree.

```WIQL
WHERE [System.AreaPath] UNDER `MyProject\Server\Administration`
```

### Modifiers and special operators

You can use some modifiers and special operators in a query expression.

Use the `IN` operator to evaluate whether a field value is equal to any of a set of values. This operator is supported for the `String`, `Integer`, `Double`, and `DateTime` field types. The following example and its semantic equivalent demonstrate this.

```WIQL
WHERE
    [System.TeamProject] = @project
    AND [System.CreatedBy] IN ('Jamal Hartnett <fabrikamfiber4@hotmail.com>', 'Raisa Pokrovskaya <fabrikamfiber5@hotmail.com>', 'Christie Church <fabrikamfiber1@hotmail.com>')

or

WHERE
    [System.TeamProject] = @project
    AND (
        [System.CreatedBy] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'
        OR [System.CreatedBy] = 'Raisa Pokrovskaya <fabrikamfiber5@hotmail.com>'
        OR [System.CreatedBy] = 'Christie Church <fabrikamfiber1@hotmail.com>'
    )
```

The `EVER` operator is used to evaluate whether a field value equals or ever equaled a particular value throughout all past revisions of work items. The `String`, `Integer`, `Double`, and `DateTime` field types support this operator. There are alternate syntaxes for the `EVER` operator. For example, the following snippets query whether all work items were ever assigned to Jamal, Raisa, or Christie.

```WIQL
WHERE
    [System.TeamProject] = @project
    AND (
        EVER [System.AssignedTo] = 'Jamal Hartnett <fabrikamfiber4@hotmail.com>'
        OR EVER [System.AssignedTo] = 'Raisa Pokrovskaya <fabrikamfiber5@hotmail.com>'
        OR EVER [System.AssignedTo] = 'Christie Church <fabrikamfiber1@hotmail.com>'
    )
```

## Use Copilot to write, fix, and optimize WIQL

You can use an AI assistant (for example, GitHub Copilot or other copilots) to help create, correct, or optimize WIQL queries. Treat Copilot as a productivity aid—not an authoritative source—and always review and test any generated query before running it against production data.

Guidance and best practices:

- **Capabilities**: Copilot can translate plain-language requirements into WIQL, fix syntax errors (unmatched brackets, missing commas, incorrect keywords), convert SELECT lists between friendly and reference names, generate `ASOF` clauses or date literals, and suggest clause rewrites to narrow or broaden result sets.
- **Validate**: Always validate generated WIQL in the Query Editor or a safe test project. Check macros (for example `@Me`, `@Today`) and locale-dependent date formats before use.
- **Security**: Never paste secrets, access tokens, or any private connection strings into prompts. Remove or redact any sensitive values in examples you feed to Copilot.
- **Performance**: Ask Copilot to minimize result payloads (return only needed fields), add appropriate WHERE filters, and avoid overly broad use of `IN` or unbounded `LIKE` searches. Remember the 32-K character limit for WIQL queries.
- **Review edge cases**: Confirm behavior for historical (`ASOF`) queries, tree/link queries (`FROM workItemLinks`), and `WAS EVER`/`EVER` operators that scan revisions—these can be more complex and might need manual tuning.

Example - Generate WIQL from plain English:

Prompt: "Return ID and Title for active Bugs assigned to @Me in project 'Fabrikam' and modified in the last 30 days. Sort by ChangedDate desc."

Copilot produces:

  ```WIQL
  SELECT [System.Id], [System.Title]
  FROM workitems
  WHERE
    [System.TeamProject] = 'Fabrikam'
    AND [System.WorkItemType] = 'Bug'
    AND [System.State] = 'Active'
    AND [System.AssignedTo] = @Me
    AND [System.ChangedDate] >= @Today - 30
  ORDER BY [System.ChangedDate] DESC
  ```

### Automate WIQL queries with REST API and AI

You can use AI assistants, like Copilot, to automate the two-step WIQL REST API process:

1. Use the [Query By Wiql REST API](/rest/api/azure/devops/wit/wiql/query-by-wiql) to retrieve work item IDs matching your WIQL.
2. Use the [Get Work Items API](/rest/api/azure/devops/wit/work-items/list) to fetch full details for those IDs.

AI can help you:
- Generate WIQL from plain language, then chain the two API calls in code (for example, Python, PowerShell, or JavaScript).
- Format and summarize results for dashboards or reports.

> [!TIP]
> For REST API details, see [Query By Wiql (REST API)](/rest/api/azure/devops/wit/wiql/query-by-wiql?view=azure-devops-rest-6.1&tabs=HTTP&preserve-view=true).

**Example: Automate WIQL with Python and AI**

Suppose you want to list the titles and states of all active bugs in a project.

**Prompt to Copilot:**  
"Write Python code that uses the Azure DevOps REST API to list the titles and states of all active bugs in my project. Use WIQL to get the IDs, then fetch the details for those IDs."

You can use Copilot to generate code like this:

```python
import requests

# Azure DevOps organization and project info
org = "your-org"
project = "your-project"
pat = "your-personal-access-token"
headers = {"Authorization": f"Basic {pat}"}

# Step 1: Run WIQL query to get work item IDs
wiql = {
    "query": """
        SELECT [System.Id]
        FROM workitems
        WHERE [System.TeamProject] = '{project}'
          AND [System.WorkItemType] = 'Bug'
          AND [System.State] = 'Active'
    """.format(project=project)
}
wiql_url = f"https://dev.azure.com/{org}/{project}/_apis/wit/wiql?api-version=6.1-preview.2"
resp = requests.post(wiql_url, json=wiql, headers=headers)
ids = [item["id"] for item in resp.json()["workItems"]]

# Step 2: Get work item details
if ids:
    ids_str = ",".join(map(str, ids))
    details_url = f"https://dev.azure.com/{org}/{project}/_apis/wit/workitemsbatch?api-version=6.1-preview.1"
    body = {"ids": ids, "fields": ["System.Title", "System.State"]}
    details_resp = requests.post(details_url, json=body, headers=headers)
    for item in details_resp.json()["value"]:
        print(f"{item['fields']['System.Title']} - {item['fields']['System.State']}")
else:
    print("No active bugs found.")
```

## Related content

- [Query By Wiql (REST API)](/rest/api/azure/devops/wit/wiql/query-by-wiql?view=azure-devops-rest-6.1&tabs=HTTP)
- [Get Work Items (REST API)](/rest/api/azure/devops/wit/work-items/list?view=azure-devops-rest-6.1&tabs=HTTP)
- [Query quick reference](query-index-quick-ref.md)
- [Work item fields and attributes](../work-items/work-item-fields.md)
- [Link type reference](link-type-reference.md)
- [Permissions and groups](../../organizations/security/permissions.md)
- [Set your preferences](../../organizations/settings/set-your-preferences.md)
