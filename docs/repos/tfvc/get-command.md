---
title: Use the Get command to download TFVC files/folders
titleSuffix: Azure Repos
description: Get files or folders under TFVC version control using the Get command
ms.assetid: f374dfcb-9c1b-4cab-9a20-3c81d29593a3
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Get command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Gets (downloads) either the latest version or a specified version of one or more files or folders from Team Foundation Server to the workspace. Although the **Get** command provides a different user interface than Visual Studio (see [Download (get) files from the Server](download-get-files-from-server.md)), the process is fundamentally the same.

**Requirements:** See [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf get [itemspec] [/version:versionspec] [/all] [/overwrite] [/force] [/remap]
[/recursive] [/preview] [/noautoresolve] [/noprompt]
[/login:username,[password]]
```

## Parameters

:::row:::
   :::column span="1":::
   **Parameter**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **/all**
   :::column-end:::
   :::column span="1":::
   If you use a [local workspace](decide-between-using-local-server-workspace.md) (recommended), then it&#39;s unlikely you will have to use this option.

   You can use this option to restore an item that you have accidentally deleted from a server workspace.

   Your Team Foundation Server maintains an internal record of all the items the workspace contains, including the version of each. By default, when you get files, if the internal record on the server indicates the workspace already has the version you are getting, then it does not retrieve the item. This option gets the items regardless of the data contained in this internal record.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/force**
   :::column-end:::
   :::column span="1":::
   Combines **/all** and **/overwrite**.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *itemspec*
   :::column-end:::
   :::column span="1":::
   Specifies the scope of the items to get. You can specify more than one *itemspec* argument. If no *itemspec* is provided, the system recursively gets all items in the current workspace.

   For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**:*username*,[*password*]
   :::column-end:::
   :::column span="1":::
   Specifies the user account to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noautoresolve**
   :::column-end:::
   :::column span="1":::
   By default, the system automatically attempts to **AutoResolve All** (see [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md)). Specify this option to disable this default behavior.
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
   **/overwrite**
   :::column-end:::
   :::column span="1":::
   If you use a [local workspace](decide-between-using-local-server-workspace.md) (recommended), then it is unlikely you will have to use this option.

   By default, the system does not retrieve an item if it is writable (that is, if its read-only attribute is cleared) on the client machine. This option overrides the default behavior and overwrites a writable item, unless the item is checked out.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/preview**
   :::column-end:::
   :::column span="1":::
   Displays what would occur, without actually performing the **Get** operation.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="1":::
   Recursively gets items in the specified directory and any subdirectories. If you do not specify an *itemspec*, then this option is implied.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/remap**
   :::column-end:::
   :::column span="1":::
   See [phkelley&#39;s blog: tf get /remap](/archive/blogs/phkelley/tf-get-remap).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/version**:*versionspec*
   :::column-end:::
   :::column span="1":::
   Specifies the maximum version, or the minimum and the maximum versions, to display in the history data. The default is `/version:T` (the latest version).

   For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::


## Examples

In all the following examples, assume that `$/SiteApp/Main/` is mapped to `c:\\code\\SiteApp\\Main\\` in the workspace.

### Get the latest version of all items in a workspace

```
c:\code\SiteApp\Main\SolutionA>tf get
```

Gets the latest versions of all items in the workspace. For example, the above command would recursively get all files in `$/SiteApp/Main/` including all its child folders.

### Recursively get the latest version of items of a certain type in a folder

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get *.cs /recursive
```

Gets the latest version of all C\# (.cs) files in `c:\\code\\SiteApp\\Main\\SolutionA\\Project1`.

###  Get the latest version of a file

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get program.cs
```

Gets the latest version of program.cs in Project1.

### Get a specific version of a file

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get program.cs;8
```

Gets version 8 of program.cs in Project1.

### Get the latest version of two files

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get file1.cs file2.cs
```

Gets the latest version of file1.cs and file2.cs in Project1.

### Synchronize a workspace to match a version of the team's codebase

```
c:\code\SiteApp\Main>tf get /v:15
```

Synchronizes the workspace to match the codebase as it existed when changeset 15 was created:

-   The name and content of every item in the workspace is changed to match the state it was in on the server.

-   Items that were deleted after that changeset are restored to the workspace.

-   Items that were added after that changeset are deleted from the workspace.

### Synchronize a workspace to match a labeled version of the team's codebase

```
c:\code\SiteApp\Main>tf get /v:LLastKnownGood
```

Synchronizes the workspace to match the items in the codebase that are [labeled](use-labels-take-snapshot-your-files.md) **LastKnownGood**:

-   The name and content of every labeled item in the workspace is changed to match the state it was in on the server.

-   Labeled items that were deleted are restored to the workspace.

-   Items that are not labeled on the server are deleted from the workspace.

## Work in Visual Studio

-    [Download (get) files from the Server](download-get-files-from-server.md)  Use Visual Studio to get files and folders.

## Tips

-   ![Tip](media/get-command/IC572374.png) If you are beginning a new task, it's probably a good idea for you to run `tf get` (you can do so from any directory in your workspace) to download the latest files from the server before you check out files and begin your work.

-   ![Tip](media/get-command/IC572374.png) As needed, this command creates folders on disk to contain the child items that the command is downloading.

-   ![Tip](media/get-command/IC572374.png) You can view information about the history of an item using the [History command](history-command.md) and the [Changeset Command](changeset-command.md).

-   ![Tip](media/get-command/IC572374.png) If you are concerned about what changes might occur to the files in the workspace, you can use the **/preview** option to see the changes that would occur without actually implementing them.

-   ![Tip](media/get-command/IC572374.png) Conflicts could block your get. A typical cause of conflicts is trying to get an item on which you have pending changes. You can use the [Resolve Command](resolve-command.md) to resolve these conflicts.