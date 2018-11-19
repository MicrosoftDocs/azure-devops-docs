---
title: Search the Wiki in Azure DevOps
titleSuffix: Azure DevOps 
description: Search the wiki for a team project or across the account in Azure DevOps
ms.prod: devops
ms.technology: devops-collab
ms.custom: wiki
ms.assetid:  
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.reviewer: sancha
ms.topic: conceptual
monikerRange: '>= tfs-2018'
ms.date: 11/19/2018
---

# Search  Wiki

[!INCLUDE [temp](../../_shared/version-vsts-tfs-2018.md)]

With wiki search, you can search within a project wiki or across all wikis created for your organization.


::: moniker range="tfs-2018"
> [!NOTE]  
> Wiki search is supported on TFS 2018.2 or later versions. 
::: moniker-end


[!INCLUDE [temp](../../_shared/new-navigation-azd.md)]  

# [New navigation](#tab/new-nav)  

::: moniker range=">= azdevserver-2019"

Choose **Overview>Wiki** and enter your keyword or phrase into the search box.

> [!div class="mx-imgBorder"]  
> ![Wiki search option](_img/search/search-wiki-vert.png)

::: moniker-end

::: moniker range="tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end

# [Previous navigation](#tab/previous-nav)

::: moniker range="tfs-2018 || vsts"

Simply open **Wiki** and enter your keyword or phrase into the search box.

> [!div class="mx-imgBorder"]  
> ![Wiki search option](_img/search/search-wiki-horz.png)

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end
---

The search feature quickly returns wiki pages by title or page content.

English language stemming support helps you find the most relevant wiki pages. For example, when you enter *request* in the search box, wiki search will return page results containing related words such as *requesting, requested, requests,* and so on.

> [!div class="mx-imgBorder"]  
> ![Wiki search results](_img/search/wiki-search-example-vert.png)

> [!TIP]
> When you search from **Wiki**, you'll automatically navigate to wiki search results. If you initiate a search from another page, such as one under **Repos/Code** or **Boards/Work**, then first select the **Search wiki** option from the search box menu options.

## Related articles

- [Search code](..//search/code-search.md)
- [Search work items](..//search/work-item-search.md)
