---
title: Keyboard shortcuts for Azure Boards  
titleSuffix: Azure Boards
description: Learn about keyboard shortcuts for the web portal for Azure Boards and Team Explorer.
ms.custom: Navigation
ms.service: azure-devops-boards
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---



# Keyboard shortcuts for Azure Boards and Team Explorer

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use the keyboard shortcuts listed in this article when you work in Azure DevOps or Team Explorer. You also can [assign your own shortcuts in Visual Studio](/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio) on the **Tools** > **Options** > **Environment** > **Keyboard** page.

For specific guidance on moving around in the web portal for Azure DevOps, see [Web portal navigation](../../project/navigation/index.md).

## Web portal

You can use these keyboard shortcuts when you work in the web portal for Azure DevOps.  

**Navigate within lists**

|Shortcut|Action|
|--------|------|
|**Tab**|Move focus|
|**← →**|Move focus left/right|
|**↑ ↓**|Move focus up/down|
|**Ctrl+Home**|Move focus to top of list|
|**Ctrl+End**|Move focus to bottom of list|
|**Ctrl+↑↓**|Move item up/down within list|
|**Shift+↑↓**|Highlight consecutive items|
|**Menu**|Open context menu|
|**Esc**|Dismiss context menu|
|**Enter**|Choose selected menu item|

## Web portal global shortcuts

Enter **?** to access global and page-specific shortcuts.

[!INCLUDE [temp](../../includes/keyboard-shortcuts/global-shortcuts.md)]

Page-specific shortcuts work only when you're on a specific page. For example, select **g**, **c** to open the **Code** page, and then select **c**,  **p** to create a pull request. These navigation shortcuts work as long as the focus isn't on an input control.

::: moniker range=">= azure-devops-2019"

## Work items

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-items-page-shortcuts.md)]

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Work item form shortcuts

[!INCLUDE [temp](../../includes/keyboard-shortcuts/wi-form-shortcuts.md)]

::: moniker-end

## Boards

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-board-shortcuts.md)]

## Backlogs

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-backlog-shortcuts.md)]

## Queries

[!INCLUDE [temp](../../includes/keyboard-shortcuts/queries-shortcuts.md)]

<a id="plan-shortcuts"></a>

## Plans

You can use the following keyboard shortcuts when you [interact with a delivery plan](../../boards/plans/review-team-plans.md). To view the valid shortcuts, enter **?** when you're viewing a plan from the **Boards** > **Plans** page or the **Work** > **Plans** page.

[!INCLUDE [temp](../../includes/keyboard-shortcuts/delivery-plan-shortcuts.md)]  

## Team Explorer navigational shortcuts

Use these shortcuts when you're working in Team Explorer.

:::row:::
   :::column span="1":::
   
   **Navigate**
 
   **Ctrl+0,a**&nbsp;&nbsp;&nbsp;Open web portal  
   **Ctrl+0,b**&nbsp;&nbsp;&nbsp;Open [Build](../../pipelines/get-started/what-is-azure-pipelines.md)  
   **Ctrl+0,c**&nbsp;&nbsp;&nbsp;Open [Connect](../../organizations/projects/connect-to-projects.md)  
   **Ctrl+0,d**&nbsp;&nbsp;&nbsp;Open [Documents](/previous-versions/azure/devops/report/sharepoint-dashboards/share-information-using-the-project-portal)  
   **Ctrl+0,e**&nbsp;&nbsp;&nbsp;Open [Branches (Git)](../../repos/git/gitquickstart.md)  
   **Ctrl+0,g**&nbsp;&nbsp;&nbsp;Open [Changes (Git)](../../repos/git/gitquickstart.md)  
   **Ctrl+0,h**&nbsp;&nbsp;&nbsp;Open Home  
   **Ctrl+0,m**&nbsp;&nbsp;&nbsp;Open [My Work (TFVC)](../../repos/tfvc/share-your-code-in-tfvc-vs.md)  
   **Ctrl+0,p**&nbsp;&nbsp;&nbsp;Open [Pending changes (TFVC)](../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md)  
   **Ctrl+0,r**&nbsp;&nbsp;&nbsp;Open [Reports](/previous-versions/azure/devops/report/sql-reports/reporting-services-reports)  
   **Ctrl+0,s**&nbsp;&nbsp;&nbsp;Open Settings  
   **Ctrl+0,w**&nbsp;&nbsp;&nbsp;Open Work items  
   **Ctrl+0,y**&nbsp;&nbsp;&nbsp;Open [Synchronization (Git)](../../repos/git/gitquickstart.md)  
     
   **Ctrl+&#39;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move focus to search box  
   **Alt+0**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move focus to top of page  
   **Alt+1**&#8230;9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move focus to visible section [1 through 9]  
   **Alt+↑↓**&nbsp;&nbsp;&nbsp;&nbsp;Move focus to next/previous section 

   :::column-end:::
   :::column span="1":::
   
   **Context menu**
 
   <↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open a context menu  
   **Esc**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dismiss a context menu  
   ← →&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move focus left/right  
   ↑↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move focus up/down  
   **Enter**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose Context menu  


   **Work item commands**
 

   **Alt+m,g**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open work item  
   **Alt+m,i**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Add a work item](../../boards/backlogs/add-work-items.md)  
   **Alt+m,q**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Add a query](../../boards/queries/using-queries.md)  
   **Shift+Alt,c**&nbsp;&nbsp;Copy selected work item  
   **Shift+Alt,l**&nbsp;&nbsp;Link to new work item  
   **Enter**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open selected work item  

   :::column-end:::
:::row-end:::

You can use shortcuts for query results whenever you have a list of work items, such as the query results view or a list of linked work items within a work item form.

[!INCLUDE [temp](../../includes/keyboard-shortcuts/queries-te-shortcuts.md)]

## Related articles

- [Keyboard shortcuts for Microsoft Test Manager](/previous-versions/visualstudio/visual-studio-2013/ff458183(v=vs.120))  
- [Customize Visual Studio keyboard shortcuts](/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio)  
- [Default keyboard shortcuts for Visual Studio](/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio)  
- [Accessibility features of Visual Studio](/visualstudio/ide/reference/accessibility-features-of-visual-studio)   
- [Web portal navigation](../../project/navigation/index.md)

### Install Team Explorer  

Team Explorer is a plug-in for Visual Studio. By installing the free [Visual Studio Community](https://visualstudio.microsoft.com/products/free-developer-offers-vs.aspx) version, another version of Visual Studio, or Visual Studio Team Explorer 2017, you gain access to Team Explorer.  

## Next steps

Learn more about [working in Team Explorer](../../user-guide/work-team-explorer.md).
