---
title: Get started with Search in Azure DevOps
description: Quickly search within Azure DevOps across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 03/08/2021
monikerRange: '>= tfs-2017'
---

# Get started with Search

[!INCLUDE [version-header](../../includes/version-tfs-2017-through-vsts.md)]

The Search function and extensions available for Azure DevOps enable you to easily search across all the projects, teams, and repositories to which you have access. You can find an at-a-glance look at all of the [features of Search](#features-for-search) further in this article.

::: moniker range=">= tfs-2018"  
With the search box, you can quickly find the following content:
- work item
- code
- artifact
- wiki
::: moniker-end  

::: moniker range="tfs-2017"  
With the search box, you can quickly find work item and code content.  
::: moniker-end

## Prerequisites

- Every user can use the basic Search function, which includes work item and wiki Search.
- You must be a Stakeholder to perform semantic searches on work items, wiki, and packages.

## Start searching with a keyword

A keyword search is the most basic type of search to get started. Enter a word enclosed with double quotes, and then select _Enter_ or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search. You can also search for a phrase by enclosing your search terms in double-quotes.

By default, the search box searches everything. You can narrow down your results and focus on what you need by using [Boolean operators](#narrow-search-results).

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type-tfs.png" alt-text="Search boxes in Azure DevOps":::

::: moniker-end

::: moniker range="< azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type.png" alt-text="Search boxes in TFS 2018 and earlier":::

::: moniker-end

> [!TIP]
> Searches aren't case-sensitive.

### Start searching from the Organization-Projects page

From your organization overview page, enter a keyword or phrase in the search box, and then select **Enter** or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search.

:::image type="content" source="media/get-started/start-search-from-org-project-page.png" alt-text="Starting search from organization projects page":::

### Start searching from the Project-Overview page

From your project overview page, enter a keyword or phrase in the search box, and then select **Enter** or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search.

:::image type="content" source="media/get-started/start-search-from-project-overview-page.png" alt-text="Start search from project overview page":::

### Start searching from a Boards page

Choose any Boards page, enter a keyword or phrase in the search box, and then select **Enter** or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search.

:::image type="content" source="media/get-started/start-search-from-boards.png" alt-text="Start search from Boards page":::

For more information about searching and filtering in Azure Boards, see [Filter backlogs, boards, and plans](../../boards/backlogs/filter-backlogs-boards-plans.md).

### Start searching from a Wiki page

When you search from Wiki, you automatically navigate to wiki search results. Text search across the wiki is supported by the search platform.

:::image type="content" source="../wiki/media/search/wiki-search-example-vert.png" alt-text="Start search from wiki page":::

For more information about searching wikis, see [Search Wiki](../wiki/search-wiki.md).

## Best practices for Search

### Work item search

- You can use a text search across all fields to efficiently locate relevant work items. This is useful when you are trying to, for example, search for all work items that had similar exception trace.
- You can also use the quick in-line search filters on any work item field to [narrow down to a list](#narrow-search-results) of work items in seconds. The dropdown list of suggestions helps complete your search faster.

#### Semantic search vs. managed work item queries

You have two ways to find and list work items: managed queries and semantic searches. If you are looking for a single work item, use the search box. If you want to generate a list of work items to triage, update, chart, or share with others, use a managed query.

> [!NOTE]    
> With semantic search, you search against a more fully indexed set of fields than that of managed queries.  

---
:::row:::
   :::column span="1":::
      **Use a managed query**
   :::column-end:::
   :::column span="1":::
      **Use a semantic search**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      - List items to perform bulk updates to fields  
      - Review work that's in progress or recently closed    
      - Triage work (set priority, review, update)  
      - Create a chart and add it to a dashboard    
      - Create a chart to get a count of items or sum a field    
      - Create a chart that shows a burndown or burnup over time   
      - View a tree of parent-child related work items   
      - List work items with link relationships    
      - List work items for a single project, multiple projects, or across all projects.    
   :::column-end:::
   :::column span="1":::
      - Find a specific work item using its ID or a keyword   
      - Find one or more work items across all projects in a fast, flexible manner  
      - Perform full text search across all work item fields  
      - Review work items assigned to a specific team member  
      - Search against specific work item fields to quickly narrow down a list of work items  
      - Determine what key words will support a managed search  
      - List work items for a single project, multiple projects, or across all projects.    
   :::column-end:::
:::row-end:::
---

To get started, see the following articles:  
- [View and run a query](../../boards/queries/view-run-query.md)
- [Use semantic search](../../boards/queries/search-box-queries.md)  
- [Define a query](../../boards/queries/using-queries.md)   

For specific managed query examples, see [Query quick reference, Example queries](../../boards/queries/query-index-quick-ref.md).  

### Code search

- You can use code type filters to search for specific kinds of code such as definitions, references, functions, comments, strings, namespaces, and more. You can use Code Search to narrow down your results to exact code type matches. This is useful when all you want to do is just get quickly to the implementation of, for example, an API your code might be taking dependency on.
- You can [narrow your search](#narrow-search-results) by using project, repository, path, file name, and other filter operators. This helps you achieve your desired results even faster. Start with a higher-level search if you don’t know where the results would be and keep filtering till you have a subset of results to browse through and work on.
- You can [use wildcards](#broaden-search-results) to widen your search and [Boolean operators](#broaden-search-results) to fine-tune it. This ensures you get to the results you desire even when you are not sure of the exact term you're looking for.
- When you find an item of interest, place the cursor on it and use the shortcut menu to quickly search for that text across all your projects and files. This helps you find more information about an item of interest faster and with minimal efforts.
- Similarly, you can also easily trace how your code works by using the shortcut menu to search for related items such as definitions and references – directly from inside a file or from the search results.

## Sort and view search results

### Sort and view work item results

You can use the following common inline search filters to quickly access common shortcuts:

* `a:` for **Assigned to:** 
* `c:` for **Created by:** 
* `s:` for **State** 
* `t:` for **Work item type**

For more information about how to sort and view search results for work items, see [View and filter work item results](functional-work-item-search.md#view-and-filter-work-item-results).

### Sort and view code results

Assemble more complex search string using the operators and functions listed in the drop-down menu. Select the filter function or code type that you want to include in your search string from the list, and then enter the criteria value.

For more information about how to sort and view search results for code, see [View and filter code results](functional-code-search.md#view-and-filter-code-results).

### Sort and view package results

You can search across all feeds, or narrow it to specific views and package types. The Views filter only appears if a single feed is selected from Feeds filter. Use this filter to show the selector lists.

For more information about how to sort and view search results for packages, see [View and filter package results](functional-package-search.md#sort-and-view-package-results).

## Narrow search results

Narrow your search by using Boolean operators to combine search criteria. You can combine multiple search criteria using `AND`, `OR`, or `NOT`. 

Use parentheses to specify the precedence of the operations when you use more than one Boolean operator. By default, a search combines all the words you enter using 
the `AND` operator so that it returns only items that contain all of the words you entered.

For more information about how to narrow your search results, see the following articles:

- [Narrow your work item search](functional-work-item-search.md#narrow-your-search-with-boolean-operators)
- [Narrow your code search](functional-code-search.md#narrow-your-search-by-using-boolean-operators)
- [Narrow your artifacts or packages search](functional-package-search.md#narrow-your-search-by-using-boolean-operators)

## Broaden search results

Use the wildcard characters `*` and `?` to broaden your search criteria. You can use more than one `?` wildcard to match more than one character. 

For more information about how to broaden your search results, see the following articles:

- [Broaden your work item search](functional-work-item-search.md#broaden-your-search-with-wildcards)
- [Broaden your code search](functional-code-search.md#broaden-your-search-by-using-wildcards)
- [Broaden your artifacts or packages search](functional-package-search.md#broaden-your-search-by-using-wildcards)

### Search vs. query

Work Item queries generate a list of work items based on the filter criteria you provide. You can create queries from the web portal or from a supported client, such as Visual Studio Team Explorer and Team Explorer Everywhere. Also, you can open a query in Excel to perform bulk additions and modifications. For more information about queries, see [Define a query](../../boards/queries/using-queries.md)

### Search vs. filter

Searching begins from nothing and adds to a list of results based on criteria that matches. Filtering begins from the full list of results and eliminates from that list based on which results do not match certain criteria. For more information about filters, see [Apply keyword and ID filters](../../boards/backlogs/filter-backlogs-boards-plans.md#apply-keyword-and-id-filters).


## Non-search box tasks

In the following table, you find some other search functions.

| **Non-search box task**                      | **Action**                                                             |
|----------------------------------------------|------------------------------------------------------------------------|
| Find an organization setting                 | Go to your organization and select **Organization settings**.           |
| Find a project setting                       | Go to your project and select **Project settings**.                     |
| Find a user settings                         | Go to your **User settings page**.                                     |
| Find a user                                  | Go to your organization and select **Organization settings** > **Users**, and then enter the name in the filter box.   |
| Find an organization                         | Scroll through the left side of your screen, which lists all organizations.      |
| Find a project                               | Go to your organization, and then enter the project name in the Filter projects box.   |
| Install Code Search                          | Go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search) to install Code Search.   |
| View file history and compare versions       | Go to **Repos** > **Files**, highlight your file, and then select **History**.              |

## Features for Search

---  
:::row:::
   :::column span="1":::
      <br/>**Search feature** 
   :::column-end:::
   :::column span="2":::
      **Usage**
   :::column-end:::
   :::column span="2":::
      <br/>**Example**
   :::column-end:::
:::row-end:::
---
::: moniker range=" azure-devops"
:::row:::
   :::column span="1":::
      <br/>**Proximity search** 
   :::column-end:::
   :::column span="2":::
      You can search for files based on the term vicinity using proximity operators: NEAR, BEFORE, and AFTER (must be uppercase). By default, proximity search looks for terms within five tokens distance.
   :::column-end:::
   :::column span="2":::
      <br/>BEFORE: term1 BEFORE term2 - returns all files where term1 occurs BEFORE term2 within a distance of five tokens between them. AFTER: term1 AFTER term2: returns the same results as term2 BEFORE term1. NEAR: term1 NEAR term2: returns all files where term1 is within five token distance from term2 in any direction. term1 NEAR term2 returns the same results as term1 BEFORE term2 OR term2 BEFORE term1.
   :::column-end:::
:::row-end:::
::: moniker-end
---
::: moniker range=" >= azure-devops-2020"
:::row:::
   :::column span="1":::
      <br/>**Quick navigation** 
   :::column-end:::
   :::column span="2":::
      Search for boards, backlogs, queries, and sprint from the instant search box.
   :::column-end:::
   :::column span="2":::
      <br/>...
   :::column-end:::
:::row-end:::
::: moniker-end
---
:::row:::
   :::column span="1":::
      <br/>**Instant search for work items** 
   :::column-end:::
   :::column span="2":::
      Enter the work item ID in the search box.
   :::column-end:::
   :::column span="2":::
      <br/>The work item opens in a modal dialog, providing access to read and edit the work item.
   :::column-end:::
:::row-end:::
::: moniker-end
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      <br/>**Keyword searches** 
   :::column-end:::
   :::column span="2":::
      Search for two keywords with *OR*
   :::column-end:::
   :::column span="2":::
      <br/>validate OR release
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Exact match** 
   :::column-end:::
   :::column span="2":::
      Enclose a keyword or phrase in double-quotes
   :::column-end:::
   :::column span="2":::
      <br/>"Client not found"
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Work item ID** 
   :::column-end:::
   :::column span="2":::
      enter *work item #* 
   :::column-end:::
   :::column span="2":::
      <br/>8765921 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Wildcard searches** 
   :::column-end:::
   :::column span="2":::
      `alpha?version` finds work items containing words that start with *alpha*, have any alphanumeric character next, and end with version. `Browser*` finds work items containing words that start with Browser. 
   :::column-end:::
   :::column span="2":::
      <br/>*alpha1version* and *alphaXversion*, *BrowserEdge*, *BrowserIE* and *BrowserFirefox* 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Use wildcards in combination** 
   :::column-end:::
   :::column span="2":::
      You can use wildcard characters anywhere in your search string except as a prefix.
   :::column-end:::
   :::column span="2":::
      <br/>You can't use a search query such as *RequestHandler. However, you can use prefix wildcards with the other search filter functions; for example, the search query strings area:*mobile and tags:*Browser are valid. CodeSenseHttp* finds files containing words that start with CodeSenseHttp, such as CodeSenseHttpClient and CodeSenseHttpClientTest. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Boolean operator searches** 
   :::column-end:::
   :::column span="2":::
      Find two or more keywords using Boolean operators. AND is the default operator, and so this is equivalent to the search string validate revisit.
   :::column-end:::
   :::column span="2":::
      <br/>validate AND revisit finds files that contain both the words validate and revisit. validate OR revisit finds files that contain either of the words validate or revisit.
· validate NOT revisit finds files that contain the word validate but not the word revisit.
·         (validate NOT revisit) OR "release delayed" finds files that contain the word validate but not the word revisit or files that contain the phrase release delayed. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Search across projects** 
   :::column-end:::
   :::column span="2":::
      Search across all the projects, teams, and repositories to which you have access. 
   :::column-end:::
   :::column span="2":::
      <br/>Search box search 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Specific field search** 
   :::column-end:::
   :::column span="2":::
      Search for a specific field within a work item. 
   :::column-end:::
   :::column span="2":::
      <br/>Search box within work item 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Search discussions** 
   :::column-end:::
   :::column span="2":::
      ... 
   :::column-end:::
   :::column span="2":::
      <br/>... 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Functions to find specific types of code** 
   :::column-end:::
   :::column span="2":::
      ... 
   :::column-end:::
   :::column span="2":::
      <br/>... 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Search for commits in branches** 
   :::column-end:::
   :::column span="2":::
      ... 
   :::column-end:::
   :::column span="2":::
      <br/>... 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Special character searches** 
   :::column-end:::
   :::column span="2":::
      You must escape the special characters `(`, `)`, `[`, `]`, `:`, `*`, and `?` by enclosing them in a phrase delimited with double-quotes " and ". You can include special characters in a search string, or search specifically for special characters, according to the following rules: CodeA23?R finds files containing words that start with CodeA23, have any alphanumeric character next, and end with R. For example, CodeA234R and CodeA23QR.   Search for any special character that is not a part of the query language, (for example, excluding the characters : ( )[]*?) as either a simple search string or a phrase search string. For example, react-redux or "react-redux" will produce the same results. Search for a special character that is a part of the query language (: () []*?) by enclosing the search string within double-quotes. 
   :::column-end:::
   :::column span="2":::
      <br/> `"flatten()"` will find the literal string *flatten()*. Search for a literal occurrence of the double-quote character *"* by preceding it with the escape character `\` and enclosing the search string in double-quotes. `"\"react-redux\""` will find the literal string "react-redux". 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Expanded search box with filters and operators** 
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
:::row-end:::
::: moniker-end
---
:::row:::
   :::column span="1":::
      <br/>**Search for boards, backlogs, queries, and sprint from the instant search box** 
   :::column-end:::
   :::column span="2":::
      Access your recently visited boards, backlogs, queries and sprints from the search box by activating the search box in Azure Boards. You can also search for the boards, backlogs, queries and sprints across your project by typing the board name in the search box.
   :::column-end:::
   :::column span="2":::
      Enter board name in the search box.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Open work items from search** 
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Search for a file or folder in commit history** 
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Scope code search using path filters** 
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
   :::column span="2":::
      ...
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Quick navigation in Azure Boards search** 
   :::column-end:::
   :::column span="2":::
      Search and find any item within Azure Boards without having to switch tabs for your search.
   :::column-end:::
   :::column span="2":::
      Type the keyboard shortcut `/` on Azure Boards
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Access recently visited wiki pages** 
   :::column-end:::
   :::column span="2":::
      Access recently visited wiki pages by clicking on the search box in Wiki hub.
   :::column-end:::
   :::column span="2":::
      invoke the search box by typing the keyboard shortcut `/`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      <br/>**Instant search for wiki** 
   :::column-end:::
   :::column span="2":::
      View the wiki search results as you type in the search box.
   :::column-end:::
   :::column span="2":::
      *getting started* results in all the wiki pages that contain *getting started*.
   :::column-end:::
:::row-end:::
---

[!INCLUDE [search-limitations](includes/search-limitations.md)]

## Next steps

> [!div class="nextstepaction"]
> [Search work items](functional-work-item-search.md) or
> [Search code](functional-code-search.md) or
> [Search artifacts or packages](functional-package-search.md)


## Related articles

* [Search your Wiki](https://blogs.msdn.microsoft.com/devops/2017/12/01/announcing-public-preview-of-wiki-search/)
* [Code Search blog posts](https://devblogs.microsoft.com/devops/?s=code+search&submit=%EE%9C%A1)
* [Code Search on Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search)
* [Work item search blog posts](https://devblogs.microsoft.com/devops/?s=work+item+search&submit=%EE%9C%A1)
* [Search wiki](../wiki/search-wiki.md)
