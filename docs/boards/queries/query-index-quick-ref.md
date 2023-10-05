---
title: Use an index to query examples, tasks, operators, and macros
titleSuffix: Azure Boards
description: Learn how to use an index to query operators, macros, and sample queries that are used to list work items for Azure Boards and Azure DevOps.
ms.custom: boards-queriess, engagement-fy23
ms.service: azure-devops-boards
ms.topic: overview 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/05/2022
---

# Use an index to query quick reference data in Azure Boards and Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use this index to quickly access example queries and information on opening, defining, and working with queries. To learn how to use the Query Editor, see [Define a query](using-queries.md). If you find that your queries take too long to return results, see [Define a query/Best practices](using-queries.md#best-practices).  


<a id="examples" />  

## Example queries   

You can list work items based on the following criteria...  


---
:::row:::
   :::column span="1":::
      **Keywords, wildcard queries**  
      - [Keyword or phrase query with wildcards](titles-ids-descriptions.md#keyword)
      - [Undefined field value queries](titles-ids-descriptions.md#undefined-value)
      - [Empty or not empty HTML field queries](titles-ids-descriptions.md)
      - [Category based queries](titles-ids-descriptions.md#category)  
      - [Items you're following](titles-ids-descriptions.md#following)  
      - [Recent activity work items](titles-ids-descriptions.md#recent-macros)  

      **Tag based queries**  
      ::: moniker range="azure-devops"
      - [Items containing a specific tag](add-tags-to-work-items.md#query)
      - [Items that don't contain a specific tag](add-tags-to-work-items.md#query)
      - [Items that contain two or more tags](add-tags-to-work-items.md#query)  
      - [Items that have no tag assignments](add-tags-to-work-items.md#no-tags)
      - [Chart work items and group by tags](add-tags-to-work-items.md#group-by-tags)
      ::: moniker-end   
      ::: moniker range="< azure-devops"
      - [Items containing a specific tag](add-tags-to-work-items.md#query)
      - [Items that don't contain a specific tag](add-tags-to-work-items.md#query)
      - [Items that contain two or more tags](add-tags-to-work-items.md#query)  
      - [Items that have no tag assignments](add-tags-to-work-items.md#no-tags)
      - [Chart work items and group by tags](add-tags-to-work-items.md#group-by-tags)
      ::: moniker-end   

      **State, reason, or workflow change queries**    
      - [Resolved user stories](query-by-workflow-changes.md#workflow-change)
      - [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change)
      - [Items failing acceptance tests](query-by-workflow-changes.md#workflow-change)
      - [Items closed within the last 15 days](query-by-workflow-changes.md#workflow-change)
      - [Items removed as they're duplicate](query-by-workflow-changes.md)
      - [Items closed and then reactivated](query-by-workflow-changes.md#reactivated)
      - [Stories in the Code/Doing column](query-by-workflow-changes.md#kanban_query_fields)
      - [Items in the Expedite swimlane](query-by-workflow-changes.md#kanban_query_fields)
      - [Items in a swimlane containing "Test"](query-by-workflow-changes.md#kanban_query_fields)  

      **Date and iteration-based queries**   
      - [Items created in the last 30 days](query-by-date-or-current-iteration.md)
      - [Items modified on a specific date](query-by-date-or-current-iteration.md)
      - [Items resolved today](query-by-date-or-current-iteration.md)
      - [Items closed within a specific time period](query-by-date-or-current-iteration.md)
      - [Items whose updated status](query-by-date-or-current-iteration.md)
      - [Items closed in the current sprint](query-by-date-or-current-iteration.md)

      **Link and attachment count queries**   
      - [All child items of a single epic](linking-attachments.md)
      - [All related items](linking-attachments.md)
      - [Items with one or more attachments](linking-attachments.md)
      - [Items with 2 or more hyperlinks](linking-attachments.md)
      - [Items containing external links](linking-attachments.md)  
	   :::column-end:::
   :::column span="1":::

      **Identity-based queries**  
      - [Active items assigned to me](query-by-workflow-changes.md#me)
      - [Closed items that were assigned to me](query-by-workflow-changes.md#me)
      - [Active items assigned to my team](query-by-workflow-changes.md#me)
      - [Items I've modified in the last 30 days](query-by-workflow-changes.md#me)
      - [Items I closed](query-by-workflow-changes.md#workflow-change-who)
      - [Items I resolved in the last week](query-by-workflow-changes.md#workflow-change-who) 
      - [Team or group membership queries](query-by-workflow-changes.md#group) 
      - [My recent activity work items](titles-ids-descriptions.md#recent-macros)   

     **Work item count and numeric field queries**   
      - [Count of active bugs per developer](query-numeric.md#counts)
      - [Count of bugs by area and states](query-numeric.md#counts)
      - [Sum of story points and their status](query-numeric.md#effort)
      - [Burnup chart of user stories for a sprint](query-numeric.md#effort)
      - [Sum of remaining work per developer](query-numeric.md#work)  

      **History, Discussion, and revision-change queries**  
      - [History contains a specific word](history-and-auditing.md)
      - [History doesn't contain a specific word](history-and-auditing.md)
      - [Reactivated items](history-and-auditing.md)
      - [Items closed within a time period](history-and-auditing.md)
      - [Items you've been associated with](history-and-auditing.md)  

      **Team focus queries**
      ::: moniker range=">= azure-devops-2019"
      - [Assigned to a member of a team](query-by-workflow-changes.md#group)  
      - [Assigned to a team's area path](query-by-area-iteration-path.md#team-area-path)  
      - [Assigned to a team's current sprint](query-by-date-or-current-iteration.md#current-iteration)  
      - [Assigned to a team's sprint window](query-by-date-or-current-iteration.md#current-iteration-plus-minus-n)  
      ::: moniker-end
      ::: moniker range="tfs-2018"
      - [Assigned to a member of a team](query-by-workflow-changes.md#group)
      - [Assigned to a team's current sprint](query-by-date-or-current-iteration.md#current-iteration)  |
      ::: moniker-end

      **Build and test field queries**  
      - [List bugs and linked test cases](build-test-integration.md#linked-bugs)
      - [List automated test cases](build-test-integration.md)
      - [List requirement-based test suites](build-test-integration.md)
      - [List query-based test suites](build-test-integration.md) 
      
      **Other**  
      - [List deleted work items (Recycle bin)](../backlogs/remove-delete-work-items.md#restore-or-destroy-work-items)
      - [Query by field value comparisons](query-field-value.md) 
   :::column-end:::
:::row-end:::
---

<a id="tasks" />


## Query tasks 


---
:::row:::
   :::column span="1":::
      - [Add a query](using-queries.md) 
      - [Add a query chart](../../report/dashboards/charts.md) 
      - [Add a query chart to a dashboard](../../report/dashboards/charts.md#add-chart-to-a-dashboard) 
      - [Add a query tile to a dashboard](organize-queries.md#add-query-dashboard)
      - [Add query results to a dashboard](using-queries.md#query-results-widget-dashboard) 
      - [Add a query folder](organize-queries.md) 
      - [Add columns to query results](../backlogs/set-column-options.md) 
      - [Bulk modify query items](../backlogs/bulk-modify-work-items.md) 
      - [Bulk update existing work items (csv)](import-work-items-from-csv.md#update-existing-work-items) 
      - [Copy query URL](view-run-query.md#email-query) 
      - [Define a clause](using-queries.md#define-clause) 
      - [Delete a query or query folder](organize-queries.md#view-rename-delete) 
      - [Direct-links query](using-queries.md#directs-link-query) 
   :::column-end:::
   :::column span="1":::
      - [Edit a query](using-queries.md) 
      - [Email a query](view-run-query.md#email-query) 
      - [Export a query to Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) 
      - [Export a query (csv)](import-work-items-from-csv.md#export-list-as-a-csv-file) 
      - [Favorite a query](view-run-query.md#favorites) 
      - [Favorite a query as a team favorite](organize-queries.md#save-a-query-as-a-team-favorite) 
      - [Filter a query](../backlogs/filter-backlogs-boards-plans.md) 
      - [Flat-list query](using-queries.md#flat-list) 
      - [Group a clause](using-queries.md#group-clauses) 
      - [Group a chart by tags](add-tags-to-work-items.md#chart-work-items-and-group-by-tags) 
      - [Import new work items (csv)](import-work-items-from-csv.md#import-new-work-items) 
      - [Open a query](using-queries.md) 
      - [Query across projects](using-queries.md#across-projects) 
      - [Query based on tags](add-tags-to-work-items.md#query) 
   :::column-end:::
   :::column span="1":::
      ::: moniker range="azure-devops"
      - [Rename a query or query folder](organize-queries.md#view-rename-delete) 
      - [Run a query](view-run-query.md) 
      - [Save a query](organize-queries.md#save) 
      - [Set query permissions](set-query-permissions.md) 
      - [Tree query](using-queries.md#tree-query) 
      - [View a query](view-run-query.md) 
      - [View query results with Parent field](using-queries.md#query-results-widget-parent-titles) 
      - [Understand link types](link-type-reference.md) 
      - [Ungroup a clause](using-queries.md#ungroup-clause) 
      - [Work Item Query Language (WIQL)](wiql-syntax.md)
      ::: moniker-end 
      ::: moniker range="< azure-devops"
      - [Rename a query or query folder](organize-queries.md#view-rename-delete) 
      - [Run a query](using-queries.md) 
      - [Save a query](organize-queries.md#save)
      - [Save a query as a team favorite](organize-queries.md#favorite-query)  
      - [Set query permissions](set-query-permissions.md) 
      - [Tree query](using-queries.md#tree-query) 
      - [View a query](view-run-query.md) 
      - [Understand link types](link-type-reference.md) 
      - [Ungroup a clause](using-queries.md#ungroup-clause) 
      - [Work Item Query Language (WIQL)](wiql-syntax.md)
      ::: moniker-end 
   :::column-end:::
:::row-end:::
---

<a id="fields-operators-macros" />

## Operators and macros supported for each data type

The following table indicates the operators and macros available for the different field data types. Each field is associated with a data type. You can find the data type listed in the descriptions of each field, which you can look up using the [Work item field index](../work-items/guidance/work-item-field.md). Operators available for defining a query clause depend on the data type of the field that you select. For more detailed descriptions of data types, operators, and macros, see [Query fields, operators, and macros](query-operators-variables.md).

[!INCLUDE [temp](../includes/note-macro-web-portal.md)]



:::row:::
   :::column span="1":::
   **Data type**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
   :::column span="3":::
   **Supported operators and macros**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Boolean** 
   :::column-end:::
   :::column span="3":::
   Supports a True/False value. Query samples: [Query by assignment or workflow changes](query-by-workflow-changes.md). 
   :::column-end:::
   :::column span="3":::
   `= , <> , =[Field] , <>[Field]`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **DateTime** 
   :::column-end:::
   :::column span="3":::
   A date field in which you can specify a variable, such as `@Today` or `@Today-1`, or a value, such as 1/1/2012. Enter dates in the Date Pattern you set for your personal profile. See [Set personal preferences](../../organizations/settings/set-your-preferences.md) for details.  

   For query examples, see [Query by date or@CurrentIteration](query-by-date-or-current-iteration.md). 
   :::column-end:::
   :::column span="3":::
   `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever`  
   **Macros**: `@Today`, valid with any **DateTime** field  

   **Additional macros supported on Azure DevOps 2019 Update 1 and later versions:**:  
   `@StartOfDay`, `@StartOfWeek`, `@StartOfMonth`, and `@StartOfYear`, valid with any **DateTime** field
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="1":::
   **Double** 
   :::column-end:::
   :::column span="3":::
   Also referred to as **Decimal** and includes **picklistDouble**<sup>1</sup>. A real number, such as 0.2 or 3.5.  
   
   Query examples: [Query by numeric fields](query-numeric.md). 

   :::column-end:::
   :::column span="3":::
   `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **GUID** 
   :::column-end:::
   :::column span="3":::
   A character string that represents a unique ID.
   :::column-end:::
   :::column span="3":::
   `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **History** 
   :::column-end:::
   :::column span="3":::
   Custom formatted field used to track historical information and only assigned to the **History** field.  

   Query examples: [History and auditing](history-and-auditing.md). 

   :::column-end:::
   :::column span="3":::
   Contains Words, Does Not Contain Words
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **HTML** 
   :::column-end:::
   :::column span="3":::
   Text strings that support formatted descriptions, such as the **Description** or **Repro Steps** fields. These fields are automatically indexed for full-text search when full-text search is available. Query samples: [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md). 
   :::column-end:::
   :::column span="3":::
   `Contains Words`, `Does Not Contain Words`, `Is Empty`<sup>2</sup>, `Is Not Empty`<sup>2</sup>
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Identity**
   :::column-end:::
   :::column span="3":::
   A String field that is used to hold a user identity. Query samples: [Query by assignment or workflow changes](query-by-workflow-changes.md).
   :::column-end:::
   :::column span="3":::
   `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], Contains, Does Not Contain, In, Not In, In Group, Not In Group, Was Ever`
   **Macros**: **@me** valid for all Identity fields.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Integer**
   :::column-end:::
   :::column span="3":::
   Also includes **picklistInteger**<sup>1</sup>. A 32-bit integer that is signed, such as 0, 1, 2, 34.  

   Query samples: [Query by numeric fields](query-numeric.md)
   :::column-end:::
   :::column span="3":::
   `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever`  

   **Macros**: `@Follows`, `@MyRecentActivity`, `@RecentMentions`, and `@RecentProjectActivity`, valid when used with the **ID** field. 

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **PlainText** 
   :::column-end:::
   :::column span="3":::
   Multi-line text strings that support long descriptions and are automatically indexed for full-text search, when full-text search is available.  
   Query examples: [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md).

   :::column-end:::
   :::column span="3":::
   `Contains Words`, `Does Not Contain Words`, `Is Empty`, `Is Not Empty`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **String** 
   :::column-end:::
   :::column span="3":::
   Also includes **picklistString**<sup>1</sup>. Short single-line text that can contain up to 255 Unicode characters. String fields support the **Title** field, picklists (drop-down menus), user accounts, **Tags**, and other fields.  
   
   Query examples: [Query by titles, IDs, and rich-text fields](titles-ids-descriptions.md) and [Query by picklist value](planning-ranking-priorities.md).
   :::column-end:::
   :::column span="3":::
   `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], Contains, Does Not Contain, In, Not In, In Group, Not In Group, Was Ever`  

   **Macros**: `[Any]`, valid with the **Work Item Type** field `@Project`, valid with the **Team Project** field. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
    **TreePath** 
   :::column-end:::
   :::column span="3":::
   Field type that supports the **Area Path** and **Iteration Path** fields. You define the tree structure for a project&mdash;[area paths](../../organizations/settings/set-area-paths.md) and [iteration paths](../../organizations/settings/set-iteration-paths-sprints.md).
 
   Query examples: [Query by area or iteration path](query-by-area-iteration-path.md) and [Query by date or current iteration](query-by-area-iteration-path.md).

   :::column-end:::
   :::column span="3":::
   `Under`, `Not Under`, `=`, `<>`, `In`, `Not In`  

   **Macros**: `@TeamAreas`<sup>3</sup>, valid with **Area Path** field  
   `@CurrentIteration` and `@CurrentIteration+/- n`<sup>4</sup> valid with the **Iteration Path** field
   :::column-end:::
:::row-end:::

> [!NOTE]  
> 1. The **picklist...** data types are only assigned to custom fields defined for an inherited process. The Inherited process model is only supported for Azure DevOps Server 2019 and later versions. 
> 2. The `Is Empty` and `Is Not Empty` operators are supported for Azure DevOps Server 2019 RC2 and later versions.   
> 3. The `@TeamAreas` macro is supported for Azure Boards and Azure DevOps Server 2019 and later versions. 
> 4. The `@CurrentIteration +/- n` macro is supported for Azure DevOps Server 2019 and later versions, and only when run from the web portal.   


[!INCLUDE [date-time-pattern](../includes/date-time-pattern.md)]

<a id="samples" />

## Example queries for select fields 

The following table lists common query fields and their data type for which sample queries are provided. To determine the data type of a field, see [Work item fields and attributes, List field attributes](../work-items/work-item-fields.md).  

:::row:::
   :::column span="1":::
   ### A  
   - [Acceptance Criteria](titles-ids-descriptions.md) (HTML)
   - [Activated By](query-by-workflow-changes.md) (Identity)
   - [Activated Date](query-by-workflow-changes.md) (DateTime)
   - [Activity](query-numeric.md) (String)
   - [Area Path](query-by-area-iteration-path.md) (TreePath)
   - [Assigned To](query-by-workflow-changes.md) (Identity) 
   - [Attached File Count](linking-attachments.md) (Integer)
   - [Automated Test Name](build-test-integration.md) (String) 
   - [Automated Test Type](build-test-integration.md) (String) 
   
   ### B  
   - [Blocked](planning-ranking-priorities.md) (String)
   - [Board Column](query-by-workflow-changes.md) (String)
   - [Board Column Done](query-by-workflow-changes.md) (Boolean)
   - [Board Lane](query-by-workflow-changes.md) (String)
   - [Business Value](query-numeric.md) (String) 
   
   ### C  
   - [Changed By](history-and-auditing.md) (Identity)
   - [Changed Date](history-and-auditing.md) (DateTime)
   - [Closed By](query-by-workflow-changes.md) (Identity)
   - [Closed Date](query-by-workflow-changes.md) (DateTime)
   - [Comment Count](linking-attachments.md) (Integer)
   - [Committed](planning-ranking-priorities.md) (String)
   - [Completed Work](query-numeric.md) (Decimal)
   - [Created By](query-by-workflow-changes.md)  (Identity)
   - [Created Date](query-by-workflow-changes.md) (DateTime)
   
   :::column-end:::
   :::column span="1":::
   
   ### D-E-F  
   - [Discipline](query-numeric.md) (String)
   - [Description](titles-ids-descriptions.md) (HTML)
   - [Due Date](query-by-date-or-current-iteration.md) (DateTime)
   - [Effort](query-numeric.md) (Decimal)
   - [External Link Count](linking-attachments.md#external-link-count) (Integer)
   - [Finish Date](query-by-date-or-current-iteration.md) (DateTime)
   - [Found In Build](build-test-integration.md) (String)
   
   ### H-P  
   - [History](history-and-auditing.md) (History)
   - [Hyperlink Count](linking-attachments.md#hyper-link-count) (Integer)
   - [ID](titles-ids-descriptions.md) (Integer)
   - [Integrated in Build](build-test-integration.md) (String)
   - [Iteration Path](query-by-area-iteration-path.md) (TreePath)
   - [Link Comment](linking-attachments.md) (Integer)
   - [Node Name](query-by-area-iteration-path.md) (String)
   - [Original Estimate](query-numeric.md) (Decimal)
   - [Parameters](build-test-integration.md) (HTML)
   - [Priority](planning-ranking-priorities.md) (Integer) 
   ### R  
   - [Reason](query-by-workflow-changes.md) (String)
   - [Related Link Count](linking-attachments.md) (Integer)
   - [Remaining Work](query-numeric.md) (Decimal)
   - [Repro Steps](titles-ids-descriptions.md) (HTML)
   - [Resolved By](query-by-workflow-changes.md) (Identity)
   - [Resolved Date](query-by-workflow-changes.md) (DateTime)
   - [Resolved Reason](query-by-workflow-changes.md) (String)
   - [Rev](history-and-auditing.md) (Integer)
   - [Revised Date](history-and-auditing.md) (DateTime) 
   :::column-end:::
   :::column span="1":::
   ### S  
   - [Severity](planning-ranking-priorities.md) (String)
   - [Size](query-numeric.md) (Decimal)
   - [Stack Rank](planning-ranking-priorities.md) (Decimal)
   - [Start Date](query-by-date-or-current-iteration.md) (DateTime)
   - [State](query-by-workflow-changes.md) (String)
   - [State Change Date](query-by-workflow-changes.md) (DateTime)
   - [Steps](build-test-integration.md) (HTML)
   - [Steps to Reproduce](titles-ids-descriptions.md) (HTML)
   - [Story Points](query-numeric.md) (Decimal)
   - [System Info](titles-ids-descriptions.md) (HTML)  
   ### T  
   - [Tags](add-tags-to-work-items.md) (String)
   - [Target Date](query-by-date-or-current-iteration.md) (DateTime)
   - [Task Type](query-numeric.md) (String)
   - [Team Project](titles-ids-descriptions.md) (String) 
   - [Test Suite Type](build-test-integration.md) (String)
   - [Title](titles-ids-descriptions.md) (System)
   - [Triage](planning-ranking-priorities.md) (String)
   ### V-W  
   - [Value Area](planning-ranking-priorities.md) (String)
   - [Work Item Type](titles-ids-descriptions.md) (String)  
   :::column-end:::
:::row-end:::



## Related articles

- [Query by field value comparisons](query-field-value.md)
- [Use categories to group work item types](/previous-versions/azure/devops/reference/xml/use-categories-to-group-work-item-types)  
- [Define a managed query](using-queries.md) 
- [Work item field index](../work-items/guidance/work-item-field.md) 
