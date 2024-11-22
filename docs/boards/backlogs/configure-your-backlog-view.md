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
monikerRange: '>= azure-devops-2019'
ms.date: 11/22/2024
---

# Configure your backlog view in Azure Boards

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Backlogs in Azure DevOps are essential tools that support a wide range of project management tasks. They enable teams to:

- **Define work to be done**: Outline and document the tasks and deliverables required for project completion.
- **Prioritize work**: Order work items based on their importance and urgency to ensure the most critical tasks are addressed first.
- **Organize work hierarchically**: Group related tasks into parent-child relationships for better structure and clarity.
- **Assign work to iterations**: Allocate tasks to specific timeframes or sprints to manage project phases effectively.
- **Forecast work**: Predict project progress and identify potential bottlenecks to maintain timely delivery.

Each backlog—whether it's a **product** or **portfolio** backlog—is a shared resource accessible to all team members. When you add backlog items, set priorities, or establish parent-child links between work items, these changes are instantly visible to the entire team upon refreshing their backlog view.

To maximize the effectiveness of your backlog management, it's crucial to configure your view options in a way that aligns with your team's workflow and project requirements.

## Prerequisites

- **Project access**: Be a [project member](../../organizations/security/add-users-team-project.md)
- **Permissions**: Be a member of the **Contributors** group.
- **Access levels**: 
  - To reorder a backlog or use the Forecast tool, have at least **Basic** access. Users with **Stakeholder** access can't reorder backlog items or use the Forecast tool. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
- **Configured backlogs**: Ensure that both product and portfolio backlogs are set up for your team.

> [!TIP]
> You can't sort your backlog directly by clicking on a column header. To view a sorted list, select **Create query** from your backlog. Save and open the query, then modify it to a flat list query if needed to apply sorting to the results. For more information about queries, see [Use the query editor to list and manage queries](../queries/using-queries.md).

## Backlog configuration options

You can customize your backlog view using the following tools:

- **Expand/collapse one level**
- **Column options**
- **Backlog level selector**
- **View options**
- **Filter toolbar**

Each backlog level—such as stories, features, and epics (Agile process) or product backlog items, features, and epics (Scrum process)—has its own set of configurable options. These settings remain in effect until you decide to change them.

:::image type="content" source="media/configure-view-options/customization-tools.png" alt-text="Screenshot showing the four types of Backlog configuration tool options.":::

### Expand and collapse the hierarchy

When you select a backlog level, it defaults to a **collapsed view**, displaying only the items associated with that specific level. To view more details, use the ![expand icon](../media/icons/expand_icon.png) and ![collapse icon](../media/icons/collapse_icon.png) icons to expand or collapse one level of the hierarchy. This action allows you to navigate through the work item structure as needed. Your expand/collapse selections don't persist when you switch to a different page or view.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Expand/Collapse icons that show/hide a hierarchical view.](media/configure-view-options/expand-collapse.png)

### Use backlog levels

The number of backlog levels available to you gets determined by your team administrator and might include custom work item types or other backlog levels tailored to your team's needs. Each backlog automatically applies the filters associated with the **Area paths** and **Iteration paths** selected for the team.

> [!NOTE]  
> Before using the tools described in this article, we recommend reviewing [Set up your project's backlogs and boards](set-up-your-backlog.md) to ensure your backlog configurations support your team's requirements.

From the **Backlogs** page, you can choose between a **Product Backlog** or a **Portfolio backlog**. To select a backlog, use the backlog level selector located next to the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** icon. The labels within this selector vary based on the process model selected for your project, any customizations made to that process, and configurations set by your team administrator, as illustrated in the following images. 

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

For information on team configuration of backlog levels, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).
 
### Use the view options menu

The :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** menu controls the following options. 

