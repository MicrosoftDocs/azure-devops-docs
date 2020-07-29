---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.prod: azure-devops
ms.topic: include
ms.date: 07/17/2020
---

You can customize the workflow of any work item type (WIT) by hiding inherited states or adding custom states. Inherited states differ based on the system process &mdash;[Agile, Basic, Scrum, or CMMI](/azure/devops/boards/work-items/guidance/choose-process#workflow-states), &mdash;you chose from which to create your custom process.  

Each default workflow for each WIT defines between two and four States and specifies the following workflow operations: 

- Forward and backward transitions between each state 
- Default reasons for each state transition 

For example, the Basic process, Issue WIT is characterized by the three States&mdash;**To Do**, **Doing**, and **Done**&mdash;and transitions shown in the following image. 
  

> [!div class="mx-imgBorder"]  
> ![Basic Process, Issue work item type, workflow state model](/azure/devops/organizations/settings/work/media/customize-workflow/basic-process-issue-workflow.png)  


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
      ![Inherited icon](/azure/devops/organizations/settings/work/media/process/inherited-icon.png) Inherited states
   :::column-end:::
   :::column span="2":::
      - [Hide or unhide a state](/azure/devops/organizations/settings/work/customize-process-workflow#hide-state)
      - [Add rules when changing a workflow state](/azure/devops/organizations/settings/work/custom-rules) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Custom states
   :::column-end:::
   :::column span="2":::
      - [Add a workflow state](/azure/devops/organizations/settings/work/customize-process-workflow#add-states)
      - [Edit a workflow state (change color or category)](/azure/devops/organizations/settings/work/customize-process-workflow#edit-state)
      - [Remove a workflow state](/azure/devops/organizations/settings/work/customize-process-workflow#remove-state)
      - [Add rules when changing a workflow state](/azure/devops/organizations/settings/work/custom-rules) 
   :::column-end:::
:::row-end:::

---

### Workflow states must conform to the following rules  

- You must define at least one state for either the *Proposed* or *In Progress* State categories  
	> [!NOTE]    
	> Before adding a workflow state, review [Workflow states and state categories](/azure/devops/boards/work-items/workflow-and-state-categories) to learn how workflow states map to state categories.  
- You must define at least two workflow States  
- You can define a maximum of 32 workflow States per work item type  

### Unsupported workflow customizations   

::: moniker range=">= azure-devops-2020"

- You can't modify an inherited state (you can't change its name, color, or category), but you can hide it
- You can only have one state in the *Completed* state category. If you add a custom state to the Completed category, any other state is removed or hidden 
- You can't change the name of a custom state 
- You can't specify a Reason for a state, instead, default reasons are defined such as *Moved to state Triaged*, *Moved out of state Triaged* 
- You can't change the location of the State and Reason fields on the form

::: moniker-end


::: moniker range=">= azure-devops-2019 < azure-devops-2020"

- You can't modify an inherited state (you can't change its name, color, or category), but you can hide it
- You can only have one state in the *Completed* state category. The system disallows adding any custom state to this category 
- You can't change the name of a custom state 
- You can't change the order of states, states are listed in their natural sequence based on their state category within the drop-down list of a work item form  
- You can't specify a Reason for a state, instead, default reasons are defined such as *Moved to state Triaged*, *Moved out of state Triaged* 
- You can't change the location of the State and Reason fields on the form
- You can't restrict transitions, all transitions are defined from any state to another state.  

::: moniker-end