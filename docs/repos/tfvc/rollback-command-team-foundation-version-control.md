---
title: Rollback Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Rollback Command (Team Foundation Version Control)
ms.assetid: 8cbca369-eda2-459b-aa37-c86ec2eab3b0
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Rollback Command (Team Foundation Version Control)

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

You can use this command to roll back the effects of one or more changesets to one or more version-controlled items. This command does not remove the changesets from an item's version history. Instead, this command creates in your workspace a set of pending changes that negate the effects of the changesets that you specify.

**Required Permissions**

To use this command, you must have the **Read**, **Check Out**, and **Check In** permissions set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

	tf rollback /toversion:VersionSpec ItemSpec [/recursive] [/lock:none|checkin|checkout] [/version:versionspec] [/keepmergehistory] [/login:username,[password]] [/noprompt]

&nbsp;

	tf rollback /changeset:ChangesetFrom~ChangesetTo [ItemSpec] [/recursive] [/lock:none|checkin|checkout] [/version:VersionSpec]
	[/keepmergehistory] [/noprompt] [/login:username,[password]]


## Parameters

<table>
<thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>ChangesetFrom~ChangesetTo</em></p></td>
	<td><p>Use this argument with the <strong>/changeset</strong> option to specify the changesets that you want to roll back. You can specify the changesets in the following ways:</p><ul><li><p>A single changeset</p><p>Example: <strong>/changeset:C11</strong></p></li><li><p>A range of changesets</p><p>Example: <strong>/changeset:C7~C20</strong></p></li><li><p>A date</p><p>Example: <strong>/changeset:D09/30/09</strong></p></li><li><p>A range of dates</p><p>Example:<strong>/changeset:D09/23/09~D10/07/09</strong></p></li><li><p>The most recent changeset</p><p>Example: <strong>/changeset:Tip</strong> or <strong>/changeset:T</strong></p></li></ul></td></tr>
<tr>
	<td><p><em>ItemSpec</em></p></td>
	<td><p>Use this argument to specify one or more items that you want to roll back. If you are using the <strong>/toversion</strong> option, you must specify this argument.</p><p>For more information about how Team Foundation parses item specifications, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p><div class="alert"><div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml"><div class="mtps-row"><strong>Note:</strong></div><div class="mtps-row">
You can specify more than one <em>Itemspec</em> argument.
</div></div></div></td></tr>
<tr>
	<td><p><em>VersionSpec</em></p></td>
	<td><p>The user-provided value for both the <strong>/version</strong> option and the <strong>/toversion</strong> option.</p><p>Use this argument with the <strong>/toversion</strong> option to revert a file to its state in a specific changeset. You can specify the version in the following ways:</p><ul><li><p>A single changeset</p><p>Example: <strong>/toversion:C32</strong></p></li><li><p>A date (at midnight)</p><p>Example: <strong>/toversion:D06/19/09</strong></p></li><li><p>A date and a time</p><p>Example: <strong>/toversion:D06/19/09T14:32</strong></p></li><li><p>A label</p><p>Example: <strong>/toversion:LTestLabel</strong></p></li><li><p>The version in the workspace that is mapped to the current directory</p><p>Example: <strong>/toversion:W</strong></p></li><li><p>The version in a specific workspace</p><p>Example: <strong>/toversion:WResolveRIConflicts;AKerry</strong></p></li></ul><p>For more information about how Team Foundation parses versionspecs, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td></tr></tbody>
</table>

<table><tbody>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr>
<tr>
	<td><p><strong>/changeset</strong></p></td>
	<td><p>Use this option to specify one or more specific changesets that you want to negate.</p></td></tr>
<tr>
	<td><p><strong>/keepmergehistory</strong></p></td>
	<td><p>This option has an effect only if one or more of the changesets that you are rolling back include a <strong>branch</strong> or <strong>merge</strong> change. Specify this option if you want future merges between the same source and the same target to exclude the changes that you are rolling back.</p></td></tr>
<tr>
	<td><p><strong>/lock</strong></p></td>
	<td><p>Specify this option to prevent other users from checking in or checking out items until you finish rolling back all associated changes. For more information, see <a href="https://msdn.microsoft.com/library/ms181419">Understanding Lock Types</a>.</p><p>Lock Options</p><ul><li><p><strong>None</strong></p><p>Default. No lock is applied. If the file that you are rolling back has been locked, this option removes the lock.</p></li><li><p><strong>Checkin</strong></p><p>Locks an item until you release the lock by performing a check-in. Other users can check out the specified items, but the users cannot check in revisions until the lock is removed. You cannot lock a file that is already locked.</p></li><li><p><strong>Checkout</strong></p><p>Prevents users from checking in or out a locked item until you remove the lock by performing a check-in. </p></li></ul></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>For information about this option, see <a href="https://msdn.microsoft.com/library/4y2ash30">Command-Line Options</a>.</p></td></tr>
<tr>
	<td><p><strong>/noprompt</strong></p></td>
	<td><p>Suppresses any dialog boxes that would otherwise appear during this operation.</p></td></tr>
<tr>
	<td><p><strong>/recursive</strong></p></td>
	<td><p>Specify this option if you want the operation to include items in subfolders.</p></td></tr>
