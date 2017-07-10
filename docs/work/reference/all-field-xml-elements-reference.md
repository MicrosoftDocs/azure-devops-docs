---
title: All FIELD XML elements reference | Team Services & TFS
description: Syntax for FIELD definition and it's child elements - Team Foundation Server (TFS)
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.topic: reference
ms.assetid: 552c2ada-2186-4b89-848c-34f54dfe0823
ms.author: kaelli
ms.manager: douge
ms.date: 06/16/2017
---

# All FIELD XML elements reference

[!INCLUDE [temp](../_shared/dev15-version-header.md)]

Use this topic to look up the syntax of the `FIELD` element or one of its child elements.  
  
 You specify these elements in the **FIELD** (Definition) element container. You add a field for a work item type (WIT) by specifying a **FIELD** (Definition) element within the **FIELDS** (Definition) element. You can specify these elements within the definition of a WIT or as part of a global workflow.  
  
 You can add child elements to specify the behavior of a field, define default values, or define a pick list of values. You can use field rule elements in combination with each other. You can scope most rules to apply to one or more users or groups or to be ignored for one or more users or groups.  
  
##  <a name="FIELD"></a> FIELD (Definition) container element  
 You use the following syntax to define the data fields for a type of work item. This example shows the format of the **FIELD** (Definition) element and all optional child elements. For more information, see [FIELD (Definition) element reference](field-definition-element-reference.md).  

>[!NOTE]  
><b>Feature availability:</b>The Boolean data type is supported for Hosted XML (Team Services) and for On-Premises XML, for TFS 2017.2 and later versions. 
  
```  
<FIELD name="fieldDisplayName" refname="fieldReferenceName" type="String | Integer | Double | DateTime | PlainText | HTML | History | TreePath | GUID | Boolean"  
syncnamechanges="true | false" reportingname="reportingDisplayName" reportingrefname="reportingReferenceName"  
reportable="Dimension | Detail | Measure" formula="avg" >  
   <ALLOWEDVALUES> . . . </ALLOWEDVALUES>  
   <ALLOWEXISTINGVALUE />  
   <CANNOTLOSEVALUE />  
   <COPY />  
   <DEFAULT />  
   <EMPTY />  
   <FROZEN />  
   <HELPTEXT> . . . </HELPTEXT>  
   <MATCH />  
   <NOTSAMEAS />  
   <PROHIBITEDVALUES /> . . . </PROHIBITEDVALUES>  
   <READONLY />  
   <REQUIRED />  
   <SERVERDEFAULT />  
   <SUGGESTEDVALUES /> . . . </SUGGESTEDVALUES>  
   <VALIDUSER />  
   <WHEN>> . . . </WHEN>  
   <WHENNOT> . . . </WHENNOT>  
   <WHENCHANGED> . . . </WHENCHANGED>  
   <WHENNOTCHANGED> . . . </WHENNOTCHANGED>  
</FIELD>  
```  
<a name="CHILDElements"></a>   
##  FIELD child elements  
 Use child elements to set various restrictions on what data can be entered into a field. You can specify values for a pick list (drop-down menu), set default values, clear entries, or restrict changes. The following table provides the syntax structure for each child element.  
  
 To learn how to use these elements, see [Apply a field rule](apply-rule-work-item-field.md).  Restrictions exist on applying most rules to system fields. All child elements are optional.  
  
<table Responsive="true" summary="table">
<tr Responsive="true"><th scope="col"><p>Element</p></th><th scope="col"><p>Description and syntax</p></th></tr>
<tbody valign="top">
<tr>
<td data-th="Element"><p><strong>ALLOWEDVALUES</strong></p></td><td data-th="Description and syntax"><p>Defines a list of values that users can specify in a field list on work item forms and in the query editor. Users must specify one of the values that you list.</p>
<div id="code-snippet-2" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_8057db21-8245-480a-b48c-1cb42235425d');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_8057db21-8245-480a-b48c-1cb42235425d" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;ALLOWEDVALUES for="userGroupName" not="userGroupName" 
expanditems="true | false" filteritems="excludegroups"&gt;
   &lt;GLOBALLIST name="globalListName"&gt;
      &lt;LISTITEM value="Name" /&gt;
