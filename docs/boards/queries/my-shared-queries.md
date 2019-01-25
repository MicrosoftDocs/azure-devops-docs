---
title: Individual versus shared queries
titleSuffix: Azure Boards
description: Work with queries to support your and team usage   
ms.custom: boards-queries
ms.prod: devops
ms.technology: devops-agile
ms.assetid:  
robots: NOINDEX, NOFOLLOW
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---


# Individual versus shared queries    

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

!!! WORK IN PROGRESS !!! 

Managed queries help you find work items that you want to review, triage, update, or list in a report. Also, with flat-list queries, you can create status and trend charts and place them on your team dashboard. 

To quickly find a work item by ID, simply enter the ID in the [work item search box](search-box-queries.md). Or, you can enter a keyword to list items containing the keyword in its title, description, or history.   

Otherwise, you can use the Query Editor to craft simple or more complex queries based on the filter clauses you specify. Start by choosing from these three query types:
*	[Flat list of work items](using-queries.md#flat-list-query)
*	[Hierarchical list using a tree query](using-queries.md#tree-query)
*	[List showing dependencies using a direct links query](using-queries.md#directs-link-query) 


Managed queries are useful for monitoring progress. All projects created with a default process come with a defined set of managed queries. Here are a few of the ways that you can use managed queries...

**Teams**

- Active, resolved, or reactivated bugs  
- Bugs being worked on this sprint 
- Features or user stories to release with the next sprint or release cycle 
- Items that have been reviewed or need review (you can use a tag or custom field) 
- High priority service issues  
- Customer support tickets  
- Status or trend charts built from flat-list queries

**Individual** 
- Tasks, bugs, or user stories assigned to me  
- Work I'm focused on this sprint 
- Work I completed in the past week or sprint   

As your organization scales, the number of queries can quickly multiply. It helps to implement a plan to organize the shared query set and use Favorites to quickly mark those queries that you or your team is interested in monitoring. 

Here are some of the tools you can use to manage queries: 
- Create query folders 
- Favorite queries  
- Search across all or favorited queries (new) 
- Grant or revoke permissions to add shared queries 


### General guidance 
- Create a new folder under the Shared Queries folder for each new team added to a project 



 
Quick tips on shared queries
If you are new to Azure Boards and TFS and shared queries, review these tips to learn how you can manage work more effectively:

To find work items that are assigned to you, add @Me as the value for the Assigned To field in one of the query clauses.
All valid users with standard access can create queries and folders under the My Queries area. To create queries and query folders under Shared Queries, you must have the Contribute permission set. For more information, see Set permissions on queries.
You can modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, open the query editor.
You can open any query in Excel or Project, where you can modify the query and publish your changes to the database for tracking work items.
You can visualize progress by creating a pie-chart, column chart, or other chart for flat-list queries.
