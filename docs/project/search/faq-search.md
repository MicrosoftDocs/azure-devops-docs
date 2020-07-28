---
title: FAQs and problem solutions for Search   
description: Learn the answers to frequently asked questions (FAQs) and troubleshooting info about Search in Azure DevOps Server and TFS.
ms.assetid: A78DC9CF-4ADD-46D7-9E25-D1A0764FCB06
ms.technology: devops-collab
ms.topic: conceptual
ms.author: sunar
author: chcomley
ms.date: 07/23/2020
monikerRange: '>= tfs-2017 < azure-devops'
---

# Troubleshoot search

[!INCLUDE [version-header-tfs-only](../../includes/version-header-tfs-only.md)]

<a name="no-search-box"></a>

## Q: Why isn't the Search box displayed after it's configured?
A:
1. The search box is shown only in the context of a project page. 
   Navigate to a project and check if the search box is displayed at the top right. 

2. If the search box is not shown, verify that the extension is installed for the collection. 
   If not, [install](administration.md#install-tfs) or [configure](administration.md#config-ts-azuredevops) the extension.

<a name="no-results-install"></a>

## Q: Why are no search results shown after installing or configuring Search?
A:
1. Wait until you're sure sufficient time has elapsed
   after installing or configuring Search. It typically takes
   less than one hour for Search to index a collection, but 
   it may take up to 12 hours depending on the size and number of code files, work items, or wiki pages.

2. If no results are shown after this period, 
   [check indexing status](administration.md#check-index). 

<a name="indexing-status-for-collections"></a>

## Q: How do I know if indexing was triggered for all the collections?
A:
* [Check indexing status](administration.md#check-index) separately for each collection.

<a name="no-results-later"></a>

## Q: Why does Search stop working and no results are shown?

A: Follow these steps. Replace "SearchServer" with the 
name of the server where Search is installed:

1. Access the URL `http://SearchServer:9200` from a web browser
   on a computer in the same domain as the server running Search.
   - If the status returned is `200 - OK`, go to step 2.
   - If any other status is returned, [contact Support](https://azure.microsoft.com/support/devops/).
   - If you don't get a response, verify that the 
     **elasticsearch-service-x64** service is running on 
     the server where Search is configured. If the service
     is stopped, start it and access the Search server again.  
     If you still get no response, or a response other than
     `200 - OK`, [contact Support](https://azure.microsoft.com/support/devops/).<p />

2. If the status is 200, access the URL `http://SearchServer:9200/_cat/health?v`
   from a web browser on a computer in the same domain as the server running Search.
   - If the status column shows green/OK, and 
     Search is still not working, [contact Support](https://azure.microsoft.com/support/devops/). 
   - If the status column shows red/fault, look at the value
     in the **init** or **unassigned** columns. If these values are 
     greater than zero, wait for 30 minutes and then
     repeat this step. If the values are unchanged, go to step 3.<p />

3. Access the URL `http://SearchServer:9200/_cat/shards?v`
   from a web browser on a computer in the same domain as the server running Search.
   - Make a note of the values in the **Shard** column for the 
     rows with a **state** value of **unassigned** and [contact Support](https://azure.microsoft.com/support/devops/).<p />

<a name="unexpected-results"></a>

## Q: Why doesn't Search show the expected results?
A: 
1. If the files were added in the last few minutes,
   wait for 10 minutes or so while they are indexed.
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

## Q: Why doesn't Search work post upgrade to Azure DevOps Server 2019 Update 1?

A: If the search is set up on a separate (remote) server and source version is TFS 2018 Update 2 (or higher), verify that [these upgrade steps](administration.md#upgrading-search) were followed.
If not, then run [this script](https://github.com/microsoft/Code-Search/blob/master/Azure_DevOps_Server_2019/Troubleshooting/Repair-Search.ps1) to fix the issue.

## Partial results in code search

### Problem

I see a **Showing partial code results** banner in code search.

 ![Showing partial code results](media/shared/faq-partialresult.png)

### Explanation

You're likely to encounter this scenario when your code base has one or more large repositories (larger the repository, more the number of documents to search). So, when you search such repositories, the request may take more time to process from all documents in the index and cause the search request to time out on the index. In such a case, you may see partial search results along with **Showing partial code results** banner as shown above before the request times out.

### Recommendation

You could try the following alternatives as applicable for your scenarios

* Try to scope your query by using filters to narrow down to a "repo" or a "path".
* See if you can narrow down your query to avoid scenarios that require matching too many terms while searching. 

For example, while looking for methods like App_App1/ App_App2 etc., instead of searching for ```a*``` try searching for ```app*``` instead. (```a*``` will match many more terms than ```app*```).

## Wildcard search

### Problem

You may see different results while doing a wildcard search for the term ```ge*``` as compared to a wildcard search for the term ```get*```. For example, in the image below you see ```ge*``` shows **7509** results.

![Wildcard search for ge*](media/shared/faq-wildcard1.png)

while ```get*``` shows **109,134** results.

![Wildcard search for get*](media/shared/faq-wildcard2.png)

### Explanation

Let's understand how wildcard search works in the given scenario. Let's say you search for ```app*```. In the backend, the wildcard `*` is expanded to match any character sequence after the term ```app```. For example, ```app*``` might expand to ```app, app0, app01, .., apple```. This expansion takes place for the first 100 expanded terms only. Post the expansion, all the files associated with the 100 expanded terms are displayed on the search results page. In this case, there is a possibility that ```application``` may not be within the first 100 expanded terms therefore, you may not find files with the search term ```application``` in the search results. This is one of the reasons why you may see fewer search results for the term ```ge*``` as compared to ```get*```.

### Recommendation

This is to ensure the search results remain performant and you can find the most meaningful results as fast as possible. The expectation is that in case of wildcard search you can type more in the search bar to scope the results to a meaningful and actionable chunk.
