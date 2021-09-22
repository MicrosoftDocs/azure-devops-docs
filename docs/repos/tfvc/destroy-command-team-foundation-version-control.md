---
title: Destroy Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Destroy Command (Team Foundation Version Control)
ms.assetid: fc14da45-891e-4f18-bbc2-9829b80531db
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Destroy Command (Team Foundation Version Control)

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Use the **tf destroy** command to destroy, or permanently delete, version-controlled files from Team Foundation version control.

The destroy action cannot be reversed. You must not destroy files that are still needed. Sometimes you have to clean up version control systems. For example, if some files are infected with a computer virus, you have to remove them permanently from version control.

Before you run **tf destroy** without the **/keephistory** option, we recommend that you first delete the files you want to destroy. For more information, see [Delete Files and Folders from Version Control](delete-restore-files-folders.md).

After you delete the files you can synchronize the Team Foundation warehouse. Otherwise, the warehouse will not be synchronized with the destroyed items.

**Required Permissions**

To use the **destroy** command, you must belong to the **Team Foundation Administrators** security group. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf destroy [/keephistory] <itemspec1>[;<versionspec>][<itemspec2>...<itemspecN>] 
[/stopat:<versionspec>] [/preview] [/startcleanup] [/noprompt] [/silent] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]]
```

## Parameters

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
   *itemspec1* *[itemspec2...itemspecN]*
   :::column-end:::
   :::column span="3":::
   Specifies the server path of the file or folder to be destroyed. Use multiple *itemspec* values to delete multiple items. For example, `tf destroy $/TeamProject1 $/teamProject2 $/TeamProject3`.
   
   Local paths are not supported.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *versionspec*
   :::column-end:::
   :::column span="3":::
   Provides a version such as C58 for the **/keephistory** or **/stopat** options. The allowed values are date, tip, or a specific changeset. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN UserName* or *UserName.*
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains files that you want to destroy (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::

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
   **/keephistory**
   :::column-end:::
   :::column span="3":::
   Optional. Specifies that the history of a file is preserved even as its contents are destroyed. This cannot be specified with the **/preview** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/stopat**
   :::column-end:::
   :::column span="3":::
   Optional. Can be used only if **/keephistory** is specified also.
   
   Specifies the file version for the file, and the files that follow thereafter, for which the history is preserved.
   
   The default version for **/stopat** is tip (T) for the latest checked-in version of an item.
   
   You cannot use label or workspace *versionspec* values to specify an item for **/stopat** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/preview**
   :::column-end:::
   :::column span="3":::
   Displays in the Command Prompt window the files that would be destroyed. When **tf destroy** runs in the preview mode, the files are not actually destroyed.

   > [!Note]  
   > The text in the Command Prompt window displays the word &quot;Destroyed&quot; with each file that would be destroyed. However, the file is actually not destroyed when the **/preview** option is used.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/startcleanup**
   :::column-end:::
   :::column span="3":::
   Forces the TFVC metadata clean-up process to start immediately after the deletion finishes. If the user does not specify **/startcleanup**, the destroyed metadata clean-up process occurs when the database maintenance cleans up all the files that are no longer referenced by Visual Studio Team Foundation Server. By default, the clean-up is scheduled to run every 5 days. Seven days after the TFVC metadata are cleaned up the content will be deleted by another clean-up process. By default, this content clean-up process runs once each day.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   
   **/i**
   :::column-end:::
   :::column span="3":::
   Specifies that the destruction of files is non-interactive. **/i** is an alias for **/noprompt**.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/silent**
   :::column-end:::
   :::column span="3":::
   Specifies that, when you destroy files or folders, the output is not written to the command prompt window.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Team Foundation Server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks
When you use **tf destroy** to destroy version-control files, the application tier of Team Foundation Server receives the destroy request and checks to see whether you are a member of the **Team Foundation Administrators** security group. If you are not a member, the system displays an error-message dialog box that tells you that you do not have sufficient permissions to perform the operation.

After the system verifies your permissions, it runs the destroy command. This command deletes all file references, shelvesets, and pending changes. The actual destruction of files, which is a permanent deletion, happens the next time that the content that is no longer referenced by Team Foundation Server is cleaned up. You can also specify the **/startcleanup** option to clean up the files immediately after **tf destroy** runs.

If you run **tf destroy** without specifying **/i** and **/preview**, the system displays a console **Yes** or **No** prompt for each *filespec* value. Otherwise, you can specify **Yes to all**. If you do not specify **/keephistory**, you are prompted by an interactive text that warns of pending changes, if they exist. The interactive text points to **/preview** if you want more information about the changes. If you specify **/keephistory**, you are also prompted by **Yes**, **No**, or **All** text. If you select **Yes** or **All**, the destruction process starts, and the server paths to the destroyed items appear in the Command Prompt window.

```
Destroyed: <serverItem1>
Destroyed: <serverItem2>
Destroyed: ...
```

If you specified the *versionspec* value as a tip, the server paths displayed in the Command Prompt window include deletion IDs. For example, X123 might appear in the Command Prompt window.

If you use the **/preview** option, the files are not destroyed, but the command-line text displays the files that would be destroyed. For example, if, at the command-line, you type **tf destroy /preview $/Test1/MyProject/MyProject/Program.cs**, the command window displays this text:

Destroyed: $/Test1/MyProject/MyProject/Program.cs

However, the file is actually not destroyed because you used the **/preview** option.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).


### Effects of /keephistory on Other Version Control Operations

If you specify the **/keephistory** option to retain the history of destroyed files, the files are treated as destroyed by the following Team Foundation version control operations:

-   **Change content** If you try to change the content of a destroyed file, for example edit or branch, the system issues an error message that states the content has been destroyed.

-   **Branch, merge, or unshelve** If you try to branch, merge, or unshelve destroyed items, the system issues an error message that states the content of the items has been destroyed.

### Destroying Previously Deleted Items

If an item has already been deleted, a deletion ID is attached to it and results in a filename change.

### Effects of TF DESTROY on TFVC repo Code Search

Code Search does not handle TF DESTROY notifications and so using TF DESTROY for TFVC repos will not automatically delete files in the Search index.
As a result, these files appear in the code search results. To avoid these ghost files scenario, users are recommended to delete files before TF DESTROY operation. 

## Examples
### Description

The following example permanently deletes the file a.cs.

### Code

```
C:\pi\ws1>tf destroy $/proj/pi/a.cs
```

### Description

The following example deletes a folder, *aFolder*, type at the command line:

### Code

```
C:\tf delete $/MyTeamProject/aFolder
```

### Description

To destroy the deleted item, *aFolder*, you must type at the command line:

### Code

```
tf destroy $/MyTeamProject/sFolder;x123
```

Where x123 is the deletion ID.

## See Also

#### Tasks

[Destroy Version Controlled Files](destroy-version-controlled-files.md)

#### Concepts

[Operations Available Only From the Command-Line (Team Foundation Version Control)](/previous-versions/visualstudio/visual-studio-2010/ms194957(v=vs.100))

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))
