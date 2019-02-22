---
title: Merge Command
titleSuffix: Azure Repos
description: Merge Command
ms.assetid: 4075b4a8-1d11-49d5-8dbe-4fd00cdb0fca
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Merge Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

The **merge** command applies changes from one branch into another.

> [!NOTE]
> The results of this command are not reflected in the Team Foundation version control server until you perform a check-in operation. For more information, see [Check In Pending Changes](https://msdn.microsoft.com/library/ms181411).

**Required Permissions**

To use the **merge** command, you must have the **Check out** permission set to **Allow** for the workspace folder that contains the *destination* and you must have the **Read** permission set to **Allow** for the workspace folder that contains the source. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf merge [/recursive] [/force] [/candidate] [/discard] 
    [/version:versionspec] [/lock:none|checkin|checkout] [/preview] 
    [/baseless] [/nosummary] [/noimplicitbaseless] [/conservative] [/format:(brief|detailed)] [/noprompt] [/login:username,[password]] source destination
## Parameters

|**Argument**|**Description**|
|---|---|
|*versionspec*|Provides a value such as C2 for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be).|
|*source*|Specifies the file or folder to act as the source of the merge.|
|*destination*|Specifies the file or folder to act as the destination of the merge.|
|*username*|Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName* or *UserName*.|

<table><thead>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/recursive</strong></p></td>
	<td><p>Matches the <em>source</em> item specification in the current directory and any subfolders.</p></td></tr>
<tr>
	<td><p><strong>/force</strong></p></td>
	<td><p>Ignores the merge history and merges the specified changes from the source into the destination, even if some or all these changes have been merged before.</p></td></tr>
<tr>
	<td><p><strong>/candidate</strong></p></td>
	<td><p>Prints a list of all changesets in the source that have not yet been merged into the destination. The list should include the changeset ID that has not been merged and other basic information about that changeset.</p></td></tr>
<tr>
	<td><p><strong>/discard</strong></p></td>
	<td><p>Does not perform the merge operation, but updates the merge history to track that the merge occurred. This discards a changeset from being used for a particular merge.</p></td></tr>
<tr>
	<td><p><strong>/version</strong></p></td>
	<td><p>For a selective merge, this option specifies the range that should be merged into the destination. For a catch-up merge, this parameter specifies the version before which all un-merged changes should be merged.</p><p>For a selective merge, the version range denotes the beginning and end points of the set of changes to be merged. For example, if you attempt to merge version 4~6, the changesets 4, 5, and 6 are merged.</p></td></tr>
<tr>
	<td><p><strong>/lock</strong></p></td>
	<td><p>Specifies a lock type or removes a lock from an item. For more information, see <a href="understand-lock-types.md">Understanding Lock Types</a>.</p><p>Lock Options:</p><ul><li><p><strong>None</strong></p><p>No lock is placed on an item and removes any existing lock from an item.</p></li><li><p><strong>Checkin</strong></p><p>Other users can check out the specified items but they cannot check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.</p></li><li><p><strong>Checkout</strong></p><p>Prevents users from checking in or checking out any one of the specified items until you explicitly release the lock. If any other users have locked any one of the specified items, or if there are existing pending changes against any item, the lock operation fails.</p></li></ul></td></tr>
<tr>
	<td><p><strong>/preview</strong></p></td>
	<td><p>Shows a preview of the merge.</p></td></tr>
<tr>
	<td><p><strong>/baseless</strong></p></td>
	<td><p>Performs a merge without a base version. That is, allows the user to merge files and folders that do not have a merge relationship. After a baseless merge, a merge relationship exists, and future merges do not have to be baseless.</p><div class="alert"><div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml"><div class="mtps-row"><strong>Note</strong></div><div class="mtps-row">
Baseless merges cannot delete files in the target. You can manually carry over such changes. 
</div></div></div></td></tr>
<tr>
	<td><p><strong>/noimplicitbaseless</strong></p></td>
	<td><p>Specifies that Team Foundation will not perform an implicit baseless merge between two items that have the same relative name in two unrelated version-control trees.</p></td></tr>
