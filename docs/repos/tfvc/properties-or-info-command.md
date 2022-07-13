---
title: Properties Command
titleSuffix: Azure Repos
description: Properties Command
ms.assetid: f306bc7a-db55-47d8-aa22-e2399260e838
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
---


# Properties Command

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

The **properties** command displays information about items under version control.


## Prerequisites

To use the **properties** command, you must have the **Read** permission set to **Allow** for all specified files and folders.  For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf properties [/collection:TeamProjectCollectionUrl] [/recursive] [/login:username,[password]]
itemspec [/version:versionspec] [/workspace] 
```

## Parameters

### Argument

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
---
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
   
   For more information about how Visual Studio Team Foundation Server parses *itemspecs* to determine which items are within scope, see [Use Team Foundation version control commands, Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options).

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Versionspec*
   :::column-end:::
   :::column span="3":::
   Provides a value such as C3 for the **/version** option. For more information about how Team Foundation Server parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
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


### Option

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



For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays properties information about the file 314.cs.

```
c:\projects>tf properties 314.cs
```

The following example displays the properties of the working folder c:\\projects\\objects.

```
c:\projects>tf properties objects
```

## Related articles

- [Use Source Control Explorer to manage files in TFVC](use-source-control-explorer-manage-files-under-version-control.md)
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Permission command](permission-command.md)
- [Status command](status-command.md)
- [History command](history-command.md)
- [Changeset command](changeset-command.md)
- [Shelvesets command](shelvesets-command.md)
