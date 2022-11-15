---
title: Download or get files from the server
titleSuffix: Azure Repos
description: Download or get files from the server in Team Foundation Version Control (TFVC).
ms.assetid: 33798544-9e9e-4200-b7d8-127fb088c735
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/01/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Download or get files from the server

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

In general, you should get the latest files from the server on a regular basis so that the code you develop is compatible with the code developed by others on your team, and to minimize the risk of creating bugs when you check in your code. You can download the latest version or a previous version of one or more files from your Azure DevOps server to your workspace on your dev machine.

## Prerequisites

You must be one of the **Contributors** for your project. To learn more, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Get the latest version of files

You should get the latest files from your server after you [set up your dev machine](set-up-team-foundation-version-control-your-dev-machine.md). Then you can begin developing your app.

Later, as you develop functionality in the workspace on your dev machine, your code is isolated from the changes that are made by other developers. But when you're ready, for example you've completed and checked in the code that completes a task, you should get the latest version of your team's files.

### To get the latest version of files

-   In Visual Studio [Source Control Explorer](use-source-control-explorer-manage-files-under-version-control.md), browse to the files or the folders that contain the files that you want to get. Right-click the files and choose **Get Latest Version**.

## Get a specific version of files

In special cases, for example to fix a regression bug, you might need to get and work with a specific version of one or more files.

> [!NOTE]
> Keep in mind that if you get an older version of a file, make changes to it, and then try to check it in, there's an increased chance that you'll need to [resolve conflicts](resolve-team-foundation-version-control-conflicts.md) before you can complete the check-in.

### To get a specific version of files from the History window

1.  In **Team Explorer** or **Source Control Explorer**, browse to the folder or file, right-click it, and choose **View History**.

2.  In the [History](get-history-item.md) window, right-click a version and choose **Get This Version**.

### To get a specific version of files from Source Control Explorer

1. In **Source Control Explorer**, browse to the files or the folders that contain the files you want to get, right-click the files, and select **Advanced** > **Get Specific Version**.

1. In the **Get** dialog box, choose an option from the **Type** drop-down list:

   - **Changeset** gets a version by specifying a [changeset](find-view-changesets.md). For more information, see [Find and view changesets](find-view-changesets.md).
   - **Date** gets a version by specifying a date. If selected, select a date in the **Date** list.
   - **Label** gets a version by specifying a [label](use-labels-take-snapshot-your-files.md). For more information, see [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md).
   - **Latest Version** gets the latest version on the server.
   - **Workspace Version** gets a version by specifying a [workspace](create-work-workspaces.md).

1. (Optional) Select the **Overwrite writable files that are not checked out** option.

   If selected, files from the server will overwrite all files that don't have the read-only attribute associated with them and aren't checked out. Only files on the server that are different will overwrite the files in the local workspace. By default, this option isn't selected.

   > [!TIP]
   > This option is equivalent to running the command [tf get /overwrite](get-command.md).

1. (Optional) Select the **Overwrite all files even if the local version matches the specified version** option. If selected, files from the server overwrite all files.

   > [!TIP]
   > This option is equivalent to running the following command: [tf get /force](get-command.md).

1. Choose **Get**.

1. A **Source Control Explorer** informational message appears. Select **OK**.

   If you chose **Latest Version**, the system updates the **Latest** column with the status **Yes**.

## Work from the command prompt

- The [LocalVersions command](localversions-command.md) displays the version of one or more items in your workspace.
- The [Get command](get-command.md) gets files from the server.

## Tips

- When you get files and folders from the server, the system also deletes any checked-in files from your local workspace that have been deleted from the server. Files that have been renamed or moved on the server are changed in your workspace to match the changes on the server.

- In **Source Control Explorer**, you can verify whether you have the latest version of a file in the **Latest** column. You can see specific version information about an item by right-clicking it and choosing **Advanced** > **Properties**.

- If you're using a [server workspace](decide-between-using-local-server-workspace.md), and you've accidentally deleted some files that you want to restore, you must use the [tf get /all](get-command.md) command to restore the deleted files.