---
title: TRANSITION XML element 
titleSuffix: TFS
description: Syntax and usage of the TRANSITION element used to specify a valid progression or regression from one state to another for a work item type
ms.prod: devops
ms.technology: devops-agile
ms.assetid: bb4ced9a-bebb-4011-8646-4beb94655afa
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/27/2017
---



# TRANSITION XML element  

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You use the **TRANSITION** element to specify a valid progression or regression from one state to another for a type of work item. The **TRANSITION** element is a required child element of the **TRANSITIONS** element.  
  
To modify the workflow, you modify the definition for a work item type. See [Modify or add a custom work item type](../add-modify-wit.md).  

## Syntax  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<TRANSITION from="NameOfStartingState" to="NameOfEndingState" for="UserGroupName" not="UserGroupName">  
       <ACTIONS> . . . </ACTIONS>  
       <REASONS> . . . </REASONS>  
       <FIELDS> . . . </FIELDS>  
</TRANSITION>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Attributes  
  
|Attribute|Description|  
|---------------|-----------------|  
|`from`|Required. The name of the state from which the work item is transitioning.|  
|`to`|Required. The name of the state to which the work item is transitioning.|  
|`for`|`Transition` attribute.<br /><br /> Optional. The name of a user or group who is allowed to perform the transition.|  
|`not`|`Transition` attribute.<br /><br /> Optional. The name of a user or group who is restricted from performing the transition.|  
  
> [!NOTE]   
> Rules that use `for` and `not` attributes aren't supported in Azure DevOps Services.

### Child elements  
  
|Element|Description|  
|-------------|-----------------|  
|[ACTIONS](all-workflow-xml-elements-reference.md)|Optional. Defines a collection of `ACTION` elements that each define an action string that can be used when calling the `WorkItem.GetNextState` method to get the post-action state of the work item.|  
|[REASONS](all-workflow-xml-elements-reference.md)|Required. A collection of `DEFAULTREASON` and `REASON` elements that define valid reasons the work item can complete the transition.|  
|[FIELDS (Workflow)](all-workflow-xml-elements-reference.md)|Optional. A collection of `FIELD` (Workflow) elements that reference the field definitions that are defined for  the type of work item.|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[TRANSITIONS](all-workflow-xml-elements-reference.md)|Required. A collection of `TRANSITION` elements that define the valid state transitions for the work item type.|  
  
## Remarks  
 `TRANSITION` is a required child element of `TRANSITIONS`.  
  
 You must define exactly one transition to move the work item from nothing (`from`="") to a named state such as Active. This transition identifies the default state for a new work item.  
  
 All valid transitions between two states must be specified. If no transition is specified, then by default no transition is allowed.  
  
 Additionally, you can optionally use the attributes `for` and `not` in the transition element of workflow to refine who is and who is not able to perform a transition. When you do this, `denies` takes precedence over `allows`. If neither of these attributes is specified, anyone can modify the work item.  
  
 Multiple groups are supported only by creating a parent group and specifying that parent group in the `TRANSITION` element. To learn more about the for and not attributes, see [Apply a field rule](apply-rule-work-item-field.md).  
  
## Example  
 In the following example, the reasons are defined for the transition from the **Active** to the **Resolved** workflow state.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
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
  
## Example  
 In the following rule, the ability to transition a work item from the **Resolved** to the **Completed** state is restricted to all project testers, except for new testers who have just joined the team.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<TRANSITION from="Resolved" to="Complete" for="[project]\AllTesters" not="[project]\NewTesters">  
</TRANSITION>  
```  
  
::: moniker range=">= tfs-2018" 
## Auto completion of work items with pull requests  

When you link a work item to a pull request (PR), you have the option to automatically complete those work items when you successfully complete the PR. 

> [!NOTE]   
> **Feature availability**: The **Complete linked work items after merging** option is available in TFS 2018 and later versions. 

To learn more, see [Workflow states & state categories](../../boards/work-items/workflow-and-state-categories.md).

::: moniker-end  


## Related articles 
- [Change the workflow](change-workflow-wit.md)
- [Customize your work tracking experience](../customize-work.md)   
