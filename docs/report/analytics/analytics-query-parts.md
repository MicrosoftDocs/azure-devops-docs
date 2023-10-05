---
title: Construct OData queries for Analytics 
titleSuffix: Azure DevOps  
description: Learn how to query Analytics OData metadata, entities, entity sets.  
ms.custom: "analytics" 
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '>= azure-devops-2019'
ms.date: 11/04/2022
---

# Construct OData queries for Analytics in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Analytics, the reporting platform for Azure DevOps, can answer quantitative questions about the past or present state of your projects. Analytics supports OData queries of its metadata and entity set data. By exercising simple queries from your web browser, you can  get familiar with the data model and query process.  

In this article you'll learn the following:  

> [!div class="checklist"]  
> * How to construct an Analytics OData query for the cloud or on-premises
> * How to query Analytics metadata 
> * How to query Analytics OData for an entity set 
> * Which query options are supported and the recommended sequence
> * When server-side paging is enforced 

You can query Analytics from any [supported web browser](/azure/devops/server/compatibility#supported-browsers). For other tools you can use to query Analytics, see [Analytics query tools](analytics-query-tools.md).

> [!NOTE]   
> OData, an application-level protocol for interacting with data via RESTful (where REST=Representational State Transfer) interfaces), supports the description of data models as well as editing and querying of data according to those models. The Entity Data Model (EDM) or metadata describes the information available from Analytics, including the entities, entity types, properties, relationships, and enumerations you use to query the data to build reports. For an overview of OData, see [Welcome to OData](/odata/overview). 

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

<a id="query-metadata" />

## URL components to query the metadata

Analytics exposes the [entity model](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_Toc453752500) at the metadata URL, formed by appending `$metadata` to the service root URL. Analytics provides service roots for a project or an entire organization in Azure DevOps.

You can look up any of the following data elements by querying the metadata. 
- Entity types and entity sets
- Properties and navigation properties
- Surrogate keys
- Enumerated lists  
- EntitySet
- Containers 
- Filter functions (`Org.OData.Capabilities.V1.FilterFunctions`)
- Supported aggregations (`Org.OData.Aggregation.V1.ApplySupported`)
- Batch support (`Org.OData.Capabilities.V1.BatchSupportType`)

The URL you use depends on whether you are querying data for Azure DevOps Services (cloud) or an on-premises Azure DevOps Server. 
 
# [**Cloud** (Azure DevOps Services](#tab/cloud)

To query the metadata for an organization or project hosted in the cloud, enter the URL syntax as shown below in a web browser. Replace `{OrganizationName}` and `{ProjectName}` with your organization name and the name of the project that you want to query. To return all metadata for the organization, don't specify the project name.  

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/version/$metadata 
\______________________________/\______________________________/\______________/\_________/
               |                                 |                       |           |
    Analytics service root URL         Organization/Project        OData version  return metadata
```


> [!NOTE] 
> The latest Analytics OData version is **v4.0-preview**. You can use this version for all queries against the hosted service. For more information on Analytics versions and available data, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md). 

Here's an example for the *fabrikam* organization that is hosted on Azure DevOps Services. 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata  
```

# [**On-premises** (Azure DevOps Server](#tab/on-premises)

To query the metadata for an on-premises server, enter the URL syntax as shown below in a web browser.  Replace `{ServerName}`, `{CollectionName}` and `{ProjectName}` with your on-premises names.  To return all metadata for the collection, don't specify the project name. 

> [!div class="tabbedCodeSnippets"]
```OData
https://{ServerName}/{CollectionName}/{ProjectName}/_odata/version/$metadata 
\_________________________________________________/\______________/\________/
                            |                              |            | 
     On-premises server, collection, project         OData version  return metadata
```

> [!NOTE] 
> The latest Analytics OData version is **v4.0-preview**. You can use this version for all queries against the hosted service. For more information on Analytics versions and available data, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md). 


Here's an example for the server named `fabrikam-devops` and the `DefaultCollection` hosted on Azure DevOps Server 2022:

> [!div class="tabbedCodeSnippets"]
```OData
https://fabrikam-devops/DefaultCollection/_odata/v4.0-preview/$metadata  
```

