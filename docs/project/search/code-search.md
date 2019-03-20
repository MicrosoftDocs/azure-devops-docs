---
title: Search your code across your projects
description: Get started with Code Search in Azure DevOps and TFS across all your projects to debug and manage your codebases
ms.assetid: 95BAB38A-C7D3-414D-9FE3-BB72B549C21C
ms.prod: devops
ms.technology: devops-collab
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Search your code

[!INCLUDE [version-header](../../_shared/version-tfs-2017-through-vsts.md)]

Use Code Search to search across all of your projects, find specific types of code,
and easily drill down or widen your search

## Prepare

Go to [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search)
to install the extension as an administrator.
Non-administrative users can also go here to request the extension be added. 
For more details, see [Install an extension](../../marketplace/install-extension.md#install-extension) in the Marketplace documentation.

> Only users with Basic access can use Code Search.

## Start searching

::: moniker range=">= azure-devops-2019"  

1. Open the **Azure Repos** section in Azure DevOps (see [Web portal navigation](../navigation/index.md)).

1. Choose the ![start search icon](_img/_shared/start-search-icon-new.png) icon at the top right of the window to show the search textbox.

   ![The Code Search textbox in the title bar](_img/code-search-get-started/title-bar-search-box-empty-new.png)    

1. Enter a search string in the textbox, and press _Enter_ (or choose the 
   ![start search icon](_img/_shared/start-search-icon-new.png) icon) to start your search. 

::: moniker-end

::: moniker range="< azure-devops-2019"  

1. In the search textbox at the top right of the window, check that the text says
   _Search code_. The search text box may say _Search work items_. In this case, use the drop-down selector to change it.

   ![Switching between searching for code and work items](_img/code-search-get-started/title-bar-search-box-empty-outlined.png)

   If you don't see the ![select search type](_img/_shared/search-select-type-icon.png)
   selector in the Search box, open the **Manage extensions** page 
   and check that Code Search is installed ([see Administer Search](administration.md)).

   ![Checking that the extension is installed](_img/_shared/goto-marketplace.png)

1. Enter a search string in the textbox, and press _Enter_ (or choose the 
   ![start search icon](_img/_shared/start-search-icon.png) icon) to start your search.

::: moniker-end

## View the results

1. The search page shows a list of the matching code files. The selected file has all
   instances of the search string highlighted (only the first 100 hits are highlighted). 

   ![Search results](_img/code-search-get-started/search-results-01.png)

   If you see a list of work items, ensure that **Code** is selected in the top left.

1. Sort the results as you need using the drop-down list of properties, or by relevance.

   ![Sort drop-down list](_img/code-search-get-started/sort-order.png)    

   > Open the search results in a new browser tab from either search box by
   pressing _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![start search icon](_img/_shared/start-search-icon-new.png) icon.
   In Google Chrome and Firefox press _Ctrl_ + _Shift_ + _Enter_ to switch the focus
   to the new browser tab.

1. Try assembling more complex search strings using the operators and functions listed in the handy 
   drop-down list. Select the filter function or code type you want to include in your search string from the
   list, and type the criteria value.

   ![Search from title bar](_img/code-search-get-started/title-bar-search-functionlist.png)    

   * You can find all instances of "ToDo" comments in your code simply by selecting `comment:` and typing `todo`. 

   * You can search in specific locations, such as within a particular path, by using a search string such as `Driver path:MyShuttle/Server`. 

   * You can search for files by name, such as `Driver file:GreenCabs.cs`, or just by file extension. For example, the search string 
    `error ext:resx` could be useful when you want to review all error strings in your code. 
    But even if your plain text search string (without specific file type functions) 
    matches part of a filename, the file appears in the list of found files.

   * You can combine two or more words by using Boolean operators; for example, `validate OR release`.

   * You can find an exact match to a set of words by enclosing your search terms in double-quotes. For example, `"Client not found"`. 

   * You can use the code type search functions with files written in C#, C, C++, Java, and Visual Basic.NET.

   * See also [full details of the search syntax](advanced-code-search-syntax.md#syntaxdetails). 

1. Widen your search to all projects, your entire organization, or narrow it to specific areas and types of code
   by selecting from the drop-down lists at the top of the page.

   ![Use drop-down lists to widen or narrow your search](_img/code-search-get-started/select-projects.png)

1. Use the tabs in the results page to view the history of the file and to compare versions of the file.

   ![Use tabs to view history and compare files](_img/code-search-get-started/compare-tab.png)

1. Choose the filename link at the top of this column to open the file in a new Code Explorer window.

   ![Open the file in Code Explorer](_img/code-search-get-started/open-in-code-explorer.png)

1. Quickly [search for work items](work-item-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

   ![Search for work items or wiki containing the same search string](_img/code-search-get-started/open-workitem.png)

## How to search filters on a Multi Repo Multi branch enviroment

1. Enter search text `NOT kjhasdhkjashdkjkhjdashkjdsaahsdkj` and hit enter.
1. Choose project filter as Team Project Name. Choose repository filter as your GIT repo. Choose branch filter as the desired branch.
1. Enter search text ext:json and hit enter. You should be able to see the desired results.

This search is a generic text which will have matches in all repositories like NOT kjhasdhkjashdkjkhjdashkjdsaahsdkj. The long string could be any garbage text which will not be present in any file. Adding a NOT before it inverts the logic and hence matches all files. 
 
## Next step

> [!div class="nextstepaction"]
> [Learn more about Code Search](advanced-code-search-syntax.md)
