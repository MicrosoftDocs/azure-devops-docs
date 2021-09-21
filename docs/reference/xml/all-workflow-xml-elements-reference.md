---
title: All WORKFLOW XML elements reference
titleSuffix: Azure DevOps & TFS
description: Quick reference to all WORKFLOW XML elements and main attributes for Team Foundation Server 
ms.technology: devops-agile
ms.custom: process
ms.assetid: 59689226-f7f1-4046-866e-3030aad806ae
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops'
ms.date: 02/10/2017
---

# All WORKFLOW XML elements reference

[!INCLUDE [temp](../../includes/customization-phase-0-and-1-plus-version-header.md)]


You can use the information in this topic as a quick reference to all the elements and main attributes that control the workflow for a type of work item. You specify these elements in the `WORKFLOW` element container, which is the second major section of the definition of a work item type. You use the **STATES** and **TRANSITIONS** child elements to define the different states that a user can specify for a type of work item and which transitions are allowed between states. For more information about how to define these elements, see [Change the workflow](change-workflow-wit.md)  
  
To modify the workflow, you modify the definition for a work item type. See [Modify or add a custom work item type](../add-modify-wit.md).  
  
## WORKFLOW example  
The following example shows the overall structure of the **WORKFLOW** element. You specify all the states to which a user can first assign a work item type within a **STATES** container. Next, you specify all the transitions that are allowed from one state to another. Each state corresponds to a **STATE** element, and each transition corresponds to a **TRANSITION** element. Within each **STATES** and **TRANSITIONS** container element, you can define the states and transitions in any sequence that you want.  
  
For each transition, you specify a set of reasons for changing the state of the work item, including a default reason. You can assign values for each state, transition, or reason, and you can place conditions on the values of one or more fields by using the **FIELD** (Workflow) element. In addition, you can trigger an action to occur during a transition by specifying the **ACTION** element.  
  
> [!div class="tabbedCodeSnippets"]
> ```XML 
> <WORKFLOW>  
> <STATES>  
>   <STATE value="Active">  
>     <FIELDS> . . . </FIELDS>  
>   </STATE>  
>   <STATE value="Resolved">  
>     <FIELDS> . . . </FIELDS>  
>   </STATE>  
>   <STATE value="Closed" />  
> </STATES>  
> <TRANSITIONS>  
>   <TRANSITION from="" to="Active">  
>     <REASONS>  
>       <DEFAULTREASON value="New" />  
>     </REASONS>  
>     <FIELDS> . . . </FIELDS>  
>   </TRANSITION>  
>   <TRANSITION from="Active" to="Resolved">  
>     <REASONS> . . . </REASONS>  
>     <FIELDS> . . . </FIELDS>  
>     <ACTIONS > . . . </ACTIONS >  
> </TRANSITION>  
> <TRANSITION from="Resolved" to="Closed">  
>     <REASONS> . . . </REASONS>  
>     <FIELDS> . . . </FIELDS>  
>     <ACTIONS > . . . </ACTIONS >  
> </TRANSITION>  
> <TRANSITION from="Resolved" to="Active">  
>     <REASONS> . . . </REASONS>  
>     <FIELDS> . . . </FIELDS>  
> </TRANSITION>  
> <TRANSITION from="Active" to="Closed ">  
>     <REASONS> . . . </REASONS>  
>     <FIELDS> . . . </FIELDS>  
> </TRANSITION>  
> <TRANSITION from="Closed" to="Active">  
>     <REASONS> . . . </REASONS>  
>     <FIELDS> . . . </FIELDS>  
> </TRANSITION>  
> </TRANSITIONS>  
> </WORKFLOW>  
> ```  
  
##  <a name="WORKFLOW"></a> Syntax structure  
 By using the elements that the following table describes, you can specify to which states a team member can set a work item of a particular type. In the `WORKFLOW` section of the definition, you define states first, and then you define transitions. For more information, see [Change the workflow](change-workflow-wit.md).  
  

