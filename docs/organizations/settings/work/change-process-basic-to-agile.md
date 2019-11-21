---
title: Change process from Basic to Agile
titleSuffix: Azure Boards
ms.custom: seodec18
description: Change the process for your project from Basic to Agile
ms.technology: devops-agile
ms.prod: devops
ms.topic: conceptual
ms.assetid:
ms.manager: mijacobs
ms.author: kaelli
author: kaelli
ms.reviewer: kaelli
monikerRange: "azure-devops"
ms.date: 06/28/2019
---

# Change a project process from Basic to Agile

[!INCLUDE [temp](../../../_shared/version-vsts-only.md)]

You can change a project based on the Basic process to use to use an inherited Agile process.  This article provides the steps needed to make this change. 

[!INCLUDE [temp](../_shared/cloud-only-feature.md)]

Prior to making this change, we recommend you familiarize yourself with the process you are changing to. The Task and Epic work item types are the same for both Basic and Agile processes. Most State and Reason field values, however, are different.

|  Process | Work item types | Workflow |
|------|---------|---------|
|**Basic** | ![Basic work item types](../../../boards/get-started/_img/about-boards/basic-process-epics-issues-tasks-2.png)|![basic workflow](../../../boards/get-started/_img/track-issues/basic-process-workflow.png)|
|**Agile** | ![Agile work item types](_img/scrum-to-agile/agile-process-plan-wits.png)|![Agile workflow](../../../boards/get-started/_img/about-boards/agile-process-workflow.png)|

For an overview of all processes, see [Choose a process](../../../boards/work-items/guidance/choose-process.md).

Reasons you might want to change your process from Basic to Agile:

- You want to track code defects using bugs separate from issues and user stories
- You want to use the Agile workflow states in place of those defined for the Basic process
- You want access to both Feature and Epic portfolio backlogs to organize your work items
- Your organization is requiring everyone to standardize their tracking with a customized inherited process based on the Agile process.

[!INCLUDE [temp](../_shared/change-process-manual-steps.md)]

<!--- QUESTION: What happens to Analytics data when you do this change?  -->

[!INCLUDE [temp](../_shared/prerequisites-change-process.md)]

[!INCLUDE [temp](../_shared/open-process-admin-context-ts-only.md)]

## Change the process

1. Choose the process that contains the project you want to change. To change from Basic to Agile, choose **Basic**.

> [!div class="mx-imgBorder"]  
> ![Choose the Basic process](_img/change-process/choose-basic-process.png)

1. Choose **Projects**.

> [!div class="mx-imgBorder"]  
> ![Choose Projects tab](_img/change-process/choose-basic-process-projects.png)

1. For the project you want to change, choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and select **Change process** and follow the steps in the wizard.

> [!div class="mx-imgBorder"]  
> ![Choose Change process](_img/change-process/change-process-basic-to-agile.png)

1. Choose the Agile process that you want to change to and then choose **Save**. You can select the system Agile process or an inherited Agile process.

> [!div class="mx-imgBorder"]  
> ![Step 1 of 3 of change process dialog, Choose the process](_img/change-process/change-process-basic-to-agile-wizard-choose-agile.png)

1. Upon completion, the wizard displays the following information. Make a note of the steps to follow and then choose **Close**.

    > [!div class="mx-imgBorder"]  
    > ![Step 3 of 3 of change process dialog](_img/change-process/change-process-basic-to-agile-wizard-choose-agile-complete.png)

    Steps to manually update your work items and board settings:
    - Update the column to state mapping for each team Kanban board.
    - Update existing work items using the work item types set by the target process.
    - Update existing work items using the correct state model of the target process.

## Update Kanban board column-to-state settings

You can customize Kanban boards to display intermediate columns. For each column added, you must choose a valid workflow state for the work item types displayed on the board. To learn more, see [Workflow states & state categories](../../../boards/work-items/workflow-and-state-categories.md).

1. For each team, [open your Kanban board](../../../boards/get-started/plan-track-work.md).

   > [!div class="mx-imgBorder"]  
   > ![Open team Kanban board](_img/change-process/open-kanban-board.png)

1. Choose the **Correct this now** link or the ![ ](../../../_img/icons/blue-gear.png) gear icon to configure the board settings.

   The Settings dialog opens. Those tabs that display a ![ ](../../../_img/icons/required-icon.png) required icon need correction.

   > [!div class="mx-imgBorder"]  
   > ![Columns dialog](_img/change-process/kanban-stories-column-settings-to-correct.png)

   Rename each column and choose the correct state for each column so that the column-to-state mapping is correct. As needed, add one or more columns. When done, choose **Save and close**.

   > [!div class="mx-imgBorder"]  
   > ![Columns dialog, corrected](_img/change-process/kanban-stories-column-settings-corrected.png)

