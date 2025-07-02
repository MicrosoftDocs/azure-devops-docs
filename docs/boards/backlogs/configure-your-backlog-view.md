---
title: Configure your backlog view in Azure Boards
titleSuffix: Azure Boards
description: Learn how to set your backlog level, view options, and column options to support your project management tasks in Azure Boards and Azure DevOps.   
ms.custom: boards-backlogs
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/01/2025
# customer intent: As a team member, I want to configure my backlog view options so that I can organize, prioritize, and track work items effectively for my team's workflow and project requirements. -->
---

# Configure your backlog view in Azure Boards

[!INCLUDE [Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020](../includes/version-gt-eq-2020.md)]

Backlogs help teams define, prioritize, and organize work hierarchically while assigning tasks to iterations and forecasting progress. Each backlog is a shared team resource where changes to items, priorities, and parent-child links are instantly visible to all team members.

This article shows you how to configure your backlog view options—including backlog levels, view settings, column options, and filtering—to align with your team's workflow and project requirements.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md). |
| **Permissions** | Member of the **Contributors** group. |
| **Access levels** | - To reorder a backlog or use the Forecast tool: At least **Basic** access. Users with **Stakeholder** access can't reorder backlog items or use the Forecast tool. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). |
| **Configured backlogs** | Both product and portfolio backlogs set up for your team. |

> [!TIP]
> You can't sort your backlog directly by clicking on a column header. To view a sorted list, select **Create query** from your backlog. Save and open the query, then modify it to a flat list query if needed to apply sorting to the results. For more information about queries, see [Use the query editor to list and manage queries](../queries/using-queries.md).

## Backlog configuration options

Customize your backlog view with these configuration tools:

- **Expand/collapse one level**: Show or hide hierarchical work item relationships
- **Column options**: Select which fields display as columns
- **Backlog level selector**: Switch between product and portfolio backlogs
- **View options**: Control visibility of parents, forecasting, filters, and planning panes
- **Filter toolbar**: Find specific work items by keywords, tags, or field values

Each backlog level (Stories, Features, Epics) maintains separate configuration settings that persist across sessions.

:::image type="content" source="media/configure-view-options/customization-tools.png" alt-text="Screenshot showing the four types of Backlog configuration tool options.":::

### Expand and collapse the hierarchy

Backlog levels default to a **collapsed view** showing only items for that level. Use the ![expand icon](../media/icons/expand_icon.png) and ![collapse icon](../media/icons/collapse_icon.png) icons to show or hide one level of the hierarchy. These settings don't persist when you navigate to other pages.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Expand/Collapse icons that show/hide a hierarchical view.](media/configure-view-options/expand-collapse.png)

### Use backlog levels

Your team administrator configures available backlog levels, which might include custom work item types. Each backlog automatically applies your team's **Area paths** and **Iteration paths** filters.

> [!NOTE]  
> Before configuring these tools, review [Create your backlog](create-your-backlog.md) to ensure your setup supports your team's requirements.

Use the backlog level selector (next to the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** icon) to switch between **Product Backlog** and **Portfolio backlog** levels. Available options vary by process model and customizations, as shown in the following table. 

:::row:::
   :::column span="1":::
      **Agile process**  
      :::image type="content" source="media/configure-view-options/agile-process-levels.png" alt-text="Screenshot of Backlog level selector for the Agile process.":::  
   :::column-end:::
   :::column span="1":::
      **Scrum process**  
      :::image type="content" source="media/configure-view-options/scrum-process-levels.png" alt-text="Screenshot of Backlog level selector for the Scrum process.":::  
   :::column-end:::
   :::column span="1":::
      **Basic process**  
      :::image type="content" source="media/configure-view-options/basic-process-levels.png" alt-text="Screenshot of Backlog level selector for the Basic process."::: 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **CMMI process**  
      :::image type="content" source="media/configure-view-options/cmmi-process-levels.png" alt-text="Screenshot of Backlog level selector for the CMMI process.":::  
   :::column-end:::
   :::column span="1":::
      **Customized process**  
      :::image type="content" source="media/configure-view-options/customized-process-levels.png" alt-text="Screenshot of Backlog level selector for the Customized process.":::   
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::

For more information, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).
 
### Use the view options menu

The :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** menu controls the following options. 

::: moniker range="azure-devops"
:::row:::
   :::column span="2":::
      :::image type="content" source="media/configure-view-options/view-options-menu-cloud.png" alt-text="Screenshot of View options menu, Azure DevOps Services."::: 
   :::column-end:::
   :::column span="3":::
      - **Parents**: Show hierarchical parent-child relationships. Useful for adding children, reparenting, or viewing rollup columns.  
      - **Forecasting**: Show forecast tool and lines. Available only for first-level backlogs with assigned **Story points**, **Effort**, or **Size**.   
      - **In progress items**: Show items in *In progress* workflow states. When off, hides items in *Active*, *Committed*, or *Resolved* states. See [workflow states and state categories](../work-items/workflow-and-state-categories.md).
      - **Completed child items**: Show completed child items. Turn on when reviewing rollup columns.     
      - **Keep hierarchy with filters**: Maintain hierarchy when filtering.   
      - **Mapping**: Show **Mapping** pane for drag-and-drop linking to parents. Not available at the highest backlog level. 
      - **Planning**: Show **Planning** pane for drag-and-drop assignment to **Iteration paths**.  
   :::column-end:::
