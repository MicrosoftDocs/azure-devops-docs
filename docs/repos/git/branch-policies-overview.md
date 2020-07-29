---
title: Branch policies
titleSuffix: Azure Repos    
description: Learn about branch policies in Azure DevOps Services & TFS  
ms.technology: devops-code-git 
ms.assetid: 36A4986E-BFB8-422B-BFC9-8A0CB75D0603    
ms.topic: overview
ms.date: 06/01/2020
monikerRange: '>= tfs-2015'
---

# Branch policies

#### Azure Repos | Azure DevOps Server 2019 | TFS 2018 | TFS 2017

Branch policies are an important part of the Git workflow and enable you to:

* Isolate work in progress from the completed work in your master branch
* Guarantee changes build before they get to master
* Limit who can contribute to specific branches
* Enforce who can create branches and the naming guidelines for the branches
* Automatically include the right reviewers for every code change
* Enforce best practices with required code reviewers

## Adopt a Git branching strategy

There are a few critical branches in your repo that the team relies on always being in good shape, such as your `master` branch.
[Require pull requests](branch-policies.md) to make any changes on these branches.
Developers pushing changes directly to the protected branches will have their pushes rejected.

Keep your branch strategy simple by building your strategy from these three concepts:

1. Use feature branches for all new features and bug fixes.
2. Merge feature branches into the master branch using pull requests. 
3. Keep a high quality, up-to-date master branch.  

A strategy that extends these concepts and avoids contradictions will result in a version control workflow for your team that is consistent and easy to follow. 

- [Adopt a branching strategy](git-branching-guidance.md)
- [How to configure branch policies](branch-policies.md)
- [Branch permissions](branch-permissions.md)
- [Require branch folders](require-branch-folders.md)
- [Configure a branch policy for an external service](pr-status-policy.md)

## Branching how to guides

Learn how to perform common tasks when working with branches.

- [Branches tutorial](branches.md)
- [How to create a branch](create-branch.md)
- [How to delete a branch](delete-branch.md)
- [Restore a deleted branch](restore-deleted-branch.md)
- [How to lock branches](lock-branches.md)