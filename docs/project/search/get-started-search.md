---
title: Semantic search - get started
titleSuffix: Azure DevOps
description: Quickly search within Azure DevOps across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.technology: devops-collab
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 04/14/2021
monikerRange: '>= tfs-2017'
---

# Get started with semantic search

[!INCLUDE [version-header](../../includes/version-tfs-2017-through-vsts.md)]

The Search function for Azure DevOps enables you to easily search across all the projects, teams, and repositories to which you have access.

::: moniker range=">= tfs-2018"

With semantic search, you can quickly find work items, code files, wiki pages, or packages based on a keyword, wildcards, and other supported semantic search filters.

::: moniker-end 

::: moniker range="tfs-2017"

With semantic search, you can quickly find work items and code files based on a keyword, wildcards, and other supported semantic search filters.

::: moniker-end

You can find an at-a-glance look at all of the [semantic search features](#semantic-search-features-usage-and-examples) further in this article.

## Prerequisites

- Every project member can use the semantic search functions, including project members granted Stakeholder, Basic, and higher levels of access.
- When searching across the organization or collection, only results for which a project member has access are listed.
- Stakeholder wiki search results are limited to provisioned wikis. Because published wikis require access to regular repositories, which Stakeholders don't have access to, results for published wikis don't appear in the search results. Similarly, Code search results don't appear for Stakeholders.

::: moniker range="<= azure-devops-2020"

> [!NOTE]
> For Code search, a Collection Administrator must [install the Code Search extension](install-configure-search.md).

::: moniker-end

## Start your search with a keyword

Start your search using a keyword. You can then apply other options, as needed, to broaden or narrow your search results.

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type-tfs.png" alt-text="Search boxes in Azure DevOps":::

::: moniker-end

::: moniker range="< azure-devops-2019"

:::image type="content" source="media/shared/title-bar-search-box-select-type.png" alt-text="Search boxes in TFS 2018 and earlier":::

::: moniker-end

> [!TIP]
> * If you get no results matching the input, try removing filters and retry the search. Broadening the search and after you view the search results, you can apply appropriate filters again and search again for relevant results.
> * Check for the spelling of your search terms. Currently Work item search doesn't support ignoring of users' spelling mistakes.
> * If there are lots of hits when you're using a wildcard search, such as when you're using a simple wildcard search string, you may see a message that no matching files are found. In this case, narrow your search to reduce the number of matches. Specify more characters of the word or words that you want to find, or add a condition or filter to limit the number of possible matches.
> Searches aren't case-sensitive.

## Semantic search features, usage, and examples

::: moniker range="azure-devops"

The following features apply to all searches, including work items, code, wikis, and packages.

::: moniker-end

::: moniker range="< azure-devops"

The following features apply to all searches, including work items, code, and packages.

::: moniker-end

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
      Search based on one or more keywords.
   :::column-end:::
   :::column span="2":::
      `validate` finds instances that contain the word *validate*.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Exact match** 
   :::column-end:::
   :::column span="2":::
      Search based on an exact match, enclosed in double-quotes.
   :::column-end:::
   :::column span="2":::
      `"Client not found"` finds instances that contain the exact phrase match *Client not found*.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Wildcard** 
   :::column-end:::
   :::column span="2":::
      - Add wildcard characters, `*` and `?`, to keywords to extend the search criteria. 
      - Add `*` at the end of a keyword to find items that start with the keyword. 
      - Add `?` in the middle to represent any alphanumeric character. 
      - Use wildcard characters anywhere in your search string except as a prefix. You can use prefix wildcards with the other search filter functions.
      - You can use more than one wildcard to match more than one character.
   :::column-end:::
   :::column span="2":::
      - `alpha?version` finds instances of alpha1version and alphaXversion. 
      - `Browser*` finds instances of BrowserEdge, BrowserIE, and BrowserFirefox. 
      - `CodeSenseHttp*` finds files containing words that start with *CodeSenseHttp*, such as CodeSenseHttpClient and CodeSenseHttpClientTest.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Boolean operators** 
   :::column-end:::
   :::column span="2":::
      - Find two or more keywords using Boolean operators: `AND`, `OR`, and `NOT` (must be uppercase).
      - Add parenthesis to clauses to support logical groupings.
      - Because `AND` is the default operator, an entry of two keywords with no operator is the same as an `AND` search.
   :::column-end:::
   :::column span="2":::
      - `Validate AND revisit` finds files that contain both the words *validate* and *revisit*. 
      - `Validate OR revisit` finds files that contain either of the words *validate* or *revisit*.
      - `Validate NOT revisit` finds files that contain the word *validate* but not the word *revisit*.
      - `(Validate NOT revisit) OR "release delayed"` finds files that contain the word *validate* but not the word *revisit* or files that contain the phrase *release delayed*. 
   :::column-end:::
:::row-end:::
---
::: monikerRange="azure-devops"
:::row:::
   :::column span="1":::
      **Proximity** 
   :::column-end:::
   :::column span="2":::
      - Search for files based on vicinity using proximity operators: NEAR, BEFORE, and AFTER (must be uppercase). 
      - By default, proximity search looks for terms within five tokens distance.
   :::column-end:::
   :::column span="2":::
      - `term1 BEFORE term2` returns all files where term1 occurs BEFORE term2 within a distance of five tokens between them. 
      - `term1 AFTER term2` returns the same results as term2 BEFORE term1. 
      - `term1 NEAR term2` returns all files where term1 is within five token distance from term2 in any direction. `term1 NEAR term2` returns the same results as `term1 BEFORE term2` OR `term2 BEFORE term1`.
   :::column-end:::
:::row-end:::
::: moniker-end
---
:::row:::
   :::column span="1":::
      **Special characters** 
   :::column-end:::
   :::column span="2":::
      - Escape the special characters `(`, `)`, `[`, `]`, `:`, `*`, and `?` by enclosing them in a phrase delimited with double-quotes. 
      - Include special characters in a search string, or search specifically for special characters, according to the following rules: 
        - CodeA23?R finds files containing words that start with CodeA23
        - Have any alphanumeric character next, and end with R. For example, CodeA234R and CodeA23QR.   
      - Search for any special character that isn't a part of the query language.   
   :::column-end:::
   :::column span="2":::
      - `"flatten()"` finds the literal string *flatten()*. Search for a literal occurrence of the double-quote character *"* by preceding it with the escape character `\` and enclosing the search string in double-quotes. 
      - `"\"react-redux\""` finds the literal string "react-redux". 
   :::column-end:::
:::row-end:::
---

## Choose your semantic search starting page

You can start a search from one of the following pages:

- [**Projects**](#start-your-search-from-the-projects-page) page for the organization, starts a search across all projects.
- [**Project**](#start-your-search-from-the-project-overview-page) overview page, automatically applies a filter to search within the selected project.
- [**Boards**](#start-your-search-from-a-boards-page) page for a project, automatically displays recent work items and backlogs accessed by the user.
- **Repos**, **Pipelines**, **Test Plans**, or an **Artifacts** page for a project, automatically displays functional filters for code searches.
- [**Wiki**](#start-your-search-from-a-wiki-page) page for a project, automatically access recent wiki pages access by the user.

> [!TIP]
> Use the content type filter to access a page that you recently opened.
> :::image type="content" source="media/get-started/search-page-filter.png" alt-text="Search page filter":::

## Start your search from the Projects page

From your organization's Overview page, enter a keyword or phrase in the semantic search, and then select **Enter** or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search.

:::image type="content" source="media/get-started/start-search-from-org-project-page.png" alt-text="Starting search from organization projects page":::

## Start your search from the Project-Overview page

From your project's Overview page, enter a keyword or phrase in the semantic search, and then select **Enter** or choose :::image type="icon" source="media/shared/start-search-icon-new.png" border="false"::: start search.

:::image type="content" source="media/get-started/start-search-from-project-overview-page.png" alt-text="Start search from project overview page":::

## Start your search from a Boards page

Start searching across all your work items over all your projects with a keyword or phrase. Work item search includes all work item types, including test-related and custom work item types.

::: moniker range=">= azure-devops-2019"

1. Choose any **Boards** page, enter a keyword or phrase in the semantic search, and select **Enter** or choose :::image type="icon" source="../search/media/shared/start-search-icon.png" border="false"::: start search. 

   :::image type="content" source="media/get-started/work-item-search-vert.png" alt-text="Project semantic search":::

2. Search results display in a snippet view where the matches found are shown in bold.

   :::image type="content" source="media/work-item-search-get-started/results-matching.png" alt-text="Search matching results":::

   This full text search uses simple search strings for words or phrases. Work item search matches derived forms of your search terms; for example, a search for
   "check" also finds instances of the word "checked" and "checking".

3. Select a snippet of a work item to display it in the window on the right side of your screen. 
  
4. Open the search results in a new browser tab from the semantic search: Select **Ctrl** + **Enter** or hold **Ctrl** and select ![start search](../search/media/shared/start-search-icon.png) start search. In Google Chrome, select **Ctrl** + **Shift** + **Enter** to switch the focus to the new browser tab. 

::: moniker-end

::: moniker range=" <= tfs-2018"

1. In the semantic search, check that the text says _Search work items_. If it doesn't, use the selector to select it.

   ![The Work item search textbox in the title bar](../search/media/work-item-search-get-started/title-bar-search-box-empty-outlined.png)   

2. Enter a search string in the text box, and select **Enter** or ![starting search icon](../search/media/shared/start-search-icon.png) start search. 

3. Search results display in a snippet view where the matches found are shown in bold.

   ![Search results](../search/media/work-item-search-get-started/results-matching-previous-versions.png)

   This full text search uses simple search strings for words or phrases. Work item search matches derived forms of your search terms. For example, a search for "updating" also finds instances of the word "updated" and "update". Searches aren't case-sensitive.

4. Select a snippet of a work item to display it in the right window. 
  
5. Open the search results in a new browser tab from semantic search. Select **Ctrl** + **Enter** or hold **Ctrl** and select ![the start search icon](../search/media/shared/start-search-icon.png) start search. In Google Chrome, select **Ctrl** + **Shift** + **Enter** to switch the focus to the new browser tab. 

::: moniker-end

For more information about searching and filtering in Azure Boards, see [Filter backlogs, boards, and plans](../../boards/backlogs/filter-backlogs-boards-plans.md).

::: moniker range="azure-devops"

## Start your search from a Wiki page

When you search from Wiki, you automatically navigate to wiki search results. Text search across the wiki is supported by the search platform.

:::image type="content" source="../wiki/media/search/wiki-search-example-vert.png" alt-text="Start search from wiki page":::

For more information about searching wikis, see [Search Wiki](../wiki/search-wiki.md) and [Provisioned vs. published wiki](../wiki/provisioned-vs-published-wiki.md).

::: moniker-end

> [!WARNING]
> **No results found for ...**  
> If there's a large number of hits when using a wildcard search, such as when using a very simple wildcard search string, you may see a message that no matching files were found. In this case, narrow your search to reduce the number of matches. For example, specify more characters of the word(s) you want to find, or add a condition or filter to limit the number of possible matches.   

## Additional search functions

If you want to search for various settings, users, projects, and more, see the following table to find non-semantic search tasks and corresponding actions.


---  
:::row:::
   :::column span="1":::
      **Non-semantic search task** 
   :::column-end:::
   :::column span="2":::
      **Action**
   :::column-end:::
:::row-end:::
---
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      [Find an organization setting](../../organizations/settings/search-settings.md) 
   :::column-end:::
   :::column span="2":::
      Go to your organization and select **Organization settings**.
   :::column-end:::
:::row-end:::
::: moniker-end
---
:::row:::
   :::column span="1":::
      [Find a project setting](../../organizations/settings/search-settings.md) 
   :::column-end:::
   :::column span="2":::
      Go to your project and select **Project settings**.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Find a user setting](../../organizations/settings/search-settings.md) 
   :::column-end:::
   :::column span="2":::
      Go to your **User settings page**. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Find a user 
   :::column-end:::
   :::column span="2":::
      Go to your organization and select **Organization settings** > **Users**, and then enter the name in the filter box.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Find an organization 
   :::column-end:::
   :::column span="2":::
       Scroll through the left side of your screen, which lists all organizations. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Find a project
   :::column-end:::
   :::column span="2":::
      Go to your organization, and then enter the project name in the Filter projects box.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      View file history and compare versions 
   :::column-end:::
   :::column span="2":::
      Go to **Repos** > **Files**, highlight your file, and then select **History**. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Find wiki content](../wiki/search-wiki.md)
   :::column-end:::
   :::column span="2":::
      Go to your wiki and enter your semantic search. 
   :::column-end:::
:::row-end:::
---

::: moniker range="azure-devops"
> [!NOTE]
> The organization settings search function finds all settings, both organization and project.
::: moniker-end

::: moniker range="< azure-devops"

## Search re-index requirements

Search for Azure DevOps Server has the following limitation: 

* If you do a disaster recovery (DR) operation and move your server back to an earlier snapshot of your SQL database, [reindex all your collections](manage-search.md#reindex-a-repository-or-collection).

::: moniker-end

## Marketplace extensions

- [Code Search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search) - Extends semantic search with fast, flexible, and precise search results across all your code. Required for searching repositories.
- [Azure Paths Search](https://marketplace.visualstudio.com/items?itemName=wavemotionio.ado-areapaths) - Adds a special search hub to Boards for searching within iterations and area paths without having to create and maintain custom queries.

> [!NOTE]
> Some extensions aren't supported features of Azure DevOps and therefore aren't supported by the product team. For questions, suggestions, or issues you have when using these extensions, visit their corresponding extension page on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).

## Next steps

> [!div class="nextstepaction"]
> [Functional work item search](functional-work-item-search.md) or
> [Functional code search](functional-code-search.md) or
> [Functional artifact or package search](functional-package-search.md)

## Related articles
* [Code Search blog posts](https://devblogs.microsoft.com/devops/?s=code+search&submit=%EE%9C%A1)
* [Work item search blog posts](https://devblogs.microsoft.com/devops/?s=work+item+search&submit=%EE%9C%A1)
* [Search wiki](../wiki/search-wiki.md)
