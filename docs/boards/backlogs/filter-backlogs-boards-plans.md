---
title: Apply filters to backlogs, boards, queries, and plans in Azure Boards
titleSuffix: Azure Boards
description: Learn how to apply filters to backlogs, boards, queries, and plans in Azure Boards
ms.custom: boards-backlogs, boards-kanban
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 11/22/2024
---

# Interactively filter backlogs, boards, queries, and plans in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

<a id="filter"></a>

Filter functions in Azure Boards empower you to interactively apply one or more filters to streamline your work item management. Each Azure Boards tool—such as **Backlogs**, **Boards**, and **Query results**—comes prefiltered to display a relevant subset of work items based on its specific functionality:

- **Backlogs and boards**: Show work items based on the selected **Area Paths** and **Iteration Paths** for your team.
- **Query results**: List work items that match the query clauses you defined.

To enhance your filtering capabilities, enable the filter feature by selecting the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **Filter** icon.

:::image type="content" source="media/filter/filter-backlogs.png" alt-text="Screenshot of choosing Filter function in the latest versions.":::

Even with these initial filters, you might still encounter a large number of work items. Interactive filtering allows you to narrow down your view and focus on a specific subset of work items by applying more filter criteria to each Azure Boards tool.

### Use cases for filters

Filters can significantly enhance your workflow by helping you accomplish the following tasks:

- **Daily scrum meetings**: Focus the board on work assigned for a specific sprint to facilitate effective stand-ups.
- **Sprints Taskboard**: Filter to view a particular team member's completed work, aiding in performance reviews and accountability.
- **Group work items**: Concentrate on related work items by filtering based on **Parent Work Item**, **Area Path**, or **Tags**, enhancing organization and clarity.
- **Triage work items**: Create and apply queries to isolate similar work items grouped by **Area Path** or **Tags**, enabling efficient issue resolution and backlog grooming.

By using these filter functions, your team can maintain focus, improve productivity, and ensure that critical tasks receive the attention they deserve.

For more detailed information on using filters, see [Filter Backlogs, Boards, and Plans](filter-backlogs-boards-plans.md).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Project membership**|  [Project member](../../organizations/projects/create-project.md). |

## Supported filter functions 

Filter functions are available from all Azure Boards tools: Work items, Boards, Backlogs, Sprint Backlogs and Taskboards, Queries, and Delivery Plans. The set of features supported depends on the tool and Azure DevOps version. *(Use the content selector to view the filters available for your version.)* 

The following table indicates the supported options based on the tool indicated with a ✔️ or is listed. 

Backlogs and boards are subject to filters defined for the team as described in [Set up your Backlogs and Boards](set-up-your-backlog.md). Other tools have predefined filters based on the view, query filter clauses, or settings you select.

:::row:::
   :::column span="1.5":::
      <br/>**Tool** 
   :::column-end:::
   :::column span="1":::
      **Keywords**<br/>or **ID**
   :::column-end:::
   :::column span="2":::
      <br/>**Fields**
   :::column-end:::
   :::column span="1.5":::
      **Parent<br/>Work Item**
   :::column-end:::
   :::column span="1":::
      <br/>**Tags**
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1.5":::
      [**Work items**](../work-items/view-add-work-items.md) 
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Assigned To
      - Work Item Type
      - States
      - Area Path
   :::column-end:::
   :::column span="1.5":::
          
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
::: moniker-end 
:::row:::
   :::column span="1.5":::
      [**Boards**](../boards/kanban-overview.md)   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Assigned To
      - Work Item Type
      - States
      - Area Path
      - Iteration Path
   :::column-end:::
   :::column span="1.5":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1.5":::
      [**Backlogs**](backlogs-overview.md) 
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Assigned To  
      - Work Item Type  
      - States  
      - Area Path  
      - Iteration Path
   :::column-end:::
   :::column span="1.5":::
      Note 1
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1.5":::
     [**Sprints** (Backlogs  
     & Taskboards)](../sprints/scrum-overview.md)  
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Assigned To
      - Work Item Type
      - States  
      - Area Path 
   :::column-end:::
   :::column span="1.5":::
      ✔️ (Note 2)   
   :::column-end:::
   :::column span="1":::
      ✔️ 
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="1.5":::
     [**Sprints** (Backlogs  
     & Taskboards)](../sprints/scrum-overview.md)  
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Assigned To
      - Work Item Type
      - States  
      - Area Path  
   :::column-end:::
   :::column span="1.5":::
           
   :::column-end:::
   :::column span="1":::
      ✔️  
   :::column-end:::
