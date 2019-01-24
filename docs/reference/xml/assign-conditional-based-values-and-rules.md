---
title: Assign conditional-based values and rules
titleSuffix: Azure DevOps & TFS
description: Syntax and usage for WHEN, WHENNOT, WHENCHANGED, and WHENNOTCHANGED elements that define conditional rules and values
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 7975a8a3-6fa1-43c1-b32b-0bbb9bb336af
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 01/20/2017
---

# Assign conditional-based values and rules

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can define rules that are run conditionally by using the **WHEN**, **WHENNOT**, **WHENCHANGED**, and **WHENNOTCHANGED** elements. You use these rules to define which elements are run when the defined clause is `True`. You can define conditions that are based on what value is assigned to a specific field or whether a user modifies a specific field. For example, you can create a dependent pick list to provide detailed security or custom behavior.  
  
Field conditions are additional elements that you list inside a `FIELD` (Definition) element or the `FIELD` (Workflow) element. For more information about these elements, see [FIELD (Definition) element reference](field-definition-element-reference.md) and [FIELD (Workflow)](field-workflow-element-reference.md).  
  
 The following code is a simple example of the **WHEN** clause:  
  

> [!div class="tabbedCodeSnippets"]
```XML
<FIELD  . . .  > 
<WHEN field="referenceName" value="yyy">  
</FIELD>
```  
  
 This clause means that anything within this FIELD element is applicable as long as the field `refname` has the value "yyy". The field must be a valid field reference name. For more information, see [Naming conventions for work item tracking objects](../../organizations/settings/naming-restrictions.md#ProjectNames).  
  
> [!NOTE]  
>  The value attribute is case-insensitive. Therefore, if the field reference name holds "YYY", matches include the values "yyy" and "YYY".  
  
<a name="Syntax"></a>   
##  Syntax structure for conditional elements  
 The following table describes conditional rules that you can specify as child elements of the `FIELD` (Definition) element or `FIELD` (Workflow) element. These elements accept one or more of the following attributes:  
  
-   `field`: A string that describes the field. Must contain 1 to 255 characters.   
-   `value`: When the specified field has this value, the rules in the `WHEN` and `WHENNOT` elements are applied to the current field.    
  
<table Responsive="true" summary="table">
<tr Responsive="true">
<th scope="col" width="10%"><p>Element</p></th><th scope="col" width="40%"><p>Syntax</p></th><th scope="col"><p>Description</p></th></tr>
<tbody valign="top">
<tr><td data-th="Element"><p><strong>WHEN</strong></p></td><td data-th="Syntax">
<pre><code>
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
</code></pre>
</td><td data-th="Description"><p>Specifies one or more rules to apply to the current field when another field has a specific value. The parent element defines the current field.</p><p>When the specified field has the specified value, the rules in this element are applied to the current field.</p></td></tr><tr><td data-th="Element"><p><strong>WHENNOT</strong></p></td><td data-th="Syntax">
<pre><code>
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

</code></pre>
</td><td data-th="Description"><p>Specifies a condition under which to apply one or more rules to the current field. The rules apply to the current field when the value of another field changes. The parent element defines the current field.</p><p>When the specified field does not contain the specified value, the rules in this element are applied to the current field.</p></td></tr><tr><td data-th="Element"><p><strong>WHENCHANGED</strong></p></td><td data-th="Syntax">
<pre><code>
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
</code></pre>
</td><td data-th="Description"><p>Specifies a condition under which to apply one or more rules to the current field. The rules apply to the current field when the value of another field is changed in a revision to a work item. The parent element defines the current field.</p></td></tr><tr><td data-th="Element"><p><strong>WHENNOTCHANGED</strong></p></td><td data-th="Syntax">
<pre><code>
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

</code></pre>
</td><td data-th="Description"><p>Specifies a condition under which to apply one or more rules to the current field. The rules apply to the current field when the value of another field is not changed in a revision to a work item. The parent element defines the current field.</p></td></tr></table>

  
 The following table describes how each optional, conditional-based rule is applied to the parent field when the conditional clause that you specify by using a **WHEN**, **WHENNOT**, **WHENCHANGED**, or **WHENNOTCHANGED** element is true. For more information, see [Apply a field rule](apply-rule-work-item-field.md).  
  
|Element|Description|  
|-------------|-----------------|  
|[ALLOWEDVALUES](define-pick-lists.md)|The parent field must have a value that comes from the specified list of values.|  
|[ALLOWEXISTINGVALUE](define-pick-lists.md)|The value of the parent field that already exists will be allowed, even if it violates other rules. This element is not applicable if the value of the parent field is changed.|  
|[CANNOTLOSEVALUE](apply-rule-work-item-field.md)|Users can change the value of the parent field to NULL, but they cannot change it to any other value.|  
|[COPY](define-default-copy-value-field.md)|The value of a third field is automatically copied into the parent field. You specify the third field in the **COPY** element.|  
|[DEFAULT](define-default-copy-value-field.md)|This element specifies the default value of the parent field.|  
|[EMPTY](apply-rule-work-item-field.md)|The parent field must not contain a value.|  
|[FROZEN](apply-rule-work-item-field.md)|The parent field is frozen. When a field is frozen, you can change its value to NULL, but you cannot change it to any other value.|  
|[MATCH](apply-pattern-matching-to-string-field.md)|The value of the parent field must match the pattern that you specify.|  
|[NOTSAMEAS](apply-rule-work-item-field.md)|The value of the parent field cannot match the value of a third field. You specify the third field in the **NOTSAMEAS** element.|  
|[PROHIBITEDVALUES](define-pick-lists.md)|The parent field cannot contain any values in the enumerated list.|  
|[READONLY](apply-rule-work-item-field.md)|The parent field is read-only.|  
|[REQUIRED](apply-rule-work-item-field.md)|The parent field must contain a value that is not NULL.|  
|[SERVERDEFAULT](define-default-copy-value-field.md)|The parent field takes its value from the specified server component. The valid server components are **clock**, which is the time when the work item is updated, and **currentuser**, which is the identity of the user who updated the work item.|  
|[SUGGESTEDVALUES](define-pick-lists.md)|The enumerated list contains suggested values for the parent field.|  
|[VALIDUSER](apply-rule-work-item-field.md)|Only the users whom you specify can modify the parent field.|  
  
 
<a name="DependentRequired"></a>   
##  Define a dependent required field  
 You can specify that a field is required only when another field contains a specific value. In the following example, when a customer reports a bug, a customer severity must be specified. If the bug was not reported by a customer, a customer severity is not required.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FIELD refname="MyCorp.Severity" name="Customer Severity" type="String">  
       <ALLOWEDVALUES>  
           <LISTITEM value="Blocking" />  
           <LISTITEM value="Major" />  
           <LISTITEM value="Minor" />  
       </ALLOWEDVALUES>  
       <WHEN field="MyCorp.CustomerReported" value="true">  
           <REQUIRED />  
       </WHEN>  
</FIELD>  
```  
<a name="DependentPickList"></a> 

##  Define a conditional pick list  
 The following example demonstrates a conditional pick list in which the allowed values for the Problem Type field are limited, based on whether the value of the ProblemCharacteristic field is set to Documentation.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FIELD refname="MyCorp.ProblemType" name="Problem Type" type="String">  
       <WHEN field="MyCorp.ProblemCharacteristic" value="Documentation">  
           <ALLOWEDVALUES>  
               <LISTITEM value="Spelling Error" />  
               <LISTITEM value="Bad Format" />  
               <LISTITEM value="Missing Info" />  
           </ALLOWEDVALUES>  
       </WHEN>  
</FIELD>  
```  

<a name="WhenChanged"></a>  
##  Define a field when the user changes another field (WHENCHANGED)  
 In the following example, when a user changes the value of the MyCorp.State field, the MyCorp.StateDate field is set to the current date and time, as the server clock shows.  

> [!div class="tabbedCodeSnippets"]
```XML
<FIELD refname="MyCorp.StateDate" name="Date Of Last State Change" type="DateTime">  
       <WHENCHANGED field="MyCorp.State">  
           <COPY from="clock" />  
       </WHENCHANGED>  
</FIELD>   
```  
  
 In the following example, when a user changes the value of the MyCorp.State field, the value of the MyCorp.Status field is cleared.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<!-- Clear the status field whenever someone changes the state -->  
<FIELD refname="MyCorp.Status" name="Status" type="String">  
       <WHENCHANGED field="MyCorp.State">  
           <COPY from="value" value="">  
       </WHENCHANGED>  
</FIELD>  
```  
 <a name="WhenNotChanged"></a> 
##   Define a field value based on a user not modifying a field (WHENNOTCHANGED)  
 In the following example, when a user does not change the value of the MyCorp.State field, the MyCorp.StateDate field becomes read-only.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FIELD refname="MyCorp.StateDate" name="Date Of Last State Change" type="DateTime">  
<!-- Make the StateDate field read-only when the State field is not changed -->  
       <WHENNOTCHANGED field="MyCorp.State">  
           <READONLY />  
       </WHENNOTCHANGED>  
</FIELD>  
```  
  
## Related articles 
-  [Apply a field rule](apply-rule-work-item-field.md)   
