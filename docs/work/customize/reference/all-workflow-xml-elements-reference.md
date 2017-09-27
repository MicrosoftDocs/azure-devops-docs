---
title: All WORKFLOW XML elements reference | VSTS & TFS
description: Use the information in this topic as a quick reference to all the elemetns and main attributes - Team Foundation Server (TFS)
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: 59689226-f7f1-4046-866e-3030aad806ae
ms.author: kaelli
ms.manager: douge
ms.date: 02/10/2017
---

# All WORKFLOW XML elements reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]


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
  

<table Responsive="true" summary="table">
<tr Responsive="true"><th scope="col"><p>Element</p></th><th scope="col"><p>Description and syntax</p></th><th scope="col"><p>Required?</p></th></tr><tr><td data-th="Element"><p><strong>ACTION</strong></p></td><td data-th="Description and syntax"><p>Defines a text string that corresponds to an action to be performed when the system for tracking work items calls the <strong>WorkItem.GetNextState</strong> method to get the post-action state of the work item.</p>
<div id="code-snippet-2" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_ea8fa7d3-fd75-48a6-8458-6754c2ebf670');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_ea8fa7d3-fd75-48a6-8458-6754c2ebf670" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;ACTION value="NameOfAction" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Automate field assignments based on State, Transition, or Reason](automate-field-assignments-state-transition-reason.md) </p></td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>ACTIONS</strong></p></td><td data-th="Description and syntax"><p>Defines a collection of <strong>ACTION</strong> elements.</p>
<div id="code-snippet-3" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_a67406ee-e8ed-45cc-ae69-f503b94bfc8b');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_a67406ee-e8ed-45cc-ae69-f503b94bfc8b" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;ACTIONS&gt;
   &lt;ACTION&gt;. . . &lt;/ACTION&gt;
&lt;/ACTIONS&gt;

</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>DEFAULTREASON</strong></p></td><td data-th="Description and syntax"><p>Defines the most common cause of a team member changing a work item from one particular state to another particular state.</p>
<div id="code-snippet-4" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_a3016f2f-b3a5-4d96-95ea-688903488f3e');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_a3016f2f-b3a5-4d96-95ea-688903488f3e" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;DEFAULTREASON value="ValueOfDefaultReason"&gt;
   &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/DEFAULTREASON&gt;

</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>FIELD</strong></p></td><td data-th="Description and syntax"><p>Specifies a field for a type of work item and the rules and conditions that will be applied to that field when a team member changes the state of a work item of that type and specifies a reason for the change.</p>
<div id="code-snippet-5" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_5bfe69d3-cc4e-49ce-9dce-05bf06c35c66');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_5bfe69d3-cc4e-49ce-9dce-05bf06c35c66" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
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

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [FIELD (Workflow) element reference](all-workflow-xml-elements-reference.md).</p></td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>FIELDS</strong></p></td><td data-th="Description and syntax"><p>Specifies a collection of <strong>FIELD</strong> elements.</p>
<div id="code-snippet-6" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_79ee0cfa-a182-4124-b346-6d6a0c21e299');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_79ee0cfa-a182-4124-b346-6d6a0c21e299" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;FIELDS&gt;
   &lt;FIELD . . . &lt;/FIELD&gt;
&lt;/FIELDS&gt;

</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>REASON</strong></p></td><td data-th="Description and syntax"><p>Defines an additional explanation  for why a team member changed the state of a work item. </p>
<div id="code-snippet-7" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_09de314c-53da-4d00-b66a-d73ffead7103');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_09de314c-53da-4d00-b66a-d73ffead7103" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;REASON value="NameOfReason"&gt;
   &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/REASON&gt;
