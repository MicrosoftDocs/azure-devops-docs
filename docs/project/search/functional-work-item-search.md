---
title: Use functional work item search options
description: How to use Work Item Search - functional options for Work Item Search in Microsoft Azure DevOps for all projects. 
ms.assetid: B64E70C5-E5B2-49E6-BD05-FF5932F9894C
ms.technology: devops-collab
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 03/04/2021
monikerRange: '>= tfs-2017'
---

# Functional work items search

[!INCLUDE [version-header](../../includes/version-tfs-2017-through-vsts.md)]

Work Item Search is available as a built-in extension in Azure DevOps. Users can use Work Item Search by default without any installation when the Boards service is installed and enabled in Azure DevOps Services.

By using Work Item Search, you can do the following tasks:

* **Search over all your projects**:
  Search in your own and your partner teams' backlog. Use cross-project searches over all the work items to search across your enterprise's entire work items. Narrow your search by using project and area path filters. 
  
* **Search across all work item fields**:
  Quickly and easily find relevant work items by searching across all work item fields (including custom fields). Use a full text search across all fields to efficiently locate relevant work items. The snippet view indicates where matches were found.
  
* **Search in specific fields**:
  Use the quick in-line search filters to narrow down to a list of work items in seconds. Use the filters on any work item field. The dropdown list of suggestions helps complete your search faster. For example, a search such as **AssignedTo:Chris WorkItemType:Bug State:Active** finds all active bugs assigned to a user named Chris.

* **Search across test**: 
   Search across Test Plans, Test Suites, and other test work item types. 

* **Take advantage of integration with work item tracking**:
  The Work Item Search interface integrates with familiar controls for managing your work items; letting you view, edit, comment, share, and much more.


## Prerequisites

All users have access to work item and wiki search.

<a name="acrossfield"></a>

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

## Full text search across all fields

You can easily search across all work item fields, including custom fields, which enables more natural searches. The snippet view indicates where matches were found.

<img alt="Search across all work item fields" src="media/work-item-search-get-started/NewSearchAcross.gif" width="710" height="400" border="0"></img>  

Use simple search strings for words or phrases. Work item search matches derived forms of your search terms; for example, a search for "updating" will also find instances of the word "updated" and "update". Searches are _not_ case-sensitive.

When you search from inside a project, the default is to search only within that project. While searching from inside a team, the default is to search only within the default area path of that team. When you have one project selected, you see a list of area paths in that project for which you have read access - you won't see any projects and area paths for which you don't have read permission. 
Select area paths in the tree to narrow your search if necessary.

The selected projects are always at the top of the list. Notice that hit counts are also shown for projects that aren't selected. 

Open the search results in a new browser tab from either search box by selecting _Ctrl+Shift+Enter_.

<a name="quickfilters"></a>

## Quick filters for matching in specific fields

Quick inline search filters let you refine work items in seconds. The dropdown list of suggestions helps complete your search faster. Mix and match the functions to create quick powerful searches. 

For example:

* Scope your search terms to match in any work item field including custom fields.
  Enter the field name followed by the search terms; for example, a search such as **tags:Critical** 
  finds work items having a field 'tags' containing the term 'Critical'.

* Use multiple inline search filters to scope your search by any work item field, including custom fields.
  For example, a search such as **t: Bug path:"project\search"** finds all bugs in the area path "project\search".

* Use the operators `>`, `>=`, `<`, `<=`, `=`, and `!=` for date, integer, and float fields.
  For example, a search such as <strong>t: Bug CreatedDate> @Today-7</strong> finds all bugs created in the last week

* For the search query that contains multiple terms and users looking for exact match, embed the search term inside " ";
  for example, a search such as **BuildPath: "tools.demoproject.com"** finds all work items that necessarily contain the path "tools.demoproject.com". 

<img alt="Quick inline search filters let you refine work items in seconds" src="media/work-item-search-get-started/NewFilters.gif" width="710" height="400" border="0"></img>  

## Quick filter shortcuts

You can use the following common inline search filters to quickly access common shortcuts:

* `a:` for **Assigned to:** 
* `c:` for **Created by:** 
* `s:` for **State** 
* `t:` for **Work item type**

For example, you can use quick searches such as **`a:@Me s:active t:bug`** to find all bugs assigned to you.

<a name="locationfunctions"></a>

## Scope projects and area and iteration paths using filters 

Filters make it easy to narrow the search to specified projects and area paths.
Narrow the search to a specific location using the `proj`, `area`, or `iteration` filters:

* `Wiki proj:Fabrikam` finds all occurrences of the word **Wiki** in the **Fabrikam** project.
* `Wiki area:Contoso/Mobile` finds all occurrences of the word **Wiki** 
  in the area path **Contoso/Mobile** and its subpaths.
