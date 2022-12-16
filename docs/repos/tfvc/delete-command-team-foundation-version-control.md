---
title: Delete command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the tf delete command  in Team Foundation Version Control.
ms.assetid: c4cf7a59-26c8-490c-a065-279888019c36
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/31/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Delete command (Team Foundation Version Control)


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `delete` command removes files and folders from the Azure DevOps server and deletes them from the disk.

> [!NOTE]
> The results of this command aren't visible in other workspaces until you perform a check-in operation. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites

To use the `delete` command, you must have the **Check out** permission set to **Allow**. If you include the `/lock` option with a value other than `none`, you must have the **Lock** permission set to **Allow**. You must also own the workspace or have the global **Administer workspaces** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax
```
tf delete [/lock:(none|checkin|checkout)] [/recursive] [/login:username,[password]] itemspec
```

## Parameters

### Arguments

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
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder to delete from the Azure DevOps server. For more information about how TFVC parses an `itemspec` to determine which items are within scope, see [Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).

   > [!Note]  
   > You can specify more than one `itemspec` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a username value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::

### Options

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
   `/lock`
   :::column-end:::
   :::column span="3":::
   Prevents other users from checking in or checking out the specified items. For more information, see [Understanding Lock Types](understand-lock-types.md).
   
   Lock options:

   - `none`  
     Default. No lock is applied. If you have placed a lock on the specified file, this option removes it. It doesn't remove a lock placed by someone else.
   
   - `checkin`  
     Other users can check out the specified items, but they can't check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   
   - `checkout`  
     Prevents other users from checking in or checking out any one of the specified items until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Deletes all files and/or folders and subfolders that match the `itemspec` from the specified directory.

   - `tf delete <folder1>\<folder2> /recursive` deletes all the files and subdirectories contained by *\<folder1>\\\<folder2>*, and *\<folder1>\\\<folder2>* itself.
   - `tf delete <folder1>\<folder2> <filespec> /recursive` deletes all files and subdirectories matching the `filespec` contained in *\<folder1>\\\<folder2>* and each of its subdirectories, as well as all files and subdirectories contained within any directory that matches the `filespec`.
   
     For example, in a workspace containing:
   
     *Folder1\\AVeryLongDirectoryName* with some files inside, and *Folder1\\Folder2\\AVeryImportantFile.txt*,
   
     `tf delete Folder1 AVer* /recursive`
   
     deletes *Folder1\\AVeryLongDirectoryName* and all its files, and deletes *Folder1\\Folder2\\AVeryImportantFile.txt* because it matches the wildcard character.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks
The `delete` command records a pending change of type `delete` in your workspace for the items that you specify. When you commit a pending change of type `delete` to the Azure DevOps server by using the `checkin` command, TFVC removes the item from the Azure DevOps server but doesn't delete it permanently. You can locate deleted items in the Azure DevOps server by using the `dir` command, and you can restore deleted items by using the [Undelete command](undelete-command.md).

If you've deleted an item in your workspace but haven't checked in the change, you can restore the item to your workspace and remove the deletion from your list of pending changes by using the [Undo command](undo-command.md).

You can't delete an item for which another pending change exists. For example, a checked out file can't be deleted. To delete such items, you must undo the current pending change by using the `undo` command.

When you check in a pending deletion, TFVC marks the file as deleted in the Azure DevOps server. Subsequently running a `get` of the item from other workspaces, either by you or other users, deletes the item from those workspaces.

When your `itemspec` specifies a folder, TFVC deletes all its files and subfolders and the files they contain, by default.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example deletes *314.cs* on disk in the specified local workspace folder and then, when you check in the change, removes *314.cs* from the version control system non-permanently.

```
tf delete 314.cs
```

## Related articles

- [Move, rename, and delete version-controlled files and folders](rename-move-files-folders.md)
- [Undelete command](undelete-command.md)
- [Undo command](undo-command.md)
- [Dir command](dir-command.md)
