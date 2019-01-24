---
title: Case sensitivity
titleSuffix: Azure Repos
description: How Git interacts with case-insensitive filesystems
ms.assetid: 7e02f9e9-ebb1-4d7a-aeb2-37445a6cf8c7
ms.prod: devops
ms.technology: devops-code-git
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2018'
---


# Git case sensitivity
#### Azure Repos | TFS 2018

The Windows and macOS file systems are case-insensitive (but case-preserving) by default.
Most Linux filesystems are case-sensitive.
Git was built originally to be the Linux kernel's version control system, so unsurprisingly, it's case-sensitive.

While many of the issues with a case-insensitive OS have been addressed in [Git for Windows](http://gitforwindows.org/), a few quirks remain.

## File and folder names

On Linux, checking out a Git repo which contains both "File.txt" and "file.txt" is no problem.
Those are distinct filenames.
On Windows and macOS, checking out both files will result in the second one overwriting the first one.
If two folders differ only by case, their contents will end up mixed together on case-insensitive filesystems.

### Fixing case conflicts

One way to fix a repository with this problem is to check it out in a case-sensitive environment.
Rename files and folders so they no longer conflict, then push those changes to the repository.
[Windows Subsystem for Linux](/windows/wsl/about) is one such environment.
Another approach is to use the command `git mv -f <conflicting name> <non-conflicting name>` for each conflict, being careful to use exact capitalization on both file names.

### Avoiding case conflicts

It's good to avoid creating this situation in the first place.
Azure Repos offers a [case-enforcement setting](repository-settings.md) to prevent pushes which would lead to this situation.
For developers, adopting the habit of using tab-completion to commit files will also help.
Since both Windows and macOS are case-preserving, this will ensure that Git's internals see the exact same casing that the filesystem uses.

## Branch and tag names

You can create two branches or tags (known as 'refs') that differ only in casing.
Git's internals, as well as Azure DevOps Services/TFS, will treat them as two separate refs.
On a user's machine, Git uses the filesystem to store refs.
Fetches and other operations begin to fail because of the ambiguity.
Each ref is represented by a small file, and if a ref name contains `/` characters, the parts before the final `/` are represented by folders.

One simple way to avoid issues is to always use all-lowercase branch and tag names.
If you have already created two branches or tags with this problem, you can fix it in the Azure Repos web UI.

### Fixing branch names

From the branches page, navigate to the related commit.
In the context menu, choose "New branch".
Give the branch a new name that doesn't have a case conflict.
Return to the branches page and delete the conflicting branch.

### Fixing tag names

The steps for fixing a tag name are similar to branches.
From the tags page, navigate to the tagged commit.
In the context menu, choose "Create tag".
Give the tag a new name that doesn't have a case conflict.
Return to the tags page and delete the conflicting tag.
