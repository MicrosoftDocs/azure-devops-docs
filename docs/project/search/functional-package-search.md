---
title: Search packages
titleSuffix: Azure Artifacts
description: How to search for packages across all your feeds and in upstream sources in an Azure DevOps organization.
ms.subservice: azure-devops-search
ms.custom: cross-service, cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 09/28/2023
---

# Search packages across your feeds

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Finding the right package for your project can be challenging, especially when there are many versions and dependencies involved. In this article, learn how to use Code Search to perform functional package search in Azure DevOps, which allows you to search for packages based on their functionality, metadata, and code snippets.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a feed](../../artifacts/get-started-nuget.md#create-feed), if you don't have one already.

## Search packages

1. Sign in to your project (```https://dev.azure.com/{your_organization}/{your_project}```).
2. **Enter** "package" in the search box.

3. Select from the dropdown menus to search by feeds, views, or package types.

	:::image type="content" source="media/shared/package-search-results-filters.png" alt-text="Screenshot showing the filter panel options.":::

You can search within all feeds of the organization by default, regardless of the project you’re in.

The **Views** filter shows up only when you select a single feed from the **Feeds** filter. This filter lets you display packages from a particular view.

You can use the **Type** filter to choose the package type you want to search for (for example, NuGet packages).

## Search with the REST API

You can use the Azure DevOps REST API to search for packages in a specific organization. For more information, see [Fetch package search results](/rest/api/azure/devops/search/package-search-results/fetch-package-search-results).

#### Example

```Command
POST https://almsearch.dev.azure.com/ORGANIZATION_NAME/_apis/search/packagesearchresults?api-version=7.0
```

```Request body
{
  "$orderBy": null,
  "$top": 100,
  "$skip": 0,
  "searchText": "react-calendar",
  "filters": {
    "ProtocolType": "Npm"
  }
}
```

## Search upstream sources

Using upstream sources, you can consume packages from public registries and other Azure Artifacts feeds. For more information, see [Search upstream](../../artifacts/how-to/search-upstream.md).

> [!NOTE]
> You can only search for packages in upstream sources from your feed in Azure DevOps Services. NuGet Package Explorer doesn't support searching for upstream packages. For more information, see [Download NuGet packages](../../artifacts/get-started-nuget.md#download-packages).

## Next steps

> [!div class="nextstepaction"]
> [What are feeds?](../../artifacts/concepts/feeds.md)
> [What are feed views?](../../artifacts/concepts/views.md)
> [Promote a package to a view](../../artifacts//feeds/views.md)

## Related articles

- [Search code](functional-code-search.md)
- [Search work items](functional-work-item-search.md)
