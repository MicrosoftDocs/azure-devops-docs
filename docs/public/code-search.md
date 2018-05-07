---
title: Search the work items of a public project  
titleSuffix: VSTS Public Project
description: Search across all public projects to find specific types of code 
ms.assetid:  
ms.prod: vs-devops-alm
ms.technology: vs-devops-search
ms.topic: get-started-article
ms.manager: douge
ms.author: ahomer
ms.date: 01/05/2018
---

# Search the code base of a public project

**VSTS Public Project**

Use Code Search to search across all of your projects, find specific types of code,
and easily drill down or widen your search


1. In the search textbox at the top right of the window, check that the text says
   _Search code_. The search text box may say _Search work items_. In this case, use the drop-down selector to change it.

   ![Switching between searching for code and work items](../search/code/_img/get-started/title-bar-search-box-empty-outlined.png)

   If you don't see the ![select search type](../search/_img/_shared/search-select-type-icon.png)
   selector in the Search box, open the **Manage extensions** page 
   and check that Code Search is installed.

   ![Checking that the extension is installed](../search/_img/_shared/goto-marketplace.png)

1. Enter a search string in the textbox, and press _Enter_ (or choose the 
   ![start search icon](../search/_img/_shared/start-search-icon.png) icon) to start your search.

1. The search page shows a list of the matching code files. The selected file has all
   instances of the search string highlighted. 

   ![Search results](../search/code/_img/get-started/search-results-01.png)

   If you see a list of work items, ensure that **Code** is selected in the top left.

1. Try assembling more complex search strings using the operators and functions listed in the handy 
   drop-down list. Select the filter function or code type you want to include in your search string from the
   list, and type the criteria value.

   ![Search from VSTS title bar](../search/code/_img/get-started/title-bar-search-functionlist.png)    

   * You can find all instances of "ToDo" comments in your code simply by selecting `comment:` and typing `todo`. 

   * You can search in specific locations, such as within a particular path, by using a search string such as `Driver path:MyShuttle/Server`. 

   * You can search for files by name, such as `Driver file:GreenCabs.cs`, or just by file extension. For example, the search string 
    `error ext:resx` could be useful when you want to review all error strings in your code. 
    But even if your plain text search string (without specific file type functions) 
    matches part of a filename, the file appears in the list of found files.

   * You can combine two or more words by using Boolean operators; for example, `validate OR release`.

   * You can find an exact match to a set of words by enclosing your search terms in double-quotes. For example, `"Client not found"`. 

   * You can use the code type search functions with files written in C#, C, C++, Java, and Visual Basic.NET.


1. Widen your search to all projects, or narrow it to specific areas and types of code,
   by selecting from the drop-down lists at the top of the page.

   ![Use drop-down lists to widen or narrow your search](../search/code/_img/get-started/select-projects.png)

1. Use the tabs in the results page to view the history of the file and to compare versions of the file.

   ![Use tabs to view history and compare files](../search/code/_img/get-started/compare-tab.png)

   >Open the search results in a new browser tab from either search box by
   pressing _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![start search icon](../search/_img/_shared/start-search-icon.png) icon.
   In Google Chrome, press _Ctrl_ + _Shift_ + _Enter_ to switch the focus
   to the new browser tab.

1. Choose the filename link at the top of this column to open the file in a new Code Explorer window.

   ![Open the file in Code Explorer](../search/code/_img/get-started/open-in-code-explorer.png)
 
## Next step

> [!div class="nextstepaction"]
> [Learn more about Code Search](../search/code/advanced-search.md?toc=/vsts/public/toc.json&bc=/vsts/public/breadcrumb/toc.json)
