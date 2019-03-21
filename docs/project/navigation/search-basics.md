---
title: Search code, work items, or wiki
titleSuffix: Azure DevOps
description: Find code or work items quickly in Azure DevOps
ms.assetid: 
ms.custom: Navigation
ms.prod: devops
ms.technology: devops-collab
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.date: 02/08/2019
---


# Search across your code base, work items, or wiki

[!INCLUDE [temp](../../_shared/version-tfs-2017-through-vsts.md)]

::: moniker range=">= tfs-2018"  
With the search box, you can quickly find a code file, work item, or wiki page. 
::: moniker-end  

::: moniker range="tfs-2017"  
With the search box, you can quickly find a code file or work item.  
::: moniker-end  


<a name="start-search"></a>
## Initiate a code search 

Code search requires installation of the [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search). If it hasn't yet been installed, request that a member of your Project Collection Administrators group [install it](../..//marketplace/install-extension.md#install-extension).  

::: moniker range=">= azure-devops-2019"
  
To start your search, choose **Repos>Files** or other page under **Code**, enter a keyword or phrase in the search box, and press *Enter* or choose the ![ ](../search/_img/_shared/start-search-icon.png) start search icon. 

> [!div class="mx-imgBorder"]
> ![Code Search box](../../organizations/public/_img/search/code-search-vert.png) 
::: moniker-end  


::: moniker range=">= tfs-2017 <= tfs-2018"

1. In the search box, check that the text displays _Search code_. If it doesn't, use the selector to select it.

   ![Switching between searching for code and work items](../search/_img/code-search-get-started/title-bar-search-box-empty-outlined.png)

2. Enter a search string in the text box, and press _Enter_ (or choose the 
   ![start search icon](../search/_img/_shared/start-search-icon.png) icon) to start your search.

::: moniker-end


### Work with code search results  

1. The search page shows a list of the matching code files. The selected file has all
   instances of the search string highlighted. If you see a list of work items, ensure that **Code** is selected in the top left.

	> [!div class="mx-imgBorder"]  
	> ![Code search results example](_img/search/code-search-example.png) 

1. Try assembling more complex search strings using the operators and functions listed in the handy 
   drop-down list. Select the filter function or code type you want to include in your search string from the
   list, and type the criteria value.

	> [!div class="mx-imgBorder"]  
	> ![Code search bar](_img/search/code-search-filters.png)     

   * You can find all instances of "ToDo" comments in your code simply by selecting `comment:` and typing `todo`. 

   * You can search in specific locations, such as within a particular path, by using a search string such as `Driver path:MyShuttle/Server`. 

   * You can search for files by name, such as `Driver file:GreenCabs.cs`, or just by file extension. For example, the search string 
    `error ext:resx` could be useful when you want to review all error strings in your code. 
    But even if your plain text search string (without specific file type functions) 
    matches part of a filename, the file appears in the list of found files.

   * You can combine two or more words by using Boolean operators; for example, `validate OR release`.

   * You can find an exact match to a set of words by enclosing your search terms in double-quotes. For example, `"Client not found"`. 

   * You can use the code type search functions with files written in C#, C, C++, Java, and Visual Basic.NET.

To learn more, see [Search code](../search/code-search.md).


<a name="start-search"></a>
## Initiate a work item search 

::: moniker range=">= azure-devops-2019"

0. Choose any **Boards** page, enter a keyword or phrase in the search box, and press *Enter* or choose the ![ ](../search/_img/_shared/start-search-icon.png) start search icon. 

	> [!div class="mx-imgBorder"]
	> ![Work Item Search box](_img/search/work-item-search-vert.png)    

0. Search results are displayed in a snippet view where the matches found are shown in bold.

   ![Search results](../search/_img/work-item-search-get-started/results-matching.png)

   This is a full text search that uses simple search strings for words or phrases.
   Work item search matches derived forms of your search terms; for example, a search for
   "updating" will also find instances of the word "updated" and "update". Note that searches are _not_ case-sensitive.

0. Select a snippet of a work item to display it in the right window. 
  
   Open the search results in a new browser tab from a search box by
   pressing _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![start search icon](../search/_img/_shared/start-search-icon.png) icon.
   In Google Chrome, press _Ctrl_ + _Shift_ + _Enter_ to switch the focus
   to the new browser tab. 

::: moniker-end 

::: moniker range=">= tfs-2017 <= tfs-2018"

1. In the search box, check that the text says _Search work items_. If it doesn't, use the selector to select it.

   ![The Work Item Search textbox in the title bar](../search/_img/work-item-search-get-started/title-bar-search-box-empty-outlined.png)   

1. Enter a search string in the text box, and press _Enter_ (or choose the 
   ![start search icon](../search/_img/_shared/start-search-icon.png) icon) to start your search. 