. . . 
   &lt;/GLOBALLIST&gt;
&lt;/ALLOWEDVALUES&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Define pick lists](define-pick-lists.md) .</p></td></tr><tr><td data-th="Element"><p><strong>ALLOWEXISTINGVALUE</strong></p></td><td data-th="Description and syntax"><p>Specifies that a field can retain an existing value, even if it is no longer in a pick list. All new field values must be in the list.</p>
<div id="code-snippet-3" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_f28f5f8c-ddd4-4021-be2d-384aa87d6748');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_f28f5f8c-ddd4-4021-be2d-384aa87d6748" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;ALLOWEXISTINGVALUE /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Define pick lists](define-pick-lists.md) .</p></td></tr><tr><td data-th="Element"><p><strong>CANNOTLOSEVALUE</strong></p></td><td data-th="Description and syntax"><p>Specifies that users cannot clear a field of all values after a value has been specified. After the field contains a value, that field must always contain a non-NULL value.</p>
<div id="code-snippet-4" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_ef28ce74-1cf5-4b07-ac44-d0c209b4859f');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_ef28ce74-1cf5-4b07-ac44-d0c209b4859f" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;CANNOTLOSEVALUE for="userGroupName" not="userGroupName" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>COPY</strong></p></td><td data-th="Description and syntax"><p>Copies a specified value to a field when a user creates or modifies a work item.</p>
<div id="code-snippet-5" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_9bc0a68d-b0ca-4b36-a23e-b1f8272c9e97');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_9bc0a68d-b0ca-4b36-a23e-b1f8272c9e97" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;COPY for="userGroupName" not="userGroupName"  
from="value | field | clock | currentuser" 
value="valueToCopy" field="fieldReferenceName" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Define a default value or copy a value to a field](define-default-copy-value-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>DEFAULT</strong></p></td><td data-th="Description and syntax"><p>Specifies a value for a field that is empty when a user creates or modifies a work item. If a field already has a value, the default rule is ignored.</p>
<div id="code-snippet-6" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_b9eacc1d-49d2-4ef9-9ccd-265fe9fb7f10');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_b9eacc1d-49d2-4ef9-9ccd-265fe9fb7f10" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;DEFAULT for="userGroupName" not="userGroupName" 
from="value | field | clock | currentuser" 
value="value to copy" field="field reference name" /&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Define a default value or copy a value to a field](define-default-copy-value-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>EMPTY</strong></p></td><td data-th="Description and syntax"><p>Clears the field of any value that it contains. The <strong>EMPTY</strong> rule also makes a field read-only, and you should not be use it with the <strong>READONLY</strong> rule.</p><p>The field value is cleared when a user saves the work item, and you cannot specify any value. This rule is primarily used during state transition to clear fields that apply to the state to which the item is transitioning.</p>
<div id="code-snippet-7" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_1e593efb-3a4c-4426-86bd-d96796894792');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_1e593efb-3a4c-4426-86bd-d96796894792" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;EMPTY for="userGroupName" not=" userGroupName" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>FROZEN</strong></p></td><td data-th="Description and syntax"><p>Specifies that you cannot change the field to a non-empty value after changes are committed. As soon as a user saves the work item with a value in that field, the value can no longer be modified.</p>
<div id="code-snippet-8" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_211d77d6-3b83-4de3-bdd8-3119776a1880');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_211d77d6-3b83-4de3-bdd8-3119776a1880" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;FROZEN for="userGroupName" not="userGroupName" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>HELPTEXT</strong></p></td><td data-th="Description and syntax"><p>Defines the text to appear when a user points to the field in the work item form. </p><p><em>tooltipText</em>: A string of text that contains between 1 and 255 characters.</p>
<div id="code-snippet-9" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_e2448bf9-f994-4246-9b8f-f3c08def96e6');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_e2448bf9-f994-4246-9b8f-f3c08def96e6" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;HELPTEXT&gt;tooltipText &lt;/HELPTEXT&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>MATCH</strong></p></td><td data-th="Description and syntax"><p>Defines a pattern that values of String type fields must match.</p>
<div id="code-snippet-10" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_a18c0735-c2c4-4a33-ba35-fcf0c3b69b7e');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_a18c0735-c2c4-4a33-ba35-fcf0c3b69b7e" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;MATCH pattern="patternValue" for="userGroupName" not="userGroupName" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply pattern matching to a string field](apply-pattern-matching-to-string-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>NOTSAMEAS</strong></p></td><td data-th="Description and syntax"><p>Specifies that a field is not assigned the same value as that to which  another specified field is assigned. The value of the <strong>field</strong> attribute must be a valid reference name of a field.</p>
<div id="code-snippet-11" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_633eb75e-c749-4dd0-912e-2bceb3f4386f');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_633eb75e-c749-4dd0-912e-2bceb3f4386f" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;NOTSAMEAS field="fieldReferenceName" for="userGroupName" not="userGroupName" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>PROHIBITEDVALUES</strong></p></td><td data-th="Description and syntax"><p>Defines a list of values that a field cannot contain. Users cannot save a work item if the field contains a prohibited value.</p>
<div id="code-snippet-12" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_46a22417-7509-4f22-b72f-77fa4b8dd07d');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_46a22417-7509-4f22-b72f-77fa4b8dd07d" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;PROHIBITEDVALUES for="userGroupName" not="userGroupName" 
expanditems="true | false" filteritems="excludegroups"&gt;
   &lt;GLOBALLIST name="globalListName"&gt;
      &lt;LISTITEM value="Name" /&gt;
. . . 
   &lt;/GLOBALLIST&gt;
&lt;/PROHIBITEDVALUES&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Define pick lists](define-pick-lists.md).</p></td></tr><tr><td data-th="Element"><p><strong>READONLY</strong></p></td><td data-th="Description and syntax"><p>Specifies that you cannot modify the value to which the field is assigned.</p>
<div id="code-snippet-13" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_6896459d-daf8-434a-9f2e-41eeccc23cd4');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_6896459d-daf8-434a-9f2e-41eeccc23cd4" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;READONLY for="userGroupName" not="userGroupName" /&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>**Note:** Do not use this element together with the <strong>EMPTY</strong> element because <strong>EMPTY</strong> also makes a field read-only. If you combine these elements, results will be inconsistent.</p>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr>
<tr><td data-th="Element"><p><strong>REQUIRED</strong></p></td><td data-th="Description and syntax"><p>Specifies that users must specify a value for the field. Required fields cannot be empty. Users cannot save a work item until they have assigned values to all required fields.</p>
<div id="code-snippet-14" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_ad6e2a54-d012-499e-ba63-44859e7325eb');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_ad6e2a54-d012-499e-ba63-44859e7325eb" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;REQUIRED for="userGroupName" not="userGroupName" /&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>SERVERDEFAULT</strong></p></td><td data-th="Description and syntax"><p>Copies a specified server value to a field when a user saves a work item. These fields usually appear as read-only on the form.</p>
<div id="code-snippet-15" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_d65e73d4-92ea-480b-86b1-1c3ffc1f74ec');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_d65e73d4-92ea-480b-86b1-1c3ffc1f74ec" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;SERVERDEFAULT for="userGroupName" not="userGroupName" 
from="clock | currentuser" /&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Define a default value or copy a value to a field](define-default-copy-value-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>SUGGESTEDVALUES</strong></p></td><td data-th="Description and syntax"><p>Defines a suggested list of values that users can specify in a field list on work item forms and in the query editor. Users can specify values other than those that you suggest.</p>
<div id="code-snippet-16" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_17c6a29b-98a8-450e-b5e2-6272e1c837b3');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_17c6a29b-98a8-450e-b5e2-6272e1c837b3" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;SUGGESTEDVALUES for="userGroupName" not="userGroupName" 
expanditems="true | false" filteritems="excludegroups"&gt;
   &lt;GLOBALLIST name="globalListName"&gt;
      &lt;LISTITEM value="Name" /&gt;
. . . 
   &lt;/GLOBALLIST&gt;    
&lt;/SUGGESTEDVALUES&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Define pick lists](define-pick-lists.md).</p></td></tr><tr><td data-th="Element"><p><strong>VALIDUSER</strong></p></td><td data-th="Description and syntax"><p>Restricts work items from being modified by users who belong to the group that you specify. The default group is the Team Foundation Valid Users group. </p><p>All attributes are optional.  All attributes must consist of a string of text that contains between 1 and 255 characters. You can use tokens to specify groups. </p>
<div id="code-snippet-17" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_41822e7e-cc8d-43e5-9ed5-17f7b189ed36');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_41822e7e-cc8d-43e5-9ed5-17f7b189ed36" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt; VALIDUSER group="groupName" for="userName" not="userName" /&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Apply a field rule](apply-rule-work-item-field.md).</p></td></tr><tr><td data-th="Element"><p><strong>WHEN</strong></p></td><td data-th="Description and syntax"><p>Specifies one or more rules to apply to the current field when another field has a specific value. The parent <strong>FIELD</strong> element defines the current field.</p>
<div id="code-snippet-18" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_9059e29e-1e98-400b-bfc5-ebd4e6e022c2');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_9059e29e-1e98-400b-bfc5-ebd4e6e022c2" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;WHEN field="fieldReferenceName" value="value"&gt;
    &lt;ALLOWEDVALUES&gt; . . . &lt;/ALLOWEDVALUES&gt;
    &lt;ALLOWEXISTINGVALUE&gt; . . . &lt;ALLOWEXISTINGVALUE&gt;
    &lt;CANNOTLOSEVALUE&gt; . . . &lt;/CANNOTLOSEVALUE&gt;
    &lt;COPY&gt; . . . &lt;/COPY&gt;
    &lt;DEFAULT&gt; . . . &lt;/DEFAULT&gt;
    &lt;EMPTY&gt; . . . &lt;/EMPTY&gt;
    &lt;FROZEN&gt; . . . &lt;/FROZEN&gt;
    &lt;MATCH&gt; . . . &lt;/MATCH&gt;
    &lt;NOTSAMEAS&gt; . . . &lt;/NOTSAMEAS&gt;
    &lt;PROHIBITEDVALUES&gt; . . . &lt;/PROHIBITEDVALUES&gt;
    &lt;READONLY&gt; . . . &lt;/READONLY&gt;
    &lt;REQUIRED&gt; . . . &lt;/REQUIRED&gt;
    &lt;SERVERDEFAULT&gt; . . . &lt;/SERVERDEFAULT&gt;        
    &lt;SUGGESTEDVALUES&gt; . . . &lt;/SUGGESTEDVALUES&gt;
    &lt;VALIDUSER&gt; . . . &lt;/VALIDUSER&gt;
