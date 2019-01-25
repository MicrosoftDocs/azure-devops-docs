---
title: Create and delete a branch in your Git repo
titleSuffix: Azure Repos
description: Create, use, and delete Git Branches in Visual Studio and from the command line
ms.assetid: 4b18a164-d1cb-4f87-89cb-8dc227e64af1
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: tutorial
ms.date: 09/10/2018
monikerRange: '>= tfs-2013'
---

# Create work in branches  

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Git branches aren't much more than a small reference that keeps an exact history of commits, so they are very cheap to create.
[Committing](commits.md) changes to a branch will not affect other branches, and you can share branches with others without having to merge the changes into the main project.
Create new branches to isolate changes for a feature or a bug fix from your master branch and other work. 

Since the branches are lightweight, switching between branches is quick and easy. 
Git does not create multiple copies of your source when working with branches&mdash;it uses the history information stored in commits to recreate the files on a branch when you start working on it.
Your [Git workflow](gitworkflow.md) should create and use branches for managing features and bugfixes.
The rest of the Git workflow, such as [sharing code](pushing.md) and [reviewing code with pull requests](pullrequest.md) all work through branches.
Isolating work in branches makes it very simple to change what you are working on by simply changing your current branch.

In this tutorial you learn:

> [!div class="checklist"]
> * How are Git branches created?
> * How to create a branch
> * How to delete a branch
> * How to use branches

## Video Overview

<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Branches/player" width="640" height="360" allowFullScreen frameBorder="0"></iframe>

## How are Git branches created?

Create branches using the `branch` command. `Branch` creates a reference in Git for the new branch and a pointer back to the parent commit so Git can keep a history of changes as you add commits to the branch. 
When you are working with a branch that someone else shared, Git keeps an upstream tracking relationship to associate the branch on the local repo with the corresponding branch on the remote repo.
This makes it very simple to sync changes with others using [push](pushing.md) and [pull](pulling.md).

![Visual of a branch off master in Git](_img/branch.png)

In this image, a new branch is created from the main branch. Work continues on both branches and commits are added to both branches. 

Git always adds new commits to the current local branch. Check what branch you are working on before you commit so that you don't commit changes to the wrong branch. 
Swap between local branches using the `checkout` command. Git will change the files on your computer to match the latest commit on the checked out branch.
When your work in the branch is ready to share with the rest of the team, you [push](pushing.md) the changes to update the remote branch. 

A common mistake is to make some changes and `commit` them, realize you are on an incorrect branch, then `checkout` to the correct branch.
Your most recent changes will no longer be on the filesystem since each branch has its own version of code. 
Git will bring the state of the files back to the last commit on the branch you swapped into, not the previous branch where you made your changes. 
You'll need to either [cherry-pick](cherry-pick.md) the commits from the branch or [merge](pulling.md#update-branches-with-merge) the changes into the correct branch.
 
## Create a branch

# [Visual Studio](#tab/visual-studio)

Visual Studio 2015 & 2017

0. Open up Team Explorer and go to the **Branches** view.
0. Right-click the parent branch (usually `master`) to base your changes and choose **New Local Branch From...**. 
0. Supply a branch name in the required field and click **Create Branch**. Visual Studio automatically performs a `checkout` to the newly created branch.

    ![Creating Git Branches in Visual Studio](_img/vsbranch.gif)   

# [Command Line](#tab/command-line)

Use the `branch` command to create the branch and `checkout` to swap to that branch.
 
```
git branch feature1
git checkout feature1
```

---



## Delete a branch

> [!NOTE] 
> Deleting a branch in your local repo doesn't remove the branch on the remote.

# [Visual Studio](#tab/visual-studio)

Visual Studio 2015 & 2017

0. Open up Team Explorer and go to the **Branches** view.
0. Locate the branch you want to delete. Make sure that you aren't checked out to that branch, as you can't delete the branch you are currently working in.
0. Right-click the branch name and select **Delete**. If you have unpublished changes, Visual Studio will ask and make sure you want to delete the branch so you don't possibly lose work.

    ![Deleting a branch in Visual Studio](_img/vsbranchdelete.gif)

You can delete a remote branch using the same method - locate the tree for the remote in Team Explorer's **Branches** view (such as `remotes/origin`), right-click and select **Delete**.

# [Command Line](#tab/command-line)

Delete a local branch using `git branch -d` while checked out to a different branch.

```
git branch -d
```

Deleting a remote branch requires use of the `git push` command using the `--delete` option.

```
git push origin --delete
```

---





## Use branches to manage development

Git keeps track of which branch you are working on and makes sure that when you `checkout` a branch your files match the most recent commit on the branch. 
Branches let you work with multiple versions of the source code in the same local Git repository at the same time. 
Tell Git which branch you want to work on with `checkout`, and Git takes care of setting the right file versions for that branch.

You shouldn't need more than one repo on your system when you use branches to isolate your work. 
Set up your development environment one time after you [clone](clone.md), and then use Git branches to swap between feature work and bug fixing. 

## Next steps

> [!div class="nextstepaction"]
> [Share code with push](pushing.md)