:::row-end:::
---
::: moniker-end 
:::row:::
   :::column span="1.5":::
     [**Query Results**](../queries/view-run-query.md)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Work Item Types
      - Assigned To
      - States
      - Tags
   :::column-end:::
   :::column span="1.5":::
      Note 1
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2022"
:::row:::
   :::column span="1.5":::
     [**Delivery Plans**](../plans/review-team-plans.md)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Work Item Types
      - Assigned To
      - States
      - Area Path
      - Iteration Path
      - Tags
   :::column-end:::
   :::column span="1.5":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2022"
:::row:::
   :::column span="1.5":::
     [**Plans**](../plans/review-team-plans.md)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Work Item Types
      - Assigned To
      - States
      - Tags
   :::column-end:::
   :::column span="1.5":::
        
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
::: moniker-end  
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1.5":::
     [**Semantic search, Work Items**](../../project/search/functional-work-item-search.md)
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="2":::
      - Projects
      - Area Paths
      - Assigned To  
      - Work Item Types
      - States 
   :::column-end:::
   :::column span="1.5":::
        
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
:::row-end:::
---
::: moniker-end   

**Notes**

1. While the **Parent Work Item** isn't a filter function for **Backlogs** or **Query Results**, you can add the **Parent** field as a column and then do a keyword/phrase search on the Parent title to effectively filter on parent work items. The Parent field is supported for Azure DevOps Server 2020 and later versions. See also the [Parent field and Parent Work Item](#parent-filter) section later in this article. 
2. The **Parent Work Item** filter is supported for **Sprint Backlogs** and **Taskboards** for Azure DevOps Server 2020 and later versions. 


::: moniker range=">= azure-devops-2020"

### More filter, sort, group, reorder, and rollup functions 

Along with the standard filter functions summarized in the previous table, the following table indicates which tools have more filters you can apply, sort, group, reorder, and rollup functions. Some functions, such as reorder, don't work when the filter function is enabled.  

<br/>
::: moniker-end 

::: moniker range=">= azure-devops-2020"
---
:::row:::
   :::column span="2":::
      **Tool** 
   :::column-end:::
   :::column span="2":::
      **Filter settings**
   :::column-end:::
   :::column span="1":::
      **Sort**
   :::column-end:::
   :::column span="1":::  
      **Group**
   :::column-end:::
   :::column span="1":::
      **Reorder**
   :::column-end:::
   :::column span="1":::
      **Rollup**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Work items**](../work-items/view-add-work-items.md) 
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
      Completed Work Items
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
          
   :::column-end:::
   :::column span="1":::
          
   :::column-end:::
   :::column span="1":::

   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Boards**](../boards/kanban-overview.md)   
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
   :::column-end:::
   :::column span="1":::
          
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️ 
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Backlogs**](backlogs-overview.md) 
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
      In Progress items  
      Completed Child items 
   :::column-end:::
   :::column span="1":::
          
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 2)   
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 3)   
   :::column-end:::
   :::column span="1":::
      ✔️    
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
     [**Sprints**, **Backlogs** ](../sprints/scrum-overview.md)  
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 2)  
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 3)   
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
     [**Sprints**, **Taskboards**](../sprints/scrum-overview.md)  
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
      Person  
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️ (Note 4)   
   :::column-end:::
   :::column span="1":::
      ✔️    
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
     [**Query Results**](../queries/view-run-query.md)
   :::column-end:::
   :::column span="2":::
           
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 2)  
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="azure-devops"
:::row:::
   :::column span="2":::
     [**Delivery Plans**](../plans/review-team-plans.md)
   :::column-end:::
   :::column span="2":::
          
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 6)  
   :::column-end:::
   :::column span="1":::
            
   :::column-end:::
   :::column span="1":::
      ✔️    
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="2":::
     [**Semantic search, Work Items**](../../project/search/functional-work-item-search.md)
   :::column-end:::
   :::column span="2":::
        
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 7)  
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
:::row-end:::
---
::: moniker-end 

