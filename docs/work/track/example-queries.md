---
title: Create managed queries | Team Services & TFS
description: Track work by creating queries to list items using Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-agile-wit
ms.assetid: 285a014e-89bf-4e5f-bebf-11094e93d796  
ms.topic: get-started-article 
ms.manager: douge
ms.author: kaelli
ms.date: 04/06/2017  
---


# Create managed queries to list, update, or chart work items    

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 

A query lists a filtered set of work items. You can initiate a query using the [work item search box](search-box-queries.md) or through the [query editor](using-queries.md). By default, you query within a single team project. However, using the query editor, you can [query across team projects](using-queries.md#across-projects). 

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

If you are looking for a specific work item, using the adhoc query or search box query may be your best bet. If you want to generate a list of work items to triage, update, chart, or share with others, then use a managed query. 
 
 
<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Get started with queries</p>
- [Adhoc versus managed queries](adhoc-vs-managed-queries.md)    
- [Search box queries](search-box-queries.md)  
- [Query editor](using-queries.md)    
- [Query operators & macros](query-operators-variables.md)       
- [Work item field index](../guidance/work-item-field.md)   
- [Query permissions](set-query-permissions.md)  

</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Track and share work items</p>
- [Add tags to work items](add-tags-to-work-items.md)  
- [Follow work](../../collaborate/follow-work-items.md)  
- [Share work plans](share-plans.md)  
- [Link work items](link-work-items-support-traceability.md)  
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Query charts and widgets</p>
- [Chart a flat-list query](../../report/charts.md)   
- [Chart for work items widget](../../report/widget-catalog.md#chart-wit-widget)  
- [Query results widget](../../report/widget-catalog.md#query-results-widget)   
- [Query tile widget](../../report/widget-catalog.md#query-tile-widget) 
</div>

<div style="clear:left;font-size:100%">
</div>


<a id="examples"/>
## Example queries 

####*You can list work items based on the following criteria...*  

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Assignment and<br/>other account-specific fields</p>
- [Active items assigned to me](query-by-workflow-changes.md#me)   
- [Closed items that were assigned to me](query-by-workflow-changes.md#me)   
- [Active items assigned to my team](query-by-workflow-changes.md#me)   
- [Items I've modified in the last 30 days](query-by-workflow-changes.md#me)   
- [Items I closed](query-by-workflow-changes.md#workflow-change-who)   
- [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change-who)   
  
</div>


<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;"><br/>Keywords or phrases</p> 
- [Items containing a keyword/phrase](titles-ids-descriptions.md#keyword)   
- [Items not containing a keyword/phrase](titles-ids-descriptions.md#keyword)   
- [Items with an undefined field](titles-ids-descriptions.md#undefined-value)   
- [Items that belong to a category](titles-ids-descriptions.md#category)      
</div>


<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Work item counts<br/>and numeric fields</p>
- [Count of active bugs per developer](query-numeric.md#counts)   
- [Count of bugs by area and states](query-numeric.md#counts)   
- [Sum of story points and their status](query-numeric.md#effort)   
- [Burnup chart of user stories for a sprint](query-numeric.md#effort)    
- [Sum of remaining work per developer](query-numeric.md#work)    
</div>


<div style="clear:left;font-size:100%">
</div>
<hr/>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">History and revision changes</p>
- [History contains a specific word](history-and-auditing.md)   
- [History doesn't contain a specific word](history-and-auditing.md)   
- [Reactivated items](history-and-auditing.md)   
- [Items closed within a time period](history-and-auditing.md)   
- [Items you've been associated with](history-and-auditing.md)      
</div>


<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Date field or current iteration</p>
- [Items created in the last 30 days](query-by-date-or-current-iteration.md)   
- [Items modified on a specific date](query-by-date-or-current-iteration.md)   
- [Items resolved today](query-by-date-or-current-iteration.md)   
- [Items closed within a specific time period](query-by-date-or-current-iteration.md)   
- [Items whose updated status](query-by-date-or-current-iteration.md)   
- [Items closed in the current sprint](query-by-date-or-current-iteration.md)   
   
</div>


<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">State, reason, or workflow changes</p>
- [Resolved user stories](query-by-workflow-changes.md#workflow-change)   
- [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change)   
- [Items failing acceptance tests](query-by-workflow-changes.md#workflow-change)   
- [Items closed within the last 15 days](query-by-workflow-changes.md#workflow-change)   
- [Items removed as they're duplicate](query-by-workflow-changes.md)   
- [Items closed and then reactivated](query-by-workflow-changes.md#reactivated)   
- [Stories in the Code/Doing column](query-by-workflow-changes.md#kanban_query_fields)   
- [Items in the Expedite swimlane](query-by-workflow-changes.md#kanban_query_fields)   
- [Items in a swimlane containing "Test"](query-by-workflow-changes.md#kanban_query_fields)   
   
</div>

<div style="clear:left;font-size:100%">
</div>
<hr/>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Links and attachments</p>
- [All child items of a single epic ](linking-attachments.md)   
- [All related items](linking-attachments.md)   
- [Items with one or more attachments](linking-attachments.md)   
- [Items with 2 or more hyperlinks ](linking-attachments.md)   
- [Items containing external links](linking-attachments.md)      
</div>


<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Tags</p> 
- [Items containing a specific tag](add-tags-to-work-items.md)   
- [Items that don't contain a specific tag](add-tags-to-work-items.md)   
- [Items that contain two or more tags ](add-tags-to-work-items.md)     
</div>


<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;margin-bottom:0px;text-align:center;">Build and Test fields</p>
- [List bugs and linked test cases](build-test-integration.md#linked-bugs)   
- [List automated test cases](build-test-integration.md)   
- [List requirement-based test suites](build-test-integration.md)   
- [List query-based test suites](build-test-integration.md)     
</div>
<div style="clear:left;font-size:100%">
</div>

<hr/>




## Related notes

To add a custom field to support your query needs, see [Customize your work tracking experience](../customize/customize-work.md). 

- [Adhoc versus managed queries](adhoc-vs-managed-queries.md)  
- [Add work items](../backlogs/add-work-items.md)  
- [Work item field index](../guidance/work-item-field.md) 
- [Agile tools](../overview.md)  
- [Work Item Query Language](../../reference/wiql-syntax.md)  


### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace. 
