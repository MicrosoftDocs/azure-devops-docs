---
title: About pull requests and permissions
titleSuffix: Azure Repos
description: Learn about pull request guidelines, management, and considerations when working in an Azure Repos Git repository.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.service: azure-devops-repos
ms.topic: conceptual
ms.author: vijayma
author: vijayma
ms.date: 11/05/2021
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# About pull requests

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Pull requests (PRs) are a way to change, review, and merge code in a [Git repository on Azure Repos](../../organizations/projects/create-project.md#add-a-repository-to-your-project). PRs can come from branches within the same repository or from branches in [forks](forks.md) of the repository. Teams use PRs to review code and give feedback on changes before merging the code into the main branch. Reviewers can step through the proposed changes, leave comments, and vote to approve or reject the code.

This article describes pull request guidelines and management considerations. For instructions on how to create, view, review, and complete pull requests, see the following articles:

- [Create pull requests](pull-requests.md)
- [View and open pull requests](view-pull-requests.md)
- [Review pull requests](review-pull-requests.md)
- [Complete pull requests](complete-pull-requests.md)

::: moniker range=">= azure-devops-2022"
> [!NOTE]
> For performance and stability reasons the number of reviewers that can be added to the pull request must be lower than 1000. New pull request will not be created when adding more reviewer than limit.
> For the existing pull requests, user will be prevented to add more reviewers than the limit.
::: moniker-end

## Permissions and prerequisites

::: moniker range="azure-devops"
- **Repos** must be enabled on your project. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md) to reenable Repos.
 
- To view or review PRs, you must be a member of an Azure DevOps project with **Basic** access or higher.
  - If you don't have a project, create one or [sign up for free](../../user-guide/sign-up-invite-teammates.md).
  - If you aren't a project member, [get added](../../organizations/accounts/add-organization-users.md).

- To contribute to a PR, you must be a member of the **Readers** security group or have the corresponding permissions.

- To create and complete a PR, you must be a member of the **Contributors** security group or have the corresponding permissions.

> [!NOTE]
> For public projects, users granted **Stakeholder** access have full access to Azure Repos.
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
- **Repos** must be enabled on your project. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md) to reenable Repos.
- To view or review PRs, you must be a member of an Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../organizations/security/add-users-team-project.md).
- To contribute to a PR, you must be a member of the **Readers** security group or have the corresponding permissions.
- To create and complete a PR, you must be a member of the **Contributors** security group or have the corresponding permissions.
::: moniker-end

::: moniker range="< azure-devops-2019"
- To view or review PRs, you must be a member of an Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../organizations/security/add-users-team-project.md).
- To contribute to a PR, you must be a member of the **Readers** security group or have the corresponding permissions.
- To create and complete a PR, you must be a member of the **Contributors** security group or have the corresponding permissions.

::: moniker-end

To learn more about permissions and access, see [Default Git repository and branch permissions](../../organizations/security/default-git-permissions.md) and [About access levels](../../organizations/security/access-levels.md).

<a name="pr-feedback"></a>
## Quality feedback for pull requests

High-quality reviews start with high-quality feedback. Here are some keys to great PR feedback:

- The PR owner should have the right people review the PR, and make sure that reviewers know what the code does.
- Reviewers should give actionable, constructive feedback.
- Owners and reviewers should comment and reply quickly.

PR owners should:

- Make sure to select the right reviewers to assign to a PR.
- Include reviewers that know how the code works.
- Ask developers working in other areas to share their ideas.
- Give a clear description of changes.
- [Provide reviewer guidance with pull request templates](pull-request-templates.md).
- Provide a build of the code with the fix or feature running in it.
- Reply to comments, accepting the suggestion or explaining why the suggested change isn't ideal.
- For good suggestions outside the scope of the PR, create new work items, branches, and PRs to make those changes.

Reviewers should:

