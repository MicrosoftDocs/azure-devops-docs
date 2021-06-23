---
title: Add tasks or child items as checklists
titleSuffix: Azure Boards
description: Add tasks, subtasks, to do lists, bugs, or other child work items as checklists to your Kanban board for lightweight tracking in Azure Boards, Azure DevOps.
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.assetid: D4CE68D6-8056-4CB7-ACFA-1FCD05223040 
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2015'
ms.date: 06/23/2021
---


# Add tasks or child items as checklists

[!INCLUDE [temp](../includes/version-vsts-tfs-2015-on.md)]


Many teams find Kanban ideal for tracking work as it supports visualizing the flow of work in progress. And, you can quickly add new items and update status. If you're new to working with the Kanban board, see [Kanban basics](kanban-basics.md).  

With checklists or to do lists, you continue to enjoy lightweight tracking, while gaining visibility into which tasks, bugs, or other child items are still to be completed and those that are done. Checklists provide a quick and easy way to track elements of work which are important to support completing a backlog item. The checklist feature also is a quick way to add child items. Any work item type added to the backlog hierarchy is available to add using the checklist feature. 

Here we see several tasks and bugs for work in progress, both yet to do and those completed. Bugs are tracked alongside tasks. Also, the Issue work item type has been added to the Iteration backlog, so issues can be added as checklists. 
::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/checklists/board-checklists.png" alt-text="Screenshot of product-level Kanban board with three work items showing child lists":::
::: moniker-end
::: moniker range="<= tfs-2018"
<img src="media/kanban-task-checklists.png" alt="Kanban board with several task checklists defined" style="border: 1px solid #C3C3C3;" />  
::: moniker-end

In this article, you'll learn: 
> [!div class="checklist"]    
> * How to add checklist items from your Kanban board  
> * How to mark a checklist item as done 
> * How to expand or collapse a checklist  
> * How to reorder and reparent checklist items or reassign them to a sprint 

::: moniker range="tfs-2015"
> [!NOTE]  
> Kanban board checklists are supported from TFS 2015.1 and later versions. 
::: moniker-end

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

## Overview of checklist features 

Checklists are a feature of all Kanban boards, both product and portfolio backlog levels.  

- All Kanban board levels support checklists  
- For the product-level board:
	- When **Bugs are managed with tasks**, they are available to add and track within a checklist. 
	- When **Bugs are managed with requirements**, you can add tasks to bugs that are tracked on the board. 
- Marking any checklist item as "done" moves the work item State to closed, done, or completed  
- Teams can remove select checklist features by disabling them on the Annotations tab of the Board settings

To add work item types to track as checklists, add them to the next-lower hierarchical backlog. To learn how, see [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md) or [Process configuration XML element reference (On-premises XML process)](../../reference/xml/process-configuration-xml-element.md). 


[!INCLUDE [temp](../includes/open-kanban-board.md)] 

## Add one or more child items 

In this example, tasks are added to the product Kanban board using the checklist feature. You can use the same procedures to add any other supported checklist item from your board.  

1. To start adding tasks, open the menu for the work item.  
    ::: moniker range=">=azure-devops-2019"  
    :::image type="content" source="media/checklists/add-task-menu.png" alt-text="Screenshot of open the context menu of work item to add a task.":::
    ::: moniker-end
    ::: moniker range=">= tfs-2017 <= tfs-2018"  
    <img src="media/add-tasks-menu-options-vs-ts.png" alt="Open the context menu of a backlog item to add a task" style="border: 1px solid #C3C3C3;" />  
    ::: moniker-end
    ::: moniker range="tfs-2015"
    <img src="media/kanban-board-add-task-checklist.png" alt="Open the context menu of a backlog item to add a task" style="border: 1px solid #C3C3C3;" />  
    ::: moniker-end

2. If you have a number of tasks to add, simply keep typing your task titles and choose Enter.   
    ::: moniker range=">=azure-devops-2019"  
    :::image type="content" source="media/checklists/four-tasks-added.png" alt-text="Screenshot of added tasks.":::
    ::: moniker-end
    ::: moniker range=">=tfs-2015 >= tfs-2018"
    <img src="media/kanban-board-task-checklists-added.png" alt="Work item with several tasks added" style="border: 1px solid #C3C3C3;" />  
    ::: moniker-end
::: moniker range=">= tfs-2017"
3. If you have details you want to add about a task, open the item by choosing the title. 
    :::image type="content" source="media/checklists/open-task.png" alt-text="Screenshot of opening a task.":::
