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




## Related articles

 


