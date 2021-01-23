---
title: Query support for cross-service, integration, and extensions 
titleSuffix: Azure Boards 
description: Learn about additional features supported by work tracking queries in Azure Boards, Azure DevOps 
ms.custom: boards-queries
ms.technology: devops-agile
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 01/22/2021
---



# Query support for cross-service, integration, and extensions

[!INCLUDE [temp](../includes/version-all.md)]

## Cross service features

- Query charts, widgets, dashboards
- Search box, adhoc search
- Odata
- Power Bi
- Notifications (uses query filters) 


<a id="export-query" />  

## Export a query  

From the query editor in Team Explorer, use the File menu to save a query as a .wiq file. When you create a project, the shared queries are created based on [.wiq files defined in a process](../../reference/process-templates/define-work-item-query-process-template.md). 

See also:
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)  
- [Wiql Editor, a Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)  
 

::: moniker range="azure-devops"  

> [!NOTE]  
> The WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length.  

::: moniker-end  



## Extensions
- WIQL 
- Power BI
- Excel


[!INCLUDE [temp](../includes/tip-wiql-extension.md)]
 

## Indexing and data stores  

Work item data store v Analytics v data warehouse v indexing

## REST API 

[!INCLUDE [temp](../includes/rest-apis-queries.md)]

## Related articles

- [Wiql Editor (Marketplace extension)](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)
- [Enhanced Export (Marketplace extension)](https://marketplace.visualstudio.com/items?itemName=mskold.mskold-enhanced-export)
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)


### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace, Azure DevOps tab. 
 
