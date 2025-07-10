---
title: Search for packages across feeds
titleSuffix: Azure Artifacts
description: How to search for packages across all your feeds and in upstream sources in an Azure DevOps organization.
ms.subservice: azure-devops-search
ms.custom: cross-service, cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 07/10/2025
---

# Search for packages across your feeds

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Finding the right package for your project can be time-consuming, especially when you're managing multiple feeds, versions, and dependencies. In this article, you learn how to use Azure DevOps Code Search to perform functional package searches across all your feeds to help you locate your packages based on functionality, versions, or type.

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../../artifacts/start-using-azure-artifacts#create-a-new-feed). |

## Search packages

Azure DevOps code search lets you search all feeds in your organization, regardless of the project you’re in.

1. Sign in to your Azure DevOps organization and navigate to your project (`https://dev.azure.com/{Your_Organization}/{Your_Project}`).

1. In the search bar, enter a term (for example, time) in the search box and press Enter. This returns any package with the term "time" in its name or description.

1. Select the **Package** tab to view all search results. Use the **Feeds**, **Views**, or **Type** dropdown menus to filter results by feed, feed view, or package type (for example, NuGet).

	:::image type="content" source="media/shared/package-search-results-filters.png" alt-text="A screenshot displaying how to filter the package search results.":::

> [!NOTE]
> The **Views** filter appears only when you select a single feed from the **Feeds** filter.

## Search for packages using the REST API

The Azure DevOps REST API provides an endpoint that allows you to search for packages within a specific organization. The following example demonstrates how to construct the HTTP request and request body to search for the *react-calendar* npm package across all feeds in your organization. See [Fetch package search results](/rest/api/azure/devops/search/package-search-results/fetch-package-search-results) for more details.

#### Example:

```Command
POST https://almsearch.dev.azure.com/ORGANIZATION_NAME/_apis/search/packagesearchresults?api-version=7.1
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

## Search for packages in upstream sources

Azure Artifacts upstream sources enable developers to consume packages from different feeds and public registries such as *NuGet.org*. Using Azure Artifacts, you can search for various types of packages in your upstream sources. 

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Search Upstream Sources** in the upper-right corner of the page.

1. Choose a **Package type** and then enter the exact name in the **Package Name** text box. The package name is case sensitive and must be an exact match.

1. Select **Search** to view a list of available versions for the package you searched.

> [!NOTE]
> Searching for packages in upstream sources from your feed is supported only in Azure DevOps services.

## Next steps

> [!div class="nextstepaction"]
> [Promote a package to a view](../../artifacts//feeds/views.md)

## Related content

- [Functional code search](functional-code-search.md)

- [Functional work item search](functional-work-item-search.md)
