---
title: Construct OData queries for Analytics
titleSuffix: Azure DevOps
description: Learn how to query OData metadata, entities, and entity sets in Analytics for Azure DevOps.
ms.custom: "analytics, copilot-scenario-highlight" 
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: "<=azure-devops"
ms.date: 03/18/2026
ai-usage: ai-assisted
#customer intent: As an Azure DevOps user, I want to be able to run Analytics OData queries against my projects so I can monitor, analyze, and report progress results.
---

# Construct OData queries for Analytics in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Analytics exposes Azure DevOps project data through an [OData](/odata/overview) endpoint that you can query from any [supported web browser](/azure/devops/server/compatibility#supported-browsers) or client tool. This tutorial walks you through the query URL structure - metadata, entity sets, and query options - so you can start building your own requests. For a comparison of query tools, see [Analytics query tools](analytics-query-tools.md).

In this tutorial, you learn how to:

> [!div class="checklist"]  
> - Query the Analytics metadata.
> - Query an entity set.
> - Apply query options in the recommended order.
> - Handle server-side paging.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

<a id="query-metadata"></a>

## Query the metadata

To retrieve the [OData entity model](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_Toc453752500), append `$metadata` to the Analytics service root URL. The metadata describes the data elements you can use in queries, including:

- Entity types, entity sets, and containers
- Properties and navigation properties
- Surrogate keys and enumerated lists
- Supported filter functions (`Org.OData.Capabilities.V1.FilterFunctions`)
- Supported aggregations (`Org.OData.Aggregation.V1.ApplySupported`)
- Batch support type (`Org.OData.Capabilities.V1.BatchSupportType`)

::: moniker range="azure-devops"

Enter the following URL in a web browser. Replace `<OrganizationName>` and `<ProjectName>` with your values. Omit the project name to return metadata for the entire organization.

```OData
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/version/$metadata 
```

For example, the following query returns metadata for the `fabrikam` organization:

```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata  
```

::: moniker-end

::: moniker range="< azure-devops"

Enter the following URL in a web browser. Replace `<ServerName>`, `<CollectionName>`, and `<ProjectName>` with your values. Omit the project name to return metadata for the entire collection.

```OData
https://<ServerName>/<CollectionName>/<ProjectName>/_odata/version/$metadata 
```

For example, the following query returns metadata for the `fabrikam` server and its `DefaultCollection`:

```OData
https://fabrikam/DefaultCollection/_odata/v4.0-preview/$metadata  
```

::: moniker-end

> [!NOTE] 
> The latest Analytics OData version is `v4.0-preview`. Use this version for all queries against Azure DevOps. For more information about Analytics versions and available data, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md). 

<a id="metadata-response"></a>

### Interpret the metadata response

The metadata endpoint returns an XML document that contains two main schemas:

- **`Microsoft.VisualStudio.Services.Analytics.Model`** — defines entity types, enumerated types, and their members.
- **`Default`** — defines entity containers, entity sets, and supported OData filter, transformation, and aggregation functions.

The following example shows the high-level structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
    <edmx:DataServices>
        <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Microsoft.VisualStudio.Services.Analytics.Model">
           <EntityType Name="Entity Name"/>
        </Schema>
        <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Default">
           <EntityContainer Name="Container"/>
        </Schema>
    </edmx:DataServices>
</edmx:Edmx>
```

> [!TIP] 
> Some browsers don't format XML for readability. Search online for a free XML formatter, or use your browser's search function to locate specific entity names in the raw output.

For more information, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).

### Properties and navigation properties

The metadata for each entity type lists two kinds of members you can use in queries:

- **Properties** (`Property`) — correspond to work item fields and Analytics-specific data such as `LeadTimeDays` and `CycleTimeDays`. Use properties in `$select`, `$filter`, and `$orderby` clauses.
- **Navigation properties** (`NavigationProperty`) — link to related entity sets such as `Revisions`, `Links`, `Children`, `Parent`, and `Teams`. Use navigation properties to filter by related entities like iteration paths, area paths, or teams, and in `$expand` clauses.

The following snippet shows a partial view of the `WorkItem` entity metadata:

```xml
<Key>
   <PropertyRef Name="WorkItemId"/>
