---
title: Key concepts and terminology used for Azure Repos
titleSuffix: Azure Repos  
description: Key definitions for objects and items used to code with Azure Repos
ms.technology: devops-new-user 
ms.prod: devops
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
monikerRange: 'azure-devops'
ms.date: 09/10/2018  
---

# Key concepts

Here you'll find definitions of key concepts and artifacts used in Azure Repos.

## Branch

Branches are lightweight references that keep a history of commits and provide a way to isolate changes for a feature or a bug fix from your master branch and other work. Committing changes to a branch doesn't affect other branches. You can push and share branches with other people on your team without having to merge the changes into master.

Switching between branches is quick and easy. Git doesn't create multiple copies of your source code when you're working with branches - it uses the history information stored in commits to re-create the files in a branch when you start working on it.

Learn more: [branches](../git/branches.md), [branch organization](../git/git-branching-guidance.md), and [how we use branches at Microsoft](/azure/devops/learn/devops-at-microsoft/use-git-microsoft#git-branch-structure-and-policies).

## Branch policies

Branch policies are an important part of the Git workflow. You use them to help protect the important branches in your development, like `master`. Branch policies enable you to:

* Isolate work in progress from the completed work in your master branch.
* Guarantee that changes build before they get to master.
* Limit who can contribute to specific branches.
* Enforce who can create branches and the naming guidelines for the branches.
* Automatically include the right reviewers for every code change.
* Enforce best practices with required code reviewers.

Learn more: [branch policies](../git/branch-policies-overview.md).

## Clone

Create a complete local copy of an existing Git repo by cloning it. 
Cloning a repo downloads all [commits](#commit) and [branches](#branch) in the repo and sets up a named relationship with the existing repo that you cloned. Use this relationship to interact with the existing repo, [pushing](#push) and [pulling](#pull) changes to share code with your team.

Learn more: [cloning](../git/clone.md).

## Commit

A commit is a group of changes saved to your local repository. You can share these changes to the remote repository by [pushing](#push).

Learn more: [commits](../git/commits.md).

## Fork

A fork is a complete copy of a repository, including all files, commits, and (optionally) branches. The new fork acts as if someone cloned the original repository and then pushed to a new, empty repository. After a fork has been created, new files, folders, and branches are not shared between the repositories unless a pull request carries them along. When you're ready to share those changes, it's easy to use pull requests to push the changes back to the original repository.

Learn more: [forks](../git/forks-overview.md)

## Git

Git is the most commonly used version control system today and is quickly becoming the standard for version control. Git is a distributed version control system, so your local copy of code is a complete version control repository. These fully functional local repositories make it is easy to work offline or remotely. You commit your work locally, and then sync your copy of the repository with the copy on the server.

Git in Azure Repos is standard Git. You can use the clients and tools of your choice, such as Git for Windows, Mac, partners' Git services, and tools such as Visual Studio and Visual Studio Code.

Learn more: [Git and Azure Repos](../git/overview.md).

## Git workflow

Version control has a general workflow that most developers use when writing code and sharing it with the team. These steps are:

1. Get a local copy of code if they don't have one yet.
1. Make changes to code to fix bugs or add new features.
1. When the code is ready, make it available for your team to review.
1. After the code is reviewed, merge it into the team's shared codebase.

Git has a version of this workflow that uses terminology and commands such as repositories, branches, commits, and pull requests. These terms might sound familiar if you've used a version control system like Team Foundation Version Control (TFVC) or Subversion, but they behave differently in Git.

1. [Create a branch](#branch) for the changes you plan to make and give it a name, such as `users/jamal/fix-bug-3214` or `features/cool-feature`.
1. [Commit changes](#commit) to your branch. People often have multiple commits for a bug fix or feature.
1. [Push your branch](#push) to the remote repository. 
1. [Create a pull request](#pull-request) so other people can review your changes. To incorporate feedback, you might need to make more commits and push more changes. When the code is ready, complete the pull request and merge your code into the target branch, such as `master`.

Use this workflow if you're new to Git. As your team gets more experienced and confident with Git, extend it to suit your team's needs.

Learn more: [how we use Git at Microsoft](/azure/devops/learn/devops-at-microsoft/use-git-microsoft).

[!INCLUDE [glossary-terms-notifications](../../_shared/glossary-terms/notifications.md)]

[!INCLUDE [glossary-terms-projects](../../_shared/glossary-terms/projects.md)]

[!INCLUDE [glossary-terms-public-projects](../../_shared/glossary-terms/public-projects.md)]

## Pull request

Create pull requests to review and merge code in a [Git project](../../organizations/projects/create-project.md).
Pull requests let your team review code and give feedback on changes before
you merge it into the master branch. Pull requests can come from either
topic branches within the same repository or a branch in a
[fork](../git/forks-overview.md) of the original repository.
Reviewers can step through the proposed changes, leave comments, and vote to approve or reject the code.

Learn more: [pull requests](../git/pull-requests-overview.md).

## Pull

A `pull` command updates the code in your local repository with the changes from other members of your team that are in the remote repository.

Learn more: [pull](../git/pulling.md).

## Push

Share changes made in commits and branches by using the `push` command. 

When you push, Git uploads the saved commits in your checked branch to the remote repository. If the branch exists on the remote repository, Git takes the [commits](#commit) and adds them to that branch on the remote repository. If that branch doesn't exist, Git creates a new branch with the same commits as your local branch.

Learn more: [push](../git/pushing.md).

## Repository

A repository is a location for your code managed by version control. Azure Repos supports both [Git](#git) and [TFVC](#team-foundation-version-control-tfvc).

[!INCLUDE [glossary-terms-teams](../../_shared/glossary-terms/teams.md)]

[!INCLUDE [glossary-terms-tfvc](../../_shared/glossary-terms/tfvc-repo.md)]
