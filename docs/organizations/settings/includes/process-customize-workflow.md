---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.prod: azure-devops
ms.topic: include
ms.date: 07/17/2020
---

You can customize the workflow of any work item type (WIT) by hiding inherited states or adding custom states. Inherited states vary based on the system process that you selected to create your custom process. The options are *Agile*, *Basic*, *Scrum*, or *Capability Maturity Model Integration (CMMI)*. For more information, see [Workflow states, transitions, and reasons](../../../boards/work-items/guidance/choose-process.md#workflow-states).

Each default workflow for each WIT defines between two and four states and specifies the following workflow operations:

- Forward and backward transitions between each state. For example, the Basic process Issue WIT includes three states—**To Do**, **Doing**, and **Done**.
- Default reasons for each state transition

---
:::row:::
   :::column span="":::
      **State types**
   :::column-end:::
   :::column span="2":::
      **Supported customizations**
   :::column-end:::
:::row-end:::  
---  
:::row:::  
   :::column span="":::
      :::image type="icon" source="/azure/devops/organizations/settings/work/media/process/inherited-icon.png"::: Inherited states
   :::column-end:::
   :::column span="2":::
      - [Hide or unhide a state](../work/customize-process-workflow.md#hide-state)
      - [Add rules when changing a workflow state](../work/custom-rules.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Custom states
   :::column-end:::
   :::column span="2":::
      - [Add a workflow state](../work/customize-process-workflow.md#add-states)
      - [Edit a workflow state (change color or category)](../work/customize-process-workflow.md#edit-state)
      - [Remove a workflow state](../work/customize-process-workflow.md#remove-state)
      - [Add rules when changing a workflow state](../work/custom-rules.md) 
   :::column-end:::
:::row-end:::

---

### Workflow states must conform to the following rules

- Define at least one state for either the *Proposed* or *In Progress* State categories.  
	> [!NOTE]    
	> Before you add a workflow state, see [About workflow states in backlogs and boards](../../../boards/work-items/workflow-and-state-categories.md) to learn how workflow states map to state categories.  
- Define at least two workflow States.  
- Define a maximum of 32 workflow States per work item type.  

### Unsupported workflow customizations

::: moniker range=">= azure-devops-2020"

- Hide inherited states if you don't want them visible (you can't change their name, color, or category).
- Ensure only one state exists in the *Completed* state category. Adding a custom state to this category removes or hides any other state.
- Keep the name of custom states as is; you can't change them.
- Use default reasons for state transitions, such as *Moved to state Triaged* and *Moved out of state Triaged*; you can't specify custom reasons.
- Accept the default location of the State and Reason fields on the form; you can't change their placement.
- Use the default state category names; you can't customize them.

::: moniker-end

