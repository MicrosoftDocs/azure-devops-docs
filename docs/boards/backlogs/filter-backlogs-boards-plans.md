---
title: Filter backlogs, boards, and plans for focused work management
titleSuffix: Azure Boards
description: Streamline your workflow with powerful filtering capabilities across Azure Boards tools. Learn to apply field, keyword, tag, and parent filters effectively.
ms.custom: boards-backlogs, boards-kanban
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/13/2026
---

# Filter and focus your work in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

By using interactive filtering in Azure Boards, you can focus your work management. You can narrow down large sets of work items across all board tools. Each Azure Boards tool comes with built-in filters that provide relevant starting points:

- **Backlogs and boards**: Display work items based on team-configured **Area Paths** and **Iteration Paths**
- **Query results**: Show work items matching specific query criteria
- **Work items pages**: Present personalized views based on assignments and activity

To access advanced filtering capabilities, select the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **Filter** icon in any Azure Boards tool.

:::image type="content" source="media/filter/filter-backlogs.png" alt-text="Screenshot of choosing Filter function in the latest versions.":::

By using interactive filtering, you can apply multiple criteria simultaneously to create highly focused views that support specific workflows and team needs.

## Strategic filtering use cases

Filtering enhances team productivity and workflow efficiency across various scenarios:

### Daily operations
- **Sprint planning**: Filter backlogs to view specific iterations and capacity allocation
- **Daily stand-ups**: Focus boards on current sprint work and blockers
- **Sprint reviews**: Highlight completed work and user story demonstrations
- **Retrospectives**: Filter by iteration to analyze team performance patterns

### Team coordination
- **Individual focus**: Filter by assignee to view personal work items and responsibilities.
- **Feature tracking**: Use parent work item filters to monitor epic or feature progress.
- **Cross-team visibility**: Apply area path filters for multiteam coordination.
- **Skill-based assignment**: Filter by tags to identify work requiring specific expertise.

### Management and reporting
- **Portfolio reviews**: Filter by work item types (Epics, Features) for strategic discussions.
- **Triage activities**: Group similar work items by area path or tags for efficient processing.
- **Risk management**: Filter by priority or status to identify at-risk work.
- **Resource planning**: Use assignee and iteration filters for capacity analysis.

### Quality assurance
- **Bug tracking**: Filter by work item type and state for defect management.
- **Test coordination**: Use tags to identify testing phases and requirements.
- **Release planning**: Filter by iteration and parent items for deployment readiness.

By implementing strategic filtering, teams maintain focus, reduce cognitive load, and ensure critical work receives appropriate attention.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Project membership**|  [Project member](../../organizations/projects/create-project.md)|

## Available filtering capabilities by tool

Filtering capabilities vary across Azure Boards tools based on their specific functionality and Azure DevOps version. Each tool supports different combinations of filter types to optimize your workflow.

> [!NOTE]
> Use the version selector to view the specific filters available for your Azure DevOps version.

The following table shows supported filter options for each tool. Backlogs and boards inherit team-level filters as described in [Create and manage your backlog](create-your-backlog.md).

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
:::moniker range="<=azure-devops"
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
:::moniker-end 
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
:::moniker range="<=azure-devops"
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
      ✔️ 
   :::column-end:::
   :::column span="1":::
      ✔️ 
   :::column-end:::
:::row-end:::
---
:::moniker-end 
 
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
:::moniker-end 
  
:::moniker range="<=azure-devops"
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
:::moniker-end   

**Notes**

1. While the **Parent Work Item** filter function isn't available for **Backlogs** or **Query Results**, you can add the **Parent** field as a column and then do a keyword or phrase search on the parent title to effectively filter on parent work items. See also the [Parent field and Parent Work Item](#parent-filter) section later in this article. 

:::moniker range="<=azure-devops"

### More filter, sort, group, reorder, and rollup functions 

Along with the standard filter functions summarized in the previous table, the following table indicates which tools have more filters you can apply, sort, group, reorder, and rollup functions. Some functions, such as reorder, don't work when the filter function is enabled.  

<br/>
:::moniker-end 

:::moniker range="<=azure-devops"
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
:::moniker-end 
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
      ✔️ (Note 5)  
   :::column-end:::
   :::column span="1":::
            
   :::column-end:::
   :::column span="1":::
      ✔️    
   :::column-end:::
:::row-end:::
---
:::moniker-end 
:::moniker range="<=azure-devops"
:::row:::
   :::column span="2":::
     [**Semantic search, Work Items**](../../project/search/functional-work-item-search.md)
   :::column-end:::
   :::column span="2":::
        
   :::column-end:::
   :::column span="1":::
      ✔️ (Note 6)  
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
:::row-end:::
---
:::moniker-end 

 

 
 
 
 
 
 
 
  
  