:::row-end:::
::: moniker-end

::: moniker range="< azure-devops"
:::row:::
   :::column span="2":::
      :::image type="content" source="media/configure-view-options/view-options-menu.png" alt-text="Screenshot of View options menu."::: 
   :::column-end:::
   :::column span="3":::
      - **Parents**: Show hierarchical parent-child relationships. Useful for adding children, reparenting, or viewing rollup columns.  
      - **Forecasting**: Show forecast tool and lines. Available only for first-level backlogs with assigned **Story points**, **Effort**, or **Size**.   
      - **In progress items**: Show items in *In progress* workflow states. When off, hides items in *Active*, *Committed*, or *Resolved* states. See [workflow states and state categories](../work-items/workflow-and-state-categories.md).
      - **Completed child items**: Show completed child items. Turn on when reviewing rollup columns. 
      - **Mapping**: Show **Mapping** pane for drag-and-drop linking to parents. Not available at the highest backlog level. 
      - **Planning**: Show **Planning** pane for drag-and-drop assignment to **Iteration paths**.  
   :::column-end:::
:::row-end:::
::: moniker-end

### Use the filter toolbar 

Filter work items by keywords, tags, assignments, or fields configured in **Column options**. Select the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **Filter** icon to activate filtering.

:::image type="content" source="media/configure-view-options/filter-toolbar.png" alt-text="Screenshot of backlog filter toolbar.":::

When active, filtering displays a flat list and temporarily suspends the hierarchical view, even if **Parents** is enabled. The filter toolbar stays visible until you close it.

For more information, see [Filter backlogs, boards, and plans](filter-backlogs-boards-plans.md).

::: moniker range="azure-devops"

## Filter your backlog and maintain the hierarchy 
 
Filter your backlog while preserving hierarchy by enabling **Parents** and **Keep hierarchy with filters** in the **View options** menu. 

:::image type="content" source="media/filter/keep-hierarchy-with-filters.png" alt-text="Screenshot of View options menu, Keep hierarchy with filters selected."::: 

Use these options to filter by team members, work item types, paths, or keywords while maintaining the hierarchy. Matching items appear in bold text.  

::: moniker-end

## Add work items quickly

Quickly capture work items and refine details later. Use backlog queries to triage and enhance items after adding them.

1. Choose the backlog level where you want to add new work items.

2. From the **View options** menu, turn **Off** **Parents** and **Forecasting** to simplify the view.
    
3. (Optional) Configure more settings:
    - **In progress items**: Show or hide items currently in progress.
    - **Column display**: Minimize columns or select specific fields, streamlining your view.

4. Add new work items:
    - Select the :::image type="icon" source="../../media/icons/blue-add-icon.png" border="false"::: **New work item** icon.
    - Enter a title for the work item.
    - Select **Add to Top** or **Add to Bottom**:
        - **Recommendation**: Add items to the bottom if your team prioritizes backlog items regularly.
    - Select **Enter** to add the work item.
    
    > [!div class="mx-imgBorder"]
    > ![Screenshot to Add a work item.](media/configure-view-options/add-backlog-item.png) 
    
   Work items are automatically assigned the default **Area path** and **Iteration path** configured for the team.
    
   > [!NOTE]  
   > If you have **Stakeholder** access, you can only add work items to the bottom of the backlog. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

For more detailed instructions, see the following articles:
- [Create your product backlog](create-your-backlog.md)
- [Define features and epics](define-features-epics.md)
 
## Prioritize your product backlog 

Prioritize your backlog to ensure the most important work items are addressed first:

1. Choose the backlog level you want to prioritize (Stories, Features, Epics).

2. From the **View options** menu, turn **Off** the **Parents** option to simplify the view.

3. **Reorder work items**:
    - **Drag and drop**: Select and drag work items up or down to adjust priority.
    - **Keyboard shortcuts**: Hold **Alt** and use arrow keys to move items.

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing Reorder work items.](media/configure-view-options/reorder-backlog.png)

> [!NOTE]
> Priority changes affect all team members and update automatically when they refresh their backlogs. A background process updates the [**Stack rank** (Agile, Basic, and CMMI processes)](../queries/planning-ranking-priorities.md) or [**Backlog priority** (Scrum process)](../queries/planning-ranking-priorities.md) fields. These fields track relative ranking and are assigned separately for each backlog level. By default, these fields don't appear on work item forms.

Some backlogs might restrict reordering due to portfolio management or nested items. For more information, see:
- [Backlogs, portfolios, and Agile project management: Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team)
- [Fix reordering and nesting issues](resolve-backlog-reorder-issues.md)
 
## Prioritize a portfolio backlog

