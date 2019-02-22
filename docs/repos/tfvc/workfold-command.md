---
title: Workfold Command
titleSuffix: Azure Repos
description: Workfold Command
ms.assetid: f4d18139-bd2e-4621-be4e-a761ca537280
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Workfold Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Creates, modifies, or displays information about the mappings between your workspace folders and the folders on the server for Team Foundation version control.

**Required Permissions**

To use the **workfold** command, you must be the owner of the specified or implied workspace or have the global **Administer workspaces** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf workfold localfolder [/login:username,[password]]

    tf workfold [/workspace:workspacename] [/login:username,[password]]

    tf workfold [/collection:TeamProjectCollectionUrl] [/workspace:workspacename] [/login:username,[password]]
    serverfolder

    tf workfold [/map serverfolder localfolder] [/collection:TeamProjectCollectionUrl] 
    [/workspace:workspacename][/login:username,[password]

    tf workfold /unmap [/collection:TeamProjectCollectionUrl] [/workspace:workspacename] 
    [/recursive] (serverfolder|localfolder) [/login:username,[password]]

    tf workfold /cloak 
    serverfolder [/workspace:workspacename] [/collection:TeamProjectCollectionUrl] [/login:username,[password]]

    tf workfold /decloak serverfolder
    [/workspace:workspacename] [/collection:TeamProjectCollectionUrl][/login:username,[password]]

## Parameters<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><i>workspacename</i></p></td>
<td><p>Specifies the name of the workspace on which the command operates for the <strong>/workspace</strong> option.</p></td>
</tr>
<tr>
<td><p><i>serverfolder</i></p></td>
<td><p>Specifies the name of a Team Foundation version control server folder.</p></td>
</tr>
<tr>
<td><p><i>localfolder</i></p></td>
<td><p>Specifies the name of a local folder.</p></td>
</tr>
<tr>
<td><p><i>TeamProjectCollectionUrl</i></p></td>
<td><p>The URL of the project collection that contains the folders that you want to compare with server folders (for example, http://myserver:8080/tfs/DefaultCollection/).</p></td>
</tr>
<tr>
<td><p><i>username</i></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <i>DOMAIN</i>\<i>UserName</i> or <i>UserName</i>.</p></td>
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
<td><p><strong>/workspace</strong></p></td>
<td><p>Specifies the name of the workspace to work in.</p></td>
</tr>
<tr>
<td><p><strong>/map</strong></p></td>
<td><p>Specifies an association between a local folder and the Team Foundation version control server folder. By default, the workfold command uses this option, even if unspecified, unless <strong>/unmap</strong>, <strong>/cloak</strong>, or <strong>/decloak</strong> is specified.</p></td>
</tr>
<tr>
<td><p><strong>/unmap</strong></p></td>
<td><p>Specifies which folder mapping should be removed from the workspace.</p></td>
</tr>
<tr>
<td><p><strong>/cloak</strong></p></td>
<td><p>Specifies that the folder should be excluded from any version control actions made in the workspace.</p></td>
</tr>
<tr>
<td><p><strong>/decloak</strong></p></td>
<td><p>Decloaks a folder so the folder can be retrieved into the workspace.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong></p></td>
<td><p>Specifies the project collection.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong></p></td>
<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td>
</tr>
</tbody>
</table>

## Remarks
You can use the **workfold** command of the **tf** command-line utility to create and edit *workspace mappings*. A workspace mapping creates a client-side folder into which all files and subfolders in the Team Foundation version control server folder are retrieved when you execute a **tf** **get** operation. This **get** will not work if the client-side folder is cloaked.

You can also specify an asterisk (\*) wildcard to map a Team Foundation Server folder and its immediate items to your local workspace. This is often referred to as single folder mapping.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### Options for Workspace Mapping

A workspace mapping is a list of active and cloaked items. You can add Team Foundation version control server items to the mapped list in the workspace using the **/map** option. You can also exclude an item from the workspace explicitly by using the **/cloak** option. You can only cloak the items that have a mapped parent. Cloaking is an effective way to improve the speed of batch Get operations and to conserve space on disk.

Use cloaking with discretion. To avoid compilation and integration problems, you should only cloak those items that you know to be outside the scope of your current and future projects, such as images and external documentation files.

You can use the **/unmap** and **/decloak** options to selectively delete mapped and cloaked entries from the workspace mapping.

### How Workspace Mappings are Applied

By default, workspace mappings are applied recursively. When you map a local folder to a Team Foundation version control server folder, the system implicitly creates a mapping between all its current and future subfolders. For example, if you map $/projects to c:\\projects, subsequently add a project called $/projects/project\_one, and then run a **get** of the workspace, Team Foundation automatically creates a local working folder named project\_one in the C:\\projects directory.

In this example, you can use a wildcard, "\*", to map a server folder and its immediate items to your local workspace:

    tf workfold $/projects/MyTeamProject/* C:\MyLocalWorkfold\MyTeamProject

In this example, you can override the automatically-created mapping between $/projects/project\_one and C:\\projects\\project\_one by using the **workfold** command as follows:

    tf workfold $/projects/project_one C:\DifferentWorkfold

### Mappings under Cloaks

Mappings of uncloaked folders that are located beneath a cloaked folder in the version control hierarchy can be mapped to your local workspace.

## Examples
The following example displays the mappings for the workspace in which c:\\projects resides.

    c:\projects>tf workfold

The following example cloaks the c:\\projects\\lib folder.

    c:\projects>tf workfold /cloak c:\projects\lib

The following example displays the mapping for the local file word.cs.

    c:\projects>tf workfold word.cs

The following example maps the folder C:\\DifferentWorkfold to the Team Foundation version control server folder $/projects/project\_one and replaces the previous workspace mapping for the $/projects/project\_one Team Foundation version control server folder.

    c:\projects>tf workfold $/projects/project_one C:\DifferentWorkfold

## See Also

#### Tasks

[Cloak and Uncloak Folders in a Workspace](optimize-your-workspace.md)

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Workspace Command](workspace-command.md)

#### Concepts

[Create a Workspace to Work with your Project](create-work-workspaces.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)

[Create a Workspace and Get Files for the First Time](set-up-team-foundation-version-control-your-dev-machine.md)
