---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.prod: azure-devops
ms.topic: include
ms.date: 11/04/2025
---

You can customize the workflow of any work item type (WIT) by hiding inherited states or adding custom states. Inherited states vary based on the system process used to create the custom process: Agile, Basic, Scrum, or Capability Maturity Model Integration (CMMI). For more information, see [Workflow states, transitions, and reasons](../../../boards/work-items/guidance/choose-process.md#workflow-states).

The default workflow for each WIT defines between two and four states and specifies the following workflow operations:

- Forward and backward transitions between each state. For example, the Basic process **Issue** WIT includes three states: **To Do**, **Doing**, and **Done**.
- Default reasons for each state transition.

Inherited and custom workflows must conform to the following rules:

- Define at least two workflow states.
- Define at least one state for either the **Proposed** or **In Progress** state categories.
- Define a maximum of 32 workflow states per work item type.

> [!NOTE]
> Before you add a custom workflow state, see [About workflow states in backlogs and boards](../../../boards/work-items/workflow-and-state-categories.md) to see how workflow states map to categories.

For more information about inherited and custom workflow states, see the following articles:

**Inherited states**
- [Hide or unhide a state](../work/customize-process-workflow.md#hide-state)
- [Add rules when changing a workflow state](../work/custom-rules.md)

**Custom states**
- [Add a workflow state](../work/customize-process-workflow.md#add-states)
- [Edit a workflow state (change color or category)](../work/customize-process-workflow.md#edit-state)
- [Remove a workflow state](../work/customize-process-workflow.md#remove-state)
- [Add rules when changing a workflow state](../work/custom-rules.md) 

### Limitations

- You can't change the name, color, or category of inherited states, but you can hide them if you don't want them visible.
- You can't change the names of custom states once defined.
- You can't change or customize the default state category names.
- Only one state can exist in the **Completed** state category. Adding a custom state to this category removes or hides any other state in that category.
- You can't specify custom **Reasons** for state transitions. Use default reasons, such as **Moved to state Triaged** and **Moved out of state Triaged**.
- You can't change the placement of the **State** and **Reason** fields on the work item form.

