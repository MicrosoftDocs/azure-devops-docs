---
title: Shelvesets command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control (TFVC) Shelvesets command to display information about a set of shelved changes.
ms.assetid: 731a4339-1ba7-45ab-a551-51c3f4ae158c
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 12/02/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Shelvesets command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


The Team Foundation Version Control (TFVC) `shelvesets` command displays information about a set of shelved changes.

## Prerequisites

To use the `shelvesets` command, you must have the **Read** permission and the **Check out** permission set to **Allow** for the items in the shelvesets.  For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf shelvesets [/owner:ownername] [/format:(brief|detailed)] [/collection:TeamProjectCollectionUrl]] [/login:username,[password]] shelvesetname
```

## Parameters

### Arguments

|**Argument**|**Description**|
|---|---|
|`<ownername>`|Provides a value such as `*` or `DOMAIN\username` to the `/owner` option.|
|`<shelvesetname>`|The name of the shelveset.|
|`<TeamProjectCollectionUrl>`|The URL of the project collection that contains a set of shelved changes about which you want to display information, for example `http://myserver:8080/tfs/DefaultCollection`.|
|`<username>`|Provides a value to the `/login` option. You can specify a user name value as either `DOMAIN\username` or `username`.|

### Options

|**Option**|**Description**|
|---|---|
|`/owner`|Specifies one or more shelveset owners. You can use wildcard characters.|
|`/format`|Specifies what kind of format to display shelveset information in.<br /><br />`Brief` displays the shelveset name, the name of the user who created it, and a shelveset comment, if one exists. `Detailed` displays the shelveset name, owner, and comment in addition to a list of associated work items and any check-in notes. `Brief` is the default value.|
|`/collection`|Specifies the project collection.|
|`/login`|Specifies the user name and password to authenticate the user with Azure DevOps.|

## Remarks

Shelvesets are created by the [Shelve command](shelve-command.md). Shelvesets are stored on the Azure DevOps server and can be retrieved into a workspace by any user who has sufficient permissions by using the [Unshelve command](unshelve-command.md).

Unlike a changeset, a shelveset is a non-versioned entity. If you or another user unshelve the items in a shelveset, edit several files, and reshelve the shelveset, TFVC doesn't create a new version of the items for future comparison. TFVC maintains no record of who revised the items, when, or how. For more information about deciding whether to shelve or check in a set of pending changes, and a general overview of shelving, see [Work with shelvesets](suspend-your-work-manage-your-shelvesets.md).

For detailed information about the individual source file revisions in a particular shelveset, you can use the [Status command](status-command.md) with the `/shelveset` option.

You can compare a shelved revision to its base shelveset version without unshelving the item into your workspace. You can use this feature to conduct a quick peer code review.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### Examples

The following example displays information about the `BuddyTest_23` shelveset for the Azure DevOps server to which the current directory maps:

```
c:\projects>tf shelvesets BuddyTest_23
```

The following example lists the shelvesets owned by `Pat`:

```
c:\projects>tf shelvesets /owner:Pat
```

The following example displays information about all the shelvesets on the Azure DevOps server to which the current directory maps:

```
c:\projects>tf shelvesets /owner:*
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Status command](status-command.md)
- [Changeset command](changeset-command.md)
- [Shelve command](shelve-command.md)
- [Unshelve command](unshelve-command.md)
- [Work with shelvesets](suspend-your-work-manage-your-shelvesets.md)
