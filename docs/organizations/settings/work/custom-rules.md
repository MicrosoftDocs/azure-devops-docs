---
title: Add a custom rule to a work item type
titleSuffix: Azure DevOps Services
description: Add a custom rule to a work item type defined for an inherited process and project
ms.custom: inherited-process
ms.technology: devops-agile
ms.assetid: 17A6AF2C-81E9-4717-971E-2621613AEB31
ms.author: kaelli
author: KathrynEE
monikerRange: ">= azure-devops-2019"
ms.topic: conceptual
ms.date: 07/09/2020
---

# Add a rule to a work item type (Inheritance process)

[!INCLUDE [temp](../../../boards/includes/version-vsts-plus-azdevserver-2019.md)]

Custom rules provide support for a number of business use cases, allowing you to go beyond setting a default value for a field or make it required. Rules allow you to clear the value of a field, copy a value into a field, and apply values based on dependencies between different fields' values.

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

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

Each rule consists of two parts: Conditions and Actions. Conditions define the circumstances which must be met in order for the rule to be applied. Actions define the operations to perform. You can specify a maximum of two conditions and 10 actions per rule, for most rules. All custom rules require all conditions to be met in order to be run. 

> [!NOTE]  
> Currently, only one condition is supported for state-transition rules. If you're applying rules based on State, see [Apply rules to workflow states](apply-rules-to-workflow-states.md). 

As an example, you can make a field required based on the value assigned to the state and another field. For example:
&nbsp;&nbsp;&nbsp;`(Condition) When a work item State is *Active*`
&nbsp;&nbsp;&nbsp;`(Condition) And when the value of *Value Area* = *Business*`  
&nbsp;&nbsp;&nbsp;`(Action) Then make required *Story Points*`


---
:::row:::
   :::column span="2":::
      **Condition**
   :::column-end:::
   :::column span="2":::
      **Supported Actions**
   :::column-end:::
:::row-end:::  
---  
:::row:::  
   :::column span="4":::
      **Set field value or make required or read-only**
   :::column-end:::
:::row-end:::
:::row:::  
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Conditions, work item is created](media/customize-workflow/conditions-basic.png)
   :::column-end:::
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Actions, work item is created](media/customize-workflow/actions-basic.png)
   :::column-end:::
:::row-end:::
---  
::: moniker range=">= azure-devops-2020"
:::row:::  
   :::column span="4":::
      **Restrict a transition based on State**
   :::column-end:::
:::row-end:::
:::row:::  
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Condition, work item is moved](media/customize-workflow/condition-work-item-moved.png)
   :::column-end:::
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Actions, restrict a transaction based on State.](media/customize-workflow/actions-restrict-transition-to-state.png)
:::row-end:::
---  
::: moniker-end
::: moniker range="azure-devops-2020"
:::row:::  
   :::column span="4":::
      **Hide field or make field read-only or required based on State and user or group membership**
   :::column-end:::
:::row-end:::
:::row:::  
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Condition, user group membership](media/customize-workflow/conditions-user-group-membership.png)
   :::column-end:::
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Actions, restrict a transaction based on State and membership.](media/customize-workflow/actions-user-group-membership-2020.png)
   :::column-end:::
:::row-end:::
--- 
::: moniker-end
::: moniker range="azure-devops"
:::row:::  
   :::column span="4":::
      **Based on and user or group membership, set field attribute or restrict a State transition**
   :::column-end:::
:::row-end:::
:::row:::  
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Condition, user group membership](media/customize-workflow/conditions-user-group-membership.png)
   :::column-end:::
   :::column span="2":::
      > [!div class="mx-imgBorder"]  
      > ![Actions, restrict a transaction based on State and membership.](media/customize-workflow/actions-user-group-membership.png)
   :::column-end:::
:::row-end:::
--- 
::: moniker-end




Rules are always enforced, not only when you are interacting with the form but also when interfacing through other tools. For example, setting a field as read-only not only applies the rule on the work item form, but also through the API and Excel Azure DevOps Server Add-in.