Portfolio backlog prioritization works like product backlog prioritization, except you prioritize child items within each portfolio item. Each backlog level (**Stories**, **Features**, **Epics**) supports separate priority ordering.   

**Prioritize portfolio items:**
1. Select the portfolio backlog level you want to prioritize. 
1. Turn **Off** the **Parents** view option.  
1. Drag work items up or down within the backlog.   

**Prioritize child items:**
1. Expand each portfolio item.  
1. Drag each child item up or down within the expanded item.   

### Link work items to a parent (mapping)

Quickly link work items to parent portfolio items by dragging them within your backlog view.

> [!TIP]  
> Before mapping, add and prioritize the portfolio backlog items you want to link to. The **Mapping** pane lists portfolio items in priority order.

1. Choose the backlog level where you want to link work items (for example, **Stories** to **Features**).

2. Select :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options**.
3. Select **Mapping** to open the Mapping pane. The pane lists next-level portfolio items for the current team.

4. (Optional) To map items to parents owned by a different team, select the team from the team selector in the **Mapping** pane.
    
   :::image type="content" source="media/configure-view-options/mapping-pane-selector.png" alt-text="Screenshot of Team selector in Mapping pane."::: 

5. Drag work items from the backlog and drop them onto the desired portfolio item in the **Mapping** pane.
   
   The system automatically creates a parent-child link and the backlog item's text turns bold briefly.

   To select multiple work items:
   - **Sequential selection**: Hold **Shift** to select a range of items.
   - **Non-sequential selection**: Hold **Ctrl** to select individual items.
   - Drag the selected items to create links.

6. (Optional) Within an expanded hierarchical view, drag a work item to a different parent to reparent it.

::: moniker range=">= azure-devops-2020"

> [!TIP]  
> To view unparented work items, add the **Parent** field as a column. The parent item's **Title** appears for linked work items.

::: moniker-end

For more information, see [Organize your backlog and map child work items to parents](organize-backlog.md).

## Add child items to a portfolio backlog item  

1. Select the portfolio backlog level (**Features**, for example) where you want to add items. 
1. Select :::image type="icon" source="../../media/icons/blue-add.png" border="false"::: **Add User Story, Bug** for the feature you want to add the child item to. Labels might differ based on your process and customizations. 
2. In the work item form, enter a **Title** and any required fields. Save the work item. 
 
For more information, see [Define features and epics, add child items](define-features-epics.md#add-child-items).

## View or find unparented work

1. Select the backlog level you want to inspect for unparented items. 
2. Open **View options** and select **Parents**.
3. Scroll to the bottom and expand **Unparented Stories**, **Unparented Features**, or similar entries. Unparented work items are listed under these entries.  
	
   :::image type="content" source="media/configure-view-options/unparented-stories.png" alt-text="Screenshot of Unparented stories.":::  

## Assign work to a sprint or iteration

Use the **Planning** pane to assign work items to an **Iteration path** or sprint. 

1. Ensure all **Iteration paths** you want to show in the **Planning** pane are selected for your team. 
1. Choose the backlog level that contains the work items you want to assign.   
1. Open **View options**, turn **Off** **Completed child items** and choose **Planning**.  
1. Drag work items from the backlog to the desired sprint in the **Planning** pane. 
	The system creates assignments in the background. The backlog item turns bold briefly as the system saves changes. 

	To select multiple items: hold **Shift** for sequential items or **Ctrl** for individual items, then drag the selected items.  
	:::image type="content" source="media/configure-view-options/assign-sprint-planning-pane.png" alt-text="Screenshot showing drag of a backlog item to a Planning pane sprint."::: 

## Forecast a backlog 

The **Forecast** tool is only available for the product backlog. To forecast your backlog: 

1. Ensure future **Iteration paths** are selected for your team. 
2. Choose the backlog level for your team. 
3. (Optional) Add the **Story points**, **Effort**, or **Size** field as a column based on your process. 
4. Open **View options** and turn **Off** **Parents**, **In progress** items, and **Completed child items**. Turn **On** **Forecast**. 
5. Enter a velocity estimate in the **Forecasting based on velocity** box.  
6. Review the forecast lines that appear, similar to the ones shown in the following image. 
	:::image type="content" source="../sprints/media/forecast-s125.png" alt-text="Screenshot of backlog showing Forecast lines."::: 
   
   The forecast tool doesn't reference iteration assignments made to product backlog items. 

> [!TIP]  
> You can drag items to reprioritize them with forecast lines shown. You can also use the **Planning** pane with the **Forecast** tool turned on.  

For more information, see [Forecast your product backlog](../sprints/forecast.md).

::: moniker range="azure-devops"

## Next step

> [!div class="nextstepaction"]
> [Add rollup columns](display-rollup.md)

::: moniker-end

## Related content

- [Create and manage your backlog](create-your-backlog.md)  
- [Define features and epics](define-features-epics.md)  
- [Organize your backlog and map child work items to parents](organize-backlog.md) 
- [Configure team settings](../../organizations/settings/manage-teams.md)
