---
title: Use the Dir Command to display contents of TFVC
titleSuffix: Azure Repos
description: Displays all or some of the contents of the server for Team Foundation version control using the Dir command
ms.assetid: 1e226700-a685-4c42-970b-fa6fd764726f
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 12/17/2021
monikerRange: '<= azure-devops'
---


# Dir Command


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

The **dir** command displays all or some of the contents of the server for Team Foundation version control.

## Prerequisites

To use the **dir** command, you must have **Read** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf dir itemspec [/version:versionspec] [/recursive] 
[/folders] [/deleted] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]
```

## Parameters

### Argument

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   *itemspec*
   :::column-end:::
   :::column span="1":::
   Identifies the file or folder to return information about. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Use Team Foundation version control commands, Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options).

   > [!Note]  
   > You can specify more than one Itemspec argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *versionspec*
   :::column-end:::
   :::column span="1":::
   The user-provided value for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="1":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN\UserName* or *UserName*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="1":::
   The URL of the project collection that contains one or more files or folders about which you want to display information (for example, http://myserver:8080/tfs/DefaultCollection/).
   :::column-end:::
:::row-end:::

### Option

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **/version**
   :::column-end:::
   :::column span="1":::
   Specifies that Team Foundation should only show files and folders of a certain version.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="1":::
   Displays all files and subfolders in the specified directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/folders**
   :::column-end:::
   :::column span="1":::
   Displays folders only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/deleted**
   :::column-end:::
   :::column span="1":::
   Displays deleted items and existing items. The deleted items are followed with ;*X*3 where 3 is the deletion id.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="1":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="1":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks
The **dir** command operates on the Team Foundation version control server copies of files, not the local copies. The command uses the local mapped folder to locate the appropriate Team Foundation version control server path. You use this command to explore the Team Foundation version control server and identify files you may have to obtain.



For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
## Examples
The following example displays a list of files, folders, subfolders, and the files therein in the Team Foundation version control server folder to which c:\\projects maps. The number of items is also listed. For more information about how to view and edit working folder mappings, see [Workspace Command](workspace-command.md) and [Workfold Command](workfold-command.md).

```
c:\projects>tf dir /recursive
```

The following example displays all Team Foundation version control server files at that path. The "314dir" subfolder does not have to exist in the local folder.

```
c:\projects>tf dir 314dir
```

The following example displays the version of files labeled "My label" in that Team Foundation version control server path. The "314dir" subfolder does not have to exist in the local folder.

```
c:\projects>tf dir /version:L"My label" 314dir
```

The following example displays all folders in the root of the Team Foundation version control server. The local working folder is ignored because `$/` denotes a Team Foundation version control server path.

```
c:\projects>tf dir /folders $/
```

The following example lists every file and folder in the Team Foundation version control server.

```
c:\projects>tf dir /recursive $/
```

The following example lists all items and deleted items in the current folder together with their deletion IDs.

```
c:\projects>tf dir /deleted
```

## Related articles

- [Workspace Command](workspace-command.md)
- [Workfold Command](workfold-command.md)
