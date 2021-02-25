---
title: Get started with Search in Azure DevOps
description: Quickly search within Azure DevOps across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/20/2021
monikerRange: '>= tfs-2017'
---

# Get started with Search

[!INCLUDE [version-header](../../includes/version-tfs-2017-through-vsts.md)]

The Search function and extensions available for Azure DevOps enable you to easily search across all the projects, teams, and repositories to which you have access. You can find an at-a-glance look at all of the [features of Search](#search-features) further in this article.

::: moniker range=">= tfs-2018"  
With the search box, you can quickly find the following content:
- [work item](#start-searching-work-items)
- [code](#start-searching-code)
- [artifact](#start-searching-packages-or-artifacts)
- [wiki](#start-searching-wiki)
::: moniker-end  

::: moniker range="tfs-2017"  
With the search box, you can quickly find [work](#start-searching-work-items) item and [code](#start-searching-code) content.  
::: moniker-end

## Prerequisites

- Every user can use the basic Search function, which includes work item and wiki Search.
- You must be a Stakeholder to perform semantic searches on work items, wiki, and packages.

<!---
Add BENEFIT of each search task type

-->

### Search vs. query

Work Item queries generate a list of work items based on the filter criteria you provide. You can create queries from the web portal or from a supported client, such as Visual Studio Team Explorer and Team Explorer Everywhere. Also, you can open a query in Excel to perform bulk additions and modifications. For more information about queries, see [Define a query](../../boards/queries/using-queries.md)

### Search vs. filter

Searching begins from nothing and adds to a list of results based on criteria that matches. Filtering begins from the full list of results and eliminates from that list based on which results do not match certain criteria. For more information about filters, see [Apply keyword and ID filters](../../boards/backlogs/filter-backlogs-boards-plans.md#apply-keyword-and-id-filters)

## Start searching with a keyword

A keyword search is the most basic type of search to get started. Enter a word enclosed with double quotes, and then select _Enter_ or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search. You can also search for a phrase by enclosing your search terms in double-quotes.

By default, the search box searches everything. You can narrow down your results and focus on what you need by using [filters for work items](#use-filters-for-work-item-search), [for code](#use-filters-for-code-search), or [for packages](#use-filters-for-searching-packages-or-artifacts).

::: moniker range=">= azure-devops-2019"  

![Search boxes in Azure DevOps](media/shared/title-bar-search-box-select-type-tfs.png)

::: moniker-end

::: moniker range="< azure-devops-2019"  

![Search boxes in TFS 2018 and earlier](media/shared/title-bar-search-box-select-type.png)

::: moniker-end

> [!TIP]
> Searches aren't case-sensitive.

## Start searching work items

Start searching across all your work items over all your projects, Test Plans, Test Suites, and other test work item types, with a keyword or phrase.

::: moniker range=">= azure-devops-2019"

1. Choose any **Boards** page, enter a keyword or phrase in the search box, and select _Enter_ or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search. 

   :::image type="content" source="media/get-started/work-item-search-vert.png" alt-text="Project search box":::

2. Search results display in a snippet view where the matches found are shown in bold.

   :::image type="content" source="media/work-item-search-get-started/results-matching.png" alt-text="Search matching results":::

   This is a full text search that uses simple search strings for words or phrases. Work item search matches derived forms of your search terms; for example, a search for
   "updating" also finds instances of the word "updated" and "update".

3. Select a snippet of a work item to display it in the window on the right side of your screen. 
  
   Open the search results in a new browser tab from a search box by selecting _Ctrl_ + _Enter_ or by holding _Ctrl_ and selecting ![start search](../search/media/shared/start-search-icon.png) start search.

4. In Google Chrome, select _Ctrl_ + _Shift_ + _Enter_ to switch the focus to the new browser tab. 

::: moniker-end

### Search by work item ID

Enter the work item ID in the search box in the Azure DevOps title bar to quickly go to it. 
Searching for a work item ID opens the work item in a modal dialog, providing quick access to read and edit work items.

::: moniker range=">= azure-devops-2019"

::: moniker-end 

::: moniker range=" <= tfs-2018"

1. In the search box, check that the text says _Search work items_. If it doesn't, use the selector to select it.

   ![The Work item aearch textbox in the title bar](../search/media/work-item-search-get-started/title-bar-search-box-empty-outlined.png)   

2. Enter a search string in the text box, and select _Enter_ or  
   
   ![starting search icon](../search/media/shared/start-search-icon.png) start search. 

3. Search results display in a snippet view where the matches found are shown in bold.

   ![Search results](../search/media/work-item-search-get-started/results-matching.png)

   This is a full text search that uses simple search strings for words or phrases. Work item search matches derived forms of your search terms; for example, a search for "updating" will also find instances of the word "updated" and "update". Searches are _not_ case-sensitive.

4. Select a snippet of a work item to display it in the right window. 
  
   Open the search results in a new browser tab from a search box by selecting _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![the start search icon](../search/media/shared/start-search-icon.png) icon. In Google Chrome, select _Ctrl_ + _Shift_ + _Enter_ to switch the focus to the new browser tab. 

::: moniker-end

### View and filter work item results

::: moniker range=">= azure-devops-2019"

1. Fine-tune your search by specifying the fields to search. Enter `a:` and a user name to search for all items assigned to that user.

	:::image type="content" source="media/get-started/search-work-vert.png" alt-text="Search from title bar":::    

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**
 
2. Start entering the name of a field in your work items; for example, enter `ta`.

   :::image type="content" source="media/work-item-search-get-started/dyna-dropdown.png" alt-text="Quick filters as you enter the name of a field":::

   The dropdown list shows work item field name suggestions that match user input thereby helping the user to complete the search faster. For example, a search such as **tags:Critical** finds all work items tagged 'Critical'. 

3. Add more filters to further narrow your search, and use Boolean operators to combine terms if necessary. For example, **a: Chris t: Bug s: Active** finds all active bugs assigned to a user named Chris.

4. Narrow your search to specific types and states, by using the drop-down selector lists at the top of the results page.
5. Widen your search across all projects, or narrow it to specific types and states. Use the filter to show the selector lists.

   ![Showing the filter lists](media/shared/show-filters.png)    

6. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

   ![Selector drop-down lists](media/work-item-search-get-started/area-selectors.png)    

7. Sort the results as you need using the drop-down list of field names, work item types, or by relevance.

   ![Sort drop-down list](media/work-item-search-get-started/sort-order.png)    

8. Quickly [search for code](code-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

   ![Search for code or wiki containing the same search string](media/work-item-search-get-started/view-code-search.png)

::: moniker-end

::: moniker range=" <= tfs-2018"

1. Fine-tune your search by specifying the fields to search. Enter `a:` and a user name to search for all items assigned to that user.
   
   :::image type="content" source="media/get-started/work-item-search-filters.png" alt-text="Search from the title bar":::   

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**<p />
 
2. Start entering the name of a field in your work items; for example, enter `ta`.

   :::image type="content" source="media/work-item-search-get-started/dyna-dropdown.png" alt-text="Quick filters as you enter a field name":::   

   The dropdown list shows work item field name suggestions that match user input thereby helping the user to complete the search faster. For example, a search such as **tags:Critical** finds all work items tagged 'Critical'. 

3. Add more filters to further narrow your search, and use Boolean operators to combine terms if necessary. For example, **a: Chris t: Bug s: Active** finds all active bugs assigned to a user named Chris.

4. Narrow your search to specific types and states, by using the drop-down selector lists at the top of the results page.
5. Widen your search across all projects, or narrow it to specific types and states. Use the filter to show the selector lists.

   ![Showing the filter lists](media/shared/show-filters.png)    

6. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

   ![Selector drop-down lists](media/work-item-search-get-started/area-selectors.png)    

7. Sort the results as you need using the drop-down list of field names, work item types, or by relevance.

   ![Sort drop-down list](media/work-item-search-get-started/sort-order.png)    

8. Quickly [search for code](code-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

   ![Search for code or wiki containing the same search string](media/work-item-search-get-started/view-code-search.png)

::: moniker-end

For more examples and information about searching work items, see [Functional work item search](functional-work-item-search.md).

## Start searching code

Code search requires installation of the [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search). If it hasn't yet been installed, request that a member of your Project Collection Administrators group [install it](../..//marketplace/install-extension.md).  

::: moniker range=">= azure-devops-2019"
  
To start your search, choose **Repos** > **Files** or another page under **Code**, enter a keyword or phrase in the search box, and then *Enter* or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search. 

:::image type="content" source="../../organizations/public/media/search/code-search-vert.png" alt-text="Code Search box":::
 
::: moniker-end

::: moniker range=" <= tfs-2018"

1. In the search box, check that the text displays _Search code_. If it doesn't, select it.

   :::image type="content" source="media/code-search-get-started/title-bar-search-box-empty-outlined.png" alt-text="Switch between searching for code and work items":::

2. Enter a search string in the text box, and then select _Enter_ or  
   ![start search action icon](../search/media/shared/start-search-icon.png) start search.

::: moniker-end

### View and filter code results

 The search page shows a list of the matching code files. The selected file has all instances of the search string highlighted. If you see a list of work items, ensure that **Code** is selected in the top left.
	:::image type="content" source="media/get-started/code-search-example.png" alt-text="Code search results example":::

1. Assemble more complex search string using the operators and functions listed in the drop-down menu. Select the filter function or code type you want to include in your search string from the list, and then enter the criteria value.

   :::image type="content" source="media/get-started/code-search-filters.png" alt-text="Code search bar":::

   * Find all instances of "ToDo" comments in your code by selecting `comment:` and entering `todo`. 
   * Search in specific locations, such as within a particular path, by using a search string such as `Driver path:MyShuttle/Server`. 
   * Search for files by name, such as `Driver file:GreenCabs.cs`, or just by file extension. For example, the search string `error ext:resx` could be useful when you want to review all error strings in your code. But, even if your plain text search string (without specific file type functions) matches part of a filename, the file appears in the list of found files.
   * Combine two or more words by using Boolean operators; for example, `validate OR release`.
   * Find an exact match to a set of words by enclosing your search terms in double-quotes. For example, `"Client not found"`. 
   * Use the code type search functions with files written in C#, C, C++, Java, and Visual Basic.NET.
   * Use proximity operators like NEAR, BEFORE, and AFTER to search for files in the vicinity of a term.

2. Widen your search to all projects or your entire organization. Or narrow it to specific areas and types of code by selecting from the drop-down lists at the top of the page.

   ![Use drop-down lists to widen or narrow your search](media/code-search-get-started/select-projects.png)

3. Use the tabs in the results page to view the history of the file and to compare versions of the file.

   ![Use tabs to view history and compare files](media/code-search-get-started/compare-tab.png)

4. Choose the filename link at the top of this column to open the file in a new Code Explorer window.

   ![Open the file in Code Explorer](media/code-search-get-started/open-in-code-explorer.png)

5. Quickly [search for work items](work-item-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

   ![Search for work items or wiki containing the same search string](media/code-search-get-started/open-workitem.png)


To learn more about searching your code, see [Functional code search](advanced-code-search-syntax.md).

## Start searching packages or artifacts

Start searching across all your packages and artifacts inside your organization.

1. Open the **Azure Artifacts** section in Azure DevOps (see [Web portal navigation](../navigation/index.md)).

2. Choose ![start search icon](media/shared/start-search-icon-new.png) **Search** at the top right of the window to show the search textbox.

3. Enter a search string in the textbox, and select *Enter* or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search.

Search results display with matches to your query shown in bold. 
The following example shows a full text search that uses simple search strings for words or phrases. 

:::image type="content" source="media/shared/pkgsrch-results.png" alt-text="Package search results":::

### View and filter package results

1. Widen your search across all feeds, or narrow it to specific views and package types. The Views filter only appears if a single feed is selected from Feeds filter.
   Use the filter to show the selector lists.

	:::image type="content" source="media/shared/pkgsrch-results-filtericon.png" alt-text="Showing the filter lists":::   

2. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

	:::image type="content" source="media/shared/pkgsrch-results-filters.png" alt-text="Selector drop-down lists":::

3. By switching pivots, quickly [search code](#start-searching-code) containing the same search string, or search for the same string in your [wikis](#start-searching-wiki), [work items](#start-work-item-search) or [packages](#start-searching-packages-or-artifacts).

	:::image type="content" source="media/shared/pkgsrch-other.png" alt-text="Search for code or wiki or work items containing the same search string":::

## Start searching wiki

Start searching within a project wiki or across all wikis created for your organization.

::: moniker range="tfs-2018"
> [!NOTE]  
> Wiki search is supported on TFS 2018.2 or later versions. To download TFS 2018.2, see [Team Foundation Server 2018 Update 2 Release Notes](/visualstudio/releasenotes/tfs2018-update2). 
::: moniker-end

::: moniker range=">= azure-devops-2019"

Select the **Search wiki** option from the search box and enter a keyword or phrase within the search box.

  :::image type="content" source="../wiki/media/search/search-wiki-vert.png" alt-text="Wiki search option":::   

The search feature quickly returns wiki pages by title or page content. English language stemming support helps you find the most relevant wiki pages. For example, when you enter *request* in the search box, wiki search returns page results containing related words, such as *requesting, requested, requests,* and so on.

   :::image type="content" source="../wiki/media/search/wiki-search-example-vert.png" alt-text="Wiki search results"::: 

::: moniker-end  

::: moniker range="tfs-2018"  

Open **Wiki** and enter your keyword or phrase into the search box. 

   :::image type="content" source="../wiki/media/search/search-wiki-horz.png" alt-text="Wiki search option, previous navigation"::: 

The search feature quickly returns wiki pages by title or page content. English language stemming support helps you find the most relevant wiki pages. For example, when you enter *request* in the search box, wiki search returns page results containing related words such as *requesting, requested, requests,* and so on.

  :::image type="content" source="../wiki/media/search/wiki-search-example-vert.png" alt-text="Wiki search results":::   

::: moniker-end

### Search Wiki with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Wiki Search with REST API, see [Fetch Wiki Search Results](https://docs.microsoft.com/rest/api/azure/devops/search/wiki%20search%20results/fetch%20wiki%20search%20results?view=azure-devops-rest-6.0).

## Non-search box tasks

In the following table, you find some other search functions.

| **Non-search box task**                      | **Action**                                                             |
|----------------------------------------------|------------------------------------------------------------------------|
| Find an organization setting                 | Go to your organization and select **Organization settings**           |
| Find a project setting                       | Go to your project and select **Project settings**                     |
| Find a user settings                         | Go to your **User settings page**                                     |
| Find a user                                  | Go to your organization and select **Organization settings** > **Users**, and then enter the name in the filter box.   |
| Find an organization                         | Scroll through the left side of your screen, which lists all organizations.      |
| Find a project                               | Go to your organization, and then enter the project name in the Filter projects box   |
| Install Code Search                          | Go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search) to install Code Search.   |
| View file history and compare versions       | Go to **Repos** > **Files**, highlight your file, and then select **History**.              |

::: moniker-end

## Search features

|**Search feature**  |**Usage** |**Example**  |
|---------|---------|---------|
|**Keyword searches**     | Search for two keywords with *OR*        |  validate OR release        |
|**Exact match**  | Enclose a keyword or phrase in double-quotes        | "Client not found"        |
|**Work item ID**   | enter *work item #*   | 8765921     |
| Search for a work item as you type | As you enter your work item, .... |    843*...*                     |
|**Wildcard searches**    | `alpha?version` finds work items containing words that start with *alpha*, have any alphanumeric character next, and end with version. `Browser*` finds work items containing words that start with Browser.        | *alpha1version* and *alphaXversion*, *BrowserEdge*, *BrowserIE* and *BrowserFirefox*   |
|**Use wildcards in combination**   | You can use wildcard characters anywhere in your search string except as a prefix.         | You can't use a search query such as *RequestHandler. However, you can use prefix wildcards with the other search filter functions; for example, the search query strings area:*mobile and tags:*Browser are valid. CodeSenseHttp* finds files containing words that start with CodeSenseHttp, such as CodeSenseHttpClient and CodeSenseHttpClientTest.        |
|**Boolean operator searches**   |  Find two or more keywords using Boolean operators. AND is the default operator, and so this is equivalent to the search string validate revisit.      | validate AND revisit finds files that contain both the words validate and revisit. validate OR revisit finds files that contain either of the words validate or revisit.
· validate NOT revisit finds files that contain the word validate but not the word revisit.
·         (validate NOT revisit) OR "release delayed" finds files that contain the word validate but not the word revisit or files that contain the phrase release delayed. |
|**Search across projects**    | Search across all the projects, teams, and repositories to which you have access.        |         |
|**Specific field search**     | Search for a specific field within a work item        |         |
|**Search discussions**     |         |         |
|**Functions to find specific types of code**     |         |         |
| **Search for commits in branches** |   |     |
::: moniker-end
|**Search for boards, backlogs, queries, and sprint from the instant search box**     |  Access your recently visited boards, backlogs, queries and sprints from the search box by activating the search box in Azure Boards. You can also search for the boards, backlogs, queries and sprints across your project by typing the board name in the search box.      |  Enter board name in the search box.       |
|**Open work items from search**     |         |         |
|**Search for a file or folder in commit history**     |         |         |
|**Scope code search using path filters** |       |
| **Quick navigation in Azure Boards search** |Search and find any item within Azure Boards without having to switch tabs for your search. | Type the keyboard shortcut `/` on Azure Boards|
|**Access recently visited wiki pages**   |Access recently visited wiki pages by clicking on the search box in Wiki hub   | invoke the search box by typing the keyboard shortcut `/` |
|**Instant search for wiki**   | View the wiki search results as you type in the search box.  | For example: *getting started* results in all the wiki pages that contain *getting started*.  |
::: moniker range=" azure-devops" 
|**Proximity search**     | You can search for files based on the term vicinity using proximity operators: NEAR, BEFORE, and AFTER (must be uppercase). By default, proximity search looks for terms within five tokens distance.              |  BEFORE: term1 BEFORE term2 - returns all files where term1 occurs BEFORE term2 within a distance of five tokens between them. AFTER: term1 AFTER term2: returns the same results as term2 BEFORE term1. NEAR: term1 NEAR term2: returns all files where term1 is within five token distance from term2 in any direction. term1 NEAR term2 returns the same results as term1 BEFORE term2 OR term2 BEFORE term1.   |
::: moniker-end
::: moniker range=" >= azure-devops-2020"
|**Quick navigation**    |  Search for boards, backlogs, queries, and sprint from the instant search box.       |         |
|**Instant search for work items**     | Enter the work item ID in the search box.        |  The work item opens in a modal dialog, providing access to read and edit the work item.       |
::: moniker-end
::: moniker range=" >= azure-devops-2019"
|**Special character searches**    |  You must escape the special characters `(`, `)`, `[`, `]`, `:`, `*`, and `?` by enclosing them in a phrase delimited with double-quotes " and ". You can include special characters in a search string, or search specifically for special characters, according to the following rules: CodeA23?R finds files containing words that start with CodeA23, have any alphanumeric character next, and end with R. For example, CodeA234R and CodeA23QR.   Search for any special character that is not a part of the query language, (for example, excluding the characters : ( )[]*?) as either a simple search string or a phrase search string. For example, react-redux or "react-redux" will produce the same results. Search for a special character that is a part of the query language (: () []*?) by enclosing the search string within double-quotes.     |  `"flatten()"` will find the literal string *flatten()*. Search for a literal occurrence of the double-quote character *"* by preceding it with the escape character `\` and enclosing the search string in double-quotes. `"\"react-redux\""` will find the literal string "react-redux".     | 
|**Expanded search box with filters and operators**    |         |         |
::: moniker-end


## Extensions for Search

The following extensions for Search are available in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/):

- Create Azure Search Objects
- Azure Search Extension
- Azure Search Extension for Azure Pipelines
- Find similar work items

::: moniker range=">= tfs-2017 < azure-devops"  

Search extension for on-premises
	• Work Item Search (built-in)
	• Wiki Search (built-in)

::: moniker-end

::: moniker range=">= azure-devops-2019" 

- Code Search 
- Azure Paths Search
- GitSense
- Wiql Editor
- ConfigTransformation
- TimeBox Integration Proof of Concept
- AzDo Team Report
- Pull Request Search 

::: moniker-end

[!INCLUDE [search-limitations](includes/search-limitations.md)]

## Next steps

> [!div class="nextstepaction"]
> [Functional work item search](functional-work-item-search.md) or
> [Functional code search](functional-code-search.md) or
> [Functional artifact or package search](functional-package-search.md)


## Related articles

* [Adhoc vs managed work item queries](../../boards/queries/adhoc-vs-managed-queries.md?toc=/azure/devops/project/search/toc.json&bc=/azure/devops/project/search/breadcrumb/toc.json)
* [About managed queries, Ad hoc versus managed queries](../../boards/queries/about-managed-queries.md#ad-hoc-v-managed)?toc=/azure/devops/project/search/toc.json&bc=/azure/devops/project/search/breadcrumb/toc.json)
* [Search your Wiki](https://blogs.msdn.microsoft.com/devops/2017/12/01/announcing-public-preview-of-wiki-search/)
* [Code Search blog posts](https://devblogs.microsoft.com/devops/?s=code+search&submit=%EE%9C%A1)
* [Code Search on Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search)
* [Work item search blog posts](https://devblogs.microsoft.com/devops/?s=work+item+search&submit=%EE%9C%A1)