::: moniker range="tfs-2015"
4.  If you have details you want to add about a task, open the parent work item and then choose the :::image type="icon" source="../media/icons/icon-links-tab-wi.png" border="false"::: links icon/tab. 

   <img src="media/add-task-checklist-open-task.png" alt="Open parent work item, Links tab" style="border: 1px solid #C3C3C3;" />  

4. Double-click the task, or select and press the Enter key, to open it.   

    <img src="media/kanban-board-open-task-form.png" alt="Open task work item form from task checklist" style="border: 1px solid #C3C3C3;" />  
::: moniker-end
    > [!NOTE]  
    > Tasks that you create from the Kanban board will show up on your sprint Taskboard. Also, tasks that you create from the [sprint backlog](../sprints/assign-work-sprint.md) or [taskboard](../sprints/task-board.md) will show up within tasks checklists on the Kanban board.  


## Mark a checklist item as done 

When you complete a task or other checklist item, simply choose the checkbox to change its status to Done, Closed, or Completed. 

::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/checklists/board-checklists.png" alt-text="Screenshot of product-level Kanban board showing several done child items":::
::: moniker-end
::: moniker range="<= tfs-2018"
<img src="media/kanban-check-done-tasks.png" alt="Check tasks that are complete" style="border: 1px solid #C3C3C3;" />
::: moniker-end

The State of the work item is updated from To Do to Done for Scrum projects, and from Active to Closed for Agile and CMMI projects. 

> [!TIP]  
> No matter the number of workflow states a checklist item has, checking it moves it to its closed state.      

## Expand or collapse a checklist  

Upon first opening the Kanban board, you'll see an unexpanded view of checklists. Simply choose the checklist summary to expand a collapsed checklist. Choose the same summary to collapse an expanded checklist. 

::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/checklists/unexpanded-checklists.png" alt-text="Screenshot of unexpanded checklist":::
::: moniker-end
::: moniker range="<= tfs-2018"
<img src="media/kanban-board-first-open-collapsed-checklists.png" alt="Expand task checklist for a work item" style="border: 1px solid #C3C3C3;" /> 
::: moniker-end


## Reorder and reparent tasks or reassign them to a sprint 

Tasks that you create from the Kanban board are automatically assigned to the sprint/iteration path of the parent work item under which you define them. 

You can drag a task within a work item to reorder it. Or, you can drag the task to another work item on the Kanban board to reparent it. 

![Drag tasks to reorder them within the list](media/task-checklist-reorder-tasks.png)  

> [!NOTE]   
> Users with **Stakeholder** access can't drag-and-drop tasks or reorder and reparent tasks.

To reassign a task to a different sprint, you must open the sprint backlog where it's currently defined and then drag it to the new sprint.  


2. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks. 

	> [!div class="mx-tdCol2BreakAll"]  
	> |Mark a task as done |Reorder and reparent tasks | Expand or collapse the checklist| 
	> |------------------|--------------|--------------|  
	> |To mark a task as complete, check the task checkbox. The task State changes to **Done**.<br/>![Mark task as done](../get-started/media/plan-track-work/mark-tasks-as-done.png) |To reorder a task, drag it within the checklist. To reparent a the task, drag it to another issue on the board.<br/>![Drag tasks to reorder them within the list](../get-started/media/plan-track-work/reorder-task.png)  |To expand or collapse a task checklist, simply choose the task annotation.<br/>![Collapse task checklist](../get-started/media/plan-track-work/collapse-task-list.png) |  


## Configure the Kanban board 

To configure or change the layout of the board, see one of these topics. 

* [Add columns](add-columns.md)  
* [WIP limits](wip-limits.md)  
* [Add swimlanes, expedite work](expedite-work.md)   
* [Customize cards](../../boards/boards/customize-cards.md)  
* [Split columns](split-columns.md)   
* [Definition of Done](definition-of-done.md)  
 

## Related articles  

Use your checklists for lightweight tracking of to-do lists. If you find that you don't use this feature, you can disable it from the [common configurations dialog](../../boards/boards/customize-cards.md#annotations). 

You can also [add tags and show tags and fields on cards](../../boards/boards/customize-cards.md) to support other tracking needs.  

In addition, you can:  

- [Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Add, run, update manual tests](add-run-update-tests.md)
- [Create a new branch, drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md)
- [Kanban board controls](kanban-board-controls.md)

### REST API resources
To programmatically create work items, see the [REST API, Work Items reference](/rest/api/azure/devops/wit/work%20items/create?view=azure-devops-rest-6.0&preserve-view=true ).





