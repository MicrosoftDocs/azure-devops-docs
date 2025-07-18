---
title: Search across Azure DevOps
titleSuffix: Azure DevOps
description: Quickly search within Azure DevOps, across all your code, wiki, packages, and work items.
ms.assetid: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.subservice: azure-devops-search
ms.custom: cross-service, cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 08/08/2024
monikerRange: '<= azure-devops'
---

# Get started with search

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can quickly find work items, code files, wiki pages, or packages based on a keyword, wildcards, and other supported search filters with the search function.

For more information, see the following links:

- [Functional code search](functional-code-search.md)
- [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search)
- [Functional work item search](functional-work-item-search.md)
- [Functional package search](functional-package-search.md)

## Prerequisites

- **Access levels:**
  - **All project members:** Every project member can use the search functions, including users with Stakeholder, Basic, and higher levels of access.
- **Search results:**
  - **Access-based results:** When you're searching across the organization or collection, only results for which a project member has access are listed.
  - **Stakeholder limitations:**
    - **Wiki search:** Stakeholder wiki search results are limited to provisioned wikis. Published wiki results don’t appear because they require access to regular repositories, which Stakeholders don’t have.
    - **Code search:** Code search results don’t appear for Stakeholders.

::: moniker range="< azure-devops"
> [!IMPORTANT]
> A Collection Administrator must [install and configure search](install-configure-search.md).
::: moniker-end

## Search tips

- **Use keywords:** Start your search using a keyword. You can then apply other options, as needed, to broaden or narrow your search results.
    :::image type="content" source="media/shared/title-bar-search-box-select-type-tfs.png" alt-text="Screenshot of search boxes in Azure DevOps":::
- **Adjust filters:** If your initial search doesn’t yield the desired results, try removing filters and searching again. Once you see the search results, you can narrow them down by applying appropriate filters and searching again.
- **Check spelling:** Ensure your search terms are spelled correctly, as work item search doesn't ignore spelling errors.
- **Refine wildcard searches:** If you receive a message that no matching files are found due to a wildcard search with too many hits, make your search more specific. Add more characters of the word or words you want to find, or use a condition or filter to restrict the number of possible matches.
- **Case insensitivity:** Searches aren't case-sensitive.

## Search features, usage, and examples

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
      `"Client not found"` finds instances that contain the exact phrase match *Client not found*. Search might not handle special characters as expected. Try escaping special characters or simplifying the search phrase.
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
      - `Validate NOT revisit` finds files that contain the word *validate* but not the word, *revisit*.
      - `(Validate NOT revisit) OR "release delayed"` finds files that contain the word *validate* but not the word, *revisit, or files that contain the phrase *release delayed*.
   :::column-end:::
:::row-end:::
---
::: moniker range="azure-devops"
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
      - `"\"react-redux\""` finds the literal string "react-redux."
   :::column-end:::
:::row-end:::
---

## Search from a different page

You can search from any of the following pages:

- Organization project page: Starts a search across all projects.
- Project overview page: Automatically applies a filter to search within the selected project.
- Boards page for a project: Automatically displays recent work items and backlogs accessed by the user.
- Azure Repos, Pipelines, Test Plans, or an Artifacts page for a project: Automatically displays functional filters for code searches.
- Wiki page: Automatically go to a wiki page you recently opened.

For more information, see the following articles:
- [Filter backlogs, boards, and plans](../../boards/backlogs/filter-backlogs-boards-plans.md)
- [Provisioned vs. published wiki](../wiki/provisioned-vs-published-wiki.md)

> [!TIP]
> **No results found for ...**  
> Too many hits from a simple wildcard search can result in no matching files. You can narrow your search by adding more characters or using a condition or filter.

## More search functions

See the following table for more search tasks and actions.

---  
:::row:::
   :::column span="1":::
      **Search task**
   :::column-end:::
   :::column span="2":::
      **Action**
   :::column-end:::
:::row-end:::
---
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Find an organization setting
   :::column-end:::
   :::column span="2":::
      Go to your organization and select **Organization settings**.
   :::column-end:::
:::row-end:::
::: moniker-end
---
:::row:::
   :::column span="1":::
      Find a project setting
   :::column-end:::
   :::column span="2":::
      Go to your project and select **Project settings**.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Find a user setting
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

::: moniker range="azure-devops"
> [!NOTE]
> When you search from the **Organization settings** page, your search results include both organization-level and project-level settings.
::: moniker-end

::: moniker range="< azure-devops"

## Search reindex requirements

Search has the following limitation: If you do a disaster recovery (DR) operation and move your server back to an earlier snapshot of your SQL database, [reindex all your collections](manage-search.md#reindex-a-repository-or-collection).

::: moniker-end

## Marketplace extensions

- [Code Search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search) - Extends search with fast, flexible, and precise search results across all your code. Required for searching repositories.
- [Azure Paths Search](https://marketplace.visualstudio.com/items?itemName=wavemotionio.ado-areapaths) - Adds a special search hub to Boards for searching within iterations and area paths without having to create and maintain custom queries.

> [!NOTE]
> Azure DevOps doesn't support some extensions. For more information or assistance, go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).

## Next steps

> [!div class="nextstepaction"]
> [Functional code search](functional-code-search.md)

## Related content

- [Functional work item search](functional-work-item-search.md)
- [Functional artifact or package search](functional-package-search.md)
- [Code search blog posts](https://devblogs.microsoft.com/search?query=Code+search&blog=%2Fdevops%2F)
- [Work item search blog posts](https://devblogs.microsoft.com/search?query=Work+item+search)
