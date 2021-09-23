---
title: Use the Dir Command to display contents of TFVC
titleSuffix: Azure Repos
description: Displays all or some of the contents of the server for Team Foundation version control using the Dir command
ms.assetid: 1e226700-a685-4c42-970b-fa6fd764726f
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Dir Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

The **dir** command displays all or some of the contents of the server for Team Foundation version control.

**Required Permissions**

To use the **dir** command, you must have **Read** permission set to **Allow**. For more 
information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf dir itemspec [/version:versionspec] [/recursive] 
[/folders] [/deleted] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]
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
   *itemspec*
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder to return information about. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Command-Line Options](/previous-versions/visualstudio/visual-studio-2010/4y2ash30(v=vs.100)).

   > [!Note]  
   > You can specify more than one Itemspec argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   *versionspec*
   :::column-end:::
   :::column span="3":::
   The user-provided value for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN\UserName* or *UserName*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains one or more files or folders about which you want to display information (for example, http://myserver:8080/tfs/DefaultCollection/).
   :::column-end:::
:::row-end:::


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
   **/version**
   :::column-end:::
   :::column span="3":::
   Specifies that Team Foundation should only show files and folders of a certain version.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Displays all files and subfolders in the specified directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/folders**
   :::column-end:::
   :::column span="3":::
   Displays folders only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/deleted**
   :::column-end:::
   :::column span="3":::
   Displays deleted items and existing items. The deleted items are followed with ;*X*3 where 3 is the deletion id.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks
The **dir** command operates on the Team Foundation version control server copies of files, not the local copies. The command uses the local mapped folder to locate the appropriate Team Foundation version control server path. You use this command to explore the Team Foundation version control server and identify files you may have to obtain.

For links to other Team Foundation commands that provide additional information about items in your Team Foundation version control server and the workspaces that map to it, see [Informational Commands](/previous-versions/visualstudio/visual-studio-2010/ms181450(v=vs.100)).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).
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

## See Also

#### Tasks

[Add and Remove a Working Folder in a Workspace](/previous-versions/ms181386(v=vs.110))

#### Reference

[Workspace Command](workspace-command.md)

[Workfold Command](workfold-command.md)

#### Concepts

[Informational Commands](/previous-versions/visualstudio/visual-studio-2010/ms181450(v=vs.100))

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))