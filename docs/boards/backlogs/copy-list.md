---
title: Copy a list of stories, issues, or other work items in Azure Boards
titleSuffix: Azure Boards   
description: Learn how to copy a list of user stories, issues, bugs, tasks, or other work items from a backlog or query in Azure Boards.
ms.custom: seodec18
ms.service: azure-devops-boards
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Copy a list of stories, issues, or other work items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<a id="html"></a>

You can copy an HTML formatted table of selected items from either a backlog page or query results list. You can then email this list using your choice of email client, or paste into a Word document, Excel spreadsheet, or other application. 
 
::: moniker range="azure-devops"

> [!TIP]  
> The data copied with **Copy to clipboard** is the same as that copied when you select **Email ...**.  

::: moniker-end

::: moniker range="< azure-devops"  

> [!TIP]  
> The data copied with **Copy as HTML** is the same as that copied when you select **Email selected work items**. If you don't have an SMTP server configured, you can work around this by using **Copy as HTML**. For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts). 

::: moniker-end  

1. From the web portal, open a backlog or query results page. Then, [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard. 

2. Open the &hellip; context menu of one of the selected work items, and then choose **Copy to clipboard** or **Copy as HTML**. 

	Here we multi-select from the product backlog and choose **Copy to clipboard**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of backlog page, multi-select items, open context menu, Copy to clipboard.](media/copy-work-item-copy-to-clipboard-ts-1.png)


## Paste the contents into your email client

Once you've copied your list, you can paste the contents of the clipboard into your email client or other application. To open a linked work item, requires users to have read access to the project or area node for those work items. 

The formatted table contains a link to each work item included in your selected results list. A link to a query that will open only those work items selected is also provided.</p>

![Screenshot of Copy as HTML paste results.](media/bulk-modify-copy-as-html-table-results.png)  

## Related articles  

- [Email or print work items](../work-items/email-work-items.md)  
- [Share information within work items and social tools](../queries/share-plans.md)  
 
