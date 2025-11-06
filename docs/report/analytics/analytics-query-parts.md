---
title: Construct OData queries for Analytics
titleSuffix: Azure DevOps
description: Learn how to query OData metadata, entities, and entity sets in Analytics for Azure DevOps.
ms.custom: "analytics" 
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: "<=azure-devops"
ms.date: 11/06/2025
#customer intent: As an Azure DevOps user, I want to be able to run Analytics OData queries against my projects so I can monitor, analyze, and report progress results.
---

# Construct OData queries for Analytics in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Analytics, the Azure DevOps reporting platform, can answer quantitative questions about the past or present state of your projects. Analytics supports OData queries of its metadata and entity set data. You can learn about the data model and query process by running simple queries from your web browser.

> [!NOTE]
> OData, an application-level protocol for interacting with data via Representational State Transfer (REST) interfaces, supports the description, editing, and querying of data models. The Entity Data Model (EDM) or metadata describes the information available from Analytics, including the entities, entity types, properties, relationships, and enumerations you use to query the data to build reports. For an overview of OData, see [Welcome to OData](/odata/overview).

This article explains how to:

> [!div class="checklist"]  
> - Construct an Analytics OData query.
> - Query Analytics metadata.
> - Query Analytics OData for an entity set.
> - Use query options in the recommended sequence.
> - Understand server-side paging.

You can query Analytics from any [supported web browser](/azure/devops/server/compatibility#supported-browsers). For other tools you can use to query Analytics, see [Analytics query tools](analytics-query-tools.md).

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

<a id="url-components-to-query-the-metadata"></a>
<a id="query-metadata"></a>
## Query the metadata

Analytics exposes the [OData entity model](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_Toc453752500) at the metadata URL formed by appending `$metadata` to the service root URL. Analytics provides service roots for Azure DevOps projects or entire organizations and collections.

You can query the metadata to look up any of the following data elements:

- Entity types and entity sets
- Properties and navigation properties
- Surrogate keys
- Enumerated lists
- Entity sets
- Containers
- Filter functions, with `Org.OData.Capabilities.V1.FilterFunctions`
- Supported aggregations, with `Org.OData.Aggregation.V1.ApplySupported`
- Batch support type, with `Org.OData.Capabilities.V1.BatchSupportType`

::: moniker range="azure-devops"

To query the metadata for an organization or project hosted in the cloud, enter the following URL syntax in a web browser. Replace `<OrganizationName>}` and `<ProjectName>` with the names of the organization and project you want to query. To return all metadata for an organization, don't specify a project name.

```OData
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/version/$metadata 
```

The following example queries metadata for the `fabrikam` organization.

```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata  
```

In the query string, `analytics.dev.azure.com` is the Analytics service root URL, followed by the organization name, project name, OData version, and `$metadata` designation.

::: moniker-end

::: moniker range="< azure-devops"

To query the metadata for a server, enter the following URL syntax in a web browser. Replace `<ServerName>`, `<CollectionName>` and `<ProjectName>` with the names of the server, collection, and project you want to query. To return all metadata for a collection, don't specify a project name. 

```OData
https://<ServerName>/<CollectionName>/<ProjectName>/_odata/version/$metadata 
```

The following example queries the metadata for a server named `fabrikam-devops` and its `DefaultCollection`.

```OData
https://fabrikam-devops/DefaultCollection/_odata/v4.0-preview/$metadata  
```

::: moniker-end

> [!NOTE] 
> The latest Analytics OData version is `v4.0-preview`. You can use this version for all queries against Azure DevOps. For more information on Analytics versions and available data, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md). 

<a id="metadata-response"></a>
### Interpret the metadata response

Analytics returns an XML file of the data model. Use your browser search function to find information for your entity of interest.

> [!TIP] 
> Depending on your browser, this file might not be formatted in a human-readable manner. You can find a free online XML formatter through a web search.

Analytics metadata defines the following main schemas.

- `Microsoft.VisualStudio.Services.Analytics.Model` defines the entity types and enumerated types and their members.
- The `Default` schema defines the entity containers and entity sets and supported OData filter, transformation, and custom aggregation functions.

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

For more information, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).

### Get related entities and navigation properties

All entity types have properties and navigation properties that you can use to filter your queries. These properties are listed in the metadata as `Property` or `NavigationProperty` under each `EntityType`. You can use related entities to specify more filters, such as iteration paths, area paths, or teams.

The following code snippet shows a partial view of the metadata for the `WorkItem` entity. Properties correspond to work item fields and specific data captured by Analytics, such as `LeadTimeDays` and `CycleTimeDays`. Navigation properties correspond to other entity sets and specific Analytics data captured for the entity type, such as `Revisions`, `Links`, `Children`, and `Parent`.

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
<Property Name="CompletedDate" Type="Edm.DateTimeOffset">
   <Annotation Term="Display.DisplayName" String="Completed Date"/>
   </Property>
