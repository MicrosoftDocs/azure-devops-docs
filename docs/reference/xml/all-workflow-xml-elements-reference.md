---
title: All WORKFLOW XML elements reference
titleSuffix: Azure DevOps & TFS
description: Quick reference to all WORKFLOW XML elements and main attributes for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 59689226-f7f1-4046-866e-3030aad806ae
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.manager: jillfra
ms.date: 02/10/2017
---

# All WORKFLOW XML elements reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]


You can use the information in this topic as a quick reference to all the elements and main attributes that control the workflow for a type of work item. You specify these elements in the `WORKFLOW` element container, which is the second major section of the definition of a work item type. You use the **STATES** and **TRANSITIONS** child elements to define the different states that a user can specify for a type of work item and which transitions are allowed between states. For more information about how to define these elements, see [Change the workflow](change-workflow-wit.md)  
  
To modify the workflow, you modify the definition for a work item type. See [Modify or add a custom work item type](../add-modify-wit.md).  
  
## WORKFLOW example  
The following example shows the overall structure of the **WORKFLOW** element. You specify all the states to which a user can first assign a work item type within a **STATES** container. Next, you specify all the transitions that are allowed from one state to another. Each state corresponds to a **STATE** element, and each transition corresponds to a **TRANSITION** element. Within each **STATES** and **TRANSITIONS** container element, you can define the states and transitions in any sequence that you want.  
  
For each transition, you specify a set of reasons for changing the state of the work item, including a default reason. You can assign values for each state, transition, or reason, and you can place conditions on the values of one or more fields by using the **FIELD** (Workflow) element. In addition, you can trigger an action to occur during a transition by specifying the **ACTION** element.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<WORKFLOW>  
<STATES>  
  <STATE value="Active">  
    <FIELDS> . . . </FIELDS>  
  </STATE>  
  <STATE value="Resolved">  
    <FIELDS> . . . </FIELDS>  
  </STATE>  
  <STATE value="Closed" />  
</STATES>  
<TRANSITIONS>  
  <TRANSITION from="" to="Active">  
    <REASONS>  
      <DEFAULTREASON value="New" />  
    </REASONS>  
    <FIELDS> . . . </FIELDS>  
  </TRANSITION>  
  <TRANSITION from="Active" to="Resolved">  
    <REASONS> . . . </REASONS>  
    <FIELDS> . . . </FIELDS>  
    <ACTIONS > . . . </ACTIONS >  
</TRANSITION>  
<TRANSITION from="Resolved" to="Closed">  
    <REASONS> . . . </REASONS>  
    <FIELDS> . . . </FIELDS>  
    <ACTIONS > . . . </ACTIONS >  
</TRANSITION>  
<TRANSITION from="Resolved" to="Active">  
    <REASONS> . . . </REASONS>  
    <FIELDS> . . . </FIELDS>  
</TRANSITION>  
<TRANSITION from="Active" to="Closed ">  
    <REASONS> . . . </REASONS>  
    <FIELDS> . . . </FIELDS>  
</TRANSITION>  
<TRANSITION from="Closed" to="Active">  
    <REASONS> . . . </REASONS>  
    <FIELDS> . . . </FIELDS>  
