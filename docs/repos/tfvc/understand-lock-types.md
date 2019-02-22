---
title: Understand lock types
titleSuffix: Azure Repos
description: Understand lock types
ms.assetid: 5da8c9b3-78cf-4d49-827f-3f1a95bf4b9b
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Understand lock types

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

You can use the lock command to temporarily prevent changes to a particular file or folder in the source control server. This can be helpful if you want to change an item in your workspace and then check it in without being forced to resolve any merge conflicts. Only one user at a time may hold a lock on a particular file or folder. If you want to prevent access to an item in a persistent way, you should use the [Permission Command](permission-command.md) instead.

## Lock Types

Team Foundation provides two types of locks: *check-in locks* and *check-out locks*.

### Check-in lock

A check-in lock is less restrictive than a check-out lock. When you apply a check-in lock, users can continue to make local changes to the item in other workspaces. But those changes cannot be checked in until you explicitly remove the check-in lock from the item or implicitly remove it by checking in your changes to the file.

### Check-out lock

In Visual Studio Team Foundation Server 2012, check-out locks are generally not effective because of local workspaces (see [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md)). Specifically, check-out locks are:

-   Not enforceable because other users might be using local workspaces.

-   Not available if you are using a local workspace.

-   Disabled if a member of the Administrators security group of your project collection has enabled asynchronous checkout for your team's server workspaces.

A check-out lock prevents users who are using server workspaces from checking out and making changes to the locked item in their workspaces. You cannot apply a check-out lock to an item for which any [pending changes](develop-code-manage-pending-changes.md) exist, in any workspace other than your own.

## How Locking Works

If a file is checked out when you lock it, its check-out record is modified to contain the new lock type. If the files are not checked out, a "lock" change is added to the set of pending workspace changes. Unlike the check-out command, the lock command does not automatically make a file editable.

Team Foundation unlocks an item automatically when you check in pending changes in the workspace where it is locked. Locks are also released if the pending changes for a file are undone by using the undo command.

Locks on folders are implicitly recursive. If you lock a folder, you do not have to lock the files that it contains unless you want to apply the more restrictive check-out lock to a file in a folder that has a check-in lock.

Only one user at a time may hold a lock on a particular file or folder. You can learn which files are locked in the Team Foundation version control server and by whom they were locked by using the [Status command](status-command.md).

A lock may be placed either as its own operation or as part of several other operations. These include rename, checkout, delete, undelete, merge, branch, and add to source control. When you lock an item as part of an add to source control or branch operation, Team Foundation places the lock on the server path where the new item will be created. This prevents another user from adding or branching a file to the same location. When you lock an item by using the rename command, both old and new server paths are locked.

## Unlocking an Item

You can unlock an item explicitly by using the unlock command or implicitly when you check in. When you check in pending changes to a locked item, Team Foundation removes any locks.

> **Note:**  
> By default, the UnlockOther permission is granted to administrators only. If you have the UnlockOther permission, you can remove a lock from an item in the workspace of another user by using the [Lock Command](lock-command.md).

## See Also

#### Other Resources

 [Work with version control locks](work-version-control-locks.md) 

 [Create and work with workspaces](create-work-workspaces.md) 

 [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 
