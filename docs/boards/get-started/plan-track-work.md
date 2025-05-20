---
title: Plan and track work in Azure Boards
titleSuffix: Azure Boards 
description: Learn how to plan and track work by using Azure Boards using the Agile, Basic, Scrum, or Capability Maturity Model Integration (CMMI) processes.
ms.custom: boards-get-started
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/08/2024
#customer intent: As a team member, I want to understand how to use the different processes to manage our team projects.
---

# Plan and track work in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn how to use Azure Boards to plan and track your work using an *Agile*, *Basic*, *Scrum*, or *Capability Maturity Model Integration (CMMI)* process. For more information, see [About processes and process templates](../work-items/guidance/choose-process.md).

[!INCLUDE [basic process](../includes/basic-process-note.md)]

#### [Agile process](#tab/agile-process)

The Agile process uses various work item types such as user stories, tasks, bugs, features, and epics to plan and track work. Begin by adding user stories and grouping them into features if needed. You can add tasks to a user story to track more details.

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="media/about-boards/agile-process-wits.png" alt-text="Diagram shows Agile process work item types in a hierarchy."::: | :::image type="content" source="media/about-boards/agile-hierarchy.png" alt-text="Screenshot of Agile process Hierarchical backlog."::: |

In each work item form, you can describe the work to be done, assign work to project contributors, track status, and collaborate with others through the **Discussion** section. This article describes how to add user stories and child tasks from the web portal and add details to those work items.

#### [Basic process](#tab/basic-process)

The Basic process offers three work item types for planning and tracking work: epics, issues, and tasks. To begin, add issues to track user stories, bugs, or feature items. For grouping, define epics. To track more details, add tasks to an issue.

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="media/about-boards/basic-process-epics-issues-tasks-2.png" alt-text="Diagram shows Basic process work item types."::: | :::image type="content" source="media/about-boards/hierarchy-2.png" alt-text="Screenshot of Basic process Hierarchical backlog."::: |

In each work item form, describe work, assign contributors, track status, and collaborate in the **Discussion** section. This article describes how to add issues, child tasks, and work item details on the web portal.

#### [Scrum process](#tab/scrum-process) 

The Scrum process uses various work item types to plan and track work. Item types include product backlog items, tasks, bugs, features, and epics. Add product backlog items and group them into features if needed. Add child tasks to track more work details.  

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="../work-items/guidance/media/ALM_PT_Scrum_WIT_Artifacts.png" alt-text="Diagram shows Scrum process work item types in a hierarchy.":::  | :::image type="content" source="media/about-boards/scrum-hierarchy-simple.png" alt-text="Screenshot of Scrum process product backlog, show parents.":::  |

In each work item form, describe work, assign contributors, track status, and collaborate in the **Discussion** section. This article describes how to add product backlog items, child tasks, and work item details on the web portal.

#### [CMMI process](#tab/cmmi-process)

The CMMI process uses work item types such as requirements, tasks, bugs, features, and epics to plan and track work. Start by adding requirements and group them into features or epics if needed. Add child tasks to track more work details.

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="../work-items/guidance/media/ALM_PT_CMMI_WIT_Artifacts.png" alt-text="Diagram shows CMMI process work item types in a hierarchy."::: | :::image type="content" source="media/about-boards/cmmi-hierarchy-simple.png" alt-text="Screenshot of CMMI process Requirements backlog, show parents.":::  |

In each work item form, describe work, assign contributors, track status, and collaborate in the **Discussion** section. This article describes how to add user stories, child tasks, and work item details on the web portal.

* * *

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - To add work items to a board and use all other board features: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - Private project: To view boards, open and modify work items, and add child tasks to a checklist: At least **Stakeholder** access. You can't reorder or reparent a backlog item using drag-and-drop. You can't update a field on a card. <br> - Public project: For full access to all Boards features: At least **Stakeholder** access. |
| **Permissions** | Member of the **Contributors** or **Project Administrators** group. |

::: moniker-end

::: moniker range="azure-devops-2020"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - To add work items to a board and use all other board features: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - To view boards, open and modify work items, and add child tasks to a checklist: At least **Stakeholder** access. You can't reorder or reparent a backlog item using drag-and-drop. You can't update a field on a card. |
| **Permissions** | Member of the **Contributors** or **Project Administrators** group. |

