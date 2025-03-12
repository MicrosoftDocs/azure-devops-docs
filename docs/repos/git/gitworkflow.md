---
title: Version control
titleSuffix: Azure Repos
description: Learn about version control in Git with Azure DevOps.
ms.assetid: 0270b0fa-461b-4079-9703-cdcf53bdf39f
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 02/14/2025
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Git workflow

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use version control to save your work and coordinate code changes across your team. Even if you're a single developer, version control helps you stay organized as you fix bugs and develop new features. It maintains a history of your development, allowing you to review and roll back to any version of your code with ease.

The following tutorials demonstrate how to perform common version control tasks using the [version control workflow](#version-control-workflow).

## Version control workflow

Version control follows a general workflow, similar to the following example, that most developers use when writing code and sharing it with the team.

1. Get a local copy of the code if you don't have one.
2. Make changes to the code to fix bugs or add new features.
3. Once the code is ready, make it available for review by your team.
4. After the code is reviewed, merge it into the team's shared codebase.

> [!div class="mx-imgBorder"]  
> ![Screenshot shows the Git feature branch workflow.](media/gitworkflow.png)

Git has a version of this workflow using terminology and commands unique to Git. Some terms in our documentation might sound familiar if you've used a version control system like Team Foundation Version Control or Subversion, but they behave differently in Git.

## Git workflow

1. [Create a branch](./create-branch.md) for the changes you plan to make and give it a name, such as `users/jamal/fix-bug-3214` or `cool-feature-x`. For more branching guidance, see [Adopt a Git branching strategy](git-branching-guidance.md).
2. [Commit changes](commits.md) to your branch. People often have multiple commits for a bug fix or feature.
3. [Push your branch](pushing.md) to the remote repository.
4. [Create a pull request](pull-requests.md#create-a-pull-request) so other people can review your changes. To incorporate feedback, you might need to make more commits and push more changes.
5. [Complete your pull request](complete-pull-requests.md), resolve any [merge conflicts](merging.md#resolve-merge-conflicts-1), and complete your pull request.

Use this workflow if you're new to Git. As your team gets more experienced and confident with Git, extend it to suit your team's needs.

## Next steps

> [!div class="nextstepaction"]
> [Create a new Git repository](creatingrepo.md)

> [!div class="nextstepaction"]
> [Clone an existing Git repository](clone.md)
