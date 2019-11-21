---
title: Add a custom rule to a work item type
titleSuffix: Azure DevOps Services
description: Add a custom rule to a work item type defined for an inherited process and project
ms-custom: inherited-process
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 17A6AF2C-81E9-4717-971E-2621613AEB31
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: ">= azure-devops-2019"
ms.topic: conceptual
ms.date: 10/14/2019
---

# Add a rule to a work item type (Inheritance process)

[!INCLUDE [temp](../../../boards/_shared/version-vsts-plus-azdevserver-2019.md)]

Custom rules provide support for a number of business use cases, allowing you to go beyond setting a default value for a field or make it required. Rules allow you to clear the value of a field, copy a value into a field, and apply values based on dependencies between different fields' values.

[!INCLUDE [temp](../_shared/note-on-prem-link.md)]

With a custom rule, you can define a number of actions based on specific conditions. For example, you can apply a rule to support these types of scenarios:

- When a value is defined for Priority, then make Risk a required field
- When a change is made to the value of Release, then clear the value of "Milestone"
- When a change was made to the value of Remaining Work, then make Completed Work a required field
- When the value of Approved is True, then make Approved By a required field
- When a user story is created, make the following fields required: Priority, Risk, and Effort
- When current user is a member of "Project Administrators", then make Priority required
- When current user is not a member of "Project Administrators", then hide the Priority field

> [!NOTE]  
> You make a field required and specify a field default through the [**Options** tab for the field](customize-process-field.md#options).

## Rule composition

Each rule consists of two parts: Conditions and Actions. Conditions define the circumstances which must be met in order for the rule to be applied. Actions define the operations to perform. You can specify a maximum of two conditions and 10 actions per rule. All custom rules require all conditions to be met in order to be run.

> [!NOTE]  
> Currently, only 1 condition is supported for state-based rules.

Rules are always enforced, not only when you are interacting with the form but also when interfacing through other tools. For example, setting a field as read-only not only applies the rule on the work item form, but also through the API and Excel based Add-in.

As an example, you can make a field required based on the value assigned to the state and another field. For example:
&nbsp;&nbsp;&nbsp;`(Condition) When a work item State is *Active*`
&nbsp;&nbsp;&nbsp;`(Condition) And when the value of *Value Area* = *Business*`  
&nbsp;&nbsp;&nbsp;`(Action) Then make required *Story Points*`

> [!div class="mx-tdBreakAll"]  
> |Supported conditions |Supported actions |
> |-------------|----------|  
> |![list of conditions](_img/rules/when-condition-2.png) | ![list of actions](_img/rules/rule-actions.png)

> [!NOTE]  
> "When current user is member of group..." and "When current user is not member of group ..." rules are currently only available in the Azure DevOps Service.

[!INCLUDE [temp](../_shared/tip-formula-rule.md)]

[!INCLUDE [temp](../_shared/process-prerequisites.md)]

[!INCLUDE [temp](../_shared/open-process-admin-context-ts.md)]

[!INCLUDE [temp](../_shared/automatic-update-project.md)]

## Add a custom rule

You add fields to a selected work item type.

1.  Select the WIT to which you want to add a rule, choose **Rules**, and then choose **New rule**.

    > [!div class="mx-imgBorder"]  
    > ![Process, WIT, Bug, Layout, New rule](_img/rules/custom-rule-create-rule.png)

    If you can't fill out the New work item rule dialog, you don't have the necessary permissions to edit the process. See [Set permissions and access for work tracking, Customize an inherited process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).

1.  Name the rule and select the condition(s) and action(s) from the dropdown menus.

    > [!TIP]  
    > Specify a name that builds off the field(s) you're acting on, or the conditions you're setting.

    Here we define that the **Acceptance Criteria** field is required when the **State** changes to **Active** and it is currently empty.

    <img src="_img/process/custom-rule-create-rule-form.png" alt="New rule form" style="border: 1px solid #C3C3C3;" />

    > [!TIP]  
    > You can specify the State field by entering System.State. While you'll see a message that indicates it isn't a valid field, if the Save button is active, then you can save the rule.

        	The sequence of actions you specify doesn't impact the behavior of the rule itself or its behavior with respect to other rules defined for the same WIT.

1.  Once you've added a custom rule, open a work item and verify that the rule works as you intended.

<a id="delete-disable"> </a>

## Delete or disable a rule

You can temporarily disable a rule or delete it altogether.

You delete or disable the rule from the actions menu of the rule.

<img src="_img/process/custom-rule-delete-disable-rule.png" alt="Delete or disable a rule" style="border: 1px solid #C3C3C3;" />

## Restrict modification of closed work items

[!INCLUDE [temp](../../../_shared/restrict-modification-closed-wi.md)]

## Restrict modification of work items based on a user or group

You can customize work item types to support these restriction requests:

- Restrict who can create or modify a work item
- Restrict who can create specific work item types, such as Epics or Features
- Restrict who can modify a specific field for a work item type
- Hide field from the form

For example, the following condition indicates that the State field, for the Initiative custom work item type, becomes read-only for members of the Fabrikam Fiber\Voice group. When a user of this group opens a new Initiative, they are unable to save it as the State field can't automatically be set to New.

> [!div class="mx-imgBorder"]  
> ![Custom rule](../../security/_img/grant-restrict/restrict-creating-work-items-inheritance.png)

## Related articles

- [Customize the web layout](customize-process-form.md)
- [Customize a project using an inherited process](customize-process.md)
