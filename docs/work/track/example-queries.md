---
title: Create managed queries 
description: Track work by creating queries to list items using Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-wit
ms.assetid: 285a014e-89bf-4e5f-bebf-11094e93d796  
ms.topic: get-started-article
ms.manager: douge
ms.author: kaelli
ms.date: 09/29/2017  
---


# Create managed queries to list, update, or chart work items    

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

A query lists a filtered set of work items. You can initiate a query using the the [query editor](using-queries.md). Optionally, you can perform an adhoc search using the [search box](search-box-queries.md). 

With queries, you can perform these functions: 

- List items to perform bulk updates, assign or reassign    
- Review work that's in progress or recently closed  
- Triage work (set priority, review, update)   
- Create a chart and add it to a dashboard  
- Create a chart to get a count of items or sum a field  
- Create a chart that shows a burndown or burnup over time 
- View a tree of parent-child related work items 

For the mechanics of constructing and saving queries, see [Use the query editor to list and manage queries](using-queries.md). For specific examples, click  one of the following links.  

## Getting started 

If you are looking for a specific work item, use the adhoc search box. If you want to generate a list of work items to triage, update, chart, or share with others, then use a managed query. 
 
- [View and run a query](view-run-query.md)   
- [Perform an adhoc search](search-box-queries.md)  
- [Query editor](using-queries.md)    
- [Query operators & macros](query-operators-variables.md)       
- [Organize and run managed queries](organize-queries.md)   


###Additional tips for working with queries
-   To find work items that are assigned to you, add **@Me** as the value for the Assigned To field in one of the query clauses.  
-   All valid users with standard access can create queries and folders under the **My Queries** area. To create queries and query folders under **Shared Queries**, you must have the Contribute permission set. For more information, see [Set permissions on queries](../track/set-query-permissions.md).
-   You can modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, [open the query editor](../track/using-queries.md).   
-   You can open any query in [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../backlogs/office/create-your-backlog-tasks-using-project.md), where you can update the fields of one or more work items and publish your changes to the database for tracking work items.  
-   You can [visualize status or progress](../../report/dashboards/charts.md) by creating a pie-chart, column chart, or trend chart for flat-list queries. 



<a id="examples"/>
## Example queries 

*You can list work items based on the following criteria...*  

> [!div class="mx-tdBreakAll"]  
> |Assignment and<br/>other account-specific fields |<br/>Keywords or phrases |Work item counts<br/>and numeric fields  |  
> |-------------|----------|---------|  
> |- [Active items assigned to me](query-by-workflow-changes.md#me)<br/>- [Closed items that were assigned to me](query-by-workflow-changes.md#me)<br/>- [Active items assigned to my team](query-by-workflow-changes.md#me)<br/>- [Items I've modified in the last 30 days](query-by-workflow-changes.md#me)<br/>- [Items I closed](query-by-workflow-changes.md#workflow-change-who)<br/>- [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change-who) |- [Items containing a keyword/phrase](titles-ids-descriptions.md#keyword)<br/>- [Items not containing a keyword/phrase](titles-ids-descriptions.md#keyword)<br/>- [Items with an undefined field](titles-ids-descriptions.md#undefined-value)<br/>- [Items that belong to a category](titles-ids-descriptions.md#category)|- [Count of active bugs per developer](query-numeric.md#counts)<br/>- [Count of bugs by area and states](query-numeric.md#counts)<br/>- [Sum of story points and their status](query-numeric.md#effort)<br/>- [Burnup chart of user stories for a sprint](query-numeric.md#effort)<br/>- [Sum of remaining work per developer](query-numeric.md#work)  | 

> [!div class="mx-tdBreakAll"]  
> |History and revision changes |Date field or current iteration |State, reason, or workflow changes |  
> |-------------|----------|---------|  
> |- [History contains a specific word](history-and-auditing.md)<br/>- [History doesn't contain a specific word](history-and-auditing.md)<br/>- [Reactivated items](history-and-auditing.md)<br/>- [Items closed within a time period](history-and-auditing.md)<br/>- [Items you've been associated with](history-and-auditing.md) |- [Items created in the last 30 days](query-by-date-or-current-iteration.md)<br/>- [Items modified on a specific date](query-by-date-or-current-iteration.md)<br/>- [Items resolved today](query-by-date-or-current-iteration.md)<br/>- [Items closed within a specific time period](query-by-date-or-current-iteration.md) <br/>-  [Items whose updated status](query-by-date-or-current-iteration.md)<br/>- [Items closed in the current sprint](query-by-date-or-current-iteration.md) |- [Resolved user stories](query-by-workflow-changes.md#workflow-change)<br/>-  [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change) <br/>- [Items failing acceptance tests](query-by-workflow-changes.md#workflow-change)<br/>-  [Items closed within the last 15 days](query-by-workflow-changes.md#workflow-change)<br/>-  [Items removed as they're duplicate](query-by-workflow-changes.md)<br/>-  [Items closed and then reactivated](query-by-workflow-changes.md#reactivated)<br/>-  [Stories in the Code/Doing column](query-by-workflow-changes.md#kanban_query_fields)<br/>-  [Items in the Expedite swimlane](query-by-workflow-changes.md#kanban_query_fields)<br/>-  [Items in a swimlane containing "Test"](query-by-workflow-changes.md#kanban_query_fields) |    
 
> [!div class="mx-tdBreakAll"]  
> |Links and attachments |Tags |Build and Test fields  |  
> |-------------|----------|---------|  
> |-  [All child items of a single epic ](linking-attachments.md)<br/>- [All related items](linking-attachments.md)<br/>- [Items with one or more attachments](linking-attachments.md)<br/>- [Items with 2 or more hyperlinks](linking-attachments.md) <br/>- [Items containing external links](linking-attachments.md) |- [Items containing a specific tag](add-tags-to-work-items.md)<br/>- [Items that don't contain a specific tag](add-tags-to-work-items.md)<br/>- [Items that contain two or more tags ](add-tags-to-work-items.md) |- [List bugs and linked test cases](build-test-integration.md#linked-bugs)<br/>- [List automated test cases](build-test-integration.md)<br/>- [List requirement-based test suites](build-test-integration.md)<br/>- [List query-based test suites](build-test-integration.md) |    


## Get started with queries 



## Related notes

- [Work item field index](../work-items/guidance/work-item-field.md)   
- [Query permissions](set-query-permissions.md)  

To add a custom field to support your query needs, see [Customize your work tracking experience](../customize/customize-work.md). 

To learn about query charts and widgets, see these topics:  
- [Chart a flat-list query](../../report/dashboards/charts.md)   
- [Chart for work items widget](../../report/dashboards/widget-catalog.md#chart-wit-widget)  
- [Query results widget](../../report/dashboards/widget-catalog.md#query-results-widget)   
- [Query tile widget](../../report/dashboards/widget-catalog.md#query-tile-widget) 
 

### Query within or across team projects
By default, you query within a single team project. However, using the query editor, you can [query across team projects](using-queries.md#across-projects). 

### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace. 
