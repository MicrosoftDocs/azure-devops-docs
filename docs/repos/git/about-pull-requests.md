---
title: About pull requests
titleSuffix: Azure Repos
description: Learn about pull request guidelines, management, and considerations in Azure Repos or Azure DevOps Server.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.technology: devops-code-git 
ms.topic: conceptual
ms.author: vijayma
author: vijayma
ms.date: 10/07/2021
monikerRange: '<= azure-devops'
---

# About pull requests

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015**

Pull requests (PRs) are a way to change, review, and merge code in a [Git project](../../organizations/projects/create-project.md). PRs can come from branches within the same repository or from branches in [forks](forks.md) of the repository. Teams can use PRs to review code and give feedback on changes before merging the code into the main branch. Reviewers can step through the proposed changes, leave comments, and vote to approve or reject the code.

The following video shows the general pull request process. Some terminology and user interface elements might not apply to your Azure DevOps version.

> [!VIDEO https://www.youtube.com/embed/J_DHkUKxI0E?start=0]

This article describes pull request guidelines and management considerations. For instructions on how to create, view, review, and complete pull requests, see [Create, review, and manage pull requests](pull-requests.md).

## PR feedback

High-quality reviews start with high-quality feedback. Here are some keys to great PR feedback:

- The PR owner should have the right people review the PR, and make sure that reviewers know what the code does.
- Reviewers should give actionable, constructive feedback.
- Owners and reviewers should comment and reply in a timely manner.

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
- [Leave comments](pull-requests.md#leave-comments).
- [Vote on the changes](pull-requests.md#vote-on-the-changes).

Learn more about how to [get feedback with Git pull requests](/devops/develop/git/git-pull-requests).

## Default branch

[!INCLUDE [](includes/change-default-branch-instructions.md)]

## Branch policies

Your team might rely on critical branches in your repo, such as the `main` branch, to always be in good shape. You can set [branch policies](branch-policies.md) to require PRs for any changes on these protected branches, and reject any changes pushed directly to the branches.

You can add more policies to PRs to enforce better code quality in key branches. Extra requirements like a clean build of the proposed code or approval from multiple reviewers can help protect key branches.

The number of required approvals for a PR is set in a branch policy. A PR can be set to autocomplete with the required number of approvals, even if other reviewers reject the changes. It's best practice for at least two reviewers to review and approve changes in a significant PR.

To reset votes when a PR author pushes new changes, select **Reset code reviewer votes when there are new changes** in the [Require a minimum number of reviewers](branch-policies.md#require-a-minimum-number-of-reviewers) branch policy.

For more information, see:

- [Branch policies overview](branch-policies-overview.md)
- [How to configure branch policies](branch-policies.md)
- [Branch permissions](branch-permissions.md)

## PR status checks

Pull requests and branch policies let teams enforce best practices for reviewing code and running automated builds. Many teams have further requirements and validations to perform on code. To cover these needs, you can integrate PR status checks into the PR workflow. With PR status checks, external services can programmatically sign off on code changes by associating success or failure information with the PR.

For more information, see the following articles:

- [Customize and extend pull request workflows with pull request status](pull-request-status.md)
- [Create a PR status server with Node.js](create-pr-status-server.md)
- [Use Azure Functions to create custom branch policies](create-pr-status-server-with-azure-functions.md)
- [Configure a branch policy for an external service](pr-status-policy.md)

## Multiple merge bases

The **Files** tab in a PR detects diffs by three-side comparison. The algorithm takes into account the last commit in the target branch, the last commit in the source branch, and their common merge base. The algorithm is a fast, cost-efficient, and reliable method of detecting changes. Unfortunately, in some cases, there is more than one true base. In most repositories this situation is rare, but in large repositories with many active users, it can be common.

The following scenarios can cause multiple bases:

- Cross-merges between different branches
- Active reuse of feature branches
- Handling aftermaths of main branch reverts
- Other non-intuitive and convoluted manipulations with reverts, cherry picks, and merges

Multiple merge base detection is part of security awareness. If there are multiple merge bases, the file-diff algorithm for the user interface (UI) might not properly detect file changes, depending on which merge base was chosen. The multiple merge base warning only happens if the files affected in the PR have different versions between the merge bases.

### Potential security risks of merging from multiple bases

- A malicious user could abuse the UI algorithm to commit malicious changes that aren't present in the PR.
- If changes proposed in the PR are already in the target branch, they're displayed in the **Files** tab, but they might not trigger branch policies that are mapped to folder changes.
- Two sets of changes to the same files from multiple merge bases might not be present in the PR. That case might create treacherous logic gaps.

### How to resolve the multiple merge bases issue

Having multiple merge bases isn't necessarily bad, but you should double-check that everything is fine. To get rid of multiple merge bases, tie branches to a single common ancestor. Either rebase your branch on target, or merge target into main. Those actions get rid of the warning message and help you check if the actual changes are fine.

One approach is to soft reset and stash your progress before rebasing or merging. You can then create a new branch or rebase an empty one, and apply your changes from a clear point. This process might require a force push to remote if your changes are already there.

### How to avoid the multiple merge bases issue

Here are general tips for avoiding the multiple merge base issue:

- When preparing a PR, create feature branches from the latest versions of the main or release branch.
- Avoid creating branches that don't originate directly from stable branches of your repository, unless required.

### What to do if the multiple merge bases issue reappears

In large repos with many active contributors, this issue can be especially inconvenient. Even if you get rid of multiple bases via merge, the situation might reappear. If someone closes a longstanding PR, that can recreate the situation. Even though build policies and tests are running, you have no means to complete the PR. Resetting and starting a new branch might help. If nothing is changed, your changes are probably clear, even if the situation repeats itself.

## Next steps
- [Create, review, and manage pull requests](pull-requests.md)
- [Pull request update notifications](notifications.md)
- [Change the default branch](change-default-branch.md)
