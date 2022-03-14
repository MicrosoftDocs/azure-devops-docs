---
title: Change the Work Items page experience
titleSuffix: Azure Boards
description: Learn how to change the Work Items page setting from default to legacy. 
ms.custom: work-items, seodec18  
ms.technology: devops-agile
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ms.author: kaelli
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 11/07/2021
---

# Set the Work Items experience

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]   

Visual Studio 2019 supports switching between the default view of the Work Items page and the legacy view. The default view is designed to match the Work Items page available in the web portal. The legacy view supports the Work Items page available with the previous versions of Visual Studio. 

Each view supports the following tasks: 

:::row:::
   :::column span="1":::
   **Default experience**
   :::column-end:::
   :::column span="1":::
   **Legacy experience**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
    
   
   - [View and add work items](./view-add-work-items.md)
   
   :::column-end:::
   :::column span="1":::
   
   - [Add work items](../backlogs/add-work-items.md)
   - [Use the query editor to list and manage queries](../queries/using-queries.md)
   - [Organize query folders and set query permissions](../queries/set-query-permissions.md)
   - [Open query in Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)
   - [Email query results list using Outlook](../queries/share-plans.md)
   - [Create reports from query in Excel](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports) (on-premises Azure DevOps Server only)
   
   :::column-end:::
:::row-end:::



## Change your Work Items view

1. From Visual Studio 2019 choose **Tools>Options**.

1. In the Options dialog, enter **work items** in the search box.  

1. Choose your **Landing page** option from the menu. 

	> [!div class="mx-imgBorder"]  
	> ![Open Tools>Options>Work Items](media/set-vs-experience/option-vs-options-work-items.png)

To learn more about **Options**, see [Options Dialog Box (Visual Studio)](/visualstudio/ide/reference/options-dialog-box-visual-studio).

## New Git tool experience

Visual Studio 2019 now includes a new Git tool that provides an improved experience when connecting to a Git repository. When you enable this tool, the Team Explorer tool is effectively disabled when connected to a Git repository. You can acquire the new tool by downloading [Visual Studio 2019 version 16.6](/visualstudio/releases/2019/release-notes-v16.6). To enable and use the new tool, see [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio).  

## Related articles

- [View and add work items using the Work Items page](view-add-work-items.md)