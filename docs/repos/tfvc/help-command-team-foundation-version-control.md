---
title: Help Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Help Command (Team Foundation Version Control)
ms.assetid: 8cd73edc-8d60-42be-a840-616e6207a1d8
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 12/17/2021
monikerRange: '<= azure-devops'
---


# Help command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

The **help** command displays information about syntax for a Team Foundation version control command.

## Prerequisites

Requires installation of a version of Visual Studio on your local computer.  

## Syntax

```
tf help commandname
```

## Parameters

### Argument

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
   *commandname*
   :::column-end:::
   :::column span="3":::
   Specifies a Team Foundation command for which to display help about the syntax.
   :::column-end:::
:::row-end:::

## Remarks
If you do not know which command you need, type **tf help** for a list of all commands.

If you specify the *commandname* parameter, the command line displays information about the arguments and options for that command. If the system cannot find a match for the *commandname*, it searches for aliases and short names. If it cannot find any matching command, alias, or short name, you will get an error.

The option **/?** is an alias for **help**. If you use the **/?** option together with a command, the system invokes the **help** command and it displays information about syntax.

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

### List tf commands 

The following example displays a list of the version control commands.

> [!div class="tabbedCodeSnippets"]
```tf
>tf vc help
Microsoft (R) TF - Team Foundation Version Control Tool, Version 16.171.31930.1
Copyright (c) Microsoft Corporation.  All rights reserved.

Type tf vc help <command name> for command line description.
Type tf msdn <command name> for full documentation in Microsoft Document
Explorer.

Commands:
tf vc add            Adds new files and folders from a local file system
                     location to Team Foundation version control.

tf vc branch         Copies an item or set of items, including metadata and
                     version control history, from one location to another on
                     the Team Foundation version control server and in the
                     workspace.

tf vc branches       Displays the history of a branch for a specified file
                     or folder.

tf vc changeset      Displays information about a changeset and lets you
                     change the associated attributes, such as comments and
                     check-in notes.

tf vc checkin        Commits pending changes in the current workspace to Team
                     Foundation version control.

tf vc checkout       Makes the local file writable and changes its pending
                     Change status to "edit" in the workspace. Edit is an
                     alias for the Checkout command.

tf vc certificates   Configures how client authentication certificates are
                     used when connecting to Azure DevOps through a secure connection.

tf vc configure      Enables an administrator to view and change the following
                     configuration settings for a team project in the Source
                     Control Settings dialog box:
                     - Check-out settings
                     - Check-in policies
                     - Check-in notes

tf vc delete         Removes files and folders from Team Foundation version
                     control and deletes them from the disk.

tf vc destroy        Destroys, or permanently deletes, version-controlled
                     files from Team Foundation version control.

tf vc diff           Compares, and if it is possible, displays differences
                     between two files, files in two folders, or a shelveset
                     and a local or server file.

tf vc dir            Displays all or part of the contents of Team Foundation
                     version control.

tf vc folderdiff     Display a visual representation of the differences between
                     files in two server folders, in a server folder and a
                     local folder, or in two local folders.

tf vc get            Retrieves a read-only copy of a file from Azure DevOps
                     Server to the workspace and creates folders on disk to
                     contain it.

tf vc history        Displays the revision history for one or more files and
                     folders.

tf vc info           Displays information about items under version control.

tf vc label          Attaches a label to or removes a label from a version of a
                     file or folder in Team Foundation version control.

tf vc labels         Displays the list of labels in Team Foundation version
                     control.

tf vc localversions  Displays the version of one or more items in a workspace.

tf vc lock           Locks or unlocks a file or folder to deny or restore the
                     permissions of users to check out an item for edit into
                     a different workspace or to check in pending changes to
                     an item from a different workspace.

tf vc merge          Applies changes from one branch into another.

tf vc merges         Displays detailed information about past merges between
                     the specified source and destination branches.

tf vc msdn           Launches the Microsoft Document Explorer to the
                     documentation page for the command.

tf vc permission     Modifies the user access control list (ACL) and displays
                     authorization settings for an item under version control.

tf vc property       Displays and pends changes on properties associated with
                     items under version control.

tf vc reconcile      Compares the current state of the workspace on disk with
                     the server's view, either to clean the workspace or to
                     promote unpended local changes.

tf vc rename         Changes the name or the path of a file or folder. You
                     can use the rename command or the alias move, to move a
                     file or folder to a new location.

tf vc resolve        Resolves conflicts between changed items in your
                     workspace and the latest or destination versions of items
                     on the server.

tf vc resolvePath    Resolves a server path to a local path in your workspace.

tf vc rollback       Rolls back the changes in a single or a range of
                     changesets.

tf vc shelve         Stores a set of pending changes, together with pending
                     check-in notes, a comment, and a list of associated work
                     items in Azure DevOps Server without actually checking
                     them into the version control server.

tf vc shelvesets     Displays information about a set of shelved changes.

tf vc status         Displays information about pending changes to items in
                     one or more workspaces.

tf vc undelete       Restores items that were previously deleted.

tf vc undo           Removes pending changes from a workspace.

tf vc unlabel        Removes an item from an existing label in Team Foundation
                     version control.

tf vc unshelve       Restores shelved file revisions, check-in notes, comments,
                     and work item associations to the current workspace or
                     removes an existing shelveset from the server.

tf vc view           Retrieves a specific version of a file to a temporary
                     folder on your computer and displays it.

tf vc workfold       Creates, modifies, or displays information about the
                     mappings between your workspace folders and the Team
                     Foundation version control folders.

tf vc workspace      Creates, deletes, displays, or modifies properties and
                     mappings associated with a workspace.

tf vc workspaces     Displays information about workspaces in the system and
                     updates cached information about a user name or computer
                     name change on Azure DevOps Server.
```

