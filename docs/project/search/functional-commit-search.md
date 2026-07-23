---
title: Functional commit search
titleSuffix: Azure Repos
description: Search Git commits by message and title across your projects in Azure DevOps, and filter and sort the results.
ms.subservice: azure-devops-search
ms.custom: cross-service, cross-project
ms.topic: how-to
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/23/2026
---

# Functional commit search

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Find commits faster by searching across your Git repositories with commit search. Search for a commit by the text in its **commit message** (title and description), then narrow the results with filters for project, repository, author, and branch. Commit search complements the [commit history](../../repos/git/commit-history.md) view, which lets you look up a single commit by its commit ID.

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Prerequisites

::: moniker range="azure-devops"

| Category | Prerequisite |
|--------------|-------------|
| **Access levels** | - To use commit search: At least **Basic** access. <br> - To search commits in a private project: At least **Basic** access. Stakeholder access doesn't include Azure Repos. <br> - To search commits in a public project: At least **Stakeholder** access. |
| **Search results** | **Access-based results**: When you search across the organization or collection, only results for projects and repositories that you have access to appear. |

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - To use commit search: At least **Basic** access. <br> - To search commits in a private project: At least **Basic** access. Stakeholder access doesn't include Azure Repos. |
| **Search results** | **Access-based results**: When you search across the organization or collection, only results for which you have access appear. |

::: moniker-end

## Search for a commit

You can search for commits from the search box in the upper-right corner of your Azure DevOps project.

1. Enter one or more keywords in the search box. Commit search matches your keywords against the commit **message** (both the title and the description).
2. Select **Commits** to scope your search to commits, and then press **Enter**.
3. On the results page, select a commit to open its **commit details**, where you can view the changes, related work items, and pull requests.

:::image type="content" source="media/functional-commit-search/commit-search.png" alt-text="Screenshot of the commit search results page in Azure DevOps, showing the Commit tab selected, matching commits in the results list, the Repository, Author, and Branch filters, the sort control, and the commit details pane.":::

> [!TIP]
> Commit search is case-insensitive and supports the same keyword, wildcard, and boolean operators used elsewhere in Azure DevOps search. For more information, see [Search features, usage, and examples](get-started-search.md#search-features-usage-and-examples).

## Narrow your search with filters

Use the filters in the left column of the results page to narrow the list of commits. You can combine filters as needed.

| Filter | Description |
|---|---|
| **Project** | Limit results to commits in a specific project. This filter is available when you search across your organization or collection. |
| **Repository** | Limit results to commits in one or more repositories. |
| **Author** | Limit results to commits made by a specific author. |
| **Branch** | Limit results to commits that are reachable from a specific branch. |

## Sort your search results

Use the sort control on the results page to change the order of your commits.

| Sort option | Description |
|---|---|
| **Commit time** | Sort commits from newest to oldest by the time they were committed. |
| **Relevance** | Sort commits by how closely they match your search keywords. |

## Search best practices

- **Start broad, then filter:** Begin with a keyword search, and then apply the project, repository, author, and branch filters to narrow the results.
- **Search the commit message:** Commit search matches the commit title and description. To find a commit by its ID, use the [commit history](../../repos/git/commit-history.md) view.
- **Check spelling:** Search doesn't automatically correct spelling, so make sure your keywords are spelled correctly.

## Indexing and availability

::: moniker range="azure-devops"

Commit search relies on indexed commit data. Most repositories are indexed automatically. If a repository hasn't been indexed yet, your first commit search for that repository triggers indexing, and results become available after indexing completes.

> [!NOTE]
> Commit search indexes commits reachable from the searchable branches of your Git repositories. Newly imported repositories might take some time to appear in search results while indexing completes.

::: moniker-end

::: moniker range="< azure-devops"

For Azure DevOps Server, a Collection Administrator must [install and configure search](install-configure-search.md) before commit search is available.

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Get started with search](get-started-search.md)

## Related content

- [Functional code search](functional-code-search.md)
- [View commit history](../../repos/git/commit-history.md)
- [View a commit's details](../../repos/git/commit-details.md)
- [Manage search indexing](manage-search.md)
