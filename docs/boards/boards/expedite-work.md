---
title: Expedite work using swimlanes
titleSuffix: Azure Boards
ms.global_help.title: Add swimlanes
description: Learn how to use swimlanes to differentiate different types of work you track on the board in Azure Boards.
ms.custom: boards-kanban, engagement-fy23 
ms.service: azure-devops-boards
ms.assetid: 0BBD90C3-7156-4027-B100-9E46F5BD53FB
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 09/19/2025
---

# Expedite work using swimlanes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

Your board helps you visualize the flow of work as it moves from defined to completed. Swimlanes let you separate and track different classes of work on your board (for example, high‑priority items, expedited work, or technical debt). You can create swimlanes to represent any dimension that supports your tracking and flow needs.

What you'll learn:
- What swimlanes are and when to use them.
- How to add, reorder, color, and remove swimlanes.
- How to configure swimlane rules to automatically route items.
- Limits and availability of swimlane rules.

Quick steps:
1. Open your team board: **Overview** > **Boards**.
2. Choose **Configure board settings** (gear icon) and select **Swimlanes**.
3. Add or remove swimlanes, set colors, and save.
4. (Optional) Add swimlane rules to automatically place work items.

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

## Types of swimlanes  

You can use up to 50 swimlanes to sort work on your board and track items differentiated by the following categories:
- High priority items
- Service-level class
- Date-driven requirements
- Dependencies to or from another team
- Blocked items
- Technical debt or other engineering work that isn't a specific user story

## Track work in swimlanes  

Drag items into a swimlane and reorder them within the swimlane.

> [!TIP]  
> - Press `o` to expand all swimlanes and `u` to collapse all swimlanes. Use the arrow keys (↑/↓) to move focus between lanes. For more information, see [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md).
> - If you have many swimlanes or cards, dragging performance might be slower. Use swimlanes in combination with card styles, tags, and board filters to manage large boards. If the default lane contains many cards, place it lower on the board to make dragging to other lanes faster.

> [!div class="mx-imgBorder"]
> ![Screenshot showing board and dragging items into a swimlane.](media/expedite/swimlanes-move-item.png)

> [!NOTE]
> The default lane appears unlabeled on the board. You can rename it, but you can't delete it or apply rules to it.

You can also focus on a single swimlane by collapsing the other lanes.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing board with collapsed swimlanes.](media/expedite/collapse-lanes.png)  

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]
    
## Add or remove a swimlane 

Identify the swimlanes that support your tracking needs and add them to your board.

::: moniker range="azure-devops"

