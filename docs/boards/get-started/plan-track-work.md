---
title: Plan & track work, Agile, Basic, Scrum, or CMMI process
titleSuffix: Azure Boards 
description: Plan and track work in your new team project on Azure Boards using the Agile, Basic, Scrum, or CMMI process
ms.custom: boards-get-started
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 09/21/2020
---


# Plan and track work  

[!INCLUDE [temp](../includes/version-all.md)]

You track your work by creating work items. This article walks you through creating issues and tasks using a Kanban board for the Basic process, or creating user stories and tasks using for the Agile process. 

Choose one of the following four system processes&mdash;**Agile**, **Basic**, **Scrum**, or **Capability Maturity Model Integration (CMMI)**&mdash;for guidance depending on what process was selected for your project. For an overview of each of these processes, see [Choose a process](../work-items/guidance/choose-process.md).

[!INCLUDE [temp](../includes/basic-process-note.md)] 


#### [Agile process](#tab/agile-process) 

The Agile process provides several work item types&mdash;for example, user stories, tasks, bugs, features, and epics among others&mdash;to plan and track work. We recommend you start by adding user stories. If you need to group them into a hierarchy, you can define features. If you want to track additional details of work, you can add tasks to a user story.  

> [!div class="mx-tdCol2BreakAll"]
> |Work item types| Backlog hierarchy |
> |------|---------|
> |![Agile process work item types, conceptual image.](media/about-boards/agile-process-wits.png) | ![Screenshot of Agile process Hierarchical backlog.](media/about-boards/agile-hierarchy.png) |

Within each work item form, you can describe the work to be done, assign work to project contributors, track status, and collaborate with others through the Discussion section. 

Here we show how to add user stories and child tasks from the web portal and add details to those work items . 

#### [Basic process](#tab/basic-process) 

The Basic process provides three work item types&mdash;epics, issues, and tasks&mdash;to plan and track work. We recommend you start by adding issues to track your user stories, bugs, or feature items. If you need to group them into a hierarchy, you can define epics. If you want to track additional details of work, you can add tasks to an issue. 

> [!div class="mx-tdCol2BreakAll"]
> |Work item types| Backlog hierarchy |
> |------|---------|
> |![Basic process work item types, conceptual image.](media/about-boards/basic-process-epics-issues-tasks-2.png) | ![Screenshot of Basic process Hierarchical backlog.](media/about-boards/hierarchy-2.png) |

Within each work item form, you can describe the work to be done, assign work to project contributors, track status, and collaborate with others through the Discussion section. 

Here we show how to add issues and child tasks from the web portal and add details to those work items . 


#### [Scrum process](#tab/scrum-process) 

The Scrum process provides several work item types&mdash;for example, product backlog items, tasks, bugs, features, and epics among others&mdash;to plan and track work. We recommend you start by adding product backlog items. If you need to group them into a hierarchy, you can define features. If you want to track additional details of work, you can add tasks child items to a product backlog item.  

> [!div class="mx-tdCol2BreakAll"]
> |Work item types| Backlog hierarchy |
> |------|---------|
> |![Scrum work item types, conceptual image.](../work-items/guidance/media/ALM_PT_Scrum_WIT_Artifacts.png)  | ![Screenshot of Scrum process product backlog, show parents.](media/about-boards/scrum-hierarchy-simple.png)  |

Within each work item form, you can describe the work to be done, assign work to project contributors, track status, and collaborate with others through the Discussion section. 

Here we show how to add product backlog items and child tasks from the web portal and add details to those work items. 


#### [CMMI process](#tab/cmmi-process) 

The CMMI process provides several work item types&mdash;for example, requirements, tasks, bugs, features, and epics among others&mdash;to plan and track work. We recommend you start by adding requirements. If you need to group them into a hierarchy, you can define features and epics. If you want to track additional details of work, you can add tasks child items to a requirement.  

> [!div class="mx-tdCol2BreakAll"]
> |Work item types| Backlog hierarchy |
> |------|---------|
> |![CMMI work item types, conceptual image.](../work-items/guidance/media/ALM_PT_CMMI_WIT_Artifacts.png) | ![Screenshot of CMMI process Requirements backlog, show parents.](media/about-boards/cmmi-hierarchy-simple.png)  |

