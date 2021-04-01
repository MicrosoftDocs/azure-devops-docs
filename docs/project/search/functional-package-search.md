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
ms.date: 04/01/2021
---
# Functional artifact or package search

[!INCLUDE [version-header](../../includes/version-vsts-only.md)]

By using Package Search, you can do the following tasks.

- **Search package by title and description**: Quickly and easily find relevant packages by using free text search on title and description. [Narrow your search by using Boolean operators](get-started-search.md#packages) and combine search criteria. 

  :::image type="content" source="media/shared/pkg-srch-u2.png" alt-text="Web portal package search":::

- **Search across all of your organization feeds**: Search feeds across the organization. Narrow your search by using feed, view, and package type filters. [Use wildcards to widen your search](get-started-search.md#packages-1) and Boolean operators to fine-tune it. 

  :::image type="content" source="media/shared/pkg-srch-u1.png" alt-text="Web portal package search across organization feeds":::
## Prerequisites

Package Search is automatically available to users of Azure DevOps Services.

## Start searching packages or artifacts

Start searching across all your packages and artifacts inside your organization.

1. Open the **Azure Artifacts** section in Azure DevOps (see [Web portal navigation](../navigation/index.md)).

2. Choose ![start search icon](media/shared/start-search-icon-new.png) **Search** at the top right of the window to show the search textbox.

3. Enter a search string in the textbox, and select *Enter* or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search.

   Search results display with matches to your query shown in bold. The following example shows a full text search that uses simple search strings for words or phrases. 

   :::image type="content" source="media/shared/pkgsrch-results.png" alt-text="Package search results":::
### Sort and view package results

1. Widen your search across all feeds, or narrow it to specific views and package types. The Views filter only appears if a single feed is selected from Feeds filter.
   Use the filter to show the selector lists.

	:::image type="content" source="media/shared/pkgsrch-results-filtericon.png" alt-text="Showing the filter lists":::   

2. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

	:::image type="content" source="media/shared/pkgsrch-results-filters.png" alt-text="Selector drop-down lists":::

3. By switching pivots, quickly [search code](functional-code-search.md) that contains the same search string. Or, search for the same string in your [wikis](../wiki/search-wiki.md), [work items](functional-work-item-search.md), or [packages](#start-searching-packages-or-artifacts).

	:::image type="content" source="media/shared/pkgsrch-other.png" alt-text="Search for code or wiki or work items containing the same search string":::
## Syntax for simple and compound searches

- Use simple search strings for words or phrases. The default is a whole word search; for example, a search for "valid" won't find instances of the word "validation".
- Wrap each word in double-quotes to treat them as separate search terms.
- Separate words with spaces (not wrapped), so Search assumes the `AND` operator between the words.
- Escape the special characters, `(`,  `)`, `[`, `]`, `:`, `*`, and `?`, by enclosing them in a phrase delimited with double-quotes like `"` and `"`.

By default, you search within all feeds of the organization, no matter which project you're in. 

For more information about the following search functions, see [Get started with Search](get-started-search.md#semantic-search-features).
- Keyword
- Exact match
- Wildcard
- Wildcard in combination
- Boolean operators
- Proximity
- Special characters

## Search Packages with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Package Search with REST API, see [Fetch Package Search Results](https://docs.microsoft.com/rest/api/azure/devops/search/package%20search%20results/fetch%20package%20search%20results?preserve-view-not-set).
## Next steps

> [!div class="nextstepaction"]
> [What are feeds?](../../artifacts/concepts/feeds.md)

## Related articles

* [Get started with Search](get-started-search.md)
* [Search code](functional-code-search.md)
* [Search work items](functional-work-item-search.md)
* [Search wiki](../wiki/search-wiki.md)
* [Search FAQs](faq-search.yml)