:::row:::
   :::column span="1":::
   **Element**
   :::column-end:::
   :::column span="1":::
   **Description and syntax**
   :::column-end:::
   :::column span="1":::
   **Required?**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **ACTION**

   :::column-end:::
   :::column span="1":::
   Defines a text string that corresponds to an action to be performed when the system for tracking work items calls the **WorkItem.GetNextState** method to get the post-action state of the work item.


   ```
   <ACTION value="NameOfAction" />
   ```
   For more information, see [Automate field assignments based on State, Transition, or Reason](automate-field-assignments-state-transition-reason.md) 

   :::column-end:::
   :::column span="1":::
   Optional

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **ACTIONS**

   :::column-end:::
   :::column span="1":::
   Defines a collection of **ACTION** elements.

   ```
   <ACTIONS>
      <ACTION>. . . </ACTION>
   </ACTIONS>
   ```
   :::column-end:::
   :::column span="1":::
   Optional

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **DEFAULTREASON**

   :::column-end:::
   :::column span="1":::
   Defines the most common cause of a team member changing a work item from one particular state to another particular state.

   ```
   <DEFAULTREASON value="ValueOfDefaultReason">
      <FIELDS>. . . </FIELDS>
   </DEFAULTREASON>
   ```
   :::column-end:::
   :::column span="1":::
   Required

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **FIELD**

   :::column-end:::
   :::column span="1":::
   Specifies a field for a type of work item and the rules and conditions that will be applied to that field when a team member changes the state of a work item of that type and specifies a reason for the change.

   ```
   <FIELD refname="FieldReferenceName">
      <ALLOWEDVALUES> . . . </ALLOWEDVALUES>
      <ALLOWEXISTINGVALUE />
      <CANNOTLOSEVALUE />
      <COPY />
      <DEFAULT />
      <EMPTY />
      <FROZEN />
      <MATCH />
      <NOTSAMEAS />
      <PROHIBITEDVALUES /> . . . </PROHIBITEDVALUES>
      <READONLY />
      <SERVERDEFAULT />
      <SUGGESTEDVALUES /> . . . </SUGGESTEDVALUES>
      <VALIDUSER />
      <WHEN>> . . . </WHEN>
      <WHENNOT> . . . </WHENNOT>
      <WHENCHANGED> . . . </WHENCHANGED>
      <WHENNOTCHANGED> . . . </WHENNOTCHANGED>
   <FIELD>
   ```
   For more information, see [FIELD (Workflow) element reference](all-workflow-xml-elements-reference.md).

   :::column-end:::
   :::column span="1":::
   Optional

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **FIELDS**

   :::column-end:::
   :::column span="1":::
   Specifies a collection of **FIELD** elements.

   ```
   <FIELDS>
      <FIELD . . . </FIELD>
   </FIELDS>
   ```
   :::column-end:::
   :::column span="1":::
   Optional

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **REASON**

   :::column-end:::
   :::column span="1":::
   Defines an additional explanation  for why a team member changed the state of a work item. 

   ```
   <REASON value="NameOfReason">
      <FIELDS>. . . </FIELDS>
   </REASON>
   ```
   :::column-end:::
   :::column span="1":::
   Optional

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **REASONS**

   :::column-end:::
   :::column span="1":::
   A collection of one **DEFAULTREASON** and optional **REASON** elements that explain why a team member changed the state of a work item.

   ```
   <REASONS>
      <DEFAULTREASON>. . . </DEFAULTREASON>
      <REASON>. . . </REASON>
   </REASONS>
   ```
   :::column-end:::
   :::column span="1":::
   
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **STATE**

   :::column-end:::
   :::column span="1":::
   Defines a valid state for the work item type. This element can contain a **FIELDS** element, which references rules and conditions that will be applied to a specific field when a team member changes the state of a work item of that type.

   ```
   <STATE value="NameOfState">
     <FIELDS>. . . </FIELDS>
   </STATE>
   ```
   :::column-end:::
   :::column span="1":::
   Required

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **STATES**

   :::column-end:::
   :::column span="1":::
   Specifies a collection of **STATE** elements that define the valid states to which a user can assign a work item of that type.

   ```
   <STATES>
      <STATE>. . . </STATE>
   </STATES>
   ```
   :::column-end:::
   :::column span="1":::
   Required

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **TRANSITION**

   :::column-end:::
   :::column span="1":::
   Specifies a valid progression or regression from one state to another for work items of a particular type.

   ```
   <TRANSITION from="NameOfStartingState" 
      to="NameOfEndingState" 
      for="UserOrGroupName"
      not="UserOrGroupName">
      <ACTIONS>. . . </ACTIONS>
      <REASONS>. . . </REASONS>
      <FIELDS>. . . </FIELDS>
   </TRANSITION>
   ```
   For more information, see [TRANSITION element](transition-xml-element.md).

   :::column-end:::
   :::column span="1":::
   Required

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **TRANSITIONS**

   :::column-end:::
   :::column span="1":::
   Specifies a collection of **TRANSITION** elements.

   ```
   <TRANSITIONS>
       <TRANSITION>. . . </TRANSITION>
   </TRANSITIONS>
   ```
   :::column-end:::
   :::column span="1":::
   Required

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WORKFLOW**

   :::column-end:::
   :::column span="1":::
   Specifies the collection of **STATES** and **TRANSITIONS** container elements that together define the workflow for the type of work item. 

   ```
   <WORKFLOW>
      <STATES>. . . </STATES>
      <TRANSITIONS>. . . </TRANSITIONS>
   </WORKFLOW>
   ```
   :::column-end:::
   :::column span="1":::
   Required

   :::column-end:::
:::row-end:::

 
## Related articles 
-  [FIELD (Workflow)](field-workflow-element-reference.md)   
-  [Change the workflow](change-workflow-wit.md) 
-  [Customize the work tracking experience](../customize-work.md) 