---
title: Get command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Get files or folders that are under TFVC version control by using the get command.
ms.assetid: f374dfcb-9c1b-4cab-9a20-3c81d29593a3
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/08/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Get command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `get` command gets, or downloads, either the latest version or a specified version of one or more files or folders from Azure DevOps Server to the workspace. The `tf get` command provides a different user interface than Visual Studio, but the process is fundamentally the same. For more information about using Visual Studio to get files and folders, see [Download (get) files from the server](download-get-files-from-server.md).

## Prerequisites

See [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

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
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   `/all`
   :::column-end:::
   :::column span="3":::
   You can use this option to restore an item that you've accidentally deleted from a server workspace. If you use a [local workspace](decide-between-using-local-server-workspace.md), which is recommended, it's unlikely that you'll have to use this option.
   
   TFVC maintains an internal record of all the items the workspace contains, including the version of each. By default, when you get files, if the internal record on the server indicates the workspace already has the version you're getting, it doesn't retrieve the item. This option gets all items regardless of the data the internal record contains.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/force`
   :::column-end:::
   :::column span="3":::
   Combines `/all` and `/overwrite`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Specifies the scope of the items to get. You can specify more than one `itemspec` argument. If no `itemspec` is provided, the system recursively gets all items in the current workspace.

   For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login <username>,[<password>]`
   :::column-end:::
   :::column span="3":::
   Specifies the user account to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noautoresolve`
   :::column-end:::
   :::column span="3":::
   By default, the system automatically attempts to **AutoResolve All** conflicts. For more information, see [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md). Specify this option to disable this default behavior.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Suppresses the display of Visual Studio windows and dialog boxes and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/overwrite`
   :::column-end:::
   :::column span="3":::
   By default, the system doesn't retrieve an item if it's writable, that is its read-only attribute is cleared, on the client machine. This option overrides the default behavior and overwrites a writable item, unless the item is checked out. If you use a [local workspace](decide-between-using-local-server-workspace.md) as recommended, it's unlikely that you'll have to use this option.

   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/preview`
   :::column-end:::
   :::column span="3":::
   Displays what would occur, without actually performing the `get` operation.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Recursively gets items in the specified directory and any subdirectories. If you don't specify an `itemspec`, this option is implied.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/remap`
   :::column-end:::
   :::column span="3":::
   See [phkelley's blog: tf get /remap](/archive/blogs/phkelley/tf-get-remap).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version:<versionspec>`
   :::column-end:::
   :::column span="3":::
   Specifies the maximum version, or the minimum and the maximum versions, to display in the history data. The default is `/version:T`, the latest version.

   For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::

## Remarks

- If you're beginning a new task, it's probably a good idea to run `tf get` to download the latest files from the server before you check out files and begin your work. You can run `tf get` from any folder in your workspace.

- As needed, `tf get` creates folders on disk to contain the child items that the command downloads.

- You can view information about the history of an item by using the [History command](history-command.md) and the [Changeset command](changeset-command.md).

- If you're concerned about what changes might occur to the files in the workspace, you can use the `/preview` option to see the changes that would occur without actually implementing them.

- Conflicts could block your `get`. A typical cause of conflicts is trying to get an item on which you have pending changes. You can use the [Resolve command](resolve-command.md) to resolve these conflicts.

## Examples

The following examples assume that `$/SiteApp/Main/` maps to `c:\code\SiteApp\Main\` in the workspace.

### Get the latest version of all items in a workspace

By default, the `tf get` command gets the latest versions of all items in the workspace. For example, the following command recursively gets all files in `$/SiteApp/Main/`, including all its child folders.

```
c:\code\SiteApp\Main>tf get
```

### Recursively get the latest version of items of a certain type in a folder

The following example gets the latest version of all C# files in *c:\\code\\SiteApp\\Main\\SolutionA\\Project1*.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get *.cs /recursive
```

### Get the latest version of a file

The following example gets the latest version of *program.cs* in *Project1*.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get program.cs
```

### Get a specific version of a file

The following example gets version 8 of *program.cs* in *Project1*.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get program.cs;8
```

### Get the latest version of two files

The following example gets the latest versions of *file1.cs* and *file2.cs* in *Project1*.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf get file1.cs file2.cs
```

### Synchronize a workspace to match a version of the team's codebase

The following example synchronizes the workspace to match the codebase as it existed when changeset 15 was created:

```
c:\code\SiteApp\Main>tf get /v:15
```

- The name and content of every item in the workspace is changed to match the state it was in on the server.
- Items that were deleted after that changeset are restored to the workspace.
- Items that were added after that changeset are deleted from the workspace.

### Synchronize a workspace to match a labeled version of the team's codebase

The following example synchronizes the workspace to match the items in the codebase that are [labeled](use-labels-take-snapshot-your-files.md) `LastKnownGood`:

```
c:\code\SiteApp\Main>tf get /v:LLastKnownGood
```

- The name and content of every labeled item in the workspace is changed to match the state it was in on the server.
- Labeled items that were deleted are restored to the workspace.
- Items that aren't labeled on the server are deleted from the workspace.

