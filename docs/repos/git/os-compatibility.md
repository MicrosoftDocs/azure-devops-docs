---
title: Cross-platform compatibility
titleSuffix: Azure Repos
description: Learn how Git interacts with multiple platform file systems.
ms.assetid: 7e02f9e9-ebb1-4d7a-aeb2-37445a6cf8c7
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 08/14/2020
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Git cross-platform compatibility

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The Windows, macOS, and Linux file systems have limitations and behaviors that one or more of the other platforms don't always support. Because Git is a cross-platform technology, it's possible for a developer on one platform to make a commit that contains files or folders that have incompatible names with another platform's file system. Protecting your repo from this incompatibility is important because developers on other platforms might unknowingly check out a commit that corrupts their working directories because of unsupported file or path names.

Azure Repos offers [three cross-platform compatibility settings](repository-settings.md) that help protect your repo from people pushing commits that are incompatible with one or more platforms. These settings are related to the following limitations with file systems:

- Case sensitivity
- Restrictions on file and folder names
- Path length restrictions

## Case sensitivity

The Windows and macOS file systems are case insensitive (but case preserving) by default.
Most Linux file systems are case sensitive.
Git was built originally to be the Linux kernel's version control system, so it's case sensitive.

Although [Git for Windows](https://gitforwindows.org/) addresses many of the problems with a case-insensitive operating system, a few quirks remain.

### File and folder names

On Linux, checking out a Git repo that contains both *File.txt* and *file.txt* is no problem.
Those are distinct file names.
On Windows and macOS, checking out both files causes the second one to overwrite the first one.
If two folders differ only by case, their contents are mixed together in case-insensitive file systems.

There are two ways to fix a repository that has case conflicts:

- Check out the repository in a case-sensitive environment.
Rename files and folders so they no longer conflict, and then push those changes to the repository.
[Windows Subsystem for Linux](/windows/wsl/about) is one such environment.
- Use the command `git mv -f <conflicting name> <non-conflicting name>` for each conflict. Be careful to use exact capitalization on both file names.

It's good to avoid creating case conflicts in the first place.
Azure Repos offers a [case-enforcement setting](repository-settings.md) to prevent pushes that would lead to this situation.
For developers, adopting the habit of using tab completion to commit files will also help.
Because both Windows and macOS are case preserving, these approaches ensure that Git's internals see exactly the same casing that the file system uses.

### Branch and tag names

You can create two branches or tags (known as *refs*) that differ only in casing.
Git's internals, along with Azure DevOps Services and Azure DevOps Server, treat them as two separate refs.
On a user's machine, Git uses the file system to store refs.
Fetches and other operations begin to fail because of the ambiguity.

A small file represents each ref. If a ref name contains slash (`/`) characters, folders represent the parts before the final slash.

One simple way to avoid problems is to always use all-lowercase branch and tag names.
If you already created two branches or tags that have this problem, you can fix them in the Azure Repos web UI.

To fix branch names:

1. On the page for branches, go to the related commit.
1. On the shortcut menu, select **New branch**.
1. Give the branch a new name that doesn't have a case conflict.
1. Return to the page for branches and delete the conflicting branch.

To fix tag names:

1. On the page for tags, go to the tagged commit.
1. On the shortcut menu, select **Create tag**.
1. Give the tag a new name that doesn't have a case conflict.
1. Return to the page for tags and delete the conflicting tag.

## Path and file name restrictions

The Windows, macOS, and Linux operating systems have various limitations for file names and paths. These limitations restrict what you can name files or folders, which can create problems for teams that use Git across multiple platforms.

For example, imagine that a developer on one platform commits a change to the shared repository that contains a file name or path length that's invalid on another platform. Later, another developer tries to check out that commit on a platform where the contents are invalid. This situation results in a corrupted working directory that has the potential to damage your repo with corrupted data.

::: moniker range="azure-devops"

Azure Repos offers [repository settings](repository-settings.md) that block pushes containing commits that violate one or more of the following limitations.

::: moniker-end

### Reference table for file names and paths

| Restrictions/Platforms |                                                                                                                                                         Windows                                                                                                                                                         |                                                                                              macOS                                                                                              |                               Linux                               |
|--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------:|
|  File name restrictions  |                      [Reserved file names](/windows/desktop/FileIO/naming-a-file): CON, PRN, AUX, NUL, COM1-COM9, LPT1-LPT9<br><br>Reserved file names followed by `.`<br><br>Reserved characters: `\ / : * ? " < >` <br><br> File names that end in `.` or whitespace                       |                                                                                     File names that end in `/`                                                                                     |                      File names that end in `/`                      |
| Path length restrictions | [Paths in Windows](/windows/desktop/FileIO/naming-a-file#paths) have a maximum length of 260 characters (including a null terminator). <br><br>For directories with .NET, the fully qualified file name must be fewer than 260 characters, and the directory name must be fewer than 248 characters. | File names are limited to 255 characters.<br><br> Path maximums in HFS+ are documented as unlimited, though some macOS versions cap paths at 1,016 characters. Some file systems support 1,016 as the path maximum. | File names are limited to 255 characters.<br><br> Path maximum is 4096. |

::: moniker range="<=azure-devops"

## Encoding support

::: moniker-end

::: moniker range="<=azure-devops"

Microsoft added support for UTF-16 and UTF-32 encoding via the web push endpoint. This support means that we preserve the encoding type, so you don't have to rewrite your files as UTF-8. You also see a warning when you try to save a file that's not UTF encoded via the web (which supports only UTF encoding).

The following screenshot shows an example of the dialog that appears when you introduce encoding changes by using a web push.

:::image type="content" source="media/os-compatibility/web-push-encoding-dialog.png" alt-text="Screenshot that shows the dialog about introducing encoding changes through a web push.":::

::: moniker-end
