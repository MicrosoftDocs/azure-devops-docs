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



If you want to export a query to Excel, you can do that from [Excel or Visual Studio/Team Explorer](../backlogs/office/bulk-add-modify-work-items-excel.md). Or, to export a query directly from the web portal Queries page, install the [VSTS Open in Excel Marketplace extension](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel). This extension will add in **Open in Excel** link to the toolbar of the query results page. 
 

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
Open in Power BI create stunning reports in Power BI based on the Work Item Queries saved in Team Services. You can configure your reports to be refreshed daily to make sure your picture is always up to date. When you modify your Query by adding extra filters or columns these changes will be automatically reflected in Power BI upon next refresh.

The WIQL to OData extension translates an Azure DevOps query into an OData query for use with Azure DevOps Analytics OData. 

[!INCLUDE [temp](../includes/tip-wiql-extension.md)]
 

## Indexing and data stores  

Work item data store v Analytics v data warehouse v indexing

 
[!INCLUDE [temp](../includes/rest-apis-queries.md)]

## Related articles

- [Wiql Editor (Marketplace extension)](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)
- [Enhanced Export (Marketplace extension)](https://marketplace.visualstudio.com/items?itemName=mskold.mskold-enhanced-export)
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)


### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace, Azure DevOps tab. 
 
