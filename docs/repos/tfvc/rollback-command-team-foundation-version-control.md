---
title: Rollback command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control (TFVC) rollback command to roll back the effects of one or more changesets to one or more version-controlled items.
ms.assetid: 8cbca369-eda2-459b-aa37-c86ec2eab3b0
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/28/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Rollback command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

You can use the Team Foundation Version Control (TFVC) `tf rollback` command to roll back the effects of one or more changesets on one or more version-controlled items. This command doesn't remove the changesets from an item's version history. Instead, this command creates a set of pending changes in your workspace that negate the effects of the changesets that you specify.

## Prerequisites

To use this command, you must have the **Read**, **Check Out**, and **Check In** permissions set to **Allow**. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf rollback /toversion:VersionSpec ItemSpec [/recursive] [/lock:none|checkin|checkout] [/version:versionspec] [/keepmergehistory] [/login:username,[password]] [/noprompt]
```

```
tf rollback /changeset:ChangesetFrom~ChangesetTo [ItemSpec] [/recursive] [/lock:none|checkin|checkout] [/version:VersionSpec]
[/keepmergehistory] [/noprompt] [/login:username,[password]]
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
:::row:::
   :::column span="1":::
   `<ChangesetFrom>~<ChangesetTo>`
   :::column-end:::
   :::column span="3":::
   Use this argument with the `/changeset` option to specify the changesets that you want to roll back. You can specify the changesets in the following ways:

   - A single changeset, for example `/changeset:C11`
   - A range of changesets, for example `/changeset:C7~C20`
   - A date, for example `/changeset:D09/30/09`
   - A range of dates, for example `/changeset:D09/23/09~D10/07/09`
   - The most recent changeset, `/changeset:Tip` or `/changeset:T`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<ItemSpec>`
   :::column-end:::
   :::column span="3":::
   Use this argument to specify one or more items that you want to roll back. If you use the `/toversion` option, you must specify this argument.

   For more information about how TFVC parses item specifications, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   
   > [!Note]  
   > You can specify more than one `itemspec` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<VersionSpec>`
   :::column-end:::
   :::column span="3":::
   The user-provided value for both the `/version` option and the `/toversion` option.

   Use this argument with the `/toversion` option to revert a file to its state in a specific changeset. You can specify the version in the following ways:
   
   - A single changeset, for example `/toversion:C32`
   - A date at midnight, for example `/toversion:D06/19/09`
   - A date and a time, for example `/toversion:D06/19/09T14:32`
   - A label, for example `/toversion:LTestLabel`
   - The version in the workspace that is mapped to the current directory, `/toversion:W`
   - The version in a specific workspace, for example `/toversion:WResolveRIConflicts;AKerry`

   For more information about how TFVC parses the `versionspec`, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
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
   `/changeset`
   :::column-end:::
   :::column span="3":::
   Use this option to specify one or more specific changesets that you want to negate.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/keepmergehistory`
   :::column-end:::
   :::column span="3":::
   This option has an effect only if one or more of the changesets that you're rolling back include a **branch** or **merge** change. Specify this option if you want future merges between the same source and the same target to exclude the changes that you're rolling back.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/lock`
   :::column-end:::
   :::column span="3":::
   Specify this option to prevent other users from checking in or checking out items until you finish rolling back all associated changes. For more information, see [Understand lock types](./understand-lock-types.md).

   Lock options:
   - `None`. Default. No lock is applied. If the file that you are rolling back has been locked, this option removes the lock.
   - `Checkin`. Locks an item until you release the lock by performing a check-in. Other users can check out the specified item, but the users can't check in revisions until the lock is removed. You can't lock a file that is already locked.
   - `Checkout`. Prevents users from checking in or checking out a locked item until you remove the lock by doing a check-in. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   For information about this option, see [Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Use this option to suppress any dialog boxes that would otherwise appear during this operation.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Specify this option if you want the operation to include items in subfolders.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/toversion`
   :::column-end:::
   :::column span="3":::
   Specify this option to revert a file to its state in a specific changeset. When you use this option, you negate the effect of all changesets that have been applied since the version that you specify.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="3":::
   Specifies the current version of the files and folders that you want to roll back.
   :::column-end:::
:::row-end:::

## Remarks

The `tf rollback` command negates the effect of each changeset that you specify for each item that you specify. The following table lists how the operation negates each kind of change.

|Type of change rolled back|Type of rollback change|
|---|---|
|**add**, **branch**, or **undelete**|**delete**|
|**edit**|**edit**|
|**encoding**|**encoding**|
|**rename/move**|**rename/move**|
|**delete**|**undelete**|
|**merge**|Change that negates whatever changes merged into the current branch.|

The following list provides some examples of changes that result from the `rollback` command:

- You roll back a changeset in which an **add** change occurred. The rollback operation causes a **rollback** change and a **delete** change.

- You roll back changeset 521 in which an **edit** change occurred. The rollback operation causes a **rollback** change and an **edit** change that negates the **edit** change in changeset 521.

- In changeset 132, you merged from *$/BranchA/File1.txt* to *$/BranchB/File1.txt*. The changes in that merge included **edit** changes in changesets 92 and 104. In changeset 162, you roll back changeset 132, which results in a **rollback** change and an **edit** change to *$/BranchB/File1.txt* that negates the **edit** changes in changesets 92 and 104.

### Exit codes

An exit code from the following table appears after you run the `tf rollback` command.

|Exit code|Description|
|---|---|
|0|The operation rolled back all items successfully.|
|1|The operation rolled back at least one item successfully but couldn't roll back one or more items.|
|100|The operation couldn't roll back any items.|

## Examples
The following example negates the effect of changeset 23 on all items that were changed in that changeset:

```
c:\workspace> tf rollback /changeset:C23
```

The following example negates the effect of changeset 23 on the file *a.txt*:

```
c:\workspace> tf rollback /changeset:C23 a.txt
```

The following example changes the content of *a.txt* to match the version that was checked in with changeset 23:

```
c:\workspace> tf rollback /toversion:C23 a.txt
```

The following example changes the content of *OurTeamProject* to match the last changeset that was applied on or before midnight on August 31, 2009:

```
c:\workspace> tf rollback /toversion:D08/31/2009 /recursive $/OurTeamProject/
```

### Example /keepmergehistory option

When you roll back a changeset that included a branch or a merge change, you usually want future merges between the same source and the same target to include those changes. However, you can use the `/keepmergehistory` option if you want future merges between the same source and the same target to exclude changesets that were encompassed in a past merge operation. For example:

1. On June 30, 2009, you do a full merge of all items from *$/BranchA/* to *$/BranchB/*.

   ```
   c:\workspace> tf merge $/BranchA $/BranchB
   ```

   You check in this merge as part of changeset 292.

1. In July, you make several changes *$/BranchA/Util.cs*. These changes are encompassed in changesets 297, 301, and 305.

1. On August 1, 2009, you merge *$/BranchA/Util.cs* to *$/BranchB/Util.cs*.

   ```
   c:\workspace> tf merge $/BranchA/Util.cs $/BranchB/Util.cs
   ```

   You check in the change as part of changeset 314. The result of this operation is that the edits that you made in changesets 297, 301, and 305 to *$/BranchA/Util.cs* are now also applied to *$/BranchB/Util.cs*.

1. A week later, you realize that the edits that you made to *$/BranchA/Util.cs* in July aren't appropriate for *$/BranchB/Util.cs*. You can use the `rollback` command to negate these changes. When you use the `rollback` command to roll back a **merge** change or a **branch** change, you have a decision to make.

   - If you want the changes that you made to *$/BranchA/Util.cs* in July to be re-applied to *$/BranchB/Util.cs* in future merges, enter the following command:

     ```
     c:\workspace> tf rollback /changeset:314
     ```

   - If you want the changes that you made to *$/BranchA/Util.cs* in July never to be reapplied to *$/BranchB/Util.cs* in future merges, enter the following command:

     ```
     c:\workspace> tf rollback /changeset:314 /keepmergehistory
     ```

1. A few weeks later, you merge *$/BranchA/* into *$/BranchB/*.

   ```
   c:\workspace> tf merge $/BranchA $/BranchB
   ```

   - If you omitted the `/keepmergehistory` option when you rolled back, the **merge** change applies to *$/BranchB/Util.cs* all changesets that were applied to *$/BranchA/Util.cs* since changeset 292, including changesets 297, 301, and 305. In other words, the merge undoes the rollback change.

   - If you included the `/keepmergehistory` option when you rolled back, the merge operation applies to *$/BranchB/Util.cs* all changesets that were applied to *$/BranchA/Util.cs* since changeset 292, excluding changesets 297, 301, and 305. In other words, the merge doesn't undo the rollback change. Therefore, the content on *BranchA* might not match the content on *BranchB*.

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Merge command](merge-command.md)
