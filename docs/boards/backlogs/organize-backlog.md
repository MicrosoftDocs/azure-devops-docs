---
title: "Tutorial: Organize Your Product Backlog in Azure Boards"
titleSuffix: Azure Boards
description: Learn how to map or parent backlog items to features. Then learn how to map features to epics in Azure Boards.
ms.custom: boards-backlogs
ms.service: azure-devops-boards
ms.assetid: C294ACBD-00A3-4FCF-8777-B354BC0CC1EF
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 07/29/2025
#customer intent: As a team member with organizational responsibilities, I want to understand how to organize a project backlog in Azure Boards.
---

# Tutorial: Organize your backlog and map child work items to parents in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this tutorial, you learn how to organize your backlog in Azure Boards. After you add features or epics to your portfolio backlog, you can map backlog items. You can add and group items into a hierarchy. Also, drill up or down in the hierarchy, reorder and reparent items, and filter hierarchical views.

In this article, you learn how to:
 
> [!div class="checklist"]    
> - Open your product backlog or portfolio backlog
> - View the tree hierarchy
> - Group backlog items using the Mapping pane
> - Reparent items through dragging or the **Change parent** option

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites.md)]

::: moniker range="azure-devops"  

> [!NOTE]   
> **Stakeholder** access users for a private project can't drag items to map or reparent them or to assign their sprint.

::: moniker-end

::: moniker range="< azure-devops"  

> [!NOTE]   
> **Stakeholder** access users can't drag items to map or reparent them or to assign their sprint.

::: moniker-end  

## Open your backlog from the web portal

From your web browser, open your product backlog.

[!INCLUDE [links to backlog information](../includes/setup-backlogs-boards.md)]

::: moniker range=">= azure-devops-2020"

1. Select your project, choose **Boards>Backlogs**, and then select the team. 

    :::image type="content" source="media/organize-backlog/open-backlogs-backlog.png" alt-text="Screenshot shows backlog items for a selected team.":::

    To select different backlog, open the selector and then choose a team or select the **View Backlog directory** option. Or, enter a keyword to filter the list of team backlogs for the project.

    :::image type="content" source="../sprints/media/assign-items-sprint/backlog-team-selector-s155.png" alt-text="Screenshot shows the menu option to select a different team."::: 

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list. 

1. Select **Stories** (for Agile), **Issues** (for Basic), **Backlog items** (for Scrum), or **Requirements** (for CMMI) as the backlog level.

    :::image type="content" source="media/organize-backlog/select-product-backlog-agile.png" alt-text="Screenshot shows the Stories option with its suboptions, including Features and Stories.":::

1. To choose which columns should display and in what order, choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Column options**. For more information, see [Change column options](../backlogs/set-column-options.md).

	:::image type="content" source="media/organize-backlog/open-column-options.png" alt-text="Screenshot shows the Column Options button.":::

::: moniker-end

[!INCLUDE [temp](../includes/image-differences-with-wits.md)]

## Show parent tasks and expand the tree hierarchy

::: moniker range="azure-devops"

You can set various options to view backlog work items using the **View options** menu. To learn which options to set based on the tasks you want to accomplish, see [Configure your backlog view](configure-your-backlog-view.md). 

1. To view Parents or a tree hierarchy, choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and for **Parents**, select **On**.  

	:::image type="content" source="media/organize-backlog/show-parents-scrum-cloud.png" alt-text="Screenshot shows the View Options menu with the Parents setting highlighted.":::

	The hierarchical view displays. From this view, you can reparent items by dragging a child item to a new parent. 

	:::image type="content" source="media/organize-backlog/hierarchical-view-agile.png" alt-text="Screenshot shows hierarchical view of the backlog.":::

1. Use the :::image type="icon" source="../media/icons/expand_icon.png" border="false"::: **Expand** and :::image type="icon" source="../media/icons/collapse_icon.png" border="false"::: **Collapse** icons to expand or collapse one level of the hierarchy.   

	:::image type="content" source="media/organize-backlog/expand-collapse-agile.png" alt-text="Screenshot shows the expand and collapse icons.":::  

::: moniker-end

::: moniker range="<azure-devops"

You can set various options to view backlog work items using the **View options** menu. To learn which options to set based on the tasks you want to accomplish, see [Configure your backlog view](configure-your-backlog-view.md). 

1. To view Parents or a tree hierarchy, choose :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** and for **Parents**, select **On**.

	:::image type="content" source="media/organize-backlog/show-parents-agile.png" alt-text="Screenshot shows View options for backlogs with Parents on.":::

	The hierarchical view displays. From this view, you can reparent items by dragging a child item to a new parent. 

	:::image type="content" source="media/organize-backlog/hierarchical-view-agile.png" alt-text="Screenshot shows the hierarchical view of a backlog.":::

