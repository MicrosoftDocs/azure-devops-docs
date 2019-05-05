---
title: Use advanced workitem search options
description: How To Use Work Item Search - Advanced options for Work Item Search in Microsoft Azure DevOps and TFS for all projects of your projects 
ms.assetid: B64E70C5-E5B2-49E6-BD05-FF5932F9894C
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# How To: Use Work Item Search

[!INCLUDE [version-header](../../_shared/version-tfs-2017-through-vsts.md)]

Work Item Search is available as a built-in extension in Azure DevOps and TFS.
Users can use Work Item Search by default without any installation.

By using Work Item Search you can:

* **Search over all your projects**:
  Search in your own and your partner teams' backlog. Use cross-project 
  searches over all the work items to search 
  across your enterprise's entire work items. Narrow your search by using project and 
  area path filters. 
  
* **Search across all work item fields**:
  Quickly and easily find relevant work items by searching across all work item fields
  (including custom fields). Use a full text search across all fields to efficiently
  locate relevant work items. The snippet view indicates where matches were found.<p />
  
* **Search in specific fields**:
  Use the quick in-line search filters, on any work item field, to narrow down to a
  list of work items in seconds. The dropdown list of suggestions helps complete your
  search faster. For example, a search such as **AssignedTo:Chris WorkItemType:Bug
  State:Active** finds all active bugs assigned to a user named Chris. 

* **Take advantage of integration with work item tracking**:
  The Work Item Search interface integrates with familiar controls for managing your work items;
  letting you view, edit, comment, share, and much more.



<a name="acrossfield"></a>
## Full text search across all fields

You can easily search across all work item fields, including custom fields, 
which enables more natural searches. The snippet view indicates where matches were found.

<img alt="Search across all work item fields" src="_img/work-item-search-get-started/NewSearchAcross.gif" width="710" height="400" border="0"></img>  

Use simple search strings for words or phrases. Work item search matches derived forms 
of your search terms; for example, a search for "updating" will also find instances of the word 
"updated" and "update". Note that searches are _not_ case-sensitive.

When you search from inside a project, the default is to search only within that 
project. When you search from inside a team, the default is to search 
only within the default area path of that team. When you have one project selected, 
you see a list of area paths in that project for which you have read access - 
you won't see any projects and area paths for which you don't have read permission. 
Select area paths in the tree to narrow your search if required.

The selected projects are always at the top of the list.
Notice that hit counts are also shown for projects that are not selected. 

Open the search results in a new browser tab from either search box by
pressing _Ctrl+Shift+Enter_ or by holding _Ctrl_ and clicking  the
![start search icon](_img/_shared/start-search-icon.png) icon.

<a name="quickfilters"></a>
## Quick Filters for matching in specific fields

Quick inline search filters let you refine work items in seconds. 
The dropdown list of suggestions helps complete your search faster. 
Mix and match the functions to create quick powerful searches. For example:

* Scope your search terms to match in any work item field including custom fields.
Simply type the field name followed by the search terms; for example, a search such as **tags:Critical** 
finds work items having a field 'tags' containing the term 'Critical'.

* Use multiple inline search filters to scope your search by any work item field, including custom fields.
For example, a search such as **t: Bug path:"project\search"** finds all bugs in the area path "project\search".

* Use the operators `>`, `>=`, `<`, `<=`, `=`, and `!=` for date, integer and float fields.
For example, a search such as **t: Bug CreatedDate> @Today-7** finds all bugs created in the last week

* For the search query that contain multiple terms and users looking for exact match, embed the search term inside " ";
for example, a search such as **BuildPath: "tools.demoproject.com"** finds all work items that necessarily contain the path "tools.demoproject.com". 

<img alt="Quick inline search filters let you refine work items in seconds" src="_img/work-item-search-get-started/NewFilters.gif" width="710" height="400" border="0"></img>  

## Quick Filters shortcuts

The common inline search filters can be quickly accessed using shortcuts:

* `a:` for **Assigned to:** 
* `c:` for **Created by:** 
* `s:` for **State** 
* `t:` for **Work item type**

For example, you can use quick searches such as **a:@Me s:active t:bug** to find all bugs assigned to you.