</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Optional</p></td></tr><tr><td data-th="Element"><p><strong>REASONS</strong></p></td><td data-th="Description and syntax"><p>A collection of one <strong>DEFAULTREASON</strong> and optional <strong>REASON</strong> elements that explain why a team member changed the state of a work item.</p>
<div id="code-snippet-8" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_fd80dc88-d1d2-43e0-ad3f-b195f6918212');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_fd80dc88-d1d2-43e0-ad3f-b195f6918212" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;REASONS&gt;
   &lt;DEFAULTREASON&gt;. . . &lt;/DEFAULTREASON&gt;
   &lt;REASON&gt;. . . &lt;/REASON&gt;
&lt;/REASONS&gt;
</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p /></td></tr><tr><td data-th="Element"><p><strong>STATE</strong></p></td><td data-th="Description and syntax"><p>Defines a valid state for the work item type. This element can contain a <strong>FIELDS</strong> element, which references rules and conditions that will be applied to a specific field when a team member changes the state of a work item of that type.</p>
<div id="code-snippet-9" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_ca12d7fc-d7f9-42e2-bf7b-780c62b61752');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_ca12d7fc-d7f9-42e2-bf7b-780c62b61752" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;STATE value="NameOfState"&gt;
  &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/STATE&gt;
</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>STATES</strong></p></td><td data-th="Description and syntax"><p>Specifies a collection of <strong>STATE</strong> elements that define the valid states to which a user can assign a work item of that type.</p>
<div id="code-snippet-10" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_fb7bcd4f-45e4-4338-a922-1661cf58329f');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_fb7bcd4f-45e4-4338-a922-1661cf58329f" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;STATES&gt;
   &lt;STATE&gt;. . . &lt;/STATE&gt;
&lt;/STATES&gt;

</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>TRANSITION</strong></p></td><td data-th="Description and syntax"><p>Specifies a valid progression or regression from one state to another for work items of a particular type.</p>
<div id="code-snippet-11" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_b0b031dd-6540-409b-8d68-76a1aa760371');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_b0b031dd-6540-409b-8d68-76a1aa760371" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;TRANSITION from="NameOfStartingState" 
   to="NameOfEndingState" 
   for="UserOrGroupName"
   not="UserOrGroupName"&gt;
   &lt;ACTIONS&gt;. . . &lt;/ACTIONS&gt;
   &lt;REASONS&gt;. . . &lt;/REASONS&gt;
   &lt;FIELDS&gt;. . . &lt;/FIELDS&gt;
&lt;/TRANSITION&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [TRANSITION element](transition-xml-element.md).</p></td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>TRANSITIONS</strong></p></td><td data-th="Description and syntax"><p>Specifies a collection of <strong>TRANSITION</strong> elements.</p>
<div id="code-snippet-12" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_603b68f6-52f8-4db7-81f1-629022482a2f');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_603b68f6-52f8-4db7-81f1-629022482a2f" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;TRANSITIONS&gt;
    &lt;TRANSITION&gt;. . . &lt;/TRANSITION&gt;
&lt;/TRANSITIONS&gt;
</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Required</p></td></tr><tr><td data-th="Element"><p><strong>WORKFLOW</strong></p></td><td data-th="Description and syntax"><p>Specifies the collection of <strong>STATES</strong> and <strong>TRANSITIONS</strong> container elements that together define the workflow for the type of work item. </p>
<div id="code-snippet-13" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_5005fcd8-443c-4a7d-ba26-56ecaeabc632');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_5005fcd8-443c-4a7d-ba26-56ecaeabc632" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;WORKFLOW&gt;
   &lt;STATES&gt;. . . &lt;/STATES&gt;
   &lt;TRANSITIONS&gt;. . . &lt;/TRANSITIONS&gt;
&lt;/WORKFLOW&gt;
</pre></div>
            
        </div>
    </div>
</div>
</td><td data-th="Required?"><p>Required</p></td></tr></table>

 
## Related notes 
-  [FIELD (Workflow)](field-workflow-element-reference.md)   
-  [Change the workflow](change-workflow-wit.md) 
-  [Customize the work tracking experience](../customize-work.md) 