&lt;/WHEN&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).</p></td></tr><tr><td data-th="Element"><p><strong>WHENNOT</strong></p></td><td data-th="Description and syntax"><p>Specifies one or more rules to apply to the current field when another field does not have a specific value. The parent <strong>FIELD</strong> element defines the current field.</p>
<div id="code-snippet-19" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_772c4395-25ab-4e5c-b476-a098554ec8f3');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_772c4395-25ab-4e5c-b476-a098554ec8f3" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;WHENNOT field="fieldReferenceName" value="value"&gt;
    &lt;ALLOWEDVALUES&gt; . . . &lt;/ALLOWEDVALUES&gt;
    &lt;ALLOWEXISTINGVALUE&gt; . . . &lt;ALLOWEXISTINGVALUE&gt;
    &lt;CANNOTLOSEVALUE&gt; . . . &lt;/CANNOTLOSEVALUE&gt;
    &lt;COPY&gt; . . . &lt;/COPY&gt;
    &lt;DEFAULT&gt; . . . &lt;/DEFAULT&gt;
    &lt;EMPTY&gt; . . . &lt;/EMPTY&gt;
    &lt;FROZEN&gt; . . . &lt;/FROZEN&gt;
    &lt;MATCH&gt; . . . &lt;/MATCH&gt;
    &lt;NOTSAMEAS&gt; . . . &lt;/NOTSAMEAS&gt;
    &lt;PROHIBITEDVALUES&gt; . . . &lt;/PROHIBITEDVALUES&gt;
    &lt;READONLY&gt; . . . &lt;/READONLY&gt;
    &lt;REQUIRED&gt; . . . &lt;/REQUIRED&gt;
    &lt;SERVERDEFAULT&gt; . . . &lt;/SERVERDEFAULT&gt;        
    &lt;SUGGESTEDVALUES&gt; . . . &lt;/SUGGESTEDVALUES&gt;
    &lt;VALIDUSER&gt; . . . &lt;/VALIDUSER&gt;
