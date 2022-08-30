---
title: Query Analytics  
titleSuffix: Azure DevOps  
description: Learn how to query the Analytics service to return metadata or filter data for an EntityType.  
ms.custom: "analytics" 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Query Analytics in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
If you're new to Analytics and OData, you can get familiar with the data model and query process by exercising simple queries from your web browser. This article provides the URL to use when exercising an OData query against a cloud organization or project, or an on-premises collection or project.

You can quickly query the metadata or a filtered set of data. Query options are summarized as well as the recommended sequence in which to specify them. 

You can query Analytics from any [supported web browser](/azure/devops/server/compatibility#supported-browsers).


[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]




<a id="query-metadata" />

## Query the Analytics service for metadata

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
 


### Query the metadata for a cloud-hosted project  

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


### Query the metadata for an on-premises project  

To query the metadata for an on-premises server, enter the URL syntax as shown below in a web browser.  Replace `{ServerName}`, `{CollectionName}` and `{ProjectName}` with your on-premises names.  To return all metadata for the collection, don't specify the project name. 

> [!div class="tabbedCodeSnippets"]
```OData
https://{ServerName}/{CollectionName}/{ProjectName}/_odata/version/$metadata 
\_________________________________________________/\______________/\________/
                            |                              |            | 
     On-premises server, collection, project         OData version  return metadata
```

[!INCLUDE [temp](../includes/api-versioning.md)]

Here's an example for the server named `fabrikam-devops` and the `DefaultCollection` hosted on Azure DevOps Server 2022:

> [!div class="tabbedCodeSnippets"]
```OData
https://fabrikam-devops/DefaultCollection/_odata/v4.0-preview/$metadata  
```
 
> [!NOTE]
> The remaining examples shown in this article are based on an Azure DevOps Services URL. Make the substitutions needed to support your on-premises queries.  
 
<a id="metadata-response" />

### Interpret the metadata response

Analytics returns an XML file of the data model. 


> [!TIP] 
> Depending on the browser you're using, this file may or may not be formatted in a readable manner. If it isn't formatted, you can find a free online XML formatter through a web browser search. 

The core components of the metadata response are `EntityType` and `EntityContainer`. For more information, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).   

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

## Query the Analytics service for Entity data 

The following URL is used to query a specific EntityType, such as `WorkItems`, `WorkItemSnapshot`, and `PipelineRuns`.  For a list of all supported EntityTypes, see [Analytics OData metadata](../extend-analytics/analytics-metadata.md).
   

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

> [!NOTE] 
> If you don't include a `$select` or `$apply` clause, you may receive a warning, such as `"VS403507: The specified query does not include a $select or $apply clause which is recommended for all queries. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."` It's equivalent to performing a select statement on the entity set and returning everything, all columns and all rows. If you have a large number of records, it may take several seconds. If you've more than 10,000 work items, [server-driven paging is enforced](../extend-analytics/odata-query-guidelines.md#perf-paging).  
> To avoid running into usage limits, always include a `$select` or `$apply` clause.

## Query options

A query option is a set of query string parameters applied to a resource that can help control the amount of data being returned for the resource in the URL. 

Query options should be specified in the order listed in the following table. 

| Query option	|Notes|
|------------------|-------------------|  
|`$apply`|Set of transformations that you can apply to a query, such as: `filter`, `groupby`, `aggregate`, `compute`, `expand,` `concat`|
|`$compute`| A supported OData function that you can specify to define computed properties that can be used in a `$select`,`$filter`, or `$orderby` expression. |  	
|`$filter`| Use to filter the list of resources that are returned. The expression specified with `$filter` is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response. Resources for which the expression evaluates to false or to null, or which reference properties that are unavailable due to permissions, are omitted from the response.  |  		
|`$orderby`| Use to specify the sequence in which records should be returned.  |  		
|`$top`/`$skip`| Use to limit the number of records returned.   |  		
|`$select`/`$expand`|Use `$select` to specify the columns you need to build your report. Use `$expand` to nest other query options. Each `expandItem` is evaluated relative to the entity containing the navigation or stream property being expanded.<br/><br/>Semicolon-separated list of query options, enclosed in parentheses, to the navigation property name. Allowed system query options are `$filter`, `$select`, `$orderby`, `$skip`, `$top`, `$count`, `$search`, and `$expand`.|
|`$skiptoken`| Use to skip a specified number of records.  |	
|`$count` or `$count=true`	 |  Enter `$count` to only return the number of records. Enter `$count=true`to return both a count of the record and the queried data. |  
 
> [!TIP]    
> Avoid mixing `$apply` and `$filter` clauses in a single query. To filter your query, you have two options: (1) use a `$filter` clause or (2) use a `$apply=filter()` combination clause. Each one of these options works great on its own, but combining them together might lead to some unexpected results.

## Query a single entity set

To query a single entity set, such as `WorkItems`, `Areas`, or `Projects`, add the name of the entity: `/WorkItems`, `/Areas`, or `/Projects`. For a full list of entity sets, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md).

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
> {
> "ProjectName": "Basic Fabrikam"
> },
> {
> "ProjectName": "Fabrikam Fiber"
> },
> {
> "ProjectName": "MyFirstProject"
> },
> {
> "ProjectName": "Fabrikam Test"
> },
> {
> "ProjectName": "MyPublicProject"
> }
> ]
> }
> ```



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
