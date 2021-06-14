---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 03/05/2021
---


### Query filters

The following table summarizes the query filter functions supported by each Azure DevOps version.  

::: moniker range=">= azure-devops-2019"
> [!NOTE] 
> Managed queries don't support proximity searches, however semantic searches do. In addition, semantic searches support both `*` and `?` as wildcard characters and you can use more than one wildcard character to match more than one character. To learn more, see [Functional work items search](../../project/search/functional-work-item-search.md).
::: moniker-end

---
:::row:::
   :::column span="1":::
      **Filter function** 
   :::column-end:::
   :::column span="1":::
      **Query support**
   :::column-end:::
   :::column span="1":::
     **Supported versions**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Text string searches](../queries/titles-ids-descriptions.md) (single text, multi-line text, rich text) 
   :::column-end:::
   :::column span="4":::
      Searches are not case sensitive.  
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Wildcard searches](../queries/titles-ids-descriptions.md) 
   :::column-end:::
   :::column span="4":::
      Wild card = `*` 
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Linked work item searches](../queries/linking-attachments.md)   
   :::column-end:::
   :::column span="4":::
      Find work items based on direct links or topological/hierarchical link types.  
      Filter linked work items based on `MODE` ([WIQL syntax](../queries/wiql-syntax.md#query-for-links-between-work-items))
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Logical clause groupings](../queries/using-queries.md#logical-groupings)   
   :::column-end:::
   :::column span="4":::
      Group and nest clauses using AND and OR Boolean operators.  
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
        [Historical String and DateTime field queries](../queries/query-by-workflow-changes.md) 
   :::column-end:::
   :::column span="1":::
       Find work items based on a field match with a previous value. 
       Supported operator: `Was Ever`
       Find work items based on a value defined on a specific date. 
       Supported operator: `ASOF` ([WIQL syntax](../queries/wiql-syntax.md#historical-queries-asof))
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Query using macros or variables](../queries/about-managed-queries.md#macros) 
   :::column-end:::
   :::column span="1":::
      Use macros to create queries relative to a date, other tools, such as team area path, team iteration, and more.  
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Search across projects](../queries/using-queries.md#across-projects)
   :::column-end:::
   :::column span="1":::
      Find work items in one or more projects in an organization or collection. Default is the current project. Use the **Team Project** field to query on two or more projects.
   :::column-end:::
   :::column span="1":::
      TFS 2015-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Field comparison searches](../queries/query-field-value.md)  
   :::column-end:::
   :::column span="1":::
      Find work items based on how two fields compare with one another.  
      **Supported operators**: `=[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field]`
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Query on tags](../queries/add-tags-to-work-items.md#query)
   :::column-end:::
   :::column span="1":::
      Find work items based on whether they contain or don't contain a tag. 
      **Supported operators**: `Contains, Does Not Contain`
   :::column-end:::
   :::column span="1":::
      All versions 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Query on blank or empty fields](../queries/titles-ids-descriptions.md#empty-or-not-empty-html-field-queries)
   :::column-end:::
   :::column span="1":::
      Find work items based on empty or not empty HTML/rich text fields.  
      **Supported operators**: `Is Empty, Is Not Empty`
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [In and Not In Group searches](../queries/planning-ranking-priorities.md) 
   :::column-end:::
   :::column span="1":::
      Find work whose field value matches any value in a delimited set, such as a set of work item types, workflow states, or picklist values.  Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).
   :::column-end:::
   :::column span="1":::
      TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Boolean searches](../queries/query-by-workflow-changes.md#kanban-board-change-queries) 
   :::column-end:::
   :::column span="1":::
      Find work items based on boolean field value. 
   :::column-end:::
   :::column span="1":::
      TFS 2017-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Query History and Discussion](../queries/history-and-auditing.md) 
   :::column-end:::
   :::column span="1":::
      Find work items based on key words or phrases added through the Discussion. 
   :::column-end:::
   :::column span="1":::
      TFS 2017.2-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Query on Kanban board fields](../queries/query-by-workflow-changes.md#kanban-board-change-queries)
   :::column-end:::
   :::column span="1":::
      Find work items based on their Kanban column, swimlane, or Doing/Done status.
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Interactive query filters](../backlogs/filter-backlogs-boards-plans.md)
   :::column-end:::
   :::column span="1":::
      Filter query results based on a key word or select fields. 
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---

To bulk move, copy, or paste query clauses, install and use the WIQL editor. To learn more, see [Cross-service and enhanced query operations](../queries/query-support-integration-cross-service-extensions.md#wiql)