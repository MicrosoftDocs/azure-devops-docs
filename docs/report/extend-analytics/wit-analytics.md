---
title: Sample OData queries 
titleSuffix: Azure DevOps
description: Learn how to construct basic, filtered, expanded, and nested queries for Azure DevOps using OData Analytics.
ms.subservice: azure-devops-analytics
ms.custom: engagement-fy23
ms.assetid: 0ABC2F7B-AFA5-465F-8DFE-4779D90452CD  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: "<=azure-devops"
ms.date: 11/10/2025
#customer intent: As an Azure DevOps user, I want to learn how to construct OData queries to return work tracking data so I can monitor and report on the progress of my projects.

---

# Define basic queries using OData Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can use Analytics for Azure DevOps to construct OData queries to return data you're interested in. You can run these queries in your browser or in client software like Excel or Power BI.

This article focuses on queries for retrieving Azure Boards work tracking entity sets, but the principles apply to querying other entity sets. For more information, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md) and [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md).

This tutorial shows you how to:

> [!div class="checklist"]  
> - Define queries that return item counts, with or without their data.
> - Find properties and return data for navigation properties like **Identity**, **Area Path**, and **Iteration Path**.
> - Filter data by properties and navigation properties.
> - Use `expand` clauses and nested `expand` statements.
> - Query date ranges.
> - Use the `orderby` option to sort results.

