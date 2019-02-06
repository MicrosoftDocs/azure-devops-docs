---
title: Automate field assignments 
titleSuffix: TFS
description: Transition work items from one state to another state based on an event that occurs elsewhere for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: f4c6c550-ed55-4bff-a5a7-0e25e87249a5
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 02/14/2017
---

# Automate field assignments based on State, Transition, or Reason

[!INCLUDE [temp](../../_shared/version-tfs-all-versions.md)] 

You may want to automatically transition work items from one state to another state based on an event that occurs within or external to your TFS project. For example, you may want to automate the transition of a bug from one state to another based on what occurs in a call tracking tool. The work item type model and the Work Item Tracking API are extended to support automatic transitioning of work items by other systems.  
  
 If you have code that changes the state of a work item, you can generalize that code by associating your action with the appropriate state transition by using the **ACTION** element. You can pass the value of your action to the [WorkItem.GetNextState](assetId:///WorkItem.GetNextState?qualifyHint=False&autoUpgrade=True) method to get the post-action state of that work item. The version control check-in dialog box uses this method to resolve bugs and close tasks that are associated with the check-in.  
  
 `ACTION` is an optional child element of `ACTIONS`.  
  
> [!NOTE]  
> The Work Item Tracking API is part of the Visual Studio ALM SDK, as described by the following page on the Microsoft website: [Extending Team Foundation](http://go.microsoft.com/fwlink/?LinkId=121098).  
  
 For example, a tool is preset to automatically transition a work item to "Resolved" after the user checks in a change. However, as an integration provider, you do not know what state the work item type author has declared as "Resolved". The author might mean Resolved, Closed, Completed, Ready For Test, Include In Build, and so on. One option would be to require all work item type authors to include a state explicitly named "Resolved".  
  
 That solution is too restrictive. It is also poor from an international perspective because it does not enable localization of states. Instead, system integrators can declare an action such as "Check-in" or "Complete" that induces an automatic transition for work items. The work item type author would then declare this action on the appropriate transition.  
  
 <a name="Syntax"></a> 
##  Syntax for the ACTION element  
 The following syntax is used for the **ACTION** element. The value attribute specifies the name of the action and is required. You should follow the same naming conventions for actions as for field reference names. For example, Team Foundation version control uses Microsoft.VSTS.Actions.CheckIn to identify the transition that is appropriate for work items that are associated with the check-in. For more information, see [Naming conventions for work item tracking objects](../../organizations/settings/naming-restrictions.md).  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<ACTION value="NameOfAction" />  
```  
  
  
<a name="RequiredSteps"></a>   
##  Required steps to support automation  
 To integrate a tool with Work Item Tracking, the tool must perform the following steps:  
  
1.  Determine what state the work item should be transitioned to when the action is performed.  
  
2.  Set the work item to the "to" state.  
  
     The Work Item Tracking API provides methods for performing these steps. The Work Item Tracking API is part of the Visual Studio ALM SDK. For more information, see the following page on the Microsoft website: [Team Foundation Server SDK](http://go.microsoft.com/fwlink/?LinkId=121098).  
  
    > [!NOTE]  
    >  The transaction action that caused a particular state transition to occur is not recorded. If you must track which action caused a transition, you can specify an additional work item field to track it, or you can define a Reason value.  
  
 
<a name="AssociatingState"></a>   
##  Associate a State transition with an Action  
 You can use state transition actions to automate transitions of work items at various points in their workflow. For example, a Team Foundation Server version control system must support automatic transitions of work items at check-in time. To support this, a `microsoft.vsts.actions.checkin` action has been defined.  
  
 A work item type author can define a "Defect" work item type that has a state called "Working" and use this work item when a developer is making changes. The work item type author can define another state called "Ready To Build," which means that the developer has declared the code that was affected by the defect to be ready for the nightly build.  
  
 The author can automatically transition the work item from the "Working" state to the "Ready To Build" state during a check-in operation by declaring the following:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<TRANSITION from="Working" to="Ready To Build">  
   <REASONS>
      ...
   </REASONS>
      <ACTIONS>  
      <ACTION value="microsoft.vsts.actions.checkin"/>  
      </ACTIONS>  
</TRANSITION>  
```  
  
 
<a name="TransactionDetails"></a>  
##  Transition action details  
 Use state transition actions to automate transitions of work items at various points in their workflow. You might consider the following usage details about transition actions:  
  
-   Transition actions are optional. If the current state of the work item instance has an action entry for the specified action, it returns the "to" state. If not, the return value is Null. Integrations should handle Null return values gracefully. That is:  
  
    -   Do not fail.  
  
    -   Leave a trace or log that indicates that the integration did not auto-transition because it required an action that was not found.  
  
-   For each work item type, actions must be unique for From State/Action pairs. This means that work item type authors cannot specify multiple "to" states for the same action.  
  
-   However, multiple actions on the same transition are supported to allow for multiple auto-transition integrations as shown in the following example:  
  
    > [!div class="tabbedCodeSnippets"]
	```XML 
    <TRANSITION from="Working" to="Ready To Build">  
       <REASONS>
          <DEFAULTREASON value="Fixed" />
       </REASONS>
          <ACTIONS>  
          <ACTION value="Microsoft.VSTS.Actions.Checkin"/>  
          <ACTION value="ADatum.Actions.Complete"/>  
          </ACTIONS>  
    </TRANSITION>  
    ```  
  
-   Action names are programmatic names for which you can use only English characters.  
  
-   Action names should follow the same reference namespace convention as field reference names, to avoid action name conflicts between vendors and customers. However, this convention is not enforced by the tool. Visual Studio ALM uses **Microsoft.VSTS.Actions.\<your action>**.  

<a name="ErrorChecking"></a>   
##  Auto-transition error checking  
 Integrators can try two types of auto-transitions. The first is an auto-transition that occurs because of a user action. The second is an auto-transition that occurs by unattended automation, such as a nightly build.  
  
-   **User action auto-transitions** For this kind of auto-transition, a user is present to react to any rule-related issues that appear. You must make sure that you support the situation that occurs when the author of a work item type adds a required field that the integration does not recognize. To support this situation, perform the auto-transition and then inspect the work item type for rule violations. If you find any, display the form for the user to resolve.  
  
-   **Unattended automation auto-transitions** You must assume that no user is present to resolve these issues. In this case, the integration should fail gracefully. An error log should state that the auto-transition was tried, and it should give a reason for the failure.  
  
 When defining either type of auto-transition, define the transition so that each work item reaches a valid state at the end of the transition without requiring user intervention. In other words, all the rules that are defined for the state being transitioned to are met by providing defaults or copied values for all fields. If any field becomes invalid after the transition, the state transition will fail.  
  
 In order to keep fields from becoming invalid, do the following:  
  
-   Define a **DEFAULTREASON** for the state transition.  
  
-   For fields that would become required after the state transition, use the **DEFAULT** or **COPY** rule elements to specify a value for the field.  
  
 For example, you have created the transition action Check-In, which transitions the state of a work item from "Working" to "Ready to Build". The work item's rules for "Ready to Build" require that the "Resolved By" field be set. You would then define a **DEFAULT** or **COPY** rule element for "ResolvedBy" in the **TRANSITION** section. Additionally, you would define a **DEFAULTREASON** to make sure that the required field can be set without user intervention.  
  
## Related articles
- [Customize your work tracking experience](../customize-work.md)
- [Control](control-xml-element-reference.md)    
- [Apply a field rule](apply-rule-work-item-field.md)  
- [Change the workflow](change-workflow-wit.md)   