&lt;/WHENNOT&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).</p></td></tr><tr><td data-th="Element"><p><strong>WHENCHANGED</strong></p></td><td data-th="Description and syntax"><p>Specifies one or more rules to apply to the current field when another field is changed during the revision of the work item. The parent <strong>FIELD</strong> element defines the current field.</p>
<div id="code-snippet-20" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_d591240f-74f8-45a1-adc2-e484b74372d5');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_d591240f-74f8-45a1-adc2-e484b74372d5" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;WHENCHANGED field="fieldReferenceName" &gt;
    &lt;ALLOWEDVALUES&gt; . . . &lt;/ALLOWEDVALUES&gt;
    &lt;ALLOWEXISTINGVALUE&gt; . . . &lt;ALLOWEXISTINGVALUE&gt;
    &lt;CANNOTLOSEVALUE&gt; . . . &lt;/CANNOTLOSEVALUE&gt;
    &lt;COPY&gt; . . . &lt;/COPY&gt;
    &lt;DEFAULT&gt; . . . &lt;/DEFAULT&gt;
    &lt;EMPTY&gt; . . . &lt;/EMPTY&gt;
    &lt;FROZEN&gt; . . . &lt;/FROZEN&gt;
    &lt;MATCH&gt; . . . &lt;/MATCH&gt;
    &lt;NOTSAMEAS&gt; . . . &lt;/NOTSAMEAS&gt;
    &lt;PROHIBITEDVALUES&gt; . . . &lt;/PROHIBITEDVALUES&gt;
    &lt;READONLY&gt; . . . &lt;/READONLY&gt;
    &lt;REQUIRED&gt; . . . &lt;/REQUIRED&gt;
    &lt;SERVERDEFAULT&gt; . . . &lt;/SERVERDEFAULT&gt;        
    &lt;SUGGESTEDVALUES&gt; . . . &lt;/SUGGESTEDVALUES&gt;
    &lt;VALIDUSER&gt; . . . &lt;/VALIDUSER&gt;      
