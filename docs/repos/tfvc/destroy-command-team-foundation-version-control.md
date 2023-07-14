---
title: Destroy command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to destroy, or permanently delete, files and folders in Team Foundation Version Control (TFVC).
ms.assetid: fc14da45-891e-4f18-bbc2-9829b80531db
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/31/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Destroy command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Use the `tf destroy` command to destroy, or permanently delete, version-controlled files from Team Foundation Version Control (TFVC).
> [!NOTE]
> Deleting a TFVC repository inside Azure Devops is not allowed once it has been created. The command `tf destroy` will only  destroy, or permanently delete, version-controlled files or folders but will not delete the TFVC repository, it will still appear in list of options with message deleted. 

Sometimes you have to clean up version control systems. For example, if some files are infected with a computer virus, you have to remove them permanently from version control. Don't destroy files that are still needed. The destroy action can't be reversed.

Before you run `tf destroy` without the `/keephistory` option, first delete the files you want to destroy. For more information, see [Delete files and folders from version control](delete-restore-files-folders.md).

After you delete the files, you can synchronize the TFVC warehouse. Otherwise, the warehouse won't be synchronized with the destroyed items.

## Prerequisites

To use the `destroy` command, you must belong to the **Team Foundation Administrators** security group. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax
```
tf destroy [/keephistory] <itemspec1>[;<versionspec>][<itemspec2>...<itemspecN>] 
[/stopat:<versionspec>] [/preview] [/startcleanup] [/noprompt] [/silent] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]]
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
   `<itemspec1> [<itemspec2>...<itemspecN>]`
   :::column-end:::
   :::column span="3":::
   Specifies the server path of the file or folder to be destroyed. Use multiple `itemspec` values to delete multiple items. For example, `tf destroy $/TeamProject1 $/teamProject2 $/TeamProject3`.
   
   Local paths aren't supported.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<versionspec>`
   :::column-end:::
   :::column span="3":::
   Provides a version such as `C58` for the `/keephistory` or `/stopat` options. The allowed values are `date`, `tip`, or a specific changeset. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
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
:::row:::
   :::column span="1":::
   `TeamProjectCollectionUrl`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains files that you want to destroy, for example, `http://myserver:8080/tfs/DefaultCollection`.
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
   `/keephistory`
   :::column-end:::
   :::column span="3":::
   Optional. Specifies that the history of a file is preserved even as its contents are destroyed. This option can't be specified with the `/preview` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/stopat`
   :::column-end:::
   :::column span="3":::
   Optional. Can be used only if `/keephistory` is specified also.
   
   Specifies the file version for the file, and the files that follow thereafter, for which the history is preserved.
   
   The default version for `/stopat` is `tip` (T) for the latest checked-in version of an item.
   
   You can't use label or workspace `versionspec` values to specify an item for the `/stopat` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/preview`
   :::column-end:::
   :::column span="3":::
   Displays the files that would be destroyed in the command prompt window. When `tf destroy` runs in preview mode, the files aren't actually destroyed.

   > [!Note]
   > The text in the command prompt window displays the word **Destroyed** with each file that would be destroyed. However, the file is actually not destroyed when the `/preview` option is used.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/startcleanup`
   :::column-end:::
   :::column span="3":::
   Forces the TFVC metadata clean-up process to start immediately after the deletion finishes. If the user doesn't specify `/startcleanup`, the destroyed metadata clean-up process occurs when the database maintenance cleans up all the files that are no longer referenced by Azure DevOps Server. By default, the clean-up is scheduled to run every five days. Seven days after the TFVC metadata are cleaned up, the content is deleted by another clean-up process. By default, this content clean-up process runs once each day.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt` or `/i`
   :::column-end:::
   :::column span="3":::
   Specifies that the destruction of files is non-interactive. `/i` is an alias for `/noprompt`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/silent`
   :::column-end:::
   :::column span="3":::
   Specifies that, when you destroy files or folders, the output isn't written to the command prompt window.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with TFVC.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::

## Remarks

When you use `tf destroy` to destroy version-control files, the application tier of TFVC receives the destroy request and checks to see whether you're a member of the **Team Foundation Administrators** security group. If you aren't a member, the system displays an error-message dialog box that tells you that you don't have sufficient permissions to perform the operation.

After the system verifies your permissions, it runs the destroy command. This command deletes all file references, shelvesets, and pending changes. The actual destruction of files, which is a permanent deletion, happens the next time that the content that is no longer referenced by Azure DevOps Server is cleaned up. You can also specify the `/startcleanup` option to clean up the files immediately after `tf destroy` runs.

If you run `tf destroy` without specifying `/i` and `/preview`, the system displays a console **Yes** or **No** prompt for each `filespec` value. Otherwise, you can specify **Yes to All**. 

- If you don't specify `/keephistory`, you're prompted by an interactive text that warns of pending changes, if they exist. The interactive text points to `/preview` if you want more information about the changes.

- If you specify `/keephistory`, you're also prompted by **Yes**, **No**, or **Yes to All** text. If you select **Yes** or **Yes to All**, the destruction process starts, and the server paths to the destroyed items appear in the command prompt window.

```output
Destroyed: <serverItem1>
Destroyed: <serverItem2>
Destroyed: ...
```

If you specified the `versionspec` value as `tip`, the server paths displayed in the command prompt window include deletion IDs. For example, `Destroyed: $/Test1/MyProject;X123` might appear in the command prompt window.

If you use the `/preview` option, the files aren't destroyed, but the command-line text displays the files that would be destroyed. For example, if you enter `tf destroy /preview $/Test1/MyProject/MyProject/Program.cs` at the command-line, the command window displays this text:

`Destroyed: $/Test1/MyProject/MyProject/Program.cs`

However, the file is actually not destroyed because you used the `/preview` option.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).


### Effects of /keephistory on other version control operations

If you specify the `/keephistory` option to retain the history of destroyed files, the files are treated as destroyed by the following TFVC operations:

-   **Change content**. If you try to change the content of a destroyed file, for example edit or branch, the system issues an error message that states the content has been destroyed.

-   **Branch, merge, or unshelve**. If you try to branch, merge, or unshelve destroyed items, the system issues an error message that states the content of the items has been destroyed.

### Destroy previously deleted items

If an item has already been deleted, a deletion ID is attached to it and results in a filename change.

### Effects of tf destroy on TFVC repo code search

Code search doesn't handle `tf destroy` notifications, so using `tf destroy` for TFVC repos won't automatically delete files from the search index. As a result, these files appear in the code search results. To avoid these ghost files scenarios, delete files before the `tf destroy` operation.

## Examples

The following example permanently deletes the file *a.cs*.

```
tf destroy $/proj/pi/a.cs
```

The following example deletes a folder, *aFolder*:

```
tf delete $/MyTeamProject/aFolder
```

To destroy the deleted item *aFolder*, enter at the command line:

```
tf destroy $/MyTeamProject/aFolder;x123
```

where `x123` is the deletion ID.

## Related articles

- [Destroy version controlled files](destroy-version-controlled-files.md)
- [Operations available only from the tf command-line](what-is-tfvc.md#operations-available-only-from-the-tf-command-line)
