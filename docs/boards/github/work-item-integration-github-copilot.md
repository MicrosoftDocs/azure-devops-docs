---
title: Use GitHub Copilot with Azure Boards
titleSuffix: Azure Boards
description: Learn how to use GitHub Copilot with work items to automatically create pull requests and track coding progress in Azure DevOps.
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ai-usage: ai-assisted
ms.date: 06/17/2026
---

# Use GitHub Copilot with Azure Boards

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Use Azure Boards with GitHub Copilot to move from work item to draft pull request faster. Start Copilot from a work item to create a branch, generate code changes, and open a draft pull request while Azure DevOps tracks progress on the work item.

Use this integration to:
- Start automated coding from work items.
- Track GitHub Copilot progress directly in Azure DevOps.
- Link generated branches and pull requests to work items.
- Monitor when draft pull requests are ready for review.

> [!IMPORTANT]
> This integration requires GitHub repositories and GitHub App authentication. Azure Repos (Azure DevOps Git repositories) aren't supported for GitHub Copilot integration.

## Prerequisites

| Category | Requirements |
|----------|-------------|
| Licensing | Active GitHub Copilot subscription. For pricing, see [GitHub Copilot plans](https://github.com/features/copilot/plans). |
| Repository | GitHub repository (not Azure Repos) with appropriate permissions |
| Authentication | GitHub App authentication configured between Azure DevOps and GitHub (personal access tokens not supported) |
| Permissions | **Contribute** access in Azure DevOps to work items and ability to link artifacts |
| Azure Boards connection | [Connect Azure Boards to GitHub](connect-to-github.md)|

## For team administrators

Use the following checklist to set up this integration for teams:

- Configure GitHub App integration at the organization level. For setup steps, see [Connect Azure Boards to GitHub](connect-to-github.md).
- Ensure each team member has the required access in both systems:
   - Azure DevOps permissions to update work items and link artifacts.
   - GitHub repository access to the target repositories and branches.

## Supported work item types

The GitHub Copilot integration supports work item types in the Requirements and Task categories, including:

- Standard work item types, such as User Story, Product Backlog Item, Requirement, Task, Bug, and Issue.
- Custom work item types you define in your process template.

Custom types are supported when your process maps them to the Requirements or Task categories.

You can use GitHub Copilot with work items from Agile, Scrum, CMMI, and custom process templates in your Azure DevOps project.

## Start GitHub Copilot from work items

1. Open the work item you want to implement by using GitHub Copilot.

1. In the work item form, select the GitHub icon.

   If multiple options are available, the icon appears as a dropdown menu.

   :::image type="content" source="media/github-coding-agent/select-github-copilot-icon.png" alt-text="Screenshot showing highlighted GitHub Copilot icon in work item.":::

1. Select **Create a pull request with GitHub Copilot**.

   :::image type="content" source="media/github-coding-agent/create-a-pull-request-with-github-copilot.png" alt-text="Screenshot showing selected GitHub menu dropdown and option to Start a GitHub pull request.":::

1. Select the target GitHub repository and branch for the pull request.
   
   > [!NOTE]
   > The repository list shows only GitHub repositories connected through GitHub App authentication. Azure Repos aren't supported.

1. (Optional) Add special instructions to guide implementation.

   Example instructions:
   - Create a README with setup instructions.
   - Use async/await patterns for new asynchronous code.
   - Add unit tests for new logic.
   - Follow the repository's existing code style and naming conventions.

1. Select **Create**.

   :::image type="content" source="media/github-coding-agent/create-github-pr-select-repo-branch.png" alt-text="Screenshot shows menu dropdowns for repo and branch, for creating a draft pull request with Copilot.":::

## What happens when you start Copilot

When you start Copilot from a work item, Azure DevOps performs the following actions:

- **Share work item context** with GitHub Copilot: title, large text fields (such as description and acceptance criteria), comments, and a link to the work item.
- **Create a branch and draft pull request** in the selected GitHub repository, then link them to the work item.
- **Update work item status** so you can track in-progress, ready-for-review, and error states.

## Monitor GitHub Copilot progress

### Status indicators

Azure DevOps displays Copilot status directly on your work item with three possible states:

- **In Progress**: Copilot is generating code changes.
- **Ready for Review**: The draft pull request is ready for review.
- **Error**: The coding process failed. Hover over the status for details.

> [!NOTE]
> Expect the Copilot operation to take 5-15 minutes to complete, depending on the complexity of the work item.

### Board card indicators

Work items on your board display GitHub Copilot status directly on the work item card. A GitHub Copilot icon appears on the card and indicates that Copilot is working on or completed work for that item.

:::image type="content" source="media/github-coding-agent/board-card-github-icon-in-progress.png" alt-text="Screenshot showing work item card on board with GitHub Copilot status icon indicating progress.":::

This indicator helps you identify work items with active or completed Copilot operations without opening each item.

### Development section updates

The Development section of your work item automatically shows:
- Branch created by Copilot.
- Draft pull request with real-time status.
- Direct link to review generated code in GitHub.

## Review and merge the pull request

1. Select the pull request link to review Copilot's implementation in GitHub.
1. If you're satisfied with the changes, convert the draft pull request to a regular pull request.

   The work item discussion updates automatically as pull request status changes.

1. Use GitHub's interface to review, comment, and approve the generated code.

1. Merge the pull request in GitHub when you're ready.

   - The merge commit automatically links to your work item.
   - Branch links are removed if you delete the branch.
   - Copilot status indicators are hidden after successful merge.

1. After the pull request merges:
   1. Update your work item state to reflect completion.
   1. Verify that the merge commit appears in the Development section.
   1. Close the work item if the implementation fully addresses the requirements.

For more information, see [What is GitHub Copilot?](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)

## Troubleshoot issues

- **Check error details**: Hover over the error icon to view details.
- **Rerun Copilot**: Select **Rerun Copilot** to try again with the same or updated instructions.
   
   :::image type="content" source="media/github-coding-agent/rerun-copilot.png" alt-text="Screenshot shows selected More actions icon, then Rerun Copilot selection in Development area.":::

- **Manual intervention**: If needed, make manual changes to the generated branch and pull request.

### License issues
- **Problem**: License validation fails.
- **Solution**: Confirm that you have an active GitHub Copilot subscription, then select **Get a license** if prompted.

### Repository access
- **Problem**: Can't see expected repositories.
- **Solution**: 
   - Verify the GitHub App connection between Azure DevOps and GitHub.
   - Confirm that you have access to the target GitHub repositories.
   - Check repository permissions and GitHub App authentication.
   - Confirm that the repository is connected through the correct GitHub App integration.

### Copilot errors
- **Problem**: Copilot encounters errors.
- **Solution**: Review the error details, clarify your instructions, and rerun Copilot.

### Repeated failures after rerun
- **Problem**: Copilot continues to fail after rerunning.
- **Solution**:
   - Check the linked branch and pull request in GitHub for the latest operation state.
   - Confirm that repository and branch permissions still allow Copilot to create branches and pull requests.
   - If the problem continues, contact your project or organization administrator with the work item link and pull request link.

### Cancel an in-progress operation

> [!NOTE]
> After starting a GitHub Copilot operation from a work item, you can't cancel it. The Copilot coding agent runs to completion. To address unwanted results, manage or discard the generated pull request in GitHub.

### Status not updating
- **Problem**: Progress status remains stuck.
- **Solution**: Check GitHub for actual progress because status updates depend on GitHub reporting.

## Best practices

- **Clear work item descriptions**: Provide detailed acceptance criteria and context for better Copilot results.
- **Keep changes simple and concise**: The more complex and verbose your work item description, the harder it is for Copilot to understand. Focus on clear, specific requirements.
- **Specific instructions**: Add implementation guidance when starting Copilot.
- **Regular monitoring**: Check progress periodically, especially for complex work items.
- **Prompt review**: Review and provide feedback on draft pull requests quickly to maintain momentum.
- **Proper work item hygiene**: Update work item states appropriately throughout the process.

## Limitations

Review the following limitations when you use GitHub Copilot with Azure Boards:

- **Dependencies**: Copilot doesn't handle dependencies between work items. Keep each work item self-contained.
- **Data sharing**: GitHub Copilot receives only the work item title, large text fields, comments, and the work item link.
- **Complexity**: Overly complex or verbose work item descriptions can reduce Copilot effectiveness.

## Related content

- [Link work items to development artifacts](../../boards/backlogs/connect-work-items-to-git-dev-ops.md)
- [Configure GitHub integration](../../boards/github/connect-to-github.md)
- [Work with pull requests in Azure Repos](../../repos/git/pull-requests.md)
- [Track work with linking and attachments](../../boards/queries/linking-attachments.md)
