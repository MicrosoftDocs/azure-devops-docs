---
title: Copy a list of work items
titleSuffix: Azure Boards and TFS   
description: Copy a list of work items from a backlog or query in Azure Boards or Team Foundation Server
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 03/20/2018
---

# Copy a list of work items  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

<a id="html"></a>

You can copy an HTML formatted table of selected items from either a backlog page or query results list. You can then email this list using your choice of email client, or paste into a Word document, Excel spreadsheet, or other application. 
 
::: moniker range="vsts"
> [!TIP]  
>The data copied with **Copy to clipboard** is the same as that copied when you select **Email ...**.  
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"  
> [!TIP]  
>The data copied with **Copy as HTML** is the same as that copied when you select **Email selected work items**. If you don't have an SMTP server configured, you can work around this by using **Copy as HTML**. For on-premises TFS, all email actions require an [SMTP server to be configured](/tfs/server/admin/setup-customize-alerts). 
::: moniker-end  

::: moniker range=">= tfs-2018"

1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard. 

2. Open the &hellip; context menu of one of the selected work items, and then choose **Copy to clipboard** or **Copy as HTML**. 

	Here we multi-select from the product backlog and choose <b>Copy to clipboard</b>.

	<img src="_img/copy-wi-copy-to-clipboard-ts-1.png" alt="backlog page, multi-select items, open context menu, Copy to clipboard" style="border: 1px solid #CCCCCC;" /> 
::: moniker-end 

::: moniker range="tfs-2017"

1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard. 

2. Open the &hellip; context menu of one of the selected work items, and then choose **Copy as HTML**.   

	Here we multi-select from the backlog page. 

	<img src="_img/bulk-modify-copy-as-html.png" alt="TFS 2017, Backlog page, multi-select items, open context menu, click Copy as HTML menu option" style="border: 1px solid #CCCCCC;" /> 

::: moniker-end 


::: moniker range=">= tfs-2013 <= tfs-2015"

1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard. 

2. Open the ![context icon](../_img/icons/context_menu.png) context menu of one of the selected work items, and then choose **Copy as HTML**. 

	Here we multi-select from the backlog page.

	<img src="_img/copy-wi-copy-as-html-2015.png" alt="TFS 2015, Backlog page, multi-select items, open context menu, click Copy as HTML menu option" style="border: 1px solid #CCCCCC;" /> 
 
::: moniker-end 

## Paste the contents into your email client

Once you've copied your list, you can optionally paste the contents of the clipboard into your email client or other application. To open a linked work item, requires users to have read access to the project or area node for those work items. 

The formatted table contains a link to each work item included in your selected results list. A link to a query that will open only those work items selected is also provided.</p>

<img src="_img/bulk-modify-copy-as-html-table-results.png" alt=" Copy as HTML paste results" style="border: 1px solid #CCCCCC;" />
 

## Related articles  

- [Email or print work items](../work-items/email-work-items.md)  
- [Share work plans and progress](../queries/share-plans.md)  
 
