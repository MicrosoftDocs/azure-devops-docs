---
title: Branch Command
titleSuffix: Azure Repos
description: Branch Command
ms.assetid: 2e075024-9830-4373-a3d4-ac6a194d133f
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Branch Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

The **branch** command copies an item or set of items, including metadata and version control history, from one location to another in the Team Foundation version control server and in the local workspace.

> [!NOTE]
> The results of this command are not reflected in the Team Foundation version control server until you perform a check-in operation. For more information, see [Check In Pending Changes](https://msdn.microsoft.com/library/ms181411).

**Required Permissions**

To use the **branch** command, you must have the **Read** permission for the source item and the **Check out** and **Merge** permissions for the target folder set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf branch olditem newitem [/version:versionspec] [/noget] [/lock:(none|checkin|checkout)] [/noprompt] [/silent] [/checkin] [/comment:("comment"|@commentfile)] [/author:authorname] [/login:username, [password]] [/recursive]
## Parameters

|**Argument**|**Description**|
|---|---|
|*olditem*|Specifies the name of the source file or folder being branched. The *olditem* may also contain version information in the format *item;version*.|
|*newitem*|Specifies the name of the destination file or folder or the parent folder for the destination. If *newitem* already exists and is a Team Foundation version control server folder, Team Foundation creates the branched items within it. Otherwise, *newitem* specifies the name of the destination file or folder. Conflicts can occur during check-in if the destination already exists.|
|*versionspec*|Provides a value for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be).|
|*comment*|Provides a comment about the branch.|
|*@commentfile*|Specifies the path of a file that contains the comment that is used for the branch.|
|*authorname*|The user-provided value for the **/author** option.|
|*username*|Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName* or *UserName*.|

<table><thead>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/version</strong></p></td>
	<td><p>The version of the item at which you want to create the branch. You can specify a version by:</p><ul><li><p>Date/time (D10/20/2005)</p></li><li><p>Changeset number (C1256)</p></li><li><p>Label (Lmylabel)</p></li><li><p>Latest version (T)</p></li><li><p>Workspace (Wworkspacename)</p></li></ul><p>If no version is provided, Team Foundation uses the following logic to decide which version of the item to copy to the new branch:</p><ul><li><p>If a Team Foundation version control server path is specified, then Team Foundation branches the item at the latest Team Foundation version control server version. For example, <strong>tf branch $/projects/help.cs</strong> uses the server version.</p></li><li><p>If a local path is specified for the source, Team Foundation uses the local, workspace version to create the new branch. For example, <strong>tf branch C:\314.cs</strong> uses the local workspace version.</p></li></ul><p>If you branch a file whose workspace version is older than the latest version in the Team Foundation version control server, the file is branched at the older version.</p></td></tr>
<tr>
	<td><p><strong>/lock</strong></p></td>
	<td><p>Prevents other users from checking in or checking out items until you check in your pending branch and associated changes. For more information, see <a href="understand-lock-types.md">Understanding Lock Types</a>.</p><p>Lock Options:</p><ul><li><p><strong>None</strong></p><p>Default. No lock is applied. If a lock exists on the file that you are creating a branch for, this option removes it.</p></li><li><p><strong>Checkin</strong></p><p>Other users can check out the specified items but they cannot check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.</p></li><li><p><strong>Checkout</strong></p><p>Prevents other users from checking in or checking out any one of the specified items until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.</p></li></ul></td></tr>
<tr>
	<td><p><strong>/noget</strong></p></td>
	<td><p>If this option is specified, local copies of the files and folders in the new branch are not created in the local workspace. However, local copies will be retrieved into the workspace the next time that you perform a recursive Get operation.</p><div class="alert"><div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml"><div class="mtps-row"><strong>Note:</strong></div><div class="mtps-row"> You can prevent items, such as the contents of an /images folder, from being retrieved to your workspace during recursive Get and Get Latest operations by cloaking a workspace folder. For more information, see <a href="workfold-command.md">Workfold Command</a>.
</div></div></div></td></tr>
<tr>
	<td><p><strong>/noprompt</strong></p></td>
	<td><p>Suppresses any prompts for input from you.</p></td></tr>
<tr>
	<td><p><strong>/silent</strong></p></td>
	<td><p>Implies <strong>/noget</strong> and specifies that output is not written to the Command Prompt window when you create a branch.</p></td></tr>
<tr>
	<td><p><strong>/checkin</strong></p></td>
	<td><p>Creates and checks in the branch to the server in one operation. This option does not create any pending changes in the local workspace.</p></td></tr>
<tr>
	<td><p><strong>/comment</strong></p></td>
	<td><p>Adds a comment to the new branch. This option is used only with the <strong>/checkin</strong> option.</p></td></tr>
<tr>
	<td><p><strong>/author</strong></p></td>
	<td><p>Identifies the author of the new branch. This option is used only with the <strong>/checkin</strong> option.</p></td></tr>
	<tr>
	<td><p><strong>/recursive</strong></p></td>
	<td><p>For folders branch all files inside, too</p></td></tr>
<tr>
	</tbody>
</table>

## Remarks
If you specify a local path such as c:\\00101 but do not specify a *versionspec*, Team Foundation uses the local workspace version as the basis for creating the new branch.

However, if you specify a server path such as $/00101/\*.cs and do not specify a *versionspec*, Team Foundation uses the latest Team Foundation version control server version as the basis for creating the new branch instead.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example creates a branch file that contains the latest workspace version of 314.cs, names it "314\_branch", and saves it to the current directory on disk and also to the Team Foundation version control server folder to which it maps.

    c:\projects>tf branch 314.cs 314_branch

The following example copies all the files without pending edits in the workspace version of 314.cs from its current Team Foundation version control server folder into the testdata Team Foundation version control server folder and from the current directory on disk to the working folder that maps to the testdata Team Foundation version control server folder.

    c:\projects>tf branch C:\314.cs $/testdata

The following example copies all the files without pending edits in the current workspace version of the testfiles folder and the files it contains for all items from its current Team Foundation version control server folder into the testfiles\_branch Team Foundation version control server folder and from c:\\testfiles into the local folder that maps to the testfiles\_branch Team Foundation version control server folder.

    c:\projects>tf branch C:\testfiles $/testfiles_branch

The following example creates a branch of 314.cs as it existed in changeset \#4 for the file. In the working folder on disk, as in the Team Foundation version control server, a branch file titled csharp\_branch is created.

    c:\projects>tf branch C:\314.cs;C4 csharp_branch

The following example creates a new branch of 314.cs as it was on 12/12/03. In the working folder on disk as in the Team Foundation version control server, a branch file titled 314\_branch is created.

    c:\projects>tf branch 314.cs;D12/12/03 314_branch

The following example branches the version of 314.cs to which the "Beta1" label was applied, names it "Beta1branch," and saves it to the current directory on disk in addition to the Team Foundation version control server folder to which the current directory maps.

    c:\projects>tf branch 314.cs;LBeta1 314_Beta1branch

## See Also

#### Tasks

[Branch Folders and Files](branch-folders-files.md)

#### Reference

[Branches Command](branches-command.md)

[Merge Command](merge-command.md)

#### Concepts

[Working with Changesets](find-view-changesets.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