1. [Open your board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project administrators can customize the board.
2. Choose :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: **Configure board settings**.
3. Choose **Swimlanes**, choose **Add swimlane**, and enter the swimlane name (for example, *Expedite*). Use the more actions icon :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: to insert a lane above or below another lane.

   [!INCLUDE [note-new-boards-hub-default-images](../includes/note-new-boards-hub-default-images.md)]

   :::image type="content" source="media/expedite/add-swimlane-new-board-hubs-enabled.png" alt-text="Screenshot showing the Add swimlane dialog in board settings.":::

4. To set the color of the swimlane, choose a color from the drop-down menu. To reset the swimlane to the default, choose :::image type="icon" source="../media/icons/refresh.png" border="false"::: **Reset to default color**. 

   :::image type="content" source="media/expedite/pick-swimlane-color.png" alt-text="Screenshot showing the swimlane color picker.":::

5. To reorder a swimlane, choose the up/down selector :::image type="icon" source="../../media/icons/context-menu-selector.png" border="false":::. To remove a swimlane, choose the trash icon :::image type="icon" source="../media/icons/trash-can.png" border="false"::: after you move all items out of the lane.

   :::image type="content" source="media/expedite/move-remove-swimlane-options.png" alt-text="Screenshot showing reorder and remove swimlane options."::: 

6. When you're done with your changes, choose **Save**. 

::: moniker-end 

::: moniker range="<azure-devops"

1. [Open your board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the board.
2. Choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: gear icon to configure the board and set team settings.  
3. Choose **Swimlanes** and then choose the :::image type="icon" source="../media/icons/green_plus_icon.png" border="false"::: plus icon and enter the swimlane name.

   > [!div class="mx-imgBorder"]
   > ![Screenshot showing the board settings dialog to add a swimlane.](../../organizations/settings/media/configure-team/open-board-settings.png)

4. To reorder swimlanes, grab a lane and move it up or down.  
5. To delete a swimlane, first move all items out of it. Then open Settings, choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and select **Remove**. 
6. When you're done with changes, choose **Save**.  

::: moniker-end 

## Set up swimlane rules

Swimlane rules allow you to automatically route work items into lanes based on field criteria. For example, you can create a lane per person and use a rule that places items into that lane when the item is assigned.

Rules are evaluated in order. When a rule matches, it executes and evaluation continues with the next work item. For example, if Lane 1 has a rule "where Priority = 1" and Lane 2 has "where Priority = 2", an item with Priority = 1 goes to Lane 1.

Limits for swimlane rules:
- Up to five rules per lane
- A maximum of 25 rules in total per board
- Only AND conditions are supported

> [!NOTE]
> Manual movement into lanes with configured rules might be restricted to ensure consistency. To move an item into a rule-managed lane, make sure the item meets the lane's rule criteria.

### Swimlane rules—availability

- Azure DevOps Services (cloud): swimlane rules are supported and available to cloud organizations.
- Azure DevOps Server (on-premises): availability and feature parity depend on server version. If your on-premises server doesn't show swimlane rules, consider upgrading to a more recent Azure DevOps Server release or consult your server release notes and upgrade guidance to confirm support.

Do the following steps to set up swimlane rules for your board.

1. From your board, choose :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: **Configure board settings**.
2. Select **Swimlanes**, select the **swimlane** or **[+ Add swimlane](#add-or-remove-a-swimlane)**, and then select **+ Add criteria**.

   :::image type="content" source="media/expedite/add-swimlane-criteria.png" alt-text="Screenshot showing add swimlane rule criteria.":::

3. Choose the **Field**, **Operator**, and **Value** from the dropdowns, then choose **Save**. See the following examples of common patterns.

> [!TIP]
> You can't assign rules to the Default lane, but you can rename it.

When your board refreshes, your work items are listed in the appropriate swimlane. 

### Examples of swimlane rules

- **Track priority**  
  Create rules for the `Work Item Type` and `Priority` fields so items automatically move into the appropriate swimlane.

  **Settings**
  :::image type="content" source="media/expedite/priority-swimlane-rule-setup.png" alt-text="Screenshot showing swimlane rules set up by priority.":::

  **Board results**
  :::image type="content" source="media/expedite/board-priority-swimlanes.png" alt-text="Screenshot showing board with priority swimlanes.":::

- **Track parents and children**  
  Use rules for `Work Item Type` to highlight features, user stories, and bugs in separate lanes.

  **Settings**
  :::image type="content" source="media/expedite/work-item-type-swimlane-rule-setup.png" alt-text="Screenshot showing rules for work item types.":::

  **Board results**
  :::image type="content" source="media/expedite/board-track-parent-work-items-swimlanes.png" alt-text="Screenshot showing board with parent/child swimlanes.":::

- **Track an individual's work**  
  Create rules for `Assigned to` so items go to the assigned user's lane.

  **Settings**
  :::image type="content" source="media/expedite/assigned-to-swimlane-rule-setup.png" alt-text="Screenshot showing rule criteria for swimlane by Assigned To.":::

  **Board results**
  :::image type="content" source="media/expedite/board-assigned-to-swimlanes.png" alt-text="Screenshot showing board with swimlanes grouped by assigned person.":::

## Query for work items based on swimlane

You can track which work items get added to a board swimlane by creating a query and using the [Board Lane field](../queries/query-by-workflow-changes.md#kanban_query_fields).  

## Next step

> [!div class="nextstepaction"] 
> [Customize cards](../../boards/boards/customize-cards.md)  

## Related content

* [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
* [Query by assignment or workflow changes](../queries/query-by-workflow-changes.md#kanban_query_fields)
* [Add columns](add-columns.md)  
* [Split columns](split-columns.md)    

### REST API resources

To programmatically interact with the board and other team settings, see the [REST API, Boards reference](/rest/api/azure/devops/work/boards).
