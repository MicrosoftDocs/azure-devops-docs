---
title: Copy or clone stories, issues, or other work items in Azure Boards
titleSuffix: Azure Boards  
description: Learn how to copy or clone user stories, issues, bugs, tasks, or other work items in Azure Boards. 
ms.custom: "seodec18, cross-project"   
ms.service: azure-devops-boards
ms.assetid: 743A3914-CD86-403D-AA4F-42CDBBB69F95  
ms.author: chcomley
author: KathrynEE 
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Copy or clone stories, issues and other work items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 
   
::: moniker range=">= azure-devops-2019"

There are two types of copy functions you can use. The first is to duplicate a single work item, referred to as copy or clone. Also, you can choose to change the project or work item type when copying/cloning a work item. 

::: moniker-end

::: moniker range="< azure-devops-2019"

There are two types of copy functions you can use. The first is to duplicate a single work item, referred to as copy or clone. 

::: moniker-end

The second copy function is to copy a multi-selected list of work items to the clipboard, referred to as copy as HTML or copy to clipboard. 

::: moniker range="< azure-devops-2019"

> [!TIP]    
> You can't copy or clone linked work items at this time. To learn more, see the [Azure Boards FAQs](../faqs.yml#how-do-i-copy-or-clone-a-work-item-with-all-linked-items). 

::: moniker-end


Use this article to learn how to:  

>[!div class="checklist"]      
> * Copy or clone a work item, essentially making a duplicate of a work item     
> * Change the work item type, for example from a bug to a user story 
> * Copy a list of work items to email or share with others  
> * Copy the URL of a work item  

[!INCLUDE [temp](../includes/image-differences.md)] 

[!INCLUDE [temp](../includes/prerequisites-work-items.md)]

<a id="copy-clone"></a>

## Copy or clone a work item   

Clone a work item when you want to create another instance of it. This action opens a form with all fields filled out. Copy a work item when you want to create another instance of it and optionally change its work item type. This action opens a form with all fields filled out except for the Title. A related link to the original work item is created. Also any parent link is copied over. No history or attachments are copied over from the original work item.  

> [!NOTE]
> It is possible that some fields are copied over depending on the on-premise version you are working with and how you have customized your work item types. If the work item type of the work item that you are cloning has no state transition rule that says to clear the *Closed By* field when the *State* is **New** or **Active**, then that field gets copied over. The current system out-of-box templates have this rule defined. It was added to TFS 2018 and later versions. 


::: moniker range=">= azure-devops-2020"

1. From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and choose **Create copy of work item**.  
    ![web portal, user story work item form, open context menu, choose Create copy of work item](media/copy/choose-copy-work-item-s171.png) 

1. Choose the project and work item type if different from the copied work item.  Optionally change the Title and provide more details. 

    :::image type="content" source="media/copy/copy-work-item-s171.png" alt-text="Copy work item dialog":::

	Optionally, check one or more of the boxes: 
 
	- **Include existing links**: To include all **Related** and external links in the copied work item.  Note that a **Related** link is created automatically for the work item copied, and included in the **Discussion** section. There is no method for disabling this feature.  
	- **Include existing attachments**: To include attachments in the copied work item
	- **Include child work items**: To include existing links to child work items in the copied work item. This feature isn't recursive. Only those work items directly linked as children to the work item being copied are included. This option appears even if there are no child items linked to the work item.  
	
	> [!NOTE]   
	> - When you copy the work item to a different project, **Include child work items** is disabled. 
	> - When you copy a work item and choose to **Include child work items**, a copy is made of each child work item and linked to the copied work item through a Parent-Child link. 
	> - The **Include child work items** feature requires installation of Azure DevOps Server 2020.1 update.   

1. In the work item form that opens, update other fields as needed. All work items start in the New state.   

::: moniker-end

::: moniker range="azure-devops-2019"

1. From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and choose **Create copy of work item**.  
    ![web portal, user story work item form, open context menu, click Create copy of work item](media/copy/choose-copy-work-item-s171.png) 

