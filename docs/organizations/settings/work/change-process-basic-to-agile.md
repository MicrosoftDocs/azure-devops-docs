---
title: Change process from Basic to Agile
titleSuffix: Azure Boards
description: Learn how to to change a project process from Basic to Agile in Azure DevOps.
ms.service: azure-devops-boards
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.reviewer: dahellem
monikerRange: "<=azure-devops"
ms.date: 11/03/2025
#customer intent: As an Azure DevOps administrator, I want to learn how to change my projects from Basic to Agile process so I can take advantage of Agile work item types, states, and practices.
---

# Change a project process from Basic to Agile

[!INCLUDE [version-gt-eq-2020](../../../includes/version-gt-eq-2020.md)]

When you create a new project in Azure DevOps, you choose a process to tailor its components such as work item types and states to your team's specific needs. Built-in processes include Basic, Agile, Scrum, and CMMI. For more information, see [About processes and process templates](../../../boards/work-items/guidance/choose-process.md).

The Agile process has several advantages.

- **More work item types.** In the Agile process, you can create work items specifically for tracking code defects or *bugs*. The separate work item type lets you manage bugs independently from other work items like user stories and tasks.
- **More workflow states.** Agile has more and different workflow states, such as **Active** and **Resolved**. These states help you align with Agile principles and manage work items more effectively.
- **More portfolio backlogs.** Agile provides access to both **Epic** and **Feature** portfolio backlogs. Portfolio backlogs let you organize and prioritize work items at a higher level, making it easier to plan and manage your overall project.
- **Customizable inherited process.** You can customize and adopt an inherited process based on Agile principles. If your organization requires Agile, a customized Agile process lets you tailor the process to your team's needs while ensuring compliance with Agile practices.

You can switch between processes for existing projects. This article describes how to transition a project process from Basic to an inherited Agile process.

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-change-process.md)]

## Learn about the Agile process

Before you change your process, you should learn about the new process you're switching to. The Basic and Agile processes have some of the same work item types, like **Task** and **Epic**, but most values for the **State** and **Reason** fields are different. The following chart shows the different work item types and workflows between the Basic and Agile processes.

| Process | Work item types | Workflow |
|------|---------|---------|
|**Basic** | ![Diagram that shows Basic work item types.](../../../boards/get-started/media/about-boards/basic-process-epics-issues-tasks-2.png)|![Diagram that shows basic workflow.](../../../boards/get-started/media/track-issues/basic-process-workflow.png)|
|**Agile** | ![Diagram that shows Agile work item types.](media/scrum-to-agile/agile-process-plan-wits.png)|![Diagram that shows Agile workflow.](../../../boards/get-started/media/about-boards/agile-process-workflow.png)|

<!--- QUESTION: What happens to Analytics data when you do this change?  -->

## Change the process

:::moniker range="azure-devops"

To access project processes, select **Organization settings** from the left navigation menu of your Azure DevOps organization, and then select **Process** under **Boards**.

:::image type="content" source="../../../media/settings/open-process-page-basic.png" alt-text="Screenshot of highlighted Process tab.":::

::: moniker-end

:::moniker range="< azure-devops"

To access project processes, select **Collection settings** from the left navigation menu of your Azure DevOps organization, and then select **Process** under **Boards**.

:::image type="content" source="media/change-process/open-process-page-basic-server.png" alt-text="Screenshot of highlighted Process tab.":::

::: moniker-end

To change the process for your Basic project to Agile:

1. On the **All processes** page, select **Basic**.

   :::image type="content" source="media/change-process/choose-basic-process-projects.png" alt-text="Screenshot of highlighted Basic process.":::

1. On the **Basic** page, select the **Projects** tab.

1. Select the **More actions** icon next to the project you want to change and select **Change process**.

   :::image type="content" source="media/change-process/change-process-basic-to-agile.png" alt-text="Screenshot of highlighted Change process selection.":::

1. Choose **Agile** from the dropdown menu, and then select **Save**.

   :::image type="content" source="media/change-process/change-process-basic-to-agile-wizard-choose-agile.png" alt-text="Screenshot of Agile process selection.":::

   When the process change completes successfully, the following screen appears. Review the steps about manually updating your work items and board settings and then select **Close**.

   :::image type="content" source="media/change-process/change-process-basic-to-agile-wizard-choose-agile-complete.png" alt-text="Screenshot of completion page.":::

1. If the project has existing work items, manually update work items and board settings as described in the following sections.
   - Update the column-to-state mapping for each team board.
   - Update existing work items using the work item types set by the target process.
   - Update existing work items using the correct state model for the target process.

## Update board column-to-state settings

