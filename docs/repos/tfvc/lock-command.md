---
title: Use Lock Command to lock/unlock a TFVC file/folder
titleSuffix: Azure Repos
description: Lock or unlock files or folder under TFVC version control using the Lock Command
ms.assetid: 5b62627b-fdb3-4832-a387-811dcc2808e3
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Lock Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Locks or unlocks a file or folder to deny or restore the right of users to check out an item for edit into a different workspace or to check in pending changes to an item from a different workspace.

**Required Permissions**

To use the **lock** command, you must have the **Lock** permission set to **Allow**. Having the Unlock other user's changes permission set to **Allow** is required to remove a lock held by another user if you do not have **Write** permission for that user's workspace. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md#lock-permission).

```
tf lock itemspec /lock:(none|checkout|checkin) 
[/workspace:workspacename] [/recursive] [/login:username,[password]] [/collection:TeamProjectCollectionUrl] 
```

## Parameters

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
   Identifies the file or folder to lock or unlock. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Command-Line Options](/previous-versions/visualstudio/visual-studio-2010/4y2ash30(v=vs.100)).

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *workspacename*
   :::column-end:::
   :::column span="3":::
   The user-provided value for the **/workspace** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*&lt;em&gt;UserName</em> or *UserName.*
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the file or folder that you want to lock or unlock (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::


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
   Specifies a lock type or removes a lock from an item. For more information, see [Understanding Lock Types](understand-lock-types.md).
   Lock Options:
   - **None**

     Removes a lock from an item.

   - **Checkin**
   
     Enables an item to be checked out and edited in all workspaces but prevents users from checking in changes to the item outside the specified **/workspace** until you explicitly release the check-in lock. If the specified item is locked in any other workspace, the lock operation fails.

   - **Checkout**
  
     Prevents users from checking in or checking out the specified items until you explicitly release the lock. If users have locked any one of the specified items, or if pending changes exists against any one of the items, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/workspace**
   :::column-end:::
   :::column span="3":::
   Specifies the name of a different workspace in which to apply the lock. By default, the lock is applied in the workspace in which you are currently.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks
You can use the lock command to temporarily freeze the Team Foundation version control server version of an item so that you can check in a pending change without having to resolve any merge conflicts. If you want to permanently prevent access to an item in the Team Foundation version control server, you should use the [Permission Command](permission-command.md) instead.

> [!NOTE]
> As a courtesy to your teammates, notify them when you apply a lock to an item, explain why you are doing this, and estimate when you plan to remove the lock, if you can.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).

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

```
c:\projects>tf lock /lock:checkout 314.cs
```

The following example prevents other users from checking in changes to 1256.cs but enables them to check it out in their workspaces.

```
c:\projects>tf lock /lock:checkin 1256.cs
```

The following example prevents other users from pending changes to any items in the src/ folder in the Team Foundation version control server.

```
c:\projects>tf lock /lock:checkout $/src
```

The following example unlocks and makes all files in the src/ Team Foundation version control server folder available for check-out and check-in by other users.

```
c:\projects>tf lock /lock:none src/
```


## Related articles

- [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))
- [Checkout and Edit Commands](checkout-or-edit-command.md)
- [Status Command](status-command.md)
- [Understanding Lock Types](understand-lock-types.md)
- [Create a Workspace to Work with your Project](create-work-workspaces.md)
- [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))
- [Working with Version Control Locks](work-version-control-locks.md)