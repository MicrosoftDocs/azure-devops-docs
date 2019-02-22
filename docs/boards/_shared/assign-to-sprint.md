---
ms.topic: include
---
<a id="assign-to-sprint"></a>

## Move work items to a sprint  

::: moniker range=">= azure-devops-2019"
From any product, sprint, or portfolio backlog, you can drag a multi-selected list of work items and drop it onto a sprint in the **Planning** pane to change it's iteration path. (Not supported for users with **Stakeholder** access.)

0. To open the **Planning** pane, choose the ![ ](/azure/devops/_img/icons/view-options-icon.png) view options icon and select **Planning**. You can choose to set **In Progress items** to On or Off. 

	> [!div class="mx-imgBorder"]
	> ![Boards>Backlogs>Open view options and choose Planning](/azure/devops/boards/sprints/_img/define-sprints/view-options-planning-menu.png)

	The set of sprints selected for your team appears. If you don't see any sprints listed, you can add sprints or select existing sprints for your team's use. To learn how, see [Define sprints](/azure/devops/boards/sprints/define-sprints).  

0. You can drag and drop items from the **Backlog** onto a sprint. 
	> [!div class="mx-imgBorder"]
	> ![Boards>Backlogs>Drag-drop items onto sprint](/azure/devops/boards/sprints/_img/define-sprints/drag-drop-backlog-items-to-sprint.png)

	This action will update the Iteration Path of the backlog items and any of its child tasks to the sprint you selected. 

::: moniker-end


::: moniker range=">= tfs-2015 <= tfs-2018"
From any backlog or board, you can drag a multi-selected list of work items and drop it onto a sprint to change it's iteration path. From a Kanban or taskboard, you can drag a single work item onto a sprint. (Not supported for users with **Stakeholder** access.)

> [!div class="mx-imgBorder"]  
> ![Drop work items onto a sprint](/azure/devops/boards/sprints/_img/sp-assign-to-sprints.png)  

Child items of the work items whose iteration path you change are also updated with the new iteration path. 
::: moniker-end

::: moniker range=" tfs-2015" 
This feature requires TFS 2015.1 or later version.    
::: moniker-end
