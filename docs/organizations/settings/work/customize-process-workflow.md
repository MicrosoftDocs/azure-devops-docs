---
title: Customize the workflow of an inherited process
titleSuffix: Azure DevOps Services
description: Learn how to add or remove workflow states to a work item type for an inherited process in Azure Boards.
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: 35971F8F-26EF-4C99-9825-4AC072A6EBE4  
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.topic: how-to
ms.date: 10/21/2024
#customer intent: As a team lead or administrator, I want to learn how to customize states in a work item type to optimize our team's workflow.
---

# Customize the workflow (Inheritance process)

[!INCLUDE [version-gt-eq-2019](../../../includes/version-gt-eq-2019.md)]

Each work item type (WIT) has an associated workflow that tracks the status of work from creation to completion. To align with your business and team processes, you can add custom states to most work item types. For example, you might add a *Triaged* state for bugs or a *Design* state for features or user stories.

In this article, you customize the Bug WIT to include a Triaged state. The state and reason fields are displayed in the header area of the work item form.

:::image type="content" source="media/process/cust-workflow-form-triage-header.png" alt-text="Screenshot of Bug work item form, header area, added state.":::

For documentation on the workflow for build and release DevOps tasks, see [YAML vs Classic Pipelines](../../../pipelines/get-started/pipelines-get-started.md).

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

## Supported customizations

[!INCLUDE [temp](../includes/process-customize-workflow.md)]

### State dropdown menu sequence

The **State** dropdown menu lists states in the order you define within each state category. For newly added work items, the first state in the *Proposed* category is assigned as the default state.

The following image illustrates the state sequence defined for a User Story and its corresponding dropdown menu.

:::image type="content" source="media/customize-workflow/user-story-state-sequence.png" alt-text="Screenshot of User story state sequence.":::&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:::image type="content" source="media/customize-workflow/user-story-state-drop-down-list.png" alt-text="Screenshot of User story State dropdown menu.":::  

Within each category, you can move custom states up or down.

## Affect to teams with workflow changes

### Update board configuration

Teams should update their board configuration when making the following customizations:

- Add a custom state.
- Change the category of a custom state.
- Add a custom or inherited work item type to a backlog level. See [Customize backlogs and boards](customize-process-backlogs-boards.md).

### Taskboard configuration

Teams should update their board configuration when making the following customizations:

- Add states to the task WIT, which adds columns to the Taskboard.
- [Track bugs along with tasks](../show-bugs-on-backlog.md), adding states to the bug WIT, which also adds columns to the Taskboard.
- Add the same states to both task and bug work item types, which updates the status consistently and minimize the number of columns added.

## Prerequisites

[!INCLUDE [prerequisites](../includes/process-prerequisites.md)] 

[!INCLUDE [organization process settings](../includes/open-process-admin-context-ts.md)]

[!INCLUDE [note automatic update](../includes/automatic-update-project.md)]

<a id="states">  </a>
<a id="add-states"></a>

## Add a workflow state

States you add appear in the dropdown menu for the States field shown in work item forms and the query editor. A transition to and from the State you add is created to every other State. Default reasons are defined, such as *Moved to state Triaged* and *Moved out of state Triaged*.

1. From the **Work Item Types** page, choose the work item type you want to modify, choose **States**, and then choose **New State**.

   :::image type="content" source="media/process/cpworkflow-add-state.png" alt-text="Screenshot of Process page for a Bug with New state selected.":::

   If the **New state** option is disabled, you don't have the necessary permissions to edit the process. See [Customize an inherited process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).

