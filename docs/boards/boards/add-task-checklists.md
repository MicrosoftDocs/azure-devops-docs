---
title: Add tasks or other child work items to checklists
titleSuffix: Azure Boards
description: Add tasks, subtasks, to do lists, bugs, or other child work items as checklists to your Kanban board for lightweight tracking in Azure Board and Azure DevOps.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: D4CE68D6-8056-4CB7-ACFA-1FCD05223040 
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 07/26/2022
---

# Add tasks or child items as checklist items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]


Many teams find Kanban boards ideal for tracking work. Kanban boards are ideal because they support visualization the flow of work that is in progress. It also allows team members to quickly add new items and update work item status in a Kanban board. If you're new to working with the Kanban board, see [Kanban overview](kanban-overview.md).  

With checklists or to do lists, you continue to enjoy lightweight tracking. You gain visibility into which tasks, bugs, or other child items are in progress or completed. For example, here we show several tasks and bugs for work in progress, both yet to do and those items marked as completed. By adding the Issue work item type to the Iteration backlog, issues can be added as checklists. 
::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/checklists/board-checklists.png" alt-text="Screenshot of product-level Kanban board with three work items showing child lists":::
::: moniker-end
::: moniker range="tfs-2018"
<img src="media/kanban-task-checklists.png" alt="Kanban board with several task checklists defined" />  
::: moniker-end

In this article, you'll learn: 
> [!div class="checklist"]    
> * Summary of checklist features
> * How to add checklist items from your Kanban board  
> * How to mark a checklist item as done 
> * How to expand or collapse a checklist  
> * How to reorder and reparent checklist items or reassign them to a sprint 

## Overview of checklist features 

Checklists are a feature of all Kanban boards, both product and portfolio backlog levels. 

- All Kanban board levels support checklists. For a view of default backlog hierarchies, see [Plan and track work](../get-started/plan-track-work.md).  
- Adding a checklist item automatically adds a parent-child link between the parent work item and the checklist item. 
- For the product-level board:
	- When **Bugs are managed with tasks**, they're available to add and track within a checklist. 
	- When **Bugs are managed with requirements**, you can add tasks to bugs that are tracked on the board. Teams make this choice via Board settings, [**Working with bugs**](../../organizations/settings/show-bugs-on-backlog.md).
