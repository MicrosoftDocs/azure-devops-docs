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


### Azure DevOps Services 

To query the metadata for an organization hosted in the cloud, enter the URL syntax as shown below in a web browser. 

```
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

```
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
  


## Entity set query parts

**Azure DevOps Services**

```
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


## OData query parts 


Entity query 

https://analytics.dev.azure.com/OrganizationName/ProjectName/_odata/version/$metadata ?$top=2&$orderby=Name
\______________________________________/\____________________/ \__________________/
                  |                               |                       |
          service root URL                  resource path           query options

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

## Query options 

A query option is a set of query string parameters applied to a resource that can help control the amount of data being returned for the resource in the URL. 

Query options should be specified in the order listed in the following table. 

| Query option	|Notes|
|------------------|-------------------|  
|$apply|Set of transformations: filter, groupby, aggregate, compute, expand, concat|
|$compute| A supported OData function, use to define computed properties that can be used in a $select or within a $filter or $orderby expression. |  	
|$filter| Use to filter the list of resources that are returned. The expression specified with $filter is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response. Resources for which the expression evaluates to false or to null, or which reference properties that are unavailable due to permissions, are omitted from the response.  |  		
|$orderby| Use to specify the sequence in which records should be returned.  |  		
|$top/$skip| Use to limit the number of records returned.   |  		
|$select/$expand|Use $select to specify the columns you need to build your report. Use $expand to nest other query options. Each expandItem is evaluated relative to the entity containing the navigation or stream property being expanded.<br/><br/>emicolon-separated list of query options, enclosed in parentheses, to the navigation property name. Allowed system query options are $filter, $select, $orderby, $skip, $top, $count, $search, and $expand.|
|$skiptoken| Use to skip a specified number of records.  |	
|$count or $count=true	 |  First returns num of records, second returns data and total number of rows|  
 


## Related articles

 


