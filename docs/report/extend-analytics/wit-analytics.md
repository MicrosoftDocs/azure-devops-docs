---
title: Define basic queries using OData Analytics
titleSuffix: Azure DevOps
description: Learn how to construct OData queries for Azure DevOps to retrieve and analyze work tracking data. Master filtering, expanding, and sorting techniques.
ms.subservice: azure-devops-analytics
ms.custom: engagement-fy23, copilot-scenario-highlight
ms.assetid: 0ABC2F7B-AFA5-465F-8DFE-4779D90452CD  
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<= azure-devops"
ms.date: 03/18/2026
ai-usage: ai-assisted
#customer intent: As an Azure DevOps user, I want to learn how to construct OData queries to return work tracking data so I can monitor and report on the progress of my projects.

---

# Define basic queries using OData Analytics

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use Analytics OData queries to retrieve work tracking data from Azure DevOps in your browser or in client tools like Excel and Power BI. This article covers counting items, selecting specific fields with `$select`, filtering with `$filter`, expanding navigation properties with `$expand`, querying date ranges, and sorting with `$orderby`.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

The examples focus on Azure Boards work tracking entity sets, but the same principles apply to other entity sets. For more information, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md) and [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md).

[!INCLUDE [temp](../includes/analytics-preview.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

> [!NOTE]
> - Cross-project queries fail when the user running the query doesn't have access to all projects. For more information, see [Project and organization-scoped queries](account-scoped-queries.md).
> - The examples in this article use the Azure DevOps Services URL format: `https://analytics.dev.azure.com/{OrganizationName}/`. For Azure DevOps Server, use `https://{servername}/{CollectionName}/` instead. For more information, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md). 

<a id="return-count-items"></a>
<a id="return-a-count-of-items-no-other-data"></a>

## Get a count of items

To return only a count without other data, append `$apply=aggregate($count as Count)` to any entity set URL. For example, the following queries count projects, work items, area paths, and users across an organization:

```OData
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Projects?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/WorkItems?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Areas?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Users?$apply=aggregate($count as Count)
```

The `Projects` query for the `fabrikam` organization returns:

```OData
{
  "value": [
    {
      "Count": 16
    }
  ]
}
```

<a id="return-count-items-with-data"></a>
<a id="return-a-count-of-items-and-data"></a>

## Get a count of items and their data 

To return a count alongside the data, add `$count=true` to a query that includes a `$select` clause. The following queries return a count plus selected properties for work items, area paths, and users in a project:

```OData 
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/WorkItems?$count=true&$select=WorkItemId,Title,WorkItemType 
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/Areas?$count=true&$select=AreaName,AreaPath 
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/Users?$count=true&$select=UserName,UserEmail
```

> [!NOTE]
> Always include `$select` or `$apply` in your query. Omitting both triggers a warning and can hit usage limits.

For valid property names, see [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md) and [Calendar date, Project, and User metadata reference](../analytics/entity-reference-general.md).

For example, the following query returns the count and user names in the **Fabrikam Fiber** project:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Users?$count=true&$select=UserName
```

The response includes the total count in `@odata.count` and the matching records in `value`:

```OData
{
  "@odata.count": 5,
  "value": [
    { "UserName": "Microsoft.VisualStudio.Services.TFS" },
    { "UserName": "fabrikamfiber1@hotmail.com" },
    { "UserName": "Jamal Hartnett" },
    { "UserName": "fabrikamfiber5@hotmail.com" },
    { "UserName": "fabrikamfiber2@hotmail.com" }
  ]
}
```

<a id="select-columns"></a>

## Select specific properties or fields 

Add a `$select` clause to return only the properties you need. Property names are case-sensitive, can't contain spaces, and correspond to work item field names. For example, `$select=WorkItemId,WorkItemType,Title,State` returns those four fields.

For property name lookups, including custom fields, see [Metadata reference for Azure Boards](../analytics/entity-reference-boards.md#custom-properties).

The following query returns the ID, type, title, and state for the top three work items in the Fabrikam Fiber project:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$top=3
```

```OData
{
  "value": [
    { "WorkItemId": 31, "Title": "About screen", "WorkItemType": "Task", "State": "New" },
    { "WorkItemId": 30, "Title": "Change background color", "WorkItemType": "Task", "State": "Active" },
    { "WorkItemId": 32, "Title": "Standardize on form factors", "WorkItemType": "Task", "State": "Active" }
  ]
}
```

<a id="filter-data"></a>

## Filter data 

Add a `$filter` clause to return only items that match specific criteria. Use comparison operators like `eq`, `ne`, `gt`, `ge`, `lt`, and `le`, and combine conditions with `and` and `or`. For example, the following query returns features that are in progress:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,AssignedTo,State&$filter=WorkItemType eq 'Feature' and State eq 'In Progress'
```

### Combine multiple filter conditions

Use parentheses to group `or` conditions within a broader `and` filter. The following query returns user stories, bugs, and a custom type in specific states:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,AssignedTo,State&$filter=(WorkItemType eq 'User Story' or WorkItemType eq 'Bug' or WorkItemType eq 'Backlog Work') and (State eq 'New' or State eq 'Committed' or State eq 'Active')
```

```OData
{
  "value": [
    { "WorkItemId": 210, "Title": "Slow response on form", "State": "Active" },
    ...
    { "WorkItemId": 160, "Title": "Game store testing", "State": "New" }
  ]
}
```

You can also use string functions like `contains`, `startswith`, and `endswith` in filter expressions. For more information, see [Supported functions](odata-supported-features.md#supported-functions). 

## Query Area Path or Iteration Path properties

Some queries require the surrogate key (`AreaSK` or `IterationSK`) rather than the path string. Use the **Areas** or **Iterations** entity sets to look up the key for a specific path.

<a id="areask"></a>
### Return the AreaSK for a specific area path 

The following query returns the `AreaSK` for the `Fabrikam Fiber\Production Planning\Web` area path. For other available properties, see [Areas](../analytics/entity-reference-boards.md#areas).

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Areas?$filter=AreaPath eq 'Fabrikam Fiber\Production Planning\Web'&$select=AreaSK
```

```OData
{
  "value": [
    { "AreaSK": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb" }
  ]
}
```

<a id="iterationsk"></a>
### Return the IterationSK for a specific iteration path 

The following query returns the `IterationSK` for the `Fabrikam Fiber\Release 1\Sprint 3` iteration path. For other available properties, see [Iterations](../analytics/entity-reference-boards.md#iterations).

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Iterations?$filter=IterationPath eq 'Fabrikam Fiber\Release 1\Sprint 3'&$select=IterationSK
```

<a id="filter-navigation"></a>
<a id="filter-navigation-field"></a>

## Filter by navigation properties

Navigation properties like `Iteration`, `Area`, and `AssignedTo` represent relationships to other entities. To filter on a field from a related entity, use the full path in the format `NavigationProperty/Field`. For example, `Iteration/IterationPath` references the `IterationPath` field through the `Iteration` navigation property:

`/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'`

The following query returns the top five work items in a specific iteration, using the full navigation path:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$top=5&$filter=Iteration/IterationPath eq 'Fabrikam Fiber\3Week Sprints\Sprint 3'&$select=WorkItemId,WorkItemType,Title,State&$orderby=WorkItemId asc
```

<a id="return-related"></a>

## Expand data from related entities

Filtering by a navigation property doesn't include its data in the response. To return fields from a related entity, use `$expand`. Without `$expand`, you can't access navigation property fields through `$select`.

The following query returns work item `480` with all fields from the expanded `Iteration` entity:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration
```

Because no `$select` is applied to the `Iteration` expansion, the response includes every `Iteration` field:

```OData
{
  "value": [
    {
      "WorkItemId": 480,
      "Title": "Add animated emoticons",
      "WorkItemType": "User Story",
      "State": "New",
      "Iteration": {
        "ProjectSK": "bbbbbbbb-1111-2222-3333-cccccccccccc",
        "IterationSK": "cccccccc-2222-3333-4444-dddddddddddd",
        "IterationName": "Sprint 3",
        "IterationPath": "Fabrikam Fiber\\3Week Sprints\\Sprint 3",
        "StartDate": "2025-12-04T00:00:00-12:00",
        "EndDate": "2025-12-25T23:59:59.999-12:00",
        "IterationLevel1": "Fabrikam Fiber",
        "IterationLevel2": "3Week Sprints",
        "IterationLevel3": "Sprint 3",
        ...
        "Depth": 2,
        "IsEnded": false
      }
    }
  ]
}
```

## Use select in expand statements

To limit the fields returned from an expanded entity, add a `$select` clause inside the `$expand` using the syntax `$expand=Entity($select=Field1,Field2)`. The following query expands `Iteration` but returns only `IterationName` and `IterationPath`:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration($select=IterationName,IterationPath)
```

```OData
{
  "value": [
    {
      "WorkItemId": 480,
      "Title": "Add animated emoticons",
      "WorkItemType": "User Story",
      "State": "New",
      "Iteration": {
        "IterationName": "Sprint 3",
        "IterationPath": "Fabrikam Fiber\\3Week Sprints\\Sprint 3"
      }
    }
  ]
}
```

The following table shows `$expand` with `$select` examples for common navigation property types:

| Navigation type | Key property | Example clauses |
|-----------------|-------------|-------------------|
| DateTime  | `DateSK`      | `$expand=CreatedDate($select=Date)` or<br/>`$expand=CreatedDate($select=WeekStartingDate)`  | 
| Identity  | `UserSK`      | `$expand=AssignedTo($select=UserName)` or<br/>`$expand=AssignedTo($select=UserEmail)` | 
| Area      | `AreaSK`      | `$expand=Area($select=AreaName)` or<br/>`$expand=Area($select=AreaPath)` | 
| Iteration | `IterationSK` | `$expand=Iteration($select=IterationName)` or<br/>`$expand=Iteration($select=IterationPath)` or<br/>`$expand=Iteration($select=StartDate)`| 
| Project   | `ProjectSK`   | `$expand=Project($select=ProjectName)` | 
| Team      | `TeamSK`      | `$expand=Teams($select=TeamName)` | 

To expand multiple navigation properties in a single query, use a comma-delimited list:

`$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)`

## Use nested expand statements

To expand a navigation property within an already-expanded entity, nest one `$expand` inside another. The following query expands `Iteration` and then expands `Project` within `Iteration` to show which project the iteration belongs to:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration($expand=Project)
```

To combine nested expand with `$select`, use a semicolon (`;`) to separate `$select` from `$expand` inside the parentheses. Without the semicolon, the query returns an error. The following query returns only `IterationName` and `IterationPath` from `Iteration`, plus the nested `Project`:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration($select=IterationName,IterationPath;$expand=Project)
```

```OData
{
  "value": [
    {
      "WorkItemId": 480,
      "Title": "Add animated emoticons",
      "WorkItemType": "User Story",
      "State": "New",
      "Iteration": {
        "IterationName": "Sprint 3",
        "IterationPath": "Fabrikam Fiber\\3Week Sprints\\Sprint 3",
        "Project": {
          "ProjectSK": "bbbbbbbb-1111-2222-3333-cccccccccccc",
          "ProjectName": "Fabrikam Fiber"
        }
      }
    }
  ]
}
```
<a id="date-range-queries"></a> 

## Query a date range

The following example query returns work items whose last **Changed Date** is greater than or equal to January 1, 2025. 

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=ChangedDate ge 2025-01-01Z
```

The following example query returns work items whose last **Changed Date** occurred during the week of October 31 through November 7, 2025.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=ChangedDate ge 2025-10-31Z and ChangedDate le 2025-11-07Z
```

<a id="sort-results"></a>

## Sort results

Add `$orderby` to sort results by one or more properties. Results sort in ascending order by default; append `desc` for descending. Separate multiple sort fields with commas.

| Sort by | Clause |
|---------|-------------------|
| Work item ID | `/WorkItems?$orderby=WorkItemId` | 
| Work item ID (newest first) | `/WorkItems?$orderby=WorkItemId desc` |  
| Work item type, then state | `/WorkItems?$orderby=WorkItemType,State` |

::: moniker range="azure-devops"

## Use AI to build OData queries

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help construct and troubleshoot OData queries.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Build a query | `Write an OData query that returns all active bugs with their area path and assigned-to fields in <Contoso> project` |
| Filter by date | `Create an OData query that returns work items created in the last 30 days in <Contoso> project` |
| Expand navigation properties | `Write an OData query that expands the iteration path and area path for user stories in <Contoso> project` |
| Debug a query | `My OData query returns no results — help me troubleshoot the filter clause and URL format for <Contoso> project` |
| Nested expand | `Write an OData query with nested expand to return work items with their parent details in <Contoso> project` |
| Sort and limit results | `Create an OData query that returns the 20 most recently changed bugs ordered by changed date in <Contoso> project` |
| Count by work item type | `Write an OData query that counts work items grouped by work item type for <Contoso> project` |
| Filter with string functions | `Create an OData query that returns work items whose title contains "login" in <Contoso> project` |
| Combine select, filter, and expand | `Write an OData query that returns the title, state, assigned-to name, and iteration path for all user stories in the current sprint in <Contoso> project` |

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Project & organization-scoped queries](account-scoped-queries.md)

## Related content

- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)
- [Aggregate data using Analytics](aggregated-data-analytics.md)
- [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md)
- [Best practices to use when querying Analytics](../analytics/analytics-best-practices.md)
- [Supported OData features](odata-supported-features.md)
- [OData v4.0 Part 2: URL Conventions Plus Errata 02](https://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)