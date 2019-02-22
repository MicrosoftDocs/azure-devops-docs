---
title: Use the Lock Command to lock or unlock a TFVC file or folder
titleSuffix: Azure Repos
description: Lock or unlock files or folder under TFVC version control using the Lock Command
ms.assetid: 5b62627b-fdb3-4832-a387-811dcc2808e3
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Lock Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Locks or unlocks a file or folder to deny or restore the right of users to check out an item for edit into a different workspace or to check in pending changes to an item from a different workspace.

**Required Permissions**

To use the **lock** command, you must have the **Lock** permission set to **Allow**. Having the Unlock other user's changes permission set to **Allow** is required to remove a lock held by another user if you do not have **Write** permission for that user's workspace. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md#lock-permission).

    tf lock itemspec /lock:(none|checkout|checkin) 
    [/workspace:workspacename] [/recursive] [/login:username,[password]] [/collection:TeamProjectCollectionUrl] 

## Parameters

<table><thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>itemspec</em></p></td>
	<td><p>Identifies the file or folder to lock or unlock. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/4y2ash30)">Command-Line Options</a>.</p><p><strong>Note:</strong> You can specify more than one <em>Itemspec</em> argument.</p></td></tr>
<tr>
	<td><p><em>workspacename</em></p></td>
	<td><p>The user-provided value for the <strong>/workspace</strong> option.</p></td></tr>
<tr>
	<td><p><em>username</em></p></td>
	<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName.</em></p></td></tr>
<tr>
	<td><p><em>TeamProjectCollectionUrl</em></p></td>
	<td><p>The URL of the project collection that contains the file or folder that you want to lock or unlock (for example, http://myserver:8080/tfs/DefaultCollection).</p></td></tr></tbody>
</table>

<table><thead>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/lock</strong></p></td>
	<td><p>Specifies a lock type or removes a lock from an item. For more information, see <a href="understand-lock-types.md">Understanding Lock Types</a>.</p><p>Lock Options:</p><ul><li><p><strong>None</strong></p><p>Removes a lock from an item.</p></li><li><p><strong>Checkin</strong></p><p>Enables an item to be checked out and edited in all workspaces but prevents users from checking in changes to the item outside the specified <strong>/workspace</strong> until you explicitly release the check-in lock. If the specified item is locked in any other workspace, the lock operation fails.</p></li><li><p><strong>Checkout</strong></p><p>Prevents users from checking in or checking out the specified items until you explicitly release the lock. If users have locked any one of the specified items, or if pending changes exists against any one of the items, the lock operation fails.</p></li></ul></td></tr>
<tr>
	<td><p><strong>/workspace</strong></p></td>
	<td><p>Specifies the name of a different workspace in which to apply the lock. By default, the lock is applied in the workspace in which you are currently.</p></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td></tr>
<tr>
	<td><p><strong>/collection</strong></p></td>
	<td><p>Specifies the project collection.</p></td></tr></tbody>
</table>

## Remarks
You can use the lock command to temporarily freeze the Team Foundation version control server version of an item so that you can check in a pending change without having to resolve any merge conflicts. If you want to permanently prevent access to an item in the Team Foundation version control server, you should use the [Permission Command](permission-command.md) instead.

>**Note:**  
>As a courtesy to your teammates, notify them when you apply a lock to an item, explain why you are doing this, and estimate when you plan to remove the lock, if you can.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### How to Lock an Item

You can lock an item using the lock command or by specifying a lock option during the commission of several other commands of the **tf** command-line utility that includes:

-   [Rename Command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md)

-   [Checkout and Edit Commands](checkout-or-edit-command.md)

-   [Delete Command (Team Foundation Version Control)](delete-command-team-foundation-version-control.md)

-   [Undelete Command](undelete-command.md)

-   [Merge Command](merge-command.md)

-   [Branch Command](branch-command.md)

-   [Add Command](add-command.md)

For add and branch, the lock is placed on the namespace where the new item will be created. Locks placed with rename apply both to the old and new namespaces. For more information, see [Lock and Unlock Folders or Files](lock-unlock-folders-files.md).

### Lock Types

Team Foundation provides two types of locks: **checkin** and **checkout**.

A check-in lock is less restrictive than a check-out lock. When you apply a check-in lock, users can continue to make local changes to the item in other workspaces. The changes cannot be checked in until you explicitly remove the check-in lock from the workspace.

A check-out lock is more restrictive than a check-in lock. When you apply a check-out lock to a version-controlled file or folder, users can neither check out the file for edit nor check in pre-existing pending changes. You cannot acquire a check-out lock if there are currently any pending changes to an item.

For more information about when to apply a check-out lock and when to apply a check-in lock, see [Understanding Lock Types](understand-lock-types.md).

### How Locking Works

If you have a file checked out when you lock it, its status is modified to contain the new lock type. If the files are not checked out, a "lock" change is added to the set of pending workspace changes. Unlike the **checkout** command, **lock** does not automatically make a file editable.

Locks on folders are implicitly recursive. If you lock a folder, you do not have to lock the files it contains unless you want to apply the more restrictive check-out lock to a file in a folder that has a check-in lock.

### Unlocking an Item

You can unlock a locked item using the **none** option. Additionally, Team Foundation unlocks an item automatically when you check in pending changes in the workspace.

You can determine which files are locked in the Team Foundation version control server and by whom the files were locked using the [Status Command](status-command.md).
## Examples
The following example prevents other users from checking out 314.cs.

    c:\projects>tf lock /lock:checkout 314.cs

The following example prevents other users from checking in changes to 1256.cs but enables them to check it out in their workspaces.

    c:\projects>tf lock /lock:checkin 1256.cs

The following example prevents other users from pending changes to any items in the src/ folder in the Team Foundation version control server.

    c:\projects>tf lock /lock:checkout $/src

The following example unlocks and makes all files in the src/ Team Foundation version control server folder available for check-out and check-in by other users.

    c:\projects>tf lock /lock:none src/

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Checkout and Edit Commands](checkout-or-edit-command.md)

[Status Command](status-command.md)

#### Concepts

[Understanding Lock Types](understand-lock-types.md)

[Create a Workspace to Work with your Project](create-work-workspaces.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)

[Working with Version Control Locks](work-version-control-locks.md)
