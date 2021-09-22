---
title: Properties Command
titleSuffix: Azure Repos
description: Properties Command
ms.assetid: f306bc7a-db55-47d8-aa22-e2399260e838
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Properties Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Displays information about items under version control.

**Required Permissions**

To use the **properties** command, you must have the **Read** permission set to **Allow** for all specified files and folders. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf properties [/collection:TeamProjectCollectionUrl] [/recursive] [/login:username,[password]]
itemspec [/version:versionspec] [/workspace] 
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
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the items for which you want to display properties (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Itemspec*
   :::column-end:::
   :::column span="3":::
   Identifies the files and folders that are specified for property retrieval.
   
   For more information about how Visual Studio Team Foundation Server parses *itemspecs* to determine which items are within scope, see [Command-Line Options](/previous-versions/visualstudio/visual-studio-2010/4y2ash30(v=vs.100)).

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Versionspec*
   :::column-end:::
   :::column span="3":::
   Provides a value such as C3 for the **/version** option. For more information about how Team Foundation Server parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *Domain*&lt;em&gt;UserName</em> or *UserName*.
   :::column-end:::
:::row-end:::

|**Option**|**Description**|
|---|---|
|**/recursive**|Displays all files and subfolders of a folder.|
|**/version**|Specifies the version of the file to open for viewing the properties on.|
|**/workspace**|Indicates the workspace to be used when displaying the &quot;local&quot; properties (such as location on disk).|
|**/collection**|Specifies the project collection.|
|**/login**|Specifies the user name and password to authenticate the user with Team Foundation Server.|

## Remarks
The properties command displays several pieces of information about a version-controlled item. Local and server information is listed separately.

:::row:::
   :::column span="1":::
   **Property Name**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Local path
   :::column-end:::
   :::column span="3":::
   Indicates the local path of the workspace folder for the specified item.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Changeset
   :::column-end:::
   :::column span="3":::
   Indicates the version number of the file or folder that was last retrieved to the current workspace using the [Get Command](get-command.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Change
   :::column-end:::
   :::column span="3":::
   Indicates where a change is pending.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Type
   :::column-end:::
   :::column span="3":::
   Indicates the item type, for example file.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Server path
   :::column-end:::
   :::column span="3":::
   Indicates the full path of the item on the version control server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Changeset
   :::column-end:::
   :::column span="3":::
   Indicates the version number of the item.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Deletion ID
   :::column-end:::
   :::column span="3":::
   If the item is deleted, the deletion identification; otherwise 0.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Lock
   :::column-end:::
   :::column span="3":::
   Indicates the type of lock.
   
   - **Checkin**   Check in is not permitted for the file.
   - **Checkout**   Check out in not permitted for the file.
   - **None**   A lock is not set. For more information, see [Lock Command](lock-command.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Lock Owner
   :::column-end:::
   :::column span="3":::
   Indicates the person who set a check-in lock.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Last modified
   :::column-end:::
   :::column span="3":::
   Indicates the date and time stamp for when the item was last modified.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Type
   :::column-end:::
   :::column span="3":::
   Indicates the item type, for example file.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   File Type
   :::column-end:::
   :::column span="3":::
   Displays the file type encoding. For example, Windows-1252.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Size
   :::column-end:::
   :::column span="3":::
   Indicates the size of the file in bytes.
   :::column-end:::
:::row-end:::

For links to other Team Foundation commands that describe the items on the server and the workspaces that map to the server, see [Informational Commands](/previous-versions/visualstudio/visual-studio-2010/ms181450(v=vs.100)).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).
## Examples
The following example displays properties information about the file 314.cs.

```
c:\projects>tf properties 314.cs
```

The following example displays the properties of the working folder c:\\projects\\objects.

```
c:\projects>tf properties objects
```

## See Also

#### Tasks

[View Version Control File and Folder Properties](/previous-versions/visualstudio/visual-studio-2012/ms245468(v=vs.110))

#### Reference

[Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))

[Permission Command](permission-command.md)

[Status Command](status-command.md)

[History Command](history-command.md)

[Changeset Command](changeset-command.md)

[Shelvesets Command](shelvesets-command.md)

#### Concepts

[Informational Commands](/previous-versions/visualstudio/visual-studio-2010/ms181450(v=vs.100))

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))