<!---
  > [!div class="mx-imgBorder"]
  > ![Wizard](_img/change-process/change-process-basic-to-agile-wizard.gif)

5. Update the [board settings](../../../boards/get-started/customize-boards.md) for each board so that the column to state mapping is correct.

  > [!div class="mx-imgBorder"]
  > ![Scrum Inherited WITs](_img/change-process/change-process-basic-to-agile-board-config.gif)

-->

## Update work items

Your next step is to bulk update work items. The recommended sequence is:

- Create a work item query that displays all work items
- Perform a bulk update to change the work item type of Issue work items to User Story
- Perform a bulk update on all States to change from Basic states&mdash;To Do, Doing, and Done&mdash;to Agile process states&mdash;New, Active, and Closed.

1. [Create a query](../../../boards/queries/using-queries.md) to get a list of all Issues, Tasks, and Epics.

   > [!div class="mx-imgBorder"]  
   > ![Query all items](_img/change-process/query-basic-items.png)

1. Choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and then select **Column options**. Choose to show the State and Reason fields. Choose the **Sort** tab, and set it to sort the list by work item type and state value.

   > [!div class="mx-imgBorder"]  
   > ![Column options dialog, sort tab](_img/change-process/query-column-sort.png)

1. Choose **Results** to just show the list of work items.

1. Highlight all Issues, choose the ![ ](../../../_img/icons/actions-icon.png) actions icon, select **Change type**, and change the type to User Story.

   > [!div class="mx-imgBorder"]  
   > ![Change type dialog](_img/change-process/change-type-to-user-story.png)

   For more details, see [Move, change, or delete work items, Change the work item type](../../../boards/backlogs/remove-delete-work-items.md#change-the-work-item-type).

   Choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and select **Save items**.

   It's possible that you will receive errors where the work item type and the state are mismatched. In that case, you can't save your changes until you update the state as described in the next step.

   > [!div class="mx-imgBorder"]  
   > ![Error state of changed work item type](_img/change-process/error-mismatch-type-state.png)

1. Sort the work items by the State column, highlight all work items of the same State, such as Doing, choose the ![ ](../../../_img/icons/actions-icon.png) actions icon, and then select **Edit**. Add the State field and select Active for the value. For details, see [Bulk edit work items](../../../boards/backlogs/bulk-modify-work-items.md).

   > [!div class="mx-imgBorder"]  
   > ![Edit work item dialog](_img/change-process/edit-doing-work-item-state.png)

1. Choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and select **Save items**.

1. Repeat these steps for the Done state, changing to Closed; and the To Do state, changing to New.

1. When done, make sure you save all your changes. Choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and select **Save items**.

<!---

  > [!div class="mx-imgBorder"]  
  > ![Update Work Items](_img/change-process/change-process-basic-to-agile-update-work-items.gif)

-->

## Verify your changes

1. Go to your team backlog and review the user stories.

   > [!div class="mx-imgBorder"]  
   > ![View team backlog](_img/change-process/backlog-basic-to-agile.png)

   If you want to change any user stories to bugs, do that now using bulk update and **Change type**. If you want to show bugs at the same level as user stories, then make that change now. For details, see [Show bugs on backlogs and boards](../show-bugs-on-backlog.md).

1. Go to your team board and verify that the column settings are valid.

   > [!div class="mx-imgBorder"]  
   > ![View team board](_img/change-process/board-user-story.png)

   To add columns or change column names, see [Add columns to your Kanban board](../../../boards/boards/add-columns.md).

## Optional updates

After changing the process, you may want to make additional updates as follows:

- [Change the project name](../../../organizations/projects/rename-project.md)
- [Update your project summary or vision](../../../organizations/projects/project-vision-status.md)

## Related articles

- [Bulk modify work items](../../../boards/backlogs/bulk-modify-work-items.md)
- [Change the process used by a project](./manage-process.md#change-the-process-used-by-a-project)
- [Create an inherited process](./manage-process.md#create-an-inherited-process)
- [Add and manage work item types](./customize-process-wit.md)
- [Show bugs on backlogs and boards](../show-bugs-on-backlog.md)
- [Customize your boards](../../../boards/get-started/customize-boards.md)
- [Create and saved managed queries with the query editor](../../../boards/queries/using-queries.md)
