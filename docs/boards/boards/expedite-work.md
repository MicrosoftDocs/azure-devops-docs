---
title: Expedite work using swimlanes
titleSuffix: Azure Boards
ms.global_help.title: Add swimlanes
description: Learn how to use swimlanes to differentiate different types of work you track on the  board in Azure Board.
ms.custom: boards-kanban, engagement-fy23 
ms.service: azure-devops-boards
ms.assetid: 0BBD90C3-7156-4027-B100-9E46F5BD53FB
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/02/2025
---

# Expedite work using swimlanes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

Your board helps you visualize the flow of work as it moves from defined to completed. When you add swimlanes, you can also visualize the status of work that supports different service-level classes. You can create a swimlane to represent any other dimension that supports your tracking needs.    

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

## Types of swimlanes  

You can use up to 50 swimlanes to sort work on your board and track items differentiated by the following categories:
- High priority items
- Service-level class
- Date-driven requirements
- Dependencies for or from another team
- Blocked items
- Technical debt or other engineering work that isn't a specific user story

## Track work in swimlanes  

You can drag items into a swimlane and reorder them within the swimlane. 

> [!TIP]  
> - Enter `o` to expand all swimlanes and `u` to collapse all swimlanes. To move the focus up or down, enter the `↑↓` up/down arrows. For more information, see [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md).
> - When you have many swimlanes or cards on your board, you might encounter slow performance when dragging a card. We recommend that you use swimlanes with card styles, tags, and board filters to manage your work items. If you have numerous cards in the default lane, place that lane lower on the board to enhance performance when dragging a card to another swimlane.  

> [!div class="mx-imgBorder"]
> ![Screenshot of board and dragging items into a swimlane.](media/expedite/swimlanes-move-item.png)

> [!NOTE]
> The default lane appears unlabeled on the board. You can rename it, but you can't delete it or apply rules to it.

You can also focus on a single swimlane by collapsing all other lanes.

> [!div class="mx-imgBorder"]  
> ![Screenshot of board, Collapsed swimlanes.](media/expedite/collapse-lanes.png)  

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]
	
## Add or remove a swimlane 

Identify the swimlanes that support your tracking needs and add them to your board.

::: moniker range="azure-devops"

1. [Open your board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project administrators can customize the board.

2. Choose :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: **Configure board settings** to configure the board.  

	:::image type="content" source="media/expedite/choose-configure-board-settings.png" alt-text="Screenshot of board, Choose Configure board settings.":::

3. Choose **Swimlanes**, choose **Add swimlane**, and then enter the name of the swimlane you want to add. For example, here we enter *Expedite*. You can optionally select the more actions icon :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: to insert a new swimlane above or below another swimlane.

   [!INCLUDE [note-new-boards-hub-default-images](../includes/note-new-boards-hub-default-images.md)]

	:::image type="content" source="media/expedite/add-swimlane-new-board-hubs-enabled.png" alt-text="Screenshot of board Settings, Swimlane tab, Add swimlane.":::

4. To set the color of the swimlane, choose a color from the drop-down menu. To reset the swimlane to the default, choose :::image type="icon" source="../media/icons/refresh.png" border="false":::  **Reset to default color**. 

	:::image type="content" source="media/expedite/pick-swimlane-color.png" alt-text="Screenshot of board Settings, Swimlane tab, choose swimlane color.":::

5. To reorder a swimlane, choose the up or down menu selector :::image type="icon" source="../../media/icons/context-menu-selector.png" border="false"::: to move it up or down. To remove a swimlane, choose :::image type="icon" source="../media/icons/trash-can.png" border="false"::: the trash bin icon, but first move all items out of the lane.

	:::image type="content" source="media/expedite/move-remove-swimlane-options.png" alt-text="Screenshot of board Settings, Swimlane tab, swimlane menu options."::: 

6. When you're done with your changes, choose **Save**. 

::: moniker-end 

::: moniker range=" < azure-devops"

1. [Open your board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the  board.

2. Choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot of gear icon to open board settings for a team.](../../organizations/settings/media/configure-team/open-board-settings.png)  

3. Choose **Swimlanes** and then choose the :::image type="icon" source="../media/icons/green_plus_icon.png" border="false"::: plus icon and enter the name of the swimlane you want to add.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot showing board settings dialog, Add a swimlane.](media/expedite/settings-swimlanes-add.png)  

	The default lane appears unlabeled on the board. You can rename it to anything, but you can't delete it. Also, you can rename it directly from the board. 
    
