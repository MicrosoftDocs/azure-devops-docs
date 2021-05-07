---
title: Search the Wiki in Azure DevOps
titleSuffix: Azure DevOps 
description: Search the wiki for a team project or across your organization in Azure DevOps.
ms.technology: devops-collab
ms.custom: wiki
ms.assetid:  
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.topic: how-to
monikerRange: '>= tfs-2018'
ms.date: 04/15/2021
---

# Search Wiki

[!INCLUDE [temp](../../includes/version-vsts-tfs-2018.md)]

With wiki search, you can search within your project wiki. 

::: moniker range="azure-devops"

With [semantic search](../search/get-started-search.md), you can search across all wikis created for your organization.

::: moniker-end

## Prerequisites

- All users can search within a wiki.

## Start your search in a wiki

> [!TIP]
> When you search from **Wiki**, you automatically go to wiki search results. If you initiate a search from another page, such as one under **Repos/Code** or **Boards/Work**, then first select the **Search wiki** option from the search menu options.

::: moniker range=" azure-devops"

Select the **Search wiki** option from the search menu and enter a keyword or phrase.

  :::image type="content" source="../wiki/media/search/search-wiki-vert.png" alt-text="Wiki search option":::   


Search quickly returns wiki pages by title or page content. English language stemming support helps you find the most relevant wiki pages. For example, when you enter *request* in the search box, wiki search returns page results that contain the following related words:
- *requesting*
- *requested*
- *requests*
- and so on

   :::image type="content" source="../wiki/media/search/wiki-search-example-vert.png" alt-text="Wiki search results"::: 

::: moniker-end  

::: moniker range="< azure-devops"

Open **Wiki** and enter your keyword or phrase into the search box. 

   :::image type="content" source="../wiki/media/search/search-wiki-horz.png" alt-text="Wiki search option, previous navigation"::: 

The search feature quickly returns wiki pages by title or page content. English language stemming support helps you find the most relevant wiki pages. For example, when you enter *request* in the search box, wiki search returns page results that contain the following related words:
- *requesting*
- *requested*
- *requests*
- and so on

  :::image type="content" source="../wiki/media/search/wiki-search-example-vert.png" alt-text="Wiki search results":::   

::: moniker-end

### Search Wiki with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Wiki Search with REST API, see [Fetch Wiki Search Results](/rest/api/azure/devops/search/wiki%20search%20results/fetch%20wiki%20search%20results).

## Next steps

> [!div class="nextstepaction"]
> [Get started searching across all your work items, code, and artifacts](../search/get-started-search.md)

## Related articles

- [Search code](..//search/functional-code-search.md)
- [Search work items](..//search/functional-work-item-search.md)
- [Search artifacts](../search/functional-package-search.md)
- [Search FAQs](../search/faq-search.yml)