<tr>
	<td><p><strong>/nosummary</strong></p></td>
	<td><p>Omits summary of conflicts, errors and warnings.</p></td></tr>
<tr>
	<td><p><strong>/noprompt</strong></p></td>
	<td><p>Suppresses any prompts for input from you.</p></td></tr>
<tr>
	<td><p><strong>/conservative</strong></p></td>
	<td><p>Results in more conflicts when you merge one branch to another.</p></td></tr>
<tr>
	<td><p><strong>/format</strong></p></td>
	<td><p>Specifies the formats of summarizing merge conflicts:</p><ul><li><p><strong>Brief</strong>: default value, summarizes only the total number of conflicts, warnings, and errors.</p></li><li><p><strong>Detailed</strong>: summarizes not only the total number of conflicts, warnings, and errors but also lists details about each conflict.</p></li></ul><p><strong>Note:</strong> This option applies only when the output contains a summary of conflicts. The summary cannot be shown if the <strong>/nosummary</strong> option is used or the merge caused fewer than 10 conflicts, warnings, and errors.</p></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td></tr></tbody>
</table>

## Remarks
You can use the **merge** command of the **tf** command-line utility to apply changes in an existing source branch to an existing target branch. You can merge an individual revision or a complete changeset to the target branch. You can merge changes from the source to the target branch or from the destination to the source branch.

The **merge** command also lets you query for changes in a source branch which have not been migrated to the target branch. Additionally, it lets you indicate that certain changes will never be merged from the source to the destination and should no longer be displayed as candidates for a merge operation.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### Baseless Merge

Use baseless merge to merge items that are not directly branched from each other. To perform a baseless merge, you must use the **tf** **merge** command. When you perform a baseless merge, Team Foundation does not have any information about the relationship of the files in the branches. In a baseless merge, you must perform manual conflict resolutions. After you have performed the baseless merge and resolved any conflicts, Team Foundation records the merge history and establishes a relationship between the folders and files.

When you run **tf** **merge**, Team Foundation performs an implicit baseless merge between items that have the same relative name in two previously related version-controlled trees. For example, you might want to merge the related branches $SRC\\ and $TGT. Both branches contain an unrelated file that is named a.txt. When you run **tf** **merge**, Team Foundation establishes a relationship between the two a.txt files if the two files are the same, if FIPS-compliant encryption is disabled, and if the source file is not related to any other file in the target.

If you run **tf merge** with the **/noimplicitbaseless** option set, when Team Foundation tries to merge the two branches, the two a.txt files will create a namespace conflict when you try to check in the changes. To resolve the conflict, you must rename one of the files.
## Examples
The following example merges changes from MyFile\_beta1 that have not been merged into MyFile\_RTM.

    c:\projects>tf merge MyFile_beta1 MyFile_RTM /recursive

The following example merges changeset 137 into branch2.

    c:\projects>tf merge /version:C137~C137 branch1 branch2 /recursive

The following example merges all the changesets up to changeset 137 into branch2.

    c:\projects>tf merge /version:C137 branch1 branch2 /recursive

The following example prints a list of the changesets in branch1 that have not been merged into branch2.

    c:\projects>tf merge /candidate branch1 branch2 /recursive

The following example prints a list of changesets in branch2 that have not been merged back into branch1.

    c:\projects>tf merge /candidate branch2 branch1 /recursive

The following example discards changeset 137 as a candidate for merging into branch2.

    c:\projects>tf merge /discard /version:C137 branch1 branch2 /recursive

## See Also

#### Tasks

[Resolve Conflicts between Two Files](https://msdn.microsoft.com/library/ms181433)

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Branch Command](branch-command.md)

[Merges Command](merges-command.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)

[Branching and Merging](use-branches-isolate-risk-team-foundation-version-control.md)
