---
title: Workspaces Command
titleSuffix: Azure Repos
description: Workspaces Command
ms.assetid: 4b6f05fb-0520-44f8-8a31-7108ff956a72
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Workspaces Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays information about workspaces in the system and updates cached information about a user name or computer name change on the server that is running Visual Studio Team Foundation Server.

**Required Permissions**  
To use the **workspaces** command, you must have the **Read** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf workspaces [/owner:ownername] [/computer:computername] 
    [/collection:TeamProjectCollectionUrl] [/format:(brief|detailed)] 
    [/updateUserName:oldUserName] [/updateComputerName:oldComputerName] 
    [workspacename][/login:username,[password]]

    tf workspaces /remove:(*|workspace1[,workspace2,...]) 
    /collection:(*|TeamProjectCollectionUrl)

## Parameters

<table>
<thead>
<tr>
<th><p>Argument</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><em>ownername</em></p></td>
<td><p>Provides a value to the <strong>/owner</strong> option. Specify &quot;*&quot; to match workspaces created by any user.</p></td>
</tr>
<tr>
<td><p><em>computername</em></p></td>
<td><p>Provides a value to the <strong>/computer</strong> option. Specify &quot;*&quot; to match workspaces on any computer.</p></td>
</tr>
<tr>
<td><p><em>workspacename</em></p></td>
<td><p>Specifies the name of a workspace to display information about. If a <em>workspacename</em> is not specified, information is displayed about all the workspaces in a server. You can also use the &quot;*&quot; wildcard character to display information about all workspaces for a server.</p></td>
</tr>
<tr>
<td><p><em>oldUserName</em></p></td>
<td><p>Provides the old user name for the <strong>/updateUserName</strong> option.</p></td>
</tr>
<tr>
<td><p><em>oldComputerName</em></p></td>
<td><p>Provides the old computer name for the <strong>/updateComputerName</strong> option.</p></td>
</tr>
<tr>
<td><p><em>TeamProjectCollectionUrl</em></p></td>
<td><p>The URL of the project collection that contains the workspaces about which you want to display information (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
</tr>
<tr>
<td><p><em>username</em></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName</em>.</p></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><p>Option</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>/owner</strong></p></td>
<td><p>Specifies the name of the user who created the workspace. If no owner is specified, Team Foundation returns information about workspaces owned by the current user only.</p></td>
</tr>
<tr>
<td><p><strong>/computer</strong></p></td>
<td><p>Specifies the name of a client computer by which to filter the list of workspaces for the server. If no computer is specified, Team Foundation returns information about workspaces on the current computer only.</p></td>
</tr>
<tr>
<td><p><strong>/format</strong></p></td>
<td><p>Specifies the format of the workspace information. <strong>Brief</strong> returns workspace information without mappings. <strong>Detailed</strong> returns workspace information and also the mappings. The detailed format can only be used when the <strong>/collection</strong> option is specified. <strong>Brief</strong> is the default value.</p></td>
</tr>
<tr>
<td><p><strong>/updateUserName</strong></p></td>
<td><p>Updates security identification information on the Team Foundation server for a user whose network user name has been changed. If you specify this option, you must also specify a project collection by using the <strong>/collection</strong> option.</p></td>
</tr>
<tr>
<td><p><strong>/updateComputerName</strong></p></td>
<td><p>Instructs Team Foundation to update its tables to reflect a change in the name of a client computer. If you specify this option, you must also specify a project collection by using the <strong>/collection</strong> option.</p></td>
</tr>
<tr>
<td><p><strong>/remove</strong></p></td>
<td><p>Removes the specified workspace entries for the specified project collection from the client cache.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong></p></td>
<td><p>Specifies the project collection.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong></p></td>
<td><p>Specifies the user name and password to authenticate the user with Team Foundation Server.</p></td>
</tr>
</tbody>
</table>

## Remarks
The **workspaces** command of the **tf** command-line utility displays information about [workspaces](create-work-workspaces.md) on the current computer, owned by a specified user, or for all workspaces associated with a specific Team Foundation Server. For each workspace, Team Foundation displays the name, owner, comment, and computer name. With detailed output, it also shows the workspace mappings. Unless you provide a filter such as owner, computer or workspace name, Team Foundation only displays information about the workspaces that you have created.

For more information about how to edit workspace properties, see [Workspace Command](workspace-command.md).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example displays a list of all workspaces for the current user on the current computer.

    c:\projects>tf workspaces

The following example displays the list of all workspaces for all users on all computers that have been created in the following project collection at the address http://myserver:8080/tfs/DefaultCollection.

    c:\projects>tf workspaces /owner:* /computer:* /collection:http://myserver:8080/tfs/DefaultCollection

The following example displays detailed information about all workspaces that the current user has created in the project collection at the address http://myserver:8080/tfs/DefaultCollection.

    c:\projects>tf workspaces /computer:* /format:detailed /collection:http://myserver:8080/tfs/DefaultCollection

The following example displays detailed information including a list of workspace mappings about the workspace "WS1," which is owned by the current user and is located on the current computer.

    c:\projects>tf workspaces /format:detailed /collection:http://myserver:8080/tfs/DefaultCollection WS1

The following example removes all cached workspaces from the cache in the project collection at the address http://myserver:8080/tfs/DefaultCollection.

    c:\projects>tf workspaces /remove:* /collection:http://myserver:8080/tfs/DefaultCollection

## See Also

### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)  
[Workspace Command](workspace-command.md)  
[Workfold Command](workfold-command.md)  
### Concepts

[Create a Workspace to Work with your Project](create-work-workspaces.md)  
### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)  
[Create a Workspace and Get Files for the First Time](set-up-team-foundation-version-control-your-dev-machine.md)  