&lt;/WHENCHANGED&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).</p></td></tr><tr><td data-th="Element"><p><strong>WHENNOTCHANGED</strong></p></td><td data-th="Description and syntax"><p>Specifies one or more rules to apply to the current field when another field is not changed during the revision of the work item. The parent element defines the current field.</p>
<div id="code-snippet-21" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_e62c1cda-6255-44f4-9ac2-ed5251adad14');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_e62c1cda-6255-44f4-9ac2-ed5251adad14" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;WHENNOTCHANGED field="fieldReferenceName"&gt;
    &lt;ALLOWEDVALUES&gt; . . . &lt;/ALLOWEDVALUES&gt;
    &lt;ALLOWEXISTINGVALUE&gt; . . . &lt;ALLOWEXISTINGVALUE&gt;
    &lt;CANNOTLOSEVALUE&gt; . . . &lt;/CANNOTLOSEVALUE&gt;
    &lt;COPY&gt; . . . &lt;/COPY&gt;
    &lt;DEFAULT&gt; . . . &lt;/DEFAULT&gt;
    &lt;EMPTY&gt; . . . &lt;/EMPTY&gt;
    &lt;FROZEN&gt; . . . &lt;/FROZEN&gt;
    &lt;MATCH&gt; . . . &lt;/MATCH&gt;
    &lt;NOTSAMEAS&gt; . . . &lt;/NOTSAMEAS&gt;
    &lt;PROHIBITEDVALUES&gt; . . . &lt;/PROHIBITEDVALUES&gt;
    &lt;READONLY&gt; . . . &lt;/READONLY&gt;
    &lt;REQUIRED&gt; . . . &lt;/REQUIRED&gt;
    &lt;SERVERDEFAULT&gt; . . . &lt;/SERVERDEFAULT&gt;        
    &lt;SUGGESTEDVALUES&gt; . . . &lt;/SUGGESTEDVALUES&gt;
    &lt;VALIDUSER&gt; . . . &lt;/VALIDUSER&gt;
