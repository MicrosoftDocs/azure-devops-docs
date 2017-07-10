---
title: Create managed queries with the Query Editor | Team Services & TFS
description: Create flat-list, tree, or direct-links queries to list, triage, update, and chart work items  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 364000d3-200a-495a-bfb9-83915240af67
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 05/10/2017  
---

# Use the query editor to create managed queries  

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b>  

Managed queries help you find work items that you want to review, triage, update, or list in a report. Also, with flat-list queries, you can create status and trend charts and place them on your team dashboard. 

To quickly find a work item by ID, simply enter the ID in the [work item search box](search-box-queries.md). Or, you can enter a keyword to list items containing the keyword in its title, description, or history.   

Otherwise, you can use the Query Editor to craft simple or more complex queries based on the filter clauses you specify. Start by choosing from these three query types:
*	[Flat list of work items](#flat-list-query)
*	[Hierarchical list using a tree query](#tree-query)
*	[List showing dependencies using a direct links query](#directs-link-query) 

For details on constructing query clauses and information on each query operator&mdash;such as, `Contains`, `In`, `In Group`, and `<>`(not operator) &mdash;and macros, see [Query fields, operators, and macros](query-operators-variables.md). For an index of example queries, see [Create managed queries](example-queries.md#examples). 

You can create queries in Team Services, the  web portal for Team Foundation Server (TFS), and Team Explorer. Also, you can open a query in [Excel](../office/bulk-add-modify-work-items-excel.md) or [Project](../office/create-your-backlog-tasks-using-project.md) to perform bulk additions and modifications.  

[!INCLUDE [temp](../_shared/image-differences.md)]

<a id="flat-list-query"/>
## Open and edit a query  

The easiest way to define a query is to start with an existing shared query. 
The following example shows how to find all closed bugs by modifying the 
Active Bugs shared query provided with the Agile process template. Examples are based on the user interface provided through the web portal. 

1.	Open a shared query. For example, from the web portal, open the Active Bugs or similar flat list query.   
  
	<img src="_img/using-queries-active-bugs-ts.png" alt="Web portal, Work>Queries, Open Shared queries, Active Bugs" style="border: 1px solid #CCCCCC;" /> 

	>[!TIP]  
	>If you're working in Visual Studio Team Explorer, open the **Work** page to access your queries and shared queries. If Team Explorer isn't visible, click **View>Team Explorer** from the top level menu.   

2.	Edit the query to find closed bugs and then run the query. 
	Use ![Insert new filter line](_img/3.png) to insert a clause above the current clause. Use ![Remove this filter line](_img/4.png) to delete a clause.  Queries are automatically scoped to the current team project. To find work items defined in several team projects, see [Query across team projects](using-queries.md#across-projects).   
	
	**Team Services, TFS 2017, TFS 2015:**  
	
	<img src="_img/query-active-bugs-editor-vso.png" alt="Web portal, Queries page, Editor view of a Flat List Query" style="border: 1px solid #CCCCCC;" />  

	**TFS 2013:**  
	![Editor View of a Flat List Query - On-premises TFS](_img/5.png)  

3.	Save the query to your My Queries folder.  
	  
	  ![Save Query As](_img/6.png)    
	  
	  To save a query to the Shared Queries folder, you need to be a [team administrator](../scale/manage-team-assets.md), a member of the [Project Administrators group](../../setup-admin/add-users.md), or have your Contribute permissions on the folder set to Allow. To learn more, see [Set query permissions](set-query-permissions.md).

<a id="flat-list" />
## Create a query

You can start a fresh, new query from the Queries page in the web portal or the Work Items page in Team Explorer.  

<img src="_img/using-queries-new-query-ts.png" alt="Queries page, Choose New query from the drop down menu" style="border: 1px solid #CCCCCC;" /> 

### Group clauses

Grouped clauses operate as a single unit separate from the rest of the query, similar to putting parentheses around a mathematical equation or logic expression. The And or Or operator for the first clause in the group applies to the whole group.

In the next example, the first expression returns all work items that are priority 1 and all active bugs of any priority. The second expression returns all active priority 1 work items and all priority 1 bugs, whether they are active or not.

| Grouped clauses                                   | Logical expression                                    |
| ------------------------------------------------- | ----------------------------------------------------- |
| ![Filter Using an OR/AND Operator](_img/8.png) | Priority = 1 OR (Work Item Type=Bug AND State=Active) |
| ![Filter Using an AND/OR OR Operator](_img/9.png) | Priority = 1 AND (Work Item Type=Bug OR State=Active) |

To group one or more clauses, select them and then choose the ![Group Query Clause icon](../_img/icons/group-clauses-icon.png) group clauses icon.

<img src="_img/10.png" alt="Web portal, Group Selected Query Clauses" style="border: 1px solid #CCCCCC;" /> 

If your query results do not return your expected set of work items, follow these steps: 

- Make sure that each clause is defined as you intended.  
- Verify And/Or assignments to each clause. If your results contain more work items than expected, often an Or clause is present instead of an And clause.  
- Determine if you need to group or change the grouping of the query clauses and the And/Or assignments of each grouped clause.  
- Add more query clauses to refine your query filter criteria.  
- Review the options available to specify [fields, operators, and values](query-operators-variables.md).  

<a id="tree-query" />
###Use a tree query to view hierarchies  

Use the tree query (![Tree Query](_img/11.png)) to view a multi-tiered, nested list of work items. For example, you can view all backlog items and their linked tasks.

![Results List Showing a Tree Query](_img/12.png)

Expand (Expand node (![Expand node, web portal](_img/13.png)) or collapse (![Collapse node, web portal](_img/14.png)) leaf nodes to focus on different parts of the tree.

Define the filter criteria for both parent and child work items. 

![Alt text](_img/15.png) 

To find linked children, select Match top-level work items first. To find linked parents, select Match linked work items first.

>[!NOTE]  
>You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases. These items aren't linked together using parent-child link types. You can [view the hierarchy through the Test Plans page of the Test hub](../../test/manual-exploratory-testing/getting-started/create-a-test-plan.md). 

<a id="directs-link-query" />
## Use direct links to view dependencies

Use the direct links query (![Direct Links Query](_img/16.png)) to track work items that depend on other tracked work, such as tasks, bugs, issues, or features. For example, you can view backlog items that depend on other items being implemented or a bug being fixed. 

![Direct Links Query Results](_img/17.png)

Use the direct links query to track dependencies your team has that other teams work on, or manage commitments your team has made to other teams. Specify the filter criteria for both top and linked work items, and select the types of links used to filter the dependencies. 

![Direct Links Query Editor](_img/18.png)

Filter your first-tier list of work items by choosing one of these options:

- Only return work items that have the specified links: First-tier work items are returned, but only if they have links to work items specified by the linked work items filter criteria. 

- Return all top level work items: All first-tier work items are returned regardless of the linked work items filter criteria. Second-tier work items that are linked to the first tier are returned if they match the linked work items filter criteria.

- Only return work items that do not have the specified links: First-tier work items are returned, but only if they do not have links to work items specified by the linked work items filter criteria.

To learn more about each link type, see [Link work items to support traceability and manage dependencies](link-work-items-support-traceability.md).


<a id="across-projects" />  
## Query across team projects  
By default, shared queries and new queries are scoped to the current team project. However, you can create queries to find work items defined within the team project collection. You save cross-project queries under a specific team project.     

> [!NOTE]  
> <b>Feature availability: </b>The **Query across projects** feature is supported from Team Services and the web portal for TFS 2015.1 or later version.  

### Team Services and TFS 2015.1  
To list work items defined in two or more team projects, checkmark **Query across projects**. For example, the following query finds all features created in all team projects within the last 30 days.
 
<img src="_img/using-queries-query-across-projects.png" alt="Web portal, Queries page, Query Editor, Checkbox, Query across team projects" style="border: 1px solid #CCCCCC;" /> 

With the Query across projects checked, you can add the Team Project field to filter to a select number of team projects.   

<img src="_img/using-queries-query-across-select-projects.png" alt="Team Services and TFS 2015.1, Web portal, Query across select team projects using the In operator" style="border: 1px solid #CCCCCC;" /> 

>[!NOTE]  
>Separate multiple project names with the list separator that corresponds to the regional settings defined for your client computer, for example, a comma (,). 

The Team Project field becomes available only after you check  **Query across projects**.  Moreover, when Query across projects is unchecked, only those fields from those WITs defined in the current team project appear in the Field drop-down menu. When Query across projects is checked, all fields from all WITs defined in all team projects in the collection appear in the Field drop-down menu.  

### TFS 2015, TFS 2013 
To find all features created in all team projects within the last 30 days, remove the **Team Project=@Project** clause from the query.  

<img src="_img/using-queries-query-across-all-projects-tfs.png" alt="TFS 2013-2015, Web portal, Query across select team projects using the In operator" style="border: 1px solid #CCCCCC;" /> 

All fields from all WITs defined in all team projects in the collection always appear in the Field drop-down menu.  

Use **Team Project=@Project** to scope the query to find only those work items defined for the current team project. 

## Related notes

That's the basics about using queries. For an index of query examples, see [Create managed queries](example-queries.md#examples). To add a custom field to track additional data, see [Customize your work tracking experience](../customize/customize-work.md). 

If you want to export a query to Excel, you can do that from [Excel or Visual Studio/Team Explorer](../office/bulk-add-modify-work-items-excel.md). Or, to export a query directly from the web portal Queries page, install the [VSTS Open in Excel Marketplace extension](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel). This extension will add in **Open in Excel** link to the toolbar of the query results page. 

See also: 
- [Adhoc versus managed queries](adhoc-vs-managed-queries.md)  
- [Add work items](../backlogs/add-work-items.md)  
- [Work item field index](../guidance/work-item-field.md) 
- [Agile tools](../overview.md)   
- [Chart a flat-list query](../../report/charts.md)  
- [Create Excel reports from a query (TFS)](../../report/excel/create-status-and-trend-excel-reports.md)

### Add or change columns   
To add or remove columns or change the result sort order, open Column Options.

![Display Columns Tab in Column Options Dialog](_img/19.png)

Also, from the results list, you can drag a column to a new position and select the column title to change the sort order by column.

<a id="favorite-query">  </a>
### Add a query to the dashboard or share it with your team 
To add a query to the home page or a dashboard, open the ![Context Menu Icon](_img/22.png) context menu for the query and [add it to a specific dashboard or as a team favorite](../../report/dashboards.md).   

Share queries with your team by adding them to a folder under the Shared Queries space.  To save a query to a Shared Queries folder, get added to the [project administrators group](../../setup-admin/add-users.md) or have your [permissions set for a folder under Shared Queries](set-query-permissions.md). 

You can only add shared queries to dashboards or as team favorites, and only if you have [team administrator or project administrator permissions](../scale/manage-team-assets.md). 


### Task board versus query list items

You may notice and wonder why the contents of the task board differ from those listed with its created query? To learn more, see [Backlogs, boards, and plans - Task board items versus query list items](../backlogs-boards-plans.md#task-board-items).
 
### Export a query  
From the query editor in Team Explorer, use the File menu to save a query as a .wiq file. When you create a team project, the shared queries are created based on [.wiq files defined in a process](../reference/process-templates/define-work-item-query-process-template.md). 

<a id="define-query-hyperlink" />  
### Define a query as a hyperlink  
The easiest way to define a hyperlink is to create a query that matches what you want and then copy the URL for the query. The hyperlink uses the work item query language (WIQL), which resembles Transact-SQL. For details about constructing WIQLs, see [Syntax for the Work Item Query Language (WIQL)](../../reference/wiql-syntax.md).

Team Services and TFS 2015 require that you encode the WIQL portion of the URL syntax. You can use any URL encoder tool to encode your URL. 

TFS 2013 and previous versions didn't require encoding.  

>[!NOTE]  
>Most browsers enforce a limit of between 2000 and 2083 characters for a URL string.    


**Team Services syntax**

```  
https://{youraccount}.visualstudio.com/DefaultCollection/{TeamProjectName}/{TeamName}/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage]
```
For example, the following hyperlink lists the ID and title of all active bugs defined under the FabrikamFiber/Web area path for the fabrikam.visualstudio.com account.

```  
https://fabrikam.visualstudio.com/DefaultCollection/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.State%5D%3D'Active'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'
```

The decoded WIQL conforms to: 

```
SELECT [System.ID], [System.Title]
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug'
   AND [System.State]='Active'
   AND [System.AreaPath]='FabrikamFiber\Web'
```

**TFS 2015 syntax**

```  
https://{ServerName}/{CollectionName}/{TeamProjectName}/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage]
```

The ```_workitems?``` entry has replaced the ```q.aspx?``` entry used in the syntax for TFS 2013 and previous versions.  

For example, the following hyperlink lists the ID, title, and state of all bugs under the FabrikamFiber/Web area path hosted on the fabrikam server.

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%2C%20%5BSystem.State%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'%20%20
```

Which is comparable to the non-encoded entry:  

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=
SELECT [System.ID], [System.Title], [System.State] 
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug' 
   AND [System.AreaPath]='FabrikamFiber\Web'   
```

**TFS 2013 and previous versions syntax**

```  
https://{ServerName}/{CollectionName}/q.aspx?pname={TeamProjectName}&wiql={WorkItemQueryLanguage]
```
For example, the following hyperlink lists the ID, title, and state of all bugs that have build number 9.0.30304 for the FabrikamFiber team project hosted on the fabrikam server. 

```
http://fabrikam:8080/tfs/DefaultCollection/q.aspx?pname=FabrikamFiber&wiql=
SELECT [System.ID], [System.Title], [System.State] 
	FROM WorkItems 
	WHERE [System.TeamProject]='FabrikamFiber' 
	AND [System.WorkItemType]='Bug' 
	AND [System.FoundIn]='9.0.30304' 
```



### Programmatically query for work items 
You can create dynamic queries using one of the following resources:  

- **REST APIs:**&#160;&#160;[Work item queries and query folders](../../../integrate/api/wit/queries.md) and [Work item query language](../../../integrate/api/wit/wiql.md)
- **SDK:**&#160;&#160;[Query for Bugs, Tasks, and Other Work Items](https://msdn.microsoft.com/library/bb130306.aspx).


See also:
- [Syntax for the Work Item Query Language (WIQL)](../../reference/wiql-syntax.md)  
- [Wiql Editor, a Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)  
 
>[!NOTE]  
>For queries made against Team Services, the WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length.  