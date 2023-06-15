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
ms.date: 11/28/2022
---

# Search packages across your feeds

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Package Search is available to all users of Azure DevOps. For information on main search functions, see [Get started with search](get-started-search.md).

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a feed](../../artifacts/get-started-nuget.md#create-a-feed), if you don't have one already.

## Apply supported functions to package search

1. Select the filter icon to show the filter panel.

	:::image type="content" source="media/shared/pkgsrch-results-filtericon.png" alt-text="Screenshot Showing the filter lists":::

1. Select from the dropdown menus to search by feeds, views, or package types.

	:::image type="content" source="media/shared/pkgsrch-results-filters.png" alt-text="Screenshot showing the filter panel options":::

By default, you search within all feeds of the organization, no matter which project you're in. The **Views** filter only appears if a single feed gets selected from the **Feeds** filter. Use this filter to show packages from a specific view.
Using the **Type** filter, you can select the type of package you want to search for (such as NuGet packages).

## Search using the REST API

You can use the Azure DevOps REST API to search for packages in a specific organization. See [Fetch Package Search Results](/rest/api/azure/devops/search/package-search-results/fetch-package-search-results) for more details.

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

## Search in upstream sources

Using upstream sources, you can consume packages from public registries and Azure Artifacts feeds. See [Search upstreams](../../artifacts/how-to/search-upstream.md) to lean how to search for packages in upstream sources and save them to your feed.

> [!NOTE]
> Searching for packages in upstreams using the NuGet Package Explorer is not supported. See [Download NuGet packages](../../artifacts/get-started-nuget.md#download-nuget-packages) for more details.

## Next steps

> [!div class="nextstepaction"]
> [What are feeds?](../../artifacts/concepts/feeds.md)
> [What are feed views?](../../artifacts/concepts/views.md)
> [Promote a package to a view](../../artifacts//feeds/views.md)

## Related articles

- [Get started with Search](get-started-search.md)
- [Search code](functional-code-search.md)
- [Search work items](functional-work-item-search.md)
- [Search FAQs](faq-search.yml)