&lt;/WHENNOTCHANGED&gt;

</pre></div>
            
        </div>
    </div>
</div>
<p>For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).</p></td></tr>
</tbody>
</table>
   
 <a name="LISTElements"></a>  

##  GLOBALLIST and LISTITEM child elements  

 You specify the **GLOBALLIST** and **LISTITEM** elements as child elements of the `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES` elements. You can use these elements to enumerate a list of values that appears. Users select values from a pick list or a drop-down menu. For more information, see [GLOBALLIST XML element reference](define-global-lists.md).  
  

<table Responsive="true" summary="table">
<tr Responsive="true"><th scope="col"><p>Element</p></th><th scope="col"><p>Description</p></th></tr>
<tbody valign="top">
<tr><td data-th="Element"><p><strong>GLOBALIST</strong></p></td><td data-th="Description"><p>Defines a set of <strong>LISTITEM</strong> elements that is stored for a team project collection and that all team projects in a collection can use.</p>
<div id="code-snippet-22" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_f2c9b643-1657-4ccc-a999-aaccb999e731');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_f2c9b643-1657-4ccc-a999-aaccb999e731" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;GLOBALLIST name="globalListName"&gt;
    &lt;LISTITEM&gt; . . . &lt;/LISTITEM&gt;
&lt;/GLOBALLIST&gt; 
</pre></div>
            
        </div>
    </div>
</div>
<p><em>globalListName</em>: A string of text that contains between 1 and 255 characters.</p><p><strong>GLOBALLIST</strong> is a required child element of the <strong>GLOBALLISTS</strong> element and an optional child element of the <strong>ALLOWEDVALUES</strong>, <strong>SUGGESTEDVALUES</strong>, and <strong>PROHIBITEDVALUES</strong> elements. You can define a global list within a work item definition, a global list definition, or a global workflow. </p></td></tr><tr><td data-th="Element"><p><strong>LISTITEM</strong></p></td><td data-th="Description"><p>Defines a valid list value.</p>
<div id="code-snippet-23" class="codeSnippetContainer" xmlns="">
    <div class="codeSnippetContainerTabs">
        
    </div>
    <div class="codeSnippetContainerCodeContainer">
        <div class="codeSnippetToolBar">
            <div class="codeSnippetToolBarText">
                <a name="CodeSnippetCopyLink" style="display: none;" title="Copy to clipboard." href="javascript:if (window.epx.codeSnippet)window.epx.codeSnippet.copyCode('CodeSnippetContainerCode_81c46e63-4d99-4274-99f1-b1b64ccd2626');" ms.cmptyp="CodeSnippet">Copy</a>
            </div>
        </div>
        <div id="CodeSnippetContainerCode_81c46e63-4d99-4274-99f1-b1b64ccd2626" class="codeSnippetContainerCode" dir="ltr">
            <div style="color:Black;"><pre>
