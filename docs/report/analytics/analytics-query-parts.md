---
title: Analytics query parts
titleSuffix: Azure DevOps  
description: Learn about the query parts of an Analytics query.
ms.custom: "analytics" 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Analytics query parts in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
If you are new to Analytics and OData, you can get familiar with the data model and query process by exercising simple queries from your web browser. This article provides the URL to use when exercising an OData query against a cloud organization or project, or an on-premises collection or project.

In addition, the various parts of a query are outlined and the recommended sequence in which to specify them. 

> [!NOTE] 
> SOmething about the version in the URL and available data.  



<!--- 
Build off WIQL 
Mention WIQL to Odata extension 

Query work item data  --> 


## Query the metadata  

You can look up any of the following data elements by querying the metadata. 
- Entity types and entity sets
- Properties and navigation properties
- Surrogate keys
- Enumumerated lists  
- EntitySet
- Containers 
- Filter functions (`Org.OData.Capabilities.V1.FilterFunctions`)
- Supported aggregations (`Org.OData.Aggregation.V1.ApplySupported`)
- Batch support (`Org.OData.Capabilities.V1.BatchSupportType`)


<a id="query-metadata" />

## Query the Analytics service for metadata

Analytics exposes the [entity model](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_Toc453752500) at the metadata URL, formed by appending $metadata to the service root URL. Analytics provides service roots for a [project or an entire  organization in Azure DevOps](account-scoped-queries.md).

### Query for metadata on a specific project

You construct the service root URL for a project as shown:

::: moniker range="azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata
> ``` 

::: moniker-end

[!INCLUDE [temp](../includes/api-versioning.md)]

::: moniker range=">= azure-devops-2019 < azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata
> ```
> 
> [!NOTE]
> The examples shown in this document are based on a Azure DevOps Services URL, you will need to substitute in your Azure DevOps Server URL

::: moniker-end

<a id="metadata-response" />

## Interpret the metadata response

The core components of the metadata response are `EntityType` and `EntityContainer`.

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

### Azure DevOps Services 

To query the metadata for an organization hosted in the cloud, enter the URL syntax as shown below in a web browser. 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/OrganizationName/_odata/version/$metadata 
\______________________________/\______________/ \____________/\_________/
               |                        |                |         |
    Analytics service root URL     Organization   OData version  return metadata
```

Here is an example for the fabrikam organization hosted on Azure DevOps Services. 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata  
```


### Azure DevOps Server (on-premises) 


To query the metadata for an on-premises server, enter the URL syntax as shown below in a web browser. 

> [!div class="tabbedCodeSnippets"]
```OData
https://ServerName/CollectionName/_odata/version/$metadata 
\______________________________/\_______________/\_________/
               |                        |             | 
    Analytics service root URL   OData version  return metadata
```

Here is an example for the server named `fabrikam-devops` and the `DefaultCollection` hosted on Azure DevOps Server 2022:

> [!div class="tabbedCodeSnippets"]
```OData
https://fabrikam-devops/DefaultCollection/_odata/v4.0-preview/$metadata  
```
  

## Query options and querying an Entity 

The following URL is used to query a specific EntityType, such as `WorkItems`, `WorkItemSnapshot`, and `PipelineRuns`.  For a list of all supported EntityTypes, see [Analytics OData metadata](../extend-analytics/analytics-metadata).
   

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/OrganizationName/ProjectName/_odata/version/EntitySet?{Query}
\______________________________/\__________________________/ \____________/\_________/\_____/
               |                             |                    |               |      |
    Analytics service root URL     Organization/Project      OData version    Entity   Query   
```

Here is an example for the fabrikam organization designed to 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata  
```

https://analytics.dev.azure.com/kelliott/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata  



A query option is a set of query string parameters applied to a resource that can help control the amount of data being returned for the resource in the URL. 

Query options should be specified in the order listed in the following table. 

| Query option	|Notes|
|------------------|-------------------|  
|`$apply`|Set of transformations: filter, groupby, aggregate, compute, expand, concat|
|`$compute`| A supported OData function, use to define computed properties that can be used in a $select or within a $filter or $orderby expression. |  	
|`$filter`| Use to filter the list of resources that are returned. The expression specified with $filter is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response. Resources for which the expression evaluates to false or to null, or which reference properties that are unavailable due to permissions, are omitted from the response.  |  		
|`$orderby`| Use to specify the sequence in which records should be returned.  |  		
|`$top`/`$skip`| Use to limit the number of records returned.   |  		
|`$select`/`$expand`|Use $select to specify the columns you need to build your report. Use $expand to nest other query options. Each expandItem is evaluated relative to the entity containing the navigation or stream property being expanded.<br/><br/>emicolon-separated list of query options, enclosed in parentheses, to the navigation property name. Allowed system query options are $filter, $select, $orderby, $skip, $top, $count, $search, and $expand.|
|`$skiptoken`| Use to skip a specified number of records.  |	
|`$count` or `$count=true`	 |  Enter `$count` to only return the number of records. Enter `$count=true`to return both a count of the record and the queried data. |  
 


## Query an entity and get a record count 
 


Entity query

 
> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/OrganizationName/ProjectName/_odata/version/Entity$metadata ?$top=2&$orderby=Name
\_____________________________/\___________________________/ \__________________/
                  |                          |                       |
          service root URL               resource path           query options

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


## Related articles

- [What is the Analytics service?](../powerbi/what-is-analytics.md)
- [Permissions and prerequisites to access Analytics in Azure DevOps](analytics-permissions-prerequisites.md)

<!--- nice to have but not necessary

- Metadata returned for an org versus a project 
- Metadata returned when a project/process is defined and when it isn't 

--> 

