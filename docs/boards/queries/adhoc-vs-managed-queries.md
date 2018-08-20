---
title: Adhoc vs managed queries
titleSuffix: Azure Boards and TFS
description: Use adhoc or built-in search/managed queries to find work items in Azure Boards & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 5A96317D-5A10-44CB-B2F9-F166BBAE916B
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2017'
ms.date: 06/02/2017  
---

# Adhoc vs managed work item queries

**Azure DevOps Services | TFS 2018 | TFS 2017**

You have two ways to perform work item searches: adhoc and managed. 

[!INCLUDE [temp](../../_shared/new-navigation.md)]  



# [New navigation](#tab/new-nav)

::: moniker range="vsts"  

You perform adhoc queries using the work item search box (shown below), whereas you perform managed queries using the built-in search function available from the **Boards>Queries** page.  

Choose any **Boards** page, enter a keyword or phrase in the search box, and press *Enter* or choose the ![](../../project/search/_img/_shared/start-search-icon.png) start search icon. 

	> [!div class="mx-imgBorder"]
	> ![Work Item Search box, new navigation](../../project/navigation/_img/search/work-item-search-vert.png)    


::: moniker-end    

::: moniker range=">= tfs-2017 <= tfs-2018"    
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end    


# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017"   

You perform adhoc queries using the work item search box (shown below), whereas you perform managed queries using the built-in search function available from the **Work>Queries** page.  

In the search box, check that the text says _Search work items_. If it doesn't, use the selector to select it. Enter a keyword or phrase in the search box, and press *Enter* or choose the ![](../../project/search/_img/_shared/start-search-icon.png) start search icon. 

![Search Work Items Text Box](_img/using-queries-search-box-ts.png)

::: moniker range="tfs-2017"
> [!NOTE]    
> The Work item search feature is available from TFS 2017 and later versions.     
::: moniker-end

---

>[!div class="mx-tdCol2BreakAll"]    
> |Use adhoc queries when you want to: | Use managed queries when you want to: |
> |------|---------|
> |- Find a specific work item using its ID or a keyword <br/>- Find one or more work items across all projects in a fast, flexible manner<br/>- Perform full text search across all work item fields<br/>- Review work items assigned to a specific team member<br/>- Search against specific work item fields to quickly narrow down a list of work items<br/>- Determine what key words will support a managed search |- Review or triage a group of work items<br/>- Perform bulk updates on several work items such as change Assign To, Iteration Path, or more<br/>- Review parent-child or dependent links among work items<br/>- Create a status or trend chart from a flat list query<br/>- Create a list of work items that you'll export to [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../backlogs/office/create-your-backlog-tasks-using-project.md) |

> [!NOTE]    
> With Work item or adhoc search, searches are performed against a full-text search engine that has indexed all work item fields.  


## Resources 

- [Use the query editor to create managed queries](using-queries.md)
- [Perform work item search](../../project/search/work-item-search.md)
 