&lt;LISTITEM value="listName" /&gt;
</pre></div>
            
        </div>
    </div>
</div>
<p><strong>LISTITEM</strong> is a required child element of <strong>GLOBALLIST</strong> and an optional child element of the <strong>ALLOWEDVALUES</strong>, <strong>SUGGESTEDVALUES</strong>, and <strong>PROHIBITEDVALUES</strong> elements.</p></td></tr>
</tbody> 
</table>

<a name="Attributes">  
##  </a> Attributes specified by FIELD child elements  
 You can qualify most **FIELD** rules to apply or not apply to a set of groups or users by including the `for` or `not` attributes. For more information, see [Apply a field rule](apply-rule-work-item-field.md).  
  
|Attribute|Syntax|Description|  
|---------------|------------|-----------------|  
|`expanditems`|expanditems="true &#124; false"|Optional. Specifies whether a group that the **LISTITEM** element  identifies should be expanded to include subordinate groups in the list. The default value of this attribute is `true`.|  
|`filteritems`|filteritems="*excludegroups*"|Optional. Specifies that only the members of groups, and not group names, are included in the list. The only allowed value for this attribute is `excludegroups`.|  
|`for`|for="*userGroupName*"|Optional. Specifies the name of a user or group in Team Foundation to whom the rule applies. Valid values consist of a string of text that contains between 1 and 255 characters.|  
|`not`|not="*userGroupName*"|Optional. Specifies the name of a user or group in Team Foundation to whom the rule does not apply. Valid values consist of a string of text that contains between 1 and 255 characters.|  
|`from`|from="value &#124; field &#124; clock &#124; currentuser"|Required. Specifies the source of the value from which to copy a value or specify a default value. The following values are valid:<br /><br /> -                      `clock`:  Copies the current date and time from the system clock to DateTime fields. No additional attributes are required. For **COPY** and **DEFAULT** rules, this value comes from the local computer clock time. For **SERVERDEFAULT**, the value comes from the server clock when a user saves the work item.<br /><br /> -                      `currentuser`:  Copies the name of the user who is currently logged on. Use the short username of the current user as the value. No additional attributes are required. Used for string fields.<br /><br /> -                      `field`:  Copies the value of the `field` attribute that you specify. Requires a `field="abc"` attribute. By default, if the specified "from" field is empty, nothing is performed. The `field` attribute is used only for \<COPY> and \<DEFAULT> rules.<br /><br /> -                      `value`: Copies the value of the `value` attribute that you specify. Use the value of a string constant that you specify. Requires a `value="abc"` attribute. `value` is used only for \<COPY> and \<DEFAULT> rules.<br /><br /> If you specify "value" or "field," you must also include the value or field attribute, respectively.|  
|`field`|field="*fieldReferenceName*"|Optional. Specifies the name of the field whose value is to be copied into the field when `field` is specified for the `from` attribute.|  
|`pattern`|pattern="*patternValue*"|Required. Enforces basic pattern matching for strings only. *patternValue* is a string that consists of between 1 and 255 characters, inclusive. That string must not contain a backslash character (\\). Each character in the string is interpreted as a literal, unless it is one of the following six metacharacters:<br /><br /> - "A" or "a" represent a single alphabetical character.<br /><br /> - "N" or "n" represent a single numeric character.<br /><br /> - "X" or "x" represent a single alphanumeric character.<br /><br /> Pattern value: ^[^\\\\]*$<br /><br /> For example, `pattern="xxxxx.nn.nn"` matches any five alphanumeric characters, then a period, then two numeric characters, then a period, then two more numeric characters.|  
|`value`|value="*valueToCopy*"|Optional. Specifies the value to be copied into the field when `value` is specified for the `from` attribute.|  
  
## Related notes 
-  [Define and modify work item fields](define-modify-work-item-fields.md)   
-  [Change the workflow](change-workflow-wit.md)
-  [Customize your work tracking experience](../customize/customize-work.md)  