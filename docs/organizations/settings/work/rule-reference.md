---
title: Default rule reference
titleSuffix: Azure DevOps 
description: Default rules and the rule engine  
ms.custom: inherited-process
ms.technology: devops-agile
ms.assetid: 17A6AF2C-81E9-4717-971E-2621613AEB31
ms.author: kaelli
author: KathrynEE
monikerRange: ">= azure-devops-2019"
ms.topic: conceptual
ms.date: 07/09/2020
---

# Default rules and the rule engine  

Rules are used to set or restrict value assignments to a work item field. Each rule is defined for a work item type. Within the On-premises XML process models, you specify rules for a field or within the workflow. For the Inherited process model, you specify a rule which consists of a condition plus action. 

 

 You can specify values for a pick list (drop-down menu), set default values, clear entries, or restrict changes. With conditional rules, you can apply rules to a field based on dependencies between different fields' values. You can also restrict who can modify a field or scope a rule to only apply to a group.



Rules defined for work item types consist of default system&mdash;auto-generated&mdash;rules and custom rules. 



Work Item Rules do not exist as a single collection. The rules are actually dynamically generated and merged from different data sources. The merge logic is a simple one, deduping identical rules, but not trimming conflicting rules. The dedupe logic is not so smart. Two rules will be considered identical for dedupe if and only if their conditions share the same order. This is usually not an important detail as in almost all cases, having duplicate rules is harmless.


<a name="system"></a>

## System fields

System fields have System.*Name* reference names, for example **System.Title** and **System.State**. The rule engine restricts setting conditions or actions to system fields except as follows: 

- You can make State and Reason fields read-only. 
- You can apply most rules to the Title, Assigned To, Description, and Changed By fields. 

If you don't see a field listed in the drop-down menu of the rule user interface, this is why. For example, if you try to make **Area Path** (System.AreaPath) read-only based on a condition, the Area Path field isn't available for selection.  Even if you're able to specify a system field, the rule engine may restrict you from saving the rule. 
 

<a id="value-rules" /> 

## Assign value rules

Assign value rules define runtime behavior and constraints, such as specifying default values, clearing fields, requiring fields to be defined, and more. 

All rules are optional. The following table provides a mapping of rules supported by the Inherited process model and those supported by the On-premises XML process model. There isn't a one-to-one mapping. In some cases, the XML element rule is defined within the Edit field dialog and not as a rule. Other elements, such as `FROZEN`, `MATCH`, `NOTSAMEAS`, aren't supported in the Inherited process.  

> [!NOTE]   
> Inherited entries specify conditions and actions to make a complete rule. XML elements don't make those distinctions. In the following table, if the inherited entry refers to the action portion of a rule it is noted in parenthesis (Action). Otherwise, it refers to a condition.  
<br/>  


<a id="clear" /> 

### Clear, set defaults, copy, or match a pattern

These rules support setting defaults, copying values from one field to another, or enforcing a field value to match a prescribed pattern.


For the syntax structure and examples, see [Define a default value or copy a value to a field](define-default-copy-value-field.md).

> [!NOTE]    
>Field rules don't support assigning values that are the sum of two other fields or performing other mathematical calculations.


---
:::row:::
   :::column span="2":::
      **Inherited**
   :::column-end:::
   :::column span="1":::
      **XML element**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
       `Copy the value from...` (Action)
   :::column-end:::
   :::column span="1":::
      `COPY`
   :::column-end:::
   :::column span="3":::
      Specifies another field that contains a value to be copied into the current field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Specify in Edit field dialog, Options tab
   :::column-end:::
   :::column span="1":::
      `DEFAULT`
   :::column-end:::
   :::column span="3":::
      Defines a default value for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      `Clear the value of...` (Action)
   :::column-end:::
   :::column span="1":::
      `EMPTY`
   :::column-end:::
   :::column span="3":::
      Defines the field as empty.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Not supported
   :::column-end:::
   :::column span="1":::
      `MATCH`
   :::column-end:::
   :::column span="3":::
      Defines a pattern for the field that the field value must match.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      `Use the current time to set the value of ...` (Action)  
   :::column-end:::
   :::column span="1":::
      `SERVERDEFAULT`
   :::column-end:::
   :::column span="3":::
      Specifies a server component that will provide the value for the field.
   :::column-end:::
:::row-end:::  
---




<a id="require" /> 

### Require, read-only, and restrict values  