<Property Name="LeadTimeDays" Type="Edm.Double">
   <Annotation Term="Display.DisplayName" String="Lead Time Days"/>
</Property>
<Property Name="CycleTimeDays" Type="Edm.Double">
   <Annotation Term="Display.DisplayName" String="Cycle Time Days"/>
</Property>
<Property Name="InProgressDateSK" Type="Edm.Int32"/>
<Property Name="CompletedDateSK" Type="Edm.Int32"/>
<Property Name="AnalyticsUpdatedDate" Type="Edm.DateTimeOffset"/>
<Property Name="ProjectSK" Type="Edm.Guid" Nullable="false"/>
<Property Name="WorkItemRevisionSK" Type="Edm.Int32" Nullable="false"/>
...
<NavigationProperty Name="BoardLocations" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.BoardLocation)"/>
<NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
<NavigationProperty Name="InProgressOn" Type="Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
<ReferentialConstraint Property="InProgressDateSK" ReferencedProperty="DateSK"/>
</NavigationProperty>
<NavigationProperty Name="CompletedOn" Type="Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
<ReferentialConstraint Property="CompletedDateSK" ReferencedProperty="DateSK"/>
</NavigationProperty>
<NavigationProperty Name="Revisions" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemRevision)"/>
<NavigationProperty Name="Links" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemLink)"/>
<NavigationProperty Name="Children" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItem)"/>
<NavigationProperty Name="Parent" Type="Microsoft.VisualStudio.Services.Analytics.Model.WorkItem">
<ReferentialConstraint Property="ParentWorkItemId" ReferencedProperty="WorkItemId"/>
</NavigationProperty>
<NavigationProperty Name="Processes" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Process)"/>
<NavigationProperty Name="Descendants" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItem)"/>
<NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project" Nullable="false">
<ReferentialConstraint Property="ProjectSK" ReferencedProperty="ProjectSK"/>
<Annotation Term="Display.DisplayName" String="Project"/>
...
```

For entity metadata property and relationship information, see the following articles: 

- [Calendar date, Project, and User metadata reference](entity-reference-general.md)
- [Metadata reference for Azure Boards](entity-reference-boards.md)
- [Metadata reference for Azure Pipelines](entity-reference-pipelines.md)
- [Metadata reference for Test Plans](entity-reference-test-plans.md)

<a id="construct-basic-query"></a>
## Query entity sets

To query Analytics data and build reports, you typically query an entity set. For an overview of supported entities, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).

Use the following URL syntax to query a specific `EntitySet`, such as `WorkItems`, `WorkItemSnapshot`, or `PipelineRuns`. Replace `<EntitySet>` with the entity you want to search and `<QueryOptions>` with query options as described in [Use query options](#use-query-options).

::: moniker range="azure-devops"

```OData
https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/version/<EntitySet>?<QueryOptions>
```

The following example queries for the count of work items in the `Fabrikam Fiber` project of the `fabrikam` organization.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?%20$apply=aggregate($count%20as%20Count)
```

The example query returns results showing a count of `1399` work items.

```OData
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

The following example queries for the count of work items in the `Fabrikam` project in the `DefaultCollection` of the `fabrikam` server.

```OData
https://fabrikam/DefaultCollection/Fabrikam/_odata/v4.0-preview/WorkItems?%20$apply=aggregate($count%20as%20Count)
```

The example query returns the following results of `1399` work items.

```OData
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

> [!NOTE] 
> To avoid running into usage limits, always include a `$select` or `$apply` clause in your query. If you don't include a `$select` or `$apply` clause, you receive a warning such as `VS403507: The specified query does not include a $select or $apply clause which is recommended for all queries. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060`.
>
>Omitting a `$select` or `$apply` clause is equivalent to performing a `select` statement on the entity set that returns all columns and all rows. If you have a large number of records, the query may take several seconds. If you have more than 10,000 items, [server-side paging](../extend-analytics/odata-query-guidelines.md#perf-paging) is enforced.
> 

<a id="query-entity-set"></a>
### Example: Query a specific entity set

To query a specific entity set, such as `WorkItems`, `Areas`, or `Projects`, add the name of the entity set to the query. For a full list of entity sets, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md).

::: moniker range="azure-devops"

For example, you can get a list of projects defined for your organization by querying `Projects` and selecting to return the `ProjectName` property. The following example shows the query URL for the `fabrikam` organization.

```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/Projects?$select=ProjectName
```

Analytics returns the names of the projects in the *fabrikam* organization.

```OData
{
@odata.context": "https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Projects(ProjectName)",

"value": [
   {
      "ProjectName": "Basic Fabrikam"
   },
   {
      "ProjectName": "Fabrikam Fiber"
   },
   {
      "ProjectName": "MyFirstProject"
   },
   {
      "ProjectName": "Fabrikam Test"
   },
   {
      "ProjectName": "MyPublicProject"
   }
 ]
}
```

