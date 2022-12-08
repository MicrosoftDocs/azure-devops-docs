---
title: Merge command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the tf merge command to apply changes from one branch into another in Team Foundation Version Control (TFVC).
ms.assetid: 4075b4a8-1d11-49d5-8dbe-4fd00cdb0fca
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Merge command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `tf merge` command applies changes from one branch into another in Team Foundation Version Control (TFVC).

> [!NOTE]
> The results of this command aren't reflected in the Azure DevOps server until you do a check-in operation. For more information, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

## Prerequisites

To use the `merge` command, you must have the **Check out** permission set to **Allow** for the workspace folder that contains the `destination`, and you must have the **Read** permission set to **Allow** for the workspace folder that contains the `source`. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf merge [/recursive] [/force] [/candidate] [/discard] 
[/version:versionspec] [/lock:none|checkin|checkout] [/preview] 
[/baseless] [/nosummary] [/noimplicitbaseless] [/conservative] [/format:(brief|detailed)] [/noprompt] [/login:username,[password]] source destination
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
   `<versionspec>`
   :::column-end:::
   :::column span="3":::
   Provides a value such as `C2` for the `/version` option. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<source>`
   :::column-end:::
   :::column span="3":::
   Specifies the file or folder to act as the source of the merge.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<destination>`
   :::column-end:::
   :::column span="3":::
   Specifies the file or folder to act as the destination of the merge.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a `username` value as either `DOMAIN\username` or `username`.
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
   Matches the `source` item specification in the current directory and any subfolders.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/force`
   :::column-end:::
   :::column span="3":::
   Ignores the merge history and merges the specified changes from the source into the destination, even if some or all these changes have been merged before.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/candidate`
   :::column-end:::
   :::column span="3":::
   Prints a list of all changesets in the source that haven't yet been merged into the destination. The list should include the changeset ID that hasn't been merged and other basic information about that changeset. An asterisk for a given result indicates that it was partially merged, meaning some of the changes in the changeset have been merged and other changes haven't been merged.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/discard`
   :::column-end:::
   :::column span="3":::
   Doesn't do the merge operation, but updates the merge history to track that the merge occurred. This discards a changeset from being used for a particular merge.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="3":::
   For a selective merge, this option specifies the range that should be merged into the destination. For a catch-up merge, this parameter specifies the version before which all un-merged changes should be merged.

   For a selective merge, the version range denotes the beginning and end points of the set of changes to be merged. For example, if you attempt to merge version `4~6`, the changesets 4, 5, and 6 are merged.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/lock`
   :::column-end:::
   :::column span="3":::
   Specifies a lock type or removes a lock from an item. For more information, see [Understand lock types](understand-lock-types.md).
   
   Lock options:
   
   - `None`: Doesn't place a lock on an item, and removes any existing lock from the item.

   - `Checkin`: Other users can check out the specified items, but they can't check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.

   - `Checkout`: Prevents users from checking in or checking out any one of the specified items until you explicitly release the lock. If any other users have locked any one of the specified items, or if there are existing pending changes against any item, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/preview`
   :::column-end:::
   :::column span="3":::
   Shows a preview of the merge.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/baseless`
   :::column-end:::
   :::column span="3":::
   Performs a merge without a base version. That is, allows the user to merge files and folders that don't have a merge relationship. After a baseless merge, a merge relationship exists, and future merges don't have to be baseless.
   
   >[!Note]  
   > Baseless merges can't delete files in the target. You can manually carry over such changes.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noimplicitbaseless`
   :::column-end:::
   :::column span="3":::
   Specifies that TFVC won't do an implicit baseless merge between two items that have the same relative name in two unrelated version-control trees.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/nosummary`
   :::column-end:::
   :::column span="3":::
   Omits summary of conflicts, errors, and warnings.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Suppresses any prompts for input from you.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/conservative`
   :::column-end:::
   :::column span="3":::
   Results in more conflicts when you merge one branch to another.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/format`
   :::column-end:::
   :::column span="3":::
   Specifies the formats of summarizing merge conflicts:
   
   - `Brief` (default): Summarizes only the total number of conflicts, warnings, and errors.
   - `Detailed`: Summarizes not only the total number of conflicts, warnings, and errors, but also lists details about each conflict.

   >[!Note]  
   > This option applies only when the output contains a summary of conflicts. The summary can't be shown if the `/nosummary` option is used or the merge caused fewer than 10 conflicts, warnings, and errors.
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
You can use the `merge` command of the `tf` command-line utility to apply changes in an existing source branch to an existing target branch. You can merge an individual revision or a complete changeset to the target branch. You can merge changes from the source to the target branch or from the destination to the source branch.

The `merge` command also lets you query for changes in a source branch that haven't been migrated to the target branch. The command also lets you indicate that certain changes will never be merged from the source to the destination and should no longer be displayed as candidates for a merge operation.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### Baseless merge

Use baseless merge to merge items that aren't directly branched from each other. To do a baseless merge, you must use the `tf merge` command. When you do a baseless merge, TFVC doesn't have any information about the relationship of the files in the branches. In a baseless merge, you must do manual conflict resolutions. After you do the baseless merge and resolve any conflicts, TFVC records the merge history and establishes a relationship between the folders and files.

When you run `tf merge`, TFVC does an implicit baseless merge between items that have the same relative name in two previously related version-controlled trees. For example, you might want to merge the related branches `$SRC` and `$TGT`. Both branches contain an unrelated file that is named *a.txt*. When you run `tf merge`, TFVC establishes a relationship between the two *a.txt* files if the two files are the same, FIPS-compliant encryption is disabled, and the source file isn't related to any other file in the target.

If you run `tf merge` with the `/noimplicitbaseless` option set, when TFVC tries to merge the two branches, the two *a.txt* files create a namespace conflict when you try to check in the changes. To resolve the conflict, you must rename one of the files.

## Examples
The following example merges changes from *MyFile_beta1* that haven't been merged into *MyFile_RTM*.

```
c:\projects>tf merge MyFile_beta1 MyFile_RTM /recursive
```

The following example merges changeset 137 into *branch2*.

```
c:\projects>tf merge /version:C137~C137 branch1 branch2 /recursive
```

The following example merges all the changesets up to changeset 137 into *branch2*.

```
c:\projects>tf merge /version:C137 branch1 branch2 /recursive
```

The following example prints a list of the changesets in *branch1* that haven't been merged into *branch2*.

```
c:\projects>tf merge /candidate branch1 branch2 /recursive
```

The following example prints a list of changesets in *branch2* that haven't been merged back into *branch1*.

```
c:\projects>tf merge /candidate branch2 branch1 /recursive
```

The following example discards changeset 137 as a candidate for merging into *branch2*.

```
c:\projects>tf merge /discard /version:C137~C137 branch1 branch2 /recursive
```

The following example discards all the changesets up to changeset 137 as candidates for merging into *branch2*.

```
c:\projects>tf merge /discard /version:C137 branch1 branch2 /recursive
```

## Related articles

- [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md)
- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Branch command](branch-command.md)
- [Merges command](merges-command.md)
- [Branching and merging](branching-strategies-with-tfvc.md)