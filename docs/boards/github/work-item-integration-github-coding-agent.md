---
title: Integrate work items with GitHub Copilot
titleSuffix: Azure Boards
description: Learn how to delegate work items to GitHub Copilot to automatically create pull requests and track coding progress in Azure DevOps.
ms.service: azure-devops-boards
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 11/14/2025
---

# Integrate work items with GitHub Copilot

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

> [!NOTE]
> This feature is currently in Private Preview. Access is limited and functionality might change before general availability.

Azure Boards integrates with GitHub Copilot (Coding Agent) to streamline your development workflow. You can delegate work items directly to Copilot, which automatically creates branches, implements code changes, and generates draft pull requests while keeping your work item updated with progress.

This integration allows you to:
- Initiate automated coding from work items
- Track Copilot's progress directly in Azure DevOps
- Automatically link generated pull requests and branches to work items
- Monitor when draft pull requests are ready for review

> [!IMPORTANT]
> This integration requires GitHub repositories and GitHub App authentication. Azure Repos (Azure DevOps Git repositories) are not supported for GitHub Copilot integration.

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Licensing** | Active GitHub Copilot subscription |
| **Repository** | GitHub repository (not Azure Repos) with appropriate permissions |
| **Authentication** | GitHub App authentication configured between Azure DevOps and GitHub (personal access tokens not supported) |
| **Permissions** | Contribute access to work items and ability to link artifacts |

## Supported work item types

The GitHub Copilot integration supports the following work item types:
- **User Story**
- **Bug**
- **Task** 
- **Feature**
- **Epic** (with appropriate breakdown)

Other work item types may work but are not officially supported for delegation to GitHub Copilot.

## Delegate work to GitHub Copilot

1. Open a supported work item you want to delegate to Copilot.

2. In the work item form, select **Delegate to Copilot**.

   If multiple delegation options are available, the button becomes a dropdown menu with different options.

3. From the menu, select **Start a GitHub Pull Request**.

4. Select the target **GitHub repository** where Copilot should create the pull request.
   
   > [!NOTE]
   > Only GitHub repositories connected via GitHub App authentication appear in the repository list. Azure Repos are not supported.

5. (Optional) **Add specific instructions** to guide Copilot's implementation approach.

6. Select **Start Copilot** to begin the automated coding process.

## What happens during delegation

When you start Copilot from a work item, the following automated processes occur:

- **License validation**: Azure DevOps verifies your GitHub Copilot license
   - If validation fails, a **Get a license** option appears to purchase GitHub Copilot
- **Repository preparation**: Copilot creates a new branch for the work
- **Pull request creation**: A draft pull request is automatically generated and linked to your work item
- **Work item updates**: 
   - A comment gets added to the work item discussion
   - Status indicator appears above the Development section
   - Branch and pull request links are automatically added
- **Progress tracking**: Real-time status updates show Copilot's progress

## Monitor Copilot progress

### Status indicators

Azure DevOps displays Copilot status directly on your work item:

- **In Progress**: Copilot is actively working on code changes
- **Ready for Review**: Draft pull request is complete and ready for your review
- **Error**: Issues occurred during the coding process (hover for details)

### Development section updates

The Development section of your work item automatically shows:
- Linked branch created by Copilot
- Drafted pull request with real-time status
- Direct links to review the generated code in GitHub

## Handle Copilot completion

### When Copilot finishes successfully

1. **Review the draft pull request**: Select the pull request link to review Copilot's implementation in GitHub
2. **Move out of draft mode**: If satisfied with the changes, convert the draft to a regular pull request
3. **Update work item status**: The work item discussion receives automatic updates about pull request status changes

## Complete the workflow

### Review and merge process

1. **Code review**: Use GitHub's interface to review, comment, and approve the generated code

2. **Merge the pull request**: Complete the merge process in GitHub when ready

3. **Automatic cleanup**: 
   - The merge commit is automatically linked to your work item
   - Branch links are removed if the branch is deleted
   - Copilot status indicators are hidden after successful merge

### Work item completion

After the pull request merges:
- Update your work item state to reflect completion
- Verify that the merge commit appears in the Development section
- Close the work item if the implementation fully addresses the requirements

## Troubleshoot issues

1. **Check error details**: Hover over the error icon for specific information about what went wrong
2. **Rerun Copilot**: Select **Rerun Copilot** to attempt the process again with the same or modified instructions
3. **Manual intervention**: If needed, make manual changes to the generated branch and pull request

### License issues
- **Problem**: License validation fails
- **Solution**: Ensure you have an active GitHub Copilot subscription and select **Get a license** if needed

### Repository access
- **Problem**: Can't see expected repositories
- **Solution**: 
  - Verify the GitHub App connection between Azure DevOps and GitHub
  - Ensure you have access to GitHub repositories (not Azure Repos)
  - Check repository permissions and GitHub App authentication
  - Confirm the repository is connected via the proper GitHub App integration

### Copilot errors
- **Problem**: Coding agent encounters errors
- **Solution**: Review error details, check instructions for clarity, and try rerunning Copilot

### Status not updating
- **Problem**: Progress status remains stuck
- **Solution**: Check GitHub for actual progress, as status updates depend on GitHub reporting

## Best practices

- **Clear work item descriptions**: Provide detailed acceptance criteria and context for better Copilot results
- **Specific instructions**: Add implementation guidance when starting Copilot
- **Regular monitoring**: Check progress periodically, especially for complex work items
- **Prompt review**: Review and provide feedback on draft pull requests quickly to maintain momentum
- **Proper work item hygiene**: Update work item states appropriately throughout the process

## Related content

- [Link work items to development artifacts](../../boards/backlogs/connect-work-items-to-git-dev-ops.md)
- [Configure GitHub integration](../../boards/github/connect-to-github.md)
- [Work with pull requests in Azure Repos](../../repos/git/pull-requests.md)
- [Track work with linking and attachments](../../boards/queries/link-work-items-support-traceability.md)