::: moniker range="< azure-devops-2020"

### Other filter, sort, group, and reorder functions 

Along with the standard filter functions summarized in the previous table, the following table indicates which tools have other filters you can apply, sort, group, and reorder functions. Some functions, such as reorder, don't work when the filter function is enabled. 

::: moniker-end 

::: moniker range="< azure-devops-2020"
---
:::row:::
   :::column span="2":::
      **Tool** 
   :::column-end:::
   :::column span="2":::
      **Filter settings**
   :::column-end:::
   :::column span="1":::
      **Sort**
   :::column-end:::
   :::column span="1":::  
      **Group**
   :::column-end:::
   :::column span="1":::
      **Reorder**
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="azure-devops-2019"
:::row:::
   :::column span="2":::
      [**Work items**](../work-items/view-add-work-items.md) 
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
      Completed Work Items
   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::

   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="2":::
      [**Boards**](../boards/kanban-overview.md)   
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️ 
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="2":::
      [**Backlogs**](backlogs-overview.md) 
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
      In Progress items  
      Completed Child items 
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️ (Note 2)   
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 3)   
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="2":::
     [**Sprints**, **Backlogs** ](../sprints/scrum-overview.md)  
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️ (Note 2)  
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 3)   
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="2":::
     [**Sprints**, **Taskboards**](../sprints/scrum-overview.md)  
   :::column-end:::
   :::column span="2":::
      ✔️ (Note 1)  
      Person  
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️ (Note 4)   
   :::column-end:::
   :::column span="1":::
      ✔️    
   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="2":::
     [**Query Results**](../queries/view-run-query.md)
   :::column-end:::
   :::column span="2":::

   :::column-end:::
   :::column span="1":::
      ✔️   
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 2)  
   :::column-end:::
   :::column span="1":::

   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="< azure-devops-2022"
:::row:::
   :::column span="2":::
     [**Plans**](../plans/review-team-plans.md)
   :::column-end:::
   :::column span="2":::

   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️ (Note 6)  
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
:::row-end:::
---
::: moniker-end  
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="2":::
     [**Semantic search, Work Items**](../../project/search/functional-work-item-search.md)
   :::column-end:::
   :::column span="2":::

   :::column-end:::
   :::column span="1":::
      ✔️ (Note 7)  
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
:::row-end:::
---
::: moniker-end  



