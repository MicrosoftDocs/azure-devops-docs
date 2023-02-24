---
title: Keyboard shortcuts for Azure Boards  
titleSuffix: Azure Boards
description: Learn about keyboard shortcuts for the web portal for Azure Boards and Team Explorer.
ms.custom: Navigation
ms.service: azure-devops-boards
ms.topic: conceptual
ms.author: chcomley
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Keyboard shortcuts for Azure Boards and Team Explorer

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use the keyboard shortcuts listed in this article when you work with Azure Boards in Azure Dev Ops or Team Explorer. You also can [assign your own shortcuts in Visual Studio](/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio) on the **Tools** > **Options** > **Environment** > **Keyboard** page.

For specific guidance about moving around in the web portal for Azure DevOps, see [Web portal navigation](../../project/navigation/index.md).

## Web portal

You can use these keyboard shortcuts when you work in the web portal for Azure DevOps.

### Web portal global shortcuts

Select **?** to access global and page-specific shortcuts.

Page-specific shortcuts work only when you're on a specific page. For example, select **g**, **c** to open the **Code** page, and then select **c**,  **p** to create a pull request. These navigation shortcuts work as long as the focus isn't on an input control.

[!INCLUDE [temp](../../includes/keyboard-shortcuts/global-shortcuts.md)]

### Web portal list shortcuts

You can use these keyboard shortcuts when you work in a list in the web portal for Azure DevOps:

|Shortcut|Action|
|---|---|
|Tab|Move focus right|
|Left arrow|Move focus left|
|Right arrow|Move focus right|
|Up arrow|Move focus up|
|Down arrow|Move focus down|
|Ctrl+Home|Move focus to top of list|
|Ctrl+End|Move focus to bottom of list|
|Ctrl+Up arrow|Move item up in the list|
|Ctrl+Down arrow|Move item down in the list|
|Shift+Up arrow|Highlight consecutive items above the current line or field|
|Shift+Down arrow|Highlight consecutive items below the current line or field|
|Menu|Open context menu|
|Esc|Dismiss context menu|
|Enter|Choose selected menu item|

::: moniker range=">= azure-devops-2019"

## Work items

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-items-page-shortcuts.md)]

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Work item forms

[!INCLUDE [temp](../../includes/keyboard-shortcuts/wi-form-shortcuts.md)]

::: moniker-end

## Boards

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-board-shortcuts.md)]

## Backlogs

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-backlog-shortcuts.md)]

## Queries

[!INCLUDE [temp](../../includes/keyboard-shortcuts/queries-shortcuts.md)]

<a id="plan-shortcuts"></a>

## Delivery plans

You can use these keyboard shortcuts when you [interact with a delivery plan](../../boards/plans/review-team-plans.md). To view valid shortcuts, select **?** when you view a plan on a **Boards** > **Plans** page or a **Work** > **Plans** page.

[!INCLUDE [temp](../../includes/keyboard-shortcuts/delivery-plan-shortcuts.md)]  

## Team Explorer

You can use these shortcuts when you work in Team Explorer.

### Team Explorer global shortcuts

|Shortcut|Action|
|---|---|
|Ctrl+0, a|Open web portal|
|Ctrl+0, b|Open [Build](../../pipelines/get-started/what-is-azure-pipelines.md)|
|Ctrl+0, c|Open [Connect](../../organizations/projects/connect-to-projects.md)|
|Ctrl+0, d|Open [Documents](/previous-versions/azure/devops/report/sharepoint-dashboards/share-information-using-the-project-portal)|
|Ctrl+0, e|Open [Branches (Git)](../../repos/git/gitquickstart.md)|
|Ctrl+0, g|Open [Changes (Git)](../../repos/git/gitquickstart.md)|
|Ctrl+0, h|Open Home|
|Ctrl+0, m|Open [My Work (TFVC)](../../repos/tfvc/share-your-code-in-tfvc-vs.md)|
|Ctrl+0, p|Open [Pending changes (TFVC)](../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md)|
|Ctrl+0, r|Open [Reports](/previous-versions/azure/devops/report/sql-reports/reporting-services-reports)|
|Ctrl+0, s|Open Settings|
|Ctrl+0, w|Open Work items|
|Ctrl+0, y|Open [Synchronization (Git)](../../repos/git/gitquickstart.md)|
|Ctrl+'|Move focus to search box|
|Alt+0|Move focus to top of page|
|Alt+1|Move focus to visible section \[1 through 9\]|
|Alt+Up arrow (|Move focus to next section|
|Alt+Down arrow|Move focus to previous section|

### Team Explorer context menu shortcuts

|Shortcut|Action|
|---|---|
|<+Down arrow|Open a context menu|  
|Esc|Dismiss context menu|  
|Left arrow|Move focus left|
|Right arrow|Move focus right|
|Up arrow|Move focus up|
|Down arrow|Move focus down|
|Enter|Choose context menu|  

### Team Explorer work item shortcuts

|Shortcut|Action|
|---|---|
|Alt+m, g|Open work item|
|Alt+m, i|[Add a work item](../../boards/backlogs/add-work-items.md)|
|Alt+m, q|[Add a query](../../boards/queries/using-queries.md)|  
|Shift+Alt, c|Copy selected work item|
|Shift+Alt, l|Link to new work item|  
|Enter|Open selected work item|  

You can use shortcuts for query results when you have a list of work items, such as the query results view or a list of linked work items within a work item form.

[!INCLUDE [temp](../../includes/keyboard-shortcuts/queries-te-shortcuts.md)]

### Install Team Explorer  

Team Explorer is a plug-in for Visual Studio. You gain access to Team Explorer when you install the free [Visual Studio Community](https://visualstudio.microsoft.com/products/free-developer-offers-vs.aspx) version, another version of Visual Studio, or Visual Studio Team Explorer 2017.  

## Related articles

- [Keyboard shortcuts for Microsoft Test Manager](/previous-versions/visualstudio/visual-studio-2013/ff458183(v=vs.120))  
- [Customize Visual Studio keyboard shortcuts](/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio)  
- [Default keyboard shortcuts for Visual Studio](/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio)  
- [Accessibility features of Visual Studio](/visualstudio/ide/reference/accessibility-features-of-visual-studio)
- [Web portal navigation](../../project/navigation/index.md)

## Next steps

Learn more about [working in Team Explorer](../../user-guide/work-team-explorer.md).
