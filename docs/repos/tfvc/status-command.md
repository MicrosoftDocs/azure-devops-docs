---
title: Status command
titleSuffix: Azure Repos
description: Status command
ms.assetid: e9f0b3a1-b8b1-45cf-b113-9fea2948405d
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Status command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays information about pending changes to files and folders in one or more workspaces. Or, when you use the **/shelveset** option, displays information about pending changes in a shelveset.

**Requirements:** See [Permissions and groups reference](../../organizations/security/permissions.md).

    tf stat[us] itemspec [/collection:TeamProjectCollectionUrl]
    [/login:username,[password]]
    ([/workspace:workspacename[;workspaceowner]] 
    | [/shelveset:shelvesetname[;shelvesetowner]])
    [/format:(brief|detailed)] [/recursive][/user:(*|username)]
    [/nodetect]

## Parameters


<table><thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/collection</strong>: <em>TeamProjectCollectionUrl</em></p></td>
	<td><p>When you use the <strong>/workspace</strong> option, specifies the URL of the project collection that contains the workspace that contains the pending changes. For example: http://myserver:8080/tfs/DefaultCollection. If not specified, by default the project collection is presumed to be the one that contains the workspace that maps the current directory.</p><p>Ignored if you do not use the <strong>/workspace</strong> option.</p><table><thead>
<tr><th><strong>Note</strong></th></tr></thead><tbody>
<tr>
	<td><p>See Remarks, below, for the limitations of this option.</p></td></tr></tbody></table></td></tr>
<tr>
	<td><p><strong>/format</strong></p></td>
	<td><p>Specifies how much detail to display about each pending change:</p><ul><li><p><strong>Brief</strong> (default): Displays one line about each pending change that includes: file name, changes, whether the item is locked (indicated by an asterisk (<strong></strong>*) symbol), local path, and user (if using the <strong>/collection</strong> and <strong>/workspace</strong> options). Some of the data might be truncated.</p></li><li><p><strong>Detailed</strong>: Displays a full description of each pending change. In addition to the above information, this option displays additional data such as date and time, and lock.</p></li></ul></td></tr>
<tr>
	<td><p><em>itemspec</em></p></td>
	<td><p>Specifies the items for which you want pending change data. For syntax, see <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>. You can specify more than one <em>itemspec</em> argument.</p></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>Specifies the user account to use to run the command. See <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></td></tr>
<tr>
	<td><p><strong>/recursive</strong></p></td>
	<td><p>Recursively retrieves data about pending changes to items in the specified directory and any subdirectories.</p></td></tr>
<tr>
	<td><p><strong>/shelveset</strong>:<em>shelvesetname</em>[;<em>shelvesetowner</em>]</p></td>
	<td><p>Specifies the shelveset that contains the changes you want to list.</p><p>This option cannot be combined with the <strong>/workspace</strong> option.</p></td></tr>
<tr>
	<td><p><strong>/user</strong></p></td>
	<td><p>Lists all pending changes made by the specified user. An asterisk (<strong></strong>*) symbol includes data about changes from all users. The default is the current user.</p><table><thead>
<tr><th><strong>Note</strong></th></tr></thead><tbody>
<tr>
	<td><p>See Remarks, below, for the limitations of this option.</p></td></tr></tbody></table></td></tr>
<tr>
	<td><p><strong>/workspace</strong> <em>workspacename</em>[;<em>workspaceowner</em>]</p></td>
	<td><p>Specifies the name of the workspace that contains the pending changes. If not specified, the workspace is the one that maps the current directory.</p><p>You can specify <em>workspaceowner</em> to get data about pending changes in a workspace that belongs to a specific user. If not specified, the workspace is presumed to be the current user, or if specified, the <strong>/login:</strong><em>username</em>.</p><p>This option cannot be combined with the <strong>/shelveset</strong> option.</p><table><thead>
<tr><th><strong>Note</strong></th></tr></thead><tbody>
<tr>
	<td><p>See Remarks, below, for the limitations of this option.</p></td></tr></tbody></table></td></tr></tbody>
</table>

## Remarks

You can use the **Status** command to view pending changes in the current workspace (for example, the workspace that maps the current directory in the command prompt window) regardless of whether it is a local workspace or a server workspace. You can also use this command to view pending changes in a remote server workspace (for example, changes made by another user on another dev machine) by using the **/collection**, **/user**, and **/workspace** options. However, you cannot view pending changes in a remote local workspace.

Also see: [Decide between using a local or a server workspace](decide-between-using-local-server-workspace.md).

## Examples

In all the following examples, assume that `$/SiteApp/Main/` is mapped to `c:\\code\\SiteApp\\Main\\` in the workspace.

### List all changes in the current workspace

    c:\code\SiteApp\Main\SolutionA\>tf stat

Lists all pending changes in the workspace.

### List all changes in a folder

    c:\code\SiteApp\Main>tf stat SolutionA\*

Lists all pending changes to all items in the SolutionA folder.

### List all changes in a folder and its subfolders

    c:\code\SiteApp\Main>tf stat SolutionA\* /recursive

Lists pending changes to all items in the SolutionA folder, including those in its subfolders).

## Work in Visual Studio

-    [Develop code and manage pending changes](develop-code-manage-pending-changes.md)  Use Visual Studio to view and manage pending changes.

## Tips

-   Most changes you make to files under version control are queued as pending changes in your workspace. See [Develop code and manage pending changes](develop-code-manage-pending-changes.md) and [Create and work with workspaces](create-work-workspaces.md).  
-   You can use the [Difference Command](difference-command.md) to get details about edit changes (changes to the content) in a file.  
-   If you need to set aside changes (and perhaps also want to clean your workspace for another task), use the [Shelve Command](shelve-command.md). For more information about shelvesets, see [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md).  
-   When you are ready to check in changes to the server, use the [Checkin command](checkin-command.md).