Within each work item form, you can describe the work to be done, assign work to project contributors, track status, and collaborate with others through the Discussion section. 

Here we show how to add user stories and child tasks from the web portal and add details to those work items . 


* * * 


## Prerequisites

::: moniker range="azure-devops"

- After you connect to a project, you can add work items. If you don't have a project yet, [create one in Azure DevOps](sign-up-invite-teammates.md). 
- To add work items to a board, and use all other board features, you must be granted **Basic** access and have been added as a member of the Contributors or Project Administrators group. 
- If you have been granted **Stakeholder** access for a private project and have been added as a member of the Contributors or Project Administrators group, you can view boards, open and modify work items, and add child tasks to a checklist. However, you can't reorder or reparent a backlog item using drag-and-drop, nor update a field on a card. 
- If you have been granted **Stakeholder** access for a public project, and have been added as a member of the Contributors or Project Administrators group, you have full access to all Boards features. 

::: moniker-end

::: moniker range="azure-devops-2020"

- After you connect to a project, you can add work items. If you don't have a project yet, [create one in Azure DevOps](sign-up-invite-teammates.md). 
- To add work items to a board, and use all other board features, you must be granted **Basic** access and have been added as a member of the Contributors or Project Administrators group. 
- If you have been granted **Stakeholder** access and have been added as a member of the Contributors or Project Administrators group, you can view boards, open and modify work items, and add child tasks to a checklist. However, you can't reorder or reparent a backlog item using drag-and-drop, nor update a field on a card.


