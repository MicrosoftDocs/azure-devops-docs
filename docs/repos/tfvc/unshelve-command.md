---
title: Unshelve TFVC command
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control unshelve command to restore shelved files and other items or to remove an existing shelveset from the server.
ms.assetid: 468ab1f4-f565-41d9-a5ad-1481ad29b176
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Unshelve command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `unshelve` command restores shelved file revisions, check-in notes, comments, and work item associations to the current workspace. You can also use the `unshelve` command to remove an existing shelveset from the server.

## Prerequisites

- To use the `unshelve` command:
  - You must have the **Read** permission set to **Allow**.
  - You must have the **Check out** permission for the items in the shelveset set to **Allow**.
- To delete a shelveset, you must be its owner or have the **Administer shelved changes** global permission set to **Allow**.

For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).
 
## Syntax

```
tf unshelve [/move] [<shelveset-name>[;<owner-name>]] <item-spec> 
[/recursive] [/noprompt][/login:<username>,[<password>]]
```

## Parameters

The following sections describe arguments and options of the `unshelve` command.

### Arguments

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
   `<shelveset-name>`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the shelveset to restore.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<owner-name>`
   :::column-end:::
   :::column span="3":::
   Specifies the username of the shelveset owner.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<item-spec>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder revisions to unshelve into the current workspace. If this parameter isn't included, all pending changes in the specified shelveset are unshelved, by default. Server paths aren't allowed.

   For more information about how TFVC parses `<item-spec>` values to determine which items are within scope, see [Use Team Foundation version control commands - Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).

   > [!Note]  
   > You can specify more than one `<item-spec>` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify this value as either `DOMAIN\<username>` or `<username>`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<password>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option.
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
   `/move`
   :::column-end:::
   :::column span="3":::
   Deletes the specified shelveset from the Azure DevOps server after successfully unshelving the shelveset. This option can't be combined with an `<item-spec>` value.

   You can also delete a shelveset by using the `shelve` command.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Specifies that the `<item-spec>` value should be matched recursively.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Specifies that TFVC shouldn't prompt you for input.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the username and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks

The `unshelve` command of the `tf` command-line utility retrieves either all shelved file revisions or a defined subset of all shelved file revisions from the Azure DevOps server. The command then stores the revisions in the current workspace.

To unshelve an item, there must be no pending revisions against it in the destination workspace.

When you unshelve a shelveset, TFVC restores each shelved revision into the destination workspace as a pending change as long as the revision doesn't conflict with a change that was already pending in the workspace. For more information about what happens during the unshelve process, see [Work with shelvesets](suspend-your-work-manage-your-shelvesets.md).

You can use the `unshelve` command to restore individual file revisions from a shelveset to your workspace. After you run the `unshelve` command, run the `get` command to reconcile any changes that were checked into the server since the shelveset was created.

For more information about how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

#### Recycle shelved changes

If you want to integrate shelved revisions into your current workspace in order to make ongoing revisions, unshelve the desired shelveset. As a best practice, also get the latest version of your version-controlled files after unshelving.

#### Unshelve and review another user's code

You can also unshelve a shelveset in order to review changes from another user's workspace. To unshelve for this reason, you have two options:

- The first option is appropriate when the shelved items and related items haven't been revised, or have only been revised lightly since the shelveset was created. In this case, you can retrieve the base version of all related items from the shelveset owner's workspace. To use this option, run a variation of the following command: `tf get \* /version;W<workspace-name>`, where `<workspace-name>` is the name of the workspace that the other user created the shelveset from.

- The second option is appropriate when a significant amount of time has passed or multiple revisions have been in the workspace since the shelveset was created. In this case, you can retrieve the version of all related items from the server as of the date and time when the shelveset was created.

You can unshelve another user's shelved change by appending the username to the shelveset name. However, you can only remove a shelveset from the Azure DevOps server that was created by another user if you have the **AdminShelvedChangesets** permission.

If you attempt to unshelve an item with a pending change in the destination workspace, TFVC doesn't merge differences between the items and doesn't retrieve the revision into your workspace.

You can delete a shelveset by using `tf shelve /delete`. For more information, see [Shelve command](shelve-command.md). In order to automatically delete a shelveset after unshelving the entire shelveset, use `tf unshelve /move`.

## Examples

The following example opens the **Unshelve** dialog box so that you can find and unshelve a shelveset into the current workspace. You also have an option in the dialog box to have the shelveset deleted when the unshelve operation finishes.

```
c:\>tf unshelve
```

The following example unshelves the shelveset buddytest\_1256 into the current workspace and removes it from Azure DevOps Server:

```
c:\>tf unshelve /move buddytest_1256
```

## Related articles

- [Suspend your work and manage your shelvesets](suspend-your-work-manage-your-shelvesets.md)
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Shelve command](shelve-command.md)
- [Changeset command](changeset-command.md)
- [Work with shelvesets](suspend-your-work-manage-your-shelvesets.md)
