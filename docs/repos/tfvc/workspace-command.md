---
title: Workspace Command
titleSuffix: Azure Repos
description: Workspace Command
ms.assetid: a7b374f5-02c2-4318-9130-31533bf0732c
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Workspace Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Lets you create, delete, view, or modify properties and mappings associated with a workspace.

**Required Permissions**  
To modify or delete an existing workspace, you must be the owner or have the global **Administer workspaces** permission set to **Allow**. To create a workspace, you must have the global **Create a workspace** permission set to **Allow**. To create workspaces for other users, you must have the **Administer workspaces** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf workspace /new [/noprompt] [/template:workspacename[;workspaceowner]]
     [/computer:computername] [/comment:("comment"|@comment file)]
     [workspacename[;workspaceowner]] [/login:username,[password]]
     [/collection:TeamProjectCollectionUrl] [/permission:(Private|PublicLimited|Public)]
     [/location:(local|server)]
     
    tf workspace /delete [/collection:TeamProjectCollectionUrl] workspacename[;workspaceowner] [/login:username,[password]]

    tf workspace [/collection:TeamProjectCollectionUrl] [/comment: ("comment"|@comment file)] [/newname:workspacename]
    [workspacename[;workspaceowner]] [/newowner:ownername] [/computer:computername] [/permission:(Private|PublicLimited|Public)] [/login:username,[password]]
    [/location:(local|server)]

## Parameters

|**Argument**|**Description**|
|---|---|
|*workspacename*|Specifies a name for the workspace which to create, edit, delete, or display information about.|
|*workspaceowner*|Specifies a username for the workspace. This parameter is required when the workspace owner is not the person performing the command.|
|*computername*|Provides a value to the **/computer** option.|
|*comment*|Provides a value to the **/comment** option.|
|*@commentfile*|Specifies the path of a file where the comment should be read.|
|*username*|Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName* or *UserName*.|
|*TeamProjectCollectionUrl*|The URL of the project collection that contains the workspace about which you want to create, edit, delete, or display information (for example, http://myserver:8080/tfs/DefaultCollection).|
|*ownername*|Provides a value to the **/newowner** option.|

|**Option**|**Description**|
|---|---|
|**/new**|Creates a new workspace.|
|**/template**|Specifies an existing workspace to use as a template to create the new workspace. The new workspace uses the mappings of the existing workspace.|
|**/delete**|Deletes the specified workspace.|
|**/computer**|Specifies the name of the computer on which to create the workspace. This option is an advanced option.|
|**/comment**|Provides a comment describing the workspace.|
|**/newname**|Renames an existing workspace.|
|**/noprompt**|Performs the specified workspace command without displaying a dialog box.|
|**/collection**|Specifies the project collection.|
|**/permission**|Specifies the options of workspace permission:</p><ul><li><p>Private: Only the owners can use, check in files to, or administer the workspace.</p></li><li><p>Public Limited: Any valid user can use the workspace. However, only the owners can check in files to or administer the workspace.</p></li><li><p>Public: Any valid user can use, check in files to, or administer the workspace.</p></li></ul>|
|**/location**|Specifies where the workspace is created:</p><ul><li><p>local: On the client machine. This is the default.</p></li><li><p>server: On the TFS server.</p></li></ul>|
|**/login**|Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.|
|**/newowner**|Specifies the user name for the new owner of the workspace.|

## Remarks

A [workspace](create-work-workspaces.md) is a local copy of the files and folders on the server, plus any changes that you have made locally. When you add, edit, delete, move, rename, or otherwise change any version-controlled item, your changes are isolated in your workspace where you can make and test your changes. Your [pending changes](https://msdn.microsoft.com/library/ms181409) are committed to the server and become available to other users outside your workspace when you perform a check-in.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### Creating a Workspace

Before you can add files to the version control server or check out items on the server in order to edit them, you must create a workspace or associate an existing one with the current directory. For more information, see [Create a Workspace and Get Files for the First Time](set-up-team-foundation-version-control-your-dev-machine.md).

To make the current directory a working folder for an existing workspace on your computer, type `tf workspace` *workspacename*, where *workspacename* is the name of the existing workspace. The **Edit Workspace** dialog box appears. Click **click here to enter a new working folder**, type the server path for which you want to map the current directory in the **Source Control Folder **box, type the current directory in the **Local Folder** box, and click **OK**.

When you create a new workspace, you can specify a *template workspace* as part of the **/new** option. When you specify a template workspace, Team Foundation creates a new workspace on the current computer, sets the owner to the current owner, and replicates the following workspace properties into the new workspace from the template workspace: mappings and comment. If no name is specified, the system uses a name based on the current computer name. When you create a workspace using a template, Team Foundation does not retrieve the files to which it maps from the server. Use the [Get Command](get-command.md) to synchronize the new workspace with the latest version on the server.

### Single Folder Mapping

You can choose to map only the immediate children of a version control folder to a local workspace. To do this, add an asterisk wild-card character in the **Source Control Folder** box in the **Add Workspace** dialog box. For example, $/folder/\*. Otherwise, by default, all the children of the version control folder are recursively mapped to the local workspace.

Single folder mapping within a version control hierarchy is useful because it limits the number of items downloaded to the client computer. Another way to limit downloaded files is to cloak files that you do not need to have in your workspace. For more information, see [Cloak and Uncloak Folders in a Workspace](optimize-your-workspace.md). This provides faster download times and saves disk space on the client computer.

### Deleting a Workspace

If you delete a workspace that contains pending changes, Team Foundation cancels the pending changes as part of the delete process. Deleting a workspace does not delete the files and folders on the client computer that were in that workspace.

### Editing a Workspace

You can change the following workspace attributes:  
-   Workspace Name  
-   Comment  
-   Working folder mappings  

If no workspace specification is provided, the workspace for the current folder is used.

## Examples

The following example opens the **Add Workspace** dialog box and creates a new workspace. You can use the **Add Workspace** dialog box to edit the source control folder, owner, computer, comment, and local folders.

    c:\projects>tf workspace /new /collection:http://myserver:8080/tfs/DefaultCollection

The following example creates a new workspace called Beta1 and assigns jenh as the workspace owner. You must have the AdminWorkspaces permission to assign ownership of a new workspace to another user. For more information on security permissions, see [Permissions and groups reference](../../organizations/security/permissions.md).

    c:\projects>tf workspace /new Beta1;jenh

The following example creates a new workspace by using the Beta1 workspace that is owned by jenh as a template.

    c:\projects>tf workspace /new /template:Beta1;jenh /collection:http://myserver:8080/tfs/DefaultCollection

The following example removes the Beta1 workspace from the server.

    c:\projects>tf workspace /delete Beta1

The following example edits properties for the current workspace.

    c:\projects>tf workspace

The following example opens the Beta1 workspace for which user jenh is the owner so that you can see its properties and mappings. If you have the AdminWorkspaces permissions, you can change the workspace properties and mappings.

    c:\projects> tf workspace Beta1;jenh

## See Also

### Tasks

[Cloak and Uncloak Folders in a Workspace](optimize-your-workspace.md)  
### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)  
[Workspaces Command](workspaces-command.md)  
### Concepts

[Create a Workspace to Work with your Project](create-work-workspaces.md)  
### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)   
[Create a Workspace and Get Files for the First Time](set-up-team-foundation-version-control-your-dev-machine.md)  