4. To reorder your swimlanes, grab the lane and move it up or down.   

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing board settings dialog, Reorder a swimlane.](media/expedite/swimlanes-reorder.png)  

5. If you need to delete a swimlane, first move all items out of the lane. Then open the Settings dialog, choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and select **Remove**. 
	
   > [!div class="mx-imgBorder"]
   > ![Screenshot showing board settings dialog, Remove a swimlane.](media/expedite/swimlanes-remove.png)  

6. When you're done with your changes, choose **Save**.  

::: moniker-end 

::: moniker range="azure-devops"

## Set up swimlane rules

Swimlane rules are similar to style rules but allow you to set conditions on your board to automatically move work items into specific lanes. For example, you can set up a lane for each person on your team. When you assign a work item, it gets placed into that person's lane.

Swimlane rules are executed in order. Once a rule is met, it executes and moves on to the next work item. For example, if Lane 1 has a rule that says "where priority = 1" and Lane 2 has a rule that says "where priority = 2", a work item with priority = 1 gets moved into Lane 1.

The following limits apply to swimlanes:
- Up to five rules per lane
- A maximum of 25 rules in total
- Only `AND` conditions are supported

> [!NOTE]
> Manual movement of items into these lanes is restricted to ensure consistency with the configured rules. To move items into a swimlane with configured rules, ensure that the items meet the criteria defined in the swimlane rules. Adjust the item properties accordingly so that they automatically move into the correct swimlane.

Do the following steps to set up swimlane rules for your board.

1. From your board, choose the :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: gear icon to **Configure board settings**.

2. Select **Swimlanes**, select the **swimlane** or **[+ Add swimlane](#add-or-remove-a-swimlane)**, and then select **+ Add criteria**.

   :::image type="content" source="media/expedite/add-swimlane-criteria.png" alt-text="Screenshot showing sequence of buttons to select to add a swimlane rule.":::

3. Choose from the dropdown menus for each of the following entries: **Field**, **Operator**, and **Value**, and then choose **Save**. For more information, see the [examples in the next section](#examples-of-swimlane-rules). 

   :::image type="content" source="media/expedite/swimlane-rule-criteria.png" alt-text="Screenshot showing field, operator, and value selections for swimlane rule.":::

> [!TIP]
> You can't assign rules to the Default lane, but you can optionally rename it.

When your board refreshes, your work items are listed within the appropriate swimlane. 

### Examples of swimlane rules

The following examples show some of the ways you can use and set up swimlane rules.

- **Track priority**. We created rules for the `Work Item Type` and `Priority` fields, so work items automatically go into the appropriate swimlane.
  
  **Settings**

  :::image type="content" source="media/expedite/priority-swimlane-rule-setup.png" alt-text="Screenshot showing swimlane rules set up by priority.":::
  
  **Board results**

  :::image type="content" source="media/expedite/board-priority-swimlanes.png" alt-text="Screenshot showing priority swimlanes on board.":::

- **Track the parents of your work items**. We created rules for the `Work item type` field, so you can quickly see parents (features) and children (user stories and bugs) in their own swimlanes on the board.
  
  **Settings**

  :::image type="content" source="media/expedite/work-item-type-swimlane-rule-setup.png" alt-text="Screenshot showing rules set up for work item types.":::
  
  **Board results**
  
  :::image type="content" source="media/expedite/board-track-parent-work-items-swimlanes.png" alt-text="Screenshot showing parent work item swimlanes on board.":::

- **Track each person's work on your team**. We created rules for the `Assigned to` field, so that when you assign a work item, it goes into that user's lane.
  
  **Settings**
  
  :::image type="content" source="media/expedite/assigned-to-swimlane-rule-setup.png" alt-text="Screenshot showing rule criteria for swimlane, by Assigned To field.":::
  
  **Board results**
  
  :::image type="content" source="media/expedite/board-assigned-to-swimlanes.png" alt-text="Screenshot showing swimlanes grouped by priority.":::

::: moniker-end

## Query for work items based on swimlane

You can track which work items get added to a board swimlane by creating a query and using the [Board Lane field](../queries/query-by-workflow-changes.md#kanban_query_fields).  

## Next steps

> [!div class="nextstepaction"] 
> [Customize cards](../../boards/boards/customize-cards.md)  

## Related articles

* [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
* [Query by assignment or workflow changes](../queries/query-by-workflow-changes.md#kanban_query_fields)
* [Add columns](add-columns.md)  
* [Split columns](split-columns.md)    

### REST API resources

To programmatically interact with the board and other team settings, see the [REST API, Boards reference](/rest/api/azure/devops/work/boards).
