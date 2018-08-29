---
title: Key concepts and terminology used for Azure Repos
titleSuffix: Azure Repos  
description: Key definitions for objects and items used to code with Azure Repos
ms.technology: devops-new-user 
ms.prod: devops
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.topic: reference
monikerRange: 'vsts'
ms.date: 09/05/2018  
---

# Key concepts 

Here you'll find definitions of key concepts and artifacts used in Azure Repos.

## Pull request

Create pull requests to review and merge code in a [Git project](../../organizations/projects/create-project.md).
Pull requests let your team review code and give feedback on changes before
merging it into the master branch. Pull requests can come from either
topic branches within the same repository or from a branch in a
[fork](../git/forks-overview.md) of the original repository.
Reviewers can step through the proposed changes, leave comments, and vote to approve or reject the code.

Learn more about [pull requests](../git/pull-requests-overview.md).

## Repository

A location for your code managed by version control.

## Commit

Git does not automatically snapshot your code as you make edits to files in your repo. You must tell Git exactly which changes you want to add to the next snapshot by staging those changes. After staging your changes, create a commit to save the snapshot to your repo.

Learn more about [commits](../git/commits.md).

## Push

Share changes made in commits and branches using the `push` command. Push your branches to the remote repository, where Git takes the [commits](#commit) and adds them to an existing [branch](#branch) on the remote or creates a new branch with the same commits as your local branch.

Learn more about [push](../git/pushing.md).

## Pull

A `pull` updates the code in your local repo with the changes from other members of your team that are in the remote repository.

Learn more about [pull](../git/pulling.md).

## Sync



## Branch
## Branch Policies
## Clone
## Fork


