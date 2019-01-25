---
title: FIELD (Workflow) element reference 
titleSuffix: TFS
description: Syntax and usage of the FIELD element used to specify rules and conditions on fields within the workflow of a work item type 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 62ee6ea1-bb55-4462-93ff-224ad799812a
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 02/10/2017
---

# FIELD (Workflow) element reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You use the **FIELD** (Workflow) element to specify the rules and conditions that apply to a field during a state change or workflow transition. The rule is applied based on where the **FIELD** (Workflow) element appears under the `STATE`, `TRANSITION`, `DEFAULTREASON`, or `REASON` element of which its parent `FIELDS` element is a child. To learn more, see [Q: Where should I apply a field rule?](https://msdn.microsoft.com/vstudio/ms404857(v=vs.98).aspx)  
  
> [!NOTE]  
> For information about the **FIELD** (Definition) element, which you use to define fields for a type of work item, see [FIELD (Definition) element reference](field-definition-element-reference.md).  
  
## Syntax  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FIELD refname="fieldReferenceName">  
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
   <REQUIRED />  
   <SERVERDEFAULT />  
   <SUGGESTEDVALUES /> . . . </SUGGESTEDVALUES>  
   <VALIDUSER />  
   <WHEN> . . . </WHEN>  
   <WHENNOT> . . . </WHENNOT>  
   <WHENCHANGED> . . . </WHENCHANGED>  
   <WHENNOTCHANGED> . . . </WHENNOTCHANGED>  
<FIELD>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Attributes  
  
|Attribute|Description|  
|---------------|-----------------|  
|`refname`|Required. The reference name of the field where the rules and conditions are applied. The reference name must match the reference name defined in the field definition's `FIELD` (Definition) element. For more information, see [FIELD (Definition) element reference](field-definition-element-reference.md).|  
  
### Child elements  
  
|Element|Description|  
|-------------|-----------------|  
|[ALLOWEDVALUES](define-pick-lists.md)|Optional. Defines a list of allowed values for the field. Allowed values are values that are available for selection in a field list on work item forms and in the query builder. You must select from one of these values.|  
|[ALLOWEXISTINGVALUE](define-pick-lists.md)|Optional. Defines the field to allow existing values. This element allows the field values that already exist to be used, even if they are not valid. All new field values must be valid.|  
|[CANNOTLOSEVALUE](apply-rule-work-item-field.md)|Optional. Defines the field as cannot lose value. This element keeps the current field value and it cannot be cleared or made empty.|  
|[COPY](define-default-copy-value-field.md)|Optional. Specifies another field that contains a value to be copied into the current field.|  
|[DEFAULT](define-default-copy-value-field.md)|Optional. Defines a default value for the field.|  
|[EMPTY](apply-rule-work-item-field.md)|Optional. Defines the field as empty.|  
|[FROZEN](apply-rule-work-item-field.md)|Optional. Defines the field as frozen. A frozen field cannot be changed to any non-empty value after changes are committed. However, you can manually clear the field, save the work item, and then specify a different value.|  
|[MATCH](apply-pattern-matching-to-string-field.md)|Optional. Defines a pattern for the field that the field value must match.|  
|[NOTSAMEAS](apply-rule-work-item-field.md)|Optional. Specifies another field, the value of which cannot be identical to the value of the current field.|  
|[PROHIBITEDVALUES](define-pick-lists.md)|Optional. Defines a list of prohibited values for the field.|  
|[READONLY](apply-rule-work-item-field.md)|Optional. Defines the field as read-only.|  
|[REQUIRED](apply-rule-work-item-field.md)|Optional. Defines the field as required.|  
|[SERVERDEFAULT](define-default-copy-value-field.md)|Optional. Specifies a server component that will provide the value for the field.|  
|[SUGGESTEDVALUES](define-pick-lists.md)|Optional. Defines a list of suggested values for the field. Suggested values are values that are available for selection in a field list on work item forms and in the query builder. You can enter other values additionally to the ones in the list.|  
|[VALIDUSER](apply-rule-work-item-field.md)|Optional. Specifies that the list of allowed values must consist only of valid users of the system.|  
|[WHEN](assign-conditional-based-values-and-rules.md)|Optional. Specifies one or more rules to apply to the current field when another field has a specific value.|  
|[WHENCHANGED](assign-conditional-based-values-and-rules.md)|Optional. Applies one or more rules to the current field when a specific field's value is changed.|  
|[WHENNOT](assign-conditional-based-values-and-rules.md)|Optional. Applies one or more rules to the current field when another field does not have a specific value.|  
|[WHENNOTCHANGED](assign-conditional-based-values-and-rules.md)|Optional. Applies one or more rules to the current field when a specific field's value is not changed.|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[FIELDS](all-workflow-xml-elements-reference.md)|A collection of `FIELD` (Workflow) elements that reference a field that is defined for a type of work item and that specify the rules and conditions that apply to the field. The reference is based on the **STATE**, **TRANSITION**, **DEFAULTREASON**, or **REASON** element of which its parent **FIELDS** element is a child.|  
  
## Remarks  
 You must define at least one child element for the `FIELD` (Workflow) element.  
  
 `FIELD` (Workflow) is a required child element of `FIELDS` (Workflow).  

  
## Related articles   
- [Change the workflow](change-workflow-wit.md)  
- [Customize your work tracking experience](../customize-work.md)  
  
