---
title: Undelete Command
titleSuffix: Azure Repos
description: Undelete Command
ms.assetid: f3b7c02e-7799-4632-b786-551f31741401
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Undelete command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]


The **undelete** command restores items that were previously deleted.

> [!NOTE]
> The results of this command are not visible in other workspaces until you perform a check-in operation. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites

To use the **undelete** command, you must have the **Check out** permission set to **Allow**. If you include the **/lock** option with a value other than none, you must have the **Lock** permission set to **Allow**. Additionally, you must own the workspace or have the global **Administer workspaces** permission set to **Allow**. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf undelete [/noget] [/lock:(none|checkin|checkout)] 
[/recursive] itemspec[;deletionID] [/login:username,[password]]
```

## Parameters

### Argument

| **Argument** |                                                                                                                 **Description**                                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  *itemspec*  | Identifies the file or folder to undelete. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md). |
| *deletionID* |                                                                           Specifies a unique identifier that disambiguates multiple deleted items with the same name.                                                                           |
|  *username*  |                                                            Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName\* or *UserName*.                                                            |

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
   **/noget**
   :::column-end:::
   :::column span="3":::
   Restores the deleted item to your workspace and then, pending completion of a check-in operation, restores the item on the server but does not immediately retrieve a physical copy of the item to disk.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/lock**
   :::column-end:::
   :::column span="3":::
   Prevents other users from checking in or checking out the specified files. For more information, see [Understanding Lock Types](understand-lock-types.md).

   **Lock Options:**  
   - **None**: Default. No lock is applied.
   - **Checkin**: Other users can check out the specified items but they cannot check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   - **Checkout**: Prevents other users from checking in or checking out any one of the specified items until you release the lock by performing a check in. If any other users have locked any one of the specified items, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Restores all files and subfolders from the specified directory.
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

The Undelete command of the tf command-line feature schedules specified files or folders for restoration pending the completion of a check-in operation. It also retrieves the specified items from the server to the local disk unless you explicitly include the **/noget** option.

When files or folders that have the same name have been deleted from the same server folder, you must include a value for the *deletionID* parameter to indicate which of the deleted items that you want to restore. You can obtain a *deletionID* using the **dir** command.

If you want to change the file after restoring it, you may check out the file for editing with the checkout command as usual.

When your *itemspec* specifies a folder, Team Foundation restores all its files and subfolders and the files they contain, by default. If you do not want to restore all the items in a folder, you must first undelete the folder and its items and then delete the items that you do not want to keep.

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example restores 314.cs to the server folder from which 314.cs was deleted and retrieves a read-only copy of the latest version in the current workspace.

```
C:\projects>tf undelete c:\math\314.cs
```

The following example displays deletion IDs for all items on the server that have been deleted more than one time.

```
c:\projects>tf dir $/ /deleted
```

-   Sample output:

    ```
	$/projects/math/314.cs;X10
	$/projects/math/314.cs;X11
    ```

The following example restores the X11 version of 314.cs to the server folder from which the file was deleted and retrieves a read-only copy of the latest version in the current workspace.

```
c:\projects>tf undelete 314.cs;X11
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Rename Command (Team Foundation Version Control)](rename-command-team-foundation-version-control.md)
- [Delete Command](delete-command-team-foundation-version-control.md)
- [Dir Command](dir-command.md)
- [Check in your work to the team's codebase](check-your-work-team-codebase.md)
- [Understanding Lock Types](understand-lock-types.md)
