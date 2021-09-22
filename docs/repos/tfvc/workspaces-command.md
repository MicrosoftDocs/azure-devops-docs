---
title: Workspaces Command
titleSuffix: Azure Repos
description: Workspaces Command
ms.assetid: 4b6f05fb-0520-44f8-8a31-7108ff956a72
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Workspaces Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Displays information about workspaces in the system and updates cached information about a user name or computer name change on the server that is running Visual Studio Team Foundation Server.

**Required Permissions**  
To use the **workspaces** command, you must have the **Read** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf workspaces [/owner:ownername] [/computer:computername] 
[/collection:TeamProjectCollectionUrl] [/format:(brief|detailed|xml)] 
[/updateUserName:oldUserName] [/updateComputerName:oldComputerName] 
[workspacename][/login:username,[password]]
```

```
tf workspaces /remove:(*|workspace1[,workspace2,...]) 
/collection:(*|TeamProjectCollectionUrl)
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
   *ownername*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/owner** option. Specify &quot;<em>&quot; to match workspaces created by any user.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *computername*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/computer** option. Specify &quot;</em>&quot; to match workspaces on any computer.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *workspacename*
   :::column-end:::
   :::column span="3":::
   Specifies the name of a workspace to display information about. If a *workspacename* is not specified, information is displayed about all the workspaces in a server. You can also use the &quot;*&quot; wildcard character to display information about all workspaces for a server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *oldUserName*
   :::column-end:::
   :::column span="3":::
   Provides the old user name for the **/updateUserName** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *oldComputerName*
   :::column-end:::
   :::column span="3":::
   Provides the old computer name for the **/updateComputerName** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the workspaces about which you want to display information (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*&lt;em&gt;UserName</em> or *UserName*.
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
   **/owner**
   :::column-end:::
   :::column span="3":::
   Specifies the name of the user who created the workspace. If no owner is specified, Team Foundation returns information about workspaces owned by the current user only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/computer**
   :::column-end:::
   :::column span="3":::
   Specifies the name of a client computer by which to filter the list of workspaces for the server. If no computer is specified, Team Foundation returns information about workspaces on the current computer only.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/format**
   :::column-end:::
   :::column span="3":::
   Specifies the format of the workspace information. **Brief** returns workspace information without mappings. **Detailed** returns workspace information and also the mappings. **Xml** returns workspace information, mapping, latest access date, and also the owner aliases. The detailed format can only be used when the **/collection** option is specified. **Brief** is the default value.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/updateUserName**
   :::column-end:::
   :::column span="3":::
   Updates security identification information on the Team Foundation server for a user whose network user name has been changed. If you specify this option, you must also specify a project collection by using the **/collection** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/updateComputerName**
   :::column-end:::
   :::column span="3":::
   Instructs Team Foundation to update its tables to reflect a change in the name of a client computer. If you specify this option, you must also specify a project collection by using the **/collection** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/remove**
   :::column-end:::
   :::column span="3":::
   Removes the specified workspace entries for the specified project collection from the client cache.
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
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Team Foundation Server.
   :::column-end:::
:::row-end:::


## Remarks
The **workspaces** command of the **tf** command-line utility displays information about [workspaces](create-work-workspaces.md) on the current computer, owned by a specified user, or for all workspaces associated with a specific Team Foundation Server. For each workspace, Team Foundation displays the name, owner, comment, and computer name. With detailed output, it also shows the workspace mappings. Unless you provide a filter such as owner, computer or workspace name, Team Foundation only displays information about the workspaces that you have created.

For more information about how to edit workspace properties, see [Workspace Command](workspace-command.md).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).
## Examples
The following example displays a list of all workspaces for the current user on the current computer.

```
c:\projects>tf workspaces
```

The following example displays the list of all workspaces for all users on all computers that have been created in the following project collection at the address `http://myserver:8080/tfs/DefaultCollection`.

```
c:\projects>tf workspaces /owner:* /computer:* /collection:http://myserver:8080/tfs/DefaultCollection
```

The following example displays detailed information about all workspaces that the current user has created in the project collection at the address `http://myserver:8080/tfs/DefaultCollection`.

```
c:\projects>tf workspaces /computer:* /format:detailed /collection:http://myserver:8080/tfs/DefaultCollection
```

The following example displays detailed information including a list of workspace mappings about the workspace "WS1," which is owned by the current user and is located on the current computer.

```
c:\projects>tf workspaces /format:detailed /collection:http://myserver:8080/tfs/DefaultCollection WS1
```

The following example removes all cached workspaces from the cache in the project collection at the address `http://myserver:8080/tfs/DefaultCollection`.

```
c:\projects>tf workspaces /remove:* /collection:http://myserver:8080/tfs/DefaultCollection
```

## See Also

### Reference

[Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))  
[Workspace Command](workspace-command.md)  
[Workfold Command](workfold-command.md)  
### Concepts

[Create a Workspace to Work with your Project](create-work-workspaces.md)  
### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))  
[Create a Workspace and Get Files for the First Time](set-up-team-foundation-version-control-your-dev-machine.md)