These rules specify restrictions on specifying or changing the value of a field.


---
:::row:::
   :::column span="2":::
      **Inherited**
   :::column-end:::
   :::column span="1":::
      **XML element**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
       Not supported
   :::column-end:::
   :::column span="1":::
      `CANNOTLOSEVALUE`
   :::column-end:::
   :::column span="3":::
      Defines the field as cannot lose value. This element keeps the current field value and it cannot be cleared or made empty.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
       Not supported
   :::column-end:::
   :::column span=".1":::
      `FROZEN`
   :::column-end:::
   :::column span="3":::
      Defines the field as frozen. A frozen field cannot be changed to any non-empty value after changes are committed. However, you can manually clear the field, save the work item, and then specify a different value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Not supported
   :::column-end:::
   :::column span="1":::
      `NOTSAMEAS`
   :::column-end:::
   :::column span="3":::
      Specifies another field, the value of which cannot be identical to the value of the current field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      `Make read-only` (Action)  
      Default: Specify in Edit field dialog, Options tab 
   :::column-end:::
   :::column span="1":::
      `READONLY`
   :::column-end:::
   :::column span="3":::
      Defines the field as read-only. 
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      `Make required` (Action)  
      Default: Specify in Edit field dialog, Options tab 
   :::column-end:::
   :::column span="1":::
      `REQUIRED`
   :::column-end:::
   :::column span="3":::
      Specifies the field is required.
   :::column-end:::
:::row-end:::  
---
 

a id="pick-list" /> 

## Pick list rules

Pick list rules define the values that a user can or can't choose for a String field. Values defined in a pick list appear on a work item form and the query editor. You can combine lists, and expand or contract lists. 


For examples of using pick lists, see [Define pick lists](define-pick-lists.md).

---
:::row:::
   :::column span="2":::
      **Inherited**
   :::column-end:::
   :::column span="1":::
      **XML element**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Specify in Edit field dialog, Definition tab for a picklist field  
   :::column-end:::
   :::column span="1":::
      `ALLOWEDVALUES`
   :::column-end:::
   :::column span="3":::
      Defines a list of allowed values for the field. Allowed values are values that are available for selection in a field list on work item forms and in the query builder. You must select from one of these values.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Not supported
   :::column-end:::
   :::column span="1":::
      `ALLOWEXISTINGVALUE`
   :::column-end:::
   :::column span="3":::
      Defines the field to allow existing values. This element allows the field values that already exist to be used, even if they are not valid. All new field values must be valid.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Not supported
   :::column-end:::
   :::column span="1":::
      `PROHIBITEDVALUES`
   :::column-end:::
   :::column span="3":::
      Defines a list of prohibited values for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Check the **Allow users to enter their own values** checkbox within the Edit field dialog, Options tab to allow users to specify their own entries
   :::column-end:::
   :::column span="1":::
      `SUGGESTEDVALUES`
   :::column-end:::
   :::column span="3":::
      Defines a list of suggested values for the field. Suggested values are values that are available for selection in a field list on work item forms and in the query builder. You can enter other values additionally to the ones in the list.
   :::column-end:::
:::row-end:::  
---


<a id="conditional-rules" />
 

## Conditional rules

Conditional rules specify an action based on the value of a field equaling or not equaling a specific value, or if a change was or wasn't made to the value of a specific field.  

Inherited conditions and XML elements map as indicated in the following table. 
 
---
:::row:::
   :::column span="2":::
      **Inherited**
   :::column-end:::
   :::column span="1":::
      **XML element**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      `The value of ... (equals)`  
   :::column-end:::
   :::column span="1":::
      `WHEN`
   :::column-end:::
   :::column span="3":::
      Specifies one or more rules to apply to the current field when another field has a specific value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
       `A change was made to the value of ...`  
      :::image type="content" source="media/rules/when-when-not-rule-actions.png" alt-text="WHENCHANGED rule actions.":::
   :::column-end:::
   :::column span="1":::
      `WHENCHANGED`
   :::column-end:::
   :::column span="3":::
      Applies one or more rules to the current field when a specific field's value is changed.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
       `The value of ... (not equals)`  
      :::image type="content" source="media/rules/when-when-not-rule-actions.png" alt-text="WHENNOT rule actions.":::
   :::column-end:::
   :::column span="1":::
      `WHENNOT`
   :::column-end:::
   :::column span="3":::
      Applies one or more rules to the current field when another field does not have a specific value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
       `No change was made to the value of ...`  
      :::image type="content" source="media/rules/when-when-not-rule-actions.png" alt-text="No change was made to the value of, WHENNOTCHANGED condition rule actions.":::
   :::column-end:::
   :::column span="1":::
      `WHENNOTCHANGED`
   :::column-end:::
   :::column span="3":::
      Applies one or more rules to the current field when a specific field's value is not changed.
   :::column-end:::
