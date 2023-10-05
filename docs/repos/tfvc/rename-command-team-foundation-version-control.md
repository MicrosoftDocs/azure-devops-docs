---
title: Rename command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control rename command to change the name or the path of a file or folder.
ms.assetid: ef4aa5f8-b62e-4dd2-9fb8-1e28b7e0123f
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Rename command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `rename` command changes the name or the path of a file or folder. You can use the `rename` command, or the aliases `move` or `ren`, to move a file or folder to a new location.

> [!NOTE]
> The results of this command aren't reflected in the server until you do a check-in. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites

To use the `rename` command, you must have the **Check out** permission set to **Allow**.  For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf rename [/lock:(none|checkout|checkin)] [/login:username,[password]] olditem newitem
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
   `<olditem>`
   :::column-end:::
   :::column span="3":::
   The original name and path of the file or folder to be renamed. You can specify a local workspace path such as *C:\\myfiles\\314.cs* or a TFVC server path such as *$/myfiles/314.cs*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<newitem>`
   :::column-end:::
   :::column span="3":::
   The new name of the file or folder. You can use this to specify a different local or a TFVC server path location.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a user name value as either `DOMAIN\username` or `username`.
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
   Include this option to prevent other users from checking in or checking out the specified items. If this option isn't specified, the existing lock status of the item isn't changed. For more information, see [Understand lock types](understand-lock-types.md).

   Lock options:
   - `None`: No lock is applied.
   - `Checkin`: Other users can check out the specified items, but they can't check in revisions to locked files until you release the lock by doing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   - `Checkout`: Prevents other users from checking in or checking out any one of the specified items until you release the lock by doing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
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

You can use the `rename` command of the `tf` command-line utility to move or rename a version-controlled item in your workspace. Use the `rename` command to move multiple files by specifying wildcard characters. The ability to rename multiple version-controlled files or folders is available only from the command line.

Use the `rename` command to do the following actions:

- Rename the `olditem` to the `newitem`, such as `tf rename 314.cs 315.cs`.
- Move the `olditem` to a new location in the TFVC server by providing a `newitem` whose path differs from that of the `olditem`, such as `tf rename 314.cs ..\newdir\314.cs`.

If you provide a `newitem` that specifies a nonexistent folder, the `rename` command creates the destination folder. If `newitem` is a folder, `olditem` becomes a child of `newitem`.

You can't rename an item if:

- You already deleted it before it was checked in to the same workspace.
- The new name already exists in the TFVC server and isn't a folder.
- You already added, branched, or renamed the pending check-in of the item.
- The item is mapped in the workspace but not available on the local disk.
- The item is cloaked.

You can rename an item for which another file of the same name has been added pending check-in, but you can't rename an item that has been branched but not yet checked in. When you rename a file that has pending edits, the edits are preserved.

An item that is explicitly mapped can't be renamed without first changing the mapping. For example, if there's a working folder mapping of *$/ProjectX/MyApp* to *c:\\MyApp*, you can't rename *MyApp*. You can rename items under *MyApp*, but not *MyApp* itself.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example changes the name of *314.cs* to *1254.cs*.

```
c:\projects>tf rename  314.cs  1254.cs
```

The following example renames *314.cs* to *1254.cs* and moves it to the *newdir* folder.

```
c:\projects>tf rename 314.cs ..\newdir\1254.cs
```

The following example changes the name of *Form1.vb* to *MainPage.vb* and applies a lock to it.

```
c:\projects>tf rename Form1.vb MainPage.vb /lock:checkin
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Rename or move files and folders](rename-move-files-folders.md)
- [Add command](add-command.md)
- [Delete command (Team Foundation Version Control)](delete-command-team-foundation-version-control.md)
- [Get command](get-command.md)
- [Understand lock types](understand-lock-types.md)
- [Check in your work to the team's codebase](check-your-work-team-codebase.md)
