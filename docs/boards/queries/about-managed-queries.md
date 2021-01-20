---
title: List work items with managed queries 
titleSuffix: Azure Boards 
description: Track work by creating queries to list work items in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: boards-queries
ms.technology: devops-agile
ms.assetid: 285a014e-89bf-4e5f-bebf-11094e93d796  
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 01/14/2021
---


# About managed queries  

[!INCLUDE [temp](../includes/version-all.md)]

List bugs, user stories, or other work items based on field criteria you specify using queries. You can then review these lists with your team, triage work, or perform bulk work item updates. 

If you're just getting started, read [View, run, or email a work item query](view-run-query.md). For a quick reference to query editor tasks and sample queries, see [Query quick reference](query-index-quick-ref.md). 

## Use queries 

A query lists a filtered set of work items. You can initiate a query using the [query editor](using-queries.md). Optionally, you can perform an ad hoc search using the [search box](search-box-queries.md). 

With queries, you can perform these functions: 

- List items to perform bulk updates, assign or reassign    
- Review work that's in progress or recently closed  
- Triage work (set priority, review, update)   
- Create a chart and add it to a dashboard  
- Create a chart to get a count of items or sum a field  
- Create a chart that shows a burndown or burnup over time 
- View a tree of parent-child related work items 

For the mechanics of constructing and saving queries, see [Use the query editor to list and manage queries](using-queries.md). If you find that your queries take too long to return results, review the [Guidance to create high-performing queries](high-performing-queries.md).  

