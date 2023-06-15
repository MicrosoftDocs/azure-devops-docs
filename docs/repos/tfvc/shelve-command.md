---
title: Shelve command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control (TFVC) Shelve command to store a set of pending changes on the server without actually checking them in.
ms.assetid: f6b9e3c8-9a5a-4ebb-9823-d3a430ca08de
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 12/01/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Shelve command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


The Team Foundation Version Control (TFVC) `shelve` command stores a set of pending changes, together with pending check-in notes, a comment, and a list of associated work items on an Azure DevOps server without actually checking them in.

## Prerequisites

If you want to use the `shelve` command to delete a shelveset, you must be a shelveset owner, or your **Administer shelved changes** permission must be set to **Allow**.  For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf shelve  [/replace] [/comment:("comment"|@commentfile)] [shelvesetname] [/validate][/noprompt] [/login:username,[password]]
```

```
tf shelve [/move] [/replace] [/comment:("comment"|@commentfile)] 
[/recursive] [shelvesetname] itemspec [/validate] [/noprompt] [/login:username,[password]]
```

```
tf shelve /delete shelvesetname[;owner] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]
```

## Parameters

### Arguments

|        **Argument**        |                                                                                                                                                             **Description**                                                                                                                                                             |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       `<commentfile>`        |                                                                                                                      Specifies a file system path of a file from which comments for the shelveset should be read.                                                                                                                       |
|         `<comment>`          |                                                                                                                                                Specifies the comment for the shelveset.                                                                                                                                                 |
|         `<itemspec>`         | Identifies the files or folders to shelve. By default, all pending changes in the current workspace are shelved if this parameter isn't specified. For more information about how Team Foundation parses the `itemspec` to determine which items are within scope, see [Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions). |
|      `<shelvesetname>`       |                               Specifies a name by which the shelveset can be retrieved from the Azure DevOps server. You can specify an existing combination of `shelvesetname`  and `owner`, but only if `/replace` is also specified.<br /><br />You must provide a value for this parameter.                                |
|          `<owner>`           |                                                                                  Identifies the current or intended owner of the shelveset by user name. By default, the current user is assigned ownership of the shelveset if one isn't specified.                                                                                   |
|         `<username>`         |                                                                                                        Provides a value to the `/login` option. You can specify a user name value as either `DOMAIN\username` or `username`.                                                                                                        |
| `<TeamProjectCollectionUrl>` |                                                                                       The URL of the project collection that contains the files or folders that you want to shelve, for example `http://myserver:8080/tfs/DefaultCollection/`.                                                                                        |


### Options

| **Option** | **Description** |
|---|---|
| `/new` | The selected state of each pending change as shown in the Visual Studio **Check In** dialog box, the comment, associated work items, check-in notes, and check-in policy override reason, are stored on your dev machine as pending changes until you check them in. The `/new` option clears this check-in metadata before you check in. |
| `/move` | Removes pending changes from the workspace after the shelve operation is successful. |
| `/replace` | Replaces the existing shelveset with the same name and owner as the one that you specify. |
| `/delete` | Deletes the specified shelveset. Only the `/server` option may be combined with this option. If you don't include the `/noprompt` option, a confirmation message appears when the `/delete` option is specified. |
| `/comment` | Adds a specified comment describing the shelved changes. |
| `/recursive` | Shelves all items in the specified shelveset folder, its subfolders, and all items therein if the `itemspec` you provide is a folder. |
| `/noprompt` | Suppresses any prompts for input from you. |
| `/validate` | This option selects the **Evaluate policies and check-in notes before shelving** check box in the **Shelve - Source Files** dialog box when it opens. When the validation check box is selected, the dialog evaluates the check-in policies and verifies that require check-in notes have been filled in. This option is useful when the changes are being handed off for review and check-in by someone else. Not valid when combined with `/noprompt`.|
| `/login` | Specifies the user name and password to authenticate the user with Azure DevOps Server. |
| `/collection` | Specifies the project collection. |


## Remarks

The `shelve` command of the `tf` command-line utility backs up pending changes, a list of associated work items, in-progress check-in notes, and comments in a shelveset on the Azure DevOps server. A *shelveset* is much like a changeset that isn't committed to the server. Like a changeset, a shelveset can be retrieved from the server into a local workspace by any user who has sufficient permissions.

Shelving is an alternative to checking in pending changes that haven't been tested sufficiently. Use shelving when you want to interrupt your work to:

-   Share a set of local working files with another developer or tester without checking in your changes to the version control server.

-   Set aside a group of pending changes temporarily without checking them in, so you can instead work on a higher priority issue. After you complete work on the high priority task, you can restore your shelved changes by using the [Unshelve command](unshelve-command.md).

If you include the `/move` option, the `shelve` command rolls back each shelved file revision to the *base workspace version* that's the last version retrieved from the server to the current workspace. Specifically, for all the items that you shelve, the `/move` option:

-   Uses `Undo` to undo the changes that were shelved. The files that were pending additions are deleted from the workspace.

-   Retrieves the base workspace versions of all files for which pending editions exist from the server into the current workspace.

-   Marks all items in the current workspace read-only.

If you include the `/delete` option, TFVC permanently removes the specified shelveset from the Azure DevOps server.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example creates a new shelveset on the Azure DevOps server called `Reflector_BuddyTest`, assigns ownership to the user `Pat`, returns all items in the current workspace to the latest version downloaded during the last `get` operation, and sets a read-only state:

```
c:\projects> tf shelve Reflector_BuddyTest;Pat /move
```

The following example deletes the existing shelveset `new-feature` from the server, creates a new shelveset by that name, and retains all pending changes in the current workspace:

```
c:\projects> tf shelve new-feature /replace
```

The following example creates a shelveset named `HelloWorld_TestMe` that includes all pending changes to all *.cs* files in the *C:\\projects* working folder and its subfolders:

```
c:\projects> tf shelve HelloWorld_TestMe c:\projects\*.cs /recursive
```

The following example deletes the `HelloWorld_24` shelveset:

```
c:\projects> tf shelve HelloWorld_24 /delete
```

## Related articles

- [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md)
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Checkin command](checkin-command.md)
- [Changeset command](changeset-command.md)
- [Unshelve command](unshelve-command.md)
- [Work with shelvesets](suspend-your-work-manage-your-shelvesets.md)
- [Check in your work to the team's codebase](check-your-work-team-codebase.md)
