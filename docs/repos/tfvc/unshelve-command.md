---
title: Unshelve Command
titleSuffix: Azure Repos
description: Unshelve Command
ms.assetid: 468ab1f4-f565-41d9-a5ad-1481ad29b176
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Unshelve Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Restores shelved file revisions, check-in notes, comments, and work item associations to the current workspace or removes an existing shelveset from the server.

**Required Permissions**

To use the **unshelve** command, you must have the **Read** permission set to **Allow**, and you must have the **Check out** permission for the items in the shelveset set to **Allow**. Additionally, to delete a shelveset, you must be its owner or have the **Administer shelved changes** global permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf unshelve [/move] [shelvesetname[;username]] itemspec 
    [/recursive] [/noprompt][/login:username,[password]]
## Parameters<table>
<thead>
<tr>
<th><p>Argument</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><i>shelvesetname</i></p></td>
<td><p>The name of the shelveset to restore.</p></td>
</tr>
<tr>
<td><p><i>ownername</i></p></td>
<td><p>The name of the shelveset owner.</p></td>
</tr>
<tr>
<td><p><i>Itemspec</i></p></td>
<td><p>Identifies the file or folder revisions to unshelve into the current workspace. If this parameter is not included, all pending changes in the specified shelveset are unshelved, by default. Server paths are not allowed.</p>
<p>For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/4y2ash30">Command-Line Options</a>.</p>
>**Note:**  
>You can specify more than one *Itemspec* argument.
</td>
</tr>
<tr>
<td><p><i>username</i></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <i>DOMAIN\UserName</i> or <i>UserName</i.</p></td>
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
<td><p><strong>/move</strong></p></td>
<td><p>Deletes the specified shelveset from the server for Team Foundation version control upon successful completion of the unshelve operation. This option cannot be combined with an <i>itemspec</i>.</p>
<p>You can also delete a shelveset using the <strong>shelve</strong> command.</p></td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>If specified, the itemspec is matched recursively.</p></td>
</tr>
<tr>
<td><p><strong>/noprompt</strong></p></td>
<td><p>If specified, you are not prompted for input.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong></p></td>
<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td>
</tr>
</tbody>
</table>

## Remarks
The **unshelve** command of the **tf** command-line utility retrieves either all shelved file revisions or a defined subset of all shelved file revisions from the Team Foundation server into the current workspace.

To unshelve an item, there must be no pending revisions against it in the destination workspace.

When you unshelve a shelveset, Team Foundation restores each shelved revision into the destination workspace as a pending change as long as the revision does not conflict with a change that was already pending in the workspace. For more details about what happens during the unshelve process, see [Working with Shelvesets](suspend-your-work-manage-your-shelvesets.md).

You can use the **unshelve** command to restore individual file revisions from a shelveset to your workspace. You should run get after unshelving to reconcile any changes checked into the server since the shelveset was created.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

#### Recycle Shelved Changes

If you want to integrate shelved revisions into your current workspace in order to make ongoing revisions, unshelve the desired shelveset. As a best practice, get the latest version of your version-controlled files after unshelving as well.

#### Unshelve and Review Another User's Code

You can also unshelve a shelveset in order to review changes from another user's workspace. To unshelve for this reason, you have two options.

-   If the shelved items and the items with which they are related have not been revised, or have only been revised lightly since the shelveset was created, you can retrieve the base version of all related items from the shelveset owner's workspace. To do this, use some variation of the following command: `tf get \* /version;Wworkspacename`, where *workspacename* is the name of the workspace from which the other user created the shelveset.

-   If a significant amount of time has passed or if multiple revisions have been in the workspace since the shelveset was created, retrieve the version of all related items from the server as of the date and time when the shelveset was created.

You can unshelve another user's shelved change by appending the username to the shelveset name. However, you can only remove a shelveset from the Team Foundation Server that was created by another user if you have the AdminShelvedChangesets permission.

If you attempt to unshelve an item for which a pending change exists in the destination workspace, Team Foundation does not merge differences between the items and does not retrieve the revision into your workspace.

You can delete a shelveset by using `tf shelve /delete`. For more information, see [Shelve Command](shelve-command.md). In order to automatically delete a shelveset after unshelving the entire shelveset, use `tf unshelve /move`.

## Examples
The following example opens the **Unshelve** dialog box so that you can find and unshelve a shelveset into the current workspace. You also have an option in the dialog box to have the shelveset deleted when the unshelve operation completes.

    c:\>tf unshelve

The following example unshelves the shelveset buddytest\_1256 into the current workspace and removes it from Team Foundation Server.

    c:\>tf unshelve /move buddytest_1256

## See Also

#### Tasks

[Shelve and Unshelve Pending Changes](https://msdn.microsoft.com/library/ms181404)

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Shelve Command](shelve-command.md)

[Changeset Command](changeset-command.md)

#### Concepts

[Working with Shelvesets](suspend-your-work-manage-your-shelvesets.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