[!INCLUDE [temp](../includes/tip-formula-rule.md)]

[!INCLUDE [temp](../includes/process-prerequisites.md)]

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]

[!INCLUDE [temp](../includes/automatic-update-project.md)]

## Add a custom rule

You add fields to a selected work item type.

1.  Select the WIT to which you want to add a rule, choose **Rules**, and then choose **New rule**.

    > [!div class="mx-imgBorder"]  
    > ![Process, WIT, Bug, Layout, New rule](media/rules/custom-rule-create-rule.png)

    If you can't fill out the New work item rule dialog, you don't have the necessary permissions to edit the process. See [Set permissions and access for work tracking, Customize an inherited process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).

1.  Name the rule and select the condition(s) and action(s) from the dropdown menus.

    > [!TIP]  
    > Specify a name that builds off the field(s) you're acting on, or the conditions you're setting.

    Here we define that the **Acceptance Criteria** field is required when the **State** changes to **Active** and it is currently empty.

    <img src="media/process/custom-rule-create-rule-form.png" alt="New rule form" style="border: 1px solid #C3C3C3;" />
  
	The sequence of actions you specify doesn't impact the behavior of the rule itself or its behavior with respect to other rules defined for the same WIT.

1.  Once you've added a custom rule, open a work item and verify that the rule works as you intended.

<a id="delete-disable"> </a>

## Delete or disable a rule

You can temporarily disable a rule or delete it altogether.

You delete or disable the rule from the actions menu of the rule.

![Delete or disable a rule](media/process/custom-rule-delete-disable-rule.png)  

::: moniker range=">= azure-devops-2020"

## Hide or restrict modification of a field based on a user or group 

When you select the `Current user is a member of group...` or `Current user is not a member of group...`, you can hide a field, make a field read-only, or make a field required. 

For example, the following condition indicates that the Justification field is hidden for members who don't belong to the Fabrikam Fiber\Voice group.  

:::image type="content" source="media/rules/rule-hide-justification-field.png" alt-text="Custom rule, Current user is not a member of a group, Hide Justification field":::


[!INCLUDE [temp](../../../boards/includes/note-work-item-caching-rules-simple.md)]

::: moniker-end


<a id="restrict-modifications-wits" />

::: moniker range=">= azure-devops-2020"

## Restrict modification of select fields based on a user or group 
 
::: moniker-end

[!INCLUDE [temp](../../../includes/restrict-modification-fields-for-not.md)]

::: moniker range="azure-devops"

## Restrict modification of closed work items
 
::: moniker-end

[!INCLUDE [temp](../../../includes/restrict-modification-closed-work-items.md)]


## Related articles

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [Apply rules to workflow states](apply-rules-to-workflow-states.md)  
- [Customize the web layout](customize-process-form.md)
- [Customize a project using an inherited process](customize-process.md)
- [Work item form caching](troubleshoot-work-item-form-caching-issues.md)  


<!---






::: moniker range="azure-devops"

> [!div class="mx-tdBreakAll"]  
> |Supported conditions |Supported actions |
> |-------------|----------|  
> |![list of conditions](media/rules/when-condition-2.png) | ![list of actions](media/rules/rule-actions-cloud.png)

::: moniker-end

::: moniker range="azure-devops-2020"

> [!div class="mx-tdBreakAll"]  
> |Supported conditions |Supported actions |
> |-------------|----------|  
> |![list of conditions](media/rules/when-condition-2020.png) | ![list of actions](media/rules/rule-actions-2020.png)

::: moniker-end

::: moniker range="azure-devops-2019"

> [!div class="mx-tdBreakAll"]  
> |Supported conditions |Supported actions |
> |-------------|----------|  
> |![list of conditions](media/rules/when-condition-1.png) | ![list of actions](media/rules/rule-actions-2019.png)

::: moniker-end

--> 