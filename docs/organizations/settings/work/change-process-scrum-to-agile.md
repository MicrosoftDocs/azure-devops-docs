---
title: Change process from Scrum to Agile
titleSuffix: Azure Boards
ms.custom: seodec18
description: Change the process for your project from Scrum to Agile
ms.technology: devops-agile
ms.topic: conceptual
ms.assetid:
ms.author: kaelli
author: KathrynEE
ms.reviewer: kaelli
monikerRange: ">= azure-devops-2020"
ms.date: 07/17/2020
---

# Change a project process from Scrum to Agile

[!INCLUDE [temp](../../../includes/version-cloud-plus-2020.md)]

You can change a project based on the Scrum process to use an inherited Agile process. This article provides the steps needed to make this change. 


Prior to making this change, we recommend you familiarize yourself with the process you are changing to. The Task, Bug, Feature, and Epic work item types are the same for both Scrum and Agile processes. Some State and Reason field values, however, are different.

| Process | Work item types | Workflow |
|------|---------|---------|
|**Scrum** | ![Scrum work item types](media/scrum-to-agile/scrum-process-plan-wits.png)|![Scrum workflow](../../..//boards/work-items/guidance/media/alm_pt_scrum_wf_pbi.png)|
|**Agile** | ![Agile work item types](media/scrum-to-agile/agile-process-plan-wits.png)|![Agile workflow](../../../boards/get-started/media/about-boards/agile-process-workflow.png)|

For an overview of all processes and workflows for all work item types, see [Choose a process](../../../boards/work-items/guidance/choose-process.md).

Reasons you might want to change your process from Scrum to Agile:

- You want to use User Story and Story Points instead of Product Backlog Item and Effort.
- Your organization is requiring everyone to standardize their tracking with a customized inherited process based on the Agile process.

<!--- QUESTION: What happens to Analytics data when you do this change?  -->

[!INCLUDE [temp](../includes/change-process-manual-steps.md)]

[!INCLUDE [temp](../includes/prerequisites-change-process.md)]

[!INCLUDE [temp](../includes/open-process-admin-context-ts-plus-2020.md)]

<a id="create-customize-process" />

## Create and customize an Agile inherited process

1. [Create a custom process](./manage-process.md) under Agile called "Agile - Inherited".

2. If the Product Backlog Item and Impediment work item types are used in your current Scrum-based project, you need to [add these work item types](./customize-process-work-item-type.md) to the "Agile - Inherited" process.

   You don't have to add any details to these work item types as you'll be changing them later to User Story and Issue. However, if you have captured details within a field&mdash;such as Effort, Priority, or other field&mdash;then add those fields to the work item types.

3. When you are finished, your work item types list should appear as follows.

	> [!div class="mx-imgBorder"]  
	> ![Agile - Inherited WITs](media/change-process/scrum-inherited-wits.png)

## Change the process

1. Choose the process that contains the project you want to change. To change from Scrum to Agile, choose **Scrum** or a custom process based on Scrum.

   > [!div class="mx-imgBorder"]  
   > ![Choose the process](media/scrum-to-agile/choose-scrum-process.png)

1. Choose **Projects**, and then choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon for the project you want to change, and select **Change process**. Here we choose the Fabrikam Fiber PB project.

   > [!div class="mx-imgBorder"]  
   > ![Choose Projects tab](media/scrum-to-agile/choose-project-to-change.png)

   Follow the steps in the wizard.

1. Choose the **Agile - Inherited** process that you created earlier and then choose **Save**.

   > [!div class="mx-imgBorder"]  
   > ![Step 1 of 3 of change process dialog, Choose the process](media/scrum-to-agile/change-process-scrum-to-agile-wizard-step-1.png)

   If you skipped step 2 of [Create and customize an Agile inherited process](#create-customize-process), you'll receive the following message to add the missing work item types.

   > [!div class="mx-imgBorder"]  
   > ![Step 2 of 3 of change process dialog, Retry](media/scrum-to-agile/step-2-retry.png)

   Close the wizard dialog and add the missing work item types now. See [Add and manage work item types](customize-process-work-item-type.md).

1. Upon successful completion, the wizard displays the following information. Make a note of the steps to follow and then choose **Close**.

    > [!div class="mx-imgBorder"]  
    > ![Step 3 of 3 of change process dialog](media/scrum-to-agile/change-process-scrum-to-agile-wizard-complete.png)

Steps to manually update your work items and board settings:
- Update the column to state mapping for each team Kanban board
- Update existing work items using the work item types set by the target process
- Update existing work items using the correct state model of the target process.

## Update Kanban board column-to-state settings

You can customize Kanban boards to display intermediate columns. For each column added, you must choose a valid workflow state for the work item types displayed on the board. To learn more, see [Workflow states & state categories](../../../boards/work-items/workflow-and-state-categories.md).

1. For each team, [open your Kanban board](../../../boards/get-started/plan-track-work.md).

   > [!div class="mx-imgBorder"]  
   > ![Open team Kanban board](media/scrum-to-agile/open-kanban-board.png)

1. Choose the **Correct this now** link or the :::image type="icon" source="../../../media/icons/blue-gear.png" border="false"::: gear icon to configure the board settings.

   The Settings dialog opens. Those tabs that display a :::image type="icon" source="../../../media/icons/required-icon.png" border="false"::: required icon need correction.

   > [!div class="mx-imgBorder"]  
   > ![Columns dialog ](media/scrum-to-agile/column-settings-to-fix.png)

   Rename each column and choose the correct state for each column so that the column-to-state mapping is correct. As needed, add one or more columns. When done, choose **Save and close**.

   > [!div class="mx-imgBorder"]  
   > ![Kanban board fixed.](media/scrum-to-agile/column-settings-fixed.png)


## Update work items

Your next step is to bulk update work items. The recommended sequence is:

- Create a work item query that displays all work items that need update.
- Perform a bulk update to change the work item type of Product Backlog Item work items to User Story.
- Perform a bulk update on all States to change from Scrum states&mdash;Approved, Committed, and Done&mdash;to Agile process states&mdash;Active, Resolved, and Closed.

1. [Create a query](../../../boards/queries/using-queries.md) to get a list of all Product Backlog Items, Impediments, Features, Tasks, and Epics. You will need to change the work item type of the first two work item types, and the State and Reason fields for all items.

   > [!div class="mx-imgBorder"]  
   > ![Query all items](media/scrum-to-agile/query-all-items-scrum-to-agile.png)

2. Choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon and then select **Column options**. Choose to show the State and Reason fields. Choose the **Sort** tab, and set it to sort the list by work item type and state value.

   > [!div class="mx-imgBorder"]  
   > ![Column options dialog, sort tab](media/change-process/query-column-sort.png)

3. Choose **Results** to just show the list of work items.

4. Highlight all User Stories, choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon, select **Change type**, and change the type to Product Backlog Item.

   > [!div class="mx-imgBorder"]  
   > ![Change type dialog](media/scrum-to-agile/change-type-user-story.png)

   For more details, see [Move, change, or delete work items, Change the work item type](../../../boards/backlogs/move-change-type.md#change-type).

   It's possible that you will receive errors where the work item type and the state are mismatched. In that case, you can't save your changes until you update the state as described in the next step.

   > [!div class="mx-imgBorder"]  
   > ![Error state of changed work item type](media/scrum-to-agile/mismatch-items.png)

5. Highlight all work items of the same State, such as Resolved, choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon, and then select **Edit**. Add the State field and select Committed or a valid value for the Product Backlog Item. You may also need to update the Reason field. For details, see [Bulk edit work items](../../../boards/backlogs/bulk-modify-work-items.md).

   > [!div class="mx-imgBorder"]  
   > ![Edit work item dialog](media/scrum-to-agile/edit-work-items-state-reason.png)

   This should result in an updated list without errors.

   > [!div class="mx-imgBorder"]  
   > ![Updated list without errors.](media/scrum-to-agile/mismatch-items-fixed.png)

6. To save your changes, choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon and select **Save items**.

7. Repeat the above steps to change the work item type for Impediment to Issue, and update the states to valid states for the work item types.

8. When done, make sure you choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: actions icon and select **Save items**.

> [!TIP]  
> If you have a number of field value changes, such as populating the Story Points field with the value held in Effort, you can do that using Excel. See [Bulk add or modify work items with Excel](../../../boards/backlogs/office/bulk-add-modify-work-items-excel.md).

## Verify your changes

1. Go to your team backlog and verify that the backlog items appear as expected.

   > [!div class="mx-imgBorder"]  
   > ![View team backlog](media/scrum-to-agile/backlog-scrum-to-agile.png)

1. Go to your team board and verify that the column settings are valid.

   > [!div class="mx-imgBorder"]  
   > ![View team board](media/scrum-to-agile/verify-boards.png)

   To add columns or change column names, see [Add columns to your Kanban board](../../../boards/boards/add-columns.md).

## Optional updates

After changing the process, you may want to make additional updates as follows:

- [Change the project name](../../../organizations/projects/rename-project.md)
- [Update your project summary or vision](../../../organizations/projects/project-vision-status.md)
- Disable or delete the work item types that won't be used going forward. See [Customize a work item type for an inherited process](customize-process-work-item-type.md#enable-disable)

## Related articles

- [Bulk modify work items](../../../boards/backlogs/bulk-modify-work-items.md)
- [Change the process used by a project](./manage-process.md#change-the-process-used-by-a-project)
- [Create an inherited process](./manage-process.md#create-an-inherited-process)
- [Add and manage work item types](./customize-process-work-item-type.md)
- [Show bugs on backlogs and boards](../show-bugs-on-backlog.md)
- [Customize your boards](../../../boards/get-started/customize-boards.md)
- [Create and saved managed queries with the query editor](../../../boards/queries/using-queries.md)
