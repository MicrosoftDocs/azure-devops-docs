---
title: Query support for cross-service, integration, and extensions 
titleSuffix: Azure Boards 
description: Learn about extra features supported by work tracking queries in Azure Boards, Azure DevOps 
ms.custom: boards-queries
ms.technology: devops-agile
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 03/05/2021
---



# Cross-service and enhanced query operations  

[!INCLUDE [temp](../includes/version-all.md)] 

Managed queries are primarily focused on listing and working with work items. However, the query capabilities also support many cross-service operations, some of which require installation of a Marketplace extension. 

## Query-based dashboard widgets 

In addition to defining flat-list query charts that you can add to a dashboard, you can configure one of the following query-based widgets.
     	
  ![Chart work item query widget.](../../report/dashboards/media/widget-chart-work-query.png)  
 
  ![Query results widget.](../../report/dashboards/media/widget-query-results.png)  

  ![Query tile widget.](../../report/dashboards/media/widget-query-tile.png)  

Additional query-based widgets are available from the Azure DevOps Marketplace.  

## Query filters used in notifications

Notifications support query filter criteria so that you can customize when you'll receive notifications. There may be limitations in what fields can be used to support notification filtering. 

:::image type="content" source="media/about-queries/query-filter-notifications.png" alt-text="Screenshot of query filters in a notification subscription.":::

To learn more, see [Manage your personal notifications](../../notifications/manage-your-personal-notifications.md) 

<a id="wiql" />

## WIQL syntax, Wiql editor, and .wiq files  

Managed queries use the work item query language (WIQL), a language similar to Structured Query Language (SQL). You can gain access to the WIQL syntax behind a managed query when you install the [**Wiql Editor**](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor) Marketplace extensions. 

This extension adds the following to your Azure Boards web portal: 

- **Edit query wiql** (Work Item Query Language) to the **More commands** menu on the Query Editor and Query Results pages. 
- **WIQL Playground** page to **Boards**. 

From these interfaces you can exercise the following query features:  

- View the underlying WIQL syntax of a managed query 
- Run historical queries using the `ASOF` operator (`ASOF` operator won't be saved in a managed query) 
- Specify a `MODE` clause for linked work items to further refine the query results (`MODE` clause won't be saved in a managed query) 
- Move, copy, or paste query clauses  
- Import and export queries as `.wiq` files from one project, organization, or collection to another 
- Export WIQL for use in REST API calls. 

Also, you may find that it is easier to read queries with lots of clauses or heavily nested clauses from the WIQL format. For exceptionally large queries, the load times from a WIQL query may yield better load times. 

### WIQL syntax 

WIQL has five parts shown in the following syntax snippet. The WIQL syntax is not case-sensitive.

> [!div class="tabbedCodeSnippets"]
```WIQL
SELECT [State], [Title] 
FROM WorkItems
WHERE [Work Item Type] = 'User Story'
ORDER BY [State] Asc, [Changed Date] Desc
ASOF '6/15/2010'
```
To learn more about WIQL, see [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md). 

> [!NOTE]
> For queries made against Azure DevOps, the WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length. 
 
### .wiq file structure

 The following syntax shows the structure of the `.wiq` file.  For details on each `WorkItemQuery` syntax element, see [Define a work item query to add to a process template](../../reference/process-templates/define-work-item-query-process-template.md)
  
> [!div class="tabbedCodeSnippets"]
> ```XML 
> <WorkItemQuery Version="1">  
>       <TeamFoundationServer>collectionURL </TeamFoundationServer>  
>       <TeamProject>TeamProjectName </TeamProject>  
>       <Wiql>  
>       WorkItemQueryLanguage  
>       </Wiql>  
> </WorkItemQuery>  
> ```  

## Extensions 

The following Azure DevOps Marketplace extensions work with managed queries to provide more functionality.  

> [!NOTE]   
> Most Marketplace extensions are not supported features of Azure Boards and therefore not supported by the product team. For questions, suggestions, or issues you have when using these extensions, visit their corresponding extension page.

- [**Query Tile PRO**](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public): Adds the **Query Tile PRO** widget to the widget catalog for dashboards. This widget provides support for all query types (not just flat list queries) and provides more options to configure calculated values on the widget.  
  
- [**Wiql to OData**](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata): Adds the **Translate to OData** option to the **More commands** menu on the Query Editor and Query Results pages. You can then use this query or augment it to retrieve the work items from the Analytics service. To learn more, see [Query your work tracking data using OData Analytics](../../report/extend-analytics/wit-analytics.md).   

- [**Open in Power BI**](https://marketplace.visualstudio.com/items?itemName=stansw.vsts-open-in-powerbi): Adds the **Open in Power BI** option to the **More commands** menu on the Query Editor and Query Results pages. You can then use Power BI to generate reports based on the Analytics work tracking data. You can add these reports to an Azure DevOps dashboard. To learn more, see [Query your work tracking data using OData Analytics](../../report/extend-analytics/wit-analytics.md).    
 
- [**Enhanced Export**](https://marketplace.visualstudio.com/items?itemName=mskold.mskold-enhanced-export): Lets you export work item queries or test plans to document-like formats. To get the output formatted the way you want, you can select different templates to get the form and layout of your choice. You can preview, print or even open the document directly in Office.  


[!INCLUDE [temp](../includes/rest-apis-queries.md)]

## Related articles

- [About managed queries](about-managed-queries.md)
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)

