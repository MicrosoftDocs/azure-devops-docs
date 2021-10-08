---
title: Advanced package search syntax
titleSuffix: Azure Artifacts
description: Advanced options for using Package Search across all your feeds in an Azure DevOps organization.
ms.technology: devops-collab
ms.custom: cross-service, cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2020'
ms.date: 04/15/2021
---
# Functional artifact or package search

[!INCLUDE [version-azure-devops-plus-azure-devops-server-2020](../../includes/version-azure-devops-plus-azure-devops-server-2020.md)]

Package Search is available to all users of Azure DevOps. For information on main search functions, see [Get started with search](get-started-search.md).

## Prerequisites

Package Search is automatically available to users of Azure DevOps.

## Apply supported functions to package search

1. The Views filter only appears if a single feed is selected from Feeds filter. Use the filter to show the selector lists.

	:::image type="content" source="media/shared/pkgsrch-results-filtericon.png" alt-text="Showing the filter lists":::

2. Select the criteria you want in the selector lists, or search across the entire organization.

	:::image type="content" source="media/shared/pkgsrch-results-filters.png" alt-text="Selector drop-down lists":::

3. By switching pivots, quickly search packages that contain the same search string.

	:::image type="content" source="media/shared/pkgsrch-other.png" alt-text="Search for packages containing the same search string":::

By default, you search within all feeds of the organization, no matter which project you're in. 

The Views filter only appears if a single feed gets selected from the Feeds filter. Use this filter to show the selector lists.

Select :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **filter** and the function that you want to include in your search string from the list. Then, enter your criteria. 

:::image type="content" source="media/shared/show-filters.png" alt-text="Show filter panel button.":::

Add more criteria to either narrow or broaden your search by using the operators and functions listed in :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **view options**.

## Search packages with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Package Search with REST API, see [Fetch Package Search Results](/rest/api/azure/devops/search/package-search-results/fetch-package-search-results).
## Next steps

> [!div class="nextstepaction"]
> [What are feeds?](../../artifacts/concepts/feeds.md)

## Related articles

* [Get started with Search](get-started-search.md)
* [Search code](functional-code-search.md)
* [Search work items](functional-work-item-search.md)
* [Search FAQs](faq-search.yml)
