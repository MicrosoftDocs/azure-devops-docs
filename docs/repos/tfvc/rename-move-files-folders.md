---
title: Rename or move files and folders in TFVC
titleSuffix: Azure Repos
description: Rename or move files and folders using Team Foundation Version Control (TFVC) in Visual Studio.
ms.assetid: 90839209-cb51-4c00-ae19-08e7343093ea
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Rename or move files and folders in TFVC

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

For files in Team Foundation Version Control (TFVC), you can use Visual Studio [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md) to move or rename one file or folder at a time.

You can also use the `tf` command-line utility to move or rename files or folders in TFVC. For more information, see [Rename command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md).

> [!IMPORTANT]
> - Don't use **Source Control Explorer** to move folders or files that a Visual Studio project or solution references. Move these files with [Solution Explorer](/visualstudio/ide/solutions-and-projects-in-visual-studio#solution-explorer) instead, and use a new changeset to check in the move.
> 
> - If you're not using TFVC for version control, use **Solution Explorer** to move and rename files in Visual Studio solutions or projects.

## Prerequisites

You must be one of the **Contributors** for your project. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Move an item

1. In **Source Control Explorer**, right-click the item that you want to move and choose **Move**.

1. In the **Move** dialog box, manually enter the destination for the item in the **To** box, or choose **Browse** to use the **Browse for Folder** dialog box.

1. Choose **OK**.

## Rename an item

1. In **Source Control Explorer**, right-click the file you want to rename and choose **Rename**.

1. Enter the new name for the item.

1. Choose **OK**.

### Fix the outcome after you rename an item in your operating system

Avoid using your operating system, such as Windows File Explorer or the Windows command prompt `rename` command, to rename items that are managed by TFVC. If you do use your operating system to rename an item in a [local workspace](decide-between-using-local-server-workspace.md), Visual Studio detects the change as two changes: an add and a delete. You can join the two actions into a rename action.

> [!NOTE]
> This issue doesn't apply to Git version control.

1. In Visual Studio **Team Explorer**, choose **Pending Changes**.

1. In the **Excluded Changes** section of the **Pending Changes** page, select **Detected**.

1. In the **Promote Candidate Changes** dialog box, select the delete and add actions, right-click, and choose **Promote as Rename**.

1. A single rename change now appears in the **Included Changes** section.

> [!TIP]
> - When you begin a new task, it's a good practice to [download the latest files from the server](download-get-files-from-server.md) before you make changes to files in your workspace.
> - Avoid renaming an item that has been branched but not yet checked in. If you try to do so, a conflict occurs.

## Next steps

You can [review and manage your work](develop-code-manage-pending-changes.md), [suspend your work](suspend-your-work-manage-your-shelvesets.md), and ultimately [contribute your work to the team's codebase](check-your-work-team-codebase.md).