> [!NOTE]
> To drag-and-drop cards to different columns, have [Azure DevOps Server 2020 Update 1](/azure/devops/server/release-notes/azuredevops2020u1#stakeholders-can-move-work-items-across-board-columns).  

::: moniker-end

For more information, see [Default permissions and access for Azure Boards](permissions-access-boards.md).

<a id="define-new-work">  </a>

## Open your board

A board is provisioned with the addition of each project and each team. You can only create or add boards to a project by adding another team. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

1. Sign in to your organization (`https://dev.azure.com/{Your_Organization}`) and go to your project.
1. Select **Boards** > **Boards**.  

   :::image type="content" source="media/plan-track-work/open-boards.png" alt-text="Screenshot showing two selections highlighted with red boxes, to open boards.":::

1. Select a board from the **All Team Boards** dropdown menu.

   :::image type="content" source="media/plan-track-work/select-from-all-team-boards-dropdown-menu.png" alt-text="Screenshot showing All Team Boards to choose from, listed in the dropdown menu.":::

## Add work items to your board

Work items on your board are automatically assigned the default **Area Path** and **Iteration Path** assigned to the team. For more information, see [Manage and configure team tools](../../organizations/settings/manage-teams.md).

#### [Agile process](#tab/agile-process) 

1. From the Stories board, choose **New item** and the stories you want to track.

   :::image type="content" source="media/plan-track-work/new-user-story-kanban-board.png" alt-text="Screenshot shows the option to add a New item option for the Agile process.":::

1. Select **Enter**. The system assigns a work item ID to the user story.

   :::image type="content" source="media/plan-track-work/users-stories-board-added-item.png" alt-text="Screenshot shows the added item in the Agile process.":::

1. Add as many user stories as you need.  

> [!TIP]
> To quickly add features and child user stories, choose **Features** from the board selector.
>
> :::image type="content" source="media/plan-track-work/choose-features-board.png" alt-text="Screenshot to Open the features board in the Agile process.":::

#### [Basic process](#tab/basic-process)

1. From the Issues board, choose **New item** and add the issues you want to track.

   :::image type="content" source="media/track-issues/issues-board-new-item.png" alt-text="Screenshot shows the option to add a New item for the Basic process.":::

1. Enter return and the system assigns a work item ID to the issue.

   :::image type="content" source="media/track-issues/issues-board-added-item.png" alt-text="Screenshot shows the added item in the Basic process.":::

1. Add as many issues as you need.  

> [!TIP]
> The Epics board is the best tool for quickly adding epics and issues that are children of those epics. To open the Epics board from the Issues board, choose **Epics** from the board selector.
>
> :::image type="content" source="media/track-issues/choose-epics-board.png" alt-text="Screenshot to Open the Epics board, Basic process.":::

#### [Scrum process](#tab/scrum-process) 

1. From the Backlog items board, choose **New item** and add the stories you want to track.

   :::image type="content" source="media/plan-track-work/new-scrum-item-kanban-board.png" alt-text="Screenshot shows  the option to add a New item for the Scrum process.":::

1. Enter return and the system assigns a work item ID to the user story.

   :::image type="content" source="media/plan-track-work/board-added-item-scrum.png" alt-text="Screenshot shows the added item in the Scrum process.":::

1. Add as many backlog items as you need.  

> [!TIP]
> The Features board is the best tool for quickly adding features and product backlog items that are children of those features. To open the Features board from the Backlog items board, choose **Features** from the board selector.
>
>:::image type="content" source="media/plan-track-work/choose-features-board-scrum.png" alt-text="Screenshot to Open the Features board, Scrum process.":::

The default Scrum process configuration doesn't enable the Epic backlog level for a team. To enable it, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).

#### [CMMI process](#tab/cmmi-process) 

1. From the Requirements board, choose **New item** and add the stories you want to track.

   :::image type="content" source="media/plan-track-work/new-user-story-kanban-board-cmmi.png" alt-text="Screenshot shows the option to add a New item for the CMMI process.":::

1. Enter return and the system assigns a work item ID to the user story.

   :::image type="content" source="media/plan-track-work/board-added-item-cmmi.png" alt-text="Screenshot shows the added item in the CMMI process.":::

1. Add as many requirements as you need.  

> [!TIP]
> The Features board is the best tool for quickly adding features and requirements that are children of those features. To open the Features board from the Requirements board, choose **Features** from the board selector.
>
>:::image type="content" source="media/plan-track-work/choose-features-board-requirements.png" alt-text="Screenshot to Open the Features board, CMMI process.":::

* * *

## Add details to a board item

To open an issue or user story, select its title. Change one or more field values, add a description, or make a note in the **Discussion** section. You can also choose the :::image type="icon" source="../media/icons/icon-attachments-tab-wi.png"::: **Attachments** tab and drag-and-drop a file to share the file with others.  

#### [Agile process](#tab/agile-process)

For example, assign the story to Raisa Pokrovskaya and add a discussion note, at-mentioning Raisa.

:::image type="content" source="media/plan-track-work/user-story-form-add-details.png" alt-text="Screenshot of User Story work item form.":::

When you're done, select **Save & Close**.

#### [Basic process](#tab/basic-process) 

For example, assign the issue to Raisa Pokrovskaya and add a discussion note, at-mentioning Raisa.

:::image type="content" source="media/track-issues/issue-form-add-details.png" alt-text="Screenshot of Issues work item form, add details.":::

When you're done, select **Save & Close**.

#### [Scrum process](#tab/scrum-process)

For example, assign the product backlog item to Christie Church and set an Effort level of 8.

:::image type="content" source="../backlogs/media/create-backlog/pbi-form.png" alt-text="Screenshot of Product Backlog Item form.":::

When you're done, select **Save & Close**.

#### [CMMI process](#tab/cmmi-process)

For example, assign the requirement to Jamal Hartnett and set Size to 8.

:::image type="content" source="../work-items/guidance/media/cmmi-requirement-form.png" alt-text="Screenshot of Requirements work item form.":::

When you're done, select **Save & Close**.  

#### CMMI-specific field descriptions

[!INCLUDE [cmmi field descriptions](../includes/section-cmmi-field-descriptions.md)]

* * *

### Field descriptions

[!INCLUDE [basic field descriptions](../includes/section-basic-field-descriptions.md)]

## Update work status

The State field tracks the status of a work item. With the board, you can quickly update the status of backlog items by dragging and dropping them to a different column.

#### [Agile process](#tab/agile-process)

As work begins, drag the user story card from the **Backlog** column to the **Active** column. When work is ready for review, move it to the **Resolved** column. After a team member reviews and accepts it, move it to the **Closed** column.

:::image type="content" source="media/plan-track-work/update-status.png" alt-text="Screenshot showing updating status on board, Agile process.":::

#### [Basic process](#tab/basic-process)

As work begins, drag the issue from the **To Do** column to the **Doing** column. When a team member completes it, move it to the **Done** column.

:::image type="content" source="media/track-issues/update-status.png" alt-text="Screenshot showing updating status on board, Basic process.":::

#### [Scrum process](#tab/scrum-process) 

After a backlog item is approved to start work, drag the backlog item card from the **New** column to the **Approved** column. When work begins, drag the card to the **Committed** column. After work completes, move it to the **Done** column.

:::image type="content" source="media/plan-track-work/update-status-scrum.png" alt-text="Screenshot showing updating status on board, Scrum process.":::

#### [CMMI process](#tab/cmmi-process) 

As work begins, drag the requirement card from the **Backlog** column to the **Active** column. When work is ready for review, move it to the **Resolved** column. After a team member reviews and accepts it, move it to the **Closed** column.

:::image type="content" source="media/plan-track-work/update-status-cmmi.png" alt-text="Screenshot showing updating status on board, CMMI process.":::

* * *

> [!TIP]  
> To add or rename columns as needed, see [About configuring and customizing Azure Boards](../configure-customize.md).

## Add tasks

Task checklists provide a quick and easy way to track elements of work that are important to complete a backlog item. Also, you can assign individual tasks to different team members.

> [!TIP]
> Tasks that you create from the board are automatically assigned the **Area Path** and **Iteration Path** of their parent work item and show up on your sprint taskboard.

Tasks that you create from the [sprint backlog](../sprints/assign-work-sprint.md) or [taskboard](../sprints/task-board.md) show up in tasks checklists on the board.  

#### [Agile process](#tab/agile-process)

1. Select the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::  actions icon for the story and select :::image type="icon" source="../../media/icons/green_plus_icon.png"::: **Add Task**.  

   :::image type="content" source="media/plan-track-work/add-child-task.png" alt-text="Screenshot shows choosing Add Task from the User Story card menu in the Agile process.":::

1. Enter a title for the task and select **Enter**.

   :::image type="content" source="media/plan-track-work/prep-images-task.png" alt-text="Screenshot shows adding a task in the Agile process.":::

1. If you have many tasks to add, keep entering your task titles and select **Enter**.

   :::image type="content" source="media/plan-track-work/add-several-tasks.png" alt-text="Screenshot shows a user story with several tasks added in the Agile process.":::  

1. You can mark a task as done, expand or collapse the task checklist, reorder, and reparent tasks.

   | Mark a task as done | Reorder and reparent tasks | Expand or collapse the checklist |
   |:------------------|:--------------|:--------------|
   | To mark a task as complete, select the task checkbox. The task State changes to **Done**.<br/>:::image type="content" source="media/plan-track-work/mark-tasks-as-done.png" alt-text="Screenshot shows tasks marked as done under a user story in the Agile process."::: | To reorder a task, drag it in the checklist. To reparent a the task, drag it to another issue on the board.<br/>:::image type="content" source="media/plan-track-work/reorder-task.png" alt-text="Screenshot shows how to drag a task to a new location in the Agile process.":::  | To expand or collapse a task checklist, choose the task annotation.<br/>:::image type="content" source="media/plan-track-work/collapse-task-list.png" alt-text="Screenshot shows a collapsed task list in the Agile process which you can select to expand the list."::: |  

#### [Basic process](#tab/basic-process)

1. Select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the issue and select :::image type="icon" source="../../media/icons/green_plus_icon.png"::: **Add Task**.  

   :::image type="content" source="media/track-issues/add-tasks.png" alt-text="Screenshot shows choosing Add Task from the User Story card menu in the Basic process.":::

1. Enter a title for the task and select **Enter**.

   :::image type="content" source="media/track-issues/enter-first-task.png" alt-text="Screenshot shows adding a task in the Basic process.":::

1. If you have various tasks to add, keep entering your task titles and type Enter.

   :::image type="content" source="media/track-issues/add-several-tasks.png" alt-text="Screenshot shows a user story with several tasks added in the Basic process.":::  

1. You can mark a task as done, expand or collapse the task checklist, reorder, and reparent tasks.

   | Mark a task as done | Reorder and reparent tasks | Expand or collapse the checklist |
   |:------------------|:--------------|:--------------|
   | To mark a task as complete, select the task checkbox. The task State changes to **Done**.<br/>:::image type="content" source="media/track-issues/mark-tasks-as-done.png" alt-text="Screenshot shows tasks marked as done under a user story in the Basic process."::: | To reorder a task, drag it in the checklist. To reparent a the task, drag it to another issue on the board.<br/>:::image type="content" source="media/track-issues/reorder-task.png" alt-text="Screenshot shows how to drag a task to a new location in the Basic process.":::  | To expand or collapse a task checklist, choose the task annotation.<br/>:::image type="content" source="media/track-issues/collapse-task-list.png" alt-text="Screenshot shows a collapsed task list in the Basic process which you can select to expand the list."::: |  

#### [Scrum process](#tab/scrum-process)

1. To start adding tasks, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the story and select the :::image type="icon" source="../../media/icons/green_plus_icon.png"::: **Add Task** option.  

   :::image type="content" source="media/plan-track-work/add-child-task.png" alt-text="Screenshot shows choosing Add Task from the User Story card menu in the Scrum process.":::

1. Enter a title for the task and type Enter when you're done.

   :::image type="content" source="media/plan-track-work/prep-images-task.png" alt-text="Screenshot shows adding a task in the Scrum process.":::

1. If you have many tasks to add, just keep entering your task titles and type Enter.

   :::image type="content" source="media/plan-track-work/add-several-tasks.png" alt-text="Screenshot shows a user story with several tasks added in the Scrum process.":::  

1. You can mark a task as done, expand or collapse the task checklist, or reorder and reparent tasks.

   | Mark a task as done | Reorder and reparent tasks | Expand or collapse the checklist |
   |:------------------|:--------------|:--------------|
   | To mark a task as complete, select the task checkbox. The task State changes to **Done**.<br/>:::image type="content" source="media/plan-track-work/mark-tasks-as-done.png" alt-text="Screenshot shows tasks marked as done under a user story in the Scrum process."::: | To reorder a task, drag it in the checklist. To reparent a the task, drag it to another issue on the board.<br/>:::image type="content" source="media/plan-track-work/reorder-task.png" alt-text="Screenshot shows how to drag a task to a new location in the Scrum process."::: | To expand or collapse a task checklist, choose the task annotation.<br/>:::image type="content" source="media/plan-track-work/collapse-task-list.png" alt-text="Screenshot shows a collapsed task list in the Scrum process which you can select to expand the list."::: |  

#### [CMMI process](#tab/cmmi-process)

1. To start adding tasks, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the story and select the :::image type="icon" source="../../media/icons/green_plus_icon.png"::: **Add Task** option.  

   :::image type="content" source="media/plan-track-work/add-child-task.png" alt-text="Screenshot shows choosing Add Task from the User Story card menu in the CMMI process.":::

1. Enter a title for the task and type Enter when you're done.

   :::image type="content" source="media/plan-track-work/prep-images-task.png" alt-text="Screenshot shows adding a task in the CMMI process.":::

1. If you have various tasks to add, just keep entering your task titles and type Enter.

   :::image type="content" source="media/plan-track-work/add-several-tasks.png" alt-text="Screenshot shows a user story with several tasks added in the CMMI process.":::  

1. You can mark a task as done, expand or collapse the task checklist, reorder, and reparent tasks.

   | Mark a task as done | Reorder and reparent tasks | Expand or collapse the checklist |
   |:------------------|:--------------|:--------------|  
   |To mark a task as complete, select the task checkbox. The task State changes to **Done**.<br/>:::image type="content" source="media/plan-track-work/mark-tasks-as-done.png" alt-text="Screenshot shows tasks marked as done under a user story in the CMMI process."::: | To reorder a task, drag it in the checklist. To reparent a the task, drag it to another issue on the board.<br/>:::image type="content" source="media/plan-track-work/reorder-task.png" alt-text="Screenshot shows how to drag a task to a new location in the CMMI process."::: | To expand or collapse a task checklist, choose the task annotation.<br/>:::image type="content" source="media/plan-track-work/collapse-task-list.png" alt-text="Screenshot shows a collapsed task list in the CMMI process which you can select to expand the list."::: |  

* * *

## Add details to a task

If you have details you want to add about a task, select the title to open it. Change one or more field values, add a description, or make a note in the **Discussion** section. Choose **Save & Close**.

#### [Agile process](#tab/agile-process)

This example assigns the task to Christie Church.

:::image type="content" source="media/plan-track-work/task-form.png" alt-text="Screenshot of Task work item form, Agile process.":::  

#### [Basic process](#tab/basic-process)

This example assigns the task to Jamal.

:::image type="content" source="media/track-issues/basic-process-task-form.png" alt-text="Screenshot of Task work item form, Basic process.":::

#### [Scrum process](#tab/scrum-process)

This example assigns the task to Jamal.  

:::image type="content" source="../work-items/guidance/media/scrum-task-form.png" alt-text="Screenshot of Task work item form, Scrum process.":::  

#### [CMMI process](#tab/cmmi-process)

This example assigns the task to Jamal.

:::image type="content" source="../work-items/guidance/media/cmmi-task-form.png" alt-text="Screenshot of Task work item form, CMMI process.":::  

* * *

### Field descriptions

You can assign these fields for a backlog item: user story, issue, product backlog item, and requirement. You can specify the following fields for a task to support capacity and time tracking.

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
---
:::row:::
   :::column span="":::
      [Activity](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The type of activity that's required to do a task. For more information, see [Determine and set sprint capacity](../sprints/set-capacity.md). Allowed values are:  
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
      The type of activity that's required to do a task. For more information, see [Determine and set sprint capacity](../sprints/set-capacity.md). Allowed values are:  
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
      The amount of estimated work required to complete a task. Typically, this field doesn't change after you assign the task.
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
      [Task Type](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi) (CMMI only)
   :::column-end:::
   :::column span="3":::
      Select the kind of task to implement from the allowed values:</p>
      - **Corrective Action**
      - **Mitigation Action**
      - **Planned**
   :::column-end:::
:::row-end:::

[!INCLUDE [discussion comments](../includes/discussion-tip-azure-devops.md)]

## Related articles

> [!div class="nextstepaction"]
> [Customize your board](../configure-customize.md)

- [Review Azure Boards FAQs](../faqs.yml) 
- [Add tags to issues or tasks](../queries/add-tags-to-work-items.md)