<tr>
	<td><p><strong>/toversion</strong></p></td>
	<td><p>Specify this option to revert a file to its state in a specific changeset. When you use this option, you negate the effect of all changesets that have been applied since the version that you specify.</p></td></tr>
<tr>
	<td><p><strong>/version</strong></p></td>
	<td><p>Specifies the current version of the files and folders that you want to roll back.</p></td></tr></tbody>
</table>

## Remarks

The **tf rollback** command negates the effect of each changeset that you specify for each item that you specify. The following table lists how the operation negates each kind of change.

|**If you roll back this change...**|**...a rollback change and the following additional change are made**|
|---|---|
|**add**, **branch**, or **undelete**|**delete**|
|**edit**|**edit**|
|**encoding**|**encoding**|
|**rename/move**|**rename/move**|
|**delete**|**undelete**|
|**merge**|Change that negates whatever changes were merged into the current branch.|

The following list provides some examples of changes that result from the rollback command:

-   If you are rolling back a changeset in which an **add** change occurred, the rollback operation causes a **rollback** change and a **delete** change.

-   If you are rolling back changeset 521 in which an **edit** change occurred, the rollback operation causes a **rollback** change and an **edit** change that negates the changes encompassed by the **edit** change in changeset 521.

-   In changeset 132, you merged from **$/BranchA/File1.txt** to **$/BranchB/File1.txt**. The changes included in that merge included **edit** changes in changesets 92 and 104. In changeset 162, you roll back changeset 132, which results in a **rollback** change and an **edit** change to **$/BranchB/File1.txt** that negates the edit changes in changesets 92 and 104.

### Exit Codes

The exit codes in the following table appear after you run the **tf rollback** command.

|**Exit Code**|**Description**|
|---|---|
|0|The operation rolled back all items successfully.|
|1|The operation rolled back at least one item successfully but could not roll back one or more items.|
|100|The operation could not roll back any items.|

## Examples
The following example negates the effect of changeset **23** on all items that were changed in that changeset.

    c:\workspace> tf rollback /changeset:C23

The following example negates the effect of changeset 23 on the file **a.txt**.

    c:\workspace> tf rollback /changeset:C23 a.txt

The following example changes the content of **a.txt** to match the version that was checked in with changeset 23.

    c:\workspace> tf rollback /toversion:C23 a.txt

The following example changes the content of **OurTeamProject** to match the last changeset that was applied on or before midnight on August 31, 2009.

    c:\workspace> tf rollback /toversion:D08/31/2009 /recursive $/OurTeamProject/
## Example: /keepmergehistory Option
When you roll back a changeset that includes a branch or a merge change, you usually want future merges between the same source and the same target to include those changes. However, you can use the **/keepmergehistory** option if you want future merges between the same source and the same target to exclude changesets that were encompassed in a past merge operation.

For example, you can use this command in the following situation:

1.  In On June 30, 2009, you perform a full merge of all items from **$/BranchA/** to **$/BranchB/**:

		c:\workspace> tf merge $/BranchA $/BranchB

    You check in this merge as part of changeset 292.

2.  In July, you make several changes **$/BranchA/Util.cs**. These changes are encompassed in changesets 297, 301, and 305.

3.  On August 1, 2009, you merge **$/BranchA/Util.cs** to **$/BranchB/Util.cs**:

		c:\workspace> tf merge $/BranchA/Util.cs $/BranchB/Util.cs

    You check in the change as part of changeset 314. The result of this operation is that the edits that you made in changesets 297, 301, and 305 to **$/BranchA/Util.cs** are now also applied to **$/BranchB/Util.cs**.

4.  A week later, you realize that the edits that you made to **$/BranchA/Util.cs** in July are not appropriate for **$/BranchB/Util.cs**. You can use the rollback command to negate these changes. When you use the rollback command to roll back a **merge** change or a **branch** change, you have a decision to make.

    -   If you want the changes that you made in July to **$/BranchA/Util.cs** to be re-applied to **$/BranchB/Util.cs** in future merges, you should type the following command:

			c:\workspace> tf rollback /changeset:314

    -   If you want the changes that you made in July to **$/BranchA/Util.cs** to never be re-applied to **$/BranchB/Util.cs** in future merges, you should type the following command:

			c:\workspace> tf rollback /changeset:314 /keepmergehistory

5.  A few weeks later, you merge **$/BranchA/** into **$/BranchB/**:

		c:\workspace> tf merge $/BranchA $/BranchB

    -   If you omitted the **/keepmergehistory** option, the **merge** change will apply to **$/BranchB/Util.cs** all changesets that were applied to **$/BranchA/Util.cs** since changeset 292, including changesets 297, 301, 305. In other words, a future merge will undo the **rollback** change.

    -   If you included the **/keepmergehistory** option, the merge operation will apply to **$/BranchB/Util.cs** all changesets that were applied to **$/BranchA/Util.cs** since changeset 292, excluding changesets 297, 301, and 305. In other words, a future merge will not undo the rollback change. Therefore, the content on **BranchA** might not match the content on **BranchB**.

## See Also

#### Reference

[Merge Command](merge-command.md)

#### Concepts

[Operations Available Only From the Command-Line (Team Foundation Version Control)](https://msdn.microsoft.com/library/ms194957)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
