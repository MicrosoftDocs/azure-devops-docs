---
title: Change process from Agile to Scrum
titleSuffix: Azure Boards
ms.custom: seodec18
description: Change the process for your project from Agile to Scrum
ms.prod: devops
ms.topic: conceptual
ms.assetid:
ms.manager: jillfra
ms.author: kaelli
author: kaelli
ms.reviewer: danhellem
monikerRange: "azure-devops"
ms.date: 06/28/2019
---

# Change a project process from Agile to Scrum

[!INCLUDE [temp](../../../_shared/version-vsts-only.md)]

You can change a project based on the Agile process to use an inherited Scrum process.  This article provides the steps needed to make this change. 

[!INCLUDE [temp](../_shared/cloud-only-feature.md)]

Prior to making this change, we recommend you familiarize yourself with the process you are changing to. The Task, Bug, Feature, and Epic work item types are the same for both Scrum and Agile processes. Some State and Reason field values, however, are different.


|  Process | Work item types | Workflow |
|------|---------|---------|
|**Agile** | ![Agile work item types](_img/scrum-to-agile/agile-process-plan-wits.png)|![Agile workflow](../../../boards/get-started/_img/about-boards/agile-process-workflow.png)|
|**Scrum** | ![Scrum work item types](_img/scrum-to-agile/scrum-process-plan-wits.png)|![Scrum workflow](../../..//boards/work-items/guidance/_img/alm_pt_scrum_wf_pbi.png)|

For an overview of all processes, see [Choose a process](../../../boards/work-items/guidance/choose-process.md).

Reasons you might want to change your process from Agile to Scrum:

- You want to use Product Backlog Item and Effort instead of User Story and Story Points.
- Your organization is requiring everyone to standardize their tracking with a customized inherited process based on the Scrum process.

<!--- QUESTION: What happens to Analytics data when you do this change?  -->

[!INCLUDE [temp](../_shared/change-process-manual-steps.md)]

[!INCLUDE [temp](../_shared/prerequisites-change-process.md)]

[!INCLUDE [temp](../_shared/open-process-admin-context-ts-only.md)]

<a id="create-customize-process" />

## Create and customize a Scrum inherited process

The first step is to create an inherited process that you can customize. The default, system processes are locked from being customized.

1. From the **Process** page, choose the ![ ](../../../_img/icons/actions-icon.png) actions icon of the Scrum system process, and then select **Create inherited process**. Name the process "Scrum - Inherited".

2. If the User Story and Issue work item types are used by your current project, then [add these work item types](./customize-process-wit.md) to the "Scrum - Inherited" process.

   You don't have to add any details to these work item types as you'll be changing them later to Product Backlog Item and Impediment. However, if you have captured details within a field&mdash;such as Story Points, Priority, or other field&mdash;then add those fields to the work item types.

3. When you are finished, your work item types list should appear as follows.

   > [!div class="mx-imgBorder"]  
   > ![Scrum Inherited WITs](_img/agile-to-scrum/added-work-items.png)

## Change the project process

1. Choose the process that contains the project you want to change. To change from Agile to Scrum, choose **Agile** or the custom process based on Agile. Here we choose Agile.

> [!div class="mx-imgBorder"]  
> ![Choose the Agile process](_img/agile-to-scrum/choose-agile.png)

1. Choose **Projects**, and then choose the ![ ](../../../_img/icons/actions-icon.png) actions icon for the project you want to change, and select **Change process**. Here we choose the MyAgile project.

   > [!div class="mx-imgBorder"]  
   > ![Choose Projects tab](_img/agile-to-scrum/choose-projects-myfirstproject.png)

   Follow the steps in the wizard.

1. Choose the **Scrum - Inherited** process that you created earlier and then choose **Save**.

   > [!div class="mx-imgBorder"]  
   > ![Step 1 of 3 of change process dialog, Choose the process](_img/agile-to-scrum/change-process-agile-to-scrum-wizard-step-1.png)

   If you skipped step 2 of [Create and customize a Scrum inherited process](#create-customize-process), you'll receive the following message to add the missing work item types.

   > [!div class="mx-imgBorder"]  
   > ![Step 2 of 3 of change process dialog, Retry](_img/agile-to-scrum/step-2-retry.png)

   Close the wizard dialog and add the missing work item types now.

1. Upon successful completion, the wizard displays the following information. Make a note of the steps to follow and then choose **Close**.

    > [!div class="mx-imgBorder"]  
    > ![Step 3 of 3 of change process dialog](_img/agile-to-scrum/change-process-agile-to-scrum-wizard-complete.png)

    Steps to manually update your work items and board settings:
    - Update the column to state mapping for each team Kanban board.
    - Update existing work items using the work item types set by the target process.
    - Update existing work items using the correct state model of the target process.

## Update Kanban board column-to-state settings

You can customize Kanban boards to display intermediate columns. For each column added, you must choose a valid workflow state for the work item types displayed on the board. To learn more, see [Workflow states & state categories](../../../boards/work-items/workflow-and-state-categories.md).

1. For each team, [open your Kanban board](../../../boards/get-started/plan-track-work.md).

   > [!div class="mx-imgBorder"]  
   > ![Open team Kanban board](_img/agile-to-scrum/open-kanban-board.png)

1. Choose the **Correct this now** link or the ![ ](../../../_img/icons/blue-gear.png) gear icon to configure the board settings.

   The Settings dialog opens. Those tabs that display a ![ ](../../../_img/icons/required-icon.png) required icon need correction.

   > [!div class="mx-imgBorder"]  
   > ![Columns dialog ](_img/agile-to-scrum/board-column-settings-to-fix.png)

   Rename each column and choose the correct state for each column so that the column-to-state mapping is correct. As needed, add one or more columns. When done, choose **Save and close**.

   > [!div class="mx-imgBorder"]  
   > ![Open team Kanban board](_img/agile-to-scrum/board-column-settings-fixed.png)

<!---

  > [!div class="mx-imgBorder"]
  > ![Change Process Wizard](_img/change-process/change-process-wizard.gif)

4. Update the [board settings](../../../boards/get-started/customize-boards.md) for each board so that the column to state mapping is correct.

  > [!div class="mx-imgBorder"]
  > ![Board Configuration](_img/change-process/change-process-agile-to-scrum-board-config.gif)

5. [Create a query](../../../boards/queries/using-queries.md) to get a list of all User Stories. Sort the list by state value. Highlight all User Stories and do a [change type](../../../boards/backlogs/remove-delete-work-items.md#change-the-work-item-type) to Product Backlog Item. Next do a [bulk edit](../../../boards/backlogs/bulk-modify-work-items.md) to update work items to the right state for the Product Backlog Item type. For example: Active would change to Committed. Do this for each state, one state at a time.

6. Adjust query to show only Issues. Highlight all Issue work items and a change type to be an Impediment. Do a bulk edit to update work items to the right state for the Impediment type. Do this for each state, one state at a time.

7. Adjust query to only show Tasks. Use bulk edit to update state value for all Tasks, one state at a time. Rinse and repeat the same process for Bugs, Epics, and Features.

  > [!div class="mx-imgBorder"]
  > ![Update Work Items](_img/change-process/change-process-agile-to-scrum-update-work-items.gif)

8. [Change the process used by the project](./manage-process.md#change-the-process-used-by-a-project) to use the system Scrum process


-->

## Update work items

Your next step is to bulk update work items. The recommended sequence is:

- Create a work item query that displays all work items that need update.
- Perform a bulk update to change the work item type of User Story work items to Product Backlog Items.
- Perform a bulk update on all States to change from Agile states&mdash;Active, Resolved, and Closed&mdash;to Scrum process states&mdash;Approved, Committed, and Done.

1. [Create a query](../../../boards/queries/using-queries.md) to get a list of all User Stories, Issues, Features, Tasks, and Epics. You will need to change the work item type of the first two work item types, and the State and Reason fields for all items.

   > [!div class="mx-imgBorder"]  
   > ![Query all items](_img/agile-to-scrum/query-all-items-agile-to-scrum.png)

2. Choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and then select **Column options**. Choose to show the State and Reason fields. Choose the **Sort** tab, and set it to sort the list by work item type and state value.

   > [!div class="mx-imgBorder"]  
   > ![Column options dialog, sort tab](_img/change-process/query-column-sort.png)

3. Choose **Results** to just show the list of work items.

4. Highlight all User Stories, choose the ![ ](../../../_img/icons/actions-icon.png) actions icon, select **Change type**, and change the type to Product Backlog Item.

   > [!div class="mx-imgBorder"]  
   > ![Change type dialog](_img/agile-to-scrum/change-type-pbi.png)

   For more details, see [Move, change, or delete work items, Change the work item type](../../../boards/backlogs/remove-delete-work-items.md#change-the-work-item-type).

   It's possible that you will receive errors where the work item type and the state are mismatched. In that case, you can't save your changes until you update the state as described in the next step.

   > [!div class="mx-imgBorder"]  
   > ![Error state of changed work item type](_img/agile-to-scrum/mismatch-state.png)

5. Highlight all work items of the same State, such as Resolved, choose the ![ ](../../../_img/icons/actions-icon.png) actions icon, and then select **Edit**. Add the State field and select Committed or a valid value for the Product Backlog Item. You may also need to update the Reason field. For details, see [Bulk edit work items](../../../boards/backlogs/bulk-modify-work-items.md).

   > [!div class="mx-imgBorder"]  
   > ![Edit work item dialog](_img/agile-to-scrum/edit-doing-work-item-state.png)

   This should result in an updated list without errors.

   > [!div class="mx-imgBorder"]  
   > ![Error state of changed work item type](_img/agile-to-scrum/mismatch-state-fixed.png)

6. To save your changes, choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and select **Save items**.

7. Repeat the above steps to change the work item type for Issue to Impediment, and update the states to valid states for the work item types.

8. When done, make sure you choose the ![ ](../../../_img/icons/actions-icon.png) actions icon and select **Save items**.

> [!TIP]  
> If you have a number of field value changes, such as populating the Effort field with the value held in Story Points, you can do that using Excel. See [Bulk add or modify work items with Excel](../../../boards/backlogs/office/bulk-add-modify-work-items-excel.md).

## Verify your changes

1. Go to your team backlog and review the user stories.

   > [!div class="mx-imgBorder"]  
   > ![View team backlog](_img/agile-to-scrum/backlog-agile-to-scrum.png)

1. Go to your team board and verify that the column settings are valid.

   > [!div class="mx-imgBorder"]  
   > ![View team board](_img/agile-to-scrum/verify-boards.png)

   To add columns or change column names, see [Add columns to your Kanban board](../../../boards/boards/add-columns.md).

## Optional updates

After changing the process, you may want to make additional updates as follows:

- [Change the project name](../../../organizations/projects/rename-project.md)
- [Update your project summary or vision](../../../organizations/projects/project-vision-status.md)
- Disable or delete the work item types that won't be used going forward. See [Customize a work item type for an inherited process](customize-process-wit.md#enable-disable)

## Related articles

- [Bulk modify work items](../../../boards/backlogs/bulk-modify-work-items.md)
- [Change the process used by a project](./manage-process.md#change-the-process-used-by-a-project)
- [Create an inherited process](./manage-process.md#create-an-inherited-process)
- [Add and manage work item types](./customize-process-wit.md)
- [Show bugs on backlogs and boards](../show-bugs-on-backlog.md)
- [Customize your boards](../../../boards/get-started/customize-boards.md)
- [Create and saved managed queries with the query editor](../../../boards/queries/using-queries.md)
