---
title: Destroy version-controlled files
titleSuffix: Azure Repos
description: See how to permanently destroy version-controlled files in Team Foundation Version Control (TFVC).
ms.assetid: 9be4d796-b448-4084-a102-a0e95e7b0053
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/31/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Destroy version-controlled files

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Over time, a version control server acquires a growing number of files and folders. This can cause problems as you try to manage disk space requirements. You might be forced to remove all the projects and their hierarchies from version control. For example, a project might be created for learning purposes only, or perhaps some files are contaminated with a virus. Therefore, as a TFVC administrator, occasionally you may have to destroy files and folders that are under version control.

The following procedure shows you how to destroy files and folders by using the `tf destroy` command. Although the files are permanently removed, you can retain the history associated with them. For more information about the options and arguments available for `tf destroy`, see [Destroy command (Team Foundation Version Control)](destroy-command-team-foundation-version-control.md).

> [!NOTE]
> The `destroy` operation is available only from the command line.

## Prerequisites

- To use the `destroy` command, you must be a member of the **Team Foundation Administrators** security group. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

- Before you run `tf destroy` without the `/keephistory` option, first delete the files you want to destroy. For more information, see [Delete files and folders from version control](delete-restore-files-folders.md). After you delete a file, its file name now includes a deletion ID. For example, if a file name is *aFile.cs*, after deletion the file name is *aFile.cs;x123*, where x123 is the deletion ID.

  After you delete the files, you can synchronize the TFVC warehouse. Otherwise the warehouse won't be synchronized with the destroyed items.

### To permanently destroy version-controlled files

In Windows, select **Start** and then type *Developer Command Prompt*. From the search results, select the developer command prompt for your Visual Studio version, such as **Developer Command Prompt for Visual Studio 2022**.

- To preview destroying the file *aFile.cs* without destroying it, enter at the command prompt:

  ```
  tf destroy /preview /i $/MyTeamProject/aFile.cs
  ```

  > [!NOTE]
  > The text in the command prompt window displays `Destroyed: $/MyTeamProject/aFile.cs`, but the file isn't actually destroyed when you use the `/preview` option.

- To destroy the file *aFile.cs*, enter at the command prompt:

  ```
  tf destroy /i $/MyTeamProject/aFile.cs
  ```

  This command displays information about possible pending changes and shelvesets in the command prompt window. If you specify `/i` or non-interactive, you aren't  prompted with a **Yes**, **No**, or **Yes to All** dialog before files are permanently removed.

- To destroy all the files in *aFolder* and at the same time retain their history, enter:

  ```
  tf destroy /keephistory $/MyTeamProject/aFolder
  ```

  > [!NOTE]
  > You can't specify `/preview` with `/keephistory`.

  This action retains the historical information about all the files in *aFolder*. You can use the `tf history` command to view the history of a file. You can also view the history in **Source Control Explorer** in Visual Studio. For more information, see [History command](history-command.md) and [Get the history of an item](get-history-item.md).

- Use the `/stopat` option to retain the historical information up to and including a `versionspec` value. The `versionspec` value can be the latest version, a specific changeset, or a date. For more information about `versionspec` values, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

  To destroy all the files in the project MyTeamProject, and at the same time retain the history for the files up to and including 10/23/2005, enter:

  ```
  tf destroy $/MyTeamProject /keephistory /stopat:D10/23/2005
  ```

- Use the `/startcleanup` option to immediately clean up the TFVC metadata of the files that are no longer referenced by Azure DevOps Server. Without this option, those metadata are removed when the database is maintained by a SQL process that runs every five days. Seven days after the TFVC metadata deletion, the content of the destroyed files will be deleted by another SQL process.

  To immediately destroy all the files in *aFolder*, enter:

  ```
  tf destroy /startcleanup $/MyTeamProject/aFolder
  ```

## Related articles

- [Move, rename, and delete version-controlled files and folders](rename-move-files-folders.md)
- [Destroy command (Team Foundation Version Control)](destroy-command-team-foundation-version-control.md)
- [Operations available only from the tf command line](what-is-tfvc.md#operations-available-only-from-the-tf-command-line)
- [Team Foundation Version Control command-line reference](use-team-foundation-version-control-commands.md)