> [!NOTE]   
> The ability for Stakeholders to drag-and-drop cards to different columns requires installation of Azure DevOps Server 2020.1 update. To learn more, see [Azure DevOps Server 2020 Update 1 RC1 Release Notes, Boards](/azure/devops/server/release-notes/azuredevops2020u1#stakeholders-can-move-work-items-across-board-columns).  

::: moniker-end

::: moniker range="< azure-devops-2020"

- After you connect to a project, you can add work items. If you don't have a project yet, [create one in Azure DevOps](sign-up-invite-teammates.md). 
- To add work items to a board, and use all other board features, you must be granted **Basic** access and have been added as a member of the Contributors or Project Administrators group. 
- If you have been granted **Stakeholder** access for a private project and have been added as a member of the Contributors or Project Administrators group, you can view boards, open and modify work items, and add child tasks to a checklist. However, you can't update the status of a backlog item or reorder or reparent a backlog item using drag-and-drop, nor update a field on a card.
- If you have been granted **Stakeholder** access for a public project, and have been added as a member of the Contributors or Project Administrators group, you have full access to all Boards features. 


::: moniker-end

For details, see [Default permissions and access for Azure Boards](permissions-access-boards.md)


::: moniker range="<= tfs-2018"

> [!NOTE]   
> The images shown in this article correspond to the latest version of Azure Boards. While they may differ from those shown in earlier, on-premises versions of Azure DevOps, they are similar in the functions described unless otherwise noted. 

::: moniker-end


<a id="define-new-work">  </a>

## Open the Kanban board 

A Kanban board is provisioned with the addition of each project and each team. You can only create or add Kanban boards to a project by adding another team. To learn more, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

#### [Agile process](#tab/agile-process) 

The User Stories Kanban board is the best tool for quickly adding user stories and child tasks. To open, choose **Boards>Boards**.  

![Screenshot of Open your Kanban board, Agile process.](media/plan-track-work/open-kanban-board-user-stories.png)  

The Features Kanban board is the best tool for quickly adding features and user stories that are children of those features. 
To open the Features board from the Stories board, choose **Features** from the board selector. 

> [!div class="mx-imgBorder"]  
> ![Screenshot to Open the features board, Agile process.](media/plan-track-work/choose-features-board.png)  

#### [Basic process](#tab/basic-process) 

The Issues Kanban board is the best tool for quickly adding issues and child tasks. To open, choose **Boards>Boards**.  
![Screenshot of Open your Kanban board, Basic process.](media/track-issues/open-kanban-board-issues.png)  

The Epics Kanban board is the best tool for quickly adding epics and issues that are children of those epics. 
To open the Epics board from the Issues board, choose **Epics** from the board selector. 

> [!div class="mx-imgBorder"]  
> ![Screenshot to Open the Epics board, Basic process.](media/track-issues/choose-epics-board.png)  

#### [Scrum process](#tab/scrum-process) 

The Backlog items Kanban board is the best tool for quickly adding product backlog items and child tasks. To open, choose **Boards>Boards**.  

![Screenshot of Open your Kanban board, Scrum process.](media/plan-track-work/open-kanban-board-scrum-items.png)  

The Features Kanban board is the best tool for quickly adding features and product backlog items that are children of those features. 
To open the Features board from the Backlog items board, choose **Features** from the board selector. 

> [!div class="mx-imgBorder"]  
> ![Screenshot to Open the Features board, Scrum process.](media/plan-track-work/choose-features-board-scrum.png)  

The default Scrum process configuration doesn't enable the Epic backlog level for a team. To enable it, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).

#### [CMMI process](#tab/cmmi-process) 

The Requirements Kanban board is the best tool for quickly adding requirements and child tasks. To open, choose **Boards>Boards**.  

![Screenshot of Open your Kanban board, CMMI process.](media/plan-track-work/open-kanban-board-cmmi-items.png)  

The Features Kanban board is the best tool for quickly adding features and requirements that are children of those features. 
To open the Features board from the Requirements board, choose **Features** from the board selector. 

> [!div class="mx-imgBorder"]  
> ![Screenshot to Open the Features board, CMMI process.](media/plan-track-work/choose-features-board-requirements.png)  


* * *


## Add work items to your board


#### [Agile process](#tab/agile-process) 


1. From the Stories board, choose **New item** and start adding those stories you want to track. 

	> [!div class="mx-imgBorder"]  
	> ![Add new item, Kanban board, Agile process.](media/plan-track-work/new-user-story-kanban-board.png) 

1. Enter return and the system assigns a work item ID to the user story. 

	> [!div class="mx-imgBorder"]  
	> ![Added item, Agile process.](media/plan-track-work/users-stories-board-added-item.png) 

2. To track the work you want to manage, add as many user stories that you need.  

#### [Basic process](#tab/basic-process) 

1. From the Issues board, choose **New item** and start adding those issues you want to track. 

	> [!div class="mx-imgBorder"]  
	> ![Add new item, Basic process.](media/track-issues/issues-board-new-item.png) 

2. Enter return and the system assigns a work item ID to the issue. 

	> [!div class="mx-imgBorder"]  
	> ![Added item, Basic process.](media/track-issues/issues-board-added-item.png) 

3. To track the work you want to manage, add as many issues that you need.  


#### [Scrum process](#tab/scrum-process) 

1. From the Backlog items board, choose **New item** and start adding those stories you want to track. 

	> [!div class="mx-imgBorder"]  
	> ![Add new item, Scrum process.](media/plan-track-work/new-scrum-item-kanban-board.png) 

1. Enter return and the system assigns a work item ID to the user story. 

	> [!div class="mx-imgBorder"]  
	> ![Added item, Scrum process.](media/plan-track-work/board-added-item-scrum.png) 

2. To track the work you want to manage, add as many backlog items that you need.  


#### [CMMI process](#tab/cmmi-process) 


1. From the Requirements board, choose **New item** and start adding those stories you want to track. 

	> [!div class="mx-imgBorder"]  
	> ![Add new item, CMMI process.](media/plan-track-work/new-user-story-kanban-board-cmmi.png) 

1. Enter return and the system assigns a work item ID to the user story. 

	> [!div class="mx-imgBorder"]  
	> ![Added item, CMMI process.](media/plan-track-work/board-added-item-cmmi.png) 

2. To track the work you want to manage, add as many requirements that you need.  


* * *

## Add details to a board item

Choose the issue or user story title to open it. Change one or more field values, add a description, or make a note in the **Discussion** section. You can also choose the ![attachments icon](../media/icons/icon-attachments-tab-wi.png) **Attachments** tab and drag-and-drop a file to share the file with others.  

::: moniker range="<= tfs-2017"

> [!NOTE]   
> The **Discussion** section is available with TFS 2017.2 and later versions. 

::: moniker-end

#### [Agile process](#tab/agile-process) 

For example, here we assign the story to Raisa Pokrovskaya and we add a discussion note, at-mentioning Raisa. 

> [!div class="mx-imgBorder"]
> ![Screenshot of User Story work item form.](media/plan-track-work/user-story-form-add-details.png)

 Choose **Save & Close** when done. 


#### [Basic process](#tab/basic-process) 

For example, here we assign the issue to Raisa Pokrovskaya and we add a discussion note, at-mentioning Raisa. 

> [!div class="mx-imgBorder"]
> ![Screenshot of Issues work item form, add details. ](media/track-issues/issue-form-add-details.png)

Choose **Save & Close** when done. 


#### [Scrum process](#tab/scrum-process) 

For example, here we assign the product backlog item to Christie Church and set an Effort level of 8. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Product Backlog Item form.](../backlogs/media/create-backlog/pbi-form.png) 