:::row-end:::  
---

 
You can specify multiple conditional rules per field. However, you can only specify a single driving field per conditional rule. You can't nest conditional rules. Supported actions for each process model include those listed in the following table. 

---
:::row:::
   :::column span="2":::
      **Inherited**
   :::column-end:::
   :::column span="1":::
      **XML element**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      `Clear the value of ...`  
      `Copy the value from ...`  
      `Make read-only ...`  
      `Make required ...`  
      `Set the value of ...`  
      `Use the current time to set the value of ...`  
      `Use the current user to set the value of ...`  
   :::column-end:::
   :::column span="1":::
      `EMPTY`  
      `COPY`  
      `READONLY`  
      `REQUIRED`  
          
      `SERVERDEFAULT`  
      `CANNOTLOSEVALUE`
      `CANNOTLOSEVALUE`  
      `FROZEN`  
      `MATCH`  
      `NOTSAMEAS`  
      `VALIDUSER`  
      <br/>For the syntax structure and examples, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).
   :::column-end:::
   :::column span="3":::
      Specifies the action to take on a specific field. Note that the Inherited process doesn't support specification of pick list elements, nor actions that correspond to the following elements: 
      - `CANNOTLOSEVALUE`  
      - `FROZEN`  
      - `MATCH`  
      - `NOTSAMEAS`  
      - `VALIDUSER`  
   :::column-end:::
:::row-end:::  
---   


 
You can specify multiple conditional rules per field. However, you can only specify a single driving field per conditional rule. You can't nest conditional rules. Supported actions for each process model include those listed in the following table. 

---
:::row:::
   :::column span="2":::
      **Inherited**
   :::column-end:::
   :::column span="1":::
      **XML element**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      `Clear the value of ...`  
      `Copy the value from ...`  
      `Make read-only ...`  
      `Make required ...`  
      `Set the value of ...`  
      `Use the current time to set the value of ...`  
      `Use the current user to set the value of ...`  
   :::column-end:::
   :::column span="1":::
      `EMPTY`  
      `COPY`  
      `READONLY`  
      `REQUIRED`  
          
      `SERVERDEFAULT`  
      `CANNOTLOSEVALUE`
      `CANNOTLOSEVALUE`  
      `FROZEN`  
      `MATCH`  
      `NOTSAMEAS`  
      `VALIDUSER`  
      <br/>For the syntax structure and examples, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).
   :::column-end:::
   :::column span="3":::
      Specifies the action to take on a specific field. Note that the Inherited process doesn't support specification of pick list elements, nor actions that correspond to the following elements: 
      - `CANNOTLOSEVALUE`  
      - `FROZEN`  
      - `MATCH`  
      - `NOTSAMEAS`  
      - `VALIDUSER`  
   :::column-end:::
:::row-end:::  
---   


<!--- 

## Supported process rules

All rules are optional. The following table provides a mapping of rules supported by the Inherited process model and those supported by the On-premises XML process model. There isn't a one-to-one mapping. In some cases, the XML element rule is defined within the Edit field dialog and not as a rule. Other elements, such as `FROZEN`, `MATCH`, `NOTSAMEAS`, aren't supported in the Inherited process.  

> [!NOTE]   
> Inherited entries specify conditions and actions to make a complete rule. XML elements don't make those distinctions. In the following table, if the inherited entry refers to the action portion of a rule it is noted in parenthesis (Action). Otherwise, it refers to a condition.  
<br/>  




<!---

## Supported process rules

All rules are optional. The following table provides a mapping of rules supported by the Inherited process model and those supported by the On-premises XML process model. There isn't a one-to-one mapping. In some cases, the XML element rule is defined within the Edit field dialog and not as a rule. Other elements, such as `FROZEN`, `MATCH`, `NOTSAMEAS`, aren't supported in the Inherited process.  