</Key>
<Property Name="WorkItemId" Type="Edm.Int32" Nullable="false">
   <Annotation Term="Ref.ReferenceName" String="System.Id"/>
   <Annotation Term="Display.DisplayName" String="Work Item Id"/>
</Property>
<Property Name="InProgressDate" Type="Edm.DateTimeOffset">
   <Annotation Term="Display.DisplayName" String="InProgress Date"/>
</Property>
<Property Name="LeadTimeDays" Type="Edm.Double">
   <Annotation Term="Display.DisplayName" String="Lead Time Days"/>
</Property>
<Property Name="CycleTimeDays" Type="Edm.Double">
   <Annotation Term="Display.DisplayName" String="Cycle Time Days"/>
</Property>
...
<NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
<NavigationProperty Name="Revisions" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemRevision)"/>
<NavigationProperty Name="Links" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemLink)"/>
<NavigationProperty Name="Children" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItem)"/>
<NavigationProperty Name="Parent" Type="Microsoft.VisualStudio.Services.Analytics.Model.WorkItem">
   <ReferentialConstraint Property="ParentWorkItemId" ReferencedProperty="WorkItemId"/>
</NavigationProperty>
<NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project" Nullable="false">
   <ReferentialConstraint Property="ProjectSK" ReferencedProperty="ProjectSK"/>
</NavigationProperty>
...
```

For complete property and relationship details for each service area, see:

- [Calendar date, Project, and User metadata reference](entity-reference-general.md).
- [Metadata reference for Azure Boards](entity-reference-boards.md).
- [Metadata reference for Azure Pipelines](entity-reference-pipelines.md).
- [Metadata reference for Test Plans](entity-reference-test-plans.md).

<a id="construct-basic-query"></a>

## Query entity sets

To build reports, query an entity set such as `WorkItems`, `WorkItemSnapshot`, or `PipelineRuns`. For a full list of supported entities, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).

::: moniker range="azure-devops"

```OData
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/version/<EntitySet>?<QueryOptions>
```

For example, the following query counts work items in the `Fabrikam Fiber` project:

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?%20$apply=aggregate($count%20as%20Count)
```

The response returns a count of `1399`:

```json
{
"@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(Count)",
"value": [
   {
   "@odata.id": null,
   "Count": 1399
   }
 ]
}
```

::: moniker-end

::: moniker range="< azure-devops"

```OData
https://<ServerName>/<CollectionName>/<ProjectName>/_odata/version/<EntitySet>?<QueryOptions>
```

For example, the following query counts work items in the `Fabrikam` project on the `fabrikam` server:

```OData
https://fabrikam/DefaultCollection/Fabrikam/_odata/v4.0-preview/WorkItems?%20$apply=aggregate($count%20as%20Count)
```

The response returns a count of `44`:

```json
{
"@odata.context": "http://fabrikam/DefaultCollection/Fabrikam/_odata/v4.0-preview/$metadata#WorkItems(Count)",
"value": [
   {
      "@odata.id": null,
      "Count": 44
   }
 ]
}
```

::: moniker-end

> [!IMPORTANT] 
> Always include a `$select` or `$apply` clause to avoid usage limits. Without one, Analytics returns all columns and rows, which can be slow for large datasets and triggers [server-side paging](../extend-analytics/odata-query-guidelines.md#perf-paging) above 10,000 records.

<a id="query-entity-set"></a>

### Example: List projects with $select

The following example uses `$select` to return only the `ProjectName` property from the `Projects` entity set. For a full list of entity sets, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md).

::: moniker range="azure-devops"

```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/Projects?$select=ProjectName
```

The response lists the project names in the organization:

```json
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Projects(ProjectName)",
  "value": [
    { "ProjectName": "Basic Fabrikam" },
    { "ProjectName": "Fabrikam Fiber" },
    { "ProjectName": "MyFirstProject" },
    { "ProjectName": "Fabrikam Test" },
    { "ProjectName": "MyPublicProject" }
  ]
}
```

::: moniker-end

::: moniker range="< azure-devops"

```OData
https://fabrikam/DefaultCollection/_odata/v4.0-preview/Projects?$select=ProjectName
```

The response lists the project names in the collection:

