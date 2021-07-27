---
title: Triage work items using a work item query 
titleSuffix: Azure Boards  
ms.global_help.title: Triage work items
description: Review and update work items use the triage mode from the query results view in Azure Boards, Azure DevOps, & Team Foundation Server
ms.custom: boards-queries
ms.technology: devops-agile
ms.assetid: 486A876F-A04F-4DC7-829C-94E88BB9B7E1 
ms.topic: tutorial
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 07/27/2021
---


# Triage work items  

[!INCLUDE [temp](../includes/version-all.md)]

Using a work item query you can quickly review and update work items. Oftentimes team use the triage mode for a query to perform the following tasks: 
- Set the priority of a bug or work item 
- Assign a work item to a sprint or team member 
- Add details to the description, acceptance criteria, or repo steps 
- Link related work items 
- Update the status of work items 

In this article you'll learn how to:

>[!div class="checklist"]      
> * Use triage query mode to update a list of work items   
> * Bulk save work items that you've updated  

[!INCLUDE [temp](../includes/prerequisites-queries.md)]


## Open Queries 

[!INCLUDE [temp](../includes/open-queries.md)] 

## Use triage buttons 

#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2019"

The buttons to move up or down within the query results list are outside the work item form. Choose **Bottom** to cycle through the choices for where the work item form appears: **Bottom**, **Right**, or **Off**. 

![Web portal, choose Boards>Queries](media/triage-queries/triage-buttons-new-exp.png)


::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

The buttons to move up or down within the query results list are inside the work item form. Choose **Bottom** to cycle through the choices for where the work item form appears: **Bottom**, **Right**, or **Off**.

![Triage query results ](media/triage-queries/scrum-active-bug-triage-mode-co.png)

> [!TIP]    
> The same buttons to move up or down within a work item list are available from a **Work Items** page when you choose a work item. See 
::: moniker-end


#### [Visual Studio](#tab/visual-studio/)

When you choose **View Results** for a query, it opens in triage mode displaying the first item in the list. You can switch from vertical and hortizontal views or expand or collapse the triage window using the :::image type="icon" source="media/triage-buttons.png" border="false"::: **Vertical Split**, **Horizontal Split**, **Collapse Bottom Panel**, or **Collapse Top Panel** icons. 

Choose **Previous** or **Next** to move up or down within the query results list.

:::image type="content" source="media/triage-queries/triage-mode-visual-studio-2019.png" alt-text="Screenshot of View Results and triage mode.":::


> [!NOTE]   
> Triage mode isn't available from Visual Studio 2017. 


After making several changes to work items, choose **Save Results** to save all changes. 


:::image type="content" source="media/triage-queries/triage-mode-save-results-visual-studio-2019.png" alt-text="Screenshot of Save Results btoon for triage mode.":::

*** 

<a id="save-bulk-changes" />

## Bulk update and save changes to work items 


#### [Browser](#tab/browser/)

You can update several work items through the triage process, and then do a bulk save when you're finished. 

::: moniker range=">= tfs-2018"

Multi-select the work items you want to update, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and then select the option you want from the menu of options.

![Query results multi-select menu](../backlogs/media/bulk-m-query-results-menu-options-ts.png) 
::: moniker-end

::: moniker range="tfs-2017" 

Multi-select the work items you want to update, choose the :::image type="icon" source="../../media/icons/context-menu.png" border="false"::: context icon, and then select the option you want from the menu of options.

![Query results multi-select menu, TFS-2017](../backlogs/media/bulk-m-query-r-tfs-2016-menu-options.png)   

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"

Multi-select the work items you want to update, choose the :::image type="icon" source="../../media/icons/context-menu.png" border="false"::: context icon, and then select the option you want from the menu of options.

![Query results multi-select menu, TFS 2015](../backlogs/media/bulk-m-query-r-tfs-menu-options.png)  

::: moniker-end

Work items shown in bold text indicate that local changes have not yet been saved to the data store.   


::: moniker range=">= azure-devops-2019"
Choose **Save items** to save all work items you've modified. 

<img src="media/triage-queries/save-work-items-new-exp.png" alt="Choose Save work items to save all modified work items" style="border: 1px solid #C3C3C3;" /> 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

Choose the ![double-save-icon](../media/icons/icon-double-save.png) double-save icon to save all work items you've modified.

![Azure Boards and TFS 2017, Query results page, save bulk modified items](../backlogs/media/bulk-modify-save-ts.png)  

::: moniker-end


#### [Visual Studio](#tab/visual-studio/)


> [!NOTE]   
> Bulk update isn't available from Visual Studio 2017.  




* * * 

## Related articles

- [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md)  
- [Manage bugs](../backlogs/manage-bugs.md) 
- [Create a query](using-queries.md) 

