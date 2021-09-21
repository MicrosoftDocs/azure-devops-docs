---
title: Merge Command
titleSuffix: Azure Repos
description: Merge Command
ms.assetid: 4075b4a8-1d11-49d5-8dbe-4fd00cdb0fca
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Merge Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

The **merge** command applies changes from one branch into another.

> [!NOTE]
> The results of this command are not reflected in the Team Foundation version control server until you perform a check-in operation. For more information, see [Check In Pending Changes](/previous-versions/visualstudio/visual-studio-2010/ms181411(v=vs.100)).

**Required Permissions**

To use the **merge** command, you must have the **Check out** permission set to **Allow** for the workspace folder that contains the *destination* and you must have the **Read** permission set to **Allow** for the workspace folder that contains the source. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf merge [/recursive] [/force] [/candidate] [/discard] 
[/version:versionspec] [/lock:none|checkin|checkout] [/preview] 
[/baseless] [/nosummary] [/noimplicitbaseless] [/conservative] [/format:(brief|detailed)] [/noprompt] [/login:username,[password]] source destination
```

## Parameters

|**Argument**|**Description**|
|---|---|
|*versionspec*|Provides a value such as C2 for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).|
|*source*|Specifies the file or folder to act as the source of the merge.|
|*destination*|Specifies the file or folder to act as the destination of the merge.|
|*username*|Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName* or *UserName*.|

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="1":::
   Matches the *source* item specification in the current directory and any subfolders.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/force**
   :::column-end:::
   :::column span="1":::
   Ignores the merge history and merges the specified changes from the source into the destination, even if some or all these changes have been merged before.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/candidate**
   :::column-end:::
   :::column span="1":::
   Prints a list of all changesets in the source that have not yet been merged into the destination. The list should include the changeset ID that has not been merged and other basic information about that changeset.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/discard**
   :::column-end:::
   :::column span="1":::
   Does not perform the merge operation, but updates the merge history to track that the merge occurred. This discards a changeset from being used for a particular merge.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/version**
   :::column-end:::
   :::column span="1":::
   For a selective merge, this option specifies the range that should be merged into the destination. For a catch-up merge, this parameter specifies the version before which all un-merged changes should be merged.

   For a selective merge, the version range denotes the beginning and end points of the set of changes to be merged. For example, if you attempt to merge version 4~6, the changesets 4, 5, and 6 are merged.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/lock**
   :::column-end:::
   :::column span="1":::
   Specifies a lock type or removes a lock from an item. For more information, see [Understanding Lock Types](understand-lock-types.md).
   
   Lock Options:
   
   - **None**
   No lock is placed on an item and removes any existing lock from an item.
   - **Checkin**
   Other users can check out the specified items but they cannot check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   - **Checkout**
   Prevents users from checking in or checking out any one of the specified items until you explicitly release the lock. If any other users have locked any one of the specified items, or if there are existing pending changes against any item, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/preview**
   :::column-end:::
   :::column span="1":::
   Shows a preview of the merge.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/baseless**
   :::column-end:::
   :::column span="1":::
   Performs a merge without a base version. That is, allows the user to merge files and folders that do not have a merge relationship. After a baseless merge, a merge relationship exists, and future merges do not have to be baseless.
   
   >[!Note]  
   > Baseless merges cannot delete files in the target. You can manually carry over such changes.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noimplicitbaseless**
   :::column-end:::
   :::column span="1":::
   Specifies that Team Foundation will not perform an implicit baseless merge between two items that have the same relative name in two unrelated version-control trees.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/nosummary**
   :::column-end:::
   :::column span="1":::
   Omits summary of conflicts, errors and warnings.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="1":::
   Suppresses any prompts for input from you.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/conservative**
   :::column-end:::
   :::column span="1":::
   Results in more conflicts when you merge one branch to another.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/format**
   :::column-end:::
   :::column span="1":::
   Specifies the formats of summarizing merge conflicts:
   
   - **Brief**: default value, summarizes only the total number of conflicts, warnings, and errors.
   - **Detailed**: summarizes not only the total number of conflicts, warnings, and errors but also lists details about each conflict.

   >[!Note]  
   > This option applies only when the output contains a summary of conflicts. The summary cannot be shown if the **/nosummary** option is used or the merge caused fewer than 10 conflicts, warnings, and errors.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="1":::
   Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.
   :::column-end:::
:::row-end:::

## Remarks
You can use the **merge** command of the **tf** command-line utility to apply changes in an existing source branch to an existing target branch. You can merge an individual revision or a complete changeset to the target branch. You can merge changes from the source to the target branch or from the destination to the source branch.

The **merge** command also lets you query for changes in a source branch which have not been migrated to the target branch. Additionally, it lets you indicate that certain changes will never be merged from the source to the destination and should no longer be displayed as candidates for a merge operation.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).

### Baseless Merge

Use baseless merge to merge items that are not directly branched from each other. To perform a baseless merge, you must use the **tf** **merge** command. When you perform a baseless merge, Team Foundation does not have any information about the relationship of the files in the branches. In a baseless merge, you must perform manual conflict resolutions. After you have performed the baseless merge and resolved any conflicts, Team Foundation records the merge history and establishes a relationship between the folders and files.

When you run **tf** **merge**, Team Foundation performs an implicit baseless merge between items that have the same relative name in two previously related version-controlled trees. For example, you might want to merge the related branches $SRC\\ and $TGT. Both branches contain an unrelated file that is named a.txt. When you run **tf** **merge**, Team Foundation establishes a relationship between the two a.txt files if the two files are the same, if FIPS-compliant encryption is disabled, and if the source file is not related to any other file in the target.

If you run **tf merge** with the **/noimplicitbaseless** option set, when Team Foundation tries to merge the two branches, the two a.txt files will create a namespace conflict when you try to check in the changes. To resolve the conflict, you must rename one of the files.
## Examples
The following example merges changes from MyFile\_beta1 that have not been merged into MyFile\_RTM.

```
c:\projects>tf merge MyFile_beta1 MyFile_RTM /recursive
```

The following example merges changeset 137 into branch2.

```
c:\projects>tf merge /version:C137~C137 branch1 branch2 /recursive
```

The following example merges all the changesets up to changeset 137 into branch2.

```
c:\projects>tf merge /version:C137 branch1 branch2 /recursive
```

The following example prints a list of the changesets in branch1 that have not been merged into branch2.

```
c:\projects>tf merge /candidate branch1 branch2 /recursive
```

The following example prints a list of changesets in branch2 that have not been merged back into branch1.

```
c:\projects>tf merge /candidate branch2 branch1 /recursive
```

The following example discards changeset 137 as a candidate for merging into branch2.

```
c:\projects>tf merge /discard /version:C137~C137 branch1 branch2 /recursive
```

The following example discards all the changesets up to changeset 137 as a candidate for merging into branch2.

```
c:\projects>tf merge /discard /version:C137 branch1 branch2 /recursive
```

## Related articles

- [Resolve Conflicts between Two Files](/previous-versions/visualstudio/visual-studio-2010/ms181433(v=vs.100))
- [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))
- [Branch Command](branch-command.md)
- [Merges Command](merges-command.md)
- [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))
- [Branching and Merging](./branching-strategies-with-tfvc.md)