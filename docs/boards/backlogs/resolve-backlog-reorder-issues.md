---
title: Resolve nest, display, and reorder issues for work items 
titleSuffix: Azure Boards
description: Learn how to address and fix error messages caused by nesting and reordering issues that occur in Azure Boards.  
ms.custom: "boards-backlogs, seodec18"  
ms.service: azure-devops-boards
ms.assetid: BDEAA5D4-83A3-49FC-BEEB-EE685E92B68B
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/06/2023
---

# Resolve nest, display, and reorder issues for work items 

<a id="display-hierarchy">  </a>

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<!--- Supports FWLINK https://go.microsoft.com/fwlink/?linkid=529135 --> 

When you add parent-child work item links that aren't in the natural hierarchy, reordering is disabled. Items may not display and the system may disable the drag-and-drop reorder feature.  

Use this article to address error messages that are similar to the following message: 
- "You can't reorder work items and some work items may not be shown."  
- "Work item can't be reordered because its parent is on the same category." 
- "Items added to the backlog may disappear on a refresh because your team project marks them as "in progress." Those items appear when you change the "In progress" filter to Show."

> [!NOTE]   
> For other issues that may occur with multi-team ownership, see [Configure a hierarchy of teams, Exercise select features with shared area paths](../plans/configure-hierarchical-teams.md#op-issues).

## Natural hierarchy for work item types

The following image shows the natural hierarchy for the Agile, Scrum, and Capability Maturity Model Integration (CMMI) processes.

:::image type="content" source="media/resolve/create-hierarchy-with-different-wits.png" alt-text="Conceptual image of natural hierarchy for the Agile, Scrum, and CMMI processes.":::

The natural hierarchy breaks when you create same-category or same-type links between work items. For example, parent-child links that are bug-bug or user story-user story or *requirements* category-*task* category.

## Recommended configuration 

- Maintain a flat list, rather than nesting requirements, bugs, and tasks. Only create parent-child links one level deep between items that belong to a different category. The category a work item belongs to gets determined by your process backlog levels and your team's selected bug behavior.
- Use the *feature* work item type to group user stories (Agile), issues (Basic), product backlog items (Scrum), or requirements (CMMI). You can [quickly map product backlog items to features](organize-backlog.md), which creates parent-child links in the background.
- Don't create a hierarchy of backlog items, tasks, and bugs. Don't create same-category hierarchies, like parent-child links among work items of the same type, such as story-story, bug-bug, task-task, or issue-issue. The backlog, board, and sprints experiences don't support reordering for same-category hierarchies, as it introduces confusion by ordering a work item that doesn't belong on that level.

## Resolve - Cannot reorder work items

You may see a message like: `You cannot reorder work items and some work items may not be shown`.  No work item IDs are listed. 

To address this error, do the following steps: 

1. Open your backlog.
2. Review the list of items to determine which items of the same type are nested.  
   Example #1: The following image shows a user story as a child of another user story. 

   :::image type="content" source="media/resolve/nested-user-stories.png" alt-text="Screenshot of nested user stories.":::
	
   Example #2: The following image shows a bug as a child of a user story. Because the team configured their backlog to display user stories and bugs at the same level (Requirements category), this configuration results in a nested item that disables the ordering feature.

   :::image type="content" source="media/resolve/nested-user-story-bug.png" alt-text="Screenshot of nested user story and bug.":::
	
3. Remove all parent-child links that exist among nested items of the same work item type or same category. Or, change the link to 'Related.'
4. Refresh your backlog.

The message no longer displays.

## Resolve - Cannot reorder work items, change link type or category

You may see a message like: `You cannot reorder work items and some work items may not be shown. See work item(s) 7 to either remove the parent to child link or change the link type to 'Related'." or "Work item 3 can't be reordered because its parent is on the same category"`. 

To address this error, do the following steps: 

1. Open the work item listed in the error message.
2. Look for a parent or child link. Make sure this link goes to a work item within the same category as the work item you opened. This link goes to another work item  that appears on the same backlog level as the work item you opened. Depending on your team's bug behavior setting, bugs may appear with requirements or tasks. 
3. Remove the problem parent-child link. If you would like to keep these items associated, use 'Related' link type instead. 

The message no longer displays.

## Resolve - Work items in progress may disappear on refresh

You may see a message like: `Items added to the backlog may disappear on a refresh because your team project marks them as "in progress". Those items appear when you change the "In progress" filter to Show.`. This message indicates that the **In Progress** filter for the backlog is turned off.  

When you refresh your browser, the backlog displays those work items based on your selected filters. To reset the filters, complete the following steps. 

::: moniker range=">= azure-devops-2019"
1. Open your backlog.
2. From the **View options** selector, choose to show or hide **In Progress items**. 
   - If you turn the **In Progress** control off, then items that are in the *Active*, *Committed*, or *Resolved* states or states that map to the [**In Progress** category state](../work-items/workflow-and-state-categories.md) don't appear in the backlog. 
::: moniker-end
::: moniker range=">= azure-devops-2020"
   :::image type="content" source="media/create-backlog/in-progress-control-2020.png" alt-text="Screenshot of View options selector, In progress control, version 2020 and later.":::
::: moniker-end
::: moniker range="azure-devops-2019"
   :::image type="content" source="media/create-backlog/in-progress-control-2019.png" alt-text="Screenshot of View options selector, In progress control, version 2019.":::
::: moniker-end
::: moniker range="tfs-2018"
1. Open your backlog.
2. Show or hide **In progress items** on your backlog. 
   - If you turn the **In Progress items** control off, then items that are in the *Active*, *Committed*, or *Resolved* states or states that map to the [**In Progress** category state](../work-items/workflow-and-state-categories.md) don't appear in the backlog. 
::: moniker-end
   - Hide **In Progress items** when you want to forecast work. For more information, see [Forecast your product backlog](../sprints/forecast.md).

## Track bugs as requirements or tasks  

[Each team can choose how to track bugs](../../organizations/settings/show-bugs-on-backlog.md), like requirements or tasks, or neither. 

If you track bugs as *requirements*, only nest bugs under the *feature* level.

:::image type="content" source="media/resolve/bugs-as-requirements.png" alt-text="Screenshot of linked bugs like requirements."::: 

If you track bugs as *tasks*, only nest bugs under the *requirements* level.

:::image type="content" source="media/resolve/bugs-as-tasks.png" alt-text="Screenshot of linked bugs like tasks.":::

## Display nested items on backlogs and boards

Sprint backlogs and Taskboards only show the last node in a same-category hierarchy, called the leaf node. 

::: moniker range="tfs-2018"
> [!NOTE]
> - For TFS 2018 and earlier versions, the Kanban board only shows the last node with nested items of a same-category hierarchy.
> - For TFS 2018.2 and later versions, Kanban boards display all work items of nested same-category work items.  
::: moniker-end

::: moniker range="tfs-2018"

### Product backlog and Kanban boards

If you link items within a same-category hierarchy that is four levels deep, for example, only the items at the fourth level appear on the Kanban board, sprint backlog, and Taskboard.

As shown in the following images, the third user story, *Interim save on long form*, has a child bug, *Save takes too long*. The child bug, *Save takes too long*, appears on the Kanban board, but not the parent user story.  

**All bugs and requirements appear on the backlog**  

:::image type="content" source="media/resolve/bugs-appear-on-backlog.png" alt-text="Screenshot showing child bug on backlog.":::

**Only leaf nodes appear on the Kanban board**  

:::image type="content" source="media/resolve/bugs-appear-on-board.png" alt-text="Screenshot showing leaf node bug on Kanban board.":::

::: moniker-end

### Sprint backlogs and Taskboards

When bugs appear in the backlog with tasks, linking tasks and bugs to their parent requirements groups them correctly on the sprint backlog and Taskboard.  
But, if you create parent-child links between a requirement and a bug, and the bug and a task, as shown here, the task appears on the sprint backlog and Taskboard, but not the bug. 

**Hierarchy of items assigned to a sprint backlog**  

:::image type="content" source="media/resolve/sprint-backlog-hierarchy.png" alt-text="Screenshot of Sprint backlog query with linked bug and task.":::  

**Only leaf nodes appear on sprint backlogs**  

:::image type="content" source="media/resolve/sprint-backlog-leaf-only.png" alt-text="Screenshot of Sprint backlog with leaf node task."::: 

**Only leaf nodes appear on Taskboards**

:::image type="content" source="media/resolve/bugs-appear-on-taskboard.png" alt-text="Screenshot of Sprint board with leaf node task.":::
  
## Q: Is there a workaround to display intermediate nodes within a hierarchy?  
A: No, not at this time. You can always check the entire list of items assigned to a sprint when you select **Create query**. 

## Related articles

- [Set up your backlogs and boards](set-up-your-backlog.md)  
- [About boards and Kanban, Limitations of multi-team Kanban board views](../boards/kanban-overview.md#limits-multi-team) 
 