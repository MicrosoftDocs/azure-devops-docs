---
title: Search for work items across your projects
description: Learn how to use Work Item Search across all work item fields and all projects in Azure DevOps and TFS
ms.assetid: 133EF8B9-B4F9-4057-9CB3-E745A7E0B8F5
ms.prod: devops
ms.technology: devops-collab
ms.topic: quickstart
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.date: 08/19/2019
monikerRange: '>= tfs-2017'
---

# Search for work items

[!INCLUDE [version-header](../../_shared/version-tfs-2017-through-vsts.md)]

Work Item Search provides fast and flexible search across all your work items over all your projects. 

See also: [Adhoc vs managed work item queries](../../boards/queries/adhoc-vs-managed-queries.md?toc=/azure/devops/project/search/toc.json&bc=/azure/devops/project/search/breadcrumb/toc.json)

<a name="start-search"></a>

## Start searching

::: moniker range=">= azure-devops-2019"  

1. Open the **Azure Boards** section in Azure DevOps (see [Web portal navigation](../navigation/index.md)).

2. Choose the ![start search icon](_img/_shared/start-search-icon-new.png) icon at the top right of the window to show the search textbox.

   ![The Work Item Search textbox in the title bar](_img/work-item-search-get-started/show-search-box.png)    

3. Enter a search string in the textbox, and select _Enter_ (or choose the 
   ![start search icon](_img/_shared/start-search-icon-new.png) icon) to start your search. 

   Access your recently visited boards, backlogs, queries, and sprints. 

   ![search-box-azure-boards.png](_img/work-item-search-get-started/search-box-azure-boards.png)

   You can also search for the boards, backlogs, queries and sprints across your project by entering the board name in the search box.

   ![search-other-items-in-boards](_img/work-item-search-get-started/search-other-items-in-boards.png)

::: moniker-end

::: moniker range="<= tfs-2018"  

1. In the search textbox at the top right of the window, check that the text says
   _Search work items_.

   ![The Work Item Search textbox in the title bar](_img/work-item-search-get-started/title-bar-search-box-empty-outlined.png)    

2. If you have the Code Search extension installed, the search text box may
   say _Search code_. In this case, use the drop down selector to change it. 

3. Enter a search string in the textbox, and press _Enter_ (or choose the 
   ![start search icon](_img/_shared/start-search-icon.png) icon) to start your search. 

::: moniker-end

::: moniker range="< azure-devops-2019"  

1. In the search textbox at the top right of the window, check that the text says
   _Search work items_.

   ![The Work Item Search textbox in the title bar](_img/work-item-search-get-started/title-bar-search-box-empty-outlined.png)    

2. If you have the Code Search extension installed, the search text box may
   say _Search code_. In this case, use the drop-down selector to change it. 

3. Enter a search string in the textbox, and press _Enter_ (or choose the 
   ![start search icon](_img/_shared/start-search-icon.png) icon) to start your search. 

::: moniker-end

## View the results

1. Search results are displayed in a snippet view, where matches found are shown in bold.

   ![Search results](_img/work-item-search-get-started/results-matching.png)

   This is a full text search that uses simple search strings for words or phrases.
   Work item search matches derived forms of your search terms; for example, a search for
   "updating" will also find instances of the word "updated" and "update". Searches are _not_ case-sensitive.

1. Select a snippet of a work item to display it in the right window. 
   You can edit and manage this work item in the usual way.

   ![Display a work item](_img/work-item-search-get-started/search-results-02.png)

   > Open the search results in a new browser tab from a search box by
   pressing _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![start search icon](_img/_shared/start-search-icon-new.png) icon.
   In Google Chrome or Firefox, press _Ctrl_ + _Shift_ + _Enter_ to switch the focus
   to the new browser tab. 

1. Fine-tune your search by specifying the fields to search. Enter `a:` and a user name
   to search for all items assigned to that user.

   ![Static drop down](_img/work-item-search-get-started/static-dropdown.png)    

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**<p />
 
1. Start typing the name of a field in your work items; for example, type `ta`.

   ![Quick filters as you type](_img/work-item-search-get-started/dyna-dropdown.png)    

   The dropdown list shows work item field name suggestions 
   that match user input, helping the user search faster. For example, a search such as 
   **tags:Critical** finds all work items tagged 'Critical'. 

2. Add more filters to further narrow your search, and use Boolean operators
   to combine terms, if necessary. For example, 
   **a: Chris t: Bug s: Active** finds all active bugs assigned
   to a user named Chris.

3. Widen your search across all projects, or narrow it to specific types
   and states. Use the "filter" icon to show the selector lists.

   ![Showing the filter lists](_img/_shared/show-filters.png)    

4. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

   ![Selector drop-down lists](_img/work-item-search-get-started/area-selectors.png)    

5. Sort the results as you need using the drop-down list of field names, work item types, or by relevance.

   ![Sort drop-down list](_img/work-item-search-get-started/sort-order.png)    

6. Quickly [search for code](code-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

   ![Search for code or wiki containing the same search string](_img/work-item-search-get-started/view-code-search.png)

## Next step

> [!div class="nextstepaction"]
> [Learn more about Work Item Search](advanced-work-item-search-syntax.md)
