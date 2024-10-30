---
title: Change the Work Items page experience
titleSuffix: Azure Boards
description: Learn how to change the Work Items page setting from legacy to default.
ms.custom: work-items
ms.service: azure-devops-boards
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ms.author: chcomley
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 06/27/2022
---

# Set the Work Items experience

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]   

Visual Studio 2019 supports switching between the default view of the Team Explorer **Work Items** page and the legacy view. The default view is designed to match the web portal **Boards > Work Items** page. The legacy view supports the Work Items page available with the previous versions of Visual Studio.

Each view supports the following tasks: 

| **Default experience**|**Legacy experience**|
|-----------------------|---------------------| 
|- [View and add work items](./view-add-work-items.md)|- [Add work items](../backlogs/add-work-items.md)<br/>- [Use the query editor to list and manage queries](../queries/using-queries.md)<br/>- [Open query in Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)<br/>- [Send email of query results list using Outlook](../work-items/email-work-items.md)<br/>- [Create reports from query in Excel](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports)<br/>(on-premises Azure DevOps Server only)</br></ul>|
 
> [!IMPORTANT]
> We strongly recommend that everyone use the default view. It is designed for you to quickly access a list of work items based on your assignment, following, mentioned, or recent updates. The legacy view is no longer being enhanced and we expect to remove it in a future release of Visual Studio.

## Change your Work Items view

1. From Visual Studio 2019 choose **Tools > Options**.

1. In the Options dialog, enter **work items** in the search box.  

1. Choose your **Landing page** option from the menu. 

	> [!div class="mx-imgBorder"]  
	> ![Open Tools>Options>Work Items](media/set-vs-experience/option-vs-options-work-items.png)

For more information about **Options**, see [Options Dialog Box (Visual Studio)](/visualstudio/ide/reference/options-dialog-box-visual-studio).

## New Git tool experience

Visual Studio 2019 now includes a new Git tool that provides an improved experience when connecting to a Git repository. When you enable this tool, the Team Explorer tool is effectively disabled when connected to a Git repository. You can acquire the new tool by downloading [Visual Studio 2019 version 16.6](/visualstudio/releases/2019/release-notes-v16.6). To enable and use the new tool, see [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio).  

## Related articles

- [Manage work items](manage-work-items.md)
