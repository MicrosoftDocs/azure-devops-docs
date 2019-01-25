---
title: Delete or restore files and folders using TFVC 
titleSuffix: Azure Repos
description: Delete or restore files and folders using Team Foundation Version control
ms.assetid: 8891c77c-490c-489c-99c7-860b4a92737c
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 12/05/2016
monikerRange: '>= tfs-2015'
---


# Delete or restore files and folders in Team Foundation Version Control (TFVC)

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

You can delete files and folders from TFVC and also restore them, from both in the workspace on your dev machine or on the server.

**Requirements**

See [Permissions and groups reference](../../organizations/security/permissions.md).

## Delete an item

Before you delete an item:

-   ![Delete item](_img/delete-restore-files-folders/IC572373.png) Before you delete a file, look for a check mark icon ![Delete item](_img/delete-restore-files-folders/IC51402.gif), which indicates pending edits in the file . If there are pending edits, you should view them (open the context menu by right-clicking the file and choosing **Compare**) and make sure that you do not need them. If you think you might need the edits in the future, consider checking in the file before you delete it.

-   ![Delete item](_img/delete-restore-files-folders/important.png) If you delete a folder, the system will pend delete actions for any folders and files that it contains.

-   ![Delete item](_img/delete-restore-files-folders/important.png) If you delete a file on which other files have dependencies, the system will automatically pend delete actions for those files. For example, if you delete a form file, the code and resource file will also be pended for deletion.

### To delete an item

1.  In either [Solution Explorer](develop-code-manage-pending-changes.md) or [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), browse to the folder or file that you want to delete.

2.  Select the items that you want to delete, open their context menu (right-click), and choose **Delete**.

	> [!TIP]  
	> If you are deleting a file from Solution Explorer, the following warning message may appear: &lt;*file name*&gt; **will be deleted permanently**. The file deletion will not be implemented on the server until you check in this change. 
	> If the file was checked in to version control before the delete, then you can recover the file. Choose **OK** if you want to proceed with deleting the file.

3.  When you are ready, [check in your changes](check-your-work-team-codebase.md).

## Restore items deleted from Visual Studio

> [!NOTE] 
> If you're already checked in the delete of an item in TFVC, you can restore the deleted item from the server long as no one on your team has [destroyed](destroy-command-team-foundation-version-control.md) it.  
> If you're not using TFVC, use [Solution Explorer](/visualstudio/ide/solutions-and-projects-in-visual-studio#managing-projects-in-solution-explorer) to delete items and files in your Visual Studio solution. 
> Files deleted through Solution Explorer are moved to the Recycle Bin on your computer, where they can be restored.
> Once restored from the Recycle Bin, right-click your solution in Solution Explorer and select **Add..** and then **Existing item...** to restore the file into your solution.

### From Team Explorer

Open the [Pending Changes](develop-code-manage-pending-changes.md) page in Team Explorer (**View**, then **Team Explorer**, then select **Pending Changes**). 
Right-click the deleted items in the **Included Changes** area and choose **Undo...**.

### From Source Control Explorer

Open [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md) and browse to the folder where you deleted the file(s). Right-click the file and select **Undo Pending Changes..**.
Verify the checkboxes to make sure they include the deleted files, then select **Undo Changes**

### Restore an item deleted from the server

1.  From the menu bar choose **Tools**, **Options**.

2.  On the **Options** dialog box, navigate to **Source Control**, **Visual Studio Team Foundation Server**.

3.  Select **Show deleted items in the Source Control Explorer**, and then choose **OK**.

4.  From the menu bar choose **View**, **Other Windows**, **Source Control Explorer**.

5.  In Source Control Explorer, navigate to the folder that contains the item you want to restore.

6.  Open the item's context menu (select the item and right-click it) and then choose **Undelete**.

## Restore TFVC managed items deleted from your dev machine outside of Visual Studio

From time to time you may need to restore an item you have deleted outside Visual Studio (possibly by accident). The method you use to restore such an item depends on whether you are using a local or a server workspace. See [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md).

### Use a local workspace to restore an item you deleted outside Visual Studio

When you use a local workspace, Visual Studio detects and enables you to resolve changes you have made outside the system.

### To use a local workspace to restore an item you deleted outside Visual Studio

1.  In Team Explorer, choose ![Home](_img/delete-restore-files-folders/IC547418.png) **Home**, and then choose **Pending Changes**.

2.  In the **Excluded Changes** section, choose the **Detected changes** link.

3.  In the **Promote Candidate Changes** dialog box, select an item for which **delete** appears in the **Change** column, open its context menu (right-click), and choose **Restore this item**.

### Use a server workspace to restore an item you deleted outside Visual Studio

When you accidentally delete an item outside Visual Studio and you are using a server workspace, when you try to open the item in Visual Studio you may see an error message such as: **TF10187: Could not open document** *file name* **The system cannot find the file specified.**. You can restore the item by getting it from the server.

### To use a server workspace to restore an item you deleted outside Visual Studio

1.  In Source Control Explorer, browse to the folder that contains the deleted items.

2.  Open the context menu of the folder (select the folder and right-click it) and choose **Get Specific Version**.

3.  On the **Get** dialog box, select **Overwrite all files even if the local version matches the specified version**.

    Choose **Get**.

> [!TIP]
> You can also use the [tf get /force](get-command.md) command.

## Work from the command prompt

-    [Delete Command (Team Foundation Version Control)](delete-command-team-foundation-version-control.md)  Delete a file from the server.

-    [Destroy Command (Team Foundation Version Control)](destroy-command-team-foundation-version-control.md)  Permanently destroy an item.

-    [Undelete Command](undelete-command.md)  Restore a file deleted from the server.

-    [Undo command](undo-command.md)  Undo pending changes.

-    [Get command](get-command.md)  Get files from the server.
