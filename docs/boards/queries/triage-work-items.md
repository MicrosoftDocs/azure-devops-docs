---
title: Triage work items by using a work item query in Azure Boards and Azure DevOps 
titleSuffix: Azure Boards  
ms.global_help.title: Triage work items
description: Review and update work items by using the triage mode from the query results view in Azure Boards and Azure DevOps.
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.assetid: 486A876F-A04F-4DC7-829C-94E88BB9B7E1 
ms.topic: tutorial
ms.author: chcomley
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---


# Triage work items with a work item query in Azure Boards and Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
**Visual Studio 2019 | Visual Studio 2015 | Visual Studio 2013**  

Using a work item query you can quickly review and update work items. Teams often use the triage mode for a query to complete the following tasks: 
- Set the priority of a bug or work item 
- Assign a work item to a sprint or team member 
- Add details to the description, acceptance criteria, or repo steps 
- Link-related work items 
- Update the status of work items 

In this article you'll learn how to:

>[!div class="checklist"]      
> * Use triage query mode to update a list of work items   
> * Bulk save work items that you've updated  

[!INCLUDE [temp](../includes/prerequisites-queries.md)]


## Open Queries 

[!INCLUDE [temp](../includes/open-queries.md)] 

## Use triage buttons and save work items

#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2019"

The buttons to move up or down within the query results list are outside the work item form. Choose **Bottom** to cycle through the choices for where the work item form appears: **Bottom**, **Right**, or **Off**. 

![Screenshot of  Web portal, Queries Results page, move up or down in the list controls.](media/triage-queries/triage-buttons-new-exp.png)


You can save each work item as you change it. Or, you can update multiple work items and save them all at once with  :::image type="icon" source="../media/icons/save-items.png" border="false"::: **Save Items**. 

:::image type="content" source="media/triage-queries/save-items-web-portal.png" alt-text="Screenshot of Web portal, Queries Results, and Save Items.":::

If you don't see :::image type="icon" source="../media/icons/save-items.png" border="false"::: **Save Items**, choose the :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More commands**   and select the **Save Items** option.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Query results page, save bulk modified items.](../backlogs/media/bulk-modify/query-results-bulk-save-items.png) 

::: moniker-end

::: moniker range="tfs-2018"

The buttons to move up or down within the query results list are inside the work item form. Choose **Bottom** to cycle through the choices for where the work item form appears: **Bottom**, **Right**, or **Off**.

![Screenshot of Triage query results, TFS 2018 version.](media/triage-queries/scrum-active-bug-triage-mode-co.png)


You can save each work item as you change it. Or, you can update multiple work items and save them all at once with  :::image type="icon" source="../media/icons/save-items.png" border="false"::: **Save Items**. 

::: moniker-end


#### [Visual Studio](#tab/visual-studio/)


> [!NOTE]   
> Triage mode isn't available from Visual Studio 2017. 


When you choose **View Results** for a query, it opens in triage mode displaying the first item in the list. You can switch from vertical and horizontal views or expand or collapse the triage window using the :::image type="icon" source="media/triage-buttons.png" border="false"::: **Vertical Split**, **Horizontal Split**, **Collapse Bottom Panel**, or **Collapse Top Panel** icons. 

Choose **Previous** or **Next** to move up or down within the query results list.

:::image type="content" source="media/triage-queries/triage-mode-visual-studio-2019.png" alt-text="Screenshot of View Results and triage mode, Visual Studio.":::
 
After making several changes to work items, choose **Save Results** to save all changes. 


:::image type="content" source="media/triage-queries/triage-mode-save-results-visual-studio-2019.png" alt-text="Screenshot of Save Results for triage mode, Visual Studio.":::

* * * 

<a id="save-bulk-changes" />

## Bulk update and save changes to work items 
 
From the web portal, you can update several work items through the triage process, and then do a bulk save when you're finished. 


Multi-select the work items you want to update, choose :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **More commands**, and then select the option you want from the menu of options.

![Screenshot of Web portal, Query results multi-select menu.](../backlogs/media/bulk-m-query-results-menu-options-ts.png) 


Work items shown in bold text indicate that local changes haven't yet been saved to the data store.   

::: moniker range=">= azure-devops-2019"
Choose **Save items** to save all work items you've modified. 

![Screenshot of Choose Save work items to save all modified work items](media/triage-queries/save-work-items-new-exp.png)

::: moniker-end

::: moniker range="tfs-2018"

Choose the ![double-save-icon](../media/icons/icon-double-save.png) double-save icon to save all work items you've modified.

![Screenshot of Web portal, Query results page, save bulk modified items, TFS 2018 version.](../backlogs/media/bulk-modify-save-ts.png)  

::: moniker-end

 

## Related articles

- [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md)  
- [Manage bugs](../backlogs/manage-bugs.md) 
- [Create a query](using-queries.md) 

