---
title: Search packages
titleSuffix: Azure Artifacts
description: How to search for packages across all your feeds in an Azure DevOps organization.
ms.technology: devops-collab
ms.custom: cross-service, cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2020'
ms.date: 01/14/2021
---

# Search packages across your feeds

[!INCLUDE [version-azure-devops-plus-azure-devops-server-2020](../../includes/version-azure-devops-plus-azure-devops-server-2020.md)]

Package Search is available to all users of Azure DevOps. For information on main search functions, see [Get started with search](get-started-search.md).

## Prerequisites

- [Azure DevOps Services account](https://azure.microsoft.com/services/devops/).
- [Azure Artifacts feed](../../artifacts/get-started-nuget.md).

## Apply supported functions to package search

1. Select the filter icon to show the filter panel.

	:::image type="content" source="media/shared/pkgsrch-results-filtericon.png" alt-text="Screenshot Showing the filter lists":::

1. Select from the dropdown menues to search by feeds, views, or package types.

	:::image type="content" source="media/shared/pkgsrch-results-filters.png" alt-text="Screenshot showing the filter panel options":::

By default, you search within all feeds of the organization, no matter which project you're in. The **Views** filter only appears if a single feed gets selected from the **Feeds** filter. Use this filter to show packages from a specific view.
Using the **Type** filter, you can select the type of package you want to search for (such as NuGet packages).

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
