---
title: Dir command  (Team Foundation Version Control)
description: Use the dir command to display all or some of the contents of the server for Team Foundation Version Control.
ms.assetid: 1e226700-a685-4c42-970b-fa6fd764726f
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/01/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Dir command  (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `dir` command displays all or some of the contents of the server for Team Foundation Version Control (TFVC).

## Prerequisites

To use the `dir` command, you must have **Read** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf dir itemspec [/version:versionspec] [/recursive] 
[/folders] [/deleted] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]
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
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder to return information about. For more information about how TFVC parses the `itemspec` to determine which items are within scope, see [Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).

   > [!Note]  
   > You can specify more than one `itemspec` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<versionspec>`
   :::column-end:::
   :::column span="3":::
   The user-provided value for the `/version` option. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a username value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains one or more files or folders about which you want to display information, for example `http://myserver:8080/tfs/DefaultCollection/`.
   :::column-end:::
:::row-end:::

### Options

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
   `/version`
   :::column-end:::
   :::column span="3":::
   Specifies that TFVC should only show files and folders of a certain version.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Displays all files and subfolders in the specified directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/folders`
   :::column-end:::
   :::column span="3":::
   Displays folders only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/deleted`
   :::column-end:::
   :::column span="3":::
   Displays deleted items and existing items. The deleted items are followed with `;Xn` where `n` is the deletion ID.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks
The `dir` command operates on the Azure DevOps server copies of files, not the local copies. The command uses the local mapped folder to locate the appropriate Azure DevOps server path. You use this command to explore the Azure DevOps server and identify files you may have to obtain.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples
The following example displays a list of files, folders, subfolders, and files in the Azure DevOps server folder that *c:\\projects* maps to. The number of items is also listed. For more information about how to view and edit working folder mappings, see [Workspace command](workspace-command.md) and [Workfold command](workfold-command.md).

```
c:\projects>tf dir /recursive
```

The following example displays all Azure DevOps server files at the *314dir* path. The *314dir* subfolder doesn't have to exist in the local folder.

```
c:\projects>tf dir 314dir
```

The following example displays the version of files labeled `My label` in the *314dir* Azure DevOps server path. The *314dir* subfolder doesn't have to exist in the local folder.

```
c:\projects>tf dir /version:L"My label" 314dir
```

The following example displays all folders in the root of the Azure DevOps server. The local working folder is ignored, because `$/` denotes an Azure DevOps server path.

```
c:\projects>tf dir /folders $/
```

The following example lists every file and folder in the Azure DevOps server.

```
c:\projects>tf dir /recursive $/
```

The following example lists all items in the current folder, including deleted items with their deletion IDs.

```
c:\projects>tf dir /deleted
```

## Related articles

- [Workspace command](workspace-command.md)
- [Workfold command](workfold-command.md)