**Notes**
1. The **Work items** page applies filters based on the [view selected](../work-items/view-add-work-items.md#view-work-items). The team defines filters for **Boards** and **Backlogs**. The state categories that are assigned to the workflow state determine when work items are completed or in progress, as described in [How workflow states and state categories are used in Backlogs and Boards](../work-items/workflow-and-state-categories.md#category-states). 
1. You can group work items through portfolio backlogs and boards, parent-child links, and tree hierarchy. Tree hierarchies are flattened when you apply filtering and reinstated when you clear filtering.  
1. **Backlogs** and **Sprint Backlogs** support reordering. However, when you enable filtering, reordering isn't supported.
1. **Taskboards** provides a **Group by** function based on **People** or **Stories**.  
1. Work items appear in the order defined for the team Sprint backlog, which it inherits from the team product backlog.  
1. Semantic search supports sorting search results by the following fields&mdash;**Assigned To**, **Changed Date**, **Created Date**, **ID**, **State**, **Tags**, **Title**, and **Work Item Type**&mdash;and Relevance. 

:::moniker range="<=azure-devops"
For more information about these other functions, see the following articles: 
- [Reorder cards (boards)](../boards/customize-cards.md#reorder-cards)  
- [Display rollup progress or totals](display-rollup.md) 
- [About backlogs, Work with multi-team ownership of backlog items](backlogs-overview.md#work-with-multi-team-ownership-of-backlog-items) 
 
:::moniker-end 

 

<a id="parent-filter"></a> 

### Parent Work Item filter and Parent field

By using the **Parent Work Item** filter, you can focus on one or more select features or epics. You get better visibility into related work items within a hierarchy.

You can add the **Parent** field to work item lists through the **Column Options** dialog (except for the **Work items** tool) and to cards on boards and Taskboards. This field displays the title of the parent work item, making it easier to understand relationships and dependencies between work items. 

## Filter persistence and user experience

Filters are automatically saved and user-specific, providing a personalized experience across Azure Boards tools.

### How filter settings persist
- **Automatic saving**: Filter configurations are saved automatically without requiring manual action.
- **User-specific**: Each team member maintains independent filter settings.
- **Session persistence**: Settings remain active across browser sessions and refreshes.
- **Cross-device sync**: Filter preferences synchronize across different devices when signed in.

### Important limitations
- **No team defaults**: You can't configure default filters for other team members.
- **No shared configurations**: Users can't share filter settings.
- **Tool-specific**: Each Azure Boards tool maintains separate filter settings.

**Best practice**: Regularly review and clear filters to ensure you're viewing complete, current information.

To filter work items based on specific fields, first add the field as a column or to the card. For example, to filter by **Assigned To**, **Iteration Path**, **Work Item Type**, or any other field's content, ensure these fields are displayed on the cards, backlog, plan, or list.

All filter configurations are user-specific and remain active until you clear them.

To add columns or fields, see the following articles: 

:::moniker range="<=azure-devops"
- For Backlogs and Queries, see [Change column options](set-column-options.md).
- For Boards, see [Customize cards](../boards/customize-cards.md).
- For Taskboards, see [Customize a sprint Taskboard](../sprints/customize-taskboard.md).
- For Plans, see [Review team delivery plans]( ../plans/review-team-plans.md). 
:::moniker-end

## Enable and configure filtering

Follow these steps to set up effective filters across Azure Boards tools:

### Step 1: Select your view
Choose the view that fits your filtering needs:

**Work items page:**
- **Assigned to me**: Items where you're the assignee
- **Following**: Items you're monitoring for changes  
- **Mentioned**: Items where you're @mentioned
- **Recently created/updated**: Items with recent activity

**Backlogs and boards:**
- Select backlog level: **Stories**, **Features**, or **Epics**
- Choose appropriate team area path and iteration

**Sprint tools:**
- Select specific iteration from sprint selector
- Choose appropriate sprint backlog or taskboard view

**Queries:**
- Define base query criteria before applying more filters
- Ensure query returns manageable result set

### Step 2: Configure view settings
Optimize your view before applying filters:

**Work items:** Enable or disable **Completed Work Items** from **View options**
**Backlogs:** Configure **In Progress items** or **Completed Child items** display
**Taskboards:** Select **All**, **Unassigned**, or specific team member from **Person** menu

### Step 3: Add relevant columns or fields
Make sure you can see the fields you want to filter on:
- **List views**: Add columns through **Column Options** 
- **Card views**: Choose which fields show up on cards
- **Common filter fields**: Assigned To, Work Item Type, State, Area Path, Iteration Path

### Step 4: Open the filter toolbar
Turn on filtering by using one of these methods:
- Select **Filter** :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: icon
- Use keyboard shortcut: **Ctrl+Shift+F**

Example: Opening filter toolbar for the Backlog items board:

> [!div class="mx-imgBorder"]  
> ![Screenshot of choosing Filter function.](media/filter-boards/filter-kb-choose-filter-services.png)

### Step 5: Apply your filters
Pick the filter criteria you want from the options. The filter icon changes to :::image type="icon" source="../../media/icons/filtered.png" border="false"::: **Filter** (solid) to show that filtering is active.

The page refreshes automatically to show only work items that match all the selected criteria.

### Inactive functions
 
::: moniker range="azure-devops"
When you apply a filter, the following functions are disabled or altered: 
- For backlogs, the add-a-backlog-item panel, reordering (stack ranking), and forecasting tools are disabled. 
- For backlogs set to **Show Parents**, the tree hierarchy is flattened, unless you enable the **Keep hierarchy with filters** from the **View Options** menu. See [Filter your backlog and maintain the hierarchy](#keep hierarchy) provided later in this article. 
:::moniker-end

::: moniker range="< azure-devops"
When you apply a filter, the following functions are disabled or altered: 
- For backlogs, the add-a-backlog-item panel, reordering (stack ranking), and forecasting tools are disabled. 
- For backlogs set to **Show Parents**, the tree hierarchy is flattened. 
:::moniker-end

### Clear or dismiss filtering

To clear and dismiss filtering, choose **Clear and dismiss filtering** :::image type="icon" source="../../media/icons/close-filter.png" border="false":::.

Filters remain in place until you explicitly clear them. When you refresh your backlog, board, or other tool, or sign in from another browser, filters stay set to your previous values.

After you filter the board, you can choose the filter icon to hide the drop downs and view the applied filters on the board. The filter icon turns opaque to signify a filtered board.

<a id="keep hierarchy"></a> 

::: moniker range="azure-devops"

## Filter your backlog and maintain the hierarchy 
 
You can filter your backlog and maintain the hierarchy of work by choosing show **Parents** and **Keep hierarchy with filters** from the **View Options** menu. Use these options when you want to show work items assigned to one or more team members, work item types, area or iteration paths, or combination of these items and keywords. The hierarchy is maintained and work items that match the filter criteria are shown in bold text.  

:::image type="content" source="media/filter/keep-hierarchy-with-filters.png" alt-text="Screenshot of View options menu, Keep hierarchy with filters selected."::: 

:::moniker-end

## Filter logic and Boolean operators

Applying Boolean operators to filters is only supported for tags, as described in [Filter based on tags](#tags) later in this article. All other filters are applied with an implicit **AND** operator.  

<a id="text-filter"></a>

## Keyword and ID filtering strategies

Keyword filtering provides powerful text-based search across visible work item fields.

### How keyword filtering works

- **Field scope**: Searches all fields configured in **Column Options** or visible on cards
- **Case insensitive**: Search terms ignore capitalization differences
- **Flexible matching**: Finds partial matches within field content
- **ID support**: Directly filter by work item IDs even if ID field isn't visible

> [!TIP]
> Ensure relevant fields (Title, Tags, Description) are displayed before applying keyword filters for best results.

### Character filtering behavior

The keyword filter ignores these characters: `,` (comma), `.` (period), `/` (forward slash), and `\` (back slash).

### Example: Filter board by keyword

This example shows filtering a board to display only cards containing "web" in any visible field:

> [!div class="mx-imgBorder"]  
> ![Screenshot of board, Filter using keyword search.](media/filter-boards/filter-kb-text-web-services.png)

### Example: Filter backlog with keyword

Filter a hierarchical backlog with **Show Parents** enabled to show work items containing "web":

> [!div class="mx-imgBorder"]  
> ![Screenshot of Backlog, Hierarchy, Filter using keyword search.](media/filter/filter-backlog-web-keyword.png)

> [!NOTE]
> Filtered results always display as a flat list, even with **Show Parents** enabled. 

<a id="field-filter"></a>

## Filter by work item fields

Field-based filtering gives you precise control over which work items appear in your view.

### How field filter values populate

Filter dropdown options populate based on actual work item data:

* **Area Path**: Displays the node name (last segment) of all area paths containing work items.
* **Assigned To**: Shows all users currently assigned to visible work items, plus **Unassigned** option.
* **Iteration Path**: Lists iterations [configured for the current team](../sprints/define-sprints.md) that contain work items.
* **Work Item Type**: Shows types from relevant categories (Requirements, Features, Epics) with existing work items.
* **Tags**: Displays all tags assigned to work items in the current view.
* **Parent Work Items**: Shows parent items (Features or Epics) defined for the team.

> [!IMPORTANT]
> Filter options depend on currently loaded work items. If you have a large backlog (2,000+ items) but only 1,000 are displayed, filter options reflect only the displayed items.

### Multi-select filtering logic

Field filters use consistent Boolean logic:

1. **Assigned to**: Shows cards assigned to User1 **OR** User2
   **AND**
1. **Iteration**: Shows cards in Iteration1 **OR** Iteration2  
   **AND**
1. **Work Item Type**: Shows Type1 **OR** Type2 work items
   **AND**
1. **Tags**: Shows cards with Tag1 **AND/OR** Tag2 (based on selection)
   **AND**
1. **Parent Work Items**: Shows cards with Parent1 **OR** Parent2

### Example: Filter by assignee

To view work items assigned to specific team members:

:::moniker range="<=azure-devops"
> [!div class="mx-imgBorder"]  
> ![Screenshot of enable board, Filter on assignment field.](media/filter-boards/filter-kb-filters-chosen-services.png)
:::moniker-end

This example filters for all items assigned to Jamal and Raisa, so you can see both users' work at the same time.

### Filter a backlog by using fields

This example shows a filtered backlog based on the keyword "issues." Filtered pages show the :::image type="icon" source="../../media/icons/filtered.png" border="false"::: filtered icon. The filtered set is always a flat list, even if you selected to show a hierarchical backlog view. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of filtered backlog based on the keyword "issues".](media/filter/filter-issues-keyword.png)   

<a id="parent-filter"></a>

## Filter by parent work items for focused feature tracking

Parent work item filtering enables focused viewing of specific features or epics and their related child items.

### When to use parent filtering

**Prerequisites:**
- Create features or epics and link them to child items.
- Establish parent-child relationships through [drag-and-drop mapping](organize-backlog.md).
- Works on product backlogs (Stories, Product Backlog Items, Requirements) and portfolio backlogs (Features).

**Limitations:**
- Can't filter by parent work items of the same type (for example, user stories with user story parents).
- Requires existing parent-child link relationships.

### How to apply parent filtering

1. Select **Filter** :::image type="icon" source="../media/icons/kanban-filter-icon.png" border="false"::: to open filtering options.
1. Choose one or more values from the **Parent Work Item** dropdown.
1. Available options come from Features (for story boards) or Epics (for feature boards) that you define for your team.

The following example shows filtering by two specific features:

:::moniker range="<=azure-devops"
> [!div class="mx-imgBorder"]  
> ![Screenshot of board, Filter on Parent field.](media/filter-boards/filter-kb-parent-filters-services.png)
:::moniker-end

The filtered board displays only child work items linked to the selected parent features, providing focused feature-level visibility.

<a id="tags"></a>

## Filter by tags for flexible categorization

Tag-based filtering provides flexible work item categorization beyond formal area and iteration paths.

### Tag filtering setup

**Prerequisites:**
- Assign tags to work items.
- Add **Tags** as a column for backlogs and query results before filtering.
- Make tags visible on cards for board filtering.

### Boolean tag filtering options

**OR logic (default)**: Select multiple tags to show work items containing any of the selected tags.
**AND logic**: Choose **AND** option to show work items containing all selected tags simultaneously.

> [!div class="mx-imgBorder"]
> ![Screenshot of filtering board based on tags.](media/filter/filter-boards-tags.png) 

### Effective tag filtering strategies

- **Feature grouping**: Use tags like `user-management`, `reporting`, `api-integration`.
- **Skill identification**: Apply tags such as `frontend`, `backend`, `database`, `design`.
- **Priority marking**: Tag urgent items with `critical`, `hotfix`, `high-priority`.
- **Process tracking**: Use workflow tags like `ready-for-review`, `needs-testing`, `blocked`.
- **Cross-team coordination**: Mark items affecting multiple teams with relevant team tags.

**Best practices:**
- Establish team tagging conventions for consistency.
- Use descriptive, searchable tag names.
- Regularly review and clean up unused tags.
- Combine tag filtering with other criteria for precise results.

For comprehensive tag management guidance, see [Add tags to work items to categorize and filter lists and boards](../queries/add-tags-to-work-items.md).
  
::: moniker range="azure-devops"

## Filter the history view within a work item form 

In addition to the filter features described earlier in this article, you can also filter the history view within a work item form. 

To quickly find revisions that contain a keyword, or revisions made by specific people or to a specific field, enable the filter feature by choosing :::image type="icon" source="../queries/media/history-audit/filter-icon.png" border="false"::: **Toggle filter**.  

:::image type="content" source="../queries/media/history-audit/history-filter.png" alt-text="Screenshot of Work item form, History tab, Web portal, history filter enabled.":::

For more information, see [Query work item history and discussion fields](../queries/history-and-auditing.md#filter-history).

:::moniker-end

## Related content  

- [Create and manage you backlog](create-your-backlog.md)
- [Change column options](set-column-options.md)
- [Display rollup progress or totals](display-rollup.md) 
- [Customize cards](../boards/customize-cards.md)
- [Customize a sprint Taskboard](../sprints/customize-taskboard.md) 

<!--- Other filter features cross-service such as Filter pipelines -->
