---
title: Search across Azure DevOps
Description: Quickly search within Azure DevOps
id: A0889E82-EAE7-464C-B82A-B05D2E404426
ms.subservice: azure-devops-search
ms.custom: cross-service, cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 08/01/2025
monikerRange: '<= azure-devops'
---

# Get started with search

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure DevOps provides powerful search capabilities that help you quickly find work items, code files, wiki pages, and packages across your projects and organization. Use keywords, wildcards, and advanced search filters to locate exactly what you need.

## What you can search

- **Work items**: Find bugs, user stories, tasks, and other work items
- **Code**: Search through source code files and repositories  
- **Wiki pages**: Locate information in project and published wikis
- **Packages**: Find artifacts in Azure Artifacts feeds

For detailed information about specific search types, see:

- [Functional code search](functional-code-search.md)
- [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search)
- [Functional work item search](functional-work-item-search.md)
- [Functional package search](functional-package-search.md)

## Prerequisites

| Access level | Search capabilities |
|---|---|
| **All project members** | Every project member can use the search functions, including users with Stakeholder, Basic, and higher levels of access. |
| **Stakeholder limitations** | - **Wiki search:** Limited to provisioned wikis only. Published wiki results don't appear because they require access to regular repositories.<br>- **Code search:** Not available for Stakeholder users. |

> [!NOTE]
> **Access-based results:** When you search across the organization or collection, only results for projects and items you have access to display.

::: moniker range="< azure-devops"
> [!IMPORTANT]
> For Azure DevOps Server, a Collection Administrator must [install and configure search](install-configure-search.md) before these features are available.
::: moniker-end

## Search tips

- **Start with keywords:** Begin your search with relevant keywords, then apply filters to refine results as needed.
    :::image type="content" source="media/shared/title-bar-search-box-select-type-tfs.png" alt-text="Screenshot of search boxes in Azure DevOps":::
- **Adjust filters:** If your initial search doesn’t yield the desired results, try removing filters and searching again. Once you see the search results, you can narrow them down by applying appropriate filters and searching again.
- **Check spelling:** Ensure your search terms are spelled correctly, as search doesn't automatically correct spelling errors.
- **Refine wildcard searches:** If you receive a message that no matching files are found due to a wildcard search with too many hits, make your search more specific. Add more characters or use more filters to restrict the number of possible matches.
- **Case insensitive:** All searches are case-insensitive.

## Search features, usage, and examples

::: moniker range="azure-devops"
The following features apply to all searches, including work items, code, wikis, and packages.
::: moniker-end

::: moniker range="< azure-devops"
The following features apply to all searches, including work items, code, and packages.
::: moniker-end

::: moniker range="azure-devops"

| Search feature | Usage | Example |
|---|---|---|
|**Keyword**|Search based on one or more keywords|`validate` finds instances that contain the word *validate*|
|**Exact match**|Search based on an exact match, enclosed in double-quotes|`"Client not found"` finds instances that contain the exact phrase match *Client not found*. Search might not handle special characters as expected. Try escaping special characters or simplifying the search phrase|
|**Wildcard**|- Add wildcard characters, `*` and `?`, to keywords to extend the search criteria.<br>- Add `*` at the end of a keyword to find items that start with the keyword.<br>- Add `?` in the middle to represent any alphanumeric character.<br>- Use wildcard characters anywhere in your search string except as a prefix. You can use prefix wildcards with the other search filter functions.<br>- You can use more than one wildcard to match more than one character.|- `alpha?version` finds instances of alpha1version and alphaXversion.<br>- `Browser*` finds instances of BrowserEdge, BrowserIE, and BrowserFirefox.<br>- `CodeSenseHttp*` finds files containing words that start with *CodeSenseHttp*, such as CodeSenseHttpClient and CodeSenseHttpClientTest.|
|**Boolean operators**|- Find two or more keywords using Boolean operators: `AND`, `OR`, and `NOT` (must be uppercase).<br>- Add parenthesis to clauses to support logical groupings.<br>- Because `AND` is the default operator, an entry of two keywords with no operator is the same as an `AND` search.<br>- `Validate AND revisit` finds files that contain both the words *validate* and *revisit*.|- `Validate OR revisit` finds files that contain either of the words *validate* or *revisit*.<br>- `Validate NOT revisit` finds files that contain the word *validate* but not the word, *revisit*.<br>- `(Validate NOT revisit) OR "release delayed"` finds files that contain the word *validate* but not the word, *revisit, or files that contain the phrase *release delayed*.|
|**Special characters**|- Escape the special characters `(`, `)`, `[`, `]`, `:`, `*`, and `?` by enclosing them in a phrase delimited with double-quotes.<br>- Include special characters in a search string, or search specifically for special characters, according to the following rules:<br>- CodeA23?R finds files containing words that start with CodeA23<br>- Have any alphanumeric character next, and end with R. For example, CodeA234R and CodeA23QR.<br>- Search for any special character that isn't a part of the query language.|- `"flatten()"` finds the literal string *flatten()*. Search for a literal occurrence of the double-quote character *"* by preceding it with the escape character `\` and enclosing the search string in double-quotes.<br>- `"\"react-redux\""` finds the literal string "react-redux."|
|**Proximity**|- Search for files based on vicinity using proximity operators: NEAR, BEFORE, and AFTER (must be uppercase).<br>- By default, proximity search looks for terms within five tokens distance.|- `term1 BEFORE term2` returns all files where term1 occurs BEFORE term2 within a distance of five tokens between them.<br>- `term1 AFTER term2` returns the same results as term2 BEFORE term1.<br>- `term1 NEAR term2` returns all files where term1 is within five token distance from term2 in any direction. `term1 NEAR term2` returns the same results as `term1 BEFORE term2` OR `term2 BEFORE term1`.|

