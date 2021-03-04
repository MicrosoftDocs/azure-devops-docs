---
title: Get started with Search in Azure DevOps
description: Quickly search within Azure DevOps across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 03/04/2021
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

## Extensions for Search

The following extensions for Search are available in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/):

- [Create Azure Search Objects](https://marketplace.visualstudio.com/items?itemName=mikaelsnavy.azdo-azure-search): Help deploy Azure Search objects in your release pipelines. This enables definition and deployment of search objects in code.
- [Azure Search Extension](https://marketplace.visualstudio.com/items?itemName=joalmeid.azsearch-ado-extension): Azure Cognitive Search Extension for your CI/CD related pipelnes on Azure Devops.
- [Azure Search Extension for Azure Pipelines](https://marketplace.visualstudio.com/items?itemName=ashitabh.azsearch-ado-extension-V2): Azure Cognitive Search Extension for your CI/CD related pipelines on Azure Devops.
- [Find similar work items](https://marketplace.visualstudio.com/items?itemName=tschmiedlechner.find-similar-workitems): Adds an additional tab to the workitem edit form to search existing workitems that are semantically similar to the current one.
::: moniker range=">= tfs-2017 < azure-devops"  
- Work Item Search (built-in)
- Wiki Search (built-in)
::: moniker-end
::: moniker range=">= azure-devops-2019" 
- [Code Search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search): Fast, flexible, and accurate search across all your code.
- [Azure Paths Search](https://marketplace.visualstudio.com/items?itemName=wavemotionio.ado-areapaths): Search the area paths and iteration paths in Azure DevOps.
- [GitSense](https://marketplace.visualstudio.com/items?itemName=gitsense.gitsense): Boost productivity and work better together with always relevant searches, advanced Git browsing, smarter code reviews and more.
- [Wiql Editor](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor): Search work items with wiql queries.
- [ConfigTransformation](https://marketplace.visualstudio.com/items?itemName=saeidbabaei.configtransformsaeid): Quickly and easily transform your configuration files.
- [TimeBox Integration Proof of Concept](https://marketplace.visualstudio.com/items?itemName=NSerioVSMPublisher.timebox-prof-of-concept-integration): Tools to help you and your team do great things everyday.
- [AzDo Team Report](https://marketplace.visualstudio.com/items?itemName=AravindMungara.vsts-extensions-myExtensions): Display test results by Area. Includes trend, search test results on various releases, view history, and view error logs.
- [Pull Request Search](https://marketplace.visualstudio.com/items?itemName=ottostreifel.pull-request-search-onprem): Rich pull request search experience.
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
* [About managed queries, Ad hoc versus managed queries](../../boards/queries/about-managed-queries.md#ad-hoc-v-managed?toc=/azure/devops/project/search/toc.json&bc=/azure/devops/project/search/breadcrumb/toc.json)
