---
title: Organize and view queries | Team Services & TFS
description: Manage your queries by using favorites and folders 
ms.prod: vs-devops-alm
ms.technology: vs-devops-agile-wit
ms.assetid: BAD9F638-3F26-4FE3-8A7D-F5C0793BE8AC  
ms.topic: get-started-article 
ms.manager: douge
ms.author: kaelli
ms.date: 05/31/2017  
---


# Organize, view, and run queries    

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 


Managed queries are useful for monitoring progress. All team projects created with a default process come with a defined set of managed queries.  -- here are a few of the ways that you can use managed queries...

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

As your organization scales, the number of queries can quickly multiple. It helps to implement a plan to organize the shared query set and use Favorites to quickly mark those queries that you or your team is interested in monitoring. 

Here are some of the tools you can use to manage queries: 
- Create query folders 
- Favorite queries  
- Search across all or favorited queries (new) 
- Grant or revoke permissions to add shared queries 


### General guidance 
- Create a new folder under the Shared Queries folder for each new team added to a team project 



 
Quick tips on shared queries
If you are new to Team Services or TFS and shared queries, review these tips to learn how you can manage work more effectively:

To find work items that are assigned to you, add @Me as the value for the Assigned To field in one of the query clauses.
All valid users with standard access can create queries and folders under the My Queries area. To create queries and query folders under Shared Queries, you must have the Contribute permission set. For more information, see Set permissions on queries.
You can modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, open the query editor.
You can open any query in Excel or Project, where you can modify the query and publish your changes to the database for tracking work items.
You can visualize progress by creating a pie-chart, column chart, or other chart for flat-list queries.

## Enable or disable the New queries experience

The New queries experience provides more screen room to view and triage query results. It also allows you to search within the set of queries you've defined or that are shared across your team project.  

## View queries

To view queries defined for a team project, open the **Work>Queries** page.  

**New queries experience** 

The page opens to **Favorites** which lists all queries you have favorited. 

- Click **All** to view all queries defined for the team project 
- Expand a folder to view queries within the folder 
- Click a query title to run the query 
- Click the star icon to favorite or unfavorite a query
- Open the context menu to access other options: 

	<img src="_img/organize-queries-drop-down-menu.png" alt="New query experience, Query context menu, shared query" style="border: 1px solid #cccccc;"/>


**Old queries experience**

The page opens to the **Assigned to me** query which lists all work items current assigned to you.  

- Click **All** to view all queries defined for the team project 
- Expand a Shared Queries folder to view queries within the folder 
- Click a query title to run the query 
- Open the context menu to access other options: 

	<img src="_img/organize-queries-drop-down-menu-old-exp.png" alt="Old query experience, Query context menu, shared query" style="border: 1px solid #cccccc;"/>

You can change the permissions set for a shared query folder or shared query. For details, see [Set query permissions](set-query-permissions.md). 


## Add a query folder  (UI changes) 

 - move queries into a folder (drag and drop) or do a Rename to move it into a different folder 
 - Or you can copy it by doing a Save As 



## View favorited queries, favorite a query (UI changes) 

(NEW - across all team projects) 




## Search on queries (New query experience) 


## Run a query 
- Select a query from the drop down menu (NEW) 

 
## Sort a query 


## Create a new query (UI changes) 
	• Move query to a different folder 
 


## Related notes 

- [Set query permissions](set-query-permissions.md) 

