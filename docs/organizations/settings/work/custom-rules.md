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
ms.date: 06/07/2021
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

Prior to defining a custom rule, review [Rules and rule evaluation, Inherited process rule composition](rule-reference.md#ip-rule-composition). For examples that illustrate common scenarios for applying rules, see [Sample rule scenarios](rule-samples.md). 
 

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


## Related articles

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [Apply rules to workflow states](apply-rules-to-workflow-states.md) 
- [Sample rule scenarios](rule-samples.md)  
- [Rules and rule evaluation](rule-reference.md)
- [Customize the web layout](customize-process-form.md)
- [Customize a project using an inherited process](customize-process.md)
- [Work item form caching](troubleshoot-work-item-form-caching-issues.md)  