1. Enter the name of the State, choose its category and color, and then select **Save**. The color you specify appears throughout the product including on the work item form and when the State field appears on a backlog, boards, query results, and more.  

   :::image type="content" source="media/process/cpw-new-state-triaged.png" alt-text="Screenshot of Add a state to Bug dialog.":::

   ::: moniker range="azure-devops"

   > [!NOTE]
   > Any workflow state you add to the *In Progress* or *Resolved* state categories will cause the **Activated By**/**Activated Date** and **Resolved By**/**Resolved Date** fields to update with workflow state changes in and out of these categories. For more information, see [Activated By/Date and Resolved By/Date fields](../../../boards/queries/query-by-workflow-changes.md#activated-resolved-fields).
   ::: moniker-end

1. (Optional) To change the sequence of the State within the dropdown menu, choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: context menu icon and choose **Move up** or **Move down**.

   :::image type="content" source="media/customize-workflow/move-state-sequence.png" alt-text="Screenshot of the States tab where you can Move up State.":::

1. When you're done adding states for the WIT, verify your changes by refreshing your browser and open a work item of the type you customized.

   Here is the State dropdown menu with Triaged selected.

   :::image type="content" source="media/process/cpw-added-triage-state-in-form.png" alt-text="Screenshot of Bug form with the Triaged state selected.":::

1. When you add a State to a WIT, which is associated with a backlog level, each team that uses the board needs to update their column settings. See [Manage columns on your board](../../../boards/boards/add-columns.md).

<a id="edit-state"></a>

## Edit a state

You can edit the category or the color of a custom state. However, you can't change the name of the custom state.

1. Select **Edit** from the &hellip; context menu for the state you want to modify.  

   :::image type="content" source="media/process/cpworkflow-edit-state.png" alt-text="Screenshot of a Bug form with a state selected and the context menu open to Edit.":::

1. Modify the category or color, and then choose **Save**.

1. If you change the category, teams that use the board need to update their column settings. See [Manage columns on your board](../../../boards/boards/add-columns.md).
 
<a id="remove-state"></a>

## Hide or remove a custom state

When you hide or remove a state:

- The state no longer appears in the State dropdown menu for the WIT
- No changes occur to the work item history
- Existing work items maintain their state value, but are in an invalid state. If you want to make a change to the work item, you must first update the state value.

  You might want to create a query and do a bulk update to move the affected work items into a valid state. If you add the state back to the work item type, the work items revert to a valid state.  

<a id="hide-state"></a>

## Hide or unhide an inherited state

You can hide an inherited state that your team doesn't use in its workflow process. However, have at least one state defined for each category.

1. Open the &hellip; context menu for the state you want to hide and choose the **Hide** option.

   This example hides the Resolved state for the Bug WIT.

   :::image type="content" source="media/process/cpworkflow-hide-state.png" alt-text="Screenshot of a Bug type with a state selected and its context menu displaying Hide.":::  

   > [!NOTE]
   > If you hide the state of a WIT tracked on a board, each team that uses the board needs to update their column settings. See [Manage columns on your board](../../../boards/boards/add-columns.md).

1. To unhide, open the &hellip; context menu and choose the **Unhide** option.  

<a id="remove-state"></a>

## Remove a custom state

1. Open the &hellip; context menu for the state you want to remove, and choose **Remove**. You can only remove a custom state.

1. From the **Remove State** dialog, select **Remove**.

   :::image type="content" source="media/process/workflow-remove-state-warning.png" alt-text="Screenshot of Remove state warning dialog box.":::

## View the State workflow model

You can view the State workflow model by installing the [State Model Visualization](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization) Marketplace extension. This extension adds a new hub under Boards labeled **State Visualizer**. On that page you can choose a work item type and view the workflow state model.

> [!NOTE]
> The State Model Visualization extension is not supported by Azure Boards or the product team. For questions, suggestions, or issues, please visit the [extension page](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization).

For example, you can customize the Bug workflow to have a **Triaged** state and all states can transition from one state to another.

You can zoom in and zoom out of the view. Also, you can move the state nodes around to gain a better view of the state model.

## Next steps

> [!div class="nextstepaction"]
> [Review changes made to an inherited process through the audit log](../../audit/azure-devops-auditing.md)

## Related articles

- [Learn about workflow states in backlogs and boards](../../../boards/work-items/workflow-and-state-categories.md)
- [Add and manage work item types](customize-process-work-item-type.md)
- [Add and manage fields](customize-process-field.md)
- [Customize the web layout for a work item type](customize-process-form.md)
- [Customize a project using an inherited process](customize-process.md)
- [Manage columns on your board](../../../boards/boards/add-columns.md)