- Marking any checklist item as "done" moves the work item **State** to done, closed, or completed.  
- Teams can remove select checklist features by disabling them on the [**Annotations** tab of the Board settings](customize-cards.md#annotations).
- Tasks or other child items that you create from the Kanban board are automatically assigned to the sprint/iteration path of the parent work item under which you define them. 
- Any work item type added to the backlog hierarchy is available to add using the checklist feature.  
	To add work item types to track as checklists, add them to the next-lower hierarchical backlog. To learn how, see [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md) or [Process configuration XML element reference (On-premises XML process)](../../reference/xml/process-configuration-xml-element.md). 

> [!TIP]    
> If you find that you don't use this feature, you can disable it from the [common configurations dialog](customize-cards.md#annotations).  


[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

[!INCLUDE [temp](../includes/open-kanban-board.md)] 

## Add one or more child items to a checklist

In this example, tasks are added to the product Kanban board using the checklist feature. You can use the same procedures to add any other supported checklist item from your board.  

1. To start adding tasks, open the menu for the work item.  
    ::: moniker range=">=azure-devops-2019"  
    :::image type="content" source="media/checklists/add-task-menu.png" alt-text="Screenshot of open the context menu of work item to add a task.":::
    ::: moniker-end
    ::: moniker range="tfs-2018"  
    <img src="media/add-tasks-menu-options-vs-ts.png" alt="Open the context menu of a backlog item to add a task" />  
    ::: moniker-end

2. If you have many tasks to add, keep entering their titles and choose Enter after each title.  
    ::: moniker range=">= azure-devops-2019"  
    :::image type="content" source="media/checklists/four-tasks-added.png" alt-text="Screenshot of added tasks.":::
    ::: moniker-end
    ::: moniker range="tfs-2018"
    <img src="media/kanban-board-task-checklists-added.png" alt="Work item with several tasks added" />  
    ::: moniker-end

3. If you have details you want to add about a task, open the item by choosing the title. 
    :::image type="content" source="media/checklists/open-task.png" alt-text="Screenshot of opening a task.":::

> [!NOTE]  
> Tasks that you create from the Kanban board appear on your sprint Taskboard. Also, tasks that you create from the [sprint backlog](../sprints/assign-work-sprint.md) or [Taskboard](../sprints/task-board.md) appear within tasks checklists on the Kanban board.  


## Mark a checklist item as done 

When you complete a task or other checklist item, choose the checkbox to change its status to Done, Closed, or Completed. 

::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/checklists/board-checklists.png" alt-text="Screenshot of product-level Kanban board showing several done child items":::
::: moniker-end
::: moniker range="tfs-2018"
<img src="media/kanban-check-done-tasks.png" alt="Check tasks that are complete" />
::: moniker-end

The **State** of the work item is updated from *Active* to *Closed* for projects based on an Agile or CMMI process, and from *To Do* to *Done* for projects based on a Scrum or Basic process. 

> [!TIP]  
> No matter the number of workflow states a checklist item has, checking it moves it to its closed or completed state.      

## Expand or collapse a checklist on a Kanban board

Upon first opening the Kanban board, you'll see an unexpanded view of checklists. Choose the checklist summary to expand a collapsed checklist. Choose the same summary to collapse an expanded checklist. 

::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/checklists/unexpanded-checklists.png" alt-text="Screenshot of unexpanded checklist":::
::: moniker-end
::: moniker range="tfs-2018"
<img src="media/kanban-board-first-open-collapsed-checklists.png" alt="Expand task checklist for a work item" /> 
::: moniker-end


## Reorder tasks, reparent tasks, or reassign tasks to a sprint 

You can drag a task within a work item to reorder it. Or, you can drag the task to another work item on the Kanban board to reparent it. 

::: moniker range=">= azure-devops-2019"
![Drag tasks to reorder them.](../get-started/media/plan-track-work/reorder-task.png)
::: moniker-end
::: moniker range="tfs-2018"
![Drag tasks to reorder them within the list](media/task-checklist-reorder-tasks.png) 
::: moniker-end


> [!NOTE]   
> Users with **Stakeholder** access can't drag-and-drop tasks or reorder and reparent tasks.

Tasks or other child items you add as checklists are automatically assigned to the **Iteration Path** of their parent work item. To reassign a checklist item to a different sprint, you must open the item and change its **Iteration Path**. Or, open the sprint backlogs where it's currently defined and  drag it to the new sprint using the Planning pane. For more information, see [Assign backlog items to a sprint](../sprints/assign-work-sprint.md).  

<a id="checklist-actions" /> 

::: moniker range="azure-devops"

## Reassign a checklist item 

Checklist items show the avatars of those team members assigned to the item. You can view the avatar assignment of checklist items, or reassign a checklist item by choosing the item's &hellip;**Work items action menu** and selecting **Assigned to**.  

> [!NOTE]   
> Avatar images and the **Assign to** menu option requires you to enable the **New Boards Hub** preview feature. To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md).

:::image type="content" source="media/checklists/checklist-actions-menu.png" alt-text="Screenshot of Boards, list of tasks showing avatars, and checklist of work items action menu.":::

::: moniker-end


## Configure the Kanban board 

To configure or change the layout of the Kanban board, see [Customize your boards](../configure-customize.md). 


## Related articles  

- [Kanban board features and epics](kanban-epics-features-stories.md)
- [Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Add, run, update manual tests](add-run-update-tests.md)
- [Create a new branch, drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md)
- [Use Kanban board controls](kanban-overview.md#use-kanban-board-controls.md)

### REST API resources
To programmatically create work items, see the [REST API, Work Items reference](/rest/api/azure/devops/wit/work-items/create).
