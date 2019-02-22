---
title: Define the hyperlink for a work item
titleSuffix: Azure Boards
description: Construct a URL for a work item for Azure Boards, Azure DevOps & TFS
ms.custom: work-items, seodec18
ms.prod: devops
ms.technology: devops-agile   
ms.assetid:  
ms.manager: jillfra
ms.author: kaelli
ms.topic: reference   
monikerRange: '>= tfs-2013'   
ms.date: 11/19/2018
---



# Define the URL for a work item 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You can define the URL for a work item using the syntax provided based on the version or platform you work from. 

Examples in this article use the following conventions:

-   *OrganizationName* specifies the name of the Azure Boards organization  
-   *ServerName* specifies the name of the TFS application tier server   
-   *Port* specifies the port, default=8080
-   *CollectionName* specifies the name of the project collection.
-   *TeamProjectName* specifies the project name
-   *WorkItemNumber* specifies the ID of the bug, task, or other work item.
 

::: moniker range="azure-devops"  

```
https://dev.azure.com/OrganizationName/ProjectName/_workitems/edit/WorkItemNumber
```

or

```
https://OrganizationName.visualstudio.com/DefaultCollection/ProjectName/_workitems/edit/WorkItemNumber
```


**Examples:** 

```
https://dev.azure.com/fabrikam/Phone%20Saver/_workitems/edit/390
```  

or

```
https://fabrikam/DefaultCollection/Phone%20Saver/_workitems/edit/390
```  

::: moniker-end  

::: moniker range=">= tfs-2015 <= azure-devops-2019"  

<b>http://</b>*ServerName:Port*/<b>tfs/</b>*CollectionName/TeamProjectName*/<b>_workitems?id=</b>*WorkItemNumber*<b>&_a=edit</b>

**Example:** 
```  
http://fabrikamprime:8080/tfs/DefaultCollection/Phone%20Saver/_workitems/133&_a=edit
```  

::: moniker-end  

::: moniker range="tfs-2013"  

## TFS 2013.2

<b>http://</b>*ServerName:Port*/<b>tfs/</b>*CollectionName/TeamProjectName*/<b>_workitems/edit/</b>*WorkItemNumber*

**Example:**
```
http://fabrikamprime:8080/tfs/DefaultCollection/Phone%20Saver/_workitems/edit/133
```

## TFS 2013.1 and earlier versions

<b>http://</b>*ServerName:Port*/<b>tfs/</b>*CollectionName/TeamProjectName*/<b>_workitems#_a=edit&id=</b>*WorkItemNumber*  


**Example:**
```
http://fabrikamprime:8080/tfs/DefaultCollection/Phone%20Saver/_workitems#_a=edit&id=133
```


::: moniker-end  

