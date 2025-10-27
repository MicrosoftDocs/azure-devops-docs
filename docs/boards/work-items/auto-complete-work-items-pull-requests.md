---
title: Automate work item completion with pull requests
titleSuffix: Azure Boards   
description: Learn how to automatically complete work items and transition their workflow states when you merge pull requests in Azure Boards and Azure DevOps.  
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.custom: cross-service
ms.author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/27/2025
---

# Autocomplete work items with pull requests 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you link a work item to a pull request (PR), you can automatically complete those work items when you complete the PR. Alternatively, you can specify the workflow state to transition the work item to upon merging the PR. 

This automation streamlines your development workflow by ensuring that work items reflect the current state of your code changes without manual intervention.

For more information, see [Create, view, and manage pull requests](../../repos/git/pull-requests.md).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - To view, follow, and edit work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). <br> - To add tags to work items: Project-level **Create new tag definition** permission set to **Allow**. By default, the **Contributors** group has this permission. |
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md). <br> - To add new tags to work items or to view or follow pull requests: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - To view or follow work items: At least **Stakeholder** access. For more information, see [About access levels](../../organizations/security/access-levels.md). <br> - All project members, including those in the **Readers** group, can send emails containing work items. |
|**GitHub permissions**| **Contributor** to the GitHub repository.|

## Autocomplete work items  

To enable automatic completion of linked work items when you merge a pull request, select the checkbox **Complete linked work items after merging**, as shown in the following image. The system saves your selection as the default for future PRs. 

::: moniker range=">= azure-devops-2020"
:::image type="content" source="media/automate-state-transition/complete-pull-request-dialog.png" alt-text="Complete pull request dialog, Complete linked work items after merging":::
::: moniker-end 

### When automatic completion doesn't occur

The system doesn't automatically update the work item state to **Done**, **Closed**, or **Completed** categories for the work item type (WIT) in the following circumstances: 

- **Work item already in Resolved state**: The work item, whose WIT uses the Inheritance process model, is already in the **Resolved** state. In this instance, the system doesn't update the state. For example, if a bug derived from the Agile process is in a **Resolved** state, the system doesn't transition it to **Closed**.   
- **Work item already completed**: The work item is already in the **Completed** state category. No further transition is required. 
- **Workflow rules prevent transition**: The WIT includes workflow field rules that prevent the work item from advancing to the next state. For instance, a rule might require that you define another field when closing the work item. 
- **On-premises workflow configuration**: For on-premises deployments and Azure Boards Hosted process model, you must modify the workflow to specify actions (**ACTION** element) to take place when transitioning the workflow. For more information, see [Change the workflow for a WIT, Specify Actions](../../reference/xml/change-workflow-wit.md#Actions).

For more information about customizing workflows, see [Customize your work tracking experience](../../reference/customize-work.md). 

::: moniker range=">= azure-devops-2020"

## Specify the workflow state of linked work items 

You can transition a work item to a specific workflow state by entering the information in the pull request description. Prefix the **#ID** with a valid workflow state for the mentioned work item. This approach gives you precise control over how work items transition when you merge code changes.
::: moniker-end 

::: moniker range="azure-devops-2020"
> [!NOTE]   
> This feature requires Azure DevOps Server 2020.1 update or later version.
::: moniker-end 

::: moniker range=">= azure-devops-2020"

The following example shows user stories that transition—one to the **Resolved** state and the other to the **Review** state. The system also marks two tasks as **Done**. 

:::image type="content" source="media/automate-state-transition/pull-request-set-workflow-state-to-transition-to.png" alt-text="Screenshot of pull request, set workflow state to transition #ID work items.":::

### Syntax for state transitions

Use the following syntax patterns in your pull request description to specify state transitions:

- `Resolves #123` - Transitions work item 123 to the Resolved state
- `Fixes #456` - Transitions work item 456 to the appropriate completed state
- `Closes #789` - Transitions work item 789 to the Closed state
- `Review #101` - Transitions work item 101 to the Review state

The system recognizes common keywords and applies the appropriate state transition based on your work item type's workflow configuration.

::: moniker-end 

## Disable automatic completion of associated work items

To disable the automatic completion of associated work items when users complete a pull request, follow these steps:

1. Navigate to **Project settings** > **Repositories** > select your repository.
2. In the **Settings** tab, turn **Off** the toggle for **Commit mention work item resolution**.

When you disable this setting, the system doesn't allow mentions in commit comments to close work items (for example, "Fixes #123"). This setting affects both pull request completion and direct commit mentions.

## Best practices

Consider these best practices when using automatic work item completion:

- **Review work item states**: Before enabling automatic completion, ensure your work item states align with your team's workflow expectations.
- **Use specific state transitions**: When you need precise control, use the state transition syntax in pull request descriptions rather than relying on default completion behavior.
- **Test workflow rules**: Verify that any custom workflow rules don't prevent automatic state transitions.
- **Communicate with your team**: Ensure all team members understand how automatic completion affects work item tracking.

## Troubleshooting

If work items don't automatically complete as expected:

1. **Check permissions**: Verify you have the necessary permissions to edit work items.
2. **Review workflow rules**: Ensure no workflow field rules prevent the state transition.
3. **Validate work item links**: Confirm the work items are properly linked to the pull request.
4. **Check current state**: Verify the work item isn't already in a completed state.
5. **Review repository settings**: Ensure automatic completion is enabled in repository settings.

## Related content

- [Create, view, and manage pull requests](../../repos/git/pull-requests.md)  
- [Customize the workflow (Inheritance process)](../../organizations/settings/work/customize-process-workflow.md)  
- [Customize your work tracking experience](../../reference/customize-work.md)
- [How workflow states and state categories are used in Backlogs and Boards](workflow-and-state-categories.md)
- [Link work items to other objects](../backlogs/add-link.md)