::: moniker range="azure-devops"
:::row:::
   :::column span="2":::
      :::image type="content" source="media/configure-view-options/view-options-menu-cloud.png" alt-text="Screenshot of View options menu, Azure DevOps Services."::: 
   :::column-end:::
   :::column span="3":::
      - **Parents**: Show the hierarchical grouping of parent-child work items. Useful when adding child work items, reparenting a work item, or displaying rollup columns.  
      - **Forecasting**: Show the **Forecast** tool and forecast lines. The **Forecast** option only appears for the first-level backlog and depends on the assignment of **Story points**, **Effort**, or **Size**.   
      - **In progress items**: Show items whose workflow **State** corresponds to an *In progress* workflow state category. If you turn the **In progress** control off, then items that are in the *Active*, *Committed*, or *Resolved* states or a custom workflow state defined in the In progress state category don't appear in the backlog. For more information about category workflow states, see [How to use workflow states and state categories](../work-items/workflow-and-state-categories.md).
      - **Completed child items**: Show child items that are completed. Typically turn it **On** when reviewing a rollup column.     
      - **Keep hierarchy with filters**: Maintain the backlog hierarchy when filtering.   
      - **Mapping**: Shows the **Mapping** pane to support drag-and-drop linking of work items to parent items. The **Mapping** option doesn't appear when you select the highest backlog level configured for your team. 
      - **Planning**: Shows the **Planning** pane to support drag-and-drop of work items to **Iteration paths**.  
   :::column-end:::
:::row-end:::
::: moniker-end

::: moniker range="< azure-devops"
:::row:::
   :::column span="2":::
      :::image type="content" source="media/configure-view-options/view-options-menu.png" alt-text="Screenshot of View options menu."::: 
   :::column-end:::
   :::column span="3":::
      - **Parents**: Show the hierarchical grouping of parent-child work items. Useful when adding child work items, reparenting a work item, or displaying rollup columns.  
      - **Forecasting**: Show the **Forecast** tool and forecast lines. The **Forecast** option only appears for the first-level backlog and depends on the assignment of **Story points**, **Effort**, or **Size**.   
      - **In progress items**: Show items whose workflow **State** corresponds to an *In progress* workflow state category. If you turn the **In progress** control off, then items that are in the *Active*, *Committed*, or *Resolved* states or a custom workflow state defined in the In progress state category don't appear in the backlog. For more information about category workflow states, see [How to use workflow states and state categories](../work-items/workflow-and-state-categories.md).
      - **Completed child items**: Show child items that are completed. Typically you turn it **On** when reviewing a rollup column. 
      - **Mapping**: Shows the **Mapping** pane to support drag-and-drop linking of work items to parent items. The **Mapping** option doesn't appear when you select the highest backlog level configured for your team. 
      - **Planning**: Shows the **Planning** pane to support drag-and-drop of work items to **Iteration paths**.  
   :::column-end:::
:::row-end:::
::: moniker-end

### Use the filter toolbar 

Enable filtering to locate specific work items based on criteria such as keywords, tags, assignments, or other fields configured via **Column options**. To activate the filter feature, select the :::image type="icon" source="../../media/icons/filter-icon.png" border="false"::: **Filter** icon.

:::image type="content" source="media/configure-view-options/filter-toolbar.png" alt-text="Screenshot of backlog filter toolbar.":::

When filtering is active, the backlog displays a flat list of all work items, even if **Parents** is enabled to show hierarchical groupings. The hierarchical view is temporarily suspended until you disable the filter toolbar. The filter toolbar remains visible until you close it.

For more information, see [Filter backlogs, boards, and plans](filter-backlogs-boards-plans.md).

::: moniker range="azure-devops"

## Filter your backlog and maintain the hierarchy 
 
You can filter your backlog and maintain the hierarchy of work by choosing show **Parents** and **Keep hierarchy with filters** from the **View options** menu. 

:::image type="content" source="media/filter/keep-hierarchy-with-filters.png" alt-text="Screenshot of View options menu, Keep hierarchy with filters selected."::: 

Use these options when you want to show work items assigned to one or more team members, work item types, area or iteration paths, or combination of these options and keywords. The hierarchy is maintained and work items that match the filter criteria are shown in bold text.  

::: moniker-end

## Add work items quickly

Efficiently adding work items allows you to capture tasks swiftly and refine their details as more information becomes available. Utilize queries on your backlog to triage, review, refine, and enhance work items added through your backlog.

1. Choose the backlog level where you want to add new work items.

2. From the **View options** menu, toggle the sliders for **Parents** and **Forecasting** to **Off**, which simplifies the view by hiding hierarchical groupings and forecasting tools.
    
3. (Optional settings:)
    - **In progress items**: Turn this option on or off based on whether you want to display items currently in progress.
    - **Column display**: Minimize the number of columns shown on your backlog or select specific fields you wish to display to streamline your view.