1. Search results are displayed in a snippet view where the matches found are shown in bold.

   ![Search results](../search/_img/work-item-search-get-started/results-matching.png)

   This is a full text search that uses simple search strings for words or phrases.
   Work item search matches derived forms of your search terms; for example, a search for
   "updating" will also find instances of the word "updated" and "update". Note that searches are _not_ case-sensitive.

1. Select a snippet of a work item to display it in the right window. 
  
   Open the search results in a new browser tab from a search box by
   pressing _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![start search icon](../search/_img/_shared/start-search-icon.png) icon.
   In Google Chrome, press _Ctrl_ + _Shift_ + _Enter_ to switch the focus
   to the new browser tab. 

::: moniker-end

### Fine tune your work item search results 

::: moniker range=">= azure-devops-2019"  

1. Fine tune your search by specifying the fields to search. Enter `a:` and a user name
   to search for all items assigned to that user.

	> [!div class="mx-imgBorder"]  
	> ![Search from the title bar](_img/search/search-work-vert.png)    

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**<p />
 
1. Start typing the name of a field in your work items; for example, type `ta`.

   ![Quick filters as you type](../search/_img/work-item-search-get-started/dyna-dropdown.png)    

   The dropdown list shows work item field name suggestions 
   that match user input thereby helping the user to complete the search faster. For example, a search such as 
   **tags:Critical** finds all work items tagged 'Critical'. 

1. Add more filters to further narrow your search, and use Boolean operators
   to combine terms if required. For example, 
   **a: Chris t: Bug s: Active** finds all active bugs assigned
   to a user named Chris.

1. Narrow your search to specific types
   and states, by using the drop-down selector lists at the top of the results page.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018" 

1. Fine tune your search by specifying the fields to search. Enter `a:` and a user name
   to search for all items assigned to that user.

	> [!div class="mx-imgBorder"]  
	> ![Search from the title bar](_img/search/work-item-search-filters.png)    

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**<p />
 
1. Start typing the name of a field in your work items; for example, type `ta`.

   ![Quick filters as you type](..//search/_img/work-item-search-get-started/dyna-dropdown.png)    

   The dropdown list shows work item field name suggestions 
   that match user input thereby helping the user to complete the search faster. For example, a search such as 
   **tags:Critical** finds all work items tagged 'Critical'. 

1. Add more filters to further narrow your search, and use Boolean operators
   to combine terms if required. For example, 
   **a: Chris t: Bug s: Active** finds all active bugs assigned
   to a user named Chris.

1. Narrow your search to specific types
   and states, by using the drop-down selector lists at the top of the results page.

::: moniker-end


To learn more, see [Search work items](../search/work-item-search.md)

::: moniker range=">=tfs-2018"
## Initiate a wiki content search 

With wiki search, you can search within a project wiki or across all wikis created for the organization. Simply select the **Search wiki** option from the search box and type a keyword or phrase within the search box. 
::: moniker-end


::: moniker range="tfs-2018"
> [!NOTE]  
> Wiki search is supported on TFS 2018.2 or later versions. To download TFS 2018.2, see [Team Foundation Server 2018 Update 2 Release Notes](/visualstudio/releasenotes/tfs2018-update2). 
::: moniker-end


::: moniker range=">= azure-devops-2019" 

Choose **Overview>Wiki** and type your keyword or phrase into the search box. 

> [!div class="mx-imgBorder"]  
> ![Wiki search option](../wiki/_img/search/search-wiki-vert.png)   

The search feature quickly returns wiki pages by title or page content. English language stemming support helps you find the most relevant wiki pages. For example, when you enter *request* in the search box, wiki search will return page results containing related words such as *requesting, requested, requests,* and so on.

> [!div class="mx-imgBorder"]  
> ![Wiki search results](../wiki/_img/search/wiki-search-example-vert.png)   

::: moniker-end  


::: moniker range="tfs-2018"  

Open **Wiki** and type your keyword or phrase into the search box. 

> [!div class="mx-imgBorder"]  
> ![Wiki search option, previous navigation](../wiki/_img/search/search-wiki-horz.png)   

The search feature quickly returns wiki pages by title or page content. English language stemming support helps you find the most relevant wiki pages. For example, when you enter *request* in the search box, wiki search will return page results containing related words such as *requesting, requested, requests,* and so on.

> [!div class="mx-imgBorder"]  
> ![Wiki search results](../wiki/_img/search/wiki-search-example-vert.png)   

::: moniker-end


## Related articles

- [Search code](../search/code-search.md)
- [Search work items](../search/work-item-search.md)
- [Create a wiki for your project](../wiki/wiki-create-repo.md)

