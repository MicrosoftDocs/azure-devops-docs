---
title: Add task checklists | Team Services  & TFS  
description: Add task checklists to your Kanban board for lightweight tracking of to do lists when working in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)    
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: D4CE68D6-8056-4CB7-ACFA-1FCD05223040  
ms.manager: douge
ms.author: kaelli
ms.date: 02/24/2017
---

#Add task checklists

<b>Team Services | TFS 2017 | TFS 2015.1 </b>

>[!NOTE]  
><b>Feature availability: </b>Task checklists on the Kanban board are supported from Team Services or the web portal for TFS 2015.1 or later version.  

Many teams find Kanban ideal for tracking work as it supports visualizing the flow of work in progress. And, you can quickly add new items and update status.  

With task checklists, you continue to enjoy lightweight tracking, while gaining visibility into which tasks are still to be completed and those that are done. Task checklists provide a quick and easy way to track elements of work which are important to support completing a backlog item. Here we see several tasks for work in progress, both yet to do and those completed.    

![Kanban board with several task checklists defined](_img/kanban-task-checklists.png)


[!INCLUDE [temp](../_shared/image-differences.md)]  


##Add a task or set of tasks 

1. To start adding tasks, open the menu for the work item.  

	![Open the context menu of a backlog item to add a task](_img/kanban-board-add-task-checklist.png)  

	For users of Team Services or TFS 2017 or later versions, you'll see several additional menu options: 

	![Open the context menu of a backlog item to add a task](_img/add-tasks-menu-options-vs-ts.png)

2. If you have a number of tasks to add, simply keep typing your task titles and click Enter. 

	![Work item with several tasks added](_img/kanban-board-task-checklists-added.png)  

3.	If you have details you want to add about a task, open the parent work item and then click the ![links icon](../_img/icons/icon-links-tab-wi.png) links tab. 

	![Open parent work item, Links tab](_img/add-task-checklist-open-task.png)  

4. Double-click the task, or select and press the Enter key, to open it.   

	![Open task work item form from task checklist](_img/kanban-board-open-task-form.png)  

	Tasks that you create from the Kanban board will show up on your sprint task board. Also, tasks that you create from the [sprint backlog](../scrum/sprint-planning.md) or [taskboard](../scrum/task-board.md) will show up within tasks checklists on the Kanban board.  

##Mark a task as done 

When you complete a task, simply click the checkbox to change its status to Done or Closed. 

![Check tasks that are complete](_img/kanban-check-done-tasks.png)  
 
The State of the work item is updated from To Do to Done for Scrum projects, and from Active to Closed for Agile and CMMI projects.  

##Expand or collapse the task checklist  

Upon first opening the Kanban board, you'll see an unexpanded view of checklists.

![Expand task checklist for a work item](_img/kanban-board-first-open-collapsed-checklists.png)

Simply click the task checklist summary to expand a collapsed task checklist. Click the same summary to collapse an expanded checklist. 


##Reorder and reparent tasks or reassign them to a sprint

Tasks that you create from the Kanban board are automatically assigned to the sprint/iteration path of the parent work item under which you define them. 

You can drag a task within a work item to reorder it. Or, you can drag the task to another work item on the Kanban board to reparent it. 


![Drag tasks to reorder them within the list](_img/task-checklist-reorder-tasks.png)  

To reassign a task to a different sprint, you must open the sprint backlog where it's currently defined and then drag it to the new sprint.  


##Related notes
Use your task checklist for lightweight tracking of to-do lists. You can also add tags and show tags and fields on cards to support other tracking needs.   

If you connect to Team Services, you can also:
- [Add, run, update manual tests](add-run-update-tests.md)
- [Create a new branch, drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md)

If you find that you don't use this feature, you can disable it from the [common configurations dialog](../customize/customize-cards.md#annotations). 

If you're new to working with the Kanban board, see [Kanban basics](kanban-basics.md)

### Card controls and keyboard shortcuts

| Control                  | Function                      |
|--------------------------|-------------------------------|
| TAB key | Select the next field or next card |
| Enter key | Open card work item  |
| Shift + F10 | Open card context menu  |
| ARROW + ENTER/SPACE | Select option from the action menu |
| CTRL + drag & drop | Copy selected inline item to another backlog item |  


[!INCLUDE [temp](../_shared/kanban-board-controls.md)]  


###Customize the Kanban board 
To customize or change the layout of the board, see one of these topics. 

* [Add columns](add-columns.md)  
* [WIP limits](wip-limits.md)  
* [Add swimlanes, expedite work](expedite-work.md)   
* [Customize cards](../customize/customize-cards.md)  
* [Split columns](split-columns.md)   
* [Definition of Done](definition-of-done.md)  

[!INCLUDE [temp](../_shared/live-updates.md)]  

###REST API resources
To programmatically create tasks, see the [Work API reference](https://www.visualstudio.com/en-us/integrate/api/wit/batch).
