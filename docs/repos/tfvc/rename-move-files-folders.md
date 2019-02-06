---
title: Rename or move files and folders | Team Foundation Version Control 
titleSuffix: Azure Repos
description: Rename or move files and folders using Team Foundation Version Control (TFVC) commands
ms.assetid: 90839209-cb51-4c00-ae19-08e7343093ea
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Rename or move files and folders in TFVC

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

> [!IMPORTANT]
> If you're not using TFVC for version control, use [Solution Explorer](/visualstudio/ide/solutions-and-projects-in-visual-studio#managing-projects-in-solution-explorer) to
> move and rename files in your current open Visual Studio solutions or projects.

## Move an item in TFVC

You can use [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md) to move one file or folder at a time.
You should not use Source Control Explorer to move folders or files that are referenced by a Visual Studio project or solution. 
Move these files with [Solution Explorer](/visualstudio/ide/solutions-and-projects-in-visual-studio#managing-projects-in-solution-explorer) instead and check in the move in a new changeset.

1.  In Source Control Explorer, select the item that you want to move, open its shortcut menu, and choose **Move**.

2.  In the **Move** dialog box, either manually type the destination for the item in the **To** box, or choose **Browse** to use the **Browse for Folder** dialog box.

3.  Choose **OK**.

## Rename an item in TFVC

1.  In Source Control Explorer, select the file that you want to edit, open its shortcut menu, and choose **Rename**.

2.  Type the desired name for the item.

### Fix the outcome after you rename an item in your operating system

You should avoid renaming items managed by TFVC using your operating system (for example, using Windows File Explorer, or the **rename** command in the Windows command prompt). When you have used your operating system to rename an item in a [local workspace](decide-between-using-local-server-workspace.md), Visual Studio detects the change as two changes: an add and a delete. You can join the two actions into a rename action.

> [!NOTE]
> Git version control users can move and rename files from the command line or Windows Explorer without this concern. The changes will be reflected in Team Explorer.

1.  In Visual Studio, in Team Explorer, choose ![Home icon](_img/rename-move-files-folders/IC547418.png) **Home**, and then choose **Pending Changes**.

2.  In the **Excluded Changes** section, choose the **Detected:** link.

3.  In the **Promote Candidate Changes** dialog box, select the delete and add actions, open their shortcut menu, and choose **Promote as Rename**.

4.  A single rename change now appears in the **Included Changes** section.

## Work from the command prompt

-    [Rename Command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md) : Rename or move a file.

## Tips

You must be one of the **Contributors** for your project. See [Team Foundation Server default groups, permissions, and roles](https://msdn.microsoft.com/library/ms253077).

-   If you are beginning a new task, it's a good practice to [download the latest files from the server](download-get-files-from-server.md) before you make changes to files in your workspace.  
-   Avoid renaming an item that has been branched but not yet checked in. If you try to do so, a conflict will occur.  
-   You can [review and manage your work](develop-code-manage-pending-changes.md), [suspend your work](suspend-your-work-manage-your-shelvesets.md), and ultimately [contribute your work to the team's codebase](check-your-work-team-codebase.md).
