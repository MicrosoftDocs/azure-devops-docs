---
title: Add a Custom Rule to a Work Item Type
titleSuffix: Azure DevOps Services
description: Learn how to add a custom rule to a work item type defined for an inherited process and project in Azure Boards.
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: 17A6AF2C-81E9-4717-971E-2621613AEB31
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.topic: how-to
ms.date: 08/20/2025
#customer intent:  As a team leader, I want to know how to add rules to work items in Azure Boards.
---

# Add a rule to a work item type (Inheritance process)

[!INCLUDE [version-gt-eq-2019](../../../includes/version-gt-eq-2019.md)]

Custom rules provide support for several business use cases. You can go beyond setting a default value for a field or make it required. Rules allow you to clear the value of a field, copy a value into a field, and apply values based on dependencies between different fields' values. 

[!INCLUDE [temp](../includes/note-on-prem-link.md)]

With a custom rule, you can define actions based on specific conditions. For example, you can apply a rule to support these types of scenarios:

- When a value is defined for Priority, make Risk a required field.
- When a change is made to the value of Release, clear the value of Milestone.
- When a change was made to the value of Remaining Work, make Completed Work a required field.
- When the value of Approved is True, make Approved By a required field.
- When a user story is created, make the following fields required: Priority, Risk, and Effort.
- When current user is a member of Project Administrators, make Priority required.
- When current user isn't a member of Project Administrators, hide the Priority field.

> [!NOTE]  
> You make a field required and specify a field default through the [**Options** tab](customize-process-field.md#options) for the field.

Before you define a custom rule, review [Inherited process rule composition](rule-reference.md#ip-rule-composition). For examples that illustrate common scenarios for applying rules, see [Sample custom rule scenarios](rule-samples.md). 

## Prerequisites

[!INCLUDE [temp](../includes/process-prerequisites.md)]

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]

[!INCLUDE [temp](../includes/automatic-update-project.md)]

## Add a custom rule

Add fields to a selected work item type.

1. Select the work item type (WIT) to which you want to add a rule, choose **Rules**, and then choose **New rule**.

    :::image type="content" source="media/rules/custom-rule-create-rule.png" alt-text="Screenshot shows the My Agile Process user story with the Rules tab open ready to create a rule.":::

    If you can't fill out the New work item rule dialog, you don't have the necessary permissions to edit the process. To learn more, see [Customize an inherited process](../../../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).

1. Name the rule and select the conditions and actions.

    > [!TIP]  
    > Specify a name that builds off the fields you're acting on, or the conditions you're setting.

    This example specifies that the **Acceptance Criteria** field is required when the **State** changes to **Active** and it's currently empty.

    :::image type="content" source="media/process/custom-rule-create-rule-form.png" alt-text="Screenshot shows the New work rule form where you specify the rule content.":::
  
	The sequence of actions you specify doesn't affect the behavior of the rule itself or its behavior with respect to other rules defined for the same WIT.

1. After you add a custom rule, open a work item. Verify that the rule works as you intended.

<a id="delete-disable"> </a>

## Delete or disable a rule

You can temporarily disable a rule or delete it altogether.

You delete or disable the rule from the actions menu of the rule.

:::image type="content" source="media/process/custom-rule-delete-disable-rule.png" alt-text="Screenshot shows the option to delete or disable a rule.":::  

## Related content

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [Apply rules to workflow states](apply-rules-to-workflow-states.md) 
- [Sample custom rule scenarios](rule-samples.md)  
- [Rules and rule evaluation](rule-reference.md)
- [Customize the web layout](customize-process-form.md)
- [Customize a project using an inherited process](customize-process.md)
- [Work item form caching](troubleshoot-work-item-form-caching-issues.md)  
