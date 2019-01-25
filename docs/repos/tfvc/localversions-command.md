---
title: LocalVersions Command
titleSuffix: Azure Repos
description: LocalVersions Command
ms.assetid: 5531edc7-0333-43eb-bea0-59db9bc35c33
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# LocalVersions Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays the version of one or more items in a workspace.

**Required Permissions**  
To use the **localversions** command, you must have the **Use** permission to the workspace. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf localversions ItemSpec
    [/recursive] [/format:brief|detailed]
    [/workspace:WorkspaceName[;WorkspaceOwner]] [/collection:TeamProjectCollectionUrl]

## Parameters
<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><i>Itemspec</i></p></td>
<td><p>Specify either a file or a folder that contains the files for which you want to display version numbers.</p>
<p>You can specify only a local file or folder. For example, c:\project1\binder.cs is valid, but $/project1/binder.cs is not.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
You can specify more than one <i>Itemspec</i> argument.
</div>
</div>
</div></td>
</tr>
<tr>
<td><p><i>WorkSpaceName</i></p></td>
<td><p>Use this argument with the <strong>/workspace</strong> option to specify a workspace other than the one that is mapped to the current directory.</p></td>
</tr>
<tr>
<td><p><i>WorkSpaceOwner</i></p></td>
<td><p>Use this argument with the <i>WorkSpaceName</i> argument if you want to specify a public workspace.</p></td>
</tr>
<tr>
<td><p><i>TeamProjectCollectionUrl</i></p></td>
<td><p>The URL of the project collection that contains one or more items for which you want to display the version (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
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
<td><p><strong>/format</strong></p></td>
<td><p>Specify one of the following options to control how the data returned by this command appears:</p>
<ul>
<li><p><strong>Brief</strong></p>
<p>(Default.) Each directory appears only once, followed by the files that it contains.</p></li>
<li><p><strong>Detailed</strong></p>
<p>Each file appears after its full path.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>Specify this option if you want the operation to include items in subfolders.</p></td>
</tr>
<tr>
<td><p><strong>/workspace</strong></p></td>
<td><p>Specify this option to display data about the versions of items that are in a workspace other than the one that is mapped to the current directory.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong></p></td>
<td><p>Specifies the project collection.</p></td>
</tr>
</tbody>
</table>

## Remarks

When you get or check out a file, you usually download the most current version. However, you may have older versions of some files in your workspace.

For example, you might have checked out some files and not checked in your work for several weeks. Other people on your team may have checked in changes to the same files during that time. In this case, the versions of these files in your workspace would be older than the current versions on your server for Team Foundation version control. You can use the **localversions** command to get information about which versions of these files are in your workspace.

For information about other Team Foundation commands that provide additional information about items in your server for Team Foundation version control and the workspaces that map to it, see [Informational Commands](https://msdn.microsoft.com/library/ms181450).

For more information about how to find and use the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

## Examples
The following example displays the version of the `ControllerBase.cs` file in the workspace that is mapped to the `c:\\workspaces\\FeatureA\\catalog\\controller` folder.

    c:\workspaces\FeatureA\catalog\controller>tf localversions ControllerBase.cs

The following example displays the versions of all files (including those in subfolders) in the workspace that is mapped to the `c:\\workspaces\\FeatureA\\catalog\\` folder. Because the **/format:detailed** option is specified, each file appears with its full path.

    c:\workspaces\FeatureA\catalog\>tf localversions . /recursive /format:detailed

## See Also

#### Concepts

[Informational Commands](https://msdn.microsoft.com/library/ms181450)  
#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
