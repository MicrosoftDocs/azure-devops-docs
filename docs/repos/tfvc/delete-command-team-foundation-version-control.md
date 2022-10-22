---
title: Delete Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Delete Command (Team Foundation Version Control)
ms.assetid: c4cf7a59-26c8-490c-a065-279888019c36
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 06/30/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Delete command (Team Foundation Version Control)


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Removes files and folders from the Team Foundation version control server and deletes them from the disk.

> [!NOTE]
> The results of this command are not visible in other workspaces until you perform a check-in operation. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites

To use the **delete** command, you must have the **Check out** permission set to **Allow**. If you include the **/lock** option with a value other than *none*, you must have the **Lock** permission set to **Allow**. Additionally, you must own the workspace or have the global **Administer workspaces** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax
```
tf delete [/lock:(none|checkin|checkout)] [/recursive] [/login:username,[password]] itemspec
```

## Parameters

### Argument

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *itemspec*
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder to delete from the Team Foundation version control server. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Use Team Foundation version control commands, Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options).

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*&lt;em&gt;UserName or *UserName.*
   :::column-end:::
:::row-end:::

### Option

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/lock**
   :::column-end:::
   :::column span="3":::
   Prevents other users from checking in or checking out the specified items. For more information, see [Understanding Lock Types](understand-lock-types.md).
   
   Lock Options:

   - **None**  
     Default. No lock is applied. If you have placed a lock on the specified file, this option removes it. It does not remove a lock placed by someone else.
   
   - **Checkin**  
     Other users can check out the specified items but they cannot check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   
   - **Checkout**     
     Prevents other users from checking in or checking out any one of the specified items until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Deletes all files and/or folders and subfolders that match the itemspec from the specified directory.

   - **tf delete folder1\folder2 /recursive** (where folder1\folder2 exists and is a directory) deletes all the files and subdirectories contained by folder1\folder2 and folder1\folder2 itself.
   - **tf delete folder1\folder2\filespec<em> /recursive** deletes all files and subdirectories matching filespec contained in folder1\folder2 and each of its subdirectories, as well as all files and subdirectories contained within any directory that matches the filespec.
   
     For example, in a workspace containing:
   
     Folder1\AVeryLongDirectoryName (with some files inside) and Folder1\Folder2\AVeryImportantFile.txt
   
     **tf delete &#39;Folder1\AVer</em>&#39; /recursive**
   
     deletes folder1\folder2\NeverDelete\AVeryImportantFile.txt because it matches the wildcard character.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks
The **delete** command records a pending change of type "delete" in your workspace for the items that you have specified. When you commit a pending change of type "delete" to the Team Foundation version control server by using the **checkin** command, Team Foundation removes the item from the Team Foundation version control server but does not delete it permanently. You can locate deleted items in the Team Foundation version control server by using the Dir Command and you can restore deleted items using the [Undelete Command](undelete-command.md).

If you have deleted an item in your workspace but have not checked in the change, you can restore the item to your workspace and remove the deletion from your list of pending changes using the [Undo Command](undo-command.md).

You cannot delete an item for which another pending change exists. For example, a checked out file cannot be deleted. To delete such items, you must undo the current pending change using the **undo** command.

When you check in a pending deletion, Team Foundation marks the file as deleted in the Team Foundation version control server. Subsequently running a **get** of the item from other workspaces (either by you or other users) deletes the item from those workspaces.

When your *itemspec* specifies a folder, Team Foundation deletes all its files and subfolders and the files they contain, by default.

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example deletes 314.cs on disk in the specified local workspace folder and then, when you check in the change, removes 314.c from the version control system non-permanently.

```
c:\projects>tf delete 314.cs
```

## Related articles

- [Move, Rename, and Delete Version-Controlled Files and Folders](rename-move-files-folders.md)
- [Undelete Command](undelete-command.md)
- [Undo Command](undo-command.md)
- [Dir Command](dir-command.md)