> [!NOTE]   
> Inherited entries specify conditions and actions to make a complete rule. XML elements don't make those distinctions. In the following table, if the inherited entry refers to the action portion of a rule it is noted in parenthesis (Action). Otherwise, it refers to a condition.  
<br/>  

---
:::row:::
   :::column span="2":::
      **Inherited**
   :::column-end:::
   :::column span="1":::
      **XML element**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Specify in Edit field dialog, Definition tab for a picklist field  
   :::column-end:::
   :::column span="1":::
      `ALLOWEDVALUES`
   :::column-end:::
   :::column span="3":::
      Defines a list of allowed values for the field. Allowed values are values that are available for selection in a field list on work item forms and in the query builder. You must select from one of these values.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
      Not supported
   :::column-end:::
   :::column span="1":::
      `ALLOWEXISTINGVALUE`
   :::column-end:::
   :::column span="3":::
      Defines the field to allow existing values. This element allows the field values that already exist to be used, even if they are not valid. All new field values must be valid.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="2":::
       Not supported
   :::column-end:::
   :::column span="1":::
      `CANNOTLOSEVALUE`
   :::column-end:::
   :::column span="3":::
      Defines the field as cannot lose value. This element keeps the current field value and it cannot be cleared or made empty.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       `Copy the value from...` (Action)
   :::column-end:::
   :::column span=".75":::
      `COPY`
   :::column-end:::
   :::column span="1.5":::
      Specifies another field that contains a value to be copied into the current field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Specify in Edit field dialog, Options tab
   :::column-end:::
   :::column span=".75":::
      `DEFAULT`
   :::column-end:::
   :::column span="1.5":::
      Defines a default value for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      `Clear the value of...` (Action)
   :::column-end:::
   :::column span=".75":::
      `EMPTY`
   :::column-end:::
   :::column span="1.5":::
      Defines the field as empty.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       Not supported
   :::column-end:::
   :::column span=".75":::
      `FROZEN`
   :::column-end:::
   :::column span="1.5":::
      Defines the field as frozen. A frozen field cannot be changed to any non-empty value after changes are committed. However, you can manually clear the field, save the work item, and then specify a different value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Not supported
   :::column-end:::
   :::column span=".75":::
      `MATCH`
   :::column-end:::
   :::column span="1.5":::
      Defines a pattern for the field that the field value must match.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Not supported
   :::column-end:::
   :::column span=".75":::
      `NOTSAMEAS`
   :::column-end:::
   :::column span="1.5":::
      Specifies another field, the value of which cannot be identical to the value of the current field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Not supported
   :::column-end:::
   :::column span=".75":::
      `PROHIBITEDVALUES`
   :::column-end:::
   :::column span="1.5":::
      Defines a list of prohibited values for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      `Make read-only` (Action)  
      Default: Specify in Edit field dialog, Options tab 
   :::column-end:::
   :::column span=".75":::
      `READONLY`
   :::column-end:::
   :::column span="1.5":::
      Defines the field as read-only. 
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      `Make required` (Action)  
      Default: Specify in Edit field dialog, Options tab 
   :::column-end:::
   :::column span=".75":::
      `REQUIRED`
   :::column-end:::
   :::column span="1.5":::
      Specifies the field is required.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      `Use the current time to set the value of ...` (Action)  
   :::column-end:::
   :::column span=".75":::
      `SERVERDEFAULT`
   :::column-end:::
   :::column span="1.5":::
      Specifies a server component that will provide the value for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Check the **Allow users to enter their own values** checkbox within the Edit field dialog, Options tab to allow users to specify their own entries
   :::column-end:::
   :::column span=".75":::
      `SUGGESTEDVALUES`
   :::column-end:::
   :::column span="1.5":::
      Defines a list of suggested values for the field. Suggested values are values that are available for selection in a field list on work item forms and in the query builder. You can enter other values additionally to the ones in the list.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       Not supported
   :::column-end:::
   :::column span=".75":::
      `VALIDUSER`
   :::column-end:::
   :::column span="1.5":::
      Specifies that the list of allowed values must consist only of valid users of the system.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      `The value of ... (equals)`  
      :::image type="content" source="media/rules/when-when-not-rule-actions.png" alt-text="WHEN rule actions.":::
   :::column-end:::
   :::column span=".75":::
      `WHEN`
   :::column-end:::
   :::column span="1.5":::
      Specifies one or more rules to apply to the current field when another field has a specific value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       `A change was made to the value of ...`  
      :::image type="content" source="media/rules/when-when-not-rule-actions.png" alt-text="WHENCHANGED rule actions.":::
   :::column-end:::
   :::column span=".75":::
      `WHENCHANGED`
   :::column-end:::
   :::column span="1.5":::
      Applies one or more rules to the current field when a specific field's value is changed.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       `The value of ... (not equals)`  
      :::image type="content" source="media/rules/when-when-not-rule-actions.png" alt-text="WHENNOT rule actions.":::
   :::column-end:::
   :::column span=".75":::
      `WHENNOT`
   :::column-end:::
   :::column span="1.5":::
      Applies one or more rules to the current field when another field does not have a specific value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       `No change was made to the value of ...`  
      :::image type="content" source="media/rules/when-when-not-rule-actions.png" alt-text="No change was made to the value of, WHENNOTCHANGED condition rule actions.":::
   :::column-end:::
   :::column span=".75":::
      `WHENNOTCHANGED`
   :::column-end:::
   :::column span="1.5":::
      Applies one or more rules to the current field when a specific field's value is not changed.
   :::column-end:::
