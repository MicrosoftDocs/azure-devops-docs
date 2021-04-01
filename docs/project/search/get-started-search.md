---
title: Get started with Search in Azure DevOps
description: Quickly search within Azure DevOps across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 04/01/2021
monikerRange: '>= tfs-2017'
---

# Get started with Search

[!INCLUDE [version-header](../../includes/version-tfs-2017-through-vsts.md)]

The Search function and extensions available for Azure DevOps enable you to easily search across all the projects, teams, and repositories to which you have access.

::: moniker range=">= tfs-2018"

With semantic search, you can quickly find code files, work items, wiki pages, or packages based on a keyword, wildcards, and other supported semantic search filters.

::: moniker-end 

::: moniker range="tfs-2017"

With semantic search, you can quickly find code files and work items based on a keyword, wildcards, and other supported semantic search filters.

::: moniker-end

You can find an at-a-glance look at all of the [semantic Search features](#semantic-search-features) further in this article.

## Prerequisites

- Every user can use the basic Search function, which includes work item and wiki Search.
- You must be a Stakeholder to do semantic searches on work items, wiki, and packages.

## Start searching with a keyword

A keyword search is the most basic type of search to get started. Enter a word enclosed with double quotes, and then select _Enter_ or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search. You can also search for a phrase by enclosing your search terms in double-quotes.

By default, the search box searches everything. You can narrow down your results and focus on what you need by using [Boolean operators](#narrow-your-search-with-boolean-operators).

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type-tfs.png" alt-text="Search boxes in Azure DevOps":::

::: moniker-end

::: moniker range="< azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type.png" alt-text="Search boxes in TFS 2018 and earlier":::

::: moniker-end

> [!TIP]
> Searches aren't case-sensitive.

## Semantic search features

---  
:::row:::
   :::column span="1":::
      **Search feature** 
   :::column-end:::
   :::column span="2":::
      **Usage**
   :::column-end:::
   :::column span="2":::
      **Example**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Keyword** 
   :::column-end:::
   :::column span="2":::
      Search for two keywords with *OR*
   :::column-end:::
   :::column span="2":::
      validate OR release
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Exact match** 
   :::column-end:::
   :::column span="2":::
      Enclose a keyword or phrase in double-quotes
   :::column-end:::
   :::column span="2":::
      "Client not found"
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Wildcard** 
   :::column-end:::
   :::column span="2":::
      `alpha?version` finds work items containing words that start with *alpha*, have any alphanumeric character next, and end with version. `Browser*` finds work items containing words that start with Browser. 
   :::column-end:::
   :::column span="2":::
      *alpha1version* and *alphaXversion*, *BrowserEdge*, *BrowserIE*, and *BrowserFirefox* 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Wildcard in combination** 
   :::column-end:::
   :::column span="2":::
      You can use wildcard characters anywhere in your search string except as a prefix.
   :::column-end:::
   :::column span="2":::
      You can't use a search query such as *RequestHandler. However, you can use prefix wildcards with the other search filter functions. For example, the search query strings area:*mobile and tags:*Browser are valid. CodeSenseHttp* finds files containing words that start with CodeSenseHttp, such as CodeSenseHttpClient and CodeSenseHttpClientTest. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Boolean operators** 
   :::column-end:::
   :::column span="2":::
      Find two or more keywords using Boolean operators. AND is the default operator, and so it's equivalent to the search string validate revisit.
   :::column-end:::
   :::column span="2":::
      validate AND revisit finds files that contain both the words validate and revisit. validate OR revisit finds files that contain either of the words validate or revisit.
· validate NOT revisit finds files that contain the word validate but not the word revisit.
·         (validate NOT revisit) OR "release delayed" finds files that contain the word validate but not the word revisit or files that contain the phrase release delayed. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Proximity** 
   :::column-end:::
   :::column span="2":::
      You can search for files based on the term vicinity using proximity operators: NEAR, BEFORE, and AFTER (must be uppercase). By default, proximity search looks for terms within five tokens distance
   :::column-end:::
   :::column span="2":::
      BEFORE: term1 BEFORE term2 - returns all files where term1 occurs BEFORE term2 within a distance of five tokens between them. AFTER: term1 AFTER term2: returns the same results as term2 BEFORE term1. NEAR: term1 NEAR term2: returns all files where term1 is within five token distance from term2 in any direction. term1 NEAR term2 returns the same results as term1 BEFORE term2 OR term2 BEFORE term1.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Special characters** 
   :::column-end:::
   :::column span="2":::
      You must escape the special characters `(`, `)`, `[`, `]`, `:`, `*`, and `?` by enclosing them in a phrase delimited with double-quotes " and ". You can include special characters in a search string, or search specifically for special characters, according to the following rules: CodeA23?R finds files containing words that start with CodeA23, have any alphanumeric character next, and end with R. For example, CodeA234R and CodeA23QR.   Search for any special character that isn't a part of the query language. For example, excluding the characters : ( )[]*?) as either a simple search string or a phrase search string. For example, react-redux or "react-redux" will produce the same results. Search for a special character that is a part of the query language (: () []*?) by enclosing the search string within double-quotes. 
   :::column-end:::
   :::column span="2":::
      `"flatten()"` will find the literal string *flatten()*. Search for a literal occurrence of the double-quote character *"* by preceding it with the escape character `\` and enclosing the search string in double-quotes. `"\"react-redux\""` will find the literal string "react-redux". 
   :::column-end:::
:::row-end:::
---

## Choose your semantic search starting page

The features that are available to you depend on the page that you start your search from.

### Start searching from the Organization-Projects page

From your organization's Overview page, enter a keyword or phrase in the search box, and then select **Enter** or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search.

:::image type="content" source="media/get-started/start-search-from-org-project-page.png" alt-text="Starting search from organization projects page":::

### Start searching from the Project-Overview page

From your project's Overview page, enter a keyword or phrase in the search box, and then select **Enter** or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search.

:::image type="content" source="media/get-started/start-search-from-project-overview-page.png" alt-text="Start search from project overview page":::

### Start searching from a Boards page

Start searching across all your work items over all your projects, Test Plans, Test Suites, and other test work item types, with a keyword or phrase.

::: moniker range=">= azure-devops-2019"

1. Choose any **Boards** page, enter a keyword or phrase in the search box, and select _Enter_ or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search. 

   :::image type="content" source="media/get-started/work-item-search-vert.png" alt-text="Project search box":::

2. Search results display in a snippet view where the matches found are shown in bold.

   :::image type="content" source="media/work-item-search-get-started/results-matching.png" alt-text="Search matching results":::

   This full text search uses simple search strings for words or phrases. Work item search matches derived forms of your search terms; for example, a search for
   "updating" also finds instances of the word "updated" and "update".

3. Select a snippet of a work item to display it in the window on the right side of your screen. 
  
   Open the search results in a new browser tab from a search box by selecting _Ctrl_ + _Enter_ or by holding _Ctrl_ and selecting ![start search](../search/media/shared/start-search-icon.png) start search.

4. In Google Chrome, select _Ctrl_ + _Shift_ + _Enter_ to switch the focus to the new browser tab. 

::: moniker-end

::: moniker range=" <= tfs-2018"

1. In the search box, check that the text says _Search work items_. If it doesn't, use the selector to select it.

   ![The Work item aearch textbox in the title bar](../search/media/work-item-search-get-started/title-bar-search-box-empty-outlined.png)   

2. Enter a search string in the text box, and select _Enter_ or  
   
   ![starting search icon](../search/media/shared/start-search-icon.png) start search. 

3. Search results display in a snippet view where the matches found are shown in bold.

   ![Search results](../search/media/work-item-search-get-started/results-matching.png)

   This full text search uses simple search strings for words or phrases. Work item search matches derived forms of your search terms; for example, a search for "updating" will also find instances of the word "updated" and "update". Searches aren't case-sensitive.

4. Select a snippet of a work item to display it in the right window. 
  
   Open the search results in a new browser tab from a search box by selecting _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![the start search icon](../search/media/shared/start-search-icon.png) icon. In Google Chrome, select _Ctrl_ + _Shift_ + _Enter_ to switch the focus to the new browser tab. 

::: moniker-end

For more information about searching and filtering in Azure Boards, see [Filter backlogs, boards, and plans](../../boards/backlogs/filter-backlogs-boards-plans.md).

### Start searching from a Wiki page

When you search from Wiki, you automatically navigate to wiki search results. Text search across the wiki is supported by the search platform.

:::image type="content" source="../wiki/media/search/wiki-search-example-vert.png" alt-text="Start search from wiki page":::

For more information about searching wikis, see [Search Wiki](../wiki/search-wiki.md).

## Narrow your search with Boolean operators
 
Narrow your search by using Boolean operators to combine search criteria.
Combine multiple search criteria using `AND`, `OR`, or `NOT` (they must be 
uppercase). 

Use parentheses to specify the precedence of the operations when you use more than one Boolean operator. By default, a search combines all the words you enter using 
the `AND` operator so that it returns only work items that contain all of the words you entered. 

### Work items

|**Usage**  |**Example**  |
|---------|---------|
|Finds work items that contain derived forms of both the words **welcome** and **page**. `AND` is the default operator, and is equivalent to the search string `welcome page`.  | `welcome AND page`  |
|Finds work items that contain either of the words **signup** or **signin**.    |  `signup OR signin`         |
|Finds work items that contain the word **signin** but not the word **signup**.    |  `signin NOT signup`       |
|Finds work items that contain the word **signin** but not the word **signup** or work items that contain the phrase **user login**.    | `(signin NOT signup) OR "user login"`         |
|Finds an exact match to a set of words, enclose your search terms in double-quotes.|  `"Client not found"`   |

### Code

| **Usage**                                                                | **Example**                                                                   |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Finds files that contain both the words **validate** and **revisit**.     | `validate AND revisit` |
| Finds files that contain either of the words **validate** or **revisit**. | `validate OR revisit`  |
| Finds files that contain the word **validate**, but not the word, **revisit** or files that contain the phrase **release delayed**.     | `validate NOT revisit OR "release delayed"`  |    

### Packages

|**Usage** |**Example**  |
|---------|---------|
|Finds packages that contain both the words **xml** and **parser**.  | `xml AND parser` - `AND` is the default operator, and so it's equivalent to the search string `xml parser`       |
|Finds packages that contain either of the words **xml** or **parser**.  |  `xml OR parser`        |
|Finds packages that contain the word **xml** but not the word **parser**. |`xml NOT parser`  |
|finds packages that contain the word **xml** but not the word **parser** or packages that contain the word **lib** |  `(xml NOT parser)` OR `lib` |

## Broaden your search with wildcards

You can use wildcard characters anywhere in your search string **except** as a **prefix**. For example, you can't use a search query such as `*RequestHandler`. 
However, you can use prefix wildcards with the other search filter functions; for example, the search query strings `area:*mobile` and `tags:*Browser` are valid.  

Use the wildcard character `*` and `?` to broaden your search criteria. You can use more than one wildcard to match more than one character.

### Work items

|**Usage** |**Example**  |
|---------|---------|
|Finds work items containing words that start with **Browser**, such as **BrowserEdge**, **BrowserIE**, and **BrowserFirefox**.    | `Browser*`         |
|Finds work items containing words that start with **alpha**, have any alphanumeric character next, and end with **version**. For example, **alpha1version** and **alphaXversion**.      | `alpha?version`     | 

### Code

You can't use a search query such as `*RequestHandler` or `class:?RequestHandler`. However, you can use prefix wildcards with the other search filter functions; for example, the search query strings `file:*RequestHandler.cs` and `repo:?Handlers` are valid.  

|**Usage**                                                           | **Example**                                             |
|--------------------------------------------------------------------|------------------------------------------------------------|
| Finds files containing words that start with **CodeSenseHttp**, such as **CodeSenseHttpClient** and **CodeSenseHttpClientTest**. | `CodeSenseHttp*` and  `CodeA23?R`  |  
| Finds files containing words that start with **CodeA23**, have any alphanumeric character next, and end with **R**. | **CodeA234R** and **CodeA23QR**.  |

> [!WARNING]
> **No results found for ...**  
> If there's a very large number of hits when using a wildcard search, such as when using a very simple wildcard search string, you may see a message that no matching files were found. In this case, narrow your search to reduce the number of matches. For example, specify more characters of the word(s) you want to find, or add a condition or filter to limit the number of possible matches.   

### Packages

|**Usage**  |**Example**  |
|---------|---------|
|Finds packages that contain words that start with **xmlparser**, such as **xmlparsersdk** and **xmlparserlib**.   |  `xmlparser*`        |
|Finds packages that contain words that start with **mypackage** and have any one alphanumeric character next, such as **mypackage1**, **mypackage2**, and **mypackage3**.     | `mypackage?`        |

![Warning](media/shared/Warning-hightop.png) **No results found for ...**  

* If you get no results matching the input, try removing filters and retry the search. Broadening the search and after you view the search results,
  you can apply appropriate filters again and search again for relevant results

* Check for the spelling of your search terms. Currently Work item search doesn't support ignoring of users' spelling mistakes

* If there are lots of hits when you're using a wildcard search, such as when you're using a simple wildcard search string, you may see a message that no matching files are found. In this case, narrow your search to reduce the number of matches. Specify more characters of the word or words that you want to find, or add a condition or filter to limit the number of possible matches.


## View and filter results

### Work items

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

   The dropdown list shows work item field name suggestions that match user input. These suggestions help you complete the search faster. For example, a search such as **tags:Critical** finds all work items tagged 'Critical'. 

3. Add more filters to further narrow your search, and use Boolean operators to combine terms if necessary. For example, **a: Chris t: Bug s: Active** finds all active bugs assigned to a user named Chris.

4. Narrow your search to specific types and states, by using the drop-down selector lists at the top of the results page.
5. Widen your search across all projects, or narrow it to specific types and states. Use the filter to show the selector lists.

   ![Showing the filter lists](media/shared/show-filters.png)    

6. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

   ![Selector drop-down lists](media/work-item-search-get-started/area-selectors.png)    

7. Sort the results as you need using the drop-down list of field names, work item types, or by relevance.

   ![Sort drop-down list](media/work-item-search-get-started/sort-order.png)    

8. Quickly [search for code](functional-code-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

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

   The dropdown list shows work item field name suggestions that match user input. These suggestions help you complete the search faster. For example, a search such as **tags:Critical** finds all work items tagged 'Critical'. 

3. Add more filters to further narrow your search, and use Boolean operators to combine terms if necessary. For example, **a: Chris t: Bug s: Active** finds all active bugs assigned to a user named Chris.

4. Narrow your search to specific types and states, by using the drop-down selector lists at the top of the results page.
5. Widen your search across all projects, or narrow it to specific types and states. Use the filter to show the selector lists.

   ![Showing the filter lists](media/shared/show-filters.png)    

6. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

   ![Selector drop-down lists](media/work-item-search-get-started/area-selectors.png)    

7. Sort the results as you need using the drop-down list of field names, work item types, or by relevance.

   ![Sort drop-down list](media/work-item-search-get-started/sort-order.png)    

8. Quickly [search for code](functional-code-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

   ![Search for code or wiki containing the same search string](media/work-item-search-get-started/view-code-search.png)

::: moniker-end

### Code

The search page shows a list of the matching code files. The selected file has all instances of the search string highlighted. If you see a list of work items, ensure **Code** is selected in the top left.
	
  :::image type="content" source="media/get-started/code-search-example.png" alt-text="Code search results example":::

1. Assemble more complex search string using the operators and functions listed in the drop-down menu. Select the filter function or code type that you want to include in your search string from the list. The,n enter the criteria value.

   :::image type="content" source="media/get-started/code-search-filters.png" alt-text="Code search bar":::

You can use the code type search functions with files written in C#, C, C++, Java, and Visual Basic.NET. You can also use proximity operators like NEAR, BEFORE, and AFTER to search for files in the vicinity of a term. See the following examples.

|**Usage**  |**Example**  |
|---------|---------|
|Find all instances of "ToDo" comments in your code.   | select `comment:` and enter `todo`        |
|Search in specific locations, such as within a particular path.    |  use a search string such as `Driver path:MyShuttle/Server`    |
|Search for files by name, such as `Driver file:GreenCabs.cs`, or just by file extension.    |The search string `error ext:resx` could be useful when you want to review all error strings in your code. Even if your plain text search string matches part of a filename, the file appears in the list of found files.         |
|Combine two or more words by using Boolean operators.   | `validate OR release`        |
|Find an exact match to a set of words by enclosing your search terms in double-quotes.   |  `"Client not found"`       |

1. Widen your search to all projects or your entire organization. Narrow your search to specific areas and types of code by selecting from the lists at the top of the page.

   ![Use drop-down lists to widen or narrow your search](media/code-search-get-started/select-projects.png)

2. Use the tabs in the results page to view the history of the file and to compare versions of the file.

   ![Use tabs to view history and compare files](media/code-search-get-started/compare-tab.png)

3. Choose the filename link at the top of this column to open the file in a new Code Explorer window.

   ![Open the file in Code Explorer](media/code-search-get-started/open-in-code-explorer.png)

4. Quickly [search for work items](functional-work-item-search.md) containing the same search string, or search for the same string in your [project's wiki](../wiki/search-wiki.md).

   ![Search for work items or wiki containing the same search string](media/code-search-get-started/open-workitem.png)

### Packages

The Views filter only appears if a single feed is selected from Feeds filter. Use this filter to show the selector lists.

Select :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **filter** and the function that you want to include in your search string from the list. Then, enter your criteria. 

:::image type="content" source="media/shared/show-filters.png" alt-text="Show filter panel button.":::

Add more criteria by using the operators and functions listed in :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **view options**.

## Other search functions

In the following table, you find some other search functions.

| **Non-search box task**                      | **Action**                                                             |
|----------------------------------------------|------------------------------------------------------------------------|
| Find an organization setting                 | Go to your organization and select **Organization settings**.           |
| Find a project setting                       | Go to your project and select **Project settings**.                     |
| Find a user setting                         | Go to your **User settings page**.                                     |
| Find a user                                  | Go to your organization and select **Organization settings** > **Users**, and then enter the name in the filter box.   |
| Find an organization                         | Scroll through the left side of your screen, which lists all organizations.      |
| Find a project                               | Go to your organization, and then enter the project name in the Filter projects box.   |
| Install Code Search                          | Go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search) to install Code Search.   |
| View file history and compare versions       | Go to **Repos** > **Files**, highlight your file, and then select **History**.              |

## Next steps

> [!div class="nextstepaction"]
> [Functional work item search](functional-work-item-search.md) or
> [Functional code search](functional-code-search.md) or
> [Functional artifact or package search](functional-package-search.md)

## Related articles
* [Code Search blog posts](https://devblogs.microsoft.com/devops/?s=code+search&submit=%EE%9C%A1)
* [Work item search blog posts](https://devblogs.microsoft.com/devops/?s=work+item+search&submit=%EE%9C%A1)
* [Search wiki](../wiki/search-wiki.md)
