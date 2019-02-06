---
title: Cross-Platform Compatibility
titleSuffix: Azure Repos
description: How Git interacts with multiple platform filesystems
ms.assetid: 7e02f9e9-ebb1-4d7a-aeb2-37445a6cf8c7
ms.prod: devops
ms.technology: devops-code-git
ms.topic: conceptual
ms.date: 10/03/2018
monikerRange: '>= tfs-2018'
---

# Git Cross-Platform Compatibility

::: moniker range="azure-devops"

#### Azure Repos

::: moniker-end

::: moniker range="tfs-2018"

#### Azure Repos | TFS 2018

::: moniker-end

The Windows, macOS, and Linux file systems each have limitations and behaviors that are not always supported by one or more of the other platforms. Since Git is a cross-platform technology, it is possible for a developer on one platform to make a commit containing files or folders that have incompatible names with another platform's file system. Protecting your repo from this is important because developers on other platforms may unknowingly checkout a commit that corrupts their working direction due to unsupported file or paths names.

Azure Repos offers [three cross-platform compatibility settings](repository-settings.md) that help protect your repo from people pushing commits that are incompatible with one or more platforms. The three file system limitations these settings are related to are:

- Case Sensitivity
- Restricted File and Folder Names
- Path Length Restrictions

## Case Sensitivity

The Windows and macOS file systems are case-insensitive (but case-preserving) by default.
Most Linux filesystems are case-sensitive.
Git was built originally to be the Linux kernel's version control system, so unsurprisingly, it's case-sensitive.

While many of the issues with a case-insensitive OS have been addressed in [Git for Windows](http://gitforwindows.org/), a few quirks remain.

### File and folder names

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

### Branch and tag names

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

## Path and File Name Restrictions

The Windows, Mac OS, and Linux operating systems each have various naming limitations and max path limits. These restrict what you can name files or folders. This can create problem situations for teams using Git across multiple platforms.

For example, let's say a developer on one platform commits a change to the shared repository that contains a file name or path length that is invalid on another platform. Later, another developer attempts to checkout that commit on a platform where the contents are invalid. This results in a corrupted working directory creating the potential to damage your repo with corrupted data.

::: moniker range="azure-devops"

Azure Repos offers file name and max path [repository settings](repository-settings.md) that block pushes containing commits that violate one or more of the below limitations.

::: moniker-end

### File Name & Path Length Reference Table
||Windows|macOS|Linux|
|--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------:|:---------------------:|
| File Name Restrictions   | [Reserved File Names](https://docs.microsoft.com/windows/desktop/FileIO/naming-a-file): CON, PRN, AUX, NUL, COM1 - COM9, LPT1 - LPT9<br><br>Reserved File Names followed by `.`<br><br>Reserved Characters: `\ / : * ? " < >` <br><br> Filenames ending in `.` or ` ` | Filenames ending in `/` |Filenames ending in `/`|
| Path Length Restrictions | [Paths in Windows](https://docs.microsoft.com/windows/desktop/FileIO/naming-a-file#paths) have a maximum length of 260 characters (incl. a null terminator). <br><br>For directories with .NET the fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters.| File names are limited to 255 characters<br><br> Path max in HFS+ are documented as unlimited, though some macOS versions cap it at 1016 characters. Some file systems support 1016 as max path | File names are limited to 255 characters<br><br> Path max is 4096 |