Choose **Save & Close** when done. 


#### [CMMI process](#tab/cmmi-process) 

For example, here we assign the product backlog item to Jamal Hartnett and set Size to 8. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Requirements work item form.](../work-items/guidance/media/cmmi-requirement-form.png) 

Choose **Save & Close** when done.  


#### CMMI-specific field descriptions

[!INCLUDE [temp](../includes/section-cmmi-field-descriptions.md)] 

* * *

### Field descriptions


[!INCLUDE [temp](../includes/section-basic-field-descriptions.md)] 


## Update status

The State field tracks the status of a work item. With the Kanban board, you can quickly update the status of backlog items by dragging and dropping them to a different column. This feature requires that you have Basic access or higher.  

#### [Agile process](#tab/agile-process) 

As work starts, drag the user story card from the **Backlog** column to the **Active** column. Once work is ready for review, move to the **Resolved** column. After it is reviewed and accepted, move to the **Closed** column. 

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board, Agile process.](media/plan-track-work/update-status.png) 

You can add or rename columns as needed, see [Customize your board](customize-boards.md).

#### [Basic process](#tab/basic-process) 

As work starts, drag the issue from the **To Do** column to the **Doing** column. Once completed, move to the **Done** column. 

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board, Basic process.](media/track-issues/update-status.png) 

You can add or rename columns as needed, see [Customize your board](customize-boards.md).

#### [Scrum process](#tab/scrum-process) 

Once a backlog item is approved to start work, drag the backlog item card from the **New** column to the **Approved** column.  When work actually starts, drag the card to the **Committed** column. Once work has completed, move to the **Done** column. 

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board, Scrum process.](media/plan-track-work/update-status-scrum.png) 


#### [CMMI process](#tab/cmmi-process) 


As work starts, drag the requirement card from the **Backlog** column to the **Active** column. Once work is ready for review, move to the **Resolved** column. After it is reviewed and accepted, move to the **Closed** column. 

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board, CMMI process.](media/plan-track-work/update-status-cmmi.png) 


* * *

> [!TIP]  
> You can add or rename columns as needed, see [Customize your board](customize-boards.md). 


## Add tasks 

Task checklists provide a quick and easy way to track elements of work which are important to support completing a backlog item. In addition, you can assign individual tasks to different team members. 

> [!TIP]   
> Tasks that you create from the Kanban board are automatically assigned to the sprint/iteration path of the parent work item under which you define them. 

Tasks that you create from the Kanban board show up on your sprint taskboard. Also, tasks that you create from the [sprint backlog](../sprints/assign-work-sprint.md) or [taskboard](../sprints/task-board.md) show up within tasks checklists on the Kanban board.  


::: moniker range="<= tfs-2015"

> [!NOTE]   
> The Task checklists are available from with TFS 2015.1 and later versions. 

::: moniker-end


#### [Agile process](#tab/agile-process) 

1. To start adding tasks, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::  actions icon for the story and select the  ![plus icon](../../media/icons/green_plus_icon.png) **Add Task** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose Add Task from the User Story card menu, Agile process.](media/plan-track-work/add-child-task.png) 

	Enter a title for the task and type Enter when done.

	> [!div class="mx-imgBorder"]  
	> ![Add first task, Agile process. ](media/plan-track-work/prep-images-task.png) 

1. If you have a number of tasks to add, simply keep typing your task titles and type Enter.   

	> [!div class="mx-imgBorder"]  
	> ![Several tasks added, Agile process.](media/plan-track-work/add-several-tasks.png)  

2. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks. 

	> [!div class="mx-tdCol2BreakAll"]  
	> |Mark a task as done |Reorder and reparent tasks | Expand or collapse the checklist| 
	> |------------------|--------------|--------------|  
	> |To mark a task as complete, check the task checkbox. The task State changes to **Done**.<br/>![Mark task as done](media/plan-track-work/mark-tasks-as-done.png) |To reorder a task, drag it within the checklist. To reparent a the task, drag it to another issue on the board.<br/>![Drag tasks to reorder them within the list](media/plan-track-work/reorder-task.png)  |To expand or collapse a task checklist, simply choose the task annotation.<br/>![Collapse task checklist](media/plan-track-work/collapse-task-list.png) |  


#### [Basic process](#tab/basic-process) 

1. To start adding tasks, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::  actions icon for the issue and select the  ![plus icon](../../media/icons/green_plus_icon.png) **Add Task** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose Add Task from Issues card menu, Basic process.](media/track-issues/add-tasks.png) 

	Enter a title for the task and type Enter when done.

	> [!div class="mx-imgBorder"]  
	> ![Add first task, Basic process.](media/track-issues/enter-first-task.png) 

1. If you have a number of tasks to add, simply keep typing your task titles and type Enter.   

	> [!div class="mx-imgBorder"]  
	> ![Several tasks added, Basic process.](media/track-issues/add-several-tasks.png)  

2. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks. 

	> [!div class="mx-tdCol2BreakAll"]  
	> |Mark a task as done |Reorder and reparent tasks | Expand or collapse the checklist| 
	> |------------------|--------------|--------------|  
	> |To mark a task as complete, check the task checkbox. The task State changes to **Done**.<br/>![Mark task as done, Basic process.](media/track-issues/mark-tasks-as-done.png) |To reorder a task, drag it within the checklist. To reparent a the task, drag it to another issue on the board.<br/>![Drag tasks to reorder them within the list, Basic process.](media/track-issues/reorder-task.png)  |To expand or collapse a task checklist, simply choose the task annotation.<br/>![Collapse task checklist, Basic process.](media/track-issues/collapse-task-list.png) |  

#### [Scrum process](#tab/scrum-process) 

1. To start adding tasks, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::  actions icon for the story and select the  ![plus icon](../../media/icons/green_plus_icon.png) **Add Task** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose Add Task from Product backlog item card menu, Scrum process.](media/plan-track-work/add-child-task.png) 

	Enter a title for the task and type Enter when done.

	> [!div class="mx-imgBorder"]  
	> ![Add first task, Scrum process.](media/plan-track-work/prep-images-task.png) 

1. If you have a number of tasks to add, simply keep typing your task titles and type Enter.   

	> [!div class="mx-imgBorder"]  
	> ![Several tasks added, Scrum process.](media/plan-track-work/add-several-tasks.png)  

2. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks. 

	> [!div class="mx-tdCol2BreakAll"]  
	> |Mark a task as done |Reorder and reparent tasks | Expand or collapse the checklist| 
	> |------------------|--------------|--------------|  
	> |To mark a task as complete, check the task checkbox. The task State changes to **Done**.<br/>![Mark task as done, Scrum process.](media/plan-track-work/mark-tasks-as-done.png) |To reorder a task, drag it within the checklist. To reparent a the task, drag it to another issue on the board.<br/>![Drag tasks to reorder them within the list, Scrum process.](media/plan-track-work/reorder-task.png)  |To expand or collapse a task checklist, simply choose the task annotation.<br/>![Collapse task checklist, Scrum process.](media/plan-track-work/collapse-task-list.png) |  


#### [CMMI process](#tab/cmmi-process) 

1. To start adding tasks, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::  actions icon for the story and select the  ![plus icon](../../media/icons/green_plus_icon.png) **Add Task** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose Add Task from Requirements card menu, CMMI process.](media/plan-track-work/add-child-task.png) 

	Enter a title for the task and type Enter when done.

	> [!div class="mx-imgBorder"]  
	> ![Add first task, CMMI process.](media/plan-track-work/prep-images-task.png) 

1. If you have a number of tasks to add, simply keep typing your task titles and type Enter.   

	> [!div class="mx-imgBorder"]  
	> ![Several tasks added, CMMI process.](media/plan-track-work/add-several-tasks.png)  

2. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks. 

	> [!div class="mx-tdCol2BreakAll"]  
	> |Mark a task as done |Reorder and reparent tasks | Expand or collapse the checklist| 
	> |------------------|--------------|--------------|  
	> |To mark a task as complete, check the task checkbox. The task State changes to **Done**.<br/>![Mark task as done, CMMI process.](media/plan-track-work/mark-tasks-as-done.png) |To reorder a task, drag it within the checklist. To reparent a the task, drag it to another issue on the board.<br/>![Drag tasks to reorder them within the list, CMMI process.](media/plan-track-work/reorder-task.png)  |To expand or collapse a task checklist, simply choose the task annotation.<br/>![Collapse task checklist, CMMI process.](media/plan-track-work/collapse-task-list.png) |  


* * *

## Add details to a task

If you have details you want to add about a task, choose the title, to open it. Change one or more field values, add a description, or make a note in the **Discussion** section. Choose **Save & Close** when done. 

#### [Agile process](#tab/agile-process) 

Here we assign the task to Christie Church.   

> [!div class="mx-imgBorder"]  
> ![Screenshot of Task work item form, Agile process.](media/plan-track-work/task-form.png)  

#### [Basic process](#tab/basic-process) 

Here we assign the task to Jamal.   

> [!div class="mx-imgBorder"]  
> ![Screenshot of Task work item form, Basic process.](media/track-issues/basic-process-task-form.png)  

#### [Scrum process](#tab/scrum-process) 

Here we assign the task to Jamal.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Task work item form, Scrum process.](../work-items/guidance/media/scrum-task-form.png)  


#### [CMMI process](#tab/cmmi-process) 

Here we assign the task to Jamal.   

> [!div class="mx-imgBorder"]  
> ![Screenshot of Task work item form, CMMI process.](../work-items/guidance/media/cmmi-task-form.png)  

* * *


### Field descriptions

In addition to the fields you can define for a backlog item&mdash;user story, issue, product backlog item, or requirement&mdash;you can specify the following fields for a task to support capacity and time tracking. 

> [!NOTE]   
> There are no inherent time units associated with this field even though the taskboard always shows "h" for hours in relationship to Remaining Work. You can specify work in any unit of measurement your team chooses. 

:::row:::
   :::column span="":::
      **Field**
   :::column-end:::
   :::column span="3":::
      **Usage**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Activity](../queries/query-numeric.md) 
   :::column-end:::
   :::column span="3":::
      The type of activity that is required to perform a task.To learn more about how this field is used, see [Capacity planning](../sprints/set-capacity.md). Allowed values are:  
      - **Deployment**
      - **Design**
      - **Development**
      - **Documentation**
      - **Requirements**
      - **Testing**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Discipline](../queries/query-numeric.md) (CMMI process)
   :::column-end:::
   :::column span="3":::
      The type of activity that is required to perform a task.To learn more about how this field is used, see [Capacity planning](../sprints/set-capacity.md). Allowed values are:  
      - **Analysis**
      - **Development**
      - **Test**
      - **User Education**
      - **User Experience**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Original Estimate](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The amount of estimated work required to complete a task. Typically, this field doesn't change after it is assigned. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Remaining Work](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The amount of work that remains to finish a task. You can specify work in hours or in days. As work progresses, update this field. It's used to calculate [capacity charts](../sprints/set-capacity.md) and the [sprint burndown chart](../../report/dashboards/configure-sprint-burndown.md).   
      If you divide a task into subtasks, specify Remaining Work for the subtasks only. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Completed Work](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The amount of work spent implementing a task. Enter a value for this field when you complete the task.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Task Type](../work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi.md) (CMMI only)
   :::column-end:::
   :::column span="3":::
      Select the kind of task to implement from the allowed values:</p>
      - **Corrective Action**
      - **Mitigation Action**
      - **Planned**
   :::column-end:::
:::row-end:::


[!INCLUDE [temp](../includes/discussion-tip.md)]



## Try this next  
 
> [!div class="nextstepaction"]
> [Customize your board](customize-boards.md)


## Related articles

- [Azure Boards FAQs](../faqs.yml) 
- [Index to field descriptions](../work-items/guidance/basic-field-reference.md?toc=/azure/devops/boards/get-started/toc.json&bc=/azure/devops/boards/get-started/breadcrumb/toc.json)  
- [Add tags to issues or tasks](../queries/add-tags-to-work-items.md)   