1. Use the :::image type="icon" source="../media/icons/expand_icon.png" border="false"::: **Expand** and :::image type="icon" source="../media/icons/collapse_icon.png" border="false"::: **Collapse** icons to expand or collapse one level of the hierarchy.  

	:::image type="content" source="media/organize-backlog/expand-collapse-agile.png" alt-text="Screenshot shows the expand and collapse icons.":::   

::: moniker-end

<a id="mapping">  </a>

## Map items to group them under a feature or epic 

If you already created your backlog, you can organize it by mapping child items to parents.   

::: moniker range="azure-devops"

1. Choose :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** and select **Mapping**.  

	:::image type="content" source="media/organize-backlog/turn-mapping-on-scrum-cloud.png" alt-text="Screenshot shows View options with Mapping enabled.":::

	The **Mapping** pane displays immediately.

1. Find **Unparented** backlog items that appear at the end of the parented set of backlog items. Parents must be turned on in view options. 

    :::image type="content" source="media/organize-backlog/map-unparented-items-agile.png" alt-text="Screenshot shows an unparented item to be moved to a different parent.":::

1. To map features to epics, select the **Features** backlog from the backlog selector. The Epics Mapping pane automatically displays. 

::: moniker-end

::: moniker range="<azure-devops"

1. Choose :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** and select **Mapping**.  

	:::image type="content" source="media/organize-backlog/turn-mapping-on-agile.png" alt-text="Screenshot shows View options with Mapping selected.":::

	The **Mapping** pane displays immediately. 

1. Find **Unparented** backlog items that appear at the end of the parented set of backlog items. Parents must be turned on in view options. 

   :::image type="content" source="media/organize-backlog/map-unparented-items-agile.png" alt-text="Screenshot shows an unparented item being moved to a different parent.":::

2. To map features to epics, select the **Features** backlog from the backlog selector. The Epics Mapping pane automatically displays. 

::: moniker-end

You can multiple select backlog and sprint backlog items in the same way as you [multiple select items from query results](../backlogs/bulk-modify-work-items.md).   

It's the same process to map features to epics. From the **Features** backlog, drag features to an epic listed under the mapping pane.  

<a id="reparent">  </a>

## Change the parent task and reorder items

When you need to change the order or grouping, drag the item to its new location. 

You can reparent an item using the mapping pane, or drag it within the hierarchy to change its parent.  

:::image type="content" source="media/organize-backlog/reparent.png" alt-text="Screemshot shows how to reparent or reorder work items on a backlog"::: 

You can only reparent backlog items under other features, and features under other epics. 

To change an item's priority within a group, drag the item up or down within its hierarchical group. 
Reordering from a portfolio backlog works the same as when you [moved items into priority order on your product backlog](create-your-backlog.md).   

### Limitations on reordering backlog items owned by other teams

If you find you can't reorder a backlog item, check whether the :::image type="icon" source="../../media/icons/info.png" border="false"::: info icon appears in the first column as shown in the following image. 

:::image type="content" source="media/organize-backlog/multi-team-reorder-limitation.png" alt-text="Screenshot shows the information icon where you can find whether an item can be reordered."::: 

You can reparent items owned by other teams, but you can't reorder items owned by other teams. For more information, see [Backlogs, portfolios, and Agile project management, Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team). 

<a id="change-parent-option">  </a>

::: moniker range="<=azure-devops"

## Change a parent of multiple backlog items 

From a product or portfolio backlog, you can multiple select several work items and choose **Change parent&hellip;** to link the items to a parent work item. 

::: moniker-end

::: moniker range="azure-devops"

:::image type="content" source="media/organize-backlog/multi-reparent-cloud.png" alt-text="Screenshot shows the Change parent menu option for several backlog items.":::

::: moniker-end

::: moniker range="<azure-devops"

:::image type="content" source="media/organize-backlog/multi-reparent.png" alt-text="Screenshot shows the Change parent menu option for several selected backlog items.":::

::: moniker-end

[!INCLUDE [temp](../includes/add-portfolio-backlogs.md)]

[!INCLUDE [temp](../includes/display-rollup-section.md)]

## Related content  

- [Define features and epics](define-features-epics.md)
- [Configure your backlog view](configure-your-backlog-view.md)
- [Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team)
- [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md)
- [Filter product and portfolio backlogs](filter-backlogs-boards-plans.md)
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
