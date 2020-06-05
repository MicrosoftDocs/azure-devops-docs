---
ms.topic: include
---

You can customize the workflow of any work item type (WIT) by hiding inherited states or adding custom states. By default, each WIT is defined with three or four workflow states. Inherited states differ based on the system process &mdash;[Agile, Basic, Scrum, or CMMI](../../../boards/work-items/guidance/choose-process.md#workflow-states), &mdash;you chose from which to create your custom process. 


:::row:::
   :::column span="":::
      State types
   :::column-end:::
   :::column span="2":::
      Supported customizations
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      ![Inherited process icon](media/process/inherited-icon.png) Inherited states
   :::column-end:::
   :::column span="2":::
      - [Hide or unhide a state](customize-process-workflow.md#hide-state)
      - [Add rules when changing a workflow state](customize-rules.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Custom states
   :::column-end:::
   :::column span="2":::
      - [Add a workflow state](customize-process-workflow.md#add-states)
      - [Edit a workflow state (change color or category)](customize-process-workflow.md#edit-state)
      - [Remove a workflow state](customize-process-workflow.md#remove-state)
      - [Add rules when changing a workflow state](customize-rules.md) 
   :::column-end:::
:::row-end:::

#### Workflow states must conform to the following rules: 

- At least one state must be defined for either the *Proposed* or *In Progress* state categories  
	> [!NOTE]    
	> Before adding a workflow state, review [Workflow states and state categories](../../../boards/work-items/workflow-and-state-categories.md) to learn how workflow states map to state categories.  
- At a minimum, there must be at least two workflow states defined. 

#### Unsupported workflow customizations   

- You can't modify an inherited state (you can't change its name, color, or category), but you can hide it
- You can't modify the state assigned to the *Completed* state category for any WIT, custom or inherited 
- You can't change the name of a custom state 
- You can't change the order of states (states are listed in the order you add them within the States page, and they're listed  alphabetically within the drop-down list of a work item form)  
- You can't specify a Reason for a state, instead, default reasons are defined such as *Moved to state Triaged*, *Moved out of state Triaged* 
- You can't change the location of the State and Reason fields on the form
- You can't restrict transitions, all transitions are defined from any state to another state.  
