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


Rules defined for work item types consist of default system&mdash;auto-generated&mdash;rules and custom rules. 



Work Item Rules do not exist as a single collection. The rules are actually dynamically generated and merged from different data sources. The merge logic is a simple one, deduping identical rules, but not trimming conflicting rules. The dedupe logic is not so smart. Two rules will be considered identical for dedupe if and only if their conditions share the same order. This is usually not an important detail as in almost all cases, having duplicate rules is harmless.


## Inherited process vs On-premises XML process rule mapping

---
:::row:::
   :::column span="1.5":::
      **Inherited rule action**
   :::column-end:::
   :::column span="":::
      **XML element**
   :::column-end:::
   :::column span="2.5":::
      **Description**
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Specify in Edit field dialog, Definition tab for a picklist field  
   :::column-end:::
   :::column span="":::
      ALLOWEDVALUES
   :::column-end:::
   :::column span="2.5":::
      Defines a list of allowed values for the field. Allowed values are values that are available for selection in a field list on work item forms and in the query builder. You must select from one of these values.
---
:::row:::
   :::column span="1.5":::
      Not supported
   :::column-end:::
   :::column span="":::
      ALLOWEXISTINGVALUE
   :::column-end:::
   :::column span="2.5":::
      Defines the field to allow existing values. This element allows the field values that already exist to be used, even if they are not valid. All new field values must be valid.
---
:::row:::
   :::column span="1.5":::
       Not supported
   :::column-end:::
   :::column span="":::
      CANNOTLOSEVALUE
   :::column-end:::
   :::column span="2.5":::
      Defines the field as cannot lose value. This element keeps the current field value and it cannot be cleared or made empty.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       Copy the value from...
       Set the value of .... field to xxx
   :::column-end:::
   :::column span="":::
      COPY
   :::column-end:::
   :::column span="2.5":::
      Specifies another field that contains a value to be copied into the current field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Specify in Edit field dialog, Options tab
   :::column-end:::
   :::column span="":::
      DEFAULT
   :::column-end:::
   :::column span="2.5":::
      Defines a default value for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Clear the value of... 
   :::column-end:::
   :::column span="":::
      EMPTY
   :::column-end:::
   :::column span="2.5":::
      Defines the field as empty.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       Not supported
   :::column-end:::
   :::column span="":::
      FROZEN
   :::column-end:::
   :::column span="2.5":::
      Defines the field as frozen. A frozen field cannot be changed to any non-empty value after changes are committed. However, you can manually clear the field, save the work item, and then specify a different value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Not supported
   :::column-end:::
   :::column span="":::
      MATCH
   :::column-end:::
   :::column span="2.5":::
      Defines a pattern for the field that the field value must match.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Not supported
   :::column-end:::
   :::column span="":::
      NOTSAMEAS
   :::column-end:::
   :::column span="2.5":::
      Specifies another field, the value of which cannot be identical to the value of the current field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Not supported
   :::column-end:::
   :::column span="":::
      PROHIBITEDVALUES
   :::column-end:::
   :::column span="2.5":::
      Defines a list of prohibited values for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Default: Specify in Edit field dialog, Options tab
      Conditional based on group membership: Make read-only
   :::column-end:::
   :::column span="":::
      READONLY
   :::column-end:::
   :::column span="2.5":::
      Defines the field as read-only. 
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Default: Specify in Edit field dialog, Options tab
      Conditional based on group membership: Make required
   :::column-end:::
   :::column span="":::
      REQUIRED
   :::column-end:::
   :::column span="2.5":::
      Specifies the field is required.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       
   :::column-end:::
   :::column span="":::
      SERVERDEFAULT
   :::column-end:::
   :::column span="2.5":::
      Specifies a server component that will provide the value for the field.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
      Not supported
      Check the **Allow users to enter their own values** checkbox within the Edit field dialog, Options tab to allow users to specify their own entries
   :::column-end:::
   :::column span="":::
      SUGGESTEDVALUES
   :::column-end:::
   :::column span="2.5":::
      Defines a list of suggested values for the field. Suggested values are values that are available for selection in a field list on work item forms and in the query builder. You can enter other values additionally to the ones in the list.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       Not supported
   :::column-end:::
   :::column span="":::
      VALIDUSER
   :::column-end:::
   :::column span="2.5":::
      Specifies that the list of allowed values must consist only of valid users of the system.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       
   :::column-end:::
   :::column span="":::
      WHEN
   :::column-end:::
   :::column span="2.5":::
      Specifies one or more rules to apply to the current field when another field has a specific value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       
   :::column-end:::
   :::column span="":::
      WHENCHANGED
   :::column-end:::
   :::column span="2.5":::
      Applies one or more rules to the current field when a specific field's value is changed.

   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       
   :::column-end:::
   :::column span="":::
      WHENNOT
   :::column-end:::
   :::column span="2.5":::
      Applies one or more rules to the current field when another field does not have a specific value.
   :::column-end:::
:::row-end:::  
---
:::row:::
   :::column span="1.5":::
       
   :::column-end:::
   :::column span="1":::
      WHENNOTCHANGED
   :::column-end:::
   :::column span="2.5":::
      Optional. Applies one or more rules to the current field when a specific field's value is not changed.
   :::column-end:::
:::row-end:::  
---
 

WHEN				The value of ... (equals)
					A value is defined for ...
					A change was made to the value of...
WHENCHANGED			The value of ... (not equals)
WHENNOT				The value of ... (not equals)
					No value is defined for ...
WHENNOTCHANGED

						Hide the field... 

 


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