<a name="locationfunctions"></a>
## Filters to scope projects, area and iteration paths

Filters make it easy to narrow the search to specified projects and area paths.
Narrow the search to a specific location using the `proj`, `area`, or `iteration` filters:

* `Wiki proj:Fabrikam` finds all occurrences of the word **Wiki** in the **Fabrikam** project.
* `Wiki area:Contoso/Mobile` finds all occurrences of the word **Wiki** 
  in the area path **Contoso/Mobile** and its sub-paths.
* `Wiki iteration:Contoso/Sprint101` finds all occurrences of the word **Wiki** 
  in the iteration path **Contoso/Sprint101** and its sub-paths.
* Enclose the argument to the filter in double-quotes if it contains a space. 
  For example: `Wiki path:"Contoso/Windows Phones and Devices/Services"`.
  
<a name="quicknavigation"></a>
## Quickly navigate to a work item using its ID

Type or paste the work item ID in the search box in the Azure DevOps or TFS title bar 
to quickly navigate to it. Searching for a work item ID opens the work item in a 
modal dialog, providing quick access to read and edit work items.

::: moniker range=">= azure-devops-2019"  

![Opening the work item in a modal dialogue](_img/advanced-work-item-search-syntax/open-work-item-modal-new.png)

::: moniker-end

::: moniker range="< azure-devops-2019"  

![Opening the work item in a modal dialogue](_img/advanced-work-item-search-syntax/open-work-item-modal.png)

::: moniker-end

<a name="boolean"></a>
## Narrow your search with Boolean operators
 
Narrow your search by using Boolean operators to combine search criteria.
Combine multiple search criteria using `AND`, `OR`, or `NOT` (they must be 
uppercase). 

Use parentheses to specify the precedence of the operations when you use more than 
one Boolean operator. By default, a search combines all the words you enter using 
the `AND` operator so that it will return only work items that contain all of the 
words you entered. 

For example:

* `welcome AND page` finds work items that contain derived forms of both the words **welcome** and 
  **page**. Note that `AND` is the default operator, and so this is equivalent to 
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
  such as **BrowserEdge**, **BrowserIE** and **BrowserFirefox**.
* `alpha?version` finds work items containing words that start with **alpha**, have any 
  alphanumeric character next, and end with **version**. For example, **alpha1version** and **alphaXversion**. 

You can use wildcard characters anywhere in your search string **except** as 
a **prefix**. For example, you cannot use a search query such as `*RequestHandler`. 
However, you can use prefix wildcards with the 
other search filter functions; for example, the search query strings 
`area:*mobile` and `tags:*Browser` are valid.  

You can use more than one `?` wildcard to match more than one character.

-----------------

![Warning](_img/_shared/Warning-hightop.png) **No results found for ...**  

* If there are no results matching the input, try removing filters and retry the search. This will broaden the search and after you view the search results,
  you can apply appropriate filters again and search again for relevant results

* Check for the spelling of your search terms. Currently Work item search doesn't support ignoring of users' spelling mistakes

* If there are a very large number of hits when using a wildcard search, such 
 as when using a very simple wildcard search string, you may see a message that no 
 matching files were found. In this case, narrow your search to reduce the number
 of matches. For example, specify more characters of the word(s) you want to find,
 or add a condition or filter to limit the number of possible matches.

-----------------

<a name="seemoreworkitem"></a>
## See more of the work item

You can quickly get a full screen view of the selected work item using the expand
![Expand the file to fullscreen](_img/_shared/fullscreen-icon-expand.png)
and shrink ![Shrink the file to a window](_img/_shared/fullscreen-icon-shrink.png)
icons in the toolbar. However, another way to see more of the work item, while still being able to 
select work items from the list of matching results, is to hide the left column filter pane
by choosing the **&lt;** icon at the top left of the column. Use the **&gt;** icon to restore the filter pane. 

If you are using a portrait orientation screen, use the **Preview pane: Right**
link at the top right of the window to display the code below the 
search results list.

>Search remembers the state of the filter pane, configuration of the work item 
view pane, and its position between sessions as part of your user preferences.

[!INCLUDE [shared-got-feedback](_shared/shared-got-feedback.md)]
