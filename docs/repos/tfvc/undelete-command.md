---
title: Undelete command
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control undelete command to restore deleted items. Specify options to use locks or to prevent retrieval from the server.
ms.assetid: f3b7c02e-7799-4632-b786-551f31741401
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 12/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Undelete command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


The Team Foundation Version Control (TFVC) `undelete` command restores items that were previously deleted.

> [!NOTE]
> The results of this command aren't visible in other workspaces until you perform a check-in operation. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites

To use the `undelete` command:

- You must have the **Check out** permission set to **Allow**.
- If you include the `/lock` option with a value other than `None`, you must have the **Lock** permission set to **Allow**.
- You must own the workspace or have the global **Administer workspaces** permission set to **Allow**.

For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf undelete [/noget] [/lock:(none|checkin|checkout)] 
[/recursive] <item-specification>[;<deletion-ID>] [/login:<username>,[<password>]]
```

## Parameters

The following sections describe arguments and options of the `undelete` command.

### Arguments

| Argument | Description |
| --- | --- |
| `<item-specification>` | Identifies the file or folder to restore. For more information about how TFVC parses `<item-specification>` values to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md). |
| `<deletion-ID>` | Specifies a unique identifier that disambiguates multiple deleted items that have the same name. |
| `<username>` | Provides a value to the `/login` option. You can specify this value as either `DOMAIN\<username>` or `<username>`. |

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
   `/noget`
   :::column-end:::
   :::column span="3":::
   Restores the deleted item to your workspace. Pending completion of a check-in operation, this option then restores the item on the server but doesn't immediately retrieve a physical copy of the item to disk.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/lock`
   :::column-end:::
   :::column span="3":::
   Prevents other users from checking in or checking out the specified files. For more information, see [Understand lock types](understand-lock-types.md).

   **Lock options:** 

   - `None`: This option is the default value. No lock is applied.
   - `Checkin`: Other users can check out the specified items but they can't check in revisions to locked files until you release the lock by checking in the locked files. If any other users have locked any of the specified items, the lock operation fails.
   - `Checkout`: This option prevents other users from checking in or checking out any of the specified items until you release the lock by checking in the locked files. If any other users have locked any of the specified items, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Restores all files and subfolders from the specified directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the username and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks

The `undelete` command of the `tf` command-line feature schedules specified files or folders for restoration pending the completion of a check-in operation. It also retrieves the specified items from the server to the local disk unless you explicitly include the `/noget` option.

When files or folders that have the same name have been deleted from the same server folder, you must include a value for the `<deletion-ID>` parameter to indicate which of the deleted items you want to restore. You can obtain a `<deletion-ID>` by using the `dir` command.

If you want to change a file after restoring it, check out the file for editing by using the `checkout` command as usual.

When your `<item-specification>` value specifies a folder, TFVC restores by default all the folder's files and subfolders and the files that they contain. If you don't want to restore all the items in a folder, you must first undelete the folder and its items and then delete the items that you don't want to keep.

For more information about how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example restores *314.cs* to the server folder that *314.cs* was deleted from. The command also retrieves a read-only copy of the latest version in the current workspace.

```
C:\projects>tf undelete c:\math\314.cs
```

The following example displays deletion IDs for all items on the server that have been deleted more than one time:

```
c:\projects>tf dir $/ /deleted
```

Output from the previous command might look like the following sample:

```
$/projects/math/314.cs;X10
$/projects/math/314.cs;X11
```

The following example restores the X11 version of *314.cs* to the server folder that the file was deleted from. The command also retrieves a read-only copy of the latest version in the current workspace.

```
c:\projects>tf undelete 314.cs;X11
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Rename command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md)
- [Delete command](delete-command-team-foundation-version-control.md)
- [Dir command](dir-command.md)
- [Check in your work to the team's codebase](check-your-work-team-codebase.md)
- [Understand lock types](understand-lock-types.md)