To update the board column-to-state mapping, follow these steps. For more information, see [Plan and track work in Azure Boards](../../../boards/get-started/plan-track-work.md).

1. In the changed project, open your team board by selecting **Boards** > **Boards**.

1. If your team board already had items in the old process, you see an error message that the columns aren't valid and the board can't be displayed. Select the **Correct this now** link or select the **Settings** icon.

1. On the **Settings** page under **Boards**, **Columns** displays an error icon, and each column shows an error for **User story** under **State mapping**.

   :::image type="content" source="media/change-process/kanban-stories-column-settings-to-correct.png" alt-text="Screenshot of Column dialog with settings to correct.":::

1. Rename each of the columns to a valid Agile state name under **Column name**, and choose the correct column-to-state mapping under **State mapping**. For example, rename **To Do** to **New** and change the state mapping to **New**.

   After you correct all columns, select **Save**. For more information, see [Manage columns on your board](../../../boards/boards/add-columns.md).

>[!NOTE]
>You can customize boards to add more columns or rearrange columns as needed. For each column added, you must choose a valid workflow state for the work item type to display on the board. For more information, see [Workflow states and state categories](../../../boards/work-items/workflow-and-state-categories.md).

## Update work items

Update existing backlog work items to use the new work item types and states. For more information about bulk editing work items, see [Bulk edit work items](../../../boards/backlogs/bulk-modify-work-items.md) and [Bulk add and modify work items in Excel](../../../boards/boards/add-columns.md).

1. [Create a query](../../../boards/queries/using-queries.md) to get a list of all work items in the project.

   :::image type="content" source="media/change-process/query-basic-items.png" alt-text="Screenshot of querying all items.":::

1. In the query editor, select **Column options** and make sure the **State** and **Reason** fields appear.

1. Select the **Sorting** tab of the **Column options** screen and set it to sort the list by **Work item type** and **State**. Select **OK**.

   :::image type="content" source="media/change-process/query-column-sort.png" alt-text="Screenshot of column options dialog, sort tab.":::

1. To change work items to types supported in Agile, on the query **Results** tab, shift-select to highlight all **Issues**. Select the **More actions** icon next to one of the highlighted items, and select **Change type**.

   :::image type="content" source="media/change-process/choose-change-type.png" alt-text="Screenshot of choosing Change type from the context menu.":::

1. On the **Change work item type** screen, select **User Story** from the dropdown list and then select **OK**.

   :::image type="content" source="media/change-process/change-type-to-user-story.png" alt-text="Screenshot of the Change type dialog.":::

   Because the **User story** work item type and states like **To Do** or **Doing** are mismatched, errors appear on the list and you can't save your changes.

   :::image type="content" source="media/change-process/error-mismatch-type-state.png" alt-text="Screenshot showing error state of changed work item type.":::

1. Shift-select to highlight all work items with a mismatched state such as **Doing**, select the **More actions** icon next to one of the items, and select **Edit** from the context menu.

1. On the **Edit work items** screen, select the **State** field, select a valid state such as **Active** for the value, and then select **OK**.

   :::image type="content" source="media/change-process/edit-doing-work-item-state.png" alt-text="Screenshot of editing a work item state.":::

1. Repeat these steps to change items with the **Done** state to **Closed** and items with the **To Do** state to **New**.

1.  Select **Save items** to save your changes.

## Verify your changes

1. Go to your team backlog and review the user stories.

1. If you want to change any user stories to bugs, select the **More actions** icon next to the user story, select **Change type**, select **Bug**, and then select **OK**.

   :::image type="content" source="media/change-process/backlog-basic-to-agile.png" alt-text="Screenshot of team backlog.":::

1. If you want to show and manage bugs along with user stories on backlogs and boards, select the **Backlog** page **Settings** icon, scroll down to the **Working with bugs** section, select **Bugs are managed with requirements**, and select **Save**.

   Bugs now appear along with user stories on your team backlog and board. For more information, see [Show bugs on backlogs and boards](../show-bugs-on-backlog.md).

1. Select **View as Board** to go to your team board and verify that the column settings are valid and all user stories and bugs appear correctly.

   :::image type="content" source="media/change-process/board-user-story.png" alt-text="Screenshot of board columns.":::

## Related content

- [Modify work items in bulk](../../../boards/backlogs/bulk-modify-work-items.md)
- [Create an inherited process](./manage-process.md#create-an-inherited-process)
- [Add and manage work item types](./customize-process-work-item-type.md)
- [Show bugs on backlogs and boards](../show-bugs-on-backlog.md)
- [Create and saved managed queries with the query editor](../../../boards/queries/using-queries.md)
