---
title: Status command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control (TFVC) Status command to display information about pending changes and pending change candidates.
ms.assetid: e9f0b3a1-b8b1-45cf-b113-9fea2948405d
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 12/02/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Status command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


The Team Foundation Version Control (TFVC) `status` command, or its alias `stat`, displays information about pending changes to files and folders and pending change candidates in one or more workspaces. When you use the `/shelveset` option, the command displays information about pending changes in a shelveset.

> [!NOTE]
> A pending change candidate is a file in the workspace's folder or subfolder that isn't added to version control. To view all pending changes candidates in Visual Studio, go to **Team Explorer** > **Pending Changes** > **Excluded Changes**, and then select **Detected**.


## Prerequisites

To use the `status` command, you must have the **Read** permission for the source item and the **Check out** and **Merge** permissions for the target folder set to **Allow**. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf stat[us] itemspec [/collection:TeamProjectCollectionUrl]
[/login:username,[password]]
([/workspace:workspacename[;workspaceowner]] 
| [/shelveset:shelvesetname[;shelvesetowner]])
[/format:(brief|detailed)] [/recursive][/user:(*|username)]
[/nodetect]
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
   `/collection: <TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   When you use the `/workspace` option, specifies the URL of the project collection that contains the workspace that contains the pending changes. For example: `http://myserver:8080/tfs/DefaultCollection`.

   If not specified, by default the project collection is presumed to be the one that contains the workspace that maps the current directory.

   Ignored if you don't use the `/workspace` option.

   > [!Note]  
   > See [Remarks](#remarks) for the limitations of this option.
  :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/format`
   :::column-end:::
   :::column span="3":::
   Specifies how much detail to display about each pending change:
   - `Brief` (default): Displays one line about each pending change that includes: file name, changes, whether the item is locked as indicated by an asterisk \*, local path, and user if using the `/collection` and `/workspace` options. Some of the data might be truncated.
   - `Detailed`: Displays a full description of each pending change. In addition to the above information, this option displays more data such as date and time.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Specifies the items for which you want pending change data. For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md). You can specify more than one `itemspec` argument.
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
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Recursively retrieves data about pending changes to items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/shelveset:<shelvesetname>[;<shelvesetowner>]`
   :::column-end:::
   :::column span="3":::
   Specifies the shelveset that contains the changes you want to list.

   This option can't be combined with the `/workspace` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/user`
   :::column-end:::
   :::column span="3":::
   Lists all pending changes made by the specified user. An asterisk `*` includes data about changes from all users. The default is the current user.

   Acceptable values for this option:
   - `<username>`
   - `<useraccount>`
   - Asterisk `*`
   
   > [!Note]  
   > See [Remarks](#remarks) for the limitations of this option.
  :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/workspace:<workspacename>[;<workspaceowner>]`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the workspace that contains the pending changes. If not specified, the workspace is the one that maps the current directory.

   You can specify `workspaceowner` to get data about pending changes in a workspace that belongs to a specific user. If not specified, the workspace is presumed to be the current user, or if specified, the `/login:<username>`.

   This option can't be combined with the `/shelveset` option.
   
   > [!Note]  
   > See [Remarks](#remarks) for the limitations of this option.
  :::column-end:::
:::row-end:::

## Remarks

You can use the `status` command to view pending changes in the current workspace, for example the workspace that maps the current directory, regardless of whether it's a local workspace or a server workspace. You can also use this command to view pending changes in a remote server workspace, for example changes made by another user on another dev machine, by using the `/collection`, `/user`, and `/workspace` options. However, you can't view pending changes in a remote local workspace.

For more information, see [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md).

## Examples

In all the following examples, assume that *$/SiteApp/Main/* is mapped to *c:\\code\\SiteApp\\Main\\* in the workspace.

### List all changes in the current workspace

The following example lists all pending changes in the workspace:
```
c:\code\SiteApp\Main\SolutionA\>tf stat
```


### List all changes in a folder

The following example lists all pending changes to all items in the *SolutionA* folder:

```
c:\code\SiteApp\Main>tf stat SolutionA\*
```

### List all changes in a folder and its subfolders

The following example lists pending changes to all items in the *SolutionA* folder, including changes in its subfolders:

```
c:\code\SiteApp\Main>tf stat SolutionA\* /recursive
```

## Next steps

- Most changes you make to files under version control are queued as pending changes in your workspace. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md) and [Create and work with workspaces](create-work-workspaces.md).

- You can use the [Difference command](difference-command.md) to get details about edit changes, or changes to the content, in a file.

- If you need to set aside changes, and perhaps also want to clean your workspace for another task, use the [Shelve command](shelve-command.md). For more information about shelvesets, see [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).

- When you're ready to check in changes to the server, use the [Checkin command](checkin-command.md).

- For more information about how to use the `tf` utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
