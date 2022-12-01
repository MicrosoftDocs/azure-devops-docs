---
title: Info or properties command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the tf info or deprecated properties command to display information about items that are under version control.
ms.assetid: f306bc7a-db55-47d8-aa22-e2399260e838
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Info or Properties command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `tf info` command displays information about items that are under Team Foundation Version Control (TFVC) version control. You can also use `tf properties`, but it's deprecated.

## Prerequisites

To use the `info` command, you must have the **Read** permission set to **Allow** for all specified files and folders.  For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf info [/collection:TeamProjectCollectionUrl] [/recursive] [/login:username,[password]]
itemspec [/version:versionspec] [/workspace] 
```

## Parameters

### Arguments

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
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the items for which you want to display properties, for example `http://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Identifies the files and folders that are specified for property retrieval.
   
   For more information about how TFVC parses an `itemspec` to determine which items are within scope, see [Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).

   > [!Note]  
   > You can specify more than one `itemspec` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<versionspec>`
   :::column-end:::
   :::column span="3":::
   Provides a value such as `C3` for the `/version` option. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a user name value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::

### Options

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
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Displays all files and subfolders of a folder.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="3":::
   Specifies the version of the file to open for viewing the properties.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/workspace`
   :::column-end:::
   :::column span="3":::
   Indicates the workspace to use when displaying the local properties, such as location on disk.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks

The `info` or `properties` command displays the following information about a version-controlled item. Local and server information is listed separately.

:::row:::
   :::column span="1":::
   **Property name**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
**Local information:**
   
:::row:::
   :::column span="1":::
   `Local path`
   :::column-end:::
   :::column span="3":::
   Indicates the local path of the workspace folder for the specified item.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Changeset`
   :::column-end:::
   :::column span="3":::
   Indicates the version number of the file or folder that was last retrieved to the current workspace by using the [Get command](get-command.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Change`
   :::column-end:::
   :::column span="3":::
   Indicates where a change is pending.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Type`
   :::column-end:::
   :::column span="3":::
   Indicates the item type, for example `file`.
   :::column-end:::
:::row-end:::
**Server information:**
   
:::row:::
   :::column span="1":::
   `Server path`
   :::column-end:::
   :::column span="3":::
   Indicates the full path of the item on the version control server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Changeset`
   :::column-end:::
   :::column span="3":::
   Indicates the version number of the item.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Deletion ID`
   :::column-end:::
   :::column span="3":::
   If the item is deleted, indicates the deletion identification, otherwise `0`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Lock`
   :::column-end:::
   :::column span="3":::
   Indicates the type of lock:
   
   - `Checkin`: Check-in isn't permitted for the file.
   - `Checkout`:   Check-out isn't permitted for the file.
   - `None`: No lock is set. For more information, see [Lock command](lock-command.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Lock owner`
   :::column-end:::
   :::column span="3":::
   Indicates the person who set a lock.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Last modified`
   :::column-end:::
   :::column span="3":::
   Indicates the date and time stamp when the item was last modified.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Type`
   :::column-end:::
   :::column span="3":::
   Indicates the item type, for example `file`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `File type`
   :::column-end:::
   :::column span="3":::
   Displays the file type encoding, for example `Windows-1252`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `Size`
   :::column-end:::
   :::column span="3":::
   Indicates the size of the file in bytes.
   :::column-end:::
:::row-end:::

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays properties information about the file *314.cs*.

```
c:\projects>tf info 314.cs
```

The following example displays the properties of the working folder *c:\\projects\\objects*.

```
c:\projects>tf info objects
```

## Related articles

- [Use Source Control Explorer to manage files in TFVC](use-source-control-explorer-manage-files-under-version-control.md)
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Permission command](permission-command.md)
- [Status command](status-command.md)
- [History command](history-command.md)
- [Changeset command](changeset-command.md)
- [Shelvesets command](shelvesets-command.md)