::: moniker-end

::: moniker range="< azure-devops"

| Search feature | Usage | Example |
|---|---|---|
|**Keyword**|Search based on one or more keywords|`validate` finds instances that contain the word *validate*.|
|**Exact match**|Search based on an exact match, enclosed in double-quotes|`"Client not found"` finds instances that contain the exact phrase match *Client not found*. Search might not handle special characters as expected. Try escaping special characters or simplifying the search phrase.|
|**Wildcard**|- Add wildcard characters, `*` and `?`, to keywords to extend the search criteria.<br>- Add `*` at the end of a keyword to find items that start with the keyword.<br>- Add `?` in the middle to represent any alphanumeric character.<br>- Use wildcard characters anywhere in your search string except as a prefix. You can use prefix wildcards with the other search filter functions.<br>- You can use more than one wildcard to match more than one character.|- `alpha?version` finds instances of alpha1version and alphaXversion.<br>- `Browser*` finds instances of BrowserEdge, BrowserIE, and BrowserFirefox.<br>- `CodeSenseHttp*` finds files containing words that start with *CodeSenseHttp*, such as CodeSenseHttpClient and CodeSenseHttpClientTest.|
|**Boolean operators**|- Find two or more keywords using Boolean operators: `AND`, `OR`, and `NOT` (must be uppercase).<br>- Add parenthesis to clauses to support logical groupings.<br>- Because `AND` is the default operator, an entry of two keywords with no operator is the same as an `AND` search.<br>- `Validate AND revisit` finds files that contain both the words *validate* and *revisit*.|- `Validate OR revisit` finds files that contain either of the words *validate* or *revisit*.<br>- `Validate NOT revisit` finds files that contain the word *validate* but not the word, *revisit*.<br>- `(Validate NOT revisit) OR "release delayed"` finds files that contain the word *validate* but not the word, *revisit, or files that contain the phrase *release delayed*.|
|**Special characters**|- Escape the special characters `(`, `)`, `[`, `]`, `:`, `*`, and `?` by enclosing them in a phrase delimited with double-quotes.<br>- Include special characters in a search string, or search specifically for special characters, according to the following rules:<br>- CodeA23?R finds files containing words that start with CodeA23<br>- Have any alphanumeric character next, and end with R. For example, CodeA234R and CodeA23QR.<br>- Search for any special character that isn't a part of the query language.|- `"flatten()"` finds the literal string *flatten()*. Search for a literal occurrence of the double-quote character *"* by preceding it with the escape character `\` and enclosing the search string in double-quotes.<br>- `"\"react-redux\""` finds the literal string "react-redux."|

::: moniker-end

## Search from different contexts

The search experience adapts based on where you start your search:

- **Organization overview**: Search across all projects and repositories
- **Project overview**: Automatically filters results to the current project
- **Boards pages**: Shows recent work items and backlogs you accessed
- **Azure Repos/Pipelines/Test Plans/Artifacts**: Displays relevant filters for code and artifact searches
- **Wiki pages**: Defaults to wiki content and shows recently opened pages

**Related resources:**
- [Filter backlogs, boards, and plans](../../boards/backlogs/filter-backlogs-boards-plans.md)
- [Provisioned vs. published wiki](../wiki/provisioned-vs-published-wiki.md)

> [!TIP]
> **No results found?**  
> If wildcard searches return too many results, narrow your search by adding more specific characters or applying filters.

## More search capabilities

The following table shows other search tasks and where to find them:

| Search task | Action |
|---|---|
| **Find an organization setting** | Go to your organization and select **Organization settings**. |
| **Find a project setting** | Go to your project and select **Project settings**. |
| **Find a user setting** | Go to your **User settings page**. |
| **Find a user** | Go to your organization and select **Organization settings** > **Users**, and then enter the name in the filter box. |
| **Find an organization** | Scroll through the left side of your screen, which lists all organizations. |
| **Find a project** | Go to your organization, and then enter the project name in the Filter projects box. |
| **View file history and compare versions** | Go to **Repos** > **Files**, highlight your file, and then select **History**. |

::: moniker range="azure-devops"
> [!NOTE]
> When you search from the **Organization settings** page, your search results include both organization-level and project-level settings.
::: moniker-end

::: moniker range="< azure-devops"

## Search reindex requirements

Search has the following limitation: If you do a disaster recovery (DR) operation and move your server back to an earlier snapshot of your SQL database, [reindex all your collections](manage-search.md#reindex-a-repository-or-collection).

::: moniker-end

## Search extensions

Enhance your search capabilities with these marketplace extensions:

- **[Code Search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search)**: Provides fast, flexible, and precise search results across all your code repositories. Required for searching code content.
- **[Azure Paths Search](https://marketplace.visualstudio.com/items?itemName=wavemotionio.ado-areapaths)**: Adds a specialized search hub to Azure Boards for finding work items by iteration and area paths without creating custom queries.

> [!NOTE]
> Extension support varies by Azure DevOps deployment. For assistance, visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).

## Next step

> [!div class="nextstepaction"]
> [Functional code search](functional-code-search.md)

## Related content

- [Functional work item search](functional-work-item-search.md)
- [Functional artifact or package search](functional-package-search.md)
- [Code search blog posts](https://devblogs.microsoft.com/search?query=Code+search&blog=%2Fdevops%2F)
- [Work item search blog posts](https://devblogs.microsoft.com/search?query=Work+item+search)
