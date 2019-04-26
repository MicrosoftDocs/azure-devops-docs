---
title: Ad hoc vs managed queries
titleSuffix: Azure Boards
description: Use ad hoc or built-in search/managed queries to find work items in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: boards-queries
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 5A96317D-5A10-44CB-B2F9-F166BBAE916B
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2013'
ms.date: 02/14/2019
---

# Ad hoc vs managed work item queries

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You have two ways to perform work item searches: semantic or ad hoc searches and managed queries. 

::: moniker range=">= azure-devops-2019"  

You perform semantic or ad hoc searches using the work item search box (shown below)   

Choose any **Boards** page, enter a keyword or phrase in the search box, and press *Enter* or choose the ![ ](../../project/search/_img/_shared/start-search-icon.png) start search icon.  

> [!div class="mx-imgBorder"]
> ![Work Item Search box](../../project/navigation/_img/search/work-item-search-vert.png)    

You add and run managed queries using the built-in query-editor available from the **Boards>Queries** page.

> [!div class="mx-imgBorder"]
> ![Web portal, Queries page, new queries experience, Editor view of a Flat List Query](_img/using-queries-new-vsts-exp.png)  

::: moniker-end   


::: moniker range="<= tfs-2018"  

You perform semantic or ad hoc searches using the work item search box (shown below). 

In the search box, check that the text says _Search work items_. If it doesn't, use the selector to select it. Enter a keyword or phrase in the search box, and press *Enter* or choose the ![ ](../../project/search/_img/_shared/start-search-icon.png) start search icon. 

![Search Work Items Text Box](_img/using-queries-search-box-ts.png)

You add and run managed queries using the built-in query-editor available from the **Work>Queries** page.

::: moniker-end  

::: moniker range="azure-devops"  
> [!div class="mx-imgBorder"]
> ![Web portal, Queries page, new queries experience, Editor view of a Flat List Query](_img/using-queries-new-vsts-exp.png)  

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"  

<img src="_img/query-active-bugs-editor-vso.png" alt="Web portal, Queries page, Editor view of a Flat List Query" style="border: 1px solid #C3C3C3;" />   

::: moniker-end  

::: moniker range="tfs-2013"  

![Editor View of a Flat List Query - On-premises TFS](_img/5.png)  

::: moniker-end

For details about semantic or ad hoc searches, see [Perform a semantic or ad hoc work item search](search-box-queries.md). For details about managed queries, see [Create managed queries with the query editor](using-queries.md). 

### Use semantic or ad hoc searches to perform the following tasks:  
- Find a specific work item using its ID or a keyword 
- Find one or more work items across all projects in a fast, flexible manner
- Perform full text search across all work item fields
- Review work items assigned to a specific team member
- Search against specific work item fields to quickly narrow down a list of work items
- Determine what key words will support a managed search

### Use managed queries to perform the following tasks: |

- Review or triage a group of work items
- Perform bulk updates on several work items such as change Assign To, Iteration Path, or more
- Review parent-child or dependent links among work items
- Create a status or trend chart from a flat list query
- Create a list of work items that you'll export to [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../backlogs/office/create-your-backlog-tasks-using-project.md) 

> [!NOTE]    
> With semantic search, you search against a more fully indexed set of fields. With ad hoc search, the number of fields that are indexed are limited. 

## Related articles  
- [Use the query editor to create managed queries](using-queries.md)
- [Perform a semantic or ad hoc work item search](search-box-queries.md) - [Perform work item search](../../project/search/work-item-search.md) 
- [Create managed queries with the query editor](using-queries.md)   
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Work item field index](../work-items/guidance/work-item-field.md)    
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)