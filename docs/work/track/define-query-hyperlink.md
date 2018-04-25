---
title: Define query as a hyperlink
titleSuffix: VSTS & TFS
description: Construct a URL for a query in Visual Studio Team Services & Team Foundation Server
ms.prod: devops
ms.technology: vs-azure-devops-agile 
ms.article:   
ms.assetid:  
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
 
ms.date: 09/29/2017  
---



# Define a query as a hyperlink  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

<a id="define-query-hyperlink" />  

The easiest way to define a hyperlink is to create a query that matches what you want and then copy the URL for the query. The hyperlink uses the work item query language (WIQL), which resembles Transact-SQL. For details about constructing WIQLs, see [Syntax for the Work Item Query Language (WIQL)](../../reference/wiql-syntax.md).

VSTS and TFS 2015 require that you encode the WIQL portion of the URL syntax. You can use any URL encoder tool to encode your URL. 

TFS 2013 and previous versions didn't require encoding.  

> [!NOTE]    
>Most browsers enforce a limit of between 2000 and 2083 characters for a URL string.    


## Syntax for VSTS, TFS 2018, TFS 2017 

```  
https://{youraccount}.visualstudio.com/DefaultCollection/{TeamProjectName}/{TeamName}/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage]
```
For example, the following hyperlink lists the ID and title of all active bugs defined under the FabrikamFiber/Web area path for the fabrikam.visualstudio.com account.

```  
https://fabrikam.visualstudio.com/DefaultCollection/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.State%5D%3D'Active'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'
```

The decoded WIQL conforms to: 

```
SELECT [System.ID], [System.Title]
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug'
   AND [System.State]='Active'
   AND [System.AreaPath]='FabrikamFiber\Web'
```

## Syntax for TFS 2015   

```  
https://{ServerName}/{CollectionName}/{TeamProjectName}/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage]
```

The ```_workitems?``` entry has replaced the ```q.aspx?``` entry used in the syntax for TFS 2013 and previous versions.  

For example, the following hyperlink lists the ID, title, and state of all bugs under the FabrikamFiber/Web area path hosted on the fabrikam server.

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%2C%20%5BSystem.State%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'%20%20
```

Which is comparable to the non-encoded entry:  

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=
SELECT [System.ID], [System.Title], [System.State] 
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug' 
   AND [System.AreaPath]='FabrikamFiber\Web'   
```

## Syntax for TFS 2013 and previous versions 

```  
https://{ServerName}/{CollectionName}/q.aspx?pname={TeamProjectName}&wiql={WorkItemQueryLanguage]
```
For example, the following hyperlink lists the ID, title, and state of all bugs that have build number 9.0.30304 for the FabrikamFiber team project hosted on the fabrikam server. 

```
http://fabrikam:8080/tfs/DefaultCollection/q.aspx?pname=FabrikamFiber&wiql=
SELECT [System.ID], [System.Title], [System.State] 
	FROM WorkItems 
	WHERE [System.TeamProject]='FabrikamFiber' 
	AND [System.WorkItemType]='Bug' 
	AND [System.FoundIn]='9.0.30304' 
```


## Related articles: 
- [Syntax for the Work Item Query Language (WIQL)](../../reference/wiql-syntax.md)  
- [Wiql Editor, a Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)  
- [REST API, Wiql](https://docs.microsoft.com/en-us/rest/api/vsts/wit/wiql)
 
> [!NOTE]  
> For queries made against VSTS, the WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length.  