***

<a id="metadata-response" />

### Interpret the metadata response

Analytics returns an XML file of the data model. Use your browser search function to find information specific to the entity of interest. 


> [!TIP] 
> Depending on the browser you're using, this file may or may not be formatted in a readable manner. If it isn't formatted, you can find a free online XML formatter through a web browser search. 

The two main schemas defined in the Analytics metadata are `Microsoft.VisualStudio.Services.Analytics.Model`, which defines the entity types and enumerated types and their members, and the `Default` schema, which defines the entity containers and entity sets and supported OData filter, transformation, and custom aggregation functions. For more information, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).   

> [!div class="tabbedCodeSnippets"]
> ```XML
> <?xml version="1.0" encoding="UTF-8"?>
> <edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
>     <edmx:DataServices>
>         <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Microsoft.VisualStudio.Services.Analytics.Model">
>            <EntityType Name="Entity Name"/>
>         </Schema>
>         <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Default">
>            <EntityContainer Name="Container"/>
>         </Schema>
>     </edmx:DataServices>
> </edmx:Edmx>
> ```

<a id="metadata-response" />

### Related entities and navigation properties

All entity types are associated with properties and navigation properties. You can filter your queries of entity sets using both these types of properties. These are listed in the metadata under the `EntityType` as a `Property` or `NavigationalProperty`. You use related entities to specify additional filters, such as Iteration Paths, Area Paths, or Teams.  

The following code snippet provides a partial view of the metadata for the `WorkItem` entity. Properties correspond to a work item field as well as specific data captured by Analytics, such as `LeadTimeDays` and `CycleTimeDays`. Navigation properties correspond to other entity sets, or specific Analytics data captured for the entity type, such as `Revisions`, `Links`, `Children`, and `Parent`.   

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Key>
>    <PropertyRef Name="WorkItemId"/>
> </Key>
> <Property Name="WorkItemId" Type="Edm.Int32" Nullable="false">
>    <Annotation Term="Ref.ReferenceName" String="System.Id"/>
>    <Annotation Term="Display.DisplayName" String="Work Item Id"/>
> </Property>
> <Property Name="InProgressDate" Type="Edm.DateTimeOffset">
>    <Annotation Term="Display.DisplayName" String="InProgress Date"/>
>    </Property>
> <Property Name="CompletedDate" Type="Edm.DateTimeOffset">
>    <Annotation Term="Display.DisplayName" String="Completed Date"/>
>    </Property>
> <Property Name="LeadTimeDays" Type="Edm.Double">
>    <Annotation Term="Display.DisplayName" String="Lead Time Days"/>
> </Property>
> <Property Name="CycleTimeDays" Type="Edm.Double">
>    <Annotation Term="Display.DisplayName" String="Cycle Time Days"/>
> </Property>
> <Property Name="InProgressDateSK" Type="Edm.Int32"/>
> <Property Name="CompletedDateSK" Type="Edm.Int32"/>
> <Property Name="AnalyticsUpdatedDate" Type="Edm.DateTimeOffset"/>
> <Property Name="ProjectSK" Type="Edm.Guid" Nullable="false"/>
> <Property Name="WorkItemRevisionSK" Type="Edm.Int32" Nullable="false"/>
> ...
> <NavigationProperty Name="BoardLocations" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.BoardLocation)"/>
> <NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
> <NavigationProperty Name="InProgressOn" Type="Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
> <ReferentialConstraint Property="InProgressDateSK" ReferencedProperty="DateSK"/>
> </NavigationProperty>
> <NavigationProperty Name="CompletedOn" Type="Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
> <ReferentialConstraint Property="CompletedDateSK" ReferencedProperty="DateSK"/>
> </NavigationProperty>
> <NavigationProperty Name="Revisions" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemRevision)"/>
> <NavigationProperty Name="Links" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemLink)"/>
> <NavigationProperty Name="Children" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItem)"/>
> <NavigationProperty Name="Parent" Type="Microsoft.VisualStudio.Services.Analytics.Model.WorkItem">
> <ReferentialConstraint Property="ParentWorkItemId" ReferencedProperty="WorkItemId"/>
> </NavigationProperty>
> <NavigationProperty Name="Processes" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Process)"/>
> <NavigationProperty Name="Descendants" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItem)"/>
> <NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project" Nullable="false">
> <ReferentialConstraint Property="ProjectSK" ReferencedProperty="ProjectSK"/>
> <Annotation Term="Display.DisplayName" String="Project"/>
> ...
> ```
 
<a id="construct-basic-query" />

## URL components to query entities 

To query Analytics data and build reports, you typically query an entity set. For an overview of supported entities, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).

The following URL is used to query a specific `EntitySet`, such as `WorkItems`, `WorkItemSnapshot`, and `PipelineRuns`.   
   
# [**Cloud** (Azure DevOps Services](#tab/cloud)

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/OrganizationName/ProjectName/_odata/version/EntityType?{Query-options}
\______________________________/\__________________________/ \____________/\_________/\_____________/
               |                             |                    |               |          |
    Analytics service root URL     Organization/Project      OData version    Entity   Query parts  
```

