---
title: Lock and unlock folders or files in TFVC
titleSuffix: Azure Repos
description: Lock and unlock Team Foundation Version Control (TFVC) folders or files by using Visual Studio Source Control Explorer.
ms.assetid: 3fe6cce2-b152-4733-8aa1-4f74072e8767
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Lock and unlock folders or files in Team Foundation Version Control

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


You can use Visual Studio **Source Control Explorer** to lock or unlock a folder or file tracked by Team Foundation Version Control (TFVC). Lock or unlock files or folders to deny or restore a user's privileges such as checking out an item for edit into a different workspace or checking in pending changes to an item from a different workspace. For more information, see [Create and work with workspaces](create-work-workspaces.md).

> [!NOTE]
> This article applies to locking or unlocking files managed by TFVC. For help unlocking files that show in use by programs on your PC, use the [Handle](/sysinternals/downloads/handle) and [Process Explorer](/sysinternals/downloads/process-explorer) tools to help you find which program is locking your files.

You can use a lock to temporarily freeze the server version of an item so that you can check in a [pending change](develop-code-manage-pending-changes.md) without having to resolve any merge conflicts. If you want to permanently prevent access to an item on the server, you should use the [Permission command](permission-command.md) instead.

> [!TIP]
> You can use the [Lock command](lock-command.md) to remove another user's lock if you have sufficient permissions.

## Prerequisites

See [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Lock a folder or file

> [!IMPORTANT]
> The lock type options appear only when you're making changes in a [server workspace](create-work-workspaces.md). The use of [local workspaces](decide-between-using-local-server-workspace.md) in your project makes check-out locks un-enforceable. For more information, see [Understand lock types](understand-lock-types.md).

1.  To open **Source Control Explorer** in Visual Studio, select **View** > **Other Windows** > **Source Control Explorer**.

    You can also select **Source Control Explorer** from the **Team Explorer** window.

2.  In **Source Control Explorer**, right-click the file you want to lock, and select **Advanced** > **Lock**.

3.  In the **Lock** dialog box, make sure the file or folder you want to lock is selected, select either the **Check Out** or **Check In** lock type, and then select **Lock**. For more information, see [Understand lock types](understand-lock-types.md).

**Source Control Explorer** displays the status **lock** next to the file under **Pending Change**. The next time your pending changes are checked into the workspace, the lock is removed. For more information, see [Check in your work to the team's codebase](check-your-work-team-codebase.md).

> [!NOTE]
>  You can also lock folders and files from the command line. For more information, see [Lock command](lock-command.md).

## Unlock a folder or file

> [!IMPORTANT]
> You can unlock files other members of your team have locked only if you have [UnlockOther permissions](../../organizations/security/permissions.md). If you don't have permission to unlock a file, the option is inaccessible.

1.  While working in a server workspace in Visual Studio, select **View** > **Other Windows** > **Source Control Explorer**, or select **Source Control Explorer** from the **Team Explorer** window.

2.  In **Source Control Explorer**, right-click the folder or file from which you want to remove a lock, and select **Advanced** > **Unlock**.

## Related articles

-  [Understand lock types](understand-lock-types.md) 
-  [Lock command](lock-command.md) 
-  [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md)