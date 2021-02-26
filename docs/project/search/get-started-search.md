---
title: Get started with Search in Azure DevOps
description: Quickly search within Azure DevOps across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/25/2021
monikerRange: '>= tfs-2017'
---

# Get started with Search

[!INCLUDE [version-header](../../includes/version-tfs-2017-through-vsts.md)]

The Search function and extensions available for Azure DevOps enable you to easily search across all the projects, teams, and repositories to which you have access. You can find an at-a-glance look at all of the [features of Search](#search-features) further in this article.

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

A keyword search is the most basic type of search to get started. Enter a word enclosed with double quotes, and then select _Enter_ or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search. You can also search for a phrase by enclosing your search terms in double-quotes.

By default, the search box searches everything. You can narrow down your results and focus on what you need by using [Boolean operators](#narrow-search-results).

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type-tfs.png" alt-text="Search boxes in Azure DevOps":::

::: moniker-end

::: moniker range="< azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type.png" alt-text="Search boxes in TFS 2018 and earlier":::

::: moniker-end

> [!TIP]
> Searches aren't case-sensitive.

## Sort and view search results

### Work items

You can use the following common inline search filters to quickly access common shortcuts:

* `a:` for **Assigned to:** 
* `c:` for **Created by:** 
* `s:` for **State** 
* `t:` for **Work item type**

For more information about how to sort and view search results for work items, see [View and filter work item results](functional-work-item-search.md#view-and-filter-work-item-results).

### Code

Assemble more complex search string using the operators and functions listed in the drop-down menu. Select the filter function or code type that you want to include in your search string from the list, and then enter the criteria value.

For more information about how to sort and view search results for code, see [View and filter code results](functional-code-search.md#view-and-filter-code-results).

### Packages

You can search across all feeds, or narrow it to specific views and package types. The Views filter only appears if a single feed is selected from Feeds filter. Use this filter to show the selector lists.

For more information about how to sort and view search results for packages, see [View and filter package results](functional-package-search.md#view-and-filter-package-results).

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

::: moniker-end

## Features for Search

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
- Work Item Search (built-in)
- Wiki Search (built-in)

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
> [Search work items](functional-work-item-search.md) or
> [Search code](functional-code-search.md) or
> [Search artifacts or packages](functional-package-search.md)


## Related articles

* [Search your Wiki](https://blogs.msdn.microsoft.com/devops/2017/12/01/announcing-public-preview-of-wiki-search/)
* [Code Search blog posts](https://devblogs.microsoft.com/devops/?s=code+search&submit=%EE%9C%A1)
* [Code Search on Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search)
* [Work item search blog posts](https://devblogs.microsoft.com/devops/?s=work+item+search&submit=%EE%9C%A1)
* [Search wiki](../wiki/search-wiki.md)
* [Adhoc vs managed work item queries](../../boards/queries/adhoc-vs-managed-queries.md?toc=/azure/devops/project/search/toc.json&bc=/azure/devops/project/search/breadcrumb/toc.json)
* [About managed queries, Ad hoc versus managed queries](../../boards/queries/about-managed-queries.md#ad-hoc-v-managed)?toc=/azure/devops/project/search/toc.json&bc=/azure/devops/project/search/breadcrumb/toc.json)
