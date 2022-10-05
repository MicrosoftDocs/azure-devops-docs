---
title: Unshelve TFVC command
titleSuffix: Azure Repos
description: Use the unshelve command to restore shelved file revisions, check-in notes, comments, and work item associations to the current workspace or remove an existing shelveset from the server.
ms.assetid: 468ab1f4-f565-41d9-a5ad-1481ad29b176
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Unshelve command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

The **unshelve** command restores shelved file revisions, check-in notes, comments, and work item associations to the current workspace or removes an existing shelveset from the server.

## Prerequisites

To use the **unshelve** command, you must have the **Read** permission set to **Allow**, and you must have the **Check out** permission for the items in the shelveset set to **Allow**. Additionally, to delete a shelveset, you must be its owner or have the **Administer shelved changes** global permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).
 

## Syntax

```
tf unshelve [/move] [shelvesetname[;username]] itemspec 
[/recursive] [/noprompt][/login:username,[password]]
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

:::row:::
   :::column span="1":::
   *shelvesetname*
   :::column-end:::
   :::column span="3":::
   The name of the shelveset to restore.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *ownername*
   :::column-end:::
   :::column span="3":::
   The name of the shelveset owner.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Itemspec*
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder revisions to unshelve into the current workspace. If this parameter is not included, all pending changes in the specified shelveset are unshelved, by default. Server paths are not allowed.

   For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Use Team Foundation version control commands, Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options).

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN\UserName* or *UserName*.
   :::column-end:::
:::row-end:::

### Option

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
   **/move**
   :::column-end:::
   :::column span="3":::
   Deletes the specified shelveset from the server for Team Foundation version control upon successful completion of the unshelve operation. This option cannot be combined with an *itemspec*.

   You can also delete a shelveset using the **shelve** command.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   If specified, the itemspec is matched recursively.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="3":::
   If specified, you are not prompted for input.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::


## Remarks
The **unshelve** command of the **tf** command-line utility retrieves either all shelved file revisions or a defined subset of all shelved file revisions from the Team Foundation server into the current workspace.

To unshelve an item, there must be no pending revisions against it in the destination workspace.

When you unshelve a shelveset, Team Foundation restores each shelved revision into the destination workspace as a pending change as long as the revision does not conflict with a change that was already pending in the workspace. For more details about what happens during the unshelve process, see [Working with Shelvesets](suspend-your-work-manage-your-shelvesets.md).

You can use the **unshelve** command to restore individual file revisions from a shelveset to your workspace. You should run get after unshelving to reconcile any changes checked into the server since the shelveset was created.

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

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

```
c:\>tf unshelve
```

The following example unshelves the shelveset buddytest\_1256 into the current workspace and removes it from Team Foundation Server.

```
c:\>tf unshelve /move buddytest_1256
```

## Related articles

- [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md)
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Shelve Command](shelve-command.md)
- [Changeset Command](changeset-command.md)
- [Working with Shelvesets](suspend-your-work-manage-your-shelvesets.md)
