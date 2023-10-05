---
title: Undo TFVC command
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control undo command to discard one or more pending changes to files or folders.
ms.assetid: e10ca7c5-98d5-4c51-99fa-74b4eb7ceb49
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 12/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Undo command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `undo` command discards one or more pending changes to files or folders.
 
## Prerequisites

By default, members of the project **Contributors** group have permissions to contribute to a repository and use the `undo` command in their own workspaces. To undo pending changes in another user's workspace, you must have the **Administer workspaces** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf undo [/workspace:<workspace-name>[;<workspace-owner>]]
[/recursive] <item-specification> [/noprompt] [/login:<username>,[<password>]]
[/collection:<team-project-collection-url>]
```

## Parameters

:::row:::
   :::column span="1":::
   Parameter
   :::column-end:::
   :::column span="3":::
   Description
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection:<team-project-collection-url>`
   :::column-end:::
   :::column span="3":::
   Specifies the URL of the project collection that contains the items, for example, `https://myserver:8080/tfs/DefaultCollection`.

   If you don't use the `/workspace` option, the project collection that contains the workspace that maps the current directory is used by default.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<item-specification>`
   :::column-end:::
   :::column span="3":::
   Specifies the scope of the items. You can specify more than one `<item-specification>` argument. For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user account to use to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Suppresses the display of windows and dialog boxes and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Recursively undoes changes to items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/workspace <workspace-name>[;<workspace-owner>]`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the workspace to undo pending changes in. If not specified, the workspace that maps the current directory is used.

   You can specify `<workspace-owner>` to undo a pending change in a workspace that belongs to a specific user. If you don't provide this argument, the workspace that's owned by the current user is used by default. But if you provide the `/login` argument with a username, the workspace that's owned by that user is used. You must have the **UndoOther** permission set to **Allow** to undo changes in another user's workspace.

   > [!Note]  
   > You can use the `undo` command to undo a pending change in a remote workspace that's still in use. Before continuing work in that workspace, a user must sign in to the machine that hosts the workspace and get the items that are affected by the undo operation. For more information about the `get` command and its `/all` argument, see [Get command](get-command.md).
  :::column-end:::
:::row-end:::

## Remarks

For each item that has a pending [edit](check-out-edit-files.md) change, the `undo` command determines whether the file has been modified on disk. If the file has been modified and the `/noprompt` option hasn't been specified, the system prompts you to confirm that you want to proceed. On the keyboard, select:

- **N** to leave the change in place.
- **Y** to proceed with only the current change.
- **A** to proceed with this file and any other modified files that are detected.

The `undo` command removes any [locks](work-version-control-locks.md) on the specified items.

## Examples

The following command removes pending changes to the *program.cs* file:

```
c:\code\SiteApp\Main\SolutionA\Project1>tf undo program.cs
```

The following command removes pending changes to all items in the *c:\\code\\SiteApp\\Main* folder and its subfolders:

```
c:\code\SiteApp\Main>tf undo * /recursive
```

The following command removes pending changes to the *program.cs* file in the specified collection and remote workspace:

```
c:\>tf undo /collection:https://fabrikam-3:8080/tfs/DefaultCollection
/workspace:FABRIKAM-1;PatI $/SiteApp/Main/SolutionA/Project1/program.cs
```

## Tips

- To view a list of pending changes in the current workspace or in a remote workspace, use the `status` command. For more information, see [Status command](status-command.md).  
- You can use the `/workspace` option, and as needed, the `/collection` option, to undo changes on a remote development machine. This capability is especially useful in cases when a file has been checked out and possibly locked on a development machine that you can't access. For more information, see the explanation of the `/workspace` argument, earlier in this article.  
- Sometimes you need to clean your workspace, for example, when your work is interrupted by a more urgent task. If you want to preserve the pending changes instead of undoing them, you can suspend them by using the `shelve` command. For more information, see [Shelve command](shelve-command.md). You can also preserve the position of your open windows, breakpoints, and other important cues. For more information, see [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).
- Besides undoing pending changes, you can also discard changes that have already been checked in. For more information, see [Undelete command](undelete-command.md) and [Rollback command (Team Foundation Version Control)](rollback-command-team-foundation-version-control.md).


## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Develop code and manage pending changes](develop-code-manage-pending-changes.md) 
