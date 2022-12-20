---
title: Understand lock types
titleSuffix: Azure Repos
description: Understand how locks work in Team Foundation Version Control. See the difference between check-in locks and check-out locks.
ms.assetid: 5da8c9b3-78cf-4d49-827f-3f1a95bf4b9b
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 12/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Understand lock types

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use the Team Foundation Version Control (TFVC) `lock` command to temporarily prevent changes from being made to a particular file or folder in the source control server. This capability can be helpful if you want to change an item in your workspace and then check it in without being forced to resolve any merge conflicts. Only one user at a time can hold a lock on a particular file or folder. If you want to block access to an item in a persistent way, you should use the [Permission command](permission-command.md) instead.

## Lock types

Azure DevOps provides two types of locks: *check-in locks* and *check-out locks*.

### Check-in lock

A check-in lock is less restrictive than a check-out lock. When you apply a check-in lock, users can continue to make local changes to the locked item in other workspaces. But those changes can't be checked in until you remove the lock by taking one of the following actions:

- Explicitly remove the check-in lock from the item
- Implicitly remove the lock by checking in your changes to the file

### Check-out lock

In Azure DevOps, check-out locks are generally not effective because of local workspaces. For more information, see [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md). Specifically, check-out locks are:

-   Not enforceable because other users might be using local workspaces.
-   Not available if you use a local workspace.
-   Disabled if a member of the Administrators security group of your project collection has enabled asynchronous checkout for your team's server workspaces.

A check-out lock prevents users who use server workspaces from checking out and making changes to the locked item in their workspaces. You can't apply a check-out lock to an item that [pending changes](develop-code-manage-pending-changes.md) exist for, in any workspace other than your own.

## How locking works

If a file is checked out when you lock it, its check-out record is modified to contain the new lock type. If the file isn't checked out, a lock change is added to the set of pending workspace changes. Unlike the `checkout` command, the `lock` command doesn't automatically make a file editable.

TFVC unlocks an item automatically when you check in pending changes in the workspace where it's locked. Locks are also released if the pending changes for a file are undone by using the `undo` command.

Locks on folders are implicitly recursive. If you lock a folder, you don't have to lock the files that it contains. One exception is when a folder has a check-in lock, which is less restrictive than a check-out lock. If you want to use a check-out lock on a file in that folder, you need to apply that check-out lock.

Only one user at a time can hold a lock on a particular file or folder. You can use the [Status command](status-command.md) to see which files are locked in the Azure DevOps server and who locked them.

A lock can be placed either as its own operation or as part of several other operations. These operations include `rename`, `checkout`, `delete`, `undelete`, `merge`, `branch`, and `add`. When you lock an item as part of adding to source control or branching, TFVC places the lock on the server path where the new item is created. This placement prevents another user from adding or branching a file to the same location. When you lock an item by using the `rename` command, both old and new server paths are locked.

## Unlock an item

You can unlock an item explicitly by using the `unlock` command or implicitly when you check in. When you check in pending changes to a locked item, Azure DevOps removes any locks.

> [!NOTE]
> By default, the **UnlockOther** permission is granted to administrators only. If you have the **UnlockOther** permission, you can remove a lock from an item in the workspace of another user by using the [Lock command](lock-command.md).

## Related articles

-  [Work with version control locks](work-version-control-locks.md) 
-  [Create and work with workspaces](create-work-workspaces.md) 
-  [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 