Here's an example for the *fabrikam* organization that returns the count of work items defined for the Fabrikam Fiber project.  

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?%20$apply=aggregate($count%20as%20Count)
```
The example return 1399 work items. 

> [!div class="tabbedCodeSnippets"]
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
 

# [**On-premises** (Azure DevOps Server](#tab/on-premises)

Here's an example for the *fabrikam* server, *DefaultCollection*, that returns the count of work items defined for the *Fabrikam*  project.  

> [!div class="tabbedCodeSnippets"]
```OData
https://fabrikam/DefaultCollection/Fabrikam/_odata/v4.0-preview/WorkItems?%20$apply=aggregate($count%20as%20Count)
```
The example return 1399 work items. 

> [!div class="tabbedCodeSnippets"]
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

***

> [!NOTE] 
> If you don't include a `$select` or `$apply` clause, you'll receive a warning, such as `"VS403507: The specified query does not include a $select or $apply clause which is recommended for all queries. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."` It's equivalent to performing a select statement on the entity set and returning everything, all columns and all rows. If you have a large number of records, it may take several seconds. If you've more than 10,000 work items, [server-driven paging is enforced](../extend-analytics/odata-query-guidelines.md#perf-paging).  
> 
> To avoid running into usage limits, always include a `$select` or `$apply` clause.

For entity metadata property and relationship information, see the following articles: 

- [Calendar date, Project, and User metadata reference](entity-reference-general.md)
- [Metadata reference for Azure Boards](entity-reference-boards.md)
- [Metadata reference for Azure Pipelines](entity-reference-pipelines.md)
- [Metadata reference for Test Plans](entity-reference-test-plans.md)


<a id="query-entity-set" />

### Example: Query a specific entity set

To query a specific entity set, such as `WorkItems`, `Areas`, or `Projects`, add the name of the entity set: `/WorkItems`, `/Areas`, or `/Projects`. For a full list of entity sets, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md).

# [**Cloud** (Azure DevOps Services](#tab/cloud)

For example, you can get a list of projects defined for your organization by querying `/Projects` and selecting to return the `ProjectName` property. For the fabrikam organization, the URL is as shown below.

> [!div class="tabbedCodeSnippets"]
> ```OData
> 	https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/Projects?$select=ProjectName
> ```

Analytics returns the project names of those projects defined for the *fabrikam* organization.

> [!div class="tabbedCodeSnippets"]
> ```OData 	
> {
> @odata.context	"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Projects(ProjectName)",
> 
> "value": [
>    {
>       "ProjectName": "Basic Fabrikam"
>    },
>    {
>       "ProjectName": "Fabrikam Fiber"
>    },
>    {
>       "ProjectName": "MyFirstProject"
>    },
>    {
>       "ProjectName": "Fabrikam Test"
>    },
>    {
>       "ProjectName": "MyPublicProject"
>    }
>  ]
> }
> ```

# [**On-premises** (Azure DevOps Server](#tab/on-premises)

Here's an example that queries the `Projects` entity set to return  the names of all projects defined on the *DefaultCollection* on the *fabrikam* server,

> [!div class="tabbedCodeSnippets"]
```OData
https://fabrikam/DefaultCollection/_odata/v4.0-preview/Projects?$select=ProjectName
```
The example return three project names. 

> [!div class="tabbedCodeSnippets"]
> ```OData
> {
> "@odata.context": "http://fabrikam/DefaultCollection/_odata/v4.0-preview/$metadata#Projects(ProjectName)",
> "value": [
>    {
>       "ProjectName": "Fabrikam Fiber"
>    },
>    {
>       "ProjectName": "Fabrikam"
>    },
>    {
>       "ProjectName": "Fabrikam Florida"
>    }
>  ]
> }
> ```
***



## Query options

A query option is a set of query string parameters applied to a resource that can help control the amount of data being returned for the resource in the URL. 

Query options should be specified in the order listed in the following table. 

| Query option	|Notes|
|------------------|-------------------|  
|`$apply`| Set of transformations that you can apply to a query, such as: `filter`, `groupby`, `aggregate`, `compute`, `expand,` `concat`<br/>For examples, see [Aggregate work tracking data using Analytics](../extend-analytics/aggregated-data-analytics.md).|
|`$compute`| A supported OData function that you can specify to define computed properties that can be used in a `$select`,`$filter`, or `$orderby` expression. |  	
|`$filter`| Use to filter the list of resources that are returned. The expression specified with `$filter` is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response. Resources for which the expression evaluates to false or to null, or which reference properties that are unavailable due to permissions, are omitted from the response.<br/>For examples, see [Query work tracking data using Analytics ](../extend-analytics/wit-analytics.md).   |  		
|`$orderby`| Use to specify the sequence in which records should be returned. <br/>For examples, see [Query work tracking data using Analytics](../extend-analytics/wit-analytics.md).  |  		
|`$top`/`$skip`| Use to limit the number of records returned.<br/>For examples, see [Project and organization-scoped queries](../extend-analytics/account-scoped-queries.md).  |  		
|`$select`/`$expand`|Use `$select` to specify the columns you need to build your report. Use `$expand` to nest other query options. Each `expandItem` is evaluated relative to the entity containing the navigation or stream property being expanded.<br/><br/>Semicolon-separated list of query options, enclosed in parentheses, to the navigation property name. Allowed system query options are `$filter`, `$select`, `$orderby`, `$skip`, `$top`, `$count`, `$search`, and `$expand`.<br/>For examples, see [Query work tracking data using Analytics](../extend-analytics/analytics-recipes.md).|
|`$skiptoken`| Use to skip a specified number of records.  |	
|`$count` or `$count=true`|  Enter `$count` to only return the number of records. Enter `$count=true`to return both a count of the record and the queried data. <br/>For examples,  see [Aggregate work tracking data using Analytics](../extend-analytics/aggregated-data-analytics.md).|  
 
> [!TIP]    
> Avoid mixing `$apply` and `$filter` clauses in a single query. To filter your query, you have two options: (1) use a `$filter` clause or (2) use a `$apply=filter()` combination clause. Each one of these options works great on its own, but combining them together might lead to some unexpected results.


<a id="server-force-paging"></a>

## Enforce server-side paging

Analytics forces paging when query results exceed 10000 records. In that case, you'll get first page of data and link to follow to get next page. Link (`@odata.nextLink`) can be found at the end of the JSON output. It will look like an original query followed by `$skip` or `$skiptoken`. For example:


> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "@odata.context":"https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata#WorkItems",
>   "value":[
>    // 10000 values here
>   ],
>   "@odata.nextLink":"https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$skiptoken=10000"
> }
> ``` 
> 
> [!NOTE]
> When pulling data into client tools such as Power BI Desktop or Excel, tools will automatically follow next link and load all required records. 

## Next steps
> [!div class="nextstepaction"]
> [Construct basic queries using OData Analytics](../extend-analytics/wit-analytics.md)

## Related articles

- [What is the Analytics service?](../powerbi/what-is-analytics.md)
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
