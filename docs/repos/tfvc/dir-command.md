---
title: Use the Dir Command to display contents of TFVC directory
titleSuffix: Azure Repos
description: Displays all or some of the contents of the server for Team Foundation version control using the Dir command
ms.assetid: 1e226700-a685-4c42-970b-fa6fd764726f
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Dir Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

The **dir** command displays all or some of the contents of the server for Team Foundation version control.

**Required Permissions**

To use the **dir** command, you must have **Read** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf dir itemspec [/version:versionspec] [/recursive] 
    [/folders] [/deleted] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]

## Parameters<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><i>itemspec</i></p></td>
<td><p>Identifies the file or folder to return information about. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/4y2ash30">Command-Line Options</a>.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
You can specify more than one Itemspec argument.
</div>
</div>
</div></td>
</tr>
<tr>
<td><p><i>versionspec</i></p></td>
<td><p>The user-provided value for the <strong>/version</strong> option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td>
</tr>
<tr>
<td><p><i>username</i></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <i>DOMAIN</i>\<i>UserName</i> or <i>UserName</i>.</p></td>
</tr>
<tr>
<td><p><i>TeamProjectCollectionUrl</i></p></td>
<td><p>The URL of the project collection that contains one or more files or folders about which you want to display information (for example, http://myserver:8080/tfs/DefaultCollection/).</p></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><p><strong>Option</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>/version</strong></p></td>
<td><p>Specifies that Team Foundation should only show files and folders of a certain version.</p></td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>Displays all files and subfolders in the specified directory.</p></td>
</tr>
<tr>
<td><p><strong>/folders</strong></p></td>
<td><p>Displays folders only.</p></td>
</tr>
<tr>
<td><p><strong>/deleted</strong></p></td>
<td><p>Displays deleted items and existing items. The deleted items are followed with ;<em>X</em>3 where 3 is the deletion id.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong></p></td>
<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong></p></td>
<td><p>Specifies the project collection.</p></td>
</tr>
</tbody>
</table>
## Remarks
The **dir** command operates on the Team Foundation version control server copies of files, not the local copies. The command uses the local mapped folder to locate the appropriate Team Foundation version control server path. You use this command to explore the Team Foundation version control server and identify files you may have to obtain.

For links to other Team Foundation commands that provide additional information about items in your Team Foundation version control server and the workspaces that map to it, see [Informational Commands](https://msdn.microsoft.com/library/ms181450).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example displays a list of files, folders, subfolders, and the files therein in the Team Foundation version control server folder to which c:\\projects maps. The number of items is also listed. For more information about how to view and edit working folder mappings, see [Workspace Command](workspace-command.md) and [Workfold Command](workfold-command.md).

    c:\projects>tf dir /recursive

The following example displays all Team Foundation version control server files at that path. The "314dir" subfolder does not have to exist in the local folder.

    c:\projects>tf dir 314dir

The following example displays the version of files labeled "My label" in that Team Foundation version control server path. The "314dir" subfolder does not have to exist in the local folder.

    c:\projects>tf dir /version:L"My label" 314dir

The following example displays all folders in the root of the Team Foundation version control server. The local working folder is ignored because `$/` denotes a Team Foundation version control server path.

    c:\projects>tf dir /folders $/

The following example lists every file and folder in the Team Foundation version control server.

    c:\projects>tf dir /recursive $/

The following example lists all items and deleted items in the current folder together with their deletion IDs.

    c:\projects>tf dir /deleted

## See Also

#### Tasks

[Add and Remove a Working Folder in a Workspace](https://msdn.microsoft.com/library/ms181386)

#### Reference

[Workspace Command](workspace-command.md)

[Workfold Command](workfold-command.md)

#### Concepts

[Informational Commands](https://msdn.microsoft.com/library/ms181450)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