::: moniker-end

::: moniker range="< azure-devops"

For example, you can get a list of projects defined for your server and collection by querying `Projects` and selecting to return the `ProjectName` property. The following example shows the query URL for the `DefaultCollection` on the `fabrikam` server.

```OData
https://fabrikam/DefaultCollection/_odata/v4.0-preview/Projects?$select=ProjectName
```
The example returns the following three project names. 

[!div class="tabbedCodeSnippets"]
```OData
{
"@odata.context": "http://fabrikam/DefaultCollection/_odata/v4.0-preview/$metadata#Projects(ProjectName)",
"value": [
   {
      "ProjectName": "Fabrikam Fiber"
   },
   {
      "ProjectName": "Fabrikam"
   },
   {
      "ProjectName": "Fabrikam Florida"
   }
 ]
}
```

::: moniker-end

<a name="query-options"></a>
## Use query options

Query options are query string parameters that help control the amount of data being returned for a resource. Specify query options in the order listed in the following table.

| Query option|Description|
|------------------|-------------------|  
|`$apply`| Applies a transformation to a query, such as `filter`, `groupby`, `aggregate`, `compute`, `expand`, or `concat`. For examples, see [Aggregate work tracking data using Analytics](../extend-analytics/aggregated-data-analytics.md).|
|`$compute`| Defines computed properties in a `$select`, `$filter`, or `$orderby` expression. |
|`$filter`| Filters the list of resources returned. The query evaluates the expression specified with `$filter` for each resource in the query scope, and includes only items where the expression evaluates to `true` in the response.<br><br>Resources where the expression evaluates to `false` or `null`, or where reference properties are unavailable due to permissions, are omitted from the response. For examples, see [Query work tracking data using Analytics](../extend-analytics/wit-analytics.md).|
|`$orderby`| Specifies the sequence in which to return records. For examples, see [Query work tracking data using Analytics](../extend-analytics/wit-analytics.md).|
|`$top`/`$skip`| Limits the number of records returned. For examples, see [Project and organization-scoped queries](../extend-analytics/account-scoped-queries.md).|
|`$select`|Specifies the columns you need.|
|`$expand`|Nests other query options. Each `expandItem` is evaluated relative to the entity containing the navigation or stream property being expanded.<br><br>Provide a comma-separated list of query options, enclosed in parentheses, to the navigation property name. Allowed system query options are `$filter`, `$select`, `$orderby`, `$skip`, `$top`, `$count`, `$search`, and `$expand`. For examples, see [Query work tracking data using Analytics](../extend-analytics/analytics-recipes.md).|
|`$skiptoken`| Skips a specified number of records.|
|`$count` or `$count=true`|  Returns only the number of records. Enter `$count=true`to return both a count of the record and the queried data. For examples, see [Aggregate work tracking data using Analytics](../extend-analytics/aggregated-data-analytics.md).|
 
> [!TIP]
> Avoid mixing `$apply` and `$filter` clauses in a single query. To filter your query, you can either use a `$filter` clause or use a `$apply=filter()` combination clause. Both options work, but combining them in a single query might lead to unexpected results.

<a id="server-force-paging"></a>
## Understand server-side paging

Analytics forces paging when query results exceed 10,000 records. In that case, you get the first page of data and a link to follow to get the next page. Client tools like Power BI Desktop or Excel automatically follow the `@odata.nextLink` and load all required records when pulling data.

You can find the `@odata.nextLink` link at the end of the JSON output. The link looks like the original query followed by `$skip` or `$skiptoken`. For example:

```json
{
  "@odata.context":"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#WorkItems",
  "value":[
   // 10000 values here
  ],
  "@odata.nextLink":"https://https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/WorkItems?$skiptoken=10000"
}
``` 

## Next step
> [!div class="nextstepaction"]
> [Construct basic queries using OData Analytics](../extend-analytics/wit-analytics.md)

## Related content

- [What is Analytics?](../powerbi/what-is-analytics.md)
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)
- [Permissions and prerequisites to access Analytics in Azure DevOps](analytics-permissions-prerequisites.md)

<!--- nice to have but not necessary

## Query an entity and get a record count 

- Metadata returned for an org versus a project 
- Metadata returned when a project/process is defined and when it isn't 

> [!TIP]    
> Something about browsers with built-in support to format JSON/OData content. 
 
Build off WIQL 
Mention WIQL to Odata extension 

Query work item data 

Record count query 

https://analytics.dev.azure.com/content-learn/Content/_odata/v4.0-preview/WorkItems?
    $count=true&$select=WorkItemId,Title,WorkItemType,State,CreatedDate

Construct a basic query 
Query parts (Apply, filter, select, …) 
Compute
Filter, Filter your data
     Date range queries
     Filter using related entities
     Filter by a navigation property
Orderby, Sort results
top/skip
Select
Expand
Count
Return data from related entities
Enforce server-side paging

 --> 
