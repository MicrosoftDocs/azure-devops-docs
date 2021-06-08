---
title: Sample rule definitions
titleSuffix: Azure DevOps 
description: Examples of rule definitions for inherited and XML processes 
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
monikerRange: "<= azure-devops"
ms.topic: example-scenario
ms.date: 06/07/2021


#Customer intent: As a process designer, I need some examples that illustrate how to define rules, so I can add the right rules to support my business processes.
---

# Sample rule scenarios 

Intro

Please consider to include an example of a customized workflow with restricted state transitions.
Example: show a user story where an "Active" can only move to "Resolved", and "Closed" can not move to any state.


## Restrict state transition from Active to New 
 


::: moniker range=">= azure-devops-2020"

## Hide or restrict modification of a field based on a user or group 

When you select the `Current user is a member of group...` or `Current user is not a member of group...`, you can hide a field, make a field read-only, or make a field required. 

For example, the following condition indicates that the Justification field is hidden for members who don't belong to the Fabrikam Fiber\Voice group.  

:::image type="content" source="media/rules/rule-hide-justification-field.png" alt-text="Custom rule, Current user is not a member of a group, Hide Justification field":::


[!INCLUDE [temp](../../../boards/includes/note-work-item-caching-rules-simple.md)]

::: moniker-end


<a id="restrict-modifications-wits" />
 
## Restrict modification of select fields based on a user or group 

  
You can customize work item types to restrict who can modify a specific field for a work item type. You restrict modification by adding a custom rule to the work item type.


::: moniker range="azure-devops-2019"
> [!NOTE]
> For Azure DevOps Server 2019 and earlier versions, you can only restrict modification of work items based on a user or group with the On-premises XML process model. 
::: moniker-end


# [Inheritance process](#tab/inheritance)

Using one of the following two conditions, you can make select fields required for a user of a security group or who are not a member of a security group. 

- `current user is a member of a group...`
- `current user is not a member of a group...`

> [!TIP]    
> To avoid rule evaluation issues that may arise, specify Azure DevOps security groups and not Azure Active Directory or Active Directory security groups. To learn more, see [Default rules and the rule engine](rule-reference.md).

For example, you can make the **Title** or the **State** fields **Read-only** for select users or groups. 

For example, the **Priority** field, for the User Story work item type, becomes read-only for members of the Fabrikam Fiber\Voice group. When a user of this group opens a User Story, they are unable to change the value on the Priority field.

:::image type="content" source="/azure/devops/organizations/settings/work/media/rules/rule-priority-field-read-only-for-not.png" alt-text="Custom rule, Current user is not a member of a group, make Priority field read-only":::
 


<a id="restrict-modification-closed-wi" />


# [On-premises XML process](#tab/on-premises)

For the [On-premises XML process model](../../reference/on-premises-xml-process-model.md), you can customize work item types to support these restriction requests: 
- Restrict who can create or modify a work item 
- Restrict who can create specific work item types, such as Epics or Features 

For example, you can restrict modification of work items by adding a rule to the work item type, usually within the **WORKFLOW** section. To learn more, see [Rules and rule evaluation, User or group membership rule restrictions](../settings/work/rule-reference.md#apply-ignore). 

You  restrict access to work tracking objects in one of two ways:
- [Set a condition field rule](../settings/work/rule-reference.md), [a condition-based field rule](../../reference/xml/assign-conditional-based-values-and-rules.md) or a combination of the two that applies to a group. You can restrict changes from being made to a field by specifying a qualifying rule and making it apply for a specific group. Conditional rules can include **CANNOTLOSEVALUE**, **EMPTY**, **FROZEN**, **NOTSAMEAS**, **READONLY**, and **REQUIRED** elements. 
- By [adding WITs to the Hidden Categories group](../../reference/xml/use-categories-to-group-work-item-types.md), you can prevent the majority of project contributors from creating them. You [can create a hyperlink to a template](../../boards/backlogs/work-item-template.md) that opens the work item form and share that link with those team members who you do want to create them. 

---

<a id="restrict-modifications-wits" /> 


## Restrict modification of closed work items

Depending on your business processes, you may want to prevent users from continuing to modify or update work items that have been closed or completed. You can add rules to work item types to prevent users from re-opening closed work items.

# [Inheritance process](#tab/inheritance)

For the Inherited process, you can add a rule that restricts state transition. For example, the following rule restricts transitioning from closed to the other two States, New and Active. 


> [!NOTE]  
> The `A work item state moved from ...`  condition is available for Azure DevOps Server 2020 and later versions. 

:::image type="content" source="/azure/devops/organizations/settings/work/media/rules/rule-no-open-after-close.png" alt-text="Custom rule, Current user is not a member of a group, disallow transitions to New or Active state from Closed":::

> [!NOTE]   
> Depending on the rule action you specify, either the **Save** button on the work item form may be disabled, or an error message displays when a restricted user attempts to modify the work item. 
 

# [On-premises XML process](#tab/on-premises)

Depending on your business processes, you may want to prevent users from continuing to modify or update work items that have been closed or completed. You can add rules to work item types to prevent users from re-opening closed work items. 

For on-premises deployments, you can add rules to a work item type to prevent re-opening after a work item has been closed. For example, the following workflow transition rules allow Testers to reopen a work item, but not members of the Developers group. 

```
<TRANSITION from="Closed" to="New"  
   for="[Project]\Testers"  
   not="[Project]\Developers">  
   . . .  
</TRANSITION>  
<TRANSITION from="Closed" to="Active"  
   for="[Project]\Testers"  
   not="[Project]\Developers">  
   . . .  
</TRANSITION>  
```


---


## Related articles

- [Rules and rule evaluation](../settings/work/rule-reference.md)
  