1. Choose the project and work item type if different from the copied work item.   

    :::image type="content" source="media/copy/copy-work-item-2020.png" alt-text="Copy work item dialog":::

	Optionally, check one or more of the boxes: 

	- **Include existing links**: To link the copied work item as a Related link type and maintain all other related and external links included in the copied work item.  
	- **Include existing attachments**: To include attachments in the copied work item.

1. Choose **OK**.

1. In the work item form that opens, update other fields as needed. All work items start in the New state.  

::: moniker-end

::: moniker range="tfs-2018"
1. From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and choose **Create copy of work item**.  
    ![web portal, user story work item form, open context menu, click Create copy of work item](media/copy-work-item-copy-clone-ts.png) 
1. Choose the project and work item type if different from the copied work item.  Optionally change the Title and provide more details. To link the copied work item as a Related link type and maintain all other links (related links and external links) included in the copied work item, check the **Include existing links** checkbox.  

    ![Copy work item dialog](media/copy-work-item-copy-clone-ts-dialogue.png)  

1. Choose **OK**.

1. In the work item form that opens, update other fields as needed. All work items start in the New state.  
::: moniker-end


> [!TIP]    
> Copied or cloned work items always have an ID that is greater than the work items from which they were copied or cloned.   


::: moniker range=">= azure-devops-2019"

## Change the work item type  

If you have a large number of work items whose type you want to change, use [Change work item type](move-change-type.md). If the **Change work item type** option isn't available to you, you can export a set of work items using Excel or CSV, copy them to a new list, and re-import them by specifying a different work item type. See [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Import or update work items in bulk by using CSV files](../queries/import-work-items-from-csv.md). 

::: moniker-end

<a id="html"></a>

## Copy a list of work items  

With this option, you can copy an HTML formatted table of selected items from either a backlog page or query results list. You can then email this list using your choice of email client, or paste into a Word document, Excel spreadsheet, or other application. 

::: moniker range="<= azure-devops-2019"
> [!NOTE]  
> The data copied with **Copy as HTML** is the same as that copied when you select **Email selected work items**. If you don't have an SMTP server configured, you can work around this by using **Copy as HTML**. For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts). 
::: moniker-end



1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard. 

2. Open the &hellip; context menu of one of the selected work items, and then choose **Copy to clipboard** or **Copy as HTML**. 

    Here we multi-select from the product backlog and choose <b>Copy to clipboard</b>.

    ![backlog page, multi-select items, open context menu, Copy to clipboard](media/copy-work-item-copy-to-clipboard-ts-1.png) 

## Paste the contents into your email client

Paste the contents of the clipboard into your email client or other application. To open a linked work item, requires users to have read access to the project or area node for those work items. 

The formatted table contains a link to each work item included in your selected results list. A link to a query that will open only those work items selected is also provided. 

![Copy as HTML paste results](media/bulk-modify-copy-as-html-table-results.png)  

<a id="copy-url">  </a>

## Copy the URL

### [Browser](#tab/browser/)

Copy the URL from the web browser address or hover over the title and then select the ![Copy to clipboard icon](media/icon-copy-to-clipboard.png) copy-to-clipboard icon.  

<img src="media/add-work-item-copy-URL.png" alt="Copy hyperlink for a work item from web portal" />


### [Visual Studio](#tab/visual-studio/)

In Visual Studio, right-click the work item tab to copy the URL. The URL opens the work item in the web portal.  

![Copy full path hyperlink for a work item from Visual Studio](media/add-work-items-copy-url-for-a-work-item.png)

* * *


## Related articles

- [Copy or clone test plans, test suites, test cases, and other test items](../../test/copy-clone-test-items.md) 
- [Bulk modify work items](bulk-modify-work-items.md)   
- [Move work items and change the work item type](move-change-type.md)
- [Remove, delete, or restore work items](remove-delete-work-items.md)  
- [Pre-populate fields using work item templates](work-item-template.md)
- [Azure Boards FAQs](../faqs.yml) 




