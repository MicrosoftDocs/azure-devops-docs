---
title: Properties Command
titleSuffix: Azure Repos
description: Properties Command
ms.assetid: f306bc7a-db55-47d8-aa22-e2399260e838
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Properties Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays information about items under version control.

**Required Permissions**

To use the **properties** command, you must have the **Read** permission set to **Allow** for all specified files and folders. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf properties [/collection:TeamProjectCollectionUrl] [/recursive] [/login:username,[password]]
    itemspec [/version:versionspec] [/workspace] 
## Parameters

<table><thead>
<tr><th><p><strong>Argument </strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>TeamProjectCollectionUrl</em></p></td>
	<td><p>The URL of the project collection that contains the items for which you want to display properties (for example, http://myserver:8080/tfs/DefaultCollection).</p></td></tr>
<tr>
	<td><p><em>Itemspec</em></p></td>
	<td><p>Identifies the files and folders that are specified for property retrieval.</p><p>For more information about how Visual Studio Team Foundation Server parses <em>itemspecs</em> to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/4y2ash30">Command-Line Options</a>.</p><p><strong>Note:</strong> You can specify more than one <em>Itemspec</em> argument.</p></td></tr>
<tr>
	<td><p><em>Versionspec</em></p></td>
	<td><p>Provides a value such as C3 for the <strong>/version</strong> option. For more information about how Team Foundation Server parses a version specification to determine which items are within its scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td></tr>
<tr>
	<td><p><em>username</em></p></td>
	<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>Domain</em>\<em>UserName</em> or <em>UserName</em>.</p></td></tr></tbody>
</table>

|**Option**|**Description**|
|---|---|
|**/recursive**|Displays all files and subfolders of a folder.|
|**/version**|Specifies the version of the file to open for viewing the properties on.|
|**/workspace**|Indicates the workspace to be used when displaying the &quot;local&quot; properties (such as location on disk).|
|**/collection**|Specifies the project collection.|
|**/login**|Specifies the user name and password to authenticate the user with Team Foundation Server.|

## Remarks
The properties command displays several pieces of information about a version-controlled item. Local and server information is listed separately.

<table><thead>
<tr><th><p><strong>Property Name</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p>Local path</p></td>
	<td><p>Indicates the local path of the workspace folder for the specified item.</p></td></tr>
<tr>
	<td><p>Changeset</p></td>
	<td><p>Indicates the version number of the file or folder that was last retrieved to the current workspace using the <a href="get-command.md">Get Command</a>.</p></td></tr>
<tr>
	<td><p>Change</p></td>
	<td><p>Indicates where a change is pending.</p></td></tr>
<tr>
	<td><p>Type</p></td>
	<td><p>Indicates the item type, for example file.</p></td></tr>
<tr>
	<td><p>Server path</p></td>
	<td><p>Indicates the full path of the item on the version control server.</p></td></tr>
<tr>
	<td><p>Changeset</p></td>
	<td><p>Indicates the version number of the item.</p></td></tr>
<tr>
	<td><p>Deletion ID</p></td>
	<td><p>If the item is deleted, the deletion identification; otherwise 0.</p></td></tr>
<tr>
	<td><p>Lock</p></td>
	<td><p>Indicates the type of lock.</p><ul><li><p><strong>Checkin</strong>   Check in is not permitted for the file.</p></li><li><p><strong>Checkout</strong>   Check out in not permitted for the file.</p></li><li><p><strong>None</strong>   A lock is not set. For more information, see <a href="lock-command.md">Lock Command</a>.</p></li></ul></td></tr>
<tr>
	<td><p>Lock Owner</p></td>
	<td><p>Indicates the person who set a check-in lock.</p></td></tr>
<tr>
	<td><p>Last modified</p></td>
	<td><p>Indicates the date and time stamp for when the item was last modified.</p></td></tr>
<tr>
	<td><p>Type</p></td>
	<td><p>Indicates the item type, for example file.</p></td></tr>
<tr>
	<td><p>File Type</p></td>
	<td><p>Displays the file type encoding. For example, Windows-1252.</p></td></tr>
<tr>
	<td><p>Size</p></td>
	<td><p>Indicates the size of the file in bytes.</p></td></tr></tbody>
</table>

For links to other Team Foundation commands that describe the items on the server and the workspaces that map to the server, see [Informational Commands](https://msdn.microsoft.com/library/ms181450).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example displays properties information about the file 314.cs.

    c:\projects>tf properties 314.cs

The following example displays the properties of the working folder c:\\projects\\objects.

    c:\projects>tf properties objects

## See Also

#### Tasks

[View Version Control File and Folder Properties](https://msdn.microsoft.com/library/ms245468)

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Permission Command](permission-command.md)

[Status Command](status-command.md)

[History Command](history-command.md)

[Changeset Command](changeset-command.md)

[Shelvesets Command](shelvesets-command.md)

#### Concepts

[Informational Commands](https://msdn.microsoft.com/library/ms181450)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
