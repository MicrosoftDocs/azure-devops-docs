---
title: Lock command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the lock command to lock or unlock files or folders in Team Foundation Version Control (TFVC).
ms.assetid: 5b62627b-fdb3-4832-a387-811dcc2808e3
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Lock command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `lock` command locks or unlocks a file or folder. The command denies or restores the right of users to check out an item for edit into a different workspace or to check in pending changes to an item from a different workspace.

## Prerequisites

To use the `lock` command, you must have the **Lock** permission set to **Allow**. You need the **Unlock other user's changes** permission set to **Allow** to remove a lock held by another user if you don't have **Write** permission for that user's workspace. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf lock itemspec /lock:(none|checkout|checkin) 
[/workspace:workspacename] [/recursive] [/login:username,[password]] [/collection:TeamProjectCollectionUrl] 
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
   Identifies the file or folder to lock or unlock. For more information about how TFVC parses the `itemspec` to determine which items are within scope, see [Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).

   > [!Note]  
   > You can specify more than one `itemspec` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<workspacename>`
   :::column-end:::
   :::column span="3":::
   The user-provided value for the `/workspace` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a `username` value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the file or folder that you want to lock or unlock, for example `http://myserver:8080/tfs/DefaultCollection`.
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
   Specifies a lock type or removes a lock from an item. For more information, see [Understand lock types](understand-lock-types.md).
   
   Lock options:
   - `None`: Removes a lock from an item.
   
   - `Checkin`: Enables an item to be checked out and edited in all workspaces but prevents users from checking in changes to the item outside the specified `/workspace` until you explicitly release the check-in lock. If the specified item is locked in any other workspace, the lock operation fails.
   
   - `Checkout`: Prevents users from checking in or checking out the specified items until you explicitly release the lock. If users have locked any one of the specified items, or if pending changes exist against any one of the items, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/workspace`
   :::column-end:::
   :::column span="3":::
   Specifies the name of a different workspace in which to apply the lock. By default, the lock is applied in the workspace in which you are currently.
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
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks
You can use the lock command to temporarily freeze the TFVC server version of an item so that you can check in a pending change without having to resolve any merge conflicts. If you want to permanently prevent access to an item in the TFVC server, you should use the [Permission command](permission-command.md) instead.

> [!NOTE]
> As a courtesy to your teammates, notify them when you apply a lock to an item, explain why you are doing this, and estimate when you plan to remove the lock, if you can.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### How to lock an item

You can lock an item using the `lock` command or by specifying a `lock` option during the commission of several other `tf` command-line utility commands, including:

-   [Rename command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md)
-   [Checkout and edit commands](checkout-or-edit-command.md)
-   [Delete command (Team Foundation Version Control)](delete-command-team-foundation-version-control.md)
-   [Undelete command](undelete-command.md)
-   [Merge command](merge-command.md)
-   [Branch command](branch-command.md)
-   [Add command](add-command.md)

For `add` and `branch`, the lock is placed on the namespace where the new item will be created. Locks placed with `rename` apply both to the old and new namespaces. For more information, see [Lock and unlock folders or files](lock-unlock-folders-files.md).

### Lock types

TFVC provides two types of locks: `checkin` and `checkout`.

A check-in lock is less restrictive than a check-out lock. When you apply a check-in lock, users can continue to make local changes to the item in other workspaces. The changes can't be checked in until you explicitly remove the check-in lock from the workspace.

A check-out lock is more restrictive than a check-in lock. When you apply a check-out lock to a version-controlled file or folder, users can neither check out the item for edit nor check in pre-existing pending changes. You can't acquire a check-out lock if there are currently any pending changes to an item.

For more information about when to apply a check-out lock and when to apply a check-in lock, see [Understand lock types](understand-lock-types.md).

### How locking works

If you have a file checked out when you lock it, its status is modified to contain the new lock type. If the files aren't checked out, a **lock** change is added to the set of pending workspace changes. Unlike the `checkout` command, `lock` doesn't automatically make a file editable.

Locks on folders are implicitly recursive. If you lock a folder, you don't have to lock the files it contains unless you want to apply the more restrictive check-out lock to a file in a folder that has a check-in lock.

### Unlock an item

You can unlock a locked item by using the `none` option. TFVC also unlocks an item automatically when you check in pending changes in the workspace.

You can determine which files are locked in the TFVC server and by whom the files were locked by using the [Status command](status-command.md).

## Examples

The following example prevents other users from checking out *314.cs*.

```
c:\projects>tf lock /lock:checkout 314.cs
```

The following example prevents other users from checking in changes to *1256.cs* but enables them to check it out in their workspaces.

```
c:\projects>tf lock /lock:checkin 1256.cs
```

The following example prevents other users from pending changes to any items in the *$/src* folder in the TFVC server.

```
c:\projects>tf lock /lock:checkout $/src
```

The following example unlocks and makes all files in the *$/src* TFVC server folder available for check-out and check-in by other users.

```
c:\projects>tf lock /lock:none $/src
```


## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Checkout and edit commands](checkout-or-edit-command.md)
- [Status command](status-command.md)
- [Understand lock types](understand-lock-types.md)
- [Create and work with workspaces](create-work-workspaces.md)
- [Work with version control locks](work-version-control-locks.md)