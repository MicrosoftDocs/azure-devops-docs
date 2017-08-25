---
title: Copy work items | VSTS & TFS
description: Copy or clone work items, copy the URL link, or copy a list of work items to the clipboard-Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 743A3914-CD86-403D-AA4F-42CDBBB69F95  
ms.manager: douge
ms.author: kaelli
ms.date: 08/10/2017  
---

# Copy or clone work items  

<b>VSTS | TFS 2017 | TFS 2015</b> 


There are two types of copy functions you can use. The first is to duplicate a single work item, referred to as copy or clone. In addition, you can choose to change the team project or work item type when copying/cloning a work item. 

The second copy function is to copy a multi-selected list of work items to the clipboard, referred to as copy as HTML or copy to clipboard. 


[!INCLUDE [temp](../_shared/image-differences.md)] 

<a id="copy-clone"></a>
## Copy or clone a work item   
Clone a work item when you want to create another instance of it. This action opens a form with all fields filled out. No  history or attachments are copied. 

Copy a work item when you want to create another instance of it and optionally change its work item type. This action opens a form with all fields filled out except for the Title. A related link to the original work item is created. Also any parent link is copied over. No  history or attachments are copied over from the original work item. 


**VSTS** 

1. From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and click **Create copy of work item**.  

	<img src="_img/copy-wi-copy-clone-ts.png" alt="VSTS, web portal, user story work item form, open context menu, click Create copy of work item " style="border: 2px solid #C3C3C3;" /> 

2. Choose the team project and work item type if different from the copied work item.  Optionally change the Title and provide additional details. To link the copied work item as a Related link type and maintain all other links (related links and external links) included in the copied work item, check the **Include existing links** checkbox.  

	<img src="_img/copy-wi-copy-clone-ts-dialogue.png" alt="VSTS, web portal, user story work item form, open context menu, click Copy work item " style="border: 2px solid #C3C3C3;" /> 


**TFS 2017** 

1. From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and click **Create copy of work item**.  

	<img src="_img/copy-wi-copy-clone-2017.png" alt="TFS 2017, web portal, user story work item form, open context menu, click Create copy of work item " style="border: 2px solid #C3C3C3;" /> 

2. Choose the team project and work item type if different from the copied work item.  Optionally change the Title and provide additional details. To link the copied work item as a Related link type and maintain all other links (related links and external links) included in the copied work item, check the **Include existing links** checkbox.  

	<img src="_img/copy-wi-copy-clone-2017-dialogue.png" alt="TFS 2017, web portal, user story work item form, open context menu, click Copy work item " style="border: 2px solid #C3C3C3;" /> 

 
**TFS 2015**

1. From the web portal, open the work item you want to copy or clone, and click the copy/clone icon. The copied work item is automatically linked to the original work item through a Related link type.

	<img src="_img/copy-wi-copy-clone-2015.png" alt="TFS 2015, web portal, user story work item form, click copy-clone icon" style="border: 2px solid #C3C3C3;" /> 

2. Choose the team project (if copying to another project) and work item type if different from the copied work item. Optionally change the Title and provide additional details. The copied work item is automatically linked to the original work item through a Related link type. 


**TFS 2013**

1. From the web portal, open the work item you want to copy or clone, and click the copy/clone icon. The copied work item is automatically linked to the original work item through a Related link type. 

	<img src="_img/IC712055.png" alt="TFS 2013, web portal, user story work item form, click copy-clone icon" style="border: 2px solid #C3C3C3;" /> 

2. Choose the team project (if copying to another project) and work item type if different from the copied work item. Optionally change the Title and provide additional details. The copied work item is automatically linked to the original work item through a Related link type. 
 

## Change the work item type  

>[!NOTE]  
>**Feature availability:**&#160;&#160;The Change the work item type is only available from VSTS.  

If you have a large number of work items whose type you want to change, use [Change work item type](#change-wit). If Change work item type isn't available to you, you can export a set of work items using Excel, copy them to a new Excel list, and re-import them by specifying a different work item type. See [Bulk add or modify work items with Excel](../office/bulk-add-modify-work-items-excel.md). 


<a id="html"></a>
## Copy a list of work items  

With this option, you can copy an HTML formatted table of selected items from either a backlog page or query results list. You can then email this list using your choice of email client, or paste into a Word document, Excel spreadsheet, or other application. 
 
>[!NOTE]  
>The data copied with **Copy as HTML** is the same as that copied when you select **Email selected work items**. If you don't have an SMTP server configured, you can work around this by using **Copy as HTML**. For on-premises TFS, all email actions require an [SMTP server to be configured](../../tfs-server/admin/setup-customize-alerts.md). 

**VSTS**

1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard.

2. Open the &hellip; context menu of one of the selected work items, and then choose <b>Copy to clipboard</b> or <b>Copy as HTML</b>.</p> 
<p>Here we multi-select from the product backlog and choose <b>Copy to clipboard</b>. 

	<img src="_img/copy-wi-copy-to-clipboard-ts-1.png" alt="VSTS, backlog page, multi-select items, open context menu, Copy to clipboard" style="border: 2px solid #C3C3C3;" /> 

3. Paste the contents of the clipboard into your email client or other application. To open a linked work item, requires users to have read access to the team project or area node for those work items.</p>

	The formatted table contains a link to each work item included in your selected results list. A link to a query that will open only those work items selected is also provided.</p>

	<img src="_img/bulk-modify-copy-as-html-table-results.png" alt=" Copy as HTML paste results" style="border: 2px solid #C3C3C3;" />


**TFS 2017**

1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard.

2. Open the &hellip; context menu of one of the selected work items, and then choose <b>Copy as HTML</b>.</p> 

	Here we multi-select from the backlog page.</p>

	<img src="_img/bulk-modify-copy-as-html.png" alt="TFS 2017, Backlog page, multi-select items, open context menu, click Copy as HTML menu option" style="border: 2px solid #C3C3C3;" /> 

**TFS 2015**

1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard.

2. Open the ![context icon](../_img/icons/context_menu.png) context menu of one of the selected work items, and then choose <b>Copy as HTML</b>. 

	Here we multi-select from the backlog page.</p>

	<img src="_img/copy-wi-copy-as-html-2015.png" alt="TFS 2015, Backlog page, multi-select items, open context menu, click Copy as HTML menu option" style="border: 2px solid #C3C3C3;" /> 


<a id="copy-url">  </a>
## Copy the URL
- From the web portal for VSTS and TFS 2017, simply copy the URL from the web browser address or hover over the title and then click the ![Copy to clipboard icon](_img/icon-copy-to-clipboard.png) copy-to-clipboard icon.  

	<img src="_img/add-work-item-copy-URL.png" alt="Copy hyperlink for a work item from web portal" style="border: 2px solid #C3C3C3;" />
 
- From the web portal for TFS 2015, right click the link ID to open the browser copy link option.
  
	<img src="_img/copy-wi-url-2015.png" alt="Copy hyperlink for a work item from web portal" style="border: 2px solid #C3C3C3;" />  

- In Visual Studio, right-click the work item tab to copy the URL. The URL opens the work item in the web portal.  

	![Copy full path hyperlink for a work item from Visual Studio](_img/add-work-items-copy-url-for-a-work-item.png) 

## Related notes

To add fields or customize a work item form, see [Customize your work tracking experience](../customize/customize-work.md). The method you use depends on the process model that supports your team project.  