4. Add new work items:
    - Select the :::image type="icon" source="../../media/icons/blue-add-icon.png" border="false"::: **New work item** icon.
    - Enter a title for the work item.
    - Select **Add to Top** or **Add to Bottom**:
        - **Recommendation**: Add items to the bottom of the backlog if your team prioritizes backlog items regularly.
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

If your team follows Agile or Scrum methodologies, prioritizing the backlog ensures that the most important work items are addressed first. Follow these steps to effectively prioritize your backlog:

1. Choose the backlog level you want to prioritize, for example, Stories, Features, Epics.

2. From the **View options** menu, turn the **Parents** view option **Off** to simplify the view by hiding hierarchical groupings.

3. **Reorder work items**:
    - **Drag and drop**: Select and drag work items up or down within the backlog to adjust their priority.
    - **Keyboard shortcuts**: Alternatively, hold down the **Alt** key and use the up and down arrow keys to move work items.

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing Reorder work items.](media/configure-view-options/reorder-backlog.png)

> [!NOTE]
> Changes you make to the priority of work items affect all team members. When others refresh their backlogs, the updated priorities display. A background process updates the [**Stack rank** (Agile, Basic, and CMMI processes)](../queries/planning-ranking-priorities.md) or [**Backlog priority** (Scrum process)](../queries/planning-ranking-priorities.md) fields. These fields track the relative ranking of items in the product, feature, epic, or other portfolio backlogs. By default, these fields do not appear on the work item form. Priority ranking is assigned separately for each backlog level, which you can verify by adding the field to a backlog and viewing it in a hierarchical list.

Backlogs involved in portfolio management or containing nested same-type child items might restrict the reordering of items. For more information, see the following articles:
- [Backlogs, portfolios, and Agile project management: Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team)
- [Fix reordering and nesting issues](resolve-backlog-reorder-issues.md)
 
## Prioritize a portfolio backlog

The method for prioritizing a portfolio backlog is similar to that described for a product backlog. The main difference is that you prioritize child items within each portfolio item. Each backlog level&mdash;**Stories**, **Features**, **Epics**&mdash;supports priority ordering distinct from every other level.   

**Prioritize the portfolio items:**
1. Select the portfolio backlog level you want to prioritize. 
1. Turn **Off** the **Parents** view option.  
1. Drag the work items up or down within the backlog.   
2. Within each item, you can expand to see child items and drag these items into priority order.

**Prioritize child items:**
1. Expand each portfolio item.  
1. Drag each child item up or down within the expanded item.   

### Link work items to a parent (mapping)

You can quickly link one or more work items to a parent portfolio item by dragging them within your backlog view.

> [!TIP]  
> Before mapping work items, add and prioritize the portfolio backlog items you want to link to. The **Mapping** pane lists portfolio backlog items in priority order.

1. Choose the backlog level where you want to link work items, for example, **Stories** to link to **Features**.

2. Select :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options**.
3. Select **Mapping** to open the Mapping pane. By default, the pane lists the next-level portfolio items for the current team.

4. (Optional) To map items to parent items owned by a different team, select the desired team from the team selector in the **Mapping** pane.
    
   :::image type="content" source="media/configure-view-options/mapping-pane-selector.png" alt-text="Screenshot of Team selector in Mapping pane."::: 

5. Drag work items from the backlog and drop them onto the desired portfolio item in the **Mapping** pane.
   
   The system automatically creates a parent-child link. The backlog item's text turns bold briefly as the system saves the changes.

   You can select multiple work items to drag at once:
   - **Sequential selection**: Hold down the **Shift** key to select a range of items.
   - **Non-sequential selection**: Hold down the **Ctrl** key to select individual items.
   - Drag the selected items to create links.

6. (Optional) Within an expanded hierarchical view, you can also drag a work item to a different parent to reparent it.

::: moniker range=">= azure-devops-2020"

> [!TIP]  
> To view work items that are unparented, add the **Parent** field as a column. The **Title** of the parent item will be listed for work items that have been linked to a parent.

::: moniker-end

For more information, see [Organize your backlog and map child work items to parents](organize-backlog.md).

## Add child items to a portfolio backlog item  

1. Select the portfolio backlog level, such as **Features**, that you want to add items to. 
1. Select :::image type="icon" source="../../media/icons/blue-add.png" border="false"::: **Add User Story, Bug** for the feature you want to add the child item to as shown in the following image. Your labels might differ based on process and customizations. 
1. In the work item form that appears, enter a **Title** and any other required fields or details. Save the work item to close it. 
 
