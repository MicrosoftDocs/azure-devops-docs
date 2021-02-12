---
title: FAQs and problem solutions for Search   
description: Learn the answers to frequently asked questions (FAQs) and troubleshooting information about Search in Azure DevOps.
ms.assetid: A78DC9CF-4ADD-46D7-9E25-D1A0764FCB06
ms.technology: devops-collab
ms.topic: conceptual
ms.author: sunar
author: chcomley
ms.date: 02/11/2021
monikerRange: '>= tfs-2017'
---

# Troubleshoot search

[!INCLUDE [temp](../../includes/version-tfs-2017-through-vsts.md)]

Find troubleshooting information and learn the answers to frequently asked questions (FAQs) about the Search function and extensions available for Azure DevOps.

::: moniker range=">= tfs-2017 < azure-devops"

<a name="no-search-box"></a>

## Q: Why isn't the Search box displayed after it's configured?
A:
1. The search box is shown only in the context of a project page. 
   Navigate to a project and check if the search box is displayed at the top right. 

2. If the search box isn't shown, verify that the extension is installed for the collection. 
   If not, [install](administration.md#config-tfs) or [configure](administration.md#config-ts-azuredevops) the extension.

<a name="no-results-install"></a>

## Q: Why are no search results shown after installing or configuring Search?
A:
1. Wait until you're sure sufficient time has elapsed after installing or configuring Search. It typically takes less than one hour for Search to index a collection. But, it may take up to 12 hours based on the size and number of code files, work items, or wiki pages.

2. If no results are shown after this period, 
   [check indexing status](administration.md#check-index). 

<a name="indexing-status-for-collections"></a>

## Q: Why is Code search what's provided when I'm in Work Item view?

A: You can toggle between Work Item and Code Search entities by using the picker next to the search box.
## Q: How do I know if indexing was triggered for all the collections?
A:
* [Check indexing status](administration.md#check-index) separately for each collection.

## Q: When I search file:span, why does it return files with an extension?

A: File:span searches will fetch all files named span with the extension included. This behavior occurs because the most common scenario for users is to fetch the filename along with the extension. In case you don't want to see the extension, use the following search string: file:{filename} NOT file:{filename}.*

<a name="no-results-later"></a>

## Q: Why does Search stop working and no results are shown?

A: Follow these steps. Replace "SearchServer" with the 
name of the server where Search is installed:

1. Access the URL `http://SearchServer:9200` from a web browser
   on a computer in the same domain as the server running Search.
   - If the status returned is `200 - OK`, go to step 2.
   - If any other status is returned, [contact Support](https://developercommunity.visualstudio.com/spaces/21/index.html).
   - If you don't get a response, verify that the 
     **elasticsearch-service-x64** service runs on 
     the same server as Search. If the service
     is stopped, start it and access the Search server again.  
     If you still get no response, or a response other than
     `200 - OK`, [contact Support](https://developercommunity.visualstudio.com/spaces/21/index.html).<p />

2. If the status is 200, access the URL `http://SearchServer:9200/_cat/health?v`
   from a web browser on a computer in the same domain as the server running Search.
   - If the status column shows green/OK, and 
     Search is still not working, [contact Support](https://developercommunity.visualstudio.com/spaces/21/index.html). 
   - If the status column shows red/fault, look at the value
     in the **init** or **unassigned** columns. If these values are 
     greater than zero, wait for 30 minutes and then
     repeat this step. If the values are unchanged, go to step 3.<p />

3. Access the URL `http://SearchServer:9200/_cat/shards?v`
   from a web browser on a computer in the same domain as the server running Search.
   - Record the values in the **Shard** column for the 
     rows with a **state** value of **unassigned** and [contact Support](https://developercommunity.visualstudio.com/spaces/21/index.html).<p />

<a name="unexpected-results"></a>

## Q: Why doesn't Search show the expected results?
A: 
1. If the files were added in the last few minutes, wait for about 10 minutes while they're indexed.
2. [Check indexing status](administration.md#check-index) for the collection. 
3. If the files are still not shown in the results, 
   [reindex the repository or collection](administration.md#re-index)
   where the files are located.

<a name="server-slow"></a>

## Q: Why is Azure DevOps Server or TFS overall performance affected?
A:
1. [Pause all indexing](administration.md#pause-index) and see if performance recovers.
2. If performance does recover, consider locating Search 
   on a separate server if you haven't already done so.

<a name="no-search-post-upgrade"></a>

## Q: Why doesn't Search work after upgrading to Azure DevOps Server 2019 Update 1?

A: If Search is on a separate remote server and the source version is TFS 2018 Update 2 or higher, verify that the user followed [these upgrade steps](administration.md#upgrading-search).
Run [this script](https://github.com/microsoft/Code-Search/blob/master/Azure_DevOps_Server_2019/Troubleshooting/Repair-Search.ps1) to fix the issue, if the upgrade steps weren't followed.

## Partial results in code search

### Problem

I see a **Showing partial code results** banner in code search.

 ![Showing partial code results](media/shared/faq-partialresult.png)

### Explanation

Your code base might have one or more large repositories. The larger the repository, the higher number of documents that get searched. When you search large repositories, the request could take more time to process, which can cause the search request to fail. In this case, you may see partial search results along with the **Showing partial code results** banner, per the previous image.

### Recommendation

You could try the following alternatives, as applicable to your scenario:

* Scope your query by using filters to narrow down to a "repo" or a "path".
* See if you can narrow your query to avoid scenarios that require matching too many terms. 

For example, while looking for methods like App_App1, App_App2, and so on, instead of searching for ```a*``` try searching for ```app*``` instead. (```a*``` will match many more terms than ```app*```).

::: moniker-end

::: moniker range=" <= azure-devops"

## Q: How do I search company-wide for published internal NuGet packages?

A: Go to [Discover in Azure DevOps(https://aka.ms/discover), enter your query and search, and then choose the **Packages** pivot. You can also navigate from your organization's landing page. At the top left of your screen, there's a link to the Microsoft enterprise search page below the Azure DevOps logo.

## Q: Is Azure DevOps Search extensible?

A: Currently, no, but you can submit a new feature request in the [Developer Community](https://developercommunity.visualstudio.com/spaces/8/index.html).

## Wildcard search

### Problem

You may see different results while doing a wildcard search for the term ```ge*``` as compared to a wildcard search for the term ```get*```. For example, in the image below you see ```ge*``` shows **7509** results.

![Wildcard search for ge*](media/shared/faq-wildcard1.png)

while ```get*``` shows **109,134** results.

![Wildcard search for get*](media/shared/faq-wildcard2.png)

### Explanation

Let's say, you're searching for ```app*```. In the backend, the wildcard `*` expands to match any character sequence after the term ```app```. For example, ```app*``` might expand to ```app, app0, app01, .., apple```. The expansion takes place for the first 100 expanded terms only. Post expansion, all the files associated with the 100 expanded terms display on the search results page. There's a possibility that ```application``` may not be within the first 100 expanded terms so, you may not find files with the search term ```application``` in the search results. You may see fewer search results for the term ```ge*``` as compared to ```get*```.

### Recommendation

Ensuring that you can find the most meaningful and actionable results as fast as possible, enter more criteria in the search bar.
::: moniker-end

## Related articles
::: moniker range=" azure-devops"
- [Export access levels audit log](../../organizations/security/export-users-audit-log.md)
::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"
- [Get started with Search](get-started-search.md)
::: moniker-end
