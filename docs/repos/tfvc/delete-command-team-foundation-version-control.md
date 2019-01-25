---
title: Delete Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Delete Command (Team Foundation Version Control)
ms.assetid: c4cf7a59-26c8-490c-a065-279888019c36
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Delete Command (Team Foundation Version Control)

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Removes files and folders from the Team Foundation version control server and deletes them from the disk.

> [!NOTE]
> The results of this command are not visible in other workspaces until you perform a check-in operation. For more information, see [Check In Pending Changes](https://msdn.microsoft.com/library/ms181411).

**Required Permissions**

To use the **delete** command, you must have the **Check out** permission set to **Allow**. If you include the **/lock** option with a value other than *none*, you must have the **Lock** permission set to **Allow**. Additionally, you must own the workspace or have the global **Administer workspaces** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf delete [/lock:(none|checkin|checkout)] [/recursive] [/login:username,[password]] itemspec
## Parameters

<table><thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>itemspec</em></p></td>
	<td><p>Identifies the file or folder to delete from the Team Foundation version control server. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/4y2ash30)">Command-Line Options</a>.</p><p><strong>Note:</strong> You can specify more than one <em>Itemspec</em> argument.</p></td></tr>
<tr>
	<td><p><em>username</em></p></td>
	<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName.</em></p></td></tr></tbody>
</table>

<table><thead>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/lock</strong></p></td>
	<td><p>Prevents other users from checking in or checking out the specified items. For more information, see <a href="understand-lock-types.md">Understanding Lock Types</a>.</p><p>Lock Options:</p><ul><li><p><strong>None</strong></p><p>Default. No lock is applied. If you have placed a lock on the specified file, this option removes it. It does not remove a lock placed by someone else.</p></li><li><p><strong>Checkin</strong></p><p>Other users can check out the specified items but they cannot check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.</p></li><li><p><strong>Checkout</strong></p><p>Prevents other users from checking in or checking out any one of the specified items until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.</p></li></ul></td></tr>
<tr>
	<td><p><strong>/recursive</strong></p></td>
	<td><p>Deletes all files and/or folders and subfolders that match the itemspec from the specified directory.</p><ul><li><p><strong>tf delete folder1\folder2 /recursive</strong> (where folder1\folder2 exists and is a directory) deletes all the files and subdirectories contained by folder1\folder2 and folder1\folder2 itself.</p></li><li><p><strong>tf delete folder1\folder2\filespec<em> /recursive</strong> deletes all files and subdirectories matching filespec contained in folder1\folder2 and each of its subdirectories, as well as all files and subdirectories contained within any directory that matches the filespec.</p><p>For example, in a workspace containing:</p><p>Folder1\AVeryLongDirectoryName (with some files inside) and Folder1\Folder2\AVeryImportantFile.txt</p><p><strong>tf delete 'Folder1\AVer</em>' /recursive</strong></p><p>deletes folder1\folder2\NeverDelete\AVeryImportantFile.txt because it matches the wildcard character.</p></li></ul></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td></tr></tbody>
</table>

## Remarks
The **delete** command records a pending change of type "delete" in your workspace for the items that you have specified. When you commit a pending change of type "delete" to the Team Foundation version control server by using the** checkin** command, Team Foundation removes the item from the Team Foundation version control server but does not delete it permanently. You can locate deleted items in the Team Foundation version control server by using the Dir Command and you can restore deleted items using the [Undelete Command](undelete-command.md).

If you have deleted an item in your workspace but have not checked in the change, you can restore the item to your workspace and remove the deletion from your list of pending changes using the [Undo Command](undo-command.md).

You cannot delete an item for which another pending change exists. For example, a checked out file cannot be deleted. To delete such items, you must undo the current pending change using the **undo** command.

When you check in a pending deletion, Team Foundation marks the file as deleted in the Team Foundation version control server. Subsequently running a **get** of the item from other workspaces (either by you or other users) deletes the item from those workspaces.

When your *itemspec* specifies a folder, Team Foundation deletes all its files and subfolders and the files they contain, by default.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example deletes 314.cs on disk in the specified local workspace folder and then, when you check in the change, removes 314.c from the version control system non-permanently.

    c:\projects>tf delete 314.cs

## See Also

#### Tasks

[Move, Rename, and Delete Version-Controlled Files and Folders](rename-move-files-folders.md)

#### Reference

[Undelete Command](undelete-command.md)

[Undo Command](undo-command.md)

[Dir Command](dir-command.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