* `Wiki iteration:Contoso/Sprint101` finds all occurrences of the word **Wiki** 
  in the iteration path **Contoso/Sprint101** and its subpaths.
* Enclose the argument to the filter in double-quotes if it contains a space. 
  For example: `Wiki path:"Contoso/Windows Phones and Devices/Services"`.
  
<a name="quicknavigation"></a>

## Quickly go to a work item using its ID

Enter the work item ID in the search box in the Azure DevOps title bar 
to quickly go to it. Searching for a work item ID opens the work item in a 
modal dialog, providing quick access to read and edit work items.

::: moniker range=">= azure-devops-2019"  

![Opening the work item in a modal dialogue](media/advanced-work-item-search-syntax/open-work-item-modal-new.png)

::: moniker-end

::: moniker range="< azure-devops-2019"  

![Opening the work item in a modal dialogue](media/advanced-work-item-search-syntax/open-work-item-modal.png)

::: moniker-end

<a name="boolean"></a>

## Narrow your search with Boolean operators
 
Narrow your search by using Boolean operators to combine search criteria.
Combine multiple search criteria using `AND`, `OR`, or `NOT` (they must be 
uppercase). 

Use parentheses to specify the precedence of the operations when you use more than 
one Boolean operator. By default, a search combines all the words you enter using 
the `AND` operator so that it returns only work items that contain all of the 
words you entered. 

For example:

* `welcome AND page` finds work items that contain derived forms of both the words **welcome** and 
  **page**. `AND` is the default operator, and is equivalent to 
  the search string `welcome page`.
* `signup OR signin` finds work items that contain either of the words **signup** or **signin**.
* `signin NOT signup` finds work items that contain the word **signin** but not the word **signup**.
* `(signin NOT signup) OR "user login"` finds work items that contain the word **signin**
  but not the word **signup** or work items that contain the phrase **user login**.

To find an exact match to a set of words, enclose your search terms in double-quotes. 
For example, `"Client not found"`

<a name="wildcards"></a>

## Broaden your search with wildcards

Use the wildcard characters `*` and `?` to broaden your search criteria. For 
example:

* `Browser*` finds work items containing words that start with **Browser**, 
  such as **BrowserEdge**, **BrowserIE**, and **BrowserFirefox**.
* `alpha?version` finds work items containing words that start with **alpha**, have any 
  alphanumeric character next, and end with **version**. For example, **alpha1version** and **alphaXversion**. 

You can use wildcard characters anywhere in your search string **except** as a **prefix**. For example, you can't use a search query such as `*RequestHandler`. 
However, you can use prefix wildcards with the other search filter functions; for example, the search query strings `area:*mobile` and `tags:*Browser` are valid.  

You can use more than one `?` wildcard to match more than one character.

![Warning](media/shared/Warning-hightop.png) **No results found for ...**  

* If there are no results matching the input, try removing filters and retry the search. Broadening the search and after you view the search results,
  you can apply appropriate filters again and search again for relevant results

* Check for the spelling of your search terms. Currently Work item search doesn't support ignoring of users' spelling mistakes

* If there are lots of hits when you're using a wildcard search, such as when you're using a simple wildcard search string, you may see a message that no matching files are found. In this case, narrow your search to reduce the number of matches. For example, specify more characters of the word or words that you want to find, or add a condition or filter to limit the number of possible matches.


<a name="seemoreworkitem"></a>

## See more of the work item

You can quickly get a full screen view of the selected work item using ![Expand the file to fullscreen](media/shared/fullscreen-icon-expand.png) **expand** and ![Shrink the file to a window](media/shared/fullscreen-icon-shrink.png) **shrink** in the toolbar. However, another way to see more of the work item, while you can still
select work items from the list of matching results, is to hide the left column filter pane
by choosing **&lt;** at the top left of the column. Use **&gt;** to restore the filter pane. 

If you're using a portrait orientation screen, use the **Preview pane: Right** link at the top right of the window to display the code below the search results list.

Search remembers the state of the filter pane, configuration of the work item view pane, and its position between sessions as part of your user preferences.

## Find backlog comments

.........

## Search Work Items with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Work Item Search with REST API, see [Fetch Work Item Search Results](https://docs.microsoft.com/rest/api/azure/devops/search/work%20item%20search%20results/fetch%20work%20item%20search%20results?preserve-view-not-set).


[!INCLUDE [search-limitations](includes/search-limitations.md)]

## Next steps

> [!div class="nextstepaction"]
> [Supported filter functions and more for work items](../../boards/backlogs/filter-backlogs-boards-plans.md#supported-filter-functions)

## Related articles

- [Search code](functional-code-search.md)
* [Search artifacts and packages](functional-package-search.md)
* [Search wiki](../wiki/search-wiki.md)
