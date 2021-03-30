---
title: Get started with Search in Azure DevOps
description: Quickly search within Azure DevOps across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 03/30/2021
monikerRange: '>= tfs-2017'
---

# Get started with Search

[!INCLUDE [version-header](../../includes/version-tfs-2017-through-vsts.md)]

The Search function and extensions available for Azure DevOps enable you to easily search across all the projects, teams, and repositories to which you have access. You can find an at-a-glance look at all of the [semantic Search features](#semantic-search-features) further in this article.

::: moniker range=">= tfs-2018"  
With semantic search, you can quickly find code files, work items, wiki pages, or packages based on a keyword, wildcards, and other supported semantic search filters.
::: moniker-end  

::: moniker range="tfs-2017"  
With semantic search, you can quickly find code files and work items based on a keyword, wildcards, and other supported semantic search filters.
::: moniker-end

## Prerequisites

- Every user can use the basic Search function, which includes work item and wiki Search.
- You must be a Stakeholder to perform semantic searches on work items, wiki, and packages.

## Start searching with a keyword

A keyword search is the most basic type of search to get started. Enter a word enclosed with double quotes, and then select _Enter_ or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search. You can also search for a phrase by enclosing your search terms in double-quotes.

By default, the search box searches everything. You can narrow down your results and focus on what you need by using [Boolean operators](#narrow-your-search-results).

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
      *alpha1version* and *alphaXversion*, *BrowserEdge*, *BrowserIE* and *BrowserFirefox* 
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
      You can't use a search query such as *RequestHandler. However, you can use prefix wildcards with the other search filter functions; for example, the search query strings area:*mobile and tags:*Browser are valid. CodeSenseHttp* finds files containing words that start with CodeSenseHttp, such as CodeSenseHttpClient and CodeSenseHttpClientTest. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Boolean operators** 
   :::column-end:::
   :::column span="2":::
      Find two or more keywords using Boolean operators. AND is the default operator, and so this is equivalent to the search string validate revisit.
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
      You must escape the special characters `(`, `)`, `[`, `]`, `:`, `*`, and `?` by enclosing them in a phrase delimited with double-quotes " and ". You can include special characters in a search string, or search specifically for special characters, according to the following rules: CodeA23?R finds files containing words that start with CodeA23, have any alphanumeric character next, and end with R. For example, CodeA234R and CodeA23QR.   Search for any special character that is not a part of the query language, (for example, excluding the characters : ( )[]*?) as either a simple search string or a phrase search string. For example, react-redux or "react-redux" will produce the same results. Search for a special character that is a part of the query language (: () []*?) by enclosing the search string within double-quotes. 
   :::column-end:::
   :::column span="2":::
      `"flatten()"` will find the literal string *flatten()*. Search for a literal occurrence of the double-quote character *"* by preceding it with the escape character `\` and enclosing the search string in double-quotes. `"\"react-redux\""` will find the literal string "react-redux". 
   :::column-end:::
:::row-end:::
---

## Choose your semantic search starting page

The features available to you depend on the page that you initiate your search from.

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

## Narrow your search results

Narrow your search by using Boolean operators to combine search criteria. You can combine multiple search criteria using `AND`, `OR`, or `NOT`. 

Use parentheses to specify the precedence of the operations when you use more than one Boolean operator. By default, a search combines all the words you enter using 
the `AND` operator so that it returns only items that contain all of the words you entered.

## Broaden your search results

Use the wildcard characters `*` and `?` to broaden your search criteria. You can use more than one `?` wildcard to match more than one character. 

### Filter results and add more criteria

Select :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **filter** and the function that you want to include in your search string from the list. Then, enter your criteria. 

:::image type="content" source="media/shared/show-filters.png" alt-text="Show filter panel button.":::

Add more criteria by using the operators and functions listed in :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **view options**.

## Sort and view results

You can search across all feeds, or narrow it to specific views and package types. The Views filter only appears if a single feed is selected from Feeds filter. Use this filter to show the selector lists.

For more information about how to sort and view search results for packages, see [View and filter package results](functional-package-search.md#sort-and-view-package-results).


## Additional search functions

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

## Next steps

> [!div class="nextstepaction"]
> [Functional work item search](functional-work-item-search.md) or
> [Functional code search](functional-code-search.md) or
> [Functional artifact or package search](functional-package-search.md)

## Related articles
* [Code Search blog posts](https://devblogs.microsoft.com/devops/?s=code+search&submit=%EE%9C%A1)
* [Work item search blog posts](https://devblogs.microsoft.com/devops/?s=work+item+search&submit=%EE%9C%A1)
* [Search wiki](../wiki/search-wiki.md)
