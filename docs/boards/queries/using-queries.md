---
title: Define a work item query in Azure Boards
titleSuffix: Azure Boards
description: Learn how to use queries and perform tasks like define a flat-list, clause, or hyperlink, and use a tree, direct link, hyperlink or logical expression. Also learn how to query across or within projects and view results in a dashboard, and best practices. 
ms.custom: boards-queries, contperf-fy23, linked-from-support, cross-project 
ms.service: azure-devops-boards
ms.assetid: 364000d3-200a-495a-bfb9-83915240af67
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 08/10/2023
---

# Define a work item query in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]

Work item queries generate lists of work items based on the filter criteria provided by you. You can save and share these managed queries with others.

::: moniker range=">= azure-devops-2020"
You can create queries from the web portal or from a supported client, such as Visual Studio Team Explorer. To support bulk updates or additions, import or export queries using [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [.csv files](import-work-items-from-csv.md).  
::: moniker-end
::: moniker range="< azure-devops-2019"
You can create queries from the web portal or from a supported client, such as Visual Studio Team Explorer. To support bulk updates or additions, import or export queries using [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).  
::: moniker-end

Check out our recommended best practices, later in this article.

[!INCLUDE [temp](../includes/prerequisites-queries.md)]

## Choose a query filter 

From the Query Editor, you can select the filter to jump to an article with sample queries. 
Along with the query filters, you can [interactively apply filters to query results](../backlogs/filter-backlogs-boards-plans.md).

::: moniker range=">= azure-devops-2019"
> [!NOTE] 
> Managed queries don't support proximity searches, however semantic searches do. In addition, semantic searches supports both `*` and `?` as wildcard characters and you can use more than one wildcard character to match more than one character. For more information, see [Functional work item search](../../project/search/functional-work-item-search.md).
::: moniker-end

---
:::row:::
   :::column span="2":::
      **Filter features**
   :::column-end::: 
   :::column span="2":::
      **Macros**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      ::: moniker range=">= azure-devops-2019"
      - [Compare fields](./query-field-value.md) 
      - [Key words](./titles-ids-descriptions.md)  
      - [Linked work items](./linking-attachments.md)  
      - [Logical groupings](#use-andor-logical-expression)
      - [Query macros](./about-managed-queries.md#macros)  
      - [Tags](./add-tags-to-work-items.md#query)  
      - [Was Ever](./query-by-workflow-changes.md)  
      - [Was Ever (Board Column)](./query-by-workflow-changes.md#kanban_query_fields)  
      - [Wildcard](./titles-ids-descriptions.md)  
      ::: moniker-end
      ::: moniker range="tfs-2018"
      - [Compare fields](./query-field-value.md) 
      - [Key words](./titles-ids-descriptions.md)  
      - [Linked work items](./linking-attachments.md)  
      - [Logical groupings](#use-andor-logical-expression)  
      - [Query macros](./about-managed-queries.md#macros)  
      - [Tags](./add-tags-to-work-items.md#query)  
      - [Was Ever](./query-by-workflow-changes.md)  
      - [Wildcard](./titles-ids-descriptions.md)  
      ::: moniker-end
   :::column-end::: 
   :::column span="1":::
      ::: moniker range=">= azure-devops-2019"
      - [Blank or empty fields](./titles-ids-descriptions.md#empty-or-not-empty-html-field-queries)
      - [Boolean searches](./query-by-workflow-changes.md#query-changes-to-a-kanban-board) 
      - [Identity searches](./query-by-workflow-changes.md#me) 
      - [History and Discussion](./history-and-auditing.md) 
      - [Kanban board fields](./query-by-workflow-changes.md#query-changes-to-a-kanban-board)
      - [In and Not In Group searches](./planning-ranking-priorities.md#picklist-query-examples) 
      - [Search across projects](#query-across-or-within-projects)
      ::: moniker-end
      ::: moniker range="tfs-2018"
      - [Boolean searches](./query-by-workflow-changes.md#query-changes-to-a-kanban-board) 
      - [History and Discussion](./history-and-auditing.md) 
      - [In and Not In Group searches](./planning-ranking-priorities.md#picklist-query-examples) 
      - [Search across projects](#query-across-or-within-projects)
      ::: moniker-end
   :::column-end:::
   :::column span="2":::
      ::: moniker range=">= azure-devops-2019"
      - [[Any]](titles-ids-descriptions.md)
      - [@Me](query-by-workflow-changes.md)
      - [@Today](query-by-date-or-current-iteration.md) 
      - [@CurrentIteration, @CurrentIteration +/-n](query-by-date-or-current-iteration.md)   
      - [@Follows](titles-ids-descriptions.md#following)
      - [@MyRecentActivity, @RecentMentions, @RecentProjectActivity](titles-ids-descriptions.md#recent-macros)
      - [@StartOfDay, @StartOfMonth, @StartOfWeek, @StartOfYear](query-by-date-or-current-iteration.md)   
      - [@TeamAreas](query-by-area-iteration-path.md)
      ::: moniker-end
      ::: moniker range="tfs-2018"
      - [[Any]](titles-ids-descriptions.md)
      - [@Me](query-by-workflow-changes.md)
      - [@Today](query-by-date-or-current-iteration.md) 
      - [@CurrentIteration](query-by-date-or-current-iteration.md)   
      - [@Follows](titles-ids-descriptions.md#following)
      - [@MyRecentActivity, @RecentMentions, @RecentProjectActivity](titles-ids-descriptions.md#recent-macros)
      ::: moniker-end
   :::column-end:::
:::row-end:::
---

You can also [interactively filter a query](../backlogs/filter-backlogs-boards-plans.md) using the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **Filter** function.

## Open Queries 

[!INCLUDE [temp](../includes/open-queries.md)] 

<a id="flat-list" />

## Define a flat-list query

Start a new query from the **Queries** tab in the web portal or the **Work Items** tab in Team Explorer.  

#### [Browser](#tab/browser/) 

::: moniker range=">= azure-devops-2019"  

Select **New query**.

:::image type="content" source="media/view-run-queries/new-query-new-exp.png" alt-text="Screenshot to Add new query, new experience.":::

The Query Editor displays with the following default settings: **Flat list of work items**, **Work Item Type=[Any]**, and **State=[Any]**. 

:::image type="content" source="media/using-queries/new-query-web-portal.png" alt-text="Screenshot of Query Editor with flat list of work items selected."::: 

Modify the **Values** and [add or remove clauses](#define-a-clause), or change the **Type of query** to [Work items and direct links](#use-direct-links-to-view-dependencies) or to a [Tree of work items](#use-a-work-item-tree-to-view-hierarchies). 
::: moniker-end  

::: moniker range="tfs-2018"  

![Screenshot to Queries page, Choose New query from the drop down menu.](media/using-queries-new-query-ts.png)  

The Query Editor displays with the following default settings: **Flat list of work items**, **Team Project=@Project** (the current project), **Work Item Type=[Any]**, and **State=[Any]**. 

:::image type="content" source="media/using-queries/new-query-flat-list-tfs.png" alt-text="Screenshot of Query Editor with flat list of work items selected."::: 

You can modify the **Values** and [add or remove clauses](#define-a-clause). Or, change the **Type of query** to [Work items and direct links](#use-direct-links-to-view-dependencies) or to a [Tree of work items](#use-a-work-item-tree-to-view-hierarchies). 

::: moniker-end  
 
#### [Visual Studio](#tab/visual-studio/)

Select **New Query** from the **Work Items** page. 

:::image type="content" source="media/using-queries/new-query-visual-studio-2019.png" alt-text="Screenshot of Work Items, choose New Query."::: 

The Query Editor displays with the following default settings: **Flat list (Default)**, **Team Project=current project**, **Work Item Type=[Any]**, and **State=[Any]**. 

:::image type="content" source="media/using-queries/visual-studio-new-query-editor.png" alt-text="Screenshot of Visual Studio Query Editor, flat-list query."::: 

You can modify the **Values** and [add or remove clauses](#define-a-clause). Or, change the **Type of query** to [Work items and direct links](#use-direct-links-to-view-dependencies) or to a [Tree of work items](#use-a-work-item-tree-to-view-hierarchies).

---

## Query across or within projects 

New queries scope to the current project by default. But, you can create queries to find work items defined within the organization or project collection. All queries that you save, however, get saved under a specific project. 

#### [Browser](#tab/browser/) 

To list work items defined in two or more projects, checkmark **Query across projects**. For example, the following query finds all features created in all projects within the last 30 days.

:::image type="content" source="media/using-queries/portal-query-across-projects.png" alt-text="Screenshot of Query Editor with Query across projects checked.":::

With the **Query across projects** checked, you can add the **Team Project** field to filter to a select number of projects.   

:::image type="content" source="media/using-queries/portal-query-across-two-projects.png" alt-text="Screenshot of Query Editor with Team Project and other fields added to filter.":::

> [!NOTE]
> Separate multiple project names with the list separator that corresponds to the regional settings defined for your client computer, for example, a comma `,`. 

- The **Team Project** field is available only after you check  **Query across projects**. 
- When **Query across projects** is checked, all fields from all work item types defined in all projects in the collection appear in the **Field** drop-down menu.
- When **Query across projects** is unchecked, only those fields from those work item types, as defined in the current project, appear in the **Field** drop-down menu.   

#### [Visual Studio](#tab/visual-studio/)

To list work items defined in two or more projects, change the clause for the **Team Project** using the **In** operator, and enter the names of the projects to search in. For example, the following query finds work items defined in the *Fabrikam Fiber* and *Design Agile* projects.  

:::image type="content" source="media/using-queries/visual-studio-query-multiple-projects.png" alt-text="Screenshot of Visual Studio Query Editor, flat-list query, specify two projects clause.":::  

To query across all projects, delete the clause with the **Team Project** field. 

---

## Define a clause

To create a query, define one or more clauses. Each clause defines a filter criteria for a single field. 

#### Sample query clause 

|And/Or|Field|Operator|Value|
|------|-----|--------|-----|
|**And**|**Assigned To**|**=**|**&#64;Me**|

For a list of available operators based on the field data type, see [Query index quick reference](query-index-quick-ref.md#fields-operators-macros). 

All clauses get added as an **And** statement. Select **Or** to change the grouping. Group clauses to ensure that the clause statements are run in the sequence required. 

#### [Browser](#tab/browser/) 

Select **Add new clause** to add another clause at the end of the query, and then select the **Field**, **Operator**, and **Value** for that clause.  

:::image type="content" source="media/using-queries/define-clause.png" alt-text="Screenshot of Query Editor showing how to add a clause.":::

For example, search for all work items assigned to you by specifying the **Assigned To** field, the equals (**=**) operator, and the **@Me** macro, which represents your user identity.

#### [Visual Studio](#tab/visual-studio/)

Select **Click here to add a clause** to add another clause at the end of the query, and then select the **Field**, **Operator**, and **Value** for that clause.  

:::image type="content" source="media/using-queries/visual-studio-add-new-clause.png" alt-text="Screenshot of Visual Studio Query Editor, add new clause.":::  

To insert a clause within the existing set of query clauses, place your cursor on the following clause where you want to insert the clause, and then choose **Insert Clause**. Then, select the **Field**, **Operator**, and **Value** for that clause.  

:::image type="content" source="media/using-queries/visual-studio-add-new-clause.png" alt-text="Screenshot of Visual Studio Query Editor, insert clause.":::  

Or, open the context menu for the clause and choose **Insert Clauses**. 

:::image type="content" source="media/using-queries/visual-studio-insert-delete-clauses.png" alt-text="Screenshot of Visual Studio Query Editor, context-menu for insert clauses and delete clause."::: 

To delete a clause, choose the clause you want to delete, and choose :::image type="icon" source="../media/icons/icon-delete-clause-visual-studio.png" border="false"::: **Delete Clause**.

When finished, choose :::image type="icon" source="../media/icons/run_query.png" border="false"::: **Run** or :::image type="icon" source="../media/icons/icon-save-visual-studio.png" border="false"::: **Save Query**.

* * *

[!INCLUDE [temp](../includes/tip-wiql-extension.md)]

### Checklist for defining a query clause

1. In the first empty row, under the **Field** column heading, choose the down arrow to display the list of available fields, and choose an item in the list. For more information, see [Query Fields and Values](query-operators-variables.md#field-values).

2. In the same row, under the **Operator** column heading, select the down arrow to display the list of available operators, and then choose an item in the list. For more information, see [Operators](query-operators-variables.md#operators).

3. In the same row, under the **Value** column heading, either enter a value, or select the down arrow, and then choose an item in the list. For more information about how to use a macro or variable to specify the current project, user, date, or other selection, see [Variables](query-operators-variables.md#variables).

5. To add a clause, choose **Add new clause**.

	You can add a clause to the end of the query, or perform the following tasks with the corresponding icons: 
	- :::image type="icon" source="../media/icons/add-green-icon.png" border="false"::: **Insert new filter line**
	- :::image type="icon" source="../media/icons/delete_icon.png" border="false"::: **Remove this filter line**
	- :::image type="icon" source="media/query-fields-operators-values-variables/IC588313.png" border="false"::: **Group selected clauses**
	- :::image type="icon" source="media/query-fields-operators-values-variables/IC588314.png" border="false"::: **Ungroup clauses**

## Use a work item tree to view hierarchies  

Use the :::image type="icon" source="media/11.png" border="false"::: **Tree of Work Items** query to view a multi-tiered, nested list of work items. For example, you can view all backlog items and their linked tasks. To focus on different parts of the tree, choose :::image type="icon" source="media/13.png" border="false"::: **Expand all** or :::image type="icon" source="media/14.png" border="false"::: **Collapse all**.  
	 
> [!NOTE]    
> You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases. These items aren't linked together using parent-child link types. However, you can create a direct links query that lists test-related work items. Also, you can, [view the hierarchy through the Test Plans page](../../test/create-a-test-plan.md). 

#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2019"  

:::image type="content" source="media/view-run-queries/tree-query-new-exp.png" alt-text="Screenshot of Query Results List showing a Tree Query.":::

::: moniker-end  

::: moniker range="tfs-2018"  

:::image type="content" source="media/view-run-queries/tree-query-view-tfs.png" alt-text="Screenshot of Query Results List showing a Tree Query.":::

::: moniker-end  

Define the filter criteria for both parent and child work items. To find linked children, select **Match top-level work items first**. To find linked parents, select **Match linked work items first**.

:::image type="content" source="media/view-run-queries/tree-query-editor-s136.png" alt-text="Screenshot of Query Editor view of Tree of work items.":::

#### [Visual Studio](#tab/visual-studio/)

Define the filter criteria for both parent and child work items. To find linked children, select **Match top-level work items first**. To find linked parents, select **Match linked work items first**.

:::image type="content" source="media/using-queries/tree-backlog-te.png" alt-text="Screenshot, Query Editor, Tree Query, Team Explorer. ":::

* * *

## Use direct links to view dependencies

Use the :::image type="icon" source="media/16.png" border="false"::: **Work items and Direct links** query to track work items that depend on other tracked work, such as tasks, bugs, issues, or features. For example, you can view backlog items that depend on other items being implemented or a bug being fixed. 

Use the direct links query to track dependencies across teams. The query also helps you manage commitments your team makes. Choose the filter criteria for the top and linked work items. And, select the types of links to filter the dependencies. 

#### [Browser](#tab/browser/)

:::image type="content" source="media/17.png" alt-text="Screenshot of Direct Links Query Results.":::

:::image type="content" source="media/view-run-queries/direct-query-editor-s136.png" alt-text="Screenshot of Query Editor, Direct Links Query.":::

Filter your first-tier list of work items by choosing one of these options:

- **Only return items that have matching links**: First-tier work items return, but only if they have links to work items specified by the linked work items filter criteria. 
- **Return all top level items**: All first-tier work items return despite the linked work items filter criteria. Second-tier work items that are linked to the first tier return if they match the linked work items filter criteria.
- **Only return items that do not have matching links**: First-tier work items are returned, but only if they don't have links to work items specified by the linked work items filter criteria.

#### [Visual Studio](#tab/visual-studio/)

:::image type="content" source="media/using-queries/direct-links-te.png" alt-text="Screenshot, Query Editor, Direct Links Query, Team Explorer.":::

Filter your first-tier list of work items by choosing one of these options:

- **Return all top level work items**: All first-tier work items return despite the linked work items filter criteria. Second-tier work items that are linked to the first tier return if they match the linked work items filter criteria.

- **Only return items that have the specified links**: First-tier work items return, but only if they have links to work items specified by the linked work items filter criteria. 

- **Only return items that do not have the specified links**: First-tier work items return, but only if they don't have links to work items specified by the linked work items filter criteria.
 
* * *

For more information about each link type, see [Linking, traceability, and managing dependencies](link-work-items-support-traceability.md).

## Use and/or logical expression

Specify `And` or `Or` to create logical expressions of your query clauses. Use `And` to find work items that meet the criteria in both the current clause and the previous clause. Use `Or` to find work items that meet the criterion in either the current clause or the previous clause.

Add one new clause for each work item field to refine your search criteria. Add clauses to return only the set of work items you want. If you don't receive the results you expect from your query, refine it. You can add, remove, group, or ungroup query clauses to improve your query results.

Group query clauses to operate as a single unit separate from the rest of the query. Grouping clauses is similar to putting parentheses around an expression in a mathematical equation or logic statement. When you group clauses, the `And` or `Or` for the first clause in the group applies to the whole group.

### Group clauses

Grouped clauses operate as a single unit separate from the rest of the query. Grouping clauses is similar to putting parentheses around a mathematical equation or logic expression. The `And` or `Or` operator for the first clause in the group applies to the whole group.

As the following examples show, the grouped clauses are translated to the corresponding logical expression.

> [!TIP]   
> To view the WIQL syntax for a query, install the [WIQL query editor extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor) which allows you to see the WIQL version of any Query UI entry. This extension allows you to see just how AND/OR grouped clauses are treated. 

> [!div class="mx-tdCol2BreakAll"]
> |Query| Grouped clauses|Logical expression|
> |---|---|---|
> |**1** |![Screenshot showing a group clause query. Filters are set up for the Work item type field and either the State field or the Assigned to field.](media/using-queries/and-or-clause-no-grouping.png)|![Screenshot of a logical expression. An AND operator groups the Work item type, State, and Assigned to fields. An OR operator groups the State and Assigned to fields.](media/using-queries/and-or-clause-no-grouping-wiql.png)|
> |**2**| ![Screenshot showing a group clause query, with filters for both the Work item type field and one of either the State field or the Assigned to field.](media/using-queries/and-or-clause-with-grouping.png)|![Screenshot of a logical expression. An AND operator groups the Work item type with the State or Assigned to fields, which are grouped by an OR operator.](media/using-queries/and-or-clause-with-grouping-wiql.png)|
> |**3**| ![Screenshot showing a group clause query. Filters are set up for either the Work item type field or both the State field and the Assigned to field.](media/using-queries/and-or-clause-reverse-grouping.png)|![Screenshot of a logical expression. An OR operator links the Work item type to both the State and the Assigned to fields, which are linked by an AND operator.](media/using-queries/and-or-clause-reverse-grouping-wiql.png)|

These queries return work items that are type Bug and meet the following logical expressions:  
- **Query 1**: `AND State=Active OR Assigned to @Me`  
- **Query 2**: `AND (State=Active OR Assigned to @Me)`  
- **Query 3**: `OR (State=Active AND Assigned to @Me)`  

To group one or more clauses, select them and then select the :::image type="icon" source="../media/icons/group-clauses-icon.png" border="false"::: group clauses icon.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Web portal, Query Editor, Group Selected Query Clauses.](media/view-run-queries/group-clauses.png)  

You can also group several grouped clauses. Check the boxes of each clause that's already been grouped. Then, choose the :::image type="icon" source="../media/icons/group-clauses-icon.png" border="false"::: group clauses icon.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Web portal, Query Editor, Group multiple query clauses.](media/using-queries/multiple-clauses.png)


If your query results don't return expected results, do the following steps: 

- Make sure that each clause is defined as you intended.  
- Verify `And`/`Or` assignments to each clause. If your results contain more work items than expected, often an `Or` clause is present instead of an `And` clause.  
- Determine if you need to group or change the grouping of the query clauses and the `And`/`Or` assignments of each grouped clause.  
- Add more query clauses to refine your query filter criteria.  
- Review the options available to specify [fields, operators, and values](query-operators-variables.md).
- See [best practices](#limit-or-operators), later in this article.  

<a id="ungroup-clause" />

### Ungroup a clause

#### [Browser](#tab/browser/) 

To ungroup a clause, select the :::image type="icon" source="../media/icons/ungroup-clause.png" border="false"::: ungroup clauses icon for the grouped clause. 

#### [Visual Studio](#tab/visual-studio/)

To ungroup a clause, select the :::image type="icon" source="../media/icons/ungroup-clause-visual-studio.png" border="false"::: ungroup clauses icon for the grouped clause, Visual Studio. 

---

## View query results in a dashboard 

The following two widgets display query results. You can open work items directly from these widgets.  
- **Work assigned to me**: Lists all proposed or active work items assigned to the signed-in user. Lists the ID, State, and Title fields. 
- **Query results widget**: Displays the results of a flat, tree, or direct-links query. You can configure the fields displayed through the widget, resize the column fields, and expand and collapse tree and direct-links query. 

For more information, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 

::: moniker range="azure-devops"

### View query results widget with Parent titles

You can view the results of a query with the **Parent** title displayed. To do so, perform these steps: 
1. Create the query that filters the work items of interest. The query can be a flat-list, tree, or direct-links query. 
2. Add the **Parent** field as a column. 
3. Save the query as a Shared query or Team favorite. 
4. Add the **Query results widget** to your dashboard and configure the query. Make sure the Parent field is set to display. 

The following image illustrates a query results widget that displays the **Parent** field. 

:::image type="content" source="media/using-queries/query-results-widget-with-parent-column-field.png" alt-text="Screenshot of query results widget showing a Parent column field.":::

::: moniker-end

## Define a query as a hyperlink

A query hyperlink uses the Work Item Query Language (WIQL), which resembles Transact-SQL. For more information, see [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md).
> [!NOTE]    
> Most browsers enforce a limit of between 2000 and 2083 characters for a URL string.   
::: moniker range="azure-devops"  

### Query hyperlink syntax for Azure DevOps Services

Encode the WIQL portion of the URL syntax. You can use any URL encoder tool to encode your URL. 

```  
https://dev.azure.com/OrganizationName/ProjectName/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage}
```
For example, the following hyperlink lists the ID and title of all active bugs defined under the FabrikamFiber/Web area path for the Fabrikam organization.

```  
https://dev.azure.com/fabrikam/FabrikamFiber/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.State%5D%3D'Active'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'
```

The decoded WIQL conforms to: 

```wiql
SELECT [System.ID], [System.Title]
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug'
   AND [System.State]='Active'
   AND [System.AreaPath]='FabrikamFiber\Web'
``` 

> [!NOTE]  
> The WIQL length must not exceed 32K characters for Azure Boards queries.
 
::: moniker-end  

::: moniker range="< azure-devops"  

### Query hyperlink syntax for TFS 2018 through Azure DevOps Server

```  
https://{ServerName}/{CollectionName}/{ProjectName}/_workitems?_a=query&wiql={Encoded WorkItemQueryLanguage}
```

For example, the following hyperlink lists the ID, title, and state of all bugs under the FabrikamFiber/Web area path.

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=SELECT%20%5BSystem.ID%5D%2C%20%5BSystem.Title%5D%2C%20%5BSystem.State%5D%20FROM%20WorkItems%20WHERE%20%5BSystem.TeamProject%5D%3D'FabrikamFiber'%20AND%20%5BSystem.WorkItemType%5D%3D'Bug'%20AND%20%5BSystem.AreaPath%5D%3D'FabrikamFiber%5CWeb'%20%20
```

For example, see the following nonencoded entry. 

```
http://fabrikam:8080/tfs/DefaultCollection/FabrikamFiber/_workitems?_a=query&wiql=
SELECT [System.ID], [System.Title], [System.State] 
   FROM WorkItems 
   WHERE [System.TeamProject]='FabrikamFiber' 
   AND [System.WorkItemType]='Bug' 
   AND [System.AreaPath]='FabrikamFiber\Web'   
```

::: moniker-end   

## Best practices

The following best practices apply to the following queries you can create:

::: moniker range="azure-devops"
- [Web portal queries](view-run-query.md)
- [Work Item Query Language (WIQL) queries](wiql-syntax.md) 
- [az boards query command line](view-run-query.md#run-a-query-from-the-command-line)
- [REST API queries](/rest/api/azure/devops/wit/queries)
::: moniker-end

::: moniker range="< azure-devops"
- [Web portal queries](view-run-query.md)
- [Work Item Query Language (WIQL) queries](wiql-syntax.md) 
- [REST API queries](/rest/api/azure/devops/wit/queries)
::: moniker-end

### Create focused, selective queries  

Define a highly selective query by applying all filters that are necessary for your query. The more selective the query is, the smaller the set of results. The smaller the result set is, the more targeted and selective your query is. 

### Use tags to categorize work items

Use [work item tags](add-tags-to-work-items.md) to categorize your work items instead of a custom field. Queries that filter on tags usually perform faster over those queries that filter on string matches. 

Unlike custom field matches or partial matches, a query with a `Tags Contains` operation doesn't require a complete scan of all work item tables. 

### Use `Contains words` for string matches
 
To filter on a string match, use the `Contains Words` instead of the `Contains` operator. The `Contains Words` operator runs a full-text search on the specified field, which tends to complete more quickly. 

The `Contains` operator runs a table scan, which is a slower operation than the  `Contains Words` operator. It also consumes more CPU cycles. These CPU cycles can cause you to encounter rate limitations. For more information, see [Service limits and rate limits](../../user-guide/service-limits.md) and [Rate limits](../../integrate/concepts/rate-limits.md).
 
### Specify small groups with the `In Group` operator 

The `In Group` operator filters work items based on matches within a group of values. The group of values correspond to the values contained within a team, security group, or [work tracking category](../work-items/agile-glossary.md#categories). For example, you can create a query to find all work items that are assigned to any member of a team. Or, find all work items that belong to the requirements category (`Microsoft.RequirementCategory`). 

When you filter on a group that contains a large number of members, your result set tends to be larger and nonselective.  Also, if a group corresponds to a large Azure Active Directory (Azure AD) group, the query generates a fairly large cost to resolve that group from Azure AD.  

### Avoid use of negated operators 

Negated operators&mdash;such as `<>, Not In, Not Under, Not In Group`&mdash;tend to generate nonselective queries and large result sets. 

Only use negated operators when necessary. Always try to find alternatives first. For example, if **Field1** has values *A*, *B*, *C*, *D*; specify the `Field1 In A, B, C` clause, instead of the negated `Field1 <> D` clause.

### Avoid string comparisons  

Queries that contain string comparisons generate table scans that are inherently inefficient. Instead, we recommend you use tags or a specific custom field as alternatives, particularly when a query performs poorly. 

### Limit `Or` operators

Limit the number of `Or` operators defined in your query. Queries run better when fewer `Or` operators are used. Too many `Or` operators can make your query nonselective. If your query runs slowly, reorder the `Or` operator clause towards the top of the query clauses.  

### Save your query 

Due to internal optimizations, saved queries tend to perform better over unsaved queries. Always save your query when you plan to reuse it. Even for WIQL queries run through a REST API, save the WIQL through the web portal to make your [REST API calls](/rest/api/azure/devops/wit/queries), so they're less prone to future performance regressions. 

### Run your query 

Sometimes you need to run your query a few times to reach the right optimization plan. Make sure to save your query and run it up to 10 times over a 30-minute period. This way, the system can examine and seek out the optimization plan that's most appropriate for your query. 

## Related articles

- [Query quick reference](query-index-quick-ref.md).  
- [Query FAQs](query-faqs.yml)
- [Chart a flat-list query](../../report/dashboards/charts.md)  
- [Change column options](../backlogs/set-column-options.md?toc=/azure/devops/boards/queries/toc.json)
- [Work item field index](../work-items/guidance/work-item-field.md) 
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
