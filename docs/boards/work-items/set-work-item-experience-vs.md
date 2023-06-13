---
title: Change the Work Items page experience
titleSuffix: Azure Boards
description: Learn how to change the Work Items page setting from default to legacy. 
ms.custom: work-items, seodec18  
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

Visual Studio 2019 supports switching between the default view of the Team Explorer **Work Items** page and the legacy view. The default view is designed to match the web portal **Boards>Work Items** page. The legacy view supports the Work Items page available with the previous versions of Visual Studio as described in the linked articles listed below.

Each view supports the following tasks: 

| **Default experience**|**Legacy experience**|
|-----------------------|---------------------| 
|- [View and add work items](./view-add-work-items.md)|- [Add work items](../backlogs/add-work-items.md)<br/>- [Use the query editor to list and manage queries](../queries/using-queries.md)<br/>- [Organize query folders and set query permissions](../queries/set-query-permissions.md)<br/>- [Open query in Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)<br/>- [Email query results list using Outlook](../queries/share-plans.md)<br/>- [Create reports from query in Excel](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports)<br/>(on-premises Azure DevOps Server only)</li></ul>|
 
> [!NOTE]
> If you want to quickly access a list of work items based on their assignment to you, following, mentioned, or recent updates; then use the new default experience. However, if you rely on accessing queries from Team Explorer, then we recommend that you set your Landing page to the legacy option. 


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