For more information, see [Define features and epics, add child items](define-features-epics.md#add-child-items).

## View or find unparented work

1. Select the backlog level you want to inspect for unparented items. 
2. Open **View options** and select **Parents**.
3. Scroll to the bottom of the backlog and expand **Unparented Stories**, **Unparented Features**, or similar entries. Unparented work items are listed under these entries.  
	
   :::image type="content" source="media/configure-view-options/unparented-stories.png" alt-text="Screenshot of Unparented stories.":::  

## Assign work to a sprint or iteration

Similar to using the **Mapping** pane, you can use the **Planning** pane to assign one or more work items to an **Iteration path** or sprint. 

1. Ensure all **Iteration paths** are selected for your team that you want to show in the **Planning** pane. 
1. Choose the backlog level that contains the work items you want to assign.   
1. Open **View options**, turn **Off** **Completed child items** and choose **Planning**.  
1. Drag work items from the backlog to the portfolio item listed in the **Mapping** pane. 
	The system creates a parent-child link in the background. The backlog item turns bold and then unbold as the system saves the changes. 

	You can select multiple backlog items and drag them to a portfolio item. To select several items in a sequence, hold down the shift key. To select several nonsequential items, use the **Ctrl** key. Then, you can drag the selected items.  
	:::image type="content" source="media/configure-view-options/assign-sprint-planning-pane.png" alt-text="Screenshot showing drag of a backlog item to a Planning pane sprint."::: 

## Forecast a backlog 

The **Forecast** tool is only available for the product backlog. To forecast your backlog, do the following steps: 

1. Ensure that future **Iteration paths** are selected for your team. 
2. Choose the backlog level for your team. 
3. (Optional) Add the **Story points**, **Effort**, or **Size** field as a column based on the process your project uses. 
4. Open **View options** and turn **Off** the **Parents**, **In progress** items, and **Completed child items**. Turn **On** the **Forecast** option. 
5. Enter a velocity estimate in the **Forecasting based on velocity** box.  
6. Review the forecast lines that appear, similar to the ones shown in the following image. 
	:::image type="content" source="../sprints/media/forecast-s125.png" alt-text="Screenshot of backlog showing Forecast lines."::: 
   The forecast tool doesn't reference any iteration assignments made to the product backlog items. 

> [!TIP]  
> You can drag items to reprioritize them with forecast lines shown. You can also use the **Planning** pane with the **Forecast** tool turned on.  

For more information, see [Forecast your product backlog](../sprints/forecast.md).

::: moniker range="azure-devops"

### Add rollup columns

Enhance your backlog view by adding rollup columns such as a **Progress bar**, **Work item count**, or the **Sum** of any integer or numeric field. These columns let you:

- Monitor progress: Visualize the completion status of parent work items based on their child items.
- Track workload: View the number of work items associated with each parent item.
- Aggregate Data: Calculate the total value of numeric fields, for example, Story Points and Effort, for better project tracking.

Parent work items can include:
- **User Stories** with child **Tasks**
- **Features** with child **User Stories** and **Bugs**
- **Epics** with child **Features**
 
1. Select the backlog level you want to view progress on.
2. Open **View options** to show **Completed Child Items**.  
3. Open **Column options**, choose **Add a rollup column**, and select the progress bar or count to display. 

	:::image type="content" source="media/configure-view-options/progress-feature.png" alt-text="Screenshot of Scenario backlog showing Rollup column for Progress by Feature."::: 

   It can take several moments for the progress bar or count to appear. For more information, see [Display rollup progress or totals](display-rollup.md).
 
::: moniker-end

## Related articles

- [Set up your project's backlogs and boards](set-up-your-backlog.md)
- [Create your product backlog](create-your-backlog.md)  
- [Define features and epics](define-features-epics.md)  
- [Organize your backlog and map child work items to parents](organize-backlog.md) 
- [Configure team settings](../../organizations/settings/manage-teams.md)  

### Bulk modify tools 

- [Bulk modify (web)](bulk-modify-work-items.md) 
- [Bulk add or modify (Excel)](office/bulk-add-modify-work-items-excel.md) 
- [Import or update work items in bulk by using CSV files](../queries/import-work-items-from-csv.md)

