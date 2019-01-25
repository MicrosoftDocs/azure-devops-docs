---
title: List work items with managed queries 
titleSuffix: Azure Boards 
description: Track work by creating queries to list work items in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: boards-queries
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 285a014e-89bf-4e5f-bebf-11094e93d796  
ms.topic: overview
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---


# About managed queries  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

A query lists a filtered set of work items. You can initiate a query using the [query editor](using-queries.md). Optionally, you can perform an adhoc search using the [search box](search-box-queries.md). 

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
-   All valid users with standard access can create queries and folders under the **My Queries** area. To create queries and query folders under **Shared Queries**, you must have the Contribute permission set. For more information, see [Set permissions on queries](../queries/set-query-permissions.md).
-   You can modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, [open the query editor](../queries/using-queries.md).   
-   You can open any query in [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../backlogs/office/create-your-backlog-tasks-using-project.md), where you can update the fields of one or more work items and publish your changes to the database for tracking work items.  
-   You can [visualize status or progress](../../report/dashboards/charts.md) by creating a pie-chart, column chart, or trend chart for flat-list queries. 

::: moniker range="azdevops"
For additional tips when working with the new queries experience or the directory-focused queries views, see [Tips for working with the directory-focused **Queries** pages](view-run-query.md#tips-queries-hub). 
::: moniker-end

<a id="examples"/>
## Example queries 

*You can list work items based on the following criteria...*  

### Assignment and other account-specific fields
- [Active items assigned to me](query-by-workflow-changes.md#me)
- [Closed items that were assigned to me](query-by-workflow-changes.md#me)
- [Active items assigned to my team](query-by-workflow-changes.md#me)
- [Items I've modified in the last 30 days](query-by-workflow-changes.md#me)
- [Items I closed](query-by-workflow-changes.md#workflow-change-who)
- [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change-who)

### Keywords or phrases
- [Items containing a keyword/phrase](titles-ids-descriptions.md#keyword)
- [Items not containing a keyword/phrase](titles-ids-descriptions.md#keyword)
- [Items with an undefined field](titles-ids-descriptions.md#undefined-value)
- [Items that belong to a category](titles-ids-descriptions.md#category)


### Work item counts and numeric fields 
- [Count of active bugs per developer](query-numeric.md#counts)
- [Count of bugs by area and states](query-numeric.md#counts)
- [Sum of story points and their status](query-numeric.md#effort)
- [Burnup chart of user stories for a sprint](query-numeric.md#effort)
- [Sum of remaining work per developer](query-numeric.md#work) 


### History and revision changes

- [History contains a specific word](history-and-auditing.md)
- [History doesn't contain a specific word](history-and-auditing.md)
- [Reactivated items](history-and-auditing.md)
- [Items closed within a time period](history-and-auditing.md)
- [Items you've been associated with](history-and-auditing.md)

### Date field or current iteration

- [Items created in the last 30 days](query-by-date-or-current-iteration.md)
- [Items modified on a specific date](query-by-date-or-current-iteration.md)
- [Items resolved today](query-by-date-or-current-iteration.md)
- [Items closed within a specific time period](query-by-date-or-current-iteration.md)
- [Items whose updated status](query-by-date-or-current-iteration.md)
- [Items closed in the current sprint](query-by-date-or-current-iteration.md)

### State, reason, or workflow changes
- [Resolved user stories](query-by-workflow-changes.md#workflow-change)
- [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change)
- [Items failing acceptance tests](query-by-workflow-changes.md#workflow-change)
- [Items closed within the last 15 days](query-by-workflow-changes.md#workflow-change)
- [Items removed as they're duplicate](query-by-workflow-changes.md)
- [Items closed and then reactivated](query-by-workflow-changes.md#reactivated)
- [Stories in the Code/Doing column](query-by-workflow-changes.md#kanban_query_fields)
- [Items in the Expedite swimlane](query-by-workflow-changes.md#kanban_query_fields)
- [Items in a swimlane containing "Test"](query-by-workflow-changes.md#kanban_query_fields) 
  
### Links and attachments 
- [All child items of a single epic ](linking-attachments.md)
- [All related items](linking-attachments.md)
- [Items with one or more attachments](linking-attachments.md)
- [Items with 2 or more hyperlinks](linking-attachments.md)
- [Items containing external links](linking-attachments.md)

### Tags
- [Items containing a specific tag](add-tags-to-work-items.md)
- [Items that don't contain a specific tag](add-tags-to-work-items.md)
- [Items that contain two or more tags ](add-tags-to-work-items.md)

### Build and Test fields
- [List bugs and linked test cases](build-test-integration.md#linked-bugs)
- [List automated test cases](build-test-integration.md)
- [List requirement-based test suites](build-test-integration.md)
- [List query-based test suites](build-test-integration.md)  


::: moniker range=">= azdevserver-2019"

### Team focus 
- [Assigned to a member of a team](query-by-workflow-changes.md#group)  
- [Assigned to a team's area path](query-by-area-iteration-path.md#team-area-path)  
- [Assigned to a team's current sprint](query-by-date-or-current-iteration.md#current-iteration)  
- [Assigned to a team's sprint window](query-by-date-or-current-iteration.md#current-iteration-plus-minus-n)  

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

> [!div class="mx-tdBreakAll"]  
> |Team focus |  
> |-------------| 
> |- [Assigned to a member of a team](query-by-workflow-changes.md#group)<br/>- [Assigned to a team's current sprint](query-by-date-or-current-iteration.md#current-iteration)  |

::: moniker-end



## Related articles

- [Work item field index](../work-items/guidance/work-item-field.md)   
- [Query permissions](set-query-permissions.md)  

To add a custom field to support your query needs, see [Customize your work tracking experience](../../reference/customize-work.md). 

To learn about query charts and widgets, see these topics:  
- [Chart a flat-list query](../../report/dashboards/charts.md)   
- [Chart for work items widget](../../report/dashboards/widget-catalog.md#chart-wit-widget)  
- [Query results widget](../../report/dashboards/widget-catalog.md#query-results-widget)   
- [Query tile widget](../../report/dashboards/widget-catalog.md#query-tile-widget) 
 

### Query within or across projects
By default, you query within a single project. However, using the query editor, you can [query across projects](using-queries.md#across-projects). 

### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace, Azure DevOps tab. 
