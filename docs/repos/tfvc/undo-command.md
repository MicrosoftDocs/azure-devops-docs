---
title: Undo command
titleSuffix: Azure Repos
description: Undo command
ms.assetid: e10ca7c5-98d5-4c51-99fa-74b4eb7ceb49
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Undo command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Discards one or more pending changes to files or folders.

**Requirements:** See [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf undo [/workspace:workspacename[;workspaceowner]]
[/recursive] itemspec [/noprompt] [/login:username,[password]]
[/collection:TeamProjectCollectionUrl]
```

## Parameters


:::row:::
   :::column span="1":::
   Parameter
   :::column-end:::
   :::column span="1":::
   Description
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection** : *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="1":::
   Specifies the URL of the project collection that contains the items. For example: `http://myserver:8080/tfs/DefaultCollection`.

   If you do not use the **/workspace** option, by default the project collection is presumed to be the one that contains the workspace that maps the current directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *itemspec*
   :::column-end:::
   :::column span="1":::
   Specifies the scope of the items. You can specify more than one *itemspec* argument. For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="1":::
   Specifies the user account to use to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="1":::
   Suppresses the display of windows and dialog boxes and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="1":::
   Recursively undoes changes to items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/workspace** *workspacename*[;*workspaceowner*]
   :::column-end:::
   :::column span="1":::
   Specifies the name of the workspace in which you want to undo pending changes. If not specified, the workspace is the one that maps the current directory.

   You can specify *workspaceowner* to undo a pending change in a workspace that belongs to a specific user. If not specified, the workspace is presumed to be the current user, or if specified, the **/login:***username*. You must have the UndoOther permission set to Allow to undo changes in another user&#39;s workspace.
:::row:::
   :::column span="1":::
   **Note**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   If you use the **undo** command to undo a pending change in a remote workspace that is still in use, then before continuing work in that workspace, a user must log on to the machine that hosts the workspace and then get (and in some cases [get /all](get-command.md)) the items affected by the undo.
   :::column-end:::
:::row-end:::
  :::column-end:::
:::row-end:::

## Remarks

For each item on which there is a pending [edit](check-out-edit-files.md) change, the **undo** command determines if the file has been modified on disk. If the file has been modified and the **/noprompt** option has not been specified, the system prompts you to confirm that you want to proceed. Choose the **N** key to leave the change in place, the **Y** key to proceed with only the current change, or the **A** key to proceed with this and any other modified files that are subsequently detected.

The **undo** command removes any [locks](work-version-control-locks.md) on the items.

## Examples

### Remove pending changes to a file

```
c:\code\SiteApp\Main\SolutionA\Project1>tf undo program.cs
```

Removes all pending changes to program.cs.

### Recursively remove pending changes to all items in a folder

```
c:\code\SiteApp\Main>tf undo * /recursive
```

Removes all pending changes in the c:\\code\\SiteApp\\Main folder and all its subfolders.

### Remove pending changes to a file in a remote workspace

```
c:\>tf undo /collection:http://fabrikam-3:8080/tfs/DefaultCollection
/workspace:FABRIKAM-1;JuliaI $/SiteApp/Main/SolutionA/Project1/program.cs
```

Removes all pending changes to program.cs in the specified collection and workspace.

## Work in Visual Studio

-    [Develop code and manage pending changes](develop-code-manage-pending-changes.md)  Use Visual Studio to undo pending changes.

## Tips

-   To view a list of pending changes in the current or in a remote workspace, use the [Status command](status-command.md).  
-   You can use the **/workspace** option (and as needed, the **/collection** option) to undo changes on a remote dev machine. This capability is especially useful in cases when, for example, a file has been checked out and possibly locked on a dev machine that you cannot access. See the above explanation of the **/workspace** for information about how this works.  
-   If you need to clean your workspace (for example, because your work is interrupted by a more urgent task) and want to preserve the pending changes instead of undoing them, you can suspend them. See [Shelve Command](shelve-command.md). You can also preserve the position of your open windows, breakpoints, and other important cues. See [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).  
-   You can also discard changes that have already been checked in. See [Undelete Command](undelete-command.md) and [Rollback Command (Team Foundation Version Control)](rollback-command-team-foundation-version-control.md).