### View help for tf view command

The following example displays help information for the **view** command.

> [!div class="tabbedCodeSnippets"]
```tf
>tf view /help
Microsoft (R) TF - Team Foundation Version Control Tool, Version 16.171.31930.1
Copyright (c) Microsoft Corporation.  All rights reserved.

Retrieves a specific version of a file to a temporary folder on your computer
and displays it.

tf vc view [/collection:TeamProjectCollectionUrl]
           [/console] [/recursive] [/output:localfile]
           [/shelveset:shelvesetname[;owner]] [/noprompt] itemspec
           [/version:versionspec] [/login:username,[password]]

Versionspec:
    Date/Time         D"any .NET Framework-supported format"
                      or any of the date formats of the local machine
    Changeset number  Cnnnnnn
    Label             Llabelname
    Latest version    T
    Workspace         Wworkspacename;workspaceowner
```

### View help for workspace command

The following example displays information about syntax for the **workspace** command.

> [!div class="tabbedCodeSnippets"]
```tf
>tf workspace /help 
Microsoft (R) TF - Team Foundation Version Control Tool, Version 16.171.31930.1
Copyright (c) Microsoft Corporation.  All rights reserved.

Creates, deletes, displays, or modifies properties and mappings associated
with a workspace.

tf vc workspace /new [/noprompt] [/template:workspacename[;workspaceowner]]
                [/computer:computername] [/comment:("comment"|@commentfile)]
                [workspacename[;workspaceowner]]
                [/collection:TeamProjectCollectionUrl]
                [/permission:(Private|PublicLimited|Public)]
                [/location:(local|server)]
                [/filetime:(current|checkin)]
                [/login:username,[password]]

tf vc workspace /delete [/collection:TeamProjectCollectionUrl]
                workspacename[;workspaceowner]
                [/login:username,[password]]

tf vc workspace [/collection:TeamProjectCollectionUrl]
                [/comment:("comment"|@commentfile)]
                [/newname:workspacename] [workspacename[;workspaceowner]]
                [/newowner:ownername] [/computer:computername]
                [/permission:(Private|PublicLimited|Public)]
                [/location:(local|server)]
                [/filetime:(current|checkin)]
                [/login:username,[password]]
```

The following example also displays the same information about syntax for the **workspace** command.

```
c:\projects>tf workspace /?
```

## Related articles

- [Msdn Command](msdn-command.md)