[!INCLUDE [temp](../includes/analytics-preview.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

> [!NOTE] 
> Cross-project queries fail when the user running the query doesn't have access to all projects. For more information about requirements, see [Project and organization-scoped queries](account-scoped-queries.md).

> [!NOTE]  
> The OData queries in this article use the query URL defined for Azure DevOps Services, `https://analytics.dev.azure.com/`. Substitute your own organization and project names in the queries to get familiar with querying OData.
> 
> For an on-premises server, you can construct similar queries with a URL based on your server and project collection, `https://<servername>/<ProjectCollectionName>/`. For more information, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md). 

<a id="return-count-items"></a>
<a id="return-a-count-of-items-no-other-data"></a>
## Get a count of items

To return only a count of items or entities defined in an organization or project without including other information, specify the `$apply=aggregate($count as Count)` query option. The following queries return the number of projects, work items, area paths, and users in an organization. 

```OData
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Projects?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/WorkItems?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Areas?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Users?$apply=aggregate($count as Count)
```
 
The preceding queries return results like the following example for projects in the `fabrikam` organization:

```odata
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Projects(Count)",
  "value": [
    {
      "@odata.id": null,
      "Count": 16
    }
  ]
}
```

<a id="return-count-items-with-data"></a>
<a id="return-a-count-of-items-and-data"></a>
## Get a count of items and their data 

To return a count of items along with `select` data for the items, specify the `$count=true` query option. The following queries return a count of work items, area paths, and users defined for a project along with specified properties. For valid properties, see [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md) and [Calendar date, Project, and User metadata reference for Azure DevOps Analytics](../analytics/entity-reference-general.md).

```OData 
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/WorkItems?$count=true&$select=WorkItemId,Title,WorkItemType 
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/Areas?$count=true&$select=AreaName,AreaPath 
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/Users?$count=true&$select=UserName,UserEmail
```

>[!NOTE]
>To return all properties defined for a specified entity type, you can use `$count=true` with no `select` clause. However, if you don't include a `$select` or `$apply` clause, you receive a warning such as `VS403507: The specified query does not include a $select or $apply clause which is recommended for all queries. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060`. To avoid running into usage limits, always include a `$select` or `$apply` clause in your queries.

For example, the following query requests the count and **User Names** of users in the **Fabrikam Fiber** project:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Users?$count=true&$select=UserName
```

The query returns a count of `5` users with their **User Names**.

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#Users(UserName)",
  "@odata.count": 5,
  "value": [
    {
      "UserName": "Microsoft.VisualStudio.Services.TFS"
    },
    {
      "UserName": "fabrikamfiber1@hotmail.com"
    },
    {
      "UserName": "Jamal Hartnett"
    },
    {
      "UserName": "fabrikamfiber5@hotmail.com"
    },
    {
      "UserName": "fabrikamfiber2@hotmail.com"
    }
  ]
}
```

<a id="select-columns"></a>
## Select specific properties or fields 

To return specific properties or work item fields, add a `$select` clause that specifies the property names. For example, to return the **Work Item ID**, **Work Item Type**, **Title**, and **State** of work items, add the `$select=WorkItemId,WorkItemType,Title,State` clause to your query.

The `$select` clause specifies the property names that correspond to the named fields. Property names in OData queries require attention to both spacing and casing. Although property display names like **Work Item ID** can contain spaces, formal property names can't contain spaces.

For more information about property names and labels, see [Metadata reference for Azure Boards](../analytics/entity-reference-boards.md#custom-properties). To understand how custom field properties are labeled, see [Custom properties](../analytics/entity-reference-boards.md#custom-properties).

The following example query requests the work item IDs, titles, and states for the top three work items in the Fabrikam Fiber project.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$top=3
```

Analytics returns the following data. 

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State)",
  "value": [
    {
      "WorkItemId": 31,
      "Title": "About screen",
      "WorkItemType": "Task",
      "State": "New"
    },
    {
      "WorkItemId": 30,
      "Title": "Change background color",
      "WorkItemType": "Task",
      "State": "Active"
    },
    {
      "WorkItemId": 32,
      "Title": "Standardize on form factors",
      "WorkItemType": "Task",
      "State": "Active"
    }
  ]
}
```

## Query Area Path or Iteration Path properties

To look up the `AreaSK`, `IterationSK`, or other properties for specific area paths or iteration paths, use the following queries.

<a id="areask"></a>
### Return the AreaSK for a specific area path 

The following query requests the `AreaSK` property defined for the `Fabrikam Fiber\Production Planning\Web` area path. To see other defined properties for the **Areas** entity set, see [Metadata reference for Azure Boards Analytics, Areas](../analytics/entity-reference-boards.md#areas).

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Areas?$filter=AreaPath eq 'Fabrikam Fiber\Production Planning\Web' &$select=AreaSK
```

The query returns the following data.  

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#Areas(AreaSK)",
  "value": [
    {
      "AreaSK": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb"
    }
  ]
}
```

<a id="iterationsk"></a>
### Return the IterationSK for a specific iteration path 

The following query returns the `IterationSK` property defined for the `Fabrikam Fiber\3Week Sprints\Sprint 3` iteration path. To see other defined properties for the **Iterations** entity set, see [Metadata reference for Azure Boards Analytics, Iterations](../analytics/entity-reference-boards.md#iterations).

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Iterations?$filter=IterationPath eq 'Fabrikam Fiber\Release 1\Sprint 3' &$select=IterationSK
```

<a id="filter-data"></a>
## Filter data 

To filter an entity set to return specific items, add a `$filter` clause that specifies the criteria the items must meet. The following filter clause returns only **Feature** work item types that are in the **In Progress** state.

`/WorkItems?$filter=WorkItemType eq 'Feature' and State eq 'In Progress'`

The following example query specifies to return **Work Item ID**, **Work Item Type**, **Title**, and **State** only of **Feature** work items that are in the  **In Progress** state.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,AssignedTo,State&$filter=WorkItemType eq 'Feature' and State eq 'In Progress'
```

### Specify several filter clauses

You can use `and` and `or` to specify several filters in a single `$select` clause. For example, the following query specifies several fields from work items of types **User Story**, **Bug**, or custom type **Backlog Work** that are in the **New**, **Committed**, or **Active** states. Use parenthesis to group filter clauses as needed.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,AssignedTo,State&$filter=(WorkItemType eq 'User Story' or WorkItemType eq 'Bug' or WorkItemType eq 'Backlog Work') and (State eq 'New' or State eq 'Committed' or State eq 'Active')
```

The query returns data like the following results:

```OData

{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,AssignedTo,State)",
  "value": [
    {
      "WorkItemId": 210,
      "Title": "Slow response on form",
      "State": "Active"
    },
    ...
    {
      "WorkItemId": 160,
      "Title": "Game store testing",
      "State": "New"
    }
  ]
}
```

You can also apply various functions such as `contains`, `startswith`, and `endswith` in `$select` clauses. See [Supported functions](odata-supported-features.md#supported-functions). 

<a id="filter-navigation"></a>
<a id="filter-navigation-field"></a>
## Filter by navigation properties

Navigation properties represent relationships between entity types. When you specify a navigation property as part of your filter criteria, you must specify the full path for the navigation property. For example, the following clause filters work items based on a specified **Iteration Path** for the `Iteration` navigation property.

`/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'`

`Iteration` is the navigation property and `IterationPath` is the field of interest. `Iteration/IterationPath` is the full path for the `IterationPath` property.

The following example query requests data from the top five work items under the `Fabrikam Fiber\3Week Sprints\Sprint 3` iteration path by specifying the full path for `Iteration/IterationPath`.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$top=5&$filter=Iteration/IterationPath eq 'Fabrikam Fiber\3Week Sprints\Sprint 3'&$select=WorkItemId, WorkItemType, Title, State&$orderby=WorkItemId asc
```

<a id="return-related"></a>
## Query data from related entities

The preceding example query doesn't return `Iteration` data, because `Iteration` is a related entity. Properties of navigation properties like `Identity`, `Area`, and `Iteration` aren't directly accessible by using `$select` statements. You must use `$expand` statements to return data from related entities.

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 00000&$expand=Iteration`

The following example query requests information associated with work item ID `480`, including expanded `Iteration` data. 

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration
```

The query returns the following data, which includes all the fields from the expanded `Iteration` property.

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration)",
  "value": [
    {
      "WorkItemId": 480,
      "Title": "Add animated emoticons",
      "WorkItemType": "User Story",
      "State": "New",
      "Iteration": {
        "ProjectSK": "bbbbbbbb-1111-2222-3333-cccccccccccc",
        "IterationSK": "cccccccc-2222-3333-4444-dddddddddddd",
        "IterationId": "cccccccc-2222-3333-4444-dddddddddddd",
        "IterationName": "Sprint 3",
        "Number": 276,
        "IterationPath": "Fabrikam Fiber\\3Week Sprints\\Sprint 3",
        "StartDate": "2025-12-04T00:00:00-12:00",
        "EndDate": "2025-12-25T23:59:59.999-12:00",
        "IterationLevel1": "Fabrikam Fiber",
        "IterationLevel2": "3Week Sprints",
        "IterationLevel3": "Sprint 3",
        "IterationLevel4": null,
        "IterationLevel5": null,
        "IterationLevel6": null,
        "IterationLevel7": null,
        "IterationLevel8": null,
        "IterationLevel9": null,
        "IterationLevel10": null,
        "IterationLevel11": null,
        "IterationLevel12": null,
        "IterationLevel13": null,
        "IterationLevel14": null,
        "Depth": 2,
        "IsEnded": false,
        "AnalyticsUpdatedDate": "2025-10-22T17:28:14.7166667Z"
      }
    }
  ]
}
```

## Use select in expand statements

If an expanded property returns more data than you want, add a `$select` statement against the property.

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 00000&$expand=Iteration($select=Name,IterationPath)`

For example, the following example query selects only the `IterationName` and `IterationPath` data from the expanded `Iteration` property.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration($select=IterationName,IterationPath)
```

The query returns the following data.

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration(IterationName,IterationPath))",
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

The following table shows how to use `$expand` and `$select` clauses to select several fields in navigation properties. For example, you use `$expand=AssignedTo($select=UserName)` to return the **Assigned to** property of the **User Name** field in the `Identity` navigation property.

| Type field | Referenced property | Example clauses |
|-------------|-------------------|-------------------|
| DateTime  | `DateSK`      | `$expand=CreatedDate($select=Date)` or<br/>`$expand=CreatedDate($select=WeekStartingDate)`  | 
| Identity  | `UserSK`      | `$expand=AssignedTo($select=UserName)` or<br/>`$expand=AssignedTo($select=UserEmail)` | 
| Area      | `AreaSK`      | `$expand=Area($select=AreaName)` or<br/>`$expand=Area($select=AreaPath)` | 
| Iteration | `IterationSK` | `$expand=Iteration($select=IterationName)` or<br/>`$expand=Iteration($select=IterationPath)` or<br/>`$expand=Iteration($select=StartDate)`| 
| Project| `ProjectSK`   | `$expand=Project($select=ProjectName)` | 
| Team     | `TeamSK`      | `$expand=Teams($select=TeamName)` | 

You can specify several properties to expand in a single `$expand` clause by using a comma-delimited list.

`$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)`

## Use nested expand statements

You can use nested OData `$expand` statements. For example, the following query uses nested `$expand` statements to display the project an iteration is in.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration($expand=Project)
```

The query returns the following data:

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration)",
  "value": [
    {
      "WorkItemId": 480,
      "Title": "Add animated emoticons",
      "WorkItemType": "User Story",
      "State": "New",
      "Iteration": {
        "ProjectSK": "bbbbbbbb-1111-2222-3333-cccccccccccc",
        "IterationSK": "cccccccc-2222-3333-4444-dddddddddddd",
        "IterationId": "cccccccc-2222-3333-4444-dddddddddddd",
        "IterationName": "Sprint 3",
        "Number": 276,
        "IterationPath": "Fabrikam Fiber\\3Week Sprints\\Sprint 3",
        "StartDate": "2025-12-04T00:00:00-12:00",
        "EndDate": "2025-12-25T23:59:59.999-12:00",
        "IterationLevel1": "Fabrikam Fiber",
        "IterationLevel2": "3Week Sprints",
        "IterationLevel3": "Sprint 3",
        "IterationLevel4": null,
        "IterationLevel5": null,
        "IterationLevel6": null,
        "IterationLevel7": null,
        "IterationLevel8": null,
        "IterationLevel9": null,
        "IterationLevel10": null,
        "IterationLevel11": null,
        "IterationLevel12": null,
        "IterationLevel13": null,
        "IterationLevel14": null,
        "Depth": 2,
        "IsEnded": false,
        "AnalyticsUpdatedDate": "2025-10-22T17:28:14.7166667Z",
        "Project": {
          "ProjectSK": "bbbbbbbb-1111-2222-3333-cccccccccccc",
          "ProjectId": "bbbbbbbb-1111-2222-3333-cccccccccccc",
          "ProjectName": "Fabrikam Fiber",
          "AnalyticsUpdatedDate": "2025-10-28T20:27:13.5833333Z",
          "ProjectVisibility": "Private"
        }
      }
    }
  ]
}
```

You can add `$select` statements, for example to return only the `IterationName` and `IterationPath` from `Iteration`:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&$expand=Iteration($select=IterationName,IterationPath;$expand=Project)
```

This query returns the following data:

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration(IterationName,IterationPath,Project))",
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
          "ProjectId": "bbbbbbbb-1111-2222-3333-cccccccccccc",
          "ProjectId": "bbbbbbbb-1111-2222-3333-cccccccccccc",
          "ProjectName": "Fabrikam Fiber",
          "AnalyticsUpdatedDate": "2025-10-28T20:27:13.5833333Z",
          "ProjectVisibility": "Private"
        }
      }
    }
  ]
}
```

The results show only the `IterationName` and `IterationPath` from `Iteration`, and `Project` as a nested object within the `Iteration` results.

>[!NOTE]
>When you nest an `$expand` clause inside a `$select` statement, you must use a semi-colon `;` before the nested `$expand` to avoid an error.

<a id="date-range-queries"></a> 
## Query a date range
The following example query returns work items whose last **Changed Date** is greater than or equal to January 1, 2025. 

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=ChangedDate ge 2025-01-01Z
```

The following example query returns work items whose last **Changed Date** occurred during the week of October 31 through November 7, 2025.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=ChangedDate ge 2025-10-31Z&ChangedDate le 2025-11-07Z
```

<a id="sort-results"></a>
## Sort results

Specify the `$orderby` option to sort your results or specify the sequence to return results in. You can sort in ascending or descending order using keywords `asc` or `desc`. The following table shows some examples.

| Sort by | Clause |
|---------|-------------------|
| Work item ID |`/WorkItems?$orderby=WorkItemId` | 
| Work item ID descending |`/WorkItems?$orderby=WorkItemId desc` |  
| Work item type and State | `/WorkItems?$orderby=WorkItemType,State` |
 

## Next step

> [!div class="nextstepaction"]
> [Project & organization-scoped queries](account-scoped-queries.md)

 
## Related content

- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)
- [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md)
- [Best practices to use when querying Analytics](../analytics/analytics-best-practices.md) 
- [Supported OData features](odata-supported-features.md)
- [OData v4.0 specification](https://www.odata.org/documentation/)  
- [OData v4.0 Part 2: URL Conventions Plus Errata 02](https://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)

<!--- 
<a id="basic-query"></a>

## Construct a basic query 

::: moniker range="azure-devops"

You construct a basic query by entering the OData URL into a [supported web browser](/azure/devops/server/compatibility#supported-browsers). In the examples provided, replace `{OrganizationName}` and `{ProjectName}` with your organization name and the name of the project that you want to query. 

::: moniker-end

<a id="single-entity"></a>

## Query a single entity set

To query a single entity set&mdash;such as **Areas**, **Projects**, **WorkItems**, or **WorkItemSnapshot**&mdash;add the name of the entity set within the URL: `/Areas`, `/Projects`, `/WorkItems` or `/WorkItemSnapshot`. 

For example, you query Areas by adding `/Areas`. The full URL is:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/Areas 
> ```

It's equivalent to performing a select statement on the entity set and returning everything, all columns and all rows. If you have a large number of work items, it may take several seconds. If you've more than 10,000 work items, [server-side paging is enforced](../analytics/analytics-query-parts.md#server-force-paging).

For a full list of entity sets for work tracking, see [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md).

  
> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/msft-skilling/Content/_odata/v1.0/WorkItems?$filter=(WorkItemType eq 'User Story' or WorkItemType eq 'Bug' or WorkItemType eq 'Backlog Work') AND (State eq 'New' or State eq 'Committed' or State eq 'Active')&$select=WorkItemId, WorkItemType, Title, State 

Instead, you can exclude the ```$select``` clause altogether and just filter the results as follows:

`/WorkItems?$filter=State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=State eq 'In Progress'
> ```

You apply multiple filters by concatenating two or more filters. For example, here we filter for features and tasks that are in the 

`/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'
> ```

-->