- Provide feedback on changes they don't agree with.
- Identify issues and give specific suggestions on what to do differently.
- Make sure the feedback has clear intent and is easy to understand.
- [Leave comments](review-pull-requests.md#make-comments).
- [Vote on the changes](review-pull-requests.md#vote-on-changes).

Learn more about how to [get feedback with Git pull requests](/devops/develop/git/git-pull-requests).

## Branch policies and pull requests

Your team might rely on critical branches in your repo, such as the `main` branch, to always be in good shape. You can set [branch policies](branch-policies.md) to require PRs for any changes on these protected branches, and reject any changes pushed directly to the branches.

You can add more policies to PRs to enforce better code quality in key branches. Extra requirements like a clean build of the proposed code or approval from multiple reviewers can help protect key branches.

You can set the number of required approvals for a PR in a branch policy. You can also set certain reviewers to be required or optional on all or certain PRs. A PR can be set to autocomplete with the required number of approvals, even if other reviewers reject the changes. However, required reviewers must approve PRs before the PRs can merge. It's best practice for at least two reviewers to review and approve changes in a significant PR.

To reset votes whenever a PR author pushes new changes, select **Reset code reviewer votes when there are new changes** in the [Require a minimum number of reviewers](branch-policies.md#require-a-minimum-number-of-reviewers) branch policy.

The following table summarizes the policies you can define to customize a branch. For an overview of all repository and branch policies and settings, see [Git repository settings and policies](repository-settings.md). 

:::row:::
   :::column span="2":::
      **Policy**
   :::column-end:::
   :::column span="1"::: 
      **Default**
   :::column-end:::
   :::column span="3"::: 
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [**Require a minimum number of reviewers**](branch-policies.md#require_reviewers)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Require approval from a specified number of reviewers on pull requests.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="2":::
      [**Check for linked work items**](branch-policies.md#check-linked-wi)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Encourage traceability by checking for linked work items on pull requests
   :::column-end:::
:::row-end:::


:::row:::
   :::column span="2":::
      [**Check for comment resolution**](branch-policies.md#check-comment-resolution)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Check to see that all comments have been resolved on pull requests.
   :::column-end:::
:::row-end:::

::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="2":::
      [**Limit merge types**](branch-policies.md#limit-merge-types)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Control branch history by limiting the available types of merge when pull requests are completed.
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="2":::
      [**Add Build Validation policies**](branch-policies.md#build-validation)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Add one or more policies to validate code by pre-merging and building pull request changes. Can also enable or disable policies.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Add Status Check policies**](branch-policies.md#require-approval-from-external-services)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Add one or more policies to require other services to post successful status to complete pull requests. Can also enable or disable policies.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Automatically included reviewers**](branch-policies.md#include-code-reviewers)
   :::column-end:::
   :::column span="1"::: 
       Off  
   :::column-end:::
   :::column span="3"::: 
      Add one or more policies to designate code reviewers to automatically include when pull requests change certain areas of code. Can also enable or disable policies.
   :::column-end:::
:::row-end:::

For more information, see:

- [Branch policies overview](branch-policies-overview.md)
- [How to configure branch policies](branch-policies.md)
- [Branch permissions](branch-permissions.md)
- [Use Azure Functions to create custom branch policies](create-pr-status-server-with-azure-functions.md)

## Define status checks to improve code quality 

Pull requests and branch policies let teams enforce best practices for reviewing code and running automated builds. Many teams have further requirements and validations to do on code. To cover these needs, you can integrate PR status checks into the PR workflow. With PR status checks, external services can programmatically sign off on code changes by associating success or failure information with the PR.

For more information, see the following articles:

- [Customize and extend pull request workflows with pull request status](pull-request-status.md)
- [Create a PR status server with Node.js](create-pr-status-server.md)
- [Configure a branch policy for an external service](pr-status-policy.md)

<a name="multiple-merge-bases"></a>
## Multiple merge base issue

In some cases, a PR has more than one true merge base, and this situation can cause security issues. If the files in the PR have different versions between the merge bases, a multiple merge base warning happens. For more information and remediation, see [Multiple merge bases](merging-with-squash.md#multiple-merge-bases).

## Next steps
- [Improve code quality with branch policies](branch-policies.md)
- [Customize and extend pull request workflows with pull request status](pull-request-status.md)
- [Pull request update notifications](pull-request-notifications.md)
- [Change the default branch](change-default-branch.md)
- [Copy changes with cherry-pick](cherry-pick.md)
- [Merge strategies and squash merge](merging-with-squash.md)
- [Multiple merge bases](merging-with-squash.md#multiple-merge-bases)
