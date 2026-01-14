---
title: Customize the workflow of an inherited process
titleSuffix: Azure DevOps Services
description: Learn how to add or remove workflow states to a work item type for an inherited process in Azure Boards.
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: 35971F8F-26EF-4C99-9825-4AC072A6EBE4  
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.topic: tutorial
ms.date: 01/13/2026
#customer intent: As a team lead or administrator, I want to learn how to customize states in a work item type to optimize our team's workflow.
---

# Customize the workflow (Inheritance process)

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Optimize your team's productivity by customizing work item workflows to reflect your unique business processes. Each work item type (WIT) includes a predefined workflow that tracks work status from creation to completion. Custom states enable you to align Azure DevOps workflows with established team practices, regulatory requirements, and organizational standards.

**Common workflow customizations:**
- **Bug management**: Add states like *Triaged*, *Investigating*, or *Customer Verified*
- **Feature development**: Include *Design Review*, *Development*, *Code Review*, or *Stakeholder Approval*
- **Compliance workflows**: Add *Security Review*, *Legal Review*, or *Audit Complete* states

This article demonstrates customizing the Bug work item type to include a *Triaged* state. The state and reason fields appear prominently in the work item form header for easy access and clear status visibility.

:::image type="content" source="media/process/cust-workflow-form-triage-header.png" alt-text="Screenshot of Bug work item form, header area, added state.":::

> [!TIP]
> For build and release DevOps workflows, see [YAML vs Classic Pipelines](../../../pipelines/get-started/pipelines-get-started.md).

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

## Supported customizations

[!INCLUDE [temp](../includes/process-customize-workflow.md)]

## Understand state organization and behavior

### State categories and workflow progression

Azure DevOps organizes states into four functional categories that define workflow behavior:

| Category | Purpose | Examples | Behavior |
|----------|---------|----------|----------|
| **Proposed** | Initial work stages, planning | New, Approved, Triaged | Starting point for new work items |
| **In Progress** | Active work phases | Active, Committed, Investigating | Indicates work is underway |
| **Resolved** | Completed work awaiting verification | Resolved, Fixed, Ready for Testing | Work complete, pending validation |
| **Completed** | Final states for finished work | Done, Closed, Removed | Terminal states, work fully complete |

### State dropdown menu sequence

States appear in dropdown menus according to the order you define within each category. The first state in the *Proposed* category automatically becomes the default for new work items.

**State ordering principles:**
- **Logical progression**: Arrange states in the order teams typically follow
- **Frequency of use**: Position commonly used states higher in the list
- **Visual clarity**: Consider how state order affects user experience

The following example shows how state sequence configuration affects the user interface:

:::image type="content" source="media/customize-workflow/user-story-state-sequence.png" alt-text="Screenshot of User story state sequence.":::&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:::image type="content" source="media/customize-workflow/user-story-state-drop-down-list.png" alt-text="Screenshot of User story State dropdown menu.":::

**State management capabilities:**
- Reorder custom states within categories using **Move up** or **Move down**
- Can't reorder system (inherited) states
- Changes affect all teams using the process template

## Manage effects of workflow changes

Understanding how workflow modifications affect teams helps you plan implementations and coordinate updates effectively.

### Board configuration requirements

Teams must update their board configurations when you make these customizations:

#### State-related changes requiring board updates

| Change Type | Effect | Required Action |
|-------------|--------|-----------------|
| **Add custom state** | New column needed on boards | Configure column mapping |
| **Change state category** | State behavior changes | Review and adjust columns |
| **Hide inherited state** | Column might become invalid | Remap columns |
| **Add WIT to backlog** | New work items appear on boards | Configure board settings |

For detailed guidance, see [Customize backlogs and boards](customize-process-backlogs-boards.md).

#### Sprint and taskboard considerations

**Task work item changes:**
- Adding states to Task WIT creates new Taskboard columns
- Changes affect sprint planning and daily standup workflows
- Consider effect on team velocity tracking and reporting

