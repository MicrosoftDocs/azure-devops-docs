---
title: Destroy Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Destroy Command (Team Foundation Version Control)
ms.assetid: fc14da45-891e-4f18-bbc2-9829b80531db
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Destroy Command (Team Foundation Version Control)

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Use the **tf destroy** command to destroy, or permanently delete, version-controlled files from Team Foundation version control.

The destroy action cannot be reversed. You must not destroy files that are still needed. Sometimes you have to clean up version control systems. For example, if some files are infected with a computer virus, you have to remove them permanently from version control.

Before you run **tf destroy** without the **/keephistory** option, we recommend that you first delete the files you want to destroy. For more information, see [Delete Files and Folders from Version Control](delete-restore-files-folders.md).

After you delete the files you can synchronize the Team Foundation warehouse. Otherwise, the warehouse will not be synchronized with the destroyed items.

**Required Permissions**

To use the **destroy** command, you must belong to the **Team Foundation Administrators** security group. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf destroy [/keephistory] <itemspec1>[;<versionspec>][<itemspec2>...<itemspecN>] 
    [/stopat:<versionspec>] [/preview] [/startcleanup] [/noprompt] [/silent] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]]
## Parameters

<table>
<thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>itemspec1</em> <em>[itemspec2...itemspecN]</em></p></td>
	<td><p>Specifies the server path of the file or folder to be destroyed. Use multiple <em>itemspec</em> values to delete multiple items. For example, <code>tf destroy $/TeamProject1 $/teamProject2 $/TeamProject3</code>.</p><p>Local paths are not supported.</p></td></tr>
<tr>
	<td><p><em>versionspec</em></p></td>
	<td><p>Provides a version such as C58 for the <strong>/keephistory</strong> or <strong>/stopat</strong> options. The allowed values are date, tip, or a specific changeset. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td></tr>
<tr>
	<td><p><em>username</em></p></td>
	<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName.</em></p></td></tr>
<tr>
	<td><p><em>TeamProjectCollectionUrl</em></p></td>
	<td><p>The URL of the project collection that contains files that you want to destroy (for example, http://myserver:8080/tfs/DefaultCollection).</p></td></tr></tbody>
</table>

<table><thead>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/keephistory</strong></p></td>
	<td><p>Optional. Specifies that the history of a file is preserved even as its contents are destroyed. This cannot be specified with the <strong>/preview</strong> option.</p></td></tr>
<tr>
	<td><p><strong>/stopat</strong></p></td>
	<td><p>Optional. Can be used only if <strong>/keephistory</strong> is specified also.</p><p>Specifies the file version for the file, and the files that follow thereafter, for which the history is preserved.</p><p>The default version for <strong>/stopat</strong> is tip (T) for the latest checked-in version of an item.</p><p>You cannot use label or workspace <em>versionspec</em> values to specify an item for <strong>/stopat</strong> option.</p></td></tr>
<tr>
	<td><p><strong>/preview</strong></p></td>
	<td><p>Displays in the Command Prompt window the files that would be destroyed. When <strong>tf destroy</strong> runs in the preview mode, the files are not actually destroyed.</p><strong>Note:</strong> The text in the Command Prompt window displays the word &quot;Destroyed&quot; with each file that would be destroyed. However, the file is actually not destroyed when the <strong>/preview</strong> option is used.</td></tr>
<tr>
	<td><p><strong>/startcleanup</strong></p></td>
	<td><p>Forces the TFVC metadata clean-up process to start immediately after the deletion finishes. If the user does not specify <strong>/startcleanup</strong>, the destroyed metadata clean-up process occurs when the database maintenance cleans up all the files that are no longer referenced by Visual Studio Team Foundation Server. By default, the clean-up is scheduled to run every 5 days. Seven days after the TFVC metadata are cleaned up the content will be deleted by another clean-up process. By default, this content clean-up process runs once each day.</p></td></tr>
<tr>
	<td><p><strong>/noprompt</strong></p><p><strong>/i</strong></p></td>
	<td><p>Specifies that the destruction of files is non-interactive. <strong>/i</strong> is an alias for <strong>/noprompt</strong>.</p></td></tr>
<tr>
	<td><p><strong>/silent</strong></p></td>
	<td><p>Specifies that, when you destroy files or folders, the output is not written to the command prompt window.</p></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>Specifies the user name and password to authenticate the user with Team Foundation Server.</p></td></tr>
<tr>
	<td><p><strong>/collection</strong></p></td>
	<td><p>Specifies the project collection.</p></td></tr></tbody>
</table>

## Remarks
When you use **tf destroy** to destroy version-control files, the application tier of Team Foundation Server receives the destroy request and checks to see whether you are a member of the **Team Foundation Administrators** security group. If you are not a member, the system displays an error-message dialog box that tells you that you do not have sufficient permissions to perform the operation.

After the system verifies your permissions, it runs the destroy command. This command deletes all file references, shelvesets, and pending changes. The actual destruction of files, which is a permanent deletion, happens the next time that the content that is no longer referenced by Team Foundation Server is cleaned up. You can also specify the **/startcleanup** option to clean up the files immediately after **tf destroy** runs.

If you run **tf destroy** without specifying **/i** and **/preview**, the system displays a console **Yes** or **No** prompt for each *filespec* value. Otherwise, you can specify **Yes to all**. If you do not specify **/keephistory**, you are prompted by an interactive text that warns of pending changes, if they exist. The interactive text points to **/preview** if you want more information about the changes. If you specify **/keephistory**, you are also prompted by **Yes**, **No**, or **All** text. If you select **Yes** or **All**, the destruction process starts, and the server paths to the destroyed items appear in the Command Prompt window.

    Destroyed: <serverItem1>
    Destroyed: <serverItem2>
    Destroyed: ...

If you specified the *versionspec* value as a tip, the server paths displayed in the Command Prompt window include deletion IDs. For example, X123 might appear in the Command Prompt window.

If you use the **/preview** option, the files are not destroyed, but the command-line text displays the files that would be destroyed. For example, if, at the command-line, you type **tf destroy /preview $/Test1/MyProject/MyProject/Program.cs**, the command window displays this text:

Destroyed: $/Test1/MyProject/MyProject/Program.cs

However, the file is actually not destroyed because you used the **/preview** option.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### Effects of /keephistory on Other Version Control Operations

If you specify the **/keephistory** option to retain the history of destroyed files, the files are treated as destroyed by the following Team Foundation version control operations:

-   **Change content   **If you try to change the content of a destroyed file, for example edit or branch, the system issues an error message that states the content has been destroyed.

-   **Branch, merge, or unshelve   **If you try to branch, merge, or unshelve destroyed items, the system issues an error message that states the content of the items has been destroyed.

### Destroying Previously Deleted Items

If an item has already been deleted, a deletion ID is attached to it and results in a filename change.
## Examples
### Description

The following example permanently deletes the file a.cs.

### Code

    C:\pi\ws1>tf destroy $/proj/pi/a.cs

### Description

The following example deletes a folder, *aFolder*, type at the command line:

### Code

    C:\tf delete $/MyTeamProject/aFolder

### Description

To destroy the deleted item, *aFolder*, you must type at the command line:

### Code

    tf destroy $/MyTeamProject/sFolder;x123

Where x123 is the deletion ID.

## See Also

#### Tasks

[Destroy Version Controlled Files](destroy-version-controlled-files.md)

#### Concepts

[Operations Available Only From the Command-Line (Team Foundation Version Control)](https://msdn.microsoft.com/library/ms194957)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
