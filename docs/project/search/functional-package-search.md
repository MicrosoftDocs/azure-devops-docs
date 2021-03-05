---
title: Advanced package search syntax
titleSuffix: Azure Artifacts
description: Advanced options for using Package Search across all your feeds in an Azure DevOps organization.
ms.assetid: 936AA33C-4AEF-461E-B49B-C98A59098282
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/04/2021
---

# Functional artifact or package search

[!INCLUDE [version-header](../../includes/version-vsts-only.md)]

Package Search is automatically available to users of Azure DevOps Services. By using Package Search, you can do the following tasks:

- **Search package by title and description**: Quickly and easily find relevant packages by using free text search on title and description. Narrow your search by using Boolean operators and combine search criteria. 

  :::image type="content" source="media/shared/pkg-srch-u2.png" alt-text="Web portal package search":::

- **Search across all of your organization feeds**: Search feeds across the organization. Narrow your search by using feed, view, and package type filters. Use wildcards to widen your search and 
  Boolean operators to fine-tune it. 

  :::image type="content" source="media/shared/pkg-srch-u1.png" alt-text="Web portal package search across organization feeds":::

## Prerequisites

You must be a Stakeholder to perform semantic searches on work items, wiki, and packages.

<a name="syntaxdetails"></a>

## Start searching packages or artifacts

Start searching across all your packages and artifacts inside your organization.

1. Open the **Azure Artifacts** section in Azure DevOps (see [Web portal navigation](../navigation/index.md)).

2. Choose ![start search icon](media/shared/start-search-icon-new.png) **Search** at the top right of the window to show the search textbox.

3. Enter a search string in the textbox, and select *Enter* or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search.

Search results display with matches to your query shown in bold. 
The following example shows a full text search that uses simple search strings for words or phrases. 

:::image type="content" source="media/shared/pkgsrch-results.png" alt-text="Package search results":::

### Sort and view package results

1. Widen your search across all feeds, or narrow it to specific views and package types. The Views filter only appears if a single feed is selected from Feeds filter.
   Use the filter to show the selector lists.

	:::image type="content" source="media/shared/pkgsrch-results-filtericon.png" alt-text="Showing the filter lists":::   

2. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

	:::image type="content" source="media/shared/pkgsrch-results-filters.png" alt-text="Selector drop-down lists":::

3. By switching pivots, quickly [search code](functional-code-search.md) containing the same search string, or search for the same string in your [wikis](../wiki/search-wiki.md), [work items](functional-work-item-search.md) or [packages](#start-searching-packages-or-artifacts).

	:::image type="content" source="media/shared/pkgsrch-other.png" alt-text="Search for code or wiki or work items containing the same search string":::

## Syntax for simple and compound searches

Use simple search strings for words or phrases. The default is a whole word search; for example, a search for "config" won't find instances of the word "configuration". However, searches are _not_ case-sensitive.

Words separated by spaces, and not wrapped in double-quotes, are treated as separate search terms and the search will expect to find an occurrence of all the words (in other words, it assumes the `AND` operator between words).

By default, you search within all feeds of the organization, no matter which project you're in. 

## Narrow your search by using Boolean operators
 
Narrow your search by using Boolean operators to combine search criteria. Combine multiple search criteria using `AND`, `OR`, or `NOT` (they must be 
uppercase). 

Use parentheses to specify the precedence of the operations when you use more than one Boolean operator. By default, a search combines all the words you enter using the `AND` operator so that it only returns files that contain all of the words you entered. 

For example:

* `xml AND parser` finds packages that contain both the words **xml** and 
  **parser**. `AND` is the default operator, and so it's equivalent to 
  the search string `xml parser`.
* `xml OR parser` finds packages that contain either of the words **xml** or **parser**.
* `xml NOT parser` finds packages that contain the word **xml** but not the word **parser**.
* `(xml NOT parser)` OR `lib` finds packages that contain the word **xml**
  but not the word **parser** or packages that contain the word **lib**.

## Broaden your search by using wildcards

Use the wildcard character `*` and `?` to broaden your search criteria. 

For example:

* `xmlparser*` finds packages containing words that start with **xmlparser**, 
  such as **xmlparsersdk** and **xmlparserlib**.

* `mypackage?` finds packages containing words that start with **mypackage** and have any one alphanumeric 
  character next, such as **mypackage1**, **mypackage2** and **mypackage3**

You can use more than one wildcard to match more than one character.

### Search for phrases

To find an exact match to a set of words, enclose your search terms in double-quotes to do a _phrase search_. For example, `"package for markup files"`.

Within a phrase, Boolean operators are treated as literal text.

## Search Packages with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Package Search with REST API, see [Fetch Package Search Results](https://docs.microsoft.com/rest/api/azure/devops/search/package%20search%20results/fetch%20package%20search%20results?preserve-view-not-set).

[!INCLUDE [search-limitations](includes/search-limitations.md)]

## Next steps

> [!div class="nextstepaction"]
> [What are feeds?](../../artifacts/concepts/feeds.md)

## Related articles

* [Search code](functional-code-search.md)
* [Search work items](functional-work-item-search.md)
* [Search wiki](../wiki/search-wiki.md)
