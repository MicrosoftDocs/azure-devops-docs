---
title: Search Git commits by message content
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

# Search Git commits by message content

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Search for commits across your Git repositories by message content. Filter results by project, repository, author, or branch to quickly find what you need. If you're looking up a specific commit ID, use the [commit history](../../repos/git/commit-history.md) view instead.

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Prerequisites

::: moniker range="azure-devops"

| Category | Prerequisite |
|--------------|-------------|
| **Access levels** | - To use commit search: At least **Basic** access. <br> - To search commits in a private project: At least **Basic** access. Stakeholder access doesn't include Azure Repos. <br> - To search commits in a public project: At least **Stakeholder** access. |
| **Search results** | **Access-based results**: When you search across the organization or collection, you see only results for projects and repositories that you have access to. |

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - To use commit search: At least **Basic** access. <br> - To search commits in a private project: At least **Basic** access. Stakeholder access doesn't include Azure Repos. |
| **Search results** | **Access-based results**: When you search across the organization or collection, you see only results for which you have access. |

::: moniker-end

## Search for commits

Enter keywords to find commits across your repositories.

1. Enter one or more keywords in the search box. Commit search matches your keywords against the commit **message** (both the title and the description).
2. Select **Commits** to scope your search to commits, and then press **Enter**.
3. On the results page, select a commit to open its **commit details**, where you can view the changes, related work items, and pull requests.

:::image type="content" source="media/functional-commit-search/commit-search.png" alt-text="Screenshot of the commit search results page in Azure DevOps, showing the Commit tab selected, matching commits in the results list, the Repository, Author, and Branch filters, the sort control, and the commit details pane.":::

> [!TIP]
> Searches are case-insensitive and support keyword, wildcard, and boolean operators. For details, see [Search features, usage, and examples](get-started-search.md#search-features-usage-and-examples).

## Narrow your search with filters

Filter results using any combination of the following filters:

| Filter | Description |
|---|---|
| **Project** | Limit results to commits in a specific project. This filter is available when you search across your organization or collection. |
| **Repository** | Limit results to commits in one or more repositories. |
| **Author** | Limit results to commits made by a specific author. |
| **Branch** | Limit results to commits that are reachable from a specific branch. |

## Sort your search results

Choose from the following sort options:

| Sort option | Description |
|---|---|
| **Commit time** | Newest to oldest by commit date. |
| **Relevance** | By how closely results match your keywords. |

## Search best practices

- **Start broad, then filter:** Enter a keyword, then use project, repository, author, or branch filters to narrow results.
- **Search the commit message:** Searches match the commit titles and descriptions, not commit IDs. For ID lookups, use the [commit history](../../repos/git/commit-history.md) view.
- **Check spelling:** Searches don't auto-correct, so double-check your keywords.

## Indexing and availability

::: moniker range="azure-devops"

Repositories are automatically indexed for searching. If a repository isn't indexed yet, your first search triggers indexing, and results appear when complete.

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