</TRANSITION>  
</TRANSITIONS>  
</WORKFLOW>  
```  
  
##  <a name="WORKFLOW"></a> Syntax structure  
 By using the elements that the following table describes, you can specify to which states a team member can set a work item of a particular type. In the `WORKFLOW` section of the definition, you define states first, and then you define transitions. For more information, see [Change the workflow](change-workflow-wit.md).  
  

<table>
<tr Responsive="true"><th scope="col"><p>Element</p></th><th scope="col"><p>Description and syntax</p></th><th scope="col"><p>Required?</p></th></tr><tr><td data-th="Element"><p><strong>ACTION</strong></p></td><td data-th="Description and syntax"><p>Defines a text string that corresponds to an action to be performed when the system for tracking work items calls the <strong>WorkItem.GetNextState</strong> method to get the post-action state of the work item.</p>

<pre>
&lt;ACTION value="NameOfAction" /&gt;
</pre>
<p>For more information, see [Automate field assignments based on State, Transition, or Reason](automate-field-assignments-state-transition-reason.md) </p></td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>ACTIONS</strong></p></td><td data-th="Description and syntax"><p>Defines a collection of <strong>ACTION</strong> elements.</p>
<pre>
&lt;ACTIONS&gt;
   &lt;ACTION&gt;. . . &lt;/ACTION&gt;
&lt;/ACTIONS&gt;
</pre>
</td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>DEFAULTREASON</strong></p></td><td data-th="Description and syntax"><p>Defines the most common cause of a team member changing a work item from one particular state to another particular state.</p>
<pre>
&lt;DEFAULTREASON value="ValueOfDefaultReason"&gt;
   &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/DEFAULTREASON&gt;
</pre>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>FIELD</strong></p></td><td data-th="Description and syntax"><p>Specifies a field for a type of work item and the rules and conditions that will be applied to that field when a team member changes the state of a work item of that type and specifies a reason for the change.</p>
<pre>
&lt;FIELD refname="FieldReferenceName"&gt;
   &lt;ALLOWEDVALUES&gt; . . . &lt;/ALLOWEDVALUES&gt;
   &lt;ALLOWEXISTINGVALUE /&gt;
   &lt;CANNOTLOSEVALUE /&gt;
   &lt;COPY /&gt;
   &lt;DEFAULT /&gt;
   &lt;EMPTY /&gt;
   &lt;FROZEN /&gt;
   &lt;MATCH /&gt;
   &lt;NOTSAMEAS /&gt;
   &lt;PROHIBITEDVALUES /&gt; . . . &lt;/PROHIBITEDVALUES&gt;
   &lt;READONLY /&gt;
   &lt;SERVERDEFAULT /&gt;
   &lt;SUGGESTEDVALUES /&gt; . . . &lt;/SUGGESTEDVALUES&gt;
   &lt;VALIDUSER /&gt;
   &lt;WHEN&gt;&gt; . . . &lt;/WHEN&gt;
   &lt;WHENNOT&gt; . . . &lt;/WHENNOT&gt;
   &lt;WHENCHANGED&gt; . . . &lt;/WHENCHANGED&gt;
   &lt;WHENNOTCHANGED&gt; . . . &lt;/WHENNOTCHANGED&gt;
&lt;FIELD&gt;
</pre>
<p>For more information, see [FIELD (Workflow) element reference](all-workflow-xml-elements-reference.md).</p></td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>FIELDS</strong></p></td><td data-th="Description and syntax"><p>Specifies a collection of <strong>FIELD</strong> elements.</p>
<pre>
&lt;FIELDS&gt;
   &lt;FIELD . . . &lt;/FIELD&gt;
&lt;/FIELDS&gt;

</pre>
</td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>REASON</strong></p></td><td data-th="Description and syntax"><p>Defines an additional explanation  for why a team member changed the state of a work item. </p>
<div id="code-snippet-7" class="codeSnippetContainer" xmlns="">
<pre>
&lt;REASON value="NameOfReason"&gt;
   &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/REASON&gt;
</pre>
</td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>REASONS</strong></p></td><td data-th="Description and syntax"><p>A collection of one <strong>DEFAULTREASON</strong> and optional <strong>REASON</strong> elements that explain why a team member changed the state of a work item.</p>
<pre>
&lt;REASONS&gt;
   &lt;DEFAULTREASON&gt;. . . &lt;/DEFAULTREASON&gt;
   &lt;REASON&gt;. . . &lt;/REASON&gt;
&lt;/REASONS&gt;
</pre>
</td><td data-th="Required?"><p /></td></tr><tr><td data-th="Element"><p><strong>STATE</strong></p></td><td data-th="Description and syntax"><p>Defines a valid state for the work item type. This element can contain a <strong>FIELDS</strong> element, which references rules and conditions that will be applied to a specific field when a team member changes the state of a work item of that type.</p>
<pre>
&lt;STATE value="NameOfState"&gt;
  &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/STATE&gt;
</pre>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>STATES</strong></p></td><td data-th="Description and syntax"><p>Specifies a collection of <strong>STATE</strong> elements that define the valid states to which a user can assign a work item of that type.</p>
<pre>
&lt;STATES&gt;
   &lt;STATE&gt;. . . &lt;/STATE&gt;
&lt;/STATES&gt;

</pre>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>TRANSITION</strong></p></td><td data-th="Description and syntax"><p>Specifies a valid progression or regression from one state to another for work items of a particular type.</p>
<pre>
&lt;TRANSITION from="NameOfStartingState" 
   to="NameOfEndingState" 
   for="UserOrGroupName"
   not="UserOrGroupName"&gt;
   &lt;ACTIONS&gt;. . . &lt;/ACTIONS&gt;
   &lt;REASONS&gt;. . . &lt;/REASONS&gt;
   &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/TRANSITION&gt;
</pre>
<p>For more information, see [TRANSITION element](transition-xml-element.md).</p></td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>TRANSITIONS</strong></p></td><td data-th="Description and syntax"><p>Specifies a collection of <strong>TRANSITION</strong> elements.</p>
<pre>
&lt;TRANSITIONS&gt;
    &lt;TRANSITION&gt;. . . &lt;/TRANSITION&gt;
&lt;/TRANSITIONS&gt;
</pre>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>WORKFLOW</strong></p></td><td data-th="Description and syntax"><p>Specifies the collection of <strong>STATES</strong> and <strong>TRANSITIONS</strong> container elements that together define the workflow for the type of work item. </p>
<pre>
&lt;WORKFLOW&gt;
   &lt;STATES&gt;. . . &lt;/STATES&gt;
   &lt;TRANSITIONS&gt;. . . &lt;/TRANSITIONS&gt;
&lt;/WORKFLOW&gt;
</pre>
</td><td data-th="Required?"><p>Required</p></td></tr></table>

 
## Related articles 
-  [FIELD (Workflow)](field-workflow-element-reference.md)   
-  [Change the workflow](change-workflow-wit.md) 
-  [Customize the work tracking experience](../customize-work.md) 