:::row-end:::  
---
  

-->


## Auto-generated rules 

Auto-generated rules are defined to minimize the need to add custom rules for areas that should work in a standard way. 


### State transition rules

Any-to-any state transition rules.  Inherited processes generate the entire set of any-to-any state transition rules dynamically for each custom work item type and custom state added to a workflow. A transition from any state to any state is valid.  

### State transitions and By/Date field rules

"By/Date" fields are automatically set or cleared when you transition a work item from one state to another. These fields correspond to **Created By/Date**, **Activated By/Date**, **Resolved By/Date**, and **Closed By/Date**. The Changed By/Date fields aren't included as they are updated with each work item save and are unrelated to state transitions. 

Default rules and behaviors that govern these fields include: 

1. The *Closed* state is always contained in the *Completed* state category.
1. The *Completed* state category is not configurable, and is associated with one and only one State.  
1. This *Closed* state is always *Closed* for Agile and CMMI processes, and always *Done* for Scrum and Basic processes.
1. Auto-generation of these rules are affected by locale as the rule condition contains the State name, which is localized. The system generates different rules for different locales.
1. Auto-generated rules for these fields are only specified for work item types that include these fields. It is possible for a work item type to not include one or more of these fields.  
1. These rules are needed when a work item type has custom states, or the work item type is a custom work item type.
1. These rules only apply to inherited processes; they are never generated for the Hosted XML or On-premises XML processes. 

Workflow states are associated with state categories to support the workflow on Kanban boards. To learn more, see [How workflow states and state categories are used in Backlogs and Boards](../../../boards/work-items/workflow-and-state-categories.md).
 

### State Change Date rules

These rules are technically a lot simpler than Closed By/Closed Date rules because they are not dependent on any particular state. For any work item type, the same rules will always work. They need to be auto-generated because some OOB work item types do not contain the State Change Date field, so when the user adds this field to a custom work item type, these rules need to be auto-generated as well. The same principles for Closed By/Closed Date rules apply here as well.
 

## Rule restrictions based on user or group membership 

Rules that specify a condition based on the user or group membership of the user modifying a work item is evaluated in one of two ways. When the rule is evaluated, the application needs to determine whether the rule applies to the current user by checking if that user is or isn't a member of the specified group. 
 
- When modifying the work item from the web portal, REST API, or **azure boards** command, a request to the Azure Active Directory or Active Directory is made. No problems occur for this operation.  
- When modifying the work item from Visual Studio, Team Explorer Everywhere, Excel or other custom tool using the WIT Client Object Model, the request to evaluate membership is based on a client cache. The client cache is not aware of Active Directory groups. 

> [!NOTE] 
> Visual Studio 2019 Team Explorer for projects using GIT has been re-written to use REST APIs.

To avoid problems with users updating work items from various clients, specify Azure DevOps security groups instead of Active Directory groups. You can easily create an Azure DevOps security group to correspond to an Active Directory group. To learn how, see [Add a user or group to a security group](../../security/set-project-collection-level-permissions.md#add-a-user-or-group-to-a-security-group). 

 
<!-- add a tip to custom-rules.md --> 

> [!NOTE] 
> The WIT Client OM is deprecated. As of January 1, 2020, it not longer is supported when working against Azure DevOps Services and Azure DevOps Server 2020.  


## Backlog behaviors


