---
title: Keyboard shortcuts for web portal and Team Explorer
titleSuffix: Azure DevOps
description: Learn about keyboard shortcuts for the web portal for Azure DevOps and Team Explorer, including wikis.
ms.custom: Navigation
ms.subservice: azure-devops-projects
ms.topic: conceptual 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 03/11/2025
---

# Keyboard shortcuts for Azure DevOps and Team Explorer

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

You can use the keyboard shortcuts listed in this article when you work in Azure DevOps or Team Explorer. You also can [assign your own shortcuts in Visual Studio](/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio) on the **Tools** > **Options** > **Environment** > **Keyboard** page.

For specific guidance about moving around in the web portal for Azure DevOps, see [Web portal navigation](index.md).

## Web portal

You can use these keyboard shortcuts when you work in the web portal for Azure DevOps.

### Web portal global shortcuts

To access global and page-specific shortcuts, select **?**.

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
|Ctrl+Up arrow|Move up item in the list|
|Ctrl+Down arrow|Move item down in the list|
|Shift+Up arrow|Highlight consecutive items above the current line or field|
|Shift+Down arrow|Highlight consecutive items below the current line or field|
|Menu|Open context menu|
|Esc|Dismiss context menu|
|Enter|Choose selected menu item|

::: moniker range="<=azure-devops"

## Repos  

::: moniker-end

[!INCLUDE [temp](../../includes/keyboard-shortcuts/code-shortcuts.md)]

::: moniker range="<=azure-devops"

## Work items

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-items-page-shortcuts.md)]

::: moniker-end

::: moniker range="<=azure-devops"

## Work item forms

[!INCLUDE [temp](../../includes/keyboard-shortcuts/wi-form-shortcuts.md)]

::: moniker-end

## Boards

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-board-shortcuts.md)]

## Backlogs

[!INCLUDE [temp](../../includes/keyboard-shortcuts/work-backlog-shortcuts.md)]

## Queries

[!INCLUDE [temp](../../includes/keyboard-shortcuts/queries-shortcuts.md)]

::: moniker range="< azure-devops"

## Delivery plans

[!INCLUDE [temp](../../includes/keyboard-shortcuts/delivery-plan-shortcuts.md)]

::: moniker-end

## Test plans, parameters, and runs  

[!INCLUDE [temp](../../includes/keyboard-shortcuts/test-shortcuts.md)]

<a id="wiki-keyboard-shortcuts"></a>

## Wiki

You can use the following keyboard shortcuts when you [manage or edit wiki pages](../../project/wiki/add-edit-wiki.md). To view valid shortcuts, from the wiki page, select **?**. 

::: moniker range=">= azure-devops-2020"

### Manage wiki page shortcuts

|Shortcut|Action|
|---|---|
|n|Add new page|
|e|Edit page|
|c|Create new subpage|
|Ctrl+Down arrow|Move page down the order|
|Ctrl+Up arrow|Move page up the order|
|Ctrl+P|Print page|
|Ctrl+Shift+b|Create work item from selected text|

The following screenshot shows the list of keyboard shortcuts as it appears in Azure DevOps:

:::image type="content" source="../../media/keyboard-shortcuts/wiki-manage-cloud.png" alt-text="Screenshot that shows Azure DevOps 2020 manage Wiki page keyboard shortcuts.":::

### Edit wiki page shortcuts

|Shortcut|Action|
|---|---|
|Ctrl+b|Bold text|
|Ctrl+i|Italicize text|
|Ctrl+k|Insert hyperlink|
|Ctrl+c|Copy text|
|Ctrl+v|Paste copied text|
|Ctrl+Shift+f|Format tables|
|Ctrl+s|Save changes|
|Ctrl+Enter|Save and close|
|Esc|Close|

The following screenshot shows the list of keyboard shortcuts as it appears in Azure DevOps:

:::image type="content" source="../../media/keyboard-shortcuts/wiki-edit-cloud.png" alt-text="Screenshot that shows Azure DevOps 2020 edit Wiki page keyboard shortcuts.":::

::: moniker-end

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
|Ctrl+0, m|Open [My Work Team Foundation Version Control (TFVC)](../../repos/tfvc/share-your-code-in-tfvc-vs.md)|
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

You can use shortcuts for query results when you're viewing a list of work items, whether in the query results view or within a list of linked work items in a work item form.

[!INCLUDE [temp](../../includes/keyboard-shortcuts/queries-te-shortcuts.md)]

### Install Team Explorer  

Team Explorer is a plug-in for Visual Studio. You gain access to Team Explorer when you install the free [Visual Studio Community](https://visualstudio.microsoft.com/products/free-developer-offers-vs.aspx) version, another version of Visual Studio, or Visual Studio Team Explorer 2017.  

## Next steps

>[!div class="nextstepaction"]
>[Work in Team Explorer](../../user-guide/work-team-explorer.md)

## Related articles

- [Learn keyboard shortcuts for Microsoft Test Manager](/previous-versions/visualstudio/visual-studio-2013/ff458183(v=vs.120))
- [Customize Visual Studio keyboard shortcuts](/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio)
- [Use default keyboard shortcuts for Visual Studio](/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio)
- [Explore accessibility features of Visual Studio](/visualstudio/ide/reference/accessibility-features-of-visual-studio)
- [Navigate the web portal](../../project/navigation/index.md)
