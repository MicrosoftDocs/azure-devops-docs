---
ms.technology: devops-agile
ms.prod: devops
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/09/2020
---




::: moniker range=">= azure-devops-2020"

For the Inheritance process model, you can customize work item types to restrict who can modify a specific field for a work item type. You restrict modification by adding a custom rule to the work item type. 

Using one of the following two conditions, you can make select fields required for a user of a security group or who are not a member of a security group. 

- `current user is a member of a group...`
- `current user is not a member of a group...`


> [!TIP]    
> To avoid rule evaluation issues that may arise, specify Azure DevOps security groups and not Azure Active Directory or Active Directory security groups. To learn more, see [Default rules and the rule engine](/azure/devops/organizations/settings/work/rule-reference).

For example, you can make the Title or the State field Read-only for select users or groups. 

For example, the Priority field, for the User Story work item type, becomes read-only for members of the Fabrikam Fiber\Voice group. When a user of this group opens a User Story, they are unable to change the value on the Priority field.

:::image type="content" source="/azure/devops/organizations/settings/work/media/rules/rule-priority-field-read-only-for-not.png" alt-text="Custom rule, Current user is not a member of a group, make Priority field read-only":::

To learn more, see [Add a rule to a work item type (Inheritance process)](/azure/devops/organizations/settings/work/custom-rules). 

::: moniker-end