For specific examples, see [Query quick reference, Example queries](#query-index-quick-ref.md).  

## Get started 

If you are looking for a specific work item, use the ad hoc search box. If you want to generate a list of work items to triage, update, chart, or share with others, then use a managed query. 
 
- [View and run a query](view-run-query.md)   
- [Perform an ad hoc search](search-box-queries.md)  
- [Query editor](using-queries.md)    
- [Query operators & macros](query-operators-variables.md)  

For a quick reference to query editor tasks and sample queries, see [Query quick reference](query-index-quick-ref.md). 

### Additional tips for working with queries

- To find work items that are assigned to you, add the **@Me** macros as the value for the **Assigned To** field in one of the query clauses.  
- All valid users with standard access can create queries and folders under the **My Queries** area. To create queries and query folders under **Shared Queries**, you must have the Contribute permission set. For more information, see [Set permissions on queries](../queries/set-query-permissions.md).
- You can modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, [open the query editor](../queries/using-queries.md).   
- You can open any query in [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md), where you can update the fields of one or more work items and publish your changes to the database for tracking work items.  
- You can [visualize status or progress](../../report/dashboards/charts.md) by creating a pie-chart, column chart, or trend chart for flat-list queries. 

::: moniker range=">= azure-devops-2019"
For additional tips when working with the new queries experience or the directory-focused queries views, see [Query FAQs](query-faqs.yml). 
::: moniker-end


## Supported features 

The following sections provide an overview of the features supported to define queries and manage queries. 
<!--- interactive, filter  --> 

[!INCLUDE [temp](../includes/feature-matrix-filter-queries.md)]

<a id="macros" /> 

[!INCLUDE [temp](../includes/feature-matrix-query-macros.md)]

[!INCLUDE [temp](../includes/feature-matrix-manage-queries.md)]

<a id="ad-hoc-v-managed" /> 

## Ad hoc vs managed work item queries

You have two ways to perform work item searches: semantic or ad hoc searches and managed queries. 

### Ad hoc searches

::: moniker range=">= azure-devops-2019"  

You perform semantic or ad hoc searches using the work item search box (shown below)   

Choose any **Boards** page, enter a keyword or phrase in the search box, and press *Enter* or choose the :::image type="icon" source="../../project/search/media/shared/start-search-icon.png" border="false"::: start search icon.  

> [!div class="mx-imgBorder"]
> ![Work Item Search box](../../project/navigation/media/search/work-item-search-vert.png)    

::: moniker-end   

::: moniker range="<= tfs-2018"  

You perform semantic or ad hoc searches using the work item search box (shown below). 

In the search box, check that the text says _Search work items_. If it doesn't, use the selector to select it. Enter a keyword or phrase in the search box, and press *Enter* or choose the :::image type="icon" source="../../project/search/media/shared/start-search-icon.png" border="false"::: start search icon. 

![Search Work Items Text Box](media/using-queries-search-box-ts.png)

::: moniker-end   

**Use semantic or ad hoc searches to perform the following tasks:** 
 
- Find a specific work item using its ID or a keyword 
- Find one or more work items across all projects in a fast, flexible manner
- Perform full text search across all work item fields
- Review work items assigned to a specific team member
- Search against specific work item fields to quickly narrow down a list of work items
- Determine what key words will support a managed search

For details about semantic or ad hoc searches, see [Perform a semantic or ad hoc work item search](search-box-queries.md). 

> [!NOTE]    
> With semantic search, you search against a more fully indexed set of fields. With ad hoc search, the number of fields that are indexed are limited.  

### Managed queries 

::: moniker range=">= azure-devops-2019"  

You add and run managed queries using the built-in query-editor available from the **Boards>Queries** page.

> [!div class="mx-imgBorder"]
> ![Web portal, Queries page, new queries experience, Editor view of a Flat List Query](media/using-queries-new-vsts-exp.png)  

::: moniker-end   

::: moniker range="<= tfs-2018"  
 
You add and run managed queries using the built-in query-editor available from the **Work>Queries** page.
::: moniker-end  


::: moniker range=">= tfs-2015 <= tfs-2018"  

![Web portal, Queries page, Editor view of a Flat List Query](media/query-active-bugs-editor-vso.png)   

::: moniker-end  

::: moniker range="tfs-2013"  

![Editor View of a Flat List Query - on-premises Azure DevOps](media/5.png)  

::: moniker-end

**Use managed queries to perform the following tasks:** 

- Review or triage a group of work items
- Perform bulk updates on several work items such as change Assign To, Iteration Path, or more
- Review parent-child or dependent links among work items
- Create a status or trend chart from a flat list query
- Create a list of work items that you'll export to [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../backlogs/office/create-your-backlog-tasks-using-project.md) 

For details about managed queries, see [Define a query](using-queries.md). 

## Query types (flat, direct links, tree)

Azure Boards supports three query types. The icon next to each query indicates the query type. The **Work items and direct links** and **Tree of work items** query types support finding work items that are linked to one another based on selected link types. Use the **Tree of work items** query type to list a hierarchically-linked set of work items, and use **Work items and direct links** for all other link types. 

> [!div class="mx-imgBorder"]  
> ![Query type icon list](../backlogs/office/media/excel/query-types.png)

Wen exporting a query to Excel, the first two query types, **Flat list of work items** and **Work items and direct links** are imported as flat list queries. Only the **Tree of work items** queries import as a tree list. Direct links queries are imported as a flat list as modifying multiple types of links isn't a supported feature in Excel. 

To learn more about link types, see [Link type reference](link-type-reference.md).

## Query within or across projects

By default, you query within a single project. However, using the query editor, you can [query across projects](using-queries.md#across-projects). 


<a id="across-projects" />  

## Query across projects  

By default, shared queries and new queries are scoped to the current project. However, you can create queries to find work items defined within the project collection. You save cross-project queries under a specific project. 

::: moniker range=">= tfs-2015"  

To list work items defined in two or more projects, checkmark **Query across projects**. For example, the following query finds all features created in all projects within the last 30 days.
 
<img src="media/using-queries-query-across-projects.png" alt="Web portal, Queries page, Query Editor, Checkbox, Query across projects" style="border: 1px solid #C3C3C3;" /> 

::: moniker-end

::: moniker range="tfs-2015"  

> [!NOTE]  
> The **Query across projects** feature is supported from TFS 2015.1 and later versions.  

::: moniker-end  

::: moniker range=">= tfs-2015"  

With the **Query across projects** checked, you can add the Team Project field to filter to a select number of projects.   

<img src="media/using-queries-query-across-select-projects.png" alt="Azure Boards and TFS 2015.1, Web portal, Query across select projects using the In operator" style="border: 2px solid #C3C3C3;" />

> [!NOTE]
> Separate multiple project names with the list separator that corresponds to the regional settings defined for your client computer, for example, a comma (,). 

The *Team Project* field becomes available only after you check  **Query across projects**.  Moreover, when **Query across projects** is unchecked, only those fields from those WITs defined in the current project appear in the Field drop-down menu. When **Query across projects** is checked, all fields from all WITs defined in all projects in the collection appear in the Field drop-down menu.  

::: moniker-end  

::: moniker range="tfs-2013"   

To find all features created in all projects within the last 30 days, remove the <strong>Team Project=@Project</strong> clause from the query.  

<img src="media/using-queries-query-across-all-projects-tfs.png" alt="TFS 2013-2015, Web portal, Query across select projects using the In operator" style="border: 2px solid #C3C3C3;" />

All fields from all WITs defined in all projects in the collection always appear in the Field drop-down menu.  

Use <strong>Team Project=@Project</strong> to scope the query to find only those work items defined for the current project. 

::: moniker-end  


<a id="my-shared"/>

## My Queries, Shared Queries, and Favorites

Only you can view and run queries that you save under **My Queries** with the queries directory. Also, you can favorite one of these queries to have it appear within your query selector.

Queries you and others save under **Shared Queries** can be viewed by everyone with access to the project. Shared queries can be organized within folders and favorited by you or for a team. Also, you can set permissions on the folders and queries to prevent others from moving or editing them. 

For details, see:
- [Manage queries & query folders ](organize-queries.md)
- [Set query permissions](set-query-permissions.md)
- [Favorite a query](view-run-query.md) and [Set personal or team favorites](../../project/navigation/set-favorites.md#favorite-a-shared-query)

::: moniker range=">= azure-devops-2019"

## Query directory, query folders, and breadcrumbs 

The **Queries** page  contains a directory-focused view which you can filter to find specific queries of interest. Previously, the **Queries** page presented the queries folders, query editor, and query results all within the same view. 

When working in the **Queries** pages, you can navigate to a subfolder, folder, or page.

![Queries breadcrumbs](../../project/navigation/media/breadcrumbs/queries-breadcrumbs.png)

Also, you can choose a query that you've favorited from the selector menu, Or, you can choose to browse all queries which returns you to the **All Queries** page. 
  
> [!div class="mx-imgBorder"]  
> ![Screenshot of Queries, Query selector.](../../project/navigation/media/breadcrumbs/query-bd-and-selector.png) 

::: moniker-end

For more information, see [Query FAQs, Navigate and Folders](query-faqs.yml).  

[!INCLUDE [temp](../includes/tip-wiql-extension.md)]
 


## Taskboard versus query list items

You may notice and wonder why the contents of the taskboard differ from those listed with its created query? To learn more, see [taskboard items versus query list items](../backlogs/backlogs-boards-plans.md#task-board-items).

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

## Related articles

- [Query quick reference](query-index-quick-ref.md)
- [Work item field index](../work-items/guidance/work-item-field.md) 
- [Set query permissions](set-query-permissions.md)  
- [Wiql Editor (Marketplace extension)](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)
- [Enhanced Export (Marketplace extension)](https://marketplace.visualstudio.com/items?itemName=mskold.mskold-enhanced-export)
- [Perform work item search](../../project/search/work-item-search.md) 
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Work item field index](../work-items/guidance/work-item-field.md)    
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)


### Add a custom field to support your queries

To add a custom field to support your query needs, see [Customize your work tracking experience](../../reference/customize-work.md). 

### About query charts and widgets

To learn about query charts and widgets, see these articles:  
- [Chart a flat-list query](../../report/dashboards/charts.md)   
- [Chart for work items widget](../../report/dashboards/widget-catalog.md#chart-wit-widget)  
- [Query results widget](../../report/dashboards/widget-catalog.md#query-results-widget)   
- [Query tile widget](../../report/dashboards/widget-catalog.md#query-tile-widget) 
 

### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace, Azure DevOps tab. 

