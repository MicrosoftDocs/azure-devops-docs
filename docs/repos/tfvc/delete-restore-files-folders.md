---
title: Delete or restore files and folders using TFVC 
titleSuffix: Azure Repos
description: See how to delete or restore files and folders in Team Foundation Version Control (TFVC).
ms.assetid: 8891c77c-490c-489c-99c7-860b4a92737c
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/31/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Delete or restore files and folders in TFVC

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

You can delete and restore files and folders from Team Foundation Version Control (TFVC), from the workspace on your dev machine or on the server.

## Prerequisites

See [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Delete an item

Before you delete a file, look for a ![check mark icon](media/delete-restore-files-folders/check.png) next to the file, which indicates pending edits in the file. If there are pending edits, view them by right-clicking the file and choosing **Compare**. Make sure that you don't need the edits. If you think you might need the edits in the future, consider checking in the file before you delete it.

> [!IMPORTANT]
> - If you delete a folder, the system pends delete actions for any folders and files that the folder contains.
> - If you delete a file on which other files have dependencies, the system automatically pends delete actions for those files. For example, if you delete a form file, the code and resource files are also pended for deletion.

### To delete an item

1. In Visual Studio, either in [Solution Explorer](develop-code-manage-pending-changes.md) or [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), browse to the folder or file that you want to delete.

1. Right click the item and choose **Delete**.

1. If you're deleting the file from **Solution Explorer**, the following warning message may appear: **\<filename> will be deleted permanently**. Choose **OK** if you want to proceed with deleting the file.

1. When you're ready, [check in your changes](check-your-work-team-codebase.md).

If you're not using TFVC, use [Solution Explorer](/visualstudio/ide/solutions-and-projects-in-visual-studio#solution-explorer) to delete items and files in your Visual Studio solution.

## Recover or restore deleted items

If the deleted item was under version control before the delete, then you can recover the item. The deletion won't be implemented on the server until you check in the change.

### Recover a deleted item by using Team Explorer

1. Open the [Pending Changes](develop-code-manage-pending-changes.md) page in **Team Explorer**.
1. Right-click the deleted items under **Included Changes** and choose **Undo**.
1. In the **Undo Pending Changes** dialog box, select the item and then select **Undo Changes**.

### Recover a deleted item by using Source Control Explorer

1. In [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), browse to and right-click the file you deleted, and select **Undo Pending Changes**.
1. In the **Undo Pending Changes** dialog box, select the item and then select **Undo Changes**.

### Recover a deleted item by using Solution Explorer

Files not under version control that you deleted through **Solution Explorer** are moved to the Recycle Bin on your computer, where they can be restored. Once restored from the Recycle Bin, right-click your solution in **Solution Explorer** and select **Add** > **Existing item** to restore the file into your solution.

### Restore a deleted item from the server

If you've already checked in the deletion of an item in TFVC, you can restore the deleted item from the server as long as no one on your team has [destroyed](destroy-command-team-foundation-version-control.md) it.

1. From the Visual Studio menu bar, choose **Tools** > **Options**.
1. In the **Options** dialog box, navigate to **Source Control**> **Visual Studio Team Foundation Server**.
1. Select the **Show deleted items in the Source Control Explorer**, and then choose **OK**.
1. In **Source Control Explorer**, browse to and right-click the file you want to restore, and select **Undelete**.

### Restore an item deleted from your dev machine

You might need to restore an item you deleted outside Visual Studio, possibly by accident. The method you use to restore such an item depends on whether you're using a local or a server workspace. See [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md).

When you use a local workspace, Visual Studio detects and enables you to resolve changes you made outside the system.

1. On the **Pending Changes** page in **Team Explorer**, under **Excluded Changes**, select **Detected**.
1. In the **Promote Candidate Changes** dialog box, right-click the item, which has **delete** in the **Change** column, and select **Restore this item**.
1. Select **Promote**.

If you accidentally delete an item outside Visual Studio and you're using a server workspace, when you try to open the item in Visual Studio you might see an error message such as: **TF10187: Could not open document \<filename>. The system cannot find the file specified**. You can restore the item by getting it from the server.

1. In **Source Control Explorer**, browse to the folder that contains the deleted items.
1. Right-click the folder and choose **Advanced** > **Get Specific Version**.
1. In the **Get** dialog box, select **Overwrite all files even if the local version matches the specified version**.
1. Choose **Get**.

> [!TIP]
> You can also use the [tf get /force](get-command.md) command.

## Work from the command prompt

You can use the following [tf command-line utility](use-team-foundation-version-control-commands.md) commands to delete, destroy, restore, and get files.

- The [Delete command](delete-command-team-foundation-version-control.md) deletes a file from the server.
- The [Destroy command](destroy-command-team-foundation-version-control.md) permanently destroys an item.
- The [Undelete command](undelete-command.md) restores a file deleted from the server.
- The [Undo command](undo-command.md) undoes pending changes.
- The [Get command](get-command.md) gets files from the server.