**Bug tracking integration:**
- When you [track bugs with tasks](../show-bugs-on-backlog.md), Bug WIT state changes affect Taskboard
- Aligning Bug and Task states minimizes board complexity
- Consistent states improve cross-work-item reporting

### Change management best practices

**Pre-implementation planning:**
- **Stakeholder alignment**: Confirm workflow changes with affected teams
- **Change assessment**: Identify all teams and projects using the process
- **Timeline coordination**: Plan changes during low-activity periods
- **Communication strategy**: Develop clear change notifications

**Post-implementation support:**
- **Documentation updates**: Revise team process documentation
- **Training delivery**: Help teams understand new workflow options
- **Monitoring and feedback**: Track adoption and gather improvement suggestions
- **Issue resolution**: Address configuration problems promptly

**Rollback preparation:**
- Document current state before changes
- Plan communication for any necessary rollbacks
- Maintain backup documentation of previous configurations

## Prerequisites

[!INCLUDE [prerequisites](../includes/process-prerequisites.md)] 

[!INCLUDE [organization process settings](../includes/open-process-admin-context-ts.md)]

[!INCLUDE [note automatic update](../includes/automatic-update-project.md)]

<a id="states">  </a>
<a id="add-states"></a>

## Add a workflow state

Extend your work item types with custom states that reflect your team's unique process stages. Adding states enables better tracking, clearer status visualization, and improved workflow alignment with business requirements.

### Strategic planning for new states

Before adding states, consider your team's workflow needs:

**Evaluate existing gaps:**
- Identify stages in your process not represented by current states
- Determine if existing states could be repurposed instead of adding new ones
- Consider how new states integrate with established team practices

**Plan state characteristics:**
- **Naming convention**: Use clear, action-oriented names that teams understand
- **Category alignment**: Choose categories that match the state's workflow purpose
- **Visual differentiation**: Select colors that enhance workflow clarity

### State integration and automatic transitions

When you add a state:
- **Dropdown availability**: The state appears in the **States** field across work item forms and query editor
- **Automatic transitions**: Bidirectional transitions to and from all existing states are created automatically
- **Default reasons**: System-generated transition reasons like *Moved to state [StateName]* and *Moved out of state [StateName]*

### Add a custom workflow state

1. **Navigate to state configuration**: From the **Work Item Types** page, select the work item type you want to modify, choose **States**, and then select **New State**.

   :::image type="content" source="media/process/cpworkflow-add-state.png" alt-text="Screenshot of Process page for a Bug with New state selected.":::

   > [!TIP]
   > If the **New state** option is disabled, you don't have the necessary permissions to edit the process. See [Customize an inherited process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).

