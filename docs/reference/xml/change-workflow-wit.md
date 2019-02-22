---
title: Change the workflow for a work item type
titleSuffix: Azure DevOps & TFS 
description: Add States, Transitions, Reasons, or Actions to customize the workflow for a WIT in Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: ca8dff64-7ece-46cf-b985-2751480dff32
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: conceptual
ms.date: 03/31/2017
---

# Change the workflow for a work item type

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

You can change the workflow for a work item type (WIT) to support your business and team processes. WITs support tracking all types of work&mdash;requirements, tasks, code defects&mdash;to support software development.  
  
The workflow determines the logical progression and regression of work that team members will perform. It also specifies the values that appear in the drop-down menus for the State and Reason fields. For an overview of the default workflow states supported in the default process templates, see [Choose a process](../../boards/work-items/guidance/choose-process.md). 

**Workflow for Product Backlog Item (Scrum process template)**  

![Product backlog item workflow, Scrum process](_img/scrum_pbistate.png "Scrum_PBIstate")  
 

> [!NOTE]  
> This article describes how to customize a workflow state. If instead, you want to change the *State* assigned to a specific work item, see one of the following topics: [Add work items, Update work status](../../boards/work-items/work-item-form-controls.md#update-work-status), [Kanban board, Track work in progress](../../boards/boards/kanban-basics.md#track-work), or [Task board, Update task status](../../boards/sprints//task-board.md#update-task-status). You can also perform a [bulk update of the *State* for many work items](../../boards/backlogs/bulk-modify-work-items.md).
> 
> For information about build pipeline workflows, see [Get started with CI/CD](../../pipelines/get-started-designer.md).


[!INCLUDE [temp](../../_shared/update-xml-wit.md)] 


To customize the workflow, follow these two steps:   

1.  Modify the `WORKFLOW` section of the WIT definition as described in this topic.

2.  [Modify the process configuration to map new workflow states to metastates](process-configuration-xml-element.md).  

    This second step is required when you change the workflow for a WIT that appears on an Agile tool page. These WITs belong to either the Requirement or Task categories. To learn more about state categories, see [Workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md).  


<a name="DesignGuidelines"></a> 

## Workflow design guidelines  
You define the workflow by first identifying the states and the valid transitions between them. The `WORKFLOW` section of the WIT definition specifies the valid states, transitions, reasons for the transitions, and optional actions that will be performed when a team member changes the state of a work item.  
  
In general, you associate each state with a team member role and a task that a person in that role must perform to process the work item before changing its state. Transitions define the valid progressions and regressions between states. Reasons identify why a team member changes a work item from one state to another, and actions support automation of the transition of a work item at a point in the workflow.  
  
For example, the State is set to **New** when a tester opens a new bug that is based on the default Agile process. The developer changes the State to **Active** when fixing the bug, and once fixed, the developer changes its state to **Resolved** and sets the value of the Reason field to **Fixed**. After verifying the fix, the tester changes the state of the bug to **Closed** and the Reason field changes to **Verified**. If the tester determined that the developer had not fixed the bug, the tester would change the state of the bug to **Active** and specify the Reason as **Not Fixed** or **Test Failed**.  
  
As you design or modify a workflow, consider the following guidelines:  
  
-  Use the `STATE` element to define a unique state for each team member role that will take a specific action on a work item. The more states you define, the more transitions you must define. Regardless of the sequence in which you define the states, they are listed in alphanumeric order in the drop-down menu for the **State** field.  
  
     If you add a state to a work item type that appears on the backlog or board pages in the web portal, you must also map the state to a state category. To learn more, review [Workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md).  
  
-   Use the `TRANSITION` element to define a transition for each valid progression and regression from one state to another.  
  
     At a minimum, you must define one transition for each state, and the transition from the null state to the initial state.  
  
     You can define only one transition from unassigned (null) to the initial state. When you save a new work item, it is automatically assigned to the initial state.  
  
     When a team member changes the state of a work item, that change triggers the transition and the actions that you define to be performed for the selected state and the transition. Users can specify only those states that are valid based on the transitions that you define for the current state. In addition, an `ACTION` element, which is a child element of `TRANSITION`, can change the state of a work item.  
  
-   For each transition, you define a default reason by using the `DEFAULTREASON` element. You can define as many optional reasons as you want by using the `REASON` element. These values appear in the drop-down menu of the **Reason** field.  
  
-   You can specify rules that will be applied when the work item changes state, when it transitions, or when a user selects a specific reason. Many of these rules supplement the conditional rules that you can apply when you define the fields in the `FIELDS` section under the `WORKITEMTYPE` definition. For more information, see [Update fields during a workflow change](#fields) later in this topic.  
  
-   The names that you assign to states and reasons are case insensitive.  
  
     The drop-down menus for the State and Reason fields within the work item form or query editor display the values assigned in the `WORKFLOW` section of the work item type.  
  
<a name="ExampleWorkflow"></a> 
##  Workflow diagram and code example  

The following code example shows the `WORKFLOW` for the Bug WIT definition for the Agile process template. This example defines three states and five transitions. The `STATE` elements specify the Active, Resolved, and Closed states. All possible combinations for progression and regression transitions are defined for the three states, except one. The transition from Closed to Resolved is not defined. Therefore, team members cannot resolve a work item of this type if the work item is closed.  
  
This example doesn't list all the elements for `DEFAULTREASON`, `REASON`, `ACTION`, and `FIELD`.  
  
**Example Workflow State Diagram &mdash; Agile Bug WIT**

![Bug workflow states, Agile process template](_img/procguide_bugworkflow.png "ProcGuide_BugWorkflow") 
  
```xml
<WORKFLOW>
 <STATES>
    <STATE value="Active">
      <FIELDS> . . . </FIELDS>
    </STATE>
    <STATE value="Resolved">
     <FIELDS> . . . </FIELDS>
    </STATE>
    <STATE value="Closed">
     <FIELDS> . . . </FIELDS>
    </STATE>
 </STATES>
 <TRANSITIONS>
    <TRANSITION from="" to="Active">
       <REASONS>
          <REASON value="Build Failure" />
           <DEFAULTREASON value="New" />
       </REASONS>
       <FIELDS> . . . </FIELDS>
    </TRANSITION>
    <TRANSITION from="Active" to="Resolved">
     <ACTIONS> . . . </ACTIONS>
     <REASONS> . . . </REASONS>
    </TRANSITION>
    <TRANSITION from="Resolved" to="Active">
       <REASONS> . . . </REASONS>
    </TRANSITION>
    <TRANSITION from="Resolved" to="Closed">
       <REASONS>
          <DEFAULTREASON value="Verified" />
       </REASONS>
     <FIELDS> . . . </FIELDS>
    </TRANSITION>
    <TRANSITION from="Closed" to="Active">
       <REASONS>
          <REASON value="Reactivated" />
          <DEFAULTREASON value="Regression" />
       </REASONS>
     <FIELDS> . . . </FIELDS>
    </TRANSITION>
 </TRANSITIONS>
 </WORKFLOW>
```

  
##  <a name="NumberStates"></a> Determine the number and types of states  
 You determine the number and types of valid states based on the number of distinct logical states in which you want the work items of that type to exist. Also, if different team members perform different actions, then you can consider defining a state based on a member role. Each state corresponds to an action that a team member must perform on the work item to move it to the next state. For each state, you should define the specific actions and the team members who are allowed to perform those actions.  
  
 The following table provides an example of four states that are defined to track the progress of a feature and the valid users who must perform the indicated actions:  
  
|State|Valid user|Action to perform|  
|-----------|----------------|-----------------------|  
|Proposed|Project manager|Anyone can create a feature work item. However, only project managers can approve or disapprove the work item. If a project manager approves a feature, the project manager changes the status of the work item to Active; otherwise, a team member closes it.|  
|Active|Development lead|The development lead oversees the development of the feature. When the feature is completed, the development lead changes the status of the feature work item to Review.|  
|Review|Project manager|The project manager reviews the feature that the team implemented and changes the status of the work item to Closed if the implementation is satisfactory.|  
|Closed|Project manager|No additional action is expected to occur on work items that are closed. These items remain in the database for archival and reporting purposes.|  
  
> [!NOTE]  
>  All states appear in alphabetical order in the list on the form for a work item of a particular type, regardless of the sequence in which you specify them.   
  
  <a name="Transitions"></a> 
## Define transitions  

You control the states to and from which team members can change a work item if you define the valid state progressions and regressions. If you do not define a transition from one state to another state, team members cannot change a work item of a particular type from a particular state to another particular state.  
  
 The following table defines the valid transitions for each of the four states that were described earlier in this topic, together with the default reason for each.  
  
|State|Transition to state|Default reason|  
|-----------|-------------------------|--------------------|  
|Proposed|Active (progression)|Approved for development|  
||Closed (progression)|Not approved|  
|Active|Review (progression)|Acceptance criteria met|  
|Review|Closed (progression)|Feature complete|  
||Active (regression)|Does not meet requirements|  
|Closed|Proposed (regression)|Reconsider for approval|  
||Active (regression)|Closed in error|  
  
 You can restrict who is allowed to make a transition from one state to another by using the *for* and *not* attributes of the `TRANSITION` element. As the following example shows, testers can reopen a bug but developers cannot.  
  
```xml
<TRANSITION from="Closed" to="Active"  
   for="[Project]\Testers"  
   not="[Project]\Developers">  
   . . .  
</TRANSITION>  
```  

<a name="Reasons"></a>   
### Specify the reasons  
 When a team member changes the State field, that user can retain the default reason for that transition or specify a different reason if you define additional options. You must use the `DEFAULTREASON` element to specify one and only one default reason. You should specify additional reasons only if they help the team track or report data.  
  
 For example, a developer can specify one of the following reasons when they resolve a bug: Fixed (Default), Deferred, Duplicate, As Designed, Cannot Reproduce, or Obsolete. Each reason specifies a particular action for the tester to perform with regard to the bug.  
  
> [!NOTE]  
>  All reasons appear in alphabetical order in the list on the work form for work items of a particular type, regardless of the sequence in which you specify the `REASON` elements.  
  
 The following example shows the elements that define the reasons why a member of the team might resolve a bug:  
  
```xml
<TRANSITION from="Active" to="Resolved">  
      . . .  
      <REASONS>  
      <DEFAULTREASON value="Fixed"/>  
      <REASON value="Deferred"/>  
      <REASON value="Duplicate"/>  
      <REASON value="As Designed"/>  
      <REASON value="Unable to Reproduce"/>  
      <REASON value="Obsolete"/>  
      </REASONS>  
      . . .  
</TRANSITION>  
  
```  

<a name="Actions"></a>   
###  Specify actions  
 In general, team members change the state of a work item by specifying a different value for the **State** field and then saving the work item. However, you can also define an `ACTION` element that automatically changes the state of a work item when that transition occurs. As the following example shows, you can specify that bug work items should be resolved automatically if they are associated with files that a developer checks into version control:  
  
```xml
<TRANSITION from="Active" to="Resolved">  
      <ACTIONS>  
      <ACTION value="Microsoft.VSTS.Actions.Checkin"/>  
      </ACTIONS>  
. . .  
</TRANSITION>  
```  
  
 You can use the `ACTION` element to automatically change the state of work items of a particular type when events occur elsewhere in Microsoft Visual Studio Application Lifecycle Management or outside Visual Studio Application Lifecycle Management (for example, from a tool that tracks calls). For more information, see [ACTION](automate-field-assignments-state-transition-reason.md).  
  
<a name="fields"></a> 
##  Update a field during a workflow change  
 You can define rules that update fields whenever the following events occur:  
  
-   Assign a field rule under `STATE` when you want the rule to apply for all transitions to and reasons for entering that state.  
  
-   Assign a field rule under `TRANSITION` when you want the rule to apply for that transition and all reasons for making that transition.  
  
-   Assign a field rule under `DEFAULTREASON` or `REASON` when you want the rules to apply only for that specific reason.  
  
 If a field should always contain the same value, you define the rule under the `FIELD` element that defines that field. To learn more about rule usage, see [Apply a field rule](apply-rule-work-item-field.md).  
  
 You should try to minimize the number of conditions that you define for any one type of work item. With each conditional rule that you add, you increase the complexity of the validation process that occurs every time that a team member saves a work item. Complex rule sets might increase the time that is required to save the work item.  
  
 The following examples show some of the rules that are applied to system fields in the process template for MSF Agile Software Development.  
 
<a name="DefineField"></a>  
###  Change the value of a field when the state changes  
 When the value of the **State** field for a work item is set to Active and the work item is saved, the values of the **Activated By** and **Assigned To** fields are automatically set to the name of the current user. That user must be a member of the Team Foundation Server Valid Users group. The value of the **Activated Date** field is also set automatically. The following example shows the elements that enforce this rule:  
  
```xml
<STATE value="Active">  
<FIELDS>  
      <FIELD refname="Microsoft.VSTS.Common.ActivatedBy">  
      <COPY from="currentuser"/>  
      <VALIDUSER/>  
      <REQUIRED/>  
      </FIELD>  
      <FIELD refname="Microsoft.VSTS.Common.ActivatedDate">  
      <SERVERDEFAULT from="clock"/></FIELD>  
      <FIELD refname="System.AssignedTo">  
      <DEFAULT from="currentuser"/>  
      </FIELD>  
. . .  
</FIELDS>  
</STATE>  
```  

<a name="ClearField"></a>   
###  Clear the value of a field when the value of another field changes  
 When the value of the **State** field for a work item is set to Active and the work item is saved, the Closed Date and Closed By fields are automatically set to null and made read-only if you use the `EMPTY` element, as the following example shows.  
  
```xml
<STATE value="Active">  
      <FIELDS>  
. . .  
      <FIELD refname="Microsoft.VSTS.Common.ClosedDate"><EMPTY/></FIELD>  
      <FIELD refname="Microsoft.VSTS.Common.ClosedBy"><EMPTY/></FIELD>  
      </FIELDS>  
</STATE>  
```  
 
<a name="CopyField"></a>  
###  Define a field based on the contents of another field  
 When the value of the **State** field for a work item changes to Resolved and the work item is saved, the value of the **Resolved Reason** field is set to the value that the user specified in the **Reason** field. The following example shows the elements that enforce this rule:  
  
```xml
<STATE value="Resolved">  
      <FIELDS>  
. . .  
      <FIELD refname="Microsoft.VSTS.Common.ResolvedReason">  
         <COPY from="field" field="System.Reason"/>  
      </FIELD>  
      </FIELDS>  
</STATE>  
```  
  
## Related notes

- [Workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md)  
- [Customize your work tracking experience](../customize-work.md)  
- [Query by assignment, workflow or Kanban board changes](../../boards/queries/query-by-workflow-changes.md)  
- [Design the work item form](design-work-item-form.md)    
- [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md)



<a name="tools"></a> 
### Tool support

You can change the workflow or view the workflow state diagram that you are defining by using the Process Editor, available for TFS 2015 and earlier versions. You install it from [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power).
  
You can support your users to visualize the workflow by installing the [State Model Visualization extension](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization) from the Visual Studio Marketplace. This tool supports both TFS and Azure DevOps Services. 