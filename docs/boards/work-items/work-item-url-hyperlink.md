---
title: Define the hyperlink for a work item
titleSuffix: Azure Boards
description: Learn how to construct a URL for a work item for Azure Boards and Azure DevOps.
ms.custom: work-items, seodec18
ms.service: azure-devops-boards
ms.author: chcomley
author: KathrynEE 
ms.topic: how-to
monikerRange: '<= azure-devops'   
ms.date: 03/02/2022
---


# Define the URL for a work item 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can define the URL for a work item using the syntax provided based on the version or platform you work from. 

[!INCLUDE [temp](../../includes/version-selector-minimize.md)]

Examples in this article use the following conventions:

- *OrganizationName* specifies the name of the Azure Boards organization  
- *ServerName* specifies the name of the Azure DevOps application tier server   
- *Port* specifies the port, default=8080
- *CollectionName* specifies the name of the project collection.
- *ProjectName* specifies the project name
- *WorkItemNumber* specifies the ID of the bug, task, or other work item.
 

## Azure DevOps Services 
 

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

## Azure DevOps Server 2020 


http://*ServerName:Port/CollectionName/ProjectName*/<b>_workitems?id=</b>*WorkItemNumber*<b>&_a=edit</b>

**Example:** 
```  
http://fabrikamprime:8080/DefaultCollection/Phone%20Saver/_workitems/133&_a=edit
```  

## Azure DevOps Server 2019 and earlier versions


http://*ServerName:Port*/**tfs**/*CollectionName/ProjectName*/**_workitems?id**=*WorkItemNumber***&_a=edit** 

**Example:** 
```  
http://fabrikamprime:8080/tfs/DefaultCollection/Phone%20Saver/_workitems/133&_a=edit
```  


::: moniker range=">= azure-devops-2020"  

## Share links in context with your board or backlog

Share links to work items within the context of your board or backlog with the work item URL parameter. When you open a work item form from your board, backlog, or sprint backlog, the parameter `?workitem=[ID]` is appended to the URL.

For example: 

::: moniker-end  

::: moniker range="azure-devops"  

```
https://dev.azure.com/fabrikam/FabrikamFiber/_boards/board/t/Voice/Stories/?showParents=true&workitem=191
```
::: moniker-end  

::: moniker range="azure-devops-2020"  

```
https://ServerName/DefaultCollection/ProjectName/_boards/board/t/Voice/Stories/?workitem=56
```
::: moniker-end  

::: moniker range=">= azure-devops-2020"  

Anyone you share the link with, opens the work item within the same context you had when you shared the link.

::: moniker-end  


