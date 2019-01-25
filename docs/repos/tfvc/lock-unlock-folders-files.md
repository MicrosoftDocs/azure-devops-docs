---
title: Lock and unlock folders or files | TFVC 
titleSuffix: Azure Repos
description: Lock and unlock folders or files using Team Foundation Version Control 
ms.assetid: 3fe6cce2-b152-4733-8aa1-4f74072e8767
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Lock and unlock folders or files in Team Foundation Version Control

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

> [!NOTE]
> This content applies to files managed by Team Foundation Version Control (TFVC) that you need to lock or unlock. For help unlocking files in use by programs on your PC, use the [Handle](https://technet.microsoft.com/sysinternals/bb896655.aspx) and
[Process Explorer](https://technet.microsoft.com/sysinternals/processexplorer) tools to help you find which program that is locking your file(s).

A folder or file tracked by TFVC can be locked or unlocked to deny or restore the user's privileges. 
Privileges include checking out an item for edit into a different workspace or checking in Pending Changes to an item from a different workspace. 
For more information, see [Create and work with workspaces](create-work-workspaces.md).

You can use a lock to temporarily freeze the server version of an item so that you can check in a [pending change](develop-code-manage-pending-changes.md) without having to resolve any merge conflicts. If you want to permanently prevent access to an item on the server, you should use the [Permission Command](permission-command.md) instead.

> [!TIP]
> You can use the [Lock command](lock-command.md) to remove another user's lock if you have sufficient permissions.

**Requirements**

See [Permissions and groups reference](../../organizations/security/permissions.md).

### To lock a folder or file from Source Control Explorer

> [!IMPORTANT]
> These options will appear only when you are making changes in a [server workspace](create-work-workspaces.md). 
> The use of [local workspaces](decide-between-using-local-server-workspace.md) in your Project makes check-out locks un-enforceable. [Learn more](understand-lock-types.md).

1.  On the **View** menu, choose **Other Windows**,and then choose **Source Control Explorer**.

    You can also double-click **Source Control** in Team Explorer.

2.  In Source Control Explorer, right-click on the file you want to apply a lock, and select **Advanced..**, then **Lock..** (Visual Studio 2015) or **Lock..** (Visual Studio 2013)

3.  In the **Lock** dialog box select the file or folder you want.

4.  Choose either the **Check Out lock** or the **Check In lock** type, and then choose **Lock** . [Learn more](understand-lock-types.md) about TFVC lock types.

    Under **Pending Changes**, Source Control Explorer displays the status: **lock**. The next time your pending changes are checked into the workspace, the lock will be removed. 
    For more information, see [Check in your work to the team's codebase](check-your-work-team-codebase.md) and [understanding locks](understand-lock-types.md)

    > [!NOTE]
    >  You can also lock folders and files from the command line. For more information, see [Lock Command](lock-command.md).

### To unlock a folder or file from Source Control Explorer

> [!IMPORTANT]
> You can only unlock files other members of your team have locked if you have [UnlockOther permissions](../../organizations/security/permissions.md). 
> If you don't have permission to unlock a file the option will be inaccessible.

1.  While working in the server workspace, navigate to the **View** menu and choose **Other Windows**, then choose **Source Control Explorer**.

2.  In Source Control Explorer, open the shortcut menu for the folder or file from which you want to remove a lock, and then choose **Unlock**.

## See Also

#### Other Resources

 [Understand lock types](understand-lock-types.md) 

 [Lock Command](lock-command.md) 

 [Use Source Control Explorer to manage files under version control](use-source-control-explorer-manage-files-under-version-control.md) 