1. **Configure state properties**: Enter the state details thoughtfully:
   - **Name**: Use clear, descriptive names (example: "Code Review," "Testing," "Customer Approval")
   - **Category**: Select the appropriate workflow stage (see [State categories](#state-categories-and-workflow-progression) for detailed descriptions)
   - **Color**: Choose colors that enhance team workflow visualization

   :::image type="content" source="media/process/cpw-new-state-triaged.png" alt-text="Screenshot of Add a state to Bug dialog.":::

   ::: moniker range="azure-devops"

   > [!IMPORTANT]
   > Adding states to the *In Progress* or *Resolved* categories automatically updates **Activated By**/**Activated Date** and **Resolved By**/**Resolved Date** fields when work items transition into or out of these categories. For more information, see [Activated By/Date and Resolved By/Date fields](../../../boards/queries/query-by-workflow-changes.md#activated-resolved-fields).
   ::: moniker-end

2. **Save your configuration**: Select **Save** to create the state. The specified color appears throughout the platform including work item forms, backlogs, boards, and query results.

3. **Optimize state sequence** (Optional): To improve user experience in dropdown menus, adjust state ordering:
   - Choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false"::: context menu icon
   - Select **Move up** or **Move down** to position the state appropriately within its category

   :::image type="content" source="media/customize-workflow/move-state-sequence.png" alt-text="Screenshot of the States tab where you can Move up State.":::

4. **Verify implementation**: Test your new state thoroughly:
   - Refresh your browser to ensure changes are loaded
   - Open a work item of the customized type
   - Confirm the state appears in the dropdown menu with correct color and positioning

   Example of the **State** dropdown menu with Triaged state:

   :::image type="content" source="media/process/cpw-added-triage-state-in-form.png" alt-text="Screenshot of Bug form with the Triaged state selected.":::

### Post-implementation validation

- **Test state transitions**: Verify that work items can move to and from the new state as expected
- **Check reporting effects**: Ensure queries, dashboards, and reports function correctly with the new state
- **Monitor adoption**: Track how teams use the new state and gather feedback for optimization

> [!NOTE]
> Teams using boards must update their column settings when adding states to work item types associated with backlog levels. See the [Effects management section](#manage-effects-of-workflow-changes) for comprehensive change management guidance.

<a id="edit-state"></a>

## Edit a state

Fine-tune your custom workflow states to optimize team productivity and maintain clear visual organization. Editing existing states provides a cost-effective way to improve your workflow without disrupting established processes.

### When to edit vs. create new states

**Edit an existing state when:**
- The current state name accurately represents the workflow stage
- You need to adjust how the state behaves in your process (category change)
- The visual representation needs updating for better clarity
- You want to realign state functionality without disrupting existing work items

**Create a new state when:**
- The existing state name doesn't match your workflow terminology
- You need more granularities in your process
- The current states don't cover all necessary workflow stages

### Editable properties

| Property | Description | Effect |
|----------|-------------|---------|
| **State category** | Determines state behavior and position in workflow | Changes how state functions in boards, queries, and reporting |
| **State color** | Visual identifier across the platform | Updates appearance in all Azure DevOps interfaces |

### Noneditable properties

- **State name**: Permanent once created (consider state purpose during initial creation)
- **System states**: Default Azure DevOps states can't be modified, only hidden

### Edit a custom state

1. **Navigate to the state**: From the **Work Item Types** page, select your work item type, then select **States**.

1. **Open edit dialog**: Select **Edit** from the &hellip; context menu for the target state.  

   :::image type="content" source="media/process/cpworkflow-edit-state.png" alt-text="Screenshot of a Bug form with a state selected and the context menu open to Edit.":::

1. **Configure properties**:
   - **Category**: Select the appropriate workflow stage (see [State categories](#state-categories-and-workflow-progression) for details)
   - **Color**: Choose colors that align with your team's visual conventions

1. **Apply changes**: Select **Save** to implement your modifications.

1. **Test the changes**: 
   - Open a work item of the modified type
   - Verify the state displays with correct color and category behavior
   - Check that state transitions work as expected

### Manage change effects

#### Immediate actions required

**Category changes require:**
- Update board column configurations for all affected teams
- Communicate changes to team members and stakeholders
- Verify that automated processes still function correctly

**Color changes require:**
- Update team documentation that references color coding
- Inform users about the new visual representation
- Check dashboard and report clarity with new colors

#### Other considerations

- **Category changes**: Might require restoring previous board configurations if rollback needed
- **Color changes**: Easily reversible without workflow effect
- **Documentation**: Update any team documentation referencing the old color or category

> [!TIP]
> Follow the comprehensive [change management best practices](#change-management-best-practices) previously outlined for optimal results.
 
<a id="remove-state"></a>

## Hide or remove a custom state

Before hiding or removing a state, understand the effects on existing work items and team workflows.

### Consequences of hiding or removing states

When you hide or remove a state:

- **State dropdown**: The state no longer appears in the State dropdown menu for the work item type
- **Work item history**: No changes occur to existing work item history records
- **Existing work items**: Work items in the hidden/removed state become invalid but retain their state value
- **Future edits**: You must update the state value before making any changes to affected work items

### Handle affected work items

Before hiding or removing a state:

- **Identify affected items**: Create a query to find all work items currently in the state you plan to hide or remove
- **Plan transitions**: Determine which valid state these work items should move to
- **Bulk update**: Use [bulk edit](../../../boards/backlogs/bulk-modify-work-items.md) to move all affected work items to a valid state
- **Verify changes**: Confirm all work items were successfully updated

### Recovery options

- **Restore state**: If you add the hidden/removed state back to the work item type, affected work items automatically revert to a valid state
- **Team coordination**: Notify teams about state changes to prevent confusion during work item updates  

<a id="hide-state"></a>

## Hide or unhide an inherited state

Streamline your team's workflow by hiding inherited states that don't align with your process. This approach removes unused states from dropdown menus while maintaining system functionality.

### When to hide inherited states

Hide inherited states when:
- Your team's workflow doesn't use specific default states
- You want to simplify state selection in dropdown menus
- Certain states create confusion or don't match your process terminology

### Important constraints

Before hiding states, ensure you:
- **Maintain category coverage**: Keep at least one state for each category (Proposed, In Progress, Resolved, Completed)
- **Check existing work items**: Review if any work items currently use the state you plan to hide
- **Coordinate with teams**: Notify teams using affected boards about upcoming changes

### Hide an inherited state

1. Open the &hellip; context menu for the state you want to hide and choose the **Hide** option.

   This example hides the Resolved state for the Bug WIT.

   :::image type="content" source="media/process/cpworkflow-hide-state.png" alt-text="Screenshot of a Bug type with a state selected and its context menu displaying Hide.":::  

   > [!IMPORTANT]
   > If you hide states for work item types tracked on boards, teams must update their column settings. See [Effects management](#manage-effects-of-workflow-changes) for guidance.

2. Verify the change by checking that the hidden state no longer appears in work item form dropdown menus.

### Unhide an inherited state

If you need to restore a hidden state:

1. Open the &hellip; context menu for the hidden state and choose the **Unhide** option.
2. Confirm that the state reappears in dropdown menus and is available for use.
3. Update team board configurations if necessary to include the restored state.  

<a id="remove-state"></a>

## Remove a custom state

1. Open the &hellip; context menu for the state you want to remove, and choose **Remove**. You can only remove a custom state.

1. From the **Remove State** dialog, select **Remove**.

   :::image type="content" source="media/process/workflow-remove-state-warning.png" alt-text="Screenshot of Remove state warning dialog box.":::

## View the State workflow model

Visualize your custom workflow states and transitions using the [State Model Visualization](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization) Marketplace extension. This extension provides a graphical representation of your work item type workflows.

### Install and access the extension

1. Install the State Model Visualization extension from the Visual Studio Marketplace.
1. Navigate to **Boards** > **State Visualizer** in your Azure DevOps project.
1. Select a work item type to display its workflow state model.

### Features

The State Visualizer provides the following capabilities:

- **Visual workflow diagram**: See all states and their allowed transitions
- **Interactive navigation**: Zoom in, zoom out, and pan around the diagram
- **Customizable layout**: Drag and reposition state nodes for optimal viewing
- **State transition details**: View all possible state transitions at a glance

For example, if you customize the Bug workflow to include a **Triaged** state, the visualizer shows how all states can transition to and from each other, providing a clear overview of your workflow design.

> [!NOTE]
> Azure Boards and the product team don't support the State Model Visualization extension. For questions, suggestions, or problems, visit the [extension page](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization).

## Next step

> [!div class="nextstepaction"]
> [Review changes made to an inherited process through the audit log](../../audit/azure-devops-auditing.md)

## Related content

- [Learn about workflow states in backlogs and boards](../../../boards/work-items/workflow-and-state-categories.md)
- [Add and manage fields](customize-process-field.md)
- [Manage columns on your board](../../../boards/boards/add-columns.md)
