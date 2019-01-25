---
title: Shelve Command
titleSuffix: Azure Repos
description: Shelve Command
ms.assetid: f6b9e3c8-9a5a-4ebb-9823-d3a430ca08de
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Shelve Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Stores a set of pending changes, together with pending check-in notes, a comment, and a list of associated work items on the server that is running Visual Studio Team Foundation Server without actually checking them into the version control server.

**Required Permissions**

If you want to use the **shelve** command to delete a shelveset, you must be a shelveset owner, or your **Administer shelved changes** permission must be set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf shelve  [/replace] [/comment:("comment"|@commentfile)] [shelvesetname] [/validate][/noprompt] [/login:username,[password]]

    tf shelve [/move] [/replace] [/comment:("comment"|@commentfile)] 
    [/recursive] [shelvesetname] itemspec [/validate] [/noprompt] [/login:username,[password]]

    tf shelve /delete shelvesetname[;owner] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]

## Parameters

| **Argument** | **Description** |
|---|---|
| *commentfile* | Specifies a file system path of a file from which comments for the shelveset should be read. |
| *comment* | Specifies the comment for the shelveset. |
| *itemspec* | Identifies the files or folders to shelve. By default, all pending changes in the current workspace are shelved if this parameter is not specified. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Command-Line Options](https://msdn.microsoft.com/library/4y2ash30). |
| *shelvesetname* | Specifies a name by which the shelveset can be retrieved from the Team Foundation server. You can specify an existing combination of *shelvesetname *and *owner *but only if **/replace** is also specified.<br /><br />You must provide a value for this parameter. |
| *owner* | Identifies the current or intended owner of the shelveset by user name. By default, the current user is assigned ownership of the shelveset if one is not specified. |
| *username* | Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName* or *UserName*. |
| *TeamProjectCollectionUrl* | The URL of the project collection that contains the files or folders that you want to shelve (for example, http://myserver:8080/tfs/DefaultCollection/). |

| **Option** | **Description** |
|---|---|
| **/move** | Removes pending changes from the workspace after the shelve operation is successful. |
| **/replace** | Replaces the existing shelveset with the same name and owner as the one that you specify. |
| **/delete** | Deletes the specified shelveset. Only the **/server** option may be combined with this option. If you do not include the **/noprompt** option, a confirmation message appears when the **/delete** option is specified. |
| **/comment** | Adds a specified comment describing the shelved changes. |
| **/recursive** | Shelves all items in the specified shelveset folder, its subfolders and all items therein if the itemspec you provide is a folder. |
| **/noprompt** | Suppresses any prompts for input from you. |
| **/validate** | Only valid when not combined with **/noprompt**.<br /><br />This option selects the validation check box in the **Shelve - Source Files **dialog box when it opens. When the validation check box is selected, the dialog box will evaluate the check-in policies and verify that require check-in notes have been filled in. This option is useful when the changes are being handed off for review and check-in by someone else. |
| **/login** | Specifies the user name and password to authenticate the user with Team Foundation Server. |
| **/collection** | Specifies the project collection. |


## Remarks

The **shelve** command of the **tf** command-line utility backs up pending changes, a list of associated work items, in-progress check-in notes, and comments in a shelveset on the Team Foundation Server. A *shelveset *is much like a changeset that is not committed to the server. Like a changeset, a shelveset can be retrieved from the server into a local workspace by any user who has sufficient permissions.

Shelving is an alternative to checking in pending changes that have not been tested sufficiently. Use shelving when you want to interrupt you work:

-   Share a set of local working files together with another developer or tester without checking in your changes to the version control server.

-   Set aside a group of pending changes temporarily without checking them in so that you can instead work on a higher priority issue. After you complete work on the high priority task, you can restore your shelved changes using the [Unshelve Command](unshelve-command.md).

If you include the **/move** option, the **shelve** command rolls back all shelved file revisions to their *base workspace versions* that is the last version retrieved from the server to the current workspace. Specifically, the **/move** option makes sure that for all the items that you shelve:

-   Uses **Undo** to undo the changes that were shelved. The files that were pending additions are deleted from the workspace.

-   The base workspace versions of all files for which pending editions exist are retrieved from the server into the current workspace.

-   All items in the current workspace are marked read-only.

If you include the **/delete** option, Team Foundation permanently removes the specified shelveset from the Team Foundation server.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

## Examples

The following example creates a new shelveset on the Team Foundation Server called Reflector\_BuddyTest, assigns ownership to the user Hans, then returns all items in the current workspace to the latest version downloaded during the last **get** operation, and a sets a read-only state.

    c:\projects> tf shelve Reflector_BuddyTest;Hans /move

The following example deletes the existing shelveset, "new-feature" from the server, creates a new shelveset by that name, and retains all pending changes in the current workspace.

    c:\projects> tf shelve new-feature /replace

The following example creates a shelveset named HelloWorld\_TestMe that includes all pending changes to all .cs files in the C:\\projects working folder and its subfolders.

    c:\projects> tf shelve HelloWorld_TestMe c:\projects\*.cs /recursive

The following example deletes the HelloWorld\_24 shelveset.

    c:\projects> tf shelve HelloWorld_24 /delete

## See Also

#### Tasks

[Shelve and Unshelve Pending Changes](https://msdn.microsoft.com/library/ms181404)

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Checkin Command](checkin-command.md)

[Changeset Command](changeset-command.md)

[Unshelve Command](unshelve-command.md)

#### Concepts

[Working with Shelvesets](suspend-your-work-manage-your-shelvesets.md)

[Pending Changes](https://msdn.microsoft.com/library/ms181409)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
