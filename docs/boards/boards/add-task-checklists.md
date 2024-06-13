---
title: Add tasks or other child work items to checklists
titleSuffix: Azure Boards
description: Add tasks, subtasks, to do lists, bugs, or other child work items as checklists to your board for lightweight tracking in Azure Board and Azure DevOps.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: D4CE68D6-8056-4CB7-ACFA-1FCD05223040 
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 04/29/2024
---

# Add tasks or child items as checklist items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Your board in Azure DevOps lets you visualize your team’s tasks, track progress, and manage work items efficiently. This article provides step-by-step instructions on how to add task checklists to your board, enhancing your team’s productivity and transparency.

The following image shows a representation of various tasks and bugs in progress. Some are still pending, while others are marked as completed. By incorporating the Issue work item type into your Iteration backlog, you can seamlessly add issues as checklists

:::image type="content" source="media/checklists/board-checklists.png" alt-text="Screenshot of product-level board with three work items showing child lists":::

## Learn checklist features

Make use of the following features for checklists. 

- Enable **checklists on all boards** (product and portfolio levels).
- **Create parent-child links** by adding checklist items to work items.
- For product-level boards:
  - **Manage Bugs with tasks**: [Add and track them within checklists](../../organizations/settings/show-bugs-on-backlog.md).
  - **Manage Bugs with requirements**: Add tasks to bugs tracked on the board.
- **Mark checklist items as “done”** to update work item states.
- **Customize checklist features** in the [Board settings](customize-cards.md).
- **Automatically assign child items** to the sprint/iteration path of parent work items.
- **Add any work item type** using the checklist feature.
- To track work item types as checklists, **add them to the next-lower hierarchical backlog**. For more information, see [Customize backlogs/boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md) or [Process configuration XML element reference (on-premises XML process)](../../reference/xml/process-configuration-xml-element.md).

> [!TIP]    
> You can disable it from the [common configurations dialog](customize-cards.md).  

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

[!INCLUDE [temp](../includes/open-kanban-board.md)]

## Add one or more child items to a checklist

In the following example, tasks get added to the product board using the checklist feature. You can use the same procedures to add any other supported checklist item from your board.  

1. From your board, select :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **Work item actions** > **+ Add Task**. If you already have a work item open, select **Add link** > **New item**. For more information, see [Link work items to objects](../backlogs/add-link.md).

    :::image type="content" source="media/checklists/add-task-menu.png" alt-text="Screenshot of open the context menu of work item to add a task.":::

2. If you have many tasks to add, keep entering their titles and select **Enter** after each title.  

    :::image type="content" source="media/checklists/four-tasks-added.png" alt-text="Screenshot shows four added tasks, added one after the other.":::
    
3. Select the task **title** to add details. 
    
    :::image type="content" source="media/checklists/open-task.png" alt-text="Screenshot shows opening a task by selecting the title.":::

> [!NOTE]  
> Tasks that you create from your board appear on your sprint Taskboard. Also, tasks that you create from the [sprint backlog](../sprints/assign-work-sprint.md) or [Taskboard](../sprints/task-board.md) appear within tasks checklists on your board.  

## Mark a checklist item as done 

When you complete a task or other checklist item, choose the checkbox to change its status to Done, Closed, or Completed. 

:::image type="content" source="media/checklists/board-checklists.png" alt-text="Screenshot of product-level board showing several done child items":::

The **State** of the work item is updated from *Active* to *Closed* for projects based on an Agile or CMMI process, and from *To Do* to *Done* for projects based on a Scrum or Basic process. 

> [!TIP]  
> Regardless of the number of workflow states a checklist item might have, marking it as checked transitions it to its closed or completed state.     

## Expand or collapse a checklist on a board

When you open a board, there's an unexpanded view of checklists. Select the checklist summary to expand and collapse it. 

:::image type="content" source="media/checklists/unexpanded-checklists.png" alt-text="Screenshot of unexpanded checklist":::

## Reorder tasks, reparent tasks, or reassign tasks to a sprint 

You can drag a task within a work item to reorder it. Or, you can drag the task to another work item on the board to reparent it. 

![Screenshot show dragging tasks to reorder them.](../get-started/media/plan-track-work/reorder-task.png)

> [!NOTE]   
> Users with **Stakeholder** access can't drag-and-drop tasks or reorder and reparent tasks.

Tasks or other child items you add as checklists are automatically assigned to the **Iteration Path** of their parent work item. To reassign a checklist item to a different sprint, you must open the item and change its **Iteration Path**. Or, open the sprint backlogs and drag it to the new sprint using the Planning pane. For more information, see [Assign backlog items to a sprint](../sprints/assign-work-sprint.md).  

<a id="checklist-actions"></a> 

::: moniker range="azure-devops"

## Reassign a checklist item 

Checklist items show the avatars of those team members assigned to the item. You can view the avatar assignment of checklist items, or reassign a checklist item by choosing the item's &hellip;**Work items action menu** and selecting **Assigned to**.  

> [!NOTE]   
> Avatar images and the **Assign to** menu option requires you to enable the **New Boards Hub** preview feature. To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md).

:::image type="content" source="media/checklists/checklist-actions-menu.png" alt-text="Screenshot of Boards, list of tasks showing avatars, and checklist of work items action menu.":::

::: moniker-end

## Configure your board 

To configure or change the layout of your board, see [Customize your boards](../configure-customize.md). 

## Related content

- [Learn about board features and epics](kanban-epics-features-stories.md)
- [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Add, run, update manual tests](add-run-update-tests.md)
- [Use the REST API, Work Items reference](/rest/api/azure/devops/wit/work-items/create)