**Notes**
1. The **Work items** page is subject to filters based on the [view selected](../work-items/view-add-work-items.md#view-work-items). **Boards** and **Backlogs** are subject to filters defined for the team as described in [Set up your Backlogs and Boards](set-up-your-backlog.md). Completed and In Progress work items get determined based on the state categories assigned to the workflow state as described in [How workflow states and state categories are used in Backlogs and Boards](../work-items/workflow-and-state-categories.md#category-states). 
2. Grouping is supported through portfolio backlogs and boards, parent-child links, and tree hierarchy. Tree hierarchies are flattened when filtering is applied and reinstated when filtering is cleared.  
3. **Backlogs** and **Sprint Backlogs** support reordering. However, when filtering is enabled, reordering isn't supported.
4. **Taskboards** provides a **Group by** function based on **People** or **Stories**.  
5. **Query Results** supports [multi-column sort](set-column-options.md#sort-on-a-column).
6. Work items appear in the order defined for the team Sprint backlog, which it inherits from the team product backlog.  
7. Semantic search supports sorting search results by the following fields&mdash;**Assigned To**, **Changed Date**, **Created Date**, **ID**, **State**, **Tags**, **Title**, and **Work Item Type**&mdash;and Relevance. 


::: moniker range=">= azure-devops-2020"
For more information about these other functions, see the following articles: 
- [Reorder cards (boards)](../boards/customize-cards.md#reorder-cards)  
- [Display rollup progress or totals](display-rollup.md) 
- [About backlogs, Work with multi-team ownership of backlog items](backlogs-overview.md#work-with-multi-team-ownership-of-backlog-items) 
 
::: moniker-end 

::: moniker range="< azure-devops-2020"
For more information about these other functions, see the following articles: 
- [Reorder cards (boards)](../boards/customize-cards.md#reorder-cards)  
- [About backlogs, Work with multi-team ownership of backlog items](backlogs-overview.md#work-with-multi-team-ownership-of-backlog-items) 
 
::: moniker-end 


<a id="parent-filter"></a> 

### Parent Work Item filter and Parent field

The **Parent Work Item** filter enables you to focus on one or more select features or epics. This filter function was added in July 2016 and made available in Azure DevOps Server 2017 and later versions.    

The **Parent** field was added to Azure Boards in July of 2019 and then made available with the release of Azure DevOps Server 2020. You can add the **Parent** field to a list through the **Column Options** dialog, except for the **Work items** tool. 
You can also add the **Parent** field to cards on the boards and Taskboards. 

## Persistence and saving filter options

Once you set filter options for a specific view, your settings persist until you modify them. There's no need to select a save button or take any other actions.

> [!NOTE]
> You can't set default filter options or configure filters for other team members.

To filter work items based on specific fields, first add the field as a column or to the card. For example, to filter by **Assigned To**, **Iteration Path**, **Work Item Type**, or any other field's content, ensure these fields are displayed on the cards, backlog, plan, or list.

All filter configurations are user-specific and remain active until you clear them.

To add columns or fields, see the following articles: 

::: moniker range=">= azure-devops-2020"
- For Backlogs and Queries, see [Change column options](set-column-options.md)
- For Boards, see [Customize cards](../boards/customize-cards.md)
- For Taskboards, see [Customize a sprint Taskboard](../sprints/customize-taskboard.md)
- For Plans, see [Review team delivery plans]( ../plans/review-team-plans.md). 
::: moniker-end
::: moniker range="< azure-devops-2020"
- For Backlogs and Queries, see [Change column options](set-column-options.md)
- For Boards, see [Customize cards](../boards/customize-cards.md).
::: moniker-end

## Open and clear filter functions  

1. From the Azure Boards tool, choose the view you want. For example: 
	- For Work items, select **Assigned to me**, **Following**, **Mentioned**, or other view. 
	- For Backlogs and Boards, select the backlog level you want, such as **Stories**, **Features**, or **Epics**.  
	- For sprint Backlogs and Taskboards, choose the iteration 
	- For queries, define the query filter criteria of interest. 

2. Choose any other view settings available for your view. For example: 
	- For Work items, from the **View options** menu, enable/disable **Completed Work Items**. 
	- For Backlogs, from the **View options** menu, enable/disable **In Progress items** or **Completed Child items**.  
	- For Taskboards, from the **Person** menu, choose **All**, **Unassigned**, or a specific team member.  

3. For list views, add columns to display fields containing text you want to filter on or possibly sort on. For card views, add fields to display on cards containing text you want to filter on. 

4. Select **Filter** :::image type="icon" source="../../media/icons/filter-icon.png" border="false":::. Or, enter the **Ctrl+Shift+f** keyboard shortcut.  

	For example, here we open the filter toolbar for the board, **Backlog items**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of choosing Filter function.](media/filter-boards/filter-kb-choose-filter-services.png)
	::: moniker-end

5. Choose your filters of interest. 

	The filter icon changes to a solid icon, **Filter** :::image type="icon" source="../../media/icons/filtered.png" border="false":::, to indicate filtering is applied. 

	The page refreshes to show only those work items that meet all the selected filter criteria.

### Inactive functions
 
::: moniker range="azure-devops"
When filtering is applied, the following functions are disabled or altered: 
- For backlogs, the add-a-backlog-item panel, reordering (stack ranking), and forecasting tools are disabled. 
- For backlogs set to **Show Parents**, the tree hierarchy is flattened, unless you enable the **Keep hierarchy with filters** from the **View Options** menu. See [Filter your backlog and maintain the hierarchy](#keep hierarchy) provided later in this article. 
::: moniker-end

::: moniker range="< azure-devops"
When filtering is applied, the following functions are disabled or altered 
- For backlogs, the add-a-backlog-item panel, reordering (stack ranking), and forecasting tools are disabled. 
- For backlogs set to **Show Parents**, the tree hierarchy is flattened. 
::: moniker-end

### Clear or dismiss filtering

To clear and dismiss filtering, choose **Clear and dismiss filtering** :::image type="icon" source="../../media/icons/close-filter.png" border="false":::.

Filters remain in place until you explicitly clear them. When you refresh your backlog, board, or other tool, or sign in from another browser, filters remain set to your previous values.

Once the board is filtered, you can choose the filter icon to hide the drop downs and view the applied filters on the board. The filter icon turns opaque to signify a filtered board.

<a id="keep hierarchy"></a> 

::: moniker range="azure-devops"

## Filter your backlog and maintain the hierarchy 
 
You can filter your backlog and maintain the hierarchy of work by choosing show **Parents** and **Keep hierarchy with filters** from the **View Options** menu. Use these options when you want to show work items assigned to one or more team members, work item types, area or iteration paths, or combination of these items and keywords. The hierarchy is maintained and work items that match the filter criteria are shown in bold text.  

:::image type="content" source="media/filter/keep-hierarchy-with-filters.png" alt-text="Screenshot of View options menu, Keep hierarchy with filters selected."::: 

::: moniker-end

## Filter logic and Boolean operators

Applying Boolean operators to filters is only supported for tags, as described in [Filter based on tags](#tags) later in this article. All other filters are applied with an implicit **AND** operator.  

<a id="text-filter"></a>

## Apply keyword and ID filters

The keyword filter allows you to search lists or cards based on the fields configured through **Column Options** or board settings. You can filter by specific values, such as IDs even if the ID field is visible. When using the keyword filter, ensure that the fields containing the desired text or tags are displayed in your view.

> [!TIP]
> Filtering is case-insensitive.

<a id="characters-ignore"></a>  

### Ignore characters by keyword filter criteria

The filter criteria ignore the following characters: `,` (comma), `.` (period), `/` (forward slash), and `\` (back slash). 

### Filter a board using a keyword

Here we filter the board to only show those cards that include 'web' either in the title, tag, or field.

> [!div class="mx-imgBorder"]  
> ![Screenshot of board, Filter using keyword search.](media/filter-boards/filter-kb-text-web-services.png)

## Filter a backlog by using a keyword

Here we filter the Backlog with **Show Parents** enabled, to only show work items that include 'web'. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Backlog, Hierarchy, Filter using keyword search.](media/filter/filter-backlog-web-keyword.png)

The filtered set is always a flat list, even if you selected to show parents. 

<a id="field-filter"></a>

## Filter based on a field  

With filtering turned on, choose one or more values from the multi-select drop-down menu for each field available to you. The values for these fields are populated as follows: 

- **Area**: The Node Name, which specifies the last node of an Area Path, of valid Area Paths and for which there are work items assigned to that Area Path 
- **Assigned To**: All users who are currently assigned to work items on the board plus Unassigned
- **Iteration**: All Iteration Paths [selected for the current team](../sprints/define-sprints.md) and for which there are work items assigned to that iteration 
- **Work item type**: Work item types defined for the Requirements Category (product backlog) or Features or Epic categories (feature or epic portfolio backlogs), subject to work items being assigned to the work item types
- **Tags**: All tags assigned to work items on the board
- **Parent Work Items**: All features defined for the team, or all epics defined for the team when viewing the Features board  

> [!NOTE]   
> Filter options are dependent on the work items that meet the filter criteria. For example, if you don't have any work items assigned to Sprint 4, then the Sprint 4 option won't appear in the filter options for the Iteration Path.  
>
> The values that populate the filter options are based on the work items that are currently loaded and displayed. For example, if you have a backlog with 2,000 work items, but only 1,000 are displayed on a board, the filter options are based on just the items displayed.

### Filter a board by using select field values

You can filter by select field values using the board for your product backlog (Stories, Product Backlog Items, or Requirements) or a portfolio backlog (Features or Epics).

For example, here we filter for all items assigned to Jamal and Raisa.

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Screenshot of enable board, Filter on assignment field](media/filter-boards/filter-kb-filters-chosen-services.png)
::: moniker-end

::: moniker range="< azure-devops-2020"

![Screenshot of board, Filter on assignment field, Azure DevOps Server 2019.](media/filter-boards/filter-kb-filters-chosen.png)
::: moniker-end

<a id="filter-logic"></a>

### Board filter logic

Cards are filtered based on the assignments made in the following order and logic:

1. **Assigned to**:  Show all cards that are assigned to user 1 ```OR``` user 2
	```AND```
2. **Iteration**: Show all cards that are assigned to Iteration 1 ```OR```  Iteration 2
	```AND```
3. **Work Item type**: Show all cards that are work item type 1 ```OR``` work item type 2
	```AND```
4.	**Tags**: Show all cards that have tag 1 ```AND``` or ```OR``` tags 2, based on your selection of ```AND | OR```.
	```AND```
5.	**Parent Work Items**: Show all cards that have Parent Work Item 1 ```OR``` Parent Work Item 2.


### Filter a backlog by using fields

Here we show a filtered backlog based on the keyword "issues." Filtered pages show the :::image type="icon" source="../../media/icons/filtered.png" border="false"::: filtered icon. The filtered set is always a flat list, even if you selected to show a hierarchical backlog view. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of filtered backlog based on the keyword "issues".](media/filter/filter-issues-keyword.png)   

<a id="parent-filter"></a>

## Filter based on the Parent Work Item 

You can use the **Filter by parent** feature to filter by select parent work items using the board for your product backlog (Stories, Product Backlog Items, or Requirements) or a portfolio backlog (Features).

Use this feature only when you created features or epics and linked them to user stories or features, respectively. A quick and easy way to create the links is to [map them using drag-and-drop](organize-backlog.md). Mapping creates parent-child links between the work items.

> [!NOTE]
> The **Filter by parent**  feature doesn't support filtering of parent work items of the same work item type. For example, you can't filter the Stories backlog by specifying user stories that are parents of nested user stories.

To start filtering, choose **Filter** :::image type="icon" source="../media/icons/kanban-filter-icon.png" border="false":::. Choose one or more values from the multi-select drop-down menu for the Parent Work Item. These values are derived from the [Features](../boards/kanban-epics-features-stories.md) you defined.

Here, we choose two features on which to filter the board:

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Screenshot of board, Filter on Parent field.](media/filter-boards/filter-kb-parent-filters-services.png)
::: moniker-end

::: moniker range="< azure-devops-2020"
![Screenshot of board, Filter on parent work items.](media/filter-boards/filter-kb-choose-parent-work-items.png)
::: moniker-end

The final board displays just those stories linked as child work items to the selected features.

<a id="tags"></a>

## Filter based on tags

If you added tags to your work items, you can filter your work using one or more tags. For backlogs and query results, add **Tags** as a column option before filtering on tags.  

Check the boxes of those tags that you want to filter on. Keep the **OR** selection to do a logical OR for all the tags  you selected. Or, choose the **AND** option to do a logical AND on all the selected tags. 

> [!div class="mx-imgBorder"]
> ![Screenshot of filtering board based on tags, 2019 and later versions. ](media/filter/filter-boards-tags.png) 

For more information about tags, see [Add tags to work items to categorize and filter lists and boards](../queries/add-tags-to-work-items.md).
  
::: moniker range="azure-devops"

## Filter the history view within a work item form 

In addition to all the filter features described earlier in this article, you can also filter the history view within a work item form. 

To quickly find revisions made that contain a keyword, or made by specific people or to a specific field, enable the filter feature by choosing :::image type="icon" source="../queries/media/history-audit/filter-icon.png" border="false"::: **Toggle filter**.  

:::image type="content" source="../queries/media/history-audit/history-filter.png" alt-text="Screenshot of Work item form, History tab, Web portal, history filter enabled.":::

For more information, see [Query work item history and discussion fields](../queries/history-and-auditing.md#filter-history).

::: moniker-end

## Related articles  

- [Set up your Backlogs and Boards](set-up-your-backlog.md)
- [About backlogs](backlogs-overview.md#work-with-multi-team-ownership-of-backlog-items)
- [Change column options](set-column-options.md)
- [Display rollup progress or totals](display-rollup.md) 
- [Customize cards](../boards/customize-cards.md)
- [Customize a sprint Taskboard](../sprints/customize-taskboard.md)
- [Tags](../queries/add-tags-to-work-items.md) 
- [Query work items that you're following](../work-items/follow-work-items.md#query-work-items-that-youre-following)
- [Reorder cards (boards)](../boards/customize-cards.md#reorder-cards)  

<!--- Other filter features cross-service such as Filter pipelines -->
