---
title: Status command
titleSuffix: Azure Repos
description: Status command
ms.assetid: e9f0b3a1-b8b1-45cf-b113-9fea2948405d
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Status command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Displays information both about pending changes to files and folders and pending change candidates in one or more workspaces. Or, when you use the **/shelveset** option, displays information about pending changes in a shelveset.

> [!NOTE]
> A pending changes candidate is a file in the workspace's folder or sub folder that wasn't added to version control. To view all pending changes candidates in Visual Studio, go to **Team Explorer** > **Pending Changes** > **Excluded Changes**, and then select **Detected**.  

**Requirements:** See [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf stat[us] itemspec [/collection:TeamProjectCollectionUrl]
[/login:username,[password]]
([/workspace:workspacename[;workspaceowner]] 
| [/shelveset:shelvesetname[;shelvesetowner]])
[/format:(brief|detailed)] [/recursive][/user:(*|username)]
[/nodetect]
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
   **/collection**: *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   When you use the **/workspace** option, specifies the URL of the project collection that contains the workspace that contains the pending changes. For example: `http://myserver:8080/tfs/DefaultCollection`. If not specified, by default the project collection is presumed to be the one that contains the workspace that maps the current directory.

   Ignored if you do not use the **/workspace** option.

   > [!Note]  
   > See Remarks, below, for the limitations of this option.
  :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/format**
   :::column-end:::
   :::column span="3":::
   Specifies how much detail to display about each pending change:
   - **Brief** (default): Displays one line about each pending change that includes: file name, changes, whether the item is locked (indicated by an asterisk (*) symbol), local path, and user (if using the **/collection** and **/workspace** options). Some of the data might be truncated.*
   - **Detailed**: Displays a full description of each pending change. In addition to the above information, this option displays additional data such as date and time, and lock.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *itemspec*
   :::column-end:::
   :::column span="3":::
   Specifies the items for which you want pending change data. For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md). You can specify more than one *itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user account to use to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Recursively retrieves data about pending changes to items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/shelveset**:*shelvesetname*[;*shelvesetowner*]
   :::column-end:::
   :::column span="3":::
   Specifies the shelveset that contains the changes you want to list.

   This option cannot be combined with the **/workspace** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/user**
   :::column-end:::
   :::column span="3":::
   Lists all pending changes made by the specified user. An asterisk (**/***) symbol includes data about changes from all users. The default is the current user.

   Acceptable values for this option:
   - username
   - useraccount
   - an asterisk
   
   > [!Note]  
   > See Remarks, below, for the limitations of this option.
  :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/workspace** *workspacename*[;*workspaceowner*]
   :::column-end:::
   :::column span="3":::
   Specifies the name of the workspace that contains the pending changes. If not specified, the workspace is the one that maps the current directory.

   You can specify *workspaceowner* to get data about pending changes in a workspace that belongs to a specific user. If not specified, the workspace is presumed to be the current user, or if specified, the **\/login**:*username*.

   This option cannot be combined with the **/shelveset** option.
   
   > [!Note]  
   > See Remarks, below, for the limitations of this option.
  :::column-end:::
:::row-end:::

## Remarks

You can use the **Status** command to view pending changes in the current workspace (for example, the workspace that maps the current directory in the command prompt window) regardless of whether it is a local workspace or a server workspace. You can also use this command to view pending changes in a remote server workspace (for example, changes made by another user on another dev machine) by using the **/collection**, **/user**, and **/workspace** options. However, you cannot view pending changes in a remote local workspace.

Also see: [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md).

## Examples

In all the following examples, assume that `$/SiteApp/Main/` is mapped to `c:\\code\\SiteApp\\Main\\` in the workspace.

### List all changes in the current workspace

```
c:\code\SiteApp\Main\SolutionA\>tf stat
```

Lists all pending changes in the workspace.

### List all changes in a folder

```
c:\code\SiteApp\Main>tf stat SolutionA\*
```

Lists all pending changes to all items in the SolutionA folder.

### List all changes in a folder and its subfolders

```
c:\code\SiteApp\Main>tf stat SolutionA\* /recursive
```

Lists pending changes to all items in the SolutionA folder, including those in its subfolders).

## Work in Visual Studio

-    [Develop code and manage pending changes](develop-code-manage-pending-changes.md)  Use Visual Studio to view and manage pending changes.

## Tips

-   Most changes you make to files under version control are queued as pending changes in your workspace. See [Develop code and manage pending changes](develop-code-manage-pending-changes.md) and [Create and work with workspaces](create-work-workspaces.md).  
-   You can use the [Difference Command](difference-command.md) to get details about edit changes (changes to the content) in a file.  
-   If you need to set aside changes (and perhaps also want to clean your workspace for another task), use the [Shelve Command](shelve-command.md). For more information about shelvesets, see [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).  
-   When you are ready to check in changes to the server, use the [Checkin command](checkin-command.md).