```json
{
  "@odata.context": "http://fabrikam/DefaultCollection/_odata/v4.0-preview/$metadata#Projects(ProjectName)",
  "value": [
    { "ProjectName": "Fabrikam Fiber" },
    { "ProjectName": "Fabrikam" },
    { "ProjectName": "Fabrikam Florida" }
  ]
}
```

::: moniker-end

<a id="query-options"></a>

## Use query options

Append query options to the URL to shape the response. Specify them in the order shown here.

| Query option | Description | Examples |
|---|---|---|
| `$apply` | Transforms results with `filter`, `groupby`, `aggregate`, `compute`, `expand`, or `concat`. | [Aggregate data](../extend-analytics/aggregated-data-analytics.md) |
| `$compute` | Defines computed properties for use in `$select`, `$filter`, or `$orderby`. | |
| `$filter` | Returns only resources where the expression evaluates to `true`. Resources that evaluate to `false`, `null`, or are unavailable due to permissions are omitted. | [Query work tracking data](../extend-analytics/wit-analytics.md) |
| `$orderby` | Sets the sort order of returned records. | [Query work tracking data](../extend-analytics/wit-analytics.md) |
| `$top` / `$skip` | Limits the number of records returned or skips a specified number. | [Organization-scoped queries](../extend-analytics/account-scoped-queries.md) |
| `$select` | Specifies which columns to return. | |
| `$expand` | Includes related entities inline. Pass nested query options (`$filter`, `$select`, `$orderby`, `$skip`, `$top`, `$count`, `$search`, `$expand`) in parentheses after the navigation property name. | [Analytics recipes](../extend-analytics/analytics-recipes.md) |
| `$skiptoken` | Continues to the next page of results (used with server-side paging). | |
| `$count=true` | Adds a total record count to the response. Use `$count` alone to return only the count. | [Aggregate data](../extend-analytics/aggregated-data-analytics.md) |

> [!TIP]
> Don't combine `$apply` and `$filter` in the same query. Use one or the other. To filter inside an `$apply` clause, use `$apply=filter(...)`. Mixing both can produce unexpected results.

<a id="server-force-paging"></a>

## Understand server-side paging

When a query returns more than 10,000 records, Analytics automatically pages the results. The response includes an `@odata.nextLink` URL that points to the next page. Client tools like Power BI Desktop and Excel follow these links automatically.

The following example shows a paged response:

```json
{
  "@odata.context":"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#WorkItems",
  "value":[
   // first 10,000 records
  ],
  "@odata.nextLink":"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/WorkItems?$skiptoken=10000"
}
```

If you're querying from code, follow each `@odata.nextLink` until the response no longer contains one.

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to construct Analytics queries

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help build OData queries for Analytics.

### Example prompts for constructing queries

| Task | Example prompt |
|------|----------------|
| Query metadata | `Show me the properties available for the WorkItems entity set in <Contoso> organization` |
| Build a basic query | `Write an OData query to list all active user stories in <Contoso> project` |
| Filter and sort | `Write an OData query to get bugs with priority 1, sorted by created date, in <Contoso> project` |
| Select specific columns | `Write an OData query that returns only the Title, State, and AssignedTo for work items in <Contoso> project` |
| Use aggregations | `Write an OData query that groups work items by state and counts them in <Contoso> project` |
| Handle paging | `Explain how to handle server-side paging when querying Analytics for large datasets` |
| Cross-project query | `Write an OData query to get all bugs across all projects in <Contoso> organization` |
| Snapshot query | `Write an OData query using WorkItemSnapshot to show a burndown of remaining work over the last sprint in <Contoso> project` |
| Stale work items | `Write an OData query to find work items that haven't been updated in the last 30 days in <Contoso> project` |
| Team workload | `Write an OData query that shows how many active work items are assigned to each team member in <Contoso> project` |
| Pipeline failures | `Write an OData query to list the pipeline runs that failed in the last 7 days in <Contoso> project` |

::: moniker-end

## Next step
> [!div class="nextstepaction"]
> [Construct basic queries using OData Analytics](../extend-analytics/wit-analytics.md)

## Related content

- [What is Analytics?](../powerbi/what-is-analytics.md)
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)
- [Permissions and prerequisites to access Analytics in Azure DevOps](analytics-permissions-prerequisites.md)
