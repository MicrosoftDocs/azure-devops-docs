---
title: Git index.lock file
titleSuffix: Azure Repos
description: Learn more about the Git index.lock file in Visual Studio
ms.assetid: d7f960e7-7132-4ee3-ba27-5bb5fd60e625
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


#  Git index.lock file
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

## What is a Git index.lock file?

When you perform a Git command that edits the index, Git creates a new index.lock file, writes the changes, and then renames the file. The index.lock file indicates to other Git processes that the repository is locked for editing.

## Orphaned index.lock file

Generally, if you have an index.lock file, it's because a Git process is running or waiting on a prompt for user input. However, if the editing process is terminated or becomes unresponsive, the index.lock file can be left behind and remain present even if no Git process is running. This orphaned index.lock file will prevent other Git processes from editing the repository. If you have an orphaned index.lock file, you may receive an error similar to the following when attempting to perform a Git operation in Visual Studio:

`The index is locked. This might be due to a concurrent or crashed process.`

## Removing an orphaned index.lock file

If you suspect that you might have an orphaned index.lock file, first verify that you don't have  any Git processes running. To check for long running Git operations, open Task Manager (CTRL+ALT+DELETE), sort by name, and look for git.exe or other Git related processes. If you see any Git related processes, you can wait a few moments for them to complete and try your Git operation again. If you don't have any Git operations running, you can delete the index.lock file and try your Git operation again. The index.lock file is located in the `.git` folder of your repo, as shown in the following example: `\myrepo\.git\index.lock`. Note that the `.git` folder may be hidden, and to access it, you may have to enable `View hidden files and folders` in Windows Explorer.

