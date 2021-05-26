---
title: Define query as a hyperlink
titleSuffix: Azure Boards
description: Construct a URL for a query in Azure Boards, Azure DevOps, & Team Foundation Server
ms.custom: boards-queries
ms.technology: devops-agile
ms.article:   
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/25/2021
---

# Define a query as a hyperlink  

[!INCLUDE [temp](../includes/version-all.md)]

<a id="define-query-hyperlink" />  

A query hyperlink uses the Work Item Query Language (WIQL), which resembles Transact-SQL. For details about constructing WIQLs, see [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md).


> [!NOTE]    
> Most browsers enforce a limit of between 2000 and 2083 characters for a URL string.    


[!INCLUDE [temp](../../includes/version-selector-minimize.md)]

::: moniker range="azure-devops"  

## Query hyperlink syntax for Azure DevOps Services

You must encode the WIQL portion of the URL syntax. You can use any URL encoder tool to encode your URL. 

```  
https://dev.azure.com/OrganizationName/ProjectName/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage}
```
For example, the following hyperlink lists the ID and title of all active bugs defined under the FabrikamFiber/Web area path for the fabrikam organization.

```  
https://dev.azure.com/fabrikam/FabrikamFiber/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.State%5D%3D'Active'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'
```

The decoded WIQL conforms to: 

```wiql
SELECT [System.ID], [System.Title]
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug'
   AND [System.State]='Active'
   AND [System.AreaPath]='FabrikamFiber\Web'
``` 

> [!NOTE]  
> For queries made against Azure Boards, the WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length.  

::: moniker-end  


::: moniker range=">= tfs-2017 < azure-devops"  

## Query hyperlink syntax for TFS 2017 through Azure DevOps Server 2020

```  
https://{ServerName}/{CollectionName}/{ProjectName}/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage}
```

For example, the following hyperlink lists the ID, title, and state of all bugs under the FabrikamFiber/Web area path.

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%2C%20%5BSystem.State%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'%20%20
```

Which is comparable to the non-encoded entry shown below. 

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=
SELECT [System.ID], [System.Title], [System.State] 
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug' 
   AND [System.AreaPath]='FabrikamFiber\Web'   
```

::: moniker-end   

::: moniker range="tfs-2015"  


## Query hyperlink syntax for TFS 2015 


```  
https://{ServerName}/{CollectionName}/{TeamProjectName}/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage}
```

The ```_workitems?``` entry has replaced the ```q.aspx?``` entry used in the syntax for TFS 2013 and previous versions.  

For example, the following hyperlink lists the ID, title, and state of all bugs under the FabrikamFiber/Web area path.

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%2C%20%5BSystem.State%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'%20%20
```

Which is comparable to the non-encoded entry shown below. 

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=
SELECT [System.ID], [System.Title], [System.State] 
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug' 
   AND [System.AreaPath]='FabrikamFiber\Web'   
```

::: moniker-end   

::: moniker range="tfs-2013"    

## Query hyperlink syntax for TFS 2013 

```  
https://{ServerName}/{CollectionName}/q.aspx?pname={TeamProjectName}&wiql={WorkItemQueryLanguage}
```
For example, the following hyperlink lists the ID, title, and state of all bugs that have build number 9.0.30304 for the FabrikamFiber project. 

```
http://fabrikam:8080/tfs/DefaultCollection/q.aspx?pname=FabrikamFiber&wiql=
SELECT [System.ID], [System.Title], [System.State] 
	FROM WorkItems 
	WHERE [System.TeamProject]='FabrikamFiber' 
	AND [System.WorkItemType]='Bug' 
	AND [System.FoundIn]='9.0.30304' 
```

::: moniker-end   


## Related articles

- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)  
- [Wiql Editor, a Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)  
- [REST API, Wiql](/rest/api/azure/devops/wit/wiql)
 
