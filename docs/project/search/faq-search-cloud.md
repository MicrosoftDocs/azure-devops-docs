---
title: Search FAQs and problem solutions   
description: Learn the answers to frequently asked questions (FAQs) and troubleshooting information about Search in Azure DevOps.
ms.assetid: 
ms.technology: devops-collab
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 03/03/2021
monikerRange: 'azure-devops'
---

# FAQs for Search in Azure DevOps Services

[!INCLUDE [version-azure-devops-cloud](../../report/includes/version-azure-devops-cloud.md)]

Learn the answers to frequently asked questions (FAQs) about the Search function for Azure DevOps Services.

## Q: Why isn't the wildcard search working as expected

You may see different results while doing a wildcard search for the term ```ge*``` as compared to a wildcard search for the term ```get*```. For example, in the image below you see ```ge*``` shows **7509** results.

![Wildcard search for ge*](media/shared/faq-wildcard1.png)

while ```get*``` shows **109,134** results.

![Wildcard search for get*](media/shared/faq-wildcard2.png)

A: Let's say, you're searching for ```app*```. In the backend, the wildcard `*` expands to match any character sequence after the term ```app```. For example, ```app*``` might expand to ```app, app0, app01, .., apple```. The expansion takes place for the first 100 expanded terms only. Post expansion, all the files associated with the 100 expanded terms display on the search results page. There's a possibility that ```application``` may not be within the first 100 expanded terms so, you may not find files with the search term ```application``` in the search results. You may see fewer search results for the term ```ge*``` as compared to ```get*```.

Ensuring that you can find the most meaningful and actionable results as fast as possible, **enter more criteria in the search bar**.

## Q: How do I search backlog comments?

A: 

## Q: How do I search company-wide for published internal NuGet packages?

A: Go to [Discover in Azure DevOps(https://aka.ms/discover), enter your query and search, and then choose the **Packages** pivot. You can also navigate from your organization's landing page. At the top left of your screen, there's a link to the Microsoft enterprise search page below the Azure DevOps logo.

## Q: Is Azure DevOps Search extensible?

A: Currently, no, but you can submit a new feature request in the [Developer Community](https://developercommunity.visualstudio.com/spaces/8/index.html).

## Related articles

- [Export access levels audit log](../../organizations/security/export-users-audit-log.md)
