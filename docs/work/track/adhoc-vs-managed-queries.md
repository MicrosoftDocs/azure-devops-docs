---
title: Adhoc vs managed queries | Team Services & TFS
description: Use adhoc or built-in search/managed queries to find work items using Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 5A96317D-5A10-44CB-B2F9-F166BBAE916B
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/02/2017  
---

# Adhoc vs managed work item queries

<b>Team Services </b>  

>[!NOTE]  
>**Feature availability:**&#160;&#160;The Work item search feature is available from Team Services.     

You have two ways to perform work item searches: adhoc and managed. You perform adhoc queries using the work item search box (shown below), whereas you perform managed queries using the built-in search function available from the Work hub, Queries page.  

![Search Work Items Text Box](_img/using-queries-search-box-ts.png)

**Use adhoc queries when you want to:**
- Find a specific work item using its ID or a keyword 
- Find one or more work items across all team projects in a fast, flexible manner
- Perform full text search across all work item fields
- Review work items assigned to a specific team member
- Search against specific work item fields to quickly narrow down a list of work items 
- Determine what key words will support a managed search 

	>[!NOTE]  
	>With Work item search, searches are performed against a full-text search engine that has indexed all work item fields.  

**Use managed queries when you want to:**
- Review or triage a group of work items  
- Perform bulk updates on several work items such as change Assign To, Iteration Path, or more 
- Review parent-child or dependent links among work items 
- Create a status or trend chart from a flat list query  
- Create a list of work items that you'll export to [Excel](../office/bulk-add-modify-work-items-excel.md) or [Project](../office/create-your-backlog-tasks-using-project.md) (requires that you have installed the [Team Foundation Server Standalone Office Integration 2015 (free)](https://www.visualstudio.com/downloads/#team-foundation-server-office-integration-2015-update-3-1) plug-in)   
	

## Work item search box context 
Note that with  Work item search, the work item search box is repurposed to support adhoc queries. In order to initiate a managed search, you need to open the **Work>Queries** page. 


##Related notes  

To learn more about each search type, see these topics:  

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:0px;text-align:center;">Adhoc work item queries </p>
- [Get started with Work Item Search](../../search/workitem/get-started.md)   
- [Rich work item search results](../../search/workitem/search-results.md)   
- [Advanced work item search options](../../search/workitem/advanced-search-syntax.md)       
</div>


<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:0px;text-align:center;">Managed work item queries</p>
- [Use the query editor to list and manage queries](using-queries.md)   
- [Create managed queries](example-queries.md)   
- [Search box queries](search-box-queries.md)     
- [Items that belong to a category](titles-ids-descriptions.md#category)      
</div>


<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;margin-bottom:0px;text-align:center;">Code search</p>
- [Install Code search extension](../../search/code/get-started.md)   
- [Scope your search](../../search/code/repos-and-projects.md)   
- [Advanced options](../../search/code/advanced-search.md)      
</div>


<div style="clear:left;font-size:100%">
</div>
